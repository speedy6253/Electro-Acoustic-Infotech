import React, { useState } from 'react';

export interface SocialVideoEmbedProps {
  reelUrl: string;
  title?: string;
  className?: string;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
  autoplay?: boolean;
  muted?: boolean;
}

/**
 * Generates the embed URL for Facebook Reels, Instagram, and YouTube.
 * Default platform is Facebook Reel plugin.
 */
export function getFacebookEmbedUrl(
  reelUrl: string,
  options?: { autoplay?: boolean; muted?: boolean }
): string {
  if (!reelUrl) return '';

  const cleanUrl = reelUrl.trim();

  // YouTube Shorts / Videos
  if (cleanUrl.includes('youtube.com') || cleanUrl.includes('youtu.be')) {
    const match = cleanUrl.match(/(?:shorts\/|v=|\/)([\w-]{11})/);
    const id = match ? match[1] : '';
    return `https://www.youtube.com/embed/${id}?autoplay=${options?.autoplay ? 1 : 0}&mute=${options?.muted ? 1 : 0}&rel=0`;
  }

  // Instagram Reels
  if (cleanUrl.includes('instagram.com')) {
    const trimmed = cleanUrl.split('?')[0].replace(/\/$/, '');
    return `${trimmed}/embed`;
  }

  // Facebook Reels & Videos (Official FB Plugin Embed)
  const encodedHref = encodeURIComponent(cleanUrl);
  return `https://www.facebook.com/plugins/video.php?href=${encodedHref}&show_text=false&autoplay=${options?.autoplay ? 'true' : 'false'}&width=380`;
}

export const SocialVideoEmbed: React.FC<SocialVideoEmbedProps> = ({
  reelUrl,
  title = 'Official EAIPL Video Reel',
  className = '',
  aspectRatio = 'portrait',
  autoplay = false,
  muted = false,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const embedUrl = getFacebookEmbedUrl(reelUrl, { autoplay, muted });

  const aspectClass =
    aspectRatio === 'portrait'
      ? 'aspect-[9/16]'
      : aspectRatio === 'landscape'
      ? 'aspect-[16/9]'
      : 'aspect-square';

  return (
    <div
      className={`relative w-full bg-[#0F172A] rounded-xl overflow-hidden border border-[#334155] shadow-md flex items-center justify-center ${aspectClass} ${className}`}
    >
      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-[#0F172A] flex flex-col items-center justify-center p-4 z-10 text-slate-400 space-y-2">
          <div className="w-8 h-8 border-2 border-[#1570EF] border-t-transparent rounded-full animate-spin" />
          <span className="text-[11px] font-semibold text-slate-300">Loading Reel Player...</span>
        </div>
      )}

      {/* Embedded Video Player */}
      <iframe
        src={embedUrl}
        title={title}
        className="w-full h-full border-0 rounded-xl"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export const FacebookReelEmbed = SocialVideoEmbed;
