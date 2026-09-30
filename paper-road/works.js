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
];
