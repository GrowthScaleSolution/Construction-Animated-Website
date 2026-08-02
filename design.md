# Shree Uniya Construction — Design System

> **Source of Truth**: This document is the authoritative design reference for the Shree Uniya Construction website. It was audited directly from the approved homepage implementation. All new pages **must** follow these exact patterns.
>
> **Rule**: Do not redesign. Do not invent new patterns. Match the homepage.

---

## 1. Brand Direction

### Website Style
- Ultra-premium dark-mode construction website
- Cinematic, architectural, and technical — not generic corporate
- Inspired by luxury real estate portfolios and high-end engineering firms

### Overall Mood
- Dark, confident, and precise
- Feels like walking into a premium construction firm's private showroom
- Technical sophistication paired with visual restraint

### Construction Industry Feel
- Uses real engineering terminology (RCC, M25 Concrete, Fe500D, IS:1893)
- Blueprint/drafting visual motifs (corner marks, grid overlays, crosshairs)
- Construction gold accent evokes hard-hat culture and premium finishes

### Premium / Luxury Direction
- Deep blacks and charcoals create depth, not depression
- Gold is used sparingly — only for accent touches, never as a background fill
- Subtle texture overlays (concrete fabric noise) add tactile quality
- Corner drafting marks on cards reference architectural precision

### What Visitors Should Feel
- "This company takes their work seriously"
- "This feels expensive and well-made"
- "I trust these people to build my structure"

---

## 2. Color System

### Color Tokens (defined in `globals.css` `@theme` block)

| Token                  | Hex / Value                    | Usage                                     |
|------------------------|-------------------------------|-------------------------------------------|
| `obsidian`             | `#070707`                     | Primary page background, footer, modals   |
| `charcoal-dark`        | `#151515`                     | Hero section background                   |
| `charcoal-light`       | `#1E1E1E`                     | Unused reserve                            |
| `concrete-dark`        | `#242424`                     | Available for deep card variants          |
| `concrete-medium`      | `#2D2D2D`                     | Available for mid-tone surfaces           |
| `concrete-light`       | `#E8E5DE`                     | Light text / contrast panels (if needed)  |
| `concrete-sand`        | `#D8D5CD`                     | Light text / contrast panels (if needed)  |
| `gold`                 | `#FFC80A`                     | **Primary accent** — CTAs, tags, icons    |
| `arch-grey`            | `#A3A3A3`                     | Secondary body text, footer links         |
| `border-dark`          | `rgba(255, 255, 255, 0.08)`   | Default subtle borders                    |
| `section-alt1`         | `#111111`                     | Section background (About, Process)       |
| `section-alt2`         | `#151515`                     | Section background (Services, Showcase)   |
| `section-alt3`         | `#1A1A1A`                     | Section background (WhyChooseUs)          |
| `card-surf`            | `#181818`                     | Card surface background                   |
| `card-surf-light`      | `#202020`                     | Card hover / image container background   |

### Text Colors

| Context               | Class / Value                  |
|------------------------|-------------------------------|
| Primary headings       | `text-white` (`#FFFFFF`)       |
| Body text              | `text-zinc-300`               |
| Highlighted body text  | `text-zinc-200`, `text-zinc-100` |
| Muted / secondary text | `text-arch-grey` (`#A3A3A3`)  |
| Tags / labels          | `text-gold` (`#FFC80A`)       |
| Data values            | `text-white font-medium`      |
| Disabled / ghost text  | `text-white/40`, `text-white/50` |
| Technical specs        | `text-zinc-400`               |

### Border Colors

| Context               | Class                          |
|------------------------|-------------------------------|
| Section dividers       | `border-white/5`              |
| Card borders           | `border-white/5` or `border-white/10` |
| Input / form borders   | `border-white/10`             |
| Hero QA card borders   | `border-white/15`             |
| Hover state borders    | `border-gold/30`, `border-gold/40`, `border-gold/50` |
| Footer top accent line | Gold gradient via `bg-gradient-to-r from-transparent via-gold/45 to-transparent` |

### Hover Colors
- Text: `hover:text-gold`, `hover:text-white`
- Borders: `hover:border-gold/30`, `hover:border-gold/50`
- Backgrounds: `hover:bg-gold/10`, `hover:bg-card-surf-light`
- Card lift: `hover:-translate-y-1.5`

### Do and Don't Rules

