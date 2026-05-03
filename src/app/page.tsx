'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

// --- Iconos SVG (Lucide-like) ---
const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.71 13 3l-1.12 8.71H20l-9 11.71 1.12-8.71H4z"/></svg>
)
const BarChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>
)
const PackageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
)
const ReceiptIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5V6.5"/></svg>
)
const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
)

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] font-sans selection:bg-purple-100">
      {/* --- Navbar --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">A</div>
            <span className="text-xl font-bold tracking-tight">APEIRON</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#sistemas" className="hover:text-purple-600 transition-colors">Sistemas</a>
            <a href="#beneficios" className="hover:text-purple-600 transition-colors">Beneficios</a>
            <a href="#facturacion" className="hover:text-purple-600 transition-colors">Facturación</a>
            <a href="https://aperion-pos.vercel.app/login" className="bg-purple-600 text-white px-5 py-2.5 rounded-full hover:bg-purple-700 transition-all shadow-md hover:shadow-lg active:scale-95">
              Acceder al Sistema
            </a>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-50 blur-[120px] rounded-full -z-10 opacity-60" />
        
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-xs font-bold uppercase tracking-wider mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Beta Pública Disponible
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            Gestiona tu negocio con<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800">
              Inteligencia Real
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Apeiron transforma la complejidad operativa en simplicidad. Controla ventas, inventarios y rentabilidad desde cualquier lugar.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://aperion-pos.vercel.app/login" className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-black transition-all flex items-center justify-center gap-2 group">
              Empezar ahora <ArrowRight />
            </a>
            <a href="#sistemas" className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 text-gray-600 rounded-2xl font-bold hover:bg-gray-50 transition-all">
              Ver Sistemas
            </a>
          </div>
        </div>
      </section>

      {/* --- Sistemas Section --- */}
      <section id="sistemas" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestra Suite de Soluciones</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Dos sistemas potentes diseñados para necesidades específicas, integrados en un solo ecosistema.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Axis Card */}
            <div className="group relative p-10 rounded-[32px] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:border-purple-200 transition-all duration-500">
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <ZapIcon />
              </div>
              <h3 className="text-3xl font-bold mb-4">Apeiron Axis</h3>
              <p className="text-gray-500 mb-8 text-lg leading-relaxed">
                Punto de venta universal para comercios. Controla tu caja, inventario multisede y reportes de ventas en tiempo real con una interfaz ultra-rápida.
              </p>
              <ul className="space-y-3 mb-10">
                <li className="flex items-center gap-3 text-sm font-medium text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400" /> Venta express en menos de 3 clics
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400" /> Modo Offline para ventas sin internet
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400" /> Control estricto de arqueo de caja
                </li>
              </ul>
              <a href="https://aperion-pos.vercel.app/login" className="inline-flex items-center gap-2 text-purple-600 font-bold group-hover:gap-3 transition-all">
                Explorar Axis <ArrowRight />
              </a>
            </div>

            {/* Oris Card */}
            <div className="group relative p-10 rounded-[32px] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:border-pink-200 transition-all duration-500">
              <div className="w-14 h-14 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <BarChartIcon />
              </div>
              <h3 className="text-3xl font-bold mb-4">Apeiron Oris</h3>
              <p className="text-gray-500 mb-8 text-lg leading-relaxed">
                Especializado para restaurantes y cafeterías. Mapa de mesas visual, comandas digitales en tiempo real y gestión inteligente de cocina (KDS).
              </p>
              <ul className="space-y-3 mb-10">
                <li className="flex items-center gap-3 text-sm font-medium text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-400" /> Pantallas de cocina sincronizadas
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-400" /> Gestión de modificadores y extras
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-400" /> Tiempos de servicio optimizados
                </li>
              </ul>
              <a href="https://aperion-pos.vercel.app/login" className="inline-flex items-center gap-2 text-pink-600 font-bold group-hover:gap-3 transition-all">
                Explorar Oris <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- Features Grid --- */}
      <section id="beneficios" className="py-24 bg-[#fdfdfd]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <ReceiptIcon />
              </div>
              <h4 className="text-xl font-bold mb-3">Facturación 24/7</h4>
              <p className="text-gray-500 leading-relaxed">
                Tus clientes pueden generar sus facturas de forma autónoma en cualquier momento, reduciendo la carga administrativa de tu equipo.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <PackageIcon />
              </div>
              <h4 className="text-xl font-bold mb-3">Inventarios y Proveedores</h4>
              <p className="text-gray-500 leading-relaxed">
                Control total de stock. Recibe alertas de stock bajo y gestiona tus órdenes de compra a proveedores desde un solo panel.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <BarChartIcon />
              </div>
              <h4 className="text-xl font-bold mb-3">Costos y Rentabilidad</h4>
              <p className="text-gray-500 leading-relaxed">
                Analiza tus márgenes de ganancia reales. Conoce qué productos son los más rentables y toma decisiones basadas en datos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-24 bg-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            ¿Listo para llevar tu negocio al siguiente nivel?
          </h2>
          <p className="text-purple-100 text-lg mb-10 max-w-xl mx-auto opacity-90">
            Únete a las empresas que ya están transformando su operación con la inteligencia de Apeiron.
          </p>
          <a href="https://aperion-pos.vercel.app/login" className="inline-flex px-10 py-5 bg-white text-purple-600 rounded-[24px] font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-xl">
            Comenzar Prueba Gratis
          </a>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-900 rounded flex items-center justify-center text-white font-bold text-xs">A</div>
            <span className="text-sm font-bold tracking-tight">APEIRON SUITE</span>
          </div>
          <p className="text-gray-400 text-xs uppercase tracking-widest font-black">
            © 2024 Apeiron. Talento local, impacto global.
          </p>
        </div>
      </footer>
    </div>
  )
}
