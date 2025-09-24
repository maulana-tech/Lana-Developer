'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IconBrandReact, IconBrandNextjs, IconBrandTailwind, IconBrandFigma, IconBrandJavascript, IconBrandTypescript, IconCertificate } from '@tabler/icons-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllCertificatesSync } from '@/lib/certificates';

export default function AboutPage() {
  const skills = [
    { name: 'React', icon: <IconBrandReact size={24} />, level: 90 },
    { name: 'Next.js', icon: <IconBrandNextjs size={24} />, level: 85 },
    { name: 'Tailwind CSS', icon: <IconBrandTailwind size={24} />, level: 95 },
    { name: 'Figma', icon: <IconBrandFigma size={24} />, level: 80 },
    { name: 'JavaScript', icon: <IconBrandJavascript size={24} />, level: 90 },
    { name: 'TypeScript', icon: <IconBrandTypescript size={24} />, level: 85 },
  ];

  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      period: '2021 - Present',
      description: 'Leading the frontend development team, implementing modern UI/UX designs, and optimizing web performance.',
    },
    {
      title: 'Web Developer',
      company: 'Digital Solutions Agency',
      period: '2018 - 2021',
      description: 'Developed responsive websites and web applications for various clients across different industries.',
    },
    {
      title: 'UI/UX Designer',
      company: 'Creative Studio',
      period: '2016 - 2018',
      description: 'Designed user interfaces and experiences for web and mobile applications, focusing on usability and aesthetics.',
    },
  ];

  const education = [
    {
      degree: 'Master of Computer Science',
      institution: 'University of Technology',
      period: '2014 - 2016',
    },
    {
      degree: 'Bachelor of Design',
      institution: 'Art & Design Institute',
      period: '2010 - 2014',
    },
  ];

  const certificates = getAllCertificatesSync();

  return (
    <div className="flex flex-col gap-20 py-10">
      {/* About Hero Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-muted-foreground mb-8">
              I'm a passionate web developer and designer with over 5 years of experience creating beautiful digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="aspect-square bg-secondary rounded-full max-w-md mx-auto flex items-center justify-center overflow-hidden"
            >
              <span className="text-8xl font-bold text-secondary-foreground">L</span>
              {/* Replace with actual image when available */}
              {/* <Image src="/profile.jpg" alt="Lana's profile" fill className="object-cover" /> */}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <h2 className="text-3xl font-bold">Hello, I'm Lana</h2>
              <p className="text-muted-foreground">
                I'm a web developer and designer based in Jakarta, Indonesia. I specialize in creating modern, responsive websites and applications that provide excellent user experiences.
              </p>
              <p className="text-muted-foreground">
                With a background in both design and development, I bring a unique perspective to every project, ensuring that the final product is not only visually appealing but also functional and user-friendly.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you can find me exploring new design trends, learning new technologies, or enjoying outdoor activities.
              </p>
              <div className="flex gap-4 mt-2">
                <Button asChild>
                  <Link href="/contact">Contact Me</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/portfolio">View My Work</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-10 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">My Skills</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Here are some of the technologies and tools I work with on a daily basis.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-primary/10 p-2 rounded-full text-primary">
                          {skill.icon}
                        </div>
                        <h3 className="text-lg font-semibold">{skill.name}</h3>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2.5">
                        <div 
                          className="bg-primary h-2.5 rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                My professional journey in the world of web development and design.
              </p>
            </motion.div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                          <p className="text-primary">{exp.company}</p>
                        </div>
                        <div className="text-muted-foreground mt-2 md:mt-0">{exp.period}</div>
                      </div>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-10 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Education</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                My academic background and qualifications.
              </p>
            </motion.div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-xl font-bold">{edu.degree}</h3>
                          <p className="text-primary">{edu.institution}</p>
                        </div>
                        <div className="text-muted-foreground mt-2 md:mt-0">{edu.period}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Section - Add this before the CTA section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">My Certificates</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Professional certifications and courses I've completed to enhance my skills.
              </p>
            </motion.div>

            <Tabs defaultValue="grid" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="grid">Grid View</TabsTrigger>
                  <TabsTrigger value="carousel">Carousel View</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="grid" className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {certificates.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.03 }}
                      className="h-full"
                    >
                      <Card className="overflow-hidden h-full">
                        <div className="relative aspect-video overflow-hidden bg-secondary">
                          <div className="absolute inset-0 flex items-center justify-center bg-primary/10 text-primary">
                            <IconCertificate size={48} />
                          </div>
                          {/* Uncomment when you have actual certificate images */}
                          {/* <Image
                            src={cert.image}
                            alt={cert.title}
                            width={600}
                            height={340}
                            className="object-cover w-full h-full"
                          /> */}
                        </div>
                        <CardContent className="pt-6">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-semibold">{cert.title}</h3>
                            <span className="text-sm text-muted-foreground">{cert.date}</span>
                          </div>
                          <p className="text-primary mb-2">{cert.issuer}</p>
                          <p className="text-muted-foreground mb-4">{cert.description}</p>
                          <Button variant="outline" size="sm" asChild>
                            <a href={cert.link} target="_blank" rel="noopener noreferrer">
                              View Certificate
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="carousel" className="w-full">
                <div className="relative overflow-hidden py-4">
                  <div className="flex space-x-6 animate-scroll">
                    {[...certificates, ...certificates].map((cert, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="min-w-[300px] md:min-w-[400px]"
                      >
                        <Card className="overflow-hidden h-full">
                          <div className="relative aspect-video overflow-hidden bg-secondary">
                            <div className="absolute inset-0 flex items-center justify-center bg-primary/10 text-primary">
                              <IconCertificate size={48} />
                            </div>
                          </div>
                          <CardContent className="pt-6">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-xl font-semibold">{cert.title}</h3>
                              <span className="text-sm text-muted-foreground">{cert.date}</span>
                            </div>
                            <p className="text-primary mb-2">{cert.issuer}</p>
                            <Button variant="outline" size="sm" asChild className="mt-4">
                              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                                View Certificate
                              </a>
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Interested in working together?</h2>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
