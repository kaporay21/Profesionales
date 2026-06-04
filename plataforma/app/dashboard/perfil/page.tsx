"use client"; // Le dice a Next.js que esta página tendrá interactividad (botones que cambian cosas)

import { useState } from "react";
import { 
  LayoutDashboard, User, CalendarDays, MessageSquare, Settings, Bell, 
  LogOut, ShieldCheck, StickyNote, Save, Camera, MapPin, Phone, 
  Mail, FileText, Tag, Image as ImageIcon, ChevronLeft, UploadCloud, X, Map, Building2,
  Globe, Laptop, Users
} from "lucide-react";

export default function EditarPerfil() {
  // Aquí creamos la "memoria" para saber qué alcance eligió el profesional
  const [alcance, setAlcance] = useState("nacional");

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col md:flex-row font-sans selection:bg-blue-200">
      
      {/* 1. SIDEBAR (Menú Lateral) */}
      <aside className="w-full md:w-72 bg-slate-950 text-slate-300 flex flex-col hidden md:flex sticky top-0 h-screen shadow-2xl z-20">
        <div className="p-6 md:p-8">
          <div className="text-2xl font-black tracking-tighter text-white flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
              <span className="text-white text-lg leading-none">D</span>
            </div>
            Directorio<span className="text-blue-500">Pro</span>
          </div>
        </div>

        <div className="px-6 mb-8">
          <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-800/50 flex items-center gap-4">
            <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=100&q=80" alt="Logo Nexo" className="w-12 h-12 rounded-xl object-cover border-2 border-slate-700 shadow-sm" />
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-bold text-white truncate flex items-center gap-1.5">
                NEXO
                <span title="Perfil Verificado" className="flex items-center"><ShieldCheck className="w-3.5 h-3.5 text-blue-400" /></span>
              </h3>
              <p className="text-xs text-slate-400 truncate">Estudio Contable</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1.5 overflow-y-auto font-medium">
          <button className="w-full flex items-center gap-3 hover:bg-slate-900 text-slate-400 hover:text-white px-4 py-3 rounded-xl transition-all border-l-2 border-transparent">
            <LayoutDashboard className="w-5 h-5" /> Resumen
          </button>
          <button className="w-full flex items-center gap-3 bg-gradient-to-r from-blue-600/10 to-transparent text-blue-400 px-4 py-3 rounded-xl border-l-2 border-blue-500 transition-colors">
            <User className="w-5 h-5" /> Mi Perfil Público
          </button>
          <button className="w-full flex items-center justify-between hover:bg-slate-900 text-slate-400 hover:text-white px-4 py-3 rounded-xl transition-all border-l-2 border-transparent group">
            <div className="flex items-center gap-3">
              <CalendarDays className="w-5 h-5" /> Mis Turnos
            </div>
          </button>
          <button className="w-full flex items-center gap-3 hover:bg-slate-900 text-slate-400 hover:text-white px-4 py-3 rounded-xl transition-all border-l-2 border-transparent">
            <MessageSquare className="w-5 h-5" /> Mensajes
          </button>
          <button className="w-full flex items-center gap-3 hover:bg-slate-900 text-slate-400 hover:text-white px-4 py-3 rounded-xl transition-all border-l-2 border-transparent group">
            <StickyNote className="w-5 h-5 group-hover:text-amber-400 transition-colors" /> Notas y Recordatorios
          </button>
          <button className="w-full flex items-center gap-3 hover:bg-slate-900 text-slate-400 hover:text-white px-4 py-3 rounded-xl transition-all border-l-2 border-transparent">
            <Settings className="w-5 h-5" /> Configuración
          </button>
        </nav>

        <div className="p-4 m-4 bg-slate-900/50 rounded-2xl border border-slate-800">
          <button className="w-full flex items-center justify-center gap-2 text-slate-400 hover:text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors">
            <LogOut className="w-4 h-4" /> Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* 2. ÁREA DE TRABAJO (Formulario) */}
      <main className="flex-1 flex flex-col min-h-screen overflow-x-hidden relative">
        
        {/* Topbar */}
        <header className="bg-white/70 backdrop-blur-xl border-b border-slate-200/50 py-3 px-6 md:px-8 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
              <div className="w-6 h-0.5 bg-current mb-1.5"></div>
              <div className="w-6 h-0.5 bg-current mb-1.5"></div>
              <div className="w-6 h-0.5 bg-current"></div>
            </button>
            <button className="hidden md:flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">
              <ChevronLeft className="w-4 h-4" /> Volver al Resumen
            </button>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2.5 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
              <Bell className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Contenido del Formulario */}
        <div className="p-6 md:p-8 max-w-4xl mx-auto w-full space-y-8 pb-24">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sticky top-16 bg-[#f8fafc]/90 backdrop-blur-md py-4 z-10 border-b border-transparent">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900">Editar Perfil Público</h2>
              <p className="text-slate-500 font-medium mt-1">Configura cómo te ven los clientes en el directorio.</p>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 transition-all">
              <Save className="w-5 h-5" /> Guardar Cambios
            </button>
          </div>

          {/* Bloque 1: Identidad Visual */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="h-40 sm:h-48 bg-slate-900 relative group cursor-pointer">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera className="w-4 h-4" /> Cambiar Portada
                </div>
              </div>
            </div>
            
            <div className="p-6 md:p-8 pt-0 relative">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl border-4 border-white flex items-center justify-center bg-slate-50 shadow-md overflow-hidden -mt-14 sm:-mt-16 mb-6 group cursor-pointer">
                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=256&q=80" alt="Logo actual" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-slate-900/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera className="w-8 h-8 text-white mb-1" />
                  <span className="text-xs font-bold text-white">Actualizar Logo</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Nombre del Profesional / Estudio</label>
                  <input type="text" defaultValue="NEXO: Asesoría y Gestión Empresarial" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-medium" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Título o Profesión Corta</label>
                  <input type="text" defaultValue="Estudio Contable • Contadores Públicos" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-medium" />
                </div>
              </div>
            </div>
          </div>

          {/* Bloque 2: Galería de Fotos */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4 mb-6">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-blue-600" /> Galería de Fotos
              </h3>
              <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                2 de 3 fotos subidas
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="relative group rounded-2xl overflow-hidden border border-slate-200 aspect-video sm:aspect-square">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80" alt="Oficina" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg transform hover:scale-110 transition-all"><X className="w-5 h-5" /></button>
                </div>
              </div>
              <div className="relative group rounded-2xl overflow-hidden border border-slate-200 aspect-video sm:aspect-square">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80" alt="Equipo" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg transform hover:scale-110 transition-all"><X className="w-5 h-5" /></button>
                </div>
              </div>
              <button className="flex flex-col items-center justify-center gap-3 border-2 border-dashed border-slate-300 rounded-2xl aspect-video sm:aspect-square bg-slate-50 hover:bg-blue-50 hover:border-blue-400 hover:text-blue-600 transition-colors group">
                <div className="p-3 bg-white rounded-full shadow-sm group-hover:bg-blue-100 transition-colors">
                  <UploadCloud className="w-6 h-6 text-slate-400 group-hover:text-blue-600" />
                </div>
                <div className="text-center px-4">
                  <span className="text-sm font-bold block mb-1">Subir Imagen</span>
                </div>
              </button>
            </div>
          </div>

          {/* Bloque 3: Modalidad y Área de Cobertura (INTERACTIVO) */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl border border-blue-100 shadow-sm p-6 md:p-8">
            <h3 className="text-lg font-bold text-blue-900 mb-6 flex items-center gap-2 border-b border-blue-200/50 pb-4">
              <Globe className="w-5 h-5 text-blue-600" /> Modalidad y Área de Cobertura
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-bold text-blue-900 mb-3">¿Cómo atiendes a tus clientes?</label>
                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer group bg-white p-3 rounded-xl border border-blue-100 hover:border-blue-300 transition-all">
                    <input type="checkbox" defaultChecked className="mt-1 w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
                    <div>
                      <span className="text-sm text-slate-900 font-bold flex items-center gap-2"><Users className="w-4 h-4 text-blue-600" /> Presencial (En mi oficina/estudio)</span>
                    </div>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer group bg-white p-3 rounded-xl border border-blue-100 hover:border-blue-300 transition-all">
                    <input type="checkbox" defaultChecked className="mt-1 w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
                    <div>
                      <span className="text-sm text-slate-900 font-bold flex items-center gap-2"><Laptop className="w-4 h-4 text-emerald-600" /> 100% Online / Remoto</span>
                    </div>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-blue-900 mb-3">Alcance de tus servicios (Buscador)</label>
                <div className="relative mb-4">
                  <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  <select 
                    value={alcance} 
                    onChange={(e) => setAlcance(e.target.value)} 
                    className="w-full bg-white border border-blue-200 rounded-xl pl-11 pr-10 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-bold appearance-none cursor-pointer"
                  >
                    <option value="local">Solo en mi localidad física</option>
                    <option value="provincial">En toda mi provincia (Ej: Todo Tucumán)</option>
                    <option value="nacional">A nivel Nacional (Toda Argentina)</option>
                    <option value="custom">Varias localidades específicas...</option>
                  </select>
                </div>
                
                {/* ESTA CAJA SOLO APARECE SI ELIGE "CUSTOM" */}
                {alcance === "custom" && (
                  <div className="mt-4 p-4 bg-white border border-blue-200 rounded-xl shadow-sm transition-all animate-in fade-in slide-in-from-top-2">
                    <label className="block text-sm font-bold text-slate-700 mb-3">Zonas adicionales que cubres:</label>
                    
                    {/* Zonas ya seleccionadas */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-bold border border-indigo-100">
                        Yerba Buena <button className="hover:text-indigo-900">&times;</button>
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-bold border border-indigo-100">
                        Tafí Viejo <button className="hover:text-indigo-900">&times;</button>
                      </span>
                    </div>

                    {/* Selector para agregar más */}
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <select className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium cursor-pointer appearance-none">
                        <option value="">+ Añadir nueva localidad...</option>
                        <option value="banda">Banda del Río Salí</option>
                        <option value="concepcion">Concepción</option>
                        <option value="aguilares">Aguilares</option>
                        <option value="famailla">Famaillá</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bloque 4: Sede Física y Contacto Directo */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-100 pb-4">
              <MapPin className="w-5 h-5 text-emerald-600" /> Sede Física y Contacto
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5">Provincia de la Sede</label>
                <div className="relative">
                  <Map className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  <select defaultValue="Tucumán" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-10 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-medium appearance-none cursor-pointer">
                    <option value="Tucumán">Tucumán</option>
                    <option value="Salta">Salta</option>
                    <option value="CABA">CABA</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5">Localidad de la Sede</label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  <select defaultValue="San Miguel de Tucumán" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-10 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-medium appearance-none cursor-pointer">
                    <option value="San Miguel de Tucumán">San Miguel de Tucumán</option>
                    <option value="Yerba Buena">Yerba Buena</option>
                    <option value="San Andrés">San Andrés</option>
                  </select>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-slate-700 mb-1.5">Dirección Exacta (Visible para clientes)</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input type="text" placeholder="Ej: Calle San Martín 456, Piso 2" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-medium" />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <label className="block text-sm font-bold text-slate-700 mb-1.5">Número de WhatsApp</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">+54</span>
                  <input type="text" placeholder="Ej: 381 123 4567" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-medium" />
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 md:border-t-0">
                <label className="block text-sm font-bold text-slate-700 mb-1.5">Email Público</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input type="email" placeholder="contacto@tuempresa.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-medium" />
                </div>
              </div>
            </div>
          </div>

          {/* Bloque 5: Descripción y Especialidades */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2 border-b border-slate-100 pb-4">
              <FileText className="w-5 h-5 text-purple-600" /> Descripción y Servicios
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5">Sobre Nosotros (Biografía)</label>
                <textarea 
                  rows={4} 
                  defaultValue="En NEXO brindamos soluciones integrales para pymes. Especialistas en optimización fiscal y liquidaciones ARCA."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-medium resize-none"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5">Etiquetas de Especialidad</label>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-bold border border-blue-100">
                    Contabilidad <button className="hover:text-blue-900">&times;</button>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-bold border border-blue-100">
                    Liquidaciones ARCA <button className="hover:text-blue-900">&times;</button>
                  </span>
                </div>
                <div className="relative">
                  <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input type="text" placeholder="Escribe una especialidad y presiona Enter..." className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-medium" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}