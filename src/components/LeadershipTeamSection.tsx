import React from 'react';
import { motion } from 'motion/react';
import { LEADERSHIP_TEAM } from '../data/eaiplData';
import { UserCheck, Award, Briefcase, ChevronRight } from 'lucide-react';

export const LeadershipTeamSection: React.FC = () => {
  return (
    <div className="py-12 bg-white font-sans border-t border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
            Executive Leadership & Governance
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Leadership Team
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Guided by seasoned electro-acoustic pioneers, certified CTS-D design engineers, and Class-I government EPC project directors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LEADERSHIP_TEAM.map((leader, idx) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Stripe */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500" />

              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100/70 border-2 border-emerald-500/30 flex items-center justify-center text-emerald-700 font-bold text-xl shrink-0 shadow-inner">
                    {leader.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-emerald-700 transition-colors">
                      {leader.name}
                    </h4>
                    <p className="text-xs font-semibold text-emerald-600">
                      {leader.role}
                    </p>
                    <div className="inline-flex items-center gap-1 text-[11px] text-slate-500 mt-0.5">
                      <Briefcase className="w-3 h-3 text-slate-400" />
                      <span>{leader.designation}</span>
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium mb-3">
                  <Award className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">{leader.credentials}</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {leader.bio}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-emerald-700 font-semibold group-hover:translate-x-1 transition-transform">
                <span>Executive Governance</span>
                <ChevronRight className="w-4 h-4 text-emerald-600" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
