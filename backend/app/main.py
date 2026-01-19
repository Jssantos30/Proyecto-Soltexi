"""
SOLTEXI SAS - Plataforma Backend
Aplicación FastAPI principal.

Soluciones Integrales & Consultoría Técnica
NIT: 901.138.435-2
Aguachica, Cesar - Colombia
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager

from app.core.config import settings
from app.db.session import engine
from app.db.base import Base
from app.routers import candidates, pqrs


@asynccontextmanager
async def lifespan(app: FastAPI):
    """
    Gestión del ciclo de vida de la aplicación.
    Crea las tablas de la base de datos al iniciar.
    """
    # Startup: Crear tablas si no existen
    Base.metadata.create_all(bind=engine)
    print("✅ Base de datos inicializada correctamente")
    yield
    # Shutdown: Limpieza si es necesario
    print("👋 Cerrando aplicación...")


# Crear aplicación FastAPI
app = FastAPI(
    title=settings.APP_NAME,
    description="""
## SOLTEXI SAS - API Backend

Plataforma web para **Soluciones Integrales & Consultoría Técnica**.

### Funcionalidades:
- **Candidatos**: Registro de hojas de vida con almacenamiento de PDF en base de datos
- **PQRS**: Sistema de Peticiones, Quejas, Reclamos y Sugerencias

### Contacto:
- 📧 Email: soltexisas@gmail.com
- 📱 Teléfono: +57 315 3454884
- 📍 Aguachica, Cesar - Colombia
    """,
    version=settings.APP_VERSION,
    lifespan=lifespan,
    docs_url="/api/docs",
    redoc_url="/api/redoc",
    openapi_url="/api/openapi.json"
)

# Configurar CORS para permitir comunicación con el frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Registrar routers
app.include_router(candidates.router)
app.include_router(pqrs.router)


@app.get("/", tags=["Health"])
async def root():
    """Endpoint raíz para verificar estado del servidor."""
    return {
        "status": "online",
        "app": settings.APP_NAME,
        "version": settings.APP_VERSION,
        "message": "Bienvenido a la API de SOLTEXI SAS"
    }


@app.get("/api/health", tags=["Health"])
async def health_check():
    """
    Health check endpoint para Render.
    Verifica que el servidor esté funcionando correctamente.
    """
    return {
        "status": "healthy",
        "service": "SOLTEXI Backend API",
        "database": "connected"
    }
