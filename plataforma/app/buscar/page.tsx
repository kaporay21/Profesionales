import { Search, MapPin, Star, ShieldCheck, Filter, ChevronRight, MessageCircle, Calendar, Zap, SlidersHorizontal, ArrowUpDown } from "lucide-react";

// Datos de prueba optimizados
const mockProfessionals = [
  {
    id: 1,
    name: "NEXO: Asesoría y Gestión Empresarial",
    profession: "Estudio Contable",
    location: "San Miguel de Tucumán",
    rating: 4.9,
    reviews: 124,
    verified: true,
    isOnline: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=256&q=80",
    tags: ["Monotributo", "Liquidaciones ARCA", "Ingresos Brutos"],
    availability: "Turnos disponibles hoy"
  },
  {
    id: 2,
    name: "Dra. Valeria Montes",
    profession: "Abogada Laboral",
    location: "San Miguel de Tucumán",
    rating: 4.8,
    reviews: 89,
    verified: true,
    isOnline: false,
    featured: false,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80",
    tags: ["Despidos", "ART", "Contratos"],
    availability: "Próximo turno: Mañana"
  },
  {
    id: 3,
    name: "Arq. Martín Saavedra",
    profession: "Arquitecto",
    location: "Yerba Buena",
    rating: 5.0,
    reviews: 42,
    verified: false,
    isOnline: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=256&q=80",
    tags: ["Planos", "Dirección de Obra", "Remodelaciones"],
    availability: "Consultar disponibilidad"
  }
];

