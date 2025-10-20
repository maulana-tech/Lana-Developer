// Dynamic imports optimization
export const dynamicImports = {
  ServicesSection: () => import('@/components/home/ServicesSection'),
  FeaturedProjectsSection: () => import('@/components/home/FeaturedProjectsSection'),
  CertificatesSection: () => import('@/components/home/CertificatesSection'),
  TechStack: () => import('@/components/TechStack'),
  CTASection: () => import('@/components/home/CTASection'),
  GitHubActivity: () => import('@/components/GitHubActivity'),
};
