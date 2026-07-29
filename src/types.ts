export interface MetricItem {
  id: string;
  label: string;
  value: string;
  subtext: string;
  iconName: string;
}

export interface SolutionCategory {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  icon: string;
  description: string;
  heroImage?: string;
  gallery?: string[];
  applications?: string[];
  keyFeatures: string[];
  equipmentBrands: string[];
  sampleDeliverables: string[];
  badge?: string;
  relatedIndustries?: string[];
  faq?: { question: string; answer: string }[];
  cta?: string;
}

export interface IndustrySector {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  image: string;
  overview: string;
  primaryNeeds: string[];
  deployedSolutions: string[];
  keyClients: string[];
  caseStudyTitle?: string;
  // Aliases for compatibility
  name?: string;
  description?: string;
  heroImage?: string;
  sector?: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  clientName: string;
  clientType: string;
  location: string;
  year: string;
  category: string;
  summary: string;
  challenge: string;
  solution: string;
  impactMetrics: string[];
  installedEquipment: string[];
  galleryImages: string[];
  heroImage?: string;
  reelUrl?: string;
  type?: 'facebook-reel' | 'standard-project';
  mediaType?: 'facebook-reel' | 'image' | 'video';
  acousticsSpecs?: string;
  completionBadge?: string;
  keyHighlights?: string[];
  sector?: string;
  amcActive?: boolean;
  status?: string;
}

export interface EngineeringStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  keyDeliverables: string[];
  standardsFollowed: string[];
  icon: string;
}

export interface OEMPartner {
  id: string;
  name: string;
  category: string;
  logoText: string;
  tier: string;
  featuredProducts: string[];
  description: string;
}

export interface ClientTestimonial {
  id: string;
  clientName: string;
  designation: string;
  organization: string;
  organizationType: string;
  quote: string;
  projectContext: string;
  year: string;
  badgeText?: string;
}

export interface BranchOffice {
  id?: string;
  city: string;
  officeName?: string;
  type: string;
  officeType?: 'Head Office' | 'Regional Office';
  address: string;
  phone: string;
  email: string;
  mapQuery?: string;
}

export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  designation: string;
  credentials: string;
  bio: string;
  image: string;
}

export interface CoreValue {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface ExpertiseDomain {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  keySpecs: string[];
  keyBrands: string[];
  icon: string;
}

export interface DirectoryClient {
  id: string;
  name: string;
  category: 'Government & Legislative' | 'Judiciary & Defense' | 'Corporate & PSUs' | 'Education & Healthcare' | 'Hospitality & Performing Arts' | 'Clubs & Commercial';
  location: string;
  projectScope: string;
  yearInstalled?: string;
}

export interface ConsultationFormData {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  projectType?: string;
  estimatedBudget?: string;
  timeline?: string;
  requirements?: string;
  clientType?: string;
  serviceCategory?: string;
  projectBudget?: string;
  projectTimeline?: string;
  location?: string;
  projectDetails?: string;
  requestType: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket';
}
