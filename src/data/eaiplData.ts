import {
  MetricItem,
  SolutionCategory,
  IndustrySector,
  ProjectCaseStudy,
  EngineeringStep,
  OEMPartner,
  ClientTestimonial,
  BranchOffice,
} from '../types';

export const COMPANY_INFO = {
  name: 'Electro Acoustic Infotech Pvt. Ltd.',
  shortName: 'EAIPL',
  tagline: 'Enterprise Electro-Acoustic, Audio Visual & Turnkey Systems Integration',
  foundedYear: '1998',
  experienceYears: '25+',
  projectsCount: '1,500+',
  oemPartnersCount: '50+',
  hqLocation: 'Kolkata, West Bengal, India',
  isoCertification: 'ISO 9001:2015 Certified',
  govRegistration: 'Class-I Registered Turnkey Vendor & EPC Contractor',
  officialWebsite: 'https://eaipl.co.in',
  facebookPage: 'https://www.facebook.com/EAIPLINDIA',
  contactEmail: 'info@eaipl.co.in',
  supportEmail: 'support@eaipl.co.in',
  phone: '+91 33 2289 1234',
  tollFree: '1800 123 3247 (EAIPL)',
  emergencyHotline: '+91 98300 00000',
};

export const METRICS: MetricItem[] = [
  {
    id: 'exp',
    label: 'Years of Engineering Excellence',
    value: '25+',
    subtext: 'Pioneering Electro-Acoustic & AV System Integration in India since 1998',
    iconName: 'Award',
  },
  {
    id: 'projects',
    label: 'Turnkey Projects Executed',
    value: '1,500+',
    subtext: 'Across Govt, PSUs, Defense, Education, Healthcare & Corporate Sectors',
    iconName: 'CheckCircle2',
  },
  {
    id: 'oem',
    label: 'Global OEM Authorizations',
    value: '50+',
    subtext: 'Direct partnership with world-leading AV, Audio & Security Manufacturers',
    iconName: 'Layers',
  },
  {
    id: 'iso',
    label: 'Quality & Governance',
    value: 'ISO 9001:2015',
    subtext: 'Certified Engineering Workflows, System Design & AMC Support Standards',
    iconName: 'ShieldCheck',
  },
];

