import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full relative bg-white overflow-hidden pt-16 md:pt-32 flex flex-col">
      <div className="w-full px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-24 relative z-10">
        <div className="sm:col-span-2 md:col-span-1">
          <h4 className="text-base font-bold text-brand-raisin mb-6">Contact</h4>
          <a href="mailto:efika@gmail.com" className="block text-lg font-bold text-brand-raisin hover:text-brand-primary transition-colors mb-2">efika@gmail.com</a>
          <a href="tel:+628123456789" className="block text-lg font-bold text-brand-raisin hover:text-brand-primary transition-colors">+62 8123456789</a>
        </div>

        <div className="flex flex-col">
          <h4 className="text-base font-bold text-brand-raisin mb-6">Navigation</h4>
          <Link href="#services" className="text-lg font-bold text-brand-raisin hover:text-brand-primary transition-colors mb-2">Services</Link>
          <Link href="#works" className="text-lg font-bold text-brand-raisin hover:text-brand-primary transition-colors mb-2">Works</Link>
        </div>

        <div className="flex flex-col">
          <h4 className="text-base font-bold text-brand-raisin mb-6">Resources</h4>
          <span className="text-lg font-bold text-brand-raisin mb-2">Insights (Coming soon)</span>
          <span className="text-lg font-bold text-brand-raisin">Blog (Coming soon)</span>
        </div>

        <div className="flex flex-col">
          <h4 className="text-base font-bold text-brand-raisin mb-6">Socials</h4>
          <a href="#" className="text-lg font-bold text-brand-raisin hover:text-brand-primary transition-colors mb-2">Behance</a>
          <a href="#" className="text-lg font-bold text-brand-raisin hover:text-brand-primary transition-colors mb-2">Linkedin</a>
          <a href="#" className="text-lg font-bold text-brand-raisin hover:text-brand-primary transition-colors">Instagram</a>
        </div>
      </div>

      {/* Massive Background Logo */}
      <div className="w-full px-16 flex justify-center mt-12 md:mt-24 mb-6 md:mb-12 select-none pointer-events-none">
        <img
          src="/logo-efika-full-background.svg"
          alt="Efika Background"
          className="w-full h-auto"
        />
      </div>
    </footer>
  );
}