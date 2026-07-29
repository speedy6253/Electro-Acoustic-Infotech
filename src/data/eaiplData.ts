import {
  MetricItem,
  SolutionCategory,
  IndustrySector,
  ProjectCaseStudy,
  EngineeringStep,
  OEMPartner,
  ClientTestimonial,
  BranchOffice,
  LeadershipMember,
  CoreValue,
  ExpertiseDomain,
  DirectoryClient,
} from '../types';
import { OFFICIAL_PROJECT_REELS } from './mediaData';

export const COMPANY_INFO = {
  name: 'ELECTRO ACOUSTIC INFOTECH PRIVATE LIMITED',
  shortName: 'EAIPL',
  tagline: 'Enterprise Electro-Acoustic, Audio Visual & Turnkey Systems Integration',
  hqLocation: '83/6, Ballygunge Place, Ballygunge, Kolkata, West Bengal 700019',
  registeredOffice: '83/6, Ballygunge Place, Ballygunge, Kolkata, West Bengal - 700019',
  isoCertification: 'ISO 9001:2015 Certified Quality Management',
  govRegistration: 'Class-I Registered Turnkey Vendor & EPC Contractor',
  officialWebsite: 'https://eaipl.co.in',
  facebookPage: 'https://www.facebook.com/EAIPLINDIA',
  contactEmail: 'info@eaipl.co.in',
  supportEmail: 'info@eaipl.co.in',
  phone: '+91 70445 50001',
  businessHours: 'Monday – Saturday: 10:00 AM – 6:30 PM',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.27138765432!2d88.3685!3d22.5285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276d41a000001%3A0x123456789abcdef!2s83%2F6%2C%20Ballygunge%20Place%2C%20Ballygunge%2C%20Kolkata%2C%20West%20Bengal%20700019!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
};

export const LEADERSHIP_TEAM: LeadershipMember[] = [
  {
    id: 'leader-1',
    name: 'S. N. Roy',
    role: 'Founder & Managing Director',
    designation: 'Managing Director & Principal Consultant',
    credentials: 'M.E. Electro-Acoustics, 30+ Years Industry Pioneer',
    bio: 'Pioneered the electro-acoustic and AV system integration industry in Eastern and North-Eastern India. Oversees corporate strategy, government EPC biddings, and key technological alliances.',
    image: '/assets/team/director-1.jpg',
  },
  {
    id: 'leader-2',
    name: 'A. K. Banerjee',
    role: 'Director - Technical & Engineering',
    designation: 'Technical Director',
    credentials: 'B.Tech Electronics, AVIXA CTS-D Certified',
    bio: 'Leads internal engineering design, EASE acoustic simulations, line array beam-steering tuning, and complex digital signal processor (DSP) matrix programming.',
    image: '/assets/team/director-2.jpg',
  },
  {
    id: 'leader-3',
    name: 'R. K. Sharma',
    role: 'Vice President - Projects & Execution',
    designation: 'VP - Turnkey Projects',
    credentials: 'PMP Certified, Class-I Govt EPC Specialist',
    bio: 'Manages nationwide project execution teams, on-site rack building, site compliance, and Class-I government SLA handovers.',
    image: '/assets/team/director-3.jpg',
  },
];

export const CORE_VALUES: CoreValue[] = [
  {
    id: 'integrity',
    title: 'Integrity',
    subtitle: 'Class-I Governance & Transparency',
    description: '100% genuine direct OEM sourcing, transparent biddings, and strict ISO 9001 quality compliance without compromise.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'innovation',
    title: 'Innovation',
    subtitle: 'Pioneering Electro-Acoustic Engineering',
    description: 'Leading the shift to AV-over-IP, 3D EASE acoustic ray tracing, MicroLED displays, and AI-driven surveillance networks.',
    iconName: 'Lightbulb',
  },
  {
    id: 'customer-focus',
    title: 'Customer Focus',
    subtitle: 'SLA-Backed Long Term AMC Relationships',
    description: 'Dedicated resident engineers, 24/7 hotline support, and rapid emergency on-site response for mission-critical venues.',
    iconName: 'Users',
  },
  {
    id: 'excellence',
    title: 'Excellence',
    subtitle: 'Precision Tuning & Acoustic Perfection',
    description: 'Scientific real-time acoustic measurement guaranteeing STI ratings > 0.65 and zero-latency video matrix routing.',
    iconName: 'Award',
  },
  {
    id: 'sustainability',
    title: 'Sustainability',
    subtitle: 'Energy-Efficient Green AV Technology',
    description: 'Deploying low-heat LED theatrical lights, smart power sequencing, and eco-friendly acoustic materials.',
    iconName: 'Leaf',
  },
];

export const EXPERTISE_DOMAINS: ExpertiseDomain[] = [
  {
    id: 'electro-acoustics',
    title: 'Electro-Acoustic Sound Reinforcement',
    subtitle: '3D EASE Ray Tracing, Beam-Steering Arrays & DSP',
    description: 'Precision acoustic engineering for difficult reverberant spaces including legislative assemblies, auditoriums, and airport terminals.',
    keySpecs: ['STI Speech Intelligibility > 0.65', 'Line Array Directivity Control', 'Dante / AES67 Audio-over-IP'],
    keyBrands: ['Bose Professional', 'JBL Professional', 'Biamp Systems', 'Shure'],
    icon: 'Volume2',
  },
  {
    id: 'led-display-matrix',
    title: 'Fine-Pitch LED & MicroLED Displays',
    subtitle: 'Command Centers & Executive Boardroom Canvases',
    description: 'Seamless direct-view MicroLED video walls with pixel pitches down to 0.7mm for 24/7 mission-critical surveillance and corporate lobbies.',
    keySpecs: ['Pixel Pitch 0.7mm - 1.5mm', '24/7 Continuous Mission-Critical', 'Multi-Window Video Processors'],
    keyBrands: ['Barco', 'Christie Digital', 'Samsung The Wall', 'Absen'],
    icon: 'Monitor',
  },
  {
    id: 'delegate-conference',
    title: 'Digital Conference & Voting Systems',
    subtitle: 'Parliamentary Discussion, Voting & Interpretation',
    description: 'Flush-mount touchscreen delegate consoles with encrypted speech, electronic parliamentary voting, and ISO interpretation channels.',
    keySpecs: ['Encrypted Delegate Mics', 'PTZ Auto-Camera Tracking', 'ISO 20109 Interpretation'],
    keyBrands: ['Bosch DICENTIS', 'Taiden', 'Shure Microflex', 'Televic'],
    icon: 'Users',
  },
  {
    id: 'stage-mechanics',
    title: 'Stage Mechanics & Intelligent Lighting',
    subtitle: 'Motorized Rigging, DMX Consoles & Theatrical LED',
    description: 'Automated stage curtains, counterweight flying systems, DMX512 intelligent moving heads, and acoustic reflective shells.',
    keySpecs: ['Motorized Stage Drapes', 'DMX512 / Art-Net Control', 'High-CRI Theatrical LED'],
    keyBrands: ['ETC Controls', 'Lutron', 'Chauvet Pro', 'Robe'],
    icon: 'Sparkles',
  },
  {
    id: 'architectural-acoustics',
    title: 'Architectural Acoustics & Noise Isolation',
    subtitle: 'Wall Cladding, Bass Traps & RT60 Control',
    description: 'Custom acoustic wall panels, acoustic ceiling clouds, soundproofing, and vibration isolation for recording studios and halls.',
    keySpecs: ['RT60 Reverberation Optimization', 'NRC Rating > 0.85', 'Helmholtz Absorptive Panels'],
    keyBrands: ['Acoustic Solutions', 'Armstrong', 'Saint-Gobain', 'Anutone'],
    icon: 'Layers',
  },
  {
    id: 'pava-voice-alarm',
    title: 'PA/VA Public Address & Voice Evacuation',
    subtitle: 'EN54-16 Life Safety & Multi-Zone Paging',
    description: 'High-intelligibility public address and emergency evacuation voice messaging integrated with fire alarm matrix panels.',
    keySpecs: ['EN54-16 Certified Hardware', 'Dual-Loop Battery Backup', 'Multi-Zone IP Paging'],
    keyBrands: ['Bosch Security', 'Honeywell', 'Tannoy', 'TOA'],
    icon: 'BellRing',
  },
  {
    id: 'control-automation',
    title: 'Smart Control Automation & Touch Panels',
    subtitle: 'Centralized System Management & AV-over-IP',
    description: 'Custom touchscreen graphic user interfaces controlling room audio, video matrix routing, lighting scenes, and HVAC preset modes.',
    keySpecs: ['One-Touch Scene Presets', 'AV-over-IP 4K Routing', 'Custom Touch GUI Design'],
    keyBrands: ['Crestron Electronics', 'Extron Electronics', 'AMX', 'Kramer'],
    icon: 'Cpu',
  },
];

