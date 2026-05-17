'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    title: 'Auditoría Técnica',
    description: 'Auditoría técnica profesional en cada unidad',
  },
  {
    title: 'Documentación',
    description: 'Gestión documental completa',
  },
  {
    title: 'Transparencia',
    description: 'Transparencia total en costes',
  },
  {
    title: 'Red Europea',
    description: 'Red de contactos en toda Europa',
  },
];

export default function WhyUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-brand-white mb-4">
            Por Qué AMGP PLANES
          </h2>
          <div className="w-20 h-1 bg-brand-garnet mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex gap-4 items-start p-6 hover:bg-brand-carbon transition-all duration-300 rounded"
            >
              <CheckCircle2 className="w-6 h-6 text-brand-garnet flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-playfair font-bold text-brand-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-brand-silver text-sm">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
