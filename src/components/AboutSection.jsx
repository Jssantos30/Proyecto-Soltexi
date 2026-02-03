import { useState, useEffect } from 'react'
import { Target, Eye, Heart, ChevronRight, ChevronLeft, Sparkles, Users, Shield, FileCheck, ClipboardCheck, Settings, TrendingUp, Search } from 'lucide-react'

// Datos del ciclo PHVA - SGSST
const sgsstCycle = [
  { id: 1, phase: 'PLANEAR', title: 'Política SST', question: '¿Qué hacer? ¿Cómo hacerlo?', color: 'bg-red-500', icon: FileCheck },
  { id: 2, phase: 'HACER', title: 'Organización de SG-SST', question: 'Realizar lo planificado', color: 'bg-red-700', icon: ClipboardCheck },
  { id: 3, phase: 'HACER', title: 'Planificación', question: '', color: 'bg-amber-500', icon: Settings },
  { id: 4, phase: 'VERIFICAR', title: 'Aplicación', question: '¿Las cosas pasaron según lo planificado?', color: 'bg-amber-600', icon: Search },
  { id: 5, phase: 'ACTUAR', title: 'Auditoría y Revisión de la Alta Dirección', question: '', color: 'bg-cyan-500', icon: Shield },
  { id: 6, phase: 'ACTUAR', title: 'Mejoramiento', question: '¿Cómo mejorar la próxima vez?', color: 'bg-primary-500', icon: TrendingUp },
]

// Fotos del equipo para el slider
const teamPhotos = [
  { id: 1, src: '/DSC_8974 copia.jpg.jpeg', alt: 'Equipo SOLTEXI SAS' },
  { id: 2, src: '/DSC_8959 copia.jpg.jpeg', alt: 'Consultores SOLTEXI' },
  { id: 3, src: '/DSC_8966 copia.jpg.jpeg', alt: 'Profesionales HSEQ' }
]

