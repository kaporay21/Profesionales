"use client";

import { useState } from "react";
import LinkNext from "next/link";
import { 
  LayoutDashboard, User, CalendarDays, MessageSquare, Settings, Bell, 
  LogOut, ShieldCheck, StickyNote, ChevronLeft, Calendar as CalendarIcon, 
  Clock, CheckCircle2, XCircle, AlertCircle, MessageCircle, MoreVertical, 
  Check, Video, MapPin, ChevronRight
} from "lucide-react";

// Base de datos simulada de turnos (Ahora con modalidad)
const turnosMock = [
  {
    id: 1,
    cliente: "Mariana López",
    servicio: "Asesoría Monotributo y Facturación",
    fecha: "Hoy, 10:30 AM",
    estado: "pendiente",
    esNuevo: true,
    modalidad: "online"
  },
  {
    id: 2,
    cliente: "Carlos Rodríguez",
    servicio: "Liquidación Mensual Ingresos Brutos",
    fecha: "Hoy, 14:00 PM",
    estado: "confirmado",
    esNuevo: false,
    modalidad: "presencial"
  },
  {
    id: 3,
    cliente: "Empresa Tech Solutions SRL",
    servicio: "Consulta Alta Empleadores ARCA",
    fecha: "Mañana, 09:00 AM",
    estado: "confirmado",
    esNuevo: false,
    modalidad: "online"
  },
  {
    id: 4,
    cliente: "Juan Pérez",
    servicio: "Planificación Fiscal Anual",
    fecha: "Jueves 5, 11:00 AM",
    estado: "cancelado",
    esNuevo: false,
    modalidad: "presencial"
  }
];

