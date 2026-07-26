import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  Award,
  Layers,
  Cpu,
  Building2,
  Lock,
} from 'lucide-react';
import { COMPANY_INFO, METRICS } from '../data/eaiplData';
import { CompanyHeaderBrand } from './CompanyHeaderBrand';

interface QualityPageProps {
  onOpenConsultation?: (type?: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket') => void;
}

export const QualityPage: React.FC<QualityPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans pb-16">
      {/* Header Banner */}
      <section className="bg-[#0F172A] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto space-y-4">
          <CompanyHeaderBrand />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ISO 9001:2015 Certified Quality Management</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl">
            Uncompromising Standards & Quality Assurance
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            EAIPL operates under strict ISO 9001:2015 Quality Management protocols, ensuring Class-I compliance, STI speech intelligibility verification, and OEM-certified turnkey engineering execution.
          </p>
        </div>
      </section>

      {/* Quality Pillar Metrics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {METRICS.map((metric) => (
            <div
              key={metric.id}
              className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-2xs space-y-2"
            >
              <div className="text-emerald-600 font-extrabold text-xl tracking-tight">
                {metric.value}
              </div>
              <div className="font-bold text-xs text-[#0F172A]">{metric.label}</div>
              <p className="text-[11px] text-[#64748B] leading-relaxed">{metric.subtext}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ISO Quality Standards Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-[#1570EF] uppercase tracking-wider">
            Quality Assurance Framework
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
            End-to-End Quality Verification Protocol
          </h2>
          <p className="text-xs text-[#64748B]">
            From pre-bidding acoustic ray tracing to final Factory Acceptance Testing (FAT) and AMC SLA compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] space-y-4 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-[#0F172A]">1. Acoustic Design Verification</h3>
            <ul className="space-y-2 text-xs text-[#475569]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>3D EASE simulation verifying RT60 reverberation time & STI speech intelligibility &gt; 0.65</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Line-of-sight visual & coverage angle verification for display matrixes</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Structural weight & power loading calculation reports</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] space-y-4 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] text-[#1570EF] flex items-center justify-center font-bold">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-[#0F172A]">2. OEM Component Assurance</h3>
            <ul className="space-y-2 text-xs text-[#475569]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1570EF] shrink-0 mt-0.5" />
                <span>100% genuine equipment sourced directly from authorized global OEM partners</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1570EF] shrink-0 mt-0.5" />
                <span>Serial number tracking and OEM Manufacturer Authorization Form (MAF) guarantees</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1570EF] shrink-0 mt-0.5" />
                <span>Pre-deployment rack assembly and burn-in testing at Kolkata lab facility</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] space-y-4 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-[#0F172A]">3. On-Site Acceptance Testing</h3>
            <ul className="space-y-2 text-xs text-[#475569]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                <span>Calibrated pink noise sound pressure level (SPL) mapping across seating grids</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                <span>EN54 voice evacuation failover & emergency broadcast drills</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                <span>Complete handover documentation including CAD schematics & DSP backups</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Certifications Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>Government Registration & Quality Credentials</span>
            </div>
            <h3 className="text-xl font-bold text-[#0F172A]">{COMPANY_INFO.govRegistration}</h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              EAIPL is pre-qualified as a Class-I vendor for central government bodies, defense establishments, state assemblies, and public sector undertakings across India.
            </p>
          </div>

          <button
            onClick={() => onOpenConsultation?.('RFP')}
            className="px-6 py-3 rounded-xl bg-[#1570EF] hover:bg-[#1258C5] text-white font-bold text-xs shadow-md transition-all shrink-0"
          >
            Request Quality Credentials & MAF
          </button>
        </div>
      </section>
    </div>
  );
};
