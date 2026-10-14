import React, { useState } from 'react';
import eloLogo from '../ELO_logo.svg';
import { AcademicGoal, STEMField, StudentProfile } from '../types';
import { UNIVERSITIES, STEM_FIELDS, ACADEMIC_GOALS } from '../data/universities';
import {
  Building2,
  Cpu,
  GraduationCap,
  ArrowRight,
  Check,
  Eye,
  Globe,
  Sun,
  Compass,
} from 'lucide-react';
import {
  HandDrawnCard,
  HandDrawnButton,
  HandDrawnInput,
  TapeStrip,
  Thumbtack,
  DoodleSquiggle,
} from './ui/HandDrawnPrimitives';
import { WOBBLY_RADIUS } from '../theme/handDrawnTokens';
import { StackedUniversityCarousel } from './StackedUniversityCarousel';

interface OnboardingWizardProps {
  initialProfile?: StudentProfile;
  onComplete: (profile: StudentProfile) => void;
  onCancel?: () => void;
  isEditing?: boolean;
}

export const OnboardingWizard: React.FC<OnboardingWizardProps> = ({
  initialProfile,
  onComplete,
  onCancel,
  isEditing = false,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedUniversity, setSelectedUniversity] = useState<string>(
    initialProfile?.universityId || 'ufv'
  );
  const [selectedField, setSelectedField] = useState<STEMField>(
    initialProfile?.field || 'Robotics & Mechatronics'
  );
  const [selectedGoals, setSelectedGoals] = useState<AcademicGoal[]>(() => {
    if (initialProfile?.goals && initialProfile.goals.length > 0) {
      return initialProfile.goals;
    }
    if (initialProfile?.goal) {
      return [initialProfile.goal];
    }
    return ['Campus News & Lurking', 'Research Internship'];
  });
  const [studentName, setStudentName] = useState<string>(() => {
    if (isEditing && initialProfile?.studentName && initialProfile.studentName !== 'Mariana Silva') {
      return initialProfile.studentName;
    }
    return '';
  });

  const handleToggleGoal = (goal: AcademicGoal) => {
    setSelectedGoals((prev) => {
      if (prev.includes(goal)) {
        if (prev.length === 1) return prev; // keep at least one
        return prev.filter((g) => g !== goal);
      } else {
        return [...prev, goal];
      }
    });
  };

  const handleSelectAllGoals = () => {
    setSelectedGoals([...ACADEMIC_GOALS]);
  };

  const handleSelectJustLurking = () => {
    setSelectedGoals(['Campus News & Lurking']);
  };

  const handleFinish = () => {
    const activeGoals = selectedGoals.length > 0 ? selectedGoals : (['Campus News & Lurking'] as AcademicGoal[]);
    const primaryGoal = activeGoals[0];
    const isLurking = activeGoals.includes('Campus News & Lurking');

    const finalProfile: StudentProfile = {
      studentName: studentName.trim() || 'Fellow Scholar',
      universityId: selectedUniversity,
      field: selectedField,
      goal: primaryGoal,
      goals: activeGoals,
      isLurking,
      hasCompletedOnboarding: true,
      acquiredSkills: initialProfile?.acquiredSkills || [],
      phoneNumber: initialProfile?.phoneNumber || '+55 (31) 98450-2026',
      languagePreference: selectedUniversity === 'ufv' ? 'pt' : 'en',
    };
    onComplete(finalProfile);
  };

  const getStepTitle = () => {
    switch (step) {
      case 1:
        return 'Where is your Home Institution?';
      case 2:
        return 'What is your core STEM focus?';
      case 3:
        return 'What are you looking to explore?';
    }
  };

  const getStepSubtitle = () => {
    switch (step) {
      case 1:
        return 'Choose between Universidade Federal de Viçosa (Brazil) or one of the 10 EUNICE European partners.';
      case 2:
        return 'We tailor research labs, faculty mentors, and transatlantic agreements to your exact discipline.';
      case 3:
        return 'Flexible multi-select: pick one or more mobility frameworks, or simply browse campus news, seminars, and calls without rigid constraints!';
    }
  };

  return (
    <div className="min-h-screen py-6 sm:py-10 px-2 sm:px-6 lg:px-8 flex flex-col items-center justify-center select-none w-full">
      <div className="w-full max-w-4xl relative">
        {/* Binder Tape strips */}
        <TapeStrip className="-top-3 left-8 sm:left-12 -rotate-2" />
        <TapeStrip className="-top-3 right-8 sm:right-12 rotate-3" />

        {/* Notebook sheet container */}
        <div
          className="bg-white border-[3px] border-[#2d2d2d] shadow-hard-lg p-3.5 sm:p-8 md:p-10 relative"
          style={{ borderRadius: WOBBLY_RADIUS.card }}
        >
          {/* Header & Hand-drawn segmented progress */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center justify-between text-base font-hand text-[#2d2d2d] mb-2">
              <span className="font-marker text-xs sm:text-sm uppercase tracking-wider text-[#2d5da1] flex items-center gap-2">
                <img src={eloLogo} alt="" className="w-5 h-5 object-contain inline-block" />
                <span>ELO · {isEditing ? 'UPDATE PROFILE' : 'STUDENT INTAKE SKETCHBOOK'}</span>
                <span className="font-hand text-xs text-[#2d2d2d]/60 hidden md:inline font-normal lowercase">
                  (EUNICE, Latam, Opportunities)
                </span>
              </span>
              <span className="font-marker font-bold text-base sm:text-lg text-[#ff4d4d]">
                Step {step} of 3
              </span>
            </div>

            {/* Hand-Drawn Segmented Progress Bar */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-3 sm:h-3.5 border-2 border-[#2d2d2d] transition-all duration-150 ${
                    s <= step ? 'bg-[#ff4d4d]' : 'bg-[#e5e0d8]'
                  }`}
                  style={{ borderRadius: WOBBLY_RADIUS.badge }}
                />
              ))}
            </div>
          </div>

          {/* Step Heading */}
          <div className="mb-5 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-marker text-[#2d2d2d] mb-1">
              {getStepTitle()}
            </h2>
            <p className="font-hand text-base sm:text-lg text-[#2d2d2d]/70 leading-snug">
              {getStepSubtitle()}
            </p>
            <DoodleSquiggle className="mt-2 text-[#2d2d2d]/30" />
          </div>

          {/* STEP 1: Home Institution with Stacked Card Carousel */}
          {step === 1 && (
            <div className="space-y-4">
              <StackedUniversityCarousel
                selectedUniversityId={selectedUniversity}
                onSelectUniversity={(id) => setSelectedUniversity(id)}
              />

              {/* Student Name */}
              <div className="pt-2 border-t-2 border-dashed border-[#2d2d2d]/20">
                <label htmlFor="student-full-name" className="block font-marker text-sm text-[#2d2d2d] mb-1.5">
                  Your Full Name (used on tailored letters and digests):
                </label>
                <input
                  id="student-full-name"
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Enter your full name (optional)"
                  autoComplete="off"
                  className="w-full min-h-[48px] px-3.5 py-2.5 bg-white border-2 border-[#2d2d2d] font-hand text-base sm:text-lg text-[#2d2d2d] shadow-hard-sm focus:border-[#2d5da1] focus:outline-hidden"
                  style={{ borderRadius: WOBBLY_RADIUS.input }}
                />
              </div>
            </div>
          )}

          {/* STEP 2: STEM Focus */}
          {step === 2 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {STEM_FIELDS.map((field, idx) => {
                const isSelected = selectedField === field;
                const tilt = idx % 2 === 0 ? '-rotate-1' : 'rotate-1';
                return (
                  <button
                    key={field}
                    type="button"
                    onClick={() => setSelectedField(field)}
                    className={`text-left p-4.5 border-2 border-[#2d2d2d] transition-all duration-100 flex items-start gap-3 cursor-pointer ${
                      isSelected
                        ? 'bg-[#fff9c4] shadow-hard -rotate-1 scale-[1.01]'
                        : `bg-white hover:bg-[#fdfbf7] shadow-hard-sm ${tilt} hover:rotate-0`
                    }`}
                    style={{ borderRadius: WOBBLY_RADIUS.card }}
                  >
                    <div
                      className={`w-10 h-10 border-2 border-[#2d2d2d] flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'bg-[#ff4d4d] text-white'
                          : 'bg-[#e5e0d8] text-[#2d2d2d]'
                      }`}
                      style={{ borderRadius: WOBBLY_RADIUS.button }}
                    >
                      <Cpu strokeWidth={2.5} className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="font-marker text-lg text-[#2d2d2d]">
                          {field}
                        </span>
                        {isSelected && (
                          <Check
                            strokeWidth={3}
                            className="w-5 h-5 text-[#ff4d4d] shrink-0"
                          />
                        )}
                      </div>
                      <p className="font-hand text-sm text-[#2d2d2d]/70 leading-snug">
                        {field === 'Computer Science & AI' &&
                          'Edge AI, distributed systems, cybersecurity, vehicular networks.'}
                        {field === 'Robotics & Mechatronics' &&
                          'Autonomous rovers, SLAM, agricultural robotics, ROS 2.'}
                        {field === 'Biotechnology & Life Sciences' &&
                          'CRISPR-Cas9, bio-fertilizers, enzyme engineering, molecular genetics.'}
                        {field === 'Renewable Energy & Decarbonization' &&
                          'Smart grids, wave energy, battery storage, green hydrogen.'}
                        {field === 'Materials Science & Nanotechnology' &&
                          'Ceramic composites, bio-functional polymers, surface science.'}
                        {field === 'Applied Mathematics & Modeling' &&
                          'Cryptographic protocols, differential systems, IoT networks.'}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* STEP 3: Academic Goals & Flexible Curiosity */}
          {step === 3 && (
            <div className="space-y-4">
              {/* Flexible Selection Banner & Quick Controls */}
              <div className="bg-[#fdfbf7] border-2 border-dashed border-[#2d2d2d]/30 p-3 rounded-lg flex items-center justify-between gap-3 flex-wrap">
                <div className="text-xs sm:text-sm font-hand text-[#2d2d2d]/80">
                  <span>
                    <strong>Multi-Selection Enabled:</strong> Selected <span className="font-bold text-[#2d5da1]">{selectedGoals.length}</span> of {ACADEMIC_GOALS.length} pathways. No rigid restrictions!
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleSelectJustLurking}
                    className="px-2.5 py-1 text-xs font-marker bg-white hover:bg-[#fff9c4] border border-[#2d2d2d] rounded-sm cursor-pointer shadow-hard-xs transition-colors"
                  >
                    News & Browsing Only
                  </button>
                  <button
                    type="button"
                    onClick={handleSelectAllGoals}
                    className="px-2.5 py-1 text-xs font-marker bg-[#2d5da1] text-white hover:bg-[#234b82] border border-[#2d2d2d] rounded-sm cursor-pointer shadow-hard-xs transition-colors"
                  >
                    Select All Pathways
                  </button>
                </div>
              </div>

              {/* Grid of Multi-Select Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {ACADEMIC_GOALS.map((goal, idx) => {
                  const isSelected = selectedGoals.includes(goal);
                  const tilt = idx % 2 === 0 ? '-rotate-0.5' : 'rotate-0.5';

                  const getGoalIcon = () => {
                    switch (goal) {
                      case 'Campus News & Lurking':
                        return <Eye strokeWidth={2.5} className="w-5 h-5 text-amber-600" />;
                      case 'Research Internship':
                        return <Cpu strokeWidth={2.5} className="w-5 h-5" />;
                      case "Master's Degree Scholarship":
                        return <GraduationCap strokeWidth={2.5} className="w-5 h-5" />;
                      case 'Summer School':
                        return <Sun strokeWidth={2.5} className="w-5 h-5" />;
                      case 'Exchange Semester':
                        return <Globe strokeWidth={2.5} className="w-5 h-5" />;
                    }
                  };

                  return (
                    <button
                      key={goal}
                      type="button"
                      onClick={() => handleToggleGoal(goal)}
                      className={`text-left p-4 border-2 border-[#2d2d2d] transition-all duration-100 flex items-start gap-3 cursor-pointer relative ${
                        isSelected
                          ? 'bg-[#fff9c4] shadow-hard -rotate-0.5 scale-[1.01]'
                          : `bg-white hover:bg-[#fdfbf7] shadow-hard-sm ${tilt} hover:rotate-0 opacity-80 hover:opacity-100`
                      }`}
                      style={{ borderRadius: WOBBLY_RADIUS.card }}
                    >
                      {/* Checkbox indicator */}
                      <div
                        className={`w-10 h-10 border-2 border-[#2d2d2d] flex items-center justify-center shrink-0 ${
                          isSelected
                            ? 'bg-[#ff4d4d] text-white'
                            : 'bg-[#e5e0d8] text-[#2d2d2d]'
                        }`}
                        style={{ borderRadius: WOBBLY_RADIUS.button }}
                      >
                        {getGoalIcon()}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span className="font-marker text-base sm:text-lg text-[#2d2d2d]">
                            {goal === 'Campus News & Lurking' ? 'Campus News & Casual Browsing' : goal}
                          </span>
                          <div
                            className={`w-5 h-5 border-2 border-[#2d2d2d] rounded-sm flex items-center justify-center shrink-0 transition-colors ${
                              isSelected ? 'bg-[#ff4d4d] text-white' : 'bg-white'
                            }`}
                          >
                            {isSelected && <Check strokeWidth={3} className="w-3.5 h-3.5" />}
                          </div>
                        </div>

                        <p className="font-hand text-xs sm:text-sm text-[#2d2d2d]/75 leading-snug">
                          {goal === 'Campus News & Lurking' &&
                            'Just keeping an eye on open seminars, departmental calls, and campus happenings with zero mobility pressure or rigid commitments.'}
                          {goal === 'Research Internship' &&
                            '3 to 6-month experimental research in a European partner laboratory with mobility fellowship (€1,050/month).'}
                          {goal === "Master's Degree Scholarship" &&
                            'Two-year full Master’s degree with tuition waiver, dual diploma options, and merit living stipend.'}
                          {goal === 'Summer School' &&
                            'Intensive summer/winter schools and Blended Intensive Programmes (1–4 weeks with covered accommodation and travel allowance).'}
                          {goal === 'Exchange Semester' &&
                            'Full academic exchange semester (30 ECTS credits recognized via Erasmus+ or bilateral agreement).'}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Footer Navigation Buttons */}
          <div className="mt-8 pt-6 border-t-2 border-dashed border-[#2d2d2d]/30 flex items-center justify-between gap-4">
            <div>
              {step > 1 ? (
                <HandDrawnButton
                  type="button"
                  variant="sketch"
                  size="sm"
                  onClick={() => setStep((s) => (s - 1) as 1 | 2)}
                >
                  ← Back
                </HandDrawnButton>
              ) : isEditing && onCancel ? (
                <HandDrawnButton
                  type="button"
                  variant="sketch"
                  size="sm"
                  onClick={onCancel}
                >
                  Cancel
                </HandDrawnButton>
              ) : (
                <div />
              )}
            </div>

            <div>
              {step < 3 ? (
                <HandDrawnButton
                  type="button"
                  variant="primary"
                  onClick={() => setStep((s) => (s + 1) as 2 | 3)}
                >
                  <span>Continue</span>
                  <ArrowRight strokeWidth={2.5} className="w-4 h-4 ml-1" />
                </HandDrawnButton>
              ) : (
                <HandDrawnButton
                  type="button"
                  variant="accent"
                  onClick={handleFinish}
                >
                  <span>{isEditing ? 'Save Changes' : 'Open Sketchbook (Dashboard)'}</span>
                  <ArrowRight strokeWidth={2.5} className="w-4 h-4 ml-1" />
                </HandDrawnButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
