import React from 'react';
import { Award, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/eaiplData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-[#F8FAFC] text-[#0F172A] font-sans border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#1D4ED8] text-xs font-bold uppercase tracking-wider border border-[#BFDBFE]">
            <Award className="w-3.5 h-3.5" />
            Commendations
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">
            Client Endorsements
          </h2>
        </div>

        {/* Testimonials Grid with Larger Quotations & Clean Typography */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-xl border border-[#E2E8F0] p-8 shadow-xs flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <Quote className="w-10 h-10 text-[#1570EF]/30" />
                <p className="text-base sm:text-lg lg:text-xl font-medium text-[#0F172A] italic leading-snug">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0]">
                <div className="font-bold text-sm text-[#0F172A]">{t.clientName}</div>
                <div className="text-xs text-[#64748B] font-medium truncate">
                  {t.designation} • {t.organization}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