**DO:**
- Use `gold` only for small accents: tags, icon colors, border hovers, CTA buttons, active states
- Use `obsidian` or `section-alt*` colors for backgrounds
- Keep text white or zinc-300 for readability
- Use `border-white/5` to `border-white/15` for subtle separation

**DON'T:**
- Never use gold as a large background fill
- Never use bright saturated colors (red, blue, green, orange)
- Never use pure white backgrounds for sections
- Never use random greys — use only the defined tokens
- Never use colored text for body copy (no blue links, no green success text)

---

## 3. Typography System

### Font Families

| Role       | Font            | CSS Variable              | Tailwind Class  |
|------------|-----------------|---------------------------|-----------------|
| Display    | Space Grotesk   | `--font-space-grotesk`    | `font-display`  |
| Body       | Outfit          | `--font-outfit`           | `font-sans`     |
| Monospace  | System mono     | (browser default)         | `font-mono`     |

**Weights loaded**: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)

### Heading Styles

| Level | Desktop Size | Mobile Size | Weight | Tracking | Line Height | Case |
|-------|-------------|-------------|--------|----------|-------------|------|
| H1    | `clamp(1.8rem, 6vw, 4.5rem)` | Same (fluid) | `extrabold` (800) | `tracking-tighter` | `leading-[1.02]` | `uppercase` |
| H2    | `text-4xl lg:text-5xl` | `text-3xl` | `bold` (700) | `tracking-tight` | `leading-[1.05]` | `uppercase` |
| H3    | `text-2xl` | `text-xl` | `bold` (700) | `tracking-tight` | `leading-snug` | `uppercase` |
| H4    | `text-sm` | `text-xs` | `semibold` (600) | `tracking-[0.2em]` | default | `uppercase` |

All headings use `font-display` (Space Grotesk).

### Section Tag Style
- Size: `text-[10px]`
- Weight: `font-semibold`
- Tracking: `tracking-[0.35em]`
- Color: `text-gold`
- Case: `uppercase`
- Decoration: Small diamond marker (`◇`) before text
- Font: `font-display`

### Body Text Styles

| Context            | Desktop          | Mobile        | Weight     | Line Height     |
|--------------------|------------------|---------------|------------|-----------------|
| Primary body       | `text-base`      | `text-xs`     | `font-light` (300) | `leading-relaxed` |
| Secondary body     | `text-sm`        | `text-xs`     | `font-light` (300) | `leading-relaxed` |
| Card description   | `text-sm`        | `text-xs`     | `font-light` (300) | `leading-relaxed` |
| Highlighted intro  | `text-lg`        | `text-sm`     | `font-medium` (500) | `leading-snug` |
| Technical data     | `text-[10px]`    | `text-[9px]`  | `font-mono` | default |

### Button Text Style
- Size: `text-xs` or `text-[10px]`
- Weight: `font-semibold` (600)
- Tracking: `tracking-[0.2em]`
- Case: `uppercase`
- Font: `font-sans` (Outfit)

### Font Weight Rules
- **Headings**: Bold (700) or Extrabold (800) — never light
- **Body text**: Light (300) — never bold
- **Labels / tags**: Semibold (600) — always uppercase
- **Data values**: Medium (500) — inline with labels
- **Buttons**: Semibold (600) — always uppercase

---

## 4. Layout and Spacing Rules

### Section Padding
- Vertical: `py-16 md:py-24` (64px mobile, 96px desktop)
- Hero section: Uses `pt-20 pb-8 md:pt-32 md:pb-12` (custom hero rhythm)

### Container Width
- Max width: `max-w-7xl` (1280px)
- Centered: `mx-auto`
- Horizontal padding: `px-4 xs:px-6 md:px-12`

### Grid Patterns
- **2-column**: `grid grid-cols-1 lg:grid-cols-12` with `lg:col-span-6` + `lg:col-span-6`
- **3-column cards**: `grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8`
- **4-column metrics**: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6`
- **Footer**: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8`
- **Featured layout**: `lg:grid-cols-12` with `lg:col-span-7` (image) + `lg:col-span-5` (cards)

### Card Spacing
- Internal padding: `p-5` (compact) or `p-6 md:p-8` (standard)
- Image container padding: `p-2` (outer frame), `p-1` (inner container)
- Gap between card items: `gap-4` or `gap-5`

