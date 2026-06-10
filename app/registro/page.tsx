"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase"; 
import { Building2, MapPin, Briefcase, Phone, User, FileText, CheckCircle2, AlertCircle, Search, Lock, Eye, EyeOff } from "lucide-react";
import Link from "next/link";

// Catálogo de profesiones actualizado
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

export default function RegistroProfesional() {
  const [cargando, setCargando] = useState(false);
  const [mensaje, setMensaje] = useState({ tipo: "", texto: "" });
  const [verPassword, setVerPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    nombre: "",
    profesion: "",
    provincia: "",
    categoria: "",
    especialidad: "",
    whatsapp: "",
    descripcion: "",
    password: "",
    repetirPassword: ""
  });

  const especialidadesDisponibles = categoriasData[formData.categoria] || [];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (e.target.name === "categoria") {
      setFormData({ ...formData, [e.target.name]: e.target.value, especialidad: "" });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCargando(true);
    setMensaje({ tipo: "", texto: "" });

    // Validar contraseñas
    if (formData.password !== formData.repetirPassword) {
      setMensaje({ tipo: "error", texto: "Las contraseñas no coinciden." });
      setCargando(false);
      return;
    }

    try {
      // 1. Registro de autenticación en Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.whatsapp + "@nexoprofesional.com", // Generamos un usuario interno seguro
        password: formData.password,
      });

      if (authError) throw authError;

      // 2. Inserción del perfil profesional limpio de errores
      const { error: dbError } = await supabase
        .from('profesionales')
        .insert([
          {
            nombre: formData.nombre,
            profesion: formData.profesion,
            provincia: formData.provincia,
            categoria: formData.categoria,
            especialidad: formData.especialidad,
            whatsapp: formData.whatsapp,
            descripcion: formData.descripcion
          }
        ]);

      if (dbError) throw dbError;

      setMensaje({ tipo: "exito", texto: "¡Registro exitoso! Ya eres parte de NexoProfesional." });
      setFormData({ nombre: "", profesion: "", provincia: "", categoria: "", especialidad: "", whatsapp: "", descripcion: "", password: "", repetirPassword: "" }); 

    } catch (error: any) {
      console.error("Error al registrar:", error.message);
      setMensaje({ tipo: "error", texto: error.message || "Hubo un problema al registrarte." });
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 px-6 lg:px-8 font-sans">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <h1 className="text-3xl font-black tracking-tighter text-slate-900">
          Nexo<span className="text-blue-600">Profesional</span>
        </h1>
        <h2 className="mt-6 text-2xl font-bold text-slate-900">
          Únete a la red de expertos
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Comienza a recibir consultas de clientes hoy mismo.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
        <div className="bg-white py-8 px-6 shadow-xl shadow-slate-200/50 rounded-2xl sm:px-10 border border-slate-100">
          
          {mensaje.texto && (
            <div className={`mb-6 p-4 rounded-xl flex items-start gap-3 ${mensaje.tipo === 'exito' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
              {mensaje.tipo === 'exito' ? <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" /> : <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />}
              <p className="font-medium text-sm">{mensaje.texto}</p>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Nombre */}
              <div className="col-span-2">
                <label className="block text-sm font-bold text-slate-700 mb-2">Nombre Completo o Estudio</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-slate-400" />
                  </div>
                  <input required name="nombre" value={formData.nombre} onChange={handleChange} className="pl-10 block w-full rounded-xl border-slate-200 bg-slate-50 py-3 px-4 text-sm focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all outline-none border" placeholder="Ej: Dr. Carlos Pérez" />
                </div>
              </div>

              {/* Categoría (Rubro del buscador) */}
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-bold text-slate-700 mb-2">Categoría / Rubro</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Building2 className="h-5 w-5 text-slate-400" />
                  </div>
                  <select required name="categoria" value={formData.categoria} onChange={handleChange} className="pl-10 block w-full rounded-xl border-slate-200 bg-slate-50 py-3 px-4 text-sm focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all outline-none border appearance-none">
                    <option value="" disabled>Selecciona categoría...</option>
                    {Object.keys(categoriasData).map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Especialidad (Dinámica del buscador) */}
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-bold text-slate-700 mb-2">Especialidad</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-slate-400" />
                  </div>
                  <select required name="especialidad" value={formData.especialidad} onChange={handleChange} disabled={!formData.categoria} className="pl-10 block w-full rounded-xl border-slate-200 bg-slate-50 py-3 px-4 text-sm focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all outline-none border appearance-none disabled:opacity-50">
                    <option value="" disabled>Selecciona especialidad...</option>
                    {especialidadesDisponibles.map((esp) => (
                      <option key={esp} value={esp}>{esp}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Profesión visible */}
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-bold text-slate-700 mb-2">Título / Profesión visible</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Briefcase className="h-5 w-5 text-slate-400" />
                  </div>
                  <input required name="profesion" value={formData.profesion} onChange={handleChange} className="pl-10 block w-full rounded-xl border-slate-200 bg-slate-50 py-3 px-4 text-sm focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all outline-none border" placeholder="Ej: Abogado Laboralista" />
                </div>
              </div>

              {/* WhatsApp */}
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-bold text-slate-700 mb-2">WhatsApp</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-slate-400" />
                  </div>
                  <input required name="whatsapp" value={formData.whatsapp} onChange={handleChange} className="pl-10 block w-full rounded-xl border-slate-200 bg-slate-50 py-3 px-4 text-sm focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all outline-none border" placeholder="Ej: +5493811234567" />
                </div>
              </div>

              {/* Provincia (Menú desplegable federal) */}
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-bold text-slate-700 mb-2">Provincia</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-slate-400" />
                  </div>
                  <select 
                    required 
                    name="provincia" 
                    value={formData.provincia} 
                    onChange={handleChange} 
                    className="pl-10 block w-full rounded-xl border-slate-200 bg-slate-50 py-3 px-4 text-sm focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all outline-none border appearance-none"
                  >
                    <option value="" disabled>Selecciona provincia...</option>
                    <option value="Nivel Nacional (Online)">Nivel Nacional (Online)</option>
                    <option value="Buenos Aires">Buenos Aires</option>
                    <option value="Ciudad Autónoma de Buenos Aires (CABA)">Ciudad Autónoma de Buenos Aires (CABA)</option>
                    <option value="Catamarca">Catamarca</option>
                    <option value="Chaco">Chaco</option>
                    <option value="Chubut">Chubut</option>
                    <option value="Córdoba">Córdoba</option>
                    <option value="Corrientes">Corrientes</option>
                    <option value="Entre Ríos">Entre Ríos</option>
                    <option value="Formosa">Formosa</option>
                    <option value="Jujuy">Jujuy</option>
                    <option value="La Pampa">La Pampa</option>
                    <option value="La Rioja">La Rioja</option>
                    <option value="Mendoza">Mendoza</option>
                    <option value="Misiones">Misiones</option>
                    <option value="Neuquén">Neuquén</option>
                    <option value="Río Negro">Río Negro</option>
                    <option value="Salta">Salta</option>
                    <option value="San Juan">San Juan</option>
                    <option value="San Luis">San Luis</option>
                    <option value="Santa Cruz">Santa Cruz</option>
                    <option value="Santa Fe">Santa Fe</option>
                    <option value="Santiago del Estero">Santiago del Estero</option>
                    <option value="Tierra del Fuego, Antártida e Islas del Atlántico Sur">Tierra del Fuego, Antártida e Islas del Atlántico Sur</option>
                    <option value="Tucumán">Tucumán</option>
                  </select>
                </div>
              </div>

              {/* Contraseña */}
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-bold text-slate-700 mb-2">Contraseña</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-400" />
                  </div>
                  <input required type={verPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} className="pl-10 pr-10 block w-full rounded-xl border-slate-200 bg-slate-50 py-3 px-4 text-sm focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all outline-none border" placeholder="••••••••" />
                  <button type="button" onClick={() => setVerPassword(!verPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600">
                    {verPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Repetir Contraseña */}
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-bold text-slate-700 mb-2">Repetir Contraseña</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-400" />
                  </div>
                  <input required type={verPassword ? "text" : "password"} name="repetirPassword" value={formData.repetirPassword} onChange={handleChange} className="pl-10 pr-10 block w-full rounded-xl border-slate-200 bg-slate-50 py-3 px-4 text-sm focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all outline-none border" placeholder="••••••••" />
                </div>
              </div>

              {/* Descripción */}
              <div className="col-span-2">
                <label className="block text-sm font-bold text-slate-700 mb-2">Descripción breve de tus servicios</label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <FileText className="h-5 w-5 text-slate-400" />
                  </div>
                  <textarea required name="descripcion" value={formData.descripcion} onChange={handleChange} rows={3} className="pl-10 block w-full rounded-xl border-slate-200 bg-slate-50 py-3 px-4 text-sm focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all outline-none border resize-none" placeholder="Especialista en..."></textarea>
                </div>
              </div>
            </div>

            <div>
              <button disabled={cargando} type="submit" className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all disabled:opacity-50">
                {cargando ? "Registrando..." : "Crear mi perfil profesional"}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <Link href="/" className="text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors">
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}