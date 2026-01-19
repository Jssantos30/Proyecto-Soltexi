"""
Modelo de PQRS (Peticiones, Quejas, Reclamos y Sugerencias).
SOLTEXI SAS - Plataforma

Implementa generación automática de número de radicado consecutivo.
"""
from sqlalchemy import Column, Integer, String, Text, DateTime, Enum
from sqlalchemy.sql import func
from app.db.base import Base
import enum


class PQRSType(str, enum.Enum):
    """Tipos de PQRS disponibles."""
    PETICION = "peticion"
    QUEJA = "queja"
    RECLAMO = "reclamo"
    SUGERENCIA = "sugerencia"
    FELICITACION = "felicitacion"


class PQRSStatus(str, enum.Enum):
    """Estados posibles de una PQRS."""
    PENDIENTE = "pendiente"
    EN_PROCESO = "en_proceso"
    RESUELTO = "resuelto"
    CERRADO = "cerrado"


class PQRS(Base):
    """
    Modelo para gestión de PQRS.
    
    Attributes:
        id: Identificador único autoincremental
        tracking_number: Número de radicado único (ej: PQR-2026-00001)
        type: Tipo de solicitud (Petición, Queja, Reclamo, Sugerencia)
        applicant_name: Nombre del solicitante
        applicant_email: Email del solicitante
        applicant_phone: Teléfono del solicitante
        subject: Asunto de la solicitud
        description: Descripción detallada
        status: Estado actual de la PQRS
        created_at: Fecha de creación
        updated_at: Última actualización
    """
    __tablename__ = "pqrs"
    
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    tracking_number = Column(String(20), unique=True, nullable=False, index=True)
    
    # Tipo y estado
    type = Column(
        Enum(PQRSType, name="pqrs_type_enum"),
        nullable=False,
        default=PQRSType.PETICION
    )
    status = Column(
        Enum(PQRSStatus, name="pqrs_status_enum"),
        nullable=False,
        default=PQRSStatus.PENDIENTE
    )
    
    # Datos del solicitante
    applicant_name = Column(String(200), nullable=False)
    applicant_email = Column(String(255), nullable=False, index=True)
    applicant_phone = Column(String(20), nullable=True)
    
    # Contenido de la solicitud
    subject = Column(String(300), nullable=False)
    description = Column(Text, nullable=False)
    
    # Respuesta (para admin)
    response = Column(Text, nullable=True)
    responded_at = Column(DateTime(timezone=True), nullable=True)
    
    # Auditoría
    created_at = Column(
        DateTime(timezone=True), 
        server_default=func.now(), 
        nullable=False
    )
    updated_at = Column(
        DateTime(timezone=True), 
        server_default=func.now(),
        onupdate=func.now()
    )
    
    def __repr__(self) -> str:
        return f"<PQRS(tracking_number='{self.tracking_number}', type='{self.type}', status='{self.status}')>"
