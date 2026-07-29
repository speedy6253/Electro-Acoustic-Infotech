import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BRANCH_OFFICES, COMPANY_INFO } from '../data/eaiplData';
import { MapPin, Phone, Mail, Navigation, Building, CheckCircle2, ExternalLink } from 'lucide-react';

export const IndiaPresenceSection: React.FC = () => {
  const [selectedBranchId, setSelectedBranchId] = useState<string>('kolkata');

  const selectedBranch =
    BRANCH_OFFICES.find((b) => b.id === selectedBranchId) || BRANCH_OFFICES[0];

  return (
    <div className="py-12 bg-gradient-to-b from-slate-50 via-emerald-50/20 to-white font-sans border-t border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            Pan-India Service Infrastructure
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            India Presence & Regional Branch Offices
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Headquartered in Kolkata with regional project offices, staging hubs, and resident technical support engineers stationed across major Indian metros.
          </p>
        </div>

        {/* Interactive Location Selector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Office Tabs / Cards List */}
          <div className="lg:col-span-5 space-y-2.5 max-h-[500px] overflow-y-auto pr-1">
            {BRANCH_OFFICES.map((branch) => {
              const isSelected = branch.id === selectedBranchId;
              const isHQ = branch.id === 'kolkata';
              return (
                <button
                  key={branch.id}
                  onClick={() => setSelectedBranchId(branch.id || 'kolkata')}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start justify-between gap-3 ${
                    isSelected
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-md translate-x-1'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/40'
                  }`}
                >
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm truncate">
                        {branch.city}
                      </span>
                      {isHQ && (
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                            isSelected
                              ? 'bg-white/20 text-white'
                              : 'bg-emerald-100 text-emerald-800'
                          }`}
                        >
                          Corporate HQ
                        </span>
                      )}
                    </div>
                    <p
                      className={`text-xs truncate ${
                        isSelected ? 'text-emerald-100' : 'text-slate-500'
                      }`}
                    >
                      {branch.type}
                    </p>
                  </div>
                  <div className="shrink-0 pt-0.5">
                    <MapPin
                      className={`w-4 h-4 ${
                        isSelected ? 'text-white' : 'text-emerald-600'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Selected Office Details Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-emerald-200 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                  {selectedBranch.officeType || 'Regional Office'}
                </span>
                <h4 className="text-xl font-bold text-slate-900">
                  {selectedBranch.officeName || `${selectedBranch.city} Office`}
                </h4>
              </div>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  selectedBranch.mapQuery || selectedBranch.address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold transition-colors border border-emerald-200"
              >
                <Navigation className="w-3.5 h-3.5 text-emerald-600" />
                <span>Get Directions</span>
                <ExternalLink className="w-3 h-3 text-emerald-600" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <Building className="w-4 h-4 text-emerald-600" />
                  <span>Office Address</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  {selectedBranch.address}
                </p>
              </div>

              <div className="space-y-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>Contact Number</span>
                </div>
                <p className="text-xs text-slate-600 pl-6 font-semibold">
                  {selectedBranch.phone}
                </p>

                <div className="flex items-center gap-2 text-xs font-bold text-slate-700 pt-1">
                  <Mail className="w-4 h-4 text-emerald-600" />
                  <span>Official Email</span>
                </div>
                <p className="text-xs text-slate-600 pl-6">
                  {selectedBranch.email}
                </p>
              </div>
            </div>

            {/* Quick Service Commitments */}
            <div className="pt-2">
              <div className="text-xs font-bold text-slate-900 mb-2">
                Regional Execution Capabilities:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] text-slate-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>On-site Acoustic Survey</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Rack Assembly & Wiring</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>24/7 SLA AMC Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
