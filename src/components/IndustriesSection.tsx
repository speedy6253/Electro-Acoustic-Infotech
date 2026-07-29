import React from 'react';
import { Building2, ArrowRight } from 'lucide-react';
import { INDUSTRIES } from '../data/eaiplData';
import { NavView } from './Header';
import { IconAsset } from './IconAsset';

interface IndustriesSectionProps {
  onOpenConsultation: (type?: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket') => void;
  onNavigate?: (view: NavView, param?: string) => void;
  previewOnly?: boolean;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  onOpenConsultation,
  onNavigate,
  previewOnly = true,
}) => {
  const displayedIndustries = previewOnly ? INDUSTRIES.slice(0, 6) : INDUSTRIES;

  const handleIndustryClick = () => {
    if (onNavigate) {
      onNavigate('industries');
    } else {
      window.location.hash = 'industries';
    }
  };

  return (
    <section id="industries" className="py-14 sm:py-16 bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 font-sans border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-emerald-600" />
            Target Industry Sectors
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Industry Verticals & Infrastructure
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Specialized electro-acoustic, AV, and life-safety systems engineered for high-capacity government, educational, corporate, and cultural facilities.
          </p>
        </div>

        {/* Compact Industries Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedIndustries.map((ind) => (
            <div
              key={ind.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden flex flex-col justify-between hover:border-emerald-400 hover:shadow-md transition-all group"
            >
              <div>
                {/* Large Image */}
                <div className="relative aspect-16/9 bg-slate-900 overflow-hidden">
                  <img
                    src={ind.image || ind.heroImage || '/assets/hero/homepage-hero.jpg'}
                    alt={ind.name || ind.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider">
                    Official Sector
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center font-bold text-sm shrink-0 p-0.5">
                      <IconAsset category="industries" src={ind.icon} name={ind.id} alt={ind.name || ind.title} className="w-8.5 h-8.5 text-emerald-600" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {ind.name || ind.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {ind.description || ind.subtitle}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={handleIndustryClick}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-emerald-600 hover:text-white border border-slate-200 hover:border-emerald-600 text-xs font-bold text-slate-800 transition-all flex items-center justify-center gap-2 shadow-2xs"
                >
                  <span>Explore Sector Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Industries CTA */}
        {previewOnly && (
          <div className="text-center pt-2">
            <button
              onClick={handleIndustryClick}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-all inline-flex items-center gap-2"
            >
              <span>Explore All Industry Verticals ({INDUSTRIES.length} Sectors)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
