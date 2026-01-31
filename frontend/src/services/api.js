/**
 * API Service - Modo Informativo
 * 
 * Esta aplicación web es únicamente informativa.
 * Las funciones de API simulan respuestas exitosas para mantener
 * la funcionalidad de la interfaz de usuario.
 */

// ============ UTILIDADES ============

/**
 * Genera un número de radicado simulado
 * @returns {string} Número de radicado en formato PQRS-YYYYMMDD-XXXX
 */
const generateTrackingNumber = () => {
  const date = new Date()
  const dateStr = date.toISOString().slice(0, 10).replace(/-/g, '')
  const random = Math.floor(1000 + Math.random() * 9000)
  return `PQRS-${dateStr}-${random}`
}

/**
 * Simula un delay de red para mejor experiencia de usuario
 * @param {number} ms - Milisegundos de delay
 */
const simulateNetworkDelay = (ms = 800) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// ============ CANDIDATOS ============

/**
 * Simula el registro de un candidato
 * @param {FormData} formData - Datos del formulario
 * @returns {Promise<Object>} Respuesta simulada exitosa
 */
export const createCandidate = async (formData) => {
  await simulateNetworkDelay()
  
  return {
    success: true,
    message: 'Hoja de vida recibida correctamente',
    id: Date.now()
  }
}

/**
 * Simula obtener lista de candidatos
 * @returns {Promise<Array>} Lista vacía (modo informativo)
 */
export const getCandidates = async () => {
  await simulateNetworkDelay()
  return []
}

/**
 * Obtener URL de descarga del CV (no disponible en modo informativo)
 * @returns {string} URL placeholder
 */
export const getCvDownloadUrl = () => {
  return '#'
}

// ============ PQRS ============

/**
 * Simula la creación de una PQRS
 * @param {Object} pqrsData - Datos de la PQRS
 * @returns {Promise<Object>} Respuesta simulada con número de radicado
 */
export const createPQRS = async (pqrsData) => {
  await simulateNetworkDelay()
  
  return {
    success: true,
    tracking_number: generateTrackingNumber(),
    message: 'PQRS registrada correctamente'
  }
}

/**
 * Simula la consulta de una PQRS
 * @param {string} trackingNumber - Número de radicado
 * @returns {Promise<Object>} Información simulada de la PQRS
 */
export const trackPQRS = async (trackingNumber) => {
  await simulateNetworkDelay()
  
  // Simular que no se encuentra el radicado (comportamiento esperado en modo informativo)
  throw new Error('PQRS no encontrada')
}

/**
 * Simula obtener lista de PQRS
 * @returns {Promise<Array>} Lista vacía (modo informativo)
 */
export const getPQRSList = async () => {
  await simulateNetworkDelay()
  return []
}

// Exportación por defecto para compatibilidad
export default {
  createCandidate,
  getCandidates,
  getCvDownloadUrl,
  createPQRS,
  trackPQRS,
  getPQRSList
}
