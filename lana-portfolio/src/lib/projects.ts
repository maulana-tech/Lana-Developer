import { projects } from '@/data/projects';

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

export function getAllProjects(): Project[] {
  return projects
}


export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured);
}

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getProjectsByTag(tag: string): Project[] {
  return projects.filter(project => project.tags.includes(tag));
}

export function getProjectsByType(type: string): Project[] {
  return projects.filter(project => project.type === type);
}

export const getProjectTypes = () => {
  const types = [...new Set(projects.map((project) => project.type))]
  return types.sort()
}