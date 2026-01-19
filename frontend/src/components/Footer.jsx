import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUp
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contacto" className="bg-secondary-900 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">S</span>
              </div>
              <div>
                <span className="font-heading font-bold text-xl">SOLTEXI SAS</span>
                <span className="block text-xs text-secondary-400">NIT: 901.138.435-2</span>
              </div>
            </div>
            
            <p className="text-secondary-300 mb-6 leading-relaxed max-w-md">
              Soluciones Integrales & Consultoría Técnica en HSEQ y Sistemas de Gestión. 
              Comprometidos con la seguridad, la calidad y el medio ambiente de su empresa.
            </p>
            
            {/* Social links */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {[
                { name: 'Inicio', href: '#inicio' },
                { name: 'Servicios', href: '#servicios' },
                { name: 'Cobertura', href: '#cobertura' },
                { name: 'Trabaje con Nosotros', href: '#trabaje-con-nosotros' },
                { name: 'PQRS', href: '#pqrs' },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://maps.google.com/?q=Calle+6a+No+22-36+Aguachica+Cesar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-secondary-300 hover:text-primary-400 transition-colors"
                >
                  <MapPin size={20} className="flex-shrink-0 mt-0.5" />
                  <span>
                    Calle 6a No 22-36, Oficina 101<br />
                    Aguachica, Cesar - Colombia
                  </span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+573153454884"
                  className="flex items-center gap-3 text-secondary-300 hover:text-primary-400 transition-colors"
                >
                  <Phone size={20} className="flex-shrink-0" />
                  <span>+57 315 3454884</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:soltexisas@gmail.com"
                  className="flex items-center gap-3 text-secondary-300 hover:text-primary-400 transition-colors"
                >
                  <Mail size={20} className="flex-shrink-0" />
                  <span>soltexisas@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-secondary-300">
                  <Clock size={20} className="flex-shrink-0" />
                  <span>Lun - Vie: 8:00 AM - 6:00 PM</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="border-t border-secondary-800">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-400 text-sm text-center md:text-left">
            © {currentYear} SOLTEXI SAS. Todos los derechos reservados.
          </p>
          
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
              Términos y Condiciones
            </a>
          </div>
          
          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-primary-600 hover:bg-primary-700 rounded-lg flex items-center justify-center transition-colors"
            aria-label="Volver arriba"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
