"""
Schemas Pydantic para PQRS.
SOLTEXI SAS - Plataforma
"""
from pydantic import BaseModel, EmailStr, Field
from datetime import datetime
from typing import Optional
from app.models.pqrs import PQRSType, PQRSStatus


class PQRSBase(BaseModel):
    """Schema base para PQRS."""
    type: PQRSType = Field(
        ..., 
        description="Tipo de solicitud: peticion, queja, reclamo, sugerencia, felicitacion"
    )
    applicant_name: str = Field(
        ..., 
        min_length=3, 
        max_length=200,
        description="Nombre del solicitante"
    )
    applicant_email: EmailStr = Field(
        ..., 
        description="Correo electrónico del solicitante"
    )
    applicant_phone: Optional[str] = Field(
        None, 
        max_length=20,
        description="Teléfono de contacto (opcional)"
    )
    subject: str = Field(
        ..., 
        min_length=5, 
        max_length=300,
        description="Asunto de la solicitud"
    )
    description: str = Field(
        ..., 
        min_length=20,
        description="Descripción detallada de la solicitud"
    )


class PQRSCreate(PQRSBase):
    """Schema para crear una nueva PQRS."""
    pass


class PQRSResponse(BaseModel):
    """Schema de respuesta para PQRS."""
    id: int
    tracking_number: str
    type: PQRSType
    status: PQRSStatus
    applicant_name: str
    applicant_email: str
    applicant_phone: Optional[str]
    subject: str
    description: str
    response: Optional[str]
    created_at: datetime
    updated_at: datetime
    
    class Config:
        from_attributes = True


class PQRSListResponse(BaseModel):
    """Schema para lista de PQRS."""
    total: int
    pqrs_list: list[PQRSResponse]


class PQRSTrackingResponse(BaseModel):
    """Schema para consulta por número de radicado."""
    tracking_number: str
    type: PQRSType
    status: PQRSStatus
    subject: str
    created_at: datetime
    response: Optional[str]
    responded_at: Optional[datetime]
    
    class Config:
        from_attributes = True
