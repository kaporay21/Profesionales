"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Mail, Lock, User, Briefcase, ArrowRight, ChevronLeft, ShieldCheck } from "lucide-react";

// Separamos el contenido en un componente para que Next.js pueda leer la URL correctamente
function LoginContent() {
  const searchParams = useSearchParams();
  const modo = searchParams.get("modo");
  
  // Si en la URL dice "?modo=registro", isLogin arranca en FALSO (o sea, abre crear cuenta). Si no, arranca en TRUE.
  const [isLogin, setIsLogin] = useState(modo !== "registro");

  return (
    <div className="min-h-screen flex text-slate-900 font-sans selection:bg-blue-200 w-full">
      
      {/* MITAD IZQUIERDA: Formulario */}
      <div className="w-full lg:w-1/2 flex flex-col relative bg-white">
        
        {/* Botón Volver */}
        <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10">
          <Link href="/" className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Volver al inicio
          </Link>
        </div>

        <div className="flex-1 flex flex-col justify-center px-8 sm:px-16 md:px-24 w-full max-w-2xl mx-auto mt-16 lg:mt-0">
          
          <div className="mb-10">
            <Link href="/" className="text-3xl font-black tracking-tighter text-slate-900 mb-8 block">
              Directorio<span className="text-blue-600">Pro</span>
            </Link>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
              {isLogin ? "Bienvenido de nuevo" : "Crea tu cuenta profesional"}
            </h1>
            <p className="text-slate-500 font-medium">
              {isLogin 
                ? "Ingresa tus datos para acceder a tu panel de control." 
                : "Únete a cientos de expertos y empieza a recibir clientes hoy."}
            </p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            
            {!isLogin && (
              <div className="flex flex-col sm:flex-row gap-5 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="flex-1">
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Nombre / Estudio</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input type="text" placeholder="Ej: NEXO Asesoría" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-medium" />
                  </div>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">Profesión</label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input type="text" placeholder="Ej: Contador Público" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-medium" />
                  </div>
                </div>
              </div>
            )}

            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 delay-75">
              <label className="block text-sm font-bold text-slate-700 mb-1.5">Correo Electrónico</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input type="email" placeholder="contacto@tuempresa.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-medium" />
              </div>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 delay-150">
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-sm font-bold text-slate-700">Contraseña</label>
                {isLogin && <button type="button" className="text-sm font-bold text-blue-600 hover:underline">¿Olvidaste tu contraseña?</button>}
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input type="password" placeholder="••••••••" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-medium" />
              </div>
            </div>

            <div className="pt-2 animate-in fade-in slide-in-from-bottom-2 duration-500 delay-200">
              <Link href="/dashboard" className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 transition-all flex items-center justify-center gap-2">
                {isLogin ? "Iniciar Sesión" : "Crear Cuenta y Continuar"} <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </form>

          <div className="mt-10 mb-8 relative flex items-center">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="flex-shrink-0 mx-4 text-slate-400 text-sm font-medium">O</span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>

          <button className="w-full bg-white border-2 border-slate-200 text-slate-700 py-3.5 rounded-xl font-bold hover:bg-slate-50 transition-colors flex items-center justify-center gap-3">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continuar con Google
          </button>

          <p className="mt-10 text-center text-slate-600 font-medium">
            {isLogin ? "¿No tienes una cuenta aún?" : "¿Ya tienes una cuenta?"}{" "}
            <button 
              onClick={() => setIsLogin(!isLogin)} 
              className="text-blue-600 font-bold hover:underline"
            >
              {isLogin ? "Regístrate gratis" : "Inicia Sesión"}
            </button>
          </p>
        </div>
      </div>

      {/* MITAD DERECHA: Imagen Decorativa */}
      <div className="hidden lg:flex w-1/2 bg-slate-900 relative items-center justify-center overflow-hidden p-12">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" 
          alt="Oficina Profesional" 
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-slate-950/90"></div>

        <div className="relative z-10 max-w-lg text-white">
          <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-8 border border-blue-400/30 backdrop-blur-md">
            <ShieldCheck className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-4xl font-extrabold mb-6 leading-tight">
            Digitaliza tu práctica profesional hoy.
          </h2>
          <p className="text-lg text-blue-100/80 mb-10 leading-relaxed font-medium">
            Únete a la red líder. Destaca entre la competencia, gestiona tus turnos automáticamente y recibe clientes perfilados directamente en tu WhatsApp.
          </p>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center font-bold text-white shadow-lg">
                M
              </div>
              <div>
                <h4 className="font-bold text-white">Martín S.</h4>
                <p className="text-xs text-blue-200">Abogado Laboral</p>
              </div>
            </div>
            <p className="text-sm text-slate-300 italic">
              "Desde que creé mi perfil, mi flujo de consultas online aumentó un 40%. La plataforma funciona sola."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Envolvemos el componente en Suspense para que Next.js maneje la URL correctamente
export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-white"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>}>
      <LoginContent />
    </Suspense>
  );
}