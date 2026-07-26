import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Building2,
  HelpCircle,
  ShieldCheck,
  FileText,
  Layers,
  ChevronDown
} from 'lucide-react';
import { SOLUTIONS, PROJECT_CASE_STUDIES } from '../data/eaiplData';
import { CompanyHeaderBrand } from './CompanyHeaderBrand';
import { SocialVideoEmbed } from './SocialVideoEmbed';

interface SolutionDetailPageProps {
  slug: string;
  onBackToSolutions: () => void;
  onOpenConsultation: (type?: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket') => void;
}

export const SolutionDetailPage: React.FC<SolutionDetailPageProps> = ({
  slug,
  onBackToSolutions,
  onOpenConsultation
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const solution = SOLUTIONS.find((s) => s.slug === slug) || SOLUTIONS[0];

  // Find related projects matching this solution or category
  const relatedProjects = PROJECT_CASE_STUDIES.filter(
    (p) => {
      const solTitle = (solution?.title || '').toLowerCase();
      const solSlug = (solution?.slug || '').toLowerCase();
      return (
        (p.category || '').toLowerCase().includes(solTitle) ||
        (p.summary || '').toLowerCase().includes(solSlug) ||
        (p.solution || '').toLowerCase().includes(solTitle)
      );
    }
  ).slice(0, 3);

  const displayProjects =
    relatedProjects.length > 0 ? relatedProjects : PROJECT_CASE_STUDIES.slice(0, 3);

  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] font-sans min-h-screen">
      {/* SECTION 1: Hero */}
      <section className="bg-white border-b border-[#E2E8F0] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-6">
          <button
            onClick={onBackToSolutions}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F1F5F9] hover:bg-[#E2E8F0] text-xs font-bold text-[#475569] transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Solutions</span>
          </button>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <CompanyHeaderBrand className="mb-3" />

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1D4ED8] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Dedicated Enterprise Solution</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
                {solution.title}
              </h1>

