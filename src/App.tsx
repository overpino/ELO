import React, { useState, useEffect, useMemo } from 'react';
import eloLogo from './ELO_logo.svg';
import { Opportunity, StudentProfile, STEMField, AcademicGoal } from './types';
import { UNIVERSITIES, STEM_FIELDS, ACADEMIC_GOALS } from './data/universities';
import { OPPORTUNITIES } from './data/opportunities';
import { SplashScreen } from './components/SplashScreen';
import { OnboardingWizard } from './components/OnboardingWizard';
import { Header } from './components/Header';
import { HeroAgentSearch } from './components/HeroAgentSearch';
import { OpportunityCard } from './components/OpportunityCard';
import { SkillGapDrawer } from './components/SkillGapDrawer';
import { LetterOfIntentModal } from './components/LetterOfIntentModal';
import { OpportunityDetailModal } from './components/OpportunityDetailModal';
import { WhatsAppSimulator } from './components/WhatsAppSimulator';
import { PioneersSection } from './components/PioneersSection';
import { PrepHubSection } from './components/PrepHubSection';
import { LocalCampusOverview } from './components/LocalCampusOverview';
import {
  Compass,
  RotateCcw,
  LayoutGrid,
  Columns2,
  Filter,
  BookOpen,
  MessageSquare,
  Award,
  Building2,
} from 'lucide-react';
import { WOBBLY_RADIUS } from './theme/handDrawnTokens';
import { DoodleSquiggle } from './components/ui/HandDrawnPrimitives';

const STORAGE_KEY = 'eunice_ufv_student_profile';

