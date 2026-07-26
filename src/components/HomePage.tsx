import React from 'react';
import { Hero } from './Hero';
import { TrustStrip } from './TrustStrip';
import { AboutSection } from './AboutSection';
import { SolutionsSection } from './SolutionsSection';
import { IndustriesSection } from './IndustriesSection';
import { ProjectsSection } from './ProjectsSection';
import { ProcessSection } from './ProcessSection';
import { PartnersSection } from './PartnersSection';
import { TestimonialsSection } from './TestimonialsSection';
import { EnterpriseCTA } from './EnterpriseCTA';
import { FaqSection } from './FaqSection';
import { NavView } from './Header';
import { ProjectCaseStudy } from '../types';

interface HomePageProps {
  onOpenConsultation: (type?: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket') => void;
  onNavigate: (view: NavView, param?: string) => void;
  onSelectProject: (project: ProjectCaseStudy) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenConsultation,
  onNavigate,
  onSelectProject,
}) => {
  return (
    <main>
      {/* 1. Hero Section */}
      <Hero onOpenConsultation={onOpenConsultation} />

      {/* 2. Trust Strip */}
      <TrustStrip />

      {/* 3. About Section */}
      <AboutSection onOpenConsultation={onOpenConsultation} />

      {/* 4. Solutions Section */}
      <SolutionsSection
        onOpenConsultation={onOpenConsultation}
        onNavigate={onNavigate}
      />

      {/* 5. Industries Section */}
      <IndustriesSection
        onOpenConsultation={onOpenConsultation}
        onNavigate={onNavigate}
      />

      {/* 6. Featured Projects Showcase */}
      <ProjectsSection
        onSelectProject={onSelectProject}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 7. Engineering Process Section */}
      <ProcessSection onOpenConsultation={onOpenConsultation} />

      {/* 8. OEM Partners Section */}
      <PartnersSection onOpenConsultation={onOpenConsultation} />

      {/* 9. Testimonials & Client Trust */}
      <TestimonialsSection />

      {/* 10. Enterprise CTA */}
      <EnterpriseCTA onOpenConsultation={onOpenConsultation} />

      {/* 11. FAQ Knowledge Base */}
      <FaqSection />
    </main>
  );
};
