// @ts-nocheck
'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useAnimationFrame, useMotionValue } from 'framer-motion'
import Link from 'next/link'
import {
  ShoppingCart,
  ChefHat,
  Shield,
  Zap,
  Globe,
  Clock,
  Check,
  ArrowRight,
  Menu,
  X,
  Star,
  TrendingUp,
  Users,
  CreditCard,
  MessageCircle,
  Mail,
  Phone,
  Calendar,
  ChevronDown,
  Package,
  Calculator,
  Receipt
} from 'lucide-react'

// ─── SHARED CONSTANTS ───
const WHATSAPP_URL = "https://wa.me/526183264927?text=Hola%20Alan%2C%20me%20interesa%20el%20sistema%20Aperion.%20%C2%BFPodemos%20hablar%3F"

// ─── MOTION PRESETS ───

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] }
}

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } }
}

const staggerItem = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] } }
}

// ─── COMPONENTS ───

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img src="/LOGOSINFONDO.png" alt="APEIRON Logo" className="h-9 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#productos" className="text-sm text-text-secondary hover:text-text-primary transition-colors font-bold">Sistemas</a>
          <a href="#beneficios" className="text-sm text-text-secondary hover:text-text-primary transition-colors font-bold">Beneficios</a>
          <a href="#precios" className="text-sm text-text-secondary hover:text-text-primary transition-colors font-bold">Precios</a>
          <a href="https://apeiron-agencia.vercel.app/" target="_blank" rel="noopener" className="text-sm font-bold text-ap-purple hover:text-ap-purple-mid transition-colors flex items-center gap-1.5 group">
            Conocer Agencia <Globe size={14} className="group-hover:rotate-12 transition-transform" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center font-bold text-white bg-ap-purple hover:bg-ap-purple-mid transition-all duration-200 rounded-full px-5 py-2.5 pressable shadow-purple"
          >
            Empezar gratis
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden h-10 w-10 flex items-center justify-center rounded-[14px] bg-inset text-text-primary active:scale-95 transition-transform"
          aria-label="Menú"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden bg-surface border-t border-border px-6 py-4 space-y-3 shadow-md"
          >
            <a href="#productos" onClick={() => setMobileOpen(false)} className="block text-sm text-text-secondary py-2 font-bold">Sistemas</a>
            <a href="#beneficios" onClick={() => setMobileOpen(false)} className="block text-sm text-text-secondary py-2 font-bold">Beneficios</a>
            <a href="#precios" onClick={() => setMobileOpen(false)} className="block text-sm text-text-secondary py-2 font-bold">Precios</a>
            <a href="https://apeiron-agencia.vercel.app/" target="_blank" rel="noopener" className="block text-sm font-bold text-ap-purple py-2">Conocer Agencia</a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center font-bold text-white bg-ap-purple hover:bg-ap-purple-mid transition-all duration-200 rounded-lg w-full mt-2 p-3 pressable shadow-sm"
            >
              Empezar gratis
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16 px-6 relative overflow-hidden bg-grid-pattern">
      {/* Background glow animated */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vh] opacity-15 pointer-events-none rounded-full blur-[100px] bg-dark-auras dark:opacity-20"></div>
      
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-base to-transparent pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 w-full">
        {/* Left Column: Content */}
        <motion.div
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={fadeUp.transition}
          className="text-center lg:text-left pt-8"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-ap-purple-soft text-ap-purple-text text-xs font-semibold px-4 py-1.5 rounded-[9999px] mb-8 shadow-sm border border-ap-purple/10 cursor-pointer hover:shadow-md transition-shadow"
          >
            <Star size={12} className="text-ap-purple" fill="currentColor" />
            <span>Nuevo: Ecosistema de Gestión Inteligente APEIRON</span>
          </motion.div>

          {/* Heading */}
          <motion.div
             initial={fadeUp.initial}
             whileInView={fadeUp.animate}
             viewport={{ once: true }}
             transition={{ ...fadeUp.transition, delay: 0.2 }}
           >
             <h1 className="text-[clamp(2.5rem,6vw,4rem)] xl:text-[4.5rem] font-display font-bold leading-[1.05] tracking-tight">
               Multiplica la velocidad de tus comandas y ventas retail
               <br className="hidden md:block" />
               <span className="text-brand-gradient"> en minutos.</span>
             </h1>
             <p className="mt-8 text-[19px] leading-[1.6] text-text-secondary max-w-2xl mx-auto lg:mx-0">
               Punto de venta ultrarrápido y KDS en tiempo real. Configura tu restaurante o tienda en la nube sin instalaciones complejas, con soporte cercano y operación lista para crecer.
             </p>
           </motion.div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center font-bold text-white bg-ap-purple hover:bg-ap-purple-mid transition-all duration-200 rounded-full px-8 py-3.5 text-base shadow-purple-lg pressable"
            >
              Inicia tus 14 días gratis
              <ArrowRight size={18} strokeWidth={2.5} className="ml-1" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center font-bold text-text-primary bg-inset hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200 rounded-full px-8 py-3.5 text-base shadow-sm border border-border pressable"
            >
              Ver Demo en Vivo
            </a>
          </div>

          {/* Trust signals */}
          <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-semibold text-text-tertiary">
            <span className="flex items-center gap-1.5"><Check size={16} className="text-success stroke-[3]" /> Sin tarjeta de crédito</span>
            <span className="flex items-center gap-1.5"><Check size={16} className="text-success stroke-[3]" /> 14 días gratis</span>
            <span className="flex items-center gap-1.5"><Check size={16} className="text-success stroke-[3]" /> Sin compromiso</span>
          </div>
        </motion.div>

        {/* Right Column: Image/Mockup */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="relative lg:mt-0"
        >
           <div className="glass-panel p-2 rounded-2xl shadow-2xl border border-white/40 dark:border-white/10 relative z-10 overflow-hidden transform-gpu hover:scale-[1.02] transition-all duration-500">
              <div className="h-6 w-full flex items-center px-4 gap-1.5 bg-inset/50 rounded-t-xl border-b border-border/50">
                 <div className="w-2.5 h-2.5 rounded-full bg-danger/80"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-warning/80"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-success/80"></div>
              </div>
              <div className="bg-surface rounded-b-xl border border-transparent flex items-center justify-center overflow-hidden">
                <img 
                  src="/IMAGENARRIBA.jpg" 
                  alt="Aperion Preview" 
                  className="w-full h-auto object-cover object-top aspect-[16/10] sm:aspect-auto" 
                />
              </div>
           </div>
           {/* Decorative blurs behind mockup */}
           <div className="absolute -inset-10 bg-gradient-to-tr from-ap-purple to-ap-pink opacity-[0.2] blur-3xl -z-10 rounded-full mix-blend-multiply"></div>
        </motion.div>
      </div>
    </section>
  )
}