const STEM_FIELD_SHORT_LABELS: Record<string, { short: string; full: string }> = {
  'Computer Science & AI': { short: 'CS & AI', full: 'Computer Science & AI' },
  'Robotics & Mechatronics': { short: 'Robotics', full: 'Robotics & Mechatronics' },
  'Biotechnology & Life Sciences': { short: 'Biotech', full: 'Biotechnology & Life Sciences' },
  'Renewable Energy & Decarbonization': { short: 'Clean Energy', full: 'Renewable Energy & Decarb.' },
  'Materials Science & Nanotechnology': { short: 'Nanotech', full: 'Materials Science & Nanotech' },
  'Applied Mathematics & Modeling': { short: 'Applied Math', full: 'Applied Math & Modeling' },
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'splash' | 'onboarding' | 'dashboard'>('splash');
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const [profile, setProfile] = useState<StudentProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (!parsed.hasCompletedOnboarding && (parsed.studentName === 'Mariana Silva' || !parsed.studentName)) {
          parsed.studentName = '';
        }
        return parsed;
      }
    } catch (e) {
      console.warn('Failed to parse saved profile:', e);
    }
    return {
      studentName: '',
      universityId: 'ufv',
      field: 'Robotics & Mechatronics',
      goal: 'Campus News & Lurking',
      goals: ['Campus News & Lurking', 'Research Internship'],
      isLurking: true,
      hasCompletedOnboarding: false,
      acquiredSkills: [],
      phoneNumber: '+55 (31) 98450-2026',
      languagePreference: 'pt',
    };
  });

  const [selectedLetterOpp, setSelectedLetterOpp] = useState<Opportunity | null>(null);
  const [selectedSkillGapOpp, setSelectedSkillGapOpp] = useState<Opportunity | null>(null);
  const [selectedDetailOpp, setSelectedDetailOpp] = useState<Opportunity | null>(null);

  const [activeSection, setActiveSection] = useState('opportunities');

  const [agentMatchedIds, setAgentMatchedIds] = useState<string[] | null>(null);
  const [selectedFieldFilter, setSelectedFieldFilter] = useState<string>('all');
  const [selectedGoalFilter, setSelectedGoalFilter] = useState<string>('all');
  const [selectedCountryFilter, setSelectedCountryFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'match' | 'deadline'>('match');
  const [viewLayout, setViewLayout] = useState<'spacious' | 'compact'>('spacious');

  const handleSplashProceed = () => {
    if (profile.hasCompletedOnboarding) {
      setCurrentScreen('dashboard');
    } else {
      setCurrentScreen('onboarding');
    }
  };

  const handleOnboardingComplete = (updatedProfile: StudentProfile) => {
    setProfile(updatedProfile);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProfile));
    } catch (e) {
      console.error(e);
    }
    setIsEditingProfile(false);
    setCurrentScreen('dashboard');
  };

  const handleResetSetup = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error(e);
    }
    const defaultProfile: StudentProfile = {
      studentName: '',
      universityId: 'ufv',
      field: 'Robotics & Mechatronics',
      goal: 'Campus News & Lurking',
      goals: ['Campus News & Lurking'],
      isLurking: true,
      hasCompletedOnboarding: false,
      acquiredSkills: [],
      phoneNumber: '+55 (31) 98450-2026',
      languagePreference: 'pt',
    };
    setProfile(defaultProfile);
    setAgentMatchedIds(null);
    setSelectedFieldFilter('all');
    setSelectedGoalFilter('all');
    setSelectedCountryFilter('all');
    setCurrentScreen('onboarding');
  };

  const handleAcquireSkill = (skillName: string) => {
    setProfile((prev) => {
      const currentSkills = prev.acquiredSkills || [];
      if (!currentSkills.includes(skillName)) {
        const next = { ...prev, acquiredSkills: [...currentSkills, skillName] };
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        } catch (e) {}
        return next;
      }
      return prev;
    });
  };

  const handleNavigateSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const countries = useMemo(() => {
    const list = Array.from(new Set(OPPORTUNITIES.map((o) => o.hostCountry)));
    return list.sort();
  }, []);

  const filteredOpportunities = useMemo(() => {
    return OPPORTUNITIES.filter((opp) => {
      if (agentMatchedIds && !agentMatchedIds.includes(opp.id)) {
        return false;
      }
      if (selectedFieldFilter !== 'all' && opp.field !== selectedFieldFilter) {
        return false;
      }
      if (selectedGoalFilter !== 'all') {
        if (selectedGoalFilter === 'Campus News & Lurking') {
          // In lurking mode, allow browsing all opportunities freely!
        } else if (opp.goal !== selectedGoalFilter) {
          return false;
        }
      }
      if (selectedCountryFilter !== 'all' && opp.hostCountry !== selectedCountryFilter) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'deadline') {
        return a.deadlineCountdownDays - b.deadlineCountdownDays;
      }
      let scoreA = a.matchScore;
      let scoreB = b.matchScore;
      if (profile.field === a.field) scoreA += 3;
      if (profile.goals && profile.goals.includes(a.goal)) scoreA += 2;
      else if (profile.goal === a.goal) scoreA += 2;
      if (profile.acquiredSkills?.includes(a.skillsAnalysis.gapSkill)) scoreA = 99;

      if (profile.field === b.field) scoreB += 3;
      if (profile.goals && profile.goals.includes(b.goal)) scoreB += 2;
      else if (profile.goal === b.goal) scoreB += 2;
      if (profile.acquiredSkills?.includes(b.skillsAnalysis.gapSkill)) scoreB = 99;

      return scoreB - scoreA;
    });
  }, [
    agentMatchedIds,
    selectedFieldFilter,
    selectedGoalFilter,
    selectedCountryFilter,
    sortBy,
    profile,
  ]);

  const handleSelectFromAgent = (oppId: string) => {
    const target = OPPORTUNITIES.find((o) => o.id === oppId);
    if (target) {
      setSelectedDetailOpp(target);
    }
  };

  // SCREEN A: Splash Screen
  if (currentScreen === 'splash') {
    return (
      <SplashScreen
        hasCompletedOnboarding={profile.hasCompletedOnboarding}
        onProceed={handleSplashProceed}
      />
    );
  }

  // SCREEN B: Mandatory 3-Step Wizard
  if (currentScreen === 'onboarding' || isEditingProfile) {
    return (
      <OnboardingWizard
        initialProfile={profile}
        onComplete={handleOnboardingComplete}
        onCancel={() => setIsEditingProfile(false)}
        isEditing={isEditingProfile}
      />
    );
  }

  // SCREEN C: Main Dashboard
  return (
    <div className="min-h-screen text-[#2d2d2d] flex flex-col font-hand selection:bg-[#fff9c4]">
      {/* Top Bar */}
      <Header
        profile={profile}
        onOpenProfileModal={() => setIsEditingProfile(true)}
        activeSection={activeSection}
        onNavigateSection={handleNavigateSection}
      />

      <main className="flex-1">
        {/* Hero Section: Agentic Natural Language Search */}
        <HeroAgentSearch
          profile={profile}
          onFilterResults={setAgentMatchedIds}
          onSelectOpportunity={handleSelectFromAgent}
        />

        {/* Content Container - Expanded to max-w-7xl with generous breathing room */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 sm:space-y-12">
          {/* New Section: Home University Panoramica, Local Seminars & Bandi */}
          <LocalCampusOverview
            profile={profile}
            onChangeUniversity={(newUniId) => {
              setProfile((prev) => {
                const next = { ...prev, universityId: newUniId };
                try {
                  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
                } catch (e) {}
                return next;
              });
            }}
            onOpenProfileModal={() => setIsEditingProfile(true)}
          />

          {/* Section Divider: Home Campus Hub -> Curated STEM Opportunities */}
          <div className="relative py-4 select-none" aria-hidden="true">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-dashed border-[#2d2d2d]/25" />
            </div>
            <div className="relative flex justify-center">
              <div
                className="px-4 py-1.5 bg-[#fdfbf7] border-2 border-[#2d2d2d] shadow-hard-sm font-marker text-xs sm:text-sm text-[#2d2d2d] uppercase tracking-wide inline-flex items-center gap-2 -rotate-0.5"
                style={{ borderRadius: WOBBLY_RADIUS.badge }}
              >
                <img src={eloLogo} alt="" className="w-4 h-4 object-contain inline-block" />
                <span>ELO (EUNICE, Latam, Opportunities) · Transatlantic Research Framework</span>
              </div>
            </div>
          </div>

          {/* Opportunities Section */}
          <section id="opportunities" className="scroll-mt-20">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2.5 mb-1 flex-wrap">
                  <h2 className="text-3xl sm:text-4xl font-marker text-[#2d2d2d]">
                    Curated STEM Opportunities
                  </h2>
                  <span
                    className="inline-flex items-center gap-1 px-3 py-1 bg-[#fff9c4] border-2 border-[#2d2d2d] shadow-hard-sm font-marker text-xs font-bold text-[#2d2d2d]"
                    style={{ borderRadius: WOBBLY_RADIUS.badge }}
                  >
                    {filteredOpportunities.length} Verified Positions
                  </span>
                </div>
                <p className="font-hand text-lg text-[#2d2d2d]/70 mt-0.5">
                  Filtered against your profile: <span className="font-bold text-[#2d5da1]">{profile.field}</span>{' '}
                  {profile.goals && profile.goals.length > 0 ? (
                    <span className="text-[#2d2d2d]/80">
                      ({profile.goals.map((g) => (g === 'Campus News & Lurking' ? 'News & Browsing' : g)).join(' · ')})
                    </span>
                  ) : (
                    <span className="text-[#2d2d2d]/80">({profile.goal})</span>
                  )}.
                </p>
                <DoodleSquiggle className="mt-1 text-[#2d2d2d]/40" />
              </div>

              {/* Reset filter button */}
              {(agentMatchedIds ||
                selectedFieldFilter !== 'all' ||
                selectedGoalFilter !== 'all' ||
                selectedCountryFilter !== 'all') && (
                <button
                  type="button"
                  onClick={() => {
                    setAgentMatchedIds(null);
                    setSelectedFieldFilter('all');
                    setSelectedGoalFilter('all');
                    setSelectedCountryFilter('all');
                  }}
                  className="btn-hand-drawn inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[48px] font-hand text-base bg-white hover:bg-[#fff9c4] text-[#2d2d2d] self-start md:self-auto cursor-pointer"
                  style={{ borderRadius: WOBBLY_RADIUS.button }}
                >
                  <RotateCcw strokeWidth={2.5} className="w-4 h-4 text-[#ff4d4d]" />
                  <span>Reset All Filters</span>
                </button>
              )}
            </div>

            {/* Filter Controls Row in Hand-Drawn style (Spacious, Wide, No Border Collision) */}
            <div
              className="p-5 sm:p-6 lg:p-7 bg-white border-[3px] border-[#2d2d2d] shadow-hard flex flex-col gap-5 mb-8"
              style={{ borderRadius: WOBBLY_RADIUS.card }}
            >
              {/* Quick Field Filter Pills - Reworked for small screens to prevent label cutting */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3">
                <span className="font-marker text-xs uppercase text-[#2d2d2d]/70 shrink-0 flex items-center gap-1.5 self-start sm:self-center">
                  <Filter className="w-3.5 h-3.5 text-[#2d5da1]" />
                  Quick Track:
                </span>
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedFieldFilter('all')}
                    className={`px-2.5 sm:px-3 py-1.5 font-marker text-xs border-2 transition-all cursor-pointer rounded-sm min-h-[38px] flex items-center justify-center text-center ${
                      selectedFieldFilter === 'all'
                        ? 'bg-[#2d5da1] text-white border-[#2d2d2d] shadow-hard-sm font-bold'
                        : 'bg-[#fdfbf7] text-[#2d2d2d] border-[#2d2d2d]/40 hover:bg-[#fff9c4]'
                    }`}
                  >
                    <span className="sm:hidden">All ({OPPORTUNITIES.length})</span>
                    <span className="hidden sm:inline">All Tracks ({OPPORTUNITIES.length})</span>
                  </button>
                  {STEM_FIELDS.map((f) => {
                    const labels = STEM_FIELD_SHORT_LABELS[f] || { short: f, full: f };
                    const isSelected = selectedFieldFilter === f;
                    return (
                      <button
                        key={f}
                        type="button"
                        onClick={() => setSelectedFieldFilter(f)}
                        title={f}
                        className={`px-2.5 sm:px-3 py-1.5 font-marker text-xs border-2 transition-all cursor-pointer rounded-sm min-h-[38px] flex items-center justify-center text-center ${
                          isSelected
                            ? 'bg-[#2d5da1] text-white border-[#2d2d2d] shadow-hard-sm font-bold'
                            : 'bg-[#fdfbf7] text-[#2d2d2d] border-[#2d2d2d]/40 hover:bg-[#fff9c4]'
                        }`}
                      >
                        <span className="sm:hidden">{labels.short}</span>
                        <span className="hidden sm:inline">{labels.full}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Detailed Select Controls & Layout View Switcher */}
              <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pt-3 border-t border-dashed border-[#2d2d2d]/20">
                {/* 3 Select dropdowns with generous width and padding */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 flex-1">
                  {/* STEM Field Filter */}
                  <div>
                    <label className="block font-marker text-xs text-[#2d2d2d]/70 mb-1" htmlFor="stem-field-filter">
                      Discipline Filter
                    </label>
                    <select
                      id="stem-field-filter"
                      value={selectedFieldFilter}
                      onChange={(e) => setSelectedFieldFilter(e.target.value)}
                      className="font-hand text-base bg-[#fdfbf7] border-2 border-[#2d2d2d] rounded-md px-3.5 py-2.5 min-h-[48px] font-bold text-[#2d2d2d] shadow-hard-sm focus:outline-hidden focus:border-[#2d5da1] cursor-pointer w-full"
                    >
                      <option value="all">All STEM Fields</option>
                      {STEM_FIELDS.map((f) => (
                        <option key={f} value={f}>
                          {f}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Academic Goal Filter */}
                  <div>
                    <label className="block font-marker text-xs text-[#2d2d2d]/70 mb-1" htmlFor="academic-goal-filter">
                      Program Type
                    </label>
                    <select
                      id="academic-goal-filter"
                      value={selectedGoalFilter}
                      onChange={(e) => setSelectedGoalFilter(e.target.value)}
                      className="font-hand text-base bg-[#fdfbf7] border-2 border-[#2d2d2d] rounded-md px-3.5 py-2.5 min-h-[48px] font-bold text-[#2d2d2d] shadow-hard-sm focus:outline-hidden focus:border-[#2d5da1] cursor-pointer w-full"
                    >
                      <option value="all">All Academic Goals</option>
                      {ACADEMIC_GOALS.map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Host Country Filter */}
                  <div>
                    <label className="block font-marker text-xs text-[#2d2d2d]/70 mb-1" htmlFor="host-country-filter">
                      Host Country
                    </label>
                    <select
                      id="host-country-filter"
                      value={selectedCountryFilter}
                      onChange={(e) => setSelectedCountryFilter(e.target.value)}
                      className="font-hand text-base bg-[#fdfbf7] border-2 border-[#2d2d2d] rounded-md px-3.5 py-2.5 min-h-[48px] font-bold text-[#2d2d2d] shadow-hard-sm focus:outline-hidden focus:border-[#2d5da1] cursor-pointer w-full"
                    >
                      <option value="all">All Host Countries</option>
                      {countries.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Right side controls: Sort By & View Layout Toggle */}
                <div className="flex flex-wrap items-center gap-4 self-start lg:self-end pt-1">
                  {/* Sort By Toggle */}
                  <div className="flex items-center gap-2">
                    <span className="font-marker text-xs uppercase text-[#2d2d2d]/70">Sort:</span>
                    <div
                      className="flex bg-[#e5e0d8] p-1 border-2 border-[#2d2d2d] shadow-hard-sm"
                      style={{ borderRadius: WOBBLY_RADIUS.badge }}
                    >
                      <button
                        type="button"
                        onClick={() => setSortBy('match')}
                        className={`min-h-[40px] px-3.5 py-1 font-marker text-xs transition-colors cursor-pointer flex items-center justify-center rounded-sm ${
                          sortBy === 'match'
                            ? 'bg-[#ff4d4d] text-white shadow-hard-sm font-bold'
                            : 'text-[#2d2d2d] hover:text-[#2d5da1]'
                        }`}
                      >
                        Match %
                      </button>
                      <button
                        type="button"
                        onClick={() => setSortBy('deadline')}
                        className={`min-h-[40px] px-3.5 py-1 font-marker text-xs transition-colors cursor-pointer flex items-center justify-center rounded-sm ${
                          sortBy === 'deadline'
                            ? 'bg-[#ff4d4d] text-white shadow-hard-sm font-bold'
                            : 'text-[#2d2d2d] hover:text-[#2d5da1]'
                        }`}
                      >
                        Deadline
                      </button>
                    </div>
                  </div>

                  {/* View Layout Switcher (Spacious vs Compact Grid) */}
                  <div className="flex items-center gap-2">
                    <span className="font-marker text-xs uppercase text-[#2d2d2d]/70">Layout:</span>
                    <div
                      className="flex bg-[#e5e0d8] p-1 border-2 border-[#2d2d2d] shadow-hard-sm"
                      style={{ borderRadius: WOBBLY_RADIUS.badge }}
                    >
                      <button
                        type="button"
                        onClick={() => setViewLayout('spacious')}
                        className={`min-h-[40px] px-3 py-1 font-marker text-xs transition-colors cursor-pointer flex items-center gap-1.5 rounded-sm ${
                          viewLayout === 'spacious'
                            ? 'bg-[#2d5da1] text-white shadow-hard-sm font-bold'
                            : 'text-[#2d2d2d] hover:text-[#2d5da1]'
                        }`}
                        title="Spacious 2-column view"
                      >
                        <Columns2 className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Spacious</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setViewLayout('compact')}
                        className={`min-h-[40px] px-3 py-1 font-marker text-xs transition-colors cursor-pointer flex items-center gap-1.5 rounded-sm ${
                          viewLayout === 'compact'
                            ? 'bg-[#2d5da1] text-white shadow-hard-sm font-bold'
                            : 'text-[#2d2d2d] hover:text-[#2d5da1]'
                        }`}
                        title="Compact 3-column grid"
                      >
                        <LayoutGrid className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Grid</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Opportunities Grid with Spacious Breathing Room */}
            {filteredOpportunities.length === 0 ? (
              <div
                className="p-12 text-center bg-white border-[3px] border-[#2d2d2d] shadow-hard-lg"
                style={{ borderRadius: WOBBLY_RADIUS.card }}
              >
                <Compass strokeWidth={2.5} className="w-10 h-10 text-[#2d2d2d]/40 mx-auto mb-2" />
                <h3 className="font-marker text-2xl text-[#2d2d2d]">
                  No programs match the current filters
                </h3>
                <p className="font-hand text-lg text-[#2d2d2d]/70 mt-1 max-w-sm mx-auto">
                  Try broadening your STEM discipline or clearing the filters to view all transatlantic opportunities.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setAgentMatchedIds(null);
                    setSelectedFieldFilter('all');
                    setSelectedGoalFilter('all');
                    setSelectedCountryFilter('all');
                  }}
                  className="btn-hand-drawn mt-4 px-5 py-2.5 bg-[#ff4d4d] text-white font-hand text-lg font-bold min-h-[48px]"
                  style={{ borderRadius: WOBBLY_RADIUS.button }}
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div
                className={
                  viewLayout === 'spacious'
                    ? 'grid grid-cols-1 lg:grid-cols-2 gap-7 sm:gap-8'
                    : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                }
              >
                {filteredOpportunities.map((opp) => (
                  <OpportunityCard
                    key={opp.id}
                    opportunity={opp}
                    profile={profile}
                    isHighlighted={agentMatchedIds?.includes(opp.id)}
                    onOpenLetterModal={(o) => setSelectedLetterOpp(o)}
                    onOpenSkillGapDrawer={(o) => setSelectedSkillGapOpp(o)}
                    onOpenDetailsModal={(o) => setSelectedDetailOpp(o)}
                  />
                ))}
              </div>
            )}
          </section>

          {/* Section Divider: Opportunities -> Pioneers & Academic Prep */}
          <div className="relative py-6 sm:py-8 select-none" aria-hidden="true">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-dashed border-[#2d2d2d]/25" />
            </div>
            <div className="relative flex justify-center">
              <div
                className="px-4 py-2 bg-[#fdfbf7] border-2 border-[#2d2d2d] shadow-hard-sm font-marker text-xs sm:text-sm text-[#2d2d2d] uppercase tracking-wide inline-flex items-center gap-2 -rotate-1"
                style={{ borderRadius: WOBBLY_RADIUS.badge }}
              >
                <Award className="w-4 h-4 text-[#ff4d4d]" />
                <span>Pioneers in STEM · Academic Preparation & Validation</span>
              </div>
            </div>
          </div>

          {/* Section 5: STEM Pioneers & Entrance Prep Hub (Two-Column Section) */}
          <section id="pioneers-prep" className="pt-2">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
              <div className="lg:col-span-6 h-full">
                <PioneersSection />
              </div>

              <div className="lg:col-span-6 h-full">
                <PrepHubSection />
              </div>
            </div>
          </section>

          {/* Section Divider: Pioneers/Prep -> WhatsApp Digest Simulator */}
          <div className="relative py-6 sm:py-8 select-none" aria-hidden="true">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-dashed border-[#2d2d2d]/25" />
            </div>
            <div className="relative flex justify-center">
              <div
                className="px-4 py-2 bg-[#fff9c4] border-2 border-[#2d2d2d] shadow-hard-sm font-marker text-xs sm:text-sm text-[#2d2d2d] uppercase tracking-wide inline-flex items-center gap-2 rotate-1"
                style={{ borderRadius: WOBBLY_RADIUS.badge }}
              >
                <MessageSquare className="w-4 h-4 text-[#2d5da1]" />
                <span>WhatsApp Newsletter</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: WhatsApp Weekly Digest Simulator */}
        <WhatsAppSimulator
          profile={profile}
          opportunities={OPPORTUNITIES}
          onSelectOpportunity={(id) => {
            const opp = OPPORTUNITIES.find((o) => o.id === id);
            if (opp) setSelectedDetailOpp(opp);
          }}
        />
      </main>

      {/* Hand-Drawn Footer with ELO Identity */}
      <footer className="w-full bg-[#fdfbf7] text-[#2d2d2d] py-8 border-t-[3px] border-[#2d2d2d] flex flex-col items-center justify-center gap-3 text-center px-4">
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 bg-[#fff9c4] border-2 border-[#2d2d2d] shadow-hard-xs flex items-center justify-center p-1"
            style={{ borderRadius: WOBBLY_RADIUS.badge }}
          >
            <img src={eloLogo} alt="ELO Logo" className="w-5 h-5 object-contain" />
          </div>
          <span className="font-marker text-xl font-bold text-[#2d2d2d]">ELO</span>
          <span className="font-hand text-base text-[#2d5da1] font-bold">
            · EUNICE, Latam, Opportunities
          </span>
        </div>
        <p className="font-hand text-sm sm:text-base text-[#2d2d2d]/75 max-w-lg leading-snug">
          Democratizing Transatlantic STEM research and academic mobility between Latin America and the 10 EUNICE European Universities.
        </p>

        {/* Reset preferences & re-do setup with 48px touch target */}
        <div className="pt-2">
          <button
            type="button"
            onClick={handleResetSetup}
            className="btn-hand-drawn min-h-[48px] px-5 py-2.5 bg-[#fff9c4] hover:bg-[#ff4d4d] hover:text-white text-[#2d2d2d] font-marker text-xs sm:text-sm font-bold inline-flex items-center justify-center gap-2 cursor-pointer -rotate-1 hover:rotate-0 transition-transform shadow-hard-sm"
            style={{ borderRadius: WOBBLY_RADIUS.button }}
            title="Reset all preferences and re-do the 3-step setup wizard"
            aria-label="Reset all preferences and re-do the 3-step setup wizard"
          >
            <RotateCcw strokeWidth={2.5} className="w-4 h-4 text-[#ff4d4d]" />
            <span>Reset & Re-do Setup</span>
          </button>
        </div>
      </footer>

      {/* Modals & Slide-over Drawers */}
      <SkillGapDrawer
        isOpen={Boolean(selectedSkillGapOpp)}
        onClose={() => setSelectedSkillGapOpp(null)}
        opportunity={selectedSkillGapOpp}
        profile={profile}
        onAcquireSkill={handleAcquireSkill}
      />

      <LetterOfIntentModal
        isOpen={Boolean(selectedLetterOpp)}
        onClose={() => setSelectedLetterOpp(null)}
        opportunity={selectedLetterOpp}
        profile={profile}
      />

      <OpportunityDetailModal
        isOpen={Boolean(selectedDetailOpp)}
        onClose={() => setSelectedDetailOpp(null)}
        opportunity={selectedDetailOpp}
        profile={profile}
        onOpenLetterModal={(o) => setSelectedLetterOpp(o)}
        onOpenSkillGapDrawer={(o) => setSelectedSkillGapOpp(o)}
      />
    </div>
  );
}
