# Page Build Workflow

This document outlines the approved workflow and design rules learned from the homepage and About Us page to ensure new pages (Services, Project Gallery, Contact / Site Visit) are created consistently without feeling copied.

## 1. APPROVED WEBSITE PAGES AND ROUTES

- Home → `/`
- About Us → `/about`
- Services → `/services`
- Project Gallery → `/projects`
- Contact / Site Visit → `/contact`

## 2. SOURCE-OF-TRUTH PRIORITY

When resolving conflicts or making design decisions, follow this priority order:
1. `HOMEPAGE_LOCK.md`
2. Page-specific redesign brief
3. `design.md`
4. `DESIGN_TOOL_USAGE_RULES.md`
5. Current approved implementation
6. Content outline
7. UI UX Pro Max recommendations

## 3. HOMEPAGE PROTECTION

- **Homepage is approved and locked.**
- Do not modify homepage files without explicit permission.
- Do not change shared components or global styles if they alter the homepage.
- Ask for permission before touching protected files.
- Page-specific components should be preferred for remaining pages.

## 4. PAGE UNIQUENESS RULE

All pages must share the same brand but **must not share the same**:
- hero structure
- section sequence
- card patterns
- layout rhythm
- image placement
- CTA composition
- animation personality

The website must not feel like one page copied repeatedly with different content.

## 5. TONAL SYSTEM

**Use:**
- deep charcoal / obsidian
- textured graphite
- soft concrete grey
- restrained yellow accent

**Do not use pure white as a major section background.**

**Use gradual tonal transitions:**
Dark → concrete grey → graphite → concrete grey → image-led → medium grey → dark

## 6. IMAGE SYSTEM

**Use three image categories:**
1. Visible editorial construction photography
2. Subtle blueprint / architectural background illustration
3. Atmospheric CTA or technical background imagery

- Use local image placeholders with stable filenames.
- Do not hotlink remote images.
- Final client images should be replaceable without code changes.

## 7. ANIMATION SYSTEM

**Existing tools:**
- `framer-motion`
- `gsap`
- `lenis`

- Do not install additional animation libraries unless required.
- Motion Primitives may be used selectively as reference or adapted components.
- **Every page must have a different animation personality.**

**Requirements:**
- performance-safe
- reduced-motion support
- lighter mobile motion
- no repetitive bounce effects
- no unnecessary scroll state
- avoid layout-heavy animation
- preserve smooth scrolling

## 8. UI UX PRO MAX RULE

**Use UI UX Pro Max only for:**
- critique
- visual hierarchy
- spacing
- layout differentiation
- mobile UX
- conversion improvement
- identifying generic design patterns

**It must not:**
- redesign the approved website automatically
- change the brand system
- override `design.md`
- modify the locked homepage
- make all pages follow one template

## 9. PAGE BUILD WORKFLOW

- **Prompt 1:** Page strategy, outline review and page-specific redesign brief. No coding.
- **Prompt 2:** Structural implementation, route, content, responsive layout, image placeholders and temporary images.
- **Prompt 3:** Unique visual design refinement using the page brief and UI UX Pro Max as a controlled critic.
- **Prompt 4:** Page-specific animations and interactions.
- **Prompt 5:** Optional targeted visual balance, performance and QA pass.

## 10. QA CHECKLIST

After every page:
- [ ] take a full-page screenshot
- [ ] compare against all existing pages
- [ ] confirm page uniqueness
- [ ] check tonal balance
- [ ] check image placement
- [ ] check mobile layout
- [ ] check animations
- [ ] check reduced motion
- [ ] check navbar active state
- [ ] check all routes
- [ ] check console errors
- [ ] run build
- [ ] confirm homepage remains unchanged
