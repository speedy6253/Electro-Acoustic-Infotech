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
    heroImage: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80'
    ],
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
    heroImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
    ],
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
    heroImage: 'https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80'
    ],
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
    heroImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80'
    ],
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
    heroImage: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80'
    ],
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
    heroImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80'
    ],
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
    heroImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    ],
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
    heroImage: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80'
    ],
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
    heroImage: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80'
    ],
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
    heroImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80'
    ],
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
    heroImage: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80'
    ],
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
    heroImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80'
    ],
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
    heroImage: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80'
    ],
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
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80',
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
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
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
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
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
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
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
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
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
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
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
    city: 'Delhi',
    officeName: 'Delhi Regional Office',
    officeType: 'Regional Office',
    type: 'North India Regional Office',
    address: 'Connaught Place, New Delhi, Delhi - 110001',
    phone: '+91 70445 50001',
    email: 'info@eaipl.co.in',
    mapQuery: 'Connaught Place, New Delhi, Delhi 110001',
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
