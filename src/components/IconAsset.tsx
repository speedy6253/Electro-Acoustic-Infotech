import React, { useState } from 'react';
import {
  Mic,
  Tv,
  Users,
  LayoutGrid,
  Camera,
  Lock,
  Bell,
  Sparkles,
  Settings,
  Network,
  SlidersHorizontal,
  Building,
  Building2,
  Landmark,
  GraduationCap,
  HeartPulse,
  Utensils,
  Theater,
  Scan,
  FileCode2,
  Wrench,
  Layers,
  CheckCircle2,
  Award,
  ShieldCheck,
  Zap,
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe,
  Image as ImageIcon,
  Video,
  FileText,
  Search,
  Menu,
  X,
  ArrowRight,
  Headphones,
  Cpu,
  MessageSquareText,
  HelpCircle
} from 'lucide-react';

// Vite eager glob map of all icon assets in /src/assets/icons/
const iconAssets = import.meta.glob<{ default: string }>(
  '/src/assets/icons/**/*.{png,PNG,jpg,jpeg,webp,svg}',
  { eager: true, import: 'default' }
);

// Map of fallback Lucide icons based on category/name or icon identifier
const LUCIDE_FALLBACKS: Record<string, React.ElementType> = {
  // Solutions
  'professional-audio': Mic,
  'pro-audio': Mic,
  'audio-visual': Tv,
  'av-integration': Tv,
  'conference-system': Users,
  'video-wall': LayoutGrid,
  'cctv': Camera,
  'access-control': Lock,
  'fire-alarm': Bell,
  'lighting': Sparkles,
  'automation': Settings,
  'building-automation': Settings,
  'networking': Network,
  'control-room': SlidersHorizontal,
  'auditorium': Building,
  'auditoriums': Theater,
  'healthcare': HeartPulse,
  'healthcare-av': HeartPulse,

  // Industries
  'government': Landmark,
  'corporate': Building,
  'education': GraduationCap,
  'industrial': Wrench,
  'hospitality': Utensils,

  // Process
  'needs-discovery': MessageSquareText,
  'site-survey': Scan,
  'design': FileCode2,
  'procurement': Wrench,
  'installation': Layers,
  'testing': SlidersHorizontal,
  'handover': CheckCircle2,

  // Trust
  'engineering': Cpu,
  'quality': ShieldCheck,
  'technology': Zap,
  'support': Headphones,
  'documentation': FileText,

  // Contact
  'phone': Phone,
  'email': Mail,
  'location': MapPin,
  'clock': Clock,
  'website': Globe,

  // Media
  'photo': ImageIcon,
  'video': Video,
  'gallery': LayoutGrid,
  'album': LayoutGrid,

  // General
  'arrow': ArrowRight,
  'search': Search,
  'menu': Menu,
  'close': X,

  // Direct Lucide name fallbacks
  'Mic': Mic,
  'Volume2': Mic,
  'Tv': Tv,
  'Monitor': Tv,
  'Users': Users,
  'LayoutGrid': LayoutGrid,
  'Camera': Camera,
  'Lock': Lock,
  'Shield': Lock,
  'Bell': Bell,
  'Sparkles': Sparkles,
  'Sun': Sparkles,
  'Settings': Settings,
  'Sliders': Settings,
  'Network': Network,
  'SlidersHorizontal': SlidersHorizontal,
  'Building': Building,
  'Building2': Building2,
  'Landmark': Landmark,
  'GraduationCap': GraduationCap,
  'HeartPulse': HeartPulse,
  'Utensils': Utensils,
  'Theater': Theater,
  'Scan': Scan,
  'FileCode2': FileCode2,
  'Wrench': Wrench,
  'Layers': Layers,
  'CheckCircle2': CheckCircle2,
  'Award': Award,
  'ShieldCheck': ShieldCheck,
  'Zap': Zap,
  'Phone': Phone,
  'Mail': Mail,
  'MapPin': MapPin,
  'Clock': Clock,
  'Globe': Globe,
  'Cpu': Cpu,
  'MessageSquareText': MessageSquareText,
  'Headphones': Headphones,
  'FileText': FileText,
  'ArrowRight': ArrowRight,
  'Search': Search,
};

