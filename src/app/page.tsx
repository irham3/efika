import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PortfolioGrid from '@/components/PortfolioGrid';
import ClientCarousel from '@/components/ClientCarousel';
import SegmentedOfferings from '@/components/SegmentedOfferings';
import Expertise from '@/components/Expertise';
import Testimonials from '@/components/Testimonials';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import SectionReveal from '@/components/SectionReveal';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col w-full font-sans overflow-x-hidden">
      <SectionReveal delay={0} yOffset={-30}>
        <Navbar />
      </SectionReveal>
      <SectionReveal delay={0.2}>
        <Hero />
      </SectionReveal>
      <SectionReveal>
        <PortfolioGrid />
      </SectionReveal>
      <SectionReveal>
        <ClientCarousel />
      </SectionReveal>
      <SectionReveal>
        <SegmentedOfferings />
      </SectionReveal>
      <SectionReveal>
        <Expertise />
      </SectionReveal>
      <SectionReveal>
        <Testimonials />
      </SectionReveal>
      <SectionReveal>
        <ContactCTA />
      </SectionReveal>
      <SectionReveal>
        <Footer />
      </SectionReveal>
    </main>
  );
}