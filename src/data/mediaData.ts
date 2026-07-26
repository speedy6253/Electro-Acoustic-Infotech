export type MediaCategory =
  | 'Government Projects'
  | 'Corporate Projects'
  | 'Educational Projects'
  | 'Healthcare'
  | 'Installation'
  | 'Commissioning'
  | 'Training'
  | 'Events'
  | 'Team';

export interface MediaItem {
  id: string;
  title: string;
  category: MediaCategory;
  location: string;
  image: string;
  thumbnail: string;
  type: 'photo' | 'video';
  date: string;
  description: string;
  videoUrl?: string;
  createdAt?: string | number;
  publishedDate?: string;
  displayOrder?: number;
}

export interface EventItem {
  id: string;
  title: string;
  category: string;
  location: string;
  date: string;
  coverImage: string;
  gallery: string[];
  description: string;
  createdAt?: string | number;
  publishedDate?: string;
  displayOrder?: number;
}

export interface ReelItem {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  reelUrl: string;
  thumbnail?: string;
  platform?: 'facebook' | 'youtube' | 'instagram' | 'local';
  createdAt?: string | number;
  publishedDate?: string;
  displayOrder?: number;
}

/**
  * Helper to extract a numerical timestamp for sorting media items.
  * Priority:
  * 1. createdAt (if ISO string or timestamp in ms)
  * 2. publishedDate (e.g. '2026-07-15')
  * 3. Parsed numeric year/month from `date` string
  * 4. Current timestamp fallback
  */
export function getMediaItemTimestamp(item: {
  createdAt?: string | number;
  publishedDate?: string;
  displayOrder?: number;
  date?: string;
}): number {
  if (item.createdAt !== undefined) {
    if (typeof item.createdAt === 'number') return item.createdAt;
    const parsed = Date.parse(item.createdAt);
    if (!isNaN(parsed)) return parsed;
  }

  if (item.publishedDate) {
    const parsed = Date.parse(item.publishedDate);
    if (!isNaN(parsed)) return parsed;
  }

  if (item.date) {
    const years = item.date.match(/\b(20\d\d)\b/g);
    if (years && years.length > 0) {
      const maxYear = Math.max(...years.map(Number));
      const months = [
        'january', 'february', 'march', 'april', 'may', 'june',
        'july', 'august', 'september', 'october', 'november', 'december',
        'jan', 'feb', 'mar', 'apr', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
      ];
      let monthIdx = 6;
      const lower = item.date.toLowerCase();
      for (let i = 0; i < months.length; i++) {
        if (lower.includes(months[i])) {
          monthIdx = i % 12;
          break;
        }
      }
      return new Date(maxYear, monthIdx, 15).getTime();
    }
  }

  return Date.now();
}

/**
  * Automatic sorting helper function.
  * Sorts items in descending order (Newest First, Oldest Last).
  * Priority:
  * 1. displayOrder (if explicitly provided on both items)
  * 2. publishedDate / createdAt timestamp descending
  */
export function sortMediaByNewest<T extends {
  createdAt?: string | number;
  publishedDate?: string;
  displayOrder?: number;
  date?: string;
}>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    if (a.displayOrder !== undefined && b.displayOrder !== undefined) {
      if (a.displayOrder !== b.displayOrder) {
        return a.displayOrder - b.displayOrder;
      }
    }

    const timeA = getMediaItemTimestamp(a);
    const timeB = getMediaItemTimestamp(b);
    if (timeA !== timeB) {
      return timeB - timeA;
    }

    return 0;
  });
}

const RAW_FACEBOOK_REELS: ReelItem[] = [
  {
    id: 'reel-05',
    title: 'Pohela Boisakh (2026)',
    category: 'Corporate Event',
    date: 'April 2026',
    publishedDate: '2026-04-16',
    createdAt: '2026-07-16T00:00:00Z',
    displayOrder: 1,
    reelUrl: 'https://www.facebook.com/reel/1246731747444980',
    description: 'Celebriting Pohela Boisakh (Bengali New Year) with EAIPL Team'
  },
  {
    id: 'reel-01',
    title: 'Annual Meeting of EAIPL Team Members',
    category: 'Annual Meeting',
    date: 'April 2025',
    publishedDate: '2025-04-10',
    createdAt: '2025-07-01T00:00:00Z',
    displayOrder: 3,
    reelUrl: 'https://www.facebook.com/reel/839331192547004',
    description: 'Annual Meet 2026 – Celebrating Excellence, Inspiring Innovation, Building the Future.'
  },
  {
    id: 'reel-02',
    title: 'Holi Ceelbration 2026',
    category: 'Event Celebration',
    date: 'March 2026',
    publishedDate: '2025-03-04',
    createdAt: '2025-06-15T00:00:00Z',
    reelUrl: 'https://www.facebook.com/reel/1599402298011387',
    description: 'Celebrating colours, togetherness, and joyful moments that strengthen our team spirit and workplace culture.'
  },
  {
    id: 'reel-03',
    title: 'SSB, Sonarpur, Guwahati Conference Room Project',
    category: 'Govt Projects',
    date: 'November 2025',
    publishedDate: '2025-11-10',
    createdAt: '2025-05-10T00:00:00Z',
    reelUrl: 'https://www.facebook.com/reel/1297922948688800',
    description: 'Successfully completed the conference room audiovisual integration project at SSB, Sonarpur, Guwahati.'
  },
  {
    id: 'reel-04',
    title: 'UGC, Delhi Conference Room Work',
    category: 'Govt Projects',
    date: 'September 2025',
    publishedDate: '2025-09-15',
    createdAt: '2025-04-20T00:00:00Z',
    reelUrl: 'https://www.facebook.com/reel/1326084592465878',
    description: 'Successfully delivered a modern conference room solution for UGC, Delhi, ensuring seamless communication and collaboration.'
  }
];

