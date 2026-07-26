import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Briefcase,
  GraduationCap,
  Award,
  Users,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Building,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/eaiplData';
import { CompanyHeaderBrand } from './CompanyHeaderBrand';

interface CareersPageProps {
  onOpenConsultation?: (type?: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket') => void;
}

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
}

const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'av-engineer',
    title: 'Senior Audio-Visual System Integration Engineer',
    department: 'Turnkey Projects & Engineering',
    location: 'Kolkata HQ / On-Site Pan-India',
    type: 'Full-Time',
    experience: '5+ Years',
    description:
      'Lead complex AV matrix, DSP commissioning, and electro-acoustic alignment for government auditoriums and enterprise council chambers.',
    requirements: [
      'Degree/Diploma in Electronics, Electrical, or Telecommunication Engineering',
      'Hands-on experience with Biamp, Bose, JBL Pro, Extron, and Crestron control systems',
      'Proficiency in AutoCAD, EASE acoustic simulation software, and Dante audio networking',
      'Proven track record in Class-I Govt & EPC turnkey projects execution',
    ],
  },
  {
    id: 'acoustic-consultant',
    title: 'Acoustic Simulation & Design Engineer',
    department: 'Acoustic R&D & Simulation',
    location: 'Kolkata HQ',
    type: 'Full-Time',
    experience: '3-5 Years',
    description:
      'Perform 3D acoustic modeling, ray-tracing analysis, STI predictions, and noise control architectural designs for high-capacity halls.',
    requirements: [
      'Specialized certification or degree in Electro-Acoustics, Physics, or Architectural Acoustics',
      'Expert skills in EASE 4.4/5.0, SoundPLAN, and CAD spatial layout design',
      'Deep knowledge of ISO 9001 quality compliance and STI/RT60 acoustic metrics',
    ],
  },
  {
    id: 'amc-[#0F172A]',
    title: 'AV Operations & AMC Support Manager',
    department: 'Managed Services & Support',
    location: 'Kolkata HQ',
    type: 'Full-Time',
    experience: '4+ Years',
    description:
      'Manage nationwide AMC SLA ticketing, scheduled preventive maintenance, and emergency break-fix response for Class-I enterprise clients.',
    requirements: [
      'Strong diagnostic skills for digital audio processors, video walls, and stage mechanic systems',
      'Experience in managing multi-tier SLA commitments and technical helpdesk workflows',
      'Excellent customer relations and team leadership capabilities',
    ],
  },
];

