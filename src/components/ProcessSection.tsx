import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageSquareText,
  Scan,
  FileCode2,
  Wrench,
  SlidersHorizontal,
  CheckCircle2,
  Workflow,
  ArrowRight,
  ShieldCheck,
  Award,
} from 'lucide-react';
import { ENGINEERING_STEPS } from '../data/eaiplData';
import { EngineeringStep } from '../types';

interface ProcessSectionProps {
  onOpenConsultation: (type?: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket') => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenConsultation }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const activeStep: EngineeringStep = ENGINEERING_STEPS[activeStepIndex];

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquareText':
        return <MessageSquareText className="w-5 h-5" />;
      case 'Scan':
        return <Scan className="w-5 h-5" />;
      case 'FileCode2':
        return <FileCode2 className="w-5 h-5" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5" />;
      case 'SlidersHorizontal':
        return <SlidersHorizontal className="w-5 h-5" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5" />;
      default:
        return <Workflow className="w-5 h-5" />;
    }
  };

  return (
    <section id="process" className="py-16 sm:py-24 bg-slate-900 text-white font-sans border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800 border border-slate-700 text-[#C59B27] text-xs font-bold uppercase tracking-wider mb-3">
            <Workflow className="w-3.5 h-3.5" />
            ISO 9001 Quality Standard Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            6-Phase Turnkey Engineering Lifecycle
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-2 max-w-2xl">
            From preliminary acoustic ray tracing and AutoCAD schematics to precision rack cabling, DSP calibration, and 24/7 SLA maintenance.
          </p>
        </div>

        {/* Timeline Step Buttons Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {ENGINEERING_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#0B132B] border-[#C59B27] text-white shadow-xl ring-1 ring-[#C59B27]'
                    : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#C59B27]' : 'text-slate-500'}`}>
                    PHASE {step.stepNumber}
                  </span>
                  <div className={`p-1.5 rounded-md ${isActive ? 'bg-[#C59B27] text-slate-950' : 'bg-slate-700 text-slate-300'}`}>
                    {getStepIcon(step.icon)}
                  </div>
                </div>

                <div className="text-xs font-bold line-clamp-2 leading-snug">{step.title}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Step Spotlight Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.stepNumber}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
            className="bg-slate-950/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl backdrop-blur-md"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Description & Deliverables */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono font-bold text-lg text-[#C59B27] bg-slate-900 px-3 py-1 rounded border border-slate-800">
                      Phase {activeStep.stepNumber} of 06
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {activeStep.title}
                    </h3>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-[#C59B27] mb-3">
                    {activeStep.subtitle}
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {activeStep.description}
                  </p>
                </div>

                {/* Key Deliverables List */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Phase Key Deliverables & Documentation
                  </h4>
                  <div className="space-y-2">
                    {activeStep.keyDeliverables.map((item, idx) => (
                      <div key={idx} className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs sm:text-sm text-slate-200 flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Standards & Action */}
              <div className="lg:col-span-5 space-y-6 bg-slate-900 p-6 rounded-xl border border-slate-800">
                <div>
                  <h4 className="text-xs font-bold text-[#C59B27] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    Regulatory & Technical Standards Compliance
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeStep.standardsFollowed.map((std, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded bg-slate-950 border border-slate-800 text-xs font-bold text-slate-200"
                      >
                        {std}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-[#0B132B] rounded-lg border border-slate-800 text-xs text-slate-300 space-y-2">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-[#C59B27]" />
                    Zero-Defect Quality Mandate
                  </div>
                  <p>
                    Every engineering milestone requires dual sign-off from both the EAIPL Chief System Architect and the Client Site Engineer prior to advancing to the next phase.
                  </p>
                </div>

                <button
                  onClick={() => onOpenConsultation('Site Survey')}
                  className="w-full py-3 bg-[#C59B27] hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm rounded-lg shadow transition-all flex items-center justify-center gap-2"
                >
                  <span>Initiate Phase 01 Site Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
