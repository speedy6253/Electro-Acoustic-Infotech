import React from 'react';
import { Layers, ArrowRight } from 'lucide-react';
import { SOLUTIONS } from '../data/eaiplData';
import { NavView } from './Header';
import { IconAsset } from './IconAsset';

interface SolutionsSectionProps {
  onOpenConsultation: (type?: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket') => void;
  onNavigate?: (view: NavView, param?: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  onOpenConsultation,
  onNavigate
}) => {
  const handleSolutionClick = (slug: string) => {
    if (onNavigate) {
      onNavigate('solution-detail', slug);
    } else {
      window.location.hash = `solutions/${slug}`;
    }
  };

  return (
    <section id="solutions" className="py-16 sm:py-20 bg-white text-[#0F172A] font-sans border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#1D4ED8] text-xs font-bold uppercase tracking-wider border border-[#BFDBFE]">
            <Layers className="w-3.5 h-3.5" />
            Solutions Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">
            Turnkey Engineering Solutions
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Class-I turnkey integration across specialized electro-acoustic, AV matrixing, and life-safety domains.
          </p>
        </div>

        {/* Compact Enterprise Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLUTIONS.map((sol) => (
            <div
              key={sol.id}
              className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-6 hover:border-[#1570EF]/40 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-13 h-13 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs flex items-center justify-center shrink-0 group-hover:bg-[#EFF6FF] transition-colors p-0.5">
                  <IconAsset category="solutions" src={sol.icon} alt={sol.title} className="w-11 h-11 text-[#1570EF]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#1570EF] transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
                    {sol.tagline}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-[#E2E8F0]">
                <button
                  onClick={() => handleSolutionClick(sol.slug)}
                  className="w-full py-2 px-3 rounded-lg bg-white hover:bg-[#1570EF] hover:text-white border border-[#CBD5E1] hover:border-[#1570EF] text-xs font-bold text-[#0F172A] transition-all flex items-center justify-center gap-2 shadow-2xs"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
