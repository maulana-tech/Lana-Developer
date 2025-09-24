'use client';

import { getProjectByIdSync, Project } from '@/lib/projects';
import { Button } from '@/components/ui/button';
import { IconBrandGithub, IconExternalLink, IconArrowLeft } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  
  useEffect(() => {
    const id = params.id as string;
    const projectData = getProjectByIdSync(id);
    
    if (projectData) {
      setProject(projectData);
    } else {
      router.push('/portfolio');
    }
  }, [params.id, router]);
  
  if (!project) {
    return <div className="container mx-auto px-4 py-20">Loading...</div>;
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <Button variant="ghost" size="sm" className="mb-8" asChild>
          <Link href="/portfolio">
            <IconArrowLeft size={16} className="mr-2" />
            Back to Portfolio
          </Link>
        </Button>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-secondary rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            
            <div className="flex flex-col">
              <p className="text-lg mb-6">{project.longDescription}</p>
              
              <div className="flex gap-4 mt-auto">
                <Button asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <IconExternalLink size={18} className="mr-2" />
                    View Live
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <IconBrandGithub size={18} className="mr-2" />
                    View Code
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.map((image, index) => (
              <div key={index} className="bg-secondary rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}