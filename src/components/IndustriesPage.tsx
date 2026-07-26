import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Building2, Sparkles, ArrowRight, CheckCircle2, FileText, Search } from 'lucide-react';
import { INDUSTRIES, PROJECT_CASE_STUDIES } from '../data/eaiplData';
import { CompanyHeaderBrand } from './CompanyHeaderBrand';
import { IconAsset } from './IconAsset';

interface IndustriesPageProps {
  onOpenConsultation: (type?: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket') => void;
  onNavigateSolution?: (slug: string) => void;
  onNavigateProjects?: () => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({
  onOpenConsultation,
  onNavigateSolution,
  onNavigateProjects
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredIndustries = INDUSTRIES.filter((ind) => {
    const nameStr = (ind.name || ind.title || '').toLowerCase();
    const descStr = (ind.description || ind.subtitle || '').toLowerCase();
    const search = (searchTerm || '').toLowerCase();
    const needs = ind.primaryNeeds || [];
    return (
      nameStr.includes(search) ||
      descStr.includes(search) ||
      needs.some((need) => (need || '').toLowerCase().includes(search))
    );
  });

  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] font-sans min-h-screen">
      {/* Hero Section */}
      <section className="bg-white border-b border-[#E2E8F0] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <CompanyHeaderBrand className="mb-3" />

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1D4ED8] text-xs font-semibold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" />
                <span>Sector Specialization & Expertise</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
                Industries We Serve
              </h1>

              <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-2xl">
                Providing specialized electro-acoustic, AV, security, and building automation solutions tailored to the strict regulatory and operational demands of key sectors.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenConsultation('Site Survey')}
                className="px-6 py-3 rounded-lg bg-[#1570EF] text-white text-xs font-bold hover:bg-[#1258C5] transition-all shadow-2xs flex items-center justify-center gap-2"
              >
                <span>Book Industry Site Survey</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Search Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-xl border border-[#E2E8F0] shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
            <input
              type="text"
              placeholder="Search industries by sector, need, or technology..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1570EF] transition-all"
            />
          </div>

          <div className="text-xs text-[#64748B] font-semibold">
            Showing <span className="text-[#0F172A] font-bold">{filteredIndustries.length}</span> Industry Sectors
          </div>
        </div>

        {/* Industries Grid */}
        <div className="space-y-8">
          {filteredIndustries.map((ind) => {
            const indName = (ind.name || ind.title || '').toLowerCase();
            const industryProjects = PROJECT_CASE_STUDIES.filter(
              (p) => (p.clientType || '').toLowerCase().includes(indName) || (p.sector || '').toLowerCase() === indName
            );

            return (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl border border-[#E2E8F0] shadow-2xs p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] text-[#1570EF] flex items-center justify-center font-bold text-sm shrink-0 p-0.5">
                        <IconAsset category="industries" src={ind.icon} name={ind.id} alt={ind.name} className="w-10 h-10 text-[#1570EF]" />
                      </div>
                      <h2 className="text-2xl font-extrabold text-[#0F172A]">
                        {ind.name}
                      </h2>
                    </div>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {ind.description}
                    </p>
                  </div>

                  {/* Sector Primary Needs */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider block">
                      Primary Operational & Regulatory Needs:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {ind.primaryNeeds.map((need, idx) => (
                        <div key={idx} className="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                          <span className="text-xs text-[#334155] font-semibold">{need}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deployed Solutions */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider block">
                      Deployed EAIPL Solutions:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {ind.deployedSolutions.map((solName, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-md bg-[#EFF6FF] border border-[#BFDBFE] text-[#1D4ED8] text-xs font-bold"
                        >
                          {solName}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-6 space-y-6 flex flex-col justify-between">
                  {/* Featured Case Study Link if available */}
                  {industryProjects.length > 0 && (
                    <div className="space-y-2">
                      <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider block">
                        Featured Case Study:
                      </span>
                      <div className="text-xs font-bold text-[#0F172A] line-clamp-1">
                        {industryProjects[0].title}
                      </div>
                    </div>
                  )}

                  <div className="pt-2 flex flex-col gap-2">
                    {onNavigateProjects && (
                      <button
                        onClick={onNavigateProjects}
                        className="w-full py-2.5 px-3 rounded-lg bg-[#1570EF] text-white text-xs font-bold hover:bg-[#1258C5] transition-all flex items-center justify-center gap-2"
                      >
                        <span>View {ind.name} Projects</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                    <button
                      onClick={() => onOpenConsultation('RFP')}
                      className="w-full py-2 px-3 rounded-lg bg-white border border-[#CBD5E1] text-[#0F172A] hover:bg-[#F1F5F9] text-xs font-bold transition-all flex items-center justify-center gap-2"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Submit RFP for {ind.name}</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
