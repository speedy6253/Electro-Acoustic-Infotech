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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        >
          {/* Header Image Frame */}
          <div className="relative h-64 sm:h-80 w-full bg-slate-900 overflow-hidden">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/60 to-transparent" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/60 hover:bg-slate-900 text-white backdrop-blur-md transition-colors z-10 border border-white/20"
              aria-label="Close case study modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C59B27] text-slate-950">
                  {project.category}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md text-white border border-white/20">
                  {project.clientType}
                </span>
                {project.completionBadge && (
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/80 text-white flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    {project.completionBadge}
                  </span>
                )}
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                {project.title}
              </h2>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-[#C59B27]" />
                  <span>{project.clientName}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#C59B27]" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#C59B27]" />
                  <span>Executed in {project.year}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Body Details */}
          <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-6">
            {/* Executive Summary */}
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Executive Overview
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {project.summary}
              </p>
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div>
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Technical Challenge
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  EAIPL Integrated Engineering Solution
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Impact Metrics */}
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Measured Key Performance Indicators
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.impactMetrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-slate-900 text-white rounded-lg border border-slate-800"
                  >
                    <div className="flex items-center gap-2 text-[#C59B27] text-xs font-bold mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      Metric 0{idx + 1}
                    </div>
                    <p className="text-xs font-medium text-slate-200">{metric}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Installed OEM Hardware Stack */}
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Deployed OEM Hardware & Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.installedEquipment.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-slate-100 text-slate-800 rounded-lg text-xs font-semibold border border-slate-200 flex items-center gap-1.5"
                  >
                    <Layers className="w-3.5 h-3.5 text-[#C59B27]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Acoustic Specs if available */}
            {project.acousticsSpecs && (
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 flex items-start gap-2">
                <Award className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                <div>
                  <strong>Electro-Acoustic Parameters:</strong> {project.acousticsSpecs}
                </div>
              </div>
            )}
          </div>

          {/* Modal Actions Footer */}
          <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-slate-500">
              Verified Project Execution • Quality Standard ISO 9001:2015
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-initial px-4 py-2 border border-slate-300 text-slate-700 hover:bg-slate-100 font-medium text-xs rounded-lg transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenConsultation();
                }}
                className="flex-1 sm:flex-initial px-5 py-2 bg-[#0B132B] hover:bg-slate-900 text-white font-semibold text-xs rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Request Similar Turnkey Solution</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#C59B27]" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