export const CareersPage: React.FC<CareersPageProps> = () => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans pb-16">
      {/* Page Header */}
      <section className="bg-[#0F172A] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto space-y-4">
          <CompanyHeaderBrand />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#1570EF]/20 text-[#60A5FA] border border-[#1570EF]/30">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Join Our Engineering Team</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl">
            Build the Future of Electro-Acoustic & AV Infrastructure
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            As a Class-I Registered EPC Contractor, EAIPL delivers landmark audio-visual matrix,
            acoustic, and stage mechanic projects across India. Shape national infrastructure with us.
          </p>
        </div>
      </section>

      {/* Core Values / Why Join EAIPL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] text-[#1570EF] flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-[#0F172A]">Class-I Landmark Engineering</h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Work on prestigious government assemblies, defense installations, civic auditoriums, and high-stakes corporate town halls.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] text-[#1570EF] flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-[#0F172A]">OEM Certification & Growth</h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Gain direct OEM training from Bose, JBL Pro, Biamp, Shure, Crestron, and Sennheiser with sponsored certifications.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] text-[#1570EF] flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-[#0F172A]">ISO 9001 Excellence Culture</h3>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Collaborate in a structured, process-driven engineering environment that values precision, integrity, and safety.
            </p>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-8">
        <div className="border-b border-[#E2E8F0] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold text-[#0F172A]">Current Career Opportunities</h2>
            <p className="text-xs text-[#64748B] mt-1">Explore open positions across engineering, design, and operations.</p>
          </div>
          <span className="text-xs font-bold px-3 py-1 bg-[#EFF6FF] text-[#1570EF] rounded-full border border-[#BFDBFE]">
            {JOB_OPENINGS.length} Positions Available
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {JOB_OPENINGS.map((job) => (
            <motion.div
              key={job.id}
              whileHover={{ y: -2 }}
              className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-2xs hover:border-[#1570EF]/50 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#1570EF]">
                    {job.department}
                  </span>
                  <h3 className="font-bold text-lg text-[#0F172A] leading-snug">{job.title}</h3>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-[#64748B]">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#1570EF]" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#1570EF]" />
                    {job.type}
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-[#0F172A]">
                    <Briefcase className="w-3.5 h-3.5 text-[#1570EF]" />
                    {job.experience}
                  </span>
                </div>

                <p className="text-xs text-[#475569] leading-relaxed line-clamp-3">
                  {job.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-[#F1F5F9]">
                  <span className="text-[11px] font-bold text-[#0F172A]">Key Qualifications:</span>
                  <ul className="space-y-1">
                    {job.requirements.slice(0, 2).map((req, i) => (
                      <li key={i} className="text-[11px] text-[#64748B] flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => setSelectedJob(job)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#EFF6FF] hover:bg-[#1570EF] text-[#1570EF] hover:text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 border border-[#BFDBFE]"
                >
                  <span>Apply for Position</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* General Application Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-[#334155]">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#1570EF]/20 text-[#60A5FA] border border-[#1570EF]/30">
              <Building className="w-3.5 h-3.5" />
              <span>Direct Resume Submission</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Don't See a Matching Role?</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We are constantly seeking talented electro-acoustic engineers, AV technicians, project managers, and acoustic designers. Send your CV directly to our talent acquisition team.
            </p>
          </div>

          <a
            href={`mailto:${COMPANY_INFO.contactEmail}?subject=General%20Careers%20Application%20-%20EAIPL`}
            className="px-6 py-3.5 rounded-xl bg-[#1570EF] hover:bg-[#1258C5] text-white font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all shrink-0 flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Email Resume to HR ({COMPANY_INFO.contactEmail})</span>
          </a>
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-[#D7E8F3] space-y-5">
            <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-3">
              <div>
                <span className="text-[10px] font-bold text-[#1570EF] uppercase">Position Application</span>
                <h3 className="font-bold text-base text-[#0F172A]">{selectedJob.title}</h3>
              </div>
              <button
                onClick={() => {
                  setSelectedJob(null);
                  setApplicationSubmitted(false);
                }}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-500"
              >
                ✕
              </button>
            </div>

            {applicationSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg text-[#0F172A]">Application Received</h4>
                <p className="text-xs text-[#64748B] max-w-sm mx-auto">
                  Thank you for applying to EAIPL. Our HR & Engineering recruitment panel will review your profile and reach out shortly.
                </p>
                <button
                  onClick={() => {
                    setSelectedJob(null);
                    setApplicationSubmitted(false);
                  }}
                  className="px-5 py-2 rounded-xl bg-[#1570EF] text-white text-xs font-bold"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setApplicationSubmitted(true);
                }}
                className="space-y-4 text-xs"
              >
                <div>
                  <label className="block font-bold text-[#0F172A] mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1] focus:outline-none focus:ring-2 focus:ring-[#1570EF]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#0F172A] mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. rahul@example.com"
                    className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1] focus:outline-none focus:ring-2 focus:ring-[#1570EF]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#0F172A] mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1] focus:outline-none focus:ring-2 focus:ring-[#1570EF]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#0F172A] mb-1">Cover Note / Key Experience Summary</label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your experience with AV engineering or acoustics..."
                    className="w-full px-3 py-2 rounded-lg border border-[#CBD5E1] focus:outline-none focus:ring-2 focus:ring-[#1570EF]"
                  ></textarea>
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedJob(null)}
                    className="px-4 py-2 rounded-xl border border-[#CBD5E1] text-[#475569] font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-[#1570EF] hover:bg-[#1258C5] text-white font-bold shadow-xs"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
