'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionRevealProps {
  children: ReactNode;
  delay?: number;
  yOffset?: number;
}

export default function SectionReveal({ children, delay = 0, yOffset = 50 }: SectionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ 
        duration: 0.9, 
        delay: delay, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