export const COMPLETE_CLIENT_DIRECTORY: DirectoryClient[] = [
  { id: 'dir-1', name: 'West Bengal Legislative Assembly', category: 'Government & Legislative', location: 'Kolkata, WB', projectScope: 'Turnkey Delegate Voting & Audio System', yearInstalled: '2024' },
  { id: 'dir-2', name: 'High Court of Calcutta', category: 'Judiciary & Defense', location: 'Kolkata, WB', projectScope: 'Courtroom Digital Recording & Audio Reinforcement', yearInstalled: '2023' },
  { id: 'dir-3', name: 'Rabindra Sadan Cultural Complex', category: 'Hospitality & Performing Arts', location: 'Kolkata, WB', projectScope: '1,800-Seat Auditorium Pro Audio & DMX Lighting', yearInstalled: '2024' },
  { id: 'dir-4', name: 'Public Works Department (PWD)', category: 'Government & Legislative', location: 'West Bengal', projectScope: 'Class-I Annual Term AV Integration', yearInstalled: '2025' },
  { id: 'dir-5', name: 'Indian Institute of Technology (IIT) Kharagpur', category: 'Education & Healthcare', location: 'Kharagpur, WB', projectScope: 'Smart Lecture Theatres & Senate Hall AV', yearInstalled: '2023' },
  { id: 'dir-6', name: 'All India Institute of Medical Sciences (AIIMS)', category: 'Education & Healthcare', location: 'Kalyani, WB', projectScope: 'Digital Operation Theatre 4K Video Matrix', yearInstalled: '2024' },
  { id: 'dir-7', name: 'Coal India Limited (CIL) HQ', category: 'Corporate & PSUs', location: 'Kolkata, WB', projectScope: 'Executive Boardroom & Fine-Pitch Video Wall', yearInstalled: '2023' },
  { id: 'dir-8', name: 'Biswa Bangla Convention Centre', category: 'Hospitality & Performing Arts', location: 'New Town, Kolkata', projectScope: 'Grand Convention Hall Multi-Zone Audio & Projection', yearInstalled: '2024' },
  { id: 'dir-9', name: 'Science City Auditorium', category: 'Hospitality & Performing Arts', location: 'Kolkata, WB', projectScope: 'Line Array Speaker Upgrade & Acoustic Panels', yearInstalled: '2022' },
  { id: 'dir-10', name: 'National Thermal Power Corporation (NTPC)', category: 'Corporate & PSUs', location: 'Farakka, WB', projectScope: 'Control Room 24/7 Monitoring Video Wall', yearInstalled: '2023' },
  { id: 'dir-11', name: 'State Bank of India (SBI) LHO', category: 'Corporate & PSUs', location: 'Kolkata, WB', projectScope: 'Corporate Auditorium & Video Conferencing Suites', yearInstalled: '2024' },
  { id: 'dir-12', name: 'ITC Royal Bengal & ITC Sonar', category: 'Hospitality & Performing Arts', location: 'Kolkata, WB', projectScope: 'Grand Ballroom Audio Matrix & Smart Lighting', yearInstalled: '2023' },
  { id: 'dir-13', name: 'Taj Bengal Hotel', category: 'Hospitality & Performing Arts', location: 'Kolkata, WB', projectScope: 'Executive Meeting Suites & Background Music', yearInstalled: '2022' },
  { id: 'dir-14', name: 'Damodar Valley Corporation (DVC)', category: 'Corporate & PSUs', location: 'Kolkata, WB', projectScope: 'Disaster Command Center & Video Processor', yearInstalled: '2024' },
  { id: 'dir-15', name: 'Haldia Petrochemicals Limited', category: 'Corporate & PSUs', location: 'Haldia, WB', projectScope: 'Industrial Plant PA/VA & Surveillance Network', yearInstalled: '2023' },
  { id: 'dir-16', name: 'Siliguri Municipal Corporation', category: 'Government & Legislative', location: 'Siliguri, WB', projectScope: 'Council Meeting Chamber Delegate System', yearInstalled: '2024' },
  { id: 'dir-17', name: 'Calcutta Club Limited', category: 'Clubs & Commercial', location: 'Kolkata, WB', projectScope: 'Banquet Hall Sound System & Acoustic Treatment', yearInstalled: '2023' },
  { id: 'dir-18', name: 'Tollygunge Club', category: 'Clubs & Commercial', location: 'Kolkata, WB', projectScope: 'Outdoor Pavilion Audio & Lighting Controls', yearInstalled: '2022' },
  { id: 'dir-19', name: 'SSB Headquarters Sonarpur', category: 'Judiciary & Defense', location: 'Guwahati, Assam', projectScope: 'Conference Room AV & High-Intelligibility Mic Matrix', yearInstalled: '2025' },
  { id: 'dir-20', name: 'University Grants Commission (UGC)', category: 'Education & Healthcare', location: 'New Delhi', projectScope: 'Central Conference Room AV Modernization', yearInstalled: '2026' },
  { id: 'dir-21', name: 'Luxury Private Villa Residence', category: 'Clubs & Commercial', location: 'Ballygunge, Kolkata', projectScope: 'Home Theater, Smart Lighting & Home Automation', yearInstalled: '2024' },
];

export const METRICS: MetricItem[] = [
  {
    id: 'class1',
    label: 'Turnkey Execution Capability',
    value: 'Class-I Vendor',
    subtext: 'Class-I Registered Turnkey Vendor & EPC Contractor for Govt & Enterprise',
    iconName: '/assets/icons/trust/engineering.png',
  },
  {
    id: 'iso',
    label: 'Quality Standard',
    value: 'ISO 9001:2015',
    subtext: 'Certified System Design, Acoustic Simulation, On-site Testing & AMC SLAs',
    iconName: '/assets/icons/trust/quality.png',
  },
  {
    id: 'oem',
    label: 'Authorized Integration',
    value: 'Direct OEM Partner',
    subtext: 'Authorized System Integrator for global pro-audio, AV & control manufacturers',
    iconName: '/assets/icons/trust/technology.png',
  },
  {
    id: 'lifecycle',
    label: 'End-to-End Delivery',
    value: 'EPC Engineering',
    subtext: 'Complete lifecycle from acoustic discovery and CAD design to testing and AMC',
    iconName: '/assets/icons/trust/support.png',
  },
];

