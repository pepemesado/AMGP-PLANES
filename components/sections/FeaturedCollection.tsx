'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const featured = [
  {
    id: 1,
    name: 'Ferrari SF90 Stradale',
    power: '970 CV',
    image: 'https://images.unsplash.com/photo-1624345604734-f0a68f0e18e2?w=600&q=80',
    tag: 'Deportivo Híbrido',
  },
  {
    id: 2,
    name: 'Lamborghini Revuelto',
    power: '1001 CV',
    image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=600&q=80',
    tag: 'Gran Turismo',
  },
  {
    id: 3,
    name: 'Porsche 911 Turbo S',
    power: '650 CV',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692d845d7?w=600&q=80',
    tag: 'Icónico',
  },
];

export default function FeaturedCollection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-black border-t border-brand-garnet/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="text-brand-silver text-sm tracking-[0.2em] uppercase mb-4">Destacados</p>
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-brand-white mb-6">
            Nuestras Joyas Premium
          </h2>
          <p className="text-brand-silver text-lg max-w-2xl mx-auto">
            Selección de los vehículos más exclusivos y poderosos de nuestro catálogo internacional
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-96 mb-6">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Tag */}
                <div className="absolute top-4 right-4 bg-brand-garnet/90 text-brand-white px-4 py-2 text-xs uppercase tracking-wider font-semibold">
                  {car.tag}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-playfair font-bold text-brand-white mb-2">
                    {car.name}
                  </h3>
                  <p className="text-brand-garnet font-semibold text-lg">{car.power}</p>
                </div>

                <Link href="#catalog" className="inline-block">
                  <button className="text-brand-silver hover:text-brand-garnet transition-colors duration-300 flex items-center gap-2 uppercase text-sm tracking-wider font-semibold">
                    Explorar
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
