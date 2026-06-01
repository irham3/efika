import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-6 px-6 md:py-8 md:px-12">
      <div className="flex items-center gap-1">
        <Link href="/" className="text-2xl md:text-3xl font-bold text-brand-raisin tracking-tight">efika</Link>
        <div className="text-brand-primary font-bold text-2xl md:text-3xl leading-none mt-2">*</div>
      </div>

      <div className="hidden md:flex items-center justify-center gap-8 lg:gap-16 font-medium text-lg">
        <Link href="#service" className="text-brand-raisin hover:text-brand-primary transition-colors">Service</Link>
        <Link href="#works" className="text-brand-raisin hover:text-brand-primary transition-colors">Works</Link>
      </div>

      <div className="flex items-center justify-end gap-6 lg:gap-12">
        <div className="text-sm text-right text-brand-raisin/70 hidden lg:block">
          <p className="font-medium text-brand-raisin">Based in Indonesia | Worldwide [09:00 WIB (UTC+7)]</p>
          <p className="text-brand-raisin/40">Good Brand is by Design</p>
        </div>
        <Link href="#contact" className="px-6 py-2 md:px-8 md:py-3 text-sm md:text-base bg-brand-raisin text-white rounded-full font-medium hover:bg-black transition-colors shrink-0">
          Say Hi!
        </Link>
      </div>
    </nav>
  );
}