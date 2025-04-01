import Link from 'next/link';
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconMail } from '@tabler/icons-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-bold">Lana</h3>
            <p className="text-muted-foreground">Creating beautiful digital experiences with passion and precision.</p>
            <div className="flex space-x-4">
              <Link href="https://github.com" target="_blank" aria-label="GitHub" className="text-foreground/70 hover:text-foreground transition-colors">
                <IconBrandGithub size={20} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn" className="text-foreground/70 hover:text-foreground transition-colors">
                <IconBrandLinkedin size={20} />
              </Link>
              <Link href="https://twitter.com" target="_blank" aria-label="Twitter" className="text-foreground/70 hover:text-foreground transition-colors">
                <IconBrandTwitter size={20} />
              </Link>
              <Link href="mailto:contact@example.com" aria-label="Email" className="text-foreground/70 hover:text-foreground transition-colors">
                <IconMail size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-foreground/70 hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-foreground/70 hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-foreground/70 hover:text-foreground transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/70 hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <address className="not-italic text-muted-foreground">
              <p>Jakarta, Indonesia</p>
              <p>contact@example.com</p>
              <p>+62 123 456 7890</p>
            </address>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Lana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}