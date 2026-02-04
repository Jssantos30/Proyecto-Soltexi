import { 
  Shield, 
  Leaf, 
  Award, 
  Truck, 
  Zap, 
  Settings,
  Users,
  ClipboardCheck,
  HardHat,
  Wrench,
  AlertTriangle,
  MessageCircle,
  Phone,
  ArrowRight,
  FileCheck,
  BookOpen,
  Stethoscope,
  MapPin,
  BadgeCheck,
  Target,
  Sparkles,
  CheckCircle2,
  Building2,
  GraduationCap,
  HeartPulse
} from 'lucide-react'

const services = [
  {
    category: "Sistemas de Gestión (SG-SST)",
    emoji: "🛡️",
    description: "Diseño, implementación y administración del Sistema de Gestión de Seguridad y Salud en el Trabajo",
    color: "primary",
    highlight: "Decreto 1072 de 2015 • Resolución 0312 de 2019",
    items: [
      {
        icon: Shield,
        title: "SG-SST Completo",
        description: "Diseño e implementación del Sistema de Gestión de Seguridad y Salud en el Trabajo."
      },
      {
        icon: FileCheck,
        title: "Documentación SST",
        description: "Elaboración de matrices, procedimientos, formatos y programas requeridos."
      },
      {
        icon: ClipboardCheck,
        title: "Auditorías SG-SST",
        description: "Evaluación de cumplimiento según estándares mínimos de la Resolución 0312."
      },
      {
        icon: Settings,
        title: "Administración SG-SST",
        description: "Gestión continua y acompañamiento permanente de su sistema de gestión."
      }
    ]
  },
  {
    category: "Consultoría en Normas ISO",
    emoji: "📋",
    description: "Asesoría y auditoría en estándares internacionales de gestión empresarial",
    color: "secondary",
    highlight: "Certificaciones reconocidas internacionalmente",
    items: [
      {
        icon: Award,
        title: "ISO 9001 - Calidad",
        description: "Sistema de Gestión de Calidad para optimizar procesos y satisfacer clientes."
      },
      {
        icon: Leaf,
        title: "ISO 14001 - Ambiental",
        description: "Sistema de Gestión Ambiental para reducir impacto y cumplir normativas."
      },
      {
        icon: Shield,
        title: "ISO 45001 - SST",
        description: "Estándar internacional de Seguridad y Salud en el Trabajo."
      },
      {
        icon: Truck,
        title: "ISO 39001 - Seguridad Vial",
        description: "Sistema de Gestión de Seguridad Vial y PESV empresarial."
      }
    ]
  },
  {
    category: "Asistencia Técnica y Capacitación",
    emoji: "🎓",
    description: "Programas especializados de formación y certificación de competencias",
    color: "amber",
    highlight: "Formación teórico-práctica certificada",
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
        icon: Users,
        title: "Ergonomía Laboral",
        description: "Evaluación y prevención de trastornos musculoesqueléticos."
      },
      {
        icon: AlertTriangle,
        title: "Investigación de Accidentes",
        description: "Metodología para análisis de causas y prevención de incidentes."
      },
      {
        icon: HardHat,
        title: "Brigadas de Emergencia",
        description: "Formación de equipos de respuesta ante emergencias empresariales."
      },
      {
        icon: BookOpen,
        title: "Trabajo en Alturas",
        description: "Certificación según Resolución 4272 de 2021."
      }
    ]
  },
  {
    category: "Gestión de Riesgos Laborales para ARL",
    emoji: "🏥",
    description: "Prestación de servicios preventivos para empresas afiliadas a ARL",
    color: "cyan",
    highlight: "Servicios de prevención especializados",
    items: [
      {
        icon: Stethoscope,
        title: "Diagnósticos Empresariales",
        description: "Evaluación integral del estado de seguridad y salud de su organización."
      },
      {
        icon: AlertTriangle,
        title: "Planes de Emergencia",
        description: "Diseño e implementación de planes de preparación y respuesta."
      },
      {
        icon: HeartPulse,
        title: "Vigilancia Epidemiológica",
        description: "Sistemas de monitoreo de salud ocupacional y enfermedades laborales."
      },
      {
        icon: ClipboardCheck,
        title: "Inspecciones de Seguridad",
        description: "Evaluación de condiciones y actos inseguros en el trabajo."
      }
    ]
  }
]

