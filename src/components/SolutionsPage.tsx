import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Layers, ArrowRight, Sparkles, CheckCircle2, Search } from 'lucide-react';
import { SOLUTIONS } from '../data/eaiplData';
import { CompanyHeaderBrand } from './CompanyHeaderBrand';
import { IconAsset } from './IconAsset';
import { ExpertiseDiagramSection } from './ExpertiseDiagramSection';
import { ProcessSection } from './ProcessSection';

interface SolutionsPageProps {
  onOpenConsultation: (type?: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket') => void;
  onNavigateSolution: (slug: string) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({
  onOpenConsultation,
  onNavigateSolution
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBadgeFilter, setSelectedBadgeFilter] = useState<string>('All');

  const filterBadges = ['All', 'Core Expertise', 'High Demand', 'Mission-Critical', 'Government Ready', 'Medical Grade', 'Smart Building'];

  const filteredSolutions = SOLUTIONS.filter((sol) => {
    const search = (searchTerm || '').toLowerCase();
    const badgeFilter = (selectedBadgeFilter || '').toLowerCase();

    const matchesSearch =
      (sol.title || '').toLowerCase().includes(search) ||
      (sol.description || '').toLowerCase().includes(search) ||
      (sol.tagline || '').toLowerCase().includes(search);
    const matchesBadge =
      selectedBadgeFilter === 'All' || (sol.badge && (sol.badge || '').toLowerCase().includes(badgeFilter));
    return matchesSearch && matchesBadge;
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
                <Sparkles className="w-3.5 h-3.5" />
                <span>Class-I Turnkey Engineering Portfolio</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
                Turnkey Solutions & Systems Integration
              </h1>

              <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-2xl">
                Explore our turnkey electro-acoustic, audio-visual, security, stage lighting, and building automation domains engineered for government secretariats, defense facilities, corporate headquarters, and medical centers.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenConsultation('RFP')}
                className="px-6 py-3 rounded-lg bg-[#1570EF] text-white text-xs font-bold hover:bg-[#1258C5] transition-all shadow-2xs flex items-center justify-center gap-2"
              >
                <span>Submit RFP / BOQ</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Search & Filter Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-xl border border-[#E2E8F0] shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
            <input
              type="text"
              placeholder="Search solutions by keyword, technology, or feature..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1570EF] transition-all"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {filterBadges.map((badge) => (
              <button
                key={badge}
                onClick={() => setSelectedBadgeFilter(badge)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedBadgeFilter === badge
                    ? 'bg-[#1570EF] text-white'
                    : 'bg-[#F1F5F9] text-[#475569] hover:bg-[#E2E8F0]'
                }`}
              >
                {badge}
              </button>
            ))}
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSolutions.map((sol) => (
            <motion.div
              key={sol.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-2xs hover:border-[#1570EF]/50 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-13 h-13 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] text-[#1570EF] flex items-center justify-center shrink-0 p-0.5">
                    <IconAsset category="solutions" src={sol.icon} alt={sol.title} className="w-11 h-11 text-[#1570EF]" />
                  </div>

                  {sol.badge && (
                    <span className="px-2.5 py-0.5 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#047857] text-[11px] font-bold">
                      {sol.badge}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#1570EF] transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-xs text-[#64748B] mt-1 font-medium">
                    {sol.tagline}
                  </p>
                </div>

                <p className="text-xs text-[#475569] leading-relaxed line-clamp-3">
                  {sol.description}
                </p>

                {/* Key Features Bullet List */}
                <div className="space-y-1.5 pt-2">
                  <span className="text-[11px] font-bold text-[#0F172A] uppercase tracking-wider block">
                    Key Features:
                  </span>
                  <ul className="space-y-1">
                    {sol.keyFeatures.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="text-[11px] text-[#475569] flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-[#10B981] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F1F5F9] flex items-center gap-2">
                <button
                  onClick={() => onNavigateSolution(sol.slug)}
                  className="flex-1 py-2 px-3 rounded-lg bg-[#1570EF] hover:bg-[#1258C5] text-white text-xs font-bold transition-all shadow-2xs flex items-center justify-center gap-2"
                >
                  <span>View Dedicated Solution Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Expertise Matrix */}
        <div className="pt-6">
          <ExpertiseDiagramSection />
        </div>

        {/* Engineering Process Timeline */}
        <div className="pt-6">
          <ProcessSection onOpenConsultation={onOpenConsultation} />
        </div>
      </div>
    </div>
  );
};
