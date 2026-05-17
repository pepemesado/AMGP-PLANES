import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import WhyUs from '@/components/sections/WhyUs';
import Catalog from '@/components/sections/Catalog';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="bg-brand-black">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Catalog />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
