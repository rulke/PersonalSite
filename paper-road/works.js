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
    id: "mainland",
    status: "featured",
    order: 10,
    title: { zh: "海陆变迁", en: "Mainland" },
    tagline: {
      zh: "拖动海平面，看岸线一进一退。",
      en: "Drag the sea level and watch the coastline come and go.",
    },
    meta: {
      zh: "全球海平面模拟 · 交互地图",
      en: "Sea-level simulation · interactive map",
    },
    link: "https://rulke.github.io/mainland/",
    art: "coast",
    mascot: "none",
  },
  {
    id: "timesense",
    status: "draft",      // 2026-09-30 大卡位让给「海陆变迁」；内容保留，改回 featured 即恢复
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
    id: "soft-signals",
    status: "bento",
    order: 20,
    title: { zh: "柔讯", en: "Soft Signals" },
    tagline: {
      zh: "三只毛绒小家伙，想待多久都行。",
      en: "Three fuzzy little ones — stay as long as you like.",
    },
    meta: {
      zh: "互动角色主页 · 柔焦",
      en: "Interactive character site · soft focus",
    },
    link: "https://momozz.art/#pink",
    art: "soft",
    mascot: "none",
  },
  {
    id: "swingcat",
    status: "draft",      // 2026-09-30 bento 位让给「Soft Signals」；内容保留，改回 bento 即恢复
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
    id: "rainbow-kitten",
    status: "bento",
    order: 30,
    title: { zh: "彩色小馋猫", en: "Rainbow Kitten" },
    tagline: {
      zh: "按颜色顺序吃，别碰那口不闪的。",
      en: "Eat in rainbow order — and never touch the one that doesn't blink.",
    },
    meta: {
      zh: "微信小游戏 · 贪吃蛇变体",
      en: "WeChat mini-game · a Snake remix",
    },
    link: "https://github.com/rulke/Rainbow-Kitten",
    art: "kitten",
    mascot: "none",
  },
  {
    id: "lucky-road",
    status: "draft",      // 2026-09-30 bento 位让给「彩色小馋猫」；内容保留，改回 bento 即恢复
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
    id: "visit-markers",
    status: "bento",
    order: 40,
    title: { zh: "访问历史标记", en: "Visit History Markers" },
    tagline: {
      zh: "逛过的链接会留下记号，按时间分色。",
      en: "Visited links keep a mark — colored by when.",
    },
    meta: {
      zh: "Chrome 扩展 · 浏览轨迹",
      en: "Chrome extension · browsing trail",
    },
    link: "https://github.com/rulke/Visit-history-markers",
    art: "marker",
    mascot: "none",
  },
  {
    id: "ship-notes",
    status: "draft",      // 2026-09-30 bento 位让给「访问历史标记」；内容保留，改回 bento 即恢复
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
