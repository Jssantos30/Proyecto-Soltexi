import {
  Navbar,
  Hero,
  ServicesGrid,
  Coverage,
  CandidateForm,
  PQRSForm,
  Footer
} from '../components'

/**
 * Landing Page principal de SOLTEXI SAS
 * Integra todas las secciones de la página web corporativa
 */
const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        {/* Hero Section - Banner principal */}
        <Hero />
        
        {/* Servicios - Grid de tarjetas */}
        <ServicesGrid />
        
        {/* Cobertura - Mapa de presencia */}
        <Coverage />
        
        {/* Trabaje con Nosotros - Formulario de candidatos */}
        <CandidateForm />
        
        {/* PQRS - Sistema de peticiones */}
        <PQRSForm />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default LandingPage
