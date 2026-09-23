# AGENTS.md

## Project
This directory is the **lucky** personal portfolio workspace (Apple-style
typography × Japanese healing hand-drawn line art). Brand voice:
`Code with craft. Design with soul.` UI languages: Chinese + English only.

The active planning artifact is `个人主页设计与开发方案.md` (bilingual design +
development plan). Implementation is not started yet; when it begins, add a
runtime subfolder (e.g. `paper-road/` or `site/`) rather than scattering files
in the root.

## Structure
- `个人主页设计与开发方案.md`: canonical design/dev plan (lucky brand, ZH/EN).
- `AGENTS.md`: this file — project rules and conventions.
- `.gitignore`: ignore local backups (`*副本*`), secrets, editor/build noise.
- Historical (removed from working tree; remain only in git history):
  `water.html`, `fish.png`, `flash1.png` — old WebGL pond prototype assets.
  Do not restore or delete git history without explicit user approval.
- `water - 副本.html`: if present, local backup only; gitignored, never track.

## Conventions
- Brand name: **lucky** (lowercase in UI wordmark unless design says otherwise).
- Primary tagline (EN): `Code with craft. Design with soul.`
- Languages: **zh-CN + en only**. No Japanese locale in product copy
  (visual style may still reference Japanese illustration aesthetics).
- Controls: Jump = left click / tap / Space; Roll = right click / Shift/S/↓ /
  swipe-down. Do **not** bind Roll to double-click or long-press (fallback
  only). Always `preventDefault` on `contextmenu` over the canvas.
- Mascots follow the “starring roles” system in the plan §3.1 / §6
  (not every card gets all three).
- Scrolling is a single continuous world (Lenis + ScrollTrigger), not
  multi-page hard transitions.

## Workflow
- Make all file changes on the `develop` branch.
- Update this file before changing conventions or adding new top-level files.
- Keep experiments outside the root until they are ready to join the prototype.
- Do not delete existing files, backups, or git history without explicit approval.
- Plan documents are design contracts: change the plan first, then implement.

## Validation
- After editing the plan, check brand name, tagline, locale list, and control
  tables stay consistent (§0, §1, §5, §6, §12).
- After implementing `water.html` or any HTML prototype, open it locally and
  confirm scene rendering, mascots, pen, and interactions work.
- For visual/interaction changes, verify desktop and mobile-sized viewports
  when browser tooling is available.
