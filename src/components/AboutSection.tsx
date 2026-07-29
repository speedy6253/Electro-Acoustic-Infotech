import React from 'react';
import {
  Building2,
  CheckCircle2,
  Award,
  ShieldCheck,
  Layers,
  ArrowRight,
  FileCheck2,
} from 'lucide-react';
import { NavView } from './Header';

interface AboutSectionProps {
  onOpenConsultation: (type?: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket') => void;
  onNavigate?: (view: NavView, param?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation, onNavigate }) => {
  const highlights = [
    {
      title: 'Class-I Turnkey EPC Contractor',
      desc: 'Qualified turnkey system integrator for state PWD, CPWD, PSUs, and Ministry infrastructure projects.',
      icon: Award
    },
    {
      title: 'Full-Lifecycle Engineering',
      desc: 'End-to-end execution from 3D acoustic simulation to rack fabrication, DSP tuning, and AMC support.',
      icon: Layers
    },
    {
      title: 'ISO 9001:2015 QA Certified',
      desc: 'Rigorous quality management protocols ensuring zero-defect handover and standardized maintenance SLAs.',
      icon: ShieldCheck
    },
    {
      title: 'Authorized OEM Integrator',
      desc: 'Direct partnerships with world-leading pro-audio, AV-over-IP, and stage mechanics manufacturers.',
      icon: CheckCircle2
    }
  ];

  const handleLearnMore = () => {
    if (onNavigate) {
      onNavigate('about');
    } else {
      window.location.hash = 'about';
    }
  };

  return (
    <section id="about" className="py-14 sm:py-16 bg-white text-slate-900 font-sans border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Short Who We Are Overview */}
        <div className="bg-gradient-to-br from-white via-emerald-50/40 to-slate-50 p-6 sm:p-10 rounded-3xl border border-emerald-200/80 shadow-xs space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-4 h-4 text-emerald-600" />
            Company Overview
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Pioneering Electro-Acoustics & Turnkey AV Engineering
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Electro Acoustic Infotech Private Limited (EAIPL) is India’s premier Class-I Registered Turnkey Engineering System Integrator and EPC Contractor. Over three decades, EAIPL has delivered turnkey projects across West Bengal Assembly, High Court, Coal India, state secretariats, and convention centers.
              </p>
              
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-semibold text-emerald-800">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200">
                  <FileCheck2 className="w-4 h-4 text-emerald-600" />
                  <span>Class-I Registered EPC Vendor</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span>ISO 9001:2015 Certified</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-emerald-200 shadow-xs space-y-3">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Corporate Snapshot
              </h3>
              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex justify-between items-center py-1 border-b border-slate-50">
                  <span className="font-semibold text-slate-800">Headquarters:</span>
                  <span>Ballygunge Place, Kolkata</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-50">
                  <span className="font-semibold text-slate-800">Govt Status:</span>
                  <span className="text-emerald-700 font-bold">Class-I Turnkey Vendor</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-50">
                  <span className="font-semibold text-slate-800">Quality Standard:</span>
                  <span className="text-emerald-700 font-bold">ISO 9001:2015 QA</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleLearnMore}
                  className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
                >
                  <span>Learn More About EAIPL</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Engineering Highlights Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2 flex flex-col justify-between hover:border-emerald-300 transition-all"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-emerald-100/80 border border-emerald-200 text-emerald-700 flex items-center justify-center mb-2">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
