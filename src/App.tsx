import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
  useParams,
} from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Header, NavView } from './components/Header';
import { HomePage } from './components/HomePage';
import { SolutionsPage } from './components/SolutionsPage';
import { SolutionDetailPage } from './components/SolutionDetailPage';
import { IndustriesPage } from './components/IndustriesPage';
import { ProjectsPage } from './components/ProjectsPage';
import { MediaCentre } from './components/MediaCentre';
import { QualityPage } from './components/QualityPage';
import { CareersPage } from './components/CareersPage';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ProjectCaseStudy } from './types';

// Helper wrapper to extract solution slug parameter for SolutionDetailPage
function SolutionDetailPageWrapper({
  onOpenConsultation,
  onNavigate,
}: {
  onOpenConsultation: (type?: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket') => void;
  onNavigate: (view: NavView, param?: string) => void;
}) {
  const { slug } = useParams<{ slug: string }>();
  return (
    <SolutionDetailPage
      slug={slug || 'professional-audio'}
      onBackToSolutions={() => onNavigate('solutions')}
      onOpenConsultation={onOpenConsultation}
    />
  );
}

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [consultationModalType, setConsultationModalType] = useState<
    'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket'
  >('Consultation');

  const [selectedProjectModal, setSelectedProjectModal] = useState<ProjectCaseStudy | null>(null);

  // Derive active NavView for Header & Footer state from URL path
  const getCurrentView = (): NavView => {
    const path = location.pathname.toLowerCase();
    if (path.startsWith('/solutions/')) return 'solution-detail';
    if (path === '/solutions') return 'solutions';
    if (path === '/industries') return 'industries';
    if (path === '/projects') return 'projects';
    if (path === '/media') return 'media';
    if (path === '/quality') return 'quality';
    if (path === '/careers') return 'careers';
    if (path === '/contact') return 'contact';
    return 'home';
  };

  const currentView = getCurrentView();

  // Handle hash fallback backwards compatibility (e.g., #media, #contact)
  useEffect(() => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (hash) {
      if (hash === 'media') navigate('/media');
      else if (hash === 'contact') navigate('/contact');
      else if (hash === 'solutions') navigate('/solutions');
      else if (hash.startsWith('solutions/')) navigate(`/${hash}`);
      else if (hash === 'industries') navigate('/industries');
      else if (hash === 'projects') navigate('/projects');
      else if (hash === 'quality') navigate('/quality');
      else if (hash === 'careers') navigate('/careers');
    }
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleNavigate = (view: NavView, param?: string) => {
    if (view === 'solution-detail' && param) {
      navigate(`/solutions/${param}`);
    } else if (view === 'solutions') {
      navigate('/solutions');
    } else if (view === 'industries') {
      navigate('/industries');
    } else if (view === 'projects') {
      navigate('/projects');
    } else if (view === 'media') {
      navigate('/media');
    } else if (view === 'quality') {
      navigate('/quality');
    } else if (view === 'careers') {
      navigate('/careers');
    } else if (view === 'contact') {
      navigate('/contact');
    } else {
      navigate('/');
      if (param) {
        setTimeout(() => {
          const el = document.getElementById(param);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  const handleOpenConsultation = (
    type: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket' = 'Consultation'
  ) => {
    setConsultationModalType(type);
    setConsultationModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans flex flex-col justify-between selection:bg-[#1570EF] selection:text-white">
      <div>
        {/* Global Navigation Header */}
        <Header
          onOpenConsultation={handleOpenConsultation}
          currentView={currentView}
          onNavigate={handleNavigate}
        />

        {/* Dynamic Route Content with Smooth Page Transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
          >
            <Routes location={location}>
              <Route
                path="/"
                element={
                  <HomePage
                    onOpenConsultation={handleOpenConsultation}
                    onNavigate={handleNavigate}
                    onSelectProject={(project) => setSelectedProjectModal(project)}
                  />
                }
              />
              <Route
                path="/solutions"
                element={
                  <SolutionsPage
                    onOpenConsultation={handleOpenConsultation}
                    onNavigateSolution={(slug) => handleNavigate('solution-detail', slug)}
                  />
                }
              />
              <Route
                path="/solutions/:slug"
                element={
                  <SolutionDetailPageWrapper
                    onOpenConsultation={handleOpenConsultation}
                    onNavigate={handleNavigate}
                  />
                }
              />
              <Route
                path="/industries"
                element={
                  <IndustriesPage
                    onOpenConsultation={handleOpenConsultation}
                    onNavigateSolution={(slug) => handleNavigate('solution-detail', slug)}
                    onNavigateProjects={() => handleNavigate('projects')}
                  />
                }
              />
              <Route
                path="/projects"
                element={<ProjectsPage onOpenConsultation={handleOpenConsultation} />}
              />
              <Route
                path="/media"
                element={<MediaCentre onOpenConsultation={handleOpenConsultation} />}
              />
              <Route
                path="/quality"
                element={<QualityPage onOpenConsultation={handleOpenConsultation} />}
              />
              <Route
                path="/careers"
                element={<CareersPage onOpenConsultation={handleOpenConsultation} />}
              />
              <Route
                path="/contact"
                element={<ContactPage onOpenConsultation={handleOpenConsultation} />}
              />
              <Route
                path="*"
                element={
                  <HomePage
                    onOpenConsultation={handleOpenConsultation}
                    onNavigate={handleNavigate}
                    onSelectProject={(project) => setSelectedProjectModal(project)}
                  />
                }
              />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Global Corporate Footer */}
      <Footer
        onOpenConsultation={handleOpenConsultation}
        onNavigate={handleNavigate}
      />

      {/* Global Modals */}
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

export function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
