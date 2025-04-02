'use client';

import { Project } from '@/lib/projects';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="overflow-hidden h-full">
        <div className="relative aspect-video overflow-hidden bg-secondary">
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={340}
            className="object-cover w-full h-full transition-transform group-hover:scale-105"
          />
        </div>
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href={`/portfolio/${project.id}`}>
                View Details
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                <IconBrandGithub size={18} />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="Live project">
                <IconExternalLink size={18} />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}