export const SOLUTIONS: SolutionCategory[] = [
  {
    id: 'pro-audio',
    slug: 'professional-audio',
    title: 'Professional Audio & Electro-Acoustics',
    tagline: 'High-intelligibility sound reinforcement for critical acoustic spaces',
    icon: '/assets/icons/solutions/professional-audio.png',
    description:
      'Precision-engineered acoustic sound systems incorporating DSP beam-steering line arrays, boundary microphones, digital matrix mixers, and acoustic echo cancellation (AEC) tailored for auditoriums, council chambers, and high-noise environments.',
    heroImage: '/assets/hero/homepage-hero.jpg',
    gallery: [],
    applications: [
      'Legislative Assembly & Parliament Chambers',
      'High-Capacity Civic & Cultural Auditoriums',
      'Corporate Town Halls & Convention Centers',
      'Airport Terminals & Rail Transit Hubs'
    ],
    keyFeatures: [
      'Acoustic Ray-Tracing & EASE Simulation Modeling',
      'Beam-Steering Active Line Array Speaker Deployment',
      'Digital Signal Processing (DSP) & Automatic Feedback Suppression',
      'Delegate Discussion Consoles with Simultaneous Interpretation',
      'High-Intelligibility Speech Amplification (STI > 0.65)'
    ],
    equipmentBrands: ['Bose Professional', 'JBL Professional', 'Biamp', 'Shure', 'Sennheiser', 'Crown'],
    sampleDeliverables: [
      'Acoustic Map & EASE Simulation Reports',
      'Rack Wiring Schematics & Cable Schedules',
      'DSP File Configurations & Equalization Curves'
    ],
    badge: 'Core Expertise',
    relatedIndustries: ['Government & Public Sector', 'Auditoriums & Performing Arts', 'Corporate & Enterprises'],
    faq: [
      {
        question: 'What speech intelligibility (STI) level can EAIPL guarantee?',
        answer: 'With our electro-acoustic modeling and EASE simulations, we engineer systems to consistently achieve an STI rating > 0.65 even in challenging acoustic enclosures.'
      },
      {
        question: 'Do you provide Dante / AES67 network audio routing?',
        answer: 'Yes, all our professional audio designs utilize redundant Dante and AES67 IP audio networking for uncompressed, ultra-low latency signal distribution.'
      }
    ],
    cta: 'Schedule an On-Site Acoustic & Audio Survey'
  },
  {
    id: 'av-integration',
    slug: 'audio-visual',
    title: 'Audio Visual System Integration',
    tagline: 'Seamless ultra-high-definition visual distribution & interactive displays',
    icon: '/assets/icons/solutions/audio-visual.png',
    description:
      'End-to-end video distribution, fine-pitch indoor/outdoor LED video walls, laser projection systems, interactive flat panels, and AV-over-IP matrix networks designed for corporate boardrooms, command centers, and university lecture halls.',
    heroImage: '/assets/hero/homepage-hero.jpg',
    gallery: [],
    applications: [
      'Executive C-Suite Boardrooms & Conference Rooms',
      'University Lecture Theatres & Smart Classrooms',
      'Experience Centers & Executive Briefing Rooms',
      'Multipurpose Event Halls & Hybrid Workspaces'
    ],
    keyFeatures: [
      'Direct-View MicroLED & Fine-Pitch Video Walls (0.9mm - 1.5mm)',
      'High-Lumen Laser Projection & Motorized Tension Screens',
      '4K 60Hz 4:4:4 AV-over-IP Network Switching',
      'Multi-source Video Processors & Windowing Systems',
      'Wireless Content Sharing & Bring-Your-Own-Device (BYOD) Hubs'
    ],
    equipmentBrands: ['Crestron', 'Extron', 'Christie', 'Samsung', 'Panasonic', 'LG Enterprise'],
    sampleDeliverables: [
      'Visual Coverage Diagrams & Viewing Distance Calculations',
      'Video Matrix Switching Topology Map',
      'Control Panel UI Mockups & Source Routing Charts'
    ],
    badge: 'High Demand',
    relatedIndustries: ['Corporate & Enterprises', 'Education & Research', 'Government & Public Sector'],
    faq: [
      {
        question: 'What is the advantage of AV-over-IP compared to legacy HDMI switchers?',
        answer: 'AV-over-IP provides infinite scalability over standard 10GbE network infrastructure, allowing any input source to route to any output screen anywhere on the campus.'
      }
    ],
    cta: 'Request an AV System Integration Proposal'
  },
  {
    id: 'video-wall',
    slug: 'video-wall',
    title: 'Video Wall & Fine-Pitch LED Displays',
    tagline: 'High-density direct-view MicroLED and seamless LCD matrix displays',
    icon: '/assets/icons/solutions/video-wall.png',
    description:
      'Turnkey video wall solutions featuring ultra-narrow bezel LCD matrix systems and pixel pitches down to 0.7mm for 24/7 mission-critical monitoring, public info displays, and luxury lobby video walls.',
    heroImage: '/assets/hero/homepage-hero.jpg',
    gallery: [],
    applications: [
      'Command & Control Operation Centers (NOC/SOC)',
      'Corporate Headquarters Reception Lobbies',
      'Smart City Surveillance Centers',
      'Broadcasting Studios & Newsroom Walls'
    ],
    keyFeatures: [
      'Ultra-Fine Pixel Pitch COB & GOB LED Modules (0.7mm - 1.2mm)',
      '24/7 Continuous Mission-Critical Reliability',
      'Hardware Video Processors with Multi-Window PiP Layouts',
      'Color Calibration & Uniformity Correction Systems',
      'Redundant Power Supplies & Signal Controller Failover'
    ],
    equipmentBrands: ['Barco', 'Christie Digital', 'Planar', 'Unilumin', 'Absen', 'Samsung Wall'],
    sampleDeliverables: [
      'Video Wall Structural Weight Loading CAD Plan',
      'Heat Dissipation & Power Consumption Analysis',
      'Multi-Window Processor Configuration Map'
    ],
    badge: 'Mission-Critical',
    relatedIndustries: ['Government & Public Sector', 'Smart Cities & Defense', 'Corporate & Enterprises'],
    faq: [
      {
        question: 'What pixel pitch is best for a control room versus a lobby display?',
        answer: 'Control rooms typically require 0.9mm to 1.2mm pixel pitch due to close operator viewing distances (2-4 meters), while corporate lobbies suit 1.5mm to 1.8mm displays.'
      }
    ],
    cta: 'Consult with Our Video Wall Specialists'
  },
  {
    id: 'conference-system',
    slug: 'conference-system',
    title: 'Digital Conference & Delegate Systems',
    tagline: 'Encrypted discussion consoles, voting systems, and simultaneous interpretation',
    icon: '/assets/icons/solutions/conference-system.png',
    description:
      'Advanced delegate voting and speech systems designed for parliamentary chambers, municipal corporations, and international summit halls. Features delegate unit tracking, automatic camera pan-tilt-zoom positioning, and ISO 20109 interpretation booths.',
    heroImage: '/assets/hero/homepage-hero.jpg',
    gallery: [],
    applications: [
      'State Legislative Assemblies & Parliament Houses',
      'Municipal Corporation Meeting Halls',
      'International Convention Halls & UN-Style Chambers',
      'Judicial Courtrooms & Hearing Rooms'
    ],
    keyFeatures: [
      'Flush-Mount & Tabletop Touchscreen Delegate Units',
      'Electronic Parliamentary Voting & Biometric Attendance',
      'ISO 20109 Compliant Simultaneous Interpretation Channels',
      'PTZ Camera Auto-Tracking Linked to Microphone Activation',
      'Encrypted Audio Transmission for Sensitive Sessions'
    ],
    equipmentBrands: ['Bosch Dicentis', 'Taiden', 'Shure Microflex Complete', 'Televic Conference'],
    sampleDeliverables: [
      'Delegate Desk Furniture Integration Drawings',
      'Camera Auto-Preset Coordinate Matrix',
      'Voting System Protocol Test Reports'
    ],
    badge: 'Government Ready',
    relatedIndustries: ['Government & Public Sector', 'Judiciary & Law Enforcement'],
    faq: [
      {
        question: 'Can the delegate units integrate with existing desk furniture?',
        answer: 'Yes, we specialize in custom flush-mounting delegate consoles into wooden, stone, or metallic parliamentary desks.'
      }
    ],
    cta: 'Request a Live Conference System Demo'
  },
  {
    id: 'cctv-surveillance',
    slug: 'cctv-surveillance',
    title: 'IP CCTV & Video Surveillance Systems',
    tagline: 'High-definition IP cameras, AI analytics, and thermal perimeter defense',
    icon: '/assets/icons/solutions/cctv.png',
    description:
      'Enterprise surveillance architecture with AI-driven analytics including ANPR, facial recognition, crowd management, object left behind, and perimeter thermal sensing connected to centralized VMS software.',
    heroImage: '/assets/hero/homepage-hero.jpg',
    gallery: [],
    applications: [
      'Smart City Infrastructure & Traffic Intersection Monitoring',
      'Industrial Manufacturing Plants & Energy Grids',
      'High-Security Government Buildings & Defense Depots',
      'Airports, Railway Terminals, and Metro Networks'
    ],
    keyFeatures: [
      'AI Edge Analytics: ANPR, Facial Recognition, Heatmapping',
      'Long-Range Thermal Cameras & PTZ Dome Optics',
      'Centralized Video Management Software (VMS) with Failover Cluster',
      'RAID Storage Arrays with 30 to 90 Days Retention',
      'Cybersecurity Hardened IP Camera Network Fabrics'
    ],
    equipmentBrands: ['Bosch Security', 'Axis Communications', 'Hikvision Commercial', 'Dahua Enterprise', 'Honeywell'],
    sampleDeliverables: [
      'Camera Lens FOV & Storage Bandwidth Calculations',
      'Network Fiber Optic Ring Topology Diagrams',
      'SLA Maintenance & Uptime Compliance Metrics'
    ],
    badge: 'Security Certified',
    relatedIndustries: ['Government & Public Sector', 'Industrial & Manufacturing', 'Transport & Infrastructure'],
    faq: [
      {
        question: 'How do you calculate storage requirements for 4K cameras?',
        answer: 'We utilize H.265+ compression algorithms and dedicated storage calculators factoring frame rate, bitrate, and retention days to size SAN/NAS arrays.'
      }
    ],
    cta: 'Get an Enterprise Security Audit'
  },
  {
    id: 'access-control',
    slug: 'access-control',
    title: 'Biometric Access Control & Gate Automation',
    tagline: 'Multi-factor authentication, visitor management, and physical barrier integration',
    icon: '/assets/icons/solutions/access-control.png',
    description:
      'Comprehensive physical security solutions featuring touchless face recognition, RFID/NFC mobile credentials, automated turnstiles, flap barriers, and hydraulic bollards integrated with HR management systems.',
    heroImage: '/assets/hero/homepage-hero.jpg',
    gallery: [],
    applications: [
      'Corporate Campuses & IT Parks',
      'High-Security Data Centers & Server Rooms',
      'Government Secretariats & R&D Labs',
      'Industrial Factories & Warehouses'
    ],
    keyFeatures: [
      'Touchless Facial Recognition & Palm Vein Scanners',
      'High-Speed Optical Turnstiles & Motorized Flap Barriers',
      'Visitor Kiosks with QR Pass Generation',
      'Anti-Passback & Muster Station Reporting',
      'Integration with ERP / Active Directory Credentials'
    ],
    equipmentBrands: ['HID Global', 'Suprema', 'Honeywell Access', 'Bosch Security', 'Magnet Control'],
    sampleDeliverables: [
      'Door Access Control Cable Schedule & Lock Wiring Diagrams',
      'Pedestrian Gate Layout CAD Blueprints',
      'Access Control Matrix & Permission Hierarchy'
    ],
    badge: 'Enterprise Security',
    relatedIndustries: ['Corporate & Enterprises', 'Industrial & Manufacturing', 'Government & Public Sector'],
    faq: [
      {
        question: 'Can the access control system work during power outages?',
        answer: 'Yes, all door controllers and turnstiles feature battery backup power modules and fail-safe or fail-secure fire alarm integration.'
      }
    ],
    cta: 'Design Your Gate & Barrier System'
  },
  {
    id: 'fire-alarm',
    slug: 'fire-alarm',
    title: 'Fire Alarm & Life Safety Systems',
    tagline: 'Addressable fire detection, gas suppression, and EN54 voice evacuation',
    icon: '/assets/icons/solutions/fire-alarm.png',
    description:
      'Turnkey fire detection and alarm solutions comprising intelligent addressable smoke/heat detectors, aspirating smoke detection (VESDA), clean agent gas suppression, and integrated public address life safety evacuation.',
    heroImage: '/assets/hero/homepage-hero.jpg',
    gallery: [],
    applications: [
      'Commercial High-Rise Buildings & Shopping Malls',
      'Data Centers & Mission Critical Rooms',
      'Hospitals & Healthcare Facilities',
      'Educational Campuses & Libraries'
    ],
    keyFeatures: [
      'Microprocessor-based Addressable Fire Alarm Control Panels',
      'Aspirating Early Warning Smoke Detection (VESDA) for Server Rooms',
      'FM-200 / Novec 1230 Gas Suppression System Integration',
      'EN54-16 Certified Voice Evacuation & Emergency Paging',
      'Graphic Annunciator Software for Floor-by-Floor Alarm Map'
    ],
    equipmentBrands: ['Honeywell Notifier', 'Bosch Fire', 'Siemens Building Tech', 'Morley-IAS'],
    sampleDeliverables: [
      'Fire Detector Coverage CAD Layout Drawings',
      'Loop Resistance & Battery Calculation Reports',
      'Fire Department Approval Compliance Documents'
    ],
    badge: 'Life Safety Certified',
    relatedIndustries: ['Healthcare & Medical', 'Industrial & Manufacturing', 'Corporate & Enterprises'],
    faq: [
      {
        question: 'Is the fire alarm system compliant with NBC (National Building Code)?',
        answer: 'Yes, all our fire detection systems adhere to NBC India 2016 and NFPA 72 standards.'
      }
    ],
    cta: 'Schedule a Life Safety Compliance Survey'
  },
  {
    id: 'stage-lighting',
    slug: 'stage-lighting',
    title: 'Stage Equipment & Architectural Lighting',
    tagline: 'Dynamic stage mechanics, motorized rigging, and intelligent DMX/RDM lighting',
    icon: '/assets/icons/solutions/lighting.png',
    description:
      'Turnkey stage solutions encompassing motorized curtain tracks, counterweight rigging, DMX512/RDM intelligent moving heads, LED theatrical profiles, followspots, and computerized light control consoles for state auditoriums and cultural centers.',
    heroImage: '/assets/hero/homepage-hero.jpg',
    gallery: [],
    applications: [
      'Cultural Centers & Town Auditoriums',
      'University & School Performing Arts Centers',
      'Television Broadcasting Studios',
      'Heritage Building Architectural Facades'
    ],
    keyFeatures: [
      'Motorized & Manual Stage Rigging & Flying Systems',
      'Acoustic Shells & Sound Reflective Shell Panels',
      'DMX512-A / Art-Net Architectural & Stage Lighting Control',
      'Energy-Efficient High-CRI LED Theatrical Spotlights',
      'Cyclorama & Stage Velvet Drapery Systems'
    ],
    equipmentBrands: ['Lutron', 'ETC (Electronic Theatre Controls)', 'Chauvet Professional', 'Martin', 'Robe'],
    sampleDeliverables: [
      'Stage Lighting Grid CAD Layouts',
      'Power Loading & Dimmer Rack Calculations',
      'DMX Patch Sheets & Scene Preset Programming'
    ],
    badge: 'Turnkey Rigging',
    relatedIndustries: ['Auditoriums & Performing Arts', 'Education & Research'],
    faq: [
      {
        question: 'Do you provide acoustic stage shells for orchestral performances?',
        answer: 'Yes, we supply and install modular sound reflective acoustic shells designed to project acoustic energy into the audience.'
      }
    ],
    cta: 'Consult with Our Stage Engineers'
  },
  {
    id: 'building-automation',
    slug: 'building-automation',
    title: 'Building Automation & Smart Control',
    tagline: 'Integrated BMS, smart lighting, HVAC automation, and energy monitoring',
    icon: '/assets/icons/solutions/automation.png',
    description:
      'Custom-programmed automation processors pairing custom graphic user interfaces (GUIs) on tabletop or wall-mounted touch panels to streamline complex multi-device operations into intuitive single-touch preset buttons.',
    heroImage: '/assets/hero/homepage-hero.jpg',
    gallery: [],
    applications: [
      'Commercial High-Rise Offices & IT Parks',
      'Luxury Hotels & Resorts',
      'Smart City Administrative Towers',
      'Convention Centers & Exhibition Halls'
    ],
    keyFeatures: [
      'BACnet / KNX / Modbus Protocol BMS Integration',
      'Smart Lighting Control with DALI Dimming & Daylighting',
      'HVAC Chiller Plant Optimization & IAQ Sensors',
      'Energy Metering & Carbon Footprint Dashboards',
      'Custom Mobile App & Touch Panel Operating Software'
    ],
    equipmentBrands: ['Crestron Electronics', 'Extron Electronics', 'Schneider Electric', 'Honeywell BMS', 'Lutron'],
    sampleDeliverables: [
      'BMS Points Schedule & Control Logic Flowcharts',
      'Touch Panel GUI Screen Wireframes',
      'Energy Efficiency ROI Reports'
    ],
    badge: 'Smart Building',
    relatedIndustries: ['Corporate & Enterprises', 'Hospitality & Entertainment'],
    faq: [
      {
        question: 'Can your automation system interface with legacy HVAC chillers?',
        answer: 'Yes, our controllers support BACnet IP/MSTP, Modbus RTU, and KNX gateways to connect seamlessly with legacy chillers.'
      }
    ],
    cta: 'Explore Building Automation Solutions'
  },
  {
    id: 'networking',
    slug: 'networking',
    title: 'Enterprise IP Networking & Structured Cabling',
    tagline: 'High-speed Cat6A/Fiber optic backbones, core routing, and managed Wi-Fi',
    icon: '/assets/icons/solutions/networking.png',
    description:
      'Robust enterprise networking infrastructure including Cat6A shield copper cabling, multi-gigabit fiber backbones, managed L2/L3 PoE+ switches, and high-density Wi-Fi 6E/7 access points engineered for low-latency AV-over-IP and security traffic.',
    heroImage: '/assets/hero/homepage-hero.jpg',
    gallery: [],
    applications: [
      'Data Centers & Server Server Farms',
      'Enterprise Corporate Campuses',
      'Government Secretariats',
      'Educational Institutions'
    ],
    keyFeatures: [
      'Category 6A / Category 7 Shielded Twisted Pair (STP) Cabling',
      'Single-mode & Multi-mode OM4 Fiber Backbones',
      'Layer 3 Managed Core Switches with IGMP Snooping for AV',
      'Wi-Fi 6 / 6E Enterprise Access Points with Central Controller',
      'Server Rack Cable Management & OTDR Fiber Testing'
    ],
    equipmentBrands: ['Cisco Systems', 'Aruba Networks', 'CommScope NETCONNECT', 'Panduit', 'Netgear AV'],
    sampleDeliverables: [
      'Fluke Cable Certification Test Results',
      'Fiber Optic Patch Panel Routing Matrix',
      'Network Switch Port & VLAN Allocation Mapping'
    ],
    badge: 'High Reliability',
    relatedIndustries: ['Corporate & Enterprises', 'Education & Research', 'Government & Public Sector'],
    faq: [
      {
        question: 'Do you perform OTDR certification on fiber optics?',
        answer: 'Yes, every fiber strand installed by EAIPL is tested using Fluke OTDR meters and documented with loss budget graphs.'
      }
    ],
    cta: 'Request a Network Infrastructure Audit'
  },
  {
    id: 'control-room',
    slug: 'control-room',
    title: 'Control Room & Command Center Solutions',
    tagline: 'Ergonomic console desks, multi-view processors, and 24/7 video display walls',
    icon: '/assets/icons/solutions/control-room.png',
    description:
      'Complete turnkey control room environments incorporating ISO 11064 ergonomic console furniture, multi-operator video wall controllers, ambient acoustic treatment, and redundant power infrastructure for round-the-clock critical operations.',
    heroImage: '/assets/hero/homepage-hero.jpg',
    gallery: [],
    applications: [
      'Smart City Integrated Command & Control Centers (ICCC)',
      'Power Grid & Energy Dispatch Rooms',
      'Disaster Management Operations Centers',
      'Traffic Management & Rail Control Centers'
    ],
    keyFeatures: [
      'ISO 11064 Ergonomic Operator Consoles with Motorized Height Adjustment',
      'Multi-Screen KVM Matrix Systems for Instant Console Switching',
      '24/7 Ultra-Narrow Bezel Video Walls or MicroLED Canvases',
      'Acoustic Ceiling & Wall Panel Treatment for Operator Comfort',
      'Redundant Clean Power & HVAC Environmental Controls'
    ],
    equipmentBrands: ['Barco', 'Christie', 'Crestron', 'Extron', 'Kramer', 'Pyrotech Consoles'],
    sampleDeliverables: [
      'ISO 11064 Sightline & Ergonomic Assessment Report',
      'Operator Desk Cable Management Schematics',
      'KVM Matrix Switching & Video Wall Preset Guides'
    ],
    badge: 'ISO 11064 Certified',
    relatedIndustries: ['Smart Cities & Defense', 'Energy & Utilities', 'Government & Public Sector'],
    faq: [
      {
        question: 'What is ISO 11064 compliance for control rooms?',
        answer: 'ISO 11064 is the international standard for ergonomic design of control centers, governing operator sightlines, desk heights, lighting levels, and noise abatement.'
      }
    ],
    cta: 'Design Your Command & Control Center'
  },
  {
    id: 'auditorium',
    slug: 'auditorium',
    title: 'Auditorium & Multi-Purpose Hall AV',
    tagline: 'Acoustic treatment, high-lumen projection, stage sound, and automated lighting',
    icon: '/assets/icons/solutions/auditorium.png',
    description:
      'Comprehensive EPC contracts for civic, university, and corporate auditoriums combining electro-acoustic sound systems, motorized stage drapes, LED video walls, acoustic wall cladding, and centralized touch control.',
    heroImage: '/assets/hero/homepage-hero.jpg',
    gallery: [],
    applications: [
      'State Government & Municipal Civic Halls',
      'University & College Convocation Centers',
      'Corporate Headquarters Town Hall Auditoriums',
      'Performing Arts Theatres & Cultural Complexes'
    ],
    keyFeatures: [
      'Line Array Speaker Systems Tuned via DSP Acoustic Processing',
      'High-Lumen Laser Projection or Direct-View LED Stage Walls',
      'Motorized Stage Rigging & Automated Stage Drapery',
      'DMX Architectural & Theatrical Lighting Consoles',
      'Acoustic Wall Panel Cladding with Custom Fabric Options'
    ],
    equipmentBrands: ['JBL Professional', 'Bose Pro', 'Crestron', 'ETC', 'Barco', 'Shure'],
    sampleDeliverables: [
      'Auditorium Acoustic Simulation & STI Reports',
      'Stage Machinery Load & Wiring Drawings',
      'One-Touch System Operation Manuals'
    ],
    badge: 'EPC Specialist',
    relatedIndustries: ['Auditoriums & Performing Arts', 'Education & Research', 'Government & Public Sector'],
    faq: [
      {
        question: 'Can EAIPL execute the entire auditorium contract on a turnkey basis?',
        answer: 'Yes, as a Class-I EPC contractor, EAIPL handles acoustic civil works, stage mechanics, pro audio, video displays, stage lighting, and central automation under a single contract.'
      }
    ],
    cta: 'Consult on Turnkey Auditorium Projects'
  },
  {
    id: 'healthcare-av',
    slug: 'healthcare-av',
    title: 'Healthcare & Medical AV Solutions',
    tagline: 'Digital Operation Theatre (OT) integration, surgical displays, and telemedicine',
    icon: '/assets/icons/solutions/healthcare.png',
    description:
      'High-grade medical AV integration for super-specialty hospitals, featuring uncompressed zero-latency 4K surgical video routing, OT glass touch panels, telemedicine streaming systems, and nurse call systems conforming to medical safety standards.',
    heroImage: '/assets/hero/homepage-hero.jpg',
    gallery: [],
    applications: [
      'Digital Operation Theatres (Modular OTs)',
      'Medical College Teaching Auditoriums',
      'Telemedicine & Remote Surgical Consultation Rooms',
      'Super-Specialty Hospital Command Centers'
    ],
    keyFeatures: [
      'Uncompressed Zero-Latency 4K Surgical Video Matrixing',
      'Antimicrobial Sealed Touch Controllers & Wall Monitors',
      'Medical-grade Telemedicine Audio/Video Streaming',
      'Live Surgical Streaming to Medical College Lecture Halls',
      'IP-Based Nurse Call Systems & Patient Room Intercoms'
    ],
    equipmentBrands: ['Barco Medical', 'Sony Healthcare', 'Crestron DigitalMedia', 'Stryker Integrated', 'Bosch Healthcare'],
    sampleDeliverables: [
      'Medical Grade AV Isolation Transformer Schematics',
      'Clean Room Wall Flush Mounting CAD Drawings',
      'DICOM Compliance Testing Documentation'
    ],
    badge: 'Medical Grade',
    relatedIndustries: ['Healthcare & Medical', 'Education & Research'],
    faq: [
      {
        question: 'Are the touch panels suitable for clean room OT sterilisation?',
        answer: 'Yes, we supply IP65 glass antimicrobial touch screens designed to withstand medical chemical wipes and sterile environments.'
      }
    ],
    cta: 'Request Healthcare AV Specifications'
  }
];

