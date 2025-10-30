'use client';

import { Project } from '@/lib/projects';
import { ProjectsGrid } from '@/components/ProjectsGrid';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

interface MoreProjectsSectionProps {
  projects: Project[];
}

export function MoreProjectsSection({ projects }: MoreProjectsSectionProps) {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  
  // Calculate current projects to display
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  
  // Pagination handlers
  const goToPage = (page: number) => {
    setCurrentPage(page);
    // Smooth scroll to More Projects section
    document.getElementById('more-projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  
  const goToPrevious = () => {
    if (currentPage > 1) goToPage(currentPage - 1);
  };
  
  const goToNext = () => {
    if (currentPage < totalPages) goToPage(currentPage + 1);
  };

  if (projects.length === 0) {
    return null;
  }

  return (
    <div id="more-projects" className="mt-32 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          <h2 className="text-3xl md:text-4xl font-bold">More Projects</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto">
          Explore the rest of my work and side projects
        </p>
      </motion.div>
      
      {/* Projects Grid */}
      <motion.div
        key={currentPage}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <ProjectsGrid projects={currentProjects} />
      </motion.div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Previous Button */}
          <Button
            variant="outline"
            size="default"
            onClick={goToPrevious}
            disabled={currentPage === 1}
            className="min-w-[120px] group"
          >
            <IconChevronLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Previous
          </Button>

          {/* Page Numbers */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "ghost"}
                size="icon"
                onClick={() => goToPage(page)}
                className={`w-10 h-10 rounded-lg transition-all duration-300 ${
                  currentPage === page 
                    ? 'scale-110 shadow-lg' 
                    : 'hover:bg-muted'
                }`}
              >
                {page}
              </Button>
            ))}
          </div>

          {/* Next Button */}
          <Button
            variant="outline"
            size="default"
            onClick={goToNext}
            disabled={currentPage === totalPages}
            className="min-w-[120px] group"
          >
            Next
            <IconChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      )}

      {/* Page Info */}
      {totalPages > 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 text-center text-sm text-muted-foreground"
        >
          Showing {indexOfFirstProject + 1} - {Math.min(indexOfLastProject, projects.length)} of {projects.length} projects
        </motion.div>
      )}
    </div>
  );
}
