'use client';

import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const expertises = [
  {
    num: '01',
    title: 'Creative Direction',
    subtitle: 'Brand Strategy',
    colorHex: '#FF4632', // Primary (Coral Red)
  },
  {
    num: '02',
    title: 'Branding',
    subtitle: 'Identity & Guideline',
    colorHex: '#0656F3', // Blue (RYB)
  },
  {
    num: '03',
    title: 'Motion Design',
    subtitle: 'Storytelling',
    colorHex: '#FF8528', // Princeton Orange
  }
];

export default function Expertise() {
  return (
    <section className="w-full px-6 md:px-12 py-16 md:py-32 bg-white flex flex-col lg:flex-row gap-10 lg:gap-16">
      <div className="w-full lg:w-48 shrink-0">
        <h3 className="text-base font-bold text-brand-raisin lg:sticky top-32">Expertise</h3>
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
        
        <div className="w-full flex flex-col gap-0 border-t-2 border-brand-raisin">
          {expertises.map((exp, index) => (
            <motion.div 
              key={index}
              initial="initial"
              whileHover="hover"
              className="flex w-full group cursor-pointer border-b-2 border-brand-raisin overflow-hidden"
            >
              {/* Main content block */}
              <motion.div 
                variants={{
                  initial: { backgroundColor: '#ffffff' },
                  hover: { backgroundColor: exp.colorHex }
                }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="flex-[4] p-6 md:p-10 lg:p-12 flex flex-col justify-center min-h-[160px] md:min-h-[220px]"
              >
                <motion.h3 
                  variants={{
                    initial: { color: '#202020' }, // Raisin Black
                    hover: { color: '#ffffff' }
                  }}
                  className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 tracking-tight flex items-center gap-4 md:gap-6"
                >
                  <motion.span 
                    variants={{
                      initial: { color: '#FF4632' },
                      hover: { color: '#ffffff' }
                    }}
                    className="text-lg md:text-2xl font-bold"
                  >
                    {exp.num}.
                  </motion.span> 
                  {exp.title}
                </motion.h3>
                <motion.p 
                  variants={{
                    initial: { color: '#202020', opacity: 0.6 },
                    hover: { color: '#ffffff', opacity: 0.9 }
                  }}
                  className="text-base md:text-2xl font-medium ml-10 md:ml-[3.5rem]"
                >
                  {exp.subtitle}
                </motion.p>
              </motion.div>

              {/* Side block / Arrow */}
              <motion.div 
                variants={{
                  initial: { backgroundColor: '#ffffff' },
                  hover: { backgroundColor: '#202020' }
                }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="flex-[1] md:flex-[2] flex items-center justify-center relative overflow-hidden border-l-2 border-brand-raisin"
              >
                <motion.div
                  variants={{
                    initial: { scale: 0.5, opacity: 0, x: -30, y: 30 },
                    hover: { scale: 1, opacity: 1, x: 0, y: 0 }
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ArrowUpRight className="w-10 h-10 md:w-20 md:h-20 text-white" strokeWidth={1.5} />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
