"""
Router para gestión de Candidatos.
SOLTEXI SAS - Plataforma

Implementa endpoints para recibir hojas de vida (PDF)
y almacenarlas directamente en PostgreSQL como BYTEA.
"""
from fastapi import APIRouter, Depends, HTTPException, status, UploadFile, File, Form
from fastapi.responses import StreamingResponse
from sqlalchemy.orm import Session
from sqlalchemy import desc
from typing import Optional
from io import BytesIO

from app.db.session import get_db
from app.models.candidate import Candidate
from app.schemas.candidate import CandidateResponse, CandidateListResponse
from app.core.config import settings

router = APIRouter(prefix="/api/candidates", tags=["Candidatos"])

# Tamaño máximo de archivo en bytes (5MB por defecto)
MAX_FILE_SIZE = settings.MAX_FILE_SIZE_MB * 1024 * 1024


@router.post(
    "",
    response_model=CandidateResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Registrar nuevo candidato",
    description="Recibe datos del candidato y su hoja de vida en PDF. El archivo se almacena en la base de datos."
)
async def create_candidate(
    full_name: str = Form(..., min_length=3, max_length=200),
    email: str = Form(...),
    phone: str = Form(..., min_length=7, max_length=20),
    city: str = Form(..., min_length=2, max_length=100),
    profession: str = Form(..., min_length=3, max_length=200),
    accepts_data_policy: bool = Form(...),
    cv_file: UploadFile = File(..., description="Archivo PDF de hoja de vida"),
    db: Session = Depends(get_db)
):
    """
    Crear un nuevo registro de candidato con su hoja de vida.
    
    - **full_name**: Nombre completo
    - **email**: Correo electrónico
    - **phone**: Teléfono de contacto
    - **city**: Ciudad de residencia
    - **profession**: Profesión
    - **accepts_data_policy**: Aceptación de política de datos (requerido)
    - **cv_file**: Archivo PDF de la hoja de vida
    """
    # Validar aceptación de política de datos
    if not accepts_data_policy:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Debe aceptar la política de tratamiento de datos (Ley 1581 de 2012)"
        )
    
    # Validar tipo de archivo
    if not cv_file.filename:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Debe proporcionar un archivo"
        )
    
    file_extension = "." + cv_file.filename.split(".")[-1].lower()
    if file_extension not in settings.ALLOWED_EXTENSIONS:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Solo se permiten archivos: {', '.join(settings.ALLOWED_EXTENSIONS)}"
        )
    
    # Validar tipo MIME
    if cv_file.content_type != "application/pdf":
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="El archivo debe ser un PDF válido"
        )
    
    # Leer contenido del archivo
    file_content = await cv_file.read()
    
    # Validar tamaño de archivo
    if len(file_content) > MAX_FILE_SIZE:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"El archivo excede el tamaño máximo permitido de {settings.MAX_FILE_SIZE_MB}MB"
        )
    
    # Validar que sea un PDF válido (magic bytes)
    if not file_content.startswith(b'%PDF'):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="El archivo no es un PDF válido"
        )
    
    # Verificar si el email ya existe
    existing = db.query(Candidate).filter(Candidate.email == email).first()
    if existing:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Ya existe un registro con este correo electrónico"
        )
    
    # Crear registro de candidato con el PDF en la BD
    db_candidate = Candidate(
        full_name=full_name.strip(),
        email=email.strip().lower(),
        phone=phone.strip(),
        city=city.strip(),
        profession=profession.strip(),
        cv_filename=cv_file.filename,
        cv_file_data=file_content,  # Datos binarios del PDF
        cv_content_type=cv_file.content_type,
        accepts_data_policy=accepts_data_policy
    )
    
    db.add(db_candidate)
    db.commit()
    db.refresh(db_candidate)
    
    return db_candidate


@router.get(
    "",
    response_model=CandidateListResponse,
    summary="Listar candidatos",
    description="Obtiene lista paginada de candidatos registrados (para administradores)"
)
async def list_candidates(
    skip: int = 0,
    limit: int = 20,
    search: Optional[str] = None,
    db: Session = Depends(get_db)
):
    """
    Listar candidatos con paginación y búsqueda opcional.
    
    - **skip**: Registros a saltar (para paginación)
    - **limit**: Máximo de registros a retornar
    - **search**: Búsqueda por nombre o profesión
    """
    query = db.query(Candidate)
    
    # Filtro de búsqueda
    if search:
        search_term = f"%{search}%"
        query = query.filter(
            (Candidate.full_name.ilike(search_term)) |
            (Candidate.profession.ilike(search_term)) |
            (Candidate.city.ilike(search_term))
        )
    
    # Contar total
    total = query.count()
    
    # Obtener registros paginados
    candidates = query.order_by(desc(Candidate.created_at)).offset(skip).limit(limit).all()
    
    return CandidateListResponse(total=total, candidates=candidates)


@router.get(
    "/{candidate_id}",
    response_model=CandidateResponse,
    summary="Obtener candidato",
    description="Obtiene información de un candidato específico"
)
async def get_candidate(candidate_id: int, db: Session = Depends(get_db)):
    """Obtiene un candidato por su ID."""
    candidate = db.query(Candidate).filter(Candidate.id == candidate_id).first()
    
    if not candidate:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Candidato no encontrado"
        )
    
    return candidate


@router.get(
    "/{candidate_id}/download",
    summary="Descargar hoja de vida",
    description="Descarga el archivo PDF de la hoja de vida almacenado en la base de datos"
)
async def download_cv(candidate_id: int, db: Session = Depends(get_db)):
    """
    Descarga la hoja de vida (PDF) de un candidato.
    
    Recupera los datos binarios del PDF desde PostgreSQL
    y los retorna como un archivo descargable.
    """
    candidate = db.query(Candidate).filter(Candidate.id == candidate_id).first()
    
    if not candidate:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Candidato no encontrado"
        )
    
    if not candidate.cv_file_data:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="No se encontró archivo de hoja de vida"
        )
    
    # Crear stream desde los bytes almacenados en la BD
    file_stream = BytesIO(candidate.cv_file_data)
    
    # Nombre de archivo seguro para descarga
    safe_filename = f"CV_{candidate.full_name.replace(' ', '_')}_{candidate.id}.pdf"
    
    return StreamingResponse(
        file_stream,
        media_type=candidate.cv_content_type or "application/pdf",
        headers={
            "Content-Disposition": f'attachment; filename="{safe_filename}"',
            "Content-Length": str(len(candidate.cv_file_data))
        }
    )


@router.delete(
    "/{candidate_id}",
    status_code=status.HTTP_204_NO_CONTENT,
    summary="Eliminar candidato",
    description="Elimina un registro de candidato y su archivo asociado"
)
async def delete_candidate(candidate_id: int, db: Session = Depends(get_db)):
    """Elimina un candidato por su ID (para administradores)."""
    candidate = db.query(Candidate).filter(Candidate.id == candidate_id).first()
    
    if not candidate:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Candidato no encontrado"
        )
    
    db.delete(candidate)
    db.commit()
    
    return None
