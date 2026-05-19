'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1400&q=80')`,
        }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-brand-black/40" />
        {/* Accent Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-black" />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-left max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-20"
      >
        {/* Accent Line */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-12 h-1 bg-brand-garnet" />
          <span className="text-brand-silver text-sm tracking-widest uppercase font-inter">Lujo Premium Europa</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6 leading-tight"
        >
          <span className="text-brand-white">Vehículos</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-garnet to-brand-garnet-light">
            de Ensueño
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl text-brand-silver-light mb-8 max-w-3xl leading-relaxed"
        >
          Importamos los hyperchoques y vehículos premium más exclusivos de Europa.
          <span className="text-brand-garnet font-semibold"> Sin intermediarios. Sin límites.</span>
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-8 mb-12 max-w-2xl"
        >
          <div className="border-l-2 border-brand-garnet pl-4">
            <p className="text-3xl font-playfair font-bold text-brand-white">50+</p>
            <p className="text-brand-silver text-sm">Vehículos en Catálogo</p>
          </div>
          <div className="border-l-2 border-brand-garnet pl-4">
            <p className="text-3xl font-playfair font-bold text-brand-white">10</p>
            <p className="text-brand-silver text-sm">Años de Experiencia</p>
          </div>
          <div className="border-l-2 border-brand-garnet pl-4">
            <p className="text-3xl font-playfair font-bold text-brand-white">6</p>
            <p className="text-brand-silver text-sm">Países de Origen</p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Link href="#catalog" className="group">
            <button className="px-10 py-4 bg-brand-garnet hover:bg-brand-garnet-light text-brand-white font-inter font-bold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-brand-garnet/50 hover:shadow-2xl">
              Ver Catálogo
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </Link>
          <Link href="#contact" className="group">
            <button className="px-10 py-4 border-2 border-brand-silver text-brand-silver hover:bg-brand-silver hover:text-brand-black font-inter font-bold text-lg transition-all duration-300 shadow-lg">
              Solicitar Consulta
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute bottom-10 right-10 text-brand-garnet opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="55" stroke="currentColor" strokeWidth="2" />
          <path d="M60 20 L100 100 L20 100 Z" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </motion.div>
    </section>
  );
}