### Section Inner Gaps
- Between header and content: `gap-12 md:gap-16`
- Between grid items: `gap-5 md:gap-6` or `gap-6 md:gap-8`

### Section Separators
- Top border on every section: `border-t border-white/5`

### Rules to Avoid Clutter
- Maximum 3-4 cards per row on desktop
- Single column stack on mobile for all cards
- Hide secondary information on mobile (use `hidden sm:inline` or `hidden md:flex`)
- Use generous vertical whitespace between sections
- Never stack more than 2 CTAs side by side (stack vertically on mobile)

---

## 5. Header Style

### Sticky Behavior
- Position: `fixed top-0 left-0 w-full z-50`
- Scroll detection: Background transitions from transparent to `bg-obsidian/90 backdrop-blur-md`
- Scroll threshold: `window.scrollY > 20`

### Padding
- Default: `py-4 sm:py-6`
- Scrolled: `py-2.5 sm:py-4`
- Bottom border: `border-transparent` → `border-white/5` on scroll

### Logo / Brand
- Positioned left with `flex justify-between items-center`
- Uses `<Logo />` component — typographic wordmark "SHREE UNIYA" with gold brackets
- Logo text: `text-[15px] xs:text-lg sm:text-xl md:text-2xl font-bold tracking-[0.18em]`
- Subtitle: "CONSTRUCTION" in gold, `text-[7.5px] sm:text-[9px]`

### Desktop Navigation
- Visible on `lg:flex`, hidden on smaller
- Style: `text-[11px] uppercase tracking-[0.25em] font-medium text-arch-grey/80`
- Hover: `hover:text-gold` with sliding gold underline
- Links: About, Services, Blueprints, Process, Contact

### Mobile Controls
- Visible on `lg:hidden`
- Contains: Sound toggle icon + Hamburger menu icon
- Gap: `gap-2 sm:gap-4`

### Mobile Menu Drawer
- Slides down from header with `AnimatePresence` + height animation
- Background: `bg-obsidian/95 backdrop-blur-xl`
- Border: `border-b border-white/10`
- Link style: `text-[11px] tracking-widest uppercase text-arch-grey hover:text-gold`
- Contains full-width gold WhatsApp CTA at bottom

### Transition
- `transition-all duration-300` on the nav element
- Smooth `cubic-bezier(0.16, 1, 0.3, 1)` ease on mobile drawer

---

## 6. Footer Style

### Layout
- Background: `bg-obsidian`
- Padding: `py-12 md:py-20`
- Top decoration: Gold gradient sweep line (`bg-gradient-to-r from-transparent via-gold/45 to-transparent`)
- Uses `concrete-texture` class

### Grid
- `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8`
- Column 1: Logo + description + social icons
- Column 2: Quick Links
- Column 3: Civil Services links
- Column 4: Contact details + CTA

### Column Headings
- `font-display font-semibold text-white text-sm tracking-wide`

### Link Style
- Color: `text-arch-grey hover:text-white`
- Underline: Sliding gold underline on hover via `after:` pseudo-element
- Pattern: `after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-gold after:transition-all after:duration-300`

### Social Icons
- Size: `w-8 h-8` rounded circles
- Border: `border-white/10 hover:border-gold/50`
- Icon size: `w-3.5 h-3.5`
- Hover: `hover:text-gold hover:bg-gold/10`
- Coming soon items: `border-white/5 text-white/20 cursor-not-allowed`

### Contact Details
- Location displayed as static white text
- Phone linked to WhatsApp
- Includes "Request Site Visit" outline CTA button

### Back to Top
- Bottom right of footer
- Text: "BACK TO TOP" in `text-[10px] font-mono tracking-widest uppercase`
- Circle icon: `w-8 h-8 rounded-full border border-white/20`
- Hover: Gold underline on text + icon border turns gold, chevron lifts `-translate-y-1`
- Action: `window.scrollTo({ top: 0, behavior: 'smooth' })`

### Bottom Bar
- `border-t border-white/10 pt-8`
- Copyright: `text-[10px] font-mono text-white/40`

---

## 7. Button and CTA System

### Button Component (`Button.tsx`)
All buttons share these base styles:
```
min-h-[44px] px-6 py-3.5 font-sans text-xs tracking-[0.2em] uppercase
transition-all duration-300 font-semibold border cursor-pointer
flex items-center justify-center gap-2
```

### Variants

