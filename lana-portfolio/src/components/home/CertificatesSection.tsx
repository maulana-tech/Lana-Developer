'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IconCertificate, IconExternalLink, IconArrowRight } from '@tabler/icons-react';
import { memo } from 'react';
import type { Certificate } from '@/types/certificate';

interface CertificatesSectionProps {
  certificates: Certificate[];
}

export const CertificatesSection = memo(function CertificatesSection({ 
  certificates 
}: CertificatesSectionProps) {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
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
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex space-x-6 animate-scroll"
            >
              {[...certificates, ...certificates].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (index % certificates.length) * 0.1 }}
                  viewport={{ once: true }}
                  className="min-w-[320px] md:min-w-[400px]"
                >
                  <Card className="overflow-hidden h-full group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 gpu-accelerated">
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
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
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
  );
});
