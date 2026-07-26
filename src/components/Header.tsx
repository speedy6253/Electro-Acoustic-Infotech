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
  Award,
  Layers,
  Building2,
  Tv,
  Volume2,
  Wrench,
  Radio,
  ExternalLink,
} from 'lucide-react';
import { COMPANY_INFO, SOLUTIONS, INDUSTRIES } from '../data/eaiplData';

interface HeaderProps {
  onOpenConsultation: (type?: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket') => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'solutions' | 'industries' | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Solutions', href: '#solutions', hasDropdown: 'solutions' as const },
    { label: 'Industries', href: '#industries', hasDropdown: 'industries' as const },
    { label: 'Featured Projects', href: '#projects' },
    { label: 'Engineering Process', href: '#process' },
    { label: 'OEM Partners', href: '#partners' },
    { label: 'Commendations', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full font-sans">
      {/* Top Utility Announcement & Emergency Bar */}
      <div className="bg-[#0B132B] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              {COMPANY_INFO.isoCertification}
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-300">
              {COMPANY_INFO.govRegistration}
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300 flex-wrap justify-center sm:justify-end">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-[#C59B27]" />
              <span>HQ: {COMPANY_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.contactEmail}`}
              className="hidden lg:flex items-center gap-1 hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3 text-[#C59B27]" />
              <span>{COMPANY_INFO.contactEmail}</span>
            </a>
            <button
              onClick={() => onOpenConsultation('AMC Ticket')}
              className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 hover:bg-amber-500/20 transition-all font-semibold flex items-center gap-1"
            >
              <Wrench className="w-3 h-3" />
              AMC Support Portal
            </button>
          </div>
        </div>
      </div>

      {/* Main Corporate Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B132B]/95 backdrop-blur-md text-white shadow-xl py-3 border-b border-slate-800'
            : 'bg-[#0B132B] text-white py-4 border-b border-slate-800/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Corporate Brand Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-[#1C2541] to-[#0B132B] border border-[#C59B27]/40 flex items-center justify-center text-white shadow-md group-hover:border-[#C59B27] transition-all shrink-0">
              <span className="font-mono font-bold text-lg text-[#C59B27] tracking-tighter">
                EAIPL
              </span>
            </div>
            <div>
              <div className="font-bold text-base sm:text-lg tracking-tight text-white leading-none">
                ELECTRO ACOUSTIC
              </div>
              <div className="text-[10px] sm:text-xs font-semibold text-[#C59B27] tracking-widest uppercase mt-0.5">
                Infotech Pvt. Ltd. • Since 1998
              </div>
            </div>
          </a>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() =>
                  link.hasDropdown ? setActiveDropdown(link.hasDropdown) : setActiveDropdown(null)
                }
              >
                <a
                  href={link.href}
                  className="px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold text-slate-200 hover:text-white hover:bg-slate-800/60 transition-all flex items-center gap-1"
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-[#C59B27] transition-transform ${
                        activeDropdown === link.hasDropdown ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </a>
              </div>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenConsultation('Site Survey')}
              className="px-3.5 py-2 rounded-lg text-xs font-semibold border border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-white transition-all"
            >
              Book Site Survey
            </button>
            <button
              onClick={() => onOpenConsultation('RFP')}
              className="px-4 py-2 rounded-lg text-xs font-bold bg-[#C59B27] hover:bg-amber-600 text-slate-950 transition-all shadow-md flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              Submit RFP
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white lg:hidden border border-slate-700"
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
            className="hidden lg:block absolute left-0 right-0 bg-[#0B132B] text-white border-b border-slate-800 shadow-2xl py-6 px-8 z-50"
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold text-[#C59B27] uppercase tracking-wider">
                  <Layers className="w-4 h-4" />
                  Turnkey Engineering Solutions Portfolio
                </div>
                <a
                  href="#solutions"
                  onClick={() => setActiveDropdown(null)}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                >
                  Explore All 8 Core Domains <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {SOLUTIONS.map((sol) => (
                  <a
                    key={sol.id}
                    href="#solutions"
                    onClick={() => setActiveDropdown(null)}
                    className="p-3 rounded-lg bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-[#C59B27]/50 transition-all group"
                  >
                    <div className="font-semibold text-sm text-white group-hover:text-[#C59B27] transition-colors mb-1">
                      {sol.title}
                    </div>
                    <div className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {sol.tagline}
                    </div>
                  </a>
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
            className="hidden lg:block absolute left-0 right-0 bg-[#0B132B] text-white border-b border-slate-800 shadow-2xl py-6 px-8 z-50"
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold text-[#C59B27] uppercase tracking-wider">
                  <Building2 className="w-4 h-4" />
                  Industry Sectors & Specialized Facilities
                </div>
                <a
                  href="#industries"
                  onClick={() => setActiveDropdown(null)}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                >
                  View All Sectors <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {INDUSTRIES.map((ind) => (
                  <a
                    key={ind.id}
                    href="#industries"
                    onClick={() => setActiveDropdown(null)}
                    className="p-3.5 rounded-lg bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-[#C59B27]/50 transition-all group"
                  >
                    <div className="font-semibold text-sm text-white group-hover:text-[#C59B27] transition-colors mb-1">
                      {ind.title}
                    </div>
                    <div className="text-xs text-slate-400 line-clamp-2">
                      {ind.subtitle}
                    </div>
                  </a>
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
            className="lg:hidden bg-[#0B132B] border-b border-slate-800 text-white overflow-hidden"
          >
            <div className="px-4 py-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-slate-800 hover:text-white"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-4 border-t border-slate-800 space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation('Site Survey');
                  }}
                  className="w-full py-2.5 px-4 rounded-lg text-xs font-semibold border border-slate-700 text-slate-200 hover:bg-slate-800 text-center"
                >
                  Book Site Survey
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation('RFP');
                  }}
                  className="w-full py-2.5 px-4 rounded-lg text-xs font-bold bg-[#C59B27] hover:bg-amber-600 text-slate-950 text-center flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  Submit Request for Proposal (RFP)
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
