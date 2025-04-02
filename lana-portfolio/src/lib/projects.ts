import projectsData from '@/data/projects.json';

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  images: string[];
  link: string;
  github: string;
  featured: boolean;
};

export function getAllProjects(): Project[] {
  return projectsData.projects;
}

export function getFeaturedProjects(): Project[] {
  return projectsData.projects.filter(project => project.featured);
}

export function getProjectById(id: string): Project | undefined {
  return projectsData.projects.find(project => project.id === id);
}