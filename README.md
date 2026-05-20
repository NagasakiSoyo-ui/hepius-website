# Hepius Therapeutics — Official Website

Static company website for Hepius Therapeutics, a reverse translational platform-driven
biotech company developing next-generation precision immuno-oncology therapeutics.

Built with HTML + Tailwind CSS (Play CDN) + vanilla JavaScript. No frameworks, no backend.

## Quick Start

```bash
# Local preview (required — i18n uses AJAX, needs HTTP server)
python -m http.server 8000
# Open http://localhost:8000 in browser
```

## Project Structure

```
Hepius/
├── index.html               Home
├── about.html               About — mission, founder, team
├── science.html             Science & Technology — platform, equipment, proprietary tech
├── pipeline.html            Pipeline — overview table + HP-002/004 detail sections
├── publications.html        Publications — AACR 2026 Poster #6776
├── news.html                News (placeholder)
├── careers.html             Careers (placeholder)
├── contact.html             Contact — inquiries + offices
├── 404.html                 404 error page
├── sitemap.xml              SEO sitemap
├── robots.txt               SEO robots
├── assets/
│   ├── logo.png             Company logo (from 未标题-1.png)
│   ├── favicon.ico           32x32 favicon
│   ├── apple-touch-icon.png  180x180 iOS icon
│   ├── og-image.png         1200x630 Open Graph share image
│   ├── images/
│   │   ├── hp002-spr.png    HP-002 SPR binding curve
│   │   └── hp002-spect.jpg   HP-002 SPECT/CT imaging (combined figure)
│   ├── team/
│   │   ├── yujun-huang-portrait.jpg
│   │   └── yujun-huang-square.jpg
│   └── posters/
│       └── Hepius_AACR2026_Poster_7193_PRAME-TCR.pdf
├── css/
│   └── style.css            Custom supplement styles
├── js/
│   ├── i18n.js              Language switch engine (ZH/EN)
│   └── nav.js               Mobile navigation menu
├── i18n/
│   ├── zh.json              Chinese translations (~220 keys)
│   └── en.json              English translations (~220 keys)
└── README.md                This file
```

## Tech Stack

- HTML5 + Tailwind CSS (Play CDN, inline config)
- Vanilla JavaScript (no React/Vue/Next.js/frameworks)
- No backend, no CMS, no database
- i18n via JSON files + vanilla JS XHR

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#2D2D2D` | Headers, footer, body text |
| Accent | `#FF7505` | CTAs, links, data highlights |
| Surface | `#FFF7F0` | Card backgrounds, alternate sections |
| Font | Inter + Noto Sans SC | Body and headings |
| Mono | JetBrains Mono | Data values (KD, Ka, Kd), code |

## Deployment

### GitHub Pages

1. Push to GitHub repository
2. Settings → Pages → Source: `main` branch, root (`/`)
3. Set custom domain: `hepiustherapeutics.com`
4. Add CNAME record in DNS: `hepiustherapeutics.com` → `<username>.github.io`
5. Enable "Enforce HTTPS"

### Custom Domain (hepiustherapeutics.com)

1. Add CNAME file to repo root with content: `hepiustherapeutics.com`
2. Configure DNS:
   - Type: CNAME
   - Name: `www` (or `@` for apex)
   - Value: `<username>.github.io`

## Editing Translations

All user-facing text is in `i18n/zh.json` and `i18n/en.json`. Each key maps to an HTML
element via `data-i18n="key.path"` attribute.

```html
<!-- HTML -->
<h1 data-i18n="home.hero.title">Hepius Therapeutics</h1>

<!-- en.json -->
{ "home": { "hero": { "title": "Hepius Therapeutics" } } }

<!-- zh.json -->
{ "home": { "hero": { "title": "赫匹欧斯生物科技" } }
```

To add new translatable text:
1. Add the key to both `en.json` and `zh.json`
2. Add `data-i18n="key.path"` to the HTML element
3. The i18n engine replaces `textContent` on page load and language switch

Email links use `data-i18n-mailto` for dynamic `mailto:` hrefs.

---

## 待补充清单 / Pending Items

- [x] 苏州办公地址 — 苏州工业园区新平街388号23幢5层04室5419F
- [ ] **San Diego 办公精确地址** — 目前占位 "San Diego, California, USA"，标注 "Detailed address available upon request"
- [x] BD 商务邮箱 — ALI@hepiustherapeutics.com
- [x] 学术联系邮箱 — yhuang@hepiustherapeutics.com
- [ ] **微信公众号二维码** — 需提供图片文件，放到 assets/images/ 下，并在 contact.html 中引用
- [ ] **团队成员证件照** — 除黄宇君外，以下成员待补充照片：
  - 陈旭文 / Xuwen Chen
  - 李育榕 / Yurong Li
  - 梁晓 / Xiao Liang
  - 张煦 / Xu Zhang
  - 张天成 / Tiancheng Zhang
  - 高戎戎 / Rongrong Gao
- [ ] **公司 LinkedIn 主页链接** — 如有，添加到 contact.html 及 Footer
- [ ] **实验室/设备照片** — 如有，可配在 Science 页设备区
- [ ] **新闻动态内容** — news.html 目前为占位，后续启用时补充
- [ ] **招聘职位信息** — careers.html 目前为占位，后续启用时补充
- [x] 配色方案 — 方案 C（灰橙风）已确认
- [x] favicon — 已从 logo 生成
- [x] og-image.png — Open Graph 社交分享图已生成

---

## Design Constraints

- No emoji
- No stock images (lab people shaking hands, DNA helix backgrounds, etc.)
- No gradient backgrounds, glassmorphism, or neumorphism
- No animated hover effects beyond simple transitions
- No oversized CTA banners
- No contact forms, maps, or social media icon clusters
- No public disclosure of: equity structure, funding amounts, patent application numbers,
  molecular sequences, mutation sites, HP-004 target name (ALPG/ALPP)
- All images lazy-loaded (`loading="lazy"`)
