import Image from 'next/image';

const logos = [
  { name: "Telkom University", filename: "logo-01.svg" },
  { name: "CoE Smart MSME", filename: "logo-02.svg" },
  { name: "Smart it", filename: "logo-03.svg" },
  { name: "Balarama", filename: "logo-04.svg" },
  { name: "Media Pelajar", filename: "logo-05.svg" },
  { name: "Bangun PC", filename: "logo-06.svg" },
  { name: "Aafia", filename: "logo-07.svg" },
  { name: "Pesantren Berdaya", filename: "logo-08.svg" },
  { name: "Safea", filename: "logo-09.svg" },
];

export default function ClientCarousel() {
  return (
    <section className="w-full py-16 bg-white overflow-hidden flex flex-col gap-8">
      <div className="w-full relative flex items-center overflow-hidden">
        <div className="animate-marquee flex gap-16 items-center whitespace-nowrap min-w-full">
          {logos.map((logo, i) => (
            <div key={`logo-a-${i}`} className="w-48 h-24 flex items-center justify-center shrink-0 mx-4">
              <Image src={`/company-logo/${logo.filename}`} alt={logo.name} width={192} height={96} className="w-full h-full object-contain filter grayscale opacity-60 hover:filter-none hover:opacity-100 transition-all duration-300" />
            </div>
          ))}
          {logos.map((logo, i) => (
            <div key={`logo-b-${i}`} className="w-48 h-24 flex items-center justify-center shrink-0 mx-4">
              <Image src={`/company-logo/${logo.filename}`} alt={logo.name} width={192} height={96} className="w-full h-full object-contain filter grayscale opacity-60 hover:filter-none hover:opacity-100 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
