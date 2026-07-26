import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Building2,
  MessageSquare
} from 'lucide-react';
import { COMPANY_INFO, BRANCH_OFFICES } from '../data/eaiplData';
import { CompanyHeaderBrand } from './CompanyHeaderBrand';
import { IconAsset } from './IconAsset';

interface ContactPageProps {
  onOpenConsultation?: (type?: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket') => void;
}

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    designation: '',
    mobileNumber: '',
    emailAddress: '',
    city: '',
    projectType: 'Professional Audio',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [selectedOfficeId, setSelectedOfficeId] = useState<string>('kolkata');

  const activeOffice =
    BRANCH_OFFICES.find((o) => (o.id || o.city.toLowerCase()).includes(selectedOfficeId.toLowerCase())) ||
    BRANCH_OFFICES[0];

  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    activeOffice.mapQuery || `${activeOffice.city}, ${activeOffice.address}`
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  const whatsappText = `Hello EAIPL Team,\n\nI would like to discuss a requirement regarding your system integration solutions.\nPlease contact me.\n\nThank you.`;
  const whatsappUrl = `https://wa.me/917044550001?text=${encodeURIComponent(whatsappText)}`;

  const projectTypeOptions = [
    'Professional Audio',
    'Audio Visual',
    'Conference Systems',
    'Video Wall',
    'CCTV & Surveillance',
    'Access Control',
    'Fire Alarm',
    'Lighting',
    'Automation',
    'Networking',
    'Other'
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
    }, 600);
  };

  const googleMapsOfficeUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    '83/6, Ballygunge Place, Ballygunge, Kolkata, West Bengal 700019'
  )}`;

  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] font-sans min-h-screen">
      {/* SECTION 01: Hero */}
      <section className="bg-white border-b border-[#E2E8F0] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <CompanyHeaderBrand className="mb-3" />

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1D4ED8] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Enterprise Support & Consultation</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
                Contact Us
              </h1>

              <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-2xl">
                Let's discuss your next Audio Visual, Electro Acoustic, Security, or System Integration project.
              </p>
            </div>

            {/* Primary & Secondary Hero Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href={`tel:${(COMPANY_INFO.phone || '').replace(/\s+/g, '')}`}
                className="px-6 py-3 rounded-lg bg-[#1570EF] text-white text-xs font-bold hover:bg-[#1258C5] transition-all shadow-2xs flex items-center justify-center gap-2"
              >
                <IconAsset
                  category="contact"
                  name="phone"
                  src="/assets/icons/contact/phone.png"
                  alt="Phone Icon"
                  className="w-4 h-4 text-white"
                />
                <span>Call Now</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.contactEmail}`}
                className="px-6 py-3 rounded-lg bg-[#F1F5F9] text-[#0F172A] border border-[#CBD5E1] text-xs font-bold hover:bg-[#E2E8F0] transition-all flex items-center justify-center gap-2"
              >
                <IconAsset
                  category="contact"
                  name="email"
                  src="/assets/icons/contact/email.png"
                  alt="Email Icon"
                  className="w-4 h-4 text-[#1570EF]"
                />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* SECTION 02: Modern Contact Action Panel */}
        <section className="bg-white rounded-2xl border border-[#E2E8F0] shadow-2xs p-6 sm:p-8 space-y-6">
          <div className="border-b border-[#E2E8F0] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#1570EF]">
                Direct Communication
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">
                Contact Action Panel
              </h2>
            </div>
            <p className="text-xs text-[#64748B]">
              Connect instantly with our technical sales team, request site surveys, or reach emergency AMC support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Block 1: Registered Office */}
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-5 sm:p-6 rounded-xl hover:border-[#1570EF]/40 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] text-[#1570EF] flex items-center justify-center shrink-0 p-0.5">
                    <IconAsset
                      category="contact"
                      name="office"
                      src="/assets/icons/contact/office.png"
                      alt="Office Icon"
                      className="w-9 h-9 text-[#1570EF]"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-[#1570EF] uppercase tracking-wider block">
                      Corporate Headquarters
                    </span>
                    <h3 className="text-base font-extrabold text-[#0F172A]">Registered Office</h3>
                  </div>
                </div>

                <p className="text-xs text-[#475569] leading-relaxed font-medium">
                  {COMPANY_INFO.registeredOffice}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E2E8F0]">
                <a
                  href={googleMapsOfficeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-lg bg-white hover:bg-[#1570EF] hover:text-white border border-[#CBD5E1] hover:border-[#1570EF] text-xs font-bold text-[#0F172A] transition-all flex items-center justify-center gap-2 shadow-2xs group/btn"
                >
                  <IconAsset
                    category="contact"
                    name="office"
                    src="/assets/icons/contact/office.png"
                    alt="Office Icon"
                    className="w-4.5 h-4.5 text-[#1570EF] group-hover/btn:text-white transition-colors"
                  />
                  <span>View on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Block 2: Call Us */}
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-5 sm:p-6 rounded-xl hover:border-[#1570EF]/40 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] text-[#1570EF] flex items-center justify-center shrink-0 p-0.5">
                    <IconAsset
                      category="contact"
                      name="phone"
                      src="/assets/icons/contact/phone.png"
                      alt="Phone Icon"
                      className="w-9 h-9 text-[#1570EF]"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-[#1570EF] uppercase tracking-wider block">
                      Official Helpline
                    </span>
                    <h3 className="text-base font-extrabold text-[#0F172A]">Call Us</h3>
                  </div>
                </div>

                <div>
                  <p className="text-base font-extrabold text-[#1570EF] tracking-tight">
                    {COMPANY_INFO.phone}
                  </p>
                  <p className="text-xs text-[#64748B] mt-1 font-medium">
                    Mon – Sat: 10:00 AM – 6:30 PM IST
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E2E8F0]">
                <a
                  href={`tel:${(COMPANY_INFO.phone || '').replace(/\s+/g, '')}`}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#1570EF] hover:bg-[#1258C5] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-2xs"
                >
                  <IconAsset
                    category="contact"
                    name="phone"
                    src="/assets/icons/contact/phone.png"
                    alt="Phone Icon"
                    className="w-4.5 h-4.5 text-white"
                  />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* Block 3: Email */}
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-5 sm:p-6 rounded-xl hover:border-[#1570EF]/40 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] text-[#1570EF] flex items-center justify-center shrink-0 p-0.5">
                    <IconAsset
                      category="contact"
                      name="email"
                      src="/assets/icons/contact/email.png"
                      alt="Email Icon"
                      className="w-9 h-9 text-[#1570EF]"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-[#1570EF] uppercase tracking-wider block">
                      Electronic Mail
                    </span>
                    <h3 className="text-base font-extrabold text-[#0F172A]">Email Us</h3>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-extrabold text-[#0F172A] break-all">
                    {COMPANY_INFO.contactEmail}
                  </p>
                  <p className="text-xs text-[#64748B] mt-1 font-medium">
                    24-Hour Desk Response Commitment
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E2E8F0]">
                <a
                  href={`mailto:${COMPANY_INFO.contactEmail}`}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#F1F5F9] hover:bg-[#1570EF] hover:text-white border border-[#CBD5E1] hover:border-[#1570EF] text-xs font-bold text-[#0F172A] transition-all flex items-center justify-center gap-2 shadow-2xs group/btn"
                >
                  <IconAsset
                    category="contact"
                    name="email"
                    src="/assets/icons/contact/email.png"
                    alt="Email Icon"
                    className="w-4.5 h-4.5 text-[#1570EF] group-hover/btn:text-white transition-colors"
                  />
                  <span>Send Email</span>
                </a>
              </div>
            </div>

            {/* Block 4: WhatsApp */}
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-5 sm:p-6 rounded-xl hover:border-[#25D366]/50 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#DCFCE7] border border-[#86EFAC] text-[#16A34A] flex items-center justify-center shrink-0">
                    <WhatsAppIcon className="w-5 h-5 fill-current text-[#16A34A]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-[#16A34A] uppercase tracking-wider block">
                      Instant Messaging
                    </span>
                    <h3 className="text-base font-extrabold text-[#0F172A]">WhatsApp Direct</h3>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-extrabold text-[#0F172A]">
                    {COMPANY_INFO.phone}
                  </p>
                  <p className="text-xs text-[#64748B] mt-1 font-medium">
                    Quick inquiries & project discussions
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E2E8F0]">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-lg bg-[#25D366] hover:bg-[#128C7E] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-2xs group-hover:shadow-sm"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current text-white" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Block 5: Business Hours (Spans across 2 cols on md+) */}
            <div className="md:col-span-2 bg-[#F8FAFC] border border-[#E2E8F0] p-5 sm:p-6 rounded-xl hover:border-[#1570EF]/40 hover:bg-white hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] text-[#1570EF] flex items-center justify-center shrink-0 p-0.5">
                  <IconAsset
                    category="contact"
                    name="clock"
                    src="/assets/icons/contact/clock.png"
                    alt="Clock Icon"
                    className="w-9 h-9 text-[#1570EF]"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold text-[#1570EF] uppercase tracking-wider block">
                    Operational Schedule
                  </span>
                  <h3 className="text-base font-extrabold text-[#0F172A]">Business Hours</h3>
                  <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#475569]">
                    <span className="font-semibold text-[#0F172A]">Monday – Saturday: 10:00 AM – 6:30 PM IST</span>
                    <span className="text-[#64748B]">|</span>
                    <span className="text-[#64748B]">Sunday: Closed (24/7 Emergency AMC Available)</span>
                  </div>
                </div>
              </div>

              <div className="px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1570EF] text-xs font-extrabold shrink-0 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span>Standard Operations Active</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 03: Contact Form */}
        <section className="bg-white rounded-2xl border border-[#E2E8F0] shadow-2xs p-6 sm:p-10">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-2 border-b border-[#E2E8F0] pb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#1D4ED8] text-xs font-bold uppercase tracking-wider">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Enterprise Enquiry</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                Request a Consultation
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B]">
                Fill in your project parameters below to receive a detailed technical proposal and site survey schedule.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-[#ECFDF5] border border-[#A7F3D0] rounded-xl p-8 text-center space-y-4"
                >
                  <div className="w-14 h-14 bg-[#10B981] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#065F46]">Enquiry Submitted Successfully</h3>
                  <p className="text-sm text-[#047857] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. Our system integration engineering team at{' '}
                    <strong>ELECTRO ACOUSTIC INFOTECH PRIVATE LIMITED</strong> will review your request for{' '}
                    <strong>{formData.projectType}</strong> and reach out shortly at{' '}
                    <strong>{formData.emailAddress || formData.mobileNumber}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        companyName: '',
                        designation: '',
                        mobileNumber: '',
                        emailAddress: '',
                        city: '',
                        projectType: 'Professional Audio',
                        message: ''
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-lg bg-[#10B981] text-white text-xs font-bold hover:bg-[#059669] transition-all"
                  >
                    Submit Another Enquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#0F172A]">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Rajesh Sharma"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1570EF] transition-all"
                      />
                    </div>

                    {/* Company Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#0F172A]">
                        Company / Organization Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="e.g. PWD / Corporate Ltd."
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1570EF] transition-all"
                      />
                    </div>

                    {/* Designation */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#0F172A]">Designation</label>
                      <input
                        type="text"
                        name="designation"
                        value={formData.designation}
                        onChange={handleInputChange}
                        placeholder="e.g. Executive Engineer / IT Director"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1570EF] transition-all"
                      />
                    </div>

                    {/* Mobile Number */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#0F172A]">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="mobileNumber"
                        required
                        value={formData.mobileNumber}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1570EF] transition-all"
                      />
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#0F172A]">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="emailAddress"
                        required
                        value={formData.emailAddress}
                        onChange={handleInputChange}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1570EF] transition-all"
                      />
                    </div>

                    {/* City */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#0F172A]">
                        City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="e.g. Kolkata"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1570EF] transition-all"
                      />
                    </div>
                  </div>

                  {/* Project Type Dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#0F172A]">
                      Project Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1570EF] transition-all"
                    >
                      {projectTypeOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#0F172A]">Message / BOQ Requirements</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Briefly describe your site, room dimensions, equipment needs, or tender specifications..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1570EF] transition-all"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-lg bg-[#1570EF] hover:bg-[#1258C5] text-white text-xs font-bold transition-all shadow-2xs flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Processing Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Request Consultation</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* SECTION 04: Our Presence Interactive Office Locator */}
        <section className="space-y-6">
          <div className="border-b border-[#E2E8F0] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1570EF] uppercase tracking-wider mb-1">
                <Building2 className="w-4 h-4" />
                <span>Pan-India Engineering Network</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">Our Presence</h2>
            </div>
            <p className="text-xs text-[#64748B]">
              Select an office location to view details and update the interactive location map.
            </p>
          </div>

          {/* Responsive Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Column: Office Location Cards */}
            <div className="lg:col-span-5 space-y-3">
              {BRANCH_OFFICES.map((office) => {
                const officeId = office.id || office.city.toLowerCase();
                const isSelected = officeId === (activeOffice.id || activeOffice.city.toLowerCase());
                const cardMapDirectUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  office.mapQuery || `${office.city}, ${office.address}`
                )}`;

                const isHeadOffice = (office.officeType || office.type).includes('Head Office');

                return (
                  <div
                    key={officeId}
                    onClick={() => setSelectedOfficeId(officeId)}
                    className={`p-4 sm:p-5 rounded-xl border transition-all cursor-pointer relative overflow-hidden group ${
                      isSelected
                        ? 'bg-[#F0F7FF] border-[#1570EF] shadow-xs ring-1 ring-[#1570EF]/30'
                        : 'bg-white border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-[#F8FAFC]'
                    }`}
                  >
                    {/* Active highlight accent line */}
                    {isSelected && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#1570EF]" />
                    )}

                    <div className="flex items-start gap-3.5">
                      {/* PNG Location Icon Asset */}
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border p-0.5 transition-colors ${
                          isSelected
                            ? 'bg-[#1570EF] text-white border-[#1570EF]'
                            : 'bg-[#EFF6FF] text-[#1570EF] border-[#BFDBFE]'
                        }`}
                      >
                        <IconAsset
                          category="contact"
                          name="office"
                          src="/assets/icons/contact/office.png"
                          alt="Office Icon"
                          className={`w-8.5 h-8.5 ${isSelected ? 'text-white' : 'text-[#1570EF]'}`}
                        />
                      </div>

                      <div className="space-y-1.5 flex-1 min-w-0">
                        {/* Office Name & Office Type Badge */}
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <h3
                            className={`text-sm font-extrabold transition-colors ${
                              isSelected ? 'text-[#1570EF]' : 'text-[#0F172A]'
                            }`}
                          >
                            {office.officeName || `${office.city} Office`}
                          </h3>
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0 ${
                              isHeadOffice
                                ? 'bg-[#1570EF]/10 text-[#1570EF] border border-[#1570EF]/20'
                                : 'bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0]'
                            }`}
                          >
                            {office.officeType || (isHeadOffice ? 'Head Office' : 'Regional Office')}
                          </span>
                        </div>

                        {/* City */}
                        <div className="flex items-center gap-1.5 text-xs text-[#64748B]">
                          <MapPin className="w-3.5 h-3.5 text-[#1570EF] shrink-0" />
                          <span className="font-semibold text-[#334155]">{office.city}</span>
                        </div>

                        {/* Address */}
                        <p className="text-xs text-[#64748B] leading-relaxed">
                          {office.address}
                        </p>

                        {/* Contact info */}
                        <div className="flex items-center gap-3 text-[11px] text-[#475569] pt-0.5 flex-wrap">
                          <span>Phone: {office.phone}</span>
                        </div>
                      </div>
                    </div>

                    {/* Footer / Action */}
                    <div className="mt-3 pt-3 border-t border-[#E2E8F0]/70 flex items-center justify-between gap-2">
                      <span
                        className={`text-[11px] font-medium transition-colors ${
                          isSelected ? 'text-[#1570EF] font-bold' : 'text-[#64748B]'
                        }`}
                      >
                        {isSelected ? '✓ Showing on Map' : 'Click to select'}
                      </span>

                      <a
                        href={cardMapDirectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-3 py-1.5 rounded-md bg-white hover:bg-[#1570EF] hover:text-white border border-[#CBD5E1] hover:border-[#1570EF] text-[11px] font-bold text-[#0F172A] transition-all inline-flex items-center gap-1.5 shrink-0 shadow-2xs"
                      >
                        <span>View on Google Maps</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Embedded Map */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E2E8F0] shadow-2xs p-4 sm:p-5 space-y-4 lg:sticky lg:top-24">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#F1F5F9]">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#1570EF]">
                    {activeOffice.officeType ||
                      (activeOffice.type.includes('Head Office') ? 'Head Office' : 'Regional Office')}
                  </span>
                  <h3 className="text-base font-bold text-[#0F172A] flex items-center gap-2">
                    <MapPin className="w-4.5 h-4.5 text-[#1570EF]" />
                    {activeOffice.officeName || `${activeOffice.city} Location Map`}
                  </h3>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    activeOffice.mapQuery || `${activeOffice.city}, ${activeOffice.address}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#EFF6FF] text-[#1570EF] hover:bg-[#1570EF] hover:text-white border border-[#BFDBFE] text-xs font-bold transition-all inline-flex items-center gap-1.5 self-start sm:self-auto"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <p className="text-xs text-[#64748B]">
                {activeOffice.address}
              </p>

              <div className="w-full h-80 sm:h-96 lg:h-[460px] rounded-xl overflow-hidden border border-[#CBD5E1] bg-[#F1F5F9] relative shadow-inner">
                <iframe
                  key={activeOffice.id || activeOffice.city}
                  title={`Map for ${activeOffice.officeName || activeOffice.city}`}
                  src={mapEmbedUrl}
                  className="w-full h-full border-0 transition-opacity duration-300"
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
