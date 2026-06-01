'use client';
import { useState } from 'react';

const offerings = [
  {
    id: 'startups',
    title: 'For Startups',
    text: 'Need to build from zero to one? We help startups craft their first impression and build scalable design systems.',
    cta: 'Let\'s build!',
    highlight: 'Build fast, scale later'
  },
  {
    id: 'agency',
    title: 'For Agency',
    text: 'Your agency need a sidekick? We here to slot in and ride along with your team.',
    cta: 'Reach Out!',
    highlight: 'Up to 50%\nfor each add-ons'
  },
  {
    id: 'brands',
    title: 'For Brands',
    text: 'Rebranding or launching a new product? We revitalize brands to connect with modern audiences.',
    cta: 'Let\'s collaborate!',
    highlight: 'Elevate your brand'
  }
];

export default function SegmentedOfferings() {
  const [activeIndex, setActiveIndex] = useState(1);
  const active = offerings[activeIndex];

  const handlePrev = () => setActiveIndex((prev) => (prev > 0 ? prev - 1 : offerings.length - 1));
  const handleNext = () => setActiveIndex((prev) => (prev < offerings.length - 1 ? prev + 1 : 0));

  return (
    <section className="w-full px-6 md:px-12 py-16 md:py-32 bg-white flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
      <div className="flex items-center justify-between w-full lg:w-[45%] shrink-0">
        <button onClick={handlePrev} className="text-2xl md:text-3xl font-bold text-brand-raisin hover:text-brand-primary transition-colors p-2">&lt;</button>
        <h2 className="text-3xl md:text-5xl font-bold text-brand-raisin text-center flex-1">{active.title}</h2>
        <button onClick={handleNext} className="text-2xl md:text-3xl font-bold text-brand-raisin hover:text-brand-primary transition-colors p-2">&gt;</button>
      </div>

      <div className="flex-1 flex flex-col sm:flex-row items-stretch gap-8 md:gap-12 w-full">
        <div className="flex-[3] flex flex-col items-start justify-center">
          <p className="text-2xl font-bold text-brand-raisin mb-10 leading-snug">
            {active.text}
          </p>
          <button className="px-8 py-3 bg-black text-white rounded-full font-bold hover:bg-brand-primary transition-colors">
            {active.cta}
          </button>
        </div>

        <div className="flex-[2] min-h-[200px] bg-[#E2E2E2] rounded-none p-8 flex items-center justify-start shrink-0">
          <p className="text-2xl font-medium text-brand-raisin whitespace-pre-line text-left leading-tight">
            {active.highlight}
          </p>
        </div>
      </div>
    </section>
  );
}
