'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ProjectsGrid } from '@/components/ProjectsGrid';
import { IconEye, IconMail, IconArrowRight } from '@tabler/icons-react';
import { memo } from 'react';
import type { Project } from '@/types/project';

interface FeaturedProjectsSectionProps {
  projects: Project[];
}

export const FeaturedProjectsSection = memo(function FeaturedProjectsSection({ 
  projects 
}: FeaturedProjectsSectionProps) {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 border border-foreground/20 rounded-full" />
        <div className="absolute bottom-20 left-10 w-48 h-48 border border-foreground/10 rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 border border-foreground/5 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
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
            transition={{ duration: 0.6, delay: 0.3 }}
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
            transition={{ duration: 0.6, delay: 0.4 }}
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
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 mt-12 mb-4"
          >
            <div className="text-center group">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">
                {projects.length}+
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
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          {/* Grid Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent rounded-3xl" />
          
          <div className="max-w-7xl mx-auto relative">
            <div className="p-8 rounded-3xl border border-border/50 bg-gradient-to-br from-background/80 via-background/60 to-background/80 backdrop-blur-sm shadow-2xl">
              <ProjectsGrid projects={projects} />
            </div>
          </div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-muted/30 via-muted/10 to-muted/30 rounded-3xl p-12 border border-border/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
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
  );
});
