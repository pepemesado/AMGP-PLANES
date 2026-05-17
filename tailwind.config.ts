import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0A0A0A',
          carbon: '#111111',
          garnet: '#8B0000',
          'garnet-light': '#A50000',
          silver: '#C0C0C0',
          'silver-light': '#E8E8E8',
          white: '#F5F5F5',
        },
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial-garnet': 'radial-gradient(circle at center, rgba(139, 0, 0, 0.15) 0%, rgba(10, 10, 10, 0) 70%)',
      },
    },
  },
  plugins: [],
};

export default config;
