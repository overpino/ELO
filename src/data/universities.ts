import { University } from '../types';

export const UNIVERSITIES: University[] = [
  {
    id: 'ufv',
    name: 'Universidade Federal de Viçosa',
    shortName: 'UFV',
    country: 'Brazil',
    countryCode: 'BR',
    city: 'Viçosa, Minas Gerais',
    isUfv: true,
    isEunice: false,
    website: 'https://www.ufv.br',
    description:
      'Premier federal research institution in Latin America, celebrated for agricultural engineering, biotechnology, computer vision, and applied physical sciences.',
    stemStrengths: [
      'Agrobiotechnology & Plant Genomics',
      'Artificial Intelligence & Edge Computing',
      'Environmental & Forestry Engineering',
      'Applied Mathematics',
    ],
    establishedYear: 1926,
    totalStudents: 21500,
    accentColor: '#10B981', // Emerald green
  },
  {
    id: 'put',
    name: 'Poznań University of Technology',
    shortName: 'PUT Poznań',
    country: 'Poland',
    countryCode: 'PL',
    city: 'Poznań',
    isUfv: false,
    isEunice: true,
    website: 'https://www.put.poznan.pl',
    description:
      'Pioneering Polish technical university leading EUNICE in autonomous robotics, cybersecurity, intelligent transportation, and distributed AI algorithms.',
    stemStrengths: [
      'Autonomous Mobile Robotics',
      'Control Systems & Mechatronics',
      'Cybersecurity & Network Protocols',
      'Machine Learning Systems',
    ],
    establishedYear: 1919,
    totalStudents: 16000,
    erasmusCode: 'PL POZNAN02',
    accentColor: '#3B82F6', // Blue
  },
  {
    id: 'unict',
    name: 'University of Catania',
    shortName: 'UNICT Catania',
    country: 'Italy',
    countryCode: 'IT',
    city: 'Catania, Sicily',
    isUfv: false,
    isEunice: true,
    website: 'https://www.unict.it',
    description:
      'Founded in 1434, UNICT hosts the Mediterranean hub for microelectronics (STMicroelectronics cluster), vulcanology instrumentation, and robotic surgical systems.',
    stemStrengths: [
      'Industrial Robotics & Automation',
      'Semiconductor & Microelectronics Design',
      'Geophysical Sensing & IoT Instrumentation',
      'Computational Bio-imaging',
    ],
    establishedYear: 1434,
    totalStudents: 40000,
    erasmusCode: 'I CATANIA01',
    accentColor: '#0284C7', // Sky Blue
  },
  {
    id: 'umons',
    name: 'University of Mons',
    shortName: 'UMONS',
    country: 'Belgium',
    countryCode: 'BE',
    city: 'Mons, Wallonia',
    isUfv: false,
    isEunice: true,
    website: 'https://web.umons.ac.be',
    description:
      'Renowned European center for advanced polymer chemistry, materials science, biosystems engineering, and acoustic human-computer interaction.',
    stemStrengths: [
      'Polymer Chemistry & Nanomaterials',
      'Acoustic Signal Processing & Speech AI',
      'Biomedical Engineering & Bio-coatings',
      'Renewable Hydrogen Technologies',
    ],
    establishedYear: 1837,
    totalStudents: 10500,
    erasmusCode: 'B MONS21',
    accentColor: '#DC2626', // Red
  },
  {
    id: 'univaasa',
    name: 'University of Vaasa',
    shortName: 'UniVaasa',
    country: 'Finland',
    countryCode: 'FI',
    city: 'Vaasa',
    isUfv: false,
    isEunice: true,
    website: 'https://www.univaasa.fi',
    description:
      'Anchoring EnergyVaasa, the largest clean energy innovation hub in the Nordic countries, focusing on smart electricity grids, marine automation, and battery ecosystems.',
    stemStrengths: [
      'Smart Electric Grids & Power Systems',
      'Clean Marine Propulsion & Automation',
      'Battery Energy Storage Systems',
      'Sustainable Industrial Management',
    ],
    establishedYear: 1968,
    totalStudents: 5200,
    erasmusCode: 'SF VAASA01',
    accentColor: '#0D9488', // Teal
  },
  {
    id: 'uc',
    name: 'University of Cantabria',
    shortName: 'UC Cantabria',
    country: 'Spain',
    countryCode: 'ES',
    city: 'Santander',
    isUfv: false,
    isEunice: true,
    website: 'https://web.unican.es',
    description:
      'Home to the Institute of Environmental Hydraulics and IFCA (particle physics), excelling in coastal renewables, quantum optics, and ocean engineering.',
    stemStrengths: [
      'Offshore Wind & Wave Energy',
      'Quantum Materials & Particle Computing',
      'Coastal Dynamics & Climate Modeling',
      'Bioengineering & Regenerative Medicine',
    ],
    establishedYear: 1972,
    totalStudents: 12800,
    erasmusCode: 'E SANTAND01',
    accentColor: '#F59E0B', // Amber
  },
  {
    id: 'btu',
    name: 'Brandenburg University of Technology Cottbus-Senftenberg',
    shortName: 'BTU Cottbus',
    country: 'Germany',
    countryCode: 'DE',
    city: 'Cottbus',
    isUfv: false,
    isEunice: true,
    website: 'https://www.b-tu.de',
    description:
      'Key powerhouse in Lusatia’s green industrial transformation, leading R&D in hybrid-electric flight propulsion, computational fluid dynamics, and carbon-neutral metallurgy.',
    stemStrengths: [
      'Hybrid-Electric Aircraft Propulsion',
      'Decarbonization & Clean Metallurgy',
      'Computational Fluid Dynamics (OpenFOAM)',
      'Artificial Intelligence for Manufacturing',
    ],
    establishedYear: 1991,
    totalStudents: 6800,
    erasmusCode: 'D COTTBUS01',
    accentColor: '#4F46E5', // Indigo
  },
  {
    id: 'uphf',
    name: 'Université Polytechnique Hauts-de-France',
    shortName: 'UPHF',
    country: 'France',
    countryCode: 'FR',
    city: 'Valenciennes',
    isUfv: false,
    isEunice: true,
    website: 'https://www.uphf.fr',
    description:
      'European benchmark university for intelligent railway transportation, crashworthiness simulations, automotive robotics, and human-machine cooperation.',
    stemStrengths: [
      'Intelligent Autonomous Rail & Transit',
      'Ergonomics & Human-Robot Interaction',
      'Structural Impact Dynamics & Crash Simulation',
      'Applied Sensor Networks',
    ],
    establishedYear: 1968,
    totalStudents: 13500,
    erasmusCode: 'F VALENCI01',
    accentColor: '#7C3AED', // Violet
  },
  {
    id: 'uop',
    name: 'University of the Peloponnese',
    shortName: 'UoP Peloponnese',
    country: 'Greece',
    countryCode: 'GR',
    city: 'Tripoli / Patras',
    isUfv: false,
    isEunice: true,
    website: 'https://www.uop.gr',
    description:
      'Specialized engineering campus renowned for cryptographic protocols, 5G/6G wireless communication architectures, embedded microcontroller designs, and signal processing.',
    stemStrengths: [
      'Cryptography & Quantum-Safe Protocols',
      'Next-Gen 6G Wireless Telecommunications',
      'Low-Power Embedded IoT Hardware',
      'Discrete Optimization & Game Theory',
    ],
    establishedYear: 2000,
    totalStudents: 24000,
    erasmusCode: 'G TRIPOLI01',
    accentColor: '#06B6D4', // Cyan
  },
  {
    id: 'ipv',
    name: 'Polytechnic Institute of Viseu',
    shortName: 'IPV Viseu',
    country: 'Portugal',
    countryCode: 'PT',
    city: 'Viseu',
    isUfv: false,
    isEunice: true,
    website: 'https://www.ipv.pt',
    description:
      'Technical polytechnic offering close ties to Lusophone agricultural research, food bioprocessing, smart farming machinery, and environmental diagnostics.',
    stemStrengths: [
      'Precision Agriculture & Smart Farming',
      'Food Bioprocessing & Fermentation',
      'Biosystems Monitoring & Environmental Sensors',
      'Applied Software Engineering',
    ],
    establishedYear: 1979,
    totalStudents: 6000,
    erasmusCode: 'P VISEU01',
    accentColor: '#16A34A', // Green
  },
  {
    id: 'kau',
    name: 'Karlstad University',
    shortName: 'KAU Karlstad',
    country: 'Sweden',
    countryCode: 'SE',
    city: 'Karlstad',
    isUfv: false,
    isEunice: true,
    website: 'https://www.kau.se',
    description:
      'Swedish center of excellence for privacy-preserving computer systems, cloud latency optimization, bio-composite nanomaterials, and paper surface physics.',
    stemStrengths: [
      'Privacy Engineering & Distributed Systems',
      'Bio-based Composites & Nanocellulose',
      'Computer Science & Ultra-Low Latency Networking',
      'Surface Science & Tribology',
    ],
    establishedYear: 1977,
    totalStudents: 19000,
    erasmusCode: 'S KARLSTA01',
    accentColor: '#2563EB', // Blue
  },
];

export const STEM_FIELDS = [
  'Computer Science & AI',
  'Robotics & Mechatronics',
  'Biotechnology & Life Sciences',
  'Renewable Energy & Decarbonization',
  'Materials Science & Nanotechnology',
  'Applied Mathematics & Modeling',
] as const;

export const ACADEMIC_GOALS = [
  'Campus News & Lurking',
  'Research Internship',
  "Master's Degree Scholarship",
  'Summer School',
  'Exchange Semester',
] as const;
