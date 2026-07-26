import React from 'react';
import { motion } from 'motion/react';
import {
  FileText,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  Award,
  Volume2,
  Tv,
  Building2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { COMPANY_INFO, METRICS } from '../data/eaiplData';

interface HeroProps {
  onOpenConsultation: (type?: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative bg-[#0B132B] text-white overflow-hidden pt-8 sm:pt-12 pb-16 sm:pb-24 border-b border-slate-800">
      {/* Background Subtle Technical Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#1C2541_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />
      
      {/* Glow highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#3A86FF]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Trust Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-[#C59B27]/40 text-slate-200 text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm"
        >
          <Award className="w-4 h-4 text-[#C59B27]" />
          <span>India’s Leading Turnkey Electro-Acoustic & AV EPC System Integrator</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
          <span className="text-[#C59B27] font-semibold">Class-I Govt Approved</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines & Call to Action */}
          <div className="lg:col-span-7 space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              Pioneering <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#C59B27]">Electro-Acoustic</span> & Turnkey AV Engineering
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-normal"
            >
              For over <strong className="text-white">25 years</strong>, EAIPL has designed, engineered, and integrated high-intelligibility sound reinforcement, 4K MicroLED video walls, DMX stage mechanics, and EN54 life-safety systems for India's largest auditoriums, High Courts, universities, and command centers.
            </motion.p>

            {/* Key Assurance Bullet Strip */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-300 font-medium"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C59B27] shrink-0" />
                <span>3D EASE Acoustic Ray-Tracing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C59B27] shrink-0" />
                <span>50+ OEM Brand Authorizations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C59B27] shrink-0" />
                <span>100% ISO 9001:2015 QA Protocols</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C59B27] shrink-0" />
                <span>24/7 Dedicated AMC SLA Support</span>
              </div>
            </motion.div>

            {/* CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              <button
                onClick={() => onOpenConsultation('RFP')}
                className="px-6 py-3.5 bg-[#C59B27] hover:bg-amber-600 text-slate-950 font-bold text-sm rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
              >
                <FileText className="w-4 h-4" />
                <span>Submit RFP / Tender BOQ</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onOpenConsultation('Site Survey')}
                className="px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-white font-semibold text-sm rounded-lg border border-slate-700 hover:border-slate-500 transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#C59B27]" />
                <span>Schedule Acoustic Site Survey</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Visual Stage / Auditorium Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 group">
              {/* Main Visual Image */}
              <img
                src="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1200&q=80"
                alt="EAIPL Auditorium Electro-Acoustic Integration"
                className="w-full h-[380px] sm:h-[440px] object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-black/30" />

              {/* Live Overlay Badge: Acoustic Spec */}
              <div className="absolute top-4 left-4 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800 text-xs text-white shadow-lg space-y-1 max-w-[220px]">
                <div className="flex items-center gap-1.5 text-[#C59B27] font-bold">
                  <Volume2 className="w-4 h-4" />
                  <span>EASE Acoustic Modeling</span>
                </div>
                <p className="text-[11px] text-slate-300">
                  Targeted RT60: <strong className="text-white">1.1s</strong> | STI Score: <strong className="text-emerald-400">0.72 Excellent</strong>
                </p>
              </div>

              {/* Live Overlay Badge: Command Center / Fine Pitch LED */}
              <div className="absolute bottom-4 right-4 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800 text-xs text-white shadow-lg space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <Tv className="w-4 h-4" />
                  <span>Fine-Pitch MicroLED Wall</span>
                </div>
                <p className="text-[11px] text-slate-300">
                  0.9mm Pixel Pitch • 4K60 Zero Latency
                </p>
              </div>

              {/* Center Floating Trust Seal */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="p-4 rounded-full bg-slate-950/70 border border-[#C59B27]/50 backdrop-blur-md text-center text-white">
                  <span className="font-mono text-xl font-bold text-[#C59B27]">25+ YEARS</span>
                  <div className="text-[9px] uppercase tracking-widest text-slate-300 font-semibold">Engineering Legacy</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Numbers Bar */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
          {METRICS.map((metric) => (
            <div key={metric.id} className="p-3 sm:p-4 border-l-2 border-[#C59B27] pl-4">
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-200 mt-0.5">
                {metric.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                {metric.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