| Variant     | Background           | Text              | Border             | Hover Effect                              |
|-------------|---------------------|--------------------|--------------------|--------------------------------------------|
| `primary`   | `bg-white`          | `text-obsidian`    | `border-white`     | Gold slide-up overlay                     |
| `secondary` | `bg-transparent`    | `text-white`       | `border-white/20`  | `hover:border-gold hover:text-gold`       |
| `accent`    | `bg-gold`           | `text-obsidian`    | `border-gold`      | White slide-up overlay                    |
| `outline`   | `bg-transparent`    | `text-white`       | `border-white`     | White slide-up overlay, text turns dark   |

### Hover Slide Effect
- All `primary`, `accent`, and `outline` variants have a `translate-y-[101%] → translate-y-0` slide-up color overlay on hover
- Framer Motion: `whileHover={{ scale: 1.015 }}`, `whileTap={{ scale: 0.985 }}`

### Mobile CTA Rules
- Full width: `w-full`
- Stacked vertically: `flex flex-col gap-3`
- Minimum touch target: `min-h-[44px]`
- Primary action first (accent/gold), secondary below

### CTA Wording Style
- Action-oriented, professional: "Connect on WhatsApp", "Review Specifications", "Request Site Visit"
- Service-specific: "Inquire RCC Framing", "Inquire Foundation Prep"
- Never generic: avoid "Learn More", "Click Here", "Submit"

### WhatsApp Floating CTA
- Fixed position: `fixed right-4 sm:right-6 z-40`
- Bottom: `calc(1.5rem + env(safe-area-inset-bottom, 0px))`
- Size: `w-12 h-12 sm:w-14 sm:h-14`
- Style: `bg-gold text-obsidian rounded-full`
- Ping animation ring: `animate-ping` border
- Tooltip on desktop hover: dark card with "Contact Civil Team"

---

## 8. Card and Section Components

### Card Component (`Card.tsx`)
Base styles:
```
bg-card-surf border border-white/5 p-6 md:p-8
transition-all duration-500 overflow-hidden
```

**Corner Marks** (structural drafting motif):
- Four corner decorations using `border-t border-l`, `border-t border-r`, etc.
- Size: `w-2.5 h-2.5`
- Default: `border-white/10`
- Hover: `group-hover:border-gold/50`

**Hover Effect** (when `hoverEffect={true}`):
```
hover:border-gold/30 hover:bg-card-surf-light
hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/70
```

### Service Cards
- Image container: `h-48 md:h-56` with `p-2` outer frame + `p-1` inner
- Image hover: `group-hover:scale-103 transition-transform duration-1000 ease-out`
- Card body: `p-4 md:p-6`
- CTA at bottom separated by: `border-t border-white/5 mt-auto pt-5`
- Full-width secondary button

### Project / Showcase Cards
- Compact padding: `!p-5`
- Status badge: `text-[9px] font-mono text-zinc-400 uppercase`
- Gold tag: `font-mono text-[9px] text-gold uppercase tracking-[0.2em]`
- Location with MapPin icon

### Contact Information Cards
- Icon left + text right layout: `flex items-start gap-4`
- Icon: `w-5 h-5 text-white/30 group-hover:text-gold`
- Tag label: `font-mono text-[9px] text-gold uppercase tracking-widest`
- Description: `text-xs text-arch-grey leading-relaxed`

### Quality / Trust Cards (Hero QA Card)
- Glass effect: `bg-obsidian/85 backdrop-blur-xl`
- Gold corner marks: `border-gold/40 group-hover:border-gold`
- Data rows: Key-value pairs with `flex justify-between`

### Popup / Modal Style (LeadPopup)
- Backdrop: `bg-obsidian/80 backdrop-blur-md`
- Modal: `bg-obsidian` with `border-t-[3px] border-gold` top accent
- Corner radius: `rounded-sm`
- Shadow: `shadow-2xl shadow-black/90`
- Entry animation: `scale: 0.95 → 1, y: 20 → 0`
- Close button: Top right, `text-zinc-400 hover:text-white`

### Border Radius
- **Standard**: `rounded-sm` (small radius, 2px) — used on all cards, buttons, images
- **Never**: Do not use `rounded-lg`, `rounded-xl`, or `rounded-full` on cards/sections
- **Exception**: Social icons and floating WhatsApp CTA use `rounded-full`

