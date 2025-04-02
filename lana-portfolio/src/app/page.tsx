'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getFeaturedProjects } from '@/lib/projects';
import { ProjectsGrid } from '@/components/ProjectsGrid';

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <div className="flex flex-col gap-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I'm <span className="text-primary">Lana</span>
                <br />
                Web Developer & Designer
              </h1>
              <p className="text-lg text-muted-foreground">
                I create beautiful, functional, and user-friendly digital experiences
                that help businesses grow and succeed online.
              </p>
              <div className="flex flex-wrap gap-4 mt-2">
                <Button asChild size="lg">
                  <Link href="/portfolio">View My Work</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative aspect-square max-w-md mx-auto"
            >
              {/* Placeholder for profile image - replace with actual image */}
              <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center overflow-hidden border-4 border-background shadow-xl">
                <span className="text-6xl font-bold text-secondary-foreground">L</span>
                {/* Uncomment and use when you have an actual image */}
                {/* <Image 
                  src="/profile.jpg" 
                  alt="Lana's profile picture" 
                  fill 
                  className="object-cover"
                  priority 
                /> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I offer a range of services to help you build and grow your online presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description: "I build responsive, fast, and user-friendly websites using modern technologies.",
                icon: "🖥️",
              },
              {
                title: "UI/UX Design",
                description: "I create beautiful and intuitive user interfaces that provide excellent user experiences.",
                icon: "🎨",
              },
              {
                title: "Mobile Development",
                description: "I develop cross-platform mobile applications that work seamlessly on all devices.",
                icon: "📱",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Check out some of my recent work that I'm proud of.
            </p>
          </div>

          <ProjectsGrid projects={featuredProjects} />

          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-primary-foreground/80 mb-8">
              Have a project in mind? Let's discuss how I can help bring your ideas to life.
            </p>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
