import { useState } from 'react'
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  ChevronDown 
} from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Cobertura', href: '#cobertura' },
    { name: 'Trabaje con Nosotros', href: '#trabaje-con-nosotros' },
    { name: 'PQRS', href: '#pqrs' },
    { name: 'Contacto', href: '#contacto' },
  ]

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      {/* Top bar con contacto */}
      <div className="bg-secondary-900 text-white py-2 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+573153454884" className="flex items-center gap-2 hover:text-primary-400 transition-colors">
              <Phone size={14} />
              <span>+57 315 3454884</span>
            </a>
            <a href="mailto:soltexisas@gmail.com" className="flex items-center gap-2 hover:text-primary-400 transition-colors">
              <Mail size={14} />
              <span>soltexisas@gmail.com</span>
            </a>
          </div>
          <span className="text-secondary-400">NIT: 901.138.435-2</span>
        </div>
      </div>
      
      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-2xl">S</span>
            </div>
            <div>
              <span className="font-heading font-bold text-xl text-secondary-900">SOLTEXI</span>
              <span className="block text-xs text-secondary-500">Soluciones Integrales & Consultoría</span>
            </div>
          </a>
          
          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-secondary-700 hover:text-primary-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              className="btn-primary"
            >
              Solicitar Asesoría
            </a>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-secondary-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="block btn-primary text-center mt-4"
            >
              Solicitar Asesoría
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
