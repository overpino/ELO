import React, { useState } from 'react';
import { Opportunity, StudentProfile } from '../types';
import {
  X,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  BookOpen,
  Award,
} from 'lucide-react';
import {
  TapeStrip,
  Thumbtack,
  HandDrawnButton,
  DoodleSquiggle,
} from './ui/HandDrawnPrimitives';
import { WOBBLY_RADIUS } from '../theme/handDrawnTokens';

interface SkillGapDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  opportunity: Opportunity | null;
  profile: StudentProfile;
  onAcquireSkill: (skillName: string) => void;
}

export const SkillGapDrawer: React.FC<SkillGapDrawerProps> = ({
  isOpen,
  onClose,
  opportunity,
  profile,
  onAcquireSkill,
}) => {
  const [hasCompletedBridge, setHasCompletedBridge] = useState(false);

  if (!isOpen || !opportunity) return null;

  const { skillsAnalysis } = opportunity;
  const isSkillAlreadyAcquired =
    hasCompletedBridge || profile.acquiredSkills?.includes(skillsAnalysis.gapSkill);

  const handleCompleteBridge = () => {
    setHasCompletedBridge(true);
    onAcquireSkill(skillsAnalysis.gapSkill);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden select-none">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#2d2d2d]/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10 w-full sm:w-auto">
        <div className="w-full sm:w-screen sm:max-w-xl bg-[#fdfbf7] shadow-hard-lg flex flex-col border-l-0 sm:border-l-[3px] border-[#2d2d2d]">
          {/* Drawer Header */}
          <div className="p-4 sm:p-6 border-b-2 border-[#2d2d2d] bg-white flex items-start justify-between gap-3 relative">
            <TapeStrip className="-top-3 left-1/4 -rotate-2" />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 font-marker text-xs text-[#2d5da1] mb-1">
                <span>SKETCHBOOK SKILL-GAP ENGINE</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-marker text-[#2d2d2d] leading-tight">
                {opportunity.title}
              </h2>
              <p className="font-hand text-sm sm:text-base text-[#2d2d2d]/70 mt-1">
                {opportunity.department} · {opportunity.hostCountry}
              </p>
            </div>

            <button
              onClick={onClose}
              className="min-w-[48px] min-h-[48px] flex items-center justify-center text-[#2d2d2d] hover:text-[#ff4d4d] border-2 border-[#2d2d2d] shadow-hard-sm hover:rotate-6 bg-white transition-transform cursor-pointer shrink-0"
              style={{ borderRadius: WOBBLY_RADIUS.button }}
              aria-label="Close skill-gap drawer"
            >
              <X strokeWidth={2.5} className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body: Roadmap View */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Status Post-it Card */}
            <div
              className={`p-4 border-2 border-[#2d2d2d] shadow-hard flex items-center justify-between gap-4 -rotate-1 ${
                isSkillAlreadyAcquired
                  ? 'bg-[#c8f7c5]'
                  : 'bg-[#fff9c4]'
              }`}
              style={{ borderRadius: WOBBLY_RADIUS.card }}
            >
              <div>
                <span className="font-marker text-xs uppercase tracking-wider block text-[#2d2d2d]">
                  {isSkillAlreadyAcquired ? 'Readiness Status: 99% Verified!' : 'Readiness Status: Bridge Recommended'}
                </span>
                <p className="font-hand text-base text-[#2d2d2d] mt-0.5">
                  {isSkillAlreadyAcquired
                    ? 'All academic prerequisites verified! Ready for laboratory dispatch.'
                    : '1 skill gap detected. Bridge module available in open-access below.'}
                </p>
              </div>

              <div className="text-right shrink-0">
                <span className="text-3xl font-marker font-bold text-[#ff4d4d]">
                  {isSkillAlreadyAcquired ? '99%' : `${opportunity.matchScore}%`}
                </span>
                <span className="block font-hand text-xs text-[#2d2d2d]/70">
                  Fit Score
                </span>
              </div>
            </div>

            {/* 1. Requirements Checklist */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-marker text-base uppercase text-[#2d2d2d]">
                  Verified Academic Pre-requisites
                </h3>
                <span className="font-hand text-sm text-[#2d5da1] font-bold">
                  {skillsAnalysis.matchedPrerequisites.length} / {skillsAnalysis.matchedPrerequisites.length} Passed
                </span>
              </div>

              <div className="space-y-2">
                {skillsAnalysis.matchedPrerequisites.map((req, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white border-2 border-[#2d2d2d] shadow-hard-sm flex items-center justify-between gap-3"
                    style={{ borderRadius: WOBBLY_RADIUS.badge }}
                  >
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 strokeWidth={3} className="w-5 h-5 text-[#2d5da1] shrink-0" />
                      <span className="font-hand text-lg text-[#2d2d2d]">
                        {req}
                      </span>
                    </div>
                    <span className="font-hand text-xs font-bold px-2 py-0.5 bg-[#e5e0d8] text-[#2d2d2d] border border-[#2d2d2d]">
                      Transcript Match
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Identified Gap: Missing Skill in Amber / Post-it */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-marker text-base uppercase text-[#ff4d4d]">
                  Identified Skill Gap
                </h3>
                <span className="font-hand text-sm text-[#ff4d4d] font-bold">
                  {isSkillAlreadyAcquired ? 'Resolved' : '1 Missing Competency'}
                </span>
              </div>

              <div
                className="p-4 bg-[#fff9c4] border-2 border-[#2d2d2d] shadow-hard rotate-1"
                style={{ borderRadius: WOBBLY_RADIUS.card }}
              >
                <div className="flex items-start gap-3">
                  <AlertCircle strokeWidth={2.5} className="w-6 h-6 text-[#ff4d4d] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-marker text-lg text-[#2d2d2d]">
                      {skillsAnalysis.gapSkill}
                    </h4>
                    <p className="font-hand text-base text-[#2d2d2d]/80 mt-1 leading-snug">
                      {skillsAnalysis.gapDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Actionable Bridge Card */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-marker text-base uppercase text-[#2d2d2d]">
                  Recommended Bridge Module
                </h3>
                <span className="font-hand text-sm text-[#2d2d2d]/70 font-mono">
                  {skillsAnalysis.bridgeDuration}
                </span>
              </div>

              <div
                className="p-5 bg-white border-[3px] border-[#2d2d2d] shadow-hard-lg relative -rotate-1"
                style={{ borderRadius: WOBBLY_RADIUS.card }}
              >
                <TapeStrip className="-top-3 left-1/3 -rotate-2" />

                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 bg-[#e5e0d8] border border-[#2d2d2d] font-hand text-sm text-[#2d2d2d] mb-2">
                  <BookOpen strokeWidth={2.5} className="w-3.5 h-3.5 text-[#2d5da1]" />
                  <span>{skillsAnalysis.bridgeProvider}</span>
                </div>

                <h4 className="font-marker text-xl text-[#2d2d2d] mb-2 leading-snug">
                  {skillsAnalysis.bridgeTitle}
                </h4>

                <p className="font-hand text-base text-[#2d2d2d]/80 mb-4 leading-relaxed">
                  Designed collaboratively by UFV and EUNICE faculty to accelerate laboratory readiness prior to departure.
                </p>

                {/* Syllabus Highlights */}
                <div
                  className="space-y-1.5 mb-5 bg-[#fdfbf7] p-3.5 border-2 border-dashed border-[#2d2d2d]"
                  style={{ borderRadius: WOBBLY_RADIUS.badge }}
                >
                  <span className="font-marker text-xs uppercase text-[#2d5da1] block mb-1">
                    Syllabus Checklist:
                  </span>
                  {skillsAnalysis.bridgeTopics.map((topic, i) => (
                    <div key={i} className="font-hand text-base text-[#2d2d2d] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#ff4d4d]" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>

                {/* Bridge Actions */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  {isSkillAlreadyAcquired ? (
                    <div className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[48px] bg-[#c8f7c5] border-2 border-[#2d2d2d] text-[#2d2d2d] font-marker text-sm font-bold shadow-hard-sm">
                      <Award strokeWidth={2.5} className="w-5 h-5 text-[#2d5da1]" />
                      <span>Competency Mastered (99% Match Verified)</span>
                    </div>
                  ) : (
                    <>
                      <HandDrawnButton
                        type="button"
                        variant="accent"
                        size="md"
                        onClick={handleCompleteBridge}
                        className="w-full sm:w-auto min-h-[48px]"
                      >
                        <Award strokeWidth={2.5} className="w-5 h-5" />
                        <span>Simulate Completion & Recalculate (99%)</span>
                      </HandDrawnButton>

                      <a
                        href="https://eunice-university.eu/courses/"
                        target="_blank"
                        rel="noreferrer"
                        className="font-hand text-base text-[#2d5da1] hover:underline inline-flex items-center justify-center gap-1.5 min-h-[48px] px-3 py-2"
                      >
                        <span>Open Course Portal</span>
                        <ExternalLink strokeWidth={2.5} className="w-4 h-4" />
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Drawer Footer */}
          <div className="p-4 border-t-2 border-[#2d2d2d] bg-white flex items-center justify-between gap-3">
            <span className="font-hand text-xs sm:text-sm text-[#2d2d2d]/70">
              30 ECTS Academic Transfer Convalidation
            </span>
            <HandDrawnButton variant="sketch" size="sm" onClick={onClose} className="min-h-[48px] px-5">
              Done
            </HandDrawnButton>
          </div>
        </div>
      </div>
    </div>
  );
};
