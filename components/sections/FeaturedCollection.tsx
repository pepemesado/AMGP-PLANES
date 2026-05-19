'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const featured = [
  {
    id: 1,
    name: 'Ferrari SF90',
    power: '970 CV',
    image: 'https://images.unsplash.com/photo-1624345604734-f0a68f0e18e2?w=800&q=90',
  },
  {
    id: 2,
    name: 'Lamborghini',
    power: '1001 CV',
    image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=800&q=90',
  },
  {
    id: 3,
    name: 'Porsche 911',
    power: '650 CV',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692d845d7?w=800&q=90',
  },
];

export default function FeaturedCollection() {
  return (
    <section className="py-40 px-4 sm:px-6 lg:px-8 bg-brand-black">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <p className="text-brand-garnet text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            Selección Exclusiva
          </p>
          <h2 className="text-7xl md:text-8xl font-playfair font-bold text-brand-white">
            Maestría<br />en Movimiento
          </h2>
        </motion.div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
          {featured.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative overflow-hidden aspect-square"
            >
              {/* Image */}
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-700" />

              {/* Content - Bottom */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
                className="absolute bottom-0 left-0 right-0 p-8 z-10"
              >
                <p className="text-brand-silver text-sm uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Potencia
                </p>
                <p className="text-3xl font-playfair font-bold text-brand-garnet mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  {car.power}
                </p>
                <h3 className="text-3xl font-playfair font-bold text-brand-white">
                  {car.name}
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link href="#catalog">
            <button className="px-12 py-4 bg-brand-garnet hover:bg-brand-garnet-light text-brand-white font-playfair font-bold text-lg uppercase tracking-wider transition-all duration-300 shadow-2xl hover:shadow-brand-garnet/50">
              Explorar Catálogo Completo
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