export const FACEBOOK_REELS: ReelItem[] = sortMediaByNewest(RAW_FACEBOOK_REELS);

const RAW_CORPORATE_EVENTS: EventItem[] = [
  {
    id: 'infocomm-asia-2026',
    title: 'Exploring the Future of Pro AV at InfoComm Asia 2026',
    category: 'Corporate Event',
    location: 'Bangkok, Thailand',
    date: '15–17 July 2026',
    publishedDate: '2026-07-15',
    createdAt: '2026-07-15T00:00:00Z',
    displayOrder: 1,
    coverImage: '/media/events/infocomm-asia-2026/cover.jpg',
    gallery: Array.from({ length: 25 }, (_, i) => {
      const num = String(i + 1).padStart(2, '0');
      return `/media/events/infocomm-asia-2026/${num}.jpg`;
    }),
    description: `At Electro Acoustic Infotech Pvt. Ltd. (EAIPL), we believe innovation begins with learning and global collaboration.\n\nOur participation in InfoComm Asia 2026 provided an opportunity to explore the latest advancements in Professional AV, AI-powered collaboration, conference systems, digital signage, audio technologies, and smart workplace solutions.\n\nBy engaging with global manufacturers and technology leaders, we continue strengthening our expertise and delivering future-ready AV solutions across India.`
  },
  {
    id: 'best-partner-award-2025-2026',
    title: 'Best Partner Award 2025–2026 (Government Vertical)',
    category: 'Award & Recognition',
    location: 'India',
    date: '2025–2026',
    publishedDate: '2025-08-01',
    createdAt: '2025-08-01T00:00:00Z',
    displayOrder: 2,
    coverImage: '/media/events/best-partner-award-2025-2026/cover.jpg',
    gallery: Array.from({ length: 10 }, (_, i) => {
      const num = String(i + 1).padStart(2, '0');
      return `/media/events/best-partner-award-2025-2026/${num}.jpg`;
    }),
    description: `Excellence is not an act, but a habit.

EAIPL is honored to receive the Best Partner 2025–2026 (Government Vertical) award. This achievement reflects our commitment to delivering excellence, building trusted partnerships, and driving innovation across the Professional AV industry.

This recognition belongs to every team member who believed in our vision, every customer who trusted us, and every partner who supported our journey.`
  },
  {
    id: 'panasonic-circle-of-excellence-fy2024-25',
    title: 'Panasonic Circle of Excellence Award – FY2024–25',
    category: 'Award & Recognition',
    location: 'India',
    date: 'FY2024–25',
    publishedDate: '2025-07-01',
    createdAt: '2025-07-01T00:00:00Z',
    displayOrder: 3,
    coverImage: '/media/events/panasonic-circle-of-excellence-fy2024-25/cover.jpg',
    gallery: Array.from({ length: 10 }, (_, i) => {
      const num = String(i + 1).padStart(2, '0');
      return `/media/events/panasonic-circle-of-excellence-fy2024-25/${num}.jpg`;
    }),
    description: `EAIPL is proud to receive the prestigious Circle of Excellence Award from Panasonic for FY2024–25.

This recognition reflects our unwavering commitment to delivering excellence, building trusted partnerships, and consistently providing innovative Professional AV solutions.

We sincerely thank Panasonic for this honor. This achievement belongs to every member of Team EAIPL, whose dedication and hard work continue to drive our success.`
  }
];

export const CORPORATE_EVENTS: EventItem[] = sortMediaByNewest(RAW_CORPORATE_EVENTS);

export const MEDIA_GALLERY: MediaItem[] = [];
