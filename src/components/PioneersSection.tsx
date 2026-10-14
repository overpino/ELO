import React, { useState } from 'react';
import { STEM_PIONEERS } from '../data/pioneers';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import {
  TapeStrip,
  Thumbtack,
  DoodleSquiggle,
} from './ui/HandDrawnPrimitives';
import { WOBBLY_RADIUS } from '../theme/handDrawnTokens';

export const PioneersSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? STEM_PIONEERS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === 0 ? STEM_PIONEERS.length - 1 : (prev + 1) % STEM_PIONEERS.length));
  };

  const current = STEM_PIONEERS[currentIndex];

  return (
    <div
      id="pioneers"
      className="bg-white p-5 sm:p-6 border-[3px] border-[#2d2d2d] shadow-hard flex flex-col justify-between h-full relative -rotate-1 select-none"
      style={{ borderRadius: WOBBLY_RADIUS.card }}
    >
      <TapeStrip className="-top-3 left-1/4 -rotate-3" />

      <div>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            <div
              className="w-10 h-10 bg-[#fff9c4] border-2 border-[#2d2d2d] shadow-hard-sm text-[#2d2d2d] flex items-center justify-center font-marker text-lg font-bold rotate-2 shrink-0"
              style={{ borderRadius: WOBBLY_RADIUS.button }}
            >
              ♀
            </div>
            <div>
              <h3 className="font-marker text-2xl text-[#2d2d2d]">
                Pioneers in STEM
              </h3>
              <p className="font-hand text-base text-[#2d2d2d]/70">
                Transatlantic Female Trailblazers (Brazil & Europe)
              </p>
            </div>
          </div>

          {/* Carousel Buttons with Min 48px Touch Target */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={prev}
              className="btn-hand-drawn w-12 h-12 flex items-center justify-center bg-white text-[#2d2d2d] hover:bg-[#fff9c4] cursor-pointer shrink-0"
              style={{ borderRadius: WOBBLY_RADIUS.button }}
              aria-label="Previous pioneer in carousel"
            >
              <ChevronLeft strokeWidth={2.5} className="w-5 h-5" />
            </button>
            <span className="font-marker text-sm text-[#2d2d2d] px-1 font-bold">
              {currentIndex + 1}/{STEM_PIONEERS.length}
            </span>
            <button
              onClick={next}
              className="btn-hand-drawn w-12 h-12 flex items-center justify-center bg-white text-[#2d2d2d] hover:bg-[#fff9c4] cursor-pointer shrink-0"
              style={{ borderRadius: WOBBLY_RADIUS.button }}
              aria-label="Next pioneer in carousel"
            >
              <ChevronRight strokeWidth={2.5} className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Active Pioneer Polaroid / Scrapbook Card */}
        <div
          className="p-5 bg-[#fdfbf7] border-2 border-[#2d2d2d] shadow-hard text-[#2d2d2d] relative rotate-1"
          style={{ borderRadius: WOBBLY_RADIUS.card }}
        >
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="font-marker text-sm text-[#2d5da1] tracking-wide">
              {current.country.toUpperCase()} · {current.years}
            </span>
            <div className="flex gap-1.5">
              {current.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-hand text-xs px-2 py-0.5 bg-[#fff9c4] text-[#2d2d2d] border border-[#2d2d2d] font-bold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <h4 className="font-marker text-2xl sm:text-3xl text-[#2d2d2d] mb-1">
            {current.name}
          </h4>

          <div className="font-hand text-base text-[#2d2d2d]/80 mb-3">
            {current.field} · <span className="font-bold">{current.institution}</span>
          </div>

          {/* Quote Card */}
          <div
            className="p-3.5 bg-white border-2 border-dashed border-[#2d2d2d] shadow-hard-sm mb-4 relative -rotate-1"
            style={{ borderRadius: WOBBLY_RADIUS.badge }}
          >
            <Quote strokeWidth={2.5} className="w-5 h-5 text-[#ff4d4d]/60 absolute top-2 right-2" />
            <p className="font-hand text-xl text-[#2d2d2d] italic leading-relaxed pr-6">
              "{current.quote}"
            </p>
          </div>

          {/* Major Achievement & Impact */}
          <div className="space-y-2 font-hand text-base">
            <div>
              <span className="font-marker text-xs uppercase text-[#2d2d2d] block">
                Breakthrough Achievement:
              </span>
              <p className="text-[#2d2d2d]/90 leading-snug">
                {current.achievement}
              </p>
            </div>

            <div className="pt-2 border-t border-dashed border-[#2d2d2d]/30">
              <span className="font-marker text-xs uppercase text-[#ff4d4d] block">
                Transatlantic Legacy:
              </span>
              <p className="text-[#2d2d2d]/90 leading-snug">
                {current.transatlanticImpact}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mini Indicator Thumbnails with Accessible Touch Targets */}
      <div className="mt-3 pt-2.5 border-t-2 border-dashed border-[#2d2d2d]/20 flex items-center justify-center gap-1">
        {STEM_PIONEERS.map((p, idx) => (
          <button
            key={p.id}
            onClick={() => setCurrentIndex(idx)}
            className="min-h-[48px] min-w-[36px] flex items-center justify-center cursor-pointer p-1"
            aria-label={`Go to pioneer ${p.name}`}
            title={p.name}
          >
            <span
              className={`h-2.5 border border-[#2d2d2d] transition-all block ${
                idx === currentIndex
                  ? 'w-7 bg-[#ff4d4d]'
                  : 'w-2.5 bg-[#e5e0d8] hover:bg-[#fff9c4]'
              }`}
              style={{ borderRadius: WOBBLY_RADIUS.tape }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