export default function ResultadosBusqueda() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20">
      
      {/* Navegación Superior */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <div className="text-2xl font-black tracking-tighter text-slate-900 flex-shrink-0 cursor-pointer">
            Directorio<span className="text-blue-600">Pro</span>
          </div>
          
          {/* Barra de Búsqueda Mejorada */}
          <div className="flex-1 w-full flex bg-slate-50 rounded-xl border border-slate-200 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 transition-all overflow-hidden shadow-sm">
            <div className="flex-1 flex items-center px-4 border-r border-slate-200">
              <Search className="w-5 h-5 text-slate-400 mr-2 flex-shrink-0" />
              <input type="text" defaultValue="Contadores" className="w-full bg-transparent outline-none text-sm md:text-base py-2.5 text-slate-700 font-medium" />
            </div>
            <div className="flex-1 flex items-center px-4">
              <MapPin className="w-5 h-5 text-slate-400 mr-2 flex-shrink-0" />
              <input type="text" defaultValue="Tucumán" className="w-full bg-transparent outline-none text-sm md:text-base py-2.5 text-slate-700 font-medium" />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 font-bold transition-colors">
              Buscar
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* PANEL IZQUIERDO: Filtros Avanzados */}
          <aside className="w-full lg:w-64 flex-shrink-0 hidden lg:block">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm sticky top-28">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5 text-slate-700" />
                  <h2 className="font-bold text-lg text-slate-900">Filtros</h2>
                </div>
                <button className="text-xs text-blue-600 font-semibold hover:underline">Limpiar</button>
              </div>
              
              <div className="space-y-8">
                {/* Filtro: Especialidad */}
                <div>
                  <h3 className="font-bold text-sm mb-4 text-slate-900 uppercase tracking-wider">Especialidad</h3>
                  <div className="space-y-3">
                    {["Liquidaciones ARCA", "Monotributo", "Ingresos Brutos", "Auditoría"].map((item) => (
                      <label key={item} className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center w-5 h-5 border-2 border-slate-300 rounded group-hover:border-blue-500 transition-colors">
                          <input type="checkbox" className="opacity-0 absolute inset-0 cursor-pointer peer" />
                          <div className="hidden peer-checked:block w-3 h-3 bg-blue-600 rounded-sm"></div>
                        </div>
                        <span className="text-sm text-slate-600 font-medium group-hover:text-slate-900 transition-colors">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Filtro: Modalidad */}
                <div>
                  <h3 className="font-bold text-sm mb-4 text-slate-900 uppercase tracking-wider">Modalidad</h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center w-5 h-5 border-2 border-blue-500 rounded transition-colors">
                        <input type="checkbox" defaultChecked className="opacity-0 absolute inset-0 cursor-pointer peer" />
                        <div className="block w-3 h-3 bg-blue-600 rounded-sm"></div>
                      </div>
                      <span className="text-sm text-slate-900 font-semibold transition-colors">Estudio Físico</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center w-5 h-5 border-2 border-slate-300 rounded group-hover:border-blue-500 transition-colors">
                        <input type="checkbox" className="opacity-0 absolute inset-0 cursor-pointer peer" />
                        <div className="hidden peer-checked:block w-3 h-3 bg-blue-600 rounded-sm"></div>
                      </div>
                      <span className="text-sm text-slate-600 font-medium group-hover:text-slate-900 transition-colors">Asesoría Online</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* PANEL DERECHO: Resultados */}
          <div className="flex-1">
            
            {/* Cabecera de Resultados y Filtros Rápidos */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-2xl font-extrabold text-slate-900">Expertos en tu zona</h1>
                  <p className="text-slate-500 text-sm mt-1 font-medium">Mostrando {mockProfessionals.length} resultados verificados</p>
                </div>
                <button className="flex items-center gap-2 text-sm font-semibold text-slate-600 bg-white border border-slate-200 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors">
                  <ArrowUpDown className="w-4 h-4" />
                  Recomendados
                </button>
              </div>

              {/* Píldoras de Filtro Rápido */}
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                <button className="whitespace-nowrap px-4 py-1.5 bg-slate-900 text-white rounded-full text-sm font-semibold shadow-sm">Todos</button>
                <button className="whitespace-nowrap px-4 py-1.5 bg-white border border-slate-200 text-slate-600 hover:border-blue-500 hover:text-blue-600 rounded-full text-sm font-medium transition-colors">⭐ Mejor calificados</button>
                <button className="whitespace-nowrap px-4 py-1.5 bg-white border border-slate-200 text-slate-600 hover:border-blue-500 hover:text-blue-600 rounded-full text-sm font-medium transition-colors">🟢 Disponibles hoy</button>
                <button className="whitespace-nowrap px-4 py-1.5 bg-white border border-slate-200 text-slate-600 hover:border-blue-500 hover:text-blue-600 rounded-full text-sm font-medium transition-colors">⚡ Respuesta rápida</button>
              </div>
            </div>

            {/* Lista de Tarjetas */}
            <div className="space-y-5">
              {mockProfessionals.map((prof) => (
                <div 
                  key={prof.id} 
                  className={`relative bg-white rounded-2xl p-5 sm:p-6 transition-all duration-300 group
                    ${prof.featured ? 'border-2 border-blue-500 shadow-md' : 'border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-300'}
                    flex flex-col sm:flex-row gap-6 cursor-pointer`}
                >
                  {/* Etiqueta Destacado */}
                  {prof.featured && (
                    <div className="absolute -top-3 left-6 bg-blue-600 text-white px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                      Recomendado
                    </div>
                  )}
                  
                  {/* Avatar con Indicador Online */}
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 flex-shrink-0 mt-2 sm:mt-0">
                    <img src={prof.image} alt={prof.name} className="w-full h-full rounded-2xl object-cover border border-slate-100 shadow-sm group-hover:scale-105 transition-transform duration-300" />
                    {prof.isOnline && (
                      <div className="absolute -bottom-2 -right-2 bg-emerald-500 w-5 h-5 rounded-full border-4 border-white shadow-sm" title="Online ahora"></div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                      <div>
                        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 group-hover:text-blue-600 transition-colors">
                          {prof.name}
                          {/* Aquí está la corrección del icono envuelto en un span */}
                          {prof.verified && (
                            <span title="Identidad Verificada" className="flex items-center">
                              <ShieldCheck className="w-5 h-5 text-blue-500" />
                            </span>
                          )}
                        </h2>
                        <p className="text-slate-600 font-semibold">{prof.profession}</p>
                      </div>
                      
                      {/* Calificación */}
                      <div className="flex items-center gap-1.5 mt-3 sm:mt-0 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-100/50">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="font-bold text-sm text-amber-900">{prof.rating}</span>
                        <span className="text-xs text-amber-700 font-medium">({prof.reviews})</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-4 mt-2">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        <span className="font-medium">{prof.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded text-xs">{prof.availability}</span>
                      </div>
                      {prof.isOnline && (
                        <div className="flex items-center gap-1 text-blue-600 font-medium text-xs bg-blue-50 px-2 py-0.5 rounded">
                          <Zap className="w-3 h-3" /> Responde al instante
                        </div>
                      )}
                    </div>

                    {/* Etiquetas */}
                    <div className="flex flex-wrap gap-2">
                      {prof.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-semibold group-hover:bg-blue-50 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Acciones */}
                  <div className="flex flex-col gap-3 justify-center sm:w-48 sm:border-l sm:border-slate-100 sm:pl-6">
                    <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors flex items-center justify-center gap-2 shadow-sm">
                      Ver Perfil <ChevronRight className="w-4 h-4" />
                    </button>
                    <button className="w-full bg-emerald-50 hover:bg-emerald-500 hover:text-white text-emerald-700 font-bold py-3 px-4 rounded-xl border border-emerald-200 text-sm transition-all duration-300 flex items-center justify-center gap-2">
                      <MessageCircle className="w-5 h-5" /> WhatsApp
                    </button>
                  </div>

                </div>
              ))}
            </div>

            {/* Paginación Elegante */}
            <div className="mt-12 flex justify-center">
              <div className="inline-flex gap-2 bg-white p-1.5 rounded-xl border border-slate-200 shadow-sm">
                <button className="px-4 py-2 rounded-lg text-slate-500 hover:bg-slate-50 font-semibold text-sm transition-colors">Anterior</button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-bold text-sm shadow-sm">1</button>
                <button className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 font-semibold text-sm transition-colors">2</button>
                <button className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 font-semibold text-sm transition-colors">3</button>
                <button className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 font-semibold text-sm transition-colors">Siguiente</button>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}