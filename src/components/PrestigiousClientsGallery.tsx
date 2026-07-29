import React from 'react';
import { motion } from 'motion/react';
import { COMPLETE_CLIENT_DIRECTORY } from '../data/eaiplData';
import { Award, Building2, CheckCircle } from 'lucide-react';

export const PrestigiousClientsGallery: React.FC = () => {
  const featuredClients = COMPLETE_CLIENT_DIRECTORY.slice(0, 12);

  return (
    <div className="py-12 bg-white font-sans border-t border-b border-emerald-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            Trusted By India’s Flagship Institutions
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Prestigious Client Portfolio
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Honored system integrator for legislative state assemblies, high courts, central universities, defense establishments, and luxury hospitality chains.
          </p>
        </div>
      </div>

      {/* Marquee Banner Container */}
      <div className="relative w-full overflow-hidden bg-slate-50/80 py-6 border-y border-slate-200/80">
        <div className="flex gap-4 animate-marquee whitespace-nowrap min-w-full">
          {[...featuredClients, ...featuredClients].map((client, idx) => (
            <div
              key={`${client.id}-${idx}`}
              className="inline-flex items-center gap-3 bg-white px-5 py-3 rounded-xl border border-slate-200 shadow-xs hover:border-emerald-300 shrink-0"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0">
                {client.name.substring(0, 2).toUpperCase()}
              </div>
              <div>
                <div className="font-bold text-xs text-slate-800 max-w-[200px] truncate">
                  {client.name}
                </div>
                <div className="text-[10px] text-emerald-700 font-medium">
                  {client.category} • {client.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
