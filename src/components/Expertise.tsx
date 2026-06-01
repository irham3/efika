'use client';

import { useState } from 'react';
import { motion } from 'motion/react';

const disciplines = [
  {
    num: '01',
    title: 'Creative Direction',
    subtitle: 'Brand Strategy',
    bg: 'bg-[#1A1A1A]',
    image: '/expertise/creative_direction.png',
    hoverHeight: 350,
  },
  {
    num: '02',
    title: 'Branding',
    subtitle: 'Identity & Guideline',
    bg: 'bg-[#2A2A2A]',
    image: '/expertise/branding.png',
    hoverHeight: 450,
  },
  {
    num: '03',
    title: 'Motion Design',
    subtitle: 'Storytelling',
    bg: 'bg-[#3A3A3A]',
    image: '/expertise/motion_design.png',
    hoverHeight: 600,
  }
];

export default function Expertise() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section className="w-full flex flex-col bg-white">
      {/* Header Area */}
      <div className="w-full px-6 md:px-12 py-16 md:py-24 flex flex-col lg:flex-row gap-10 lg:gap-16">
        <div className="w-full lg:w-48 shrink-0">
          <h3 className="text-base font-medium text-brand-raisin">Expertise</h3>
        </div>

        <div className="flex-1 flex flex-col xl:flex-row gap-8 lg:gap-12">
          <h2 className="flex-1 text-4xl md:text-5xl lg:text-[4rem] font-semibold text-brand-raisin leading-[1.25] tracking-tight flex flex-col">
            <span>Our Disciplines</span>
            <span>That Bring Idea</span>
            <span className="flex">
              <span className="invisible select-none pointer-events-none" aria-hidden="true">That&nbsp;</span>
              <span>Become Impact</span>
            </span>
          </h2>
          <div className="flex-1 pt-2 xl:pl-16">
            <p className="text-base font-medium text-brand-raisin leading-relaxed">
              We work across multiple disciplines to shape how brands are structured, designed, and built.
              <br /><br />
              Each discipline is its own function — contributing to a larger, interconnected ecosystem.
            </p>
          </div>
        </div>
      </div>

      {/* Stacked Rows Area */}
      <div className="w-full flex flex-col text-white px-6 md:px-12 pb-16 md:pb-32">
        {disciplines.map((item, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <div
              key={item.num}
              onMouseEnter={() => setHoveredIndex(index)}
              onClick={() => setHoveredIndex(index)}
              className={`w-full ${item.bg} flex flex-col md:flex-row cursor-pointer`}
            >
              {/* Left Column: Text */}
              <div className="flex-[5] p-8 md:p-12 lg:p-20 flex flex-col justify-start">
                <h3 className="text-3xl md:text-5xl lg:text-[4rem] font-semibold mb-2 md:mb-4 tracking-tight flex items-baseline gap-3 md:gap-6">
                  <span className="text-2xl md:text-4xl opacity-50">{item.num}.</span>
                  {item.title}
                </h3>
                <p className="text-xl md:text-2xl font-medium opacity-80 md:ml-[5.5rem]">{item.subtitle}</p>
              </div>

              {/* Right Column: Media */}
              <div className="flex-[4] p-8 md:p-12 lg:p-20 md:pl-0 pt-0 md:pt-12 lg:pt-20">
                <motion.div
                  animate={{ height: isHovered ? item.hoverHeight : 100 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full relative bg-black/20 overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${isHovered ? 'mix-blend-normal opacity-100' : 'mix-blend-luminosity opacity-80'}`}
                  />
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
