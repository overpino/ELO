import React, { useState } from 'react';
import { StudentProfile } from '../types';
import { executeSemanticAgentSearch, AgentSearchResult } from '../services/agentSearch';
import { Search, ArrowRight, CheckCircle2, CornerDownLeft, X } from 'lucide-react';
import { WOBBLY_RADIUS } from '../theme/handDrawnTokens';

interface HeroAgentSearchProps {
  profile: StudentProfile;
  onFilterResults: (matchedIds: string[] | null) => void;
  onSelectOpportunity: (opportunityId: string) => void;
}

const SAMPLE_PROMPTS = [
  '3rd-year CS looking for robotics in Europe without German',
  'Summer biopharma research with full stipend',
  'Renewable energy in Scandinavia or Germany with English B2',
  'Quantum cryptography or edge AI with Master scholarship',
];

export const HeroAgentSearch: React.FC<HeroAgentSearchProps> = ({
  profile,
  onFilterResults,
  onSelectOpportunity,
}) => {
  const [query, setQuery] = useState('');
  const [activeResult, setActiveResult] = useState<AgentSearchResult | null>(null);

  const handleSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) return;

    const result = executeSemanticAgentSearch(searchQuery, profile);
    setActiveResult(result);
    onFilterResults(result.matchedIds);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(query);
    }
  };

  const handleClear = () => {
    setQuery('');
    setActiveResult(null);
    onFilterResults(null);
  };

  const handleChipClick = (prompt: string) => {
    setQuery(prompt);
    handleSearch(prompt);
  };

  return (
    <div className="w-full pt-8 pb-10 px-4 sm:px-6 lg:px-8 border-b-2 border-dashed border-[#2d2d2d]/30 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-marker text-[#2d2d2d] mb-2 leading-tight">
          Find Your Transatlantic STEM Trajectory
        </h1>

        <p className="font-hand text-xl text-[#2d2d2d]/80 max-w-2xl mx-auto mb-6">
          Write naturally to query fellowships across ELO (EUNICE, Latam, Opportunities) partners, connecting Latin America and the 10 EUNICE European universities.
        </p>

        {/* Conversational Input Box */}
        <div className="relative max-w-3xl mx-auto mb-5">
          <label htmlFor="agentic-search-input" className="sr-only">
            Conversational STEM fellowship search
          </label>
          <div
            className="relative flex items-center bg-white border-[3px] border-[#2d2d2d] shadow-hard transition-all focus-within:border-[#2d5da1] focus-within:ring-2 focus-within:ring-[#2d5da1]/20 min-h-[52px]"
            style={{ borderRadius: WOBBLY_RADIUS.input }}
          >
            <div className="pl-3.5 pr-1.5 text-[#2d2d2d]/60 shrink-0">
              <Search strokeWidth={2.5} className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            <input
              id="agentic-search-input"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="e.g. 3rd-year CS looking for robotics in Europe without German..."
              className="w-full py-3 px-2 bg-transparent font-hand text-lg sm:text-xl text-[#2d2d2d] placeholder-[#2d2d2d]/40 focus:outline-hidden min-h-[48px]"
            />

            {query && (
              <button
                type="button"
                onClick={handleClear}
                className="min-h-[48px] min-w-[48px] flex items-center justify-center text-[#2d2d2d]/60 hover:text-[#ff4d4d] transition-colors cursor-pointer shrink-0"
                aria-label="Clear search input"
              >
                <X strokeWidth={2.5} className="w-5 h-5" />
              </button>
            )}

            <div className="pr-1.5 sm:pr-2.5 shrink-0">
              <button
                type="button"
                onClick={() => handleSearch(query)}
                disabled={!query.trim()}
                className="h-9 px-3 sm:px-3.5 bg-[#2d5da1] hover:bg-[#234b82] text-white border-2 border-[#2d2d2d] rounded-md shadow-hard-xs font-marker text-xs sm:text-sm font-bold disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1.5 transition-all active:translate-x-0.5 active:translate-y-0.5"
              >
                <span>Search</span>
                <CornerDownLeft strokeWidth={2.5} className="w-3.5 h-3.5 hidden sm:inline" />
              </button>
            </div>
          </div>
        </div>

        {/* Sample Chip Prompts as Tilted Post-It Sticky Tags with Min 48px Touch Target */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto mb-6">
          <span className="font-marker text-xs sm:text-sm text-[#2d2d2d]/70 mr-1 w-full sm:w-auto text-center sm:text-left">
            Try a prompt note:
          </span>
          {SAMPLE_PROMPTS.map((prompt, idx) => {
            const tilt = idx % 2 === 0 ? '-rotate-1' : 'rotate-1';
            return (
              <button
                key={prompt}
                type="button"
                onClick={() => handleChipClick(prompt)}
                className={`font-hand text-sm sm:text-base min-h-[48px] px-3.5 py-2 bg-white hover:bg-[#fff9c4] text-[#2d2d2d] border-2 border-[#2d2d2d] shadow-hard-sm transition-all duration-100 cursor-pointer flex items-center text-left ${tilt} hover:rotate-0 hover:shadow-hard`}
                style={{ borderRadius: WOBBLY_RADIUS.badge }}
              >
                "{prompt}"
              </button>
            );
          })}
        </div>

        {/* Completed Search Reasoning Card - Minimal & Clean */}
        {activeResult && (
          <div
            className="max-w-3xl mx-auto p-4 sm:p-5 bg-white border-2 border-[#2d2d2d] shadow-hard text-left relative"
            style={{ borderRadius: WOBBLY_RADIUS.card }}
          >
            <div className="flex items-center justify-between mb-3 border-b border-[#2d2d2d]/20 pb-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 strokeWidth={2.5} className="w-4 h-4 text-[#2d5da1]" />
                <span className="font-marker text-xs text-[#2d5da1] uppercase tracking-wide">
                  {activeResult.matchedIds.length} {activeResult.matchedIds.length === 1 ? 'Program Found' : 'Programs Found'}
                </span>
              </div>
              <button
                onClick={handleClear}
                className="font-marker text-xs text-[#ff4d4d] hover:underline cursor-pointer"
              >
                Clear
              </button>
            </div>

            <p className="font-hand text-base sm:text-lg text-[#2d2d2d] mb-3 leading-relaxed">
              {activeResult.conversationalSummary}
            </p>

            {/* Why each program fits explicitly */}
            <div className="space-y-2.5">
              {activeResult.matchedExplanations.map((exp) => (
                <div
                  key={exp.opportunityId}
                  className="p-3 bg-[#fdfbf7] border-2 border-[#2d2d2d]/60 shadow-hard-xs rounded-md"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <p className="font-hand text-sm sm:text-base text-[#2d2d2d] leading-snug">
                      {exp.whyItFits}
                    </p>
                    <button
                      type="button"
                      onClick={() => onSelectOpportunity(exp.opportunityId)}
                      className="px-2.5 py-1 bg-white hover:bg-[#fff9c4] border-2 border-[#2d2d2d] rounded-md font-marker text-xs text-[#2d5da1] hover:text-[#ff4d4d] font-bold whitespace-nowrap shrink-0 flex items-center justify-center gap-1 cursor-pointer self-start sm:self-auto transition-colors"
                    >
                      <span>View Program</span>
                      <ArrowRight strokeWidth={2.5} className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.keyHighlights.map((hl) => (
                      <span
                        key={hl}
                        className="font-hand text-xs px-2 py-0.5 bg-[#fff9c4] text-[#2d2d2d] border border-[#2d2d2d]/40 rounded-sm font-bold"
                      >
                        ✓ {hl}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
