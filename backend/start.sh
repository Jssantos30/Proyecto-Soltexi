#!/bin/bash
# Script de inicio para Render
# SOLTEXI SAS - Backend

# Ejecutar migraciones si existen
# alembic upgrade head

# Iniciar servidor con Gunicorn + Uvicorn workers
exec gunicorn app.main:app \
    --workers 4 \
    --worker-class uvicorn.workers.UvicornWorker \
    --bind 0.0.0.0:${PORT:-8000} \
    --access-logfile - \
    --error-logfile - \
    --capture-output \
    --log-level info