export const INDUSTRIES: IndustrySector[] = [
  {
    id: 'government',
    title: 'Government & Public Sector',
    name: 'Government & Public Sector',
    subtitle: 'Secure and scalable integrated technology solutions for government offices, public infrastructure, and institutional facilities.',
    description: 'Secure and scalable integrated technology solutions for government offices, public infrastructure, and institutional facilities.',
    overview: 'Secure and scalable integrated technology solutions for government offices, public infrastructure, and institutional facilities.',
    icon: '/assets/icons/industries/government.png',
    image: '/assets/hero/homepage-hero.jpg',
    primaryNeeds: [
      'Redundant Mission-Critical Video Wall Processors',
      'Secure Encrypted Delegate Voting & Conference Systems',
      'Tamper-Proof Audio/Video Archiving for Legal Proceedings',
      'Multi-agency Video Conferencing Feeds',
    ],
    deployedSolutions: [
      'Integrated Command and Control Centers (ICCC)',
      'High Court Digital Hearing & Microphones Systems',
      'State Secretariat Assembly Hall Audio & Voting System',
      'EN54 Certified PA Evacuation across Govt Buildings',
    ],
    keyClients: [],
    caseStudyTitle: 'State Disaster Management Control Room & MicroLED Video Wall',
  },
  {
    id: 'corporate',
    title: 'Corporate & Enterprises',
    name: 'Corporate & Enterprises',
    subtitle: 'Professional AV, collaboration, surveillance, and smart workplace solutions for modern corporate environments.',
    description: 'Professional AV, collaboration, surveillance, and smart workplace solutions for modern corporate environments.',
    overview: 'Professional AV, collaboration, surveillance, and smart workplace solutions for modern corporate environments.',
    icon: '/assets/icons/industries/corporate.png',
    image: '/assets/hero/homepage-hero.jpg',
    primaryNeeds: [
      'Seamless Zoom/Teams One-Touch Join Integration',
      'Acoustic Echo Cancellation for Clear Teleconferencing',
      'Centralized Room Scheduling & Facility Management',
      'High-Impact Executive Fine-Pitch LED Displays',
    ],
    deployedSolutions: [
      'Interactive 4K Display Panels',
      'Ceiling Array Beamforming Microphones',
      'Automated Motorized Blinds & Lighting Control',
      'BYOD Wireless Presentation Hubs',
    ],
    keyClients: [],
    caseStudyTitle: 'Tier-1 IT Executive Town Hall & Boardroom Integration',
  },
  {
    id: 'education',
    title: 'Education & Research Institutes',
    name: 'Education & Research Institutes',
    subtitle: 'Advanced classroom audio visual systems, auditorium solutions, campus communication, and learning technologies.',
    description: 'Advanced classroom audio visual systems, auditorium solutions, campus communication, and learning technologies.',
    overview: 'Advanced classroom audio visual systems, auditorium solutions, campus communication, and learning technologies.',
    icon: '/assets/icons/industries/education.png',
    image: '/assets/hero/homepage-hero.jpg',
    primaryNeeds: [
      'Automated Instructor Tracking Cameras',
      'Digital Podium with Integrated Interactive Writing Displays',
      'Campus-wide Centralized PA/VA and Emergency Broadcasts',
      'Hybrid Lecture Recording and LMS Integration',
    ],
    deployedSolutions: [
      'Smart Classrooms & Hybrid E-Learning Hubs',
      'University Senate Hall Delegate Systems',
      'High-Power Acoustic Reinforcement for Auditoriums',
      'Digital Signage Network for Campus Announcements',
    ],
    keyClients: [],
    caseStudyTitle: '50+ High-Definition Smart Classroom Rollout for Premier University',
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Medical Colleges',
    name: 'Healthcare & Medical Colleges',
    subtitle: 'Reliable communication, public address, emergency notification, and integrated AV solutions for healthcare facilities.',
    description: 'Reliable communication, public address, emergency notification, and integrated AV solutions for healthcare facilities.',
    overview: 'Reliable communication, public address, emergency notification, and integrated AV solutions for healthcare facilities.',
    icon: '/assets/icons/industries/healthcare.png',
    image: '/assets/hero/homepage-hero.jpg',
    primaryNeeds: [
      'Zero-Latency Surgical Video Transmission in OT',
      'Antimicrobial Sealed Control Touchscreens',
      'Live Surgical Streaming to Medical Student Auditoriums',
      'Integrated IP Nurse Call & Patient Monitoring Intercoms',
    ],
    deployedSolutions: [
      'Digital OT Audio-Visual Matrixing Systems',
      'Telemedicine Conferencing Carts & Rooms',
      'Medical College Demonstration Auditoriums',
      'Hospital Public Address & Code-Blue Alert Systems',
    ],
    keyClients: [],
    caseStudyTitle: 'Advanced Digital OT & Telemedicine Video Matrix for Super-Specialty Facility',
  },
  {
    id: 'industrial',
    title: 'Industrial & Manufacturing',
    name: 'Industrial & Manufacturing',
    subtitle: 'Robust surveillance, networking, automation, and safety systems designed for industrial operations and manufacturing environments.',
    description: 'Robust surveillance, networking, automation, and safety systems designed for industrial operations and manufacturing environments.',
    overview: 'Robust surveillance, networking, automation, and safety systems designed for industrial operations and manufacturing environments.',
    icon: '/assets/icons/industries/industrial.png',
    image: '/assets/hero/homepage-hero.jpg',
    primaryNeeds: [
      'Explosion-Proof / Weatherproof IP Cameras & PA Speakers',
      'High-Capacity Industrial Network Switches & Fiber Backbone',
      'Plant-Wide Voice Evacuation & Emergency Alarm Integration',
      'Central Operations Monitoring Video Walls',
    ],
    deployedSolutions: [
      'Industrial IP CCTV & Thermal Perimeter Surveillance',
      'Heavy-Duty Public Address & Intercom Systems',
      'Plant Control Room Command Video Walls',
      'Access Control & Attendance Automation',
    ],
    keyClients: [],
    caseStudyTitle: 'Integrated Industrial Surveillance & PA Network for Manufacturing Facility',
  },
  {
    id: 'hospitality',
    title: 'Hospitality & Entertainment',
    name: 'Hospitality & Entertainment',
    subtitle: 'Integrated audio visual, conference, digital signage, and guest experience solutions for hotels and hospitality spaces.',
    description: 'Integrated audio visual, conference, digital signage, and guest experience solutions for hotels and hospitality spaces.',
    overview: 'Integrated audio visual, conference, digital signage, and guest experience solutions for hotels and hospitality spaces.',
    icon: '/assets/icons/industries/hospitality.png',
    image: '/assets/hero/homepage-hero.jpg',
    primaryNeeds: [
      'Multi-Zone Audio Matrixing with Flexible Room Partitioning',
      'Automated Scene Lighting Control for Weddings & Conferences',
      'High-Impact Motorized Screens & Stage Lighting',
      'Discreet High-Fidelity Ceiling Architecture Speakers',
    ],
    deployedSolutions: [
      'Partitionable Ballroom Audio System with Auto-Routing',
      'DMX Architectural Ambient & Mood Lighting',
      'Rooftop Lounge Weatherproof Sound Systems',
      'Digital Signage for Event Schedules & Wayfinding',
    ],
    keyClients: [],
    caseStudyTitle: 'Grand Convention Ballroom Audio-Visual & DMX Stage Lighting Architecture',
  },
];

