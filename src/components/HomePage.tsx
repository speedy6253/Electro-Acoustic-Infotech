import React from 'react';
import { Hero } from './Hero';
import { TrustStrip } from './TrustStrip';
import { AboutSection } from './AboutSection';
import { SolutionsSection } from './SolutionsSection';
import { IndustriesSection } from './IndustriesSection';
import { ProjectsSection } from './ProjectsSection';
import { PartnersSection } from './PartnersSection';
import { TestimonialsSection } from './TestimonialsSection';
import { EnterpriseCTA } from './EnterpriseCTA';
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
    <main className="space-y-0">
      {/* 1. Hero Banner */}
      <Hero onOpenConsultation={onOpenConsultation} />

      {/* 2. Company Overview (short version only) */}
      <AboutSection
        onOpenConsultation={onOpenConsultation}
        onNavigate={onNavigate}
      />

      {/* 3. Core Solutions / Products Preview */}
      <SolutionsSection
        previewOnly={true}
        onOpenConsultation={onOpenConsultation}
        onNavigate={onNavigate}
      />

      {/* 4. Featured Industries (preview only) */}
      <IndustriesSection
        previewOnly={true}
        onOpenConsultation={onOpenConsultation}
        onNavigate={onNavigate}
      />

      {/* 5. Featured Projects (4–6 projects only) */}
      <ProjectsSection
        previewOnly={true}
        onSelectProject={onSelectProject}
        onOpenConsultation={onOpenConsultation}
        onNavigate={onNavigate}
      />

      {/* 6. Why Choose EAIPL / Trust Indicators */}
      <TrustStrip />
      <TestimonialsSection />

      {/* 7. Major OEM Partners (preview) */}
      <PartnersSection
        previewOnly={true}
        onNavigate={onNavigate}
        onOpenConsultation={onOpenConsultation}
      />

      {/* 8. CTA (Request Consultation / Contact) */}
      <EnterpriseCTA onOpenConsultation={onOpenConsultation} />
    </main>
  );
};
