# AGENTS.md

## Project
This directory is the **lucky** personal portfolio workspace (Apple-style
typography × Japanese healing hand-drawn line art). Brand voice:
`Code with craft. Design with soul.` UI languages: Chinese + English only.

Canonical spec: `个人主页设计与开发方案.md` (v1.2). Implementation starts with
`paper-road/` (feel prototype) then Astro site. Do not scatter runtime files
in the repo root.

## Structure
- `README.md`: 仓库说明（运行方式 / 操作 / 玩法 / 结构 / 约定）。
- `.github/workflows/pages.yml`: GitHub Pages 发布（main → 以 `paper-road/` 为站点根）。
- `LICENSE`: MIT（GitHub 建仓时自动生成，保留）。
- `个人主页设计与开发方案.md`: design/dev plan (lucky, ZH/EN, no-ending road).
- `AGENTS.md`: this file.
- `.gitignore`: local backups (`*副本*`), secrets, editor/build noise.
- Planned (not created yet):
  - `content/works/` — pluggable works (one file per work) at Astro stage.
  - `content/notes/`, `public/assets/works/`, `data/site.json`.
- `paper-road/`: M0–M1 feel prototype (created).
  - `paper-road/index.html`: entry (open locally).
  - `paper-road/works.js`: pluggable works registry — add/remove entries only.
- Historical (deleted from working tree; still in git history):
  `water.html`, `fish.png`, `flash1.png`. Do not restore or purge history
  without explicit user approval.

## Conventions
- Brand: **lucky**. Tagline: `Code with craft. Design with soul.`
- Locales: **zh-CN + en only**.
- **No ending / no finish-line narrative.** Open with a **Start Camp** departure
  ritual (5–8s, skippable). Contact is a **roadside mailbox (Waystation)** the
  mascots walk past. The page ends on **Open Road** (`未完，还在画。 /
  To be drawn…`). Never ship “The End / 终点 / 旅程结束” copy.
- Controls: Jump = left click / tap / Space / ↑; **Slide** = right click / Shift / S / ↓ /
  swipe-down. Long-press left must NOT trigger Slide (Jump only on left click).
  **Never bind Slide to double-click.**
  `preventDefault` on canvas `contextmenu`. Any input skips the intro ritual.
- Works are **pluggable**: one file per work under `content/works/` (or
  `data/works.json` in the prototype). Add/delete a file to add/delete a work.
  Do not hardcode work cards in UI components. Schema/status:
  `featured | bento | draft`, `order`, bilingual `title`/`tagline`, `art`, `link`.
- Mascots use the starring-roles system (plan §3.1), not stickers on every card.
- Scroll is one continuous world (Lenis + ScrollTrigger).

## Workflow
- Work on the `develop` branch.
- Update this file before changing conventions or adding new top-level files.
- Change the plan first, then implement (plan is the design contract).
- Do not delete files, backups, or git history without explicit approval.

## Validation
- Spec consistency: brand, tagline, locales, controls, and no-ending copy match
  across plan §0 / §1 / §5 / §6 / §12.
- Works: add/remove a sample work file only — list must update without code edits.
  Run `npm run works:check` when the site exists (id unique, zh/en complete).
- After any HTML prototype edit, open locally; verify camp intro, skip, pen ahead
  of mascots, jump/slide, and that the footer has no “end camp”.
- Visual checks: desktop + mobile viewports when browser tooling is available;
  confirm `prefers-reduced-motion` shows Start Camp + 「出发 / Set out」.
