# SOLTEXI SAS - Plataforma Web Informativa
## Soluciones Integrales & Consultoría Técnica

![SOLTEXI](https://img.shields.io/badge/SOLTEXI-SAS-16a34a?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=flat-square&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)
![Render](https://img.shields.io/badge/Deploy-Render-46E3B7?style=flat-square&logo=render)

---

## 📋 Descripción

Sitio web informativo para **SOLTEXI SAS**, empresa especializada en consultoría HSEQ y Sistemas de Gestión ubicada en Aguachica, Cesar - Colombia.

### Características principales:
- 🏠 Landing page profesional con información de servicios
- 📋 Formulario de contacto para hojas de vida (informativo)
- 📝 Sistema PQRS informativo
- 🗺️ Mapa de cobertura nacional
- 📱 Diseño responsive (mobile-first)

---

## 🏗️ Estructura del Proyecto

```
Soltexisas/
├── src/                    # Código fuente React + Vite
│   ├── components/         # Componentes React
│   ├── pages/              # Páginas
│   └── main.jsx            # Punto de entrada
├── public/                 # Archivos estáticos
├── index.html              # HTML principal
├── package.json            # Dependencias
├── vite.config.js          # Configuración Vite
├── tailwind.config.js      # Configuración Tailwind
├── render.yaml             # Configuración despliegue
└── README.md
```

---

## 🚀 Instalación Local

### Requisitos previos
- Node.js 18+
- npm o yarn

### Instalación

```bash
# Navegar al directorio del proyecto
cd Soltexisas

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en:
- **Frontend:** http://localhost:5173

---

## 🛠️ Scripts disponibles
│   │   ├── components/     # Componentes React
│   │   ├── pages/          # Páginas
│   │   └── services/       # Servicios (simulados)
│   ├── public/             # Archivos estáticos
│   ├── package.json
│   └── vite.config.js
├── render.yaml             # Configuración de despliegue
└── README.md
```

---

## 🚀 Instalación Local

### Requisitos previos
- Node.js 18+
- npm o yarn

### Instalación

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

---

## �️ Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Genera build de producción |
| `npm run preview` | Previsualiza build de producción |
| `npm run lint` | Ejecuta linter de código |

---

## 🌐 Despliegue en Render

### Blueprint (Recomendado)

1. Fork este repositorio
2. Conecta tu cuenta de GitHub con Render
3. En Render Dashboard → "Blueprints" → "New Blueprint Instance"
4. Selecciona el repositorio
5. Render detectará automáticamente el `render.yaml`
6. Confirma y despliega

### Manual

1. Nuevo Static Site en Render
2. Root Directory: `frontend`
3. Build Command: `npm install && npm run build`
4. Publish Directory: `dist`

---

## 🔧 Tecnologías

- **React 18** - Biblioteca de UI
- **Vite** - Build tool y servidor de desarrollo
- **TailwindCSS** - Framework de estilos
- **React Router DOM** - Navegación SPA
- **Lucide React** - Iconos
- **React Hot Toast** - Notificaciones

---

## 📞 Contacto

**SOLTEXI SAS**  


- 📍 Calle 6a No 22-36, Oficina 101, Aguachica, Cesar
- 📧 info@soltexi.com
- 📱 +57 317 1896780

---

## 📄 Licencia

Este proyecto es propiedad de SOLTEXI SAS. Todos los derechos reservados.