### Shadow System
- Card shadows: `shadow-lg` (standard), `shadow-2xl shadow-black/85` (featured images)
- Hover shadows: `hover:shadow-2xl hover:shadow-black/70`

### Image Treatment in Cards
- Always wrapped in a container with `p-2` padding and `bg-card-surf border border-white/10`
- Inner container: `overflow-hidden rounded-sm`
- Image: `object-cover` with `group-hover:scale-103 transition-transform duration-1000`
- Uses Next.js `<Image>` component with `fill` and responsive `sizes`

---

## 9. Image and Video Treatment

### Hero Video
- Full-screen background: `absolute inset-0 w-full h-full object-cover`
- Attributes: `autoPlay`, `muted`, `loop`, `playsInline`, `preload="auto"`, `controls={false}`
- Three-layer fallback system:
  1. Dark gradient (`from-[#121212] via-[#090909] to-[#070707]`)
  2. Poster image (`/images/hero-video-poster.png`)
  3. Video element (fades in when loaded)
- Cross-fade: `transition-opacity duration-1000`

### Hero Overlays (in order)
1. Base overlay: `bg-black/45`
2. Left-to-right gradient: `from-black/75 via-black/50 to-black/20` (darker left for text)
3. Bottom-up gradient: `from-black/70 via-transparent to-black/35`
4. Edge vignette: `radial-gradient(circle at center, transparent 50%, rgba(0,0,0,0.5) 100%)`
5. Cursor-reactive gold glow (desktop only): `radial-gradient(circle 600px at ...)`

### Image Overlay Rules
- Contact site visit image: `bg-gradient-to-tr from-black/65 via-black/25 to-transparent`
- Over-image text box: `bg-obsidian/85 border border-white/15 backdrop-blur-md`
- Featured image badge: `bg-obsidian/90 border border-white/10 backdrop-blur-sm`

### Image Aspect Ratios
- About section: `h-[220px] xs:h-[280px] sm:h-[350px] md:h-[400px]`
- Service cards: `h-48 md:h-56`
- Showcase featured: `min-h-[260px] xs:min-h-[320px] md:min-h-[400px] lg:min-h-[580px]`
- Contact site visit: `h-[360px] xs:h-[320px] sm:h-[350px] lg:h-[380px]`
- Map: `h-[250px] lg:h-[300px]`

### Image Sources
All images are in `/public/images/`:
- `about-construction-site.jpeg`
- `service-civil-construction.jpeg`
- `service-structural-work.jpeg`
- `service-renovation.jpeg`
- `project-site-work.jpeg`
- `contact-site-visit.jpeg`
- `hero-video-poster.png`

### Rules
- Keep images bright enough to be visible through overlays
- Never hide images under fully opaque black overlays
- All images use `object-cover` — never `object-contain`
- On mobile, maintain readable aspect ratios (never let images shrink below `h-[220px]`)

---

## 10. Animation and Interaction Rules

### Scroll Reveal Animation
- Library: Framer Motion `whileInView`
- Standard pattern:
  ```tsx
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
  ```
- All animations fire `once: true` — never repeat
- Viewport margin: `"-50px"` to `"-100px"` (triggers slightly before fully visible)

### Stagger Animation
- Parent wrapper uses `variants` with `staggerChildren: 0.15` to `0.25`
- Each child animates with its own `variants` containing opacity + y transform
- Used for: service cards, metric cards, process steps, footer columns

### Standard Easing
- **Primary ease**: `[0.16, 1, 0.3, 1]` (Framer Motion cubic bezier — fast start, smooth settle)
- **Exit ease**: `[0.76, 0, 0.24, 1]` (used for preloader exit)
- Duration range: `0.4s` to `0.9s` (never slower than 1.2s)

### Hover Interactions
- Card lift: `hover:-translate-y-1.5 transition-all duration-500`
- Image zoom: `group-hover:scale-103 transition-transform duration-1000 ease-out`
- Color transitions: `transition-colors duration-300` to `duration-500`
- Button scale: `whileHover={{ scale: 1.015 }}`, `whileTap={{ scale: 0.985 }}`
- Link underline: Sliding `after:` pseudo-element `after:w-0 hover:after:w-full after:bg-gold`
- Icon color: `text-white/30 group-hover:text-gold`

