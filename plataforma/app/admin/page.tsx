"use client";

import { useState } from "react";
import LinkNext from "next/link";
import { 
  Users, Briefcase, TrendingUp, ShieldAlert, Activity, 
  Settings, LogOut, CheckCircle2, XCircle, Search, 
  Bell, ChevronDown, Filter, FileText, ArrowUpRight, AlertCircle 
} from "lucide-react";

// Datos simulados para tu revisión como Super Admin
const aprobacionesPendientes = [
  {
    id: 1,
    nombre: "Estudio Jurídico Álvarez",
    profesion: "Abogados Laborales",
    ubicacion: "Capital Federal (CABA)",
    fecha: "Hace 2 horas",
    estado: "Revisión Manual",
    avatar: "E"
  },
  {
    id: 2,
    nombre: "García & Asociados",
    profesion: "Contador Público",
    ubicacion: "San Miguel de Tucumán",
    fecha: "Hace 5 horas",
    estado: "Documentos OK",
    avatar: "G"
  },
  {
    id: 3,
    nombre: "Lic. Clara Vega",
    profesion: "Psicología Clínica",
    ubicacion: "San Andrés",
    fecha: "Ayer",
    estado: "Esperando Matrícula",
    avatar: "C"
  }
];

export default function SuperAdminDashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-slate-100 flex font-sans selection:bg-indigo-200">
      
      {/* SIDEBAR ADMIN (Diseño más oscuro y autoritario) */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col hidden lg:flex sticky top-0 h-screen shadow-2xl z-20">
        <div className="p-6">
          <LinkNext href="/" className="text-xl font-black tracking-tighter text-white flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-600/20">
              <span className="text-white text-lg leading-none">A</span>
            </div>
            Admin<span className="text-indigo-400">Panel</span>
          </LinkNext>
        </div>

        <div className="px-6 mb-6">
          <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-400 to-slate-600 flex items-center justify-center font-bold text-white shadow-inner">
              CEO
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-bold text-white truncate">Super Admin</h3>
              <p className="text-xs text-indigo-400 font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Online
              </p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1 font-medium text-sm">
          <p className="px-4 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 mt-4">General</p>
          <LinkNext href="/admin" className="w-full flex items-center gap-3 bg-indigo-600 text-white px-4 py-2.5 rounded-lg shadow-md shadow-indigo-600/20">
            <Activity className="w-4 h-4" /> Visión General
          </LinkNext>
          <button className="w-full flex items-center justify-between text-slate-400 hover:text-white px-4 py-2.5 rounded-lg hover:bg-slate-800 transition-all">
            <div className="flex items-center gap-3"><Briefcase className="w-4 h-4" /> Profesionales</div>
            <span className="bg-slate-800 text-slate-300 text-[10px] font-bold px-2 py-0.5 rounded-full">1,204</span>
          </button>
          <button className="w-full flex items-center gap-3 text-slate-400 hover:text-white px-4 py-2.5 rounded-lg hover:bg-slate-800 transition-all">
            <Users className="w-4 h-4" /> Clientes
          </button>

          <p className="px-4 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 mt-6">Moderación</p>
          <button className="w-full flex items-center justify-between text-slate-400 hover:text-white px-4 py-2.5 rounded-lg hover:bg-slate-800 transition-all group">
            <div className="flex items-center gap-3"><ShieldAlert className="w-4 h-4 group-hover:text-amber-400 transition-colors" /> Aprobaciones</div>
            <span className="bg-amber-500/10 text-amber-500 border border-amber-500/20 text-[10px] font-bold px-2 py-0.5 rounded-full">3</span>
          </button>
          <button className="w-full flex items-center gap-3 text-slate-400 hover:text-white px-4 py-2.5 rounded-lg hover:bg-slate-800 transition-all">
            <FileText className="w-4 h-4" /> Reseñas y Reportes
          </button>

          <p className="px-4 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 mt-6">Sistema</p>
          <button className="w-full flex items-center gap-3 text-slate-400 hover:text-white px-4 py-2.5 rounded-lg hover:bg-slate-800 transition-all">
            <Settings className="w-4 h-4" /> Configuración
          </button>
        </nav>

        <div className="p-4 border-t border-slate-800 mt-auto">
          <LinkNext href="/" className="w-full flex items-center gap-3 text-slate-400 hover:text-white px-4 py-2 text-sm font-semibold transition-colors">
            <LogOut className="w-4 h-4" /> Salir del Panel
          </LinkNext>
        </div>
      </aside>

      {/* ÁREA DE TRABAJO ADMIN */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto relative">
        
        {/* Topbar Admin */}
        <header className="bg-white border-b border-slate-200 py-3 px-8 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center bg-slate-100 rounded-lg px-3 py-1.5 border border-slate-200 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-200 transition-all w-96 hidden md:flex">
            <Search className="w-4 h-4 text-slate-400 mr-2" />
            <input 
              type="text" 
              placeholder="Buscar usuarios, emails o IDs..." 
              className="bg-transparent outline-none text-sm font-medium text-slate-700 w-full"
            />
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <LinkNext href="/" className="text-sm font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
              Ver sitio en vivo <ArrowUpRight className="w-4 h-4" />
            </LinkNext>
            <div className="h-6 w-px bg-slate-200 mx-2"></div>
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
              <Bell className="w-5 h-5" />
            </button>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto w-full space-y-8">
          
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Métricas del Sistema</h1>
            <p className="text-slate-500 font-medium mt-1">Monitorea el crecimiento y la salud de tu plataforma.</p>
          </div>

          {/* Tarjetas de Métricas (KPIs Estilo SaaS) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Briefcase className="w-5 h-5" />
                </div>
                <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                  <TrendingUp className="w-3 h-3" /> +12%
                </span>
              </div>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Profesionales Activos</p>
              <h3 className="text-3xl font-black text-slate-900 mt-1">1,204</h3>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                  <TrendingUp className="w-3 h-3" /> +28%
                </span>
              </div>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Clientes Registrados</p>
              <h3 className="text-3xl font-black text-slate-900 mt-1">8,430</h3>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Activity className="w-5 h-5" />
                </div>
              </div>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Turnos (Mes Actual)</p>
              <h3 className="text-3xl font-black text-slate-900 mt-1">3,192</h3>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-slate-700 shadow-lg flex flex-col relative overflow-hidden text-white">
              <div className="flex justify-between items-start mb-4 z-10">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <ShieldAlert className="w-5 h-5" />
                </div>
              </div>
              <p className="text-sm font-bold text-slate-300 uppercase tracking-wider z-10">Acción Requerida</p>
              <h3 className="text-3xl font-black mt-1 z-10">3 <span className="text-lg font-medium text-slate-400">pendientes</span></h3>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Tabla de Control y Moderación */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
            <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-extrabold text-slate-900">Verificaciones de Perfil</h3>
                <p className="text-sm text-slate-500 font-medium">Revisa las credenciales de los nuevos profesionales para mantener la confianza.</p>
              </div>
              <button className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-100 transition-colors">
                <Filter className="w-4 h-4" /> Filtrar
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500 font-bold">
                    <th className="p-4 pl-6">Profesional / Estudio</th>
                    <th className="p-4">Categoría & Ubicación</th>
                    <th className="p-4">Estado de Matrícula</th>
                    <th className="p-4 text-right pr-6">Acciones (Admin)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {aprobacionesPendientes.map((usuario) => (
                    <tr key={usuario.id} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="p-4 pl-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center text-sm shrink-0">
                            {usuario.avatar}
                          </div>
                          <div>
                            <p className="font-bold text-slate-900">{usuario.nombre}</p>
                            <p className="text-xs text-slate-500 font-medium">Registrado: {usuario.fecha}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="text-sm font-bold text-slate-700">{usuario.profesion}</p>
                        <p className="text-xs text-slate-500">{usuario.ubicacion}</p>
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold border 
                          ${usuario.estado === 'Documentos OK' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 
                            usuario.estado === 'Revisión Manual' ? 'bg-amber-50 text-amber-700 border-amber-200' : 
                            'bg-slate-100 text-slate-600 border-slate-200'}`}>
                          {usuario.estado === 'Documentos OK' && <CheckCircle2 className="w-3.5 h-3.5" />}
                          {usuario.estado === 'Revisión Manual' && <AlertCircle className="w-3.5 h-3.5" />}
                          {usuario.estado}
                        </span>
                      </td>
                      <td className="p-4 pr-6 text-right">
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button title="Rechazar" className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                            <XCircle className="w-5 h-5" />
                          </button>
                          <button title="Aprobar y Verificar" className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors">
                            <CheckCircle2 className="w-5 h-5" />
                          </button>
                          <button className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg transition-colors ml-1">
                            Ver PDF
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-center">
              <button className="text-sm font-bold text-indigo-600 hover:text-indigo-800">Cargar más resultados</button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}