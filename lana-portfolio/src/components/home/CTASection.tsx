'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IconRocket, IconMail, IconEye, IconArrowRight } from '@tabler/icons-react';
import { memo } from 'react';

export const CTASection = memo(function CTASection() {
  return (
    <section className="py-20 bg-foreground text-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-background/30 rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-background/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-background/10 rounded-full" />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
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
  );
});