### Hero-Specific Interactions (Desktop Only)
- Cursor-reactive gold radial glow overlay (via direct DOM manipulation, no React state)
- 3D card perspective tilt: `perspective(1000px) rotateX() rotateY()` (via refs)
- QA card parallax translate (via refs)
- Scroll cue: Mouse icon animation at bottom with `animate={{ y: [0, 6, 0], opacity: [1, 0, 1] }}`

### Smooth Scroll
- Library: Lenis (desktop only, disabled on touch devices)
- Duration: `1.0`
- Easing: `(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))`
- Wheel multiplier: `0.95`
- Touch devices: Native scroll (no Lenis)

### Reduced Motion Support
- All components check `useReducedMotion()` from Framer Motion
- When reduced motion is preferred, `y` transforms are set to `0` (fade only)

### Performance Rules
- **No React state on scroll** — use refs and direct DOM mutation
- **No `backdrop-blur` on scrolling elements** — only on fixed/modal elements
- **No scroll-linked video transforms** — video stays static
- **Cancel animation frames on unmount** — always clean up `requestAnimationFrame`
- **Intersection Observer for visibility** — never `scroll` event listeners for show/hide
- **Single global texture overlay** — `position: fixed` on `body::before`, not per-section

### Don'ts
- Never animate on every scroll frame with React state
- Never use heavy CSS filters on scrollable content
- Never create parallax effects that cause layout thrashing
- Never animate more than 3 properties simultaneously
- Never use animation duration > 1.2s for scroll reveals

---

## 11. Sound Interaction Rules

### Core Principle
Sound is **optional**, **user-controlled**, and **muted by default**.

### Toggle Behavior
- Sound starts **muted** (`isMuted = true`)
- Sound toggle is visible in the header (both desktop and mobile)
- State persisted via `localStorage` key `suc_sound_muted`
- When unmuted: audio files are preloaded and prewarmed

### Sound Events
| Event              | Sound File              | Volume  |
|--------------------|------------------------|---------|
| Button click       | `/sounds/ui-click.mp3` | 0.35    |
| CTA confirm        | `/sounds/cta-confirm.mp3` | 0.50 |
| Popup open         | `/sounds/popup-open.mp3`  | 0.40 |
| Preloader          | `/sounds/mixer-hum.mp3`   | 0.25 |

### Rules
- **No autoplay sound** — ever
- **No scroll-triggered sound** — ever
- **No background music or loops** — ever (preloader mixer hum stops when loading finishes)
- **No section-change sound** — ever
- Sound only plays after user explicitly enables it
- All `play()` calls use promise-safe handling with silent error catching
- Audio elements are reused (not recreated) for performance

---

## 12. Mobile Design Rules

### Breakpoints Used
- `xs`: ~400px (custom — used for minor spacing adjustments)
- `sm`: 640px (Tailwind default)
- `md`: 768px (Tailwind default)
- `lg`: 1024px (Tailwind default)
- `xl`: 1280px (Tailwind default)

### Mobile Hero
- Top padding: `pt-20` (reduced from desktop `pt-32`)
- Bottom highlights row: **hidden** on mobile (`hidden md:flex`)
- Body text: Second sentence hidden on mobile (`hidden sm:inline`)
- CTA buttons: Stacked vertically, full-width, placed directly below paragraph
- QA card: Reduced padding (`p-3.5 xs:p-4`), smaller text sizes

### Mobile Header
- Compact padding: `py-2.5 sm:py-4` when scrolled
- Sound toggle + hamburger menu visible
- Desktop nav hidden on mobile (`hidden lg:flex`)

### Mobile Card Stacking
- All grid layouts collapse to `grid-cols-1` on mobile
- Cards stack vertically with `gap-5` or `gap-6`
- CTA buttons go full-width: `w-full`

### Mobile CTA Rules
- Minimum touch target: `min-h-[44px]`
- Full-width stacking: `flex flex-col gap-3 w-full`
- Primary CTA (accent/gold) always on top
- Never place more than 2 CTAs side by side on mobile

### Mobile Text Sizes
- H1: Fluid clamp handles sizing automatically
- Body: `text-xs` base, scaling up with `sm:text-sm md:text-base`
- Tags/labels: `text-[8.5px] xs:text-[10px]`
- Button text: `text-xs` or `text-[10px]`
- Technical specs: `text-[9px]`

