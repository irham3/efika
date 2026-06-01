'use client';

import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    if (latest > 150 && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full flex items-center justify-between py-4 px-6 md:py-6 md:px-12 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-brand-raisin/5 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-1">
        <Link href="/" className="text-2xl md:text-3xl font-bold text-brand-raisin tracking-tight">efika</Link>
        <div className="text-brand-primary font-bold text-2xl md:text-3xl leading-none mt-2">*</div>
      </div>

      <div className="hidden md:flex items-center justify-center gap-8 lg:gap-16 font-medium text-lg">
        <Link href="#service" className="text-brand-raisin hover:text-brand-primary transition-colors">Service</Link>
        <Link href="#works" className="text-brand-raisin hover:text-brand-primary transition-colors">Works</Link>
      </div>

      <div className="flex items-center justify-end gap-6 lg:gap-12">
        <div className="text-sm text-right text-brand-raisin/70 hidden lg:block">
          <p className="font-medium text-brand-raisin">Based in Indonesia | Worldwide [09:00 WIB (UTC+7)]</p>
          <p className="text-brand-raisin/40">Good Brand is by Design</p>
        </div>
        <Link href="#contact" className="px-6 py-2 md:px-8 md:py-3 text-sm md:text-base bg-brand-raisin text-white rounded-full font-medium hover:bg-black transition-colors shrink-0">
          Say Hi!
        </Link>
      </div>
    </motion.nav>
  );
}