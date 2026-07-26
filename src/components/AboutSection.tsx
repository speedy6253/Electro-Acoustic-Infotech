import React from 'react';
import { motion } from 'motion/react';
import {
  Building2,
  CheckCircle2,
  Award,
  ShieldCheck,
  Layers,
  ArrowRight
} from 'lucide-react';

interface AboutSectionProps {
  onOpenConsultation: (type?: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket') => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  const highlights = [
    {
      title: 'Class-I Turnkey EPC Contractor',
      desc: 'Qualified turnkey system integrator for state PWD, CPWD, PSUs, and Ministry infrastructure projects.',
      icon: Award
    },
    {
      title: 'Full-Lifecycle Systems Engineering',
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

  return (
    <section id="about" className="py-16 sm:py-20 bg-[#F8FAFC] text-[#0F172A] font-sans border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1D4ED8] text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            Corporate Profile
          </div>
          <h2 className="font-germania text-3xl sm:text-4xl lg:text-5xl font-normal tracking-wide text-[#0F172A] antialiased">
            Electro Acoustic Infotech <span className="text-[#1570EF]">Pvt. Ltd.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            India’s premier Class-I Turnkey System Integrator specializing in high-intelligibility electro-acoustics, 4K video matrixing, DMX stage mechanics, and EN54 voice alarm infrastructure.
          </p>
        </div>

        {/* 4 Engineering Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-xs space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] text-[#1570EF] flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#0F172A] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Single CTA */}
        <div className="text-center">
          <button
            onClick={() => onOpenConsultation('Consultation')}
            className="px-6 py-3 bg-[#1570EF] hover:bg-[#1258C5] text-white font-bold text-xs sm:text-sm rounded-lg shadow-xs transition-all inline-flex items-center gap-2"
          >
            <span>Schedule Corporate Engineering Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
