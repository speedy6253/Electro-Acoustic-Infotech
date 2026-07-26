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
  ChevronRight
} from 'lucide-react';
import { PROJECT_CASE_STUDIES } from '../data/eaiplData';
import { ProjectCaseStudy } from '../types';
import { CompanyHeaderBrand } from './CompanyHeaderBrand';

interface ProjectsPageProps {
  onOpenConsultation: (type?: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket') => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onOpenConsultation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  const sectors = ['All', 'Government & Public Sector', 'Defense & Smart Cities', 'Corporate', 'Healthcare', 'Education'];
  const statuses = ['All', 'Completed', 'In Progress', 'AMC Managed'];

  const filteredProjects = PROJECT_CASE_STUDIES.filter((proj) => {
    const search = (searchTerm || '').toLowerCase();
    const sec = (selectedSector || '').toLowerCase();

    const matchesSearch =
      (proj.title || '').toLowerCase().includes(search) ||
      (proj.location || '').toLowerCase().includes(search) ||
      (proj.summary || '').toLowerCase().includes(search) ||
      (proj.solution || '').toLowerCase().includes(search);

    const matchesSector =
      selectedSector === 'All' ||
      (proj.clientType || '').toLowerCase().includes(sec) ||
      (proj.sector && (proj.sector || '').toLowerCase().includes(sec));

    const matchesStatus =
      selectedStatus === 'All' ||
      (selectedStatus === 'Completed' && proj.status === 'Completed') ||
      (selectedStatus === 'In Progress' && proj.status === 'In Execution') ||
      (selectedStatus === 'AMC Managed' && proj.amcActive);

    return matchesSearch && matchesSector && matchesStatus;
  });

  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] font-sans min-h-screen">
      {/* Hero Section */}
      <section className="bg-white border-b border-[#E2E8F0] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <CompanyHeaderBrand className="mb-3" />

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1D4ED8] text-xs font-semibold uppercase tracking-wider">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Class-I Turnkey Track Record</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
                Project Portfolio & Case Studies
              </h1>

              <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-2xl">
                Discover our landmark turnkey installations delivered across government secretariats, defense command centers, high-court complexes, and corporate auditoriums.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenConsultation('RFP')}
                className="px-6 py-3 rounded-lg bg-[#1570EF] text-white text-xs font-bold hover:bg-[#1258C5] transition-all shadow-2xs flex items-center justify-center gap-2"
              >
                <span>Submit RFP / BOQ</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Search & Filter Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-xl border border-[#E2E8F0] shadow-2xs space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
              <input
                type="text"
                placeholder="Search projects by location, technology, or client..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1570EF] transition-all"
              />
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#64748B]">
              <SlidersHorizontal className="w-4 h-4 text-[#1570EF]" />
              <span>Showing <strong className="text-[#0F172A]">{filteredProjects.length}</strong> Executed Projects</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2 border-t border-[#F1F5F9]">
            {/* Sector Filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none w-full">
              <span className="text-[11px] font-bold text-[#64748B] uppercase shrink-0">Sectors:</span>
              {sectors.map((sec) => (
                <button
                  key={sec}
                  onClick={() => setSelectedSector(sec)}
                  className={`px-3 py-1 rounded-md text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedSector === sec
                      ? 'bg-[#1570EF] text-white'
                      : 'bg-[#F1F5F9] text-[#475569] hover:bg-[#E2E8F0]'
                  }`}
                >
                  {sec}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-2xs hover:border-[#1570EF]/50 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="h-48 overflow-hidden bg-[#F1F5F9] relative">
                  <img
                    src={proj.heroImage}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-xs border border-white/40 text-[11px] font-bold text-[#0F172A] shadow-xs flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#1570EF]" />
                    <span>{proj.location}</span>
                  </div>

                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-[#0F172A]/80 text-white text-[11px] font-semibold backdrop-blur-xs">
                    {proj.clientType}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-[11px] font-bold text-[#1570EF] uppercase tracking-wider">
                    <span>{proj.category}</span>
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#1570EF] transition-colors leading-snug">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-[#475569] leading-relaxed line-clamp-3">
                    {proj.summary}
                  </p>

                  <div className="pt-2 space-y-1">
                    <span className="text-[11px] font-bold text-[#64748B] block uppercase">Deployed Solution:</span>
                    <span className="text-xs font-semibold text-[#0F172A]">{proj.solution}</span>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-[#F1F5F9] flex items-center gap-2">
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="flex-1 py-2 px-3 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] hover:bg-[#1570EF] text-[#1D4ED8] hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Read Case Study</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#E2E8F0] shadow-2xl p-6 sm:p-8 space-y-6 relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#F1F5F9] text-[#64748B] hover:text-[#0F172A] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#1D4ED8] text-xs font-bold uppercase">
                  <span>{selectedProject.clientType}</span>
                  <span>•</span>
                  <span>{selectedProject.location}</span>
                </div>
                <h2 className="text-2xl font-extrabold text-[#0F172A]">{selectedProject.title}</h2>
              </div>

              <div className="rounded-xl overflow-hidden h-64 bg-[#F1F5F9]">
                <img
                  src={selectedProject.heroImage}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 text-xs text-[#334155] leading-relaxed">
                <div>
                  <h4 className="font-bold text-sm text-[#0F172A] mb-1">Project Scope & Description:</h4>
                  <p>{selectedProject.summary}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#F8FAFC] p-4 rounded-xl border border-[#E2E8F0]">
                  <div>
                    <span className="font-bold text-[#0F172A] block mb-1">Deployed Solution:</span>
                    <span>{selectedProject.solution}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#0F172A] block mb-1">Completion Year:</span>
                    <span>{selectedProject.year || '2023'}</span>
                  </div>
                </div>

                {selectedProject.keyHighlights && (
                  <div>
                    <h4 className="font-bold text-sm text-[#0F172A] mb-2">Key Engineering Highlights:</h4>
                    <ul className="space-y-1.5">
                      {selectedProject.keyHighlights.map((hl, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] flex justify-end gap-3">
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenConsultation('RFP');
                  }}
                  className="px-6 py-2.5 rounded-lg bg-[#1570EF] text-white text-xs font-bold hover:bg-[#1258C5] transition-all"
                >
                  Request Similar Implementation RFP
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
