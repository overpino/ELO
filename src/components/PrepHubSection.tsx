import React, { useState } from 'react';
import { PREP_GUIDES, convertBrazilianGrade } from '../data/prepGuides';
import {
  FileDown,
  Calculator,
  CheckCircle2,
  Scale,
} from 'lucide-react';
import {
  TapeStrip,
  Thumbtack,
  HandDrawnButton,
} from './ui/HandDrawnPrimitives';
import { WOBBLY_RADIUS } from '../theme/handDrawnTokens';

export const PrepHubSection: React.FC = () => {
  const [brazilianGradeInput, setBrazilianGradeInput] = useState<number>(85);
  const [downloadSuccessToast, setDownloadSuccessToast] = useState<string | null>(null);

  const conversion = convertBrazilianGrade(brazilianGradeInput);

  const handleSimulateDownload = (guideTitle: string, format: string) => {
    const content = `ELO (EUNICE, LATAM, OPPORTUNITIES) TRANSATLANTIC MOBILITY GUIDE
Document: ${guideTitle}
Alliance: ELO Transatlantic Alliance — Universidade Federal de Viçosa (Brazil/Latam) & 10 EUNICE European Universities
Status: Verified Official Accreditation Document 2026/2027
Prerequisites & European Credit Framework: 30 ECTS recognized per semester.
Consular Visa Code: Long-Stay Academic Research (Type D / VITEM IV)
Download Timestamp: ${new Date().toISOString()}`;

    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `${guideTitle.toLowerCase().replace(/[^a-z0-9]/g, '_')}.${format.toLowerCase().includes('zip') ? 'zip' : 'pdf'}`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    setDownloadSuccessToast(guideTitle);
    setTimeout(() => setDownloadSuccessToast(null), 3000);
  };

  return (
    <div
      id="prep-hub"
      className="bg-white p-5 sm:p-6 border-[3px] border-[#2d2d2d] shadow-hard flex flex-col justify-between h-full relative rotate-1 select-none"
      style={{ borderRadius: WOBBLY_RADIUS.card }}
    >
      <TapeStrip className="-top-3 right-1/4 rotate-2" />

      <div>
        {/* Header */}
        <div className="flex items-center gap-2.5 mb-4">
          <div
            className="w-9 h-9 bg-[#c8f7c5] border-2 border-[#2d2d2d] shadow-hard-sm text-[#2d2d2d] flex items-center justify-center font-marker text-sm -rotate-2"
            style={{ borderRadius: WOBBLY_RADIUS.button }}
          >
            <Scale strokeWidth={2.5} className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-marker text-2xl text-[#2d2d2d]">
              Entrance Prep Hub
            </h3>
            <p className="font-hand text-base text-[#2d2d2d]/70">
              Syllabus Guides, Exam Repositories & ECTS Converter
            </p>
          </div>
        </div>

        {/* 1. Interactive Grade Converter: ENEM / Brazilian CR to ECTS */}
        <div
          className="p-4 bg-[#fdfbf7] border-2 border-[#2d2d2d] shadow-hard mb-5 -rotate-1"
          style={{ borderRadius: WOBBLY_RADIUS.card }}
        >
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="brazilian-grade-slider" className="font-marker text-xs uppercase text-[#2d2d2d] flex items-center gap-1.5 cursor-pointer">
              <Calculator strokeWidth={2.5} className="w-4 h-4 text-[#2d5da1]" />
              <span>Grade Equivalency Ruler</span>
            </label>
            <span className="font-marker text-sm text-[#ff4d4d] font-bold">
              CR: {brazilianGradeInput} / 100
            </span>
          </div>

          <div className="mb-3 py-1">
            <input
              id="brazilian-grade-slider"
              type="range"
              min="50"
              max="100"
              value={brazilianGradeInput}
              onChange={(e) => setBrazilianGradeInput(Number(e.target.value))}
              className="w-full h-3 bg-[#e5e0d8] border border-[#2d2d2d] rounded-lg appearance-none cursor-pointer accent-[#ff4d4d] touch-pan-x"
              aria-label="Brazilian academic cumulative grade slider"
            />
            <div className="flex justify-between font-hand text-[11px] sm:text-xs text-[#2d2d2d]/70 mt-1">
              <span>Pass (50-60)</span>
              <span>Average (70-79)</span>
              <span>Honors (80-89)</span>
              <span>Summa (90-100)</span>
            </div>
          </div>

          {/* Results Grid in Post-It / Paper blocks */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t-2 border-dashed border-[#2d2d2d]/20 text-center">
            <div
              className="p-2 bg-white border-2 border-[#2d2d2d] shadow-hard-sm rotate-1"
              style={{ borderRadius: WOBBLY_RADIUS.badge }}
            >
              <span className="block font-hand text-xs text-[#2d2d2d]/60">ECTS</span>
              <span className="font-marker text-sm font-bold text-[#2d5da1]">
                {conversion.ectsGrade.split(' ')[0]}
              </span>
            </div>

            <div
              className="p-2 bg-white border-2 border-[#2d2d2d] shadow-hard-sm -rotate-1"
              style={{ borderRadius: WOBBLY_RADIUS.badge }}
            >
              <span className="block font-hand text-xs text-[#2d2d2d]/60">Germany</span>
              <span className="font-marker text-sm font-bold text-[#2d2d2d]">
                {conversion.germanGrade.split(' ')[0]}
              </span>
            </div>

            <div
              className="p-2 bg-white border-2 border-[#2d2d2d] shadow-hard-sm rotate-1"
              style={{ borderRadius: WOBBLY_RADIUS.badge }}
            >
              <span className="block font-hand text-xs text-[#2d2d2d]/60">Italy (30L)</span>
              <span className="font-marker text-sm font-bold text-[#2d2d2d]">
                {conversion.italianGrade.split('/')[0]}
              </span>
            </div>

            <div
              className="p-2 bg-white border-2 border-[#2d2d2d] shadow-hard-sm -rotate-1"
              style={{ borderRadius: WOBBLY_RADIUS.badge }}
            >
              <span className="block font-hand text-xs text-[#2d2d2d]/60">France</span>
              <span className="font-marker text-sm font-bold text-[#2d2d2d]">
                {conversion.frenchGrade.split(' ')[0]}
              </span>
            </div>
          </div>

          <div className="mt-2 font-hand text-sm text-[#2d2d2d]">
            <span className="font-bold text-[#2d5da1]">Status: </span>
            {conversion.status} — {conversion.description}
          </div>
        </div>

        {/* 2. Downloadable Syllabi & Exam Repos */}
        <div>
          <span className="font-marker text-xs uppercase text-[#2d2d2d] block mb-2">
            Verified Curricula & Exam Repositories
          </span>

          <div className="space-y-2">
            {PREP_GUIDES.map((guide, idx) => {
              const tilt = idx % 2 === 0 ? '-rotate-1' : 'rotate-1';
              return (
                <div
                  key={guide.id}
                  className={`p-3 bg-white border-2 border-[#2d2d2d] shadow-hard-sm flex items-center justify-between gap-3 ${tilt} hover:rotate-0 transition-transform`}
                  style={{ borderRadius: WOBBLY_RADIUS.card }}
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-marker text-xs px-2 py-0.5 bg-[#fff9c4] text-[#2d2d2d] border border-[#2d2d2d] rounded font-bold shrink-0">
                        {guide.category}
                      </span>
                      <span className="font-marker text-sm sm:text-base text-[#2d2d2d] truncate">
                        {guide.title}
                      </span>
                    </div>
                    <p className="font-hand text-xs sm:text-sm text-[#2d2d2d]/70 truncate">
                      {guide.description}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleSimulateDownload(guide.title, guide.downloadFormat)}
                    className="btn-hand-drawn min-h-[48px] px-3.5 py-2 bg-white hover:bg-[#ff4d4d] hover:text-white text-[#2d2d2d] font-hand text-sm font-bold flex items-center justify-center gap-1.5 shrink-0 cursor-pointer"
                    style={{ borderRadius: WOBBLY_RADIUS.button }}
                    title={`Download ${guide.downloadFormat} (${guide.fileSize})`}
                    aria-label={`Download ${guide.title}`}
                  >
                    <FileDown strokeWidth={2.5} className="w-4 h-4" />
                    <span>{guide.downloadFormat}</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {downloadSuccessToast && (
        <div className="mt-3 p-2 bg-[#c8f7c5] border-2 border-[#2d2d2d] shadow-hard-sm flex items-center gap-2 font-hand text-sm text-[#2d2d2d] font-bold">
          <CheckCircle2 strokeWidth={3} className="w-4 h-4 text-[#2d5da1] shrink-0" />
          <span className="truncate">Downloaded: {downloadSuccessToast}</span>
        </div>
      )}
    </div>
  );
};