export default function MisTurnos() {
  const [filtroActivo, setFiltroActivo] = useState("todos");

  const turnosFiltrados = turnosMock.filter(turno => {
    if (filtroActivo === "todos") return true;
    return turno.estado === filtroActivo;
  });

  return (
    <div className="min-h-screen bg-[#f4f7fb] flex flex-col md:flex-row font-sans selection:bg-blue-200">
      
      {/* SIDEBAR (Menú Lateral) */}
      <aside className="w-full md:w-72 bg-slate-950 text-slate-300 flex flex-col hidden md:flex sticky top-0 h-screen shadow-2xl z-20">
        <div className="p-6 md:p-8">
          <LinkNext href="/" className="text-2xl font-black tracking-tighter text-white flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
              <span className="text-white text-lg leading-none">D</span>
            </div>
            Directorio<span className="text-blue-500">Pro</span>
          </LinkNext>
        </div>

        <div className="px-6 mb-8">
          <LinkNext href="/dashboard/perfil" className="bg-slate-900/50 p-4 rounded-2xl border border-slate-800/50 flex items-center gap-4 hover:border-slate-700 transition-colors group">
            <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=100&q=80" alt="Logo Nexo" className="w-12 h-12 rounded-xl object-cover border-2 border-slate-700 shadow-sm group-hover:border-blue-500 transition-colors" />
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-bold text-white truncate flex items-center gap-1.5">
                NEXO <span title="Verificado"><ShieldCheck className="w-3.5 h-3.5 text-blue-400" /></span>
              </h3>
              <p className="text-xs text-slate-400 truncate">Estudio Contable</p>
            </div>
          </LinkNext>
        </div>

        <nav className="flex-1 px-4 space-y-1.5 font-medium">
          <LinkNext href="/dashboard" className="w-full flex items-center gap-3 text-slate-400 hover:text-white px-4 py-3 rounded-xl hover:bg-slate-900 transition-all">
            <LayoutDashboard className="w-5 h-5" /> Resumen
          </LinkNext>
          <LinkNext href="/dashboard/perfil" className="w-full flex items-center gap-3 text-slate-400 hover:text-white px-4 py-3 rounded-xl hover:bg-slate-900 transition-all">
            <User className="w-5 h-5" /> Mi Perfil Público
          </LinkNext>
          
          <LinkNext href="/dashboard/turnos" className="w-full flex items-center justify-between bg-gradient-to-r from-blue-600/10 to-transparent text-blue-400 px-4 py-3 rounded-xl border-l-2 border-blue-500 transition-colors shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
            <div className="flex items-center gap-3">
              <CalendarDays className="w-5 h-5" /> Mis Turnos
            </div>
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-sm shadow-blue-500/50">1</span>
          </LinkNext>
          
          <button className="w-full flex items-center gap-3 text-slate-400 hover:text-white px-4 py-3 rounded-xl hover:bg-slate-900 transition-all">
            <MessageSquare className="w-5 h-5" /> Mensajes
          </button>
          <button className="w-full flex items-center gap-3 text-slate-400 hover:text-white px-4 py-3 rounded-xl hover:bg-slate-900 transition-all group">
            <StickyNote className="w-5 h-5 group-hover:text-amber-400 transition-colors" /> Notas y Recordatorios
          </button>
        </nav>

        <div className="p-4 m-4 bg-slate-900/50 rounded-2xl border border-slate-800">
          <LinkNext href="/" className="w-full flex items-center justify-center gap-2 text-slate-400 hover:text-white px-4 py-2 text-sm font-semibold transition-colors">
            <LogOut className="w-4 h-4" /> Cerrar Sesión
          </LinkNext>
        </div>
      </aside>

      {/* ÁREA DE TRABAJO (Gestión de Turnos) */}
      <main className="flex-1 flex flex-col min-h-screen overflow-x-hidden relative">
        
        {/* Topbar */}
        <header className="bg-white/80 backdrop-blur-xl border-b border-slate-200/50 py-3 px-8 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <LinkNext href="/dashboard" className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">
              <ChevronLeft className="w-4 h-4" /> Volver al Resumen
            </LinkNext>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-400 hover:text-slate-700 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
            </button>
          </div>
        </header>

        <div className="p-6 md:p-8 max-w-6xl mx-auto w-full space-y-8 pb-24">
          
          {/* Cabecera Principal */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Agenda y Turnos</h2>
              <p className="text-slate-500 font-medium mt-1">Gestiona las solicitudes y organiza tu tiempo.</p>
            </div>
            <button className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-xl font-bold text-sm hover:bg-slate-50 transition-colors shadow-sm flex items-center gap-2">
              <Settings className="w-4 h-4" /> Configurar Horarios
            </button>
          </div>

          {/* Tarjetas de Resumen KPI */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] flex items-center gap-5 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 text-blue-600 flex items-center justify-center border border-blue-100 shadow-inner">
                <CalendarDays className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-0.5">Para hoy</p>
                <p className="text-3xl font-black text-slate-900">2 <span className="text-sm font-semibold text-slate-400 ml-1">turnos</span></p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 p-6 rounded-3xl shadow-lg shadow-amber-500/20 flex items-center gap-5 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 cursor-pointer" onClick={() => setFiltroActivo("pendiente")}>
              <div className="w-14 h-14 rounded-2xl bg-white/20 text-white flex items-center justify-center backdrop-blur-md z-10 border border-white/20">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div className="z-10">
                <p className="text-sm font-bold text-amber-50 uppercase tracking-wider mb-0.5">Pendientes</p>
                <p className="text-3xl font-black text-white flex items-center gap-3">
                  1 
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </span>
                </p>
              </div>
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] flex items-center gap-5 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 text-emerald-600 flex items-center justify-center border border-emerald-100 shadow-inner">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-0.5">Completados</p>
                <p className="text-3xl font-black text-slate-900">24 <span className="text-sm font-semibold text-slate-400 ml-1">este mes</span></p>
              </div>
            </div>
          </div>

          {/* NUEVO: Mini Calendario Semanal (Selector Visual) */}
          <div className="bg-white rounded-2xl border border-slate-200 p-2 flex justify-between items-center overflow-x-auto hide-scrollbar shadow-sm">
            {[
              { dia: "Lun", num: "1", activo: false },
              { dia: "Mar", num: "2", activo: true }, // Asumimos que hoy es Martes 2
              { dia: "Mié", num: "3", activo: false },
              { dia: "Jue", num: "4", activo: false },
              { dia: "Vie", num: "5", activo: false },
              { dia: "Sáb", num: "6", activo: false },
              { dia: "Dom", num: "7", activo: false },
            ].map((d, i) => (
              <button key={i} className={`flex flex-col items-center justify-center min-w-[4rem] py-2.5 rounded-xl transition-all ${d.activo ? "bg-blue-600 text-white shadow-md shadow-blue-500/30" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"}`}>
                <span className={`text-xs font-bold uppercase ${d.activo ? "text-blue-100" : "text-slate-400"}`}>{d.dia}</span>
                <span className="text-lg font-black mt-0.5">{d.num}</span>
                {d.activo && <span className="w-1 h-1 bg-white rounded-full mt-1"></span>}
              </button>
            ))}
          </div>

          {/* Filtros de Pestañas Mejorados */}
          <div className="flex flex-wrap gap-1 bg-slate-200/50 p-1 rounded-xl w-fit">
            <button 
              onClick={() => setFiltroActivo("todos")}
              className={`px-6 py-2.5 text-sm font-bold rounded-lg transition-all ${filtroActivo === "todos" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
            >
              Todos
            </button>
            <button 
              onClick={() => setFiltroActivo("pendiente")}
              className={`px-6 py-2.5 text-sm font-bold rounded-lg transition-all flex items-center gap-2 ${filtroActivo === "pendiente" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
            >
              Pendientes
              {filtroActivo !== "pendiente" && <span className="w-2 h-2 rounded-full bg-amber-500"></span>}
            </button>
            <button 
              onClick={() => setFiltroActivo("confirmado")}
              className={`px-6 py-2.5 text-sm font-bold rounded-lg transition-all ${filtroActivo === "confirmado" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
            >
              Confirmados
            </button>
          </div>

          {/* Lista de Turnos Premium */}
          <div className="space-y-4">
            {turnosFiltrados.length === 0 ? (
              <div className="bg-white/50 border-2 border-dashed border-slate-200 p-16 rounded-3xl text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mb-4">
                  <CalendarIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Agenda despejada</h3>
                <p className="text-slate-500 font-medium">No tienes turnos bajo este filtro actualmente.</p>
              </div>
            ) : (
              turnosFiltrados.map((turno) => (
                <div key={turno.id} className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-lg hover:shadow-slate-200/50 hover:border-blue-200 transition-all duration-300 p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-6 group">
                  
                  <div className="flex gap-4 sm:gap-5 items-start lg:items-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center font-black text-slate-600 text-xl border border-slate-200 shadow-inner shrink-0 relative">
                      {turno.cliente.charAt(0)}
                      {/* Indicador de Modalidad sobre el Avatar */}
                      <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-sm border border-slate-100">
                        {turno.modalidad === "online" ? <Video className="w-3.5 h-3.5 text-blue-500" /> : <MapPin className="w-3.5 h-3.5 text-emerald-500" />}
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1.5">
                        <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">{turno.cliente}</h3>
                        {turno.esNuevo && (
                          <span className="bg-blue-50 text-blue-600 text-[10px] uppercase font-black tracking-widest px-2.5 py-0.5 rounded-full border border-blue-100">Cliente Nuevo</span>
                        )}
                      </div>
                      <p className="text-sm font-bold text-slate-500 mb-3">{turno.servicio}</p>
                      
                      <div className="flex flex-wrap items-center gap-3 text-sm font-semibold">
                        <span className="flex items-center gap-1.5 bg-slate-50 text-slate-700 px-3 py-1 rounded-lg border border-slate-100">
                          <Clock className="w-4 h-4 text-slate-400" /> {turno.fecha}
                        </span>
                        
                        {turno.estado === "pendiente" && <span className="flex items-center gap-1.5 text-amber-700 bg-amber-50 px-3 py-1 rounded-lg border border-amber-200/60"><AlertCircle className="w-4 h-4 text-amber-500" /> Por Confirmar</span>}
                        {turno.estado === "confirmado" && <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200/60"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Confirmado</span>}
                        {turno.estado === "cancelado" && <span className="flex items-center gap-1.5 text-red-700 bg-red-50 px-3 py-1 rounded-lg border border-red-200/60"><XCircle className="w-4 h-4 text-red-500" /> Cancelado</span>}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 border-t lg:border-t-0 lg:border-l border-slate-100 pt-5 lg:pt-0 lg:pl-6 shrink-0 w-full lg:w-auto mt-2 lg:mt-0">
                    
                    <button title="Contactar por WhatsApp" className="flex-1 lg:flex-none flex items-center justify-center px-4 py-2.5 bg-slate-50 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 hover:border-emerald-200 rounded-xl font-bold text-sm transition-all border border-slate-200 gap-2">
                      <MessageCircle className="w-4 h-4" /> <span className="lg:hidden">Mensaje</span>
                    </button>

                    {turno.estado === "pendiente" ? (
                      <button className="flex-[2] lg:flex-none flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 transform hover:-translate-y-0.5">
                        <Check className="w-4 h-4" /> Aceptar Turno
                      </button>
                    ) : (
                      <button className="flex-[2] lg:flex-none flex items-center justify-center gap-1 text-blue-600 font-bold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors">
                        Ver detalles <ChevronRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                </div>
              ))
            )}
          </div>

        </div>
      </main>
    </div>
  );
}