function ProductCard({ icon: Icon, title, description, badge, color, features }: {
  icon: any
  title: string
  description: string
  badge: string
  color: string
  features: string[]
}) {
  const colorMap: Record<string, { bg: string; text: string; soft: string }> = {
    purple: { bg: 'var(--ap-purple)', text: 'var(--ap-purple-text)', soft: 'var(--ap-purple-soft)' },
    pink: { bg: 'var(--ap-pink)', text: 'var(--ap-pink-text)', soft: 'var(--ap-pink-soft)' },
    blue: { bg: 'var(--ap-blue)', text: 'var(--ap-blue-text)', soft: 'var(--ap-blue-soft)' },
    emerald: { bg: '#10b981', text: '#064e3b', soft: '#ecfdf5' },
    amber: { bg: '#f59e0b', text: '#78350f', soft: '#fffbeb' },
  }
  const c = colorMap[color] || colorMap.purple

  return (
    <motion.div
      variants={staggerItem}
      className="bg-surface border border-border rounded-[14px] p-7 hover-lift h-full flex flex-col"
    >
      <div className="flex items-start gap-4 mb-5">
        <div className="w-12 h-12 rounded-[10px] flex items-center justify-center shadow-sm shrink-0" style={{ backgroundColor: c.soft }}>
          <Icon size={24} style={{ color: c.bg }} />
        </div>
        <div className="flex-1">
          <span className="text-[10px] font-semibold uppercase tracking-[0.08em]" style={{ color: c.text }}>{badge}</span>
          <h3 className="font-display font-semibold text-xl tracking-[-0.02em] text-text-primary">{title}</h3>
        </div>
      </div>

      <p className="text-[15px] leading-[1.65] text-text-secondary mb-6 flex-grow">{description}</p>

      <ul className="space-y-2.5">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-text-secondary">
            <Check size={14} className="text-success flex-shrink-0" strokeWidth={3} />
            {f}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

function ShowcaseCarousel({ items, type }: { items: number[], type: 'pos' | 'cmd' }) {
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  
  const tripleItems = [...items, ...items, ...items]
  
  useEffect(() => {
    const unsubscribe = x.on("change", (latest) => {
      if (containerRef.current) {
        const itemWidth = containerRef.current.scrollWidth / 3
        if (latest <= -itemWidth * 2) {
          x.set(latest + itemWidth)
        } else if (latest >= -itemWidth * 0.5) {
          if (latest > 0) x.set(latest - itemWidth)
        }
      }
    })
    return () => unsubscribe()
  }, [x])

  useAnimationFrame((_t, _delta) => {
    if (!isPaused) {
      const speed = 0.8 
      x.set(x.get() - speed)
      
      if (containerRef.current) {
        const setWidth = containerRef.current.scrollWidth / 3
        if (x.get() <= -setWidth) {
          x.set(0)
        }
      }
    }
  })

  return (
    <div 
      className="relative overflow-hidden cursor-grab active:cursor-grabbing px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        ref={containerRef}
        style={{ x }}
        drag="x"
        dragConstraints={{ left: -5000, right: 5000 }}
        onDragStart={() => setIsPaused(true)}
        className="flex gap-6 pb-8 w-max"
      >
        {tripleItems.map((item, i) => (
          <div 
            key={`${type}-${i}`} 
            className="shrink-0 w-[80vw] md:w-[60vw] lg:w-[900px] aspect-[16/10] bg-inset rounded-2xl border border-border relative overflow-hidden shadow-sm hover:shadow-md transition-shadow select-none pointer-events-none"
          >
            <img 
              src={`/landing/${type}-${item}.png`} 
              alt={`Aperion ${type.toUpperCase()} Screenshot ${item}`}
              className="w-full h-full object-cover object-top"
              draggable={false}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).parentElement?.classList.add('flex', 'flex-col', 'items-center', 'justify-center');
                const placeholder = document.createElement('div');
                placeholder.className = "text-text-tertiary text-xs text-center p-10";
                placeholder.innerHTML = `Visualización: <b>${type.toUpperCase()} - Módulo ${item}</b>`;
                (e.target as HTMLImageElement).parentElement?.appendChild(placeholder);
              }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

function ShowcaseSection() {
  const images = [1, 2, 3, 4, 5]

  return (
    <section className="py-16 relative overflow-hidden bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
           initial={fadeUp.initial}
           whileInView={fadeUp.animate}
           viewport={{ once: true, margin: "-100px" }}
           transition={fadeUp.transition}
           className="text-center"
         >
           <h2 className="font-display font-semibold text-[clamp(1.8rem,4vw,2.5rem)] tracking-[-0.02em] text-text-primary">
             Diseñado para la velocidad.
           </h2>
           <p className="mt-4 text-[17px] leading-[1.65] text-text-secondary max-w-2xl mx-auto">
             Descubre una interfaz fluida e intuitiva. Haz clic y arrastra para explorar.
           </p>
         </motion.div>
      </div>

      <div className="space-y-24">
         {/* Axis Carousel */}
         <div className="w-full">
            <div className="max-w-7xl mx-auto px-6 mb-6">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-ap-purple-soft text-ap-purple flex items-center justify-center shadow-sm">
                     <ShoppingCart size={20} />
                  </div>
                  <h3 className="font-display font-bold text-2xl tracking-tight text-text-primary">Apeiron Axis</h3>
               </div>
            </div>
            <ShowcaseCarousel items={images} type="pos" />
         </div>

         {/* Oris Carousel */}
         <div className="w-full">
            <div className="max-w-7xl mx-auto px-6 mb-6">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-ap-pink-soft text-ap-pink flex items-center justify-center shadow-sm">
                     <ChefHat size={20} />
                  </div>
                  <h3 className="font-display font-bold text-2xl tracking-tight text-text-primary">Apeiron Oris</h3>
               </div>
            </div>
            <ShowcaseCarousel items={images} type="cmd" />
         </div>
      </div>
    </section>
  )
}

function FeaturesGrid() {
  return (
    <section id="beneficios" className="py-24 bg-[#fdfdfd] px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={fadeUp.initial}
          whileInView={fadeUp.animate}
          viewport={{ once: true, margin: "-100px" }}
          transition={fadeUp.transition}
          className="text-center mb-20"
        >
          <h2 className="font-display font-semibold text-[clamp(1.8rem,4vw,2.5rem)] tracking-[-0.02em] text-text-primary">
            Potencia tu rentabilidad
          </h2>
          <p className="mt-4 text-[17px] leading-[1.65] text-text-secondary max-w-xl mx-auto">
            Herramientas diseñadas para que el dueño recupere el control de su negocio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <ProductCard
            icon={Receipt}
            title="Facturación 24/7"
            description="Tus clientes pueden generar sus facturas de forma autónoma con un código QR en su ticket, sin que tu personal pierda tiempo en administración."
            badge="AUTOGESTIÓN"
            color="purple"
            features={[
              'Auto-factura vía QR',
              'Cumplimiento fiscal CFDI 4.0',
              'Dashboard de facturas emitidas',
              'Descarga masiva de XML/PDF'
            ]}
          />
          <ProductCard
            icon={Package}
            title="Inventarios y Proveedores"
            description="Control total de stock multisede. Recibe alertas de stock bajo y gestiona tus órdenes de compra a proveedores desde un solo panel."
            badge="CONTROL TOTAL"
            color="emerald"
            features={[
              'Stock en tiempo real',
              'Alertas de existencias bajas',
              'Gestión de proveedores',
              'Recetas e insumos (Oris)'
            ]}
          />
          <ProductCard
            icon={Calculator}
            title="Costos y Rentabilidad"
            description="Analiza tus márgenes de ganancia reales por producto. Conoce qué platillos o artículos son los más rentables y optimiza tus costos."
            badge="INTELIGENCIA DE DATOS"
            color="amber"
            features={[
              'Análisis de margen bruto',
              'Reportes de rentabilidad',
              'Costeo de recetas dinámico',
              'Predicción de ventas'
            ]}
          />
        </div>
      </div>
    </section>
  )
}

function ProductsSection() {
  return (
    <section id="productos" className="py-16 px-6 bg-base">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={fadeUp.initial}
          whileInView={fadeUp.animate}
          viewport={{ once: true, margin: "-100px" }}
          transition={fadeUp.transition}
          className="text-center mb-14"
        >
          <h2 className="font-display font-semibold text-[clamp(1.8rem,4vw,2.5rem)] tracking-[-0.02em] text-text-primary">
            Dos sistemas. Una plataforma.
          </h2>
          <p className="mt-4 text-[17px] leading-[1.65] text-text-secondary max-w-2xl mx-auto">
            Elige el que tu negocio necesita, o contrata ambos con descuento.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <ProductCard
            icon={ShoppingCart}
            title="Apeiron Axis"
            description="Punto de venta ultrarrápido para tiendas, abarrotes, farmacias y cualquier negocio que venda productos físicos."
            badge="RETAIL"
            color="purple"
            features={[
              'Ventas en menos de 3 clicks',
              'Inventario en tiempo real',
              'Cuadre ciego de caja',
              'Modo offline integrado',
              'Z-Report automático por email',
              'Desde $299/mes'
            ]}
          />

          <ProductCard
            icon={ChefHat}
            title="Apeiron Oris"
            description="Sistema completo para restaurantes con KDS en tiempo real, control de mesas y comandas digitales."
            badge="RESTAURANTES"
            color="pink"
            features={[
              'KDS con Socket.io en tiempo real',
              'Mapa visual de mesas',
              'Modificadores y estaciones de cocina',
              'Recall de tickets',
              'Alertas sonoras de cocina',
              'Desde $399/mes'
            ]}
          />

          <ProductCard
            icon={Zap}
            title="Combo Axis + Oris"
            description="Para hoteles, centros comerciales y cadenas mixtas que necesitan ambos sistemas integrados."
            badge="COMBO · AHORRA HASTA $499/mes"
            color="blue"
            features={[
              'Todo lo de Axis Pro',
              'Todo lo de Oris Pro',
              'Dashboard unificado',
              'Reportes combinados',
              'Cruce de inventario',
              'Desde $549/mes'
            ]}
          />
        </motion.div>
      </div>
    </section>
  )
}

function StatsSection() {
  const stats = [
    { icon: Zap, value: '5 min', label: 'Tiempo de deploy', sub: 'vs horas/días de la competencia' },
    { icon: Shield, value: '100%', label: 'Auditoría de seguridad', sub: '0 vulnerabilidades pendientes' },
    { icon: Globe, value: '95%+', label: 'Accesibilidad WCAG 2.1 AA', sub: 'Inclusivo para todos los usuarios' },
    { icon: Clock, value: '24/7', label: 'Disponible siempre', sub: 'Web, sin instalación local' },
  ]

  return (
    <section className="py-20 px-6 bg-surface relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={fadeUp.initial}
            whileInView={fadeUp.animate}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...fadeUp.transition, delay: i * 0.08 }}
            className="text-center group cursor-default"
          >
            <div className="w-12 h-12 rounded-[10px] bg-ap-purple-soft flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-ap-purple/10">
              <s.icon size={24} className="text-ap-purple" strokeWidth={2.5} />
            </div>
            <p className="font-display font-black text-[clamp(1.5rem,3vw,2rem)] tracking-tighter text-text-primary">{s.value}</p>
            <p className="text-sm font-bold text-text-primary mt-1">{s.label}</p>
            <p className="text-xs font-semibold text-text-tertiary mt-0.5 max-w-[200px] mx-auto leading-relaxed">{s.sub}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="py-16 px-6 bg-surface relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={fadeUp.initial}
          whileInView={fadeUp.animate}
          viewport={{ once: true, margin: "-100px" }}
          transition={fadeUp.transition}
          className="text-center mb-16"
        >
          <h2 className="font-display font-semibold text-[clamp(1.8rem,4vw,2.5rem)] tracking-[-0.02em] text-text-primary">
            Restaurantes que ya escalaron.
          </h2>
          <p className="mt-4 text-[17px] leading-[1.65] text-text-secondary max-w-xl mx-auto">
            Negocios reales confiando miles de órdenes en Apeiron todos los días.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { quote: "Increíble cómo pasamos de pizarrones de papel a un KDS instantáneo. Nuestros tiempos de entrega bajaron 40% la primera semana.", name: "Mariana L.", role: "Gerente de Tacos El Patrón", initial: "M" },
            { quote: "Lo que más valoro es no depender de licencias locales. Puedo ver mis números del día desde el celular mientras estoy de viaje.", name: "Carlos Vargas", role: "Socio en Coffee & Co.", initial: "C" },
            { quote: "Hicimos el cambio a Apeiron Axis y la curva de aprendizaje fue cero. Los cajeros dominaron el sistema en menos de diez minutos.", name: "Laura Sánchez", role: "Dueña de Abarrotes San Juan", initial: "L" },
          ].map((testimonial, i) => (
            <motion.div
              key={i}
              initial={fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="glass-panel p-8 rounded-3xl flex flex-col hover-lift"
            >
              <div className="flex gap-1 text-warning-mid mb-6">
                {[1,2,3,4,5].map(s => <Star key={s} size={18} fill="currentColor" />)}
              </div>
              <p className="text-text-primary text-[15px] leading-relaxed mb-8 flex-grow font-medium">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full brand-mark flex items-center justify-center text-white font-bold">
                  {testimonial.initial}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-primary">{testimonial.name}</h4>
                  <p className="text-xs text-text-secondary">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  const [activeTab, setActiveTab] = useState<'pos' | 'comandas' | 'combo'>('comandas')

  const plans = {
    pos: [
      { name: 'Básico', price: '$299', annual: '$2,990/año', desc: 'Para tiendas y abarrotes que inician', features: ['1 sucursal', '1 caja (terminal)', 'Hasta 3 usuarios', '500 productos en catálogo', 'Reportes básicos del día', 'Inventario en tiempo real', 'Modo offline', 'Z-Report email', 'Soporte por chat'], highlighted: false },
      { name: 'Pro', price: '$599', annual: '$5,990/año', desc: 'Para negocios en crecimiento', features: ['Hasta 3 sucursales', 'Hasta 5 cajas', 'Hasta 15 usuarios', 'Productos ilimitados', 'Reportes avanzados + tendencias', 'Exportar a Excel y PDF', 'Compras y proveedores', 'Productos compuestos (combos)', 'Z-Report email', 'Chat prioritario'], highlighted: true },
      { name: 'Business', price: '$1,199', annual: '$11,990/año', desc: 'Para cadenas y grandes operaciones', features: ['Sucursales ilimitadas', 'Cajas ilimitadas', 'Usuarios ilimitados', 'Productos ilimitados', 'Reportes personalizados + API', 'Exportar Excel, PDF + API', 'API de integración', 'Soporte prioritario + teléfono', 'Dashboard unificado', 'Cruce de inventario'], highlighted: false },
    ],
    comandas: [
      { name: 'Lite', price: '$599', annual: '$5,990/año', desc: 'Para cafeterías, dark kitchens y restaurantes pequeños', features: ['1 sucursal', '1 caja', '1 estación KDS', 'Meseros ilimitados', 'Caja + pedidos + cocina en tiempo real', 'Modificadores y notas de comanda', 'Reportes básicos del día', 'Modo offline', 'Soporte por chat'], highlighted: false },
      { name: 'Pro', price: '$899', annual: '$8,990/año', desc: 'Para restaurantes establecidos con salón y operación completa', features: ['Todo lo de Lite', 'Mapa de mesas', 'Z-Report por email', 'Múltiples estaciones de cocina', 'Mejor control operativo', 'Reportes de cancelaciones', 'Seguimiento más completo del servicio', 'Chat prioritario', 'Ideal para operación diaria seria'], highlighted: true },
      { name: 'Multi', price: '$1,499', annual: '$14,990/año', desc: 'Para restaurantes grandes o con varias cajas', features: ['Todo lo de Pro', 'Multi-caja', 'Más control administrativo', 'Auditoría avanzada', 'Mejor operación para equipos grandes', 'Soporte prioritario', 'Preparado para crecimiento', 'Atención más cercana', 'Configuración pensada para operación intensiva'], highlighted: false },
    ],
    combo: [
      { name: 'Básico', price: '$799', annual: '$7,990/año', desc: 'Para negocios mixtos pequeños', features: ['Todo lo de Axis Básico', 'Todo lo de Oris Lite', 'Dashboard unificado', '1 sucursal compartida', 'Ahorro frente a contratar por separado', 'KDS + operación retail', 'Base para operación híbrida', 'Soporte por chat'], highlighted: false },
      { name: 'Pro', price: '$1,299', annual: '$12,990/año', desc: 'Para negocios mixtos en crecimiento', features: ['Todo lo de Axis Pro', 'Todo lo de Oris Pro', 'Dashboard unificado', 'Hasta 3 sucursales', 'Cruce de inventario', 'Reportes combinados', 'Mejor control de operación doble', 'Soporte prioritario'], highlighted: true },
      { name: 'Business', price: '$2,299', annual: '$22,990/año', desc: 'Para operaciones mixtas grandes', features: ['Todo lo de Axis Business', 'Todo lo de Oris Multi', 'Dashboard unificado', 'Sucursales amplias', 'Cruce de inventario', 'Reportes combinados + API', 'Preparado para operación compleja', 'Soporte dedicado'], highlighted: false },
    ]
  }

  const tabLabels = { pos: 'Axis (Retail)', comandas: 'Oris (Restaurante)', combo: 'Combo (Ambos)' }
  const availability = {
    pos: { label: 'Próximamente', available: false },
    comandas: { label: 'Ya disponible', available: true },
    combo: { label: 'Próximamente', available: false },
  } as const
  const isCurrentTabAvailable = availability[activeTab].available

  return (
    <section id="precios" className="py-16 px-6 bg-base">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={fadeUp.initial}
          whileInView={fadeUp.animate}
          viewport={{ once: true, margin: "-100px" }}
          transition={fadeUp.transition}
          className="text-center mb-14"
        >
          <h2 className="font-display font-semibold text-[clamp(1.8rem,4vw,2.5rem)] tracking-[-0.02em] text-text-primary">
            Planes y precios para todos
          </h2>
          <p className="mt-4 text-[17px] leading-[1.65] text-text-secondary max-w-2xl mx-auto">
            Oris ya está lista para operar. Axis y el Combo siguen en preparación para su lanzamiento comercial.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {(Object.keys(tabLabels) as Array<keyof typeof tabLabels>).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-5 py-2.5 rounded-[9999px] text-sm font-bold transition-all duration-200 pressable ${
                activeTab === key
                  ? 'bg-text-primary text-base shadow-sm'
                  : 'bg-inset text-text-secondary hover:bg-black/5 dark:hover:bg-white/5'
              }`}
            >
              <span className="inline-flex items-center gap-2">
                {tabLabels[key]}
                <span className={`rounded-full px-2 py-0.5 text-[9px] font-black uppercase tracking-widest ${
                  availability[key].available
                    ? 'bg-success/15 text-success'
                    : 'bg-warning/15 text-warning'
                }`}>
                  {availability[key].label}
                </span>
              </span>
            </button>
          ))}
        </div>

        {!isCurrentTabAvailable && (
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.animate}
            viewport={{ once: true, margin: '-100px' }}
            transition={fadeUp.transition}
            className="mb-8 rounded-2xl border border-warning/30 bg-warning/10 px-6 py-4 text-center"
          >
            <p className="text-sm font-semibold text-text-primary">
              Este producto sigue en desarrollo comercial.
            </p>
            <p className="mt-1 text-[13px] leading-relaxed text-text-secondary">
              Los precios mostrados son referencia preliminar y pueden ajustarse al momento del lanzamiento oficial.
            </p>
          </motion.div>
        )}

        {/* Plans */}
        <motion.div
          key={activeTab}
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid md:grid-cols-3 gap-6 items-center"
        >
          {plans[activeTab].map((plan, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className={`bg-surface rounded-2xl p-7 relative transition-all duration-300 flex flex-col h-full ${
                plan.highlighted
                  ? 'border-gradient-brand shadow-xl md:-my-4 md:py-10 z-10 scale-100 hover:scale-[1.02]'
                  : 'border border-border shadow-sm hover:shadow-md hover:-translate-y-1'
              }`}
            >
              <span className={`absolute top-4 right-4 rounded-full px-2.5 py-1 text-[9px] font-black uppercase tracking-widest ${
                isCurrentTabAvailable
                  ? 'bg-success/15 text-success'
                  : 'bg-warning/15 text-warning'
              }`}>
                {availability[activeTab].label}
              </span>

              {plan.highlighted && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 brand-mark h-7 px-4 rounded-full text-[10px] font-black uppercase tracking-widest text-white whitespace-nowrap shadow-purple-lg flex items-center justify-center">
                  Más popular
                </span>
              )}

              <h3 className="font-display font-semibold text-xl tracking-[-0.02em] text-text-primary">{plan.name}</h3>
              <p className="text-sm text-text-secondary mt-1">{plan.desc}</p>

              <div className="mt-6 mb-2">
                <span className="font-display font-black text-4xl tracking-tighter text-text-primary drop-shadow-sm">{plan.price}</span>
                <span className="text-sm font-bold text-text-secondary ml-1">MXN/mes</span>
              </div>
              <p className="text-[11px] font-bold tracking-wide text-text-tertiary mb-8 uppercase">o {plan.annual} (2 meses gratis)</p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-2 text-[13px] font-medium text-text-secondary leading-snug">
                    <Check size={16} className="text-success flex-shrink-0 mt-0.5" strokeWidth={3} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener"
                className={`w-full inline-flex items-center justify-center font-bold rounded-full py-3.5 text-base transition-all duration-200 pressable ${
                  !isCurrentTabAvailable
                    ? 'text-text-primary bg-inset border border-border shadow-sm hover:bg-black/5 dark:hover:bg-white/5'
                    : plan.highlighted
                    ? 'text-white bg-ap-purple hover:bg-ap-purple-mid shadow-purple-lg'
                    : 'text-text-primary bg-inset hover:bg-black/5 dark:hover:bg-white/5 border border-border shadow-sm'
                }`}
              >
                {isCurrentTabAvailable ? 'Empezar gratis' : 'Quiero enterarme del lanzamiento'}
              </a>
            </motion.div>
          ))}
        </motion.div>

        {activeTab === 'comandas' && (
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.animate}
            viewport={{ once: true, margin: '-100px' }}
            transition={fadeUp.transition}
            className="mt-10 grid gap-6 lg:grid-cols-2"
          >
            <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
              <span className="inline-flex rounded-full bg-ap-purple/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-ap-purple">
                Implementación Inicial
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.02em] text-text-primary">
                Desde $1,500 MXN por arranque
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-text-secondary">
                Este cobro inicial no es una licencia extra: cubre el trabajo de dejar tu operación lista para arrancar más rápido y con menos errores desde el primer día.
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  'Carga inicial o configuración de menú del cliente',
                  'Ajuste de categorías, estaciones y estructura operativa',
                  'Capacitación básica al personal',
                  'Acompañamiento de arranque para salida más rápida a operación',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-[13px] font-medium text-text-secondary leading-snug">
                    <Check size={16} className="text-success flex-shrink-0 mt-0.5" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
              <span className="inline-flex rounded-full bg-warning/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-warning">
                Facturación
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.02em] text-text-primary">
                Módulo adicional con costo extra
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-text-secondary">
                La facturación no está incluida en el plan base. Se manejará como módulo adicional para no encarecer a los clientes que no la necesitan.
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  'Costo adicional separado del plan mensual base',
                  'Pensado para clientes que sí requieren emitir facturas',
                  'En el plan Pro se podrá integrar más adelante la auto-factura con QR',
                  'La meta es que el cliente final pueda pedir su factura con menos fricción y menos trabajo manual del restaurante',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-[13px] font-medium text-text-secondary leading-snug">
                    <Check size={16} className="text-success flex-shrink-0 mt-0.5" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        {/* Referral callout */}
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener"
          initial={fadeUp.initial}
          whileInView={fadeUp.animate}
          viewport={{ once: true, margin: "-100px" }}
          transition={fadeUp.transition}
          className="mt-16 block relative overflow-hidden rounded-[24px] p-[2px] group shadow-lg hover:shadow-purple-lg transition-all duration-300 hover:-translate-y-1 border border-transparent"
        >
          {/* Animated gradient border */}
          <div className="absolute inset-0 bg-gradient-to-r from-ap-purple via-[#ff4d4d] to-ap-pink opacity-80 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="relative bg-surface rounded-[22px] p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 text-left h-full">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-ap-purple to-ap-pink flex items-center justify-center text-white shrink-0 shadow-md">
               <TrendingUp size={32} strokeWidth={2} />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block text-[11px] font-black uppercase tracking-widest text-[#d946ef] mb-2 font-display">Promoción Especial</span>
              <h3 className="font-display font-bold text-2xl text-text-primary mb-2">Programa &quot;Trae un Amigo&quot;</h3>
              <p className="text-[15px] text-text-secondary leading-relaxed">
                Recomienda Apeiron y <strong className="text-text-primary">tú recibes tu siguiente mes a mitad de precio</strong> por cada referido exitoso. Sin límite.
              </p>
            </div>
            
            <div className="shrink-0 mt-4 md:mt-0 w-full md:w-auto">
              <span className="w-full md:w-auto inline-flex items-center justify-center font-bold text-white bg-text-primary group-hover:bg-ap-purple transition-colors duration-300 rounded-full px-7 py-3.5 text-[15px] shadow-sm">
                Quiero mi descuento <ArrowRight size={18} strokeWidth={2.5} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </motion.a>

        {/* Link to full pricing */}
        <div className="mt-10 text-center">
          <a href="https://github.com/AlanGF1/APEIRON-POS/blob/main/PLANES_Y_PRECIOS.md" target="_blank" rel="noopener" className="text-sm font-bold text-ap-purple hover:text-ap-pink transition-colors inline-flex items-center gap-1.5 group">
            Ver planes completos: Licencias perpetuas y comparativa <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const faqs = [
    { q: "¿Necesito comprar hardware especial para usar Apeiron?", a: "No. Apeiron funciona en la nube, lo que significa que puedes usarlo desde cualquier navegador web moderno en tus tablets iPad/Android, PCs actuales o incluso desde un dispositivo móvil." },
    { q: "¿Qué pasa si me quedo sin internet en el local?", a: "Apeiron cuenta con un 'Modo Offline' nativo que te permite seguir imprimiendo comandas locales y cerrando ventas. Una vez que vuelve la conexión, todo se sincroniza con la nube automáticamente en segundos." },
    { q: "¿Es difícil de capacitar a mis empleados de nuevo ingreso?", a: "Hemos diseñado Apeiron con un enfoque de 'Cero Curva de Aprendizaje'. La interfaz intuitiva y visual permite que cajeros y meseros puedan despachar de forma experta en su primer turno de uso." },
    { q: "¿Estoy obligado a contratos forzosos?", a: "Para nada. No hay pagos escondidos ni largos contratos obligatorios. Te suscribes mes a mes y eres completamente libre de cancelar en el momento en que nuestro software no cumpla tus expectativas." },
  ]

  return (
    <section className="py-16 px-6 bg-base">
      <div className="max-w-3xl mx-auto">
        <motion.div
           initial={fadeUp.initial}
           whileInView={fadeUp.animate}
           viewport={{ once: true, margin: "-100px" }}
           transition={fadeUp.transition}
           className="text-center mb-16"
        >
          <h2 className="font-display font-semibold text-[clamp(1.8rem,4vw,2.5rem)] tracking-[-0.02em] text-text-primary">
            Dudas Frecuentes
          </h2>
          <p className="mt-4 text-[17px] text-text-secondary">
            Resolvemos todo lo que te detiene para dar el siguiente paso.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={{ once: true }}
              transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              className="border border-border rounded-xl bg-surface overflow-hidden"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-inset transition-colors"
              >
                <span className="font-bold text-text-primary">{faq.q}</span>
                <ChevronDown size={20} className={`text-text-secondary transition-transform duration-200 shrink-0 ${openFAQ === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openFAQ === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-5 text-text-secondary leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SecuritySection() {
  return (
    <section id="seguridad" className="py-16 px-6 bg-surface relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={fadeUp.initial}
          whileInView={fadeUp.animate}
          viewport={{ once: true, margin: "-100px" }}
          transition={fadeUp.transition}
          className="text-center mb-14"
        >
          <h2 className="font-display font-semibold text-[clamp(1.8rem,4vw,2.5rem)] tracking-[-0.02em] text-text-primary">
            Seguridad de nivel empresarial
          </h2>
          <p className="mt-4 text-[17px] leading-[1.65] text-text-secondary max-w-2xl mx-auto">
            Tu negocio merece la misma protección que un banco.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { icon: Shield, title: 'JWT seguro', desc: 'Access token en memoria, refresh en cookie httpOnly. Sin localStorage vulnerable.' },
            { icon: Users, title: 'Multi-tenant aislado', desc: 'Cada negocio ve solo sus datos. Imposible acceder a datos de otro tenant.' },
            { icon: Clock, title: 'Audit logging completo', desc: 'Cada acción queda registrada con IP, usuario, timestamp y detalles.' },
            { icon: CreditCard, title: 'Stripe integrado', desc: 'Pagos seguros con PCI compliance. Portal de autogestión para clientes.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={fadeUp.initial}
              whileInView={fadeUp.animate}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              className="bg-base rounded-2xl p-6 border border-border hover:shadow-sm transition-all"
            >
              <div className="w-10 h-10 rounded-[10px] bg-ap-purple-soft flex items-center justify-center mb-4">
                <item.icon size={20} className="text-ap-purple" />
              </div>
              <h3 className="font-display font-semibold text-base tracking-[-0.02em] text-text-primary">{item.title}</h3>
              <p className="text-sm text-text-secondary mt-2 leading-[1.65]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contacto" className="py-16 px-6 bg-[#f5f5f7]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={fadeUp.initial}
          whileInView={fadeUp.animate}
          viewport={{ once: true }}
          transition={fadeUp.transition}
          className="text-center mb-14"
        >
          <h2 className="font-display font-semibold text-[clamp(1.8rem,4vw,2.5rem)] tracking-[-0.02em] text-[#1d1d1f]">
            ¿Tienes dudas? Hablemos.
          </h2>
          <p className="mt-4 text-[17px] leading-[1.65] text-[#6e6e73] max-w-2xl mx-auto">
            Estamos en Durango y nos encanta conocer a nuestros clientes. Escríbenos por WhatsApp o agenda una demo gratuita.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid sm:grid-cols-3 gap-6"
        >
          {/* WhatsApp */}
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            variants={staggerItem}
            className="bg-white border border-black/8 rounded-[14px] p-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-220 text-center group"
          >
            <div className="w-14 h-14 rounded-[10px] bg-[#dcfce7] flex items-center justify-center mx-auto mb-4">
              <MessageCircle size={28} className="text-[#16a34a]" />
            </div>
            <h3 className="font-display font-semibold text-base tracking-[-0.02em] text-zinc-900">WhatsApp</h3>
            <p className="text-sm text-[#6e6e73] mt-2">Respuesta rápida</p>
            <p className="text-sm font-semibold text-[#16a34a] mt-1 group-hover:underline">618 326 4927</p>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:apeiron.contacto.dev@gmail.com"
            variants={staggerItem}
            className="bg-white border border-black/8 rounded-[14px] p-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-220 text-center group"
          >
            <div className="w-14 h-14 rounded-[10px] bg-[#eff6ff] flex items-center justify-center mx-auto mb-4">
              <Mail size={28} className="text-[#2563eb]" />
            </div>
            <h3 className="font-display font-semibold text-base tracking-[-0.02em] text-zinc-900">Email</h3>
            <p className="text-sm text-[#6e6e73] mt-2">Para detalles técnicos</p>
            <p className="text-sm font-semibold text-[#2563eb] mt-1 group-hover:underline break-all">apeiron.contacto.dev@gmail.com</p>
          </motion.a>

          {/* Demo */}
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            variants={staggerItem}
            className="bg-white border border-black/8 rounded-[14px] p-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-220 text-center group"
          >
            <div className="w-14 h-14 rounded-[10px] bg-[#ede9fe] flex items-center justify-center mx-auto mb-4">
              <Calendar size={28} className="text-[#7c3aed]" />
            </div>
            <h3 className="font-display font-semibold text-base tracking-[-0.02em] text-zinc-900">Demo gratuita</h3>
            <p className="text-sm text-[#6e6e73] mt-2">Te mostramos el sistema</p>
            <p className="text-sm font-semibold text-[#7c3aed] mt-1 group-hover:underline">Agendar por WhatsApp</p>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-20 px-6 relative overflow-hidden bg-grid-pattern">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vh] opacity-15 pointer-events-none rounded-full blur-[100px] bg-dark-auras"></div>

      <motion.div
        initial={fadeUp.initial}
        whileInView={fadeUp.animate}
        viewport={{ once: true, margin: "-100px" }}
        transition={fadeUp.transition}
        className="max-w-3xl mx-auto text-center relative z-10 glass-panel border border-ap-purple/20 shadow-xl rounded-[32px] p-12 md:p-16"
      >
        <h2 className="font-display font-semibold text-[clamp(1.8rem,4vw,2.5rem)] tracking-[-0.02em] text-text-primary">
          Empieza hoy. Sin compromiso.
        </h2>
        <p className="mt-4 text-[17px] leading-[1.65] text-text-secondary max-w-xl mx-auto">
          Prueba el modo Pro 14 días con acceso total. Sin tarjeta de crédito inicial. Sin plazos forzosos, cancela con un clic.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center font-bold text-white bg-ap-purple hover:bg-ap-purple-mid transition-all duration-200 rounded-full px-8 py-3.5 text-base shadow-purple-lg pressable"
          >
            Reclamar mis 14 días gratis
            <ArrowRight size={18} strokeWidth={2.5} className="ml-1" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center font-bold text-text-primary bg-surface hover:bg-inset transition-all duration-200 rounded-full px-8 py-3.5 text-base border border-border shadow-sm pressable"
          >
            Agenda una llamada
          </a>
        </div>
        <p className="mt-6 text-sm text-text-tertiary">
          Garantía de reembolso de 30 días posteriores al primer pago.
        </p>
      </motion.div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 bg-surface">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/LOGOSINFONDO.png" alt="APEIRON Logo" className="h-7 w-auto object-contain" />
          <span className="text-xs text-text-tertiary">© 2026 Apeiron. Durango, México.</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-text-secondary">
          <a href="https://apeiron-agencia.vercel.app/" className="hover:text-ap-purple transition-colors font-bold">Agencia Apeiron</a>
          <a href="https://wa.me/526183264927" target="_blank" rel="noopener" className="flex items-center gap-1.5 hover:text-[#16a34a] transition-colors">
            <Phone size={12} /> 618 326 4927
          </a>
          <a href="mailto:apeiron.contacto.dev@gmail.com" className="flex items-center gap-1.5 hover:text-ap-purple transition-colors">
            <Mail size={12} /> Email
          </a>
        </div>
      </div>
    </footer>
  )
}

// ─── FLOATING WHATSAPP BUTTON ───

function WhatsAppFloatingButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
      aria-label="Contactar por WhatsApp"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            className="hidden sm:block bg-white text-[#1d1d1f] text-xs font-medium px-4 py-2 rounded-[10px] shadow-md border border-black/8 whitespace-nowrap"
          >
            ¿Tienes dudas? Escríbenos
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-[#25d366] flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      >
        <MessageCircle size={28} className="text-white" strokeWidth={2} />
      </motion.div>
    </a>
  )
}

// ─── PAGE ───

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-base text-text-primary font-sans selection:bg-ap-purple/20 selection:text-text-primary">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ShowcaseSection />
      <FeaturesGrid />
      <ProductsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <SecuritySection />
      <ContactSection />
      <CTASection />
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  )
}
