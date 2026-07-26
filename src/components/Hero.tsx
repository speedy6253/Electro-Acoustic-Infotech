import React from 'react';
import { motion } from 'motion/react';
import { FileText, Calendar, ArrowRight } from 'lucide-react';
import { METRICS } from '../data/eaiplData';
import { CompanyHeaderBrand } from './CompanyHeaderBrand';

interface HeroProps {
  onOpenConsultation: (type?: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative bg-[#F7FCFF] text-[#0F172A] overflow-hidden pt-6 sm:pt-10 pb-12 sm:pb-20 border-b border-[#D7E8F3]">
      {/* Background Subtle Technical Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#1570EF_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        {/* Company Corporate Heading - Displayed cleanly above the Hero Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <CompanyHeaderBrand subtitle="Enterprise Electro-Acoustic, Professional AV & Turnkey Infrastructure" />

          {/* Clean Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenConsultation('RFP')}
              className="px-5 py-2.5 bg-[#1570EF] hover:bg-[#1258C5] text-white font-bold text-xs sm:text-sm rounded-lg shadow-xs hover:shadow-md transition-all flex items-center gap-2 group cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Submit RFP / Tender BOQ</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onOpenConsultation('Site Survey')}
              className="px-5 py-2.5 bg-white hover:bg-[#EAF5FF] text-[#0F172A] font-semibold text-xs sm:text-sm rounded-lg border border-[#D7E8F3] hover:border-[#1570EF]/40 transition-all flex items-center gap-2 shadow-2xs cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#1570EF]" />
              <span>Schedule Site Survey</span>
            </button>
          </div>
        </div>

        {/* Unobstructed Landscape Production Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full rounded-2xl overflow-hidden border border-[#D7E8F3] shadow-lg bg-white"
        >
          <img
            src="/assets/hero/homepage-hero.jpg"
            alt="Electro Acoustic Infotech Pvt. Ltd. (EAIPL) - Official Banner"
            className="w-full h-auto object-contain sm:object-cover max-h-[520px] md:max-h-[640px] lg:max-h-[740px] mx-auto block object-center"
            loading="eager"
            decoding="async"
          />
        </motion.div>

        {/* Corporate Performance Metrics Bar below Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 sm:p-6 rounded-2xl bg-white border border-[#D7E8F3] shadow-2xs"
        >
          {METRICS.map((metric) => (
            <div key={metric.id} className="p-3 sm:p-4 border-l-4 border-[#1570EF] pl-4">
              <div className="text-lg sm:text-xl font-extrabold text-[#0F172A] tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#1570EF] mt-0.5">
                {metric.label}
              </div>
              <div className="text-xs text-[#64748B] mt-1 leading-relaxed">
                {metric.subtext}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
