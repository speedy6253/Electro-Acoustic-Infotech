import React from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  Building2,
  Wrench,
  Volume2,
  Tv,
  ArrowRight,
  Layers,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { COMPANY_INFO, BRANCH_OFFICES } from '../data/eaiplData';

interface AboutSectionProps {
  onOpenConsultation: (type?: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket') => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-slate-50 text-slate-900 font-sans border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-200 text-[#0B132B] text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-[#C59B27]" />
            Corporate Profile & Engineering Heritage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B132B]">
            Electro Acoustic Infotech Pvt. Ltd. (EAIPL)
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-2 max-w-3xl leading-relaxed">
            India’s premier Class-I Turnkey EPC Contractor specializing in high-performance electro-acoustics, professional audio-visual matrixing, stage mechanics, and intelligent facility automation.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Story & Credentials */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                Over Quarter-Century of Engineering Leadership
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Founded in <strong>1998</strong> in Kolkata, EAIPL has grown from a specialized acoustic testing laboratory into an enterprise-grade EPC system integrator. We bridge the gap between architectural acoustics and cutting-edge digital signal processing (DSP).
              </p>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Whether deploying a 1,800-seat state cultural auditorium line array, a 24/7 disaster response MicroLED video wall, or 50+ smart classrooms for premier universities, EAIPL manages every phase—from initial CAD ray-tracing simulation to factory rack assembly, DSP calibration, and 24/7 SLA maintenance.
              </p>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-100 text-xs sm:text-sm">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Class-I Govt Contractor</strong>
                    <span className="text-slate-600">Qualified for state PWD, CPWD, and Ministry tender BOQs.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">ISO 9001:2015 QA</strong>
                    <span className="text-slate-600">Standardized design, installation, and AMC procedures.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">50+ Global OEMs</strong>
                    <span className="text-slate-600">Direct authorization from Bose, Bosch, Crestron, Extron & JBL.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">1,500+ Projects Handed Over</strong>
                    <span className="text-slate-600">Zero default record with complete on-time milestone delivery.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Branch Footprint */}
            <div className="p-6 bg-[#0B132B] text-white rounded-xl shadow-md border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-[#C59B27] uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  Regional Footprint & Support Network
                </div>
                <span className="text-xs text-slate-400">Head Office + 4 Service Hubs</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                Direct presence across Eastern India with resident engineers stationed in <strong>Kolkata, Bhubaneswar, Guwahati, Ranchi, and Patna</strong> to guarantee rapid on-site SLA response times.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2 text-center text-xs">
                {BRANCH_OFFICES.map((b) => (
                  <div key={b.city} className="p-2 bg-slate-900 rounded border border-slate-800">
                    <div className="font-bold text-white">{b.city.split(' ')[0]}</div>
                    <div className="text-[10px] text-slate-400 truncate">{b.type.split(' ')[0]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Operational Domains */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-sm font-bold text-[#0B132B] uppercase tracking-wider flex items-center gap-2 border-b border-slate-100 pb-2">
                <Sparkles className="w-4 h-4 text-[#C59B27]" />
                Four Core Engineering Specializations
              </h4>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="font-bold text-slate-900 flex items-center gap-2 mb-1">
                    <Volume2 className="w-4 h-4 text-[#C59B27]" />
                    1. Electro-Acoustic Room Modeling
                  </div>
                  <p className="text-slate-600">
                    3D ray-tracing simulations to eliminate flutter echo, optimize RT60 reverberation times, and guarantee STI speech intelligibility above 0.65 in auditoriums.
                  </p>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="font-bold text-slate-900 flex items-center gap-2 mb-1">
                    <Tv className="w-4 h-4 text-[#C59B27]" />
                    2. 4K MicroLED & AV-over-IP Matrixing
                  </div>
                  <p className="text-slate-600">
                    Sub-50ms ultra-low latency video routing networks powering mission-critical command centers, high court chambers, and executive C-suite boardrooms.
                  </p>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="font-bold text-slate-900 flex items-center gap-2 mb-1">
                    <Layers className="w-4 h-4 text-[#C59B27]" />
                    3. Stage Rigging & DMX Lighting
                  </div>
                  <p className="text-slate-600">
                    Counterweight and motorized stage drapery systems, acoustic shell panels, and computerized DMX512 theatrical lighting consoles.
                  </p>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="font-bold text-slate-900 flex items-center gap-2 mb-1">
                    <Wrench className="w-4 h-4 text-[#C59B27]" />
                    4. Resident AMC & SLA Support
                  </div>
                  <p className="text-slate-600">
                    Comprehensive Annual Maintenance Contracts (CAMC) with dedicated on-site resident technicians, preventive maintenance, and 4-hour SLA hotlines.
                  </p>
                </div>
              </div>

              <button
                onClick={() => onOpenConsultation('Consultation')}
                className="w-full py-3 bg-[#0B132B] hover:bg-slate-900 text-white font-semibold text-xs sm:text-sm rounded-lg transition-colors shadow flex items-center justify-center gap-2"
              >
                <span>Consult EAIPL Senior Engineering Team</span>
                <ArrowRight className="w-4 h-4 text-[#C59B27]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