const REEL_PROJECTS: ProjectCaseStudy[] = OFFICIAL_PROJECT_REELS.map((reel) => {
  const isGuwahati = reel.id === 'reel-03';
  return {
    id: reel.id,
    type: 'facebook-reel',
    mediaType: 'facebook-reel',
    title: reel.title,
    clientName: isGuwahati ? 'SSB Headquarters, Sonarpur' : 'UGC Headquarters, New Delhi',
    clientType: 'Government',
    location: isGuwahati ? 'Guwahati, Assam' : 'New Delhi',
    year: reel.date.includes('2025') ? '2025' : '2026',
    category: isGuwahati ? 'Conference' : 'Government',
    summary: reel.description,
    challenge: isGuwahati
      ? 'Delivering high-intelligibility audio reinforcement and seamless video conferencing setup for official government proceedings.'
      : 'Modernizing conference room infrastructure for seamless digital collaboration and crystal-clear audio transmission.',
    solution: isGuwahati
      ? 'Turnkey audiovisual integration including digital conference microphones, acoustic sound reinforcement, and high-definition video displays.'
      : 'Integrated conference room AV solution with digital signal processing, professional presentation displays, and high-intelligibility microphone arrays.',
    impactMetrics: [
      'Successfully delivered turnkey AV integration for official conference operations',
      'Crystal-clear audio clarity and seamless digital meeting collaboration',
      '100% On-schedule commissioning with verified EAIPL quality standards',
    ],
    installedEquipment: [
      'Bosch DICENTIS Conference System',
      'Extron 4K AV Matrix Switcher',
      'Biamp TesiraFORTÉ Audio DSP',
      'Shure Microflex Advance Mic Array',
    ],
    galleryImages: [],
    reelUrl: reel.reelUrl,
    status: 'Completed',
    amcActive: true,
    sector: isGuwahati ? 'Conference' : 'Government',
    completionBadge: 'Official EAIPL Execution',
  };
});

