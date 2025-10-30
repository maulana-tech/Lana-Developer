'use client';

import { Project } from '@/lib/projects';
import { memo } from 'react';
import { motion } from 'framer-motion';
import { IconBrandGithub, IconExternalLink, IconSparkles } from '@tabler/icons-react';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { Button } from '@/components/ui/button';

interface TopProjectsProps {
  projects: Project[];
}

const ProjectBadge = memo(({ index }: { index: number }) => (
  <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-lg shadow-lg backdrop-blur-sm">
    #{index + 1}
  </div>
));
ProjectBadge.displayName = 'ProjectBadge';

const ProjectLinks = memo(({ project, size = 'md' }: { project: Project; size?: 'sm' | 'md' }) => {
  const buttonSize = size === 'sm' ? 'h-10 w-10' : 'h-12 w-12';
  const iconSize = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';
  
  return (
    <div className="flex gap-2">
      {project.github && (
        <Button
          size="icon"
          variant="secondary"
          asChild
          className={`${buttonSize} rounded-full shadow-xl backdrop-blur-md bg-background/90 hover:bg-background will-change-transform`}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View GitHub repository"
          >
            <IconBrandGithub className={iconSize} />
          </a>
        </Button>
      )}
      {project.link && (
        <Button
          size="icon"
          variant="default"
          asChild
          className={`${buttonSize} rounded-full shadow-xl will-change-transform`}
        >
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View live demo"
          >
            <IconExternalLink className={iconSize} />
          </a>
        </Button>
      )}
    </div>
  );
});
ProjectLinks.displayName = 'ProjectLinks';

export function TopProjects({ projects }: TopProjectsProps) {
  if (!projects || !Array.isArray(projects) || projects.length === 0) {
    return null;
  }

  const topProjects = projects.slice(0, 6);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Optimized Background */}
      <div className="absolute inset-0 -z-10 will-change-transform">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="relative">
              <IconSparkles className="w-6 h-6 text-primary animate-pulse" />
              <div className="absolute inset-0 w-6 h-6 bg-primary/20 rounded-full blur-md animate-pulse" />
            </div>
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Top Projects Showcase</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
            Featured Work
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl">
            Explore my best projects showcasing modern technologies and creative problem-solving
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[280px]">
          {topProjects.map((project, index) => {
            // Bento Grid spans - varied sizes
            const gridSpan = index === 0 ? 'lg:col-span-2 lg:row-span-2' : 
                           index === 1 ? 'lg:col-span-2 lg:row-span-1' :
                           index === 2 ? 'lg:col-span-2 lg:row-span-1' :
                           index === 3 ? 'lg:col-span-2 lg:row-span-2' :
                           'lg:col-span-2 lg:row-span-1';
            
            const isLarge = index === 0 || index === 3;
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className={`${gridSpan} group`}
              >
                <div className="relative h-full overflow-hidden rounded-2xl border-2 border-border hover:border-foreground/30 transition-all duration-500 bg-gradient-to-br from-card via-card/95 to-card/90 shadow-lg hover:shadow-2xl will-change-transform">
                  <ProjectBadge index={index} />
                  
                  {/* Image Background */}
                  <div className="absolute inset-0">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      width={isLarge ? 800 : 600}
                      height={isLarge ? 800 : 400}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 will-change-transform"
                      fallbackSrc={`https://placehold.co/${isLarge ? '800x800' : '600x400'}/e5e7eb/6b7280?text=Project`}
                      loading={index === 0 ? "eager" : "lazy"}
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20 opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
                  </div>

                  {/* Floating Actions */}
                  <div className="absolute top-20 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <ProjectLinks project={project} size={isLarge ? 'md' : 'sm'} />
                  </div>

                  {/* Content */}
                  <div className={`absolute inset-0 flex flex-col justify-end p-6 ${isLarge ? 'lg:p-8' : ''}`}>
                    <div className="space-y-3">
                      {/* Type Badge */}
                      <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-lg border border-primary/20 backdrop-blur-sm">
                        {project.type}
                      </div>

                      {/* Title */}
                      <h3 className={`font-bold group-hover:text-primary transition-colors duration-300 ${isLarge ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'} line-clamp-2`}>
                        {project.title}
                      </h3>

                      {/* Description - only show on large cards */}
                      {isLarge && (
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                          {project.description}
                        </p>
                      )}

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, isLarge ? 4 : 3).map((tag, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-0.5 bg-muted/80 backdrop-blur-sm text-foreground text-xs font-medium rounded border border-border/50"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > (isLarge ? 4 : 3) && (
                          <span className="px-2.5 py-0.5 text-muted-foreground text-xs">
                            +{project.tags.length - (isLarge ? 4 : 3)}
                          </span>
                        )}
                      </div>

                      {/* Action Links - only on large cards */}
                      {isLarge && (
                        <div className="flex gap-2 pt-2">
                          {project.link && (
                            <Button size="sm" asChild className="backdrop-blur-sm">
                              <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <IconExternalLink className="w-4 h-4 mr-1.5" />
                                Demo
                              </a>
                            </Button>
                          )}
                          {project.github && (
                            <Button size="sm" variant="outline" asChild className="backdrop-blur-sm">
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <IconBrandGithub className="w-4 h-4 mr-1.5" />
                                Code
                              </a>
                            </Button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
