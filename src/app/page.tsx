import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PortfolioGrid from '@/components/PortfolioGrid';
import ClientCarousel from '@/components/ClientCarousel';
import SegmentedOfferings from '@/components/SegmentedOfferings';
import Expertise from '@/components/Expertise';
import Testimonials from '@/components/Testimonials';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen  flex flex-col w-full font-sans">
      <Navbar />
      <Hero />
      <PortfolioGrid />
      <ClientCarousel />
      <SegmentedOfferings />
      <Expertise />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  );
}