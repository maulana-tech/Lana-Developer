'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconMail, IconMapPin, IconPhone, IconSend, IconCheck } from '@tabler/icons-react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FadeInScroll, ScaleOnScroll } from '@/components/ParallaxSection';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };
  
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <FadeInScroll>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to discuss a potential collaboration? 
              I'd love to hear from you. Fill out the form below or reach out directly.
            </p>
          </motion.div>
        </FadeInScroll>
        
        <ScaleOnScroll scaleRange={[0.95, 1]}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>
              
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <IconCheck size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="transition-all focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="transition-all focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="transition-all focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or inquiry..."
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="min-h-[150px] transition-all focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full mt-4"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <IconSend size={18} className="mr-2" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-8"
          >
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <IconMapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">Yogyakarta, Indonesia</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <IconMail size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a href="mailto:contact@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                      firdaussyah03@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <IconPhone size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <a href="tel:+6212345678" className="text-muted-foreground hover:text-primary transition-colors">
                      +62 878 2506 0359
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <h2 className="text-2xl font-semibold mb-6">Connect With Me</h2>
              
              <div className="flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ y: -5 }}
                  href="https://github.com/maulana-tech" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary p-4 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <IconBrandGithub size={24} />
                </motion.a>
                
                <motion.a
                  whileHover={{ y: -5 }}
                  href="https://www.linkedin.com/in/muhammad-firdaussyah-083362293" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary p-4 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <IconBrandLinkedin size={24} />
                </motion.a>
                
                <motion.a
                  whileHover={{ y: -5 }}
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-secondary p-4 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <IconBrandTwitter size={24} />
                </motion.a>
                
                <motion.a
                  whileHover={{ y: -5 }}
                  href="mailto:firdaussyah03@gmail.com"
                  className="bg-secondary p-4 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <IconMail size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>
          </div>
        </ScaleOnScroll>
      </div>
    </div>
  );
}