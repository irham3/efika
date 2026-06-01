import Link from 'next/link';

export default function Hero() {
  return (
    <section className="w-full px-6 md:px-12 pt-48 md:pt-60 pb-16 md:pb-24 flex flex-col md:flex-row gap-10 md:gap-16 justify-between items-start">
      <div className="flex-1">
        <h1
          className="text-4xl md:text-5xl lg:text-[4rem] font-medium text-brand-raisin tracking-[-0.01em] max-w-[800px]"
          style={{ lineHeight: 1.35 }}
        >
          Design and Branding studio helping startup, agency, and brands to grow.
        </h1>
      </div>

      <div className="w-full md:w-[450px] lg:w-[460px] xl:w-[500px] flex flex-col gap-8 md:gap-12 shrink-0 md:pt-8 justify-center">
        <p className="text-lg md:text-2xl font-semibold text-brand-raisin leading-snug">
          Every design decisions comes after understanding the Brand DNA, the products, audiences, and the impacts.
        </p>

        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-brand-raisin/80">Available for new projects</span>
          <Link href="#contact" className="text-sm font-bold text-brand-raisin flex items-center gap-2 hover:text-brand-primary transition-colors underline">
            Start a project <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
