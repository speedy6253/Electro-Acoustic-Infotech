import React from 'react';
import { motion } from 'motion/react';
import {
  FileText,
  Calendar,
  Wrench,
  PhoneCall,
  ShieldCheck,
  Award,
  ArrowRight,
  Mail,
  Building2,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/eaiplData';

interface EnterpriseCTAProps {
  onOpenConsultation: (type?: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket') => void;
}

export const EnterpriseCTA: React.FC<EnterpriseCTAProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#0B132B] text-white font-sans relative overflow-hidden border-b border-slate-800">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1C2541_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 to-[#0B132B] rounded-2xl border border-slate-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-[#C59B27] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                Direct Senior Engineering Engagement
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Ready to Engineer Your Facility's Electro-Acoustic & AV Infrastructure?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Connect directly with EAIPL’s senior systems architects for RFP BOQ vetting, 3D EASE acoustic simulations, tender specs, or 24/7 AMC SLA maintenance contracts.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-2">
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#C59B27]" />
                  <span>ISO 9001:2015 Confidentiality Protocols</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-[#C59B27]" />
                  <span>Class-I Govt & PWD Approved</span>
                </div>
              </div>
            </div>

            {/* Right Quick Trigger Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={() => onOpenConsultation('RFP')}
                className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-[#C59B27] transition-all text-left group"
              >
                <div className="p-2 rounded-lg bg-[#C59B27] text-slate-950 w-fit mb-2">
                  <FileText className="w-4 h-4" />
                </div>
                <div className="text-sm font-bold text-white group-hover:text-[#C59B27] transition-colors">
                  Submit RFP / BOQ
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Upload tender specs & drawings
                </div>
              </button>

              <button
                onClick={() => onOpenConsultation('Site Survey')}
                className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-[#C59B27] transition-all text-left group"
              >
                <div className="p-2 rounded-lg bg-slate-700 text-white w-fit mb-2">
                  <Calendar className="w-4 h-4 text-[#C59B27]" />
                </div>
                <div className="text-sm font-bold text-white group-hover:text-[#C59B27] transition-colors">
                  Book Site Survey
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  3D ray tracing & RT60 test
                </div>
              </button>

              <button
                onClick={() => onOpenConsultation('Consultation')}
                className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-[#C59B27] transition-all text-left group"
              >
                <div className="p-2 rounded-lg bg-slate-700 text-white w-fit mb-2">
                  <PhoneCall className="w-4 h-4 text-[#C59B27]" />
                </div>
                <div className="text-sm font-bold text-white group-hover:text-[#C59B27] transition-colors">
                  Book Consultation
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Technical briefing with engineer
                </div>
              </button>

              <button
                onClick={() => onOpenConsultation('AMC Ticket')}
                className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-[#C59B27] transition-all text-left group"
              >
                <div className="p-2 rounded-lg bg-slate-700 text-white w-fit mb-2">
                  <Wrench className="w-4 h-4 text-[#C59B27]" />
                </div>
                <div className="text-sm font-bold text-white group-hover:text-[#C59B27] transition-colors">
                  AMC Support Ticket
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Log SLA maintenance ticket
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
