import { useState } from 'react'
import { Upload, FileText, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import toast from 'react-hot-toast'
import { createCandidate } from '../services/api'

const CandidateForm = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    city: '',
    profession: '',
    accepts_data_policy: false
  })
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    
    if (selectedFile) {
      // Validate file type
      if (selectedFile.type !== 'application/pdf') {
        toast.error('Solo se permiten archivos PDF')
        return
      }
      
      // Validate file size (5MB max)
      if (selectedFile.size > 5 * 1024 * 1024) {
        toast.error('El archivo no debe superar 5MB')
        return
      }
      
      setFile(selectedFile)
      setErrors(prev => ({ ...prev, file: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.full_name.trim()) {
      newErrors.full_name = 'El nombre es requerido'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El correo es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Correo electrónico inválido'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido'
    }
    
    if (!formData.city.trim()) {
      newErrors.city = 'La ciudad es requerida'
    }
    
    if (!formData.profession.trim()) {
      newErrors.profession = 'La profesión es requerida'
    }
    
    if (!file) {
      newErrors.file = 'Debe adjuntar su hoja de vida en PDF'
    }
    
    if (!formData.accepts_data_policy) {
      newErrors.accepts_data_policy = 'Debe aceptar la política de datos'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast.error('Por favor complete todos los campos requeridos')
      return
    }
    
    setLoading(true)
    
    try {
      const submitData = new FormData()
      submitData.append('full_name', formData.full_name)
      submitData.append('email', formData.email)
      submitData.append('phone', formData.phone)
      submitData.append('city', formData.city)
      submitData.append('profession', formData.profession)
      submitData.append('accepts_data_policy', formData.accepts_data_policy)
      submitData.append('cv_file', file)
      
      await createCandidate(submitData)
      
      toast.success('¡Su hoja de vida ha sido enviada exitosamente!')
      
      // Reset form
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        city: '',
        profession: '',
        accepts_data_policy: false
      })
      setFile(null)
      
    } catch (error) {
      const errorMessage = error.message || 'Error al enviar. Intente nuevamente.'
      toast.error(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="trabaje-con-nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Info side */}
          <div>
            <span className="inline-block bg-primary-100 text-primary-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              Únase a Nuestro Equipo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Trabaje con Nosotros
            </h2>
            <p className="text-secondary-600 mb-8 leading-relaxed">
              En SOLTEXI SAS buscamos profesionales comprometidos con la excelencia 
              en seguridad, salud ocupacional y sistemas de gestión. Si comparte nuestra 
              pasión por generar impacto positivo en las empresas colombianas, 
              ¡queremos conocerle!
            </p>
            
            <div className="space-y-4">
              {[
                'Profesionales en SST, Ingeniería y afines',
                'Técnicos en seguridad industrial',
                'Auditores de sistemas de gestión',
                'Consultores con experiencia en HSEQ'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-primary-600 flex-shrink-0" size={20} />
                  <span className="text-secondary-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form side */}
          <div className="card bg-secondary-50 border border-secondary-200">
            <h3 className="text-xl font-bold text-secondary-900 mb-6">
              Envíe su Hoja de Vida
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="full_name" className="label">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  placeholder="Ej: Juan Carlos Pérez López"
                  className={`input-field ${errors.full_name ? 'border-red-500' : ''}`}
                />
                {errors.full_name && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.full_name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="label">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="correo@ejemplo.com"
                  className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.email}
                  </p>
                )}
              </div>

              {/* Phone and City row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="label">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="315 3454884"
                    className={`input-field ${errors.phone ? 'border-red-500' : ''}`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.phone}
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="city" className="label">
                    Ciudad *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Ej: Aguachica"
                    className={`input-field ${errors.city ? 'border-red-500' : ''}`}
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.city}
                    </p>
                  )}
                </div>
              </div>

              {/* Profession */}
              <div>
                <label htmlFor="profession" className="label">
                  Profesión / Especialidad *
                </label>
                <input
                  type="text"
                  id="profession"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  placeholder="Ej: Ingeniero Industrial, Técnico en SST"
                  className={`input-field ${errors.profession ? 'border-red-500' : ''}`}
                />
                {errors.profession && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.profession}
                  </p>
                )}
              </div>

              {/* File upload */}
              <div>
                <label className="label">Hoja de Vida (PDF) *</label>
                <div 
                  className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
                    ${file ? 'border-primary-500 bg-primary-50' : 'border-secondary-300 hover:border-primary-400'}
                    ${errors.file ? 'border-red-500' : ''}`}
                  onClick={() => document.getElementById('cv_file').click()}
                >
                  <input
                    type="file"
                    id="cv_file"
                    accept=".pdf,application/pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  
                  {file ? (
                    <div className="flex items-center justify-center gap-3">
                      <FileText className="text-primary-600" size={24} />
                      <div className="text-left">
                        <p className="font-medium text-secondary-900">{file.name}</p>
                        <p className="text-sm text-secondary-500">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                      <CheckCircle className="text-primary-600" size={20} />
                    </div>
                  ) : (
                    <>
                      <Upload className="mx-auto text-secondary-400 mb-2" size={32} />
                      <p className="text-secondary-600">
                        Haga clic para seleccionar o arrastre su archivo
                      </p>
                      <p className="text-sm text-secondary-400 mt-1">
                        Solo archivos PDF (máx. 5MB)
                      </p>
                    </>
                  )}
                </div>
                {errors.file && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.file}
                  </p>
                )}
              </div>

              {/* Data policy checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="accepts_data_policy"
                  name="accepts_data_policy"
                  checked={formData.accepts_data_policy}
                  onChange={handleChange}
                  className="mt-1 w-5 h-5 text-primary-600 rounded border-secondary-300 focus:ring-primary-500"
                />
                <label htmlFor="accepts_data_policy" className="text-sm text-secondary-600">
                  Acepto la{' '}
                  <a href="#" className="text-primary-600 hover:underline font-medium">
                    política de tratamiento de datos personales
                  </a>{' '}
                  de acuerdo con la Ley 1581 de 2012 y autorizo el uso de mi información 
                  para procesos de selección. *
                </label>
              </div>
              {errors.accepts_data_policy && (
                <p className="text-red-500 text-sm flex items-center gap-1">
                  <AlertCircle size={14} /> {errors.accepts_data_policy}
                </p>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Upload size={20} />
                    Enviar Hoja de Vida
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CandidateForm
