import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  MapPin,
  Calendar,
  CheckCircle2,
  Building2,
  Award,
  Layers,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { ProjectCaseStudy } from '../types';
import { SocialVideoEmbed } from './SocialVideoEmbed';

interface ProjectDetailModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenConsultation,
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl bg-white rounded-xl shadow-xl border border-[#D7E8F3] overflow-hidden my-8"
        >
          {/* Header Media Frame */}
          {project.type === 'facebook-reel' || project.mediaType === 'facebook-reel' || project.reelUrl ? (
            <div className="relative bg-[#0F172A] p-6 sm:p-8 flex flex-col items-center justify-center border-b border-[#334155]">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur-md transition-colors z-30 border border-white/20"
                aria-label="Close case study modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full max-w-[360px] my-2">
                <SocialVideoEmbed
                  reelUrl={project.reelUrl!}
                  title={project.title}
                  aspectRatio="portrait"
                />
              </div>

              <div className="w-full mt-4 text-white text-left">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1570EF] text-white shadow-2xs">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white border border-white/20">
                    {project.clientType}
                  </span>
                  {project.completionBadge && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-600 text-white flex items-center gap-1 shadow-2xs">
                      <CheckCircle2 className="w-3 h-3" />
                      {project.completionBadge}
                    </span>
                  )}
                </div>

                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
                  {project.title}
                </h2>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-200">
                  <div className="flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-[#2E90FA]" />
                    <span>{project.clientName}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#2E90FA]" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#2E90FA]" />
                    <span>Executed in {project.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative h-64 sm:h-80 w-full bg-[#0F172A] overflow-hidden">
              <img
                src={project.heroImage!}
                alt={project.title}
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/60 to-transparent" />

              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-md transition-colors z-10 border border-white/20"
                aria-label="Close case study modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1570EF] text-white shadow-2xs">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white border border-white/20">
                    {project.clientType}
                  </span>
                  {project.completionBadge && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-600 text-white flex items-center gap-1 shadow-2xs">
                      <CheckCircle2 className="w-3 h-3" />
                      {project.completionBadge}
                    </span>
                  )}
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                  {project.title}
                </h2>

                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-200">
                  <div className="flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-[#2E90FA]" />
                    <span>{project.clientName}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#2E90FA]" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#2E90FA]" />
                    <span>Executed in {project.year}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Body Details */}
          <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-6 bg-white">
            {/* Executive Summary */}
            <div>
              <h3 className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-2">
                Executive Overview
              </h3>
              <p className="text-[#0F172A] text-sm sm:text-base leading-relaxed">
                {project.summary}
              </p>
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-[#EDF8FB] rounded-xl border border-[#D7E8F3]">
              <div>
                <h4 className="text-sm font-bold text-[#0F172A] flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Technical Challenge
                </h4>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#0F172A] flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  EAIPL Integrated Engineering Solution
                </h4>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Impact Metrics */}
            <div>
              <h3 className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-3">
                Measured Key Performance Indicators
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.impactMetrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-[#F7FCFF] text-[#0F172A] rounded-lg border border-[#D7E8F3]"
                  >
                    <div className="flex items-center gap-2 text-[#1570EF] text-xs font-bold mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      Metric 0{idx + 1}
                    </div>
                    <p className="text-xs font-medium text-[#475569]">{metric}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Installed OEM Hardware Stack */}
            <div>
              <h3 className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-3">
                Deployed OEM Hardware & Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.installedEquipment.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-[#EDF8FB] text-[#0F172A] rounded-lg text-xs font-semibold border border-[#D7E8F3] flex items-center gap-1.5"
                  >
                    <Layers className="w-3.5 h-3.5 text-[#1570EF]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Acoustic Specs if available */}
            {project.acousticsSpecs && (
              <div className="p-4 bg-[#EDF8FB] border border-[#D7E8F3] rounded-lg text-xs text-[#0F172A] flex items-start gap-2">
                <Award className="w-4 h-4 text-[#1570EF] shrink-0 mt-0.5" />
                <div>
                  <strong>Electro-Acoustic Parameters:</strong> {project.acousticsSpecs}
                </div>
              </div>
            )}
          </div>

          {/* Modal Actions Footer */}
          <div className="bg-[#EDF8FB] px-6 py-4 border-t border-[#D7E8F3] flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-[#64748B]">
              Verified Project Execution • Quality Standard ISO 9001:2015
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-initial px-4 py-2 border border-[#D7E8F3] text-[#475569] hover:bg-white font-medium text-xs rounded-lg transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenConsultation();
                }}
                className="flex-1 sm:flex-initial px-5 py-2 bg-[#1570EF] hover:bg-[#1258C5] text-white font-semibold text-xs rounded-lg shadow-2xs transition-all flex items-center justify-center gap-2"
              >
                <span>Request Similar Turnkey Solution</span>
                <ExternalLink className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
