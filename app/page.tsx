import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import FeaturedCollection from '@/components/sections/FeaturedCollection';
import ModelCatalog from '@/components/sections/ModelCatalog';
import VehicleFinder from '@/components/sections/VehicleFinder';
import Services from '@/components/sections/Services';
import WhyUs from '@/components/sections/WhyUs';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="bg-brand-black">
      <Navbar />
      <Hero />
      <FeaturedCollection />
      <ModelCatalog />
      <VehicleFinder />
      <Services />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  );
}
