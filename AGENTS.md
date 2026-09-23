# AGENTS.md

## Project
This directory is a standalone interactive HTML prototype. The active entry is
`water.html`, which combines a WebGL water layer, koi/lotus motion, and the
Codex-themed skin UI.

## Structure
- `water.html`: main runnable page.
- `fish.png`: visual reference for the pastel pond theme.
- `flash1.png`: auxiliary visual asset/reference.
- `water - 副本.html`: backup/reference copy; do not edit unless requested.
- `个人主页设计与开发方案.md`: Syncraft portfolio design/dev plan (bilingual proposal; not a runtime asset).
- `.reasonix/`: external tool metadata; do not edit for UI work.

## Workflow
- Make all file changes on the `develop` branch.
- Update this file before changing conventions or adding new top-level files.
- Keep experiments outside the root unless they are ready to become part of the
  prototype.
- Do not delete existing files or generated backups without explicit approval.

## Validation
- After editing `water.html`, open it locally and confirm the WebGL background,
  koi motion, UI layout, and interactions work.
- For visual changes, verify both desktop and mobile-sized viewports when browser
  tooling is available.