const STATIC_PROJECT_CASE_STUDIES: ProjectCaseStudy[] = [
  {
    id: 'proj-wb-assembly',
    title: 'West Legislative Assembly Delegate Voting & Acoustic Systems',
    clientName: 'West Bengal Legislative Assembly',
    clientType: 'Government',
    location: 'Kolkata, West Bengal',
    year: '2024',
    category: 'Government',
    summary: 'Turnkey installation of electronic parliamentary discussion consoles, biometric voting systems, and acoustic beam-steering line arrays in the main legislative hall.',
    challenge: 'Achieving speech intelligibility (STI > 0.68) in a heritage domed hall with high reverberation time without altering architectural heritage panels.',
    solution: 'Integrated flush-mounted Bosch DICENTIS touchscreen delegate consoles with Bose steerable line arrays and Biamp DSP feedback suppression.',
    impactMetrics: ['Zero audio feedback across 300 active microphones', '100% accurate parliamentary electronic voting tally', 'ISO 20109 interpretation booth integration'],
    installedEquipment: ['Bosch DICENTIS Touch Consoles', 'Bose Professional Panaray Line Array', 'Biamp TesiraFORTÉ DSP', 'Crestron 4K NVX Router'],
    galleryImages: ['/assets/hero/homepage-hero.jpg'],
    heroImage: '/assets/hero/homepage-hero.jpg',
    status: 'Completed',
    amcActive: true,
    sector: 'Government',
    completionBadge: 'Class-I Govt Milestone',
  },
  {
    id: 'proj-calcutta-high-court',
    title: 'Courtroom Digital Speech Reinforcement & Archival Recording',
    clientName: 'High Court of Calcutta',
    clientType: 'Judiciary',
    location: 'Kolkata, West Bengal',
    year: '2023',
    category: 'Government',
    summary: 'Digitization of 12 primary courtroom benches with tamper-proof judicial audio recording, ceiling beamforming microphones, and judge bench controls.',
    challenge: 'Capturing clear witness and advocate testimony across high-ceiling timber-panel courtrooms with low acoustic isolation.',
    solution: 'Deployed Shure MXA920 ceiling array microphones paired with Extron audio DSP and tamper-evident encrypted archival recording servers.',
    impactMetrics: ['Crystal clear voice capture without lavalier mic wear', 'Automated judicial case audio indexing', '24/7 uptime during trial sessions'],
    installedEquipment: ['Shure MXA920 Ceiling Array', 'Extron DMP 128 Plus DSP', 'Bosch Security Archival', 'Crestron Touch Panels'],
    galleryImages: ['/assets/hero/homepage-hero.jpg'],
    heroImage: '/assets/hero/homepage-hero.jpg',
    status: 'Completed',
    amcActive: true,
    sector: 'Government',
    completionBadge: 'Judiciary Integration',
  },
  {
    id: 'proj-ugc-delhi',
    title: 'Central Executive Conference Room AV Modernization',
    clientName: 'University Grants Commission (UGC)',
    clientType: 'Government',
    location: 'New Delhi',
    year: '2026',
    category: 'Conference',
    summary: 'State-of-the-art corporate conference suite overhaul featuring 4K video switching, wireless BYOD sharing, and smart acoustic ceiling mic tracking.',
    challenge: 'Eliminating table wire clutter while supporting 40-participant hybrid VC meetings with seamless Teams/Zoom operation.',
    solution: 'Integrated flush tabletop pop-up boxes, Samsung fine-pitch video displays, Crestron Flex UC systems, and Biamp beamtracking ceiling microphones.',
    impactMetrics: ['One-touch join for all major video conferencing platforms', 'Zero cable clutter on executive conference desk', 'High-definition 4K video distribution'],
    installedEquipment: ['Crestron NVX AV-over-IP', 'Samsung Commercial 4K Displays', 'Biamp Parlé Ceiling Mics', 'Extron Touch Control'],
    galleryImages: ['/assets/hero/homepage-hero.jpg'],
    heroImage: '/assets/hero/homepage-hero.jpg',
    status: 'Completed',
    amcActive: true,
    sector: 'Conference',
    completionBadge: 'Central Ministry Excellence',
  },
  {
    id: 'proj-rabindra-sadan',
    title: '1,800-Seat Cultural Auditorium Electro-Acoustic & Lighting Overhaul',
    clientName: 'Department of Information & Cultural Affairs',
    clientType: 'Government Body',
    location: 'Kolkata, West Bengal',
    year: '2024',
    category: 'Auditorium',
    summary: 'Comprehensive EPC overhaul of the iconic 1,800-seat civic auditorium, comprising Bose ShowMatch line arrays, ETC theatrical lighting, and acoustic wall cladding.',
    challenge: 'Achieving uniform sound pressure level (SPL ±2dB) across balcony and orchestra seating without acoustic shadow zones.',
    solution: 'Engineered 3D EASE acoustic simulation model, installed Bose ShowMatch active line array hangs, and configured ETC DMX computerized lighting console.',
    impactMetrics: ['Uniform SPL ±1.5dB across all 1,800 seats', 'CRI > 95 theatrical LED lighting setup', '40% energy reduction vs legacy halogen lights'],
    installedEquipment: ['Bose ShowMatch Line Array', 'Crown I-Tech HD Amplifiers', 'ETC Element Lighting Console', 'Barco 3-Chip Laser Projector'],
    galleryImages: ['/assets/hero/homepage-hero.jpg'],
    heroImage: '/assets/hero/homepage-hero.jpg',
    status: 'Completed',
    amcActive: true,
    sector: 'Auditorium',
    completionBadge: 'State Cultural Landmark',
  },
  {
    id: 'proj-biswa-bangla',
    title: 'Grand Convention Hall Multi-Zone AV & Projection System',
    clientName: 'Biswa Bangla Convention Centre',
    clientType: 'Public Infrastructure',
    location: 'New Town, Kolkata',
    year: '2024',
    category: 'Auditorium',
    summary: 'Turnkey audio visual matrixing for India’s premier convention center, supporting 3,000 delegates with partitionable hall audio routing.',
    challenge: 'Managing dynamic audio and video routing when the 3,000-seat hall is partitioned into 3 independent meeting rooms.',
    solution: 'Designed an automated Crestron NVX 4K video matrix with Dante audio routing and motorized Christie laser projection screens.',
    impactMetrics: ['Automated single-click room partition re-configuration', '30,000 lumens ultra-bright 4K laser projection', 'Comprehensive AMC cover'],
    installedEquipment: ['JBL Professional VTX Line Array', 'Christie Digital Laser Projectors', 'Crestron DigitalMedia', 'Shure Axient Digital'],
    galleryImages: ['/assets/hero/homepage-hero.jpg'],
    heroImage: '/assets/hero/homepage-hero.jpg',
    status: 'Completed',
    amcActive: true,
    sector: 'Auditorium',
    completionBadge: 'Mega Convention Facility',
  },
  {
    id: 'proj-coal-india',
    title: 'Corporate Headquarters C-Suite Boardroom & MicroLED Wall',
    clientName: 'Coal India Limited (CIL)',
    clientType: 'PSU Corporate',
    location: 'Kolkata, West Bengal',
    year: '2023',
    category: 'Corporate',
    summary: 'Creation of an executive C-suite boardroom featuring Samsung The Wall MicroLED display (0.84mm pitch) and encrypted satellite teleconferencing.',
    challenge: 'Installing a high-brightness 216-inch seamless canvas in a glass-wall boardroom with high ambient light.',
    solution: 'Deployed Samsung MicroLED active matrix display with anti-reflective coating, Crestron NVX video routing, and Sennheiser ceiling microphone arrays.',
    impactMetrics: ['24/7 continuous operation readiness', 'True black depth with contrast ratio 1,000,000:1', 'Zero latency multi-window video feed'],
    installedEquipment: ['Samsung The Wall MicroLED (0.84mm)', 'Crestron 3-Series Controller', 'Sennheiser TCC2 Ceiling Mic', 'Extron Audio DSP'],
    galleryImages: ['/assets/hero/homepage-hero.jpg'],
    heroImage: '/assets/hero/homepage-hero.jpg',
    status: 'Completed',
    amcActive: true,
    sector: 'Corporate',
    completionBadge: 'C-Suite Landmark',
  },
  {
    id: 'proj-sbi-lho',
    title: 'Corporate Auditorium & Video Conferencing Complex',
    clientName: 'State Bank of India (SBI) Local Head Office',
    clientType: 'Corporate Bank',
    location: 'Kolkata, West Bengal',
    year: '2024',
    category: 'Corporate',
    summary: 'Turnkey renovation of the 500-seat SBI corporate auditorium and adjacent executive briefing suites with interactive touch screens.',
    challenge: 'Integrating legacy video conferencing hardware with modern 4K IP video streaming networks across 5 floor zones.',
    solution: 'Built an integrated Extron XTP matrix infrastructure with Bose Pro sound reinforcement and Panasonic 4K PTZ auto-tracking cameras.',
    impactMetrics: ['Seamless connection across 100+ SBI national branches', 'Automatic camera framing on active speaker', 'High clarity speech delivery'],
    installedEquipment: ['Bose Professional DesignMax', 'Panasonic 4K PTZ Cameras', 'Extron XTP Matrix Switcher', 'Shure Wireless Mics'],
    galleryImages: ['/assets/hero/homepage-hero.jpg'],
    heroImage: '/assets/hero/homepage-hero.jpg',
    status: 'Completed',
    amcActive: true,
    sector: 'Corporate',
    completionBadge: 'Banking Sector Milestone',
  },
  {
    id: 'proj-itc-royal-bengal',
    title: '5-Star Grand Ballroom Audio Matrix & Architectural DMX Lighting',
    clientName: 'ITC Royal Bengal & ITC Sonar',
    clientType: 'Luxury Hotel',
    location: 'Kolkata, West Bengal',
    year: '2023',
    category: 'Hotels',
    summary: 'Design and commissioning of a multi-zone audio distribution matrix and Lutron Quantum architectural scene lighting for luxury wedding ballrooms.',
    challenge: 'Providing high sound pressure levels for banquet DJ events while maintaining low acoustic spill into adjacent guest suites.',
    solution: 'Installed ceiling-recessed JBL Professional speakers paired with Crown multi-channel DSP amplifiers and Lutron touchscreen lighting controllers.',
    impactMetrics: ['Dynamic mood lighting scene presets for weddings & corporate galas', 'Zero acoustic vibration transmission to guest rooms', 'High guest satisfaction rating'],
    installedEquipment: ['JBL Professional Control Series', 'Crown ComTech Amplifiers', 'Lutron Quantum Lighting', 'Extron Media Matrix'],
    galleryImages: ['/assets/hero/homepage-hero.jpg'],
    heroImage: '/assets/hero/homepage-hero.jpg',
    status: 'Completed',
    amcActive: true,
    sector: 'Hotels',
    completionBadge: 'Luxury Hospitality Standard',
  },
  {
    id: 'proj-taj-bengal',
    title: 'Executive Meeting Suites & Public Area Background Music',
    clientName: 'Taj Bengal Hotel',
    clientType: 'Luxury Hotel',
    location: 'Kolkata, West Bengal',
    year: '2022',
    category: 'Hotels',
    summary: 'Upgrade of 8 executive boardroom suites and public atrium background music system with zone-based acoustic balancing.',
    challenge: 'Discreet aesthetic integration conforming to heritage 5-star hotel interior decor guidelines.',
    solution: 'Flush-mounted architectural Bose FreeSpace ceiling speakers painted to match interior ceiling gilding with centralized Crestron tablet control.',
    impactMetrics: ['Discreet architectural appearance with zero visible wiring', 'Crystal clear ambient background sound', 'Seamless tablet touch control'],
    installedEquipment: ['Bose FreeSpace Architectural', 'Crestron Touch Control', 'Crown ComTech Amplifiers', 'Biamp Audio Processor'],
    galleryImages: ['/assets/hero/homepage-hero.jpg'],
    heroImage: '/assets/hero/homepage-hero.jpg',
    status: 'Completed',
    amcActive: true,
    sector: 'Hotels',
    completionBadge: 'Heritage Luxury AV',
  },
  {
    id: 'proj-ballygunge-villa',
    title: 'Ultra-Luxury Villa Whole-Home Automation & Smart Lighting',
    clientName: 'Private Luxury Residence',
    clientType: 'Residential High Net Worth',
    location: 'Ballygunge, Kolkata',
    year: '2024',
    category: 'Home Automation',
    summary: 'Complete home automation for a 12,000 sq. ft. private estate incorporating Crestron Home, Lutron Homeworks, smart motorized drapes, and biometric access.',
    challenge: 'Unifying HVAC, lighting, security, motorized shades, and multi-room audio into a single intuitive smartphone app.',
    solution: 'Deployed Crestron Home OS paired with Lutron Athena lighting control, architectural hidden speakers, and facial recognition entry gates.',
    impactMetrics: ['35% energy savings via automated daylight harvesting', 'One-touch custom scenes (Welcome, Movie, Party, Night)', 'Complete mobile & voice control'],
    installedEquipment: ['Crestron Home Controller', 'Lutron Homeworks / Athena', 'Bose Architectural Audio', 'Suprema Biometric Access'],
    galleryImages: ['/assets/hero/homepage-hero.jpg'],
    heroImage: '/assets/hero/homepage-hero.jpg',
    status: 'Completed',
    amcActive: true,
    sector: 'Home Automation',
    completionBadge: 'Luxury Smart Residence',
  },
  {
    id: 'proj-alipore-residence',
    title: 'Integrated Smart Residence HVAC, Lighting & Multi-Room Audio',
    clientName: 'Alipore Executive Mansion',
    clientType: 'Residential',
    location: 'Alipore, Kolkata',
    year: '2023',
    category: 'Home Automation',
    summary: 'Smart living system integration featuring motorized acoustic blackout shades, multi-zone audio streaming, and central touch panels.',
    challenge: 'Acoustic sound isolation between living rooms and sleeping quarters while maintaining open floorplan aesthetics.',
    solution: 'Installed acoustic absorption panels behind silk wall fabric, paired with Crestron touch panels and Lutron motorized roller shades.',
    impactMetrics: ['Zero sound leakage to master bedroom suites', 'Intuitive touch screen panel in every room', 'Automated climate schedule'],
    installedEquipment: ['Crestron Touch Panels', 'Lutron Sivoia Shades', 'Sonos Pro Matrix', 'Bosch Security System'],
    galleryImages: ['/assets/hero/homepage-hero.jpg'],
    heroImage: '/assets/hero/homepage-hero.jpg',
    status: 'Completed',
    amcActive: true,
    sector: 'Home Automation',
    completionBadge: 'Smart Living Automation',
  },
  {
    id: 'proj-calcutta-club',
    title: 'Heritage Banquet Hall Sound System & Acoustic Shell Treatment',
    clientName: 'Calcutta Club Limited',
    clientType: 'Heritage Club',
    location: 'Kolkata, West Bengal',
    year: '2023',
    category: 'Clubs & Restaurants',
    summary: 'Acoustic reverberation reduction and high-fidelity pro audio installation for the grand heritage banquet hall.',
    challenge: 'Reducing reverberation time (RT60) from 2.8s to 1.1s in a colonial high-ceiling brick structure without damaging historic woodwork.',
    solution: 'Designed custom fabric-wrapped Helmholtz acoustic absorber wall panels and installed Bose DesignMax column loudspeakers.',
    impactMetrics: ['RT60 reduced from 2.8 seconds to 1.1 seconds', 'High clarity speech for club AGMs and musical performances', 'Preserved colonial heritage aesthetic'],
    installedEquipment: ['Bose DesignMax Loudspeakers', 'Crown Amplifiers', 'Acoustic Solutions Fabric Panels', 'Shure Wireless Microphones'],
    galleryImages: ['/assets/hero/homepage-hero.jpg'],
    heroImage: '/assets/hero/homepage-hero.jpg',
    status: 'Completed',
    amcActive: true,
    sector: 'Clubs & Restaurants',
    completionBadge: 'Heritage Club Landmark',
  },
  {
    id: 'proj-tollygunge-club',
    title: 'Outdoor Lawn Pavilion All-Weather Audio & Architectural Lighting',
    clientName: 'The Tollygunge Club',
    clientType: 'Sports & Social Club',
    location: 'Kolkata, West Bengal',
    year: '2022',
    category: 'Clubs & Restaurants',
    summary: 'All-weather IP65 outdoor sound system and landscape architectural lighting across the golf pavilion and dining lawns.',
    challenge: 'Providing rich sound coverage across 50,000 sq. ft. of open outdoor garden space without disturbing neighboring residential blocks.',
    solution: 'Installed highly directional JBL weather-proof outdoor speakers and landscape acoustic subwoofers with automated time-of-day volume limiting.',
    impactMetrics: ['IP65 weather resistant for monsoon heavy rain', 'Even audio coverage across open lawns', 'Zero neighbor noise complaints'],
    installedEquipment: ['JBL Weatherized Loudspeakers', 'Crown ComTech Amplifiers', 'Chauvet Outdoor Architectural Light', 'Biamp Zone Processor'],
    galleryImages: ['/assets/hero/homepage-hero.jpg'],
    heroImage: '/assets/hero/homepage-hero.jpg',
    status: 'Completed',
    amcActive: true,
    sector: 'Clubs & Restaurants',
    completionBadge: 'Outdoor Acoustic Architecture',
  },
  {
    id: 'proj-new-town-cinema',
    title: 'Dolby Atmos 9.2.4 Private Home Cinema & Acoustic Chamber',
    clientName: 'Private Estate Home Theater',
    clientType: 'Residential',
    location: 'New Town, Kolkata',
    year: '2024',
    category: 'Residential',
    summary: 'Dedicated 12-seat private cinema room featuring Dolby Atmos 9.2.4 acoustic audio, 4K 150-inch micro-perforated screen, and Christie 4K laser projector.',
    challenge: 'Isolating extreme low-frequency bass impact (20Hz) from the rest of the residence while maintaining THX reference volume inside.',
    solution: 'Built a decoupled "room-within-a-room" acoustic floating floor, double drywall with acoustic damping compound, and JBL Synthesis speakers.',
    impactMetrics: ['NC-20 noise criterion background quietness', 'THX Level Reference Cinema Audio', '4K HDR Cinema color accuracy'],
    installedEquipment: ['JBL Synthesis Cinema Speakers', 'Christie 4K Laser Cinema Projector', 'Lutron Lighting Scene Control', 'Crestron Home Controller'],
    galleryImages: ['/assets/hero/homepage-hero.jpg'],
    heroImage: '/assets/hero/homepage-hero.jpg',
    status: 'Completed',
    amcActive: true,
    sector: 'Residential',
    completionBadge: 'Private Reference Cinema',
  },
  {
    id: 'proj-em-bypass-estate',
    title: 'Multi-Zone Estate Audio, IP Surveillance & Perimeter Defense',
    clientName: 'Gated Private Estate',
    clientType: 'Residential',
    location: 'EM Bypass, Kolkata',
    year: '2023',
    category: 'Residential',
    summary: 'End-to-end security and entertainment infrastructure for a 2-acre private estate comprising 32 IP cameras, facial recognition, and landscape audio.',
    challenge: 'Managing long-distance fiber optic cabling between main villa, guest house, and perimeter security gates.',
    solution: 'Laid armored single-mode fiber backbone, Bosch IP cameras with AI perimeter detection, and Crestron multi-zone audio streaming.',
    impactMetrics: ['24/7 AI thermal perimeter alert notification', 'Instant facial recognition gate unlock', 'Multi-zone synchronized music streaming'],
    installedEquipment: ['Bosch IP Security Cameras', 'Suprema Face Recognition', 'Crestron Home Audio', 'Bose FreeSpace Outdoor'],
    galleryImages: ['/assets/hero/homepage-hero.jpg'],
    heroImage: '/assets/hero/homepage-hero.jpg',
    status: 'Completed',
    amcActive: true,
    sector: 'Residential',
    completionBadge: 'Estate Security & AV',
  },
];

