import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Phone,
  Mail,
  ShieldCheck,
  ChevronDown,
  Menu,
  X,
  FileText,
  Layers,
  Building2,
  ExternalLink,
  ArrowRight,
} from 'lucide-react';
import { COMPANY_INFO, SOLUTIONS, INDUSTRIES } from '../data/eaiplData';
import { EaiplLogo } from './EaiplLogo';
import { IconAsset } from './IconAsset';

export type NavView =
  | 'home'
  | 'solutions'
  | 'solution-detail'
  | 'industries'
  | 'projects'
  | 'media'
  | 'contact';

interface HeaderProps {
  onOpenConsultation: (type?: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket') => void;
  currentView?: NavView;
  onNavigate?: (view: NavView, param?: string) => void;
}

interface NavLinkItem {
  label: string;
  id: string;
  view: NavView;
  href: string;
  hasDropdown?: 'solutions' | 'industries';
}

export const Header: React.FC<HeaderProps> = ({
  onOpenConsultation,
  currentView = 'home',
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'solutions' | 'industries' | null>(null);

  const navLinks: NavLinkItem[] = [
    { label: 'Home', id: 'home', view: 'home', href: '#' },
    { label: 'Solutions', id: 'solutions', view: 'solutions', href: '#solutions', hasDropdown: 'solutions' },
    { label: 'Industries', id: 'industries', view: 'industries', href: '#industries', hasDropdown: 'industries' },
    { label: 'Projects', id: 'projects', view: 'projects', href: '#projects' },
    { label: 'Media', id: 'media', view: 'media', href: '#media' },
    { label: 'Contact', id: 'contact', view: 'contact', href: '#contact' },
  ];

  const handleNavClick = (view: NavView, param?: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(view, param);
    } else {
      if (view === 'solution-detail' && param) {
        window.location.hash = `solutions/${param}`;
      } else if (view === 'home') {
        window.location.hash = '';
      } else {
        window.location.hash = view;
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full font-sans">
      {/* Top Utility Announcement & Emergency Bar */}
      <div className="bg-[#EDF8FB] text-[#475569] text-xs py-2 px-4 border-b border-[#D7E8F3]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              {COMPANY_INFO.isoCertification}
            </span>
            <span className="hidden md:inline text-[#CBD5E1]">|</span>
            <span className="hidden md:inline text-[#334155] font-medium">
              {COMPANY_INFO.govRegistration}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[#475569] flex-wrap justify-center sm:justify-end">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1 hover:text-[#1570EF] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#1570EF]" />
              <span className="font-medium">HQ: {COMPANY_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.contactEmail}`}
              className="hidden lg:flex items-center gap-1 hover:text-[#1570EF] transition-colors"
            >
              <Mail className="w-3 h-3 text-[#1570EF]" />
              <span className="font-medium">{COMPANY_INFO.contactEmail}</span>
            </a>
            <button
              onClick={() => onOpenConsultation('AMC Ticket')}
              className="px-2.5 py-0.5 rounded bg-[#EFF6FF] text-[#1D4ED8] hover:bg-[#DBEAFE] font-semibold text-[11px] border border-[#BFDBFE] transition-colors"
            >
              AMC Portal
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white border-b border-[#D7E8F3] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[106px] sm:min-h-[114px] py-2 flex items-center justify-between gap-4">
          {/* Official Company Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center focus:outline-none shrink-0 py-1"
          >
            <EaiplLogo className="h-[88px] sm:h-[94px] md:h-[96px] lg:h-[100px] w-auto object-contain transition-transform hover:scale-[1.01]" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => {
                  if (link.hasDropdown) setActiveDropdown(link.hasDropdown);
                }}
              >
                <button
                  onClick={() => handleNavClick(link.view)}
                  className={`px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold transition-all flex items-center gap-1 ${
                    currentView === link.view
                      ? 'text-[#1570EF] bg-[#EAF5FF] font-bold'
                      : 'text-[#475569] hover:text-[#1570EF] hover:bg-[#EAF5FF]'
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-[#1570EF] transition-transform ${
                        activeDropdown === link.hasDropdown ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </button>
              </div>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenConsultation('Site Survey')}
              className="px-3.5 py-2 rounded-lg text-xs font-semibold border border-[#D7E8F3] text-[#0F172A] hover:bg-[#EAF5FF] hover:border-[#1570EF]/40 transition-all"
            >
              Book Site Survey
            </button>
            <button
              onClick={() => onOpenConsultation('RFP')}
              className="px-4 py-2 rounded-lg text-xs font-bold bg-[#1570EF] hover:bg-[#1258C5] text-white transition-all shadow-xs flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              Submit RFP
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#EDF8FB] text-[#0F172A] hover:bg-[#EAF5FF] lg:hidden border border-[#D7E8F3]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Desktop Mega Dropdown for Solutions */}
      <AnimatePresence>
        {activeDropdown === 'solutions' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.15 }}
            onMouseLeave={() => setActiveDropdown(null)}
            className="hidden lg:block absolute left-0 right-0 bg-white text-[#0F172A] border-b border-[#D7E8F3] shadow-lg py-6 px-8 z-50 max-h-[80vh] overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#D7E8F3]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1570EF] uppercase tracking-wider">
                  <Layers className="w-4 h-4" />
                  Turnkey Engineering Solutions Portfolio
                </div>
                <button
                  onClick={() => handleNavClick('solutions')}
                  className="text-xs text-[#1570EF] font-bold hover:underline flex items-center gap-1"
                >
                  View Solutions Master Page <ExternalLink className="w-3 h-3" />
                </button>
              </div>

              <div className="grid grid-cols-3 xl:grid-cols-4 gap-3">
                {SOLUTIONS.map((sol) => (
                  <button
                    key={sol.id}
                    onClick={() => handleNavClick('solution-detail', sol.slug)}
                    className="p-3 rounded-xl bg-[#F8FAFC] hover:bg-[#EFF6FF] border border-[#E2E8F0] hover:border-[#1570EF]/50 transition-all text-left flex items-start gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white border border-[#E2E8F0] text-[#1570EF] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#1570EF] transition-colors p-0.5">
                      <IconAsset category="solutions" src={sol.icon} alt={sol.title} className="w-8 h-8 text-[#1570EF] group-hover:brightness-200" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-xs text-[#0F172A] group-hover:text-[#1570EF] transition-colors flex items-center justify-between gap-1">
                        <span className="truncate">{sol.title}</span>
                        <ArrowRight className="w-3 h-3 text-[#1570EF] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      </div>
                      <div className="text-[11px] text-[#64748B] line-clamp-1 mt-0.5">
                        {sol.tagline}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Mega Dropdown for Industries */}
      <AnimatePresence>
        {activeDropdown === 'industries' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.15 }}
            onMouseLeave={() => setActiveDropdown(null)}
            className="hidden lg:block absolute left-0 right-0 bg-white text-[#0F172A] border-b border-[#D7E8F3] shadow-lg py-6 px-8 z-50"
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#D7E8F3]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1570EF] uppercase tracking-wider">
                  <Building2 className="w-4 h-4" />
                  Industry Sectors & Specialized Facilities
                </div>
                <button
                  onClick={() => handleNavClick('industries')}
                  className="text-xs text-[#1570EF] font-bold hover:underline flex items-center gap-1"
                >
                  Explore All Industries <ExternalLink className="w-3 h-3" />
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {INDUSTRIES.map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => handleNavClick('industries')}
                    className="p-3 rounded-xl bg-[#F8FAFC] hover:bg-[#EFF6FF] border border-[#E2E8F0] hover:border-[#1570EF]/50 transition-all text-left flex items-start gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white border border-[#E2E8F0] text-[#1570EF] flex items-center justify-center shrink-0 mt-0.5 p-0.5">
                      <IconAsset category="industries" src={ind.icon} name={ind.id} alt={ind.title} className="w-8 h-8 text-[#1570EF]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-xs text-[#0F172A] group-hover:text-[#1570EF] transition-colors flex items-center justify-between">
                        <span>{ind.name}</span>
                        <ArrowRight className="w-3 h-3 text-[#1570EF] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      </div>
                      <div className="text-[11px] text-[#64748B] line-clamp-1 mt-0.5">
                        {ind.description}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-[#D7E8F3] text-[#0F172A] overflow-hidden"
          >
            <div className="px-4 py-6 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.view)}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-semibold ${
                    currentView === link.view
                      ? 'text-[#1570EF] bg-[#EAF5FF] font-bold'
                      : 'text-[#475569] hover:bg-[#EAF5FF] hover:text-[#1570EF]'
                  }`}
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-4 border-t border-[#E2E8F0] space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation('Site Survey');
                  }}
                  className="w-full py-2.5 px-3 rounded-lg border border-[#CBD5E1] text-xs font-bold text-[#0F172A]"
                >
                  Book Site Survey
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation('RFP');
                  }}
                  className="w-full py-2.5 px-3 rounded-lg bg-[#1570EF] text-white text-xs font-bold"
                >
                  Submit RFP / BOQ
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
