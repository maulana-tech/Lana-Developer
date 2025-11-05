'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ParallaxSection, FadeInScroll, ScaleOnScroll } from '@/components/ParallaxSection';
import { 
  IconBrandReact, 
  IconBrandNextjs, 
  IconBrandTailwind, 
  IconBrandFigma, 
  IconBrandJavascript, 
  IconBrandTypescript, 
  IconCertificate,
  IconCode,
  IconPalette,
  IconRocket,
  IconTrophy,
  IconSchool,
  IconBriefcase,
  IconStar,
  IconEye,
  IconDownload,
  IconMapPin,
  IconCalendar,
  IconMail,
  IconSparkles
} from '@tabler/icons-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { getAllCertificatesSync } from '@/lib/certificates';
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

// Bento Grid Item Component
function BentoItem({ 
  children, 
  className = '', 
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string; 
  delay?: number; 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`rounded-2xl border bg-card text-card-foreground shadow-sm ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  const skills = [
    { name: 'React', icon: <IconBrandReact size={24} />, level: 90 },
    { name: 'Next.js', icon: <IconBrandNextjs size={24} />, level: 85 },
    { name: 'JavaScript', icon: <IconBrandJavascript size={24} />, level: 90 },
    { name: 'Tailwind CSS', icon: <IconBrandTailwind size={24} />, level: 95 },
    { name: 'TypeScript', icon: <IconBrandTypescript size={24} />, level: 80 },
    { name: 'Python', icon: <IconBrandJavascript size={24} />, level: 75 },
  ];

  const experiences = [
    {
      title: 'Student Developer',
      company: 'Google Developer Student Club (GDSC)',
      period: 'Nov 2023 - Oct 2025',
      description: 'Developed responsive web applications with React, Next.js, and Tailwind CSS, increasing community engagement for 50+ members. Contributed to DevEdHub, implementing dynamic UI with Shadcn UI, improving accessibility by 20%.',
    },
    {
      title: 'Student Developer',
      company: 'GDG on Campus Widyatama University',
      period: 'Sep 2024 - Oct 2025',
      description: 'Created scalable web components using Next.js and Supabase for user authentication and real-time updates. Mentored peers in coding best practices, boosting team productivity by 15%.',
    },
    {
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      period: 'Jan 2024 - Present',
      description: 'Developed Rehearse AI web app with AI-driven features using React, Next.js, and Tailwind CSS. Built personal finance management app using PHP, SQL, HTML, and JavaScript, improving client efficiency by 30%.',
    },
    {
      title: 'Chairman of HIMASIA',
      company: 'Universitas Teknologi Digital Indonesia',
      period: 'Aug 2023 - Oct 2025',
      description: 'Led a 50+ member student organization, organizing tech workshops and increasing participation by 25%. Coordinated cross-functional teams for community projects, enhancing collaboration skills.',
    },
  ];

  const education = [
    {
      degree: 'D3, Accounting Information Systems',
      institution: 'Universitas Teknologi Digital Indonesia',
      period: 'Aug 2023 - Present',
    },
    {
      degree: 'Associate of Arts and Sciences (AAS), Desain Pemodelan dan Informasi Bangunan',
      institution: 'SMK Muhammadiyah 3 Yogyakarta',
      period: 'Aug 2018 - Jul 2021',
    },
  ];

  const certificates = getAllCertificatesSync();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Gradient */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border bg-muted/50 text-muted-foreground">
                <IconSparkles className="w-4 h-4" />
                <span className="text-sm font-medium">About Lana</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Fullstack Developer
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A dedicated Fullstack Web Developer and Accounting Information Systems student at Universitas Teknologi Digital Indonesia, 
                passionate about building innovative, user-focused web applications and exploring AI/ML technologies.
              </p>
            </motion.div>
            
            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <AnimatedCounter end={2} suffix="+" />
                </div>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <AnimatedCounter end={15} suffix="+" />
                </div>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <AnimatedCounter end={15} suffix="+" />
                </div>
                <p className="text-muted-foreground">Technologies</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <ParallaxSection speed={0.3}>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Main Profile Card */}
              <BentoItem className="md:col-span-8 p-8" delay={0}>
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-foreground to-muted-foreground rounded-3xl flex items-center justify-center text-background text-3xl font-bold">
                      MF
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-4">Hello, I'm Muhammad Maulana Firdaussyah 👋</h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      I'm a dedicated Fullstack Web Developer and Accounting Information Systems student based in Yogyakarta, Indonesia. 
                      I specialize in React, Next.js, JavaScript, Tailwind CSS, and SQL, with over 1.5 years of experience building innovative web applications.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                      <Button asChild size="lg">
                        <Link href="/contact">
                          <IconMail className="w-4 h-4 mr-2" />
                          Contact Me
                        </Link>
                      </Button>
                      <Button variant="outline" size="lg" asChild>
                        <a href="/my-resume.pdf" download="Muhammad-Maulana-Firdaussyah-Resume.pdf">
                          <IconDownload className="w-4 h-4 mr-2" />
                          Download Resume
                        </a>
                      </Button>
                      <Button variant="outline" size="lg" asChild>
                        <Link href="/portfolio">
                          <IconEye className="w-4 h-4 mr-2" />
                          View My Work
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </BentoItem>

              {/* Location Card */}
              <BentoItem className="md:col-span-4 p-6" delay={0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconMapPin className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold mb-2">Based in</h3>
                  <p className="text-muted-foreground">Yogyakarta, Indonesia</p>
                  <p className="text-xs text-muted-foreground mt-1">UTC+7</p>
                </div>
              </BentoItem>

              {/* Experience Card */}
              <BentoItem className="md:col-span-3 p-6" delay={0.2}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconBriefcase className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold mb-2">Experience</h3>
                  <p className="text-2xl font-bold text-primary">2+ Years</p>
                </div>
              </BentoItem>

              {/* Specialty Card */}
              <BentoItem className="md:col-span-5 p-6" delay={0.3}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconCode className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold mb-2">Specialty</h3>
                  <p className="text-muted-foreground">Full-Stack Development & AI/ML</p>
                  <div className="flex flex-wrap gap-2 justify-center mt-3">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">Supabase</Badge>
                  </div>
                </div>
              </BentoItem>

              {/* Availability Card */}
              <BentoItem className="md:col-span-4 p-6" delay={0.4}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconCalendar className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold mb-2">Availability</h3>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <p className="text-muted-foreground">20-30 hours/week</p>
                  </div>
                </div>
              </BentoItem>
              </div>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Skills Section */}
      <FadeInScroll>
        <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border bg-background text-muted-foreground">
                <IconRocket className="w-4 h-4" />
                <span className="text-sm font-medium">Technical Skills</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">My Expertise</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Technologies and tools I use to bring ideas to life
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group"
                >
                  <Card className="h-full border-2 hover:border-primary/20 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                            {skill.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                            <p className="text-sm text-muted-foreground">Proficiency</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{skill.level}%</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Progress value={skill.level} className="h-3" />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Beginner</span>
                          <span>Expert</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            {/* Additional Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <h3 className="text-lg font-semibold mb-4">Additional Technologies</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'Node.js', 'PHP', 'MySQL', 'Supabase', 'Git', 'Framer Motion', 
                  'Shadcn UI', 'HTML', 'CSS', 'SQL', 'Python', 'AI/ML'
                ].map((tech, index) => (
                  <Badge key={index} variant="outline" className="px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        </section>
      </FadeInScroll>

      {/* Experience Section */}
      <ParallaxSection speed={0.35}>
        <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border bg-muted/50 text-muted-foreground">
                <IconBriefcase className="w-4 h-4" />
                <span className="text-sm font-medium">Career Journey</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                My professional journey in web development and design
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:transform md:-translate-x-0.5" />
              
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-8`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform md:-translate-x-2 z-10" />
                    
                    {/* Content */}
                    <div className={`w-full md:w-5/12 ml-16 md:ml-0`}>
                      <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                              <p className="text-primary font-medium">{exp.company}</p>
                            </div>
                            <Badge variant="secondary" className="ml-4">{exp.period}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Achievement Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-16 grid grid-cols-3 gap-8 text-center"
            >
              <div>
                <div className="text-3xl font-bold mb-2">
                  <AnimatedCounter end={15} suffix="+" />
                </div>
                <p className="text-muted-foreground">Projects Delivered</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">
                  <AnimatedCounter end={100} suffix="+" />
                </div>
                <p className="text-muted-foreground">Beta Testers</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">
                  <AnimatedCounter end={2} suffix="+" />
                </div>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
        </section>
      </ParallaxSection>

      {/* Education Section */}
      <FadeInScroll>
        <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border bg-background text-muted-foreground">
                <IconSchool className="w-4 h-4" />
                <span className="text-sm font-medium">Education</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">Academic Background</h2>
              <p className="text-xl text-muted-foreground">
                Continuous learning and formal education journey
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Card className="h-full group hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <IconSchool className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                            {edu.degree}
                          </h3>
                          <p className="text-primary font-medium mb-2">{edu.institution}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <IconCalendar className="w-4 h-4" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        </section>
      </FadeInScroll>

      {/* CTA Section */}
      <ScaleOnScroll scaleRange={[0.9, 1]}>
        <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl" />
              
              <Card className="relative border-2 border-primary/20">
                <CardContent className="p-12 text-center">
                  <div className="mb-8">
                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <IconRocket className="w-10 h-10 text-primary" />
                    </div>
                    <h2 className="text-4xl font-bold mb-4">Ready to work together?</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                      I'm always excited to collaborate on new projects and bring creative ideas to life. 
                      Let's create something amazing together!
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button size="lg" asChild className="min-w-[200px]">
                      <Link href="/contact">
                        <IconMail className="w-5 h-5 mr-2" />
                        Get In Touch
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild className="min-w-[200px]">
                      <a href="/my-resume.pdf" download="Muhammad-Maulana-Firdaussyah-Resume.pdf">
                        <IconDownload className="w-5 h-5 mr-2" />
                        Download Resume
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild className="min-w-[200px]">
                      <Link href="/portfolio">
                        <IconEye className="w-5 h-5 mr-2" />
                        View My Work
                      </Link>
                    </Button>
                  </div>
                  
                  {/* Contact info */}
                  <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <IconMail className="w-4 h-4" />
                      <span className="text-sm">20-30 hours/week</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <IconMapPin className="w-4 h-4" />
                      <span className="text-sm">Yogyakarta, Indonesia</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-sm">Usually responds within 24h</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
        </section>
      </ScaleOnScroll>
    </div>
  );
}