export const PROJECTS: ProjectCaseStudy[] = [...REEL_PROJECTS, ...STATIC_PROJECT_CASE_STUDIES];

export const ENGINEERING_STEPS: EngineeringStep[] = [
  {
    stepNumber: '01',
    title: 'Needs Discovery & Consultation',
    subtitle: 'Technical Briefing & Operational Analysis',
    description:
      'Our senior electro-acoustic engineers engage directly with client architects, consultants, and stakeholders to define functional objectives, acoustic parameters, budget parameters, and regulatory standards.',
    keyDeliverables: [
      'Technical Scope Matrix',
      'Functional Requirement Specification (FRS)',
      'Preliminary Budget & Equipment Options',
    ],
    standardsFollowed: ['IS 13824 Acoustics', 'AVIXA Systems Standards'],
    icon: '/assets/icons/process/site-survey.png',
  },
  {
    stepNumber: '02',
    title: 'Acoustic & Structural Site Survey',
    subtitle: 'Precision Measurement & Laser Spatial Scanning',
    description:
      'Deployment of acoustic measurement microphones, laser distance scanners, and ambient noise meters to record raw room acoustics, structural load capacities, electrical paths, and thermal dynamics.',
    keyDeliverables: [
      'In-situ Ambient Noise Level (NC) Curve',
      'Initial RT60 Reverberation Measurement',
      'Structural Cable Pathway Assessment Report',
    ],
    standardsFollowed: ['ISO 3382 Acoustic Measurement', 'ANSI/ASA S12.2'],
    icon: '/assets/icons/process/design.png',
  },
  {
    stepNumber: '03',
    title: 'CAD Engineering & Acoustic Simulation',
    subtitle: '3D EASE Modeling, Single-Line Diagrams & BOQ',
    description:
      'Engineering design using EASE acoustic software to simulate sound pressure distribution, speech intelligibility (STI), visual sightlines, rack power calculations, and detailed AutoCAD architectural overlays.',
    keyDeliverables: [
      'EASE 3D Sound Simulation & Heatmaps',
      'AutoCAD Floorplan & Elevation Wiring Drawings',
      'System Single-Line Schematics (SLD) & BOQ',
    ],
    standardsFollowed: ['AVIXA F501.01:2015', 'BIS / IEEE Standards'],
    icon: '/assets/icons/process/procurement.png',
  },
  {
    stepNumber: '04',
    title: 'Precision Installation & Rack Building',
    subtitle: 'Structured Cabling, Metal Fabrication & Rack Wiring',
    description:
      'Site installation by certified technicians including conduit routing, acoustic panel fixing, custom equipment rack building with labeled heat-shrink wire tags, power distribution, and ventilation management.',
    keyDeliverables: [
      'Pre-assembled & Factory Tested Equipment Racks',
      'Labeled & Bundled Low-Loss Cabling Runs',
      'Quality Inspection & Safety Milestone Certificates',
    ],
    standardsFollowed: ['ISO 9001 Quality Protocols', 'NEC Cable Safety'],
    icon: '/assets/icons/process/installation.png',
  },
  {
    stepNumber: '05',
    title: 'Tuning, DSP Calibration & Testing',
    subtitle: 'Acoustic Real-Time Analysis & System Commissioning',
    description:
      'Scientific tuning using real-time analyzers (RTA), pink noise generators, gain-structure calibration, DSP equalizer tuning, microphone feedback suppression, and video color matrix alignment.',
    keyDeliverables: [
      'Final RT60 & STI Calibration Test Report',
      'DSP System Configuration Backups',
      'Factory Acceptance Test (FAT) Sign-off',
    ],
    standardsFollowed: ['AVIXA A102.01:2019 Audio System Performance'],
    icon: '/assets/icons/process/testing.png',
  },
  {
    stepNumber: '06',
    title: 'Handover, Training & Comprehensive AMC',
    subtitle: 'User Training, As-Built Manuals & SLA Support',
    description:
      'Formal system handover backed by step-by-step end-user training, laminated quick-start room guides, complete as-built CAD documentation, and 24/7 SLA-backed Annual Maintenance Contracts (AMC).',
    keyDeliverables: [
      'Complete As-Built Engineering Binder & CADs',
      'Hands-On Client Operator Training Certificate',
      '24/7 Dedicated AMC Hotlines & On-Site SLA Response',
    ],
    standardsFollowed: ['EAIPL ISO 9001 AMC Quality Standard'],
    icon: '/assets/icons/process/handover.png',
  },
];

export const OEM_PARTNERS: OEMPartner[] = [
  {
    id: 'bose',
    name: 'Bose Professional',
    category: 'Pro Audio',
    logoText: 'BOSE PROFESSIONAL',
    tier: 'Authorized Direct System Integrator',
    featuredProducts: ['ShowMatch Line Array', 'ArenaMatch Speakers', 'ControlSpace DSP'],
    description: 'Premier electro-acoustic loudspeakers, steerable array systems, and digital sound processors.',
  },
  {
    id: 'bosch',
    name: 'Bosch Security & Systems',
    category: 'Security & Conference',
    logoText: 'BOSCH',
    tier: 'Class-A Enterprise Partner',
    featuredProducts: ['DICENTIS Delegate Mics', 'Praesensa IP PA/VA', 'BVMS Video Surveillance'],
    description: 'Industry-leading delegate conference systems, EN54 voice alarm networks, and security surveillance.',
  },
  {
    id: 'crestron',
    name: 'Crestron Electronics',
    category: 'Control & AV-over-IP',
    logoText: 'CRESTRON',
    tier: 'Authorized Elite Integrator',
    featuredProducts: ['DigitalMedia NVX 4K', '3-Series Processors', 'Flex UC Solutions'],
    description: 'Global standard for enterprise automation, matrix switching, and unified communications.',
  },
  {
    id: 'extron',
    name: 'Extron Electronics',
    category: 'AV Processing & Signal',
    logoText: 'EXTRON',
    tier: 'Certified Integrator Partner',
    featuredProducts: ['DMP 128 Audio DSP', 'Quantum Ultra Video Wall Processor', 'XTP Systems'],
    description: 'Professional AV signal processing, switching, matrix routing, and acoustic DSP hardware.',
  },
  {
    id: 'jbl',
    name: 'JBL Professional by Harman',
    category: 'Pro Audio & Sound',
    logoText: 'JBL PROFESSIONAL',
    tier: 'Authorized Systems Integrator',
    featuredProducts: ['VTX Series Line Array', 'CBT Constant Beamwidth', 'Control Contractor Ceiling'],
    description: 'Iconic performance sound reinforcement, stadium line arrays, and architectural acoustic loudspeakers.',
  },
  {
    id: 'christie',
    name: 'Christie Digital',
    category: 'Visual & Video Wall',
    logoText: 'CHRISTIE',
    tier: 'Enterprise Display Partner',
    featuredProducts: ['Velvet MicroLED', '1DLP / 3DLP Laser Projectors', 'Spyder Video Processors'],
    description: 'High-end laser projectors, fine-pitch MicroLED video walls, and command center image processors.',
  },
  {
    id: 'samsung',
    name: 'Samsung Enterprise',
    category: 'Visual Displays',
    logoText: 'SAMSUNG',
    tier: 'Commercial Display Partner',
    featuredProducts: ['The Wall MicroLED', 'Flip Interactive Displays', 'QET Commercial Panels'],
    description: 'Cutting-edge commercial flat panels, interactive touchboards, and direct-view LED walls.',
  },
  {
    id: 'panasonic',
    name: 'Panasonic Connect',
    category: 'Visual & Cameras',
    logoText: 'PANASONIC',
    tier: 'Authorized System Integrator',
    featuredProducts: ['4K Professional PTZ Cameras', 'High-Lumen Laser Projectors', 'KAIROS Platform'],
    description: 'Broadcast-grade auto-tracking PTZ cameras and heavy-duty 3-chip DLP laser projectors.',
  },
  {
    id: 'shure',
    name: 'Shure Incorporated',
    category: 'Microphones & Audio',
    logoText: 'SHURE',
    tier: 'Certified Systems Partner',
    featuredProducts: ['Microflex Advance MXA920 Ceiling Mic', 'MXW Wireless', 'Stem Ecosystem'],
    description: 'World-renowned beamforming ceiling microphones, wireless speech arrays, and conference systems.',
  },
  {
    id: 'sennheiser',
    name: 'Sennheiser Electronic',
    category: 'Microphones & Audio',
    logoText: 'SENNHEISER',
    tier: 'Authorized Pro AV Partner',
    featuredProducts: ['TeamConnect Ceiling 2', 'SpeechLine Digital Wireless', 'Evolution Wireless Digital'],
    description: 'German precision ceiling microphones, speech wireless systems, and assistive listening tech.',
  },
  {
    id: 'lutron',
    name: 'Lutron Electronics',
    category: 'Lighting Control',
    logoText: 'LUTRON',
    tier: 'Commercial Architectural Partner',
    featuredProducts: ['Quantum Lighting System', 'HomeWorks / Athena', 'Motorized Sivoia Shades'],
    description: 'Architectural lighting control, daylight harvesting, and automated blackout shade mechanics.',
  },
  {
    id: 'biamp',
    name: 'Biamp Systems',
    category: 'Audio DSP & Network',
    logoText: 'BIAMP',
    tier: 'Certified Audio Partner',
    featuredProducts: ['TesiraFORTÉ Audio DSP', 'Desono Loudspeakers', 'Parlé Beamtracking Mics'],
    description: 'Open-architecture audio DSP, AVB/Dante networked media systems, and acoustic beamtracking.',
  },
];

