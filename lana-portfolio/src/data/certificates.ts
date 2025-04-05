export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
  description: string;
  link: string;
}

export const certificates: Certificate[] = [
  {
    title: "Advanced React Development",
    issuer: "Meta",
    date: "2023",
    image: "/images/certificates/react-certificate.jpg",
    description: "Comprehensive course covering advanced React concepts, hooks, and state management.",
    link: "#"
  },
  {
    title: "Next.js Certification",
    issuer: "Vercel",
    date: "2023",
    image: "/images/certificates/nextjs-certificate.jpg",
    description: "Professional certification in Next.js development, covering SSR, SSG, and app router.",
    link: "#"
  },
  {
    title: "UI/UX Design Fundamentals",
    issuer: "Interaction Design Foundation",
    date: "2022",
    image: "/images/certificates/uiux-certificate.jpg",
    description: "Certification in user interface and experience design principles and methodologies.",
    link: "#"
  },
  {
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: "2022",
    image: "/images/certificates/fullstack-certificate.jpg",
    description: "Comprehensive course covering both frontend and backend web development technologies.",
    link: "#"
  }
];

export function getAllCertificates(): Certificate[] {
  return certificates;
}