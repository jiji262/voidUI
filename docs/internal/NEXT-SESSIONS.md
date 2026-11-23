# voidUI v3 — 后续会话执行清单

本 zip 已包含 v3 基础层（tokens、主题、30+ 重设计组件）。
解压覆盖到 voidUI 项目根目录后即可 `pnpm install && pnpm dev`，所有 blocks
会自动运行在 v3 token 系统下，视觉合理。

下面 5 个会话用来把 `app/blocks/*` 和外壳页面提升到"重新设计"水准。
每个会话独立工作，把 voidUI 项目（含本 zip 的内容）作为附件再发一次，
然后粘贴对应 prompt。

---

## 会话 1 — 高流量 blocks
**附件**：voidUI 项目（已含 v3 基础层）
**Prompt**:

> 在 voidUI 项目（已升级到 v3 token 系统）基础上，用 `var(--bg)` `var(--fg)`
> `var(--border)` `var(--accent)` 等 v3 tokens 重新设计以下四个目录的 page.tsx：
>
> - app/blocks/hero-sections
> - app/blocks/call-to-action
> - app/blocks/pricing-tables
> - app/blocks/feature-blocks
>
> 要求每个 block 同时输出：
> 1. 一个 live preview JSX
> 2. 对应的 code string（用于 <CodeDisplay>）
>
> 保持现有路由、导出结构、CodeDisplay 用法。每个目录至少 6 个 variants，
> 视觉风格商用级，避免 AI slop（避免大渐变、emoji、滥用 icon）。

---

## 会话 2 — 表单与导航
**Prompt**:

> 同会话 1 的要求，重新设计：
>
> - app/blocks/authentication
> - app/blocks/forms
> - app/blocks/onboarding
> - app/blocks/navbar

---

## 会话 3 — 展示类
**Prompt**:

> 同会话 1 的要求，重新设计：
>
> - app/blocks/cards
> - app/blocks/bento-grids
> - app/blocks/stats
> - app/blocks/testimonials

---

## 会话 4 — 内容类
**Prompt**:

> 同会话 1 的要求，重新设计：
>
> - app/blocks/faq
> - app/blocks/blogs
> - app/blocks/career-sections
> - app/blocks/affiliate
> - app/blocks/ai
> - app/blocks/profile
> - app/blocks/sidebar

---

## 会话 5 — 主页面与外壳
**Prompt**:

> 用 v3 token 重新设计以下主页面与外壳组件：
>
> - app/page.tsx
> - app/components/page.tsx
> - app/themes/page.tsx
> - app/theme-demo/page.tsx
> - app/pricing/page.tsx
> - app/demo/page.tsx
> - app/layout.tsx
> - components/Footer.tsx
> - components/TopNav.tsx
> - components/Logo.tsx
> - components/CodeDisplay.tsx
> - components/Testimonial.tsx
>
> 最后整合所有会话的产出，输出一个完整的覆盖式 zip。

---

## 通用提示

- 每个会话开始前贴一句："请先 ls voidUI/app/blocks/<目录>，
  read_file 看现有结构，再开始改"，避免 AI 凭空生成不兼容的代码。
- 每改完一个目录就让 AI 调用 `done` 校验一次，避免最后一起爆炸。
- 5 个会话结束后，把每次产出的 delivery 目录 merge 到一起，
  打成最终 zip。
