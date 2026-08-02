# DESIGN TOOL USAGE RULES

This project is configured to selectively use advanced UI/UX evaluation tools (like UI UX Pro Max) and interaction references (like Motion Primitives).

To ensure project stability and maintain the approved design aesthetic, strictly adhere to the following rules:

## 1. Tool Purpose & Limitations
* **UI UX Pro Max** is **only allowed for critique and refinement**. It must **not** be used to blindly redesign or overwrite existing website layouts.
* **Motion Primitives-style animations** (using Framer Motion) should be used **selectively**.
* **Do not over-animate** the project. Subtle is premium.
* **Do not create lag**. Respect performance and avoid excessive parallax or timeline-linked DOM manipulations.

## 2. Design Source of Truth
* `design.md` remains the absolute source of truth for all aesthetics (colors, typography, spacing).
* The refined **About page** remains the inner-page visual benchmark.
* **DO NOT alter the homepage** when using these tools. The homepage remains locked per `HOMEPAGE_LOCK.md`.

## 3. General Animation Philosophy
Follow the established premium construction website feel:
* Use opacity fades, subtle Y-axis transforms, and clean hover state transitions.
* Avoid bouncy, cartoonish, or overly erratic motion.
* Motion should feel architectural, engineered, and intentional.
