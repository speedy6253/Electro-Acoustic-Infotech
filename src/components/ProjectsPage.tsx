import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Briefcase,
  MapPin,
  CheckCircle2,
  Clock,
  Search,
  X,
  ExternalLink,
  ShieldCheck,
  FileText,
  Building,
  SlidersHorizontal,
  ChevronRight,
  Layers,
  Award
} from 'lucide-react';
import { PROJECTS } from '../data/eaiplData';
import { ProjectCaseStudy } from '../types';
import { CompanyHeaderBrand } from './CompanyHeaderBrand';
import { SocialVideoEmbed } from './SocialVideoEmbed';
import { PrestigiousClientsGallery } from './PrestigiousClientsGallery';
import { SearchableClientDirectory } from './SearchableClientDirectory';
import { ProjectDetailModal } from './ProjectDetailModal';

interface ProjectsPageProps {
  onOpenConsultation: (type?: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket') => void;
}

const CATEGORY_TABS = [
  'All',
  'Government',
  'Conference',
  'Auditorium',
  'Corporate',
  'Hotels',
  'Home Automation',
  'Clubs & Restaurants',
  'Residential',
] as const;

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onOpenConsultation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  const filteredProjects = PROJECTS.filter((proj) => {
    const search = (searchTerm || '').toLowerCase();
    const cat = (selectedCategory || '').toLowerCase();

    const matchesSearch =
      (proj.title || '').toLowerCase().includes(search) ||
      (proj.location || '').toLowerCase().includes(search) ||
      (proj.summary || '').toLowerCase().includes(search) ||
      (proj.solution || '').toLowerCase().includes(search) ||
      (proj.clientName || '').toLowerCase().includes(search);

    const matchesCategory =
      selectedCategory === 'All' ||
      (proj.category && proj.category.toLowerCase() === cat) ||
      (proj.sector && proj.sector.toLowerCase().includes(cat));

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-slate-50 text-slate-900 font-sans min-h-screen">
      {/* Hero Section */}
      <section className="bg-white border-b border-emerald-100 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <CompanyHeaderBrand className="mb-3" />

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
                <span>Brochure Track Record & Landmark Projects</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                Project Portfolio Case Studies
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                Class-I Turnkey projects completed across West Bengal Assembly, Calcutta High Court, UGC Delhi, Rabindra Sadan, Biswa Bangla Convention Center, Coal India, SBI, ITC Hotels, Taj Bengal, and ultra-luxury smart residences.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenConsultation('RFP')}
                className="px-6 py-3.5 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-all shadow-2xs flex items-center justify-center gap-2"
              >
                <span>Submit Tender BOQ / RFP</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Search & 8 Category Tabs Filter */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-emerald-200 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search projects, client names, equipment, or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
              />
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
              <SlidersHorizontal className="w-4 h-4 text-emerald-600" />
              <span>Showing <strong className="text-slate-900">{filteredProjects.length}</strong> Completed Projects</span>
            </div>
          </div>

          {/* 8 Explicit Brochure Categories */}
          <div className="pt-3 border-t border-slate-100">
            <div className="text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
              Filter By Project Category:
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
              {CATEGORY_TABS.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:border-emerald-400 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {proj.type === 'facebook-reel' || proj.mediaType === 'facebook-reel' || proj.reelUrl ? (
                  <div className="p-3 bg-slate-900 flex flex-col items-center justify-center relative">
                    <div className="w-full max-w-[320px]">
                      <SocialVideoEmbed
                        reelUrl={proj.reelUrl!}
                        title={proj.title}
                        aspectRatio="portrait"
                      />
                    </div>
                    <div className="absolute top-5 right-5 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-xs border border-white/40 text-[11px] font-bold text-slate-900 shadow-xs flex items-center gap-1 z-20">
                      <MapPin className="w-3 h-3 text-emerald-600" />
                      <span>{proj.location}</span>
                    </div>
                  </div>
                ) : (
                  <div className="h-48 overflow-hidden bg-slate-100 relative">
                    <img
                      src={proj.heroImage || '/assets/hero/homepage-hero.jpg'}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-xs border border-white/40 text-[11px] font-bold text-slate-900 shadow-xs flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-600" />
                      <span>{proj.location}</span>
                    </div>

                    <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-slate-900/80 text-white text-[11px] font-semibold backdrop-blur-xs">
                      {proj.clientName}
                    </div>
                  </div>
                )}

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {proj.category}
                    </span>
                    <span className="font-semibold text-slate-500">
                      {proj.year || '2024'}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {proj.summary}
                  </p>

                  {/* Installed OEM Hardware Chips */}
                  {proj.installedEquipment && proj.installedEquipment.length > 0 && (
                    <div className="pt-2 space-y-1.5 border-t border-slate-100">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                        <Layers className="w-3 h-3 text-emerald-600" />
                        Installed Brands & Tech:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {proj.installedEquipment.slice(0, 3).map((equip, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-[11px] font-medium text-slate-700"
                          >
                            {equip}
                          </span>
                        ))}
                        {proj.installedEquipment.length > 3 && (
                          <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-[10px] font-bold text-emerald-700">
                            +{proj.installedEquipment.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center gap-2">
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="flex-1 py-2 px-3 rounded-xl bg-emerald-50 border border-emerald-200 hover:bg-emerald-600 text-emerald-800 hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Read Case Study</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Prestigious Clients Gallery */}
        <PrestigiousClientsGallery />

        {/* Searchable Complete Client Directory */}
        <SearchableClientDirectory />
      </div>

      {/* Case Study Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenConsultation={() => onOpenConsultation('RFP')}
      />
    </div>
  );
};
