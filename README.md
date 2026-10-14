# ELO (EUNICE, Latam, Opportunities)

ELO is a web application built for a hackathon. It connects Latin American STEM students, starting with Universidade Federal de Viçosa (UFV) in Brazil, to academic fellowships across the 10 European universities of the EUNICE alliance.

International mobility programs often hide behind fragmented portals and bureaucratic PDFs. ELO aggregates these opportunities into a single interface styled like a researcher notebook.

## Core Features

### Natural Language Opportunity Search
Students type plain text queries such as "robotics in Europe without German" or "summer biotech stipend". The search algorithm evaluates keywords, target countries, academic prerequisites, and degree levels directly in the browser.

### Three-Step Intake Wizard
A guided setup collects the student home institution, core STEM field, and mobility target. The preferences save locally in the browser. Students can update their focus or browse campus news without rigid constraints.

### Campus Hub
Users explore partner campuses through dedicated boards. Each board displays current university seminars, open calls, active research laboratories, and contact channels for local mobility coordinators.

### Letter of Intent Generator and Skill Gap Analysis
The platform cross-references required skills against student profiles. It lists missing competencies and suggests open resources. An integrated generator creates ready-to-sign formal letters of intent tailored to the host lab and faculty mentor.

### Grade Converter and Preparation Guides
Brazilian academic grades convert directly to the European Credit Transfer and Accumulation System (ECTS). Students can also download structured preparation guides for visa requirements, housing, and credit recognition.

### WhatsApp Digest Simulation
Many Latin American universities communicate student calls through messaging apps. ELO includes an interactive digest simulator showing weekly curated notifications formatted for mobile chat groups.

### Pioneers in STEM
A rotating carousel highlights female Brazilian and European scientists. Each entry includes their research milestones, international career path, and advice for early-stage researchers.

## Technical Architecture

- Frontend: React 19, TypeScript, and Vite.
- Styling: Tailwind CSS with hand-drawn aesthetic tokens.
- Privacy and Cost: Runs entirely in the client. No server dependencies, external tracking, or paid API consumption.