export interface IconAssetProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  category?: string;
  name?: string;
  alt?: string;
  className?: string;
  size?: number | string;
  fallbackLucide?: React.ElementType;
}

export const IconAsset: React.FC<IconAssetProps> = ({
  src,
  category,
  name,
  alt = 'icon',
  className = 'w-6 h-6',
  size,
  fallbackLucide,
  ...rest
}) => {
  const [imageError, setImageError] = useState(false);

  // Helper function to resolve the asset URL from import.meta.glob
  const resolveAssetUrl = (): string | null => {
    let rawPath = src || '';
    if (!rawPath && category && name) {
      rawPath = `/assets/icons/${category}/${name}.png`;
    }

    if (!rawPath) return null;

    // Clean up leading slashes / prefix
    let cleanPath = (rawPath || '').trim();
    if (cleanPath.startsWith('/src/')) {
      cleanPath = cleanPath.replace('/src/', '');
    } else if (cleanPath.startsWith('/')) {
      cleanPath = cleanPath.slice(1);
    }

    // Attempt matching in iconAssets glob
    // 1. Direct match with /src/${cleanPath}
    const key1 = `/src/${cleanPath}`;
    if (iconAssets[key1]) {
      return typeof iconAssets[key1] === 'string' ? iconAssets[key1] : (iconAssets[key1] as any).default;
    }

    // 2. Try adding .png if extension is missing
    if (!cleanPath.endsWith('.png') && !cleanPath.endsWith('.svg') && !cleanPath.endsWith('.PNG')) {
      const keyPng = `/src/${cleanPath}.png`;
      if (iconAssets[keyPng]) {
        return typeof iconAssets[keyPng] === 'string' ? iconAssets[keyPng] : (iconAssets[keyPng] as any).default;
      }
    }

    // 3. Try replacing .svg with .png if .svg requested but .png present
    if (cleanPath.endsWith('.svg')) {
      const keyPngFromSvg = `/src/${cleanPath.replace('.svg', '.png')}`;
      if (iconAssets[keyPngFromSvg]) {
        return typeof iconAssets[keyPngFromSvg] === 'string' ? iconAssets[keyPngFromSvg] : (iconAssets[keyPngFromSvg] as any).default;
      }
      const keySvg = `/src/${cleanPath}`;
      if (iconAssets[keySvg]) {
        return typeof iconAssets[keySvg] === 'string' ? iconAssets[keySvg] : (iconAssets[keySvg] as any).default;
      }
    }

    // 4. Try replacing .png with .svg if .png requested but .svg present
    if (cleanPath.endsWith('.png')) {
      const keySvgFromPng = `/src/${cleanPath.replace(/\.png$/i, '.svg')}`;
      if (iconAssets[keySvgFromPng]) {
        return typeof iconAssets[keySvgFromPng] === 'string' ? iconAssets[keySvgFromPng] : (iconAssets[keySvgFromPng] as any).default;
      }
    }

    // 4. Return original rawPath if it looks like a valid HTTP URL or absolute public path
    if ((rawPath || '').startsWith('http://') || (rawPath || '').startsWith('https://') || (rawPath || '').startsWith('data:')) {
      return rawPath;
    }

    return null;
  };

  const resolvedUrl = resolveAssetUrl();

  // If PNG/Image resolved and no error occurred, render <img>
  if (resolvedUrl && !imageError) {
    return (
      <img
        src={resolvedUrl}
        alt={alt}
        loading="lazy"
        onError={() => setImageError(true)}
        className={`object-contain bg-transparent max-w-full max-h-full inline-block transform scale-[1.20] transition-transform select-none ${className}`}
        style={size ? { width: size, height: size } : undefined}
        {...rest}
      />
    );
  }

  // Fallback to Lucide icon
  let lookupKey = name || '';
  if (!lookupKey && src) {
    const segments = (src || '').split('/');
    const last = segments[segments.length - 1] || '';
    lookupKey = last.split('.')[0] || '';
  }

  const FallbackComponent =
    fallbackLucide ||
    LUCIDE_FALLBACKS[lookupKey] ||
    (src && LUCIDE_FALLBACKS[src]) ||
    HelpCircle;

  return (
    <FallbackComponent
      className={className}
      style={size ? { width: size, height: size } : undefined}
    />
  );
};

export const PngIcon = IconAsset;
export default IconAsset;
