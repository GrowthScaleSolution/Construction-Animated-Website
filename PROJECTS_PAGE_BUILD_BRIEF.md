# PROJECTS PAGE BUILD BRIEF

## 1. PAGE STRUCTURE
The Project Gallery will follow a 10-section structure designed to build trust through visual storytelling and evidence of execution quality.

- **Section 1: Visual Project Gallery Hero**
  - Dark, immersive introduction emphasizing visual impact over text.
- **Section 2: Featured Project Showcase**
  - A deep-dive layout highlighting a single flagship project with primary and supporting visuals.
- **Section 3: Project Category Filter**
  - Sticky or highly accessible filter system to sort the gallery by work type.
- **Section 4: Ongoing Construction Work**
  - Image-led grid focusing on active sites and structural progress.
- **Section 5: Completed Project Gallery**
  - A premium, varied-scale gallery composition for finished structures.
- **Section 6: Before / During / After Presentation**
  - Interactive comparison component demonstrating transformation.
- **Section 7: Construction Progress Sequence**
  - Visual timeline or staged layout showing project evolution.
- **Section 8: Project Detail Modal or Drawer**
  - Rich lightbox experience for expanding individual projects without leaving the page.
- **Section 9: Execution Standards Snapshot**
  - Brief visual evidence of material quality and engineering standards.
- **Section 10: Project Enquiry CTA**
  - Deep charcoal final panel driving users to WhatsApp or a site visit.

## 2. HERO DIRECTION
- **Visuals:** One dominant, high-quality construction image filling the space.
- **Typography:** Compact headline with a tight supporting description.
- **Elements:** Technical gallery labels, project-category markers (e.g., "04 Active Sites").
- **Actions:** "Start Project Discussion" and "Request Site Visit" CTAs.
- **Constraint:** Must not use the homepage video style, About editorial layout, or Contact functional dashboard.

## 3. FEATURED PROJECT EXPERIENCE
- **Layout:** Asymmetric, premium layout—NOT a basic 50/50 image/text split.
- **Visuals:** One massive dominant visual paired with 2-3 smaller supporting detail images (e.g., close-up of structural steel).
- **Metadata:** Technical information panel, project stage label (e.g., "Stage: Foundation"), project category.
- **Action:** A "View Full Details" action triggering the modal.

## 4. PROJECT CATEGORY SYSTEM
- **Filters:** All Projects, Ongoing Work, Completed Work, Civil Construction, Structural Work, Renovation, RCC / Foundation.
- **Desktop Layout:** Elegant horizontal pill menu or sticky sidebar.
- **Mobile Layout:** Horizontally scrollable row with hidden scrollbars, or a compact collapsible dropdown to preserve vertical space.
- **States:** Clear active state (e.g., gold underline or solid fill) and empty states (e.g., "Awaiting Client Imagery").
- **Accessibility:** Keyboard navigable with `focus-visible` rings and ARIA attributes.

## 5. ONGOING WORK
- **Layout:** Image-led, dynamic grid (e.g., bento box or staggered columns). Avoid repetitive equal-size cards.
- **Content:** Raw construction progress—site preparation, structural frameworks, active labour.
- **Tags:** Clear visual markers denoting "Ongoing" status.

## 6. COMPLETED PROJECT GALLERY
- **Composition:** Premium editorial grid using a mix of landscape, portrait, and large feature images to create a varied visual scale.
- **Constraint:** Avoid overcrowded, Pinterest-style infinite masonry. Keep it curated and intentional.
- **Interaction:** Hovering reveals a subtle mask and basic metadata before clicking to open the modal.

## 7. BEFORE / DURING / AFTER
- **Component:** A clear visual comparison system.
- **Execution:** A custom image comparison slider (Before/After) or a 3-tab stage selector for horizontal sequence viewing.
- **Mobile:** Must rely on simple tap-to-switch tabs or a swipeable slider to ensure mobile friendliness without awkward scrolling traps.

