/**
 * lucky portfolio — pluggable works registry
 * 增删作品 = 增删一项；不要在 index.html 里写死卡片。
 *
 * status:
 *   featured — 特色大卡（建议 ≤2）
 *   bento    — 网格小卡
 *   draft    — 不发布（保留草稿）
 */
window.WORKS = [
  {
    id: "fishpond",
    status: "featured",
    order: 5,
    title: { zh: "lucky 的鱼塘", en: "Fishpond" },
    tagline: {
      zh: "一座只求慢的池塘，不必争抢，鱼来了便接住。",
      en: "A pond that only asks for slow — no rushing, just catch what comes.",
    },
    meta: {
      zh: "垂钓小品 · 只求慢",
      en: "Fishing mini-game · slow by design",
    },
    link: "https://rulke.github.io/fishpond/",
    art: "pond",
    mascot: "none",
  },
  {
    id: "timesense",
    status: "featured",
    order: 10,
    date: "2024-06-01",
    title: { zh: "TimeSense", en: "TimeSense" },
    tagline: {
      zh: "「快一点」会变成习惯的约定。",
      en: "A little faster becomes a habit.",
    },
    meta: {
      zh: "育儿闹钟 + 声音计时器",
      en: "Kids timer + sound clock",
    },
    link: "#",
    art: "clock",
    mascot: "peek",
  },
  {
    id: "swingcat",
    status: "bento",
    order: 20,
    date: "2025-01-15",
    title: { zh: "SwingCat", en: "SwingCat" },
    tagline: {
      zh: "集中时的那点悠哉。",
      en: "A little ease while you focus.",
    },
    meta: {
      zh: "专注小配件 · 手绘",
      en: "Focus companion · hand-drawn",
    },
    link: "#",
    art: "cat",
    mascot: "none",
  },
  {
    id: "lucky-road",
    status: "bento",
    order: 30,
    date: "2026-01-20",
    title: { zh: "lucky Road", en: "lucky Road" },
    tagline: {
      zh: "用一支笔画出可走的路。",
      en: "Draw a walkable road with one pen.",
    },
    meta: {
      zh: "本站 · 交互叙事",
      en: "This site · interactive narrative",
    },
    link: "#",
    art: "pen",
    mascot: "none",
  },
  {
    id: "ship-notes",
    status: "bento",
    order: 40,
    date: "2025-11-02",
    title: { zh: "Ship Notes", en: "Ship Notes" },
    tagline: {
      zh: "给独立开发者的轻量发布清单。",
      en: "A tiny launch checklist for indie makers.",
    },
    meta: {
      zh: "工具 · 清单",
      en: "Tool · checklist",
    },
    link: "#",
    art: "list",
    mascot: "none",
  },
  {
    id: "draft-demo",
    status: "draft",
    order: 50,
    date: "2026-03-01",
    title: { zh: "未完成草稿", en: "WIP Draft" },
    tagline: {
      zh: "这件还在背包里没拿出来。",
      en: "Still packed in the bag.",
    },
    meta: { zh: "草稿", en: "Draft" },
    link: "#",
    art: "box",
    mascot: "none",
  },
];
