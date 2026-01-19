import { ArrowRight, Shield, Award, CheckCircle } from 'lucide-react'

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 pt-32">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern opacity-30"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-600/20 border border-primary-500/30 rounded-full px-4 py-2 mb-6">
              <Shield size={18} className="text-primary-400" />
              <span className="text-primary-300 text-sm font-medium">Consultores certificados en HSEQ</span>
            </div>
            
            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Brindamos{' '}
              <span className="text-gradient">soluciones</span>{' '}
              a sus necesidades
            </h1>
            
            <p className="text-xl text-secondary-300 mb-8 leading-relaxed">
              Soluciones Integrales & Consultoría Técnica en <strong className="text-white">HSEQ</strong> y 
              Sistemas de Gestión. Impulsamos la seguridad, calidad y sostenibilidad de su empresa.
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#contacto" className="btn-primary flex items-center justify-center gap-2">
                Solicitar Asesoría
                <ArrowRight size={20} />
              </a>
              <a href="#servicios" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-secondary-900">
                Ver Servicios
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-primary-400" />
                <span className="text-secondary-300">ISO 9001</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-primary-400" />
                <span className="text-secondary-300">ISO 14001</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} className="text-primary-400" />
                <span className="text-secondary-300">ISO 45001</span>
              </div>
            </div>
          </div>
          
          {/* Stats cards */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <div className="card bg-white/10 backdrop-blur-sm border border-white/20 text-white">
              <Award size={40} className="text-primary-400 mb-4" />
              <h3 className="text-4xl font-bold mb-2">7+</h3>
              <p className="text-secondary-300">Años de experiencia</p>
            </div>
            
            <div className="card bg-white/10 backdrop-blur-sm border border-white/20 text-white mt-8">
              <Shield size={40} className="text-primary-400 mb-4" />
              <h3 className="text-4xl font-bold mb-2">500+</h3>
              <p className="text-secondary-300">Empresas asesoradas</p>
            </div>
            
            <div className="card bg-white/10 backdrop-blur-sm border border-white/20 text-white">
              <CheckCircle size={40} className="text-primary-400 mb-4" />
              <h3 className="text-4xl font-bold mb-2">100%</h3>
              <p className="text-secondary-300">Cumplimiento legal</p>
            </div>
            
            <div className="card bg-white/10 backdrop-blur-sm border border-white/20 text-white mt-8">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <h3 className="text-4xl font-bold mb-2">8</h3>
              <p className="text-secondary-300">Departamentos</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

export default Hero
