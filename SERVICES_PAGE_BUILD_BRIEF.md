# SERVICES PAGE BUILD BRIEF

## 1. RECOMMENDED PAGE STRUCTURE
The Services page will follow a carefully sequenced, technical, and interactive flow:

1. **Compact Services Hero**: A focused, non-cinematic introduction to the service system.
2. **Service Overview / Capability Index**: A quick high-level summary of capabilities.
3. **Civil Construction**: Primary service presentation with a focus on practical planning and execution.
4. **Structural Work and RCC**: Technical visual treatment focusing on framing, foundation, and reinforcement.
5. **Renovation and Repair**: Transformation-focused presentation for property improvement.
6. **Foundation and Site Preparation**: Site-condition context, excavation, and early execution phases.
7. **Planning and Project Execution Support**: Highlighting the process from site review to progress communication.
8. **Help Me Choose a Service**: An interactive guided selector to match client needs with services.
9. **Service Enquiry / Site Visit CTA**: Final conversion point for direct discussion.
10. **Footer**: Shared global component.

## 2. HERO DIRECTION
- **Vibe**: Technical, compact, planned for practical execution. Not a sprawling cinematic video.
- **Heading**: "CONSTRUCTION SERVICES PLANNED FOR PRACTICAL EXECUTION."
- **Content**: Short supporting paragraph outlining the capability index.
- **CTAs**: Primary (Discuss on WhatsApp), Secondary (Explore Services).
- **Visuals**: Technical construction imagery (restrained blueprint/measurement detailing or capability markers).

## 3. SERVICE SECTION DIRECTION
- **Civil Construction**: Image-led presentation showing residential/commercial relevance. Clear focus on practical planning. Discuss on WhatsApp CTA.
- **Structural Work and RCC**: Blueprint or engineering-style detailing. Focus on reinforcement, beams, columns, and formwork. No unsupported technical claims.
- **Renovation and Repair**: Before/after or transformation-inspired layout. Context of existing property improvement.
- **Foundation and Site Preparation**: Context of excavation, footings, and site-conditions. Use appropriate temporary site images.
- **Planning and Project Execution**: Detail the workflow: requirement understanding -> site review -> coordination -> execution support.
- **Help Me Choose a Service**: A clean guided selector (not a complex form) that leads to a targeted WhatsApp or site-visit action.

## 4. CLIENT’S SPECIAL EDGE-PANEL REQUIREMENT
Signature interactive element: Three premium sticky side panels.

- **Panel 1 (Civil Construction)**
  - Position: Right side, upper viewport (~20-25% from top).
  - Trigger: Civil Construction section enters viewport.
- **Panel 2 (Structural & RCC)**
  - Position: Left side, vertically centred.
  - Trigger: Structural Work and RCC section enters viewport.
- **Panel 3 (Which Service Do I Need?)**
  - Position: Right side, lower viewport (~18-22% from bottom).
  - Trigger: Renovation, Planning, and Help Me Choose sections.

## 5. EDGE-PANEL BEHAVIOUR
- **Default State**: Mostly hidden outside the viewport edge; only a small labelled tab is visible. Does not cover content.
- **Active State (Section in View)**: Slides partially into view showing label, small icon, short text. Remains partially visible.
- **Hover/Focus**: Slides slightly further inward. Clear clickable feedback.
- **Click**: Panel moves inward slightly and triggers a centred service-detail modal. Does not travel all the way into the centre.
- **Section Exit**: Retracts back to default state. Next panel activates only after the previous one retracts. Only one panel strongly active at a time.

## 6. DESKTOP PANEL PLACEMENT
- Safe spacing is paramount: Do not overlap the sticky navbar, footer, floating WhatsApp control, page CTAs, or headings.
- **Dimensions**:
  - Collapsed visible edge: 48–64px
  - Active preview width: 220–280px
- Proper z-index hierarchy must be maintained to sit above content but below modals and nav.

## 7. MODAL CONTENT PLAN
- **Civil Construction Modal**: Service intro, residential/commercial context, planning/execution approach, client info required. Primary CTA (WhatsApp), Secondary CTA (Site Visit).
- **Structural & RCC Modal**: Details on structural framing, reinforcement, foundation context, formwork. Clear disclaimer that final technical decisions require site assessment. CTA (Discuss Structural Requirement).
- **Service Selector Modal**: Options include New Civil Construction, Structural Work, RCC / Foundation, Renovation / Repair, Site Planning, Project Execution Support, Not Sure. Routes to targeted WhatsApp/site-visit action. No invented prices or guarantees.

## 8. MODAL VISUAL DIRECTION
- **Aesthetic**: Premium construction information panel. Graphite or soft concrete-grey surface.
- **Details**: Thin architectural borders, restrained yellow markers, service image or technical illustration.
- **UI**: Visible close button, clear content hierarchy, one primary and one secondary CTA.
- **Avoid**: Generic popup look, oversized full-screen desktop sizing, heavy shadows, excessive text, SaaS styling.

## 9. MOBILE EXPERIENCE
- **Strategy**: Do NOT use sticky edge panels on mobile.
- **Replacement**: Use contextual inline triggers within the related section.
- **Interaction**: Tapping opens a bottom sheet or a mobile-friendly centred modal that fits within the viewport.
- **Rules**: One trigger visible at a time, no overlap with floating WhatsApp, clear close control, accessible scrolling inside modal, account for safe-area spacing.

## 10. ANIMATION SYSTEM
- **Tools**: Framer Motion for edge-panels and modals. IntersectionObserver for scroll triggers.
- **Personality**: Mechanical, architectural, controlled, smooth, precise, premium.
- **Rules**: Use transform/opacity. No continuous React state updates on scroll. No bouncing/spring effects. Respect `prefers-reduced-motion`. Do not create a second Lenis instance.

## 11. IMAGE REQUIREMENTS
Directory: `/public/images/services/`
- `services-hero-temp.webp`
- `civil-construction-temp.webp`
- `structural-rcc-temp.webp`
- `renovation-temp.webp`
- `foundation-temp.webp`
- `planning-execution-temp.webp`
- `civil-modal-temp.webp`
- `structural-modal-temp.webp`
- `service-selector-temp.webp`
- `services-cta-temp.webp`
*Note: All images must be local. Temporary images must be marked/indicated as such and not presented as verified client projects.*

## 12. CONTENT RULES
- Use honest, professional descriptions.
- **DO NOT INVENT**: Project counts, years of experience, client names, completion numbers, technical certifications, awards, guarantees, prices, project timelines, or exact service coverage beyond confirmed info.

## 13. PROTECTED FILES
To ensure the integrity of the approved pages, the following must NOT be modified:
- `src/app/page.tsx` (Homepage)
- `src/app/about/page.tsx`
- `src/app/projects/page.tsx`
- `src/app/contact/page.tsx`
- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`
- `src/components/WhatsAppCTA.tsx`
- `src/app/layout.tsx`
- Global CSS (`src/app/globals.css`)
- Global layout files or animations.
Prefer Services-page-specific components (e.g., in `src/app/services/components/` or `src/components/services/`).
