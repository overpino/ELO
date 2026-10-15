import React from 'react';
import { Opportunity, StudentProfile } from '../types';
import { UNIVERSITIES } from '../data/universities';
import {
  Clock,
  Languages,
  Banknote,
  ArrowRight,
  GraduationCap,
} from 'lucide-react';
import { TapeStrip } from './ui/HandDrawnPrimitives';
import { WOBBLY_RADIUS } from '../theme/handDrawnTokens';

interface OpportunityCardProps {
  opportunity: Opportunity;
  profile: StudentProfile;
  isHighlighted?: boolean;
  onOpenLetterModal: (opp: Opportunity) => void;
  onOpenSkillGapDrawer: (opp: Opportunity) => void;
  onOpenDetailsModal: (opp: Opportunity) => void;
}

export const OpportunityCard: React.FC<OpportunityCardProps> = ({
  opportunity,
  profile,
  isHighlighted = false,
  onOpenDetailsModal,
}) => {
  const university = UNIVERSITIES.find((u) => u.id === opportunity.universityId);

  let calculatedScore = opportunity.matchScore;
  if (profile.field === opportunity.field) calculatedScore = Math.min(99, calculatedScore + 2);
  if (profile.goals && profile.goals.includes(opportunity.goal)) {
    calculatedScore = Math.min(99, calculatedScore + 2);
  } else if (profile.goal === opportunity.goal) {
    calculatedScore = Math.min(99, calculatedScore + 2);
  } else if (profile.isLurking) {
    calculatedScore = Math.min(99, calculatedScore + 1);
  }
  if (profile.acquiredSkills?.includes(opportunity.skillsAnalysis.gapSkill)) {
    calculatedScore = 99;
  }

  // Domain badge colors for visual diversity
  const getFieldColor = (field: string) => {
    switch (field) {
      case 'Computer Science & AI':
        return 'bg-[#e3f2fd] text-[#1565c0] border-[#1565c0]/40';
      case 'Robotics & Mechatronics':
        return 'bg-[#f3e5f5] text-[#7b1fa2] border-[#7b1fa2]/40';
      case 'Biotechnology & Bioinformatics':
        return 'bg-[#e8f5e9] text-[#2e7d32] border-[#2e7d32]/40';
      case 'Renewable Energy & Materials':
        return 'bg-[#fffde7] text-[#f57f17] border-[#f57f17]/40';
      case 'Agritech & Food Engineering':
        return 'bg-[#efebe9] text-[#4e342e] border-[#4e342e]/40';
      case 'Cybersecurity & Quantum':
        return 'bg-[#e0f2f1] text-[#00695c] border-[#00695c]/40';
      default:
        return 'bg-[#fff9c4] text-[#2d2d2d] border-[#2d2d2d]/30';
    }
  };

  return (
    <article
      id={opportunity.id}
      onClick={() => onOpenDetailsModal(opportunity)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpenDetailsModal(opportunity);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${opportunity.title}`}
      className={`relative bg-white border-[3px] border-[#2d2d2d] transition-all duration-150 flex flex-col justify-between cursor-pointer group p-6 sm:p-7 ${
        isHighlighted
          ? 'shadow-hard-lg ring-3 ring-[#ff4d4d]/30 bg-[#fffdf5]'
          : 'shadow-hard hover:shadow-hard-lg'
      }`}
      style={{ borderRadius: WOBBLY_RADIUS.card }}
    >
      {/* Top Tape decoration - safely centered */}
      <TapeStrip className="-top-3.5 left-1/2 -translate-x-1/2 -rotate-1" />

      {/* Main card body with generous breathing room from sketchy border */}
      <div className="space-y-4">
        {/* Row 1: University Identity + Domain Pill + Match Stamp */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          {/* Institution badge & name */}
          <div className="flex items-center gap-2.5 min-w-0">
            <span
              className="w-10 h-10 bg-[#fff9c4] border-2 border-[#2d2d2d] shadow-hard-sm flex items-center justify-center font-marker text-xs font-bold text-[#2d2d2d] shrink-0"
              style={{ borderRadius: WOBBLY_RADIUS.circle }}
            >
              {university?.countryCode || 'EU'}
            </span>
            <div className="min-w-0">
              <div className="font-marker text-sm sm:text-base text-[#2d2d2d] truncate">
                {university?.name || opportunity.hostCountry}
              </div>
              <div className="font-hand text-xs sm:text-sm text-[#2d2d2d]/70 flex items-center gap-1.5">
                <span>{opportunity.hostCountry}</span>
                <span aria-hidden="true" className="text-[#2d2d2d]/40">·</span>
                <span className="truncate">{opportunity.department}</span>
              </div>
            </div>
          </div>

          {/* Right badges: Category Tag + Match Score (safely wrapped, never overflows card border) */}
          <div className="flex flex-wrap items-center sm:justify-end gap-2 max-w-full">
            <span
              className={`inline-block px-2.5 py-1 font-marker text-xs border rounded-md shadow-xs max-w-full truncate ${getFieldColor(
                opportunity.field
              )}`}
              title={opportunity.field}
            >
              {opportunity.field}
            </span>

            <span
              className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#ff4d4d] text-white border-2 border-[#2d2d2d] shadow-hard-sm font-marker text-xs sm:text-sm font-bold shrink-0"
              style={{ borderRadius: WOBBLY_RADIUS.badge }}
            >
              {calculatedScore}% Match
            </span>
          </div>
        </div>

        {/* Opportunity Title */}
        <div>
          <h3 className="text-xl sm:text-2xl font-marker text-[#2d2d2d] leading-snug group-hover:text-[#2d5da1] transition-colors">
            {opportunity.title}
          </h3>
        </div>

        {/* Highlighted Funding / Stipend Banner */}
        <div
          className="p-3 sm:p-3.5 bg-[#fdfbf7] border-2 border-[#2d2d2d]/30 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-xs"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#c8f7c5] border border-[#2d2d2d] flex items-center justify-center shrink-0">
              <Banknote className="w-4 h-4 text-[#2d2d2d]" />
            </div>
            <div>
              <span className="font-marker text-sm sm:text-base text-[#2d5da1] block">
                {opportunity.stipendAmount}
              </span>
              <span className="font-hand text-xs text-[#2d2d2d]/70 block">
                {opportunity.stipendType}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-hand text-[#2d2d2d]/70 shrink-0 self-start sm:self-center">
            <GraduationCap className="w-4 h-4 text-[#2d5da1]" />
            <span>{opportunity.goal}</span>
          </div>
        </div>

        {/* Opportunity Description / Snapshot */}
        <p className="font-hand text-base sm:text-lg text-[#2d2d2d]/85 leading-relaxed">
          {opportunity.snapshot}
        </p>

        {/* Key Competencies / Skills Tags */}
        {opportunity.skillsAnalysis?.matchedPrerequisites?.length > 0 && (
          <div className="flex items-center gap-1.5 flex-wrap pt-1">
            <span className="font-marker text-xs text-[#2d2d2d]/50 uppercase mr-1">Skills:</span>
            {opportunity.skillsAnalysis.matchedPrerequisites.slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="font-hand text-xs px-2.5 py-0.5 bg-[#f5f2eb] border border-[#2d2d2d]/25 text-[#2d2d2d] rounded-sm"
              >
                ✓ {skill}
              </span>
            ))}
            {opportunity.skillsAnalysis.gapSkill && (
              <span className="font-hand text-xs px-2.5 py-0.5 bg-[#fff9c4] border border-[#2d2d2d]/30 text-[#2d2d2d] font-bold rounded-sm">
                + Bridge: {opportunity.skillsAnalysis.gapSkill}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Spacious Footer Action Bar - Cleanly contained inside card border */}
      <div className="mt-5 pt-4 border-t-2 border-dashed border-[#2d2d2d]/20 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-between gap-3 font-hand min-w-0">
        {/* Indicators: Countdown & Language */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs sm:text-sm text-[#2d2d2d]/80 min-w-0 flex-1">
          <div className="flex items-center gap-1.5 shrink-0">
            <Clock strokeWidth={2.5} className="w-4 h-4 text-[#ff4d4d] shrink-0" />
            <span className="font-bold text-[#2d2d2d]">
              {opportunity.deadlineCountdownDays} days left
            </span>
            <span className="text-xs text-[#2d2d2d]/60 font-mono">
              ({opportunity.deadlineDate})
            </span>
          </div>

          <div
            className="flex items-center gap-1.5 min-w-0 max-w-full"
            title={opportunity.languageRequirement}
          >
            <Languages strokeWidth={2.5} className="w-4 h-4 text-[#2d5da1] shrink-0" />
            <span className="truncate max-w-[140px] sm:max-w-[170px] lg:max-w-[190px]">
              {opportunity.languageRequirement}
            </span>
          </div>
        </div>

        {/* Call to action button - cleanly contained within the card div */}
        <div className="shrink-0 w-full sm:w-auto flex justify-stretch sm:justify-end min-w-0">
          <div
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#fff9c4] group-hover:bg-[#ff4d4d] group-hover:text-white text-[#2d2d2d] font-marker text-xs sm:text-sm border-2 border-[#2d2d2d] shadow-hard-sm transition-colors rounded-sm min-h-[44px]"
          >
            <span>View Details & Apply</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform shrink-0" />
          </div>
        </div>
      </div>
    </article>
  );
};