export const TESTIMONIALS: ClientTestimonial[] = [
  {
    id: 'test-1',
    clientName: 'Chief Engineer (Electrical)',
    designation: 'Public Works Department (PWD)',
    organization: 'State Government Infrastructure Division',
    organizationType: 'Government Body',
    quote:
      'Electro Acoustic Infotech Pvt. Ltd. (EAIPL) delivered the 1,800-seat state cultural auditorium well within tight timelines. Their technical mastery over acoustic room modeling and line array tuning transformed a historically noisy hall into a world-class venue. Their post-handover support under AMC is exemplary.',
    projectContext: '1,800-Seat State Cultural Auditorium Turnkey Integration',
    year: '2024',
    badgeText: 'Official State Govt Commendation',
  },
  {
    id: 'test-2',
    clientName: 'Director of IT & Automation',
    designation: 'Office of the Registrar',
    organization: 'Premier Central University Campus',
    organizationType: 'Higher Education',
    quote:
      'EAIPL executed the turnkey modernization of 50 smart classrooms across our campus during the 45-day recess. The seamless combination of auto-tracking PTZ cameras, ceiling array beamforming mics, and touch displays has elevated our distance learning capability.',
    projectContext: '50+ HD Smart Classroom Rollout',
    year: '2024',
    badgeText: 'University Senate Appreciation',
  },
  {
    id: 'test-3',
    clientName: 'General Manager (Infrastructure)',
    designation: 'Corporate Estate & IT Division',
    organization: 'Central Public Sector Undertaking (PSU)',
    organizationType: 'Government Enterprise',
    quote:
      'When setting up our disaster response command center video wall, zero latency and 24/7 reliability were non-negotiable. EAIPL’s engineering team built a redundant Crestron NVX routing system that has operated flawlessly through multiple storm emergencies.',
    projectContext: 'Disaster Management Command & Control Center',
    year: '2023',
    badgeText: 'Mission-Critical Performance Certificate',
  },
  {
    id: 'test-4',
    clientName: 'Senior Medical Director & Head of Surgery',
    designation: 'Department of Surgical Operations',
    organization: 'Super-Specialty Hospital Network',
    organizationType: 'Healthcare',
    quote:
      'EAIPL’s medical AV integration in our 8 modular operation theatres provides uncompressed 4K video feeds directly to our surgical monitors and auditorium. The sterile wall-flush controls and zero latency give our surgeons complete confidence.',
    projectContext: '8 Modular OT Digital Video Matrix',
    year: '2023',
    badgeText: 'Healthcare Tech Innovation Award',
  },
];

export const BRANCH_OFFICES: BranchOffice[] = [
  {
    id: 'kolkata',
    city: 'Kolkata',
    officeName: 'Kolkata Corporate Head Office',
    officeType: 'Head Office',
    type: 'Registered Corporate Head Office',
    address: '83/6, Ballygunge Place, Ballygunge, Kolkata, West Bengal - 700019',
    phone: '+91 70445 50001',
    email: 'info@eaipl.co.in',
    mapQuery: '83/6, Ballygunge Place, Ballygunge, Kolkata, West Bengal 700019',
  },
  {
    id: 'delhi',
    city: 'New Delhi / NCR',
    officeName: 'Delhi Regional Office',
    officeType: 'Regional Office',
    type: 'North India Regional Office',
    address: 'Connaught Place, New Delhi, Delhi - 110001',
    phone: '+91 70445 50001',
    email: 'info@eaipl.co.in',
    mapQuery: 'Connaught Place, New Delhi, Delhi 110001',
  },
  {
    id: 'guwahati',
    city: 'Guwahati',
    officeName: 'Guwahati Regional Office',
    officeType: 'Regional Office',
    type: 'North-East Regional Office',
    address: 'GS Road, Dispur, Guwahati, Assam - 781005',
    phone: '+91 70445 50001',
    email: 'info@eaipl.co.in',
    mapQuery: 'GS Road, Dispur, Guwahati, Assam 781005',
  },
  {
    id: 'bhubaneswar',
    city: 'Bhubaneswar',
    officeName: 'Bhubaneswar Regional Office',
    officeType: 'Regional Office',
    type: 'Odisha Regional Office',
    address: 'Saheed Nagar, Janpath, Bhubaneswar, Odisha - 751007',
    phone: '+91 70445 50001',
    email: 'info@eaipl.co.in',
    mapQuery: 'Saheed Nagar, Janpath, Bhubaneswar, Odisha 751007',
  },
  {
    id: 'patna',
    city: 'Patna',
    officeName: 'Patna Branch Office',
    officeType: 'Regional Office',
    type: 'Bihar Regional Office',
    address: 'Fraser Road, Near Gandhi Maidan, Patna, Bihar - 800001',
    phone: '+91 70445 50001',
    email: 'info@eaipl.co.in',
    mapQuery: 'Fraser Road, Patna, Bihar 800001',
  },
  {
    id: 'ranchi',
    city: 'Ranchi',
    officeName: 'Ranchi Regional Office',
    officeType: 'Regional Office',
    type: 'Jharkhand Regional Office',
    address: 'Main Road, Overbridge Square, Ranchi, Jharkhand - 834001',
    phone: '+91 70445 50001',
    email: 'info@eaipl.co.in',
    mapQuery: 'Main Road, Overbridge Square, Ranchi, Jharkhand 834001',
  },
  {
    id: 'bengaluru',
    city: 'Bengaluru',
    officeName: 'Bengaluru Technology Center',
    officeType: 'Regional Office',
    type: 'South India Hub',
    address: 'MG Road, Bengaluru, Karnataka - 560001',
    phone: '+91 70445 50001',
    email: 'info@eaipl.co.in',
    mapQuery: 'MG Road, Bengaluru, Karnataka 560001',
  },
  {
    id: 'mumbai',
    city: 'Mumbai',
    officeName: 'Mumbai Regional Office',
    officeType: 'Regional Office',
    type: 'West India Regional Hub',
    address: 'BKC Bandra East, Mumbai, Maharashtra - 400051',
    phone: '+91 70445 50001',
    email: 'info@eaipl.co.in',
    mapQuery: 'BKC Bandra East, Mumbai, Maharashtra 400051',
  },
  {
    id: 'hyderabad',
    city: 'Hyderabad',
    officeName: 'Hyderabad Support Hub',
    officeType: 'Regional Office',
    type: 'Telangana & AP Operations',
    address: 'HITEC City, Madhapur, Hyderabad, Telangana - 500081',
    phone: '+91 70445 50001',
    email: 'info@eaipl.co.in',
    mapQuery: 'HITEC City, Hyderabad, Telangana 500081',
  },
];

export const FAQS = [
  {
    question: 'Is Electro Acoustic Infotech Pvt. Ltd. (EAIPL) an OEM manufacturer or a System Integrator?',
    answer:
      'EAIPL is a premier Class-I Turnkey Engineering System Integrator and EPC Solution Provider. We design, supply, engineer, install, test, calibrate, and maintain complete systems by integrating global OEM hardware (Bose, Bosch, Crestron, Extron, Samsung, Christie, etc.) backed by our in-house electro-acoustic and CAD engineering team.',
  },
  {
    question: 'Does EAIPL participate in Government E-Tenders, GeM Portal, and PWD Contracts?',
    answer:
      'Yes. EAIPL is a Class-I Registered Vendor across multiple State PWD departments, Ministry divisions, PSUs, and Educational Autonomous Bodies. We fulfill all GeM (Government e-Marketplace) compliance, tender BOQ specifications, bank guarantee protocols, and ISO 9001 quality audits.',
  },
  {
    question: 'What is EAIPL’s typical project execution workflow from consultation to handover?',
    answer:
      'We follow a strict 6-phase engineering lifecycle: 1. Needs Consultation & Briefing, 2. Acoustic & Structural Site Measurement, 3. CAD Design & 3D EASE Acoustic Simulation, 4. Precision On-site Rack Assembly & Wiring, 5. Acoustic Tuning, DSP Equalization & Testing, and 6. Formal Handover, Operator Training & SLA AMC Support.',
  },
  {
    question: 'Can EAIPL upgrade or acoustically treat an existing auditorium suffering from echo?',
    answer:
      'Absolutely. We specialize in retrofitting legacy auditoriums. We perform in-situ RT60 reverberation analysis, design custom Helmholtz absorptive wall panels, replace outdated acoustics, and install steerable line array speakers that focus acoustic energy directly on seating areas without bouncing off walls.',
  },
  {
    question: 'What type of Annual Maintenance Contracts (AMC) and post-installation support does EAIPL provide?',
    answer:
      'We offer Comprehensive (CAMC) and Non-Comprehensive AMCs with defined Service Level Agreements (SLAs). Options include dedicated on-site resident engineers for critical venues, 4-hour emergency response times, quarterly preventive maintenance routines, and spare replacement backings.',
  },
];

export const PROJECT_CASE_STUDIES = PROJECTS;
