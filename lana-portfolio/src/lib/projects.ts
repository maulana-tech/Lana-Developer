import { projects } from '@/data/projects';
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
  return projects;
}

export async function getFeaturedProjects(): Promise<Project[]> {
  if (USE_DATABASE) {
    return await getFeaturedProjectsFromDB();
  }
  return projects.filter(project => project.featured);
}

export async function getProjectById(id: string): Promise<Project | null> {
  if (USE_DATABASE) {
    return await getProjectByIdFromDB(id);
  }
  return projects.find(project => project.id === id) || null;
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
  return projects;
}

export function getFeaturedProjectsSync(): Project[] {
  return projects.filter(project => project.featured);
}

export function getProjectByIdSync(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getProjectsByTagSync(tag: string): Project[] {
  return projects.filter(project => project.tags.includes(tag));
}

export function getProjectsByTypeSync(type: string): Project[] {
  return projects.filter(project => project.type === type);
}

export function getProjectTypesSync(): string[] {
  const types = [...new Set(projects.map((project) => project.type))];
  return types.sort();
}
