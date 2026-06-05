# Project Brief: Shree Uniya Construction

This document serves as the absolute source of truth for all design and development work on the Shree Uniya Construction homepage demo.

---

## 1. Project Identity
- **Client Name**: Shree Uniya Construction
- **Project Type**: Homepage Demo
- **Goal**: Establish a premium online presence for a new business and drive lead generation.
- **Scope**: Single-page homepage demo only (no backend, database, CMS, or authentication).

---

## 2. Visual & Aesthetic Direction
- **Style**: Ultra-premium luxury construction, cinematic, clean, and bold.
- **Color Palette**:
  - Primary Theme: Cinematic Dark Mode.
  - Backgrounds: Obsidian Black (`#0B0B0B`) and layered Charcoal Greys (`#121212`, `#1F1F1F`).
  - Typography: Titanium White (`#FFFFFF`) and architectural light greys.
  - Accent Color: Concrete Gold (`#FFC80A`), used very sparingly for CTAs, small highlights, active states, shovel icons, and key construction details.
  - Contrast Breaks: Light grey/white panels in lower parts of the homepage for breathing space.
- **Typography**: Minimal but powerful typography (geometric headings and highly readable clean body fonts).
- **Branding Assets**: No official logo available; no active social links available. Branding will use refined typography (e.g. bold serif or modern geometric sans).

---

## 3. Key Layout & Interactive Components
- **Loader**: Custom cement mixer themed loading animation with percentage progress.
- **Hero Section**: 
  - Stock-style monochrome construction video background loop.
  - Clean, one-line punchy hero headline.
  - Interactive overlay text/buttons.
  - Fallback: If video fails to load, render a dynamic, interactive SVG drafting coordinate grid/blueprint-line animation that reacts to cursor movement.
- **Storytelling**: Scroll-based, award-style storytelling showing architectural details (not too long).
- **Icons**: Custom shovel-style list icons for service details and specifications.
- **Interactive Visuals**: Lightweight 3D or interactive coordinate overlays only where helpful.
- **Popup Modal**: "Civil Construction Detail" popup to display structural specifications (concrete grading, material tolerances, reinforcement details).
- **Lead Generation**: Seamless WhatsApp lead generation link.
- **Sound Interaction**: Subtle, premium UI hover/click sounds, optional, and strictly muted by default (never autoplay).

---

## 4. Contact Details
- **WhatsApp**: `+91 97658 02900`
- **Location**: Nallasopara, Mumbai

---

## 5. Technology Stack
The project will be built using the following modern web technologies:
- **Core Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation Frameworks**:
  - Framer Motion (page transitions and interactive triggers)
  - GSAP (scroll-linked storytelling and timeline sequences)
  - Lenis (smooth scroll integration)
- **3D Renderers**:
  - React Three Fiber (R3F)
  - @react-three/drei
- **Icons**: Lucide React

---

## 6. Strict Development Rules
- **No Hallucinations**: Do not invent business details, services, history, project counts, certifications, or testimonials.
- **Missing Information**: Ask the user before making assumptions about brand details or content.
- **No Fake Claims**: Do not write copy containing fake claims like "20+ years experience", "100+ projects", or "trusted by top brands".
- **Scope Compliance**: Do not rewrite unrelated files. Keep modifications confined to the scope of this single-page demo.
