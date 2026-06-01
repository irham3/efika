const testimonials = [
  { id: '01', client: 'Nama Client', project: 'Jenis Project', text: 'Testimoni' },
  { id: '02', client: 'Nama Client', project: 'Jenis Project', text: 'Testimoni' },
  { id: '03', client: 'Nama Client', project: 'Jenis Project', text: 'Testimoni' },
];

export default function Testimonials() {
  return (
    <section className="w-full px-12 py-32 bg-white">
      <h2 className="text-4xl md:text-[3.5rem] font-bold text-brand-raisin mb-32 max-w-[500px] leading-[1.1] tracking-tight">
        What clients said about the experience
      </h2>
      
      <div className="w-full flex flex-col">
        {testimonials.map((t) => (
          <div key={t.id} className="flex py-12 border-b-2 border-brand-raisin/20 first:border-t-2">
            <div className="w-24 shrink-0 font-bold text-brand-raisin text-lg">{t.id}</div>
            <div className="flex-1 font-bold text-brand-raisin text-2xl">{t.client}</div>
            <div className="flex-1 font-bold text-brand-raisin text-2xl">{t.project}</div>
            <div className="flex-[2] font-bold text-brand-raisin text-2xl">{t.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
