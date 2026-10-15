<img width="461" alt="ELO logo" src="https://github.com/user-attachments/assets/44613111-9507-4213-ae56-75314673a049" />

---

## Table of Contents
1. [Overview & Mission](#overview--mission)
2. [Why ELO? The Challenge It Solves](#why-elo-the-challenge-it-solves)
3. [Design Philosophy & User Experience](#design-philosophy--user-experience)
4. [In-Depth Feature Guide & Functional Walkthrough](#in-depth-feature-guide--functional-walkthrough)
   - [1. Guided Student Onboarding Wizard](#1-guided-student-onboarding-wizard)
   - [2. Natural Language Opportunity Search ("Hero Agent")](#2-natural-language-opportunity-search-hero-agent)
   - [3. Curated Transatlantic STEM Opportunities Catalog](#3-curated-transatlantic-stem-opportunities-catalog)
   - [4. Interactive Skill Gap Analysis & Competency Tracker](#4-interactive-skill-gap-analysis--competency-tracker)
   - [5. Automated Academic Letter of Intent (LoI) Generator](#5-automated-academic-letter-of-intent-loi-generator)
   - [6. Campus Hub: Deep Dive into Local University Ecosystems](#6-campus-hub-deep-dive-into-local-university-ecosystems)
   - [7. Workshop & Seminar Ticket Checkout System (Stripe-Delegated)](#7-workshop--seminar-ticket-checkout-system-stripe-delegated)
   - [8. Academic Grade Converter & Transatlantic Prep Hub](#8-academic-grade-converter--transatlantic-prep-hub)
   - [9. WhatsApp Mobility Digest Simulator](#9-whatsapp-mobility-digest-simulator)
   - [10. Pioneers in STEM Exhibition](#10-pioneers-in-stem-exhibition)
5. [End-to-End Student Journey](#end-to-end-student-journey)
6. [Guida alle Funzionalità (Italian Summary)](#guida-alle-funzionalità-italian-summary)
7. [The EUNICE Alliance Network](#the-eunice-alliance-network)

---

## Overview & Mission

**ELO** is a dedicated academic mobility platform engineered to dismantle the barriers that prevent Latin American STEM students from pursuing research, dual-degree programs, and specialized academic workshops in Europe. 

Originating at **Universidade Federal de Viçosa (UFV)** in Minas Gerais, Brazil, ELO links undergraduate and graduate students directly with the **EUNICE European University Alliance** — a network of 10 universities across Italy, Poland, Belgium, Finland, Spain, Germany, France, Greece, Portugal, and Sweden.

Instead of navigating disconnected institutional portals, multilingual bureaucratic forms, and opaque PDF call notices, students use ELO as a single, unified workspace tailored to their exact academic profile, research interests, and mobility timeline.

---

## Why ELO? The Challenge It Solves

Transatlantic academic mobility between Latin America and Europe faces multiple systemic frictions:

1. **Information Asymmetry & Fragmentation**: Opportunities (funded fellowships, laboratory residencies, summer schools, seed grants) are scattered across dozens of department pages, faculty newsletters, and institutional portals.
2. **Prerequisite & Credit Confusion**: Students struggle to map local grading systems (such as the Brazilian 0–100 or 0–10 scale) to European ECTS credits and determine whether they qualify before applying.
3. **Skill Alignment Anxiety**: Calls often list advanced technical requirements (e.g., ROS 2, Next-Gen Sequencing, OpenFAST, FPGA synthesis). Students rarely know which skills they already satisfy and which they can acquire quickly.
4. **Administrative Fatigue**: Drafting formal European-style Letters of Intent (LoI) to faculty principal investigators (PIs) is intimidating and often leads students to abandon their applications.
5. **Missed Local Campus Life**: Specialized workshops, laboratory open days, and local travel grants are frequently under-publicized to international exchange candidates.

ELO addresses each of these pain points with interactive, self-service tools designed to guide students from curiosity to a confirmed placement.

---

## Design Philosophy & User Experience

ELO departs from generic corporate dashboards in favor of an inviting, tangible **"Researcher’s Laboratory Notebook & Corkboard"** aesthetic:

- **Tactile Paper Elements**: Cards styled like physical index cards, taped notes, notebook dividers, and corkboard pins provide an organic, academic feel.
- **Distraction-Free Visuals**: Clean lines, high-contrast typography, and intuitive icons guide the eye without visual clutter or gimmicky decorations.
- **Mobile-First Responsiveness**: Designed for accessibility on smartphones and low-bandwidth connections, ensuring equal usability whether a student is on a campus Wi-Fi network or mobile data.
- **Client-Side Privacy**: Student profiles, preferences, and checklist states persist locally in the browser’s LocalStorage without requiring third-party accounts or unnecessary personal data tracking.

---

## In-Depth Feature Guide & Functional Walkthrough

### 1. Guided Student Onboarding Wizard
When first opening ELO (or anytime via the "Edit Profile" button in the header), students complete a lightweight 3-step setup:

- **Step 1: Home Institution & Campus Affiliation**: Select their university, with Universidade Federal de Viçosa (UFV) highlighted as the primary Latin American hub alongside partner options.
- **Step 2: STEM Discipline**: Choose their core area of study (Robotics & Autonomous Systems, Biotechnology & Sustainable Materials, Clean Energy & Smart Grids, Post-Quantum Cryptography & Embedded Systems, Precision Agriculture, etc.).
- **Step 3: Mobility Objective**: Define their immediate goal (Full-Semester Research Fellowship, Dual Degree, Summer Laboratory Residency, or Campus Seminars & Browsing).

**Outcome**: The app configures dynamic profile filtering, personalizes search matching algorithms, and customizes recommendation cards across all sections.

---

### 2. Natural Language Opportunity Search ("Hero Agent")
At the top of the platform, the **Hero Search Bar** allows students to ask questions in plain, conversational English, such as:
- *"Robotics in Germany or France with full stipend"*
- *"Biotech laboratory without German language requirement"*
- *"Summer clean energy exchange in Scandinavia"*

**Functional Highlights**:
- **Semantic Keyword Extraction**: Identifies target countries, degree levels (BSc, MSc, PhD), funding types, and language prerequisites in real time.
- **One-Click Pre-Built Prompts**: Interactive pills for common search scenarios (e.g., *"Fully Funded Research"*, *"English Only"*, *"Summer Short-term"*).
- **Instant Result Filtering**: Dynamically refines the opportunities list below without page reloads.

---

### 3. Curated Transatlantic STEM Opportunities Catalog
The central hub presents verified academic mobility calls across the 10 EUNICE partner universities:

- **Dynamic Match Percentage (%)**: Every card computes a live alignment score comparing the student's profile (discipline, goals, and verified skills) with the call’s prerequisites.
- **Clear Funding Badges**: At-a-glance indicators for monthly living stipends (e.g., €850–€1,200/month), tuition waivers, laboratory bench fee subsidies, and Erasmus+ mobility top-ups.
- **Detailed Opportunity Dossier (Modal)**:
  - Host laboratory and institution profile.
  - Principal Investigator (PI) / Faculty mentor name and department.
  - Academic prerequisites and degree eligibility.
  - Language requirements (e.g., CEFR B2 English, no host language needed).
  - Living cost overview and host city accommodation support.
  - Real-time application deadline countdown.

---

### 4. Interactive Skill Gap Analysis & Competency Tracker
Selecting **"Analyze Skill Gap"** on any opportunity opens a dedicated audit drawer:

- **Requirement Comparison**: Juxtaposes the skills required by the European laboratory against the student’s current profile.
- **Visual Status**: Clear markers for matching competencies versus missing prerequisites (e.g., Python verified, ROS 2 required).
- **Interactive Skill Acquisition**: Students can check off skills they have completed through university coursework, self-study, or certs. Doing so **immediately recalculates the match percentage** across the platform.
- **Open Educational Recommendations**: Direct pointers to recommended open-access tutorials, documentation, and academic repositories to help bridge missing competencies before the deadline.

---

### 5. Automated Academic Letter of Intent (LoI) Generator
Drafting formal academic letters to European department heads is one of the biggest friction points for applicants. ELO’s built-in generator automates this process:

- **Academic Standard Formatting**: Structured according to European university conventions (Salutation, Academic Background, Statement of Alignment, Laboratory Fit, Mutual Benefit, Formal Closing).
- **Contextual Data Merging**: Automatically pulls the student’s university, major, and goals, combining them with the host professor's name, host laboratory focus, and fellowship title.
- **Editable & Exportable**: Students can review and fine-tune the generated text directly inside the modal, copy it to their clipboard with one click, or download a formatted `.txt` file ready for submission or professor review.

---

### 6. Campus Hub: Deep Dive into Local University Ecosystems
The **Campus Hub** provides an in-depth view into each participating campus (UFV in Brazil + all 10 European EUNICE institutions). A quick selector allows students to switch universities instantly:

#### A. Seminars & Hands-On Workshops
- Schedules of upcoming departmental colloquia, distinguished guest lectures, and practical masterclasses.
- Displays dates, host campus venues, distinguished speakers, delivery format (in-person vs. hybrid stream), and reservation status.

#### B. Campus Calls & Grants ("Bandi Locali")
- Local institutional grants, mobility travel allowances, thesis scholarships, and seed funding opportunities.
- Full details on grant amounts (e.g., €1,500 travel fund, R$ 2.400,00 stipend), eligibility, and submission deadlines.

#### C. Key Research Centers & Laboratories
- Direct directory of state-of-the-art facilities (e.g., *IHCantabria Ocean Wave Basin*, *Technobothnia Smart Grid Testbed*, *CHESC Hybrid Flight Testbed*, *LAMIH CNRS Cobotics Lab*, *Materia Nova Polymers*).
- Includes laboratory focus, lead researchers, and visiting student intake guidelines.

#### D. Student STEM Communities & Peer Networks
- Highlights official IEEE, ACM, Formula Student, and bioengineering student chapters on each campus to encourage peer-to-peer networking before arrival.

---

### 7. Workshop & Seminar Ticket Checkout System (Stripe-Delegated)
For hands-on workshops and masterclasses requiring physical lab workstations, sensor prototyping kits, or limited-seat accreditation, ELO integrates a **complete, transparent reservation and checkout flow**:

- **Prominent Price Display & Local Currencies**:
  - Automatically displays ticket prices in the host university’s local currency (e.g., **R$ 45,00** at UFV in Brazil, **€15,00–€35,00** in Italy, France, Spain, Germany, Belgium, and Finland, **PLN 65** in Poland, **SEK 250** in Sweden).
- **Pass Inclusions Breakdown**:
  - Explicit list of what the ticket provides (e.g., physical sensor kits, workstation access, ROS 2 computing cluster allocation, official academic certificates granting 1 ECTS credit, technical slides).
- **Seat Availability Counter**:
  - Shows total workshop seats and live remaining availability (e.g., *"7 seats left out of 30"*).
- **European PSD2 / Stripe Architecture Disclosure**:
  - Prominently informs students that financial transactions are securely delegated to **Stripe** under **European PSD2 Strong Customer Authentication (SCA)** and **PCI-DSS Level 1** compliance, ensuring institutional security.
- **Interactive Sandbox Checkout**:
  - Test sandbox card inputs, attendee name/email confirmation, and real-time processing simulation (Validating -> Authorized -> Complete).
- **Digital Boarding Pass & Official Receipt**:
  - Upon completion, the student receives a downloadable, printable admission voucher featuring an official ELO QR code, unique cryptographic ticket reference (e.g., `ELO-TKT-UFV-9482`), seminar details, and attendee verification.

---

### 8. Academic Grade Converter & Transatlantic Prep Hub
To demystify academic transfers and practical relocation logistics:

- **Brazilian Grade to ECTS Converter**:
  - Interactive conversion tool allowing students to enter their cumulative Brazilian GPA (0–100 or 0–10 scale).
  - Calculates the European grade equivalent (A to F scale) and explains ECTS percentile distribution bands.
- **Downloadable Practical Mobility Guides**:
  - **Schengen Student Visa Checklist**: Step-by-step guidance on consular appointments, declaration of financial support, and health insurance.
  - **Housing & Accommodation Guide**: University dorms, private rentals, and student residences near EUNICE campuses.
  - **Credit Recognition (ECTS / UFV Credits)**: How to submit learning agreements to academic advisors for home degree credit recognition.
  - **Living Costs & Survival Guide**: Monthly budgeting benchmarks for European university cities.

---

### 9. WhatsApp Mobility Digest Simulator
Recognizing that messaging groups are the primary communication channel for Latin American university communities, ELO includes an **interactive WhatsApp newsletter simulator**:

- **Realistic Mobile Interface**: Mimics a smartphone chat showing weekly curated broadcast digests from the ELO mobility coordinator.
- **Interactive Preferences Form**: Students can enter their phone number, select notification frequencies (Weekly Digest, Immediate Deadlines, or Monthly Roundup), and test delivery.
- **Direct Call Linking**: Clicking simulated digest messages highlights the relevant fellowship or workshop on the main board.

---

### 10. Pioneers in STEM Exhibition
A dedicated tribute highlighting extraordinary female and underrepresented scientists from Latin America and Europe:

- Profiles inspiring figures such as **Johanna Döbereiner** (Brazilian agricultural pioneer), **Enedina Alves Marques** (Brazil's first Black female engineer), **Rita Levi-Montalcini** (Nobel laureate in neurobiology), and **Marie Curie** (pioneer of radioactivity).
- Outlines their research milestones, transatlantic academic journeys, and practical words of encouragement for students entering international scientific research.

---

## End-to-End Student Journey

| Stage | Action | ELO Feature Used |
| :--- | :--- | :--- |
| **1. Discovery** | Student sets up major and mobility goals | **Onboarding Wizard** |
| **2. Search** | Explores transatlantic calls by prompt or discipline | **Hero Search & Opportunities Catalog** |
| **3. Evaluation** | Checks match %, eligibility, and funding stipend | **Opportunity Modal & Match Score Engine** |
| **4. Preparation** | Audits missing prerequisites & converts GPA | **Skill Gap Analysis & Grade Converter** |
| **5. Application** | Drafts a formal letter of intent for the host lab | **Automated Letter of Intent (LoI) Generator** |
| **6. Local Campus** | Explores host campus labs, grants, and workshops | **Campus Hub (Seminars, Labs, Grants)** |
| **7. Participation** | Books a limited-seat lab pass with official receipt | **Workshop Ticket Checkout System** |
| **8. Community** | Stays updated on upcoming calls via mobile alerts | **WhatsApp Digest Simulator** |

---

## Guida alle Funzionalità (Italian Summary)

Per facilitare la consultazione, ecco una sintesi delle caratteristiche chiave di **ELO**:

1. **Onboarding Studente Guidato**: Configurazione in 3 passaggi (università di provenienza come la UFV in Brasile, disciplina STEM di studio, obiettivo di mobilità).
2. **Ricerca in Linguaggio Naturale ("Hero Agent")**: Ricerca intelligente che interpreta frasi colloquiali (es. *"Robotica in Francia con borsa di studio"*) e filtra istantaneamente i risultati.
3. **Catalogo Opportunità Transatlantiche**: Elenco verificato di borse di ricerca, doppi titoli e tirocini estivi con calcolo dinamico della percentuale di affinità (% Match) e dettagli sui finanziamenti mensili.
4. **Analisi del Gap di Competenze (Skill Gap Analysis)**: Confronto interattivo tra le competenze richieste dal laboratorio europeo e quelle dello studente, con possibilità di spuntare abilità acquisite e ricalcolare il punteggio.
5. **Generatore di Lettere di Intenti (Letter of Intent)**: Creazione automatica di lettere accademiche formali personalizzate, pronte per essere modificate, copiate o scaricate in `.txt`.
6. **Campus Hub Universitario**: Esploratore completo dei campus (UFV in Brasile e le 10 università europee EUNICE) con seminari, bandi locali, centri di ricerca d'eccellenza e associazioni studentesche.
7. **Sistema di Checkout per Ticket ed Eventi**: Modale dimostrativo per l'acquisto di pass per workshop pratici con indicazione trasparente del prezzo nella valuta locale, lista dei benefit inclusi, indicazione della delegazione sicura a Stripe (PSD2/SCA) e rilascio di un pass digitale con QR code.
8. **Convertitore di Voti & Guide di Preparazione**: Conversione tra la scala di voti brasiliana (0-100/0-10) e i crediti ECTS europei, accompagnata da guide scaricabili su visti, alloggi e riconoscimento crediti.
9. **Simulatore Newsletter WhatsApp**: Esperienza interattiva che replica la ricezione di avvisi settimanali su smartphone.
10. **Pioniere della Scienza (Pioneers in STEM)**: Sezione dedicata alle grandi scienziate latinoamericane ed europee, pensata per ispirare le nuove generazioni di ricercatori.

---

## The EUNICE Alliance Network

ELO bridges Latin America with all 10 universities of the **EUNICE European University Alliance**:

1. **Universidade Federal de Viçosa (UFV)** — *Viçosa, Brazil (Latin American Anchor Campus)*
2. **Università di Catania (UNICT)** — *Catania, Italy*
3. **Poznań University of Technology (PUT)** — *Poznań, Poland*
4. **Université de Mons (UMONS)** — *Mons, Belgium*
5. **University of Vaasa (UniVaasa)** — *Vaasa, Finland*
6. **Universidad de Cantabria (UC)** — *Santander, Spain*
7. **Brandenburg University of Technology (BTU)** — *Cottbus-Senftenberg, Germany*
8. **Université Polytechnique Hauts-de-France (UPHF)** — *Valenciennes, France*
9. **University of the Peloponnese (UoP)** — *Tripoli / Patras, Greece*
10. **Instituto Politécnico de Viseu (IPV)** — *Viseu, Portugal*
11. **Karlstad University (KAU)** — *Karlstad, Sweden*

---

*Built for transatlantic STEM discovery, scientific collaboration, and student empowerment.*
