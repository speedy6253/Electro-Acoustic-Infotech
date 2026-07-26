import React from 'react';
import { motion } from 'motion/react';
import { Award, Quote, Building2, CheckCircle2, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS } from '../data/eaiplData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-slate-900 text-white font-sans border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800 border border-slate-700 text-[#C59B27] text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            Official Commendations & References
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Client Trust & Government Endorsements
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-2 max-w-2xl">
            Verified commendation letters and performance feedback from Chief PWD Engineers, Central University Registrars, and PSU Directors across 25+ years of turnkey execution.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-slate-950/80 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-4 shadow-xl relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#C59B27]/20 text-[#C59B27] border border-[#C59B27]/30 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    {t.badgeText}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{t.year}</span>
                </div>

                <Quote className="w-8 h-8 text-slate-700 mb-2" />

                <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-sm">{t.clientName}</div>
                  <div className="text-xs text-[#C59B27] font-semibold">{t.designation}</div>
                  <div className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                    <Building2 className="w-3 h-3 text-slate-500" />
                    <span>{t.organization}</span>
                  </div>
                </div>

                <div className="text-right text-[10px] text-emerald-400 font-semibold flex items-center gap-1 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20 shrink-0">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Handover Verified</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
