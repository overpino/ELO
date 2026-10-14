import React from 'react';
import { Opportunity, StudentProfile } from '../types';
import { UNIVERSITIES } from '../data/universities';
import {
  X,
  FileText,
  GitBranch,
  ExternalLink,
  Users,
} from 'lucide-react';
import {
  TapeStrip,
  HandDrawnButton,
} from './ui/HandDrawnPrimitives';
import { WOBBLY_RADIUS } from '../theme/handDrawnTokens';

interface OpportunityDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  opportunity: Opportunity | null;
  profile: StudentProfile;
  onOpenLetterModal: (opp: Opportunity) => void;
  onOpenSkillGapDrawer: (opp: Opportunity) => void;
}

export const OpportunityDetailModal: React.FC<OpportunityDetailModalProps> = ({
  isOpen,
  onClose,
  opportunity,
  profile,
  onOpenLetterModal,
  onOpenSkillGapDrawer,
}) => {
  if (!isOpen || !opportunity) return null;

  const uni = UNIVERSITIES.find((u) => u.id === opportunity.universityId);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto select-none">
      <div
        className="fixed inset-0 bg-[#2d2d2d]/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-2 sm:p-6 text-center">
        <div
          className="w-full max-w-2xl transform overflow-hidden bg-white text-left align-middle border-[3px] border-[#2d2d2d] shadow-hard-lg relative -rotate-1"
          style={{ borderRadius: WOBBLY_RADIUS.card }}
        >
          <TapeStrip className="-top-3 left-1/3 -rotate-2" />

          {/* Header */}
          <div className="p-4 sm:p-6 bg-[#fdfbf7] border-b-2 border-[#2d2d2d] flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 font-marker text-xs text-[#2d5da1] mb-1">
                <span>OFFICIAL VERIFIED MOBILITY CALL</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-marker text-[#2d2d2d] leading-tight">
                {opportunity.title}
              </h3>
              <p className="font-hand text-sm sm:text-base text-[#2d2d2d]/70 mt-1">
                {uni?.name} ({opportunity.hostCountry}) · {opportunity.department}
              </p>
            </div>

            <button
              onClick={onClose}
              className="min-w-[48px] min-h-[48px] flex items-center justify-center text-[#2d2d2d] hover:text-[#ff4d4d] border-2 border-[#2d2d2d] shadow-hard-sm bg-white hover:rotate-6 transition-transform cursor-pointer shrink-0"
              style={{ borderRadius: WOBBLY_RADIUS.button }}
              aria-label="Close opportunity details modal"
            >
              <X strokeWidth={2.5} className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 space-y-5 bg-[#fdfbf7]">
            {/* Quick Metrics in Post-It Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div
                className="p-3 bg-[#fff9c4] border-2 border-[#2d2d2d] shadow-hard-sm rotate-1"
                style={{ borderRadius: WOBBLY_RADIUS.card }}
              >
                <span className="block font-marker text-xs text-[#2d2d2d]/70 uppercase">
                  Funding
                </span>
                <span className="font-marker text-lg text-[#2d5da1]">
                  {opportunity.stipendAmount.split('/')[0]}
                </span>
              </div>

              <div
                className="p-3 bg-white border-2 border-[#2d2d2d] shadow-hard-sm -rotate-1"
                style={{ borderRadius: WOBBLY_RADIUS.card }}
              >
                <span className="block font-marker text-xs text-[#2d2d2d]/70 uppercase">
                  Deadline
                </span>
                <span className="font-marker text-base text-[#2d2d2d]">
                  {opportunity.deadlineDate}
                </span>
              </div>

              <div
                className="p-3 bg-white border-2 border-[#2d2d2d] shadow-hard-sm rotate-1"
                style={{ borderRadius: WOBBLY_RADIUS.card }}
              >
                <span className="block font-marker text-xs text-[#2d2d2d]/70 uppercase">
                  Language
                </span>
                <span className="font-marker text-sm text-[#2d2d2d] truncate block">
                  {opportunity.languageRequirement.split('(')[0]}
                </span>
              </div>

              <div
                className="p-3 bg-[#c8f7c5] border-2 border-[#2d2d2d] shadow-hard-sm -rotate-1"
                style={{ borderRadius: WOBBLY_RADIUS.card }}
              >
                <span className="block font-marker text-xs text-[#2d2d2d]/70 uppercase">
                  Open Slots
                </span>
                <span className="font-marker text-lg text-[#2d2d2d]">
                  {opportunity.openSlots} Available
                </span>
              </div>
            </div>

            {/* Snapshot */}
            <div>
              <h4 className="font-marker text-xs uppercase text-[#2d2d2d] mb-1">
                Program Scope & Laboratory Research
              </h4>
              <p className="font-hand text-lg text-[#2d2d2d] leading-relaxed">
                {opportunity.snapshot}
              </p>
            </div>

            {/* Research Group & Supervision */}
            <div
              className="p-4 bg-white border-2 border-[#2d2d2d] shadow-hard-sm space-y-1.5"
              style={{ borderRadius: WOBBLY_RADIUS.card }}
            >
              <div className="flex items-center gap-2 font-marker text-sm text-[#2d2d2d]">
                <Users strokeWidth={2.5} className="w-4 h-4 text-[#2d5da1]" />
                <span>Supervision & Research Unit</span>
              </div>
              <div className="font-hand text-base text-[#2d2d2d]/80 space-y-1">
                <div>
                  <span className="font-bold text-[#2d2d2d]">Lab: </span>
                  {opportunity.researchGroup}
                </div>
                <div>
                  <span className="font-bold text-[#2d2d2d]">Lead Faculty: </span>
                  {opportunity.facultyMentor}
                </div>
                <div>
                  <span className="font-bold text-[#2d2d2d]">Grant Framework: </span>
                  {opportunity.stipendType}
                </div>
              </div>
            </div>

            {/* University Portal Link */}
            {uni && (
              <div className="font-hand text-base text-[#2d2d2d]/70 border-t-2 border-dashed border-[#2d2d2d]/30 pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span>Institution: {uni.name} ({uni.city})</span>
                <a
                  href={uni.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#2d5da1] hover:underline font-bold inline-flex items-center gap-1.5 min-h-[44px] py-1"
                >
                  <span>Official University Portal</span>
                  <ExternalLink strokeWidth={2.5} className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="p-4 bg-white border-t-2 border-[#2d2d2d] flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2.5">
            <HandDrawnButton
              type="button"
              variant="secondary"
              size="md"
              onClick={() => {
                onClose();
                onOpenSkillGapDrawer(opportunity);
              }}
              className="min-h-[48px] px-4 py-2.5"
            >
              <GitBranch strokeWidth={2.5} className="w-4 h-4 text-[#ff4d4d]" />
              <span>Skill Gap</span>
            </HandDrawnButton>

            <HandDrawnButton
              type="button"
              variant="accent"
              size="md"
              onClick={() => {
                onClose();
                onOpenLetterModal(opportunity);
              }}
              className="min-h-[48px] px-4 py-2.5"
            >
              <FileText strokeWidth={2.5} className="w-4 h-4" />
              <span>Draft Letter of Intent</span>
            </HandDrawnButton>
          </div>
        </div>
      </div>
    </div>
  );
};
