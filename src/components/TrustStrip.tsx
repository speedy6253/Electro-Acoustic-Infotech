import React from 'react';
import { Layers } from 'lucide-react';
import { OEM_PARTNERS } from '../data/eaiplData';
import { IconAsset } from './IconAsset';

export const TrustStrip: React.FC = () => {
  return (
    <section className="bg-[#EDF8FB] text-[#0F172A] py-8 border-b border-[#D7E8F3] relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center md:text-left mb-6 pb-6 border-b border-[#D7E8F3]">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-11 h-11 rounded-xl bg-white border border-[#D7E8F3] flex items-center justify-center text-[#1570EF] shrink-0 shadow-2xs p-0.5">
              <IconAsset category="trust" src="/assets/icons/trust/quality.png" alt="Quality" className="w-9 h-9 text-[#1570EF]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">Quality Assurance</div>
              <div className="text-xs text-[#64748B] font-medium">ISO 9001:2015 Certified</div>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-11 h-11 rounded-xl bg-white border border-[#D7E8F3] flex items-center justify-center text-[#1570EF] shrink-0 shadow-2xs p-0.5">
              <IconAsset category="trust" src="/assets/icons/trust/engineering.png" alt="Govt Class I" className="w-9 h-9 text-[#1570EF]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">Govt & PWD Class-I</div>
              <div className="text-xs text-[#64748B] font-medium">Turnkey EPC Contractor</div>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-11 h-11 rounded-xl bg-white border border-[#D7E8F3] flex items-center justify-center text-[#1570EF] shrink-0 shadow-2xs p-0.5">
              <IconAsset category="trust" src="/assets/icons/trust/technology.png" alt="OEM Tech" className="w-9 h-9 text-[#1570EF]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">OEM Technology</div>
              <div className="text-xs text-[#64748B] font-medium">Direct Authorized Partner</div>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-11 h-11 rounded-xl bg-white border border-[#D7E8F3] flex items-center justify-center text-[#1570EF] shrink-0 shadow-2xs p-0.5">
              <IconAsset category="trust" src="/assets/icons/trust/support.png" alt="Support" className="w-9 h-9 text-[#1570EF]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">Technical Support</div>
              <div className="text-xs text-[#64748B] font-medium">24/7 SLA & AMC Support</div>
            </div>
          </div>
        </div>

        {/* Ticker of Key OEM Authorizations */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-[#475569]">
          <div className="flex items-center gap-2 shrink-0 font-bold text-[#0F172A] uppercase tracking-wider">
            <Layers className="w-4 h-4 text-[#1570EF]" />
            Authorized OEM Systems Integrator:
          </div>
          <div className="flex items-center gap-3 overflow-x-auto w-full py-1 scrollbar-none text-[#334155] font-medium whitespace-nowrap">
            {OEM_PARTNERS.map((oem) => (
              <span
                key={oem.id}
                className="px-3 py-1 bg-white rounded-md border border-[#D7E8F3] text-xs hover:border-[#1570EF]/50 hover:text-[#1570EF] transition-colors shadow-2xs"
              >
                {oem.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