### Avoiding Clutter
- Hide decorative background typography on mobile (`hidden lg:block`)
- Hide secondary information that duplicates content
- Use `hidden sm:inline` or `hidden md:flex` to progressively reveal content
- Keep generous vertical spacing between sections
- Disable Lenis smooth scroll on touch devices (native scroll)
- Disable cursor-reactive effects on touch devices

---

## 13. Page Template Rules

### Standard Page Structure
Every new page must follow this skeleton:

```
1. <Navbar />           — Sticky header (shared)
2. Page Hero Section    — Full-width, dark background, headline + optional image/video
3. Main Content         — 2-4 content sections with alternating bg colors
4. Trust / CTA Section  — Social proof or call-to-action block
5. <ContactSection />   — Or a simplified contact CTA
6. <Footer />           — Shared footer component
7. <WhatsAppCTA />      — Floating button (shared)
```

### Section Background Alternation Pattern
Alternate between these backgrounds to create visual depth:
```
obsidian → section-alt1 → section-alt2 → section-alt3 → obsidian
```
Each section separated by `border-t border-white/5`.

### Page Hero Pattern (for inner pages)
- Shorter than homepage hero (no video needed)
- Background: `bg-charcoal-dark` or `bg-obsidian` with subtle gradient
- Content: Section tag + H1 heading + short description
- Padding: `py-24 md:py-32`
- Optional: breadcrumb navigation

### New Pages to Build

| Page                  | Key Content                                    |
|-----------------------|------------------------------------------------|
| About Us              | Company story, values, team approach           |
| Services              | Expanded service details with images           |
| Project Gallery       | Photo grid of active/completed projects        |
| Contact / Site Visit  | Contact form, map, WhatsApp integration        |

---

## 14. Content Style Rules

### Tone of Voice
- Professional, confident, and technical
- Speaks like an experienced engineer, not a marketing agency
- Trust-building through specificity and precision
- Never hyperbolic or salesy

### Safe Wording to Use
- "Quality-focused structural execution"
- "Reliable execution and site coordination"
- "Practical planning and construction support"
- "Civil construction services in Nallasopara, Mumbai"
- "Local presence and direct site management"
- "Code-compliant construction parameters"
- "Certified concrete and reinforcement materials"

### Absolute Don'ts
- ❌ No fake years of experience ("20+ years")
- ❌ No fake project counts ("500+ projects completed")
- ❌ No fake awards ("Award-winning construction")
- ❌ No fake testimonials or client quotes
- ❌ No fake certifications or ISO claims
- ❌ No fake team sizes or employee counts
- ❌ No superlatives without basis ("Mumbai's #1 builder")
- ❌ No stock phrases ("Your trusted partner since...")

### Technical Language
Use real construction terminology where appropriate:
- RCC (Reinforced Cement Concrete)
- M25, M30 concrete grades
- Fe500D reinforcement steel
- IS:1893 seismic standards
- Plumb deviation tolerances
- Geotechnical plate load tests
- AAC (Autoclaved Aerated Concrete) blocks

---

## 15. Reusable Components

### Shared Layout Components
| Component          | File                           | Usage                                      |
|--------------------|-------------------------------|---------------------------------------------|
| `Navbar`           | `src/components/Navbar.tsx`    | Sticky header on every page                 |
| `Footer`           | `src/components/Footer.tsx`    | Page footer on every page                   |
| `WhatsAppCTA`      | `src/components/WhatsAppCTA.tsx` | Floating WhatsApp button on every page    |
| `Preloader`        | `src/components/Preloader.tsx` | Loading animation (homepage only)           |
| `LeadPopup`        | `src/components/LeadPopup.tsx` | Lead generation popup (homepage only)       |

### UI Primitives
| Component    | File                              | Usage                                        |
|--------------|----------------------------------|-----------------------------------------------|
| `Button`     | `src/components/ui/Button.tsx`    | All CTA buttons (4 variants)                 |
| `Card`       | `src/components/ui/Card.tsx`      | All card containers with corner marks        |
| `Heading`    | `src/components/ui/Heading.tsx`   | All section headings (4 levels + section tag)|
| `Logo`       | `src/components/ui/Logo.tsx`      | Brand wordmark with gold brackets            |
| `ShovelIcon` | `src/components/ui/ShovelIcon.tsx`| Custom list bullet icon                      |

