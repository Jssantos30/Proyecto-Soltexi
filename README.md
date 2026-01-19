# SOLTEXI SAS - Plataforma Web
## Soluciones Integrales & Consultoría Técnica

![SOLTEXI](https://img.shields.io/badge/SOLTEXI-SAS-16a34a?style=for-the-badge)
![FastAPI](https://img.shields.io/badge/FastAPI-0.109-009688?style=flat-square&logo=fastapi)
![React](https://img.shields.io/badge/React-18.2-61DAFB?style=flat-square&logo=react)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-336791?style=flat-square&logo=postgresql)
![Render](https://img.shields.io/badge/Deploy-Render-46E3B7?style=flat-square&logo=render)

---

## 📋 Descripción

Plataforma web corporativa para **SOLTEXI SAS**, empresa especializada en consultoría HSEQ y Sistemas de Gestión ubicada en Aguachica, Cesar - Colombia.

### Características principales:
- 🏠 Landing page profesional con información de servicios
- 📄 Sistema de recepción de hojas de vida (PDF almacenado en BD)
- 📝 Sistema PQRS con generación automática de radicados
- 🗺️ Mapa de cobertura nacional
- 📱 Diseño responsive (mobile-first)

---

## 🏗️ Arquitectura

```
soltexi-platform/
├── backend/                 # API FastAPI
│   ├── app/
│   │   ├── core/           # Configuración y seguridad
│   │   ├── db/             # Sesión de base de datos
│   │   ├── models/         # Modelos SQLAlchemy
│   │   ├── routers/        # Endpoints de la API
│   │   ├── schemas/        # Schemas Pydantic
│   │   └── main.py         # Aplicación principal
│   ├── requirements.txt
│   └── start.sh            # Script de inicio Gunicorn
├── frontend/               # SPA React + Vite
│   ├── src/
│   │   ├── components/     # Componentes React
│   │   ├── pages/          # Páginas
│   │   └── services/       # API client
│   ├── package.json
│   └── vite.config.js
└── render.yaml             # Infraestructura como código
```

---

## 🚀 Instalación Local

### Requisitos previos
- Python 3.11+
- Node.js 18+
- PostgreSQL 15+

### Backend

```bash
# Navegar al directorio backend
cd backend

# Crear entorno virtual
python -m venv venv

# Activar entorno virtual
# Windows:
venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate

# Instalar dependencias
pip install -r requirements.txt

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales de BD

# Iniciar servidor de desarrollo
uvicorn app.main:app --reload --port 8000
```

### Frontend

```bash
# Navegar al directorio frontend
cd frontend

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en:
- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:8000
- **Documentación API:** http://localhost:8000/api/docs

---

## 📡 Endpoints de la API

### Candidatos (Hojas de Vida)
| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/api/candidates` | Registrar candidato con PDF |
| GET | `/api/candidates` | Listar candidatos |
| GET | `/api/candidates/{id}` | Obtener candidato |
| GET | `/api/candidates/{id}/download` | Descargar PDF |
| DELETE | `/api/candidates/{id}` | Eliminar candidato |

### PQRS
| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/api/pqrs` | Crear nueva PQRS |
| GET | `/api/pqrs/track/{tracking_number}` | Consultar por radicado |
| GET | `/api/pqrs` | Listar PQRS |
| PATCH | `/api/pqrs/{id}/respond` | Responder PQRS |

---

## 🌐 Despliegue en Render

### Opción 1: Blueprint (Recomendado)

1. Fork este repositorio
2. Conecta tu cuenta de GitHub con Render
3. En Render Dashboard → "Blueprints" → "New Blueprint Instance"
4. Selecciona el repositorio
5. Render detectará automáticamente el `render.yaml`
6. Confirma y despliega

### Opción 2: Manual

1. **Base de datos PostgreSQL:**
   - Crear nuevo PostgreSQL en Render
   - Copiar la Connection String

2. **Backend:**
   - Nuevo Web Service → Python
   - Root Directory: `backend`
   - Build: `pip install -r requirements.txt`
   - Start: `bash start.sh`
   - Variables de entorno: DATABASE_URL, SECRET_KEY

3. **Frontend:**
   - Nuevo Static Site
   - Root Directory: `frontend`
   - Build: `npm install && npm run build`
   - Publish Directory: `dist`
   - Variables: VITE_API_URL

---

## 🔒 Seguridad

- ✅ Archivos PDF validados (magic bytes)
- ✅ Tamaño máximo de archivo: 5MB
- ✅ CORS configurado por ambiente
- ✅ Aceptación de política de datos (Ley 1581/2012)
- ✅ Preparado para autenticación JWT

---

## 📞 Contacto

**SOLTEXI SAS**  
NIT: 901.138.435-2

- 📍 Calle 6a No 22-36, Oficina 101, Aguachica, Cesar
- 📧 soltexisas@gmail.com
- 📱 +57 315 3454884

---

## 📄 Licencia

Este proyecto es propiedad de SOLTEXI SAS. Todos los derechos reservados.
