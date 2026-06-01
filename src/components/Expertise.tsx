export default function Expertise() {
  return (
    <section className="w-full px-6 md:px-12 py-16 md:py-32 bg-white flex flex-col lg:flex-row gap-10 lg:gap-16">
      <div className="w-full lg:w-48 shrink-0">
        <h3 className="text-base font-bold text-brand-raisin lg:sticky top-8">Expertise</h3>
      </div>
      
      <div className="flex-1 flex flex-col">
        <div className="flex flex-col xl:flex-row gap-8 lg:gap-12 mb-16 lg:mb-24">
          <h2 className="flex-1 text-4xl md:text-5xl lg:text-6xl font-bold text-brand-raisin leading-[1.1] tracking-tight">
            Our Disciplines<br className="hidden md:block"/>That Bring Idea<br className="hidden md:block"/>Become Impact
          </h2>
          <div className="flex-1 pt-2 xl:pl-16">
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
          <div className="flex w-full h-[180px] md:h-[220px]">
            <div className="flex-[4] bg-[#939393] p-6 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-medium text-white mb-2 md:mb-4 opacity-90 tracking-tight">01. Creative Direction</h3>
              <p className="text-lg md:text-2xl font-medium text-white ml-6 md:ml-[4.5rem]">Brand Strategy</p>
            </div>
            <div className="flex-[1] md:flex-[3] bg-[#606060]"></div>
          </div>
          
          {/* 02 */}
          <div className="flex w-full h-[180px] md:h-[220px]">
            <div className="flex-[4] bg-[#B0B0B0] p-6 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-medium text-white mb-2 md:mb-4 opacity-90 tracking-tight">02. Branding</h3>
              <p className="text-lg md:text-2xl font-medium text-white ml-6 md:ml-[4.5rem]">Identity & Guideline</p>
            </div>
            <div className="flex-[1] md:flex-[3] bg-[#898989]"></div>
          </div>
          
          {/* 03 */}
          <div className="flex w-full h-[250px] md:h-[350px]">
            <div className="flex-[4] bg-[#CECECE] p-6 md:p-12 flex flex-col justify-start pt-10 md:pt-16">
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-medium text-white mb-2 md:mb-4 opacity-90 tracking-tight">03. Motion Design</h3>
              <p className="text-lg md:text-2xl font-medium text-white ml-6 md:ml-[4.5rem]">Storytelling</p>
            </div>
            <div className="flex-[1] md:flex-[3] bg-[#A1A1A1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