              <p className="text-base sm:text-lg text-[#475569] font-medium leading-relaxed">
                {solution.tagline}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {solution.equipmentBrands.map((brand, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-[#F8FAFC] border border-[#CBD5E1] text-[11px] font-semibold text-[#475569]"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenConsultation('RFP')}
                className="px-6 py-3.5 rounded-lg bg-[#1570EF] text-white text-xs font-bold hover:bg-[#1258C5] transition-all shadow-2xs flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Request {solution.title} BOQ</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* SECTION 2: Overview & Hero Image */}
        <section className="bg-white rounded-2xl border border-[#E2E8F0] shadow-2xs p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#1570EF]" />
              Solution Overview
            </h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              {solution.description}
            </p>

            {solution.sampleDeliverables && solution.sampleDeliverables.length > 0 && (
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 space-y-2 mt-4">
                <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider block">
                  Standard Engineering Deliverables:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {solution.sampleDeliverables.map((deliv, idx) => (
                    <li key={idx} className="text-xs text-[#475569] flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#1570EF] shrink-0" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="lg:col-span-5 rounded-xl overflow-hidden border border-[#CBD5E1] shadow-2xs bg-[#F1F5F9]">
            <img
              src={solution.heroImage || '/assets/hero/homepage-hero.jpg'}
              alt={solution.title}
              className="w-full h-64 sm:h-80 object-cover"
            />
          </div>
        </section>

        {/* SECTION 3: Applications & Key Features */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Applications */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-2xs p-6 sm:p-8 space-y-6">
            <h3 className="text-lg sm:text-xl font-extrabold text-[#0F172A] flex items-center gap-2">
              <Building2 className="w-5 h-5 text-[#1570EF]" />
              Target Applications
            </h3>
            <div className="space-y-3">
              {(solution.applications || [
                'Government Secretariats & Legislative Halls',
                'Corporate Headquarters & Executive Boardrooms',
                'Colleges, Universities & Medical Auditoriums',
                'Command & Control Operation Centers'
              ]).map((app, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#1570EF] shrink-0" />
                  <span className="text-xs font-semibold text-[#0F172A]">{app}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-2xs p-6 sm:p-8 space-y-6">
            <h3 className="text-lg sm:text-xl font-extrabold text-[#0F172A] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
              Core Technical Features
            </h3>
            <ul className="space-y-3">
              {solution.keyFeatures.map((feat, idx) => (
                <li key={idx} className="p-3.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-[#0F172A] leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 4: Project Examples */}
        <section className="bg-white rounded-2xl border border-[#E2E8F0] shadow-2xs p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E2E8F0] pb-4">
            <div>
              <h3 className="text-xl font-extrabold text-[#0F172A]">Executed Project Examples</h3>
              <p className="text-xs text-[#64748B] mt-0.5">
                Real-world Class-I installations featuring {solution.title}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayProjects.map((proj) => (
              <div
                key={proj.id}
                className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] overflow-hidden flex flex-col justify-between hover:border-[#1570EF]/40 transition-all"
              >
                {proj.type === 'facebook-reel' || proj.mediaType === 'facebook-reel' || proj.reelUrl ? (
                  <div className="p-3 bg-[#0F172A] flex justify-center">
                    <div className="w-full max-w-[300px]">
                      <SocialVideoEmbed
                        reelUrl={proj.reelUrl!}
                        title={proj.title}
                        aspectRatio="portrait"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="h-40 overflow-hidden bg-[#E2E8F0]">
                    <img
                      src={proj.heroImage}
                      alt={proj.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-5 space-y-2 flex-1">
                  <div className="flex items-center justify-between text-[11px] text-[#64748B] font-semibold">
                    <span>{proj.clientType}</span>
                    <span>{proj.location}</span>
                  </div>
                  <h4 className="text-sm font-bold text-[#0F172A] line-clamp-2">{proj.title}</h4>
                  <p className="text-xs text-[#475569] line-clamp-3">{proj.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: Related Industries */}
        {solution.relatedIndustries && solution.relatedIndustries.length > 0 && (
          <section className="bg-white rounded-2xl border border-[#E2E8F0] shadow-2xs p-6 sm:p-8 space-y-4">
            <h3 className="text-lg font-bold text-[#0F172A]">Related Industry Sectors</h3>
            <div className="flex flex-wrap gap-3">
              {solution.relatedIndustries.map((ind, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] text-[#1D4ED8] text-xs font-bold"
                >
                  {ind}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 6: FAQ */}
        {solution.faq && solution.faq.length > 0 && (
          <section className="bg-white rounded-2xl border border-[#E2E8F0] shadow-2xs p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-extrabold text-[#0F172A] flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#1570EF]" />
              Frequently Asked Questions
            </h3>

            <div className="space-y-3">
              {solution.faq.map((item, idx) => (
                <div
                  key={idx}
                  className="border border-[#E2E8F0] rounded-xl overflow-hidden bg-[#F8FAFC]"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full p-4 text-left font-bold text-xs sm:text-sm text-[#0F172A] flex items-center justify-between gap-4 hover:bg-[#F1F5F9] transition-colors"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#1570EF] transition-transform ${
                        openFaqIndex === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {openFaqIndex === idx && (
                    <div className="px-4 pb-4 pt-1 text-xs text-[#475569] leading-relaxed border-t border-[#E2E8F0] bg-white">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 7: CTA */}
        <section className="bg-[#1570EF] rounded-2xl p-8 sm:p-12 text-white text-center space-y-6 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Ready to Implement {solution.title}?
          </h2>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Our Class-I engineering team at ELECTRO ACOUSTIC INFOTECH PRIVATE LIMITED is available for site surveys, acoustic calculations, and tender BOQ drafting.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenConsultation('Site Survey')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-white text-[#1570EF] hover:bg-blue-50 text-xs font-bold transition-all shadow-2xs"
            >
              {solution.cta || 'Schedule Site Survey & Consultation'}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
