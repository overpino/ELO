export type STEMField =
  | 'Computer Science & AI'
  | 'Robotics & Mechatronics'
  | 'Biotechnology & Life Sciences'
  | 'Renewable Energy & Decarbonization'
  | 'Materials Science & Nanotechnology'
  | 'Applied Mathematics & Modeling';

export type AcademicGoal =
  | 'Campus News & Lurking'
  | 'Research Internship'
  | "Master's Degree Scholarship"
  | 'Summer School'
  | 'Exchange Semester';

export interface StudentProfile {
  studentName?: string;
  universityId: string;
  field: STEMField;
  goal: AcademicGoal;
  goals?: AcademicGoal[];
  isLurking?: boolean;
  hasCompletedOnboarding: boolean;
  acquiredSkills?: string[];
  phoneNumber?: string;
  languagePreference?: 'pt' | 'en' | 'es' | 'fr' | 'it' | 'de' | 'pl';
}

export interface University {
  id: string;
  name: string;
  shortName: string;
  country: string;
  countryCode: string; // ISO 2-letter for flag or badge
  city: string;
  isUfv: boolean;
  isEunice: boolean;
  website: string;
  description: string;
  stemStrengths: string[];
  establishedYear: number;
  totalStudents: number;
  erasmusCode?: string;
  accentColor: string;
}

export interface SkillGapItem {
  name: string;
  category: 'prerequisite' | 'missing_gap';
  description: string;
  bridgeCourse?: {
    title: string;
    duration: string;
    provider: string;
    difficulty: 'Introductory' | 'Intermediate' | 'Advanced';
    linkText: string;
    syllabus: string[];
  };
}

export interface Opportunity {
  id: string;
  title: string;
  universityId: string;
  department: string;
  hostCountry: string;
  field: STEMField;
  goal: AcademicGoal;
  matchScore: number; // base score calculated dynamically
  snapshot: string;
  deadlineDate: string; // YYYY-MM-DD
  deadlineCountdownDays: number;
  languageRequirement: string;
  stipendAmount: string;
  stipendType: string; // e.g. "Erasmus+ ICM / FAPEMIG Bilateral", "Horizon Europe Research Fellowship"
  trustBadge: 'Verified Partner' | 'Official EUNICE Portal' | 'Direct Agreement';
  summaryTranslations: {
    pt: {
      headline: string;
      bullets: string[];
      financials: string;
      academicCredits: string;
    };
    en: {
      headline: string;
      bullets: string[];
      financials: string;
      academicCredits: string;
    };
  };
  skillsAnalysis: {
    matchedPrerequisites: string[];
    gapSkill: string;
    gapDescription: string;
    bridgeTitle: string;
    bridgeDuration: string;
    bridgeProvider: string;
    bridgeTopics: string[];
  };
  letterOfIntentTemplate: {
    subject: string;
    body: string;
    suggestedFocus: string[];
  };
  researchGroup: string;
  facultyMentor: string;
  openSlots: number;
}

export interface STEMPioneer {
  id: string;
  name: string;
  years: string;
  country: string;
  institution: string;
  field: string;
  quote: string;
  achievement: string;
  transatlanticImpact: string;
  tags: string[];
}

export interface PrepGuide {
  id: string;
  title: string;
  category: 'Syllabus' | 'Exam Repo' | 'Grade Converter' | 'Visa Roadmap';
  description: string;
  downloadFormat: string;
  fileSize: string;
  linkAction: string;
}
