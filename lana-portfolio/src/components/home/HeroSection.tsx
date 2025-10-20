'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  IconEye,
  IconDownload,
  IconMail,
  IconArrowRight,
  IconCode,
  IconPalette,
  IconDeviceMobile,
  IconSparkles
} from '@tabler/icons-react';
import { useRef, useEffect, useState, memo } from 'react';

// Animated Counter Component - Memoized & Optimized
const AnimatedCounter = memo(function AnimatedCounter({ 
  end, 
  duration = 2000, 
  suffix = '' 
}: { 
  end: number; 
  duration?: number; 
  suffix?: string 
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          const startTime = performance.now();
          
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOutCubic * end));
            
            if (progress < 1) {
              rafRef.current = requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          
          rafRef.current = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    
    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [hasAnimated, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
});

// Floating Element Component - Optimized
const FloatingElement = memo(function FloatingElement({ 
  children, 
  delay = 0 
}: { 
  children: React.ReactNode; 
  delay?: number 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
      }}
      transition={{ 
        duration: 0.6, 
        delay,
      }}
      viewport={{ once: true, amount: 0.3 }}
      className="gpu-accelerated will-change-transform"
    >
      {children}
    </motion.div>
  );
});

export const HeroSection = memo(function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements - Simplified */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
      >
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full border border-foreground/20" />
        <div className="absolute top-40 right-32 w-32 h-32 rounded-full border border-foreground/10" />
        <div className="absolute bottom-20 left-1/3 w-48 h-48 rounded-full border border-foreground/15" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border bg-muted/50 text-muted-foreground">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Available for work</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                  <span className="block">Hi, I'm</span>
                  <span className="block bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                    Maulana Firdaussyah
                  </span>
                  <span className="block text-4xl md:text-5xl lg:text-6xl text-muted-foreground font-medium mt-2">
                    Fullstack Developer
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                  I craft innovative web applications with React, Next.js, and AI/ML technologies, 
                  building user-focused solutions that drive real business impact.
                </p>
              </motion.div>
              
              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-3 gap-8 py-8"
              >
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-1">
                    <AnimatedCounter end={15} suffix="+" />
                  </div>
                  <p className="text-sm text-muted-foreground">Projects</p>
                </div>
                <div className="text-center border-x border-border px-4">
                  <div className="text-3xl md:text-4xl font-bold mb-1">
                    <AnimatedCounter end={2} suffix="+" />
                  </div>
                  <p className="text-sm text-muted-foreground">Years Exp.</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold mb-1">
                    <AnimatedCounter end={100} suffix="%" />
                  </div>
                  <p className="text-sm text-muted-foreground">Satisfaction</p>
                </div>
              </motion.div>
              
              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button size="lg" asChild className="group">
                  <Link href="/portfolio">
                    <IconEye className="w-5 h-5 mr-2" />
                    View My Work
                    <IconArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="group">
                  <a href="/my-resume.pdf" download="Muhammad-Maulana-Firdaussyah-Resume.pdf">
                    <IconDownload className="w-5 h-5 mr-2" />
                    Download Resume
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="group">
                  <Link href="/contact">
                    <IconMail className="w-5 h-5 mr-2" />
                    Let's Talk
                    <IconArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </div>
            
            {/* Right Content - Profile & Floating Elements */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative z-10"
              >
                {/* Main Avatar */}
                <div className="relative w-80 h-80 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-foreground/5 rounded-full" />
                  <div className="absolute inset-4 bg-gradient-to-br from-foreground to-muted-foreground rounded-full flex items-center justify-center text-background text-6xl font-bold">
                    MF
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-green-500 rounded-full border-4 border-background flex items-center justify-center">
                    <IconSparkles className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Floating Elements */}
                <FloatingElement delay={0.6}>
                  <div className="absolute -top-6 -right-6">
                    <div className="w-20 h-20 bg-card border rounded-2xl flex items-center justify-center shadow-lg">
                      <IconCode className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </FloatingElement>
                
                <FloatingElement delay={0.8}>
                  <div className="absolute -bottom-6 -left-6">
                    <div className="w-20 h-20 bg-card border rounded-2xl flex items-center justify-center shadow-lg">
                      <IconPalette className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </FloatingElement>
                
                <FloatingElement delay={1}>
                  <div className="absolute top-1/2 -left-12 transform -translate-y-1/2">
                    <div className="w-16 h-16 bg-card border rounded-xl flex items-center justify-center shadow-lg">
                      <IconDeviceMobile className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </FloatingElement>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
          >
            <div className="w-px h-8 bg-muted-foreground/50" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
});
