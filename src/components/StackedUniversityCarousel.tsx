import React, { useState, useRef, useEffect } from 'react';
import { University } from '../types';
import { UNIVERSITIES } from '../data/universities';
import {
  ChevronLeft,
  ChevronRight,
  Check,
  Search,
  Building,
  GraduationCap,
  MapPin,
  Calendar,
  Layers,
} from 'lucide-react';
import {
  TapeStrip,
  Thumbtack,
  HandDrawnButton,
  DoodleArrow,
  DoodleSquiggle,
} from './ui/HandDrawnPrimitives';
import { WOBBLY_RADIUS } from '../theme/handDrawnTokens';

interface StackedUniversityCarouselProps {
  selectedUniversityId: string;
  onSelectUniversity: (id: string) => void;
}

export const StackedUniversityCarousel: React.FC<StackedUniversityCarouselProps> = ({
  selectedUniversityId,
  onSelectUniversity,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchDeltaX, setTouchDeltaX] = useState<number>(0);
  const [isSwiping, setIsSwiping] = useState(false);

  // Filter universities based on search query
  const filteredUniversities = UNIVERSITIES.filter(
    (u) =>
      u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.shortName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Find index of selected university or default to 0
  const initialIndex = Math.max(
    0,
    filteredUniversities.findIndex((u) => u.id === selectedUniversityId)
  );
  const [currentIndex, setCurrentIndex] = useState(initialIndex >= 0 ? initialIndex : 0);

  // Update current index when search filters or selected id changes
  useEffect(() => {
    const idx = filteredUniversities.findIndex((u) => u.id === selectedUniversityId);
    if (idx !== -1) {
      setCurrentIndex(idx);
    } else if (filteredUniversities.length > 0) {
      setCurrentIndex(0);
    }
  }, [searchQuery, selectedUniversityId]);

  const currentUni = filteredUniversities[currentIndex] || filteredUniversities[0] || UNIVERSITIES[0];

  const handleNext = () => {
    if (filteredUniversities.length <= 1) return;
    const nextIdx = (currentIndex + 1) % filteredUniversities.length;
    setCurrentIndex(nextIdx);
    onSelectUniversity(filteredUniversities[nextIdx].id);
  };

  const handlePrev = () => {
    if (filteredUniversities.length <= 1) return;
    const prevIdx =
      currentIndex === 0 ? filteredUniversities.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIdx);
    onSelectUniversity(filteredUniversities[prevIdx].id);
  };

  // Touch and drag swipe handlers for mobile-first interaction
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setTouchStartX(clientX);
    setIsSwiping(true);
    setTouchDeltaX(0);
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (touchStartX === null || !isSwiping) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setTouchDeltaX(clientX - touchStartX);
  };

  const handleTouchEnd = () => {
    if (touchStartX !== null && isSwiping) {
      if (touchDeltaX < -45) {
        handleNext();
      } else if (touchDeltaX > 45) {
        handlePrev();
      }
    }
    setTouchStartX(null);
    setTouchDeltaX(0);
    setIsSwiping(false);
  };

  // Pre-calculate stacked card indices
  const getCardAtOffset = (offset: number) => {
    if (filteredUniversities.length === 0) return null;
    const idx =
      (currentIndex + offset + filteredUniversities.length) % filteredUniversities.length;
    return filteredUniversities[idx];
  };

  const card0 = getCardAtOffset(0);
  const card1 = getCardAtOffset(1);
  const card2 = getCardAtOffset(2);

  return (
    <div className="space-y-4 select-none">
      {/* Search Input Filter for Quick Access */}
      <div className="relative">
        <label htmlFor="university-stack-search" className="sr-only">
          Search universities in stack
        </label>
        <Search
          strokeWidth={2.5}
          className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#2d2d2d]/50 pointer-events-none"
        />
        <input
          id="university-stack-search"
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Type to filter stack (e.g. Viçosa, Catania, Poznań)..."
          className="w-full min-h-[48px] pl-11 pr-16 py-2.5 bg-white border-2 border-[#2d2d2d] text-[#2d2d2d] font-hand text-base rounded-xl focus:border-[#2d5da1] focus:outline-hidden shadow-hard-sm"
          style={{ borderRadius: WOBBLY_RADIUS.input }}
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="absolute right-1 top-1/2 -translate-y-1/2 min-h-[48px] min-w-[48px] flex items-center justify-center font-marker text-xs text-[#2d2d2d]/60 hover:text-[#ff4d4d] cursor-pointer"
            aria-label="Clear university search filter"
          >
            Clear
          </button>
        )}
      </div>

      {/* Stacked Cards Area */}
      <div
        className="relative min-h-[400px] sm:min-h-[400px] flex items-center justify-center py-4 px-1 sm:px-2 cursor-grab active:cursor-grabbing touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
        onMouseMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
        onMouseLeave={handleTouchEnd}
      >
        {filteredUniversities.length === 0 ? (
          <div
            className="w-full max-w-md p-8 bg-white border-[3px] border-[#2d2d2d] text-center shadow-hard"
            style={{ borderRadius: WOBBLY_RADIUS.card }}
          >
            <p className="font-marker text-xl text-[#2d2d2d]">No universities found</p>
            <p className="font-hand text-base text-[#2d2d2d]/70 mt-1">
              Try a different city, country or name.
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="mt-3 font-marker text-sm text-[#ff4d4d] underline"
            >
              Reset Search
            </button>
          </div>
        ) : (
          <div className="relative w-full max-w-md h-[400px] xs:h-[380px] sm:h-[370px]">
            {/* Card 2 (Bottom layer in stack) */}
            {card2 && filteredUniversities.length > 2 && (
              <div
                className="absolute inset-0 bg-[#e5e0d8] border-[3px] border-[#2d2d2d] shadow-hard pointer-events-none transition-all duration-300 transform scale-90 translate-y-6 rotate-4 opacity-70"
                style={{ borderRadius: WOBBLY_RADIUS.card }}
              >
                <div className="p-4 flex items-center justify-between text-xs font-marker text-[#2d2d2d]/50">
                  <span>{card2.shortName}</span>
                  <span>{card2.country}</span>
                </div>
              </div>
            )}

            {/* Card 1 (Middle layer in stack) */}
            {card1 && filteredUniversities.length > 1 && (
              <div
                className="absolute inset-0 bg-[#fff9c4] border-[3px] border-[#2d2d2d] shadow-hard pointer-events-none transition-all duration-300 transform scale-95 translate-y-3 -rotate-2 opacity-90"
                style={{ borderRadius: WOBBLY_RADIUS.card }}
              >
                <TapeStrip className="-top-3 left-1/3 rotate-2" />
                <div className="p-4 flex items-center justify-between text-sm font-marker text-[#2d2d2d]/70">
                  <span>{card1.name}</span>
                  <span>{card1.countryCode}</span>
                </div>
              </div>
            )}

            {/* Card 0: Active Interactive Top Card */}
            {card0 && (
              <div
                onClick={() => onSelectUniversity(card0.id)}
                className="absolute inset-0 bg-white border-[3px] border-[#2d2d2d] shadow-hard-lg transition-transform duration-150 flex flex-col justify-between p-3.5 sm:p-6 cursor-pointer overflow-hidden"
                style={{
                  borderRadius: WOBBLY_RADIUS.card,
                  transform: `translate(${touchDeltaX * 0.4}px, 0px) rotate(${
                    touchDeltaX * 0.05
                  }deg)`,
                }}
              >
                {/* Decorative Scotch Tape at Top */}
                <TapeStrip className="-top-3 left-1/2 -translate-x-1/2 -rotate-1" />

                {/* Card Top: Country Stamp & Selection Badge */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <div
                        className="w-9 h-9 sm:w-10 sm:h-10 border-2 border-[#2d2d2d] shadow-hard-sm flex items-center justify-center font-marker text-xs sm:text-sm font-bold text-white shrink-0"
                        style={{
                          backgroundColor: card0.accentColor || '#ff4d4d',
                          borderRadius: WOBBLY_RADIUS.button,
                        }}
                      >
                        {card0.countryCode}
                      </div>

                      <div className="min-w-0">
                        <span className="font-marker text-[10px] sm:text-xs uppercase text-[#2d5da1] block truncate leading-tight">
                          {card0.isUfv ? 'Brazil Flagship Partner' : 'EUNICE European Partner'}
                        </span>
                        <div className="font-hand text-xs sm:text-sm text-[#2d2d2d]/80 flex items-center gap-1 mt-0.5 truncate">
                          <MapPin strokeWidth={2.5} className="w-3.5 h-3.5 text-[#ff4d4d] shrink-0" />
                          <span className="truncate">{card0.city}, {card0.country}</span>
                        </div>
                      </div>
                    </div>

                    {/* Active Selected Stamp */}
                    {selectedUniversityId === card0.id ? (
                      <span
                        className="px-2 sm:px-2.5 py-1 bg-[#ff4d4d] text-white border-2 border-[#2d2d2d] shadow-hard-sm font-marker text-[11px] sm:text-xs font-bold rotate-2 flex items-center gap-1 shrink-0"
                        style={{ borderRadius: WOBBLY_RADIUS.badge }}
                      >
                        <Check strokeWidth={3} className="w-3.5 h-3.5" />
                        <span>SELECTED</span>
                      </span>
                    ) : (
                      <span
                        className="px-2 py-1 bg-[#e5e0d8] text-[#2d2d2d] border border-[#2d2d2d] font-hand text-xs font-bold shrink-0"
                        style={{ borderRadius: WOBBLY_RADIUS.tape }}
                      >
                        Tap to choose
                      </span>
                    )}
                  </div>

                  {/* University Name in Kalam (Heading Font) */}
                  <h3 className="font-marker text-lg sm:text-2xl md:text-3xl text-[#2d2d2d] leading-tight mb-1">
                    {card0.name}
                  </h3>

                  {/* Short description */}
                  <p className="font-hand text-xs sm:text-sm md:text-base text-[#2d2d2d]/85 line-clamp-2 sm:line-clamp-3 leading-snug">
                    {card0.description}
                  </p>
                </div>

                {/* Card Center/Bottom: Key STEM Strengths & Stats */}
                <div className="space-y-2 pt-2 border-t-2 border-dashed border-[#2d2d2d]/20">
                  <div className="flex flex-wrap gap-1">
                    {card0.stemStrengths.slice(0, 3).map((strength, i) => (
                      <span
                        key={i}
                        className="font-hand text-[11px] sm:text-xs px-2 py-0.5 bg-[#fff9c4] text-[#2d2d2d] border border-[#2d2d2d] shadow-2xs font-bold truncate max-w-[140px] sm:max-w-none"
                        style={{ borderRadius: WOBBLY_RADIUS.tape }}
                      >
                        {strength}
                      </span>
                    ))}
                  </div>

                  {/* Stats Footer bar */}
                  <div className="flex items-center justify-between text-xs font-hand text-[#2d2d2d]/70 pt-0.5">
                    <span className="flex items-center gap-1">
                      <Calendar strokeWidth={2.5} className="w-3.5 h-3.5 text-[#2d5da1]" />
                      <span>Est. {card0.establishedYear}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <GraduationCap strokeWidth={2.5} className="w-3.5 h-3.5 text-[#2d5da1]" />
                      <span>{card0.totalStudents.toLocaleString()}</span>
                    </span>
                    {card0.erasmusCode && (
                      <span className="font-mono text-[10px] text-[#2d2d2d]/60 font-semibold truncate max-w-[80px] sm:max-w-[100px]">
                        {card0.erasmusCode}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Swipe Controls and Stack Indicators */}
      <div className="flex items-center justify-between px-1 pt-1 gap-2">
        <button
          type="button"
          onClick={handlePrev}
          className="btn-hand-drawn min-h-[48px] px-4 py-2.5 bg-white hover:bg-[#fff9c4] text-[#2d2d2d] font-hand text-base font-bold flex items-center gap-1.5 cursor-pointer"
          style={{ borderRadius: WOBBLY_RADIUS.button }}
          aria-label="Previous university in stack"
        >
          <ChevronLeft strokeWidth={2.5} className="w-4 h-4" />
          <span>Prev</span>
        </button>

        {/* Stack index indicator in hand-drawn style */}
        <div className="text-center font-hand text-sm text-[#2d2d2d] shrink-0">
          <span className="font-marker font-bold text-base text-[#2d5da1]">
            {filteredUniversities.length > 0 ? currentIndex + 1 : 0}
          </span>
          <span className="text-[#2d2d2d]/50 mx-1">/</span>
          <span>{filteredUniversities.length}</span>
          <span className="block text-[11px] text-[#2d2d2d]/50 font-hand">
            (Swipe or tap)
          </span>
        </div>

        <button
          type="button"
          onClick={handleNext}
          className="btn-hand-drawn min-h-[48px] px-4 py-2.5 bg-white hover:bg-[#fff9c4] text-[#2d2d2d] font-hand text-base font-bold flex items-center gap-1.5 cursor-pointer"
          style={{ borderRadius: WOBBLY_RADIUS.button }}
          aria-label="Next university in stack"
        >
          <span>Next</span>
          <ChevronRight strokeWidth={2.5} className="w-4 h-4" />
        </button>
      </div>

      {/* Mini Thumbnails / Jump Bar with Minimum 48px Touch Targets */}
      <div className="flex items-center justify-center gap-1.5 pt-2 flex-wrap">
        {filteredUniversities.map((uni, idx) => (
          <button
            key={uni.id}
            type="button"
            onClick={() => {
              setCurrentIndex(idx);
              onSelectUniversity(uni.id);
            }}
            className={`font-marker text-xs px-3 py-2 min-h-[48px] min-w-[48px] border border-[#2d2d2d] transition-all cursor-pointer flex items-center justify-center ${
              idx === currentIndex
                ? 'bg-[#ff4d4d] text-white shadow-hard-sm scale-105 font-bold -rotate-2'
                : selectedUniversityId === uni.id
                ? 'bg-[#fff9c4] text-[#2d2d2d] font-bold'
                : 'bg-white text-[#2d2d2d]/70 hover:bg-[#e5e0d8]'
            }`}
            style={{ borderRadius: WOBBLY_RADIUS.tape }}
            title={uni.name}
            aria-label={`Jump to ${uni.name}`}
          >
            {uni.shortName}
          </button>
        ))}
      </div>
    </div>
  );
};
