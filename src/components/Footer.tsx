import React from 'react';
import {
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Award,
  Layers,
  Building2,
  CheckCircle2,
  Wrench,
  FileText,
} from 'lucide-react';
import { COMPANY_INFO, BRANCH_OFFICES, SOLUTIONS, INDUSTRIES } from '../data/eaiplData';

interface FooterProps {
  onOpenConsultation: (type?: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  return (
    <footer className="bg-[#050B18] text-slate-400 text-xs font-sans border-t border-slate-800">
      {/* Main Footer Links & Information Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Corporate Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#1C2541] border border-[#C59B27]/40 flex items-center justify-center text-white font-mono font-bold text-lg text-[#C59B27] shrink-0">
                EAIPL
              </div>
              <div>
                <div className="font-bold text-base text-white tracking-tight">
                  ELECTRO ACOUSTIC
                </div>
                <div className="text-[10px] font-semibold text-[#C59B27] tracking-widest uppercase">
                  Infotech Pvt. Ltd.
                </div>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed text-xs">
              Pioneering Class-I Turnkey System Integrator specializing in high-intelligibility electro-acoustics, 4K video matrixing, DMX stage mechanics, and EN54 voice alarm infrastructure across India since 1998.
            </p>

            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1.5 text-[11px]">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{COMPANY_INFO.isoCertification}</span>
              </div>
              <div className="text-slate-300">{COMPANY_INFO.govRegistration}</div>
            </div>

            {/* Direct Contact Details */}
            <div className="space-y-2 text-xs text-slate-300 pt-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                <span>{BRANCH_OFFICES[0].address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C59B27] shrink-0" />
                <span>{COMPANY_INFO.phone} / {COMPANY_INFO.tollFree}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C59B27] shrink-0" />
                <span>{COMPANY_INFO.contactEmail}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Solutions Domains (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-800 pb-2">
              <Layers className="w-3.5 h-3.5 text-[#C59B27]" />
              Turnkey Solution Domains
            </h4>
            <ul className="space-y-2">
              {SOLUTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href="#solutions"
                    className="hover:text-white hover:underline transition-colors flex items-center gap-1"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C59B27]" />
                    <span>{s.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industries & Sectors (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-800 pb-2">
              <Building2 className="w-3.5 h-3.5 text-[#C59B27]" />
              Sectors Served
            </h4>
            <ul className="space-y-2">
              {INDUSTRIES.map((i) => (
                <li key={i.id}>
                  <a
                    href="#industries"
                    className="hover:text-white hover:underline transition-colors flex items-center gap-1"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C59B27]" />
                    <span>{i.title.split(' ')[0]} Facilities</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#projects"
                  className="hover:text-white hover:underline transition-colors flex items-center gap-1"
                >
                  <span className="w-1 h-1 rounded-full bg-[#C59B27]" />
                  <span>Case Studies</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Engineering Portals (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-800 pb-2">
              <Wrench className="w-3.5 h-3.5 text-[#C59B27]" />
              Enterprise Direct Portals
            </h4>
            <div className="space-y-2">
              <button
                onClick={() => onOpenConsultation('RFP')}
                className="w-full p-2.5 rounded bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-[#C59B27] transition-all text-left flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>Submit RFP / Tender BOQ</span>
                </span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </button>

              <button
                onClick={() => onOpenConsultation('Site Survey')}
                className="w-full p-2.5 rounded bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-[#C59B27] transition-all text-left flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>Schedule Site Survey</span>
                </span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </button>

              <button
                onClick={() => onOpenConsultation('AMC Ticket')}
                className="w-full p-2.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-300 hover:bg-amber-500/20 transition-all text-left flex items-center justify-between font-semibold"
              >
                <span className="flex items-center gap-2">
                  <Wrench className="w-3.5 h-3.5" />
                  <span>24/7 AMC Support Portal</span>
                </span>
                <ExternalLink className="w-3 h-3 text-amber-400" />
              </button>
            </div>

            <div className="pt-2 text-[11px]">
              <div className="font-semibold text-slate-300 mb-1">Official Media Page:</div>
              <a
                href={COMPANY_INFO.facebookPage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline flex items-center gap-1"
              >
                <span>facebook.com/EAIPLINDIA</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Regional Branch Footprint Bar */}
      <div className="bg-[#030712] border-t border-slate-800/80 py-6 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-[11px] text-slate-400">
          {BRANCH_OFFICES.map((b) => (
            <div key={b.city} className="space-y-0.5 border-l border-slate-800 pl-3">
              <strong className="text-white block">{b.city}</strong>
              <div className="text-slate-400">{b.phone}</div>
              <div className="text-[#C59B27] text-[10px]">{b.email}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Legal Copyright Bar */}
      <div className="bg-[#02050e] border-t border-slate-900 py-4 px-4 text-center sm:text-left text-[11px] text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name} All Rights Reserved. ISO 9001:2015 Certified.
          </div>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-slate-300">ISO Quality Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-slate-300">Terms of Engineering</a>
            <span>•</span>
            <a href="#sitemap" className="hover:text-slate-300">GeM Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
