'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const categories = [
  { name: 'Hiperchoques', count: 12, desc: 'Rendimiento extremo' },
  { name: 'Gran Turismo', count: 8, desc: 'Lujo absoluto' },
  { name: 'SUV Premium', count: 10, desc: 'Potencia versátil' },
  { name: 'Sedanes', count: 6, desc: 'Elegancia pura' },
];

export default function ModelCatalog() {
  return (
    <section className="py-40 px-4 sm:px-6 lg:px-8 bg-brand-carbon">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-brand-garnet text-xs tracking-[0.3em] uppercase font-semibold mb-4">
            Categorías
          </p>
          <h2 className="text-7xl md:text-8xl font-playfair font-bold text-brand-white">
            Descubre<br />tu Estilo
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Link href="#catalog">
                <div className="relative group cursor-pointer overflow-hidden h-80">
                  {/* Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-garnet/20 to-brand-silver/10 group-hover:from-brand-garnet/40 group-hover:to-brand-silver/20 transition-all duration-700" />

                  {/* Border */}
                  <div className="absolute inset-0 border border-brand-garnet/30 group-hover:border-brand-garnet/60 transition-all duration-700" />

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-8">
                    <div>
                      <p className="text-brand-silver text-xs uppercase tracking-widest font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {cat.desc}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-4xl font-playfair font-bold text-brand-white mb-4 group-hover:text-brand-garnet transition-colors duration-500">
                        {cat.name}
                      </h3>
                      <p className="text-2xl font-playfair font-bold text-brand-garnet">
                        {cat.count} modelos
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
