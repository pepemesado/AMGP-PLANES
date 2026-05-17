'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black border-t border-brand-carbon py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo y Descripción */}
          <div>
            <Link href="/" className="flex items-center gap-1 mb-4">
              <span className="text-xl font-playfair font-bold">
                <span className="text-brand-garnet">AMGP</span>
                <span className="text-brand-silver ml-2">PLANES</span>
              </span>
            </Link>
            <p className="text-brand-silver text-sm">
              Vehículos de lujo. Sin intermediarios. Sin límites.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-brand-white font-playfair font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm text-brand-silver">
              <li>
                <Link href="#" className="hover-silver">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover-silver">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#catalog" className="hover-silver">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover-silver">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover-silver">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Info Legal */}
          <div>
            <h3 className="text-brand-white font-playfair font-bold mb-4">Información</h3>
            <ul className="space-y-2 text-sm text-brand-silver">
              <li>
                <a href="#" className="hover-silver">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover-silver">
                  Términos de Servicio
                </a>
              </li>
              <li>
                <a href="#" className="hover-silver">
                  Aviso Legal
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-brand-carbon pt-8 text-center text-sm text-brand-silver">
          <p>© {currentYear} AMGP PLANES. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
