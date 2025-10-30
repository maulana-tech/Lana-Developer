import { getAllProjects } from '@/lib/projects';
import { TopProjects } from '@/components/TopProjects';
import { MoreProjectsSection } from '@/components/MoreProjectsSection';
import { PortfolioHeader } from '@/components/PortfolioHeader';

// Enable ISR with revalidation (1 hour)
export const revalidate = 3600;

// Generate metadata
export const metadata = {
  title: 'Portfolio - Muhammad Maulana F',
  description: 'Check out my recent projects showcasing my skills and expertise in web development, AI/ML, and more.',
};

export default async function PortfolioPage() {
  const allProjects = await getAllProjects();
  const topProjects = allProjects.slice(0, 6);
  const remainingProjects = allProjects.slice(6);

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <PortfolioHeader />
        <TopProjects projects={topProjects} />
        {remainingProjects.length > 0 && (
          <MoreProjectsSection projects={remainingProjects} />
        )}
      </div>
    </div>
  );
}