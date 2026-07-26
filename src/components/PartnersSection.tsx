import React from 'react';
import { Layers } from 'lucide-react';
import { OEM_PARTNERS } from '../data/eaiplData';

interface PartnersSectionProps {
  onOpenConsultation: (type?: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket') => void;
}

export const PartnersSection: React.FC<PartnersSectionProps> = () => {
  return (
    <section id="partners" className="py-16 sm:py-20 bg-white text-[#0F172A] font-sans border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#1D4ED8] text-xs font-bold uppercase tracking-wider border border-[#BFDBFE]">
            <Layers className="w-3.5 h-3.5" />
            OEM Partners
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">
            Authorized System Integration Partners
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Direct partnerships with leading global manufacturers in pro-audio, AV-over-IP, and lighting controls.
          </p>
        </div>

        {/* Clean Logo Cards Grid with Uniform Sizing & Spacing */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {OEM_PARTNERS.map((partner) => (
            <div
              key={partner.id}
              className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-6 h-28 flex flex-col items-center justify-center text-center hover:border-[#1570EF]/50 hover:shadow-2xs transition-all group"
            >
              <div className="font-mono text-base sm:text-lg font-black text-[#0F172A] group-hover:text-[#1570EF] transition-colors tracking-tight">
                {partner.name}
              </div>
              <div className="text-[10px] text-[#64748B] font-semibold mt-1 uppercase tracking-wider">
                {partner.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
