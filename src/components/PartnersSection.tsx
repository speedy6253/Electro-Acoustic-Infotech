import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, ShieldCheck, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { OEM_PARTNERS } from '../data/eaiplData';

interface PartnersSectionProps {
  onOpenConsultation: (type?: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket') => void;
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({ onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Pro Audio',
    'Control & AV-over-IP',
    'AV Processing & Signal',
    'Security & Conference',
    'Visual Displays',
  ];

  const filteredPartners =
    selectedCategory === 'All'
      ? OEM_PARTNERS
      : OEM_PARTNERS.filter((p) => p.category.includes(selectedCategory));

  return (
    <section id="partners" className="py-16 sm:py-24 bg-slate-950 text-white font-sans border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-[#C59B27] text-xs font-bold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              Global Technology Alliances
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Authorized OEM Technology Partners
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-2 max-w-2xl">
              EAIPL maintains direct, class-A system integrator partnerships with world-leading manufacturers to guarantee authentic hardware, direct OEM warranty backing, and original spare availability.
            </p>
          </div>

          <button
            onClick={() => onOpenConsultation('RFP')}
            className="px-5 py-2.5 bg-[#C59B27] hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm rounded-lg transition-all shadow-md flex items-center gap-2 shrink-0 self-start md:self-auto"
          >
            <span>Request OEM Compliance Matrix</span>
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-800 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#C59B27] text-slate-950 shadow font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredPartners.map((partner) => (
              <motion.div
                key={partner.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-slate-900/90 rounded-xl border border-slate-800 p-6 space-y-4 hover:border-[#C59B27]/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                    <span className="font-mono text-sm sm:text-base font-extrabold text-white group-hover:text-[#C59B27] transition-colors">
                      {partner.logoText}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-slate-300 border border-slate-700">
                      {partner.category}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-[#C59B27] mb-2 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{partner.tier}</span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {partner.description}
                  </p>

                  <div className="space-y-1">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Featured OEM Product Lines:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {partner.featuredProducts.map((prod, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 text-[10px] border border-slate-800"
                        >
                          {prod}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Direct Factory Warranty & Firmware Support
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
