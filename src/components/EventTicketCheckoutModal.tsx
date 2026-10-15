import React, { useState } from 'react';
import { LocalSeminar } from '../data/localCampusData';
import { University, StudentProfile } from '../types';
import { WOBBLY_RADIUS } from '../theme/handDrawnTokens';
import { TapeStrip, Thumbtack } from './ui/HandDrawnPrimitives';
import {
  Ticket,
  X,
  ShieldCheck,
  Lock,
  CheckCircle2,
  Calendar,
  MapPin,
  Building2,
  Download,
  AlertCircle,
  Share2,
  QrCode,
  User,
  Mail,
  GraduationCap,
} from 'lucide-react';

interface EventTicketCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  seminar: LocalSeminar | null;
  university: University;
  profile: StudentProfile;
  onTicketPurchased?: (ticketId: string, seminarId: string) => void;
}

export const EventTicketCheckoutModal: React.FC<EventTicketCheckoutModalProps> = ({
  isOpen,
  onClose,
  seminar,
  university,
  profile,
  onTicketPurchased,
}) => {
  // Form State
  const [studentName, setStudentName] = useState(profile.studentName || 'Mariana Silva');
  const [email, setEmail] = useState('mariana.silva@aluno.ufv.br');
  const [studentId, setStudentId] = useState('MAT-2026-9842');
  const [ticketQuantity, setTicketQuantity] = useState<number>(1);

  // Card form simulation
  const [cardNumber, setCardNumber] = useState('•••• •••• •••• 4242');
  const [cardExpiry, setCardExpiry] = useState('12/28');
  const [cardCvc, setCardCvc] = useState('999');

  // Checkout flow state: 'form' -> 'processing' -> 'success'
  const [checkoutStep, setCheckoutStep] = useState<'form' | 'processing' | 'success'>('form');
  const [processingMessage, setProcessingMessage] = useState('Initializing Stripe Checkout...');
  const [generatedTicketId, setGeneratedTicketId] = useState<string>('');
  const [isCopied, setIsCopied] = useState(false);

  // Sync state when seminar opens
  React.useEffect(() => {
    if (isOpen) {
      setCheckoutStep('form');
      if (profile.studentName) {
        setStudentName(profile.studentName);
      }
    }
  }, [isOpen, profile.studentName]);

  if (!isOpen || !seminar) return null;

  const basePriceStr = seminar.ticketPrice || '€ 15.00';
  const unitPrice = seminar.ticketPriceNumeric || 15;
  const currencySymbol = basePriceStr.includes('R$')
    ? 'R$'
    : basePriceStr.includes('SEK')
    ? 'SEK'
    : '€';
  const totalPrice = unitPrice * ticketQuantity;
  const formattedTotalPrice = `${currencySymbol} ${totalPrice.toFixed(2)}`;

  const handleStartStripePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutStep('processing');
    setProcessingMessage('Establishing encrypted handshake with Stripe Payments...');

    setTimeout(() => {
      setProcessingMessage('Performing 3D-Secure 2.0 cardholder authentication via Stripe...');
    }, 900);

    setTimeout(() => {
      setProcessingMessage('Generating verifiable digital pass & validating campus registration...');
    }, 1800);

    setTimeout(() => {
      const ticketId = `ELO-TKT-${university.countryCode}-${Math.floor(100000 + Math.random() * 900000)}`;
      setGeneratedTicketId(ticketId);
      setCheckoutStep('success');
      if (onTicketPurchased) {
        onTicketPurchased(ticketId, seminar.id);
      }
    }, 2500);
  };

  const handleDownloadTicketPdf = () => {
    const textContent =
      `=== OFFICIAL ACADEMIC WORKSHOP & EVENT PASS ===\n` +
      `TICKET ID: ${generatedTicketId}\n` +
      `EVENT: ${seminar.title}\n` +
      `HOST INSTITUTION: ${university.name} (${university.city}, ${university.country})\n` +
      `ATTENDEE: ${studentName} (${studentId})\n` +
      `EMAIL: ${email}\n` +
      `DATE & TIME: ${seminar.date} · ${seminar.time}\n` +
      `LOCATION / LAB: ${seminar.location}\n` +
      `TICKET PRICE: ${formattedTotalPrice} (Payment delegated & settled via Stripe)\n` +
      `STRIPE TRANSACTION ID: ch_demo_${Date.now()}\n` +
      `STATUS: CONFIRMED & VALIDATED FOR CAMPUS ADMISSION\n`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Pass-${generatedTicketId}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleCopyTicketCode = () => {
    navigator.clipboard?.writeText(generatedTicketId);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="ticket-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-2.5 sm:p-4 md:p-6"
    >
      <div
        className="relative w-full max-w-2xl bg-white border-[3px] border-[#2d2d2d] shadow-hard-lg my-auto p-4 sm:p-6 md:p-7 transition-all text-[#2d2d2d] max-h-[94vh] flex flex-col"
        style={{ borderRadius: WOBBLY_RADIUS.card }}
      >
        {/* Binder Tape strip on modal top - hidden on extra small screens to avoid overflow */}
        <TapeStrip className="-top-3 left-10 -rotate-1 hidden sm:block pointer-events-none" />
        <TapeStrip className="-top-3 right-10 rotate-2 hidden sm:block pointer-events-none" />
        <Thumbtack className="top-2 sm:top-3 right-2 sm:right-3 text-[#ff4d4d] hidden xs:block pointer-events-none" />

        {/* Close button with 44px+ touch target */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-[#fff9c4] text-[#2d2d2d] border border-transparent hover:border-[#2d2d2d] transition-all cursor-pointer z-20"
          aria-label="Close checkout modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Scrollable Container */}
        <div className="overflow-y-auto pr-1 sm:pr-2 -mr-1 sm:-mr-2 scrollbar-thin">
          {/* Top Header Badge */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap mb-2 sm:mb-3 pr-10">
            <span
              className="px-2.5 py-0.5 bg-[#ff4d4d] text-white font-marker text-[11px] sm:text-xs uppercase tracking-wider inline-flex items-center gap-1.5"
              style={{ borderRadius: WOBBLY_RADIUS.badge }}
            >
              <Ticket className="w-3.5 h-3.5 shrink-0" />
              <span>Event & Workshop Pass · Official Campus</span>
            </span>
            <span
              className="px-2 py-0.5 bg-[#fdfbf7] border border-[#2d2d2d] font-hand text-[11px] sm:text-xs text-[#2d2d2d]/80 inline-flex items-center gap-1"
              style={{ borderRadius: WOBBLY_RADIUS.badge }}
            >
              <Building2 className="w-3.5 h-3.5 text-[#2d5da1] shrink-0" />
              <span>{university.shortName}</span>
            </span>
          </div>

          {/* ================= STEP 1: FORM & CHECKOUT ================= */}
          {checkoutStep === 'form' && (
            <div>
              <h2
                id="ticket-modal-title"
                className="text-xl sm:text-2xl md:text-3xl font-marker text-[#2d2d2d] leading-tight mb-1 sm:mb-1.5"
              >
                Reserve & Purchase Workshop Pass
              </h2>
              <p className="font-hand text-xs sm:text-sm text-[#2d2d2d]/80 mb-3 sm:mb-4">
                Secure your official admission to this academic lab workshop held on campus.
              </p>

              {/* Event Summary Card */}
              <div
                className="bg-[#fdfbf7] border-2 border-[#2d2d2d] p-3 sm:p-4 rounded-lg shadow-hard-xs mb-4"
                style={{ borderRadius: WOBBLY_RADIUS.cardAlt }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-2.5">
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] sm:text-[11px] font-marker uppercase px-2 py-0.5 bg-[#fff9c4] border border-[#2d2d2d] rounded-sm text-[#2d2d2d] inline-block mb-1">
                      {seminar.category} · {seminar.field}
                    </span>
                    <h3 className="font-marker text-base sm:text-lg text-[#2d2d2d] leading-snug">
                      {seminar.title}
                    </h3>
                    <div className="font-hand text-xs text-[#2d2d2d]/70 mt-1">
                      Instructor: <strong className="text-[#2d2d2d]">{seminar.speaker}</strong> ({seminar.speakerRole})
                    </div>
                  </div>

                  {/* PROMINENT TICKET PRICE HIGHLIGHT */}
                  <div className="w-full sm:w-auto bg-[#fff9c4] border-2 border-[#2d2d2d] p-2 sm:px-3.5 sm:py-2 rounded-lg text-center shadow-hard-xs sm:-rotate-1 shrink-0 flex sm:flex-col items-center justify-between sm:justify-center gap-1 sm:gap-0 self-stretch sm:self-start">
                    <div className="text-[10px] sm:text-[11px] font-marker uppercase tracking-wider text-[#2d2d2d]/70">
                      Ticket Price
                    </div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-marker font-bold text-[#ff4d4d] leading-none my-0.5">
                      {basePriceStr}
                    </div>
                    <div className="text-[10px] font-hand font-bold text-emerald-700">
                      Discounted Student Rate
                    </div>
                  </div>
                </div>

                {/* Date & Location badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 pt-2 border-t border-dashed border-[#2d2d2d]/20 text-xs font-hand text-[#2d2d2d]/80">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#ff4d4d] shrink-0" />
                    <span><strong>Date:</strong> {seminar.date} ({seminar.time})</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#2d5da1] shrink-0" />
                    <span className="truncate"><strong>Location:</strong> {seminar.location}</span>
                  </div>
                </div>

                {/* What is included in this ticket */}
                {seminar.ticketBenefits && seminar.ticketBenefits.length > 0 && (
                  <div className="mt-2.5 pt-2 border-t border-dashed border-[#2d2d2d]/20">
                    <div className="text-[10px] sm:text-[11px] font-marker uppercase tracking-wider text-[#2d2d2d]/70 mb-1 flex items-center gap-1">
                      <span>Included with this pass:</span>
                    </div>
                    <ul className="space-y-1">
                      {seminar.ticketBenefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-xs font-hand text-[#2d2d2d]/85">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <form onSubmit={handleStartStripePayment} className="space-y-3.5 sm:space-y-4">
                {/* Attendee details: mobile-friendly inputs with text-base to prevent iOS zoom */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  <div>
                    <label className="block text-xs font-marker uppercase tracking-wide text-[#2d2d2d]/80 mb-1">
                      <User className="w-3 h-3 inline mr-1 text-[#2d5da1]" />
                      Student Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      className="w-full px-3 py-2 text-base sm:text-sm min-h-[44px] bg-white border-2 border-[#2d2d2d] shadow-hard-xs font-hand focus:outline-hidden focus:border-[#2d5da1]"
                      style={{ borderRadius: WOBBLY_RADIUS.input }}
                      placeholder="e.g. Mariana Silva"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-marker uppercase tracking-wide text-[#2d2d2d]/80 mb-1">
                      <Mail className="w-3 h-3 inline mr-1 text-[#2d5da1]" />
                      Academic Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 text-base sm:text-sm min-h-[44px] bg-white border-2 border-[#2d2d2d] shadow-hard-xs font-hand focus:outline-hidden focus:border-[#2d5da1]"
                      style={{ borderRadius: WOBBLY_RADIUS.input }}
                      placeholder="email@university.edu"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  <div>
                    <label className="block text-xs font-marker uppercase tracking-wide text-[#2d2d2d]/80 mb-1">
                      <GraduationCap className="w-3 h-3 inline mr-1 text-[#ff4d4d]" />
                      Student ID / Enrollment
                    </label>
                    <input
                      type="text"
                      required
                      value={studentId}
                      onChange={(e) => setStudentId(e.target.value)}
                      className="w-full px-3 py-2 text-base sm:text-sm min-h-[44px] bg-white border-2 border-[#2d2d2d] shadow-hard-xs font-hand focus:outline-hidden focus:border-[#2d5da1]"
                      style={{ borderRadius: WOBBLY_RADIUS.input }}
                      placeholder="e.g. MAT-2026-9842"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-marker uppercase tracking-wide text-[#2d2d2d]/80 mb-1">
                      Ticket Quantity
                    </label>
                    <select
                      value={ticketQuantity}
                      onChange={(e) => setTicketQuantity(Number(e.target.value))}
                      className="w-full px-3 py-2 text-base sm:text-sm min-h-[44px] bg-white border-2 border-[#2d2d2d] shadow-hard-xs font-hand focus:outline-hidden focus:border-[#2d5da1] cursor-pointer"
                      style={{ borderRadius: WOBBLY_RADIUS.input }}
                    >
                      <option value={1}>1 Single Pass ({basePriceStr})</option>
                      <option value={2}>2 Passes (You + Lab Colleague)</option>
                    </select>
                  </div>
                </div>

                {/* EXPLICIT STRIPE DELEGATION NOTICE BOX */}
                <div
                  className="bg-[#f0f4fc] border-2 border-[#2d5da1] p-3 sm:p-3.5 rounded-lg shadow-hard-xs"
                  style={{ borderRadius: WOBBLY_RADIUS.cardAlt }}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5 sm:mb-2">
                    <div className="flex items-center gap-1.5 text-xs font-marker text-[#2d5da1] uppercase tracking-wide">
                      <ShieldCheck className="w-4 h-4 text-[#2d5da1] shrink-0" />
                      <span>Payment Delegated to Stripe</span>
                    </div>
                    {/* Stripe Pill Brand Badge */}
                    <div className="flex items-center gap-1 px-2 py-0.5 bg-white border border-[#2d5da1] rounded text-[11px] font-bold text-[#635BFF] shrink-0">
                      <span>Powered by</span>
                      <span className="font-extrabold tracking-tight">stripe</span>
                    </div>
                  </div>

                  <p className="font-hand text-xs text-[#2d2d2d]/85 leading-relaxed">
                    To guarantee maximum security and compliance with European banking regulations (PSD2 / Strong Customer Authentication),
                    <strong> payment processing is entirely delegated to Stripe</strong> (Stripe Payments Europe, PCI-DSS Level 1 certified).
                    Card details are transmitted directly to Stripe&apos;s encrypted vault and never stored on this site.
                  </p>

                  {/* Demo disclaimer */}
                  <div className="mt-2 pt-2 border-t border-[#2d5da1]/20 flex items-start gap-1.5 text-[11px] font-hand text-[#2d5da1]">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span>
                      <strong>ELO Demonstration Sandbox:</strong> No actual monetary charge will be billed. Clicking &quot;Pay with Stripe&quot; executes a verified checkout simulation.
                    </span>
                  </div>

                  {/* Simulated Stripe card input box - Mobile-first responsive layout */}
                  <div className="mt-2.5 bg-white p-2.5 border border-[#2d2d2d]/30 rounded-md">
                    <div className="flex items-center justify-between text-[11px] font-marker uppercase text-[#2d2d2d]/60 mb-1.5">
                      <span>Card Details (Stripe Elements Sandbox)</span>
                      <Lock className="w-3 h-3 text-emerald-600 inline" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
                      <div className="sm:col-span-7">
                        <input
                          type="text"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          className="w-full text-xs font-mono p-2 bg-gray-50 border border-gray-300 rounded focus:outline-hidden min-h-[38px]"
                          placeholder="Card number"
                        />
                      </div>
                      <div className="grid grid-cols-2 sm:col-span-5 gap-2">
                        <input
                          type="text"
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          className="w-full text-xs font-mono p-2 bg-gray-50 border border-gray-300 rounded focus:outline-hidden text-center min-h-[38px]"
                          placeholder="MM/YY"
                        />
                        <input
                          type="text"
                          value={cardCvc}
                          onChange={(e) => setCardCvc(e.target.value)}
                          className="w-full text-xs font-mono p-2 bg-gray-50 border border-gray-300 rounded focus:outline-hidden text-center min-h-[38px]"
                          placeholder="CVC"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* CHECKOUT TOTAL BANNER & SUBMIT BUTTON */}
                <div className="pt-3 border-t-2 border-dashed border-[#2d2d2d]/25 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <div>
                    <div className="text-xs font-hand text-[#2d2d2d]/70">
                      Total Amount Due:
                    </div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl sm:text-3xl font-marker font-bold text-[#2d5da1]">
                        {formattedTotalPrice}
                      </span>
                      <span className="text-xs font-hand text-emerald-700 font-bold">
                        (All fees & lab materials included)
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center gap-2">
                    <button
                      type="button"
                      onClick={onClose}
                      className="btn-hand-drawn px-4 py-2.5 text-xs sm:text-sm font-marker bg-white hover:bg-gray-100 text-[#2d2d2d] min-h-[44px] cursor-pointer text-center"
                      style={{ borderRadius: WOBBLY_RADIUS.button }}
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="btn-hand-drawn px-5 py-2.5 text-xs sm:text-sm font-marker bg-[#635BFF] hover:bg-[#5349e4] text-white inline-flex items-center justify-center gap-2 min-h-[44px] cursor-pointer shadow-hard-sm"
                      style={{ borderRadius: WOBBLY_RADIUS.button }}
                    >
                      <Lock className="w-4 h-4 shrink-0" />
                      <span>Pay {formattedTotalPrice} with Stripe (Demo)</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}

          {/* ================= STEP 2: PROCESSING ================= */}
          {checkoutStep === 'processing' && (
            <div className="py-10 sm:py-14 px-3 sm:px-6 text-center space-y-4">
              <div className="relative w-16 h-16 mx-auto">
                <div className="w-16 h-16 border-4 border-[#635BFF]/20 border-t-[#635BFF] rounded-full animate-spin" />
                <Lock className="w-6 h-6 text-[#635BFF] absolute inset-0 m-auto" />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-marker text-[#2d2d2d]">
                  Processing Stripe Payment...
                </h3>
                <p className="text-xs sm:text-sm font-hand text-[#2d2d2d]/80 max-w-md mx-auto">
                  {processingMessage}
                </p>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f0f4fc] border border-[#2d5da1] rounded-full text-xs font-hand text-[#2d5da1]">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Secured TLS 1.3 connection with Stripe API</span>
              </div>
            </div>
          )}

          {/* ================= STEP 3: SUCCESS & DIGITAL TICKET ================= */}
          {checkoutStep === 'success' && (
            <div className="space-y-4 sm:space-y-5">
              {/* Success Header */}
              <div className="text-center space-y-1">
                <div className="inline-flex p-2.5 sm:p-3 rounded-full bg-emerald-100 border-2 border-[#2d2d2d] shadow-hard-xs mb-1">
                  <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-600" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-marker text-[#2d2d2d]">
                  Payment Succeeded & Pass Confirmed!
                </h2>
                <p className="font-hand text-xs sm:text-sm text-[#2d2d2d]/80 max-w-md mx-auto">
                  Stripe transaction completed. Your official student pass is confirmed for department and lab access.
                </p>
              </div>

              {/* VINTAGE / MODERN BOARDING PASS TICKET CARD */}
              <div
                className="bg-[#fff9c4] border-[3px] border-[#2d2d2d] p-3.5 sm:p-5 shadow-hard relative overflow-hidden"
                style={{ borderRadius: WOBBLY_RADIUS.card }}
              >
                {/* Top Ticket strip */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 border-b-2 border-dashed border-[#2d2d2d]/30 pb-3 mb-3">
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-marker uppercase px-2 py-0.5 bg-[#2d5da1] text-white rounded-sm inline-block mb-1">
                      Official Academic Pass
                    </span>
                    <div className="font-marker text-base sm:text-lg md:text-xl text-[#2d2d2d] leading-snug">
                      {seminar.title}
                    </div>
                    <div className="font-hand text-xs text-[#2d2d2d]/70">
                      {university.name} · {university.city}, {university.country}
                    </div>
                  </div>

                  <div className="sm:text-right shrink-0 bg-white/60 sm:bg-transparent p-1.5 sm:p-0 rounded border sm:border-0 border-[#2d2d2d]/20 flex sm:block items-center justify-between">
                    <div className="text-[10px] font-marker uppercase text-[#2d2d2d]/60">Ticket ID</div>
                    <div className="text-sm sm:text-base font-mono font-bold text-[#ff4d4d]">
                      {generatedTicketId}
                    </div>
                  </div>
                </div>

                {/* Ticket Details Grid: mobile-friendly 2 cols on mobile, 4 cols on tablet/desktop */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-xs font-hand text-[#2d2d2d] mb-3">
                  <div>
                    <span className="block text-[#2d2d2d]/60 font-marker text-[10px] uppercase">Attendee</span>
                    <strong className="text-xs sm:text-sm truncate block">{studentName}</strong>
                  </div>
                  <div>
                    <span className="block text-[#2d2d2d]/60 font-marker text-[10px] uppercase">Student ID</span>
                    <strong className="text-xs sm:text-sm truncate block">{studentId}</strong>
                  </div>
                  <div>
                    <span className="block text-[#2d2d2d]/60 font-marker text-[10px] uppercase">Date & Time</span>
                    <strong className="text-xs sm:text-sm">{seminar.date}</strong>
                    <div className="text-[10px] sm:text-[11px] text-[#2d2d2d]/70">{seminar.time}</div>
                  </div>
                  <div>
                    <span className="block text-[#2d2d2d]/60 font-marker text-[10px] uppercase">Amount Paid</span>
                    <strong className="text-xs sm:text-sm text-emerald-700 font-bold block">{formattedTotalPrice}</strong>
                    <div className="text-[10px] text-emerald-600 font-bold">Via Stripe</div>
                  </div>
                </div>

                {/* Lab location */}
                <div className="bg-white/80 p-2 sm:p-2.5 border border-[#2d2d2d]/25 rounded text-xs font-hand mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#ff4d4d] shrink-0" />
                  <span className="truncate">
                    <strong>Assigned Workstation & Lab:</strong> {seminar.location}
                  </span>
                </div>

                {/* Barcode / QR Simulation Footer */}
                <div className="pt-2.5 border-t-2 border-dashed border-[#2d2d2d]/30 flex flex-col xs:flex-row items-center justify-between gap-2.5">
                  <div className="flex items-center gap-2.5 w-full xs:w-auto">
                    {/* Visual QR Code SVG */}
                    <div className="w-10 h-10 sm:w-11 sm:h-11 bg-white border border-[#2d2d2d] p-1 flex items-center justify-center shrink-0 shadow-xs">
                      <QrCode className="w-8 h-8 text-[#2d2d2d]" />
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-mono text-[#2d2d2d]/75 leading-tight">
                      <div>SCAN_AT_CAMPUS_ENTRY</div>
                      <div className="text-[9px] text-[#2d2d2d]/60">STRIPE_TX_DEMO_OK</div>
                    </div>
                  </div>

                  <div className="w-full xs:w-auto flex justify-end">
                    <span className="px-2.5 py-1 bg-emerald-600 text-white font-marker text-xs rounded-sm inline-flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>Valid at Check-in</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Action buttons: mobile-friendly layout */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleCopyTicketCode}
                  className="btn-hand-drawn px-4 py-2.5 text-xs font-marker bg-white hover:bg-gray-100 text-[#2d2d2d] inline-flex items-center justify-center gap-1.5 min-h-[44px] cursor-pointer"
                  style={{ borderRadius: WOBBLY_RADIUS.button }}
                >
                  <Share2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{isCopied ? 'ID Copied!' : 'Copy Ticket ID'}</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleDownloadTicketPdf}
                    className="btn-hand-drawn px-4 py-2.5 text-xs font-marker bg-[#2d5da1] hover:bg-[#234b82] text-white inline-flex items-center justify-center gap-1.5 min-h-[44px] cursor-pointer shadow-hard-xs flex-1 sm:flex-initial"
                    style={{ borderRadius: WOBBLY_RADIUS.button }}
                  >
                    <Download className="w-3.5 h-3.5 shrink-0" />
                    <span>Download Pass</span>
                  </button>

                  <button
                    type="button"
                    onClick={onClose}
                    className="btn-hand-drawn px-5 py-2.5 text-xs font-marker bg-emerald-600 hover:bg-emerald-700 text-white inline-flex items-center justify-center gap-1 min-h-[44px] cursor-pointer shadow-hard-xs flex-1 sm:flex-initial"
                    style={{ borderRadius: WOBBLY_RADIUS.button }}
                  >
                    <span>Done</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
