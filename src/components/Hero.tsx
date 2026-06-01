import Link from 'next/link';

export default function Hero() {
  return (
    <section className="w-full px-6 md:px-12 pt-32 md:pt-48 pb-20 md:pb-32 flex flex-col md:flex-row gap-10 md:gap-16 justify-between items-start">
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-semibold text-brand-raisin leading-[1.1] tracking-tight max-w-[800px]">
          Design and Branding studio helping startup, agency, and brands to grow.
        </h1>
      </div>

      <div className="w-full md:w-[450px] flex flex-col gap-8 md:gap-12 shrink-0 md:pt-4">
        <p className="text-lg md:text-2xl font-medium text-brand-raisin leading-snug">
          Every design decisions comes after understanding the Brand DNA, the products, audiences, and the impacts.
        </p>

        <div className="flex items-center justify-between pt-8 border-t-2 border-brand-raisin/10 mt-8">
          <span className="text-sm font-bold text-brand-raisin/80">Available for new projects</span>
          <Link href="#contact" className="text-sm font-bold text-brand-raisin flex items-center gap-2 hover:text-brand-primary transition-colors">
            Start a project <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