export const SOLUTIONS: SolutionCategory[] = [
  {
    id: 'pro-audio',
    title: 'Professional Audio & Electro-Acoustics',
    tagline: 'High-intelligibility sound reinforcement for critical acoustic spaces',
    icon: 'Volume2',
    description:
      'Precision-engineered acoustic sound systems incorporating DSP beam-steering line arrays, boundary microphones, digital matrix mixers, and acoustic echo cancellation (AEC) tailored for auditoriums, council chambers, and high-noise environments.',
    keyFeatures: [
      'Acoustic Ray-Tracing & Simulation Modeling',
      'Beam-Steering Line Array Speaker Deployment',
      'Digital Signal Processing (DSP) & Automated Feedback Suppression',
      'Delegate Conference Systems with Simultaneous Interpretation',
      'High-Intelligibility Speech Amplification (STI > 0.65)',
    ],
    equipmentBrands: ['Bose Professional', 'JBL Professional', 'Biamp', 'Shure', 'Sennheiser', 'Crown'],
    sampleDeliverables: [
      'Acoustic Map & EASE Simulation Reports',
      'Rack Wiring Schematics & Cable Schedules',
      'DSP File Configurations & Equalization Curves',
    ],
    badge: 'Core Expertise',
  },
  {
    id: 'av-integration',
    title: 'Audio Visual System Integration',
    tagline: 'Seamless ultra-high-definition visual distribution & interactive displays',
    icon: 'Tv',
    description:
      'End-to-end video distribution, fine-pitch indoor/outdoor LED video walls, laser projection systems, interactive flat panels, and AV-over-IP matrix networks designed for corporate boardrooms, command centers, and university lecture halls.',
    keyFeatures: [
      'Direct-View MicroLED & Fine-Pitch Video Walls (0.9mm - 1.5mm)',
      'High-Lumen Laser Projection & Motorized Tension Screens',
      '4K 60Hz 4:4:4 AV-over-IP Network Switching',
      'Multi-source Video Processors & Windowing Systems',
      'Wireless Content Sharing & Bring-Your-Own-Device (BYOD) Hubs',
    ],
    equipmentBrands: ['Crestron', 'Extron', 'Christie', 'Samsung', 'Panasonic', 'LG Enterprise'],
    sampleDeliverables: [
      'Visual Coverage Diagrams & Viewing Distance Calculations',
      'Video Matrix Switching Topology Map',
      'Control Panel UI Mockups & Source Routing Charts',
    ],
    badge: 'High Demand',
  },
  {
    id: 'stage-lighting',
    title: 'Stage Equipment & Architectural Lighting',
    tagline: 'Dynamic stage mechanics, motorized rigging, and intelligent DMX/RDM lighting',
    icon: 'Sparkles',
    description:
      'Turnkey stage solutions encompassing motorized curtain tracks, counterweight rigging, DMX512/RDM intelligent moving heads, LED theatrical profiles, followspots, and computerized light control consoles for state auditoriums and cultural centers.',
    keyFeatures: [
      'Motorized & Manual Stage Rigging & Flying Systems',
      'Acoustic Shells & Sound Reflective Shell Panels',
      'DMX512-A / Art-Net Architectural & Stage Lighting Control',
      'Energy-Efficient High-CRI LED Theatrical Spotlights',
      'Cyclorama & Stage Velvet Drapery Systems',
    ],
    equipmentBrands: ['Lutron', 'ETC (Electronic Theatre Controls)', 'Chauvet Professional', 'Martin', 'Robe'],
    sampleDeliverables: [
      'Stage Lighting Grid CAD Layouts',
      'Power Loading & Dimmer Rack Calculations',
      'DMX Patch Sheets & Scene Preset Programming',
    ],
  },
  {
    id: 'acoustics-engineering',
    title: 'Room Acoustics & Noise Control',
    tagline: 'Scientific reverberation control, soundproofing, and noise isolation',
    icon: 'Waves',
    description:
      'Comprehensive architectural acoustics design, RT60 reverberation time optimization, sound isolation wall assemblies, bass traps, stretch-fabric acoustic wall paneling, and floating floor systems to guarantee pristine acoustic response.',
    keyFeatures: [
      'In-situ RT60 & Sound Transmission Class (STC) Measurements',
      'Perforated Wooden & Fabric-Wrapped Absorptive Paneling',
      'Custom Diffuser Arrays & Bass Trap Engineering',
      'HVAC Noise Attenuation & Duct Silencer Integration',
      'Vibration Isolation for Heavy Machinery & Mechanical Rooms',
    ],
    equipmentBrands: ['Armstrong Acoustics', 'Saint-Gobain', 'Anutone', 'Vicoustic', 'Custom Fabrication'],
    sampleDeliverables: [
      'Pre & Post Installation RT60 Acoustic Analysis',
      '3D Acoustic Reflection Simulations',
      'Material Technical Compliance Certificates',
    ],
    badge: 'Specialized',
  },
  {
    id: 'security-surveillance',
    title: 'Integrated Security & Surveillance Systems',
    tagline: 'Enterprise IP CCTV, access control, perimeter defense, and AI video analytics',
    icon: 'Shield',
    description:
      'Mission-critical security architecture integrating ultra-HD IP surveillance cameras, AI video analytics (ANPR, facial recognition, crowd density), RFID biometric access control, and automated bollards for high-security facilities.',
    keyFeatures: [
      'AI-Powered IP Video Management Systems (VMS)',
      'Automatic Number Plate Recognition (ANPR) & Gate Automation',
      'Biometric Multi-factor Access Control & Visitor Management',
      'Perimeter Intrusion Detection Systems (PIDS)',
      'Centralized Security Operation Center (SOC) Console Desks',
    ],
    equipmentBrands: ['Bosch Security', 'Hikvision Commercial', 'Dahua Enterprise', 'Honeywell', 'Axis Communications'],
    sampleDeliverables: [
      'Camera Lens FOV & Storage Calculation Reports',
      'Access Control Door Cable Topology',
      'SOC Control Room Ergonomic Layouts',
    ],
  },
  {
    id: 'healthcare-av',
    title: 'Healthcare & Medical AV Solutions',
    tagline: 'Digital Operation Theatre (OT) integration, surgical displays, and telemedicine',
    icon: 'Activity',
    description:
      'High-grade medical AV integration for super-specialty hospitals, featuring uncompressed zero-latency 4K surgical video routing, OT glass touch panels, telemedicine streaming systems, and nurse call systems conforming to medical safety standards.',
    keyFeatures: [
      'Uncompressed Zero-Latency 4K Surgical Video Matrixing',
      'Antimicrobial Sealed Touch Controllers & Wall Monitors',
      'Medical-grade Telemedicine Audio/Video Streaming',
      'Live Surgical Streaming to Medical College Lecture Halls',
      'IP-Based Nurse Call Systems & Patient Room Intercoms',
    ],
    equipmentBrands: ['Barco Medical', 'Sony Healthcare', 'Crestron DigitalMedia', 'Stryker Integrated', 'Bosch Healthcare'],
    sampleDeliverables: [
      'Medical Grade AV Isolation Transformer Schematics',
      'Clean Room Wall Flush Mounting CAD Drawings',
      'DICOM Compliance Testing Documentation',
    ],
  },
  {
    id: 'central-control',
    title: 'Centralized Automation & Control',
    tagline: 'Unified touch-panel control for lighting, HVAC, AV, and environmental systems',
    icon: 'Cpu',
    description:
      'Custom-programmed automation system processors pairing custom graphic user interfaces (GUIs) on tabletop or wall-mounted touch panels to streamline complex multi-device operations into intuitive single-touch preset buttons.',
    keyFeatures: [
      'Custom GUI Design tailored for C-suite Executives & Operators',
      'Integrated Control of Lighting, Motorized Shades, HVAC & Displays',
      'Automated Meeting Room Scheduling & Occupancy Sensors',
      'Remote Network Monitoring & Predictive Maintenance Alerts',
      'Secure TLS/SSL Encypted Control Protocol Architecture',
    ],
    equipmentBrands: ['Crestron Electronics', 'Extron Electronics', 'AMX by Harman', 'Kramer Electronics'],
    sampleDeliverables: [
      'Custom Touch Panel UX/UI Layout Maps',
      'Control System Source Code & Logic Archives',
      'Room Automation User Operating Manuals',
    ],
  },
  {
    id: 'pa-va',
    title: 'Public Address & Voice Evacuation (PA/VA)',
    tagline: 'EN54-certified mass notification and ambient sound distribution',
    icon: 'Radio',
    description:
      'EN54 fire safety certified public address and life safety voice evacuation systems featuring redundant IP amplifier networks, zone paging consoles, background music distribution, and auto-failover emergency message generators.',
    keyFeatures: [
      'EN54-16 & EN54-24 Certified Life Safety Systems',
      'Networked Dante / CobraNet Emergency Paging Consoles',
      'Ambient Noise Sensing & Auto Volume Adjustment',
      'Multi-Zone Background Music (BGM) Routing',
      'Battery Backup Power Systems for Uninterrupted Paging',
    ],
    equipmentBrands: ['Bosch Praesensa / Plena', 'Honeywell Voice Alarm', 'TOA Electronics', 'Ateïs India'],
    sampleDeliverables: [
      'Speech Intelligibility CIS / STI Calculation Reports',
      'Zone Paging Schematic Diagram',
      'Fire Alarm Interfacing Matrix Documentation',
    ],
  },
];

