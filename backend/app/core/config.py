"""
Configuración central de la aplicación SOLTEXI SAS.
Usa variables de entorno para configuración sensible.
"""
from pydantic_settings import BaseSettings
from functools import lru_cache
from typing import List


class Settings(BaseSettings):
    """Configuración de la aplicación usando Pydantic Settings."""
    
    # Información de la aplicación
    APP_NAME: str = "SOLTEXI SAS - Plataforma"
    APP_VERSION: str = "1.0.0"
    DEBUG: bool = True
    
    # Base de datos - SQLite para desarrollo, PostgreSQL para producción
    DATABASE_URL: str = "sqlite:///./soltexi_dev.db"
    
    # Seguridad
    SECRET_KEY: str = "tu-clave-secreta-cambiar-en-produccion"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    
    # CORS - Orígenes permitidos
    CORS_ORIGINS: List[str] = [
        "http://localhost:5173",  # Vite dev server
        "http://localhost:3000",
        "https://soltexi-frontend.onrender.com",  # Producción
    ]
    
    # Configuración de archivos
    MAX_FILE_SIZE_MB: int = 5  # Tamaño máximo de PDF en MB
    ALLOWED_EXTENSIONS: List[str] = [".pdf"]
    
    class Config:
        env_file = ".env"
        case_sensitive = True


@lru_cache()
def get_settings() -> Settings:
    """Retorna instancia cacheada de configuración."""
    return Settings()


settings = get_settings()
