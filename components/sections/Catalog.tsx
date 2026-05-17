'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getVehicles } from '@/lib/supabase';
import { Database } from '@/lib/database.types';

type Vehicle = Database['public']['Tables']['vehicles']['Row'];

export default function Catalog() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const data = await getVehicles();
        setVehicles(data);
      } catch (error) {
        console.error('Error fetching vehicles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  const placeholderVehicles: Vehicle[] = [
    { id: '1', brand: 'Mercedes-Benz', model: 'AMG GT 63 S', year: 2024, price: 185000, km: 0, image_url: null, available: true, created_at: new Date().toISOString() },
    { id: '2', brand: 'BMW', model: 'M760i xDrive', year: 2024, price: 175000, km: 0, image_url: null, available: true, created_at: new Date().toISOString() },
    { id: '3', brand: 'Porsche', model: '911 Turbo S', year: 2023, price: 210000, km: 2500, image_url: null, available: true, created_at: new Date().toISOString() },
    { id: '4', brand: 'BMW', model: 'M440i xDrive', year: 2024, price: 95000, km: 500, image_url: null, available: true, created_at: new Date().toISOString() },
    { id: '5', brand: 'Volkswagen', model: 'Touareg V8 TDI', year: 2023, price: 125000, km: 1200, image_url: null, available: true, created_at: new Date().toISOString() },
    { id: '6', brand: 'Mercedes-Benz', model: 'GLE 63 AMG Coupé', year: 2024, price: 155000, km: 0, image_url: null, available: true, created_at: new Date().toISOString() },
  ];

  const displayVehicles = vehicles.length > 0 ? vehicles : placeholderVehicles;

  return (
    <section id="catalog" className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-carbon">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-brand-white mb-4">
            Unidades Disponibles
          </h2>
          <div className="w-20 h-1 bg-brand-garnet mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayVehicles.map((vehicle) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-brand-black overflow-hidden hover:shadow-lg hover:shadow-brand-garnet/20 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-64 bg-brand-carbon">
                {vehicle.image_url ? (
                  <Image
                    src={vehicle.image_url}
                    alt={`${vehicle.brand} ${vehicle.model}`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-brand-silver/30">
                    Sin imagen
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-playfair font-bold text-brand-white mb-2">
                  {vehicle.brand} {vehicle.model}
                </h3>

                <div className="space-y-2 mb-4 text-sm text-brand-silver">
                  {vehicle.year && <p>Año: {vehicle.year}</p>}
                  {vehicle.km !== null && <p>Kilómetros: {vehicle.km.toLocaleString()}</p>}
                  {vehicle.price && (
                    <p className="text-brand-garnet font-semibold">
                      Precio: €{vehicle.price.toLocaleString()}
                    </p>
                  )}
                </div>

                <button className="w-full py-2 bg-brand-garnet text-brand-white hover:bg-brand-garnet-light transition-all duration-300 font-inter text-sm font-semibold">
                  Ver Detalles
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {loading && (
          <div className="text-center mt-8 text-brand-silver">
            Cargando vehículos...
          </div>
        )}
      </div>
    </section>
  );
}
