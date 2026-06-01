'use client';
import React, { useEffect, useRef } from 'react';
import { useInView, motion, useAnimation } from 'motion/react';

interface CounterProps {
  end: number;
  label: string;
  duration?: number;
}

const Counter = ({ end, label, duration = 2 }: CounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);
        
        if (progress < 1) {
          setCount(Math.floor(end * progress));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      
      requestAnimationFrame(animate);
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isInView, end, duration, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {count}+
      </div>
      <div className="text-muted-foreground">{label}</div>
    </motion.div>
  );
};

export default Counter;