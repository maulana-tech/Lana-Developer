// Import database functions
import { getAllCertificatesFromDB } from './database/certificates';
import { Certificate } from '@/types/certificates';

// Flag to control data source
const USE_DATABASE = process.env.NEXT_PUBLIC_USE_DATABASE === 'true';

// Mock data for fallback
const mockCertificates: Certificate[] = [
  {
    title: "Advanced React Development",
    issuer: "Meta",
    date: "2023",
    image: "https://placehold.co/600x340/3b82f6/ffffff?text=React+Certificate",
    description: "Comprehensive course covering advanced React concepts, hooks, and state management.",
    link: "#"
  },
  {
    title: "Next.js Certification",
    issuer: "Vercel",
    date: "2023",
    image: "https://placehold.co/600x340/000000/ffffff?text=Next.js+Certificate",
    description: "Professional certification in Next.js development, covering SSR, SSG, and app router.",
    link: "#"
  },
  {
    title: "UI/UX Design Fundamentals",
    issuer: "Interaction Design Foundation",
    date: "2022",
    image: "https://placehold.co/600x340/8b5cf6/ffffff?text=UI%2FUX+Certificate",
    description: "Certification in user interface and experience design principles and methodologies.",
    link: "#"
  },
  {
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: "2022",
    image: "https://placehold.co/600x340/059669/ffffff?text=Full+Stack+Certificate",
    description: "Comprehensive course covering both frontend and backend web development technologies.",
    link: "#"
  }
];

export async function getAllCertificates(): Promise<Certificate[]> {
  if (USE_DATABASE) {
    return await getAllCertificatesFromDB();
  }
  return mockCertificates;
}

// Synchronous version for backward compatibility (using mock data)
export function getAllCertificatesSync(): Certificate[] {
  return mockCertificates;
}