import React, { useState } from 'react';
import { Layers, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { OEM_PARTNERS } from '../data/eaiplData';
import { NavView } from './Header';

interface PartnersSectionProps {
  onOpenConsultation?: (type?: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket') => void;
  onNavigate?: (view: NavView, param?: string) => void;
  previewOnly?: boolean;
}

const BRAND_CATEGORIES = [
  'All Brands',
  'Pro Audio',
  'Video Walls',
  'Control & Automation',
  'Delegate Microphones',
  'Stage Lighting',
] as const;

export const PartnersSection: React.FC<PartnersSectionProps> = ({ onNavigate, previewOnly = true }) => {
  const [selectedCat, setSelectedCat] = useState<string>('All Brands');

  const filteredPartners = OEM_PARTNERS.filter((partner) => {
    if (selectedCat === 'All Brands') return true;
    return partner.category.toLowerCase().includes(selectedCat.toLowerCase());
  });

  const displayedPartners = previewOnly ? filteredPartners.slice(0, 12) : filteredPartners;

  const handleExploreBrands = () => {
    if (onNavigate) {
      onNavigate('solutions');
    } else {
      window.location.hash = 'solutions';
    }
  };

  return (
    <section id="partners" className="py-14 sm:py-16 bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 font-sans border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-emerald-600" />
            Direct Global OEM Alliances
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Authorized Brand Alliances
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            EAIPL holds direct system integrator certifications with world leaders in pro-audio, 4K AV-over-IP matrixing, delegate conference systems, and EN54 safety voice alarms.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {BRAND_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedCat === cat
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-emerald-50 hover:border-emerald-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Clean Logo Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {displayedPartners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-xl border border-slate-200 p-5 h-28 flex flex-col items-center justify-center text-center hover:border-emerald-400 hover:shadow-md transition-all group relative"
            >
              <div className="font-sans text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors tracking-tight">
                {partner.name}
              </div>
              <div className="text-[10px] text-emerald-800 font-semibold mt-1 uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                {partner.category}
              </div>
            </div>
          ))}
        </div>

        {previewOnly && (
          <div className="text-center pt-2">
            <button
              onClick={handleExploreBrands}
              className="px-6 py-2.5 bg-white border border-slate-300 hover:border-emerald-500 hover:bg-emerald-50 text-slate-800 hover:text-emerald-800 text-xs font-bold rounded-xl shadow-2xs transition-all inline-flex items-center gap-2"
            >
              <span>Explore All OEM Integrations & Solutions</span>
              <ArrowRight className="w-4 h-4 text-emerald-600" />
            </button>
          </div>
        )}

        <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-medium">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Genuine OEM Hardware Guarantees</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Direct Manufacturer Warranty Backing</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-emerald-600" />
            <span>In-House Certified Engineers (CTS-D)</span>
          </div>
        </div>
      </div>
    </section>
  );
};
