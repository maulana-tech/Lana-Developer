'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { getFeaturedProjectsSync } from '@/lib/projects';
import { ProjectsGrid } from '@/components/ProjectsGrid';
import { 
  IconBrandGithub, 
  IconExternalLink, 
  IconCertificate,
  IconCode,
  IconPalette,
  IconDeviceMobile,
  IconRocket,
  IconMail,
  IconDownload,
  IconEye,
  IconStar,
  IconSparkles,
  IconArrowRight,
  IconMapPin,
  IconClock,
  IconTrendingUp,
  IconHeart,
  IconBrain,
  IconCalculator,
  IconChartBar
} from '@tabler/icons-react';
import { getAllCertificatesSync } from '@/lib/certificates';
import { GitHubActivity } from '@/components/GitHubActivity';
import { TechStack } from '@/components/TechStack';
import { useRef, useEffect, useState } from 'react';

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
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
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// Floating Element Component
function FloatingElement({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.8, 
          delay,
          type: "spring",
          stiffness: 100
        }
      }}
      whileInView={{
        y: [0, -10, 0],
        transition: {
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

// Modern Card Component
function ModernCard({ 
  children, 
  className = '', 
  delay = 0,
  hoverEffect = true 
}: { 
  children: React.ReactNode; 
  className?: string; 
  delay?: number;
  hoverEffect?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={hoverEffect ? { y: -5, scale: 1.02 } : {}}
      className="group"
    >
      <Card className={`h-full transition-all duration-300 hover:shadow-lg ${className}`}>
        {children}
      </Card>
    </motion.div>
  );
}

export default function Home() {
  const featuredProjects = getFeaturedProjectsSync();
  const certificates = getAllCertificatesSync();

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          style={{ y: y1 }}
        >
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full border border-foreground/20" />
          <div className="absolute top-40 right-32 w-32 h-32 rounded-full border border-foreground/10" />
          <div className="absolute bottom-20 left-1/3 w-48 h-48 rounded-full border border-foreground/15" />
        </motion.div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border bg-muted/50 text-muted-foreground">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                  
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                    <span className="block">Hi, I'm</span>
                    <span className="block bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                      Lana
                    </span>
                    <span className="block text-4xl md:text-5xl lg:text-6xl text-muted-foreground font-medium mt-2">
                      Creative Developer
                    </span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                    I craft exceptional digital experiences that blend stunning design 
                    with powerful functionality, turning your vision into reality.
                  </p>
                </motion.div>
                
                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="grid grid-cols-3 gap-8 py-8"
                >
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold mb-1">
                      <AnimatedCounter end={50} suffix="+" />
                    </div>
                    <p className="text-sm text-muted-foreground">Projects</p>
                  </div>
                  <div className="text-center border-x border-border px-4">
                    <div className="text-3xl md:text-4xl font-bold mb-1">
                      <AnimatedCounter end={5} suffix="+" />
                    </div>
                    <p className="text-sm text-muted-foreground">Years Exp.</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold mb-1">
                      <AnimatedCounter end={98} suffix="%" />
                    </div>
                    <p className="text-sm text-muted-foreground">Satisfaction</p>
                  </div>
                </motion.div>
                
                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
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
                  transition={{ duration: 1, delay: 0.3 }}
                  className="relative z-10"
                >
                  {/* Main Avatar */}
                  <div className="relative w-80 h-80 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-foreground/5 rounded-full" />
                    <div className="absolute inset-4 bg-gradient-to-br from-foreground to-muted-foreground rounded-full flex items-center justify-center text-background text-6xl font-bold">
                      L
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-green-500 rounded-full border-4 border-background flex items-center justify-center">
                      <IconSparkles className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <FloatingElement delay={0.8}>
                    <div className="absolute -top-6 -right-6">
                      <div className="w-20 h-20 bg-card border rounded-2xl flex items-center justify-center shadow-lg">
                        <IconCode className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                  </FloatingElement>
                  
                  <FloatingElement delay={1.2}>
                    <div className="absolute -bottom-6 -left-6">
                      <div className="w-20 h-20 bg-card border rounded-2xl flex items-center justify-center shadow-lg">
                        <IconPalette className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                  </FloatingElement>
                  
                  <FloatingElement delay={1.6}>
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
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <div className="w-px h-8 bg-muted-foreground/50" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border bg-background text-muted-foreground">
              <IconSparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              What I <span className="text-primary">Do</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I specialize in creating digital experiences that not only look amazing 
              but also deliver exceptional performance and user satisfaction.
            </p>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
            {/* Web Development - Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="md:col-span-2 lg:col-span-3 group"
            >
              <Card className="h-full bg-gradient-to-br from-muted/30 via-background to-muted/10 border-2 hover:border-foreground/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="w-20 h-20 rounded-3xl bg-foreground flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <IconCode className="w-10 h-10 text-background" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-foreground transition-colors">
                    Web Development
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                    Building responsive, performant websites using cutting-edge technologies like React, Next.js, and modern frameworks.
                  </p>
                  <div className="flex items-center text-foreground font-medium group-hover:translate-x-2 transition-transform">
                    Learn more
                    <IconArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* UI/UX Design - Medium Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:col-span-2 lg:col-span-2 group"
            >
              <Card className="h-full bg-gradient-to-br from-muted/20 via-background to-muted/5 border-2 hover:border-foreground/15 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-2xl bg-muted-foreground flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <IconPalette className="w-8 h-8 text-background" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-foreground transition-colors">
                    UI/UX Design
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Crafting intuitive interfaces and seamless user experiences.
                  </p>
                  <div className="flex items-center text-muted-foreground font-medium group-hover:translate-x-2 transition-transform">
                    Learn more
                    <IconArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Mobile Development - Small Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="md:col-span-2 lg:col-span-1 group"
            >
              <Card className="h-full bg-gradient-to-br from-muted/15 via-background to-muted/3 border-2 hover:border-foreground/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-border flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <IconDeviceMobile className="w-8 h-8 text-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-foreground transition-colors">
                    Mobile Dev
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Cross-platform mobile applications.
                  </p>
                  <div className="flex items-center justify-center text-muted-foreground font-medium text-sm group-hover:translate-x-1 transition-transform">
                    <IconArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Analytics & Data - Small Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="md:col-span-2 lg:col-span-1 group"
            >
              <Card className="h-full bg-gradient-to-br from-muted/15 via-background to-muted/3 border-2 hover:border-foreground/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-border flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <IconChartBar className="w-8 h-8 text-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-foreground transition-colors">
                    Analytics
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Data visualization and insights.
                  </p>
                  <div className="flex items-center justify-center text-muted-foreground font-medium text-sm group-hover:translate-x-1 transition-transform">
                    <IconArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* AI/ML - Medium Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="md:col-span-2 lg:col-span-2 group"
            >
              <Card className="h-full bg-gradient-to-br from-muted/20 via-background to-muted/5 border-2 hover:border-foreground/15 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-2xl bg-muted-foreground flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <IconBrain className="w-8 h-8 text-background" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-foreground transition-colors">
                    AI & Machine Learning
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Implementing intelligent solutions with AI/ML models and data analytics.
                  </p>
                  <div className="flex items-center text-muted-foreground font-medium group-hover:translate-x-2 transition-transform">
                    Learn more
                    <IconArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Accounting - Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="md:col-span-2 lg:col-span-3 group"
            >
              <Card className="h-full bg-gradient-to-br from-muted/30 via-background to-muted/10 border-2 hover:border-foreground/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="w-20 h-20 rounded-3xl bg-foreground flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <IconCalculator className="w-10 h-10 text-background" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-foreground transition-colors">
                    Financial & Accounting Systems
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                    Developing comprehensive accounting software, financial management systems, and business intelligence dashboards.
                  </p>
                  <div className="flex items-center text-foreground font-medium group-hover:translate-x-2 transition-transform">
                    Learn more
                    <IconArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-32 h-32 border border-foreground/20 rounded-full" />
          <div className="absolute bottom-20 left-10 w-48 h-48 border border-foreground/10 rounded-full" />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 border border-foreground/5 rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full border-2 bg-gradient-to-r from-muted/50 via-background to-muted/30 text-muted-foreground hover:border-foreground/20 transition-all duration-300 shadow-lg backdrop-blur-sm"
            >
              <div className="relative">
                <IconEye className="w-5 h-5" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-md animate-pulse" />
              </div>
              <span className="text-sm font-semibold tracking-wide">FEATURED PORTFOLIO</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative"
            >
              <span className="block mb-2">Showcase of</span>
              <span className="block bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                Excellence
              </span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8"
            >
              Explore a curated collection of my most impactful projects, each demonstrating 
              cutting-edge technologies, innovative problem-solving, and exceptional user experiences 
              that drive real business results.
            </motion.p>
            
            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-8 mt-12 mb-4"
            >
              <div className="text-center group">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">
                  {featuredProjects.length}+
                </div>
                <div className="text-sm text-muted-foreground font-medium">Featured Projects</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">
                  15+
                </div>
                <div className="text-sm text-muted-foreground font-medium">Technologies Used</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">
                  100%
                </div>
                <div className="text-sm text-muted-foreground font-medium">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Projects Grid Container */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Grid Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent rounded-3xl" />
            
            <div className="max-w-7xl mx-auto relative">
              <div className="p-8 rounded-3xl border border-border/50 bg-gradient-to-br from-background/80 via-background/60 to-background/80 backdrop-blur-sm shadow-2xl">
                <ProjectsGrid projects={featuredProjects} />
              </div>
            </div>
          </motion.div>

          {/* Enhanced CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="bg-gradient-to-r from-muted/30 via-muted/10 to-muted/30 rounded-3xl p-12 border border-border/50 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to see more of my work?
                </h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                  Explore my complete portfolio to discover more innovative projects, 
                  detailed case studies, and the full spectrum of my technical expertise.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="group relative overflow-hidden">
                    <Link href="/portfolio">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                      <IconEye className="w-5 h-5 mr-2 relative z-10" />
                      <span className="relative z-10">View Complete Portfolio</span>
                      <IconArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 relative z-10" />
                    </Link>
                  </Button>
                  
                  <Button variant="outline" size="lg" asChild className="group">
                    <Link href="/contact">
                      <IconMail className="w-5 h-5 mr-2" />
                      <span>Discuss a Project</span>
                      <IconArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GitHub Activity Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border bg-background text-muted-foreground">
              <IconBrandGithub className="w-4 h-4" />
              <span className="text-sm font-medium">GitHub Stats</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              My <span className="text-primary">Activity</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my coding journey, contributions, 
              and the technologies I work with daily.
            </p>
          </motion.div>
          
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <GitHubActivity />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border bg-muted/50 text-muted-foreground">
              <IconCertificate className="w-4 h-4" />
              <span className="text-sm font-medium">Certifications</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              My <span className="text-primary">Credentials</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Professional certifications that validate my expertise and 
              commitment to continuous learning in the tech industry.
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            <div className="relative overflow-hidden py-4">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex space-x-6 animate-scroll"
              >
                {[...certificates, ...certificates].map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (index % certificates.length) * 0.1 }}
                    viewport={{ once: true }}
                    className="min-w-[320px] md:min-w-[400px]"
                  >
                    <Card className="overflow-hidden h-full group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/10 via-muted to-primary/5">
                        <div className="absolute inset-0 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                          <IconCertificate size={64} className="drop-shadow-lg" />
                        </div>
                      </div>
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{cert.title}</h3>
                          <Badge variant="secondary" className="text-xs">{cert.date}</Badge>
                        </div>
                        <p className="text-primary font-medium mb-4">{cert.issuer}</p>
                        <div className="flex gap-3">
                          <Button variant="outline" size="sm" asChild className="flex-1 group-hover:border-primary transition-colors">
                            <a href={cert.link} target="_blank" rel="noopener noreferrer">
                              <IconExternalLink className="w-4 h-4 mr-2" />
                              View Certificate
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <Button size="lg" asChild className="group">
                <Link href="/about">
                  <IconCertificate className="w-5 h-5 mr-2" />
                  View All Certifications
                  <IconArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border bg-background text-muted-foreground">
              <IconSparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Technologies</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              My <span className="text-primary">Tech Stack</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The powerful technologies and cutting-edge tools I use to 
              craft exceptional digital experiences and innovative solutions.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <TechStack />
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-foreground text-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-background/30 rounded-full" />
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-background/20 rounded-full" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-background/10 rounded-full" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-background/20 bg-background/10 text-background/80">
              <IconRocket className="w-4 h-4" />
              <span className="text-sm font-medium">Ready to Start</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's Create Something
              <br />
              <span className="text-primary">Amazing Together</span>
            </h2>
            
            <p className="text-xl text-background/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Have an exciting project in mind? I'd love to hear about your vision and 
              discuss how we can bring your ideas to life with cutting-edge technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground group"
                asChild
              >
                <Link href="/contact">
                  <IconMail className="w-5 h-5 mr-2" />
                  Get in Touch
                  <IconArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-background/30 text-background hover:bg-background hover:text-foreground group"
                asChild
              >
                <Link href="/portfolio">
                  <IconEye className="w-5 h-5 mr-2" />
                  View Portfolio
                  <IconArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
