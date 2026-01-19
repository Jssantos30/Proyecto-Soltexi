"""
Router para gestión de PQRS.
SOLTEXI SAS - Plataforma

Implementa generación automática de número de radicado consecutivo.
"""
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from sqlalchemy import desc, func, extract
from datetime import datetime
from typing import Optional

from app.db.session import get_db
from app.models.pqrs import PQRS, PQRSStatus
from app.schemas.pqrs import (
    PQRSCreate, 
    PQRSResponse, 
    PQRSListResponse,
    PQRSTrackingResponse
)

router = APIRouter(prefix="/api/pqrs", tags=["PQRS"])


def generate_tracking_number(db: Session) -> str:
    """
    Genera un número de radicado único con formato: PQR-YYYY-NNNNN
    
    El consecutivo se reinicia cada año.
    Ejemplo: PQR-2026-00001, PQR-2026-00002, etc.
    """
    current_year = datetime.now().year
    
    # Contar PQRS del año actual
    count = db.query(func.count(PQRS.id)).filter(
        extract('year', PQRS.created_at) == current_year
    ).scalar()
    
    # Incrementar para el nuevo número
    next_number = (count or 0) + 1
    
    # Formato con ceros a la izquierda (5 dígitos)
    tracking_number = f"PQR-{current_year}-{next_number:05d}"
    
    return tracking_number


@router.post(
    "",
    response_model=PQRSResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Crear nueva PQRS",
    description="Registra una nueva Petición, Queja, Reclamo, Sugerencia o Felicitación"
)
async def create_pqrs(pqrs_data: PQRSCreate, db: Session = Depends(get_db)):
    """
    Crear una nueva PQRS.
    
    - **type**: Tipo de solicitud (peticion, queja, reclamo, sugerencia, felicitacion)
    - **applicant_name**: Nombre del solicitante
    - **applicant_email**: Correo electrónico
    - **applicant_phone**: Teléfono (opcional)
    - **subject**: Asunto de la solicitud
    - **description**: Descripción detallada
    
    Retorna el número de radicado generado automáticamente.
    """
    # Generar número de radicado único
    tracking_number = generate_tracking_number(db)
    
    # Crear registro de PQRS
    db_pqrs = PQRS(
        tracking_number=tracking_number,
        type=pqrs_data.type,
        applicant_name=pqrs_data.applicant_name.strip(),
        applicant_email=pqrs_data.applicant_email.strip().lower(),
        applicant_phone=pqrs_data.applicant_phone.strip() if pqrs_data.applicant_phone else None,
        subject=pqrs_data.subject.strip(),
        description=pqrs_data.description.strip(),
        status=PQRSStatus.PENDIENTE
    )
    
    db.add(db_pqrs)
    db.commit()
    db.refresh(db_pqrs)
    
    return db_pqrs


@router.get(
    "/track/{tracking_number}",
    response_model=PQRSTrackingResponse,
    summary="Consultar estado por radicado",
    description="Permite a los ciudadanos consultar el estado de su PQRS"
)
async def track_pqrs(tracking_number: str, db: Session = Depends(get_db)):
    """
    Consulta el estado de una PQRS por su número de radicado.
    
    - **tracking_number**: Número de radicado (ej: PQR-2026-00001)
    """
    pqrs = db.query(PQRS).filter(PQRS.tracking_number == tracking_number.upper()).first()
    
    if not pqrs:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="No se encontró una PQRS con ese número de radicado"
        )
    
    return pqrs


@router.get(
    "",
    response_model=PQRSListResponse,
    summary="Listar PQRS",
    description="Obtiene lista paginada de PQRS (para administradores)"
)
async def list_pqrs(
    skip: int = 0,
    limit: int = 20,
    status_filter: Optional[PQRSStatus] = None,
    db: Session = Depends(get_db)
):
    """
    Listar PQRS con paginación y filtros.
    
    - **skip**: Registros a saltar
    - **limit**: Máximo de registros
    - **status_filter**: Filtrar por estado
    """
    query = db.query(PQRS)
    
    # Filtro por estado
    if status_filter:
        query = query.filter(PQRS.status == status_filter)
    
    # Contar total
    total = query.count()
    
    # Obtener registros
    pqrs_list = query.order_by(desc(PQRS.created_at)).offset(skip).limit(limit).all()
    
    return PQRSListResponse(total=total, pqrs_list=pqrs_list)


@router.get(
    "/{pqrs_id}",
    response_model=PQRSResponse,
    summary="Obtener PQRS",
    description="Obtiene información detallada de una PQRS"
)
async def get_pqrs(pqrs_id: int, db: Session = Depends(get_db)):
    """Obtiene una PQRS por su ID."""
    pqrs = db.query(PQRS).filter(PQRS.id == pqrs_id).first()
    
    if not pqrs:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="PQRS no encontrada"
        )
    
    return pqrs


@router.patch(
    "/{pqrs_id}/respond",
    response_model=PQRSResponse,
    summary="Responder PQRS",
    description="Permite a administradores responder una PQRS"
)
async def respond_pqrs(
    pqrs_id: int,
    response_text: str,
    new_status: PQRSStatus = PQRSStatus.RESUELTO,
    db: Session = Depends(get_db)
):
    """
    Responder a una PQRS y actualizar su estado.
    
    - **pqrs_id**: ID de la PQRS
    - **response_text**: Texto de la respuesta
    - **new_status**: Nuevo estado (default: resuelto)
    """
    pqrs = db.query(PQRS).filter(PQRS.id == pqrs_id).first()
    
    if not pqrs:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="PQRS no encontrada"
        )
    
    pqrs.response = response_text.strip()
    pqrs.status = new_status
    pqrs.responded_at = datetime.now()
    
    db.commit()
    db.refresh(pqrs)
    
    return pqrs


@router.delete(
    "/{pqrs_id}",
    status_code=status.HTTP_204_NO_CONTENT,
    summary="Eliminar PQRS",
    description="Elimina un registro de PQRS"
)
async def delete_pqrs(pqrs_id: int, db: Session = Depends(get_db)):
    """Elimina una PQRS por su ID (para administradores)."""
    pqrs = db.query(PQRS).filter(PQRS.id == pqrs_id).first()
    
    if not pqrs:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="PQRS no encontrada"
        )
    
    db.delete(pqrs)
    db.commit()
    
    return None
