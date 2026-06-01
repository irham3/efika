'use client';

import { motion } from 'motion/react';

const testimonials = [
  {
    id: '01',
    client: 'Nova Tech',
    project: 'Fintech Rebranding',
    text: '“Efika transformed our scattered identity into a cohesive, powerful brand. Their design system is flawlessly executed.”'
  },
  {
    id: '02',
    client: 'Studio Architecture',
    project: 'Digital Experience',
    text: '“A rare combination of strategic thinking and pixel-perfect aesthetics. Our new website increased user engagement by 150%.”'
  },
  {
    id: '03',
    client: 'Oasis Health',
    project: 'App Interface Design',
    text: '“Working with Efika felt like an extension of our own team. They captured our vision beautifully and delivered beyond expectations.”'
  },
];

export default function Testimonials() {
  return (
    <section className="w-full px-6 md:px-12 py-16 md:py-32">
      <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-brand-raisin mb-16 md:mb-32 max-w-[700px] leading-[1.1] tracking-tight">
        What clients said about the experience
      </h2>

      <div className="w-full flex flex-col border-t-2 border-brand-raisin">
        {testimonials.map((t) => (
          <motion.div
            key={t.id}
            initial="initial"
            whileHover="hover"
            className="flex flex-col md:flex-row py-8 md:py-12 border-b-2 border-brand-raisin gap-4 md:gap-8 lg:gap-12 group cursor-pointer"
          >
            <motion.div
              variants={{
                initial: { color: '#202020' }, // brand-raisin
                hover: { color: '#FF4632' } // brand-primary
              }}
              className="w-full md:w-24 shrink-0 font-bold text-lg md:text-xl"
            >
              {t.id}
            </motion.div>

            <div className="flex-1 flex flex-col sm:flex-row gap-2 sm:gap-8 lg:gap-12">
              <motion.div
                variants={{
                  initial: { color: '#202020' },
                  hover: { color: '#FF4632' }
                }}
                className="flex-1 font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight"
              >
                {t.client}
              </motion.div>

              <motion.div
                variants={{
                  initial: { color: '#202020', opacity: 0.6 },
                  hover: { color: '#FF4632', opacity: 1 }
                }}
                className="flex-1 font-medium text-lg md:text-xl lg:text-2xl mt-1 sm:mt-0"
              >
                {t.project}
              </motion.div>
            </div>

            <motion.div
              variants={{
                initial: { color: '#202020', x: 0 },
                hover: { color: '#FF4632', x: 15 }
              }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex-[2] font-medium text-lg md:text-2xl lg:text-[1.75rem] leading-snug mt-6 md:mt-0 italic pr-4 md:pr-12"
            >
              {t.text}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
