'use client';

import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useState } from 'react';

export default function VehicleFinder() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-brand-black border-t border-brand-garnet/20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand-silver text-sm tracking-[0.2em] uppercase mb-4">Búsqueda Inteligente</p>
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-brand-white mb-6">
            Encuentre su Vehículo de Ensueño
          </h2>
          <p className="text-brand-silver text-lg">
            Explore nuestro catálogo global y encuentre exactamente lo que busca
          </p>
        </motion.div>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-r from-brand-carbon to-brand-black border border-brand-garnet/30 p-8 rounded-xl shadow-2xl"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Input */}
            <div className="flex-1 w-full">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-garnet w-5 h-5" />
                <input
                  type="text"
                  placeholder="Marca, modelo, año..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-brand-black border border-brand-garnet/20 text-brand-white placeholder-brand-silver/50 focus:outline-none focus:border-brand-garnet focus:ring-1 focus:ring-brand-garnet transition-all"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex gap-3 w-full md:w-auto">
              <select className="px-4 py-4 bg-brand-black border border-brand-garnet/20 text-brand-silver focus:outline-none focus:border-brand-garnet transition-all text-sm">
                <option>Tipo</option>
                <option>Deportivo</option>
                <option>Gran Turismo</option>
                <option>SUV</option>
                <option>Sedán</option>
              </select>

              <select className="px-4 py-4 bg-brand-black border border-brand-garnet/20 text-brand-silver focus:outline-none focus:border-brand-garnet transition-all text-sm">
                <option>Rango Precio</option>
                <option>50K - 100K</option>
                <option>100K - 200K</option>
                <option>200K+</option>
              </select>
            </div>

            {/* Button */}
            <button className="w-full md:w-auto px-8 py-4 bg-brand-garnet hover:bg-brand-garnet-light text-brand-white font-playfair font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-brand-garnet/50">
              Buscar
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-brand-garnet/20">
            <div className="text-center">
              <p className="text-3xl font-playfair font-bold text-brand-garnet">50+</p>
              <p className="text-brand-silver text-sm mt-2">Vehículos Activos</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-playfair font-bold text-brand-garnet">6</p>
              <p className="text-brand-silver text-sm mt-2">Países Europeos</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-playfair font-bold text-brand-garnet">24/7</p>
              <p className="text-brand-silver text-sm mt-2">Asesoría Disponible</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
