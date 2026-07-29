import React, { useState } from 'react';
import { motion } from 'motion/react';
import { EXPERTISE_DOMAINS } from '../data/eaiplData';
import { Volume2, Monitor, Users, Sparkles, Layers, BellRing, Cpu, Check, ArrowRight } from 'lucide-react';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Volume2,
  Monitor,
  Users,
  Sparkles,
  Layers,
  BellRing,
  Cpu,
};

export const ExpertiseDiagramSection: React.FC = () => {
  const [activeDomainId, setActiveDomainId] = useState<string>('electro-acoustics');

  const activeDomain =
    EXPERTISE_DOMAINS.find((d) => d.id === activeDomainId) || EXPERTISE_DOMAINS[0];

  return (
    <div className="py-12 bg-white font-sans border-t border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-emerald-600" />
            Turnkey Engineering Architecture
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Comprehensive Expertise Matrix
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Brochure interactive engineering matrix detailing EAIPL’s 7 core specialization domains for legislative chambers, auditoriums, and corporate infrastructure.
          </p>
        </div>

        {/* Interactive Diagram Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left / Top: Interactive Domain Wheel/Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
            {EXPERTISE_DOMAINS.map((domain) => {
              const IconComp = ICON_MAP[domain.icon] || Cpu;
              const isActive = domain.id === activeDomainId;
              return (
                <button
                  key={domain.id}
                  onClick={() => setActiveDomainId(domain.id)}
                  className={`text-left p-3.5 rounded-xl border transition-all flex items-center gap-3 ${
                    isActive
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-md translate-x-1'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                    }`}
                  >
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-xs sm:text-sm truncate">
                      {domain.title}
                    </div>
                    <div
                      className={`text-[11px] truncate ${
                        isActive ? 'text-emerald-100' : 'text-slate-500'
                      }`}
                    >
                      {domain.subtitle}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Domain Breakdown Panel */}
          <div className="lg:col-span-7 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 rounded-2xl p-6 sm:p-8 border border-emerald-200 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                Brochure Domain Analysis
              </span>
              <h4 className="text-2xl font-bold text-slate-900">
                {activeDomain.title}
              </h4>
              <p className="text-xs text-emerald-700 font-semibold">
                {activeDomain.subtitle}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                {activeDomain.description}
              </p>
            </div>

            {/* Key Engineering Specifications */}
            <div className="space-y-2 pt-2 border-t border-slate-200">
              <div className="text-xs font-bold text-slate-900">
                Guaranteed Engineering Standards:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeDomain.keySpecs.map((spec, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2 rounded-lg bg-white border border-emerald-100/80 text-xs text-slate-700"
                  >
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* OEM Equipment Partners */}
            <div className="space-y-2 pt-2 border-t border-slate-200">
              <div className="text-xs font-bold text-slate-900">
                Direct Integrated OEM Brands:
              </div>
              <div className="flex flex-wrap gap-2">
                {activeDomain.keyBrands.map((brand, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
