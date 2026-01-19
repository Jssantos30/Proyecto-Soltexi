import { MapPin, CheckCircle } from 'lucide-react'

const departments = [
  { name: 'Cesar', cities: ['Aguachica', 'Valledupar', 'La Jagua de Ibirico'], main: true },
  { name: 'Magdalena', cities: ['Santa Marta', 'Ciénaga', 'Fundación'] },
  { name: 'Atlántico', cities: ['Barranquilla', 'Soledad', 'Malambo'] },
  { name: 'Santander', cities: ['Bucaramanga', 'Barrancabermeja', 'Floridablanca'] },
  { name: 'Norte de Santander', cities: ['Cúcuta', 'Ocaña', 'Pamplona'] },
  { name: 'Antioquia', cities: ['Medellín', 'Envigado', 'Bello'] },
  { name: 'Bogotá D.C.', cities: ['Bogotá', 'Soacha', 'Zipaquirá'] },
  { name: 'Bolívar', cities: ['Cartagena', 'Magangué', 'Turbaco'] },
]

const Coverage = () => {
  return (
    <section id="cobertura" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-100 text-primary-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Cobertura Nacional
          </span>
          <h2 className="section-title">Presencia en Todo el País</h2>
          <p className="section-subtitle">
            Desde nuestra sede principal en Aguachica, Cesar, brindamos cobertura 
            a empresas en los principales departamentos de Colombia.
          </p>
        </div>

        {/* Map and departments grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main location card */}
          <div className="lg:col-span-1">
            <div className="card bg-primary-600 text-white h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Sede Principal</h3>
                  <p className="text-primary-100 text-sm">Aguachica, Cesar</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-primary-200 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Dirección</p>
                    <p className="text-primary-100 text-sm">Calle 6a No 22-36, Oficina 101</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-primary-200 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Horario</p>
                    <p className="text-primary-100 text-sm">Lun - Vie: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-primary-200 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Atención</p>
                    <p className="text-primary-100 text-sm">Presencial y virtual</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/20">
                <p className="text-primary-100 text-sm">
                  Contamos con un equipo de consultores distribuidos en toda la región 
                  para brindarle un servicio oportuno y de calidad.
                </p>
              </div>
            </div>
          </div>

          {/* Departments grid */}
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {departments.map((dept, index) => (
                <div 
                  key={index}
                  className={`card ${dept.main ? 'border-2 border-primary-500 bg-primary-50' : ''} hover:shadow-lg transition-shadow`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={18} className={dept.main ? 'text-primary-600' : 'text-secondary-400'} />
                    <h4 className={`font-bold ${dept.main ? 'text-primary-600' : 'text-secondary-800'}`}>
                      {dept.name}
                    </h4>
                  </div>
                  <ul className="space-y-1">
                    {dept.cities.map((city, cityIndex) => (
                      <li key={cityIndex} className="text-sm text-secondary-600 flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${dept.main ? 'bg-primary-400' : 'bg-secondary-300'}`}></span>
                        {city}
                      </li>
                    ))}
                  </ul>
                  {dept.main && (
                    <span className="inline-block mt-3 text-xs font-medium text-primary-600 bg-primary-100 px-2 py-1 rounded">
                      Sede Principal
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '8', label: 'Departamentos' },
            { value: '24+', label: 'Ciudades' },
            { value: '500+', label: 'Clientes atendidos' },
            { value: '100%', label: 'Cobertura virtual' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
              <div className="text-secondary-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Coverage
