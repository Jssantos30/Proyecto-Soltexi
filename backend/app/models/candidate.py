"""
Modelo de Candidato para "Trabaje con Nosotros".
SOLTEXI SAS - Plataforma

Implementa almacenamiento de PDF directamente en PostgreSQL
usando LargeBinary para evitar dependencia de filesystem efímero.
"""
from sqlalchemy import Column, Integer, String, DateTime, LargeBinary, Boolean
from sqlalchemy.sql import func
from app.db.base import Base


class Candidate(Base):
    """
    Modelo para candidatos que aplican a ofertas laborales.
    
    Attributes:
        id: Identificador único autoincremental
        full_name: Nombre completo del candidato
        email: Correo electrónico
        phone: Teléfono de contacto
        city: Ciudad de residencia
        profession: Profesión o área de especialización
        cv_filename: Nombre original del archivo PDF subido
        cv_file_data: Datos binarios del PDF (BYTEA en PostgreSQL)
        cv_content_type: Tipo MIME del archivo
        accepts_data_policy: Aceptación de política de datos
        created_at: Fecha y hora de creación del registro
    """
    __tablename__ = "candidates"
    
    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    full_name = Column(String(200), nullable=False, index=True)
    email = Column(String(255), nullable=False, index=True)
    phone = Column(String(20), nullable=False)
    city = Column(String(100), nullable=False)
    profession = Column(String(200), nullable=False)
    
    # Almacenamiento de archivo PDF en la base de datos
    cv_filename = Column(String(255), nullable=False)
    cv_file_data = Column(LargeBinary, nullable=False)  # BYTEA en PostgreSQL
    cv_content_type = Column(String(100), default="application/pdf")
    
    # Cumplimiento legal Ley 1581 de 2012
    accepts_data_policy = Column(Boolean, default=False, nullable=False)
    
    # Auditoría
    created_at = Column(
        DateTime(timezone=True), 
        server_default=func.now(), 
        nullable=False
    )
    
    def __repr__(self) -> str:
        return f"<Candidate(id={self.id}, name='{self.full_name}', email='{self.email}')>"
