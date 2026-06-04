import { MapPin, MessageCircle, Calendar as CalendarIcon, CheckCircle, MessageSquare, ImageIcon } from "lucide-react";

export default function PerfilProfesional() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-24 md:pb-12">
      
      {/* Navbar simplificado */}
      <header className="px-6 py-4 bg-white border-b border-slate-200">
        <div className="text-xl font-bold tracking-tighter text-slate-900">
          Directorio<span className="text-blue-600">Pro</span>
        </div>
      </header>

      {/* Portada */}
      <div className="bg-slate-900 h-32 w-full"></div>
      
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Columna Izquierda: Información (70%) */}
          <div className="flex-1">
            
            {/* Tarjeta de Presentación */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-6 relative">
              
              {/* Contenedor del Logo (Reemplazar src con tu archivo en public) */}
              <div className="w-24 h-24 bg-white rounded-full border-4 border-white shadow-md overflow-hidden absolute -top-12 flex items-center justify-center">
                {/* 
                  Instrucción: Cambia la ruta "/logo.jpg" por el nombre exacto 
                  de la imagen de tu logo que subas a la carpeta "public" 
                */}
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=256&q=80" 
                  alt="Logo del Profesional" 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              <div className="mt-12">
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-2xl font-bold text-slate-900">NEXO: Asesoría y Gestión Empresarial</h1>
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-lg text-slate-600 font-medium mb-4">Estudio Contable • Contadores Públicos</p>
                
                <div className="flex items-center gap-2 text-slate-500 mb-4 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>San Miguel de Tucumán, Tucumán</span>
                </div>

                {/* Etiquetas de Especialidad */}
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold">Contabilidad</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold">Liquidación de Impuestos</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold">Ingresos Brutos</span>
                </div>
              </div>
            </div>

            {/* Biografía y Servicios */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-6">
              <h2 className="text-xl font-bold mb-4">Sobre nosotros</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                En NEXO brindamos soluciones integrales para emprendedores, pymes y empresas. Nos especializamos en la optimización fiscal, gestión contable y asesoramiento continuo para que puedas enfocarte en hacer crecer tu negocio mientras nosotros cuidamos tus números.
              </p>
              
              <h3 className="font-semibold mb-3">Servicios Destacados:</h3>
              <ul className="space-y-2">
                {["Inscripciones y recategorizaciones", "Planes de pago y moratorias", "Asesoría financiera integral"].map((servicio, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-600">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>{servicio}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Galería de Fotos (Nueva Sección) */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-slate-400" />
                Galería de Fotos
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Marcadores de posición para las fotos. Puedes cambiar la URL por fotos en tu carpeta public */}
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80" alt="Oficina 1" className="w-full h-32 object-cover rounded-lg border border-slate-200 hover:opacity-90 transition-opacity cursor-pointer" />
                <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=400&q=80" alt="Oficina 2" className="w-full h-32 object-cover rounded-lg border border-slate-200 hover:opacity-90 transition-opacity cursor-pointer" />
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80" alt="Equipo" className="w-full h-32 object-cover rounded-lg border border-slate-200 hover:opacity-90 transition-opacity cursor-pointer" />
              </div>
            </div>

          </div>

          {/* Columna Derecha: Panel de Acción Sticky (30%) */}
          <div className="w-full md:w-80">
            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 sticky top-6">
              <h3 className="text-lg font-bold mb-4 text-center">Contactar o Reservar</h3>
              
              {/* Botones de Contacto */}
              <div className="flex flex-col gap-3 mb-6">
                {/* Botón WhatsApp */}
                <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </button>

                {/* Botón Chat Interno (Nuevo) */}
                <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm">
                  <MessageSquare className="w-5 h-5" />
                  Chat Interno
                </button>
              </div>

              <div className="flex items-center gap-4 my-4">
                <div className="h-px bg-slate-200 flex-1"></div>
                <span className="text-xs text-slate-400 font-medium uppercase">O agendar turno</span>
                <div className="h-px bg-slate-200 flex-1"></div>
              </div>

              {/* Calendario Simulado */}
              <div className="border border-slate-200 rounded-lg p-4 mb-4 bg-slate-50">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold text-sm">Próximos turnos</span>
                  <CalendarIcon className="w-4 h-4 text-slate-400" />
                </div>
                <div className="space-y-2">
                  <button className="w-full flex items-center justify-between p-2 rounded border border-slate-200 bg-white hover:border-blue-500 transition-colors text-sm">
                    <span className="font-medium">Jueves 15</span>
                    <span className="text-blue-600 font-semibold text-xs bg-blue-50 px-2 py-1 rounded">10:00 AM</span>
                  </button>
                  <button className="w-full flex items-center justify-between p-2 rounded border border-slate-200 bg-white hover:border-blue-500 transition-colors text-sm">
                    <span className="font-medium">Viernes 16</span>
                    <span className="text-blue-600 font-semibold text-xs bg-blue-50 px-2 py-1 rounded">11:30 AM</span>
                  </button>
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors shadow-sm">
                Confirmar Turno Gratis
              </button>
              
              <p className="text-center text-xs text-slate-400 mt-4">
                No se requiere tarjeta de crédito
              </p>
            </div>
          </div>

        </div>
      </main>

      {/* Barra Flotante Mobile (Actualizada) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-3 flex gap-2 md:hidden z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <button className="flex-1 bg-emerald-500 text-white font-bold py-2 rounded-lg flex items-center justify-center gap-1 text-sm">
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </button>
        <button className="flex-1 bg-slate-900 text-white font-bold py-2 rounded-lg flex items-center justify-center gap-1 text-sm">
          <MessageSquare className="w-4 h-4" />
          Chat
        </button>
        <button className="flex-1 bg-blue-600 text-white font-bold py-2 rounded-lg text-sm">
          Turno
        </button>
      </div>

    </div>
  );
}