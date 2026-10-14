export interface LocalSeminar {
  id: string;
  title: string;
  speaker: string;
  speakerRole: string;
  speakerAffiliation: string;
  date: string;
  time: string;
  location: string;
  isHybrid: boolean;
  category: 'Open Seminar' | 'Hands-on Workshop' | 'Roundtable Discussion' | 'Department Colloquium' | 'Women in STEM Talk';
  field: string;
  description: string;
  tags: string[];
  openToAll: boolean;
}

export interface LocalBando {
  id: string;
  title: string;
  type: 'Local Research Grant' | 'Department Fellowship' | 'Internal Lab Internship' | 'Innovation Challenge & Hackathon' | 'Peer Tutoring Call';
  department: string;
  deadline: string;
  deadlineDaysLeft: number;
  stipendOrPrize: string;
  targetStudents: 'Undergraduate & Master Students' | 'Master & PhD Scholars' | 'Open to All Enrolled Students';
  description: string;
  requirements: string[];
  linkText: string;
}

export interface CampusGroup {
  name: string;
  category: 'Student Chapter & Club' | 'Women in STEM' | 'Makerspace / FabLab' | 'Formula & Robotics Team';
  description: string;
  meetingSchedule: string;
  contactEmail: string;
  badge: string;
}

export interface UniversityCampusData {
  universityId: string;
  localName: string;
  campusTitle: string;
  welcomeMessage: string;
  establishedNotice: string;
  mainCampuses: string[];
  keyLabs: string[];
  seminars: LocalSeminar[];
  bandiLocali: LocalBando[];
  campusGroups: CampusGroup[];
  noticesCount: number;
}

