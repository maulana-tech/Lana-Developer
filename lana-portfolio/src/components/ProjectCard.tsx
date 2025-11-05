'use client';

import { Project } from '@/lib/projects';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { memo, useMemo } from 'react';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCardComponent = ({ project, index = 0 }: ProjectCardProps) => {
  const displayTags = useMemo(() => project.tags.slice(0, 4), [project.tags]);
  const hasMoreTags = useMemo(() => project.tags.length > 4, [project.tags.length]);
  
  return (
    <div className="group h-full">
      <Card className="overflow-hidden h-full border-2 hover:border-foreground/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-br from-background/90 via-background/95 to-background/90 backdrop-blur-sm will-change-transform">
        {/* Image Container with Overlay */}
        <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-muted/20 to-muted/5">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            width={600}
            height={340}
            className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105 group-hover:brightness-110 will-change-transform"
            fallbackSrc="https://placehold.co/600x340/e5e7eb/6b7280?text=Project+Image"
            loading={index < 3 ? "eager" : "lazy"}
            priority={index < 3}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Quick Actions Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="flex gap-2">
              <Button size="sm" asChild className="shadow-lg backdrop-blur-sm">
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                  <IconBrandGithub size={16} />
                </a>
              </Button>
              <Button size="sm" variant="outline" asChild className="shadow-lg backdrop-blur-sm bg-background/90">
                <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="Live project">
                  <IconExternalLink size={16} />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Project Status Badge */}
          <div className="absolute top-4 right-4">
            <div className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full backdrop-blur-sm shadow-lg">
              FEATURED
            </div>
          </div>
        </div>
        
        <CardContent className="p-6">
          {/* Title and Description */}
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {project.description}
            </p>
          </div>
          
          {/* Enhanced Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {displayTags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-3 py-1 bg-gradient-to-r from-muted/80 to-muted/40 text-foreground text-xs font-medium rounded-full border hover:border-foreground/20 transition-all duration-200 hover:scale-105"
              >
                {tag}
              </span>
            ))}
            {hasMoreTags && (
              <span className="px-3 py-1 bg-muted/50 text-muted-foreground text-xs rounded-full border">
                +{project.tags.length - 4} more
              </span>
            )}
          </div>
          
          {/* Enhanced Action Buttons */}
          <div className="flex gap-3">
            <Button 
              asChild 
              className="flex-1 group/btn relative overflow-hidden"
              size="sm"
            >
              <Link href={`/portfolio/${project.id}`}>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500" />
                <span className="relative z-10 font-semibold">View Case Study</span>
                <motion.div 
                  className="ml-2 relative z-10"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.div>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export const ProjectCard = memo(ProjectCardComponent);
