# lucky — 个人主页 / Personal Site

> **Code with craft. Design with soul.**

边走边画的数字手艺人：一支神笔一路向右画出前路，三只吉祥物（栗子鼠 Chestnut、云朵兔 Cloudy、煤球鸟 Kuro-Kuro）在画好的路上前进。这条路**没有终点**——作品是沿途风景，联系是路边邮筒，结尾是道路消失在纸白远方：未完，还在画。

**在线预览：** <https://rulke.github.io/PersonalSite/>（GitHub Pages 发布 `paper-road/` 目录）

---

## 这是什么 / What this is

单文件可玩原型：整页由一张纸、一支笔和一个连续世界组成——笔尖画到哪里，路就长到哪里。
不是关卡制游戏，而是"陪你走一段"：跳跃、滑行、里程碑、营地记录板。

An interactive, hand-drawn portfolio. The pen draws the road as you walk; works are roadside
scenery, contact is a mailbox by the road, and the page never ends.

## 目录结构 / Layout

```text
paper-road/
  index.html    单文件原型：画布世界 + 出发仪式 + i18n + 交互
  works.js      作品注册表：增删一个条目 = 增删一件作品，无需改 UI 代码
.github/workflows/pages.yml   GitHub Pages 发布（把 paper-road/ 作为站点根）
个人主页设计与开发方案.md      设计与开发方案（v1.3，规范契约）
AGENTS.md       仓库协作约定（结构 / 规范 / 校验）
README.md       本文件
```

## 本地运行 / Run locally

直接双击 `paper-road/index.html` 即可；或起一个静态服务：

```bash
cd paper-road
python -m http.server 8931
# 打开 http://127.0.0.1:8931
```

> **开发提示（省事的关键）**：浏览器对"很久没改过、响应里又没有 `Cache-Control`"的文件会给
> 「启发式新鲜度」，可能几小时不回头问服务器——于是你改了 `works.js` 却看不到变化（换 HTML 的
> `?v=` 也救不了子资源）。本地起服务时请发 no-cache 头：

```python
class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        super().end_headers()
```

## 操作 / Controls

| 输入 | 动作 |
|---|---|
| 轻点 / 左键 / Space / ↑ | 跳跃 |
| 右键 / Shift / S / ↓ / 触屏下滑 | 滑行（按住持续，松手起身） |
| Esc / ⏸ | 暂停 |
| ↺ 重绘 | 换 seed 重开（`?seed=` 可分享） |

玩法要点：

- 溪谷、泥洼、石台 → 跳过；低矮通道 / 长隧道 / 矮枝 / 晾衣绳 / 横栏 / 残拱 → 按住滑行穿过（整跃可越过拱顶）。
- 失败只会踉跄 1.5s 然后归队，**没有失败结算**；速度曲线 120→210 px/s。
- 距离换算 **10px = 1m（1000px = 100m）**：HUD 读数、营地记录板、路边石碑共用这一把尺。
- 路边**每 1 km 立一座里程碑大碑**（碑面刻里程，笔走到才长出来），两座之间 ≥30 秒。
- 出发营地有一块**记录板**，写下本 seed 的最远里程（localStorage，仅本地）。
- 任意输入可跳过开场仪式；`prefers-reduced-motion` 时为静态营地 + 「出发」按钮。

## 作品区是可插拔的 / Pluggable works

`paper-road/works.js` 是唯一真源，一条记录 = 一件作品：

```js
{
  id: "mainland",                 // 唯一
  status: "featured",             // featured | bento | draft（draft 不渲染）
  order: 10,                      // 越小越靠前
  title:  { zh: "海陆变迁", en: "Mainland" },
  tagline:{ zh: "…", en: "…" },
  meta:   { zh: "…", en: "…" },
  link: "https://…",
  art: "coast",                   // 内置画法：pond | coast | soft | kitten | marker
  mascot: "none",                 // peek | sit-arrow | none
}
```

增删一件作品 = 增删一条记录，UI 不动。当前在线 5 件：

| 位子 | 作品 | 链接 |
|---|---|---|
| featured | lucky 的鱼塘 | <https://rulke.github.io/fishpond/> |
| featured | 海陆变迁 | <https://rulke.github.io/mainland/> |
| bento | 柔讯（Soft Signals） | <https://momozz.art/#pink> |
| bento | 彩色小馋猫（Rainbow Kitten） | <https://github.com/rulke/Rainbow-Kitten> |
| bento | 访问历史标记 | <https://github.com/rulke/Visit-history-markers> |

## 约定 / Conventions

- 品牌 **lucky**，文案中英双语（zh-CN / en），切换时热替换、不重载场景。
- **无终点叙事**：页尾是「未完，还在画。 / To be drawn…」，禁用 The End / 终点 / 旅程结束。
- 场景里除天空云朵外的一切都由那支笔画出：主路线与地貌是一笔连续的墨迹，辅助物件随笔尖前沿描出；skip / 重绘后由笔快速补画，而不是直接出现。
- 左右键分工固定：左键永远跳，滑行只走右键 / Shift / S / ↓ / 下滑；左键长按不触发滑行，双击永不绑定滑行。
- 营地构图使用单一锚点：篝火 = 小队中心 = 0.22·画布宽，村舍在小队身后，任意窗口宽度下构图一致。
- 先改 `个人主页设计与开发方案.md`，再写实现（文档是设计契约）。

## 发布 / Deploy

推送到 `main` 会自动发布（`.github/workflows/pages.yml` 把 `paper-road/` 作为站点根）：

```bash
git push origin main      # 发布
git push origin develop   # 只是工作分支备份
```

首次若未自动开启 Pages：仓库 **Settings → Pages → Source** 选 **GitHub Actions** 即可
（工作流里已带 `enablement: true`，通常无需手动）。

## Roadmap

- M2–M3：全页滚动与转场（Lenis + ScrollTrigger 的连续世界）。
- M4：Astro 工程化，`content/works/` 一件作品一个文件（上面这份注册表 schema 原样搬过去）。

## License

MIT（见 `LICENSE`）。
