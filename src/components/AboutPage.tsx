import React from 'react';
import { motion } from 'motion/react';
import {
  Building2,
  CheckCircle2,
  Award,
  ShieldCheck,
  Layers,
  ArrowRight,
  FileCheck2,
  Sparkles,
  Users2,
  Clock,
  History
} from 'lucide-react';
import { CompanyHeaderBrand } from './CompanyHeaderBrand';
import { CoreValuesSection } from './CoreValuesSection';
import { LeadershipTeamSection } from './LeadershipTeamSection';
import { IndiaPresenceSection } from './IndiaPresenceSection';
import { PrestigiousClientsGallery } from './PrestigiousClientsGallery';
import { FaqSection } from './FaqSection';
import { COMPANY_INFO } from '../data/eaiplData';

interface AboutPageProps {
  onOpenConsultation: (type?: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket') => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenConsultation }) => {
  const historyMilestones = [
    {
      year: '1990s',
      title: 'Company Foundation',
      desc: 'Established in Kolkata as Electro Acoustic Infotech, pioneering high-intelligibility acoustic engineering and public address systems in Eastern India.'
    },
    {
      year: '2000s',
      title: 'Class-I PWD Registration & Digital Audio Expansion',
      desc: 'Achieved Class-I Turnkey EPC vendor status for West Bengal PWD and expanded into digital conference and broadcast system integration.'
    },
    {
      year: '2010s',
      title: 'Pan-India Footprint & High Court Projects',
      desc: 'Expanded regional offices to Delhi NCR, Guwahati, Bhubaneswar, and Hyderabad, executing landmark installations for Calcutta High Court and state secretariats.'
    },
    {
      year: '2020s',
      title: '4K AV-over-IP, MicroLED & Smart Automation',
      desc: 'Leading turnkey integrator for Biswa Bangla Convention Centre, West Bengal Assembly, Coal India HQ, and ultra-luxury residential automation.'
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 font-sans min-h-screen">
      {/* Hero Banner */}
      <section className="bg-white border-b border-emerald-100 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <CompanyHeaderBrand className="mb-3" />

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Corporate Profile & Company Heritage</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                About ELECTRO ACOUSTIC INFOTECH
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                India’s premier Class-I registered Turnkey Engineering System Integrator & EPC Contractor specializing in high-intelligibility electro-acoustics, 4K MicroLED matrixing, digital conference, DMX stage mechanics, and EN54 life-safety voice alarm infrastructure.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenConsultation('Consultation')}
                className="px-6 py-3.5 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-all shadow-2xs flex items-center justify-center gap-2"
              >
                <span>Request Corporate Presentation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Page Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Company Overview Block */}
        <section className="bg-white p-8 sm:p-12 rounded-3xl border border-emerald-200 shadow-xs space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Pioneering Turnkey Engineering Excellence
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Electro Acoustic Infotech Private Limited (EAIPL) delivers end-to-end turnkey engineering systems for government secretariats, legislative assemblies, judicial complexes, educational auditoriums, corporate headquarters, and high-security defense command centers.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Headquartered in Kolkata with regional project offices in Delhi NCR, Guwahati, Bhubaneswar, Ranchi, Patna, Bengaluru, Mumbai, and Hyderabad, our in-house team of acoustic consultants, CTS-D certified engineers, and CAD specialists deliver complete project lifecycles from initial acoustic discovery and 3D EASE simulation to rack fabrication, DSP tuning, and 24/7 SLA-backed AMC maintenance.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-semibold text-emerald-800">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200">
                  <FileCheck2 className="w-4 h-4 text-emerald-600" />
                  <span>Class-I Registered EPC Vendor</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span>ISO 9001:2015 QA Certified</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2">
                Corporate Snapshot
              </h3>
              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                  <span className="font-semibold text-slate-800">Entity Type:</span>
                  <span>Private Limited Company</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                  <span className="font-semibold text-slate-800">Registered Office:</span>
                  <span className="text-slate-900 font-medium">Ballygunge Place, Kolkata</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                  <span className="font-semibold text-slate-800">Govt Registration:</span>
                  <span className="text-emerald-700 font-bold">Class-I Turnkey Vendor</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                  <span className="font-semibold text-slate-800">Quality Management:</span>
                  <span className="text-emerald-700 font-bold">ISO 9001:2015 QA</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
                  <span className="font-semibold text-slate-800">Execution Model:</span>
                  <span>Turnkey EPC Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate History Timeline */}
        <section className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xs space-y-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <History className="w-3.5 h-3.5 text-emerald-600" />
              Over 30 Years of Innovation
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Corporate History & Milestones
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {historyMilestones.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3 relative group hover:border-emerald-400 transition-all"
              >
                <div className="text-emerald-600 font-black text-2xl tracking-tight">
                  {item.year}
                </div>
                <h3 className="text-sm font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Values Section */}
        <CoreValuesSection />

        {/* Leadership Team Section */}
        <LeadershipTeamSection />

        {/* India Presence Section */}
        <IndiaPresenceSection />

        {/* Prestigious Clients Gallery */}
        <PrestigiousClientsGallery />

        {/* FAQ Knowledge Base */}
        <FaqSection />
      </div>
    </div>
  );
};
