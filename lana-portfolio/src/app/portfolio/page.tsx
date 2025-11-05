import { getAllProjects } from '@/lib/projects';
import { TopProjects } from '@/components/TopProjects';
import { MoreProjectsSection } from '@/components/MoreProjectsSection';
import { PortfolioHeader } from '@/components/PortfolioHeader';
import { ParallaxSection, FadeInScroll } from '@/components/ParallaxSection';

// Enable ISR with revalidation (5 minutes for faster updates)
export const revalidate = 300;

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
        <FadeInScroll>
          <PortfolioHeader />
        </FadeInScroll>
        <ParallaxSection speed={0.3}>
          <TopProjects projects={topProjects} />
        </ParallaxSection>
        {remainingProjects.length > 0 && (
          <FadeInScroll>
            <MoreProjectsSection projects={remainingProjects} />
          </FadeInScroll>
        )}
      </div>
    </div>
  );
}