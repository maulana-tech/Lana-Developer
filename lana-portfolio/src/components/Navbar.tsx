'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { ThemeToggle } from '@/components/ThemeToggle';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">Maulana F</Link>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <ThemeToggle />
            <Button variant="outline" size="sm" asChild>
              <a href="/my-resume.pdf" download="Muhammad-Maulana-Firdaussyah-Resume.pdf">
                Resume
              </a>
            </Button>
            <Button variant="default" size="sm" asChild>
              <Link href="/contact">
                Hire Me
              </Link>
            </Button>
          </ul>

          {/* Mobile Navigation Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </Button>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-background border-b"
        >
          <div className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="block py-2 text-foreground/80 hover:text-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="flex items-center py-2">
                <span className="text-foreground/80 mr-2">Tema:</span>
                <ThemeToggle />
              </li>
              <li>
                <Button className="w-full" variant="outline" asChild>
                  <a href="/my-resume.pdf" download="Muhammad-Maulana-Firdaussyah-Resume.pdf">
                    Download Resume
                  </a>
                </Button>
              </li>
              <li>
                <Button className="w-full" variant="default" asChild>
                  <Link href="/contact">
                    Hire Me
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </header>
  );
}