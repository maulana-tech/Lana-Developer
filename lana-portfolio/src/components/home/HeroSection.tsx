'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRef, useEffect, useState, memo } from 'react';

// Lazy load framer-motion for non-critical animations
import dynamic from 'next/dynamic';

// Lazy load icons (tree-shaken)
const IconEye = dynamic(() => import('@tabler/icons-react').then(mod => ({ default: mod.IconEye })));
const IconDownload = dynamic(() => import('@tabler/icons-react').then(mod => ({ default: mod.IconDownload })));
const IconMail = dynamic(() => import('@tabler/icons-react').then(mod => ({ default: mod.IconMail })));
const IconArrowRight = dynamic(() => import('@tabler/icons-react').then(mod => ({ default: mod.IconArrowRight })));
const IconCode = dynamic(() => import('@tabler/icons-react').then(mod => ({ default: mod.IconCode })));
const IconPalette = dynamic(() => import('@tabler/icons-react').then(mod => ({ default: mod.IconPalette })));
const IconDeviceMobile = dynamic(() => import('@tabler/icons-react').then(mod => ({ default: mod.IconDeviceMobile })));
const IconSparkles = dynamic(() => import('@tabler/icons-react').then(mod => ({ default: mod.IconSparkles })));

// Animated Counter Component - Memoized
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

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          const startTime = Date.now();
          const timer = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOutCubic * end));
            
            if (progress >= 1) {
              clearInterval(timer);
              setCount(end);
            }
          }, 16);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, [hasAnimated, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
});

// Floating Element Component - CSS-based animation
const FloatingElement = memo(function FloatingElement({ 
  children, 
  delay = 0 
}: { 
  children: React.ReactNode; 
  delay?: number 
}) {
  return (
    <div
      className="animate-fade-in-up"
      style={{
        animationDelay: `${delay}s`,
        opacity: 0,
        animationFillMode: 'forwards'
      }}
    >
      {children}
    </div>
  );
});

export const HeroSection = memo(function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Static Background Elements - No scroll parallax for better performance */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full border border-foreground/20" />
        <div className="absolute top-40 right-32 w-32 h-32 rounded-full border border-foreground/10" />
        <div className="absolute bottom-20 left-1/3 w-48 h-48 rounded-full border border-foreground/15" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="animate-fade-in-up" style={{ animationDelay: '0s' }}>
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
              </div>
              
              {/* Stats */}
              <div
                className="grid grid-cols-3 gap-8 py-8 animate-fade-in-up"
                style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}
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
              </div>
              
              {/* CTA Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
                style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}
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
              </div>
            </div>
            
            {/* Right Content - Profile & Floating Elements */}
            <div className="lg:col-span-5 relative">
              <div
                className="relative z-10 animate-fade-in-up"
                style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}
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
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in"
        style={{ animationDelay: '1s', opacity: 0, animationFillMode: 'forwards' }}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm">Scroll to explore</span>
          <div className="animate-bounce">
            <div className="w-px h-8 bg-muted-foreground/50" />
          </div>
        </div>
      </div>
    </section>
  );
});
