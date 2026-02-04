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
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Trabaje con Nosotros', href: '#trabaje-con-nosotros' },
    { name: 'PQRS', href: '#pqrs' },
  ]

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      {/* Top bar con contacto */}
      <div className="bg-secondary-900 text-white py-2 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+573171896780" className="flex items-center gap-2 hover:text-primary-400 transition-colors">
              <Phone size={14} />
              <span>+57 317 1896780</span>
            </a>
            <a href="mailto:soltexisas@gmail.com" className="flex items-center gap-2 hover:text-primary-400 transition-colors">
              <Mail size={14} />
              <span>soltexisas@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#inicio" className="flex items-center">
            <img 
              src="/LOGO FULLCOLOR.png" 
              alt="SOLTEXI SAS" 
              className="h-10 md:h-12 w-auto"
            />
          </a>
          
          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-secondary-600 hover:text-primary-600 font-medium text-sm transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary-600 after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2.5 px-5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm"
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
