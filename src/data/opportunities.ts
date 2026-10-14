import { Opportunity } from '../types';

export const OPPORTUNITIES: Opportunity[] = [
  {
    id: 'opp-catania-robotics-01',
    title: 'Autonomous Field Robotics & Agro-Inspection Micro-Drones',
    universityId: 'unict',
    department: 'Department of Electrical, Electronics and Computer Engineering (DIEEI)',
    hostCountry: 'Italy',
    field: 'Robotics & Mechatronics',
    goal: 'Research Internship',
    matchScore: 96,
    snapshot:
      'Join the PeRCeiVe Lab developing visual SLAM algorithms for autonomous aerial and ground rovers deployed in Mediterranean terraced orchards and volcanic terrain.',
    deadlineDate: '2026-11-15',
    deadlineCountdownDays: 32,
    languageRequirement: 'English B2 (Italian optional)',
    stipendAmount: '€1,050 / month',
    stipendType: 'Erasmus+ ICM / FAPEMIG Bilateral Mobility Grant',
    trustBadge: 'Verified Partner',
    summaryTranslations: {
      pt: {
        headline: 'Estágio de Pesquisa em Robótica de Campo e Drones Autônomos em Catania',
        bullets: [
          'Desenvolvimento de algoritmos de SLAM visual e fusão sensorial LiDAR para robôs terrestres e aéreos.',
          'Bolsa integral de mobilidade de €1.050/mês financiada pelo acordo bilateral Erasmus+ ICM com a FAPEMIG.',
          'Convalidação direta de 30 créditos ECTS no departamento de Engenharia da UFV.',
          'Isenção total de taxas de matrícula na universidade italiana e alojamento universitário subsidiado.',
        ],
        financials: '€1.050/mês + auxílio deslocamento transatlântico de €1.500',
        academicCredits: '30 ECTS (equivalente a 4 disciplinas na UFV)',
      },
      en: {
        headline: 'Research Internship in Field Robotics and Aerial Rovers in Catania',
        bullets: [
          'Develop real-time visual SLAM and LiDAR sensor fusion algorithms for terrestrial and aerial mobile robots.',
          'Full mobility grant of €1,050/month via Erasmus+ International Credit Mobility & FAPEMIG bilateral accord.',
          'Direct transfer of 30 ECTS credits recognized towards graduation at UFV or home institution.',
          'Full tuition waiver at UNICT with subsidized campus accommodation in downtown Catania.',
        ],
        financials: '€1,050/month + €1,500 transatlantic flight allowance',
        academicCredits: '30 ECTS (equivalent to 4 core university courses)',
      },
    },
    skillsAnalysis: {
      matchedPrerequisites: [
        'Linear Algebra & Vector Calculus',
        'C++ / Modern Python Programming',
        'Basic Rigid-Body Kinematics',
        'Linux / Shell Scripting',
      ],
      gapSkill: 'ROS 2 (Robot Operating System) & DDS Middleware',
      gapDescription:
        'The lab runs micro-ROS on embedded STM32 chips and ROS 2 Humble on NVIDIA Jetson Orin boards. Basic ROS 2 publisher/subscriber and node lifecycle concepts are required.',
      bridgeTitle: '3-Hour ROS 2 Foundations: From Nodes to Gazebo Simulation',
      bridgeDuration: '3 hours self-paced',
      bridgeProvider: 'EUNICE Open-Access Technical Academy',
      bridgeTopics: [
        'ROS 2 Architecture & DDS Quality of Service',
        'Creating Custom Nodes in C++ and Python',
        'Launch Files & Parameter Server Handling',
        'Sensor Streaming & RViz2 Telemetry Visualization',
      ],
    },
    letterOfIntentTemplate: {
      subject:
        'Application for Erasmus+ ICM Research Internship in Field Robotics – [Student Name]',
      body: `Dear Prof. Giovanni Muscato and the Selection Committee at DIEEI, University of Catania,

I am writing to express my strong enthusiasm for the Autonomous Field Robotics Research Internship through the EUNICE × UFV bilateral partnership. As a STEM student with a focused trajectory in robotics and autonomous navigation, I have built solid foundations in C++, linear algebra, and robotic kinematics.

Having followed the innovative agricultural sensing and volcano monitoring projects developed at the PeRCeiVe Lab, I am particularly eager to contribute my experience in sensor telemetry and algorithmic optimization. The bridging between UFV's agricultural leadership in Minas Gerais and UNICT's cutting-edge microelectronics ecosystem represents an extraordinary transatlantic synergy.

I have already engaged with the EUNICE ROS 2 Foundations modules to ensure seamless integration into your research pipeline upon arrival. Thank you for considering my application.

Sincerely,
[Student Name]
[Home Institution]`,
      suggestedFocus: [
        'Emphasize previous C++ or Python coding projects',
        'Highlight passion for agricultural or environmental robotics',
        'Mention completion of the EUNICE ROS 2 Bridge Course',
      ],
    },
    researchGroup: 'PeRCeiVe Lab (Perception and Robotics in Challenging Environments)',
    facultyMentor: 'Prof. Giovanni Muscato & Dr. Corrado Santoro',
    openSlots: 2,
  },
  {
    id: 'opp-vaasa-energy-02',
    title: 'Smart Grids, Offshore Wind & Hydrogen Microgrid Simulation',
    universityId: 'univaasa',
    department: 'School of Technology and Innovations',
    hostCountry: 'Finland',
    field: 'Renewable Energy & Decarbonization',
    goal: "Master's Degree Scholarship",
    matchScore: 94,
    snapshot:
      'Fully funded 2-year Master of Science fellowship at EnergyVaasa, researching power grid stability, battery storage modeling, and green hydrogen injection.',
    deadlineDate: '2026-12-01',
    deadlineCountdownDays: 48,
    languageRequirement: 'English B2 (PTE / IELTS / Institutional Duolingo)',
    stipendAmount: '€1,200 / month + 100% Tuition Waiver',
    stipendType: 'Finnish National EUNICE Excellence Scholarship',
    trustBadge: 'Official EUNICE Portal',
    summaryTranslations: {
      pt: {
        headline: 'Mestrado Integral com Bolsa em Redes Elétricas Inteligentes em Vaasa',
        bullets: [
          'Mestrado de 2 anos no maior ecossistema de transição energética dos países nórdicos (EnergyVaasa).',
          'Isenção de 100% da anuidade (€12.000/ano) + bolsa mensal de €1.200 para manutenção na Finlândia.',
          'Acesso a laboratórios em escala real com simuladores de hardware em tempo real (RTDS).',
          'Possibilidade de estágio integrado com gigantes industriais como Wärtsilä e Danfoss.',
        ],
        financials: 'Isenção integral de mensalidade + €1.200/mês para custo de vida',
        academicCredits: '120 ECTS (Mestrado Acadêmico Europeu Completo)',
      },
      en: {
        headline: 'Fully Funded 2-Year Master of Science in Smart Grids in Vaasa',
        bullets: [
          'Two-year MSc degree program within the Nordic Nordic Energy Capital ecosystem.',
          'Full 100% tuition waiver (€12,000/yr value) plus €1,200/month living stipend.',
          'Hands-on experimental access to Real-Time Digital Simulators (RTDS) and battery test benches.',
          'Direct thesis sponsorship pathways with multinational tech giants including Wärtsilä and Danfoss.',
        ],
        financials: '100% Tuition Waiver + €1,200/month stipend',
        academicCredits: '120 ECTS (Full European Master of Science)',
      },
    },
    skillsAnalysis: {
      matchedPrerequisites: [
        'Electric Circuit Analysis',
        'Differential Equations',
        'Basic Power Systems Principles',
        'MATLAB / Simulink Basics',
      ],
      gapSkill: 'PowerFactory (DIgSILENT) or OpenDSS Grid Modeling',
      gapDescription:
        'The Master cohort analyzes distributed photovoltaic and wind intermittency using steady-state load flow tools such as PowerFactory or OpenDSS.',
      bridgeTitle: 'Microgrid Dynamics: Steady-State Modeling with OpenDSS',
      bridgeDuration: '2.5 hours self-paced',
      bridgeProvider: 'University of Vaasa & EUNICE Energy Hub',
      bridgeTopics: [
        'Distribution Feeder Topology & Phasor Calculations',
        'Simulating Distributed PV & Battery Storage Penetration',
        'Voltage Sag Mitigation & Frequency Response',
      ],
    },
    letterOfIntentTemplate: {
      subject:
        'Application for EUNICE Excellence Scholarship in Smart Energy Systems – [Student Name]',
      body: `Dear Admissions Committee and Program Director at the University of Vaasa,

I am applying for the Master's Degree Programme in Smart Energy and the associated Finnish National EUNICE Excellence Scholarship. With the global acceleration toward carbon neutrality, combining Brazil's continental renewable matrix with Finland's world-leading grid automation is my definitive academic goal.

During my undergraduate STEM studies, I developed a rigorous understanding of power circuits and numerical methods. Joining the EnergyVaasa innovation cluster will provide the ideal experimental workbench to investigate hybrid microgrids and real-time power modulation.

Thank you for reviewing my credentials and for facilitating transatlantic academic mobility.

Respectfully,
[Student Name]`,
      suggestedFocus: [
        'Highlight background in electrical engineering or physics',
        'Connect Brazilian renewable energy potential with Nordic innovation',
      ],
    },
    researchGroup: 'Smart Electric Systems Research Group (FREESI)',
    facultyMentor: 'Prof. Kimmo Kauhaniemi',
    openSlots: 4,
  },
  {
    id: 'opp-poznan-ai-03',
    title: 'Distributed Machine Learning & Edge Computing for Connected Vehicles',
    universityId: 'put',
    department: 'Faculty of Computing and Telecommunications',
    hostCountry: 'Poland',
    field: 'Computer Science & AI',
    goal: 'Research Internship',
    matchScore: 98,
    snapshot:
      'Collaborate on federated learning and edge tensor acceleration for vehicular ad-hoc networks (VANET) in Poznań’s smart transport testbed.',
    deadlineDate: '2026-11-20',
    deadlineCountdownDays: 37,
    languageRequirement: 'English B2',
    stipendAmount: '€1,050 / month',
    stipendType: 'Erasmus+ ICM Mobility Fellowship',
    trustBadge: 'Verified Partner',
    summaryTranslations: {
      pt: {
        headline: 'Pesquisa em Inteligência Artificial Embarcada e Veículos Conectados em Poznań',
        bullets: [
          'Pesquisa avançada em aprendizado federado e processamento de IA em borda para telemetria veicular.',
          'Bolsa Erasmus+ de €1.050/mês com alojamento no moderno campus Warta da PUT.',
          'Co-autoria em conferências internacionais (IEEE / ACM) como parte da equipe de pesquisa.',
          'Laboratórios com aceleradores de hardware NVIDIA Jetson e FPGA de última geração.',
        ],
        financials: '€1.050/mês + subsídio para despesas de viagem de €1.500',
        academicCredits: '30 ECTS transferíveis para a graduação ou pós-graduação',
      },
      en: {
        headline: 'Edge AI and Connected Vehicles Research Fellowship in Poznań',
        bullets: [
          'Investigate federated machine learning models and edge tensor acceleration for connected autonomous vehicles.',
          'Full Erasmus+ mobility grant of €1,050/month with student residence on the Warta campus.',
          'Co-authorship opportunities in peer-reviewed IEEE/ACM proceedings.',
          'Direct access to NVIDIA Jetson clusters and FPGA acceleration test rigs.',
        ],
        financials: '€1,050/month + €1,500 travel allowance',
        academicCredits: '30 ECTS transferable to home degree',
      },
    },
    skillsAnalysis: {
      matchedPrerequisites: [
        'Python & PyTorch or TensorFlow',
        'Data Structures & Algorithms',
        'Probability & Statistics',
        'Git & Version Control',
      ],
      gapSkill: 'Federated Learning Frameworks (Flower / PySyft)',
      gapDescription:
        'The team distributes gradient updates across edge nodes without exposing raw telemetry data, utilizing the open-source Flower framework.',
      bridgeTitle: 'Privacy-Preserving Edge AI: Federated Learning with Flower',
      bridgeDuration: '3 hours self-paced',
      bridgeProvider: 'PUT Poznań Computer Science Institute',
      bridgeTopics: [
        'Federated Averaging (FedAvg) Mathematical Foundations',
        'Client-Server Architecture in Flower Framework',
        'Differential Privacy & Secure Aggregation',
        'Evaluating Model Convergence on Heterogeneous Hardware',
      ],
    },
    letterOfIntentTemplate: {
      subject:
        'Application for Edge AI Research Placement at PUT Poznań – [Student Name]',
      body: `Dear Prof. Jerzy Nawrocki and the Artificial Intelligence Laboratory at Poznań University of Technology,

I submit my candidacy for the Distributed Machine Learning & Edge Computing research internship facilitated by the EUNICE partnership. Having cultivated a strong basis in deep learning and Python system design, I am eager to apply my skills to the computational challenges of decentralized vehicle intelligence.

Poznań University of Technology’s reputation in distributed systems offers an unparalleled environment to deepen my expertise in low-latency inferencing. I am fully committed to bringing dedication and rigor to your research team.

Sincerely,
[Student Name]`,
      suggestedFocus: [
        'Mention PyTorch or tensor manipulation experience',
        'Express interest in distributed or edge computing',
      ],
    },
    researchGroup: 'Distributed Systems & Mobile AI Lab',
    facultyMentor: 'Prof. Robert Wrembel & Dr. Mikolaj Morzy',
    openSlots: 3,
  },
  {
    id: 'opp-mons-biotech-04',
    title: 'Synthetic Biomaterials & Bio-Functional Polymeric Interfaces',
    universityId: 'umons',
    department: 'Laboratory for Chemistry of Novel Materials & Biosystems',
    hostCountry: 'Belgium',
    field: 'Biotechnology & Life Sciences',
    goal: 'Research Internship',
    matchScore: 92,
    snapshot:
      'Synthesize and characterize biocompatible nanostructured surfaces for targeted enzyme immobilisation and sustainable bio-catalysis.',
    deadlineDate: '2026-11-30',
    deadlineCountdownDays: 47,
    languageRequirement: 'English B2 (French is a welcoming plus)',
    stipendAmount: '€1,100 / month',
    stipendType: 'Wallonia-Brussels / EUNICE Transatlantic Fellowship',
    trustBadge: 'Direct Agreement',
    summaryTranslations: {
      pt: {
        headline: 'Estágio de Biotecnologia e Biomateriais Poliméricos em Mons',
        bullets: [
          'Pesquisa em química de novos materiais, bio-revestimentos e imobilização de enzimas bio-catalíticas.',
          'Bolsa mensal de €1.100 financiada pelo programa de mobilidade transatlântica de Valônia-Bruxelas.',
          'Acesso a microscopia de força atômica (AFM) e espectroscopia fotoeletrônica de raios-X (XPS).',
          'Total apoio na obtenção do visto estudantil belga e alojamento estudantil no centro histórico de Mons.',
        ],
        financials: '€1.100/mês + seguro de saúde internacional integral',
        academicCredits: '25 ECTS reconhecidos formalmente',
      },
      en: {
        headline: 'Synthetic Biomaterials and Polymer Interface Research in Mons',
        bullets: [
          'Investigate novel bio-coatings, enzyme immobilization, and functional polymer surfaces.',
          'Monthly stipend of €1,100 supported by Wallonia-Brussels transatlantic mobility fellowship.',
          'Direct training on atomic force microscopy (AFM) and XPS characterization instruments.',
          'Full visa concierge support and accommodation reservations in historic Mons.',
        ],
        financials: '€1,100/month + comprehensive international health insurance',
        academicCredits: '25 ECTS recognized formally',
      },
    },
    skillsAnalysis: {
      matchedPrerequisites: [
        'Organic Chemistry Principles',
        'General Biochemistry',
        'Laboratory Safety Protocols',
        'Basic Spectrophotometry',
      ],
      gapSkill: 'Surface Characterization: AFM & Contact Angle Goniometry',
      gapDescription:
        'Interns conduct nanometer-scale surface analysis using tapping-mode Atomic Force Microscopy and optical contact angle measurements.',
      bridgeTitle: 'Surface Science Essentials: AFM & Thin Film Metrology',
      bridgeDuration: '2 hours self-paced',
      bridgeProvider: 'UMONS Materials Research Institute',
      bridgeTopics: [
        'Principles of Atomic Force Microscopy (Contact vs Tapping)',
        'Interpreting Topographical Root Mean Square (RMS) Roughness',
        'Surface Free Energy Calculations via Sessile Drop Method',
      ],
    },
    letterOfIntentTemplate: {
      subject:
        'Motivation Letter: Biomaterials Research Internship – [Student Name]',
      body: `Dear Prof. Roberto Lazzaroni and the Selection Board at UMONS,

I am delighted to apply for the Research Internship in Synthetic Biomaterials at the University of Mons through our EUNICE-UFV bilateral framework. As a student passionate about interface science and bio-catalysis, I have focused my undergraduate work on biochemistry and analytical laboratory techniques.

UMONS's internationally renowned expertise in polymer characterization makes this the ideal environment to push the frontiers of bio-functional coatings. I look forward to contributing enthusiastically to your laboratory.

Sincerely,
[Student Name]`,
      suggestedFocus: [
        'Detail laboratory safety and wet-lab experience',
        'Express motivation for biomaterials and sustainability',
      ],
    },
    researchGroup: 'Laboratory for Chemistry of Novel Materials (CMN)',
    facultyMentor: 'Prof. David Beljonne',
    openSlots: 2,
  },
  {
    id: 'opp-cantabria-ocean-05',
    title: 'Marine Renewable Hydrodynamics & Coastal Climate Digital Twins',
    universityId: 'uc',
    department: 'Environmental Hydraulics Institute (IHCantabria)',
    hostCountry: 'Spain',
    field: 'Renewable Energy & Decarbonization',
    goal: 'Exchange Semester',
    matchScore: 90,
    snapshot:
      'Study offshore wave energy converter arrays and hydrodynamic computational models inside IHCantabria’s world-class wave basin facility.',
    deadlineDate: '2026-12-15',
    deadlineCountdownDays: 62,
    languageRequirement: 'English B2 or Spanish B1',
    stipendAmount: '€1,050 / month',
    stipendType: 'Erasmus+ KA171 Mobility Accord',
    trustBadge: 'Official EUNICE Portal',
    summaryTranslations: {
      pt: {
        headline: 'Semestre de Intercâmbio em Energia dos Oceanos e Hidrodinâmica em Santander',
        bullets: [
          'Estudos no Instituto de Hidráulica Ambiental da Cantábria, referência mundial em modelagem costeira.',
          'Aulas em inglês ou espanhol com disciplinas avançadas em energia das ondas e eólica offshore.',
          'Bolsa Erasmus+ KA171 de €1.050/mês para cobrir estadia no litoral de Santander.',
          'Integração total com pesquisadores de doutorado e projetos do programa Horizon Europe.',
        ],
        financials: '€1.050/mês durante os 5 meses do semestre',
        academicCredits: '30 ECTS com equivalência direta de matérias na UFV',
      },
      en: {
        headline: 'Exchange Semester in Marine Hydrodynamics and Ocean Energy in Santander',
        bullets: [
          'Study at IHCantabria, a premier global institute for coastal dynamics and offshore simulation.',
          'Coursework in English or Spanish covering wave energy converters, CFD, and coastal structures.',
          '€1,050/month mobility grant to cover living expenses in coastal Santander.',
          'Collaboration with active doctoral researchers on Horizon Europe offshore initiatives.',
        ],
        financials: '€1,050/month across the 5-month semester duration',
        academicCredits: '30 ECTS with verified course equivalency',
      },
    },
    skillsAnalysis: {
      matchedPrerequisites: [
        'Fluid Mechanics Foundations',
        'Calculus III & Differential Equations',
        'Python or MATLAB for Engineering Data',
      ],
      gapSkill: 'OpenFOAM / Hydrodynamic Numerical Wave Flume Modeling',
      gapDescription:
        'Simulations of fluid-structure interaction on oscillating water columns use OpenFOAM multiphase solvers (interFoam).',
      bridgeTitle: 'Computational Fluid Dynamics for Coastal Engineers: OpenFOAM Basics',
      bridgeDuration: '3.5 hours self-paced',
      bridgeProvider: 'University of Cantabria & IHCantabria',
      bridgeTopics: [
        'Navier-Stokes Solvers & Volume of Fluid (VOF) Method',
        'Mesh Generation with blockMesh & snappyHexMesh',
        'Boundary Conditions for Regular and Irregular Wave Generation',
      ],
    },
    letterOfIntentTemplate: {
      subject:
        'Exchange Semester Application: Marine Renewables – [Student Name]',
      body: `Dear Academic Coordinator at the University of Cantabria,

I am writing to apply for the Exchange Semester in Marine Renewable Hydrodynamics through the EUNICE mobility consortium. My background in fluid mechanics and numerical computing has sparked my ambition to specialize in offshore renewable power.

The world-class experimental wave flumes at IHCantabria represent the pinnacle of ocean engineering research. I look forward to representing my university with academic excellence in Santander.

Warm regards,
[Student Name]`,
      suggestedFocus: [
        'Highlight fluid mechanics coursework',
        'Express interest in offshore wind or wave energy',
      ],
    },
    researchGroup: 'Marine Energy and Offshore Engineering Group',
    facultyMentor: 'Prof. Íñigo Losada',
    openSlots: 3,
  },
  {
    id: 'opp-btu-aero-06',
    title: 'Hybrid-Electric Aircraft Propulsion & Decarbonized Combustion',
    universityId: 'btu',
    department: 'Center for Hybrid Electric Systems Cottbus (CHESCO)',
    hostCountry: 'Germany',
    field: 'Materials Science & Nanotechnology',
    goal: 'Research Internship',
    matchScore: 91,
    snapshot:
      'Participate in thermal stress analysis of ceramic matrix composites and superconducting electric coils for zero-emission aviation turbines.',
    deadlineDate: '2026-11-25',
    deadlineCountdownDays: 42,
    languageRequirement: 'English B2 (German A1/A2 is beneficial for campus life)',
    stipendAmount: '€1,150 / month',
    stipendType: 'DAAD / EUNICE Bilateral Industrial Fellowship',
    trustBadge: 'Verified Partner',
    summaryTranslations: {
      pt: {
        headline: 'Estágio de Pesquisa em Propulsão Elétrica Aeronáutica em Cottbus',
        bullets: [
          'Pesquisa no centro CHESCO com turbinas híbridas e materiais cerâmicos avançados.',
          'Bolsa mensal de €1.150 através de convênio DAAD / EUNICE sem exigência de língua alemã.',
          'Experiência prática com testes térmicos destrutivos e simulação por elementos finitos.',
          'Passe livre de transporte público para todo o estado de Brandemburgo e Berlim.',
        ],
        financials: '€1.150/mês + Semesterticket ilimitado para trens regionais',
        academicCredits: '30 ECTS transferíveis',
      },
      en: {
        headline: 'Research Placement in Hybrid-Electric Aviation at BTU Cottbus',
        bullets: [
          'Investigate ceramic matrix composites and electric powertrain thermodynamics at CHESCO.',
          '€1,150/month stipend provided by DAAD/EUNICE partnership with English-language instruction.',
          'Hands-on experimental thermal cycling and finite element simulations (FEA).',
          'Includes transit ticket for all regional rail across Brandenburg and Berlin.',
        ],
        financials: '€1,150/month + public transit pass',
        academicCredits: '30 ECTS transferable credits',
      },
    },
    skillsAnalysis: {
      matchedPrerequisites: [
        'Thermodynamics I & II',
        'Strength of Materials',
        'Solid Modeling (CAD / SolidWorks)',
      ],
      gapSkill: 'Finite Element Analysis (ANSYS / Abaqus Thermal-Structural)',
      gapDescription:
        'The lab requires setting up coupled thermo-mechanical boundary conditions to evaluate micro-cracking in high-temperature turbine blades.',
      bridgeTitle: 'Coupled Thermo-Structural FEA: From CAD to Stress Invariants',
      bridgeDuration: '3 hours self-paced',
      bridgeProvider: 'BTU Cottbus-Senftenberg Mechanical Faculty',
      bridgeTopics: [
        'Thermal Conduction & Convection Boundary Formulations',
        'Nonlinear Material Models for Ceramics & Superalloys',
        'Convergence Troubleshooting in Coupled Solvers',
      ],
    },
    letterOfIntentTemplate: {
      subject:
        'Application for CHESCO Research Placement – [Student Name]',
      body: `Dear Dr. Georg Rosenfeld and the CHESCO Research Board at BTU Cottbus,

I am honored to submit my application for the Hybrid-Electric Aircraft Propulsion research position. Studying the decarbonization of transport systems has been my driving academic motivation.

BTU's state-of-the-art testing infrastructure in Lusatia provides the ultimate venue to translate theoretical thermodynamics into real zero-emission mobility solutions. I am eager to contribute my dedication to your laboratory.

Sincerely,
[Student Name]`,
      suggestedFocus: [
        'Mention thermodynamics and materials strength grades',
        'Demonstrate enthusiasm for sustainable aviation',
      ],
    },
    researchGroup: 'CHESCO High-Temperature Materials Unit',
    facultyMentor: 'Prof. Klaus Höschler',
    openSlots: 2,
  },
  {
    id: 'opp-uphf-trans-07',
    title: 'Autonomous Railway Cybersecurity & Human-in-the-Loop Tele-operation',
    universityId: 'uphf',
    department: 'LAMIH UMR CNRS 8201 (Laboratory of Industrial and Human Automation)',
    hostCountry: 'France',
    field: 'Computer Science & AI',
    goal: 'Summer School',
    matchScore: 89,
    snapshot:
      'An intensive 4-week summer program in northern France testing fail-safe wireless interlocking protocols and cognitive workload in remote train dispatching.',
    deadlineDate: '2026-12-10',
    deadlineCountdownDays: 57,
    languageRequirement: 'English B2',
    stipendAmount: 'All Expenses Paid + €400 stipend',
    stipendType: 'French Ministry of Higher Education EUNICE Summer Award',
    trustBadge: 'Direct Agreement',
    summaryTranslations: {
      pt: {
        headline: 'Escola de Verão em Transporte Autônomo e Cibersegurança na França',
        bullets: [
          'Programa imersivo de 4 semanas no laboratório de automação do CNRS em Valenciennes.',
          'Hospedagem em dormitório universitário e alimentação 100% cobertas + ajuda de custo de €400.',
          'Testes em simuladores de cabine de trem de alta velocidade com rastreadores oculares.',
          'Visitas técnicas às fábricas da Alstom e centros ferroviários de inovação europeus.',
        ],
        financials: 'Alojamento + refeições cobertas + €400 de ajuda de custo',
        academicCredits: '6 ECTS (Certificado oficial de verão EUNICE)',
      },
      en: {
        headline: 'Summer School in Autonomous Rail Systems and Cybersecurity in France',
        bullets: [
          'Four-week immersive academy at the CNRS LAMIH laboratory in Valenciennes.',
          'Full room and board provided plus a €400 personal stipend.',
          'Experimental sessions on high-speed rail simulators with eye-tracking telemetry.',
          'Industry field visits to Alstom assembly plants and European rail testing rings.',
        ],
        financials: 'Full accommodation + meals + €400 cash stipend',
        academicCredits: '6 ECTS (Official EUNICE Summer Certificate)',
      },
    },
    skillsAnalysis: {
      matchedPrerequisites: [
        'Basic Network Architectures (TCP/IP)',
        'Object-Oriented Programming',
        'Elementary Human-Computer Interaction',
      ],
      gapSkill: 'CAN Bus & Rail Interlocking Network Security (ETCS Level 2/3)',
      gapDescription:
        'The summer school examines security vulnerabilities in European Train Control System (ETCS) packet injection and defensive cryptography.',
      bridgeTitle: 'Industrial IoT & Critical Infrastructure Network Security',
      bridgeDuration: '2 hours self-paced',
      bridgeProvider: 'UPHF & CNRS LAMIH',
      bridgeTopics: [
        'CAN bus & Time-Triggered Ethernet Fundamentals',
        'Cryptographic Key Management in Rail Signaling',
        'Man-in-the-Middle Defense Mechanisms for Autonomous Transit',
      ],
    },
    letterOfIntentTemplate: {
      subject:
        'Summer School Application: Autonomous Rail Systems – [Student Name]',
      body: `To the Summer School Admissions Committee at Université Polytechnique Hauts-de-France,

I am thrilled to apply for the Autonomous Railway Cybersecurity Summer School. As a student captivated by safety-critical software, the intersection of cybersecurity and autonomous mobility is my prime focus.

The chance to train on CNRS experimental simulators alongside European peers is an unparalleled opportunity. Thank you for your review.

Respectfully,
[Student Name]`,
      suggestedFocus: [
        'Highlight computer networks or security interest',
        'Note eagerness for short-term intensive research immersion',
      ],
    },
    researchGroup: 'LAMIH Autonomous Transportation Department',
    facultyMentor: 'Prof. Choubeila Maaoui',
    openSlots: 5,
  },
  {
    id: 'opp-karlstad-crypto-08',
    title: 'Privacy-Preserving Cloud Architectures & Post-Quantum Cryptography',
    universityId: 'kau',
    department: 'Department of Mathematics and Computer Science (PriSec)',
    hostCountry: 'Sweden',
    field: 'Computer Science & AI',
    goal: "Master's Degree Scholarship",
    matchScore: 95,
    snapshot:
      'Pursue a funded 2-year MSc in Computer Science with the PriSec research group, designing lattice-based encryption algorithms for decentralized cloud storage.',
    deadlineDate: '2026-11-28',
    deadlineCountdownDays: 45,
    languageRequirement: 'English B2 / C1',
    stipendAmount: 'SEK 13,000 / month (~€1,150) + Full Tuition Waiver',
    stipendType: 'Swedish Institute / EUNICE Global Scholar Grant',
    trustBadge: 'Official EUNICE Portal',
    summaryTranslations: {
      pt: {
        headline: 'Mestrado com Bolsa Integral em Criptografia Pós-Quântica na Suécia',
        bullets: [
          'Mestrado de excelência no grupo de pesquisa PriSec (Privacidade e Segurança) na Suécia.',
          'Isenção total da anuidade sueca + bolsa de 13.000 coroas suecas (~€1.150/mês).',
          'Pesquisa em criptografia baseada em reticulados (Lattice-based) para a era pós-quântica.',
          'Ambiente universitário 100% internacional com suporte completo de imigração e moradia.',
        ],
        financials: '100% isenção de matrícula + SEK 13.000/mês para moradia e custos',
        academicCredits: '120 ECTS (Diploma de Mestre reconhecido internacionalmente)',
      },
      en: {
        headline: 'Fully Funded MSc in Post-Quantum Cryptography & Privacy in Sweden',
        bullets: [
          'Prestigious 2-year MSc with the PriSec (Privacy and Security) research group.',
          'Full tuition waiver plus SEK 13,000/month living scholarship.',
          'Research focusing on lattice-based cryptography and zero-knowledge proofs.',
          'Fully international Swedish research environment with guaranteed student housing.',
        ],
        financials: 'Full tuition waiver + SEK 13,000/month (~€1,150/mo)',
        academicCredits: '120 ECTS (Full European Master degree)',
      },
    },
    skillsAnalysis: {
      matchedPrerequisites: [
        'Discrete Mathematics',
        'Abstract Algebra / Number Theory Basics',
        'C or Rust Programming',
        'Operating Systems Concepts',
      ],
      gapSkill: 'Lattice Cryptography (Learning With Errors - LWE & Ring-LWE)',
      gapDescription:
        'Understanding mathematical hardness assumptions behind NIST post-quantum standards (Kyber/Dilithium) is essential for group seminars.',
      bridgeTitle: 'Post-Quantum Fundamentals: Lattice Hardness & NIST Standards',
      bridgeDuration: '3 hours self-paced',
      bridgeProvider: 'Karlstad University PriSec Lab',
      bridgeTopics: [
        'Shortest Vector Problem (SVP) & Closest Vector Problem (CVP)',
        'Ring-LWE Encryption Schemes and Polynomial Arithmetic',
        'Side-Channel Countermeasures in C/Rust Implementations',
      ],
    },
    letterOfIntentTemplate: {
      subject:
        'MSc Application: Privacy & Post-Quantum Systems – [Student Name]',
      body: `Dear Prof. Simone Fischer-Hübner and the PriSec Admissions Board at Karlstad University,

I am writing to submit my application for the MSc in Computer Science and the Swedish Institute EUNICE Global Scholar Grant. With quantum computation challenging conventional RSA and ECC cryptography, dedicating my graduate studies to lattice-based privacy is my clear aspiration.

Karlstad’s pioneering research in human-centric privacy and formal verification offers the perfect crucible for my ambition. I look forward to contributing mathematically rigorous work.

Yours sincerely,
[Student Name]`,
      suggestedFocus: [
        'Highlight mathematical aptitude and number theory',
        'Demonstrate understanding of post-quantum urgency',
      ],
    },
    researchGroup: 'PriSec (Privacy & Security Research Group)',
    facultyMentor: 'Prof. Simone Fischer-Hübner & Prof. Leonardo Martucci',
    openSlots: 2,
  },
  {
    id: 'opp-ufv-agrobiotech-09',
    title: 'Genomic Editing & Tropical Phytopathology Defense for Climate Resilience',
    universityId: 'ufv',
    department: 'Department of Plant Pathology & Institute of Biotechnology (BIOAGRO)',
    hostCountry: 'Brazil',
    field: 'Biotechnology & Life Sciences',
    goal: 'Research Internship',
    matchScore: 97,
    snapshot:
      'European students partner with UFV researchers in Viçosa utilizing CRISPR-Cas9 to induce drought and fungal resistance in tropical crop cultivars.',
    deadlineDate: '2026-11-18',
    deadlineCountdownDays: 35,
    languageRequirement: 'Portuguese B1 or English B2',
    stipendAmount: 'R$ 3,200 / month (~€550) + Free Housing at Vila Giannetti',
    stipendType: 'CAPES-PrInt / FAPEMIG Inbound International Fellowship',
    trustBadge: 'Verified Partner',
    summaryTranslations: {
      pt: {
        headline: 'Estágio de Pesquisa em Edição Genômica CRISPR na UFV (Viçosa)',
        bullets: [
          'Pesquisa no BIOAGRO, o mais renomado centro de biotecnologia vegetal da América do Sul.',
          'Bolsa CAPES-PrInt de R$ 3.200/mês + moradia gratuita para estudantes internacionais no campus.',
          'Acesso a estufas com clima controlado e sequenciadores de DNA de última geração (Illumina/PacBio).',
          'Integração na vibrante comunidade universitária de Viçosa, Minas Gerais.',
        ],
        financials: 'R$ 3.200/mês + alojamento cortesia no campus histórico da UFV',
        academicCredits: '30 ECTS transferíveis para a universidade europeia de origem',
      },
      en: {
        headline: 'CRISPR Gene Editing & Tropical Crop Resilience Internship at UFV Viçosa',
        bullets: [
          'Research at BIOAGRO, Latin America’s top agricultural biotechnology research institute.',
          'CAPES-PrInt stipend of R$ 3,200/month plus free on-campus housing at Vila Giannetti.',
          'Access to climate-controlled biosafety greenhouses and Illumina/PacBio sequencing platforms.',
          'Full immersion in the historic, safe academic town of Viçosa, Minas Gerais, Brazil.',
        ],
        financials: 'R$ 3,200/month (~€550) + complimentary on-campus villa accommodation',
        academicCredits: '30 ECTS transferable to European home institution',
      },
    },
    skillsAnalysis: {
      matchedPrerequisites: [
        'Molecular Biology & Genetics',
        'Recombinant DNA Techniques',
        'Standard PCR & Gel Electrophoresis',
      ],
      gapSkill: 'Bioinformatic gRNA Design & Off-Target Cleavage Prediction',
      gapDescription:
        'Designing optimal guide RNAs with minimal off-target affinity requires familiarity with CRISPR-P 2.0 and Cas-OFFinder tools.',
      bridgeTitle: 'In Silico CRISPR Design: Guide RNA Engineering & Off-Target Screening',
      bridgeDuration: '2.5 hours self-paced',
      bridgeProvider: 'UFV BIOAGRO & EUNICE Life Sciences Track',
      bridgeTopics: [
        'PAM Site Selection & Secondary Structure Minimization',
        'Using Benchling & CRISPR-P for Plant Genome Targets',
        'Analyzing NGS Cleavage Frequencies with CrispRVariants in R',
      ],
    },
    letterOfIntentTemplate: {
      subject:
        'Application for BIOAGRO Inbound Research Placement – [Student Name]',
      body: `Dear Prof. Elizabeth Pacheco and the BIOAGRO Selection Committee at Universidade Federal de Viçosa,

I am writing to express my eager desire to undertake a research internship at the renowned BIOAGRO institute in Viçosa through our EUNICE partnership. Having studied plant sciences and molecular genetics in Europe, gaining hands-on experience in tropical crop resilience is an indispensable asset for my scientific career.

UFV's century-long leadership in agronomy offers an unmatched research canvas. I am eager to bring my laboratory discipline to your team.

Atenciosamente / Sincerely,
[Student Name]`,
      suggestedFocus: [
        'Highlight PCR and molecular cloning hands-on skills',
        'Emphasize desire for Brazilian scientific and cultural immersion',
      ],
    },
    researchGroup: 'BIOAGRO Molecular Plant-Pathogen Interaction Group',
    facultyMentor: 'Prof. Elizabeth Pacheco & Prof. Maurício Dutra',
    openSlots: 3,
  },
  {
    id: 'opp-peloponnese-iot-10',
    title: 'Energy-Harvesting Microcontrollers & Low-Power 6G IoT Protocols',
    universityId: 'uop',
    department: 'Department of Informatics and Telecommunications',
    hostCountry: 'Greece',
    field: 'Applied Mathematics & Modeling',
    goal: 'Research Internship',
    matchScore: 88,
    snapshot:
      'Design intermittent computing runtime kernels for battery-free sensors powered by RF ambient harvesting and solar micro-cells in sunny Mediterranean Greece.',
    deadlineDate: '2026-12-05',
    deadlineCountdownDays: 52,
    languageRequirement: 'English B2',
    stipendAmount: '€1,050 / month',
    stipendType: 'Erasmus+ ICM Mobility Grant',
    trustBadge: 'Verified Partner',
    summaryTranslations: {
      pt: {
        headline: 'Estágio de Pesquisa em Sensores IoT sem Bateria e Redes 6G na Grécia',
        bullets: [
          'Pesquisa em sistemas computacionais intermitentes alimentados por colheita de energia solar e RF.',
          'Bolsa Erasmus+ de €1.050/mês para cobrir custo de vida na cidade histórica de Trípoli/Patras.',
          'Programação de baixo nível em microcontroladores RISC-V e ARM Cortex-M0+.',
          'Clima mediterrâneo acolhedor e custo de vida muito favorável para estudantes.',
        ],
        financials: '€1.050/mês + subsídio de transporte transatlântico de €1.500',
        academicCredits: '30 ECTS transferíveis',
      },
      en: {
        headline: 'Battery-Free IoT & Energy-Harvesting 6G Research in Greece',
        bullets: [
          'Investigate intermittent computing runtimes powered by ambient RF and micro-photovoltaic harvesting.',
          '€1,050/month Erasmus+ mobility fellowship with affordable Mediterranean living costs.',
          'Low-level firmware development on open-source RISC-V and ARM Cortex-M0+ silicon.',
          'Supportive laboratory team with established connections to European telecom consortia.',
        ],
        financials: '€1,050/month + €1,500 travel allowance',
        academicCredits: '30 ECTS transferable credits',
      },
    },
    skillsAnalysis: {
      matchedPrerequisites: [
        'Embedded C / C++ Programming',
        'Digital Logic & Microprocessor Architecture',
        'Basic Analog Circuit Understanding',
      ],
      gapSkill: 'Intermittent Computing & Non-Volatile Memory (FRAM) Checkpointing',
      gapDescription:
        'When energy harvest drops below threshold, processors must checkpoint volatile registers into Ferroelectric RAM (FRAM) within microseconds.',
      bridgeTitle: 'Zero-Power Computing: State Checkpointing on Transient Energy',
      bridgeDuration: '3 hours self-paced',
      bridgeProvider: 'University of the Peloponnese Telecommunications Lab',
      bridgeTopics: [
        'Supercapacitor Charge/Discharge Discharge Dynamics',
        'Non-Volatile RAM (FRAM) Architectures',
        'Idempotent Task Decomposition in Embedded C',
      ],
    },
    letterOfIntentTemplate: {
      subject:
        'Application for Embedded IoT Placement in Tripoli – [Student Name]',
      body: `Dear Prof. Michael Paraskevas and the Faculty Board at University of the Peloponnese,

I am writing to apply for the Energy-Harvesting Microcontrollers research placement through EUNICE. My fascination with hardware-software co-design drives my ambition to develop batteryless sensing infrastructure.

Your department’s contributions to transient computing represent the leading edge of IoT sustainability. I look forward to an enriching research term in Greece.

Sincerely,
[Student Name]`,
      suggestedFocus: [
        'Demonstrate embedded C or microcontroller projects',
        'Highlight enthusiasm for green IoT and energy harvesting',
      ],
    },
    researchGroup: 'Wireless Communications and Embedded Systems Lab',
    facultyMentor: 'Prof. Michael Paraskevas',
    openSlots: 2,
  },
  {
    id: 'opp-viseu-agro-11',
    title: 'Precision Viticulture Robotics & Computer Vision for Fruit Quality',
    universityId: 'ipv',
    department: 'School of Agriculture and Technology (ESAV)',
    hostCountry: 'Portugal',
    field: 'Robotics & Mechatronics',
    goal: 'Exchange Semester',
    matchScore: 93,
    snapshot:
      'Apply edge-AI cameras and robotic harvesters to historic Dão region vineyards, bridging Lusophone agricultural traditions with automated phenotyping.',
    deadlineDate: '2026-11-22',
    deadlineCountdownDays: 39,
    languageRequirement: 'Portuguese or English (Portuguese native speakers feel instantly at home)',
    stipendAmount: '€1,050 / month',
    stipendType: 'Erasmus+ ICM / Santander Lusophone Mobility Grant',
    trustBadge: 'Direct Agreement',
    summaryTranslations: {
      pt: {
        headline: 'Intercâmbio em Robótica Agrícola e Visão Computacional em Viseu',
        bullets: [
          'Aplicação de modelos de detecção YOLO em tratores autônomos na região vinícola do Dão.',
          'Bolsa Erasmus+ de €1.050/mês com total fluência no idioma português para estudantes brasileiros.',
          'Proximidade cultural e integração imediata sem barreiras linguísticas.',
          'Viseu é eleita frequentemente a melhor cidade para se viver em Portugal em qualidade de vida.',
        ],
        financials: '€1.050/mês durante os 5 meses de semestre letivo',
        academicCredits: '30 ECTS com equivalência curricular 100% garantida',
      },
      en: {
        headline: 'Exchange Semester in Precision Viticulture & Robotics in Viseu, Portugal',
        bullets: [
          'Deploy edge YOLO computer vision models on autonomous tractors in historic vineyards.',
          '€1,050/month Erasmus+ mobility scholarship in Portugal’s premier quality-of-life city.',
          'Ideal cultural bridge for Brazilian and European students alike.',
          'Collaborative field testing with agricultural cooperatives and wine estates.',
        ],
        financials: '€1,050/month across the full 5-month semester',
        academicCredits: '30 ECTS with full university credit validation',
      },
    },
    skillsAnalysis: {
      matchedPrerequisites: [
        'Python Programming',
        'Digital Image Processing Basics',
        'Linear Algebra',
      ],
      gapSkill: 'YOLOv8 Edge Optimization (ONNX & TensorRT)',
      gapDescription:
        'Real-time crop disease detection on moving tractors requires pruning and quantizing PyTorch neural networks into INT8 TensorRT engines.',
      bridgeTitle: 'Edge Vision Acceleration: Pruning & Quantizing YOLO for Embedded GPUs',
      bridgeDuration: '2.5 hours self-paced',
      bridgeProvider: 'IPV School of Agriculture & EUNICE Robotics',
      bridgeTopics: [
        'YOLOv8 Architecture for Small Object Segmentation',
        'Quantization-Aware Training (QAT) vs Post-Training INT8',
        'Benchmarking FPS and Mean Average Precision (mAP) on Jetson Nano',
      ],
    },
    letterOfIntentTemplate: {
      subject:
        'Candidatura ao Programa de Intercâmbio EUNICE em Viseu – [Nome do Estudante]',
      body: `Prezado(a) Coordenador(a) Acadêmico(a) do Instituto Politécnico de Viseu,

É com grande entusiasmo que apresento minha candidatura ao semestre de intercâmbio em Robótica Agrícola e Visão Computacional. Como estudante da área de ciências exatas, vejo na convergência entre o agro e a inteligência artificial o motor do desenvolvimento sustentável.

A tradição da ESAV em Viseu, combinada aos desafios práticos da viticultura de precisão no Dão, oferece o ambiente ideal para aplicar meus conhecimentos em algoritmos e sistemas embarcados. Agradeço desde já pela atenção.

Atenciosamente,
[Nome do Estudante]`,
      suggestedFocus: [
        'Mencionar afinidade linguística e cultural luso-brasileira',
        'Destacar experiência em Python ou visão computacional',
      ],
    },
    researchGroup: 'Precision Farming & Mechatronics Center',
    facultyMentor: 'Prof. António Monteiro',
    openSlots: 4,
  },
  {
    id: 'opp-ufv-comp-12',
    title: 'High-Performance Graph Neural Networks for Forest Biomass Mapping',
    universityId: 'ufv',
    department: 'Department of Informatics (DPI)',
    hostCountry: 'Brazil',
    field: 'Computer Science & AI',
    goal: 'Research Internship',
    matchScore: 94,
    snapshot:
      'Train Spatio-Temporal Graph Neural Networks over Atlantic Forest satellite radar telemetry to calculate carbon sequestration in Minas Gerais.',
    deadlineDate: '2026-12-08',
    deadlineCountdownDays: 55,
    languageRequirement: 'Portuguese or English',
    stipendAmount: 'R$ 3,200 / month (~€550) + Academic Lodge',
    stipendType: 'FAPEMIG / EUNICE Bilateral Fellowship',
    trustBadge: 'Verified Partner',
    summaryTranslations: {
      pt: {
        headline: 'Pesquisa em Redes Neurais em Grafos e Sensoriamento na UFV',
        bullets: [
          'Desenvolvimento de modelos de GNN para mapeamento de biomassa florestal e créditos de carbono.',
          'Bolsa FAPEMIG de R$ 3.200/mês com acomodação incluída no campus universitário da UFV.',
          'Acesso ao cluster de supercomputação do Departamento de Informática (DPI).',
          'Intercâmbio direto com os laboratórios de Engenharia Florestal mais bem avaliados do Brasil.',
        ],
        financials: 'R$ 3.200/mês + alojamento no campus da UFV',
        academicCredits: '30 ECTS convalidados',
      },
      en: {
        headline: 'Graph Neural Networks & Satellite Forest Telemetry Research at UFV',
        bullets: [
          'Develop spatial-temporal GNN architectures for carbon sequestration and biodiversity tracking.',
          'R$ 3,200/month stipend plus on-campus researcher residence.',
          'Full access to the GPU supercomputing cluster at UFV’s Department of Informatics.',
          'Direct collaboration with top-ranked Brazilian forestry engineering laboratories.',
        ],
        financials: 'R$ 3,200/month + on-campus housing',
        academicCredits: '30 ECTS recognized',
      },
    },
    skillsAnalysis: {
      matchedPrerequisites: [
        'Python & PyTorch',
        'Graph Theory Fundamentals',
        'Spatial Data / GIS Basics',
      ],
      gapSkill: 'PyTorch Geometric (PyG) & Message-Passing Layers',
      gapDescription:
        'Modeling non-Euclidean spatial tree canopies requires building custom message-passing GNN layers using PyG.',
      bridgeTitle: 'Graph Neural Networks with PyTorch Geometric: From Theory to Geospatial Data',
      bridgeDuration: '3 hours self-paced',
      bridgeProvider: 'UFV Department of Informatics & EUNICE Data Lab',
      bridgeTopics: [
        'Graph Convolutional Networks (GCN) and Graph Attention (GAT)',
        'Heterogeneous Graphs and Dynamic Edge Updates',
        'Handling Large-Scale Graph Minibatching with NeighborLoader',
      ],
    },
    letterOfIntentTemplate: {
      subject:
        'Research Internship Candidacy: Forest GNN Lab – [Student Name]',
      body: `Dear Prof. Marcos dos Santos and the Department of Informatics at UFV,

I submit my candidacy for the High-Performance Graph Neural Networks research internship. As a student passionate about machine learning for climate action, combining satellite radar telemetry with modern graph architectures is my primary scientific objective.

UFV’s high standing in informatics and ecological modeling makes it the premier destination for this work. Thank you for your consideration.

Respectfully,
[Student Name]`,
      suggestedFocus: [
        'Highlight PyTorch skills and mathematics aptitude',
        'Show commitment to climate and environmental data applications',
      ],
    },
    researchGroup: 'Intelligent Systems & Geospatial Computing Lab',
    facultyMentor: 'Prof. Marcus Vinícius Alvim',
    openSlots: 2,
  },
];
