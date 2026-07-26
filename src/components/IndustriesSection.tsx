import React from 'react';
import { Building2, ArrowRight } from 'lucide-react';
import { INDUSTRIES } from '../data/eaiplData';
import { NavView } from './Header';
import { IconAsset } from './IconAsset';

interface IndustriesSectionProps {
  onOpenConsultation: (type?: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket') => void;
  onNavigate?: (view: NavView, param?: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  onOpenConsultation,
  onNavigate
}) => {
  const handleIndustryClick = () => {
    if (onNavigate) {
      onNavigate('industries');
    } else {
      window.location.hash = 'industries';
    }
  };

  return (
    <section id="industries" className="py-16 sm:py-20 bg-[#F8FAFC] text-[#0F172A] font-sans border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#1D4ED8] text-xs font-bold uppercase tracking-wider border border-[#BFDBFE]">
            <Building2 className="w-3.5 h-3.5" />
            Industry Sectors
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">
            Sectors We Serve
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Specialized electro-acoustic, AV, and life-safety systems engineered for high-capacity government, educational, corporate, and cultural facilities.
          </p>
        </div>

        {/* Compact Industries Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              className="bg-white rounded-xl border border-[#E2E8F0] shadow-xs overflow-hidden flex flex-col justify-between hover:border-[#1570EF]/40 hover:shadow-md transition-all group"
            >
              <div>
                {/* Large Image */}
                <div className="relative aspect-16/9 bg-[#0F172A] overflow-hidden">
                  <img
                    src={ind.image || ind.heroImage}
                    alt={ind.name || ind.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] text-[#1570EF] flex items-center justify-center font-bold text-sm shrink-0 p-0.5">
                      <IconAsset category="industries" src={ind.icon} name={ind.id} alt={ind.name || ind.title} className="w-8.5 h-8.5 text-[#1570EF]" />
                    </div>
                    <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#1570EF] transition-colors">
                      {ind.name || ind.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed line-clamp-2">
                    {ind.description || ind.subtitle}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={handleIndustryClick}
                  className="w-full py-2 px-3 rounded-lg bg-[#F8FAFC] hover:bg-[#1570EF] hover:text-white border border-[#CBD5E1] hover:border-[#1570EF] text-xs font-bold text-[#0F172A] transition-all flex items-center justify-center gap-2 shadow-2xs"
                >
                  <span>Explore Dedicated Sector Page</span>
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