export const INDUSTRIES: IndustrySector[] = [
  {
    id: 'corporate',
    title: 'Corporate & Enterprises',
    subtitle: 'Next-Generation Executive Boardrooms & Hybrid Collaboration Workspaces',
    icon: 'Building2',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    overview:
      'EAIPL transforms corporate workplaces with reliable, automated AV environments. From C-suite executive boardrooms to agile huddle rooms and town hall spaces, our systems eliminate technology friction.',
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
    keyClients: ['Tata Group Units', 'ITC Limited Facilities', 'Coal India Corporate HQ', 'Top IT MNC Campuses'],
    caseStudyTitle: 'Tier-1 IT Executive Town Hall & Boardroom Integration',
  },
  {
    id: 'education',
    title: 'Education & Research Institutes',
    subtitle: 'Smart Campus Infrastructure, Digital Lecture Halls & Distance Learning',
    icon: 'GraduationCap',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    overview:
      'Empowering premier universities, IITs, NITs, and medical colleges with digital classrooms, automated lecture capture systems, and acoustic sound reinforcement for large academic auditoriums.',
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
    keyClients: ['IIT Kharagpur', 'IIM Calcutta', 'Jadavpur University', 'AIIMS Regional Campuses'],
    caseStudyTitle: '50+ High-Definition Smart Classroom Rollout for Premier University',
  },
  {
    id: 'government',
    title: 'Government & Public Sector (PSUs)',
    subtitle: 'High-Security Council Chambers, Disaster Management & Command Centers',
    icon: 'Landmark',
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80',
    overview:
      'Providing 24/7 mission-critical systems for state secretariats, high courts, police command centers, and public sector undertakings with government-grade encryption and redundancy.',
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
    keyClients: ['State Public Works Department (PWD)', 'High Court of Calcutta', 'KMC Command Center', 'Coal India Ministry'],
    caseStudyTitle: 'State Disaster Management Control Room & MicroLED Video Wall',
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Medical Colleges',
    subtitle: 'Digital Operation Theatres, Telemedicine Suites & Medical Auditoriums',
    icon: 'HeartPulse',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    overview:
      'Delivering medical-grade AV networks that facilitate uncompressed 4K surgical video routing, real-time remote specialist consultations, and infection-resistant touch interfaces.',
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
    keyClients: ['Apollo Hospitals Kolkata', 'Fortis Healthcare Facilities', 'IPGMER & SSKM Hospital', 'TATA Medical Center'],
    caseStudyTitle: 'Advanced Digital OT & Telemedicine Video Matrix for Super-Specialty Facility',
  },
  {
    id: 'hospitality',
    title: 'Hospitality & Entertainment',
    subtitle: 'Grand Hotel Ballrooms, Convention Centers & Luxury Lounge Acoustics',
    icon: 'Utensils',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    overview:
      'Designing versatile audio-visual and theatrical lighting systems for luxury hotel grand ballrooms, convention halls, rooftop venues, and fine dining spaces.',
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
    keyClients: ['ITC Sonar & ITC Royal Bengal', 'JW Marriott Kolkata', 'The Oberoi Grand', 'Hyatt Regency'],
    caseStudyTitle: 'Grand Convention Ballroom Audio-Visual & DMX Stage Lighting Architecture',
  },
  {
    id: 'auditoriums',
    title: 'Auditoriums & Performing Arts Centers',
    subtitle: 'Turnkey Acoustics, Stage Mechanics, Line Arrays & Theatrical Lighting',
    icon: 'Theater',
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1200&q=80',
    overview:
      'EAIPL’s crowning flagship domain: full EPC turnkey design and execution of 500 to 3,000+ seat auditoriums, including wall acoustic paneling, stage curtains, line arrays, and lighting.',
    primaryNeeds: [
      'Even Sound Coverage without Acoustic Echoes or Dead Zones',
      'Motorized Stage Rigging & Acoustic Reflector Shells',
      'Intelligent Moving Head Lighting & DMX Consoles',
      'Pristine RT60 Acoustics suited for both Speech & Music',
    ],
    deployedSolutions: [
      'DSP Beam-Steered Line Array Sound Systems',
      'Custom Fabric & Wooden Acoustic Wall Treatments',
      'Motorized Stage Curtain Tracks & Cyclorama Drapes',
      'Acoustic Shells & Stage Monitor Systems',
    ],
    keyClients: ['State Cultural Department Halls', 'University Grand Auditoriums', 'Municipal Cultural Centers'],
    caseStudyTitle: '1,800-Seat State Cultural Center Turnkey Electro-Acoustic & Stage Overhaul',
  },
];

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'proj-1',
    title: '1,800-Seat State Cultural Auditorium Turnkey Integration',
    clientName: 'Department of Cultural Affairs, State Govt.',
    clientType: 'Auditorium',
    location: 'Kolkata, West Bengal',
    year: '2024',
    category: 'Pro Audio, Stage & Acoustics',
    summary:
      'Complete end-to-end EPC execution including RT60 acoustic modeling, perforated wooden acoustics, Bose/JBL line array sound system, motorized stage drapery, and intelligent DMX theatrical lighting.',
    challenge:
      'The legacy hall suffered severe flutter echo (RT60 > 2.8s) rendering speech unintelligible and live acoustic musical performances distorted.',
    solution:
      'EAIPL deployed 3D EASE acoustic simulation, installed tuned Helmholtz resonators and fabric acoustic wall panels, reducing RT60 to 1.1s. Installed a dual 12-element line array system and 48-channel DMX stage lighting console.',
    impactMetrics: [
      'RT60 reduced from 2.8s to 1.1s (Optimal for acoustic & amplified music)',
      'STI Speech Intelligibility score boosted to 0.72 (Excellent)',
      '100% Uniform SPL coverage across all 1,800 seats (+/- 1.5dB variance)',
    ],
    installedEquipment: [
      'Bose Professional ShowMatch Line Array System',
      'Crown I-Tech High-Power Amplifiers',
      'Biamp TesiraFORTÉ DSP Audio Matrix',
      'Lutron / ETC Element 2 Lighting Console',
      'Motorized Heavy-Duty Velvet Stage Curtains',
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1000&q=80',
    ],
    heroImage: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1000&q=80',
    acousticsSpecs: 'Calculated Volume: 14,500 m³ | Targeted RT60: 1.1s @ 500Hz | Max SPL: 112 dB',
    completionBadge: 'Verified Project Completion & Govt Handover',
  },
  {
    id: 'proj-2',
    title: 'Disaster Management Integrated Command & Control Center (ICCC)',
    clientName: 'State Emergency Response Authority',
    clientType: 'Government',
    location: 'Bhubaneswar, Odisha',
    year: '2023',
    category: 'AV Integration & Security',
    summary:
      'Mission-critical 24/7 command center featuring a 32-screen fine-pitch 1.2mm MicroLED video wall, Crestron NVX AV-over-IP matrix, Bosch CCTV video analytics, and ergonomic operator consoles.',
    challenge:
      'Required zero downtime visual aggregation of over 2,500 live CCTV feeds and satellite weather imagery during emergency cyclone operations.',
    solution:
      'Designed a fully redundant dual-controller Crestron NVX routing network connected to a Christie video wall processor, ensuring seamless multi-window layout switching in under 50ms.',
    impactMetrics: [
      '24/7/365 High-Availability Operation Zero-Downtime Architecture',
      'Sub-50ms Source Switching Latency across 32 Screens',
      'Integrated 48 Operator Stations with Noise-Canceling Audio Paging',
    ],
    installedEquipment: [
      'Christie Velvet 1.2mm MicroLED Direct-View Video Wall',
      'Crestron DigitalMedia NVX 4K60 4:4:4 AV-over-IP Transceivers',
      'Bosch Video Management System (BVMS) with AI Analytics',
      'Shure Microflex Wireless Operator Headset Systems',
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80',
    ],
    heroImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80',
    completionBadge: 'Govt Commendation Awarded',
  },
  {
    id: 'proj-3',
    title: 'High Court Council Chamber Digital Delegate & Recording System',
    clientName: 'High Court Judicial Secretariat',
    clientType: 'Government',
    location: 'Kolkata, West Bengal',
    year: '2023',
    category: 'Pro Audio & Conference',
    summary:
      'Custom digital delegate conference mic system with automated PTZ camera tracking, tamper-proof multichannel court recording, and digital voting terminals for 120 bench seats.',
    challenge:
      'Strict historic architectural preservation guidelines prevented visible wall chasing or intrusive cabling in the century-old heritage courtroom.',
    solution:
      'Utilized specialized wireless optical delegate microphones with AES-128 encryption and custom wooden wireways matched to the court mahogany woodwork.',
    impactMetrics: [
      '120 Active Delegate Units with Instant Auto PTZ Camera Focus',
      '100% Encrypted Audio Recording & Transcribing Feed',
      'Zero Structural Alteration to Heritage Wooden Architecture',
    ],
    installedEquipment: [
      'Bosch DICENTIS Wireless Conference System with Touchscreen',
      'Panasonic 4K PTZ Camera Network with Auto-Tracking',
      'Extron DMP 128 Plus Audio Digital Signal Processor',
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1000&q=80',
    ],
    heroImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1000&q=80',
    completionBadge: 'Classified High-Security Execution',
  },
  {
    id: 'proj-4',
    title: '50+ HD Smart Classroom Rollout for Premier Technical University',
    clientName: 'Indian Institute of Technology (IIT) Campus',
    clientType: 'Education',
    location: 'Kharagpur, West Bengal',
    year: '2024',
    category: 'AV Integration & Education',
    summary:
      'Turnkey modernization of 50 university lecture halls with interactive 86-inch 4K touch displays, digital podiums, auto-tracking presenter cameras, and automated ceiling acoustic mic arrays.',
    challenge:
      'Rapid execution required within a 45-day summer semester break with standardized remote monitoring across all 50 rooms.',
    solution:
      'Implemented pre-built rack assemblies and standardized IP control code, allowing deployment of 1 to 2 rooms per day with centralized IT dashboard diagnostics.',
    impactMetrics: [
      '50 Lecture Halls Completed in 38 Days (Ahead of schedule)',
      'Over 12,000 Students attending daily interactive digital lectures',
      'Centralized Campus IT Remote Helpdesk Control',
    ],
    installedEquipment: [
      'Samsung Flip / IF Series 86" Interactive 4K Touch Displays',
      'Poly Studio E70 Auto-Tracking Smart Camera Systems',
      'Sennheiser TeamConnect Ceiling 2 Beamforming Mics',
      'Crestron AirMedia Wireless BYOD Presentation Gateways',
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=80',
    ],
    heroImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=80',
    completionBadge: 'Campus Wide Modernization Certificate',
  },
  {
    id: 'proj-5',
    title: 'Super-Specialty Hospital Digital OT & Telemedicine Integration',
    clientName: 'Premier Multi-Specialty Healthcare Group',
    clientType: 'Healthcare',
    location: 'Kolkata, West Bengal',
    year: '2023',
    category: 'Healthcare AV',
    summary:
      'Integration of 8 modular Operation Theatres with zero-latency 4K uncompressed surgical routing, glass wall touch consoles, and live 4K stream feeds to the medical learning auditorium.',
    challenge:
      'Surgical environments demand strict sterile IP65 fluid-resistant hardware and absolute zero latency for real-time microscopic surgical guidance.',
    solution:
      'Deployed fiber-optic uncompressed AV-over-IP matrix switches paired with medical-grade IP65 flush wall monitors and DICOM-calibrated video processors.',
    impactMetrics: [
      'Zero Latency (< 1ms) 4K 60Hz Surgical Video Distribution',
      '100% IP65 Washable Glass Surface Touch Controllers',
      'Seamless Live Tele-Surgery Stream to 300-Seat Hospital Auditorium',
    ],
    installedEquipment: [
      'Barco Nexxis Uncompressed 4K Surgical Video Matrix',
      'Sony Healthcare 4K Medical Monitors & Video Recorders',
      'Crestron Custom Sealed Medical Touch Control Interfaces',
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80',
    ],
    heroImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80',
    completionBadge: 'Medical Grade Certified Installation',
  },
  {
    id: 'proj-6',
    title: 'Global PSU Executive Boardroom & Town Hall AV Automation',
    clientName: 'Central Public Sector Enterprise (PSU) HQ',
    clientType: 'Corporate',
    location: 'Kolkata / New Delhi',
    year: '2024',
    category: 'AV Integration & Automation',
    summary:
      'Executive boardroom featuring a 165-inch fine-pitch LED display, concealed motor elevators, ceiling beamforming microphones, and single-touch executive control panel.',
    challenge:
      'Demanded invisible architectural integration where microphones, displays, and cameras hide away when not in active use.',
    solution:
      'Engineered custom motorized architectural lifts and ceiling acoustic slots that automatically drop equipment into position upon pressing the "Start Board Meeting" touch preset.',
    impactMetrics: [
      'Single Touch Meeting Initialization (Reduces setup time from 15 mins to 10s)',
      '165-Inch Seamless MicroLED Display without bezel breaks',
      'Full Security Compliance with Enterprise Network Isolation',
    ],
    installedEquipment: [
      'Samsung The Wall MicroLED 1.2mm Display System',
      'Shure Microflex Complete Wireless Conference System',
      'Crestron 3-Series Control Processor & 10" Touch Screen',
      'Extron Quantum Ultra Video Processor',
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
    ],
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
    completionBadge: 'Executive C-Suite Commendation',
  },
];

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
    icon: 'MessageSquareText',
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
    icon: 'Scan',
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
    icon: 'FileCode2',
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
    icon: 'Wrench',
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
    icon: 'SlidersHorizontal',
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
    icon: 'CheckCircle2',
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
    city: 'Kolkata (Corporate Head Office)',
    type: 'Headquarters & Engineering Lab',
    address: 'EAIPL House, Sector-V, Salt Lake City, Kolkata - 700091, West Bengal, India',
    phone: '+91 33 2289 1234 / +91 98300 12345',
    email: 'kolkata@eaipl.co.in',
  },
  {
    city: 'Bhubaneswar Regional Office',
    type: 'Regional Project & AMC Hub',
    address: 'Saheed Nagar, Janpath, Bhubaneswar - 751007, Odisha, India',
    phone: '+91 674 254 9870',
    email: 'bhubaneswar@eaipl.co.in',
  },
  {
    city: 'Guwahati Branch',
    type: 'North-East Regional Center',
    address: 'GS Road, Dispur, Guwahati - 781005, Assam, India',
    phone: '+91 361 223 4567',
    email: 'guwahati@eaipl.co.in',
  },
  {
    city: 'Ranchi Service Office',
    type: 'Jharkhand Support Center',
    address: 'Main Road, Overbridge Square, Ranchi - 834001, Jharkhand, India',
    phone: '+91 651 233 1122',
    email: 'ranchi@eaipl.co.in',
  },
  {
    city: 'Patna Service Office',
    type: 'Bihar Support Center',
    address: 'Exhibition Road, Patna - 800001, Bihar, India',
    phone: '+91 612 220 3344',
    email: 'patna@eaipl.co.in',
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
