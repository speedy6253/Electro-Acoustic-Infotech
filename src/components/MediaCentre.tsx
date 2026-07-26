import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Image as ImageIcon,
  Video,
  Filter,
  X,
  Play,
  Pause,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Facebook,
  Search,
  Sparkles,
  Calendar,
  Layers,
  Eye
} from 'lucide-react';
import { MEDIA_GALLERY, CORPORATE_EVENTS, FACEBOOK_REELS, MediaItem, EventItem, sortMediaByNewest } from '../data/mediaData';
import { COMPANY_INFO } from '../data/eaiplData';
import { CompanyHeaderBrand } from './CompanyHeaderBrand';
import { ReelsShowcase } from './ReelsShowcase';

interface MediaCentreProps {
  onOpenConsultation: (type?: 'RFP' | 'Site Survey' | 'Consultation' | 'AMC Ticket') => void;
}

type FilterCategory =
  | 'All'
  | 'Award & Recognition'
  | 'Corporate Event'
  | 'Government Projects'
  | 'Corporate Projects'
  | 'Educational Projects'
  | 'Healthcare'
  | 'Installation'
  | 'Commissioning'
  | 'Training'
  | 'Events'
  | 'Team'
  | 'Videos';

interface CorporateEventCardProps {
  event: EventItem;
  onOpenGallery: (event: EventItem, startIndex: number) => void;
}

