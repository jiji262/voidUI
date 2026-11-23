# voidUI

A refined neobrutalist React component library.

- **30 components** — buttons, forms, dialogs, overlays, navigation, content
- **10 themes × light/dark** — token-driven, swap with one attribute on `<html>`
- **Built on** TailwindCSS v4 + Radix UI primitives
- **MIT licensed**

```sh
pnpm add @voidui/components
```

---

## Use the library

Install the package and the matching peers (Radix primitives, Lucide icons, Sonner, the class utilities):

```sh
pnpm add @voidui/components react react-dom
pnpm add @radix-ui/react-accordion @radix-ui/react-avatar @radix-ui/react-checkbox \
  @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-label \
  @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group \
  @radix-ui/react-select @radix-ui/react-slider @radix-ui/react-slot \
  @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toggle \
  @radix-ui/react-toggle-group @radix-ui/react-tooltip @radix-ui/react-visually-hidden \
  class-variance-authority clsx lucide-react sonner tailwind-merge
```

Import the token contracts once near your app root (this defines all 10 themes' CSS variables, motion tokens, focus rings, and keyframes):

```ts
import "@voidui/components/styles.css";
```

Set the active theme on `<html>`:

```html
<html data-theme="aurora" data-mode="dark">
```

Use the components:

```tsx
import { Button, Card, Badge } from "@voidui/components";

export function Hello() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Release 3.0</Card.Title>
      </Card.Header>
      <Card.Content>
        <Badge variant="primary" dot>New</Badge>
        <Button>Get started</Button>
      </Card.Content>
    </Card>
  );
}
```

The library expects **TailwindCSS v4** in your app. Components reference utilities like `bg-card`, `text-foreground`, `border-border` — these resolve through the CSS variables loaded by `@voidui/components/styles.css`, so as long as you have Tailwind v4 set up, no extra configuration is required.

### Available themes

| Theme | Family | Description |
|---|---|---|
| `neobrutal` | brutal | Hard-edged mustard with chunky borders and offset shadows |
| `swiss` | minimal | Grid-first, sharp red accents, zero radius, hairline borders |
| `editorial` | editorial | Warm cream background with serif display type and soft shadows |
| `stripe` | product | Calm navy product UI with layered soft shadows |
| `hanko` | editorial | Japanese-inspired muted blue on warm cream |
| `terra` | editorial | Earthy olive-green with warm clay undertones |
| `cyber` | brutal | Monospaced high-contrast terminal palette |
| `milktea` | playful | Soft rose-beige with generous radius |
| `aurora` | product | Cool minimal indigo on porcelain — calm and modern |
| `mono` | minimal | Pure monochrome — pixel-tight contrast, zero color |

### Components

**Inputs** — `Button`, `IconButton`, `Input`, `Textarea`, `Select`, `Checkbox`, `RadioGroup`, `Switch`, `Slider`, `Toggle`, `ToggleGroup`, `Label`

**Display** — `Badge`, `Avatar`, `Card`, `BasicCard`, `Alert`, `Progress`, `Table`, `Text`

**Overlays** — `Dialog`, `Popover`, `Menu`, `Tooltip`, `Toaster` (Sonner), `Tabs`, `Accordion`, `Breadcrumb`

**Composite** — `Login`, `ProductCard`, `CommandDisplay`

All components are server-component-safe at the import level; only the components that need browser APIs ship with `"use client"` internally.

---

## Develop the marketing site

This repository also hosts the marketing site under `app/` (Next.js 14 App Router). It exists to dogfood the library and showcase every theme + block.

```sh
pnpm install
pnpm dev
```

### Folder map

```
voidUI/
├── app/
│   ├── layout.tsx              # Root layout — TopNav, Footer, theme + font bootstrap
│   ├── global.css              # Site-only styles (the token contracts live in components/voidui/styles.css)
│   ├── page.tsx                # Landing page
│   ├── themes/page.tsx         # 10 themes side-by-side
│   ├── components/page.tsx     # 30 components, fully composed
│   ├── pricing/page.tsx        # Pricing tiers + FAQ
│   ├── demo/page.tsx           # Live interactive playground
│   └── blocks/                 # 19 block sets (hero-sections, pricing-tables, …)
├── components/
│   ├── voidui/                 # The published library — barrel + sources + styles.css
│   ├── blocks/_kit.tsx         # Shared chrome for /blocks/* pages
│   ├── TopNav.tsx              # Site nav with theme + mode switcher
│   ├── Footer.tsx
│   ├── Logo.tsx
│   ├── CodeDisplay.tsx
│   └── Testimonial.tsx
└── lib/
    └── theme-config.ts         # THEMES array + metadata (label, zh, family, description)
```

### How the token system works

Every component reads from CSS variables. Switching themes means flipping one attribute on `<html>`:

```html
<html data-theme="aurora" data-mode="dark">
```

`components/voidui/styles.css` defines the cascade:

1. `:root` — base motion, radius, font tokens (theme-agnostic)
2. `[data-theme="<name>"]` — per-theme color + shape + shadow tokens
3. `[data-theme="<name>"][data-mode="dark"]` — dark-mode overrides for that theme

Components reference tokens directly (`var(--primary)`, `var(--bg-elev)`, `var(--r)`, `var(--sh)`). They don't know which theme is active.

### Scripts

| Command | What it does |
|---|---|
| `pnpm dev` | Marketing site at `localhost:3000` |
| `pnpm build` | Static export of the marketing site |
| `pnpm typecheck` | `tsc --noEmit` |
| `pnpm lint` | `next lint` |
| `pnpm test` | Vitest run (smoke + a11y + utils) |
| `pnpm build:lib` | Build `dist/` (ESM + CJS + d.ts + styles.css) via tsup |
| `pnpm size` | Validate bundle size budgets |
| `pnpm changeset` | Open the changeset prompt for a release |
| `pnpm release` | Build the lib and publish via Changesets |

---

## License

MIT — see [LICENSE](./LICENSE).
