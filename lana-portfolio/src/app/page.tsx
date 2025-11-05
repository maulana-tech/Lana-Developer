'use client';

import { getFeaturedProjectsSync } from '@/lib/projects';
import { getAllCertificatesSync } from '@/lib/certificates';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { ParallaxSection, FadeInScroll } from '@/components/ParallaxSection';

// Hero section loads immediately (above the fold)
import { HeroSection } from '@/components/home/HeroSection';

// Lazy load sections below the fold
const ServicesSection = dynamic(() => import('@/components/home/ServicesSection').then(mod => ({ default: mod.ServicesSection })), {
  loading: () => <div className="py-20 bg-muted/30 animate-pulse min-h-[400px]" />,
});

const FeaturedProjectsSection = dynamic(() => import('@/components/home/FeaturedProjectsSection').then(mod => ({ default: mod.FeaturedProjectsSection })), {
  loading: () => <div className="py-20 bg-background animate-pulse min-h-[600px]" />,
});

const GitHubActivity = dynamic(() => import('@/components/GitHubActivity').then(mod => ({ default: mod.GitHubActivity })), {
  loading: () => <div className="animate-pulse min-h-[400px] bg-card rounded-lg" />,
});

const CertificatesSection = dynamic(() => import('@/components/home/CertificatesSection').then(mod => ({ default: mod.CertificatesSection })), {
  loading: () => <div className="py-20 bg-background animate-pulse min-h-[400px]" />,
});

const TechStack = dynamic(() => import('@/components/TechStack').then(mod => ({ default: mod.TechStack })), {
  loading: () => <div className="animate-pulse min-h-[300px] bg-card rounded-lg" />,
});

const CTASection = dynamic(() => import('@/components/home/CTASection').then(mod => ({ default: mod.CTASection })), {
  loading: () => <div className="py-20 bg-foreground animate-pulse min-h-[300px]" />,
});

export default function Home() {
  const featuredProjects = getFeaturedProjectsSync();
  const certificates = getAllCertificatesSync();

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section - Load immediately */}
      <HeroSection />

      {/* Services Section - Lazy loaded with Parallax */}
      <ParallaxSection speed={0.3}>
        <Suspense fallback={<div className="py-20 bg-muted/30 animate-pulse min-h-[400px]" />}>
          <ServicesSection />
        </Suspense>
      </ParallaxSection>

      {/* Featured Projects Section - Lazy loaded with Parallax */}
      <FadeInScroll>
        <Suspense fallback={<div className="py-20 bg-background animate-pulse min-h-[600px]" />}>
          <FeaturedProjectsSection projects={featuredProjects} />
        </Suspense>
      </FadeInScroll>

      {/* GitHub Activity Section - Lazy loaded with Parallax */}
      <ParallaxSection speed={0.4}>
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <FadeInScroll>
              <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border bg-background text-muted-foreground">
                  <span className="text-sm font-medium">GitHub Stats</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  My <span className="text-primary">Activity</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  A comprehensive overview of my coding journey, contributions, 
                  and the technologies I work with daily.
                </p>
              </div>
            </FadeInScroll>
            
            <div className="max-w-6xl mx-auto">
              <Suspense fallback={<div className="animate-pulse min-h-[400px] bg-card rounded-lg" />}>
                <GitHubActivity />
              </Suspense>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Certificate Section - Lazy loaded with Parallax */}
      <FadeInScroll>
        <Suspense fallback={<div className="py-20 bg-background animate-pulse min-h-[400px]" />}>
          <CertificatesSection certificates={certificates} />
        </Suspense>
      </FadeInScroll>

      {/* Tech Stack Section - Lazy loaded with Parallax */}
      <ParallaxSection speed={0.35}>
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <FadeInScroll>
              <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border bg-background text-muted-foreground">
                  <span className="text-sm font-medium">Technologies</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  My <span className="text-primary">Tech Stack</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  The powerful technologies and cutting-edge tools I use to 
                  craft exceptional digital experiences and innovative solutions.
                </p>
              </div>
            </FadeInScroll>
            
            <div className="max-w-7xl mx-auto">
              <Suspense fallback={<div className="animate-pulse min-h-[300px] bg-card rounded-lg" />}>
                <TechStack />
              </Suspense>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Contact CTA Section - Lazy loaded with Parallax */}
      <FadeInScroll>
        <Suspense fallback={<div className="py-20 bg-foreground animate-pulse min-h-[300px]" />}>
          <CTASection />
        </Suspense>
      </FadeInScroll>
    </div>
  );
}