export const LOCAL_CAMPUS_DATA: Record<string, UniversityCampusData> = {
  ufv: {
    universityId: 'ufv',
    localName: 'Universidade Federal de Viçosa (UFV)',
    campusTitle: 'Viçosa STEM Campus & Academic Life',
    welcomeMessage: 'Welcome to Viçosa! Beyond transatlantic EUNICE mobility, explore open departmental seminars, local PIBIC/FAPEMIG research fellowships, and active campus labs.',
    establishedNotice: 'A century of pioneering leadership (since 1926) in Agricultural Biotechnology, Environmental Engineering, and Applied Computer Science.',
    mainCampuses: ['Viçosa Main University Campus', 'Florestal Regional Campus', 'Rio Paranaíba Campus'],
    keyLabs: [
      'LIA - Artificial Intelligence & Computer Vision Laboratory',
      'Bioagro - Applied Agricultural Biotechnology Institute',
      'FabLab Viçosa & Open Hardware Prototyping',
      'Autonomous Mobile Robotics & Agricultural Drones Unit'
    ],
    seminars: [
      {
        id: 'ufv-sem-1',
        title: 'Open Seminar: Edge AI & Lightweight Vision for Early Crop Pathology Detection',
        speaker: 'Prof. Dr. Lucas Rezende',
        speakerRole: 'Head of Computer Vision Research',
        speakerAffiliation: 'DPI - Department of Informatics UFV',
        date: 'October 24, 2026',
        time: '14:30 - 16:00 BRT',
        location: 'CCE Auditorium (Exact Sciences Center) & YouTube Stream',
        isHybrid: true,
        category: 'Open Seminar',
        field: 'Computer Science & AI',
        description: 'Live field demonstrations benchmarking quantized YOLO models running locally on microcontrollers without cloud latency.',
        tags: ['Edge AI', 'Computer Vision', 'Open Source', 'Microcontrollers'],
        openToAll: true,
      },
      {
        id: 'ufv-sem-2',
        title: 'Hands-on Workshop: ROS 2 & Sensor Fusion for Autonomous Agricultural Rovers',
        speaker: 'Eng. Beatriz Fontes & UFV Bot Team',
        speakerRole: 'Lead Robotics Researcher',
        speakerAffiliation: 'Department of Electrical & Agricultural Engineering',
        date: 'November 05, 2026',
        time: '09:00 - 12:30 BRT',
        location: 'Agricultural Automation & Mechatronics Lab - Block B',
        isHybrid: false,
        category: 'Hands-on Workshop',
        field: 'Robotics & Mechatronics',
        description: 'Building custom ROS 2 Python/C++ nodes for real-time 3D LiDAR and RTK-GPS navigation in rough terrain environments.',
        tags: ['ROS 2', 'Autonomous Navigation', 'LiDAR', 'Robotics'],
        openToAll: true,
      },
      {
        id: 'ufv-sem-3',
        title: 'Women in Exact Sciences: Research Paths & Transatlantic Journeys',
        speaker: 'Prof. Dr. Camila Tavares & EUNICE Alumni',
        speakerRole: 'Coordinator, Meninas Digitais UFV',
        speakerAffiliation: 'Brazilian Computer Society (SBC) Chapter',
        date: 'November 12, 2026',
        time: '17:00 - 18:30 BRT',
        location: 'Central Library Maker Space & Virtual Room',
        isHybrid: true,
        category: 'Women in STEM Talk',
        field: 'Computer Science & AI',
        description: 'Insights from UFV undergraduate researchers sharing European lab internships, fellowship applications, and peer mentorship.',
        tags: ['Women in STEM', 'Career Pathways', 'Mentorship', 'Exchange'],
        openToAll: true,
      },
    ],
    bandiLocali: [
      {
        id: 'ufv-ban-1',
        title: 'Call PIBIC / FAPEMIG 2026: 12 Undergraduate Research Fellowships in AI & Genomics',
        type: 'Local Research Grant',
        department: 'Dean of Research & Graduate Studies (PPG-UFV)',
        deadline: 'November 15, 2026',
        deadlineDaysLeft: 32,
        stipendOrPrize: 'R$ 700 / month (12-month tenure)',
        targetStudents: 'Undergraduate & Master Students',
        description: 'Competitive internal grant for undergraduate research projects in applied artificial intelligence, bioinformatics, and environmental data modeling.',
        requirements: ['Active enrollment at UFV', 'GPA index above 70%', 'Commitment of 20 weekly hours'],
        linkText: 'View Call on PPG Portal',
      },
      {
        id: 'ufv-ban-2',
        title: 'Call for Student Lab Tutors: Algorithms, Data Structures & Digital Circuits',
        type: 'Peer Tutoring Call',
        department: 'Department of Informatics (DPI) & Electrical Engineering',
        deadline: 'October 30, 2026',
        deadlineDaysLeft: 16,
        stipendOrPrize: 'Academic Teaching Credit + Monthly Stipend',
        targetStudents: 'Open to All Enrolled Students',
        description: 'Assisting first-year STEM undergraduates in laboratory coding assignments, problem-solving clinics, and tutoring hours.',
        requirements: ['Completed foundational courses with grade A or B', 'Strong communication skills'],
        linkText: 'Apply on UFV Tutoring Portal',
      },
      {
        id: 'ufv-ban-3',
        title: 'UFV AgroTech Innovation Sprint: Sustainable University Challenge',
        type: 'Innovation Challenge & Hackathon',
        department: 'Viçosa Technology Park (tecnoPARQ)',
        deadline: 'November 28, 2026',
        deadlineDaysLeft: 45,
        stipendOrPrize: 'R$ 15,000 prize pool + 6 months free pre-incubation',
        targetStudents: 'Open to All Enrolled Students',
        description: 'Interdisciplinary teams collaborate over 48 hours to prototype working hardware/software solutions tackling water and energy efficiency.',
        requirements: ['Teams of 3 to 5 students', 'At least one female researcher per team'],
        linkText: 'Review tecnoPARQ Regulations',
      },
    ],
    campusGroups: [
      {
        name: 'Meninas Digitais UFV (SBC Chapter)',
        category: 'Women in STEM',
        description: 'Dedicated student initiative empowering women across computing and engineering through code camps, talks, and fellowship prep.',
        meetingSchedule: 'Thursdays, 18:00 - 19:30 BRT',
        contactEmail: 'meninasdigitais@ufv.br',
        badge: 'Active Chapter',
      },
      {
        name: 'UFV Bot Robotics Team',
        category: 'Formula & Robotics Team',
        description: 'Collegiate robotics team competing in autonomous rovers, Very Small Size soccer robots, and drone mapping.',
        meetingSchedule: 'Saturdays, 10:00 - 14:00 BRT',
        contactEmail: 'ufvbot@ufv.br',
        badge: 'Makerspace Lab',
      },
    ],
    noticesCount: 5,
  },

  unict: {
    universityId: 'unict',
    localName: 'University of Catania (Università di Catania)',
    campusTitle: 'Cittadella Tech Campus & Etna Valley Research Hub',
    welcomeMessage: 'Welcome to Catania! Between Mount Etna and the Mediterranean silicon cluster, discover open departmental seminars, STMicroelectronics joint labs, and internal research calls.',
    establishedNotice: 'Founded in 1434, renowned European benchmark in Microelectronics, Power Semiconductors, Industrial Robotics, and Volcanology.',
    mainCampuses: ['Cittadella Universitaria Campus', 'Vagliasindi Engineering Hub', 'Santa Sofia Medical-Tech Complex'],
    keyLabs: [
      'STMicroelectronics - UNICT Joint Silicon Carbide & GaN Lab',
      'Industrial Robotics & Automation Laboratory (DIEEI)',
      'Etna Volcano Monitoring & IoT Sensor Networks Center',
      'High-Performance Parallel Computing & Bioinformatics Lab (DMI)'
    ],
    seminars: [
      {
        id: 'unict-sem-1',
        title: 'Department Colloquium: Next-Gen SiC & GaN Power Devices for Electric Vehicles',
        speaker: 'Prof. Mario Rossi & Eng. Laura Ferrara (STMicroelectronics)',
        speakerRole: 'Chair of Microelectronics & Principal Engineer',
        speakerAffiliation: 'DIEEI Department & STMicroelectronics Catania Fab',
        date: 'October 28, 2026',
        time: '15:00 - 17:00 CET',
        location: 'DIEEI Main Auditorium (Building 3, Cittadella) & MS Teams',
        isHybrid: true,
        category: 'Open Seminar',
        field: 'Materials Science & Nanotechnology',
        description: 'Technical deep-dive into 200mm wafer fabrication, trench MOSFET thermal modeling, and high-efficiency traction inverters.',
        tags: ['Microelectronics', 'Semiconductors', 'STMicroelectronics', 'Green Energy'],
        openToAll: true,
      },
      {
        id: 'unict-sem-2',
        title: 'Roundtable: Women in Satellite Engineering & Deep Space Telemetry',
        speaker: 'Eng. Elena Costanzo & Dr. Chiara Bellini',
        speakerRole: 'Aerospace Systems Investigators',
        speakerAffiliation: 'IEEE Women in Engineering UNICT Affinity Group',
        date: 'November 10, 2026',
        time: '16:30 - 18:30 CET',
        location: 'Hall D43 - Cittadella Campus & Online Streaming',
        isHybrid: true,
        category: 'Women in STEM Talk',
        field: 'Robotics & Mechatronics',
        description: 'First-hand experiences in CubeSat optical payload design, radiation-hardened circuitry, and bridging the gender gap in space sciences.',
        tags: ['Women in STEM', 'Aerospace', 'CubeSat', 'Networking'],
        openToAll: true,
      },
      {
        id: 'unict-sem-3',
        title: 'Hands-on Workshop: Mobile Robot Simulation with ROS 2 & Gazebo Harmonic',
        speaker: 'Dr. Corrado Santoro',
        speakerRole: 'Autonomous Systems Researcher',
        speakerAffiliation: 'Department of Mathematics and Computer Science (DMI)',
        date: 'November 19, 2026',
        time: '10:00 - 13:00 CET',
        location: 'Archimede Computer Lab (Ground Floor DMI)',
        isHybrid: false,
        category: 'Hands-on Workshop',
        field: 'Computer Science & AI',
        description: 'Interactive workshop implementing kinematic navigation controllers and costmap plugins for Turtlebot 4 robots.',
        tags: ['ROS 2', 'Gazebo', 'Linux', 'Robotics'],
        openToAll: true,
      },
    ],
    bandiLocali: [
      {
        id: 'unict-ban-1',
        title: 'Call for 150-Hour Student Collaboration in University STEM Laboratories',
        type: 'Department Fellowship',
        department: 'Academic Services & DIEEI Department',
        deadline: 'November 04, 2026',
        deadlineDaysLeft: 21,
        stipendOrPrize: '€ 1,250 total stipend (€8.33 / hour)',
        targetStudents: 'Undergraduate & Master Students',
        description: 'Paid technical assistantships supporting electronics, optics, and physics lab classes for junior undergraduates.',
        requirements: ['Current enrollment in STEM degrees', 'GPA weighted average > 24/30', 'At least 30 ECTS credits achieved'],
        linkText: 'Consult Notice on UNICT Portal',
      },
      {
        id: 'unict-ban-2',
        title: 'Department Research Award for Experimental Theses in Explainable AI (XAI)',
        type: 'Local Research Grant',
        department: 'Department of Electrical, Electronics and Computer Engineering',
        deadline: 'December 20, 2026',
        deadlineDaysLeft: 67,
        stipendOrPrize: '€ 2,500 prize + Open Access publication support',
        targetStudents: 'Master & PhD Scholars',
        description: 'Annual competitive award recognizing outstanding Master theses addressing interpretable machine learning in healthcare or industrial automation.',
        requirements: ['Defending Master thesis by March 2027'],
        linkText: 'Download Official Guidelines',
      },
      {
        id: 'unict-ban-3',
        title: 'Smart Volcano IoT Challenge: Environmental Early-Warning Sensors',
        type: 'Innovation Challenge & Hackathon',
        department: 'Geophysics Research Center & INGV',
        deadline: 'November 18, 2026',
        deadlineDaysLeft: 35,
        stipendOrPrize: '€ 5,000 cash prizes + LoRaWAN hardware kits',
        targetStudents: 'Open to All Enrolled Students',
        description: '48-hour hackathon to design ultra-low-power telemetry nodes monitoring seismic anomalies and slope instability.',
        requirements: ['Teams of 2 to 4 students', 'Open to all STEM departments'],
        linkText: 'Register on UNICT Events Hub',
      },
    ],
    campusGroups: [
      {
        name: 'IEEE Women in Engineering UNICT Affinity Group',
        category: 'Women in STEM',
        description: 'Active chapter running technical clinics, peer tutoring for freshmen, and industrial visits across Etna Valley tech giants.',
        meetingSchedule: 'First Tuesday of every month, 17:30 CET',
        contactEmail: 'wie.unict@ieee.org',
        badge: 'IEEE Recognized',
      },
      {
        name: 'Catania Robotics & Open Hardware Lab',
        category: 'Formula & Robotics Team',
        description: 'Student-led collective building autonomous rovers, custom flight controllers, and 3D-printed lab instrumentation.',
        meetingSchedule: 'Wednesday afternoons at 16:00 CET',
        contactEmail: 'robotics@unict.it',
        badge: 'Open Hardware',
      },
    ],
    noticesCount: 6,
  },

  put: {
    universityId: 'put',
    localName: 'Poznań University of Technology (Politechnika Poznańska)',
    campusTitle: 'Piotrowo Tech Campus & Regional Innovation Network',
    welcomeMessage: 'Welcome to Poznań! Explore daily tech life on the Warta riverbanks: open robotics colloquia, student research grants funded by the Rector, and collaborative coding nights.',
    establishedNotice: 'Established in 1919, celebrated for autonomous robotics, real-time cyber-physical systems, and industrial AI.',
    mainCampuses: ['Campus Piotrowo (Warta River)', 'Campus Wilda', 'Center for Advanced Technology'],
    keyLabs: [
      'Autonomous Systems & Mobile Robotics Testbed (Piotrowo CW4)',
      'Cybersecurity & Network Systems Lab',
      'PUT RocketLab & Aerospace Avionics Hangars',
      'AI & High Performance Computing Cluster'
    ],
    seminars: [
      {
        id: 'put-sem-1',
        title: 'Open Colloquium: 3D SLAM & Neural Radiance Fields for Indoor Drone Navigation',
        speaker: 'Prof. Dariusz Kowalski',
        speakerRole: 'Chair of Autonomous Control Systems',
        speakerAffiliation: 'Faculty of Control, Robotics & Electrical Engineering',
        date: 'October 27, 2026',
        time: '13:15 - 14:45 CET',
        location: 'Lecture Hall CW4, Piotrowo Campus & Webex',
        isHybrid: true,
        category: 'Department Colloquium',
        field: 'Robotics & Mechatronics',
        description: 'Live field demonstrations of micro quadrotors navigating GPS-denied indoor multi-story architectures using neural radiance fields.',
        tags: ['SLAM', 'Drones', 'NeRF', 'Autonomous Flight'],
        openToAll: true,
      },
      {
        id: 'put-sem-2',
        title: 'Hands-on Workshop: High-Throughput Memory-Safe Device Drivers in Rust',
        speaker: 'Dr. Agnieszka Nowak & CyberSec Student Circle',
        speakerRole: 'Senior Lecturer in OS Architecture',
        speakerAffiliation: 'Institute of Computing Science',
        date: 'November 06, 2026',
        time: '15:00 - 18:00 CET',
        location: 'Computer Lab 128, New Tech Hall',
        isHybrid: false,
        category: 'Hands-on Workshop',
        field: 'Computer Science & AI',
        description: 'Hands-on practice writing deterministic device drivers with memory safety guarantees on ARM Cortex-M architecture.',
        tags: ['Rust', 'Embedded OS', 'Cybersecurity', 'Microcontrollers'],
        openToAll: true,
      },
    ],
    bandiLocali: [
      {
        id: 'put-ban-1',
        title: "Rector's Research Grant for Student Scientific Circles (Koła Naukowe) 2026",
        type: 'Local Research Grant',
        department: 'PUT Department of Student Research & Science',
        deadline: 'November 10, 2026',
        deadlineDaysLeft: 27,
        stipendOrPrize: 'Up to 25,000 PLN per student group project',
        targetStudents: 'Open to All Enrolled Students',
        description: 'Direct competitive funding for student-led prototypes in aerospace, robotics, green hydrogen, and computational medicine.',
        requirements: ['Active enrollment in any PUT faculty', 'Project proposal under faculty mentor supervision'],
        linkText: 'Check Grant Guidelines on ePUT Portal',
      },
      {
        id: 'put-ban-2',
        title: 'Call for Teaching Assistants: Python for Scientific Computing & Data Structures',
        type: 'Peer Tutoring Call',
        department: 'Faculty of Computing and Telecommunications',
        deadline: 'November 02, 2026',
        deadlineDaysLeft: 19,
        stipendOrPrize: 'Hourly student salary + official university commendation',
        targetStudents: 'Undergraduate & Master Students',
        description: 'Support first-year international and local students during weekly lab sessions and grading automated coding tests.',
        requirements: ['Grade 4.5+ in Algorithms & Data Structures', 'Fluent English or Polish'],
        linkText: 'Apply via PUT Career Center',
      },
    ],
    campusGroups: [
      {
        name: 'PUT RocketLab Student Space Society',
        category: 'Formula & Robotics Team',
        description: 'Designing suborbital rockets and hybrid rocket motors, competing in European rocketry challenges and Spaceport America.',
        meetingSchedule: 'Tuesdays & Fridays, 17:00 CET',
        contactEmail: 'rocketlab@put.poznan.pl',
        badge: 'Space Exploration',
      },
      {
        name: 'Women in Tech & Girls at PUT',
        category: 'Women in STEM',
        description: 'Mentoring community organizing technical talks, female coder hackathons, and fellowship preparation sessions.',
        meetingSchedule: 'Bi-weekly on Thursdays, 16:30 CET',
        contactEmail: 'girlsatput@put.poznan.pl',
        badge: 'Mentoring Chapter',
      },
    ],
    noticesCount: 4,
  },

  umons: {
    universityId: 'umons',
    localName: 'University of Mons (Université de Mons)',
    campusTitle: 'Mons Tech Campus & Wallonia Materials Hub',
    welcomeMessage: 'Welcome to Mons! Discover vibrant campus life in Hainaut: green polymer colloquia, Materia Nova labs, and local research opportunities.',
    establishedNotice: 'Founded in 1837, premier European center of excellence in polymer science, bioengineering, and acoustic signal processing.',
    mainCampuses: ['Plaine de Nimy Campus', 'Polytech Downtown Campus', 'Materia Nova Science Park'],
    keyLabs: [
      'Laboratory for Chemistry of Novel Materials (LCMN)',
      'Infortech Digital Institute & Acoustic Signal Processing',
      'Biosciences Institute & Biomimetic Polymers Lab',
      'UMONS Prototyping FabLab'
    ],
    seminars: [
      {
        id: 'umons-sem-1',
        title: 'Open Seminar: Bio-Sourced Polymers & Enzymatic Recycling of Commodity Plastics',
        speaker: 'Dr. Julien Delcroix',
        speakerRole: 'Research Fellow F.R.S.-FNRS',
        speakerAffiliation: 'Materia Nova Institute & UMONS Faculty of Science',
        date: 'October 29, 2026',
        time: '14:00 - 15:30 CET',
        location: 'De Leval Amphitheater, Plaine de Nimy Campus & Hybrid Link',
        isHybrid: true,
        category: 'Open Seminar',
        field: 'Materials Science & Nanotechnology',
        description: 'Engineered biocatalysts breaking down commercial polyesters within 48 hours in mild aqueous media without toxic solvents.',
        tags: ['Green Chemistry', 'Polymers', 'Recycling', 'Sustainability'],
        openToAll: true,
      },
    ],
    bandiLocali: [
      {
        id: 'umons-ban-1',
        title: 'UMONS Research Immersion Fellowships for Bachelor and Master Scholars',
        type: 'Local Research Grant',
        department: 'UMONS Research Council',
        deadline: 'November 14, 2026',
        deadlineDaysLeft: 31,
        stipendOrPrize: '€ 850 / month during experimental project',
        targetStudents: 'Undergraduate & Master Students',
        description: 'Funding for an 8-week exploratory lab research term embedded inside Polytechnic Faculty research teams.',
        requirements: ['Active enrollment at UMONS', 'Endorsement letter from a supervising lab investigator'],
        linkText: 'Consult UMONS Research Intranet',
      },
    ],
    campusGroups: [
      {
        name: 'Polytech Women in Engineering UMONS',
        category: 'Women in STEM',
        description: 'Peer support network offering academic coaching, lab visits, and fellowship prep for female engineering students.',
        meetingSchedule: 'Wednesdays at Maison Polytech',
        contactEmail: 'femmes.polytech@umons.ac.be',
        badge: 'Peer Network',
      },
    ],
    noticesCount: 3,
  },

  univaasa: {
    universityId: 'univaasa',
    localName: 'University of Vaasa (Vaasan Yliopisto)',
    campusTitle: 'Palosaari Seaside Tech Campus & EnergyVaasa Hub',
    welcomeMessage: 'Welcome to Vaasa! Located on the shores of the Gulf of Bothnia, connected with the Nordic clean energy cluster. Check out local microgrid seminars and student lab calls.',
    establishedNotice: 'Established in 1968, heart of EnergyVaasa—the largest clean energy and power automation cluster in the Nordic countries.',
    mainCampuses: ['Palosaari Seaside Campus', 'Technobothnia Research Center'],
    keyLabs: [
      'Smart Grid & Power System Simulation Lab (Technobothnia)',
      'Clean Marine Engine Testbed & Automation Center',
      'Sustainable Industrial Systems Design Studio'
    ],
    seminars: [
      {
        id: 'uvaasa-sem-1',
        title: 'Open Campus Lecture: Future-Proofing Microgrids with Battery Energy Storage',
        speaker: 'Dr. Mikko Karjalainen',
        speakerRole: 'Principal Investigator',
        speakerAffiliation: 'School of Technology and Innovations',
        date: 'October 31, 2026',
        time: '10:15 - 12:00 EET',
        location: 'Wolff Auditorium, Fabriikki Building & Zoom',
        isHybrid: true,
        category: 'Open Seminar',
        field: 'Renewable Energy & Decarbonization',
        description: 'Analyzing islanded grid operations during extreme Nordic winter peaks with multi-hour lithium and sodium-ion setups.',
        tags: ['Microgrids', 'Clean Tech', 'Energy Storage', 'Nordic'],
        openToAll: true,
      },
    ],
    bandiLocali: [
      {
        id: 'uvaasa-ban-1',
        title: 'EnergyVaasa Student Innovation Fellowship: Zero-Emission Ports',
        type: 'Local Research Grant',
        department: 'VEBIC - Vaasa Energy Business Innovation Centre',
        deadline: 'November 22, 2026',
        deadlineDaysLeft: 39,
        stipendOrPrize: '€ 1,200 / month research bursary',
        targetStudents: 'Undergraduate & Master Students',
        description: 'Fellowship to formulate clean shore-power solutions and automated hydrogen bunkering in the Kvarken archipelago.',
        requirements: ['Engineering or Applied Physics student', 'Eligible for campus work'],
        linkText: 'Apply via Vaasa Student Portal',
      },
    ],
    campusGroups: [
      {
        name: 'Tutti ry & Women in Clean Tech Vaasa',
        category: 'Women in STEM',
        description: 'Student engineering association fostering peer tutoring and female leadership in maritime and energy transitions.',
        meetingSchedule: 'Mondays at Technobothnia Lounge',
        contactEmail: 'cleantech@univaasa.fi',
        badge: 'Nordic Student Network',
      },
    ],
    noticesCount: 3,
  },

  uc: {
    universityId: 'uc',
    localName: 'University of Cantabria (Universidad de Cantabria)',
    campusTitle: 'Las Llamas Coastal Campus & Particle Physics Institute',
    welcomeMessage: 'Welcome to Santander! Alongside the Cantabrian coastline, discover open ocean renewables talks, quantum computing workshops, and local research initiation grants.',
    establishedNotice: 'Founded in 1972, home to IFCA (particle physics and quantum AI) and the Environmental Hydraulics Institute (IHCantabria).',
    mainCampuses: ['Las Llamas Main Campus (Santander)', 'Tanos Engineering Campus', 'PCTCAN Science & Tech Park'],
    keyLabs: [
      'IFCA - Institute of Physics of Cantabria (CSIC-UC)',
      'IHCantabria - Deep Wave Basin & Offshore Wind Testbed',
      'Quantum Materials & High-Throughput Computing Lab',
      'Communications Engineering Department (DICOM)'
    ],
    seminars: [
      {
        id: 'uc-sem-1',
        title: 'Open Seminar: Numerical Modeling of Floating Offshore Wind in Deep Atlantic Waters',
        speaker: 'Dr. María González',
        speakerRole: 'Lead Investigator in Marine Renewables',
        speakerAffiliation: 'IHCantabria & Water Science Department',
        date: 'November 03, 2026',
        time: '12:00 - 13:30 CET',
        location: 'IHCantabria Auditorium & YouTube Live',
        isHybrid: true,
        category: 'Open Seminar',
        field: 'Renewable Energy & Decarbonization',
        description: 'Coupled aero-hydro-elastic simulations (OpenFAST) examining floating turbine stabilization under 12-meter storm swell.',
        tags: ['Offshore Wind', 'Marine Energy', 'IHCantabria', 'Simulation'],
        openToAll: true,
      },
    ],
    bandiLocali: [
      {
        id: 'uc-ban-1',
        title: 'Call for Departmental Research Collaboration Grants UC 2026',
        type: 'Department Fellowship',
        department: 'Vice-Rectorate for Research and Scientific Policy UC',
        deadline: 'November 17, 2026',
        deadlineDaysLeft: 34,
        stipendOrPrize: '€ 2,000 academic grant',
        targetStudents: 'Undergraduate & Master Students',
        description: 'Hands-on initiation in active experimental labs across particle physics, wireless communications, and marine engineering.',
        requirements: ['Final year Bachelor or Master student', 'Competitive academic transcript'],
        linkText: 'Check Virtual Noticeboard UC',
      },
    ],
    campusGroups: [
      {
        name: 'Women in Science & Technology UC',
        category: 'Women in STEM',
        description: 'Student-led collective organizing research colloquia, science fairs, and meetings with leading IFCA physicists.',
        meetingSchedule: 'Bi-weekly Tuesdays, 17:00 CET',
        contactEmail: 'mujeres.ciencia@unican.es',
        badge: 'Scientific Network',
      },
    ],
    noticesCount: 4,
  },

  btu: {
    universityId: 'btu',
    localName: 'Brandenburg University of Technology Cottbus-Senftenberg (BTU)',
    campusTitle: 'Cottbus Central Campus & Lusatia Transformation Hub',
    welcomeMessage: 'Welcome to Cottbus! At the center of Germany’s industrial clean transition: open lectures on hybrid electric flight, green hydrogen, and student prototyping labs.',
    establishedNotice: 'Established in 1991, leading research in clean decarbonization, hybrid aviation propulsion, and numerical aerodynamics.',
    mainCampuses: ['Cottbus Central Campus', 'Sachsendorf Campus', 'Senftenberg Biotechnology Campus'],
    keyLabs: [
      'CHESC - Center for Hybrid Electric Systems Cottbus',
      'Chair of Computational Fluid Dynamics (OpenFOAM / CFD)',
      'Lusatia Hydrogen Technology Center (H2-Lab)',
      'Cottbus Open Makerspace & FabLab'
    ],
    seminars: [
      {
        id: 'btu-sem-1',
        title: 'Open Research Talk: Megawatt-Class Electric Motors for Regional Passenger Aviation',
        speaker: 'Prof. Dr.-Ing. Klaus Richter',
        speakerRole: 'Director of Aerospace Propulsion',
        speakerAffiliation: 'CHESC & Faculty of Mechanical Engineering',
        date: 'November 04, 2026',
        time: '16:00 - 17:30 CET',
        location: 'Audimax 2, Cottbus Central Campus & Live Stream',
        isHybrid: true,
        category: 'Open Seminar',
        field: 'Renewable Energy & Decarbonization',
        description: 'High-power-density cryogenic copper windings and inverter cooling systems tested in Lusatia wind tunnels.',
        tags: ['Hybrid Aviation', 'Clean Flight', 'Aerospace', 'CHESC'],
        openToAll: true,
      },
    ],
    bandiLocali: [
      {
        id: 'btu-ban-1',
        title: 'Lusatia Science Park Student Research Fellowships 2026',
        type: 'Local Research Grant',
        department: 'BTU Graduate & Undergraduate Research Office',
        deadline: 'November 25, 2026',
        deadlineDaysLeft: 42,
        stipendOrPrize: '€ 1,100 / month student research grant',
        targetStudents: 'Undergraduate & Master Students',
        description: 'Paid experimental involvement in energy transition, thermal storage, and automated rail transport.',
        requirements: ['Enrolled at BTU in engineering or science', 'B2 English proficiency'],
        linkText: 'Details on BTU Science Portal',
      },
    ],
    campusGroups: [
      {
        name: 'BTU Women in STEM & Science Circle',
        category: 'Women in STEM',
        description: 'Support network connecting female students with professors and research institute heads across Brandenburg.',
        meetingSchedule: 'Wednesdays at the FabLab Lounge, 17:00 CET',
        contactEmail: 'womeninstem@b-tu.de',
        badge: 'Regional Network',
      },
    ],
    noticesCount: 3,
  },

  uphf: {
    universityId: 'uphf',
    localName: 'Université Polytechnique Hauts-de-France (UPHF)',
    campusTitle: 'Mont Houy Engineering Campus & Transalley Tech Park',
    welcomeMessage: 'Welcome to Valenciennes! European center of excellence for sustainable transport: explore LAMIH labs, railway crash simulation, and local research calls.',
    establishedNotice: 'Established in 1968, French benchmark in autonomous rail transport, impact crashworthiness, and human-machine cooperation.',
    mainCampuses: ['Mont Houy Main Campus', 'Les Tertiales Downtown Campus', 'Transalley Technopole'],
    keyLabs: [
      'LAMIH UMR CNRS 8201 - Automation, Mechanics and Industrial Computing',
      'Railway Testing Center & Autonomous Driving Test Track',
      'Impact Biomechanics & Human Ergonomics Laboratory',
      'Transalley InnoLab'
    ],
    seminars: [
      {
        id: 'uphf-sem-1',
        title: 'Open Seminar: Collaborative Human-Robot Interaction on Future Assembly Lines',
        speaker: 'Dr. Sophie Bernard',
        speakerRole: 'Associate Professor of Mechanical Engineering',
        speakerAffiliation: 'LAMIH CNRS & UPHF Mechanics Department',
        date: 'November 02, 2026',
        time: '13:30 - 15:00 CET',
        location: 'Malvache Amphitheater, Mont Houy Campus & MS Teams',
        isHybrid: true,
        category: 'Open Seminar',
        field: 'Robotics & Mechatronics',
        description: 'Human intent detection algorithms using proprioceptive sensors for safe cobot manufacturing cells.',
        tags: ['Cobotics', 'Industry 4.0', 'LAMIH', 'Ergonomics'],
        openToAll: true,
      },
    ],
    bandiLocali: [
      {
        id: 'uphf-ban-1',
        title: 'Call for Projects: Sustainable Mobility & Lightweight Transit Challenge 2026',
        type: 'Innovation Challenge & Hackathon',
        department: 'Transalley Technopole & UPHF Research Directorate',
        deadline: 'November 16, 2026',
        deadlineDaysLeft: 33,
        stipendOrPrize: '€ 4,000 project grant + fabrication lab access',
        targetStudents: 'Open to All Enrolled Students',
        description: 'Student prototype contest designing low-carbon micro-mobility vehicles and smart transit telemetry.',
        requirements: ['Teams of 2 to 4 UPHF students'],
        linkText: 'Submit Application on Transalley Portal',
      },
    ],
    campusGroups: [
      {
        name: 'Femmes et Sciences en Hauts-de-France',
        category: 'Women in STEM',
        description: 'Student association advancing female technical careers in automotive, rail, and industrial automation.',
        meetingSchedule: 'Thursdays at 18:00 CET at Technopôle',
        contactEmail: 'femmes-sciences@uphf.fr',
        badge: 'Regional Chapter',
      },
    ],
    noticesCount: 3,
  },

  uop: {
    universityId: 'uop',
    localName: 'University of the Peloponnese (Πανεπιστήμιο Πελοποννήσου)',
    campusTitle: 'Tripoli & Patras Engineering Campuses',
    welcomeMessage: 'Welcome to the Peloponnese! Discover local engineering breakthroughs in quantum-safe cryptography, low-power IoT circuits, and regional scientific colloquia.',
    establishedNotice: 'Established in 2000, high-impact research in post-quantum cryptography, distributed networks, and wireless communications.',
    mainCampuses: ['Tripoli Science & Technology Campus', 'Patras Engineering Complex', 'Kalamata Hub'],
    keyLabs: [
      'Cryptography & Quantum-Safe Protocols Lab (Tripoli)',
      '6G Wireless Telecommunications & Embedded Signal Processing Lab',
      'Microelectronic Circuit & Embedded Systems Design Studio'
    ],
    seminars: [
      {
        id: 'uop-sem-1',
        title: 'Department Seminar: Lattice-Based Cryptography in Microcontroller Networks',
        speaker: 'Prof. Georgios Alexopoulos',
        speakerRole: 'Head of Applied Cryptography',
        speakerAffiliation: 'Department of Informatics and Telecommunications',
        date: 'November 09, 2026',
        time: '12:00 - 13:30 EET',
        location: 'Auditorium A, Tripoli Tech Campus & Zoom',
        isHybrid: true,
        category: 'Open Seminar',
        field: 'Applied Mathematics & Modeling',
        description: 'Implementing Kyber and Dilithium algorithms on low-power 32-bit RISC-V IoT silicon chips.',
        tags: ['Post-Quantum Crypto', 'RISC-V', 'Embedded Security', 'IoT'],
        openToAll: true,
      },
    ],
    bandiLocali: [
      {
        id: 'uop-ban-1',
        title: 'Special Hellenic Research Grant for Young Algorithm Designers 2026',
        type: 'Local Research Grant',
        department: 'Special Account for Research Funds (ELKE UoP)',
        deadline: 'November 30, 2026',
        deadlineDaysLeft: 47,
        stipendOrPrize: '€ 950 / month student research stipend',
        targetStudents: 'Undergraduate & Master Students',
        description: 'Research grant investigating hardware accelerators for zero-knowledge proofs on FPGA chips.',
        requirements: ['Undergraduate or Master student at UoP', 'Solid background in discrete mathematics or C++'],
        linkText: 'View Call on ELKE Portal',
      },
    ],
    campusGroups: [
      {
        name: 'IEEE Student Branch & WIE Tripoli',
        category: 'Women in STEM',
        description: 'Organizing regional coding challenges, hardware teardown sessions, and student mentoring.',
        meetingSchedule: 'Mondays at 18:00 EET',
        contactEmail: 'ieee-wie@uop.gr',
        badge: 'Active IEEE Branch',
      },
    ],
    noticesCount: 3,
  },

  ipv: {
    universityId: 'ipv',
    localName: 'Polytechnic Institute of Viseu (IPV)',
    campusTitle: 'Viseu Polytechnic Campus & Agro-Tech Hub',
    welcomeMessage: 'Welcome to Viseu! In the heart of Portugal’s central region, check out smart agriculture seminars, bioprocess engineering, and local student grant calls.',
    establishedNotice: 'Established in 1979, Portuguese leader in sustainable bioprocesses, precision viticulture robotics, and environmental technologies.',
    mainCampuses: ['Repeses Polytechnic Campus (Viseu)', 'Agricultural High School (ESAV)', 'School of Technology and Management (ESTGV)'],
    keyLabs: [
      'Agro-Biotechnology & Sensory Analysis Laboratory',
      'Rural Ecosystems IoT Environmental Monitoring Center',
      'Agricultural Robotics & Prototyping Workshop'
    ],
    seminars: [
      {
        id: 'ipv-sem-1',
        title: 'Hands-on Seminar: Spectral Sensors & Low-Cost Drones for Precision Vineyards',
        speaker: 'Prof. Dr. Marta Pinheiro',
        speakerRole: 'Professor and Researcher',
        speakerAffiliation: 'Agrarian Higher School of Viseu (ESAV)',
        date: 'November 06, 2026',
        time: '14:30 - 16:30 WET',
        location: 'ESAV Main Auditorium & Open Live Stream',
        isHybrid: true,
        category: 'Open Seminar',
        field: 'Biotechnology & Life Sciences',
        description: 'Real-time demonstration calculating NDVI vegetation indices using onboard embedded processing.',
        tags: ['Smart Farming', 'Drones', 'IoT', 'Sustainability'],
        openToAll: true,
      },
    ],
    bandiLocali: [
      {
        id: 'ipv-ban-1',
        title: 'Research Support Grants in Bioprocesses & Food Quality Engineering',
        type: 'Local Research Grant',
        department: 'Social Action Services & R&D Office IPV',
        deadline: 'November 21, 2026',
        deadlineDaysLeft: 38,
        stipendOrPrize: '€ 750 / month grant tenure',
        targetStudents: 'Undergraduate & Master Students',
        description: 'Laboratory trials extracting high-value bioactive polyphenols from winemaking grape pomace.',
        requirements: ['Enrolled at IPV', '15 hours weekly commitment'],
        linkText: 'Access Call on IPV Portal',
      },
    ],
    campusGroups: [
      {
        name: 'IPV Women in Engineering & Science Chapter',
        category: 'Women in STEM',
        description: 'Monthly student meetups discussing green projects, internship coaching, and mentoring for junior scholars.',
        meetingSchedule: 'Thursdays at 17:00 WET',
        contactEmail: 'estudantes@ipv.pt',
        badge: 'Academic Community',
      },
    ],
    noticesCount: 3,
  },

  kau: {
    universityId: 'kau',
    localName: 'Karlstad University (Karlstads Universitet)',
    campusTitle: 'Universitetsgatan Science Park & PriSec Center',
    welcomeMessage: 'Welcome to Karlstad! On the northern shores of Lake Vänern: explore Swedish privacy engineering, circular bioeconomy research, and local lab fellowships.',
    establishedNotice: 'Established in 1977, premier Nordic center for privacy-enhancing technologies, ultra-low latency mobile networks, and bio-composites.',
    mainCampuses: ['Universitetsgatan Main Campus', 'Innovation Park Karlstad'],
    keyLabs: [
      'PriSec - Privacy and Security Research Group',
      'Pro2BE - Processes and Products for the Circular Bioeconomy',
      'Low Latency Cloud & 5G Edge Lab'
    ],
    seminars: [
      {
        id: 'kau-sem-1',
        title: 'Open Colloquium: Differential Privacy & Zero-Knowledge Proofs in Health Data',
        speaker: 'Prof. Simone Fischer-Hübner',
        speakerRole: 'Professor of Computer Science',
        speakerAffiliation: 'PriSec Research Group & Department of Mathematics and CS',
        date: 'November 05, 2026',
        time: '13:00 - 14:30 CET',
        location: 'Lagerlöf Hall (1B364) & Zoom Room',
        isHybrid: true,
        category: 'Open Seminar',
        field: 'Computer Science & AI',
        description: 'Balancing rigorous mathematical privacy guarantees with empirical machine learning utility in federated medical datasets.',
        tags: ['Privacy', 'Cybersecurity', 'Data Science', 'PriSec'],
        openToAll: true,
      },
    ],
    bandiLocali: [
      {
        id: 'kau-ban-1',
        title: 'Karlstad Research Lab Assistantships in Materials & Networking 2026',
        type: 'Local Research Grant',
        department: 'Faculty of Health, Science and Technology',
        deadline: 'November 19, 2026',
        deadlineDaysLeft: 36,
        stipendOrPrize: '14,000 SEK / month stipend',
        targetStudents: 'Undergraduate & Master Students',
        description: 'Hands-on roles testing nanocellulose tensile strengths and conducting low-latency network benchmarking.',
        requirements: ['Enrolled university student', 'Familiarity with Python or MATLAB'],
        linkText: 'View Positions on KAU Job Portal',
      },
    ],
    campusGroups: [
      {
        name: 'KAU Women in Computer Science & Engineering',
        category: 'Women in STEM',
        description: 'Peer study circles, evening coding jams, and company excursions across the Värmland technology belt.',
        meetingSchedule: 'Wednesdays at 16:30 CET',
        contactEmail: 'womenintech@kau.se',
        badge: 'Värmland Tech Chapter',
      },
    ],
    noticesCount: 3,
  },
};

export function getUniversityCampusData(universityId: string): UniversityCampusData {
  return LOCAL_CAMPUS_DATA[universityId] || LOCAL_CAMPUS_DATA['ufv'];
}
