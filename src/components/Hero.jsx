import { ArrowRight, Shield, Award, CheckCircle, Download } from 'lucide-react'

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 pt-24">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern opacity-20"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/10 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="text-white animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-600/20 border border-primary-500/30 rounded-full px-3 py-1.5 mb-4">
              <Shield size={16} className="text-primary-400" />
              <span className="text-primary-300 text-xs font-medium">Consultores certificados en HSEQ</span>
            </div>
            
            {/* Main heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Brindamos{' '}
              <span className="text-gradient">soluciones</span>{' '}
              a sus necesidades
            </h1>
            
            <p className="text-base lg:text-lg text-secondary-300 mb-6 leading-relaxed">
              Soluciones Integrales & Consultoría Técnica en <strong className="text-white">HSEQ</strong> y 
              Sistemas de Gestión. Impulsamos la seguridad, calidad y sostenibilidad de su empresa.
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-2 mb-6">
              <a href="#contacto" className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-semibold py-2.5 px-5 rounded-lg transition-all duration-300 shadow-lg shadow-primary-600/30 hover:shadow-primary-500/40 text-sm">
                Solicitar Asesoría
                <ArrowRight size={16} />
              </a>
              <a href="#servicios" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white hover:text-secondary-900 font-semibold py-2.5 px-5 rounded-lg transition-all duration-300 text-sm">
                Ver Servicios
              </a>
              <a 
                href="/Portafolio_Soltexis_2026.pdf" 
                download="Portafolio SOLTEXI SAS 2026.pdf"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary-500/50 text-primary-400 hover:bg-primary-500 hover:text-white font-semibold py-2.5 px-5 rounded-lg transition-all duration-300 text-sm"
              >
                <Download size={16} />
                Portafolio 2026
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-1.5">
                <CheckCircle size={16} className="text-primary-400" />
                <span className="text-secondary-300 text-sm">ISO 9001</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle size={16} className="text-primary-400" />
                <span className="text-secondary-300 text-sm">ISO 14001</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle size={16} className="text-primary-400" />
                <span className="text-secondary-300 text-sm">ISO 45001</span>
              </div>
            </div>
          </div>
          
          {/* Stats cards */}
          <div className="grid grid-cols-2 gap-3 lg:gap-4">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 text-white hover:bg-white/10 transition-all duration-300">
              <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center mb-3">
                <Award size={20} className="text-primary-400" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-0.5">8+</h3>
              <p className="text-secondary-400 text-xs">Años de experiencia</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 text-white mt-4 hover:bg-white/10 transition-all duration-300">
              <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center mb-3">
                <Shield size={20} className="text-primary-400" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-0.5">500+</h3>
              <p className="text-secondary-400 text-xs">Empresas asesoradas</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 text-white hover:bg-white/10 transition-all duration-300">
              <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center mb-3">
                <CheckCircle size={20} className="text-primary-400" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-0.5">100%</h3>
              <p className="text-secondary-400 text-xs">Cumplimiento legal</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 text-white mt-4 hover:bg-white/10 transition-all duration-300">
              <img 
                src="/LOGO tono blanco.png" 
                alt="SOLTEXI" 
                className="h-6 w-auto mb-3 opacity-80"
              />
              <h3 className="text-2xl lg:text-3xl font-bold mb-0.5">19</h3>
              <p className="text-secondary-400 text-xs">Departamentos</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave - Enhanced multi-layer transition - más compacto */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        {/* Floating particles - más sutiles */}
        <div className="absolute bottom-14 left-1/4 w-2 h-2 bg-primary-400/20 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-primary-500/15 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }} />
        <div className="absolute bottom-16 right-1/4 w-2.5 h-2.5 bg-primary-400/20 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '3.5s' }} />
        
        {/* Wave layer 1 - Background subtle wave */}
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 140" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ height: '140px' }}>
          <path d="M0 140L48 128C96 116 192 92 288 84C384 76 480 84 576 96C672 108 768 124 864 120C960 116 1056 92 1152 80C1248 68 1344 68 1392 68L1440 68V140H1392C1344 140 1248 140 1152 140C1056 140 960 140 864 140C768 140 672 140 576 140C480 140 384 140 288 140C192 140 96 140 48 140H0Z" fill="rgba(34, 197, 94, 0.06)"/>
        </svg>
        
        {/* Wave layer 2 - Mid accent wave */}
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ height: '100px' }}>
          <path d="M0 100L40 92C80 84 160 68 240 58C320 48 400 44 480 48C560 52 640 64 720 68C800 72 880 68 960 60C1040 52 1120 40 1200 44C1280 48 1360 68 1400 78L1440 88V100H1400C1360 100 1280 100 1200 100C1120 100 1040 100 960 100C880 100 800 100 720 100C640 100 560 100 480 100C400 100 320 100 240 100C160 100 80 100 40 100H0Z" fill="rgba(34, 197, 94, 0.12)"/>
        </svg>
        
        {/* Wave layer 3 - Main white wave */}
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ height: '80px' }}>
          <path d="M0 80L60 72C120 64 240 48 360 44C480 40 600 48 720 52C840 56 960 56 1080 52C1200 48 1320 40 1380 36L1440 32V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

export default Hero
