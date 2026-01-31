import { Mail, FileText, Clock, Shield, MessageSquare, HelpCircle, AlertTriangle, ThumbsUp, Lightbulb } from 'lucide-react'

const PQRSForm = () => {
  const pqrsTypes = [
    { 
      type: 'Petición', 
      icon: HelpCircle,
      description: 'Solicitud de información, documentos o servicios',
      response: '15 días hábiles',
      color: 'bg-blue-100 text-blue-600'
    },
    { 
      type: 'Queja', 
      icon: MessageSquare,
      description: 'Inconformidad con la conducta o actuación de un funcionario',
      response: '15 días hábiles',
      color: 'bg-orange-100 text-orange-600'
    },
    { 
      type: 'Reclamo', 
      icon: AlertTriangle,
      description: 'Exigencia por incumplimiento o irregularidad en el servicio',
      response: '15 días hábiles',
      color: 'bg-red-100 text-red-600'
    },
    { 
      type: 'Sugerencia', 
      icon: Lightbulb,
      description: 'Propuesta para mejorar nuestros servicios',
      response: '15 días hábiles',
      color: 'bg-yellow-100 text-yellow-600'
    },
    { 
      type: 'Felicitación', 
      icon: ThumbsUp,
      description: 'Reconocimiento por un buen servicio recibido',
      response: 'Agradecimiento',
      color: 'bg-green-100 text-green-600'
    }
  ]

  const handleEmailClick = (type) => {
    const subject = encodeURIComponent(`PQRS - ${type} - SOLTEXI SAS`)
    const body = encodeURIComponent(
      `Tipo de solicitud: ${type}\n\n` +
      `DATOS DEL SOLICITANTE:\n` +
      `Nombre completo: \n` +
      `Número de identificación: \n` +
      `Dirección de notificación: \n` +
      `Teléfono de contacto: \n` +
      `Correo electrónico: \n\n` +
      `ASUNTO:\n[Escriba aquí el asunto de su solicitud]\n\n` +
      `DESCRIPCIÓN DETALLADA:\n[Describa detalladamente su petición, queja, reclamo, sugerencia o felicitación]\n\n` +
      `DOCUMENTOS ANEXOS:\n[Liste los documentos que adjunta, si aplica]\n\n` +
      `---\n` +
      `Nota: De acuerdo con la Ley 1755 de 2015, recibirá respuesta en los términos establecidos por la ley.`
    )
    window.location.href = `mailto:soltexisas@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="pqrs" className="py-20 bg-secondary-900">
      <div className="max-w-5xl mx-auto px-4">
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

        {/* Main card */}
        <div className="card bg-white mb-8">
          {/* Header con email */}
          <div className="text-center pb-8 border-b border-secondary-200">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-primary-600" size={36} />
            </div>
            <h3 className="text-xl font-bold text-secondary-900 mb-2">
              Envíe su PQRS por Correo Electrónico
            </h3>
            <p className="text-secondary-600 mb-4">
              Para radicar su solicitud, envíe un correo a:
            </p>
            <a 
              href="mailto:soltexisas@gmail.com" 
              className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors"
            >
              soltexisas@gmail.com
            </a>
          </div>

          {/* Tipos de PQRS */}
          <div className="py-8">
            <h4 className="font-semibold text-secondary-900 mb-6 text-center">
              Seleccione el tipo de solicitud para abrir su cliente de correo:
            </h4>
            <div className="grid md:grid-cols-5 gap-4">
              {pqrsTypes.map((item) => {
                const IconComponent = item.icon
                return (
                  <button
                    key={item.type}
                    onClick={() => handleEmailClick(item.type)}
                    className="p-4 rounded-xl border-2 border-secondary-200 hover:border-primary-500 hover:shadow-lg transition-all text-center group"
                  >
                    <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                      <IconComponent size={24} />
                    </div>
                    <span className="font-semibold text-secondary-900 block mb-1">{item.type}</span>
                    <span className="text-xs text-secondary-500">{item.description}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Información requerida */}
          <div className="py-8 border-t border-secondary-200">
            <h4 className="font-semibold text-secondary-900 mb-4 flex items-center gap-2">
              <FileText className="text-primary-600" size={20} />
              Información requerida en su solicitud:
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-secondary-600">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold">•</span>
                  Nombre completo del solicitante
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold">•</span>
                  Número de identificación (CC, NIT)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold">•</span>
                  Dirección de notificación
                </li>
              </ul>
              <ul className="space-y-2 text-secondary-600">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold">•</span>
                  Teléfono de contacto
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold">•</span>
                  Descripción clara y detallada de la solicitud
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold">•</span>
                  Documentos de soporte (si aplica)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tiempos de respuesta - Ley 1755 de 2015 */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="card bg-secondary-800 border border-secondary-700">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="text-primary-400" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Tiempos de Respuesta</h4>
                <p className="text-secondary-300 text-sm">
                  De acuerdo con la <strong>Ley 1755 de 2015</strong>, los términos de respuesta son:
                </p>
                <ul className="mt-3 space-y-1 text-secondary-400 text-sm">
                  <li>• Peticiones generales: <strong className="text-white">15 días hábiles</strong></li>
                  <li>• Consultas: <strong className="text-white">30 días hábiles</strong></li>
                  <li>• Documentos/información: <strong className="text-white">10 días hábiles</strong></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card bg-secondary-800 border border-secondary-700">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="text-primary-400" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Protección de Datos</h4>
                <p className="text-secondary-300 text-sm">
                  Su información será tratada conforme a la <strong>Ley 1581 de 2012</strong> 
                  de protección de datos personales y nuestra política de privacidad.
                </p>
                <p className="mt-3 text-secondary-400 text-sm">
                  Sus datos solo serán utilizados para dar trámite a su solicitud.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Seguimiento */}
        <div className="card bg-white text-center">
          <h4 className="font-semibold text-secondary-900 mb-2">
            ¿Ya radicó su PQRS?
          </h4>
          <p className="text-secondary-600 mb-4">
            Para consultar el estado de su solicitud, envíe un correo indicando su número de radicado o 
            comuníquese con nosotros:
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:soltexisas@gmail.com?subject=Consulta estado PQRS&body=Número de radicado:%0D%0ANombre del solicitante:" 
              className="btn-primary inline-flex items-center gap-2"
            >
              <Mail size={18} />
              Consultar por Correo
            </a>
            <a 
              href="tel:+573153454884" 
              className="btn-outline inline-flex items-center gap-2"
            >
              📞 +57 315 345 4884
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PQRSForm
