import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Building2, CheckCircle, Lock, Layers } from 'lucide-react';
import { OEM_PARTNERS } from '../data/eaiplData';

export const TrustStrip: React.FC = () => {
  return (
    <section className="bg-slate-900 text-white py-8 border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center md:text-left mb-6 pb-6 border-b border-slate-800/80">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-[#C59B27] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">Quality Management</div>
              <div className="text-xs text-slate-400">ISO 9001:2015 Certified</div>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-[#C59B27] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">Govt & PWD Partner</div>
              <div className="text-xs text-slate-400">Class-I Turnkey Contractor</div>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-[#C59B27] shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">GeM Portal Compliant</div>
              <div className="text-xs text-slate-400">Registered Govt Supplier</div>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-[#C59B27] shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">Defense & High-Security</div>
              <div className="text-xs text-slate-400">Classified Installation Scope</div>
            </div>
          </div>
        </div>

        {/* Marquee Ticker of Key OEM Authorizations */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2 shrink-0 font-bold text-slate-300 uppercase tracking-wider">
            <Layers className="w-4 h-4 text-[#C59B27]" />
            Direct Authorized System Integrator:
          </div>
          <div className="flex items-center gap-6 overflow-x-auto w-full py-1 no-scrollbar text-slate-300 font-semibold whitespace-nowrap">
            {OEM_PARTNERS.map((oem) => (
              <span
                key={oem.id}
                className="px-3 py-1 bg-slate-800/60 rounded border border-slate-700/60 text-xs hover:border-[#C59B27]/60 hover:text-white transition-colors"
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
