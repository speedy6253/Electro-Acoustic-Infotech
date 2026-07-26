import React from 'react';
import { ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/eaiplData';
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
    <footer className="bg-white text-[#475569] text-xs font-sans border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <div className="mb-2">
              <EaiplLogo className="w-[140px] h-auto" />
            </div>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Class-I Turnkey EPC Contractor for electro-acoustics, AV matrixing, stage mechanics & EN54 voice alarm systems.
            </p>
            <div className="inline-flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>{COMPANY_INFO.isoCertification}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#1570EF] transition-colors text-left"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('solutions')}
                  className="hover:text-[#1570EF] transition-colors text-left"
                >
                  Solutions Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('industries')}
                  className="hover:text-[#1570EF] transition-colors text-left"
                >
                  Industries Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('projects')}
                  className="hover:text-[#1570EF] transition-colors text-left"
                >
                  Project Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('media')}
                  className="hover:text-[#1570EF] transition-colors text-left"
                >
                  Media Centre
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('quality')}
                  className="hover:text-[#1570EF] transition-colors text-left"
                >
                  Quality & Standards
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('careers')}
                  className="hover:text-[#1570EF] transition-colors text-left"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#1570EF] transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Action Portals */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
              Portals
            </h4>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => onOpenConsultation('RFP')}
                  className="hover:text-[#1570EF] transition-colors text-left"
                >
                  Submit RFP / Tender BOQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenConsultation('Site Survey')}
                  className="hover:text-[#1570EF] transition-colors text-left"
                >
                  Book Site Survey
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenConsultation('Consultation')}
                  className="hover:text-[#1570EF] transition-colors text-left"
                >
                  Technical Consultation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenConsultation('AMC Ticket')}
                  className="hover:text-[#1570EF] transition-colors text-left"
                >
                  AMC Support Portal
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-1.5 text-xs text-[#64748B]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#1570EF] shrink-0" />
                <span>{COMPANY_INFO.hqLocation}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#1570EF] shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#1570EF] shrink-0" />
                <span>{COMPANY_INFO.contactEmail}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between text-xs text-[#94A3B8] gap-3">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={COMPANY_INFO.facebookPage}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1570EF] transition-colors"
            >
              Facebook Official Hub
            </a>
            <span>•</span>
            <span className="text-[#64748B]">Class-I Turnkey Vendor</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
