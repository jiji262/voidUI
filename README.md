# voidUI — Void Styled React Component Library

[![npm](https://img.shields.io/npm/v/@voidui/components?label=%40voidui%2Fcomponents&color=E8B923)](https://www.npmjs.com/package/@voidui/components)
[![npm downloads](https://img.shields.io/npm/dm/@voidui/components?color=E8B923)](https://www.npmjs.com/package/@voidui/components)
[![CI](https://github.com/jiji262/voidUI/actions/workflows/ci.yml/badge.svg)](https://github.com/jiji262/voidUI/actions/workflows/ci.yml)
[![Pages](https://github.com/jiji262/voidUI/actions/workflows/pages.yml/badge.svg)](https://jiji262.github.io/voidUI/)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@voidui/components?label=gzip&color=E8B923)](https://bundlephobia.com/package/@voidui/components)
[![license](https://img.shields.io/github/license/jiji262/voidUI?color=E8B923)](./LICENSE)

voidUI is a production-grade React component library built on **TailwindCSS v4** and **Radix UI primitives**. It ships **8 hand-tuned themes × light/dark**, first-class **bilingual CJK** support, and a void-flavored neobrutalist DNA that stays sharp at every scale.

Every visual token (color, radius, shadow, font stack) resolves per theme from CSS variables, so switching themes is a single attribute swap with **zero Tailwind rebuild**.

🔗 **Live demo:** https://jiji262.github.io/voidUI/
📦 **npm:** [`@voidui/components`](https://www.npmjs.com/package/@voidui/components)
📸 **Preview:**

<p align="center">
  <a href="https://jiji262.github.io/voidUI/themes">
    <img src="https://raw.githubusercontent.com/jiji262/voidUI/main/public/screenshots/themes.png" alt="voidUI themes preview" width="820" />
  </a>
</p>

## Contents

- [Install](#-install) · [Use](#use) · [Theming](#theming)
- [Local development](#-local-development) · [Quality gates](#quality-gates) · [Release flow](#release-flow)
- [Features](#-features) · [Pages](#-pages) · [Components](#-component-library) · [Theme system](#-theme-system)
- [AI-IDE integration](#-using-voidui-in-ai-ides) · [Project layout](#project-layout) · [Key dependencies](#-key-dependencies)
- [Contributing](./CONTRIBUTING.md) · [Changelog](./CHANGELOG.md) · [License](./LICENSE)

---

## 📦 Install

```bash
pnpm add @voidui/components
# or
npm install @voidui/components
# or
yarn add @voidui/components
```

Peers: `react ^18 || ^19`, `react-dom ^18 || ^19`. TailwindCSS v4 on the consumer side (you drive the theme tokens via CSS vars — copy `app/global.css` or import your own token sheet).

### Use

```tsx
import { Button, Card, Alert, AlertTitle } from "@voidui/components";

export default function Page() {
  return (
    <Card className="p-6">
      <Alert variant="info">
        <AlertTitle>Ready to ship</AlertTitle>
      </Alert>
      <Button className="mt-4">Get started</Button>
    </Card>
  );
}
```

Every component is a client component; they ship with `"use client"` preserved so you can import them from Next.js server components directly.

### Theming

Drop the token sheet in your global styles and set `data-theme` + `data-mode` on `<html>`:

```html
<html data-theme="neobrutal" data-mode="light">
```

8 theme ids: `neobrutal` · `swiss` · `editorial` · `stripe` · `hanko` · `terra` · `cyber` · `milktea`.
Modes: `light` · `dark`.

Copy `app/global.css` from the repo for a working baseline with every token already wired.

---

## 🧑‍💻 Local development

This repo is a monorepo-of-two: the publishable library in `components/voidui/` and a Next.js demo / documentation site in `app/`.

```bash
pnpm install
pnpm dev           # Next.js demo at http://localhost:3000
pnpm typecheck     # tsc --noEmit
pnpm test          # vitest run
pnpm build:lib     # tsup → dist/ (publishable artifacts)
pnpm publint       # lint package.json for npm correctness
pnpm build         # next build (static export if GITHUB_PAGES=true)
```

---

## 🎨 Features

- **8 themes** — `neobrutal` · `swiss` · `editorial` · `stripe` · `hanko` · `terra` · `cyber` · `milktea`
- **Light + dark** per theme, switched independently via `data-mode`
- **40+ CSS-variable tokens** — `--primary`, `--border-subtle`, `--sh-md`, `--r-lg`, `--font-sans`, ...
- **Bilingual CJK** — Latin-to-Simplified-Chinese fallbacks baked into every font stack; `:lang(zh)` gets looser leading + tracking automatically
- **6 Google fonts self-hosted** via `next/font` — Inter / JetBrains Mono / Fraunces / IBM Plex Mono / Noto Sans SC / Noto Serif SC
- **29 components** — form · display · feedback · layout · overlay
- **Dual ESM + CJS** with `.d.ts` / `.d.cts` and `"use client"` preserved — drop straight into Next.js App Router server components
- **Tree-shakeable** — `sideEffects: false`, ~7 KB brotli for the full ESM bundle
- **A11y-checked** — vitest + axe-core run on every PR, WCAG-AA covered for canonical usage
- **Fully typed** — TypeScript everywhere, no `any` leaks
- **Accessible** — Radix UI under the hood for focus, keyboard, ARIA
- **Zero FOUC** — inline init script syncs `data-theme` / `data-mode` on `<html>` before React hydrates

---

## 📱 Pages

| Route | Purpose |
|---|---|
| `/` | Landing page with hero + feature grid + dark CTA |
| `/components` | Searchable component gallery with Preview / Code / Examples tabs |
| `/themes` | **All 8 themes rendered side-by-side** with active-theme detail row |
| `/theme-demo` | Theme sandbox — exercise the active theme across buttons, forms, alerts, color tokens |
| `/demo` | Interactive playground across all preview variants |
| `/blocks` | Page-level block templates (hero, pricing, auth, etc.) |
| `/pricing` | Pricing table example |

### Preview — `/themes`

All 8 themes on one page, each rendered in a scoped `data-theme` tile. Click any card to activate that theme site-wide.

![voidUI /themes page showing all 8 themes side-by-side](./public/screenshots/themes.png)

<details>
<summary>More screenshots</summary>

**Home — `/`**

![voidUI home page](./public/screenshots/home.png)

**Components — `/components`**

![voidUI components gallery](./public/screenshots/components.png)

</details>

---

## 🧩 Component Library

**Form** — Button · IconButton · Input · Textarea · Label · Checkbox · Radio · Switch · Slider · Select · Toggle · ToggleGroup
**Display** — Card · BasicCard · ProductCard · Badge · Avatar · Text · Progress · CommandDisplay
**Feedback** — Alert · Tooltip · Sonner (Toast)
**Layout** — Accordion · Tab · Table · Breadcrumb
**Overlay** — Dialog · Popover · Menu

Every component is a single file in `components/voidui/` and is re-exported from [`components/voidui/index.ts`](./components/voidui/index.ts).

---

## 🎨 Theme System

Themes are driven by **two data attributes on `<html>`** — that's the entire API:

```tsx
<html data-theme="neobrutal" data-mode="light">
```

### Available themes

| ID | Label | DNA |
|---|---|---|
| `neobrutal` | Neobrutal | Hard-edged mustard, chunky borders, offset shadows — default |
| `swiss` | Swiss | Grid-first, sharp red accents, zero radius, hairline borders |
| `editorial` | Editorial | Warm cream, serif display (Fraunces), soft shadows |
| `stripe` | Stripe | Calm navy product UI with layered soft shadows |
| `hanko` | Hanko | Japanese-inspired muted blue on warm cream |
| `terra` | Terra | Earthy olive-green with warm clay undertones |
| `cyber` | Cyber | Monospaced high-contrast terminal palette |
| `milktea` | Milk Tea | Soft rose-beige with generous radius |

Full metadata lives in [`lib/theme-config.ts`](./lib/theme-config.ts); raw token values are in [`app/global.css`](./app/global.css).

### Switching themes in-app

Use the `useTheme` hook from `@/lib/theme-context`:

```tsx
"use client";
import { useTheme } from "@/lib/theme-context";

export function MyThemePicker() {
  const { theme, mode, setTheme, toggleMode } = useTheme();
  return (
    <>
      <select value={theme} onChange={(e) => setTheme(e.target.value as any)}>
        {/* 8 theme IDs */}
      </select>
      <button onClick={toggleMode}>{mode === "dark" ? "☀" : "🌙"}</button>
    </>
  );
}
```

The provider persists to `localStorage` (`voidui-theme`, `voidui-mode`) and rehydrates on reload.

### Scoped theming (show two themes at once)

Because every theme is `[data-theme="..."]` scoped in CSS, you can nest a different theme inside any subtree — see [`app/themes/page.tsx`](./app/themes/page.tsx) for a live example rendering all 8 side-by-side:

```tsx
<div data-theme="cyber" data-mode="dark" className="bg-background text-foreground">
  {/* anything here renders in cyber/dark, regardless of the page-level theme */}
</div>
```

### Token reference (partial)

| Token | Purpose |
|---|---|
| `--bg`, `--bg-elev` | Page and elevated surfaces |
| `--fg`, `--fg-muted`, `--fg-subtle` | Text hierarchy |
| `--card` | Card background |
| `--primary`, `--primary-hover`, `--primary-fg` | CTA color + on-primary |
| `--border`, `--border-subtle` | Strong vs. hairline dividers |
| `--success`, `--danger`, `--warning`, `--info` | Semantic |
| `--r-sm`, `--r`, `--r-md`, `--r-lg` | Radius scale |
| `--sh-xs` … `--sh-xl` | Shadow scale (hard-offset on brutalist/cyber, soft-blur elsewhere) |
| `--font-sans`, `--font-mono`, `--font-display` | Active family stacks with CJK fallbacks (per-theme `--font-*-active` is the underlying source) |

Tailwind aliases (`bg-primary`, `text-foreground-muted`, `border-border-subtle`, `shadow-md`, `rounded-md`) are all wired via `@theme` — just use Tailwind normally.

---

## 🤖 Using voidUI in AI IDEs

voidUI is designed to be AI-friendly: a small, stable API surface, strict token names, and a single entry point (`@/components/voidui`). Drop one of the rule files below into your project root to get AI agents to produce on-brand code from day one.

### The universal rule (reuse for any agent)

Copy this into whichever rule file your IDE reads:

````md
## voidUI component library

This project uses voidUI (`components/voidui/`, TailwindCSS v4, Radix UI). Follow these rules **always**:

1. **Single import path** — import every component from `@/components/voidui`:
   ```tsx
   import { Button, Card, Badge, Alert, AlertTitle } from "@/components/voidui";
   ```
   Never reach into `@/components/voidui/Button` unless you need tree-shaking in an isolated preview.

2. **Use tokens, not raw colors** — never hard-code hex, RGB, or Tailwind color classes like `bg-blue-500`. Use:
   - `bg-primary` / `text-primary-foreground`
   - `bg-background` / `text-foreground` / `text-muted-foreground`
   - `border-border` / `border-border-subtle`
   - `bg-destructive` / `text-destructive-foreground`

3. **Use the shadow + radius scale** — `shadow-xs|sm|md|lg|xl|2xl` and `rounded-sm|md|lg`. Each theme interprets these differently (neobrutal = hard offset, stripe = soft blur). Never hard-code a custom shadow.

4. **Border width** — voidUI v2 uses `1.5px` not `2px`. Prefer the default border from components; if you need a raw `border`, use `border-[1.5px]`.

5. **Typography** — use the `Text` component with `as="h1".."small"` for headings/body. Mono headings (`font-mono`) are the voidUI voice. `font-sans` for body, `font-display` for hero.

6. **CJK text** — wrap Chinese strings with `lang="zh"` or the `.cn` class to pick up looser leading/tracking:
   ```tsx
   <p className="cn">交付到生产</p>
   ```

7. **Theming** — never set colors/shadows per-theme in component code. If a new theme is needed, add it to `app/global.css` and `lib/theme-config.ts`, not inline.

Reference: [`app/themes/page.tsx`](./app/themes/page.tsx) shows all tokens in action across 8 themes. [`components/voidui/Button.tsx`](./components/voidui/Button.tsx) is the canonical example of a variant-driven component.
````

### Claude Code (`CLAUDE.md`)

Create `CLAUDE.md` at the repo root and paste the universal rule above into it. Claude Code reads this file automatically at session start. You can also add project-specific nudges:

```md
# Project: voidUI consumer app

<paste universal rule here>

## Workflow

- Before building UI, check `/themes` (`http://localhost:3000/themes`) to pick the right theme direction.
- Prefer new pages that compose existing voidUI primitives over custom markup.
- Use `/browse` skill to screenshot a page before claiming UI work is done.
```

Claude Code also respects subdirectory `CLAUDE.md` files, so you can tighten rules per-feature.

### Cursor (`.cursorrules`)

Cursor reads `.cursorrules` (single file) or `.cursor/rules/*.mdc` (scoped rules). Paste the universal rule into `.cursorrules`. Example with a scoped rule:

```
.cursor/rules/voidui.mdc
----
description: voidUI component and token rules
globs: ["**/*.tsx", "**/*.ts"]
alwaysApply: true
---

<paste universal rule here>
```

### OpenAI Codex (`AGENTS.md`)

The OpenAI Codex CLI and Codex cloud agent both read `AGENTS.md` from the repo root. Paste the universal rule there. Codex also supports nested `AGENTS.md` files — useful if `app/blocks/` has different rules than `app/themes/`.

```md
# AGENTS.md

<paste universal rule here>

## When running the app

- `pnpm dev` starts Next.js on :3000
- Before opening a PR, all gates must pass:
  `pnpm typecheck && pnpm test && pnpm lint && pnpm build:lib && pnpm publint && pnpm size && pnpm build`
```

### GitHub Copilot (`.github/copilot-instructions.md`)

Copilot reads `.github/copilot-instructions.md` at the repo root. Paste the universal rule. Copilot Chat in VS Code and on github.com both pick this up.

### Windsurf / other agents

Most agents fall back to `AGENTS.md`. If yours reads something else, point its rule file to the same content.

### Verifying rules take effect

Ask your agent to build a trivial UI and grep the diff for violations:

```bash
git diff | grep -E 'bg-(blue|red|gray|slate|zinc)-[0-9]|border-\[2px\]|rounded-\[0px\]'
```

If that prints anything, the agent isn't following the rules — tighten the prompt or move to a different rule file format.

---

## 📦 Component Usage

```tsx
import { Button, Card, Badge, Alert, AlertTitle, AlertDescription } from "@/components/voidui";

export function Pitch() {
  return (
    <Card className="p-6 max-w-md">
      <Card.Header>
        <Card.Title>Ship faster</Card.Title>
        <Card.Description>8 themes, one API.</Card.Description>
      </Card.Header>
      <Card.Content className="flex gap-2">
        <Button>Get started</Button>
        <Button variant="outline">Docs</Button>
      </Card.Content>
    </Card>
  );
}
```

Both the **dot-API** (`Card.Header`) and the **flat named exports** (`CardHeader`) work — pick whichever your codebase prefers.

---

## 🛠 Development

### Quality gates

Every gate runs in CI on every PR via [`.github/workflows/ci.yml`](./.github/workflows/ci.yml):

| Script | What it does |
|---|---|
| `pnpm typecheck` | `tsc --noEmit` over the whole repo |
| `pnpm lint` | Next.js ESLint config, 0 errors required |
| `pnpm test` | Vitest — smoke (renders, dot-API, props) + axe-core a11y |
| `pnpm build:lib` | tsup → `dist/index.{js,cjs}` + `dist/index.d.{ts,cts}` |
| `pnpm publint` | `package.json` correctness for npm |
| `pnpm size` | `size-limit` budget (ESM ≤ 16 KB gzip, CJS ≤ 18 KB) |
| `pnpm build` | Next.js build (static export when `GITHUB_PAGES=true`) |

### Release flow

Versioning uses [Changesets](https://github.com/changesets/changesets):

```bash
pnpm changeset                 # describe your change → writes .changeset/<name>.md
git commit -am "feat: …" && git push
# After merge to main, the release workflow opens a "Version Packages" PR.
# Merging that PR triggers `pnpm release` which builds + publishes to npm.
```

See [`.changeset/README.md`](./.changeset/README.md) for the full ceremony.

### Project layout

```
app/
├── page.tsx           # landing
├── layout.tsx         # root layout (ThemeProvider, FOUC script, fonts)
├── global.css         # 8-theme token system
├── themes/            # all-themes side-by-side preview
├── theme-demo/        # deep theme showcase
├── components/        # components reference (Preview / Code / Examples)
├── demo/              # interactive playground for every preview variant
├── blocks/            # page-level block templates
└── pricing/           # pricing table example

components/
├── voidui/            # ← the component library (this is what ships on npm)
│   ├── _utils.ts      # internal cn() helper (twMerge + clsx)
│   └── index.ts       # barrel export with v1 dot-API back-compat aliases
├── ui/                # demo-app helpers (icon, code-block, toast, theme-switcher)
├── TopNav.tsx         # demo chrome
├── Footer.tsx
└── Logo.tsx

lib/
├── theme-config.ts    # 8 theme IDs + metadata
└── theme-context.tsx  # ThemeProvider + useTheme hook

preview/components/    # one file per component variant, rendered in /components + /demo
tests/                 # vitest setup, smoke tests, a11y tests
.changeset/            # release intents
public/                # static assets
```

### Adding a component

1. Create `components/voidui/YourComponent.tsx` using `cva` for variants. Import `cn` from `./_utils` (not `@/lib/utils` — the package is self-contained).
2. Re-export from `components/voidui/index.ts`.
3. Add preview variants in `preview/components/`.
4. Register it in `lib/component-categorization.ts` and `lib/component-code-examples.ts`.
5. Add a smoke test in `tests/smoke.test.tsx` and an a11y assertion in `tests/a11y.test.tsx`.
6. Run `pnpm changeset` and pick `minor`.

### Adding a theme

1. Append the full token block to `app/global.css` under a new `[data-theme="yourtheme"]` selector (plus the `[data-mode="dark"]` companion).
2. Append the ID + metadata to `THEMES` and `THEME_META` in `lib/theme-config.ts`.
3. Done — `/themes` and the theme switcher pick it up automatically.

---

## 📚 Key Dependencies

**Library runtime** (what ships in `dependencies`):

- **Radix UI** primitives for accessible behavior across 18 components
- **Class Variance Authority** (`cva`) for variant management
- **Lucide React** icons
- **Sonner** for toasts
- **clsx** + **tailwind-merge** for `cn()`

**Peers** (consumer brings these):

- **React** `^18 || ^19`
- **react-dom** `^18 || ^19`
- **TailwindCSS v4** on the consumer side (you copy `app/global.css` or wire your own token sheet)

**Demo / docs site** (devDependencies, not shipped):

- **Next.js 14** (App Router)
- **Google Fonts** via `next/font` (self-hosted: Inter / JetBrains Mono / Fraunces / IBM Plex Mono / Noto Sans SC / Noto Serif SC)
- **Vitest** + **@testing-library/react** + **axe-core** for tests
- **tsup** for the library build, **publint** + **size-limit** as gates, **Changesets** for versioning

---

## 🌗 Dark Mode

Dark mode is an **orthogonal axis** to theme — every theme ships tuned darks. Toggle via `data-mode="dark"` on `<html>`; in-app use the `toggleMode()` from `useTheme()`.

Tailwind `dark:` variants still work — they're rewired by the `@custom-variant dark (&:where([data-mode="dark"], [data-mode="dark"] *))` line at the top of `app/global.css`.

---

## 🎯 Best Practices

1. **Compose, don't fork** — most UI needs are a composition of existing components.
2. **Tokens > hex** — never hard-code colors; stick to CSS variables / Tailwind aliases.
3. **Test both modes** — `/themes` makes this a one-click check for all 8 × 2.
4. **Respect `prefers-reduced-motion`** — `app/global.css` already disables transitions for users who ask.
5. **Use `lang="zh"` or `.cn`** for any Chinese string longer than a single word.

---

## 📄 License

MIT — use it, fork it, ship it.

## 🤝 Contributing

PRs welcome. See [CONTRIBUTING.md](./CONTRIBUTING.md) for repo layout, local setup, conventions, and the release flow.

Before opening a PR, run all 7 gates locally:

```bash
pnpm typecheck && pnpm lint && pnpm test && \
pnpm build:lib && pnpm publint && pnpm size && pnpm build
```
