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
  AlertTriangle
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
        <div className="mt-16 text-center">
          <p className="text-secondary-600 mb-6">
            ¿Necesita un servicio personalizado? Contáctenos para una evaluación gratuita.
          </p>
          <a href="#contacto" className="btn-primary inline-flex items-center gap-2">
            Solicitar Cotización
          </a>
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid
