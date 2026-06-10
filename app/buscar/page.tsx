"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { Search, MapPin, Star, ShieldCheck, Briefcase, ChevronDown, MessageCircle, Calendar, Zap, SlidersHorizontal, ArrowUpDown } from "lucide-react";

// Estructura de categorías y especialidades (espejo de la Home y Registro)
const categoriasData: Record<string, string[]> = {
  "Salud y Bienestar": [
    "Médico Clínico", "Pediatra", "Oncólogo", "Cirujano", "Traumatólogo", "Dentista", 
    "Enfermería", "Kinesiología y Fisioterapia", "Nutrición", "Psicología", 
    "Farmacia y Bioquímica", "Fonoaudiología", "Obstetricia", "Diagnóstico por Imágenes"
  ],
  "Ciencias Económicas": [
    "Contador Público", "Lic. en Economía", "Lic. en Recursos Humanos", 
    "Lic. en Comercialización", "Lic. en Administración de Empresas", 
    "Actuario", "Comercio Exterior"
  ],
  "Derecho y Ciencias Jurídicas": [
    "Abogado", "Escribano / Notario", "Procurador", "Mediador", 
    "Criminalística y Criminología", "Derecho Informático"
  ],
  "Arquitectura y Diseño": [
    "Arquitecto", "Ingeniero Civil", "Diseño Industrial", 
    "Diseño Gráfico y Multimedia", "Agrimensura", "Ingeniería Ambiental / Seguridad e Higiene"
  ],
  "Tecnología e Innovación": [
    "Ingeniería en Sistemas / Informática", "Programador / Desarrollador", 
    "Ciencia de Datos", "Ciberseguridad", "Diseño UX/UI", 
    "Ingeniería Electrónica", "Ingeniería en Energía", "Inteligencia Artificial"
  ]
};

export default function ResultadosBusqueda() {
  const searchParams = useSearchParams();
  const [profesionales, setProfesionales] = useState<any[]>([]);
  const [cargando, setCargando] = useState(true);

  // Capturamos los filtros que vienen desde la Home por URL
  const urlProvincia = searchParams.get("provincia") || "";
  const urlCategoria = searchParams.get("categoria") || "";
  const urlEspecialidad = searchParams.get("especialidad") || "";

  // Estados para filtros interactivos en la misma página de resultados
  const [filtroCategoria, setFiltroCategoria] = useState(urlCategoria);
  const [filtroEspecialidad, setFiltroEspecialidad] = useState(urlEspecialidad);

  // Especialidades dinámicas según la categoría seleccionada en la barra lateral
  const especialidadesDisponibles = categoriasData[filtroCategoria] || [];

  useEffect(() => {
    const fetchProfesionales = async () => {
      setCargando(true);
      try {
        let query = supabase.from("profesionales").select("*");

        // Aplicamos filtros según los parámetros o selecciones manuales
        if (urlProvincia && urlProvincia !== "Todas las provincias") {
          query = query.eq("provincia", urlProvincia);
        }
        if (filtroCategoria) {
          query = query.eq("categoria", filtroCategoria);
        }
        if (filtroEspecialidad) {
          query = query.eq("especialidad", filtroEspecialidad);
        }

        const { data, error } = await query;
        if (error) throw error;

        setProfesionales(data || []);
      } catch (error) {
        console.error("Error al cargar profesionales de Supabase:", error);
      } finally {
        setCargando(false);
      }
    };

    fetchProfesionales();
  }, [urlProvincia, filtroCategoria, filtroEspecialidad]);

  // Limpiar todos los filtros
  const limpiarFiltros = () => {
    setFiltroCategoria("");
    setFiltroEspecialidad("");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20">
      
      {/* Navegación Superior */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
          <Link href="/" className="text-2xl font-black tracking-tighter text-slate-900 cursor-pointer">
            Nexo<span className="text-blue-600">Profesional</span>
          </Link>
          
          <div className="text-sm font-semibold text-slate-600 bg-slate-100 px-4 py-2 rounded-xl border border-slate-200">
            Búsqueda activa en: <span className="font-extrabold text-slate-900">{urlProvincia || "Nivel Nacional"}</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* PANEL IZQUIERDO: Filtros Avanzados */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm sticky top-28">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5 text-slate-700" />
                  <h2 className="font-bold text-lg text-slate-900">Filtros dinámicos</h2>
                </div>
                <button onClick={limpiarFiltros} className="text-xs text-blue-600 font-semibold hover:underline">Limpiar</button>
              </div>
              
              <div className="space-y-8">
                {/* Filtro: Categoría / Rubro */}
                <div>
                  <h3 className="font-bold text-sm mb-4 text-slate-900 uppercase tracking-wider">Categoría</h3>
                  <select 
                    value={filtroCategoria} 
                    onChange={(e) => {
                      setFiltroCategoria(e.target.value);
                      setFiltroEspecialidad(""); // Reset al cambiar rubro
                    }}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-semibold outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Todas las categorías</option>
                    {Object.keys(categoriasData).map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Filtro: Especialidad */}
                <div>
                  <h3 className="font-bold text-sm mb-4 text-slate-900 uppercase tracking-wider">Especialidad</h3>
                  <select 
                    value={filtroEspecialidad} 
                    onChange={(e) => setFiltroEspecialidad(e.target.value)}
                    disabled={!filtroCategoria}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-sm font-semibold outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                  >
                    <option value="">Todas las especialidades</option>
                    {especialidadesDisponibles.map((esp) => (
                      <option key={esp} value={esp}>{esp}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </aside>

          {/* PANEL DERECHO: Resultados */}
          <div className="flex-1">
            
            {/* Cabecera de Resultados */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-2xl font-extrabold text-slate-900">Expertos en tu zona</h1>
                  <p className="text-slate-500 text-sm mt-1 font-medium">Mostrando {profesionales.length} resultados verificados</p>
                </div>
              </div>
            </div>

            {/* Lista de Tarjetas desde Supabase */}
            {cargando ? (
              <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-slate-500 font-bold animate-pulse">Cargando profesionales...</p>
              </div>
            ) : profesionales.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-slate-700 font-bold text-xl mb-2">No se encontraron profesionales</p>
                <p className="text-slate-500 text-sm">Prueba ajustando los filtros o seleccionando otra especialidad.</p>
              </div>
            ) : (
              <div className="space-y-5">
                {profesionales.map((prof) => (
                  <div 
                    key={prof.id} 
                    className="relative bg-white rounded-2xl p-5 sm:p-6 transition-all duration-300 group border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-300 flex flex-col sm:flex-row gap-6"
                  >
                    
                    {/* Info principal */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                        <div>
                          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 group-hover:text-blue-600 transition-colors">
                            {prof.nombre}
                            <span title="Identidad Verificada" className="flex items-center">
                              <ShieldCheck className="w-5 h-5 text-blue-500" />
                            </span>
                          </h2>
                          <p className="text-blue-600 font-extrabold text-xs uppercase tracking-wider mb-2 mt-1">{prof.especialidad || prof.profesion}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-4 mt-2">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-slate-400" />
                          <span className="font-medium">{prof.provincia}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Zap className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          <span className="text-slate-600 text-xs font-semibold">{prof.categoria}</span>
                        </div>
                      </div>

                      {/* Descripción */}
                      <p className="text-slate-600 text-sm leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                        {prof.descripcion || "Sin descripción disponible."}
                      </p>
                    </div>

                    {/* Acciones */}
                    <div className="flex flex-col gap-3 justify-center sm:w-48 sm:border-l sm:border-slate-100 sm:pl-6 flex-shrink-0">
                      <Link href={`https://wa.me/${prof.whatsapp?.replace(/\D/g, '')}`} target="_blank" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl text-sm transition-colors flex items-center justify-center gap-2 shadow-sm text-center">
                        <MessageCircle className="w-5 h-5" /> WhatsApp
                      </Link>
                    </div>

                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      </main>
    </div>
  );
}