const aboutData = [
  {
    id: 'mision',
    title: 'Misión',
    icon: Target,
    color: 'primary',
    content: 'Impulsar entornos de trabajo seguros y sostenibles, generamos credibilidad y resultados medibles a través del cumplimiento legal, metodologías técnicas, atención oportuna y un equipo profesional competente, comprometido con la excelencia y la satisfacción del cliente.'
  },
  {
    id: 'vision',
    title: 'Visión',
    icon: Eye,
    color: 'secondary',
    content: 'Para el año 2030 ser referentes a nivel nacional en prevención de riesgos laborales y gestión empresarial, destacándonos por la calidad, la cobertura y el acompañamiento cercano, aportando seguridad, cumplimiento y sostenibilidad a nuestros clientes, aliados, colaboradores, al sector productivo colombiano y demás grupos de interés.'
  },
  {
    id: 'etica',
    title: 'Código de Ética',
    icon: Heart,
    color: 'accent',
    content: 'Nuestra empresa se caracteriza por la calidad del servicio, la constante búsqueda siempre hacia la excelencia, el trabajo en equipo, y el cumplimiento en nuestro trabajo.',
    values: ['Lealtad', 'Responsabilidad', 'Respeto', 'Honestidad']
  }
]

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('mision')
  const [currentPhoto, setCurrentPhoto] = useState(0)

  // Autoplay del slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % teamPhotos.length)
    }, 5000) // Cambio cada 5 segundos
    return () => clearInterval(interval)
  }, [])

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % teamPhotos.length)
  }

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + teamPhotos.length) % teamPhotos.length)
  }

  const getColorClasses = (color, isActive) => {
    const colors = {
      primary: {
        bg: isActive ? 'bg-primary-600' : 'bg-white',
        text: isActive ? 'text-white' : 'text-primary-600',
        border: 'border-primary-200',
        iconBg: 'bg-primary-100',
        iconText: 'text-primary-600',
        accent: 'bg-primary-600',
        light: 'bg-primary-50'
      },
      secondary: {
        bg: isActive ? 'bg-secondary-800' : 'bg-white',
        text: isActive ? 'text-white' : 'text-secondary-800',
        border: 'border-secondary-200',
        iconBg: 'bg-secondary-100',
        iconText: 'text-secondary-700',
        accent: 'bg-secondary-800',
        light: 'bg-secondary-50'
      },
      accent: {
        bg: isActive ? 'bg-primary-500' : 'bg-white',
        text: isActive ? 'text-white' : 'text-primary-500',
        border: 'border-primary-200',
        iconBg: 'bg-primary-100',
        iconText: 'text-primary-500',
        accent: 'bg-primary-500',
        light: 'bg-primary-50'
      }
    }
    return colors[color] || colors.primary
  }

  const activeItem = aboutData.find(item => item.id === activeTab)

  return (
    <section id="nosotros" className="relative overflow-hidden">
      {/* Transición superior más compacta y fluida */}
      <div className="relative bg-gradient-to-b from-white via-primary-50/30 to-transparent pt-4 pb-10">
        {/* Elementos decorativos flotantes - más sutiles */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-5 left-[10%] w-20 h-20 bg-primary-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute top-10 right-[15%] w-28 h-28 bg-primary-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          {/* Section Header - Más compacto */}
          <div className="text-center mb-8">
            {/* Badge animado */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-primary-50 text-primary-700 text-sm font-semibold px-4 py-2 rounded-full mb-4 shadow-sm border border-primary-100/50 hover:shadow-md transition-all duration-500 hover:scale-105">
              <Sparkles size={14} className="animate-pulse" />
              Conócenos
            </div>
            
            {/* Título con mejor tipografía */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4 leading-tight">
              Nuestra <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500">Identidad</span> Corporativa
            </h2>
            
            {/* Línea decorativa más sutil */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-0.5 w-10 bg-gradient-to-r from-transparent to-primary-400 rounded-full" />
              <div className="h-1.5 w-1.5 bg-primary-500 rounded-full" />
              <div className="h-0.5 w-10 bg-gradient-to-l from-transparent to-primary-400 rounded-full" />
            </div>
            
            <p className="text-secondary-600 max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
              Somos una empresa comprometida con la excelencia, la seguridad y el desarrollo sostenible del sector empresarial colombiano.
            </p>
          </div>
        </div>
      </div>
      
      {/* Contenido principal con fondo mejorado */}
      <div className="bg-gradient-to-b from-transparent via-white to-primary-50/20 pb-12">
        <div className="max-w-7xl mx-auto px-4">

        {/* Team Section - Diseño premium más compacto */}
        <div className="mb-12 relative">
          {/* Decoración de fondo más sutil */}
          <div className="absolute -inset-2 bg-gradient-to-r from-primary-500/5 via-secondary-500/3 to-primary-500/5 rounded-[2.5rem] blur-xl" />
          
          <div className="relative bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 rounded-[1.5rem] overflow-hidden shadow-xl border border-secondary-700/20">
            {/* Patrón decorativo más sutil */}
            <div className="absolute inset-0 opacity-[0.03]">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                backgroundSize: '32px 32px'
              }} />
            </div>
            
            <div className="grid lg:grid-cols-2 relative">
              {/* Left - Slider de fotos del equipo - más compacto */}
              <div className="relative h-64 sm:h-80 lg:h-auto lg:min-h-[420px] group">
                {/* Fotos con transición mejorada */}
                {teamPhotos.map((photo, index) => (
                  <img 
                    key={photo.id}
                    src={photo.src}
                    alt={photo.alt}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out
                      ${index === currentPhoto ? 'opacity-100 scale-100' : 'opacity-0 scale-102'}`}
                  />
                ))}
                
                {/* Overlay con gradientes múltiples */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/50 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-secondary-900/60 lg:block hidden" />
                
                {/* Controles de navegación mejorados - más compactos */}
                <button 
                  onClick={prevPhoto}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-primary-500/80 backdrop-blur-md rounded-xl flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 border border-white/20"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={nextPhoto}
                  className="absolute right-3 lg:right-auto lg:left-[calc(100%-3rem)] top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-primary-500/80 backdrop-blur-md rounded-xl flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 border border-white/20"
                  aria-label="Siguiente foto"
                >
                  <ChevronRight size={20} />
                </button>
                
                {/* Indicadores mejorados - más compactos */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full">
                  {teamPhotos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPhoto(index)}
                      className={`rounded-full transition-all duration-500 
                        ${index === currentPhoto 
                          ? 'bg-primary-500 w-6 h-1.5 shadow-lg shadow-primary-500/50' 
                          : 'bg-white/40 hover:bg-white/70 w-1.5 h-1.5'}`}
                      aria-label={`Ver foto ${index + 1}`}
                    />
                  ))}
                </div>
                
                {/* Número de foto actual */}
                <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white text-xs font-medium px-2.5 py-1 rounded-full border border-white/10">
                  {currentPhoto + 1} / {teamPhotos.length}
                </div>
              </div>
              
              {/* Right - Contenido mejorado - más compacto */}
              <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center relative">
                {/* Elemento decorativo */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl" />
                
                <div className="relative">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/20 to-primary-400/10 border border-primary-500/30 rounded-full px-4 py-2 mb-5 w-fit shadow-lg shadow-primary-500/10">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-pulse" />
                    <Users size={16} className="text-primary-400" />
                    <span className="text-primary-300 text-xs font-medium">Nuestro Equipo</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                    Profesionales comprometidos con tu{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300">seguridad</span>
                  </h3>
                  
                  <p className="text-secondary-300 leading-relaxed mb-6 text-sm lg:text-base">
                    Contamos con un equipo multidisciplinario de consultores certificados, 
                    capacitados para brindarte las mejores soluciones en 
                    seguridad, salud ocupacional y gestión empresarial.
                  </p>
                  
                  {/* Stats con diseño glassmorphism - más compactos */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="text-center p-3 lg:p-4 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/10 hover:border-primary-500/30 transition-all duration-300 group/stat hover:scale-105">
                      <div className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary-400 to-primary-500 group-hover/stat:from-primary-300 group-hover/stat:to-primary-400 transition-all">15+</div>
                      <div className="text-[10px] lg:text-xs text-secondary-400 mt-1 font-medium uppercase tracking-wider">Profesionales</div>
                    </div>
                    <div className="text-center p-3 lg:p-4 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/10 hover:border-primary-500/30 transition-all duration-300 group/stat hover:scale-105">
                      <div className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary-400 to-primary-500 group-hover/stat:from-primary-300 group-hover/stat:to-primary-400 transition-all">100%</div>
                      <div className="text-[10px] lg:text-xs text-secondary-400 mt-1 font-medium uppercase tracking-wider">Certificados</div>
                    </div>
                    <div className="text-center p-3 lg:p-4 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/10 hover:border-primary-500/30 transition-all duration-300 group/stat hover:scale-105">
                      <div className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary-400 to-primary-500 group-hover/stat:from-primary-300 group-hover/stat:to-primary-400 transition-all">8+</div>
                      <div className="text-[10px] lg:text-xs text-secondary-400 mt-1 font-medium uppercase tracking-wider">Años Exp.</div>
                    </div>
                  </div>
                  
                  {/* Quote mejorado - más compacto */}
                  <div className="relative pl-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-primary-500 before:to-primary-400 before:rounded-full">
                    <p className="text-secondary-400 italic text-sm leading-relaxed">
                      "Nuestro mayor activo es nuestro equipo humano, comprometido con la excelencia y la mejora continua."
                    </p>
                    <p className="text-primary-400 text-xs mt-1.5 font-medium">— Equipo SOLTEXI SAS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separador decorativo - más sutil */}
        <div className="flex items-center justify-center my-10">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary-300/50" />
          <div className="mx-3 flex gap-1.5">
            <div className="w-1.5 h-1.5 bg-primary-400/60 rounded-full animate-pulse" />
            <div className="w-1.5 h-1.5 bg-primary-500/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-1.5 h-1.5 bg-primary-400/60 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary-300/50" />
        </div>

        {/* ¿Quiénes Somos? + Ciclo SGSST - más compacto */}
        <div className="mb-12">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            {/* Left - Descripción ¿Quiénes Somos? */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary-100 to-secondary-50 text-secondary-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 border border-secondary-200/50">
                <Shield size={14} className="text-secondary-600" />
                ¿Quiénes Somos?
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-secondary-900 mb-4 leading-tight">
                Expertos en <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500">HSEQ</span> y Sistemas de Gestión
              </h3>
              
              <div className="space-y-3 text-secondary-600 leading-relaxed text-sm">
                <p>
                  Somos una empresa dedicada a la prestación de servicios de prevención del riesgo mediante la{' '}
                  <strong className="text-secondary-800">consultoría, asesoría, interventoría y auditoría</strong> para el diseño, 
                  implementación y administración de sistemas integrados de gestión{' '}
                  <strong className="text-secondary-800">HSEQ</strong>, diseño y administración de{' '}
                  <strong className="text-secondary-800">SGSST</strong>, asesorías y capacitaciones con relación a la normativa vigente en SST.
                </p>
                
                <div className="bg-gradient-to-r from-primary-50 to-primary-100/50 border-l-4 border-primary-500 p-3 rounded-r-lg">
                  <p className="text-secondary-700 text-xs">
                    <strong className="text-primary-700">Licencia de Seguridad y Salud en el Trabajo</strong> otorgada mediante 
                    resolución número 021249 de 2025 de la Secretaría de Salud Departamental del Cesar.
                  </p>
                </div>
                
                <p>
                  Nuestra red de profesionales cuentan con la idoneidad y una amplia experiencia en la atención de empresas y{' '}
                  <strong className="text-secondary-800">prestación de servicios</strong> en riesgos laborales, salud ocupacional y seguridad industrial.
                </p>
              </div>
              
              {/* Quote destacado - más compacto */}
              <div className="mt-5 relative">
                <div className="absolute -left-3 top-0 text-4xl text-primary-200 font-serif leading-none">"</div>
                <p className="text-lg md:text-xl font-semibold text-secondary-800 italic pl-4">
                  Brindamos soluciones a sus necesidades
                </p>
              </div>
            </div>
            
            {/* Right - Ciclo SGSST Visual - más compacto */}
            <div className="order-1 lg:order-2 relative">
              {/* Fondo decorativo */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100/30 via-transparent to-secondary-100/30 rounded-2xl blur-xl" />
              
              <div className="relative bg-white rounded-2xl shadow-lg border border-secondary-100 p-4 md:p-6 overflow-hidden">
                {/* Patrón de fondo */}
                <div className="absolute inset-0 opacity-[0.02]">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, #1e293b 1px, transparent 0)',
                    backgroundSize: '20px 20px'
                  }} />
                </div>
                
                <div className="relative">
                  {/* Header */}
                  <div className="text-center mb-4">
                    <h4 className="text-base font-bold text-secondary-800 mb-1">Sistema de Gestión de Seguridad y Salud</h4>
                    <p className="text-xs text-secondary-500">Ciclo PHVA - Mejora Continua</p>
                  </div>
                  
                  {/* Círculo SGSST Central - más compacto */}
                  <div className="relative w-full max-w-[260px] mx-auto aspect-square">
                    {/* Anillos externos */}
                    <div className="absolute inset-0 rounded-full border-[16px] border-gradient-to-r from-red-500 via-amber-500 to-cyan-500" 
                         style={{ 
                           background: 'conic-gradient(from 270deg, #ef4444 0deg, #ef4444 90deg, #f59e0b 90deg, #f59e0b 180deg, #06b6d4 180deg, #06b6d4 270deg, #22c55e 270deg, #22c55e 360deg)',
                           WebkitMaskImage: 'radial-gradient(transparent 55%, black 56%, black 70%, transparent 71%)',
                           maskImage: 'radial-gradient(transparent 55%, black 56%, black 70%, transparent 71%)'
                         }} />
                    
                    {/* Etiquetas PHVA */}
                    <div className="absolute top-[15%] left-1/2 -translate-x-1/2 text-red-600 font-bold text-[10px] tracking-wider transform -rotate-0">PLANEAR</div>
                    <div className="absolute right-[8%] top-1/2 -translate-y-1/2 text-amber-600 font-bold text-[10px] tracking-wider transform rotate-90">HACER</div>
                    <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 text-cyan-600 font-bold text-[10px] tracking-wider">VERIFICAR</div>
                    <div className="absolute left-[8%] top-1/2 -translate-y-1/2 text-primary-600 font-bold text-[10px] tracking-wider transform -rotate-90">ACTUAR</div>
                    
                    {/* Centro */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[45%] h-[45%] bg-gradient-to-br from-secondary-800 to-secondary-900 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-base md:text-lg tracking-wider">SGSST</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Lista de fases - más compacta */}
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    {sgsstCycle.map((item) => {
                      const Icon = item.icon
                      return (
                        <div 
                          key={item.id}
                          className={`flex items-center gap-2 p-2 rounded-lg ${item.color} bg-opacity-10 border border-opacity-20 ${item.color.replace('bg-', 'border-')} hover:bg-opacity-20 transition-all duration-300 group cursor-default`}
                        >
                          <div className={`w-6 h-6 ${item.color} rounded-md flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                            <Icon size={12} className="text-white" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-[10px] font-bold text-secondary-800 truncate">{item.id}| {item.title}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Segundo separador - más sutil */}
        <div className="flex items-center justify-center my-8">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary-300/40 to-transparent" />
        </div>

        {/* Content Grid - Misión/Visión/Ética - más compacto */}
        <div className="grid lg:grid-cols-12 gap-5 items-start">
          {/* Tab Navigation - Left Side */}
          <div className="lg:col-span-4 space-y-2">
            {aboutData.map((item) => {
              const Icon = item.icon
              const isActive = activeTab === item.id
              const colors = getColorClasses(item.color, isActive)
              
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full group relative flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-400 ease-out
                    ${isActive 
                      ? `${colors.bg} ${colors.text} border-transparent shadow-lg scale-[1.02]` 
                      : `bg-white hover:bg-secondary-50 border-secondary-100 hover:border-primary-200 hover:shadow-md`
                    }`}
                >
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300
                    ${isActive ? 'bg-white/20' : colors.iconBg}`}>
                    <Icon size={20} className={isActive ? 'text-white' : colors.iconText} />
                  </div>
                  
                  {/* Text */}
                  <div className="flex-1 text-left">
                    <h3 className={`font-bold text-base transition-colors duration-300
                      ${isActive ? 'text-white' : 'text-secondary-900'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-xs transition-colors duration-300
                      ${isActive ? 'text-white/80' : 'text-secondary-500'}`}>
                      {item.id === 'mision' && 'Nuestro propósito'}
                      {item.id === 'vision' && 'Hacia dónde vamos'}
                      {item.id === 'etica' && 'Nuestros valores'}
                    </p>
                  </div>
                  
                  {/* Arrow */}
                  <ChevronRight 
                    size={18} 
                    className={`transition-all duration-300 
                      ${isActive ? 'text-white translate-x-1' : 'text-secondary-400 group-hover:text-primary-600 group-hover:translate-x-1'}`} 
                  />
                  
                  {/* Active indicator line */}
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 bg-white rounded-r-full -ml-[2px]" />
                  )}
                </button>
              )
            })}
          </div>

          {/* Content Display - Right Side */}
          <div className="lg:col-span-8">
            <div 
              key={activeTab}
              className="bg-white rounded-2xl shadow-lg border border-secondary-100 overflow-hidden animate-fade-in"
            >
              {/* Header with gradient - más compacto */}
              <div className={`relative p-5 md:p-6 ${
                activeItem.color === 'primary' ? 'bg-gradient-to-r from-primary-600 to-primary-500' :
                activeItem.color === 'secondary' ? 'bg-gradient-to-r from-secondary-800 to-secondary-700' :
                'bg-gradient-to-r from-primary-500 to-primary-400'
              }`}>
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '20px 20px'
                  }} />
                </div>
                
                <div className="relative flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    {activeItem && <activeItem.icon size={24} className="text-white" />}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {activeItem?.title}
                    </h3>
                    <p className="text-white/80 text-xs mt-0.5">
                      SOLTEXI SAS - Comprometidos con la excelencia
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Content body - más compacto */}
              <div className="p-5 md:p-6">
                <p className="text-secondary-700 text-sm lg:text-base leading-relaxed">
                  {activeItem?.content}
                </p>
                
                {/* Values for Ethics section - más compactos */}
                {activeItem?.values && (
                  <div className="mt-5">
                    <h4 className="text-xs font-semibold text-secondary-500 uppercase tracking-wider mb-3">
                      Nuestros Valores
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {activeItem.values.map((value, index) => (
                        <div 
                          key={index}
                          className="bg-gradient-to-br from-primary-50 to-primary-100/50 border border-primary-200 rounded-lg p-3 text-center group hover:shadow-md hover:scale-105 transition-all duration-300"
                        >
                          <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-1.5 group-hover:scale-110 transition-transform">
                            <Heart size={14} className="text-white" />
                          </div>
                          <span className="font-semibold text-secondary-800 text-sm">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Decorative element - más compacto */}
                <div className="mt-5 pt-4 border-t border-secondary-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img 
                      src="/LOGO FULLCOLOR.png" 
                      alt="SOLTEXI" 
                      className="h-6 w-auto opacity-60"
                    />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-secondary-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                    Desde 2018 construyendo confianza
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      {/* Transición inferior hacia la siguiente sección - más suave */}
      <div className="h-10 bg-gradient-to-b from-primary-50/20 to-white" />
    </section>
  )
}

export default AboutSection