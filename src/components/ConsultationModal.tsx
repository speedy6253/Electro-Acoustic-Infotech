import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Send,
  CheckCircle2,
  PhoneCall,
  FileText,
  Calendar,
  Building2,
  Wrench,
  ShieldCheck,
  Award,
} from 'lucide-react';
import { ConsultationFormData } from '../types';
import { COMPANY_INFO } from '../data/eaiplData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket';
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialType = 'Consultation',
}) => {
  const [requestType, setRequestType] = useState<'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket'>(
    initialType
  );
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    clientType: 'Government / PSU',
    serviceCategory: 'Pro Audio & Electro-Acoustics',
    projectBudget: '₹25 Lakhs - ₹1 Crore',
    projectTimeline: 'Immediate (1-3 months)',
    location: '',
    projectDetails: '',
    requestType: initialType,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-3xl bg-white rounded-xl shadow-xl border border-[#D7E8F3] overflow-hidden my-8"
        >
          {/* Top Header Bar */}
          <div className="bg-[#1570EF] text-white p-6 sm:p-8 flex items-start justify-between border-b border-[#2E90FA]/20">
            <div>
              <div className="flex items-center gap-2 text-white/90 text-xs font-semibold tracking-wider uppercase mb-1">
                <ShieldCheck className="w-4 h-4 text-white" />
                EAIPL Enterprise Engineering Portal
              </div>
              <h3 id="modal-title" className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                {requestType === 'RFP' && 'Submit Request for Proposal (RFP / Tender)'}
                {requestType === 'Site Survey' && 'Schedule Electro-Acoustic Site Survey'}
                {requestType === 'Consultation' && 'Book Expert Engineering Consultation'}
                {requestType === 'AMC Ticket' && 'Log Priority AMC Support Request'}
              </h3>
              <p className="text-white/80 text-xs sm:text-sm mt-1">
                Direct engagement with EAIPL Senior Systems Architects & Acoustic Engineers.
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Request Type Selector Tabs */}
          <div className="bg-[#EDF8FB] p-2 border-b border-[#D7E8F3] grid grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-2">
            <button
              type="button"
              onClick={() => {
                setRequestType('Consultation');
                setFormData((p) => ({ ...p, requestType: 'Consultation' }));
              }}
              className={`py-2 px-3 text-xs font-semibold rounded-md transition-all flex items-center justify-center gap-1.5 ${
                requestType === 'Consultation'
                  ? 'bg-white text-[#1570EF] shadow-2xs border border-[#D7E8F3] font-bold'
                  : 'text-[#475569] hover:text-[#1570EF] hover:bg-white/50'
              }`}
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#1570EF]" />
              Consultation
            </button>
            <button
              type="button"
              onClick={() => {
                setRequestType('Site Survey');
                setFormData((p) => ({ ...p, requestType: 'Site Survey' }));
              }}
              className={`py-2 px-3 text-xs font-semibold rounded-md transition-all flex items-center justify-center gap-1.5 ${
                requestType === 'Site Survey'
                  ? 'bg-white text-[#1570EF] shadow-2xs border border-[#D7E8F3] font-bold'
                  : 'text-[#475569] hover:text-[#1570EF] hover:bg-white/50'
              }`}
            >
              <Calendar className="w-3.5 h-3.5 text-[#1570EF]" />
              Site Survey
            </button>
            <button
              type="button"
              onClick={() => {
                setRequestType('RFP');
                setFormData((p) => ({ ...p, requestType: 'RFP' }));
              }}
              className={`py-2 px-3 text-xs font-semibold rounded-md transition-all flex items-center justify-center gap-1.5 ${
                requestType === 'RFP'
                  ? 'bg-white text-[#1570EF] shadow-2xs border border-[#D7E8F3] font-bold'
                  : 'text-[#475569] hover:text-[#1570EF] hover:bg-white/50'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-[#1570EF]" />
              Submit RFP
            </button>
            <button
              type="button"
              onClick={() => {
                setRequestType('AMC Ticket');
                setFormData((p) => ({ ...p, requestType: 'AMC Ticket' }));
              }}
              className={`py-2 px-3 text-xs font-semibold rounded-md transition-all flex items-center justify-center gap-1.5 ${
                requestType === 'AMC Ticket'
                  ? 'bg-white text-[#1570EF] shadow-2xs border border-[#D7E8F3] font-bold'
                  : 'text-[#475569] hover:text-[#1570EF] hover:bg-white/50'
              }`}
            >
              <Wrench className="w-3.5 h-3.5 text-[#1570EF]" />
              AMC Support
            </button>
          </div>

          {/* Form Content or Submission Confirmation */}
          <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto bg-white">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-[#0F172A] mb-2">
                  Request Successfully Registered
                </h4>
                <p className="text-[#475569] text-sm max-w-md mx-auto mb-6">
                  Thank you, <strong className="text-[#0F172A]">{formData.fullName}</strong>.
                  Your reference ID is <span className="font-mono text-[#1570EF] bg-[#EDF8FB] px-2 py-0.5 rounded font-bold border border-[#D7E8F3]">EAIPL-{Math.floor(100000 + Math.random() * 900000)}</span>. An EAIPL senior engineer will contact you within 2 business hours.
                </p>

                <div className="p-4 bg-[#F7FCFF] rounded-lg border border-[#D7E8F3] text-left text-xs text-[#475569] space-y-2 mb-6 max-w-lg mx-auto">
                  <div className="font-semibold text-[#0F172A] border-b border-[#D7E8F3] pb-1">
                    Logged Request Summary:
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <strong>Organization:</strong> {formData.organization || 'N/A'}
                    </div>
                    <div>
                      <strong>Sector:</strong> {formData.clientType}
                    </div>
                    <div>
                      <strong>Service Scope:</strong> {formData.serviceCategory}
                    </div>
                    <div>
                      <strong>Type:</strong> {formData.requestType}
                    </div>
                  </div>
                </div>

                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 bg-[#1570EF] text-white font-medium text-sm rounded-lg hover:bg-[#1258C5] transition-colors shadow-2xs"
                >
                  Return to Website
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Er. Rajesh Kumar"
                      className="w-full px-3.5 py-2.5 bg-[#F7FCFF] border border-[#D7E8F3] rounded-lg text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1570EF] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-1">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. r.kumar@gov.in or company.com"
                      className="w-full px-3.5 py-2.5 bg-[#F7FCFF] border border-[#D7E8F3] rounded-lg text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1570EF] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98300 00000"
                      className="w-full px-3.5 py-2.5 bg-[#F7FCFF] border border-[#D7E8F3] rounded-lg text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1570EF] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-1">
                      Organization / Dept *
                    </label>
                    <input
                      type="text"
                      name="organization"
                      required
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="e.g. PWD / IIT / Coal India / Hospital"
                      className="w-full px-3.5 py-2.5 bg-[#F7FCFF] border border-[#D7E8F3] rounded-lg text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1570EF] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-1">
                      Sector Classification
                    </label>
                    <select
                      name="clientType"
                      value={formData.clientType}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-[#F7FCFF] border border-[#D7E8F3] rounded-lg text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1570EF] focus:border-transparent transition-all"
                    >
                      <option value="Government / PSU">Government / PSU / Ministry</option>
                      <option value="Higher Education / University">Higher Education / University</option>
                      <option value="Corporate Enterprise">Corporate Enterprise</option>
                      <option value="Healthcare Facility">Healthcare Facility / OT</option>
                      <option value="Hospitality / Convention Center">Hospitality / Convention Center</option>
                      <option value="Auditorium / Performing Arts">Auditorium / Performing Arts</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-1">
                      Primary Service Focus
                    </label>
                    <select
                      name="serviceCategory"
                      value={formData.serviceCategory}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-[#F7FCFF] border border-[#D7E8F3] rounded-lg text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1570EF] focus:border-transparent transition-all"
                    >
                      <option value="Pro Audio & Electro-Acoustics">Pro Audio & Electro-Acoustics</option>
                      <option value="AV System Integration & Video Walls">AV System Integration & Video Walls</option>
                      <option value="Stage Machinery & DMX Lighting">Stage Machinery & DMX Lighting</option>
                      <option value="Room Acoustics & Soundproofing">Room Acoustics & Soundproofing</option>
                      <option value="Security CCTV & Access Control">Security CCTV & Access Control</option>
                      <option value="Healthcare AV & Digital OT">Healthcare AV & Digital OT</option>
                      <option value="Centralized Touch Automation">Centralized Touch Automation</option>
                      <option value="EN54 PA / Voice Evacuation">EN54 PA / Voice Evacuation</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-1">
                      Estimated Budget Range
                    </label>
                    <select
                      name="projectBudget"
                      value={formData.projectBudget}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-[#F7FCFF] border border-[#D7E8F3] rounded-lg text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1570EF] focus:border-transparent transition-all"
                    >
                      <option value="Below ₹25 Lakhs">Below ₹25 Lakhs</option>
                      <option value="₹25 Lakhs - ₹1 Crore">₹25 Lakhs - ₹1 Crore</option>
                      <option value="₹1 Crore - ₹5 Crores">₹1 Crore - ₹5 Crores</option>
                      <option value="Above ₹5 Crores">Above ₹5 Crores (Turnkey Mega Project)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-1">
                      Project Location (City / State) *
                    </label>
                    <input
                      type="text"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Kolkata, WB or Bhubaneswar, Odisha"
                      className="w-full px-3.5 py-2.5 bg-[#F7FCFF] border border-[#D7E8F3] rounded-lg text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1570EF] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-1">
                    Project Scope / Technical Requirements Brief
                  </label>
                  <textarea
                    name="projectDetails"
                    rows={3}
                    value={formData.projectDetails}
                    onChange={handleChange}
                    placeholder="Provide brief dimensions, acoustic challenges, desired seating capacity, or specific tender BOQ specifications..."
                    className="w-full px-3.5 py-2.5 bg-[#F7FCFF] border border-[#D7E8F3] rounded-lg text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1570EF] focus:border-transparent transition-all"
                  ></textarea>
                </div>

                <div className="p-3 bg-[#EDF8FB] border border-[#D7E8F3] rounded-lg text-xs text-[#0F172A] flex items-start gap-2">
                  <Award className="w-4 h-4 text-[#1570EF] shrink-0 mt-0.5" />
                  <div>
                    <strong>Official Enterprise Assurance:</strong> All submitted RFP documents and project specifications are treated under strict ISO 9001 non-disclosure and confidential engineering protocols.
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-2 border-t border-[#D7E8F3]">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2.5 border border-[#D7E8F3] text-[#475569] hover:bg-[#F7FCFF] font-medium text-sm rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 bg-[#1570EF] hover:bg-[#1258C5] text-white font-semibold text-sm rounded-lg shadow-2xs transition-all flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-white" />
                        Submit Request
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Bottom Direct Contact Footer */}
          <div className="bg-[#EDF8FB] px-6 py-3 border-t border-[#D7E8F3] flex flex-col sm:flex-row items-center justify-between text-xs text-[#475569] gap-2">
            <div>
              Immediate Assistance Hotline: <strong className="text-[#0F172A]">{COMPANY_INFO.phone}</strong>
            </div>
            <div>
              Direct RFP Email: <strong className="text-[#0F172A]">{COMPANY_INFO.contactEmail}</strong>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
