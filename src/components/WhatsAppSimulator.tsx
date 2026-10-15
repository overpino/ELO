import React, { useState } from 'react';
import eloLogo from '../ELO_logo.svg';
import { StudentProfile, Opportunity } from '../types';
import { UNIVERSITIES } from '../data/universities';
import {
  Send,
  Phone,
  Video,
  MoreVertical,
  CheckCheck,
  ExternalLink,
} from 'lucide-react';
import {
  TapeStrip,
  Thumbtack,
  HandDrawnButton,
  DoodleSquiggle,
} from './ui/HandDrawnPrimitives';
import { WOBBLY_RADIUS } from '../theme/handDrawnTokens';

interface WhatsAppSimulatorProps {
  profile: StudentProfile;
  opportunities: Opportunity[];
  onSelectOpportunity: (opportunityId: string) => void;
}

export const WhatsAppSimulator: React.FC<WhatsAppSimulatorProps> = ({
  profile,
  opportunities,
  onSelectOpportunity,
}) => {
  const [phoneNumber, setPhoneNumber] = useState(
    profile.phoneNumber || '+55 (31) 98450-2026'
  );
  const [osFrame, setOsFrame] = useState<'ios' | 'android'>('ios');
  const [deliveryDay, setDeliveryDay] = useState('Monday 09:00 BRT');
  const [isDigestGenerated, setIsDigestGenerated] = useState(true);
  const [customReply, setCustomReply] = useState('');
  const [chatMessages, setChatMessages] = useState<
    Array<{ sender: 'bot' | 'user'; text: string; time: string }>
  >([]);

  const [justUpdated, setJustUpdated] = useState(false);

  const studentName = profile.studentName || 'Scholar';
  const fieldName = profile.field.split('&')[0].trim();

  const matchedOpps = opportunities
    .filter((o) => o.field === profile.field || o.matchScore >= 92)
    .slice(0, 2);

  const opp1 = matchedOpps[0] || opportunities[0];
  const opp2 = matchedOpps[1] || opportunities[1];
  const uni1 = UNIVERSITIES.find((u) => u.id === opp1.universityId);
  const uni2 = UNIVERSITIES.find((u) => u.id === opp2.universityId);

  const digestText = `Olá ${studentName}! Here is your official ELO (EUNICE, Latam, Opportunities) STEM Newsletter for this week based on your ${fieldName} profile: 2 new fully-funded placements matched in ${uni1?.city || 'Catania'} and ${uni2?.city || 'Vaasa'}. Deadlines: Nov 15. Tap below to access your priority application packet.`;

  const handleSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDigestGenerated(true);
    setJustUpdated(true);
    setTimeout(() => setJustUpdated(false), 3500);
  };

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customReply.trim()) return;
    const now = new Date();
    const timeStr = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;

    const newMsgs = [
      ...chatMessages,
      { sender: 'user' as const, text: customReply, time: timeStr },
    ];
    setChatMessages(newMsgs);
    setCustomReply('');

    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: `Perfeito! Application packet for ${opp1.title} received. An appointment slot with Prof. ${opp1.facultyMentor.split('&')[0]} has been reserved in your EUNICE-UFV mobility queue.`,
          time: timeStr,
        },
      ]);
    }, 600);
  };

  return (
    <div
      id="whatsapp"
      className="w-full py-12 px-4 sm:px-6 lg:px-8 border-t-2 border-dashed border-[#2d2d2d]/30 relative"
    >
      <div className="max-w-6xl mx-auto select-none">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-marker text-[#2d2d2d] mb-1">
            WhatsApp Newsletter
          </h2>
          <p className="font-hand text-lg text-[#2d2d2d]/80">
            Never miss a transatlantic fellowship deadline. Receive curated opportunity alerts and official application updates straight to your WhatsApp.
          </p>
          <DoodleSquiggle className="mx-auto mt-2 text-[#2d2d2d]/40" />
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Left Column: Form & Preference Controls */}
          <div
            className="lg:col-span-5 bg-white p-6 sm:p-7 border-[3px] border-[#2d2d2d] shadow-hard relative -rotate-1"
            style={{ borderRadius: WOBBLY_RADIUS.card }}
          >
            <TapeStrip className="-top-3 left-1/3 -rotate-2" />

            <div className="flex items-center justify-between mb-4">
              <h3 className="font-marker text-xl text-[#2d2d2d]">
                Newsletter Preferences
              </h3>
              <span className="font-marker text-[11px] uppercase bg-[#c8f7c5] text-[#2d2d2d] px-2 py-0.5 border border-[#2d2d2d] rounded-sm">
                Active Service
              </span>
            </div>

            <form onSubmit={handleSimulate} className="space-y-4">
              <div>
                <label htmlFor="whatsapp-phone-input" className="block font-marker text-xs sm:text-sm uppercase text-[#2d2d2d] mb-1">
                  Mobile Number (WhatsApp)
                </label>
                <input
                  id="whatsapp-phone-input"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+55 (31) 98450-2026"
                  className="w-full min-h-[48px] px-3.5 py-2.5 bg-[#fdfbf7] border-2 border-[#2d2d2d] font-hand text-base md:text-lg text-[#2d2d2d] shadow-hard-sm focus:border-[#2d5da1] focus:outline-hidden"
                  style={{ borderRadius: WOBBLY_RADIUS.input }}
                />
                <p className="font-hand text-xs text-[#2d2d2d]/60 mt-1">
                  Supports Brazilian (+55) and European partner country codes.
                </p>
              </div>

              <div>
                <label htmlFor="whatsapp-cadence-select" className="block font-marker text-xs sm:text-sm uppercase text-[#2d2d2d] mb-1">
                  Delivery Cadence
                </label>
                <select
                  id="whatsapp-cadence-select"
                  value={deliveryDay}
                  onChange={(e) => setDeliveryDay(e.target.value)}
                  className="w-full min-h-[48px] px-3.5 py-2.5 bg-[#fdfbf7] border-2 border-[#2d2d2d] font-hand text-base md:text-lg text-[#2d2d2d] shadow-hard-sm focus:border-[#2d5da1] focus:outline-hidden cursor-pointer"
                  style={{ borderRadius: WOBBLY_RADIUS.input }}
                >
                  <option value="Monday 09:00 BRT">Every Monday at 09:00 BRT (Recommended)</option>
                  <option value="Thursday 18:00 CET">Every Thursday at 18:00 CET</option>
                  <option value="Instant on new call">Real-time alert on newly published call</option>
                </select>
              </div>

              {justUpdated && (
                <div className="p-2.5 bg-[#c8f7c5] text-[#2d2d2d] border-2 border-[#2d2d2d] font-marker text-xs rounded-sm shadow-hard-sm flex items-center gap-1.5 animate-fadeIn">
                  <CheckCheck className="w-4 h-4 text-[#2d5da1] shrink-0" />
                  <span>Preferences saved! WhatsApp Newsletter active for {phoneNumber}.</span>
                </div>
              )}

              <HandDrawnButton
                type="submit"
                variant="accent"
                className="w-full min-h-[48px]"
              >
                <span>Save & Activate Newsletter</span>
              </HandDrawnButton>
            </form>
          </div>

          {/* Right Column: Live WhatsApp Delivery (Fluid max-width for 320px screens) */}
          <div className="lg:col-span-7 flex justify-center w-full px-1 sm:px-2">
            {/* Sketched Phone Chassis */}
            <div
              className={`w-full max-w-[285px] xs:max-w-[340px] sm:max-w-[380px] bg-white p-2 sm:p-3 border-[3px] sm:border-[4px] border-[#2d2d2d] shadow-hard-lg transition-all duration-200 rotate-1 relative ${
                osFrame === 'ios'
                  ? 'rounded-[32px] sm:rounded-[44px]'
                  : 'rounded-[22px] sm:rounded-[32px]'
              }`}
            >
              {/* Tape on phone top */}
              <TapeStrip className="-top-3 left-1/2 -translate-x-1/2 -rotate-2" />

              {/* Phone Screen */}
              <div
                className={`w-full h-[460px] xs:h-[490px] sm:h-[530px] bg-[#fdfbf7] text-[#2d2d2d] flex flex-col overflow-hidden relative border-2 border-[#2d2d2d] ${
                  osFrame === 'ios' ? 'rounded-[24px] sm:rounded-[34px]' : 'rounded-[18px] sm:rounded-[24px]'
                }`}
              >
                {/* Status Bar */}
                <div className="h-7 bg-[#e5e0d8] px-4 sm:px-5 flex items-center justify-between font-mono text-[11px] text-[#2d2d2d] border-b border-[#2d2d2d] shrink-0">
                  <span>09:41</span>
                  {osFrame === 'ios' ? (
                    <div className="w-14 sm:w-16 h-3.5 bg-[#2d2d2d] rounded-full" />
                  ) : (
                    <div className="w-2.5 h-2.5 rounded-full bg-[#2d2d2d]" />
                  )}
                  <span>5G · 100%</span>
                </div>

                {/* WhatsApp Chat Top Bar */}
                <div className="bg-[#2d5da1] text-white px-2.5 sm:px-3 py-2 sm:py-2.5 flex items-center justify-between border-b-2 border-[#2d2d2d] shrink-0">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#fff9c4] text-[#2d2d2d] flex items-center justify-center p-1 border border-[#2d2d2d] shrink-0">
                      <img src={eloLogo} alt="ELO" className="w-5 h-5 object-contain" />
                    </div>
                    <div>
                      <div className="font-marker text-xs sm:text-sm leading-tight flex items-center gap-1">
                        <span>ELO Mobility Office</span>
                      </div>
                      <div className="font-hand text-[10px] sm:text-[11px] text-white/90 leading-none mt-0.5">
                        EUNICE, Latam, Opportunities · Verified
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-white">
                    <Video strokeWidth={2.5} className="w-4 h-4" />
                    <Phone strokeWidth={2.5} className="w-4 h-4" />
                    <MoreVertical strokeWidth={2.5} className="w-4 h-4" />
                  </div>
                </div>

                {/* Chat Background & Message Stream */}
                <div className="flex-1 p-2.5 sm:p-3 overflow-y-auto space-y-3 bg-[#fdfbf7]">

                  {/* Active WhatsApp Digest Speech Bubble */}
                  {isDigestGenerated && (
                    <div className="flex flex-col items-start max-w-[96%] sm:max-w-[94%]">
                      <div
                        className="bg-white text-[#2d2d2d] p-3 border-2 border-[#2d2d2d] shadow-hard font-hand text-base sm:text-lg leading-snug space-y-2 relative"
                        style={{ borderRadius: WOBBLY_RADIUS.card }}
                      >
                        <p>{digestText}</p>

                        {/* Interactive In-Message Application Card */}
                        <div
                          className="bg-[#fff9c4] p-2.5 sm:p-3 border-2 border-[#2d2d2d] shadow-hard-sm space-y-2 mt-1 -rotate-1"
                          style={{ borderRadius: WOBBLY_RADIUS.card }}
                        >
                          <div className="flex items-center justify-between font-marker text-xs text-[#2d5da1]">
                            <span>MATCH #1 · {opp1.stipendAmount.split('·')[0]}</span>
                            <span>{opp1.hostCountry}</span>
                          </div>
                          <div className="font-marker text-xs sm:text-sm text-[#2d2d2d] line-clamp-1">
                            {opp1.title}
                          </div>
                          <button
                            type="button"
                            onClick={() => onSelectOpportunity(opp1.id)}
                            className="btn-hand-drawn w-full min-h-[48px] py-2.5 px-3 bg-[#ff4d4d] text-white font-hand text-base font-bold flex items-center justify-center gap-1.5 cursor-pointer"
                            style={{ borderRadius: WOBBLY_RADIUS.button }}
                          >
                            <span>Open Application Packet</span>
                            <ExternalLink strokeWidth={2.5} className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Message Metadata */}
                        <div className="flex items-center justify-end gap-1 text-xs text-[#2d2d2d]/60 font-mono pt-0.5">
                          <span>09:00</span>
                          <CheckCheck strokeWidth={2.5} className="w-4 h-4 text-[#2d5da1]" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Custom Simulated User & Bot Replies */}
                  {chatMessages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex flex-col ${
                        msg.sender === 'user' ? 'items-end' : 'items-start'
                      }`}
                    >
                      <div
                        className={`p-2.5 font-hand text-sm sm:text-base max-w-[85%] border-2 border-[#2d2d2d] shadow-hard-sm ${
                          msg.sender === 'user'
                            ? 'bg-[#c8f7c5] text-[#2d2d2d] -rotate-1'
                            : 'bg-white text-[#2d2d2d] rotate-1'
                        }`}
                        style={{ borderRadius: WOBBLY_RADIUS.card }}
                      >
                        <p>{msg.text}</p>
                        <div className="flex items-center justify-end gap-1 text-[10px] text-[#2d2d2d]/60 font-mono mt-0.5">
                          <span>{msg.time}</span>
                          {msg.sender === 'user' && (
                            <CheckCheck strokeWidth={2} className="w-3.5 h-3.5 text-[#2d5da1]" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp Chat Input Bar */}
                <form
                  onSubmit={handleSendReply}
                  className="bg-[#e5e0d8] px-2 sm:px-3 py-2 flex items-center gap-2 border-t-2 border-[#2d2d2d] shrink-0"
                >
                  <label htmlFor="whatsapp-chat-reply-input" className="sr-only">
                    Type a WhatsApp reply
                  </label>
                  <input
                    id="whatsapp-chat-reply-input"
                    type="text"
                    value={customReply}
                    onChange={(e) => setCustomReply(e.target.value)}
                    placeholder="Type response..."
                    className="flex-1 bg-white font-hand text-base text-[#2d2d2d] placeholder-[#2d2d2d]/40 px-3 py-2 min-h-[48px] border border-[#2d2d2d] rounded-full focus:outline-hidden"
                  />
                  <button
                    type="submit"
                    className="w-12 h-12 min-w-[48px] min-h-[48px] rounded-full bg-[#ff4d4d] text-white border border-[#2d2d2d] flex items-center justify-center shrink-0 cursor-pointer shadow-hard-sm active:translate-x-[1px] active:translate-y-[1px]"
                    aria-label="Send reply message"
                  >
                    <Send strokeWidth={2.5} className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
