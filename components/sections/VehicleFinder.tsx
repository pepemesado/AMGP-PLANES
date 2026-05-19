'use client';

import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useState } from 'react';

export default function VehicleFinder() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="py-40 px-4 sm:px-6 lg:px-8 bg-brand-black border-t border-brand-garnet/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-brand-garnet text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            Búsqueda Avanzada
          </p>
          <h2 className="text-7xl md:text-8xl font-playfair font-bold text-brand-white">
            Busca tu<br />Perfecto Match
          </h2>
        </motion.div>

        {/* Search Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Main Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Marca, modelo, año..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-8 py-6 bg-transparent border-b-2 border-brand-garnet/50 text-brand-white placeholder-brand-silver/40 focus:outline-none focus:border-brand-garnet transition-all duration-300 font-playfair text-2xl"
            />
            <Search className="absolute right-8 top-1/2 -translate-y-1/2 text-brand-garnet w-6 h-6" />
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <select className="w-full px-0 py-3 bg-transparent border-b border-brand-silver/30 text-brand-white focus:outline-none focus:border-brand-garnet transition-all duration-300 font-inter text-sm uppercase tracking-wider">
                <option className="bg-brand-black">Tipo de Vehículo</option>
                <option className="bg-brand-black">Deportivo</option>
                <option className="bg-brand-black">Gran Turismo</option>
                <option className="bg-brand-black">SUV</option>
                <option className="bg-brand-black">Sedán</option>
              </select>
            </div>

            <div>
              <select className="w-full px-0 py-3 bg-transparent border-b border-brand-silver/30 text-brand-white focus:outline-none focus:border-brand-garnet transition-all duration-300 font-inter text-sm uppercase tracking-wider">
                <option className="bg-brand-black">Rango de Precio</option>
                <option className="bg-brand-black">50K - 100K €</option>
                <option className="bg-brand-black">100K - 200K €</option>
                <option className="bg-brand-black">200K+</option>
              </select>
            </div>

            <div>
              <select className="w-full px-0 py-3 bg-transparent border-b border-brand-silver/30 text-brand-white focus:outline-none focus:border-brand-garnet transition-all duration-300 font-inter text-sm uppercase tracking-wider">
                <option className="bg-brand-black">Marca</option>
                <option className="bg-brand-black">Ferrari</option>
                <option className="bg-brand-black">Lamborghini</option>
                <option className="bg-brand-black">Porsche</option>
              </select>
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-center pt-8">
            <button className="px-16 py-5 bg-brand-garnet hover:bg-brand-garnet-light text-brand-white font-playfair font-bold text-xl uppercase tracking-wider transition-all duration-300 shadow-2xl hover:shadow-brand-garnet/50">
              Explorar
            </button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-3 gap-12 mt-32 pt-16 border-t border-brand-garnet/20"
        >
          <div>
            <p className="text-5xl font-playfair font-bold text-brand-garnet mb-2">50+</p>
            <p className="text-brand-silver uppercase text-xs tracking-widest">Vehículos en Stock</p>
          </div>
          <div>
            <p className="text-5xl font-playfair font-bold text-brand-garnet mb-2">6</p>
            <p className="text-brand-silver uppercase text-xs tracking-widest">Países Europeos</p>
          </div>
          <div>
            <p className="text-5xl font-playfair font-bold text-brand-garnet mb-2">24/7</p>
            <p className="text-brand-silver uppercase text-xs tracking-widest">Asesoría Premium</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