## 8. PROJECT DETAIL EXPERIENCE
- **Component:** A custom modal, full-screen drawer, or sophisticated lightbox.
- **Content:** Large uncropped project image, category/stage badges, approved description text, and a direct WhatsApp enquiry CTA.
- **Controls:** Obvious close button (X), previous/next gallery navigation, and full keyboard support (Esc to close, arrows to navigate).
- **Constraint:** Must feel like an art gallery lightbox, not a SaaS data dashboard.

## 9. PROJECT DATA RULES
The client has not provided real project data yet. We must use honest, transparent placeholders.
- **Do not invent:** Names, exact locations, budgets, completion dates, sq ft, client names, technical specs, or completion claims.
- **Approved Labels:** "Temporary Project Visual", "Project Details Awaiting Client Approval", "Sample Gallery Layout", "Ongoing Site Visual", "Completed Project Placeholder".
- **Rule:** Images must never be presented as verified Shree Umiya Construction projects until provided by the client.

## 10. IMAGE REQUIREMENTS
All images must be locally stored temporary assets with stable filenames for future replacement. No external hotlinking.

**Directory:** `/public/images/projects/`

**Required Files:**
- `projects-hero-temp.webp`
- `featured-project-temp.webp`
- `featured-project-detail-01-temp.webp`
- `featured-project-detail-02-temp.webp`
- `ongoing-project-01-temp.webp`
- `ongoing-project-02-temp.webp`
- `ongoing-project-03-temp.webp`
- `completed-project-01-temp.webp`
- `completed-project-02-temp.webp`
- `completed-project-03-temp.webp`
- `completed-project-04-temp.webp`
- `before-project-temp.webp`
- `during-project-temp.webp`
- `after-project-temp.webp`
- `project-progress-01-temp.webp`
- `project-progress-02-temp.webp`
- `project-progress-03-temp.webp`
- `project-detail-temp.webp`
- `projects-cta-temp.webp`

## 11. TONAL SYSTEM
- **Palette:** Deep charcoal (obsidian) for the hero and CTA, textured graphite for technical sections, and soft concrete grey for gallery backgrounds.
- **Accents:** Restrained yellow (gold) for active filters, interactive markers, and CTAs.
- **Aesthetic:** Image-led, utilizing architectural line work.
- **Avoid:** Pure white sections, continuous black sections (too heavy), repeated dark cards, generic corporate styling, futuristic/AI imagery.

## 12. ANIMATION PERSONALITY
- **Vibe:** Visual, image-led, precise, immersive, premium, portfolio-focused.
- **Interactions:** Image-mask reveals, smooth category filter transitions (layout animations), subtle project metadata hover states, elegant modal/lightbox entrances, before/after slider tracking.
- **Constraint:** Do not copy the Homepage's cinematic scale, the About page's blueprint timeline drawing, or the Contact page's form staggers. Keep motion focused on the *images*.

## 13. MOBILE EXPERIENCE
- **Layout:** One-column gallery flow with responsive image hierarchy.
- **Filters:** Horizontally scrollable with visual cues, avoiding multi-line stacking that eats screen height.
- **Modals:** Accessible, full-screen on mobile, with tap-friendly close buttons and easy swipe/tap navigation.
- **Constraint:** No horizontal overflow bugs. Avoid tiny gallery controls that fail touch-target accessibility.

## 14. PROTECTED AREAS
The following areas must NOT be modified to accommodate the Projects page:
- `src/app/page.tsx` (Homepage)
- `src/app/about/page.tsx` (About)
- `src/app/contact/page.tsx` (Contact)
- `src/components/layout/Header.tsx`
- `src/components/layout/Footer.tsx`
- `src/components/ui/Button.tsx` (Unless purely additive without breaking existing variants)
- `src/app/globals.css` (Do not alter global typography or existing utility classes)
- `tailwind.config.ts` (Unless adding a highly specific, scoped extension)
