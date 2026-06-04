"use client";

import { useState } from "react";
import { Search, MapPin, ShieldCheck, Clock, MessageCircle, ArrowRight, Star, Building2, ChevronDown, Briefcase } from "lucide-react";

// Base de datos simulada para los selectores en cascada
const locationData = {
  nacional: {
    name: "🌎 Nivel Nacional (Online)",
    cities: []
  },
  tucuman: {
    name: "Tucumán",
    cities: [
      "San Miguel de Tucumán", "Yerba Buena", "Tafí Viejo", "Banda del Río Salí", 
      "Alderetes", "Concepción", "Aguilares", "Famaillá", "Monteros", "Lules", "Tafí del Valle"
    ]
  },
  salta: {
    name: "Salta",
    cities: ["Salta Capital", "Cafayate", "Tartagal", "San Ramón de la Nueva Orán", "Rosario de la Frontera"]
  },
  caba: {
    name: "Ciudad Autónoma de Bs. As.",
    cities: ["Palermo", "Belgrano", "Caballito", "Recoleta", "Puerto Madero", "Centro"]
  },
  cordoba: {
    name: "Córdoba",
    cities: ["Córdoba Capital", "Villa Carlos Paz", "Río Cuarto", "Alta Gracia", "Villa María"]
  }
};

