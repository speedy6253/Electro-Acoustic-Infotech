import React from 'react';
import { Workflow } from 'lucide-react';
import { IconAsset } from './IconAsset';

interface ProcessSectionProps {
  onOpenConsultation: (type?: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket') => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = () => {
  const processSteps = [
    {
      title: 'Site Survey',
      desc: 'Comprehensive on-site acoustic measurement, ambient noise mapping, and structural assessment.',
      icon: '/assets/icons/process/site-survey.png'
    },
    {
      title: 'System Design',
      desc: '3D EASE acoustic ray-tracing, AutoCAD schematics, and BOQ system architecture formulation.',
      icon: '/assets/icons/process/design.png'
    },
    {
      title: 'Procurement',
      desc: 'Direct OEM sourcing of genuine pro-audio, 4K display walls, and EN54 safety hardware.',
      icon: '/assets/icons/process/procurement.png'
    },
    {
      title: 'Installation',
      desc: 'Factory rack fabrication, structured fiber cabling, and precision stage mounting.',
      icon: '/assets/icons/process/installation.png'
    },
    {
      title: 'Testing',
      desc: 'Multi-point STI speech intelligibility calibration, DSP tuning, and video matrix testing.',
      icon: '/assets/icons/process/testing.png'
    },
    {
      title: 'Handover',
      desc: 'Complete as-built documentation, operator training, and ISO certified warranty handover.',
      icon: '/assets/icons/process/handover.png'
    }
  ];

  return (
    <section id="process" className="py-16 sm:py-20 bg-[#F8FAFC] text-[#0F172A] font-sans border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#1D4ED8] text-xs font-bold uppercase tracking-wider border border-[#BFDBFE]">
            <Workflow className="w-3.5 h-3.5" />
            Engineering Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">
            6-Phase Turnkey Process
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            ISO 9001:2015 quality-certified lifecycle for zero-defect turnkey system integration.
          </p>
        </div>

        {/* Six Clean Icon Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-2xs space-y-3 hover:border-[#1570EF]/40 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="w-13 h-13 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] text-[#1570EF] flex items-center justify-center shrink-0 p-0.5">
                    <IconAsset category="process" src={step.icon} alt={step.title} className="w-11 h-11 text-[#1570EF]" />
                  </div>
                  <span className="text-xs font-mono font-extrabold text-[#94A3B8] bg-[#F8FAFC] px-2.5 py-1 rounded border border-[#E2E8F0]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#0F172A]">
                  {step.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
