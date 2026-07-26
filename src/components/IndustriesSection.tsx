import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Building2,
  GraduationCap,
  Landmark,
  HeartPulse,
  Utensils,
  Theater,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Award,
} from 'lucide-react';
import { INDUSTRIES } from '../data/eaiplData';
import { IndustrySector } from '../types';

interface IndustriesSectionProps {
  onOpenConsultation: (type?: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket') => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onOpenConsultation }) => {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>(INDUSTRIES[0].id);

  const activeIndustry: IndustrySector =
    INDUSTRIES.find((i) => i.id === selectedIndustryId) || INDUSTRIES[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-5 h-5" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5" />;
      case 'Landmark':
        return <Landmark className="w-5 h-5" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5" />;
      case 'Theater':
        return <Theater className="w-5 h-5" />;
      default:
        return <Building2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="industries" className="py-16 sm:py-24 bg-slate-100 text-slate-900 font-sans border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-200 text-[#0B132B] text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-[#C59B27]" />
            Industry Domain Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B132B]">
            Tailored Engineering for Mission-Critical Sectors
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-2 max-w-2xl">
            Each industry domain presents unique acoustic, visual, and operational challenges. EAIPL delivers customized architectures optimized for specific regulatory and user requirements.
          </p>
        </div>

        {/* Sector Tabs Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
          {INDUSTRIES.map((ind) => {
            const isSelected = ind.id === selectedIndustryId;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustryId(ind.id)}
                className={`p-3.5 rounded-xl border text-left transition-all flex items-center gap-3 ${
                  isSelected
                    ? 'bg-[#0B132B] text-white border-[#0B132B] shadow-md'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                <div
                  className={`p-2 rounded-lg shrink-0 ${
                    isSelected ? 'bg-[#C59B27] text-slate-950' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {getIcon(ind.icon)}
                </div>
                <div className="text-xs font-bold leading-snug">{ind.title.split(' ')[0]}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Content Spotlight Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left Column Image Frame */}
              <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[320px]">
                <img
                  src={activeIndustry.image}
                  alt={activeIndustry.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0B132B]/20" />

                <div className="absolute bottom-6 left-6 right-6 text-white lg:hidden">
                  <div className="flex items-center gap-2 text-[#C59B27] text-xs font-bold uppercase tracking-wider mb-1">
                    {getIcon(activeIndustry.icon)}
                    Sector Highlight
                  </div>
                  <h3 className="text-2xl font-bold">{activeIndustry.title}</h3>
                </div>
              </div>

              {/* Right Column Specifications */}
              <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
                <div>
                  <div className="hidden lg:flex items-center gap-2 text-[#C59B27] text-xs font-bold uppercase tracking-wider mb-1">
                    {getIcon(activeIndustry.icon)}
                    Industry Sector Profile
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B132B] mb-1">
                    {activeIndustry.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mb-3">
                    {activeIndustry.subtitle}
                  </p>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {activeIndustry.overview}
                  </p>
                </div>

                {/* Requirements vs Deployed Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                      Primary Sector Challenges
                    </h4>
                    <div className="space-y-1.5">
                      {activeIndustry.primaryNeeds.map((need, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                          <span>{need}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                      EAIPL Deployed Solutions
                    </h4>
                    <div className="space-y-1.5">
                      {activeIndustry.deployedSolutions.map((sol, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{sol}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Key Representative Clients */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Key EAIPL Clients in this Domain
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeIndustry.keyClients.map((client, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-100 text-slate-800 rounded-lg text-xs font-semibold border border-slate-200"
                      >
                        {client}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Row */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
                  {activeIndustry.caseStudyTitle && (
                    <div className="flex items-center gap-1.5 text-xs text-slate-600">
                      <Award className="w-4 h-4 text-[#C59B27]" />
                      <span>Featured Case Study: <strong>{activeIndustry.caseStudyTitle}</strong></span>
                    </div>
                  )}

                  <button
                    onClick={() => onOpenConsultation('Consultation')}
                    className="px-5 py-2.5 bg-[#0B132B] hover:bg-slate-900 text-white font-semibold text-xs sm:text-sm rounded-lg shadow transition-all flex items-center gap-2"
                  >
                    <span>Consult {activeIndustry.title.split(' ')[0]} Specialist</span>
                    <ArrowRight className="w-4 h-4 text-[#C59B27]" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
