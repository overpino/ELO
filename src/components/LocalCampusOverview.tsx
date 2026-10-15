import React, { useState } from 'react';
import { StudentProfile, University } from '../types';
import { UNIVERSITIES } from '../data/universities';
import {
  getUniversityCampusData,
  LocalSeminar,
  LocalBando,
} from '../data/localCampusData';
import { WOBBLY_RADIUS } from '../theme/handDrawnTokens';
import {
  Building2,
  Calendar,
  Clock,
  MapPin,
  ExternalLink,
  BookOpen,
  Award,
  Users,
  Compass,
  CheckCircle2,
  Bell,
  ArrowRight,
  BookmarkCheck,
  Video,
  FileText,
  ChevronDown,
  Ticket,
} from 'lucide-react';
import { TapeStrip, Thumbtack, DoodleSquiggle } from './ui/HandDrawnPrimitives';
import { EventTicketCheckoutModal } from './EventTicketCheckoutModal';

interface LocalCampusOverviewProps {
  profile: StudentProfile;
  onChangeUniversity?: (universityId: string) => void;
  onOpenProfileModal?: () => void;
}

export const LocalCampusOverview: React.FC<LocalCampusOverviewProps> = ({
  profile,
  onChangeUniversity,
  onOpenProfileModal,
}) => {
  const [selectedUniId, setSelectedUniId] = useState<string>(profile.universityId);
  const [activeTab, setActiveTab] = useState<'seminars' | 'bandi' | 'labs' | 'community'>('seminars');
  const [savedItems, setSavedItems] = useState<Record<string, boolean>>({});
  const [copiedLink, setCopiedLink] = useState<string | null>(null);
  const [ticketCheckoutSeminar, setTicketCheckoutSeminar] = useState<LocalSeminar | null>(null);
  const [purchasedTickets, setPurchasedTickets] = useState<Record<string, string>>({});

  const handleTicketPurchased = (ticketId: string, seminarId: string) => {
    setPurchasedTickets((prev) => ({ ...prev, [seminarId]: ticketId }));
  };

  // Sync with profile if it updates
  React.useEffect(() => {
    setSelectedUniId(profile.universityId);
  }, [profile.universityId]);

  const currentUni: University =
    UNIVERSITIES.find((u) => u.id === selectedUniId) || UNIVERSITIES[0];
  const campusData = getUniversityCampusData(selectedUniId);

  const handleToggleSave = (id: string) => {
    setSavedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleShareOrCopy = (title: string, id: string) => {
    navigator.clipboard?.writeText?.(
      `${title} - ${currentUni.name} (${currentUni.website})`
    );
    setCopiedLink(id);
    setTimeout(() => setCopiedLink(null), 2200);
  };

  const handleSelectUni = (newId: string) => {
    setSelectedUniId(newId);
    if (onChangeUniversity) {
      onChangeUniversity(newId);
    }
  };

  return (
    <section id="campus-hub" className="scroll-mt-20">
      {/* Container Card */}
      <div
        className="bg-white border-[3px] border-[#2d2d2d] shadow-hard-lg p-4 sm:p-6 lg:p-8 relative transition-all"
        style={{ borderRadius: WOBBLY_RADIUS.card }}
      >
        {/* Binder Tape strips & Thumbtack decorations */}
        <TapeStrip className="-top-3 left-6 sm:left-10 -rotate-2" />
        <TapeStrip className="-top-3 right-6 sm:right-10 rotate-1" />
        <Thumbtack className="top-3 right-3 text-[#ff4d4d]" />

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6 pb-6 border-b-2 border-dashed border-[#2d2d2d]/25">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 flex-wrap mb-1.5">
              <span
                className="px-2.5 py-0.5 bg-[#2d5da1] text-white font-marker text-xs tracking-wider uppercase inline-flex items-center gap-1.5"
                style={{ borderRadius: WOBBLY_RADIUS.badge }}
              >
                <Building2 className="w-3.5 h-3.5" />
                {currentUni.countryCode} · {currentUni.isUfv ? 'Home University (UFV)' : 'EUNICE Partner Institution'}
              </span>

              <span
                className="px-2.5 py-0.5 bg-[#fff9c4] text-[#2d2d2d] font-marker text-xs border border-[#2d2d2d] inline-flex items-center gap-1 -rotate-1"
                style={{ borderRadius: WOBBLY_RADIUS.badge }}
              >
                {campusData.seminars.length} Open Seminars · {campusData.bandiLocali.length} Active Calls
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-marker text-[#2d2d2d] leading-tight">
              {currentUni.name}
            </h2>
            <p className="font-hand text-base sm:text-lg text-[#2d2d2d]/80 mt-1">
              <span className="font-bold text-[#2d5da1]">{campusData.campusTitle}</span> —{' '}
              {campusData.welcomeMessage}
            </p>
            <DoodleSquiggle className="mt-1 text-[#2d2d2d]/30" />
          </div>

          {/* Quick University Switcher Dropdown - Fully responsive and bounded on mobile */}
          <div className="w-full lg:w-auto flex flex-col items-start lg:items-end gap-2.5">
            <div className="w-full flex flex-col sm:flex-row items-start sm:items-center gap-1.5 sm:gap-2">
              <label
                htmlFor="uni-switch-select"
                className="font-marker text-xs uppercase tracking-wide text-[#2d2d2d]/70 shrink-0"
              >
                Switch university view:
              </label>
              <div className="relative w-full sm:w-auto min-w-0 max-w-full">
                <select
                  id="uni-switch-select"
                  value={selectedUniId}
                  onChange={(e) => handleSelectUni(e.target.value)}
                  className="w-full sm:w-auto max-w-full appearance-none font-hand text-sm sm:text-base font-bold bg-[#fdfbf7] border-2 border-[#2d2d2d] pl-3 pr-9 py-2 sm:py-1.5 shadow-hard-sm cursor-pointer focus:outline-hidden focus:border-[#2d5da1] truncate"
                  style={{ borderRadius: WOBBLY_RADIUS.input }}
                >
                  {UNIVERSITIES.map((u) => (
                    <option key={u.id} value={u.id}>
                      {u.shortName} ({u.country})
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-[#2d2d2d] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-hand text-[#2d2d2d]/70">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#ff4d4d] shrink-0" />
                <span>{currentUni.city}, {currentUni.country}</span>
              </span>
              <span>·</span>
              <span>Est. {currentUni.establishedYear}</span>
              <span>·</span>
              <a
                href={currentUni.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2d5da1] hover:underline inline-flex items-center gap-0.5 font-bold"
              >
                Official Portal
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 mb-6 scrollbar-thin">
          <button
            type="button"
            onClick={() => setActiveTab('seminars')}
            className={`min-h-[44px] px-3.5 sm:px-4 py-2 border-2 border-[#2d2d2d] font-marker text-xs sm:text-sm tracking-wide flex items-center gap-2 cursor-pointer transition-all shrink-0 ${
              activeTab === 'seminars'
                ? 'bg-[#2d5da1] text-white shadow-hard -rotate-1 font-bold'
                : 'bg-white hover:bg-[#fff9c4] text-[#2d2d2d] shadow-hard-sm'
            }`}
            style={{ borderRadius: WOBBLY_RADIUS.button }}
          >
            <Calendar className="w-4 h-4 shrink-0" />
            <span>Seminars & Workshops ({campusData.seminars.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('bandi')}
            className={`min-h-[44px] px-3.5 sm:px-4 py-2 border-2 border-[#2d2d2d] font-marker text-xs sm:text-sm tracking-wide flex items-center gap-2 cursor-pointer transition-all shrink-0 ${
              activeTab === 'bandi'
                ? 'bg-[#ff4d4d] text-white shadow-hard rotate-1 font-bold'
                : 'bg-white hover:bg-[#fff9c4] text-[#2d2d2d] shadow-hard-sm'
            }`}
            style={{ borderRadius: WOBBLY_RADIUS.button }}
          >
            <FileText className="w-4 h-4 shrink-0" />
            <span>Campus Calls & Grants ({campusData.bandiLocali.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('labs')}
            className={`min-h-[44px] px-3.5 sm:px-4 py-2 border-2 border-[#2d2d2d] font-marker text-xs sm:text-sm tracking-wide flex items-center gap-2 cursor-pointer transition-all shrink-0 ${
              activeTab === 'labs'
                ? 'bg-[#fff9c4] text-[#2d2d2d] shadow-hard -rotate-1 font-bold'
                : 'bg-white hover:bg-[#fdfbf7] text-[#2d2d2d] shadow-hard-sm'
            }`}
            style={{ borderRadius: WOBBLY_RADIUS.button }}
          >
            <BookOpen className="w-4 h-4 shrink-0" />
            <span>Labs & Research Centers ({campusData.keyLabs.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('community')}
            className={`min-h-[44px] px-3.5 sm:px-4 py-2 border-2 border-[#2d2d2d] font-marker text-xs sm:text-sm tracking-wide flex items-center gap-2 cursor-pointer transition-all shrink-0 ${
              activeTab === 'community'
                ? 'bg-[#10B981] text-white shadow-hard rotate-1 font-bold'
                : 'bg-white hover:bg-[#fff9c4] text-[#2d2d2d] shadow-hard-sm'
            }`}
            style={{ borderRadius: WOBBLY_RADIUS.button }}
          >
            <Users className="w-4 h-4 shrink-0" />
            <span>Student Community & STEM ({campusData.campusGroups.length})</span>
          </button>
        </div>

        {/* TAB 1: Local Seminars & Workshops */}
        {activeTab === 'seminars' && (
          <div className="space-y-4">
            <div className="bg-[#fdfbf7] border-2 border-dashed border-[#2d2d2d]/30 p-3.5 rounded-lg flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-2 text-sm text-[#2d2d2d]/80 font-hand">
                <Bell className="w-4 h-4 text-[#ff4d4d] shrink-0" />
                <span>
                  <strong>Campus Workshops & Colloquia:</strong> For hands-on laboratory workshops, official student access passes (with certificates & lab kits) can be reserved securely via <strong>Stripe</strong>.
                </span>
              </div>
              <span className="font-marker text-xs text-[#2d5da1] uppercase">
                Updated Weekly
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {campusData.seminars.map((seminar) => {
                const isSaved = savedItems[seminar.id];
                const ticketId = purchasedTickets[seminar.id];
                return (
                  <div
                    key={seminar.id}
                    className="bg-white border-2 border-[#2d2d2d] shadow-hard-sm p-4 sm:p-5 flex flex-col justify-between transition-all hover:shadow-hard group"
                    style={{ borderRadius: WOBBLY_RADIUS.card }}
                  >
                    <div>
                      {/* Top badges */}
                      <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                        <span
                          className="px-2.5 py-0.5 bg-[#fff9c4] border border-[#2d2d2d] font-marker text-xs text-[#2d2d2d]"
                          style={{ borderRadius: WOBBLY_RADIUS.badge }}
                        >
                          {seminar.category}
                        </span>

                        <div className="flex items-center gap-1.5 text-xs font-hand text-[#2d2d2d]/70">
                          {seminar.hasTicket && (
                            <span className="px-2 py-0.5 bg-[#fff9c4] text-[#ff4d4d] border border-[#2d2d2d] rounded-sm font-marker text-xs font-bold inline-flex items-center gap-1">
                              <Ticket className="w-3.5 h-3.5" />
                              {seminar.ticketPrice}
                            </span>
                          )}
                          {seminar.isHybrid && (
                            <span className="inline-flex items-center gap-1 text-[#2d5da1] font-bold">
                              <Video className="w-3.5 h-3.5" />
                              Hybrid / Stream
                            </span>
                          )}
                          {!seminar.hasTicket && (
                            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-sm font-bold text-[11px]">
                              Open Access
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-marker text-lg sm:text-xl text-[#2d2d2d] group-hover:text-[#2d5da1] transition-colors leading-snug mb-1.5">
                        {seminar.title}
                      </h3>

                      {/* Speaker info */}
                      <div className="font-hand text-sm text-[#2d2d2d]/80 mb-2.5">
                        <span className="font-bold text-[#2d2d2d]">{seminar.speaker}</span>
                        <div className="text-xs text-[#2d2d2d]/60">
                          {seminar.speakerRole} · {seminar.speakerAffiliation}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="font-hand text-sm text-[#2d2d2d]/75 leading-relaxed mb-3">
                        {seminar.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {seminar.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-hand px-2 py-0.5 bg-[#f5f0eb] border border-[#2d2d2d]/30 text-[#2d2d2d] rounded-sm"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Ticket Highlights box if ticketed */}
                      {seminar.hasTicket && (
                        <div className="mb-3 p-2.5 bg-[#fff9c4]/70 border border-[#2d2d2d]/30 rounded-md flex items-center justify-between gap-2 flex-wrap text-xs font-hand">
                          <div className="flex items-center gap-1.5">
                            <span className="font-marker text-[10px] uppercase px-1.5 py-0.5 bg-[#ff4d4d] text-white rounded-xs">
                              Workshop Pass
                            </span>
                            <span className="font-bold text-[#2d2d2d]">
                              Price: <strong className="text-[#ff4d4d] font-marker text-sm">{seminar.ticketPrice}</strong>
                            </span>
                          </div>
                          {seminar.seatsLeft && (
                            <span className="text-[11px] text-emerald-800 font-bold">
                              ⚡ {seminar.seatsLeft} seats left
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Footer Info & Actions */}
                    <div className="pt-3 border-t border-dashed border-[#2d2d2d]/20 space-y-2.5">
                      <div className="flex items-center justify-between text-xs font-hand text-[#2d2d2d]/80 flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1 font-bold text-[#ff4d4d]">
                          <Calendar className="w-3.5 h-3.5" />
                          {seminar.date}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#2d2d2d]/60" />
                          {seminar.time}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 text-xs font-hand text-[#2d2d2d]/70">
                        <MapPin className="w-3.5 h-3.5 text-[#2d5da1] shrink-0" />
                        <span className="truncate">{seminar.location}</span>
                      </div>

                      <div className="flex items-center justify-between gap-2 pt-1 flex-wrap">
                        {/* DEDICATED TICKET PURCHASE BUTTON */}
                        {seminar.hasTicket ? (
                          ticketId ? (
                            <span
                              className="px-3 py-1.5 bg-emerald-100 border border-emerald-500 text-emerald-800 font-marker text-xs rounded-sm inline-flex items-center gap-1.5"
                              style={{ borderRadius: WOBBLY_RADIUS.badge }}
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                              <span>Ticket Confirmed ({ticketId})</span>
                            </span>
                          ) : (
                            <button
                              type="button"
                              onClick={() => setTicketCheckoutSeminar(seminar)}
                              className="btn-hand-drawn px-3.5 py-1.5 text-xs sm:text-sm font-marker bg-[#ff4d4d] hover:bg-[#e03838] text-white inline-flex items-center gap-1.5 min-h-[38px] shadow-hard-xs cursor-pointer -rotate-0.5"
                              style={{ borderRadius: WOBBLY_RADIUS.button }}
                            >
                              <Ticket className="w-4 h-4" />
                              <span>Buy Ticket · {seminar.ticketPrice}</span>
                            </button>
                          )
                        ) : (
                          <button
                            type="button"
                            onClick={() => handleToggleSave(seminar.id)}
                            className={`btn-hand-drawn px-3 py-1.5 text-xs font-marker inline-flex items-center gap-1.5 min-h-[36px] cursor-pointer ${
                              isSaved
                                ? 'bg-emerald-500 text-white shadow-none'
                                : 'bg-white hover:bg-[#fff9c4] text-[#2d2d2d]'
                            }`}
                            style={{ borderRadius: WOBBLY_RADIUS.button }}
                          >
                            <BookmarkCheck className="w-3.5 h-3.5" />
                            <span>{isSaved ? 'Reminder Saved!' : 'Save Reminder'}</span>
                          </button>
                        )}

                        <div className="flex items-center gap-1.5">
                          {seminar.hasTicket && (
                            <button
                              type="button"
                              onClick={() => handleToggleSave(seminar.id)}
                              className={`btn-hand-drawn p-1.5 text-xs font-marker inline-flex items-center justify-center min-h-[36px] min-w-[36px] cursor-pointer ${
                                isSaved
                                  ? 'bg-emerald-500 text-white shadow-none'
                                  : 'bg-white hover:bg-[#fff9c4] text-[#2d2d2d]'
                              }`}
                              style={{ borderRadius: WOBBLY_RADIUS.button }}
                              title={isSaved ? 'Reminder saved' : 'Save reminder'}
                              aria-label={isSaved ? 'Reminder saved' : 'Save reminder'}
                            >
                              <BookmarkCheck className="w-3.5 h-3.5" />
                            </button>
                          )}

                          <button
                            type="button"
                            onClick={() => handleShareOrCopy(seminar.title, seminar.id)}
                            className="btn-hand-drawn px-3 py-1.5 text-xs font-marker bg-[#fdfbf7] hover:bg-white text-[#2d2d2d] inline-flex items-center gap-1 min-h-[36px] cursor-pointer"
                            style={{ borderRadius: WOBBLY_RADIUS.button }}
                          >
                            <span>{copiedLink === seminar.id ? 'Copied!' : 'Copy Details'}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: Local Campus Calls & Grants */}
        {activeTab === 'bandi' && (
          <div className="space-y-4">
            <div className="bg-[#fff9c4]/70 border-2 border-dashed border-[#2d2d2d]/30 p-3.5 rounded-lg flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-2 text-sm text-[#2d2d2d]/80 font-hand">
                <FileText className="w-4 h-4 text-[#2d5da1] shrink-0" />
                <span>
                  <strong>Internal Calls & Research Grants:</strong> Funded undergraduate fellowships, departmental research grants, and lab competitions to gain hands-on experience without traveling.
                </span>
              </div>
              <span className="font-marker text-xs text-[#ff4d4d] uppercase font-bold">
                Active Funding
              </span>
            </div>

            <div className="space-y-4">
              {campusData.bandiLocali.map((bando) => {
                const isSaved = savedItems[bando.id];
                return (
                  <div
                    key={bando.id}
                    className="bg-white border-2 border-[#2d2d2d] shadow-hard-sm p-4 sm:p-5 transition-all hover:shadow-hard"
                    style={{ borderRadius: WOBBLY_RADIUS.card }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-2">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span
                            className="px-2.5 py-0.5 bg-[#2d5da1] text-white font-marker text-xs"
                            style={{ borderRadius: WOBBLY_RADIUS.badge }}
                          >
                            {bando.type}
                          </span>
                          <span className="text-xs font-hand text-[#2d2d2d]/70">
                            {bando.department}
                          </span>
                        </div>
                        <h3 className="font-marker text-lg sm:text-xl text-[#2d2d2d] leading-snug">
                          {bando.title}
                        </h3>
                      </div>

                      {/* Deadline Countdown & Stipend */}
                      <div className="flex sm:flex-col items-end justify-between sm:justify-start gap-1 shrink-0">
                        <span
                          className="px-2.5 py-1 bg-[#ff4d4d] text-white font-marker text-xs uppercase tracking-wide inline-flex items-center gap-1"
                          style={{ borderRadius: WOBBLY_RADIUS.badge }}
                        >
                          <Clock className="w-3.5 h-3.5" />
                          {bando.deadlineDaysLeft} days left
                        </span>
                        <span className="font-marker text-sm font-bold text-emerald-700">
                          {bando.stipendOrPrize}
                        </span>
                      </div>
                    </div>

                    <p className="font-hand text-sm text-[#2d2d2d]/80 mb-3 leading-relaxed">
                      {bando.description}
                    </p>

                    {/* Requirements */}
                    <div className="mb-4 bg-[#fdfbf7] p-3 border border-[#2d2d2d]/20 rounded-md">
                      <span className="font-marker text-xs uppercase tracking-wider text-[#2d2d2d]/70 block mb-1">
                        Eligibility & Requirements:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs font-hand text-[#2d2d2d]/80">
                        {bando.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Footer Actions */}
                    <div className="flex items-center justify-between gap-3 pt-2 border-t border-dashed border-[#2d2d2d]/20 flex-wrap">
                      <div className="text-xs font-hand text-[#2d2d2d]/70">
                        Target: <span className="font-bold text-[#2d2d2d]">{bando.targetStudents}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleToggleSave(bando.id)}
                          className={`btn-hand-drawn px-3 py-1.5 text-xs font-marker inline-flex items-center gap-1 min-h-[36px] cursor-pointer ${
                            isSaved
                              ? 'bg-emerald-500 text-white'
                              : 'bg-white hover:bg-[#fff9c4] text-[#2d2d2d]'
                          }`}
                          style={{ borderRadius: WOBBLY_RADIUS.button }}
                        >
                          <BookmarkCheck className="w-3.5 h-3.5" />
                          <span>{isSaved ? 'Call Saved' : 'Save Call'}</span>
                        </button>

                        <a
                          href={currentUni.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-hand-drawn px-3.5 py-1.5 text-xs font-marker bg-[#fff9c4] hover:bg-[#fff080] text-[#2d2d2d] inline-flex items-center gap-1 min-h-[36px]"
                          style={{ borderRadius: WOBBLY_RADIUS.button }}
                        >
                          <span>{bando.linkText}</span>
                          <ExternalLink className="w-3 h-3 ml-0.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: Laboratories & Main Campuses */}
        {activeTab === 'labs' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Key Research Centers */}
            <div className="lg:col-span-7 space-y-3">
              <h3 className="font-marker text-lg text-[#2d2d2d] flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#2d5da1]" />
                Research Laboratories & Centers of Excellence:
              </h3>
              <div className="space-y-2.5">
                {campusData.keyLabs.map((lab, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-[#fdfbf7] border-2 border-[#2d2d2d] shadow-hard-sm flex items-start gap-3"
                    style={{ borderRadius: WOBBLY_RADIUS.card }}
                  >
                    <div
                      className="w-7 h-7 bg-[#2d5da1] text-white font-marker text-sm flex items-center justify-center shrink-0 border border-[#2d2d2d]"
                      style={{ borderRadius: WOBBLY_RADIUS.button }}
                    >
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-marker text-base text-[#2d2d2d] leading-snug">
                        {lab}
                      </h4>
                      <p className="font-hand text-xs text-[#2d2d2d]/70 mt-0.5">
                        Active for thesis research, curricular internships, and transatlantic EUNICE alliances.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Campuses & STEM Strengths */}
            <div className="lg:col-span-5 space-y-4">
              <div
                className="bg-[#fff9c4]/60 border-2 border-[#2d2d2d] p-4 shadow-hard-sm"
                style={{ borderRadius: WOBBLY_RADIUS.card }}
              >
                <h3 className="font-marker text-base text-[#2d2d2d] mb-2 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#ff4d4d]" />
                  Campuses & Department Locations:
                </h3>
                <ul className="space-y-1.5 text-sm font-hand text-[#2d2d2d]/85">
                  {campusData.mainCampuses.map((campus, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2d2d2d]" />
                      <span>{campus}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="bg-white border-2 border-[#2d2d2d] p-4 shadow-hard-sm"
                style={{ borderRadius: WOBBLY_RADIUS.card }}
              >
                <h3 className="font-marker text-base text-[#2d2d2d] mb-2 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-emerald-600" />
                  Primary STEM Disciplines:
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {currentUni.stemStrengths.map((str, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-[#f5f0eb] border border-[#2d2d2d]/30 text-xs font-hand text-[#2d2d2d] font-bold rounded-sm"
                    >
                      {str}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: Community & Women in STEM */}
        {activeTab === 'community' && (
          <div className="space-y-4">
            <div className="bg-[#10B981]/10 border-2 border-dashed border-[#10B981]/40 p-3.5 rounded-lg flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-2 text-sm text-[#2d2d2d]/80 font-hand">
                <Users className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>
                  <strong>Active Communities & Peer Networks:</strong> Student chapters, Women in STEM collectives, and maker labs fostering hands-on peer collaboration.
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {campusData.campusGroups.map((group, idx) => (
                <div
                  key={idx}
                  className="bg-white border-2 border-[#2d2d2d] shadow-hard-sm p-4 sm:p-5 flex flex-col justify-between"
                  style={{ borderRadius: WOBBLY_RADIUS.card }}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span
                        className="px-2.5 py-0.5 bg-[#fff9c4] border border-[#2d2d2d] font-marker text-xs text-[#2d2d2d]"
                        style={{ borderRadius: WOBBLY_RADIUS.badge }}
                      >
                        {group.category}
                      </span>
                      <span className="font-hand text-xs font-bold text-emerald-700">
                        {group.badge}
                      </span>
                    </div>

                    <h3 className="font-marker text-lg text-[#2d2d2d] mb-1.5">
                      {group.name}
                    </h3>
                    <p className="font-hand text-sm text-[#2d2d2d]/80 mb-3 leading-relaxed">
                      {group.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-dashed border-[#2d2d2d]/20 text-xs font-hand space-y-1.5 text-[#2d2d2d]/70">
                    <div>
                      <span className="font-bold text-[#2d2d2d]">Schedule: </span>
                      {group.meetingSchedule}
                    </div>
                    <div>
                      <span className="font-bold text-[#2d2d2d]">Contact: </span>
                      <a href={`mailto:${group.contactEmail}`} className="text-[#2d5da1] hover:underline font-bold">
                        {group.contactEmail}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section Bottom Banner - Connection to Transatlantic Network */}
        <div className="mt-6 pt-4 border-t-2 border-dashed border-[#2d2d2d]/25 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-hand text-[#2d2d2d]/70">
          <div className="flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-[#2d5da1]" />
            <span>
              Your selected home institution is integrated with the EUNICE European University alliance for joint research, dual degrees, and lab exchanges.
            </span>
          </div>

          {onOpenProfileModal && (
            <button
              type="button"
              onClick={onOpenProfileModal}
              className="font-marker text-xs text-[#2d5da1] hover:text-[#ff4d4d] underline cursor-pointer shrink-0"
            >
              Update preferences in profile →
            </button>
          )}
        </div>
      </div>

      {/* Dedicated Event & Workshop Ticket Checkout Modal with Stripe */}
      <EventTicketCheckoutModal
        isOpen={Boolean(ticketCheckoutSeminar)}
        onClose={() => setTicketCheckoutSeminar(null)}
        seminar={ticketCheckoutSeminar}
        university={currentUni}
        profile={profile}
        onTicketPurchased={handleTicketPurchased}
      />
    </section>
  );
};
