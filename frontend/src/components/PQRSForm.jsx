import { useState } from 'react'
import { Send, Search, AlertCircle, CheckCircle, Loader2, FileQuestion } from 'lucide-react'
import toast from 'react-hot-toast'
import { createPQRS, trackPQRS } from '../services/api'

const PQRSForm = () => {
  const [activeTab, setActiveTab] = useState('create') // 'create' or 'track'
  
  // Form state
  const [formData, setFormData] = useState({
    type: 'peticion',
    applicant_name: '',
    applicant_email: '',
    applicant_phone: '',
    subject: '',
    description: ''
  })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [trackingResult, setTrackingResult] = useState(null)
  const [trackingNumber, setTrackingNumber] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)

  const pqrsTypes = [
    { value: 'peticion', label: 'Petición', description: 'Solicitud de información o servicio' },
    { value: 'queja', label: 'Queja', description: 'Expresar inconformidad con un servicio' },
    { value: 'reclamo', label: 'Reclamo', description: 'Exigir respuesta por un derecho' },
    { value: 'sugerencia', label: 'Sugerencia', description: 'Proponer mejoras' },
    { value: 'felicitacion', label: 'Felicitación', description: 'Reconocer un buen servicio' }
  ]

  const statusLabels = {
    pendiente: { label: 'Pendiente', color: 'bg-yellow-100 text-yellow-800' },
    en_proceso: { label: 'En Proceso', color: 'bg-blue-100 text-blue-800' },
    resuelto: { label: 'Resuelto', color: 'bg-green-100 text-green-800' },
    cerrado: { label: 'Cerrado', color: 'bg-gray-100 text-gray-800' }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.applicant_name.trim()) {
      newErrors.applicant_name = 'El nombre es requerido'
    }
    
    if (!formData.applicant_email.trim()) {
      newErrors.applicant_email = 'El correo es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.applicant_email)) {
      newErrors.applicant_email = 'Correo electrónico inválido'
    }
    
    if (!formData.subject.trim() || formData.subject.length < 5) {
      newErrors.subject = 'El asunto debe tener al menos 5 caracteres'
    }
    
    if (!formData.description.trim() || formData.description.length < 20) {
      newErrors.description = 'La descripción debe tener al menos 20 caracteres'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast.error('Por favor complete los campos requeridos')
      return
    }
    
    setLoading(true)
    setSuccessMessage(null)
    
    try {
      const response = await createPQRS(formData)
      
      setSuccessMessage({
        tracking_number: response.tracking_number,
        message: '¡Su solicitud ha sido registrada exitosamente!'
      })
      
      toast.success('PQRS registrada correctamente')
      
      // Reset form but keep success message
      setFormData({
        type: 'peticion',
        applicant_name: '',
        applicant_email: '',
        applicant_phone: '',
        subject: '',
        description: ''
      })
      
    } catch (error) {
      const errorMessage = error.message || 'Error al enviar. Intente nuevamente.'
      toast.error(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  const handleTrack = async (e) => {
    e.preventDefault()
    
    if (!trackingNumber.trim()) {
      toast.error('Ingrese un número de radicado')
      return
    }
    
    setLoading(true)
    setTrackingResult(null)
    
    try {
      const response = await trackPQRS(trackingNumber.trim())
      setTrackingResult(response)
    } catch (error) {
      toast.error('No se encontró una PQRS con ese número de radicado')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="pqrs" className="py-20 bg-secondary-900">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-primary-600/20 text-primary-400 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Atención al Cliente
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sistema PQRS
          </h2>
          <p className="text-secondary-300 max-w-2xl mx-auto">
            Peticiones, Quejas, Reclamos, Sugerencias y Felicitaciones. 
            Su opinión es importante para mejorar nuestros servicios.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => { setActiveTab('create'); setSuccessMessage(null) }}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'create'
                ? 'bg-primary-600 text-white'
                : 'bg-secondary-800 text-secondary-300 hover:bg-secondary-700'
            }`}
          >
            <Send size={18} className="inline mr-2" />
            Crear PQRS
          </button>
          <button
            onClick={() => { setActiveTab('track'); setTrackingResult(null) }}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'track'
                ? 'bg-primary-600 text-white'
                : 'bg-secondary-800 text-secondary-300 hover:bg-secondary-700'
            }`}
          >
            <Search size={18} className="inline mr-2" />
            Consultar Estado
          </button>
        </div>

        {/* Create PQRS Form */}
        {activeTab === 'create' && (
          <div className="card bg-white">
            {successMessage ? (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-primary-600" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                  {successMessage.message}
                </h3>
                <p className="text-secondary-600 mb-6">
                  Guarde su número de radicado para consultar el estado:
                </p>
                <div className="inline-block bg-primary-100 border-2 border-primary-500 rounded-lg px-8 py-4 mb-6">
                  <p className="text-sm text-primary-600 font-medium mb-1">Número de Radicado</p>
                  <p className="text-3xl font-bold text-primary-700">{successMessage.tracking_number}</p>
                </div>
                <p className="text-secondary-500 text-sm mb-6">
                  Le enviaremos una copia a su correo electrónico.
                </p>
                <button
                  onClick={() => setSuccessMessage(null)}
                  className="btn-primary"
                >
                  Crear Nueva PQRS
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Type selection */}
                <div>
                  <label className="label">Tipo de Solicitud *</label>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {pqrsTypes.map((type) => (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, type: type.value }))}
                        className={`p-3 rounded-lg border-2 transition-all text-center ${
                          formData.type === type.value
                            ? 'border-primary-500 bg-primary-50 text-primary-700'
                            : 'border-secondary-200 hover:border-secondary-300'
                        }`}
                      >
                        <span className="font-medium block">{type.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="pqrs_name" className="label">Nombre Completo *</label>
                    <input
                      type="text"
                      id="pqrs_name"
                      name="applicant_name"
                      value={formData.applicant_name}
                      onChange={handleChange}
                      placeholder="Su nombre completo"
                      className={`input-field ${errors.applicant_name ? 'border-red-500' : ''}`}
                    />
                    {errors.applicant_name && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle size={14} /> {errors.applicant_name}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="pqrs_email" className="label">Correo Electrónico *</label>
                    <input
                      type="email"
                      id="pqrs_email"
                      name="applicant_email"
                      value={formData.applicant_email}
                      onChange={handleChange}
                      placeholder="correo@ejemplo.com"
                      className={`input-field ${errors.applicant_email ? 'border-red-500' : ''}`}
                    />
                    {errors.applicant_email && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle size={14} /> {errors.applicant_email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone (optional) */}
                <div>
                  <label htmlFor="pqrs_phone" className="label">Teléfono (opcional)</label>
                  <input
                    type="tel"
                    id="pqrs_phone"
                    name="applicant_phone"
                    value={formData.applicant_phone}
                    onChange={handleChange}
                    placeholder="315 3454884"
                    className="input-field"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="pqrs_subject" className="label">Asunto *</label>
                  <input
                    type="text"
                    id="pqrs_subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Resuma brevemente su solicitud"
                    className={`input-field ${errors.subject ? 'border-red-500' : ''}`}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="pqrs_description" className="label">
                    Descripción Detallada *
                  </label>
                  <textarea
                    id="pqrs_description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Describa detalladamente su petición, queja, reclamo o sugerencia..."
                    className={`input-field resize-none ${errors.description ? 'border-red-500' : ''}`}
                  />
                  <p className="text-sm text-secondary-500 mt-1">
                    {formData.description.length}/20 caracteres mínimo
                  </p>
                  {errors.description && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.description}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Enviar Solicitud
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        )}

        {/* Track PQRS */}
        {activeTab === 'track' && (
          <div className="card bg-white">
            <form onSubmit={handleTrack} className="space-y-5">
              <div>
                <label htmlFor="tracking_number" className="label">
                  Número de Radicado
                </label>
                <div className="flex gap-4">
                  <input
                    type="text"
                    id="tracking_number"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value.toUpperCase())}
                    placeholder="Ej: PQR-2026-00001"
                    className="input-field flex-1"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary px-8"
                  >
                    {loading ? (
                      <Loader2 className="animate-spin" size={20} />
                    ) : (
                      <Search size={20} />
                    )}
                  </button>
                </div>
              </div>
            </form>

            {/* Tracking Result */}
            {trackingResult && (
              <div className="mt-8 p-6 bg-secondary-50 rounded-lg border">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-secondary-500">Radicado</p>
                    <p className="text-xl font-bold text-secondary-900">
                      {trackingResult.tracking_number}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusLabels[trackingResult.status]?.color}`}>
                    {statusLabels[trackingResult.status]?.label}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-secondary-500">Tipo</p>
                    <p className="text-secondary-900 capitalize">{trackingResult.type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-secondary-500">Asunto</p>
                    <p className="text-secondary-900">{trackingResult.subject}</p>
                  </div>
                  <div>
                    <p className="text-sm text-secondary-500">Fecha de creación</p>
                    <p className="text-secondary-900">
                      {new Date(trackingResult.created_at).toLocaleDateString('es-CO', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                  
                  {trackingResult.response && (
                    <div className="pt-4 border-t">
                      <p className="text-sm text-secondary-500">Respuesta</p>
                      <p className="text-secondary-900 bg-white p-4 rounded mt-2">
                        {trackingResult.response}
                      </p>
                      {trackingResult.responded_at && (
                        <p className="text-xs text-secondary-400 mt-2">
                          Respondido el{' '}
                          {new Date(trackingResult.responded_at).toLocaleDateString('es-CO')}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Empty state */}
            {!trackingResult && !loading && (
              <div className="text-center py-12 text-secondary-400">
                <FileQuestion size={48} className="mx-auto mb-4 opacity-50" />
                <p>Ingrese su número de radicado para consultar el estado</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default PQRSForm
