'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { createLead } from '@/lib/supabase';
import { Mail, Phone, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    vehiculo: 'otro',
    mensaje: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await createLead(
        formData.nombre,
        formData.email,
        formData.telefono,
        formData.vehiculo,
        formData.mensaje
      );
      setSuccess(true);
      setFormData({ nombre: '', email: '', telefono: '', vehiculo: 'otro', mensaje: '' });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError('Hubo un error al enviar tu solicitud. Intenta de nuevo.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-carbon">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-brand-white mb-4">
            Contacta con Nosotros
          </h2>
          <div className="w-20 h-1 bg-brand-garnet mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="block text-brand-silver font-inter text-sm mb-2">
                Nombre *
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-brand-black border border-brand-carbon text-brand-white font-inter focus:outline-none focus:border-brand-garnet transition-colors"
              />
            </div>

            <div>
              <label className="block text-brand-silver font-inter text-sm mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-brand-black border border-brand-carbon text-brand-white font-inter focus:outline-none focus:border-brand-garnet transition-colors"
              />
            </div>

            <div>
              <label className="block text-brand-silver font-inter text-sm mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-brand-black border border-brand-carbon text-brand-white font-inter focus:outline-none focus:border-brand-garnet transition-colors"
              />
            </div>

            <div>
              <label className="block text-brand-silver font-inter text-sm mb-2">
                Vehículo que Buscas
              </label>
              <select
                name="vehiculo"
                value={formData.vehiculo}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-brand-black border border-brand-carbon text-brand-white font-inter focus:outline-none focus:border-brand-garnet transition-colors"
              >
                <option value="sedan">Sedán</option>
                <option value="suv">SUV</option>
                <option value="coupe">Coupé</option>
                <option value="deportivo">Deportivo</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div>
              <label className="block text-brand-silver font-inter text-sm mb-2">
                Mensaje *
              </label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-brand-black border border-brand-carbon text-brand-white font-inter focus:outline-none focus:border-brand-garnet transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-brand-garnet text-brand-white hover:bg-brand-garnet-light disabled:opacity-50 transition-all duration-300 font-inter font-semibold"
            >
              {loading ? 'Enviando...' : 'Enviar Solicitud'}
            </button>

            {success && (
              <div className="p-4 bg-green-900/20 border border-green-600 text-green-400 rounded">
                ¡Solicitud enviada exitosamente! Nos contactaremos pronto.
              </div>
            )}

            {error && (
              <div className="p-4 bg-brand-garnet/20 border border-brand-garnet text-brand-garnet rounded">
                {error}
              </div>
            )}
          </motion.form>

          {/* Información de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex gap-4 items-start">
              <Mail className="w-6 h-6 text-brand-garnet flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-playfair font-bold text-brand-white mb-2">Email</h3>
                <a
                  href="mailto:info@amgpplanes.es"
                  className="text-brand-silver hover-silver"
                >
                  info@amgpplanes.es
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Phone className="w-6 h-6 text-brand-garnet flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-playfair font-bold text-brand-white mb-2">Teléfono</h3>
                <a
                  href="tel:+34900000000"
                  className="text-brand-silver hover-silver"
                >
                  +34 (900) 000 000
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <MessageSquare className="w-6 h-6 text-brand-garnet flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-playfair font-bold text-brand-white mb-2">WhatsApp</h3>
                <a
                  href="https://wa.me/34900000000"
                  className="text-brand-silver hover-silver"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +34 (900) 000 000
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
