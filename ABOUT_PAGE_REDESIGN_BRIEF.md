# ABOUT PAGE REDESIGN BRIEF

## Purpose & Personality
The About Us page must pivot away from standard landing page layouts. It should feel editorial, architectural, and story-driven. It must differentiate heavily from the locked Homepage and the functional Contact page, acting as a deep dive into the engineering philosophy of Shree Umiya Construction.

**Key Traits:**
* More editorial (overlapping elements, asymmetric balance)
* More architectural (blueprint accents, structural depth)
* Less salesy (no generic 3x2 feature grids)
* Highly grounded (local to Nallasopara/Mumbai, realistic claims)

---

## Section-by-Section Redesign Plan

### 1. Editorial About Hero
* **Layout Direction:** Move away from the standard full-bleed blurred image with left-aligned text. Use a split/asymmetric editorial layout. Large typographic statements intersecting with geometric image panels.
* **Content:** Heading: *"Built on Planning. Delivered with Responsibility."* Focus on Shree Umiya Construction, civil construction, and Nallasopara/Mumbai.
* **Visual Treatment:** Architectural framing. Include subtle measurement accents (e.g., crosshairs, ruler ticks). 
* **Animation Idea:** Slow, cinematic masking reveal of the image and a staggered line-by-line reveal of the massive typography.
* **Mobile Behavior:** Stack typography above the image cleanly without overlapping to ensure readability.

### 2. Company Story
* **Layout Direction:** An asymmetric text/image layout. Perhaps a narrow, tall image next to a wide, structured text block.
* **Content:** A grounded, professional explanation of the company. No fake years, numbers, or awards.
* **Visual Treatment:** Use a charcoal (`bg-obsidian`) background with a slightly lighter graphite panel (`bg-section-alt1`) holding the text.
* **Animation Idea:** Image scales down slightly from 1.1x to 1x on scroll while text fades in from the side.
* **Mobile Behavior:** Standard vertical stack; image first, then text block below.

### 3. How We Think Before We Build
* **Layout Direction:** A sticky-scroll or vertical timeline "inspection board" style. Break away from the horizontal step-by-step dashed line used on the Contact page.
* **Content:** Site condition -> Requirement understanding -> Planning -> Coordination -> Execution -> Final review.
* **Visual Treatment:** Think clipboard or drafting board. Use mono-spaced fonts for step numbers, subtle grid lines, and high-contrast gold accents for active states.
* **Animation Idea:** As the user scrolls down, the active step highlights while previous steps fade slightly.
* **Mobile Behavior:** Remove sticky mechanics; present as a clean, vertical list of phases.

### 4. What We Stand For
* **Layout Direction:** Avoid standard cards. Use an accordion or a full-width list that expands/reveals images on hover.
* **Content:** Practical Planning, Reliable Execution, Quality Workmanship, Clear Communication.
* **Visual Treatment:** Heavy, thick borders separating the rows. Large, bold typography.
* **Animation Idea:** Hovering over a row smoothly reveals a background image or slides an icon into view.
* **Mobile Behavior:** Keep it as a static list with no complex hover reveals.

### 5. Site Discipline / Work Standards
* **Layout Direction:** A dense, organized grid—almost like a technical specification sheet.
* **Content:** Material coordination, site clarity, progress communication, execution quality. (No fake certificates).
* **Visual Treatment:** High contrast data-style layout. Dark backgrounds with subtle gold data-points/icons.
* **Animation Idea:** Staggered, snappy fade-ups for each standard block as they enter the viewport.
* **Mobile Behavior:** 2-column or 1-column grid depending on screen width.

### 6. Local Presence
* **Layout Direction:** A grounded, geographic focus section.
* **Content:** Nallasopara, Mumbai, Maharashtra.
* **Visual Treatment:** Use a stylized map texture or a local silhouette, very dark and subtle.
* **Animation Idea:** Gentle pulse on a location marker.
* **Mobile Behavior:** Clean text block over the textured background.

### 7. Final CTA
* **Layout Direction:** Simple, conversion-focused block (matching the established pattern).
* **Content:** Simple project discussion / site visit CTA. 
* **Visual Treatment:** Image background with dark overlay and gold accent line. Do not overuse WhatsApp buttons (keep to one primary, one secondary).
* **Animation Idea:** Expanding gold line on scroll; standard button hover states.
* **Mobile Behavior:** Stack buttons vertically.

---

## Technical Directives

### Safe to Edit (Allowed Files)
* `src/app/about/page.tsx`
* Any new components created exclusively for the About page (e.g., `src/components/about/...`).

### Do NOT Touch (Locked Files)
* `src/app/page.tsx`
* `src/app/layout.tsx`
* `src/components/Navbar.tsx`
* `src/components/Footer.tsx`
* `src/components/WhatsAppCTA.tsx`
* `src/app/globals.css`
* Any component listed in `HOMEPAGE_LOCK.md`.

### How to Avoid Affecting the Homepage
1. **No Global CSS Changes:** Do not alter `globals.css` or the Tailwind config. Use inline Tailwind utility classes.
2. **Component Isolation:** If a section requires a complex layout (like the Inspection Board), build it directly inside `about/page.tsx` or as a dedicated `AboutInspectionBoard.tsx` component. Do not modify existing homepage components (like `Process.tsx` or `Services.tsx`) to fit the About page.
3. **No Layout Wrappers:** Do not change how the main `<main>` wrapper behaves globally. Control spacing at the section level within the About route.
