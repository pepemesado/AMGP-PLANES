'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial-garnet" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 text-brand-white"
        >
          Vehículos de lujo.
          <br />
          <span className="text-brand-garnet">Sin intermediarios.</span>
          <br />
          Sin límites.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-brand-silver mb-10 max-w-2xl mx-auto"
        >
          Importamos y vendemos los mejores vehículos premium de Europa a España y el mundo.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="#catalog">
            <button className="px-8 py-3 bg-brand-garnet text-brand-white hover:bg-brand-garnet-light transition-all duration-300 font-inter font-semibold">
              Ver Catálogo
            </button>
          </Link>
          <Link href="#contact">
            <button className="px-8 py-3 border-2 border-brand-silver text-brand-silver hover:bg-brand-silver hover:text-brand-black transition-all duration-300 font-inter font-semibold">
              Contactar
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
