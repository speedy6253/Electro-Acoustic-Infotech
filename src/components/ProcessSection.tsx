import React from 'react';
import { motion } from 'motion/react';
import { Workflow, Headphones, PenTool, Wrench, ShieldCheck, GraduationCap, CheckCircle } from 'lucide-react';

interface ProcessSectionProps {
  onOpenConsultation?: (type?: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket') => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenConsultation }) => {
  const timelineSteps = [
    {
      step: '01',
      title: 'Consultation & Site Survey',
      desc: 'In-depth requirement analysis, acoustic RT60 measurement, ambient noise mapping, and structural assessment.',
      icon: Headphones,
      deliverable: 'Acoustic & AV Briefing Report',
    },
    {
      step: '02',
      title: 'System Design & 3D Simulation',
      desc: '3D EASE acoustic ray-tracing, CAD schematics, BOQ formulation, and OEM equipment selection.',
      icon: PenTool,
      deliverable: '3D Simulation & CAD Layouts',
    },
    {
      step: '03',
      title: 'Precision Supply & Installation',
      desc: 'Factory rack fabrication, structured fiber cabling, stage mounting, and loudspeaker array rigging.',
      icon: Wrench,
      deliverable: 'Class-I Rack & Cabling Assembly',
    },
    {
      step: '04',
      title: 'Tuning, Calibration & Maintenance',
      desc: 'DSP equalisation, STI speech intelligibility testing, video matrix tuning, and 24/7 SLA AMC coverage.',
      icon: ShieldCheck,
      deliverable: 'ISO 9001 Testing & SLA AMC',
    },
    {
      step: '05',
      title: 'Operator Training & Handover',
      desc: 'Comprehensive hands-on client staff training, as-built documentation, and formal project commissioning.',
      icon: GraduationCap,
      deliverable: 'Certified Operator Handover',
    },
  ];

  return (
    <section id="process" className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 via-white to-emerald-50/20 text-slate-900 font-sans border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Workflow className="w-3.5 h-3.5 text-emerald-600" />
            Brochure Execution Standard
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Animated Process Timeline
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Consultation → Design → Installation → Maintenance → Training: EAIPL’s ISO 9001:2015 turnkey engineering lifecycle.
          </p>
        </div>

        {/* Timeline Grid with Connecting Line */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-200 via-emerald-400 to-teal-500 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {timelineSteps.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.12 }}
                  className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center font-bold group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-xs">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                        STEP {item.step}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{item.deliverable}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {onOpenConsultation && (
          <div className="mt-12 text-center">
            <button
              onClick={() => onOpenConsultation('Site Survey')}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all inline-flex items-center gap-2"
            >
              <span>Initiate Phase 01: On-site Acoustic Consultation</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
