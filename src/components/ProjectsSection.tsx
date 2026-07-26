import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FolderKanban,
  MapPin,
  ArrowRight
} from 'lucide-react';
import { PROJECTS } from '../data/eaiplData';
import { ProjectCaseStudy } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectCaseStudy) => void;
  onOpenConsultation: (type?: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket') => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
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
    <section id="projects" className="py-16 sm:py-20 bg-white text-[#0F172A] font-sans border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#1D4ED8] text-xs font-bold uppercase tracking-wider border border-[#BFDBFE]">
            <FolderKanban className="w-3.5 h-3.5" />
            Project Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">
            Turnkey Project Portfolio
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Verified execution records for state legislative halls, university auditoriums, and high-security command centers.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeFilter === filter
                  ? 'bg-[#1570EF] text-white shadow-2xs font-bold'
                  : 'bg-[#F8FAFC] text-[#475569] border border-[#CBD5E1] hover:bg-[#E2E8F0] hover:text-[#0F172A]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Simplified Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] overflow-hidden hover:border-[#1570EF]/40 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Project Image */}
                  <div className="relative aspect-16/10 bg-[#0F172A] overflow-hidden">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/90 text-[#0F172A] shadow-2xs">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content: Title & Location */}
                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#1570EF] transition-colors leading-snug line-clamp-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-[#64748B]">
                      <MapPin className="w-3.5 h-3.5 text-[#1570EF]" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>

                {/* View Details Button */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="w-full py-2 px-3 rounded-lg bg-white hover:bg-[#1570EF] hover:text-white border border-[#CBD5E1] hover:border-[#1570EF] text-xs font-bold text-[#0F172A] transition-all flex items-center justify-center gap-2 shadow-2xs"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
