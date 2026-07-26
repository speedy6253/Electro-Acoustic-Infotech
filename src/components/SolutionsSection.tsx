import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Volume2,
  Tv,
  Sparkles,
  Waves,
  Shield,
  Activity,
  Cpu,
  Radio,
  CheckCircle2,
  ArrowRight,
  Layers,
  Wrench,
  FileText,
} from 'lucide-react';
import { SOLUTIONS } from '../data/eaiplData';
import { SolutionCategory } from '../types';

interface SolutionsSectionProps {
  onOpenConsultation: (type?: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket') => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onOpenConsultation }) => {
  const [selectedSolutionId, setSelectedSolutionId] = useState<string>(SOLUTIONS[0].id);

  const activeSolution: SolutionCategory =
    SOLUTIONS.find((s) => s.id === selectedSolutionId) || SOLUTIONS[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Volume2':
        return <Volume2 className="w-5 h-5" />;
      case 'Tv':
        return <Tv className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Waves':
        return <Waves className="w-5 h-5" />;
      case 'Shield':
        return <Shield className="w-5 h-5" />;
      case 'Activity':
        return <Activity className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Radio':
        return <Radio className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <section id="solutions" className="py-16 sm:py-24 bg-[#0B132B] text-white font-sans relative overflow-hidden border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-[#C59B27] text-xs font-bold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              Turnkey System Domains
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Enterprise Engineering Solutions Portfolio
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
              End-to-end design, acoustic simulation, procurement, rack building, DSP tuning, and lifetime AMC support across 8 critical technology verticals.
            </p>
          </div>

          <button
            onClick={() => onOpenConsultation('RFP')}
            className="px-5 py-2.5 bg-[#C59B27] hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm rounded-lg transition-all shadow-md flex items-center gap-2 shrink-0 self-start md:self-auto"
          >
            <FileText className="w-4 h-4" />
            <span>Request BOQ Proposal</span>
          </button>
        </div>

        {/* Interactive Solutions Navigation Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-8">
          {SOLUTIONS.map((sol) => {
            const isSelected = sol.id === selectedSolutionId;
            return (
              <button
                key={sol.id}
                onClick={() => setSelectedSolutionId(sol.id)}
                className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between h-full ${
                  isSelected
                    ? 'bg-slate-800 border-[#C59B27] text-white shadow-lg ring-1 ring-[#C59B27]'
                    : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 ${
                    isSelected ? 'bg-[#C59B27] text-slate-950' : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  {getIcon(sol.icon)}
                </div>
                <div className="text-xs font-bold line-clamp-2 leading-tight">{sol.title}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Solution Detail Spotlight Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSolution.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl backdrop-blur-md"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="p-2 rounded-lg bg-slate-800 text-[#C59B27]">
                      {getIcon(activeSolution.icon)}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {activeSolution.title}
                    </h3>
                    {activeSolution.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C59B27]/20 text-[#C59B27] border border-[#C59B27]/30">
                        {activeSolution.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base font-medium italic mt-1">
                    "{activeSolution.tagline}"
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed mt-3">
                    {activeSolution.description}
                  </p>
                </div>

                {/* Key Technical Features */}
                <div>
                  <h4 className="text-xs font-bold text-[#C59B27] uppercase tracking-wider mb-3">
                    Key Technical Features & Standards
                  </h4>
                  <div className="space-y-2">
                    {activeSolution.keyFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
                  <button
                    onClick={() => onOpenConsultation('RFP')}
                    className="px-5 py-2.5 bg-[#C59B27] hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm rounded-lg transition-all shadow-md flex items-center gap-2"
                  >
                    <span>Request BOQ & Design Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onOpenConsultation('Site Survey')}
                    className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm rounded-lg border border-slate-700 transition-all"
                  >
                    Book Site Survey
                  </button>
                </div>
              </div>

              {/* Right Details: Authorized Hardware & Deliverables */}
              <div className="lg:col-span-5 space-y-6 bg-slate-950/60 p-6 rounded-xl border border-slate-800">
                {/* Authorized OEM Equipment */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#C59B27]" />
                    Authorized OEM Equipment Brands Deployed
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeSolution.equipmentBrands.map((brand, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-xs font-bold text-white shadow-sm"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Standard Engineering Deliverables */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-[#C59B27]" />
                    Standard Project Deliverables
                  </h4>
                  <div className="space-y-2">
                    {activeSolution.sampleDeliverables.map((item, idx) => (
                      <div key={idx} className="p-2.5 bg-slate-900/80 rounded border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-amber-500/10 rounded-lg border border-amber-500/20 text-xs text-amber-200">
                  <strong>ISO 9001 Protocol:</strong> All installations include complete AutoCAD schematics, rack wiring tags, DSP source code backups, and user training.
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
