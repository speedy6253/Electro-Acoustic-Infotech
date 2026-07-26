import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { AboutSection } from './components/AboutSection';
import { SolutionsSection } from './components/SolutionsSection';
import { IndustriesSection } from './components/IndustriesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProcessSection } from './components/ProcessSection';
import { PartnersSection } from './components/PartnersSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { EnterpriseCTA } from './components/EnterpriseCTA';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ProjectCaseStudy } from './types';

export function App() {
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [consultationModalType, setConsultationModalType] = useState<
    'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket'
  >('Consultation');

  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  const handleOpenConsultation = (
    type: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket' = 'Consultation'
  ) => {
    setConsultationModalType(type);
    setConsultationModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-[#C59B27] selection:text-slate-950">
      {/* 1. Sticky Header & Top Bar */}
      <Header onOpenConsultation={handleOpenConsultation} />

      {/* Main Homepage Flow */}
      <main>
        {/* 2. Hero Section */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* 3. Trust Strip */}
        <TrustStrip />

        {/* 4. About Section */}
        <AboutSection onOpenConsultation={handleOpenConsultation} />

        {/* 5. Solutions Section */}
        <SolutionsSection onOpenConsultation={handleOpenConsultation} />

        {/* 6. Industries Section */}
        <IndustriesSection onOpenConsultation={handleOpenConsultation} />

        {/* 7. Featured Projects Section */}
        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 8. Engineering Process Section */}
        <ProcessSection onOpenConsultation={handleOpenConsultation} />

        {/* 9. OEM Partners Section */}
        <PartnersSection onOpenConsultation={handleOpenConsultation} />

        {/* 10. Testimonials & Client Trust */}
        <TestimonialsSection />

        {/* 11. Enterprise CTA */}
        <EnterpriseCTA onOpenConsultation={handleOpenConsultation} />

        {/* FAQ Knowledge Base */}
        <FaqSection />
      </main>

      {/* 12. Enterprise Footer */}
      <Footer onOpenConsultation={handleOpenConsultation} />

      {/* Modals */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        initialType={consultationModalType}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenConsultation={() => handleOpenConsultation('RFP')}
      />
    </div>
  );
}

export default App;
