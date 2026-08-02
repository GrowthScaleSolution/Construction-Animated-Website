# HOMEPAGE LOCK & PROJECT SAFETY RULES

## 1. Homepage Lock Status
* The homepage route `/` is **locked**.
* Do not modify the homepage layout.
* Do not modify homepage sections.
* Do not modify homepage typography.
* Do not modify homepage colors.
* Do not modify homepage spacing.
* Do not modify homepage hero video section.
* Do not modify homepage CTAs.
* Do not modify homepage popup behavior.
* Do not modify homepage sound/loader behavior.
* Do not modify homepage animations.
* Do not modify homepage mobile layout.

## 2. Files/Areas to Treat as Protected
The following files are responsible for the homepage and its components. They must **not** be modified without explicit permission:

**Homepage Route:**
* `src/app/page.tsx`
* `src/app/layout.tsx` (Root layout)

**Homepage Specific Sections & Features:**
* `src/components/Hero.tsx` (Hero video section)
* `src/components/About.tsx` (Homepage version)
* `src/components/Services.tsx`
* `src/components/Showcase.tsx`
* `src/components/WhyChooseUs.tsx`
* `src/components/Process.tsx`
* `src/components/ContactSection.tsx`
* `src/components/LeadPopup.tsx`
* `src/components/Preloader.tsx`
* `src/components/InteractiveBlueprint.tsx`
* `src/components/CivilModal.tsx`

**Global Styles & Setup:**
* `src/app/globals.css`
* Any homepage-specific animation logic or video/sound setup.

## 3. Shared Component Rule
If a shared component is used by the homepage, **do not change that shared component** if it will visually affect the homepage. 

This includes:
* `src/components/Navbar.tsx` (Header)
* `src/components/Footer.tsx` (Footer)
* `src/components/WhatsAppCTA.tsx` (Floating WhatsApp button)
* Components inside `src/components/ui/` (e.g., CTA Button)
* Layout or animation wrappers

**If a change is needed for another page:**
* Ask for permission first, OR
* Create a page-specific variation that does not affect the homepage.

## 4. Allowed Work
You may freely work on the following, provided they do not break the rules above:
* `/about` (`src/app/about/page.tsx` and related components)
* `/services` (`src/app/services/page.tsx` and related components)
* `/projects` (`src/app/projects/page.tsx` and related components)
* `/contact` (`src/app/contact/page.tsx` and related components)
* Page-specific components for those routes
* Page-specific animations
* Page-specific sections
* Page-specific content

## 5. Design Source of Truth
All new pages must follow:
* `design.md`
* Refined About Us page visual benchmark
* Current homepage brand direction

## 6. Do Not Do
* **Do not redesign the homepage.**
* **Do not "improve" the homepage without permission.**
* Do not change global styles in a way that changes the homepage.
* Do not change the header/footer if it affects homepage appearance.
* Do not introduce a new design system.
* Do not randomly change fonts, colors, spacing, or buttons.
* Do not add new libraries that change existing homepage behavior.

## 7. Change Confirmation Rule
If any future task requires touching protected homepage/shared files, **stop and ask for approval** before editing.
