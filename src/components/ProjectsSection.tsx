import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FolderKanban,
  MapPin,
  Calendar,
  CheckCircle2,
  Building2,
  ExternalLink,
  Sparkles,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { PROJECTS } from '../data/eaiplData';
import { ProjectCaseStudy } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectCaseStudy) => void;
  onOpenConsultation: (type?: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket') => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  onOpenConsultation,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterOptions = [
    'All',
    'Auditorium',
    'Government',
    'Education',
    'Healthcare',
    'Corporate',
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.clientType === activeFilter);

  return (
    <section id="projects" className="py-16 sm:py-24 bg-white text-slate-900 font-sans border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-[#0B132B] text-xs font-bold uppercase tracking-wider mb-3">
              <FolderKanban className="w-3.5 h-3.5 text-[#C59B27]" />
              Verified Execution Track Record
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B132B]">
              Featured Turnkey Case Studies
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2 max-w-2xl">
              Inspect real-world engineering projects executed by EAIPL, complete with measured acoustic performance metrics, CAD drawings, and deployed OEM technology stacks.
            </p>
          </div>

          <button
            onClick={() => onOpenConsultation('Site Survey')}
            className="px-5 py-2.5 bg-[#0B132B] hover:bg-slate-900 text-white font-bold text-xs sm:text-sm rounded-lg transition-all shadow-md flex items-center gap-2 shrink-0 self-start md:self-auto"
          >
            <span>Request Site Survey for Your Facility</span>
            <ArrowRight className="w-4 h-4 text-[#C59B27]" />
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-slate-100 pb-4">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">Filter Sector:</span>
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeFilter === filter
                  ? 'bg-[#0B132B] text-white shadow'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div>
                  {/* Card Image Frame */}
                  <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#C59B27] text-slate-950">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1 font-semibold text-slate-200">
                        <MapPin className="w-3.5 h-3.5 text-[#C59B27]" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1 font-semibold text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-[#C59B27]" />
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 space-y-3">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5 text-[#C59B27]" />
                      {project.clientName}
                    </div>

                    <h3 className="text-base font-bold text-[#0B132B] line-clamp-2 leading-snug group-hover:text-amber-700 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Impact Metric snippet */}
                    {project.impactMetrics && project.impactMetrics.length > 0 && (
                      <div className="p-2.5 bg-white rounded-lg border border-slate-200 text-xs text-slate-800 space-y-1">
                        <div className="flex items-center gap-1 text-[10px] font-bold text-[#C59B27] uppercase tracking-wider">
                          <Sparkles className="w-3 h-3" />
                          Key Impact Measured
                        </div>
                        <div className="font-medium text-slate-700 line-clamp-1">
                          {project.impactMetrics[0]}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between mt-2">
                  <div className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Turnkey Handover
                  </div>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="px-3.5 py-1.5 bg-[#0B132B] hover:bg-slate-900 text-white font-semibold text-xs rounded-md transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Inspect Case Study</span>
                    <ExternalLink className="w-3 h-3 text-[#C59B27]" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