### Section Components (Reusable Patterns)
| Component            | File                                     | Reuse For                          |
|----------------------|-----------------------------------------|-------------------------------------|
| `ContactSection`     | `src/components/ContactSection.tsx`      | Contact pages                      |
| `Services`           | `src/components/Services.tsx`            | Service listing pattern            |
| `Showcase`           | `src/components/Showcase.tsx`            | Project gallery pattern            |
| `WhyChooseUs`        | `src/components/WhyChooseUs.tsx`         | Trust metrics / benchmarks         |
| `Process`            | `src/components/Process.tsx`             | Timeline / step-by-step content    |
| `CivilModal`         | `src/components/CivilModal.tsx`          | Detail modal / specification popup |

### Utility Libraries
| File                  | Purpose                                           |
|-----------------------|---------------------------------------------------|
| `src/lib/utils.ts`    | `cn()` class name merger                          |
| `src/lib/sound.ts`    | Audio playback system (click, CTA, popup sounds)  |
| `src/lib/whatsapp.ts` | WhatsApp link generator + predefined messages     |

---

## 16. Developer Rules

### Visual Consistency
1. **New pages must match the homepage visual language exactly.** The homepage is the approved reference.
2. **Do not introduce a new theme, color palette, or typography system.**
3. **Do not use colors outside the defined token system** in Section 2.
4. **Do not create new font combinations.** Use Space Grotesk for display and Outfit for body.
5. **Do not use `rounded-lg` or `rounded-xl`** on cards or sections. Use `rounded-sm` only.

### Component Reuse
6. **Always use `<Heading>` for section titles** — never raw `<h1>`–`<h4>` tags.
7. **Always use `<Button>` for CTAs** — never custom styled buttons.
8. **Always use `<Card>` for card containers** — it includes corner marks automatically.
9. **Always use `<Logo>` for brand display** — never recreate the wordmark.
10. **Reuse the `Navbar`, `Footer`, and `WhatsAppCTA`** on every page without modification.

### Animation Discipline
11. **Do not add new animation libraries.** Use Framer Motion only.
12. **Do not create animations longer than 1.2 seconds.**
13. **Do not animate on every scroll frame with React state.** Use refs for direct DOM updates.
14. **Do not add parallax effects** unless using refs and `requestAnimationFrame`.
15. **Always set `viewport={{ once: true }}`** on scroll-triggered animations.
16. **Always check `useReducedMotion()`** and disable transforms when the user prefers reduced motion.

### Mobile First
17. **Design mobile layout first, then enhance for desktop.**
18. **All CTA buttons must have `min-h-[44px]`** for touch accessibility.
19. **Never place more than 2 CTAs side-by-side on mobile.** Stack them vertically.
20. **Hide decorative elements on mobile** using `hidden lg:block` or `hidden md:flex`.

### Performance
21. **Do not use `backdrop-blur` on scrollable elements.** Only on fixed/modal overlays.
22. **Do not add per-section SVG texture overlays.** Use the global `body::before` texture only.
23. **Use Next.js `<Image>` for all images** with proper `sizes` and `fill` attributes.
24. **Lazy load all non-hero images.** Only hero and above-fold images get `priority`.

### Content Integrity
25. **Do not invent business details.** Ask the user if information is missing.
26. **Do not write fake testimonials, project counts, or certifications.**
27. **Follow the content wording guidelines** in Section 14 strictly.

---

## Appendix: Quick Reference Card

### Key Colors
```
Background:  #070707 (obsidian)
Sections:    #111111, #151515, #1A1A1A
Cards:       #181818, #202020
Gold:        #FFC80A
Text:        #FFFFFF, zinc-300, #A3A3A3
Borders:     white/5, white/10, white/15
```

### Key Fonts
```
Display:  Space Grotesk (font-display) — headings, card titles
Body:     Outfit (font-sans) — paragraphs, buttons, labels
Mono:     System monospace (font-mono) — specs, data, technical labels
```

### Key Spacing
```
Section padding:    py-16 md:py-24
Container:          max-w-7xl mx-auto px-4 xs:px-6 md:px-12
Card padding:       p-5 (compact) or p-6 md:p-8 (standard)
Section gap:        gap-12 md:gap-16
Grid gap:           gap-5 md:gap-6 or gap-6 md:gap-8
```

### Key Animation
```
Ease:      [0.16, 1, 0.3, 1]
Duration:  0.4s – 0.9s
Viewport:  once: true, margin: "-50px"
Stagger:   0.15 – 0.25
```
