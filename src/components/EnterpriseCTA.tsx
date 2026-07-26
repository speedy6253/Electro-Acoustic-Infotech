import React from 'react';
import {
  FileText,
  Calendar,
  Wrench,
  PhoneCall,
  ShieldCheck,
} from 'lucide-react';

interface EnterpriseCTAProps {
  onOpenConsultation: (type?: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket') => void;
}

export const EnterpriseCTA: React.FC<EnterpriseCTAProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-16 sm:py-20 bg-white text-[#0F172A] font-sans border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-8 sm:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#1D4ED8] text-xs font-bold uppercase tracking-wider border border-[#BFDBFE]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1570EF]" />
                Engineering Consultation
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0F172A]">
                Ready to Upgrade Your Facility Infrastructure?
              </h2>

              <p className="text-sm text-[#475569] leading-relaxed">
                Connect with EAIPL’s senior engineering team for tender specifications, acoustic simulations, and turnkey project quotes.
              </p>
            </div>

            {/* Right Quick Actions */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={() => onOpenConsultation('RFP')}
                className="p-4 rounded-xl bg-white hover:bg-[#EFF6FF] border border-[#E2E8F0] hover:border-[#1570EF] transition-all text-left shadow-2xs group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#1570EF] text-white flex items-center justify-center mb-2">
                  <FileText className="w-4 h-4" />
                </div>
                <div className="text-sm font-bold text-[#0F172A] group-hover:text-[#1570EF]">
                  Submit RFP / BOQ
                </div>
                <div className="text-xs text-[#64748B] mt-0.5">Upload tender requirements</div>
              </button>

              <button
                onClick={() => onOpenConsultation('Site Survey')}
                className="p-4 rounded-xl bg-white hover:bg-[#EFF6FF] border border-[#E2E8F0] hover:border-[#1570EF] transition-all text-left shadow-2xs group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#1570EF] flex items-center justify-center mb-2">
                  <Calendar className="w-4 h-4" />
                </div>
                <div className="text-sm font-bold text-[#0F172A] group-hover:text-[#1570EF]">
                  Book Site Survey
                </div>
                <div className="text-xs text-[#64748B] mt-0.5">On-site acoustic assessment</div>
              </button>

              <button
                onClick={() => onOpenConsultation('Consultation')}
                className="p-4 rounded-xl bg-white hover:bg-[#EFF6FF] border border-[#E2E8F0] hover:border-[#1570EF] transition-all text-left shadow-2xs group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#1570EF] flex items-center justify-center mb-2">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div className="text-sm font-bold text-[#0F172A] group-hover:text-[#1570EF]">
                  Technical Consultation
                </div>
                <div className="text-xs text-[#64748B] mt-0.5">Speak with chief engineer</div>
              </button>

              <button
                onClick={() => onOpenConsultation('AMC Ticket')}
                className="p-4 rounded-xl bg-white hover:bg-[#EFF6FF] border border-[#E2E8F0] hover:border-[#1570EF] transition-all text-left shadow-2xs group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#1570EF] flex items-center justify-center mb-2">
                  <Wrench className="w-4 h-4" />
                </div>
                <div className="text-sm font-bold text-[#0F172A] group-hover:text-[#1570EF]">
                  AMC Portal
                </div>
                <div className="text-xs text-[#64748B] mt-0.5">Maintenance & SLA support</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
