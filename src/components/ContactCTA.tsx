export default function ContactCTA() {
  return (
    <section id="contact" className="w-full px-12 py-32 bg-white flex flex-col lg:flex-row gap-16">
      <div className="w-[300px] shrink-0">
        <h2 className="text-5xl md:text-6xl font-bold text-brand-raisin leading-[1.1] tracking-tight">
          Let&apos;s work<br/>with us
        </h2>
      </div>
      
      <div className="flex-1 flex flex-col md:flex-row gap-8">
        {/* Card 1 */}
        <div className="flex-1 bg-[#E2E2E2] rounded-none p-12 flex flex-col">
          <h3 className="text-2xl font-bold text-brand-raisin mb-4">Book a free call</h3>
          <p className="text-sm font-medium text-brand-raisin/60 mb-12 max-w-[350px] leading-relaxed">
            A session that you can have a free consultation with us to know what your brand truly needs before you decide to work with us.
          </p>
          
          <div className="flex flex-col gap-8 flex-1">
            <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b-2 border-brand-raisin/20 pb-3 outline-none font-bold text-brand-raisin placeholder:text-brand-raisin focus:border-brand-raisin transition-colors" />
            <input type="email" placeholder="Email" className="w-full bg-transparent border-b-2 border-brand-raisin/20 pb-3 outline-none font-bold text-brand-raisin placeholder:text-brand-raisin focus:border-brand-raisin transition-colors" />
            <input type="text" placeholder="Dates" className="w-full bg-transparent border-b-2 border-brand-raisin/20 pb-3 outline-none font-bold text-brand-raisin placeholder:text-brand-raisin focus:border-brand-raisin transition-colors" />
            <input type="text" placeholder="Time" className="w-full bg-transparent border-b-2 border-brand-raisin/20 pb-3 outline-none font-bold text-brand-raisin placeholder:text-brand-raisin focus:border-brand-raisin transition-colors" />
          </div>
          
          <div className="mt-16">
            <button className="px-8 py-3 bg-black text-white rounded-full font-bold hover:bg-brand-primary transition-colors">
              Book a call
            </button>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="flex-1 bg-[#E2E2E2] rounded-none p-12 flex flex-col">
          <h3 className="text-2xl font-bold text-brand-raisin mb-16">Let&apos;s Start the Work</h3>
          
          <div className="flex flex-col gap-8 flex-1">
            <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b-2 border-brand-raisin/20 pb-3 outline-none font-bold text-brand-raisin placeholder:text-brand-raisin focus:border-brand-raisin transition-colors" />
            <input type="email" placeholder="Email" className="w-full bg-transparent border-b-2 border-brand-raisin/20 pb-3 outline-none font-bold text-brand-raisin placeholder:text-brand-raisin focus:border-brand-raisin transition-colors" />
            <input type="text" placeholder="Company name (Optional)" className="w-full bg-transparent border-b-2 border-brand-raisin/20 pb-3 outline-none font-bold text-brand-raisin placeholder:text-brand-raisin focus:border-brand-raisin transition-colors" />
          </div>
          
          <div className="mt-16 flex items-center justify-between">
            <button className="px-8 py-3 bg-black text-white rounded-full font-bold hover:bg-brand-primary transition-colors">
              Next steps
            </button>
            <span className="font-bold text-brand-raisin text-sm">1/2</span>
          </div>
        </div>
      </div>
    </section>
  );
}