export default function Home() {
  const [provincia, setProvincia] = useState("tucuman");
  
  // Obtenemos las ciudades de la provincia seleccionada
  const ciudadesDisponibles = locationData[provincia as keyof typeof locationData]?.cities || [];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-200 font-sans">
      
      {/* Navegación Superior */}
      <header className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
        <div className="text-2xl font-black tracking-tighter text-slate-900">
          Directorio<span className="text-blue-600">Pro</span>
        </div>
        <nav className="hidden md:flex gap-4 items-center">
          <button className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">Soy Profesional</button>
          <button className="text-sm font-bold bg-slate-900 text-white px-5 py-2.5 rounded-lg hover:bg-slate-800 transition-colors shadow-sm">
            Iniciar Sesión
          </button>
        </nav>
      </header>

      <main>
        {/* 1. SECCIÓN HERO (Principal) */}
        <section className="relative flex flex-col items-center justify-center px-4 pt-28 pb-24 text-center overflow-hidden">
          
          <div className="absolute inset-0 bg-slate-50 -z-20"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50 -z-10"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-200/40 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center w-full max-w-6xl">
            {/* Etiqueta de Confianza */}
            <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50/80 backdrop-blur-sm border border-emerald-200 text-emerald-700 font-semibold text-sm shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Primera consulta totalmente gratis desde la web
            </div>

            {/* Titular */}
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 max-w-4xl leading-[1.15]">
              Los mejores profesionales de tu zona, <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                al alcance de un click.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
              Encuentra expertos validados, chatea al instante por WhatsApp y reserva tu turno online. Sin intermediarios, rápido y seguro.
            </p>

            {/* Prueba Social (Avatares superpuestos) */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 bg-white/60 px-6 py-3 rounded-full border border-slate-200 shadow-sm backdrop-blur-md">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Usuario" />
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Usuario" />
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Usuario" />
                <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-50 flex items-center justify-center text-xs font-bold text-blue-600 shadow-sm">
                  +1k
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <div className="flex text-amber-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span><span className="text-slate-900 font-bold">4.9/5</span> por clientes</span>
              </div>
            </div>

            {/* BARRA DE BÚSQUEDA INTERACTIVA (100% ESTRICTA CON ETIQUETAS) */}
            <div className="w-full bg-white/95 backdrop-blur-xl p-2.5 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-slate-200/80 flex flex-col md:flex-row gap-2 transition-transform hover:-translate-y-1 duration-300">
              
              {/* 1. Profesión / Especialidad */}
              <div className="flex-[1.5] flex items-center px-4 py-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-transparent focus-within:border-blue-500 focus-within:bg-white transition-all cursor-pointer relative group">
                <Briefcase className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
                <select defaultValue="" className="w-full bg-transparent outline-none text-slate-700 font-medium appearance-none cursor-pointer">
                  <option value="" disabled>¿Qué especialista buscas?</option>
                  
                  <optgroup label="Ciencias Económicas">
                    <option value="contadores">Contadores Públicos</option>
                    <option value="impuestos">Asesoría Fiscal (ARCA / DGR)</option>
                    <option value="monotributo">Monotributo y Pymes</option>
                  </optgroup>

                  <optgroup label="Legales">
                    <option value="abogados_laborales">Abogados Laborales</option>
                    <option value="abogados_penales">Abogados Penales</option>
                    <option value="escribanos">Escribanos</option>
                  </optgroup>
                  
                  <optgroup label="Salud y Bienestar">
                    <option value="medicos">Médicos Clínicos</option>
                    <option value="psicologos">Psicólogos</option>
                    <option value="odontologos">Odontólogos</option>
                  </optgroup>

                  <optgroup label="Arquitectura y Diseño">
                    <option value="arquitectos">Arquitectos</option>
                    <option value="ingenieros">Ingenieros</option>
                    <option value="disenadores">Diseñadores Gráficos</option>
                  </optgroup>
                </select>
                <ChevronDown className="w-5 h-5 text-slate-400 absolute right-4 pointer-events-none group-hover:text-blue-500 transition-colors" />
              </div>

              {/* 2. Provincia */}
              <div className="flex-1 flex items-center px-4 py-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-transparent focus-within:border-blue-500 focus-within:bg-white transition-all cursor-pointer relative group">
                <MapPin className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
                <select 
                  value={provincia}
                  onChange={(e) => setProvincia(e.target.value)}
                  className="w-full bg-transparent outline-none text-slate-700 font-medium appearance-none cursor-pointer"
                >
                  {Object.entries(locationData).map(([key, data]) => (
                    <option key={key} value={key}>{data.name}</option>
                  ))}
                </select>
                <ChevronDown className="w-5 h-5 text-slate-400 absolute right-4 pointer-events-none group-hover:text-blue-500 transition-colors" />
              </div>

              {/* 3. Localidad (Se actualiza según la provincia) */}
              <div className={`flex-1 flex items-center px-4 py-3 rounded-xl border border-transparent transition-all cursor-pointer relative group
                ${provincia === 'nacional' ? 'bg-slate-100 opacity-50 cursor-not-allowed' : 'bg-slate-50 hover:bg-slate-100 focus-within:border-blue-500 focus-within:bg-white'}`}>
                <Building2 className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
                <select 
                  disabled={provincia === 'nacional'}
                  className="w-full bg-transparent outline-none text-slate-700 font-medium appearance-none cursor-pointer disabled:cursor-not-allowed"
                >
                  {provincia === 'nacional' ? (
                    <option value="">Atención Remota</option>
                  ) : (
                    <>
                      <option value="todas" className="font-bold">Toda la provincia</option>
                      {ciudadesDisponibles.map((ciudad) => (
                        <option key={ciudad} value={ciudad}>{ciudad}</option>
                      ))}
                    </>
                  )}
                </select>
                <ChevronDown className="w-5 h-5 text-slate-400 absolute right-4 pointer-events-none group-hover:text-blue-500 transition-colors" />
              </div>

              {/* Botón Buscar */}
              <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 transition-all flex items-center justify-center gap-2">
                Buscar
              </button>
            </div>
          </div>
        </section>

        {/* 2. CÓMO FUNCIONA */}
        <section className="py-24 px-6 max-w-7xl mx-auto bg-white">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">¿Por qué elegir nuestra plataforma?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Diseñamos una experiencia fluida para que encuentres la solución a tu problema hoy mismo.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-blue-100 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Perfiles Verificados</h3>
              <p className="text-slate-600 leading-relaxed">Todos los profesionales en nuestra red cuentan con su matrícula y credenciales validadas para tu total seguridad.</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-emerald-100 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Contacto Directo</h3>
              <p className="text-slate-600 leading-relaxed">Olvídate de formularios eternos. Envía un WhatsApp o usa nuestro chat interno para despejar tus dudas al instante.</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-purple-100 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">Gestión de Turnos</h3>
              <p className="text-slate-600 leading-relaxed">Revisa la agenda en tiempo real del especialista y reserva el horario que mejor se adapte a tu día.</p>
            </div>
          </div>
        </section>

        {/* 3. CATEGORÍAS VISUALES */}
        <section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Explora por especialidad</h2>
                <p className="text-slate-600 text-lg">Miles de expertos están listos para ayudarte en tu ciudad.</p>
              </div>
              <button className="hidden md:flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors">
                Ver todas las profesiones <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="group relative h-[350px] rounded-2xl overflow-hidden shadow-md cursor-pointer">
                <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80" alt="Abogados" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end h-full">
                  <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Abogados</h3>
                  <p className="text-slate-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Asesoramiento legal, penal, laboral y civil. Protege tus derechos hoy.</p>
                  <span className="inline-flex items-center text-blue-400 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Explorar especialistas <ArrowRight className="w-4 h-4 ml-1" /></span>
                </div>
              </div>

              <div className="group relative h-[350px] rounded-2xl overflow-hidden shadow-md cursor-pointer">
                <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80" alt="Contadores" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end h-full">
                  <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Contadores</h3>
                  <p className="text-slate-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Impuestos, balances y asesoría financiera integral para tu negocio.</p>
                  <span className="inline-flex items-center text-blue-400 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Explorar especialistas <ArrowRight className="w-4 h-4 ml-1" /></span>
                </div>
              </div>

              <div className="group relative h-[350px] rounded-2xl overflow-hidden shadow-md cursor-pointer">
                <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80" alt="Médicos" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end h-full">
                  <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Médicos</h3>
                  <p className="text-slate-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Pediatras, clínicos y especialistas en salud para cuidar de ti y tu familia.</p>
                  <span className="inline-flex items-center text-blue-400 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Explorar especialistas <ArrowRight className="w-4 h-4 ml-1" /></span>
                </div>
              </div>

              <div className="group relative h-[350px] rounded-2xl overflow-hidden shadow-md cursor-pointer">
                <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80" alt="Arquitectos" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end h-full">
                  <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Arquitectos</h3>
                  <p className="text-slate-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Diseño, planos, refacciones y dirección de obra para tu próximo proyecto.</p>
                  <span className="inline-flex items-center text-blue-400 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Explorar especialistas <ArrowRight className="w-4 h-4 ml-1" /></span>
                </div>
              </div>

            </div>
            
            <button className="mt-8 w-full md:hidden py-4 border-2 border-slate-200 rounded-xl text-slate-700 font-bold flex items-center justify-center hover:bg-slate-50 transition-colors">
              Ver todas las profesiones <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </section>

        {/* 4. CTA FINAL PARA PROFESIONALES */}
        <section className="relative bg-slate-900 py-24 px-6 text-center overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-500/20 blur-3xl"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">¿Sos un profesional experto?</h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Únete a nuestra red, aumenta tu visibilidad y recibe consultas directamente en tu WhatsApp. Gestiona tus turnos de forma inteligente.
            </p>
            <button className="bg-blue-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-500 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]">
              Regístrate gratis
            </button>
          </div>
        </section>

      </main>
    </div>
  );
}