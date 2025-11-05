'use client';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  offset?: number;
  direction?: 'up' | 'down';
}

export function ParallaxSection({ 
  children, 
  speed = 0.5, 
  className = '',
  offset = 0,
  direction = 'up'
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const multiplier = direction === 'up' ? -1 : 1;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [offset, multiplier * speed * 100 + offset]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxLayer({ children, speed = 0.3, className = '' }: ParallaxLayerProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, speed * 1000]);

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

interface ParallaxBackgroundProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxBackground({ 
  children, 
  speed = 0.2, 
  className = '' 
}: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 500]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        {children}
      </motion.div>
    </div>
  );
}

interface FadeInScrollProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FadeInScroll({ children, delay = 0, className = '' }: FadeInScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ScaleOnScrollProps {
  children: ReactNode;
  className?: string;
  scaleRange?: [number, number];
}

export function ScaleOnScroll({ 
  children, 
  className = '',
  scaleRange = [0.8, 1]
}: ScaleOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], scaleRange);

  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
