'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-brand-white mb-4">
            Nosotros
          </h2>
          <div className="w-20 h-1 bg-brand-garnet mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          className="space-y-6 text-brand-silver leading-relaxed"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg"
          >
            AMGP PLANES es el resultado de años de experiencia en el sector automovilístico premium.
            Nuestro compromiso es garantizar que cada vehículo que comercializamos cumple con los
            más altos estándares de calidad, seguridad y autenticidad.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg"
          >
            No creemos en intermediarios innecesarios. Trabajamos directamente con nuestros clientes
            y proveedores europeos para ofrecer vehículos de lujo al mejor precio posible, sin
            comprometer la calidad ni la transparencia.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg"
          >
            Rigor técnico, criterio profesional y sin excusas. Esta es la filosofía que nos define
            y la que aplicamos en cada transacción, cada auditoría y cada interacción con nuestros
            clientes.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
