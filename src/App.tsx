import React, { useState, useEffect } from 'react';
import { Header, NavView } from './components/Header';
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
import { MediaCentre } from './components/MediaCentre';
import { ContactPage } from './components/ContactPage';
import { SolutionsPage } from './components/SolutionsPage';
import { SolutionDetailPage } from './components/SolutionDetailPage';
import { IndustriesPage } from './components/IndustriesPage';
import { ProjectsPage } from './components/ProjectsPage';
import { ConsultationModal } from './components/ConsultationModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ProjectCaseStudy } from './types';

export function App() {
  const [currentView, setCurrentView] = useState<NavView>('home');
  const [selectedSolutionSlug, setSelectedSolutionSlug] = useState<string>('professional-audio');
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [consultationModalType, setConsultationModalType] = useState<
    'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket'
  >('Consultation');

  const [selectedProjectModal, setSelectedProjectModal] = useState<ProjectCaseStudy | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = (window.location.hash || '').toLowerCase();
      if (hash === '#media') {
        setCurrentView('media');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#contact') {
        setCurrentView('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.startsWith('#solutions/')) {
        const slug = hash.replace('#solutions/', '');
        if (slug) {
          setSelectedSolutionSlug(slug);
          setCurrentView('solution-detail');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          setCurrentView('solutions');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else if (hash === '#solutions') {
        setCurrentView('solutions');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#industries') {
        setCurrentView('industries');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#projects') {
        setCurrentView('projects');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (view: NavView, param?: string) => {
    setCurrentView(view);
    if (view === 'solution-detail' && param) {
      setSelectedSolutionSlug(param);
      window.location.hash = `solutions/${param}`;
    } else if (view === 'home') {
      window.location.hash = '';
      if (param) {
        setTimeout(() => {
          const el = document.getElementById(param);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.location.hash = view;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenConsultation = (
    type: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket' = 'Consultation'
  ) => {
    setConsultationModalType(type);
    setConsultationModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans selection:bg-[#1570EF] selection:text-white">
      {/* 1. Sticky Header */}
      <Header
        onOpenConsultation={handleOpenConsultation}
        currentView={currentView}
        onNavigate={handleNavigate}
      />

      {/* View Switcher */}
      {currentView === 'media' ? (
        <main>
          <MediaCentre onOpenConsultation={handleOpenConsultation} />
        </main>
      ) : currentView === 'contact' ? (
        <main>
          <ContactPage onOpenConsultation={handleOpenConsultation} />
        </main>
      ) : currentView === 'solutions' ? (
        <main>
          <SolutionsPage
            onOpenConsultation={handleOpenConsultation}
            onNavigateSolution={(slug) => handleNavigate('solution-detail', slug)}
          />
        </main>
      ) : currentView === 'solution-detail' ? (
        <main>
          <SolutionDetailPage
            slug={selectedSolutionSlug}
            onBackToSolutions={() => handleNavigate('solutions')}
            onOpenConsultation={handleOpenConsultation}
          />
        </main>
      ) : currentView === 'industries' ? (
        <main>
          <IndustriesPage
            onOpenConsultation={handleOpenConsultation}
            onNavigateSolution={(slug) => handleNavigate('solution-detail', slug)}
            onNavigateProjects={() => handleNavigate('projects')}
          />
        </main>
      ) : currentView === 'projects' ? (
        <main>
          <ProjectsPage onOpenConsultation={handleOpenConsultation} />
        </main>
      ) : (
        <main>
          {/* 2. Hero Section */}
          <Hero onOpenConsultation={handleOpenConsultation} />

          {/* 3. Trust Strip */}
          <TrustStrip />

          {/* 4. About Section */}
          <AboutSection onOpenConsultation={handleOpenConsultation} />

          {/* 5. Solutions Section */}
          <SolutionsSection
            onOpenConsultation={handleOpenConsultation}
            onNavigate={handleNavigate}
          />

          {/* 6. Industries Section */}
          <IndustriesSection
            onOpenConsultation={handleOpenConsultation}
            onNavigate={handleNavigate}
          />

          {/* 7. Featured Projects Section */}
          <ProjectsSection
            onSelectProject={(project) => setSelectedProjectModal(project)}
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
      )}

      {/* 12. Corporate Light Footer */}
      <Footer
        onOpenConsultation={handleOpenConsultation}
        onNavigate={handleNavigate}
      />

      {/* Modals */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        initialType={consultationModalType}
      />

      <ProjectDetailModal
        project={selectedProjectModal}
        onClose={() => setSelectedProjectModal(null)}
        onOpenConsultation={() => handleOpenConsultation('RFP')}
      />
    </div>
  );
}

export default App;
