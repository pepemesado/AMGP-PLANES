'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Zap, Wind, Fuel } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Deportivos',
    description: 'Máxima potencia y rendimiento',
    count: '12 modelos',
    icon: Zap,
    color: 'from-brand-garnet/20',
  },
  {
    id: 2,
    name: 'Gran Turismo',
    description: 'Lujo y confort sin límites',
    count: '8 modelos',
    icon: Wind,
    color: 'from-brand-silver/20',
  },
  {
    id: 3,
    name: 'SUV Premium',
    description: 'Potencia y versatilidad',
    count: '10 modelos',
    icon: Fuel,
    color: 'from-brand-garnet/20',
  },
  {
    id: 4,
    name: 'Sedanes Ejecutivos',
    description: 'Elegancia y sofisticación',
    count: '6 modelos',
    icon: Wind,
    color: 'from-brand-silver/20',
  },
];

export default function ModelCatalog() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-brand-carbon relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-garnet/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="text-brand-silver text-sm tracking-[0.2em] uppercase mb-4">Vehículos Disponibles</p>
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-brand-white mb-6">
            Su Viaje Comienza Aquí
          </h2>
          <p className="text-brand-silver text-lg max-w-2xl mx-auto">
            Descubra nuestra amplia colección de vehículos premium importados directamente de Europa
          </p>
        </motion.div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href="#catalog">
                  <div className={`bg-gradient-to-br ${category.color} to-transparent border border-brand-garnet/30 hover:border-brand-garnet/60 p-8 cursor-pointer transition-all duration-500 hover:translate-y-[-8px]`}>
                    <Icon className="w-12 h-12 text-brand-garnet mb-6 group-hover:scale-110 transition-transform duration-300" />

                    <h3 className="text-2xl font-playfair font-bold text-brand-white mb-2">
                      {category.name}
                    </h3>

                    <p className="text-brand-silver text-sm mb-4 leading-relaxed">
                      {category.description}
                    </p>

                    <div className="pt-4 border-t border-brand-garnet/20">
                      <p className="text-brand-garnet font-semibold text-sm">
                        {category.count}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
