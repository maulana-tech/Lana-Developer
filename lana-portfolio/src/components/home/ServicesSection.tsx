'use client';

import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { 
  IconCode,
  IconPalette,
  IconDeviceMobile,
  IconChartBar,
  IconBrain,
  IconCalculator,
  IconArrowRight,
  IconSparkles
} from '@tabler/icons-react';
import { memo } from 'react';

export const ServicesSection = memo(function ServicesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
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
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="md:col-span-2 lg:col-span-3 group"
          >
            <Card className="h-full bg-gradient-to-br from-muted/30 via-background to-muted/10 border-2 hover:border-foreground/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 gpu-accelerated">
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
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="md:col-span-2 lg:col-span-2 group"
          >
            <Card className="h-full bg-gradient-to-br from-muted/20 via-background to-muted/5 border-2 hover:border-foreground/15 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 gpu-accelerated">
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
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
            className="md:col-span-2 lg:col-span-1 group"
          >
            <Card className="h-full bg-gradient-to-br from-muted/15 via-background to-muted/3 border-2 hover:border-foreground/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 gpu-accelerated">
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
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true, margin: "-50px" }}
            className="md:col-span-2 lg:col-span-1 group"
          >
            <Card className="h-full bg-gradient-to-br from-muted/15 via-background to-muted/3 border-2 hover:border-foreground/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 gpu-accelerated">
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
            transition={{ duration: 0.4, delay: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
            className="md:col-span-2 lg:col-span-2 group"
          >
            <Card className="h-full bg-gradient-to-br from-muted/20 via-background to-muted/5 border-2 hover:border-foreground/15 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 gpu-accelerated">
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
            transition={{ duration: 0.4, delay: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="md:col-span-2 lg:col-span-3 group"
          >
            <Card className="h-full bg-gradient-to-br from-muted/30 via-background to-muted/10 border-2 hover:border-foreground/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 gpu-accelerated">
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
  );
});