const CorporateEventCard: React.FC<CorporateEventCardProps> = ({ event, onOpenGallery }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const slides = event.gallery && event.gallery.length > 0 ? event.gallery : [event.coverImage];

  // Preload adjacent images for instant transition
  useEffect(() => {
    if (slides.length <= 1) return;
    const nextIdx = (currentSlide + 1) % slides.length;
    const prevIdx = (currentSlide - 1 + slides.length) % slides.length;
    
    const imgNext = new Image();
    imgNext.src = slides[nextIdx];
    const imgPrev = new Image();
    imgPrev.src = slides[prevIdx];
  }, [currentSlide, slides]);

  // Auto next slide timer (cycles every 4.5 seconds unless hovered/paused)
  useEffect(() => {
    if (!isAutoPlaying || isHovered || slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, slides.length]);

  const handleManualNav = (newIndex: number) => {
    setCurrentSlide(newIndex);
    // Pause auto-play temporarily on manual click, then resume automatically after 5 seconds
    setIsAutoPlaying(false);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleManualNav((currentSlide + 1) % slides.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleManualNav((currentSlide - 1 + slides.length) % slides.length);
  };

  const toggleAutoPlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAutoPlaying((prev) => !prev);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl border border-[#E2E8F0] shadow-2xs hover:border-[#1570EF]/50 hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between group"
    >
      {/* Cover Image & Slideshow Stage */}
      <div
        className="relative aspect-16/9 bg-[#0F172A] overflow-hidden select-none group/stage cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => onOpenGallery(event, currentSlide)}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={slides[currentSlide]}
            alt={`${event.title} - Photo ${currentSlide + 1}`}
            initial={{ opacity: 0.85, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.85 }}
            transition={{ duration: 0.35 }}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              (e.target as HTMLImageElement).src = event.coverImage || 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80';
            }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />

        {/* Top Badges & Auto-Slide Toggle */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-auto z-10">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#1570EF] text-white shadow-2xs">
              {event.category}
            </span>
          </div>

          {/* Auto-Slide Indicator & Toggle Button */}
          {slides.length > 1 && (
            <button
              onClick={toggleAutoPlay}
              title={isAutoPlaying ? 'Pause Slideshow' : 'Resume Auto-Slideshow'}
              className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-black/65 hover:bg-black/85 backdrop-blur-md text-white border border-white/20 transition-all flex items-center gap-1.5 shadow-2xs cursor-pointer"
            >
              {isAutoPlaying && !isHovered ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] hidden sm:inline">Auto Loop</span>
                </>
              ) : isAutoPlaying && isHovered ? (
                <>
                  <Pause className="w-3 h-3 text-amber-300" />
                  <span className="text-[10px] hidden sm:inline">Paused</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span className="text-[10px] hidden sm:inline">Play</span>
                </>
              )}
            </button>
          )}
        </div>

        {/* Manual Navigation Controls (Previous & Next) */}
        {slides.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              aria-label="Previous Slide"
              title="Previous Photo"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#1570EF] text-white backdrop-blur-md border border-white/30 flex items-center justify-center transition-all opacity-100 sm:opacity-0 sm:group-hover/stage:opacity-100 hover:scale-110 shadow-xl z-20 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Slide"
              title="Next Photo"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#1570EF] text-white backdrop-blur-md border border-white/30 flex items-center justify-center transition-all opacity-100 sm:opacity-0 sm:group-hover/stage:opacity-100 hover:scale-110 shadow-xl z-20 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Bottom Details & Image Counter Badge */}
        <div className="absolute bottom-3 left-4 right-4 text-white pointer-events-none flex items-center justify-between z-10">
          <div className="flex items-center gap-3 text-xs text-slate-300 font-medium">
            <span className="flex items-center gap-1 text-[#2E90FA]">
              <MapPin className="w-3.5 h-3.5" />
              {event.location}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-slate-300">
              <Calendar className="w-3.5 h-3.5" />
              {event.date}
            </span>
          </div>

          {/* Bottom-Right Image Indicator Counter */}
          <div className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-xs font-bold shadow-md flex items-center gap-1.5 pointer-events-auto">
            <ImageIcon className="w-3.5 h-3.5 text-[#2E90FA]" />
            <span>{currentSlide + 1} / {slides.length}</span>
          </div>
        </div>

        {/* Navigation Dots Indicator Overlay */}
        {slides.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 overflow-hidden max-w-[140px] py-1 pointer-events-auto z-10">
            {slides.slice(0, 10).map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  handleManualNav(idx);
                }}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  currentSlide === idx ? 'w-5 bg-[#2E90FA]' : 'w-1.5 bg-white/40 hover:bg-white/80'
                }`}
                title={`Go to slide ${idx + 1}`}
              />
            ))}
            {slides.length > 10 && (
              <span className="text-[10px] text-slate-300 font-mono font-bold">+{slides.length - 10}</span>
            )}
          </div>
        )}
      </div>

      {/* Card Details */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#1570EF] transition-colors leading-snug">
            {event.title}
          </h3>
          <p className="text-xs text-[#475569] leading-relaxed line-clamp-3 whitespace-pre-line">
            {event.description}
          </p>
        </div>

        <div className="pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-[#64748B]">
            <Layers className="w-4 h-4 text-[#1570EF]" />
            <span className="font-semibold">{slides.length} Photos Included</span>
          </div>
          <button
            onClick={() => onOpenGallery(event, currentSlide)}
            className="px-4 py-2.5 rounded-xl bg-[#1570EF] text-white text-xs font-bold hover:bg-[#1258C5] transition-all shadow-2xs flex items-center gap-2 group-hover:translate-x-0.5 cursor-pointer"
          >
            <Eye className="w-4 h-4" />
            <span>View Gallery</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export const MediaCentre: React.FC<MediaCentreProps> = ({ onOpenConsultation }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<MediaItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Event Lightbox State
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [eventGalleryIndex, setEventGalleryIndex] = useState<number>(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [isLightboxAutoPlay, setIsLightboxAutoPlay] = useState(true);
  const [isLightboxHovered, setIsLightboxHovered] = useState(false);

  // Auto slideshow inside Lightbox modal
  useEffect(() => {
    if (!selectedEvent || !isLightboxAutoPlay || isLightboxHovered || selectedEvent.gallery.length <= 1) return;

    const timer = setInterval(() => {
      setEventGalleryIndex((prev) => (prev + 1) % selectedEvent.gallery.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [selectedEvent, isLightboxAutoPlay, isLightboxHovered]);

  // Preload adjacent images in Lightbox
  useEffect(() => {
    if (!selectedEvent || selectedEvent.gallery.length <= 1) return;
    const gallery = selectedEvent.gallery;
    const nextIdx = (eventGalleryIndex + 1) % gallery.length;
    const prevIdx = (eventGalleryIndex - 1 + gallery.length) % gallery.length;

    const imgNext = new Image();
    imgNext.src = gallery[nextIdx];
    const imgPrev = new Image();
    imgPrev.src = gallery[prevIdx];
  }, [selectedEvent, eventGalleryIndex]);

  const filterOptions: FilterCategory[] = [
    'All',
    'Award & Recognition',
    'Corporate Event',
    'Government Projects',
    'Corporate Projects',
    'Educational Projects',
    'Healthcare',
    'Installation',
    'Commissioning',
    'Training',
    'Events',
    'Team',
    'Videos',
  ];

  const filteredItems = MEDIA_GALLERY.filter((item) => {
    if (activeFilter === 'Videos') {
      if (item.type !== 'video') return false;
    } else if (activeFilter !== 'All' && activeFilter !== 'Corporate Event' && activeFilter !== 'Award & Recognition') {
      if (item.category !== activeFilter) return false;
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return (
        (item.title || '').toLowerCase().includes(q) ||
        (item.location || '').toLowerCase().includes(q) ||
        (item.description || '').toLowerCase().includes(q) ||
        (item.category || '').toLowerCase().includes(q)
      );
    }

    return true;
  });

  const photoItems = filteredItems.filter((i) => i.type === 'photo');
  const videoItems = MEDIA_GALLERY.filter((i) => i.type === 'video');

  // Filter corporate events based on searchQuery and activeFilter (sorted newest first)
  const filteredEvents = sortMediaByNewest(
    CORPORATE_EVENTS.filter((evt) => {
      if (
        activeFilter !== 'All' &&
        activeFilter !== 'Corporate Event' &&
        activeFilter !== 'Award & Recognition' &&
        activeFilter !== 'Events' &&
        activeFilter !== 'Corporate Projects'
      ) {
        if (evt.category !== activeFilter) return false;
      }
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        return (
          evt.title.toLowerCase().includes(q) ||
          evt.location.toLowerCase().includes(q) ||
          evt.description.toLowerCase().includes(q) ||
          evt.category.toLowerCase().includes(q)
        );
      }
      return true;
    })
  );

  // Filter Facebook Reels (sorted newest first)
  const filteredReels = sortMediaByNewest(
    FACEBOOK_REELS.filter((reel) => {
      if (activeFilter === 'Videos') return true;
      if (
        activeFilter !== 'All' &&
        activeFilter !== 'Corporate Event' &&
        activeFilter !== 'Award & Recognition' &&
        activeFilter !== 'Events' &&
        activeFilter !== 'Corporate Projects' &&
        activeFilter !== 'Training'
      ) {
        if (reel.category !== activeFilter) return false;
      }
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        return (
          reel.title.toLowerCase().includes(q) ||
          reel.description.toLowerCase().includes(q) ||
          reel.category.toLowerCase().includes(q)
        );
      }
      return true;
    })
  );

  // Touch gesture handlers for event lightbox
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null || !selectedEvent) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Swiped left -> next photo
        setEventGalleryIndex((prev) => (prev < selectedEvent.gallery.length - 1 ? prev + 1 : 0));
      } else {
        // Swiped right -> prev photo
        setEventGalleryIndex((prev) => (prev > 0 ? prev - 1 : selectedEvent.gallery.length - 1));
      }
    }
    setTouchStartX(null);
  };

  // Keyboard navigation support for both lightboxes
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Event Lightbox Navigation
      if (selectedEvent) {
        if (e.key === 'Escape') {
          setSelectedEvent(null);
        } else if (e.key === 'ArrowRight') {
          setEventGalleryIndex((prev) => (prev < selectedEvent.gallery.length - 1 ? prev + 1 : 0));
        } else if (e.key === 'ArrowLeft') {
          setEventGalleryIndex((prev) => (prev > 0 ? prev - 1 : selectedEvent.gallery.length - 1));
        }
        return;
      }

      // Single Photo Lightbox Navigation
      if (lightboxIndex !== null) {
        if (e.key === 'Escape') {
          setLightboxIndex(null);
        } else if (e.key === 'ArrowRight') {
          setLightboxIndex((prev) => (prev !== null && prev < photoItems.length - 1 ? prev + 1 : 0));
        } else if (e.key === 'ArrowLeft') {
          setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : photoItems.length - 1));
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedEvent, lightboxIndex, photoItems.length]);

  const activeLightboxItem = lightboxIndex !== null ? photoItems[lightboxIndex] : null;

  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] font-sans min-h-screen">
      {/* Media Centre Hero Header */}
      <section className="bg-white border-b border-[#E2E8F0] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4 max-w-3xl">
              <CompanyHeaderBrand className="mb-3" />

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1D4ED8] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Engineering Excellence in Action
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
                Media Centre
              </h1>

              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                Turnkey project portfolio showcase documenting electro-acoustic installations, 4K display wall deployments, site commissioning, and field executions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href={COMPANY_INFO.facebookPage}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-lg bg-[#1877F2] text-white text-xs font-bold hover:bg-[#166FE5] transition-all shadow-2xs flex items-center justify-center gap-2"
              >
                <Facebook className="w-4 h-4 fill-current" />
                <span>Facebook Media Hub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => onOpenConsultation('RFP')}
                className="px-4 py-2.5 rounded-lg bg-[#1570EF] text-white text-xs font-bold hover:bg-[#1258C5] transition-all shadow-2xs"
              >
                Submit RFP
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Filter Bar */}
        <div className="bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-2xs space-y-4">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              <Filter className="w-4 h-4 text-[#64748B] shrink-0 mr-1 hidden sm:block" />
              {filterOptions.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    activeFilter === filter
                      ? 'bg-[#1570EF] text-white shadow-2xs font-bold'
                      : 'bg-[#F1F5F9] text-[#475569] hover:bg-[#E2E8F0] hover:text-[#0F172A]'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-64 shrink-0">
              <Search className="w-4 h-4 text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search media..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-1.5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg text-xs text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#1570EF] transition-all"
              />
            </div>
          </div>
        </div>

        {/* Main Gallery Area */}
        {filteredEvents.length === 0 && photoItems.length === 0 && videoItems.length === 0 && filteredReels.length === 0 ? (
          /* Empty State as requested by guidelines */
          <div className="text-center py-16 px-6 bg-white rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-4 max-w-2xl mx-auto my-8">
            <div className="w-14 h-14 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] text-[#1570EF] flex items-center justify-center mx-auto shadow-2xs">
              <Sparkles className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-extrabold text-[#0F172A]">Media Centre Coming Soon</h3>
              <p className="text-sm text-[#475569] leading-relaxed max-w-lg mx-auto">
                We regularly share project updates, corporate events, technology showcases, and industry insights. Please check back soon for our latest activities.
              </p>
            </div>
            {(activeFilter !== 'All' || searchQuery !== '') && (
              <button
                onClick={() => {
                  setActiveFilter('All');
                  setSearchQuery('');
                }}
                className="mt-2 px-5 py-2.5 rounded-xl bg-[#1570EF] text-white text-xs font-bold hover:bg-[#1258C5] transition-all shadow-2xs cursor-pointer"
              >
                View All Content
              </button>
            )}
          </div>
        ) : (
          <>
            {/* Dedicated Facebook & Video Reels Showcase Section */}
            {filteredReels.length > 0 && (
              <ReelsShowcase reels={filteredReels} />
            )}

            {/* Corporate Event Gallery Section */}
            {filteredEvents.length > 0 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#CBD5E1] pb-3">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-[#1570EF] uppercase tracking-wider mb-0.5">
                      <Calendar className="w-4 h-4" />
                      Featured Corporate Events
                    </div>
                    <h2 className="text-xl font-extrabold text-[#0F172A] tracking-tight">
                      Event Galleries ({filteredEvents.length})
                    </h2>
                  </div>
                  <span className="text-xs text-[#64748B] hidden sm:inline">
                    Click View Gallery to open event photos
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {filteredEvents.map((evt) => (
                    <CorporateEventCard
                      key={evt.id}
                      event={evt}
                      onOpenGallery={(eventItem, startIndex) => {
                        setSelectedEvent(eventItem);
                        setEventGalleryIndex(startIndex);
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Photo Grid Section (only if photos exist) */}
            {photoItems.length > 0 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#CBD5E1] pb-3">
                  <h2 className="text-base font-bold text-[#0F172A] flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-[#1570EF]" />
                    Project Gallery ({photoItems.length})
                  </h2>
                  <span className="text-xs text-[#64748B]">Click photo for fullscreen preview</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {photoItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ y: -4 }}
                      onClick={() => setLightboxIndex(index)}
                      className="group bg-white rounded-xl border border-[#E2E8F0] shadow-2xs overflow-hidden cursor-pointer hover:border-[#1570EF]/50 hover:shadow-md transition-all flex flex-col"
                    >
                      {/* Photo Thumbnail */}
                      <div className="relative aspect-16/10 bg-[#0F172A] overflow-hidden">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/90 text-[#0F172A] shadow-2xs">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                        <h3 className="text-sm font-bold text-[#0F172A] group-hover:text-[#1570EF] transition-colors leading-snug line-clamp-2">
                          {item.title}
                        </h3>

                        <div className="flex items-center justify-between text-xs text-[#64748B] pt-2 border-t border-[#F1F5F9]">
                          <span className="flex items-center gap-1 truncate max-w-[60%]">
                            <MapPin className="w-3.5 h-3.5 text-[#1570EF] shrink-0" />
                            <span className="truncate">{item.location}</span>
                          </span>
                          <span className="text-[#1570EF] font-semibold text-[11px] group-hover:underline shrink-0">
                            Click to View →
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {/* Dedicated Video Showcase Section */}
        {videoItems.length > 0 && (
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-2xs space-y-6">
            <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#1570EF] uppercase tracking-wider mb-1">
                  <Video className="w-4 h-4" />
                  Video Archives
                </div>
                <h2 className="text-xl font-bold text-[#0F172A]">
                  Project Demos & Site Walkthroughs
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videoItems.map((video) => (
                <div
                  key={video.id}
                  onClick={() => setSelectedVideo(video)}
                  className="group relative bg-[#0F172A] rounded-xl overflow-hidden shadow-2xs border border-[#E2E8F0] cursor-pointer"
                >
                  <div className="relative aspect-16/9 overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#1570EF] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 ml-0.5 fill-current" />
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-white/20 backdrop-blur-xs mb-1 inline-block">
                        {video.category}
                      </span>
                      <h3 className="text-xs sm:text-sm font-bold leading-snug line-clamp-2 text-white">
                        {video.title}
                      </h3>
                      <p className="text-[11px] text-slate-300 flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3 text-[#2E90FA]" />
                        {video.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Corporate Event Gallery Lightbox Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-2 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative w-full max-w-6xl max-h-[96vh] bg-[#0F172A] rounded-2xl shadow-2xl border border-slate-800 overflow-hidden flex flex-col justify-between my-auto"
            >
              {/* Header Bar */}
              <div className="p-4 sm:p-5 bg-slate-900/90 text-white flex items-center justify-between border-b border-slate-800 z-10 shrink-0">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="px-2.5 py-1 rounded text-[11px] font-bold uppercase tracking-wider bg-[#1570EF] text-white shrink-0">
                    {selectedEvent.category}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-white truncate">
                      {selectedEvent.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span className="flex items-center gap-1 text-[#2E90FA]">
                        <MapPin className="w-3.5 h-3.5" />
                        {selectedEvent.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-slate-300">
                        <Calendar className="w-3.5 h-3.5" />
                        {selectedEvent.date}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0 ml-3">
                  {selectedEvent.gallery.length > 1 && (
                    <button
                      onClick={() => setIsLightboxAutoPlay(!isLightboxAutoPlay)}
                      className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-all flex items-center gap-1.5 shadow-2xs cursor-pointer"
                      title={isLightboxAutoPlay ? 'Pause Slideshow' : 'Resume Slideshow'}
                    >
                      {isLightboxAutoPlay ? (
                        <>
                          <Pause className="w-3.5 h-3.5 text-amber-300" />
                          <span className="text-[10px] hidden sm:inline">Pause</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                          <span className="text-[10px] hidden sm:inline">Play</span>
                        </>
                      )}
                    </button>
                  )}
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors shrink-0"
                    title="Close (Esc)"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Main Image Stage */}
              <div
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onMouseEnter={() => setIsLightboxHovered(true)}
                onMouseLeave={() => setIsLightboxHovered(false)}
                className="relative flex-1 bg-black/90 flex items-center justify-center min-h-[45vh] max-h-[62vh] overflow-hidden group select-none"
              >
                <img
                  src={selectedEvent.gallery[eventGalleryIndex]}
                  alt={`${selectedEvent.title} - Photo ${eventGalleryIndex + 1}`}
                  className="max-h-[60vh] w-auto max-w-full object-contain transition-all duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80';
                  }}
                />

                {/* Prev Button */}
                <button
                  onClick={() =>
                    setEventGalleryIndex((prev) => (prev > 0 ? prev - 1 : selectedEvent.gallery.length - 1))
                  }
                  className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 text-white hover:bg-[#1570EF] transition-all border border-slate-700 shadow-xl backdrop-blur-xs"
                  title="Previous (Left Arrow)"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Next Button */}
                <button
                  onClick={() =>
                    setEventGalleryIndex((prev) => (prev < selectedEvent.gallery.length - 1 ? prev + 1 : 0))
                  }
                  className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 text-white hover:bg-[#1570EF] transition-all border border-slate-700 shadow-xl backdrop-blur-xs"
                  title="Next (Right Arrow)"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Photo Counter Overlay Badge */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-bold shadow-lg flex items-center gap-2">
                  <ImageIcon className="w-3.5 h-3.5 text-[#2E90FA]" />
                  <span>
                    Photo {eventGalleryIndex + 1} of {selectedEvent.gallery.length}
                  </span>
                </div>
              </div>

              {/* Thumbnail Navigation Strip */}
              <div className="p-3 bg-slate-950 border-t border-slate-800/80 flex items-center gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-slate-700">
                {selectedEvent.gallery.map((thumbUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setEventGalleryIndex(idx)}
                    className={`relative h-12 w-16 sm:h-14 sm:w-20 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                      eventGalleryIndex === idx
                        ? 'border-[#1570EF] scale-105 shadow-md ring-2 ring-[#1570EF]/50'
                        : 'border-slate-800 opacity-50 hover:opacity-100 hover:border-slate-600'
                    }`}
                  >
                    <img
                      src={thumbUrl}
                      alt={`Thumb ${idx + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=300&q=80';
                      }}
                    />
                    <span className="absolute bottom-0.5 right-1 text-[9px] font-mono font-bold text-white bg-black/60 px-1 rounded">
                      {idx + 1}
                    </span>
                  </button>
                ))}
              </div>

              {/* Footer info & CTA */}
              <div className="p-4 sm:p-5 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-800 shrink-0">
                <div className="space-y-1 max-w-3xl">
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 whitespace-pre-line">
                    {selectedEvent.description}
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => {
                      setSelectedEvent(null);
                      onOpenConsultation('RFP');
                    }}
                    className="px-4 py-2.5 bg-[#1570EF] text-white text-xs font-bold rounded-xl hover:bg-[#1258C5] transition-all shadow-2xs"
                  >
                    Request AV Consultation
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Lightbox Modal with Fullscreen Preview & Prev/Next Keyboard Nav */}
      <AnimatePresence>
        {activeLightboxItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-sm p-2 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-5xl max-h-[92vh] bg-[#0F172A] rounded-2xl shadow-2xl border border-slate-800 overflow-hidden flex flex-col justify-between"
            >
              {/* Header Bar */}
              <div className="p-4 bg-slate-900/90 text-white flex items-center justify-between border-b border-slate-800 z-10">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-[#1570EF] text-white">
                    {activeLightboxItem.category}
                  </span>
                  <span className="text-xs text-slate-300 font-semibold truncate max-w-md">
                    {activeLightboxItem.title}
                  </span>
                </div>
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                  title="Close (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Fullscreen Image View with Nav Buttons */}
              <div className="relative flex-1 bg-black flex items-center justify-center min-h-[50vh] max-h-[70vh] overflow-hidden group">
                <img
                  src={activeLightboxItem.image}
                  alt={activeLightboxItem.title}
                  className="max-h-[68vh] w-auto max-w-full object-contain"
                />

                {/* Left Nav Button */}
                <button
                  onClick={() =>
                    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : photoItems.length - 1))
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 text-white hover:bg-[#1570EF] transition-colors border border-slate-700 shadow-lg"
                  title="Previous (Left Arrow)"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Right Nav Button */}
                <button
                  onClick={() =>
                    setLightboxIndex((prev) => (prev !== null && prev < photoItems.length - 1 ? prev + 1 : 0))
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 text-white hover:bg-[#1570EF] transition-colors border border-slate-700 shadow-lg"
                  title="Next (Right Arrow)"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Lightbox Footer Details */}
              <div className="p-4 sm:p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-800">
                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    {activeLightboxItem.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1 text-[#2E90FA]">
                      <MapPin className="w-3.5 h-3.5" />
                      {activeLightboxItem.location}
                    </span>
                    <span>•</span>
                    <span>Executed {activeLightboxItem.date}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs text-slate-400 hidden md:inline">
                    Item {lightboxIndex! + 1} of {photoItems.length}
                  </span>
                  <button
                    onClick={() => {
                      setLightboxIndex(null);
                      onOpenConsultation('RFP');
                    }}
                    className="px-4 py-2 bg-[#1570EF] text-white text-xs font-bold rounded-lg hover:bg-[#1258C5] transition-colors"
                  >
                    Request Proposal
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="p-4 bg-[#0F172A] text-white flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-[#2E90FA]">
                  <Video className="w-4 h-4" />
                  <span>{selectedVideo.title}</span>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="p-1 rounded bg-white/10 hover:bg-white/20 text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative aspect-16/9 bg-black">
                {selectedVideo.videoUrl ? (
                  <iframe
                    src={selectedVideo.videoUrl}
                    title={selectedVideo.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-white p-6 text-center space-y-2">
                    <Video className="w-12 h-12 text-[#2E90FA]" />
                    <p className="text-sm font-semibold">Video Stream Demonstration</p>
                    <p className="text-xs text-slate-400">Available on official EAIPL video archives.</p>
                  </div>
                )}
              </div>

              <div className="p-4 bg-[#F8FAFC] text-xs text-[#475569] flex justify-between items-center">
                <span>{selectedVideo.location} • {selectedVideo.date}</span>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="px-3 py-1 bg-[#1570EF] text-white rounded font-bold"
                >
                  Close Video
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
