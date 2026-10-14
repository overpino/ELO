import { PrepGuide } from '../types';

export const PREP_GUIDES: PrepGuide[] = [
  {
    id: 'guide-syllabus-stem-eu',
    title: 'EUNICE Core STEM Syllabus & ECTS Course Catalog 2026-2027',
    category: 'Syllabus',
    description:
      'Standardized learning outcomes, laboratory prerequisites, and 30 ECTS module credit equivalencies across all 10 European partner institutions.',
    downloadFormat: 'PDF',
    fileSize: '3.4 MB',
    linkAction: 'Download Syllabus',
  },
  {
    id: 'guide-exam-repo',
    title: 'Open Exam Repository: European Engineering Qualifying Tests',
    category: 'Exam Repo',
    description:
      'Curated past entrance evaluations in Linear Algebra, Computational Dynamics, Python for Science, and Thermodynamics from PUT, UNICT, and BTU.',
    downloadFormat: 'ZIP Archive',
    fileSize: '18.2 MB',
    linkAction: 'Access Repository',
  },
  {
    id: 'guide-grade-converter',
    title: 'Transatlantic Grade Converter: Brazilian CR / ENEM to ECTS Scale',
    category: 'Grade Converter',
    description:
      'Official conversion matrix correlating Brazilian Coefficient of Performance (CR 0–100) with European ECTS (A–F), Italian 30-point scale, and German 1.0–5.0 system.',
    downloadFormat: 'Interactive Tool + PDF',
    fileSize: '1.1 MB',
    linkAction: 'Open Matrix',
  },
  {
    id: 'guide-visa-erasmus',
    title: 'Transatlantic Mobility Visa & Financial Proof Checklist',
    category: 'Visa Roadmap',
    description:
      'Step-by-step consular guidance for Brazilian students applying for European Schengen National Long-Stay (Type D) Study Visas and European students entering Brazil via VITEM IV.',
    downloadFormat: 'Interactive Checklist',
    fileSize: '850 KB',
    linkAction: 'View Checklist',
  },
];

export interface GradeConversionResult {
  brazilianCR: number;
  ectsGrade: string;
  germanGrade: string;
  italianGrade: string;
  frenchGrade: string;
  status: 'Summa Cum Laude / Outstanding' | 'Excellent' | 'Very Good' | 'Good' | 'Satisfactory' | 'Conditional';
  description: string;
}

export function convertBrazilianGrade(cr: number): GradeConversionResult {
  // CR is usually 0 to 100 in Brazil (or 0 to 10)
  const normalized = cr <= 10 ? cr * 10 : cr;

  if (normalized >= 90) {
    return {
      brazilianCR: normalized,
      ectsGrade: 'A (Top 10%)',
      germanGrade: '1.0 – 1.3 (Sehr Gut)',
      italianGrade: '30 e Lode / 30',
      frenchGrade: '16.5 – 20.0 (Très Bien)',
      status: 'Summa Cum Laude / Outstanding',
      description: 'Fully qualified for top-tier competitive European fellowships with priority tuition waiver.',
    };
  } else if (normalized >= 80) {
    return {
      brazilianCR: normalized,
      ectsGrade: 'B (Next 25%)',
      germanGrade: '1.4 – 2.0 (Gut)',
      italianGrade: '28 – 29 / 30',
      frenchGrade: '14.0 – 16.4 (Bien)',
      status: 'Excellent',
      description: 'Exceeds standard entry thresholds for all EUNICE Master and research internship cohorts.',
    };
  } else if (normalized >= 70) {
    return {
      brazilianCR: normalized,
      ectsGrade: 'C (Next 30%)',
      germanGrade: '2.1 – 2.7 (Befriedigend)',
      italianGrade: '25 – 27 / 30',
      frenchGrade: '12.0 – 13.9 (Assez Bien)',
      status: 'Very Good',
      description: 'Meets general admission prerequisites for exchange semesters and laboratory placements.',
    };
  } else if (normalized >= 60) {
    return {
      brazilianCR: normalized,
      ectsGrade: 'D (Next 25%)',
      germanGrade: '2.8 – 3.3 (Ausreichend)',
      italianGrade: '21 – 24 / 30',
      frenchGrade: '10.0 – 11.9 (Passable)',
      status: 'Satisfactory',
      description: 'Eligible for exchange semesters; faculty mentor recommendation letter strongly recommended.',
    };
  } else {
    return {
      brazilianCR: normalized,
      ectsGrade: 'E / F (Minimum Pass)',
      germanGrade: '3.4 – 4.0',
      italianGrade: '18 – 20 / 30',
      frenchGrade: '10.0 (Seuil)',
      status: 'Conditional',
      description: 'Supplemental bridge course completion required prior to laboratory admission.',
    };
  }
}
