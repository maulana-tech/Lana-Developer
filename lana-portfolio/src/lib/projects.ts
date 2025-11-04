import { cache } from 'react';
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

// Mock projects data for fallback - Only projects with demo links (21 projects)
// Auto-generated from database - DO NOT EDIT MANUALLY
const mockProjects: Project[] = [
  {
    id: "94cf4da3-45f2-45b0-9269-e470eda2a8ba",
    title: "Lana Developer Portfolio",
    description: "Modern portfolio website showcasing projects and skills.",
    longDescription: "A comprehensive developer portfolio built with Next.js 14, TypeScript, and Tailwind CSS. Features project showcases, skills display, contact form, and responsive design with smooth animations.",
    tags: ["TypeScript","Next.js","Tailwind CSS","Portfolio"],
    type: "Website",
    image: "https://placehold.co/600x340/ec4899/ffffff?text=Lana+Developer",
    images: [],
    link: "https://lana-developer.vercel.app",
    github: "https://github.com/maulana-tech/Lana-Developer",
    featured: true,
  },
  {
    id: "f88b5117-2a66-4526-8295-34a84779a58c",
    title: "Nutrition AI App",
    description: "AI-powered nutrition tracking and meal planning application.",
    longDescription: "An intelligent nutrition app that uses AI to analyze food items, track calorie intake, provide personalized meal recommendations, and help users achieve their health goals with smart dietary insights.",
    tags: ["AI","Machine Learning","Health","Nutrition","Mobile App"],
    type: "AI/ML",
    image: "https://placehold.co/600x340/10b981/ffffff?text=Nutrition+AI+App",
    images: [],
    link: "https://nutrition-ai-app-six.vercel.app",
    github: "https://github.com/lana-techn/nutrition-ai-app",
    featured: true,
  },
  {
    id: "fb3b4824-4817-49f3-b402-876564f82ca6",
    title: "Social Web Platform",
    description: "Social networking platform built with Next.js.",
    longDescription: "A feature-rich social media application with user profiles, posts, comments, likes, friend connections, and real-time notifications. Provides a responsive interface for seamless interaction across devices.",
    tags: ["Next.js","React","Tailwind CSS","TypeScript"],
    type: "Website",
    image: "https://placehold.co/600x340/8b5cf6/ffffff?text=Social+Web",
    images: [],
    link: "https://social-web-lake.vercel.app",
    github: "https://github.com/maulana-tech/social-web",
    featured: true,
  },
  {
    id: "05c6af54-0b96-4fcb-be65-3fac8b660ee0",
    title: "Try Rehearse AI",
    description: "AI-powered interview practice and preparation platform.",
    longDescription: "An advanced AI platform designed to help job seekers practice and improve their interview skills. Features realistic mock interviews, instant feedback, performance analytics, and personalized coaching powered by artificial intelligence.",
    tags: ["AI","Interview","Career","Practice","Machine Learning"],
    type: "AI/ML",
    image: "https://placehold.co/600x340/6366f1/ffffff?text=Try+Rehearse+AI",
    images: [],
    link: "https://www.tryrehearse.com",
    github: "",
    featured: true,
  },
  {
    id: "53d43b26-9874-499b-a1cd-89d481d0c0dd",
    title: "Birthday Card Project",
    description: "Digital birthday card creator.",
    longDescription: "A web application for creating and sharing digital birthday cards with customizable designs and messages.",
    tags: ["HTML","Cards","Personal","Private"],
    type: "Website",
    image: "https://placehold.co/600x340/ffd700/ffffff?text=Birthday+Card",
    images: [],
    link: "https://birthday-card-self.vercel.app",
    github: "https://github.com/maulana-tech/Birthday-card",
    featured: false,
  },
  {
    id: "943e2c17-a8cc-4c48-a0d6-f540787baf08",
    title: "Birthday Gift Website",
    description: "Interactive birthday gift website.",
    longDescription: "A creative website created as a birthday gift featuring interactive elements, animations, and personalized content.",
    tags: ["CSS","Birthday","Personal"],
    type: "Website",
    image: "https://placehold.co/600x340/ffd700/ffffff?text=Birthday+Gift",
    images: [],
    link: "https://birthday-gf.vercel.app",
    github: "https://github.com/maulana-tech/Birthday-Gf",
    featured: false,
  },
  {
    id: "c59cf23f-e5d7-4a12-b1c6-deb2c1044679",
    title: "Coffee Website",
    description: "Coffee shop website with modern design.",
    longDescription: "A visually appealing website for a coffee shop featuring menu display, location information, online ordering, and attractive product showcase.",
    tags: ["SCSS","CSS","Coffee","Restaurant"],
    type: "Website",
    image: "https://placehold.co/600x340/8b4513/ffffff?text=Coffee+Shop",
    images: [],
    link: "https://coffee-01.vercel.app",
    github: "https://github.com/maulana-tech/Coffee-01",
    featured: false,
  },
  {
    id: "8b625714-e843-48d4-9c5c-ab8878096e97",
    title: "Coffee Website 02",
    description: "Modern coffee shop website with elegant design.",
    longDescription: "A second iteration of coffee shop website featuring improved UI/UX, menu showcase, location finder, and online ordering capabilities with beautiful animations and responsive layout.",
    tags: ["CSS","JavaScript","Coffee","Restaurant","Design"],
    type: "Website",
    image: "https://placehold.co/600x340/8b4513/ffffff?text=Coffee+Shop+02",
    images: [],
    link: "https://coffee-02-blue.vercel.app",
    github: "",
    featured: false,
  },
  {
    id: "169214ae-6c96-4815-8eea-d26b2139f4c7",
    title: "Desa Web",
    description: "Village information and administration website.",
    longDescription: "A website for village administration and information sharing, featuring news, services, and community engagement features.",
    tags: ["JavaScript","Government","Community","Private"],
    type: "Website",
    image: "https://placehold.co/600x340/22c55e/ffffff?text=Desa+Web",
    images: [],
    link: "https://desa-wotawati.vercel.app",
    github: "https://github.com/maulana-tech/desa-web",
    featured: false,
  },
  {
    id: "dbcf7f19-8396-431e-8765-a7b07a0fd484",
    title: "Flappy Bird Game",
    description: "JavaScript implementation of Flappy Bird game.",
    longDescription: "A fun recreation of the popular Flappy Bird game using HTML5 Canvas and JavaScript, featuring score tracking and responsive controls.",
    tags: ["JavaScript","Game","HTML5 Canvas"],
    type: "Game",
    image: "https://placehold.co/600x340/ffcc00/ffffff?text=Flappy+Game",
    images: [],
    link: "https://flappy1.vercel.app",
    github: "https://github.com/maulana-tech/Flappy",
    featured: false,
  },
  {
    id: "8973aaea-afd8-424e-b28c-19b842826a54",
    title: "Flower Main",
    description: "Flower shop website project.",
    longDescription: "A website for a flower shop featuring product catalog, ordering system, and delivery information.",
    tags: ["CSS","E-commerce","Flowers","Private"],
    type: "Website",
    image: "https://placehold.co/600x340/ff6b9d/ffffff?text=Flower+Shop",
    images: [],
    link: "https://flower-main-iota.vercel.app",
    github: "https://github.com/maulana-tech/flower-main",
    featured: false,
  },
  {
    id: "bbe784aa-92d4-4099-b29e-b537a0d74e63",
    title: "ForYou Tech",
    description: "Technology platform and service application.",
    longDescription: "A technology service platform providing various digital solutions and tools for businesses and individuals.",
    tags: ["TypeScript","Tech Platform","Private"],
    type: "Website",
    image: "https://placehold.co/600x340/3b82f6/ffffff?text=ForYou+Tech",
    images: [],
    link: "https://foryou-tech.vercel.app",
    github: "https://github.com/maulana-tech/foryou-tech",
    featured: false,
  },
  {
    id: "0ba4aa08-b4e1-41a2-8949-4be82d6b5fce",
    title: "Love Website",
    description: "Romantic themed interactive website.",
    longDescription: "A romantic website with interactive animations, love messages, and beautiful design created for special occasions.",
    tags: ["JavaScript","Love","Personal"],
    type: "Website",
    image: "https://placehold.co/600x340/ff1493/ffffff?text=Love+Website",
    images: [],
    link: "https://love-1-pi.vercel.app",
    github: "https://github.com/maulana-tech/love-1",
    featured: false,
  },
  {
    id: "0d6288a8-9ab3-4a43-9336-2020ae066064",
    title: "Maulana Developer",
    description: "Personal developer portfolio and blog.",
    longDescription: "A personal developer portfolio featuring projects, blog posts, and professional information with modern design and smooth interactions.",
    tags: ["TypeScript","Portfolio","Blog","Private"],
    type: "Website",
    image: "https://placehold.co/600x340/ec4899/ffffff?text=Maulana+Developer",
    images: [],
    link: "https://maulana-developer.vercel.app",
    github: "https://github.com/maulana-tech/maulana-developer",
    featured: false,
  },
  {
    id: "570a49a0-cd14-4c1f-b033-c31683714bc2",
    title: "Maulana Linktree",
    description: "Personal link-in-bio page with social media integration.",
    longDescription: "A customized link-in-bio page built with TypeScript and modern web technologies, showcasing social media profiles, projects, and important links in one centralized location.",
    tags: ["TypeScript","Next.js","Link Management"],
    type: "Website",
    image: "https://placehold.co/600x340/06b6d4/ffffff?text=Linktree",
    images: [],
    link: "https://maulana-linktree.vercel.app",
    github: "https://github.com/maulana-tech/maulana-linktree",
    featured: false,
  },
  {
    id: "a43a6e07-e086-468b-871e-bd1b99111553",
    title: "MyNetflix Clone",
    description: "Netflix-inspired streaming platform UI clone.",
    longDescription: "A front-end clone of Netflix featuring movie browsing, category filtering, responsive design, and modern streaming platform interface.",
    tags: ["CSS","JavaScript","Clone","Streaming"],
    type: "Website",
    image: "https://placehold.co/600x340/e50914/ffffff?text=Netflix+Clone",
    images: [],
    link: "https://my-netflix-clone-fawn.vercel.app",
    github: "https://github.com/maulana-tech/MyNetflix-Clone",
    featured: false,
  },
  {
    id: "faec74db-895a-47d6-9f7a-c3a8e7415090",
    title: "Portal Lomba",
    description: "Competition and event management portal platform.",
    longDescription: "A comprehensive platform for organizing and managing competitions, events, and contests. Features registration system, participant management, judging interface, and result announcements.",
    tags: ["TypeScript","Next.js","Event Management"],
    type: "Website",
    image: "https://placehold.co/600x340/a855f7/ffffff?text=Portal+Lomba",
    images: [],
    link: "https://portal-lomba-utdi.vercel.app",
    github: "https://github.com/maulana-tech/portal-lomba",
    featured: false,
  },
  {
    id: "c08c22bb-ad98-4ca2-80a4-a812e9aae8d0",
    title: "Valentine Maze Game",
    description: "Valentine-themed maze game (Forked).",
    longDescription: "An interactive maze game with Valentine's Day theme where players navigate through romantic challenges.",
    tags: ["JavaScript","Game","Valentine"],
    type: "Game",
    image: "https://placehold.co/600x340/ff69b4/ffffff?text=Maze+Valentine",
    images: [],
    link: "https://maze-valentine-delta.vercel.app",
    github: "https://github.com/maulana-tech/maze-valentine",
    featured: false,
  },
  {
    id: "b8dc0a54-aae0-43cf-b2a9-b18d3b0de00d",
    title: "Valentine's Day Project",
    description: "Interactive Valentine's Day card website.",
    longDescription: "A romantic interactive website created for Valentine's Day with animations, messages, and special effects.",
    tags: ["JavaScript","Valentine","Personal"],
    type: "Website",
    image: "https://placehold.co/600x340/ff1493/ffffff?text=Valentine",
    images: [],
    link: "https://valentine-mu-pearl.vercel.app",
    github: "https://github.com/maulana-tech/valentine",
    featured: false,
  },
  {
    id: "9f07782e-7a7f-4b00-8878-bf79afb82d0b",
    title: "Web Project PWC",
    description: "Professional web project for PWC organization.",
    longDescription: "A professional website project featuring organizational information, services, team profiles, and contact functionality.",
    tags: ["HTML","CSS","JavaScript","Corporate"],
    type: "Website",
    image: "https://placehold.co/600x340/00338d/ffffff?text=PWC+Project",
    images: [],
    link: "https://web-project-pwc.vercel.app",
    github: "https://github.com/maulana-tech/Web-Project-PWC",
    featured: false,
  },
  {
    id: "28f4c38b-95ea-4bc3-a173-486900e107ab",
    title: "Web Template Collection",
    description: "Collection of reusable web templates and components.",
    longDescription: "A curated collection of modern, responsive web templates and reusable components built with TypeScript, React, and Tailwind CSS for rapid web development.",
    tags: ["TypeScript","React","Tailwind CSS","Templates"],
    type: "Website",
    image: "https://placehold.co/600x340/f97316/ffffff?text=Web+Templates",
    images: [],
    link: "https://web-template-kappa.vercel.app",
    github: "https://github.com/maulana-tech/web-template",
    featured: false,
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

// Cached async functions with React cache for deduplication and performance
export const getAllProjects = cache(async (): Promise<Project[]> => {
  if (USE_DATABASE) {
    return await getAllProjectsFromDB();
  }
  return mockProjects;
});

export const getFeaturedProjects = cache(async (): Promise<Project[]> => {
  if (USE_DATABASE) {
    return await getFeaturedProjectsFromDB();
  }
  return mockProjects.filter(project => project.featured);
});

export const getProjectById = cache(async (id: string): Promise<Project | null> => {
  if (USE_DATABASE) {
    return await getProjectByIdFromDB(id);
  }
  return mockProjects.find(project => project.id === id) || null;
});

export const getProjectsByTag = cache(async (tag: string): Promise<Project[]> => {
  if (USE_DATABASE) {
    return await getProjectsByTagFromDB(tag);
  }
  return mockProjects.filter(project => project.tags.includes(tag));
});

export const getProjectsByType = cache(async (type: string): Promise<Project[]> => {
  if (USE_DATABASE) {
    return await getProjectsByTypeFromDB(type);
  }
  return mockProjects.filter(project => project.type === type);
});

export const getProjectTypes = cache(async (): Promise<string[]> => {
  if (USE_DATABASE) {
    return await getProjectTypesFromDB();
  }
  const types = [...new Set(mockProjects.map((project) => project.type))];
  return types.sort();
});

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
