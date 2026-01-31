import { MapPin, CheckCircle } from 'lucide-react'

const departments = [
  // Costa Caribe
  { name: 'Cesar', cities: ['Valledupar', 'Aguachica', 'San Martín', 'San Alberto'], main: true },
  { name: 'Guajira', cities: ['Riohacha', 'Maicao', 'Uribia', 'Mushaisa'] },
  { name: 'Magdalena', cities: ['Santa Marta', 'Fundación'] },
  { name: 'Atlántico', cities: ['Barranquilla', 'Sabanalarga', 'Soledad'] },
  { name: 'Bolívar', cities: ['Cartagena', 'Arjona'] },
  { name: 'Córdoba', cities: ['Montería', 'Sahagún', 'Planeta Rica'] },
  // Nororiente
  { name: 'Norte de Santander', cities: ['Cúcuta', 'Ocaña', 'Pamplona'] },
  { name: 'Santander', cities: ['Bucaramanga', 'Barrancabermeja', 'Sabana de Torres'] },
  { name: 'Boyacá', cities: ['Tunja', 'Duitama', 'Sogamoso'] },
  // Centro
  { name: 'Bogotá', cities: ['Bogotá'] },
  { name: 'Cundinamarca', cities: ['Bogotá'] },
  // Eje Cafetero
  { name: 'Risaralda', cities: ['Pereira', 'Manizales', 'Armenia', 'La Dorada'] },
  { name: 'Tolima', cities: ['Ibagué', 'Espinal'] },
  { name: 'Antioquia', cities: ['Medellín', 'Apartadó', 'Bello'] },
  // Suroccidente
  { name: 'Valle del Cauca', cities: ['Cali', 'Palmira', 'Yumbo'] },
  { name: 'Cauca', cities: ['Popayán'] },
  { name: 'Nariño', cities: ['Pasto', 'Ipiales'] },
  // Llanos y Orinoquía
  { name: 'Meta', cities: ['Villavicencio', 'Puerto Gaitán'] },
  { name: 'Casanare', cities: ['Yopal'] },
]

const Coverage = () => {
  return (
    <section id="cobertura" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-primary-100 text-primary-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Cobertura Nacional
          </span>
          <h2 className="section-title">Presencia en Todo el País</h2>
          <p className="section-subtitle">
            Desde nuestra sede principal en Aguachica, Cesar, brindamos cobertura 
            a empresas en los principales departamentos de Colombia.
          </p>
        </div>

        {/* Main location card - Horizontal */}
        <div className="mb-10">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-6 md:p-8 text-white shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Sede Principal</h3>
                  <p className="text-primary-100">Aguachica, Cesar - Colombia</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-6 md:gap-8">
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-primary-200" />
                  <span className="text-sm">Calle 6a No 22-36, Of. 101</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-primary-200" />
                  <span className="text-sm">Lun - Vie: 8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-primary-200" />
                  <span className="text-sm">Atención presencial y virtual</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Departments grid - Full width */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {departments.map((dept, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl p-4 shadow-sm border ${
                dept.main 
                  ? 'border-primary-500 ring-2 ring-primary-100' 
                  : 'border-secondary-100 hover:border-primary-200'
              } hover:shadow-md transition-all duration-300`}
            >
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={16} className={dept.main ? 'text-primary-600' : 'text-primary-500'} />
                <h4 className={`font-semibold text-sm ${dept.main ? 'text-primary-600' : 'text-secondary-800'}`}>
                  {dept.name}
                </h4>
              </div>
              <ul className="space-y-1">
                {dept.cities.map((city, cityIndex) => (
                  <li key={cityIndex} className="text-xs text-secondary-600 flex items-center gap-1.5">
                    <span className={`w-1 h-1 rounded-full ${dept.main ? 'bg-primary-400' : 'bg-secondary-300'}`}></span>
                    {city}
                  </li>
                ))}
              </ul>
              {dept.main && (
                <span className="inline-block mt-2 text-[10px] font-medium text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">
                  Sede Principal
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '19', label: 'Departamentos' },
            { value: '50+', label: 'Ciudades' },
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
