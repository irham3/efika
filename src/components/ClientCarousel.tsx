export default function ClientCarousel() {
  const logos = Array(8).fill(0);

  return (
    <section className="w-full py-16 bg-white overflow-hidden flex flex-col gap-8">
      <div className="w-full relative flex items-center overflow-hidden">
        <div className="animate-marquee flex gap-8 items-center whitespace-nowrap min-w-full">
          {logos.map((_, i) => (
            <div key={`logo-a-${i}`} className="w-64 h-32 bg-[#E2E2E2] shrink-0 mx-2"></div>
          ))}
          {logos.map((_, i) => (
            <div key={`logo-b-${i}`} className="w-64 h-32 bg-[#E2E2E2] shrink-0 mx-2"></div>
          ))}
        </div>
      </div>
    </section>
  );
}
