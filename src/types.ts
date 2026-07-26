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
  tagline: string;
  icon: string;
  description: string;
  keyFeatures: string[];
  equipmentBrands: string[];
  sampleDeliverables: string[];
  badge?: string;
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
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  clientName: string;
  clientType: 'Government' | 'Corporate' | 'Education' | 'Healthcare' | 'Hospitality' | 'Auditorium';
  location: string;
  year: string;
  category: string;
  summary: string;
  challenge: string;
  solution: string;
  impactMetrics: string[];
  installedEquipment: string[];
  galleryImages: string[];
  heroImage: string;
  acousticsSpecs?: string;
  completionBadge?: string;
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
  city: string;
  type: string;
  address: string;
  phone: string;
  email: string;
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  clientType: string;
  serviceCategory: string;
  projectBudget: string;
  projectTimeline: string;
  location: string;
  projectDetails: string;
  requestType: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket';
}
