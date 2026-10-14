import React, { useState } from 'react';
import eloLogo from '../ELO_logo.svg';
import { StudentProfile } from '../types';
import { UNIVERSITIES } from '../data/universities';
import { WOBBLY_RADIUS } from '../theme/handDrawnTokens';
import { Edit3, Menu, X, User } from 'lucide-react';

interface HeaderProps {
  profile: StudentProfile;
  onOpenProfileModal: () => void;
  activeSection: string;
  onNavigateSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  profile,
  onOpenProfileModal,
  activeSection,
  onNavigateSection,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentUni =
    UNIVERSITIES.find((u) => u.id === profile.universityId) || UNIVERSITIES[0];

  const handleNavClick = (sectionId: string) => {
    onNavigateSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#fdfbf7]/98 backdrop-blur-md border-b-[3px] border-[#2d2d2d] shadow-hard-sm">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 h-18 flex items-center justify-between gap-3 sm:gap-8">
        {/* Zone 1: Brand wordmark with ELO Logo & Acronym */}
        <button
          onClick={() => handleNavClick('opportunities')}
          className="flex items-center gap-2 sm:gap-3 text-left group focus:outline-hidden cursor-pointer min-h-[48px] py-1 shrink min-w-0"
        >
          <div
            className="w-9 h-9 sm:w-11 sm:h-11 bg-[#fff9c4] border-2 border-[#2d2d2d] shadow-hard-xs flex items-center justify-center shrink-0 p-1 group-hover:rotate-6 transition-transform"
            style={{ borderRadius: WOBBLY_RADIUS.badge }}
          >
            <img src={eloLogo} alt="ELO Logo" className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5 leading-none">
              <span className="font-marker text-xl sm:text-2xl font-bold tracking-tight text-[#2d2d2d]">
                ELO
              </span>
              <span className="font-hand text-[10px] sm:text-xs bg-[#e8f4fd] border border-[#2d2d2d] px-1.5 py-0.5 rounded-xs text-[#2d5da1] font-bold hidden xs:inline-block">
                EUNICE × Latam
              </span>
            </div>
            <span className="font-hand text-[11px] sm:text-xs text-[#2d2d2d]/75 leading-tight truncate hidden sm:block">
              EUNICE, Latam, Opportunities
            </span>
          </div>
        </button>

        {/* Zone 2: Desktop 5 concise nav links */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-6 text-lg font-hand text-[#2d2d2d]">
          <button
            onClick={() => handleNavClick('campus-hub')}
            className={`min-h-[48px] px-2 flex items-center whitespace-nowrap shrink-0 transition-transform hover:-rotate-1 cursor-pointer ${
              activeSection === 'campus-hub'
                ? 'text-[#2d5da1] font-bold wavy-underline'
                : 'hover:text-[#ff4d4d]'
            }`}
          >
            Campus Hub
          </button>
          <button
            onClick={() => handleNavClick('opportunities')}
            className={`min-h-[48px] px-2 flex items-center whitespace-nowrap shrink-0 transition-transform hover:-rotate-1 cursor-pointer ${
              activeSection === 'opportunities'
                ? 'text-[#2d5da1] font-bold wavy-underline'
                : 'hover:text-[#ff4d4d]'
            }`}
          >
            Opportunities
          </button>
          <button
            onClick={() => handleNavClick('pioneers')}
            className={`min-h-[48px] px-2 flex items-center whitespace-nowrap shrink-0 transition-transform hover:-rotate-1 cursor-pointer ${
              activeSection === 'pioneers'
                ? 'text-[#2d5da1] font-bold wavy-underline'
                : 'hover:text-[#ff4d4d]'
            }`}
          >
            Pioneers in STEM
          </button>
          <button
            onClick={() => handleNavClick('prep-hub')}
            className={`min-h-[48px] px-2 flex items-center whitespace-nowrap shrink-0 transition-transform hover:-rotate-1 cursor-pointer ${
              activeSection === 'prep-hub'
                ? 'text-[#2d5da1] font-bold wavy-underline'
                : 'hover:text-[#ff4d4d]'
            }`}
          >
            Entrance Prep Hub
          </button>
          <button
            onClick={() => handleNavClick('whatsapp')}
            className={`min-h-[48px] px-2 flex items-center whitespace-nowrap shrink-0 transition-transform hover:-rotate-1 cursor-pointer ${
              activeSection === 'whatsapp'
                ? 'text-[#2d5da1] font-bold wavy-underline'
                : 'hover:text-[#ff4d4d]'
            }`}
          >
            WhatsApp Newsletter
          </button>
        </nav>

        {/* Zone 3: Primary Action & Mobile Hamburger */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Student Profile Quick Switcher */}
          <button
            onClick={onOpenProfileModal}
            className="flex items-center gap-1.5 px-3 py-1.5 min-h-[48px] bg-[#fff9c4] hover:bg-[#fffae0] border-2 border-[#2d2d2d] shadow-hard-sm transition-all rotate-1 hover:-rotate-1 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none cursor-pointer"
            style={{ borderRadius: WOBBLY_RADIUS.badge }}
            title="Click to edit your student profile"
            aria-label="Student profile settings"
          >
            <User strokeWidth={2.5} className="w-4 h-4 text-[#2d5da1] shrink-0" />
            <span className="font-marker text-xs sm:text-sm text-[#2d2d2d] whitespace-nowrap">
              {profile.studentName ? profile.studentName.split(' ')[0] : 'Profile'}
            </span>
            <span className="font-hand text-xs text-[#2d2d2d]/60 hidden sm:inline">
              ({currentUni.countryCode || 'UFV'})
            </span>
            <Edit3 strokeWidth={2} className="w-3.5 h-3.5 text-[#2d2d2d]/60 shrink-0 ml-0.5" />
          </button>

          {/* Mobile Hamburger Button (>= 48px touch target) */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-12 h-12 flex items-center justify-center bg-white border-2 border-[#2d2d2d] shadow-hard-sm text-[#2d2d2d] hover:bg-[#fff9c4] transition-colors cursor-pointer shrink-0"
            style={{ borderRadius: WOBBLY_RADIUS.button }}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isMobileMenuOpen ? (
              <X strokeWidth={2.5} className="w-6 h-6" />
            ) : (
              <Menu strokeWidth={2.5} className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Sketched Mobile Dropdown Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t-2 border-[#2d2d2d] bg-[#fdfbf7] p-4 shadow-hard-lg space-y-2 animate-fade-in">
          <div className="space-y-1">
            <button
              onClick={() => handleNavClick('campus-hub')}
              className={`w-full min-h-[48px] px-4 py-3 text-left font-hand text-xl border-2 border-[#2d2d2d] shadow-hard-sm flex items-center justify-between ${
                activeSection === 'campus-hub'
                  ? 'bg-[#fff9c4] font-bold text-[#2d5da1]'
                  : 'bg-white text-[#2d2d2d]'
              }`}
              style={{ borderRadius: WOBBLY_RADIUS.card }}
            >
              <span>Campus Hub & Local Calls</span>
              {activeSection === 'campus-hub' && <span className="text-[#ff4d4d]">★</span>}
            </button>

            <button
              onClick={() => handleNavClick('opportunities')}
              className={`w-full min-h-[48px] px-4 py-3 text-left font-hand text-xl border-2 border-[#2d2d2d] shadow-hard-sm flex items-center justify-between ${
                activeSection === 'opportunities'
                  ? 'bg-[#fff9c4] font-bold text-[#2d5da1]'
                  : 'bg-white text-[#2d2d2d]'
              }`}
              style={{ borderRadius: WOBBLY_RADIUS.card }}
            >
              <span>Opportunities</span>
              {activeSection === 'opportunities' && <span className="text-[#ff4d4d]">★</span>}
            </button>

            <button
              onClick={() => handleNavClick('pioneers')}
              className={`w-full min-h-[48px] px-4 py-3 text-left font-hand text-xl border-2 border-[#2d2d2d] shadow-hard-sm flex items-center justify-between ${
                activeSection === 'pioneers'
                  ? 'bg-[#fff9c4] font-bold text-[#2d5da1]'
                  : 'bg-white text-[#2d2d2d]'
              }`}
              style={{ borderRadius: WOBBLY_RADIUS.card }}
            >
              <span>Pioneers in STEM</span>
              {activeSection === 'pioneers' && <span className="text-[#ff4d4d]">★</span>}
            </button>

            <button
              onClick={() => handleNavClick('prep-hub')}
              className={`w-full min-h-[48px] px-4 py-3 text-left font-hand text-xl border-2 border-[#2d2d2d] shadow-hard-sm flex items-center justify-between ${
                activeSection === 'prep-hub'
                  ? 'bg-[#fff9c4] font-bold text-[#2d5da1]'
                  : 'bg-white text-[#2d2d2d]'
              }`}
              style={{ borderRadius: WOBBLY_RADIUS.card }}
            >
              <span>Entrance Prep Hub</span>
              {activeSection === 'prep-hub' && <span className="text-[#ff4d4d]">★</span>}
            </button>

            <button
              onClick={() => handleNavClick('whatsapp')}
              className={`w-full min-h-[48px] px-4 py-3 text-left font-hand text-xl border-2 border-[#2d2d2d] shadow-hard-sm flex items-center justify-between ${
                activeSection === 'whatsapp'
                  ? 'bg-[#fff9c4] font-bold text-[#2d5da1]'
                  : 'bg-white text-[#2d2d2d]'
              }`}
              style={{ borderRadius: WOBBLY_RADIUS.card }}
            >
              <span>WhatsApp Newsletter</span>
              {activeSection === 'whatsapp' && <span className="text-[#ff4d4d]">★</span>}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
