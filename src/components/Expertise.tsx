export default function Expertise() {
  return (
    <section className="w-full px-12 py-32 bg-white flex flex-col md:flex-row gap-16">
      <div className="w-48 shrink-0">
        <h3 className="text-base font-bold text-brand-raisin sticky top-8">Expertise</h3>
      </div>
      
      <div className="flex-1 flex flex-col">
        <div className="flex flex-col lg:flex-row gap-12 mb-24">
          <h2 className="flex-1 text-5xl md:text-6xl font-bold text-brand-raisin leading-[1.1] tracking-tight">
            Our Disciplines<br/>That Bring Idea<br/>Become Impact
          </h2>
          <div className="flex-1 pt-2 lg:pl-16">
            <p className="text-base font-bold text-brand-raisin leading-relaxed mb-6">
              We work across multiple disciplines to shaping how brand&apos;s are structured, designed, and built.
            </p>
            <p className="text-base font-bold text-brand-raisin leading-relaxed">
              Each discipline represents its own function, contributing to a larger interconnected ecosystem.
            </p>
          </div>
        </div>
        
        <div className="w-full flex flex-col gap-0">
          {/* 01 */}
          <div className="flex w-full h-[220px]">
            <div className="flex-[4] bg-[#939393] p-12 flex flex-col justify-center">
              <h3 className="text-4xl md:text-5xl font-medium text-white mb-4 opacity-90 tracking-tight">01. Creative Direction</h3>
              <p className="text-2xl font-medium text-white ml-[4.5rem]">Brand Strategy</p>
            </div>
            <div className="flex-[3] bg-[#606060]"></div>
          </div>
          
          {/* 02 */}
          <div className="flex w-full h-[220px]">
            <div className="flex-[4] bg-[#B0B0B0] p-12 flex flex-col justify-center">
              <h3 className="text-4xl md:text-5xl font-medium text-white mb-4 opacity-90 tracking-tight">02. Branding</h3>
              <p className="text-2xl font-medium text-white ml-[4.5rem]">Identity & Guideline</p>
            </div>
            <div className="flex-[3] bg-[#898989]"></div>
          </div>
          
          {/* 03 */}
          <div className="flex w-full h-[350px]">
            <div className="flex-[4] bg-[#CECECE] p-12 flex flex-col justify-start pt-16">
              <h3 className="text-4xl md:text-5xl font-medium text-white mb-4 opacity-90 tracking-tight">03. Motion Design</h3>
              <p className="text-2xl font-medium text-white ml-[4.5rem]">Storytelling</p>
            </div>
            <div className="flex-[3] bg-[#A1A1A1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
