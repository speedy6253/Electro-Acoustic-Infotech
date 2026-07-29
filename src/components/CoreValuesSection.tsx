import React from 'react';
import { motion } from 'motion/react';
import { CORE_VALUES } from '../data/eaiplData';
import { ShieldCheck, Lightbulb, Users, Award, Leaf } from 'lucide-react';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  ShieldCheck,
  Lightbulb,
  Users,
  Award,
  Leaf,
};

export const CoreValuesSection: React.FC = () => {
  return (
    <div className="py-12 bg-gradient-to-b from-white via-emerald-50/30 to-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Corporate Ethos & Philosophy
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Our Core Values
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Principles that guide EAIPL’s Class-I engineering execution, direct OEM alliances, and ISO 9001:2015 quality commitments across India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {CORE_VALUES.map((val, idx) => {
            const IconComponent = ICON_MAP[val.iconName] || ShieldCheck;
            return (
              <motion.div
                key={val.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="bg-white rounded-xl p-5 border border-emerald-100/80 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">
                    {val.title}
                  </h4>
                  <div className="text-[11px] font-medium text-emerald-700 mb-2">
                    {val.subtitle}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
