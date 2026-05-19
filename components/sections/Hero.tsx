'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Dual Background Images */}
      <div className="absolute inset-0 flex">
        {/* Left Side - Dark */}
        <div className="w-1/2 bg-brand-black" />
        {/* Right Side - Vehicle Background */}
        <div
          className="w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-brand-black/60" />
        </div>
      </div>

      {/* Content - Centered with Brand Name */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <span className="text-brand-silver text-xs tracking-[0.3em] uppercase font-inter">
            Vehículos Premium
          </span>
        </motion.div>

        {/* Main Brand Name - HUGE and Centered */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h1 className="text-7xl md:text-9xl lg:text-10xl font-playfair font-bold leading-none">
            <span className="text-brand-garnet block">AMGP</span>
            <span className="text-brand-white block">PLANES</span>
          </h1>
        </motion.div>

        {/* Separator Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-32 h-1 bg-gradient-to-r from-brand-garnet to-brand-silver mb-12"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center text-brand-silver text-lg md:text-2xl max-w-3xl mb-16 font-light tracking-wide"
        >
          Importación de Hyperchoques y Vehículos de Lujo desde Europa
        </motion.p>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col md:flex-row gap-8 md:gap-20 mb-16 text-center md:text-left"
        >
          <div>
            <p className="text-4xl md:text-5xl font-playfair font-bold text-brand-garnet">50+</p>
            <p className="text-brand-silver text-sm mt-2 uppercase tracking-wider">Vehículos Disponibles</p>
          </div>
          <div className="hidden md:block w-px bg-brand-garnet/30" />
          <div>
            <p className="text-4xl md:text-5xl font-playfair font-bold text-brand-garnet">10</p>
            <p className="text-brand-silver text-sm mt-2 uppercase tracking-wider">Años de Experiencia</p>
          </div>
          <div className="hidden md:block w-px bg-brand-garnet/30" />
          <div>
            <p className="text-4xl md:text-5xl font-playfair font-bold text-brand-garnet">6</p>
            <p className="text-brand-silver text-sm mt-2 uppercase tracking-wider">Países Europeos</p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Link href="#catalog" className="group">
            <button className="px-12 py-4 bg-brand-garnet hover:bg-brand-garnet-light text-brand-white font-playfair font-bold text-lg transition-all duration-300 flex items-center gap-3 shadow-2xl hover:shadow-brand-garnet/50 tracking-wide uppercase">
              VER CATÁLOGO
              <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </Link>
          <Link href="#contact" className="group">
            <button className="px-12 py-4 border-2 border-brand-silver text-brand-silver hover:bg-brand-silver hover:text-brand-black font-playfair font-bold text-lg transition-all duration-300 shadow-2xl tracking-wide uppercase">
              CONTACTAR
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom Accent */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-garnet via-brand-silver to-brand-garnet"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 1.4 }}
      />
    </section>
  );
}
