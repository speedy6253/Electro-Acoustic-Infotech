import React from 'react';
import { ShieldCheck, Phone, Mail, MapPin, QrCode, Award, Building, ExternalLink } from 'lucide-react';
import { COMPANY_INFO, BRANCH_OFFICES } from '../data/eaiplData';
import { EaiplLogo } from './EaiplLogo';
import { NavView } from './Header';

interface FooterProps {
  onOpenConsultation: (type?: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket') => void;
  onNavigate?: (view: NavView, param?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation, onNavigate }) => {
  const handleNav = (view: NavView, param?: string) => {
    if (onNavigate) {
      onNavigate(view, param);
    } else {
      window.location.hash = view;
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 text-xs font-sans border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        {/* Top Row: Brand & Corporate Badges */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-8 border-b border-slate-800">
          <div className="lg:col-span-5 space-y-3">
            <div className="bg-white p-3 rounded-xl inline-block">
              <EaiplLogo className="w-[160px] h-auto" />
            </div>
            <p className="text-emerald-400 font-semibold text-xs tracking-wide uppercase">
              India’s Premier Class-I Turnkey Engineering System Integrator
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-lg">
              Specializing in high-intelligibility electro-acoustics, 4K MicroLED video matrixing, DMX stage mechanics, digital delegate conference systems, and EN54 voice evacuation infrastructure.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800 border border-slate-700 text-emerald-400 font-bold text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>ISO 9001:2015 QA Certified</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800 border border-slate-700 text-emerald-400 font-bold text-[11px]">
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                <span>Class-I Turnkey EPC Vendor</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-emerald-400 transition-colors">
                  Home Page
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('solutions')} className="hover:text-emerald-400 transition-colors">
                  Solutions Matrix
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('industries')} className="hover:text-emerald-400 transition-colors">
                  Industry Verticals
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('projects')} className="hover:text-emerald-400 transition-colors">
                  Project Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('media')} className="hover:text-emerald-400 transition-colors">
                  Media & Video Reels
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('quality')} className="hover:text-emerald-400 transition-colors">
                  Quality Standards
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-emerald-400 transition-colors">
                  Contact & RFP
                </button>
              </li>
            </ul>
          </div>

          {/* Corporate Portals & Action Buttons */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Action Portals
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <button onClick={() => onOpenConsultation('RFP')} className="hover:text-emerald-400 transition-colors">
                  Submit Tender RFP / BOQ
                </button>
              </li>
              <li>
                <button onClick={() => onOpenConsultation('Site Survey')} className="hover:text-emerald-400 transition-colors">
                  Book Site Survey
                </button>
              </li>
              <li>
                <button onClick={() => onOpenConsultation('Consultation')} className="hover:text-emerald-400 transition-colors">
                  Engineering Consultation
                </button>
              </li>
              <li>
                <button onClick={() => onOpenConsultation('AMC Ticket')} className="hover:text-emerald-400 transition-colors">
                  AMC SLA Support Portal
                </button>
              </li>
            </ul>
          </div>

          {/* QR Code & Head Office Box */}
          <div className="lg:col-span-3 bg-slate-800/80 p-4 rounded-xl border border-slate-700 space-y-3 flex flex-col justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-lg p-1.5 shrink-0 flex items-center justify-center">
                <QrCode className="w-9 h-9 text-slate-900" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Scan Official Brochure</div>
                <div className="text-[10px] text-slate-400">Instant Digital Company Profile PDF</div>
              </div>
            </div>
            
            <div className="text-[11px] text-slate-300 space-y-1 pt-2 border-t border-slate-700">
              <div className="font-bold text-emerald-400 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Corporate Head Office:</span>
              </div>
              <p className="text-slate-400 leading-snug pl-4">
                {COMPANY_INFO.registeredOffice}
              </p>
              <div className="pl-4 pt-1 text-slate-300 font-mono">
                Phone: {COMPANY_INFO.phone} | Email: {COMPANY_INFO.contactEmail}
              </div>
            </div>
          </div>
        </div>

        {/* Branch Offices Grid */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Building className="w-3.5 h-3.5 text-emerald-400" />
            <span>Pan-India Regional Branch Network</span>
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 text-[11px] text-slate-400">
            {BRANCH_OFFICES.map((b) => (
              <div key={b.id} className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-800 hover:border-emerald-500/50 transition-colors">
                <div className="font-bold text-slate-200">{b.city}</div>
                <div className="text-[10px] text-emerald-400 font-medium truncate">{b.type}</div>
                <div className="text-[10px] text-slate-400 truncate mt-0.5">{b.phone}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-3">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={COMPANY_INFO.facebookPage}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <span>Facebook Official Hub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>•</span>
            <span className="text-slate-400">ISO 9001:2015 & Class-I Registered EPC Contractor</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
