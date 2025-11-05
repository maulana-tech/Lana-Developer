'use client';

import { Project } from '@/lib/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { memo } from 'react';

interface ProjectsGridProps {
  projects: Project[];
}

const ProjectsGridComponent = ({ projects }: ProjectsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
};

export const ProjectsGrid = memo(ProjectsGridComponent);
