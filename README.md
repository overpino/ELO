<div align="center">
  <img width="160" alt="ELO logo" src="https://github.com/user-attachments/assets/44613111-9507-4213-ae56-75314673a049" />
</div>

---

ELO (EUNICE, Latam, Opportunities) is a frontend web application prototype built for the **EUNICE Hackathon 2026**. It functions as an academic mobility aggregator, designed to connect STEM students from the Universidade Federal de Viçosa (UFV) in Brazil with the 10 European universities of the EUNICE Alliance. 

The platform centralizes research grants, fellowships, and workshops, providing intuitive tools to navigate application requirements, bridge skill gaps, and overcome language barriers.

## Table of Contents
- [The Problem](#the-problem)
- [Core Experience & Features](#core-experience--features)
- [Technical Notes](#technical-notes)

## The Problem
Transatlantic academic mobility presents several structural hurdles for students. Information is highly fragmented, with opportunities scattered across disconnected university websites and faculty portals. Students also struggle with credit confusion when trying to map their local grading systems (like the Brazilian 0–100 scale) to the European ECTS standard. Furthermore, unclear technical prerequisites and the intimidating friction of drafting formal European Letters of Intent (LoI) in a non-native language often cause qualified applicants to abandon the process entirely.

## Core Experience & Features

**Discovery & Matching**
The student journey begins with a quick Onboarding Wizard that configures their profile and academic goals. From there, users can explore the catalog using the "Hero Agent," a simulated natural language search interface that understands conversational queries like *"Robotics in Germany without German language requirements."* Every opportunity in the feed dynamically computes a live "% Match" based on the student's profile, immediately highlighting funding stipends and deadlines.

**Skill Building & Application**
To help students qualify for competitive labs, ELO includes an Interactive Skill-Gap Analysis that compares a student's current skills against a program's specific prerequisites, linking to open-access tutorials for any missing competencies. When they are ready to apply, the Automated Letter of Intent Generator drafts a structured motivation letter by merging the student's background with the specific focus of the host laboratory.

**Campus Life & Logistics**
Beyond applications, ELO prepares students for campus life. The Campus Hub acts as a directory for each partner university, detailing local seminars, research facilities, and student communities. Students can even test a mock Stripe-delegated checkout flow to simulate reserving digital tickets for campus workshops. Finally, practical tools—including a GPA-to-ECTS converter, visa checklists, and a WhatsApp Digest Simulator—ensure students are fully prepared for the logistical realities of moving abroad.

## Technical Notes
This repository contains the frontend prototype developed specifically for the hackathon presentation. To ensure a seamless live demo without the need for backend account creation, all user profiles, preferences, and checklist states persist locally in the browser via `localStorage`. The interface is built with a mobile-first approach, reflecting how modern students primarily browse academic information on their phones.
