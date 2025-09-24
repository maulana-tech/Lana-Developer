import { 
  getAllProjectsFromDB, 
  getFeaturedProjectsFromDB, 
  getProjectByIdFromDB, 
  getProjectsByTagFromDB, 
  getProjectsByTypeFromDB, 
  getProjectTypesFromDB 
} from './database/projects';

// Flag to control data source
const USE_DATABASE = process.env.NEXT_PUBLIC_USE_DATABASE === 'true';

// Mock projects data for fallback
const mockProjects: Project[] = [
  {
    id: "doctor-appointment",
    title: "Doctor Appointment App",
    description: "A web application for scheduling doctor appointments.",
    longDescription: "This React application allows users to schedule, manage, and track doctor appointments. It features a user-friendly interface, calendar integration, and appointment management system.",
    tags: ["React", "JavaScript", "CSS"],
    type: "Website",
    image: "https://placehold.co/600x340/3b82f6/ffffff?text=Doctor+Appointment+App",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/DoctorAppointment-App.git",
    featured: true,
  },
  {
    id: "car-showcase",
    title: "Car Showcase Web",
    description: "A modern web application for showcasing cars and their specifications.",
    longDescription: "Built with Next.js, this car showcase platform features detailed car listings, search functionality, filtering options, and responsive design for optimal viewing on all devices.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    type: "Website",
    image: "https://placehold.co/600x340/10b981/ffffff?text=Car+Showcase+Web",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/Car-Showcase-App.git",
    featured: true,
  },
  {
    id: "marketplace",
    title: "MarketPlace Web",
    description: "A full-featured e-commerce marketplace built with Laravel 10.",
    longDescription: "This marketplace platform allows vendors to create stores, list products, and process orders. It includes user authentication, product search, shopping cart, payment integration, and order management.",
    tags: ["Laravel 10", "PHP", "MySQL", "Bootstrap"],
    type: "Website",
    image: "https://placehold.co/600x340/f59e0b/ffffff?text=MarketPlace+Web",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/marketplace-project.git",
    featured: true,
  },
  {
    id: "social-web",
    title: "Social Web",
    description: "A social networking platform built with Next.js.",
    longDescription: "This social media application features user profiles, posts, comments, likes, friend connections, and real-time notifications. It provides a responsive interface for seamless interaction across devices.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    type: "Website",
    image: "https://placehold.co/600x340/8b5cf6/ffffff?text=Social+Web",
    images: [],
    link: "https://social-web-lake.vercel.app/",
    github: "",
    featured: true,
  },
  {
    id: "baca-cerdas-ai",
    title: "BacaCerdas AI",
    description: "AI-powered reading comprehension and learning assistant application.",
    longDescription: "An intelligent reading application that uses artificial intelligence to help users improve their reading comprehension, vocabulary, and learning efficiency through personalized content and adaptive learning algorithms.",
    tags: ["TypeScript", "AI", "Education", "Machine Learning"],
    type: "AI/ML",
    image: "https://placehold.co/600x340/06b6d4/ffffff?text=BacaCerdas+AI",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/BacaCerdas-AI",
    featured: true,
  },
  {
    id: "task-management",
    title: "Task Management System",
    description: "TypeScript-based task and project management application.",
    longDescription: "A modern task management system built with TypeScript, featuring project organization, task tracking, deadline management, team collaboration, and productivity analytics for efficient workflow management.",
    tags: ["TypeScript", "Task Management", "Productivity", "Web App"],
    type: "Website",
    image: "https://placehold.co/600x340/14b8a6/ffffff?text=Task+Management+System",
    images: [],
    link: "",
    github: "https://github.com/maulana-tech/task-management",
    featured: true,
  }
];

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  type: string;
  image: string;
  images: string[];
  link: string;
  github: string;
  featured: boolean;
};

// Async functions (can use database or static data)
export async function getAllProjects(): Promise<Project[]> {
  if (USE_DATABASE) {
    return await getAllProjectsFromDB();
  }
  return mockProjects;
}

export async function getFeaturedProjects(): Promise<Project[]> {
  if (USE_DATABASE) {
    return await getFeaturedProjectsFromDB();
  }
  return mockProjects.filter(project => project.featured);
}

export async function getProjectById(id: string): Promise<Project | null> {
  if (USE_DATABASE) {
    return await getProjectByIdFromDB(id);
  }
  return mockProjects.find(project => project.id === id) || null;
}

export async function getProjectsByTag(tag: string): Promise<Project[]> {
  if (USE_DATABASE) {
    return await getProjectsByTagFromDB(tag);
  }
  return projects.filter(project => project.tags.includes(tag));
}

export async function getProjectsByType(type: string): Promise<Project[]> {
  if (USE_DATABASE) {
    return await getProjectsByTypeFromDB(type);
  }
  return projects.filter(project => project.type === type);
}

export async function getProjectTypes(): Promise<string[]> {
  if (USE_DATABASE) {
    return await getProjectTypesFromDB();
  }
  const types = [...new Set(projects.map((project) => project.type))];
  return types.sort();
}

// Synchronous functions for backward compatibility (using static data)
export function getAllProjectsSync(): Project[] {
  return mockProjects;
}

export function getFeaturedProjectsSync(): Project[] {
  return mockProjects.filter(project => project.featured);
}

export function getProjectByIdSync(id: string): Project | undefined {
  return mockProjects.find(project => project.id === id);
}

export function getProjectsByTagSync(tag: string): Project[] {
  return mockProjects.filter(project => project.tags.includes(tag));
}

export function getProjectsByTypeSync(type: string): Project[] {
  return mockProjects.filter(project => project.type === type);
}

export function getProjectTypesSync(): string[] {
  const types = [...new Set(mockProjects.map((project) => project.type))];
  return types.sort();
}
