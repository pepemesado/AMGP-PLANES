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
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-garnet/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-garnet/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-brand-garnet text-sm tracking-widest uppercase font-inter">Nuestras Competencias</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-brand-white mb-6 mt-2">
            Servicios Premium
          </h2>
          <div className="flex gap-2 justify-center">
            <div className="w-8 h-1 bg-brand-garnet" />
            <div className="w-3 h-1 bg-brand-silver/30" />
            <div className="w-8 h-1 bg-brand-garnet" />
          </div>
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
                className="group bg-gradient-to-br from-brand-carbon to-brand-black p-8 border border-brand-garnet/30 hover:border-brand-garnet/80 rounded-xl hover:translate-y-[-12px] transition-all duration-500 shadow-2xl hover:shadow-brand-garnet/20"
              >
                <div className="w-14 h-14 bg-brand-garnet/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-garnet/20 transition-all duration-300">
                  <Icon className="w-7 h-7 text-brand-garnet group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-playfair font-bold text-brand-white mb-3">
                  {service.title}
                </h3>
                <p className="text-brand-silver/80 text-base leading-relaxed">
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
