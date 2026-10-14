import React from 'react';
import eloLogo from '../ELO_logo.svg';
import { ArrowRight } from 'lucide-react';
import {
  HandDrawnButton,
  TapeStrip,
  DoodleSquiggle,
} from './ui/HandDrawnPrimitives';
import { WOBBLY_RADIUS } from '../theme/handDrawnTokens';

interface SplashScreenProps {
  hasCompletedOnboarding: boolean;
  onProceed: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({
  onProceed,
}) => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center px-4 py-8 sm:py-12 select-none overflow-hidden">
      {/* Main Sketched Poster Card */}
      <div className="relative max-w-xl w-full">
        {/* Decorative Tape on Card corners */}
        <TapeStrip className="-top-4 left-1/4 -rotate-3" />
        <TapeStrip className="-top-4 right-1/4 rotate-2" />

        <div
          className="relative bg-white border-[3px] border-[#2d2d2d] shadow-hard-lg p-6 sm:p-12 text-center -rotate-1 flex flex-col items-center justify-center"
          style={{ borderRadius: WOBBLY_RADIUS.card }}
        >
          {/* ELO Brand Logo - free and unconstrained without circle enclosure */}
          <div className="mb-4 sm:mb-5 flex items-center justify-center">
            <img
              src={eloLogo}
              alt="ELO Logo"
              className="w-24 h-24 sm:w-32 sm:h-32 object-contain hover:scale-105 transition-transform duration-200"
            />
          </div>

          {/* Main Title with App Name */}
          <h1 className="text-4xl sm:text-6xl font-marker text-[#2d2d2d] mb-1 leading-tight tracking-wide">
            ELO
          </h1>

          {/* Acronym Expansion */}
          <div className="inline-block px-3.5 py-1 bg-[#e8f4fd] border-2 border-[#2d2d2d] shadow-hard-xs mb-3 -rotate-1 rounded-sm">
            <span className="font-marker text-xs sm:text-sm text-[#2d5da1] tracking-wider uppercase">
              EUNICE, Latam, Opportunities
            </span>
          </div>

          <p className="text-lg sm:text-2xl font-hand text-[#2d2d2d] mb-4 leading-snug">
            Democratizing Transatlantic STEM Mobility
          </p>

          <DoodleSquiggle className="mx-auto mb-6 sm:mb-8 text-[#2d2d2d]/60" />

          {/* Call to Action Container: Centered and prominent */}
          <div className="flex items-center justify-center my-2 w-full">
            <HandDrawnButton
              onClick={onProceed}
              size="lg"
              className="bg-white text-[#2d2d2d] hover:bg-[#ff4d4d] hover:text-white min-h-[52px] px-8 text-xl shadow-hard"
            >
              <span>Find Your Path</span>
              <ArrowRight strokeWidth={2.5} className="w-5 h-5 ml-1.5" />
            </HandDrawnButton>
          </div>

          {/* Institutional note repositioned cleanly at the bottom without colliding */}
          <div
            className="mt-8 pt-4 border-t-2 border-dashed border-[#2d2d2d]/20 w-full max-w-sm text-center"
          >
            <p className="font-hand text-base text-[#2d2d2d]/80 leading-snug">
              Universidade Federal de Viçosa & Latin American Partners <br />
              <span className="text-[#2d5da1] font-bold">
                + 10 EUNICE European Universities
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
