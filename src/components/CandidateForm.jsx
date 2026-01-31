import { CheckCircle, Mail, FileText, Phone, MapPin } from 'lucide-react'

const CandidateForm = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:soltexisas@gmail.com?subject=Hoja de Vida - Trabaje con Nosotros&body=Adjunto mi hoja de vida para ser considerado en futuros procesos de selección.%0D%0A%0D%0ANombre:%0D%0ATeléfono:%0D%0ACiudad:%0D%0AProfesión:'
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

          {/* Contact card side */}
          <div className="card bg-secondary-50 border border-secondary-200">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-primary-600" size={36} />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">
                Envíe su Hoja de Vida
              </h3>
              <p className="text-secondary-600">
                Para aplicar a nuestras vacantes, envíe su hoja de vida al siguiente correo electrónico:
              </p>
            </div>

            {/* Email destacado */}
            <div className="bg-white rounded-xl p-6 border border-secondary-200 mb-6">
              <p className="text-sm text-secondary-500 mb-2 text-center">Correo de contacto:</p>
              <a 
                href="mailto:soltexisas@gmail.com" 
                className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors block text-center"
              >
                soltexisas@gmail.com
              </a>
            </div>

            {/* Instrucciones */}
            <div className="space-y-4 mb-8">
              <h4 className="font-semibold text-secondary-900">En su correo incluya:</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <FileText className="text-primary-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-secondary-600">Hoja de vida actualizada (PDF)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-primary-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-secondary-600">Número de teléfono de contacto</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-primary-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-secondary-600">Ciudad de residencia</span>
                </div>
              </div>
            </div>

            {/* Botón de enviar email */}
            <button
              onClick={handleEmailClick}
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Enviar Correo Electrónico
            </button>

            {/* Nota legal */}
            <p className="text-xs text-secondary-400 mt-4 text-center">
              Al enviar su información, acepta nuestra política de tratamiento de datos 
              personales de acuerdo con la Ley 1581 de 2012.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CandidateForm
