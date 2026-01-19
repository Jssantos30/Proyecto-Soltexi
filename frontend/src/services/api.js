import axios from 'axios'

// Configuración base de Axios
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

// Interceptor para manejo de errores
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.detail || 'Error de conexión'
    console.error('API Error:', message)
    return Promise.reject(error)
  }
)

// ============ CANDIDATOS ============

/**
 * Registrar nuevo candidato con hoja de vida
 * @param {FormData} formData - Datos del formulario incluyendo archivo PDF
 */
export const createCandidate = async (formData) => {
  const response = await api.post('/candidates', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  return response.data
}

/**
 * Obtener lista de candidatos
 * @param {Object} params - Parámetros de paginación y búsqueda
 */
export const getCandidates = async (params = {}) => {
  const response = await api.get('/candidates', { params })
  return response.data
}

/**
 * Obtener URL de descarga del CV
 * @param {number} candidateId - ID del candidato
 */
export const getCvDownloadUrl = (candidateId) => {
  return `${api.defaults.baseURL}/candidates/${candidateId}/download`
}

// ============ PQRS ============

/**
 * Crear nueva PQRS
 * @param {Object} pqrsData - Datos de la PQRS
 */
export const createPQRS = async (pqrsData) => {
  const response = await api.post('/pqrs', pqrsData)
  return response.data
}

/**
 * Consultar PQRS por número de radicado
 * @param {string} trackingNumber - Número de radicado
 */
export const trackPQRS = async (trackingNumber) => {
  const response = await api.get(`/pqrs/track/${trackingNumber}`)
  return response.data
}

/**
 * Obtener lista de PQRS
 * @param {Object} params - Parámetros de paginación y filtros
 */
export const getPQRSList = async (params = {}) => {
  const response = await api.get('/pqrs', { params })
  return response.data
}

export default api
