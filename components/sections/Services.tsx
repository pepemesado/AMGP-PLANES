'use client';

import { motion } from 'framer-motion';
import { Truck, Home, Globe } from 'lucide-react';

const services = [
  {
    title: 'Importación Europea',
    description: 'Seleccionamos los mejores vehículos premium directamente de Europa.',
    icon: Truck,
  },
  {
    title: 'Compraventa Nacional',
    description: 'Transacciones seguras y eficientes en todo el territorio español.',
    icon: Home,
  },
  {
    title: 'Venta Internacional',
    description: 'Expandimos nuestro catálogo a mercados internacionales de clase alta.',
    icon: Globe,
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-carbon">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-brand-white mb-4">
            Nuestros Servicios
          </h2>
          <div className="w-20 h-1 bg-brand-garnet mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-brand-black p-8 border-l-2 border-brand-garnet hover:translate-y-[-8px] transition-all duration-300"
              >
                <Icon className="w-12 h-12 text-brand-silver mb-4" />
                <h3 className="text-xl font-playfair font-bold text-brand-white mb-3">
                  {service.title}
                </h3>
                <p className="text-brand-silver text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
