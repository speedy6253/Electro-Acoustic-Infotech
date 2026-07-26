import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Film,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Calendar,
  Tag,
  Share2,
  Sparkles,
  Tv
} from 'lucide-react';
import { ReelItem, FACEBOOK_REELS } from '../data/mediaData';

interface ReelsShowcaseProps {
  reels?: ReelItem[];
}

export const ReelsShowcase: React.FC<ReelsShowcaseProps> = ({ reels = FACEBOOK_REELS }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const autoAdvanceTimer = useRef<NodeJS.Timeout | null>(null);
  const resumeTimer = useRef<NodeJS.Timeout | null>(null);

  const activeReel = reels[currentIndex] || reels[0];

  // Auto playlist cycle (advances every 10 seconds unless paused or hovered)
  useEffect(() => {
    if (!isPlaying || isHovered || reels.length <= 1) return;

    autoAdvanceTimer.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reels.length);
    }, 10000);

    return () => {
      if (autoAdvanceTimer.current) clearInterval(autoAdvanceTimer.current);
    };
  }, [isPlaying, isHovered, reels.length]);

  const handleManualNav = (newIdx: number) => {
    setCurrentIndex(newIdx);
    // Pause auto-play temporarily on manual click, resume after 6s
    setIsPlaying(false);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      setIsPlaying(true);
    }, 6000);
  };

  const handleNext = () => {
    handleManualNav((currentIndex + 1) % reels.length);
  };

  const handlePrev = () => {
    handleManualNav((currentIndex - 1 + reels.length) % reels.length);
  };

  // Generate embed URL based on platform/URL pattern
  const getEmbedUrl = (reel: ReelItem) => {
    const url = reel.reelUrl;
    if (reel.platform === 'youtube' || url.includes('youtube.com') || url.includes('youtu.be')) {
      const match = url.match(/(?:shorts\/|v=|\/)([\w-]{11})/);
      const id = match ? match[1] : '';
      return `https://www.youtube.com/embed/${id}?autoplay=1&mute=0&rel=0`;
    }
    
    if (reel.platform === 'instagram' || url.includes('instagram.com')) {
      const cleanUrl = url.split('?')[0].replace(/\/$/, '');
      return `${cleanUrl}/embed`;
    }

    // Default to Facebook embed plugin format
    return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&width=380&autoplay=true`;
  };

  if (!reels || reels.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-2xs p-6 sm:p-8 space-y-8 my-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#F1F5F9] pb-6">
        <div className="space-y-1 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold text-[#1570EF] uppercase tracking-wider">
            <Film className="w-4 h-4 text-[#1570EF]" />
            Facebook & Video Highlights
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
            EAIPL Video Highlights
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            Watch our latest installations, corporate activities, product demonstrations, project highlights, training sessions and event moments directly from EAIPL's official Facebook page.
          </p>
        </div>

        {/* Playlist Controls & Status Indicator */}
        <div className="flex items-center gap-3 shrink-0 self-start sm:self-center">
          <div className="px-3.5 py-1.5 rounded-full bg-[#F1F5F9] border border-[#CBD5E1] text-[#0F172A] text-xs font-bold flex items-center gap-2 shadow-2xs">
            <Tv className="w-3.5 h-3.5 text-[#1570EF]" />
            <span>Reel {currentIndex + 1} of {reels.length}</span>
          </div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-3.5 py-1.5 rounded-full bg-[#1570EF] hover:bg-[#1258C5] text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs cursor-pointer"
            title={isPlaying ? 'Pause Auto Playlist' : 'Resume Auto Playlist'}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Auto Playing</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-white" />
                <span className="hidden sm:inline">Play Loop</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Showcase Layout: Player on Left, Playlist Queue on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Player Container Column (LG: 5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center">
          {/* Reel Frame Wrapper */}
          <div
            className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[9/16] bg-[#0F172A] rounded-2xl overflow-hidden border border-[#334155] shadow-2xl flex flex-col group/player"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Top Reel Header Bar */}
            <div className="absolute top-0 left-0 right-0 z-20 p-3 bg-gradient-to-b from-black/80 via-black/40 to-transparent flex items-center justify-between pointer-events-none">
              <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#1570EF] text-white shadow-2xs">
                {activeReel.category}
              </span>
              <span className="text-[11px] font-semibold text-white/90 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20">
                {currentIndex + 1} / {reels.length}
              </span>
            </div>

            {/* Embedded Reel Iframe Stage */}
            <div className="relative flex-1 w-full h-full bg-[#0F172A] overflow-hidden">
              <iframe
                key={activeReel.id}
                src={getEmbedUrl(activeReel)}
                title={activeReel.title}
                className="w-full h-full border-0 rounded-2xl"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Prev / Next Floating Navigation Arrows */}
            <button
              onClick={handlePrev}
              aria-label="Previous Reel"
              title="Previous Reel"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-[#1570EF] text-white backdrop-blur-md border border-white/30 flex items-center justify-center transition-all opacity-90 sm:opacity-0 sm:group-hover/player:opacity-100 hover:scale-110 shadow-xl z-30 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Reel"
              title="Next Reel"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-[#1570EF] text-white backdrop-blur-md border border-white/30 flex items-center justify-center transition-all opacity-90 sm:opacity-0 sm:group-hover/player:opacity-100 hover:scale-110 shadow-xl z-30 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Bottom Fallback Direct Facebook Link Bar */}
            <div className="p-3 bg-[#0F172A] border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
              <span className="truncate text-[11px] text-slate-400">Official EAIPL Reel</span>
              <a
                href={activeReel.reelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-lg bg-[#1877F2] hover:bg-[#166FE5] text-white text-[11px] font-bold flex items-center gap-1.5 transition-colors shrink-0 cursor-pointer"
              >
                <span>Watch on Facebook</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Previous / Next Manual Bar beneath frame */}
          <div className="flex items-center justify-between w-full max-w-[380px] sm:max-w-[420px] mt-4 px-1">
            <button
              onClick={handlePrev}
              className="px-4 py-2 rounded-xl bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#0F172A] text-xs font-bold transition-all flex items-center gap-2 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Reel</span>
            </button>
            <span className="text-xs font-semibold text-[#64748B]">
              {currentIndex + 1} of {reels.length}
            </span>
            <button
              onClick={handleNext}
              className="px-4 py-2 rounded-xl bg-[#1570EF] hover:bg-[#1258C5] text-white text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-2xs"
            >
              <span>Next Reel</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Details & Playlist Queue Column (LG: 7 cols) */}
        <div className="lg:col-span-7 space-y-6 flex flex-col justify-between h-full">
          {/* Active Reel Details Box */}
          <motion.div
            key={activeReel.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-4 shadow-2xs"
          >
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#EFF6FF] text-[#1570EF] border border-[#BFDBFE] flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5" />
                {activeReel.category}
              </span>
              <span className="text-xs text-[#64748B] flex items-center gap-1.5 font-medium">
                <Calendar className="w-3.5 h-3.5 text-[#1570EF]" />
                {activeReel.date}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-extrabold text-[#0F172A] leading-snug">
                {activeReel.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed whitespace-pre-line">
                {activeReel.description}
              </p>
            </div>

            <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between">
              <span className="text-xs text-[#64748B] font-medium">
                Auto advance enabled • Click any Reel to switch
              </span>
              <a
                href={activeReel.reelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#1570EF] hover:underline flex items-center gap-1"
              >
                <span>Direct Link</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Playlist Queue Selector */}
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-2">
              <h4 className="text-xs font-extrabold text-[#0F172A] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#1570EF]" />
                Reel Playlist Queue ({reels.length})
              </h4>
              <span className="text-[11px] text-[#64748B]">Click to load immediately</span>
            </div>

            <div className="space-y-2 max-h-[360px] overflow-y-auto pr-1">
              {reels.map((reel, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <div
                    key={reel.id}
                    onClick={() => handleManualNav(idx)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                      isActive
                        ? 'bg-white border-[#1570EF] shadow-md ring-1 ring-[#1570EF]/30'
                        : 'bg-[#F8FAFC] border-[#E2E8F0] hover:bg-white hover:border-[#CBD5E1]'
                    }`}
                  >
                    {/* Index Badge / Playing Indicator */}
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold transition-all ${
                        isActive
                          ? 'bg-[#1570EF] text-white shadow-2xs'
                          : 'bg-[#E2E8F0] text-[#475569]'
                      }`}
                    >
                      {isActive ? (
                        <Play className="w-4 h-4 fill-white animate-pulse" />
                      ) : (
                        <span>{idx + 1}</span>
                      )}
                    </div>

                    {/* Reel Title & Details */}
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <h5
                          className={`text-xs font-bold truncate ${
                            isActive ? 'text-[#1570EF]' : 'text-[#0F172A]'
                          }`}
                        >
                          {reel.title}
                        </h5>
                        <span className="text-[10px] text-[#64748B] shrink-0 font-medium">
                          {reel.date}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#64748B] line-clamp-1">
                        {reel.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