const whyChooseUs = [
  {
    icon: BadgeCheck,
    title: "Respaldo Legal",
    description: "Licencia de Seguridad y Salud en el Trabajo otorgada por la Secretaría de Salud del Cesar",
    highlight: "Resolución 021249 de 2025",
    color: "primary"
  },
  {
    icon: MapPin,
    title: "Cobertura Nacional",
    description: "Presencia y capacidad de atención en los principales departamentos de Colombia",
    highlight: "Desde la Guajira hasta Nariño",
    color: "secondary"
  },
  {
    icon: Target,
    title: "Compromiso con la Excelencia",
    description: "Nuestra visión es ser referentes nacionales para el año 2030",
    highlight: "Acompañamiento cercano y resultados medibles",
    color: "amber"
  }
]

const ServicesGrid = () => {
  const getColorClasses = (color) => {
    const colors = {
      primary: {
        bg: 'bg-primary-50',
        bgGradient: 'from-primary-500 to-primary-600',
        border: 'border-primary-200',
        icon: 'bg-primary-100 text-primary-600',
        iconHover: 'group-hover:bg-primary-600 group-hover:text-white',
        title: 'text-primary-600',
        hover: 'hover:border-primary-400 hover:shadow-primary-100',
        badge: 'bg-primary-100 text-primary-700 border-primary-200'
      },
      secondary: {
        bg: 'bg-secondary-50',
        bgGradient: 'from-secondary-700 to-secondary-800',
        border: 'border-secondary-200',
        icon: 'bg-secondary-100 text-secondary-600',
        iconHover: 'group-hover:bg-secondary-700 group-hover:text-white',
        title: 'text-secondary-700',
        hover: 'hover:border-secondary-400 hover:shadow-secondary-100',
        badge: 'bg-secondary-100 text-secondary-700 border-secondary-200'
      },
      amber: {
        bg: 'bg-amber-50',
        bgGradient: 'from-amber-500 to-amber-600',
        border: 'border-amber-200',
        icon: 'bg-amber-100 text-amber-600',
        iconHover: 'group-hover:bg-amber-500 group-hover:text-white',
        title: 'text-amber-600',
        hover: 'hover:border-amber-400 hover:shadow-amber-100',
        badge: 'bg-amber-100 text-amber-700 border-amber-200'
      },
      cyan: {
        bg: 'bg-cyan-50',
        bgGradient: 'from-cyan-500 to-cyan-600',
        border: 'border-cyan-200',
        icon: 'bg-cyan-100 text-cyan-600',
        iconHover: 'group-hover:bg-cyan-500 group-hover:text-white',
        title: 'text-cyan-600',
        hover: 'hover:border-cyan-400 hover:shadow-cyan-100',
        badge: 'bg-cyan-100 text-cyan-700 border-cyan-200'
      }
    }
    return colors[color] || colors.primary
  }

  return (
    <section id="servicios" className="py-16 bg-gradient-to-b from-white via-secondary-50/20 to-white relative overflow-hidden">
      {/* Elementos decorativos de fondo - más sutiles */}
      <div className="absolute top-10 left-0 w-64 h-64 bg-primary-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-secondary-100/15 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Section header - más compacto */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-primary-50 text-primary-700 text-sm font-semibold px-4 py-2 rounded-full mb-4 shadow-sm border border-primary-100/50 hover:shadow-md transition-all duration-300">
            <Sparkles size={14} className="animate-pulse" />
            Nuestros Servicios
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Servicios <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500">Especializados</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-0.5 w-10 bg-gradient-to-r from-transparent to-primary-400 rounded-full" />
            <div className="h-1.5 w-1.5 bg-primary-500 rounded-full" />
            <div className="h-0.5 w-10 bg-gradient-to-l from-transparent to-primary-400 rounded-full" />
          </div>
          <p className="text-secondary-600 max-w-3xl mx-auto text-sm lg:text-base leading-relaxed">
            Ofrecemos un portafolio robusto diseñado para cubrir todas las necesidades de 
            gestión y seguridad de su organización 🏢
          </p>
        </div>

        {/* Service categories - espaciado reducido */}
        <div className="space-y-12">
          {services.map((category, categoryIndex) => {
            const colorClasses = getColorClasses(category.color)
            
            return (
              <div key={categoryIndex} className="relative">
                {/* Category header - más compacto */}
                <div className="flex flex-col md:flex-row md:items-center gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{category.emoji}</span>
                    <div>
                      <h3 className={`text-xl md:text-2xl font-bold ${colorClasses.title}`}>
                        {category.category}
                      </h3>
                      <p className="text-secondary-500 text-sm mt-0.5">{category.description}</p>
                    </div>
                  </div>
                  {category.highlight && (
                    <div className={`${colorClasses.badge} text-xs font-semibold px-3 py-1.5 rounded-full border md:ml-auto whitespace-nowrap`}>
                      ✅ {category.highlight}
                    </div>
                  )}
                </div>
                
                {/* Service cards - más compactas */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {category.items.map((service, serviceIndex) => {
                    const Icon = service.icon
                    return (
                      <div
                        key={serviceIndex}
                        className={`group relative bg-white rounded-xl border-2 ${colorClasses.border} ${colorClasses.hover} p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer`}
                      >
                        {/* Número de servicio */}
                        <div className="absolute top-3 right-3 text-[10px] font-bold text-secondary-200">
                          {String(serviceIndex + 1).padStart(2, '0')}
                        </div>
                        
                        <div className={`w-11 h-11 rounded-xl ${colorClasses.icon} ${colorClasses.iconHover} flex items-center justify-center mb-3 transition-all duration-300`}>
                          <Icon size={22} />
                        </div>
                        <h4 className="text-base font-bold text-secondary-900 mb-2">
                          {service.title}
                        </h4>
                        <p className="text-secondary-600 text-xs leading-relaxed">
                          {service.description}
                        </p>
                        
                        {/* Indicador de hover */}
                        <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${colorClasses.bgGradient} rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* ¿Por qué elegirnos? Section - más compacto */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-3">
              ¿Por qué <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500">elegirnos</span>? 🤝
            </h3>
            <p className="text-secondary-600 max-w-2xl mx-auto text-sm">
              Contamos con el respaldo, la experiencia y el compromiso necesarios para ser su aliado estratégico
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon
              const colors = {
                primary: 'from-primary-500 to-primary-600 shadow-primary-500/25',
                secondary: 'from-secondary-700 to-secondary-800 shadow-secondary-700/25',
                amber: 'from-amber-500 to-amber-600 shadow-amber-500/25'
              }
              return (
                <div 
                  key={index}
                  className="relative bg-white rounded-2xl p-5 shadow-md border border-secondary-100 hover:shadow-lg transition-all duration-300 group overflow-hidden"
                >
                  {/* Fondo decorativo */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${colors[item.color]} opacity-5 rounded-bl-full group-hover:opacity-10 transition-opacity`} />
                  
                  <div className={`w-12 h-12 bg-gradient-to-br ${colors[item.color]} rounded-xl flex items-center justify-center mb-4 shadow-md ${colors[item.color].split(' ').pop()} group-hover:scale-110 transition-transform`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-secondary-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-secondary-600 text-sm mb-3 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="inline-flex items-center gap-1.5 bg-secondary-100 text-secondary-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                    <CheckCircle2 size={12} className="text-primary-500" />
                    {item.highlight}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Quote destacado - más compacto */}
        <div className="mt-10 text-center">
          <div className="inline-block relative">
            <span className="absolute -left-6 -top-3 text-5xl text-primary-200">"</span>
            <p className="text-xl md:text-2xl font-bold text-secondary-800 italic px-6">
              Brindamos soluciones a sus necesidades
            </p>
            <span className="absolute -right-3 -bottom-3 text-5xl text-primary-200 rotate-180">"</span>
          </div>
        </div>

        {/* CTA - más compacto */}
        <div className="mt-12">
          <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-white/5" style={{backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '16px 16px'}}></div>
            </div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  ¿Necesita un servicio personalizado?
                </h3>
                <p className="text-primary-100 text-sm max-w-xl">
                  Contáctenos ahora para una evaluación gratuita. Nuestro equipo de expertos 
                  está listo para ayudarle a alcanzar sus objetivos.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://wa.me/573171896780?text=Hola%20SOLTEXI%20SAS,%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n%20para%20sus%20servicios."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 font-bold px-6 py-3 rounded-xl hover:bg-primary-50 hover:scale-105 transition-all duration-300 shadow-lg text-sm"
                >
                  <MessageCircle size={20} />
                  Solicitar Cotización
                  <ArrowRight size={16} />
                </a>
                <a 
                  href="tel:+573171896780"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 text-sm"
                >
                  <Phone size={18} />
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
