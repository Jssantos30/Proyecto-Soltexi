"""
Schemas Pydantic para Candidatos.
SOLTEXI SAS - Plataforma
"""
from pydantic import BaseModel, EmailStr, Field, field_validator
from datetime import datetime
from typing import Optional
import re


class CandidateBase(BaseModel):
    """Schema base para candidatos."""
    full_name: str = Field(
        ..., 
        min_length=3, 
        max_length=200,
        description="Nombre completo del candidato"
    )
    email: EmailStr = Field(..., description="Correo electrónico válido")
    phone: str = Field(
        ..., 
        min_length=7, 
        max_length=20,
        description="Número de teléfono"
    )
    city: str = Field(
        ..., 
        min_length=2, 
        max_length=100,
        description="Ciudad de residencia"
    )
    profession: str = Field(
        ..., 
        min_length=3, 
        max_length=200,
        description="Profesión o área de especialización"
    )
    accepts_data_policy: bool = Field(
        ...,
        description="Aceptación de política de tratamiento de datos (Ley 1581 de 2012)"
    )
    
    @field_validator('phone')
    @classmethod
    def validate_phone(cls, v: str) -> str:
        """Valida formato de teléfono colombiano."""
        # Elimina espacios y guiones
        cleaned = re.sub(r'[\s\-\(\)]', '', v)
        if not re.match(r'^(\+57)?[0-9]{10}$', cleaned):
            # Permite formatos como: 3153454884, +573153454884
            if not re.match(r'^[0-9]{7,15}$', cleaned):
                raise ValueError('Formato de teléfono inválido')
        return v
    
    @field_validator('accepts_data_policy')
    @classmethod
    def validate_data_policy(cls, v: bool) -> bool:
        """Requiere aceptación obligatoria de política de datos."""
        if not v:
            raise ValueError('Debe aceptar la política de tratamiento de datos')
        return v


class CandidateCreate(CandidateBase):
    """Schema para crear candidato (sin archivo, se maneja por separado)."""
    pass


class CandidateResponse(BaseModel):
    """Schema de respuesta para candidato."""
    id: int
    full_name: str
    email: str
    phone: str
    city: str
    profession: str
    cv_filename: str
    accepts_data_policy: bool
    created_at: datetime
    
    class Config:
        from_attributes = True


class CandidateListResponse(BaseModel):
    """Schema para lista de candidatos."""
    total: int
    candidates: list[CandidateResponse]
