import React, { useState } from 'react';
import { Opportunity, StudentProfile } from '../types';
import { UNIVERSITIES } from '../data/universities';
import {
  X,
  Copy,
  Check,
  Download,
  FileText,
  Lightbulb,
} from 'lucide-react';
import {
  TapeStrip,
  Thumbtack,
  HandDrawnButton,
} from './ui/HandDrawnPrimitives';
import { WOBBLY_RADIUS } from '../theme/handDrawnTokens';

interface LetterOfIntentModalProps {
  isOpen: boolean;
  onClose: () => void;
  opportunity: Opportunity | null;
  profile: StudentProfile;
}

export const LetterOfIntentModal: React.FC<LetterOfIntentModalProps> = ({
  isOpen,
  onClose,
  opportunity,
  profile,
}) => {
  if (!isOpen || !opportunity) return null;

  const homeUni = UNIVERSITIES.find((u) => u.id === profile.universityId);
  const hostUni = UNIVERSITIES.find((u) => u.id === opportunity.universityId);
  const studentName = profile.studentName || 'STEM Scholar';

  const initialBody = opportunity.letterOfIntentTemplate.body
    .replaceAll('[Student Name]', studentName)
    .replaceAll('[Nome do Estudante]', studentName)
    .replaceAll('[Home Institution]', homeUni?.name || 'Universidade Federal de Viçosa')
    .replaceAll(
      'our EUNICE-UFV bilateral framework',
      `the bilateral partnership between ${homeUni?.shortName || 'UFV'} and ${hostUni?.shortName || opportunity.hostCountry}`
    );

  const [letterBody, setLetterBody] = useState(initialBody);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(letterBody);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([letterBody], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `Letter_of_Intent_${opportunity.id}_${studentName.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto select-none">
      <div
        className="fixed inset-0 bg-[#2d2d2d]/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-2 sm:p-6 text-center">
        <div
          className="w-full max-w-3xl transform overflow-hidden bg-white text-left align-middle border-[3px] border-[#2d2d2d] shadow-hard-lg relative -rotate-1"
          style={{ borderRadius: WOBBLY_RADIUS.card }}
        >
          {/* Top Tape decoration */}
          <TapeStrip className="-top-3 left-1/3 -rotate-2" />
          <TapeStrip className="-top-3 right-1/3 rotate-3" />

          {/* Header */}
          <div className="p-4 sm:p-6 border-b-2 border-[#2d2d2d] bg-[#fdfbf7] flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 font-marker text-xs text-[#2d5da1] mb-1">
                <FileText strokeWidth={2.5} className="w-4 h-4" />
                <span>OFFICIAL LETTER OF INTENT SKETCHPAD</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-marker text-[#2d2d2d] leading-tight">
                Motivation Letter for {opportunity.title}
              </h3>
              <p className="font-hand text-sm sm:text-base text-[#2d2d2d]/70 mt-1">
                To: {opportunity.facultyMentor} · {opportunity.department} ({opportunity.hostCountry})
              </p>
            </div>

            <button
              onClick={onClose}
              className="min-w-[48px] min-h-[48px] flex items-center justify-center text-[#2d2d2d] hover:text-[#ff4d4d] border-2 border-[#2d2d2d] shadow-hard-sm bg-white transition-transform hover:rotate-6 cursor-pointer shrink-0"
              style={{ borderRadius: WOBBLY_RADIUS.button }}
              aria-label="Close letter modal"
            >
              <X strokeWidth={2.5} className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 space-y-5 bg-[#fdfbf7]">
            {/* Suggested Talking Points in Post-It Yellow */}
            <div
              className="p-4 bg-[#fff9c4] border-2 border-[#2d2d2d] shadow-hard-sm rotate-1"
              style={{ borderRadius: WOBBLY_RADIUS.card }}
            >
              <div className="flex items-start gap-2.5">
                <Lightbulb strokeWidth={2.5} className="w-5 h-5 text-[#2d5da1] shrink-0 mt-0.5" />
                <div>
                  <span className="font-marker text-xs uppercase text-[#2d2d2d] block mb-1">
                    Key Strengths to Highlight to the Review Committee:
                  </span>
                  <div className="flex flex-wrap gap-2 pt-0.5">
                    {opportunity.letterOfIntentTemplate.suggestedFocus.map((focus, i) => (
                      <span
                        key={i}
                        className="font-hand text-base bg-white text-[#2d2d2d] px-2.5 py-0.5 border border-[#2d2d2d] shadow-hard-sm font-bold"
                      >
                        ✓ {focus}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Editable Letter Canvas with Ruled Paper feel */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="font-marker text-xs uppercase text-[#2d2d2d]">
                  Live Editable Draft
                </label>
                <span className="font-mono text-xs text-[#2d2d2d]/60">
                  {letterBody.split(/\s+/).filter(Boolean).length} words
                </span>
              </div>

              <textarea
                value={letterBody}
                onChange={(e) => setLetterBody(e.target.value)}
                rows={12}
                className="w-full p-4 font-hand text-xl text-[#2d2d2d] bg-white border-2 border-[#2d2d2d] shadow-hard-sm focus:border-[#2d5da1] focus:outline-hidden leading-relaxed resize-y"
                style={{
                  borderRadius: WOBBLY_RADIUS.input,
                  lineHeight: '1.6',
                }}
              />
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-4 bg-white border-t-2 border-[#2d2d2d] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <span className="font-hand text-xs sm:text-sm text-[#2d2d2d]/70 text-center sm:text-left">
              Ready for dispatch to EUNICE-UFV Mobility Committee
            </span>

            <div className="grid grid-cols-1 xs:grid-cols-2 sm:flex sm:items-center gap-2.5">
              <HandDrawnButton
                type="button"
                variant="sketch"
                size="md"
                onClick={handleCopy}
                className="min-h-[48px] px-4 py-2.5"
              >
                {copied ? (
                  <>
                    <Check strokeWidth={3} className="w-4 h-4 text-[#2d5da1]" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy strokeWidth={2.5} className="w-4 h-4" />
                    <span>Copy Draft</span>
                  </>
                )}
              </HandDrawnButton>

              <HandDrawnButton
                type="button"
                variant="accent"
                size="md"
                onClick={handleDownload}
                className="min-h-[48px] px-4 py-2.5"
              >
                <Download strokeWidth={2.5} className="w-4 h-4" />
                <span>Download (.txt)</span>
              </HandDrawnButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
