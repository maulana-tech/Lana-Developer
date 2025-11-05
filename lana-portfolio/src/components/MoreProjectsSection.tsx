'use client';

import { Project } from '@/lib/projects';
import { ProjectsGrid } from '@/components/ProjectsGrid';
import { useState, memo, useCallback, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

interface MoreProjectsSectionProps {
  projects: Project[];
}

const MoreProjectsSectionComponent = ({ projects }: MoreProjectsSectionProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  
  const totalPages = useMemo(() => Math.ceil(projects.length / projectsPerPage), [projects.length]);
  
  const { currentProjects, indexOfFirstProject, indexOfLastProject } = useMemo(() => {
    const indexOfLast = currentPage * projectsPerPage;
    const indexOfFirst = indexOfLast - projectsPerPage;
    return {
      currentProjects: projects.slice(indexOfFirst, indexOfLast),
      indexOfFirstProject: indexOfFirst,
      indexOfLastProject: indexOfLast
    };
  }, [currentPage, projects]);
  
  const goToPage = useCallback((page: number) => {
    setCurrentPage(page);
    document.getElementById('more-projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);
  
  const goToPrevious = useCallback(() => {
    if (currentPage > 1) goToPage(currentPage - 1);
  }, [currentPage, goToPage]);
  
  const goToNext = useCallback(() => {
    if (currentPage < totalPages) goToPage(currentPage + 1);
  }, [currentPage, totalPages, goToPage]);
  
  const pageNumbers = useMemo(() => Array.from({ length: totalPages }, (_, i) => i + 1), [totalPages]);

  if (projects.length === 0) {
    return null;
  }

  return (
    <div id="more-projects" className="mt-32 scroll-mt-24">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          <h2 className="text-3xl md:text-4xl font-bold">More Projects</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto">
          Explore the rest of my work and side projects
        </p>
      </div>
      
      {/* Projects Grid */}
      <div key={currentPage}>
        <ProjectsGrid projects={currentProjects} />
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
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
            {pageNumbers.map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "ghost"}
                size="icon"
                onClick={() => goToPage(page)}
                className={`w-10 h-10 rounded-lg transition-all duration-200 ${
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
        </div>
      )}

      {/* Page Info */}
      {totalPages > 1 && (
        <div className="mt-6 text-center text-sm text-muted-foreground">
          Showing {indexOfFirstProject + 1} - {Math.min(indexOfLastProject, projects.length)} of {projects.length} projects
        </div>
      )}
    </div>
  );
};

export const MoreProjectsSection = memo(MoreProjectsSectionComponent);
