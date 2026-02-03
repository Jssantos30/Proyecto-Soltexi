import { CheckCircle, Mail, FileText, Phone, MapPin, Users, Briefcase } from 'lucide-react'

const CandidateForm = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:soltexisas@gmail.com?subject=Hoja de Vida - Trabaje con Nosotros&body=Adjunto mi hoja de vida para ser considerado en futuros procesos de selección.%0D%0A%0D%0ANombre:%0D%0ATeléfono:%0D%0ACiudad:%0D%0AProfesión:'
  }

  return (
    <section id="trabaje-con-nosotros" className="py-12 bg-gradient-to-b from-white to-secondary-50/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Info side - más compacto */}
          <div>
            <span className="inline-flex items-center gap-2 bg-primary-100 text-primary-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
              <Users size={14} />
              Únase a Nuestro Equipo
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
              Trabaje con Nosotros
            </h2>
            <p className="text-secondary-600 text-sm mb-6 leading-relaxed">
              En SOLTEXI SAS buscamos profesionales comprometidos con la excelencia 
              en seguridad, salud ocupacional y sistemas de gestión. Si comparte nuestra 
              pasión por generar impacto positivo en las empresas colombianas, 
              ¡queremos conocerle!
            </p>
            
            <div className="grid grid-cols-2 gap-3">
              {[
                'Profesionales en SST',
                'Técnicos en seguridad',
                'Auditores de gestión',
                'Consultores HSEQ'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 bg-white p-2.5 rounded-lg border border-secondary-100 shadow-sm hover:shadow-md transition-shadow">
                  <CheckCircle className="text-primary-600 flex-shrink-0" size={16} />
                  <span className="text-secondary-700 text-xs font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact card side - más compacto */}
          <div className="bg-secondary-50 rounded-xl border border-secondary-200 p-5 shadow-lg">
            <div className="text-center mb-5">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="text-primary-600" size={26} />
              </div>
              <h3 className="text-lg font-bold text-secondary-900 mb-1">
                Envíe su Hoja de Vida
              </h3>
              <p className="text-secondary-600 text-xs">
                Para aplicar a nuestras vacantes, envíe su hoja de vida al siguiente correo:
              </p>
            </div>

            {/* Email destacado */}
            <div className="bg-white rounded-lg p-4 border border-secondary-200 mb-4">
              <p className="text-xs text-secondary-500 mb-1 text-center">Correo de contacto:</p>
              <a 
                href="mailto:soltexisas@gmail.com" 
                className="text-xl font-bold text-primary-600 hover:text-primary-700 transition-colors block text-center"
              >
                soltexisas@gmail.com
              </a>
            </div>

            {/* Instrucciones - más compactas */}
            <div className="mb-5">
              <h4 className="font-semibold text-secondary-900 text-sm mb-2">En su correo incluya:</h4>
              <div className="grid grid-cols-1 gap-2">
                <div className="flex items-center gap-2 text-secondary-600 text-xs">
                  <FileText className="text-primary-600 flex-shrink-0" size={14} />
                  <span>Hoja de vida actualizada (PDF)</span>
                </div>
                <div className="flex items-center gap-2 text-secondary-600 text-xs">
                  <Phone className="text-primary-600 flex-shrink-0" size={14} />
                  <span>Número de teléfono de contacto</span>
                </div>
                <div className="flex items-center gap-2 text-secondary-600 text-xs">
                  <MapPin className="text-primary-600 flex-shrink-0" size={14} />
                  <span>Ciudad de residencia</span>
                </div>
              </div>
            </div>

            {/* Botón de enviar email */}
            <button
              onClick={handleEmailClick}
              className="btn-primary w-full flex items-center justify-center gap-2 py-3 text-sm"
            >
              <Mail size={18} />
              Enviar Correo Electrónico
            </button>

            {/* Nota legal */}
            <p className="text-[10px] text-secondary-400 mt-3 text-center leading-relaxed">
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
