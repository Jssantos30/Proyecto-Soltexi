import { 
  Shield, 
  Leaf, 
  Award, 
  Truck, 
  Zap, 
  Settings,
  Users,
  ClipboardCheck,
  Recycle,
  HardHat,
  Wrench,
  AlertTriangle,
  MessageCircle,
  Phone,
  ArrowRight
} from 'lucide-react'

const services = [
  {
    category: "Sistemas de Gestión",
    description: "Implementación y certificación de sistemas de gestión empresarial",
    color: "primary",
    items: [
      {
        icon: Award,
        title: "ISO 9001",
        description: "Sistema de Gestión de Calidad para optimizar procesos y satisfacer clientes."
      },
      {
        icon: Leaf,
        title: "ISO 14001",
        description: "Sistema de Gestión Ambiental para reducir impacto y cumplir normativas."
      },
      {
        icon: Shield,
        title: "ISO 45001 / SG-SST",
        description: "Sistema de Seguridad y Salud en el Trabajo para proteger a su equipo."
      },
      {
        icon: ClipboardCheck,
        title: "RUC",
        description: "Registro Único de Contratistas para empresas del sector hidrocarburos."
      },
      {
        icon: Truck,
        title: "ISO 39001 - PESV",
        description: "Plan Estratégico de Seguridad Vial y gestión de riesgos en transporte."
      }
    ]
  },
  {
    category: "Consultoría Técnica",
    description: "Capacitación especializada y certificación de competencias",
    color: "secondary",
    items: [
      {
        icon: Zap,
        title: "Riesgo Eléctrico",
        description: "Capacitación RETIE y certificación para trabajo seguro con electricidad."
      },
      {
        icon: Wrench,
        title: "Riesgo Mecánico",
        description: "Prevención de accidentes con maquinaria y equipos industriales."
      },
      {
        icon: AlertTriangle,
        title: "Brigadas de Emergencia",
        description: "Formación de equipos de respuesta ante emergencias empresariales."
      },
      {
        icon: HardHat,
        title: "Trabajo en Alturas",
        description: "Certificación y recertificación según Resolución 4272 de 2021."
      }
    ]
  },
  {
    category: "Asesorías Especializadas",
    description: "Servicios complementarios para su empresa",
    color: "safety",
    items: [
      {
        icon: ClipboardCheck,
        title: "Inspecciones de Puesto",
        description: "Evaluación ergonómica y de seguridad en puestos de trabajo."
      },
      {
        icon: Recycle,
        title: "PGIRS",
        description: "Plan de Gestión Integral de Residuos Sólidos empresariales."
      },
      {
        icon: Users,
        title: "Talento Humano",
        description: "Selección, contratación y desarrollo de personal calificado."
      },
      {
        icon: Settings,
        title: "Auditorías Internas",
        description: "Verificación de cumplimiento y mejora continua de sistemas."
      }
    ]
  }
]

const ServicesGrid = () => {
  const getColorClasses = (color) => {
    const colors = {
      primary: {
        bg: 'bg-primary-50',
        border: 'border-primary-200',
        icon: 'bg-primary-100 text-primary-600',
        title: 'text-primary-600',
        hover: 'hover:border-primary-400'
      },
      secondary: {
        bg: 'bg-secondary-50',
        border: 'border-secondary-200',
        icon: 'bg-secondary-100 text-secondary-600',
        title: 'text-secondary-600',
        hover: 'hover:border-secondary-400'
      },
      safety: {
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        icon: 'bg-amber-100 text-amber-600',
        title: 'text-amber-600',
        hover: 'hover:border-amber-400'
      }
    }
    return colors[color] || colors.primary
  }

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-100 text-primary-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Nuestros Servicios
          </span>
          <h2 className="section-title">Soluciones Integrales para su Empresa</h2>
          <p className="section-subtitle">
            Ofrecemos servicios especializados en sistemas de gestión, consultoría técnica 
            y asesorías para garantizar el cumplimiento normativo y la mejora continua.
          </p>
        </div>

        {/* Service categories */}
        <div className="space-y-16">
          {services.map((category, categoryIndex) => {
            const colorClasses = getColorClasses(category.color)
            
            return (
              <div key={categoryIndex} className="animate-slide-up" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
                {/* Category header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`h-1 w-12 rounded-full ${colorClasses.icon.split(' ')[0]}`}></div>
                  <div>
                    <h3 className={`text-2xl font-bold ${colorClasses.title}`}>{category.category}</h3>
                    <p className="text-secondary-500">{category.description}</p>
                  </div>
                </div>
                
                {/* Service cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.items.map((service, serviceIndex) => {
                    const Icon = service.icon
                    return (
                      <div
                        key={serviceIndex}
                        className={`card border ${colorClasses.border} ${colorClasses.hover} transition-all duration-300 group cursor-pointer`}
                      >
                        <div className={`w-14 h-14 rounded-xl ${colorClasses.icon} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                          <Icon size={28} />
                        </div>
                        <h4 className="text-lg font-bold text-secondary-900 mb-2">
                          {service.title}
                        </h4>
                        <p className="text-secondary-600 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-white/5" style={{backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
            </div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  ¿Necesita un servicio personalizado?
                </h3>
                <p className="text-primary-100 text-lg max-w-xl">
                  Contáctenos ahora para una evaluación gratuita. Nuestro equipo de expertos 
                  está listo para ayudarle a alcanzar sus objetivos.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/573153454884?text=Hola%20SOLTEXI%20SAS,%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n%20para%20sus%20servicios."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-white text-primary-700 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <MessageCircle size={24} />
                  Solicitar Cotización
                  <ArrowRight size={20} />
                </a>
                <a 
                  href="tel:+573153454884"
                  className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <Phone size={22} />
                  Llamar Ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid
