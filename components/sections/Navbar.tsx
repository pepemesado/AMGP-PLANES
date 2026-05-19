'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#' },
    { label: 'Servicios', href: '#services' },
    { label: 'Catálogo', href: '#catalog' },
    { label: 'Nosotros', href: '#about' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-brand-black/98 backdrop-blur-xl shadow-2xl shadow-brand-garnet/10'
            : 'bg-transparent'
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-playfair font-bold">
              <span className="text-brand-garnet">AMGP</span>
              <span className="text-brand-silver ml-6">PLANES</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-brand-silver hover-silver text-sm font-inter"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="px-6 py-2.5 bg-brand-garnet text-brand-white hover:bg-brand-garnet-light transition-all duration-300 font-inter text-sm font-semibold shadow-lg hover:shadow-brand-garnet/50">
              Solicitar Vehículo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-brand-silver"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-brand-carbon mt-4 rounded p-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-brand-silver hover-silver text-sm font-inter"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button className="w-full px-6 py-2 border-2 border-brand-garnet text-brand-garnet hover:bg-brand-garnet hover:text-brand-white transition-all duration-300 font-inter text-sm">
              Solicitar Vehículo
            </button>
          </div>
        )}
      </div>
      </nav>

      {/* Red Bottom Bar */}
      <div className="fixed top-[72px] left-0 right-0 h-1 bg-brand-garnet z-[49]" />
    </>
  );
}
