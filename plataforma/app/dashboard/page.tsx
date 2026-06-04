import { 
  LayoutDashboard, 
  User, 
  CalendarDays, 
  MessageSquare, 
  Settings, 
  Bell, 
  TrendingUp, 
  Eye, 
  CheckCircle2, 
  Clock,
  LogOut,
  Lock,
  Link,
  ChevronRight,
  Activity,
  CalendarPlus,
  ShieldCheck,
  StickyNote
} from "lucide-react";

// Datos simulados para el dashboard
const mockAppointments = [
  { id: 1, client: "Juan Pérez", service: "Consulta por Alta en ARCA", time: "10:00 AM", status: "Confirmado", isNew: false, avatar: "J" },
  { id: 2, client: "María Gómez", service: "Liquidación Ingresos Brutos", time: "11:30 AM", status: "Confirmado", isNew: false, avatar: "M" },
  { id: 3, client: "Carlos Ruiz", service: "Asesoría Financiera", time: "16:00 PM", status: "Pendiente", isNew: true, avatar: "C" },
];

export default function DashboardProfesional() {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col md:flex-row font-sans selection:bg-blue-200">
      
      {/* 1. SIDEBAR (Menú Lateral Izquierdo) PREMIUM */}
      <aside className="w-full md:w-72 bg-slate-950 text-slate-300 flex flex-col hidden md:flex sticky top-0 h-screen shadow-2xl z-20">
        
        {/* Cabecera del Sidebar */}
        <div className="p-6 md:p-8">
          <div className="text-2xl font-black tracking-tighter text-white flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
              <span className="text-white text-lg leading-none">D</span>
            </div>
            Directorio<span className="text-blue-500">Pro</span>
          </div>
        </div>

        {/* Perfil Rápido */}
        <div className="px-6 mb-8">
          <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-800/50 flex items-center gap-4 hover:border-slate-700 transition-colors cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=100&q=80" 
              alt="Logo Nexo" 
              className="w-12 h-12 rounded-xl object-cover border-2 border-slate-700 shadow-sm" 
            />
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-bold text-white truncate flex items-center gap-1.5">
                NEXO
                <span title="Perfil Verificado" className="flex items-center"><ShieldCheck className="w-3.5 h-3.5 text-blue-400" /></span>
              </h3>
              <p className="text-xs text-slate-400 truncate">Estudio Contable</p>
            </div>
          </div>
        </div>

        {/* Navegación */}
        <nav className="flex-1 px-4 space-y-1.5 overflow-y-auto font-medium">
          <button className="w-full flex items-center gap-3 bg-gradient-to-r from-blue-600/10 to-transparent text-blue-400 px-4 py-3 rounded-xl border-l-2 border-blue-500 transition-colors">
            <LayoutDashboard className="w-5 h-5" /> Resumen
          </button>
          
          <button className="w-full flex items-center gap-3 hover:bg-slate-900 text-slate-400 hover:text-white px-4 py-3 rounded-xl transition-all border-l-2 border-transparent">
            <User className="w-5 h-5" /> Mi Perfil Público
          </button>
          
          <button className="w-full flex items-center justify-between hover:bg-slate-900 text-slate-400 hover:text-white px-4 py-3 rounded-xl transition-all border-l-2 border-transparent group">
            <div className="flex items-center gap-3">
              <CalendarDays className="w-5 h-5" /> Mis Turnos
            </div>
            <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm group-hover:scale-110 transition-transform">3 NUEVOS</span>
          </button>
          
          <button className="w-full flex items-center gap-3 hover:bg-slate-900 text-slate-400 hover:text-white px-4 py-3 rounded-xl transition-all border-l-2 border-transparent">
            <MessageSquare className="w-5 h-5" /> Mensajes
          </button>

          {/* NUEVO: Botón de Notas y Recordatorios */}
          <button className="w-full flex items-center gap-3 hover:bg-slate-900 text-slate-400 hover:text-white px-4 py-3 rounded-xl transition-all border-l-2 border-transparent group">
            <StickyNote className="w-5 h-5 group-hover:text-amber-400 transition-colors" /> Notas y Recordatorios
          </button>
          
          <button className="w-full flex items-center gap-3 hover:bg-slate-900 text-slate-400 hover:text-white px-4 py-3 rounded-xl transition-all border-l-2 border-transparent">
            <Settings className="w-5 h-5" /> Configuración
          </button>
        </nav>

        {/* Botón Salir */}
        <div className="p-4 m-4 bg-slate-900/50 rounded-2xl border border-slate-800">
          <button className="w-full flex items-center justify-center gap-2 text-slate-400 hover:text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors">
            <LogOut className="w-4 h-4" /> Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* 2. ÁREA DE TRABAJO */}
      <main className="flex-1 flex flex-col min-h-screen overflow-x-hidden relative">
        
        {/* Topbar Glassmorphism */}
        <header className="bg-white/70 backdrop-blur-xl border-b border-slate-200/50 py-3 px-6 md:px-8 flex items-center justify-between sticky top-0 z-10">
          <div className="md:hidden text-xl font-black tracking-tighter text-slate-900">
            D<span className="text-blue-600">Pro</span>
          </div>
          
          <div className="hidden md:flex flex-col">
            <h1 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Hoy es Jueves, 15 de Agosto</h1>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center gap-2 bg-slate-900 text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors shadow-sm">
              <CalendarPlus className="w-4 h-4" /> Nuevo Turno Manual
            </button>
            <div className="h-6 w-px bg-slate-200 hidden sm:block mx-2"></div>
            <button className="relative p-2.5 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        {/* Contenido Principal */}
        <div className="p-6 md:p-8 max-w-6xl mx-auto w-full space-y-8">
          
          {/* Bienvenida y Widget de Completitud */}
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-2">¡Hola, equipo de NEXO! 👋</h2>
              <p className="text-slate-500 text-lg">Aquí está el rendimiento de tu estudio en la plataforma.</p>
            </div>
            
            {/* Widget de Gamificación */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4 w-full lg:w-auto">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path className="text-slate-100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="text-blue-600" strokeWidth="3" strokeDasharray="75, 100" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <span className="absolute text-xs font-bold text-slate-700">75%</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Tu perfil está casi listo</h4>
                <button className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1 mt-0.5">
                  <Link className="w-3 h-3" /> Vincular Instagram (+25%)
                </button>
              </div>
            </div>
          </div>

          {/* Tarjetas de Métricas (KPIs) con Gráficos Simulados */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* KPI 1 */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Visitas al Perfil</h3>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Eye className="w-6 h-6" />
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-4xl font-black text-slate-900 mb-1">142</p>
                  <p className="text-sm text-emerald-600 font-bold flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" /> +12% esta semana
                  </p>
                </div>
                {/* Mini Gráfico de Barras Creado con Divs */}
                <div className="flex items-end gap-1 h-12">
                  <div className="w-2 bg-blue-100 rounded-t-sm h-4"></div>
                  <div className="w-2 bg-blue-100 rounded-t-sm h-6"></div>
                  <div className="w-2 bg-blue-100 rounded-t-sm h-5"></div>
                  <div className="w-2 bg-blue-200 rounded-t-sm h-8"></div>
                  <div className="w-2 bg-blue-600 rounded-t-sm h-12 shadow-[0_0_10px_rgba(37,99,235,0.4)]"></div>
                </div>
              </div>
            </div>

            {/* KPI 2 */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Contactos (WhatsApp)</h3>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <MessageSquare className="w-6 h-6" />
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-4xl font-black text-slate-900 mb-1">28</p>
                  <p className="text-sm text-slate-500 font-medium">Leads potenciales</p>
                </div>
                <div className="flex items-end gap-1 h-12">
                  <div className="w-2 bg-emerald-100 rounded-t-sm h-3"></div>
                  <div className="w-2 bg-emerald-100 rounded-t-sm h-4"></div>
                  <div className="w-2 bg-emerald-100 rounded-t-sm h-7"></div>
                  <div className="w-2 bg-emerald-200 rounded-t-sm h-5"></div>
                  <div className="w-2 bg-emerald-500 rounded-t-sm h-9 shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
                </div>
              </div>
            </div>

            {/* KPI 3 - Premium Locked */}
            <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden flex flex-col justify-between">
              {/* Efecto de luz de fondo */}
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-blue-500/20 blur-2xl"></div>
              
              <div className="relative z-10 flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Facturación</h3>
                <span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 border border-white/10">
                  <Lock className="w-3 h-3" /> PRO
                </span>
              </div>
              <div className="relative z-10">
                <p className="text-4xl font-black text-white/50 mb-2">$0,00</p>
                <button className="text-sm font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors">
                  Activar pagos online <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Sección de Turnos con Tabla Mejorada */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 md:p-8 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-xl">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900">Agenda de Hoy</h3>
                  <p className="text-sm text-slate-500 font-medium">3 turnos programados</p>
                </div>
              </div>
              <button className="text-sm font-bold text-slate-700 bg-white border border-slate-200 px-5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors shadow-sm">
                Ver Calendario Completo
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white border-b border-slate-100 text-slate-400 text-xs font-black uppercase tracking-widest">
                    <th className="p-5 pl-8">Paciente / Cliente</th>
                    <th className="p-5">Motivo</th>
                    <th className="p-5">Horario</th>
                    <th className="p-5">Estado</th>
                    <th className="p-5 pr-8 text-right">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {mockAppointments.map((apt) => (
                    <tr key={apt.id} className="hover:bg-slate-50/80 transition-colors group">
                      <td className="p-5 pl-8">
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-sm
                            ${apt.isNew ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-700'}`}>
                            {apt.avatar}
                          </div>
                          <div>
                            <p className="font-bold text-slate-900">{apt.client}</p>
                            {apt.isNew && <span className="text-[10px] font-bold text-blue-600 uppercase">Nuevo Cliente</span>}
                          </div>
                        </div>
                      </td>
                      <td className="p-5 text-slate-600 text-sm font-semibold">{apt.service}</td>
                      <td className="p-5">
                        <div className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg">
                          <Clock className="w-4 h-4 text-slate-400" /> {apt.time}
                        </div>
                      </td>
                      <td className="p-5">
                        {apt.status === "Confirmado" ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-100">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Confirmado
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-50 text-amber-700 border border-amber-100">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Pendiente
                          </span>
                        )}
                      </td>
                      <td className="p-5 pr-8 text-right">
                        <button className="text-sm font-bold text-blue-600 hover:text-white hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors border border-transparent hover:border-blue-600">
                          Atender
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}