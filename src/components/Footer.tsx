import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full relative bg-white overflow-hidden pt-32 flex flex-col">
      <div className="w-full px-12 grid grid-cols-1 md:grid-cols-4 gap-16 mb-24 relative z-10">
        <div className="flex flex-col">
          <h4 className="text-base font-bold text-brand-raisin mb-6">Contact</h4>
          <a href="mailto:efika@gmail.com" className="text-lg font-bold text-brand-raisin hover:text-brand-primary transition-colors mb-2">efika@gmail.com</a>
          <a href="tel:+628123456789" className="text-lg font-bold text-brand-raisin hover:text-brand-primary transition-colors">+62 8123456789</a>
        </div>
        
        <div className="flex flex-col">
          <h4 className="text-base font-bold text-brand-raisin mb-6">Navigation</h4>
          <Link href="#services" className="text-lg font-bold text-brand-raisin hover:text-brand-primary transition-colors mb-2">Services</Link>
          <Link href="#works" className="text-lg font-bold text-brand-raisin hover:text-brand-primary transition-colors mb-2">Works</Link>
        </div>

        <div className="flex flex-col md:mt-[3.25rem]">
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
      
      {/* Massive Background Text */}
      <div className="w-full flex justify-center -mb-[5%] mt-auto overflow-hidden select-none pointer-events-none opacity-[0.07]">
        <h1 className="text-[35vw] font-bold text-brand-raisin leading-[0.75] tracking-tighter m-0 p-0 flex items-start">
          efika
          <span className="text-[12vw] leading-none ml-2">*</span>
        </h1>
      </div>
    </footer>
  );
}