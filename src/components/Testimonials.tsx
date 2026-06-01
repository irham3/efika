const testimonials = [
  { id: '01', client: 'Nama Client', project: 'Jenis Project', text: 'Testimoni' },
  { id: '02', client: 'Nama Client', project: 'Jenis Project', text: 'Testimoni' },
  { id: '03', client: 'Nama Client', project: 'Jenis Project', text: 'Testimoni' },
];

export default function Testimonials() {
  return (
    <section className="w-full px-6 md:px-12 py-16 md:py-32 bg-white">
      <h2 className="text-3xl md:text-[3.5rem] font-bold text-brand-raisin mb-16 md:mb-32 max-w-[500px] leading-[1.1] tracking-tight">
        What clients said about the experience
      </h2>
      
      <div className="w-full flex flex-col">
        {testimonials.map((t) => (
          <div key={t.id} className="flex flex-col md:flex-row py-8 md:py-12 border-b-2 border-brand-raisin/20 first:border-t-2 gap-4 md:gap-0">
            <div className="w-full md:w-24 shrink-0 font-bold text-brand-raisin text-lg">{t.id}</div>
            <div className="flex-1 font-bold text-brand-raisin text-xl md:text-2xl">{t.client}</div>
            <div className="flex-1 font-bold text-brand-raisin text-xl md:text-2xl">{t.project}</div>
            <div className="flex-[2] font-bold text-brand-raisin text-lg md:text-2xl mt-4 md:mt-0">{t.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
