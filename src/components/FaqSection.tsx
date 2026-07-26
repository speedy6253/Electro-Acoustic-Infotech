import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ShieldCheck } from 'lucide-react';
import { FAQS } from '../data/eaiplData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white text-[#0F172A] font-sans border-b border-[#D7E8F3]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EDF8FB] border border-[#D7E8F3] text-[#1570EF] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#1570EF]" />
            Client Knowledge Base
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0F172A]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#475569] text-sm mt-2 max-w-xl mx-auto">
            Clear answers regarding EAIPL’s Class-I government vendor status, procurement via GeM portal, turnkey BOQ execution, and AMC SLA support.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#F7FCFF] rounded-xl border border-[#D7E8F3] overflow-hidden transition-all shadow-2xs"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#0F172A] hover:text-[#1570EF] transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded bg-[#EDF8FB] text-[#1570EF] border border-[#D7E8F3] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#1570EF] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-[#D7E8F3] px-5 py-4 bg-white text-xs sm:text-sm text-[#475569] leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
