# voidUI v3 — Refined Design Upgrade

This zip contains a **design layer upgrade** for your existing voidUI project. It refreshes:

- **`app/global.css`** — refined token system, 10 themes × light/dark = 20 sets, new motion tokens, accessibility tweaks
- **`components/voidui/*`** — every component redesigned with token-driven styles, theme-aware press behaviour, improved a11y (focus rings, aria-invalid, required asterisks), loading/icon slots on Button, dot/size variants on Badge, dismissible Alert, multi-thumb Slider, etc.
- **`lib/theme-config.ts`** — adds two new themes (`aurora`, `mono`) and a `family` taxonomy

## How to install

```bash
# From your project root
unzip voidui-v3-design-upgrade.zip
# This unpacks `voidUI/...` mirroring the existing tree, overwriting the
# files you want to replace.
```

Then in your project:

```bash
pnpm install   # no new deps; existing radix/clsx/tailwind-merge/sonner/lucide are reused
pnpm dev
```

Open `/themes` to see all 10 themes side-by-side.

## What changed at the design level

| Area | Before (v2) | After (v3) |
|---|---|---|
| Themes | 8 | **10** (+ Aurora, Mono) |
| Press feedback | hard-coded per theme | `--btn-hov-x/y` & `--btn-act-x/y` tokens |
| Motion | mixed easings | `--motion-fast/180/280` + `--ease-out/spring` |
| Type scale | ad-hoc | `--fs-xs … --fs-6xl` modular scale |
| Button | basic variants | + `loading`, `iconLeft/Right`, `fullWidth` |
| Badge | 4 variants | 10 variants + `dot` + size scale |
| Alert | text-only | + auto icon, `dismissible`, token bg |
| Input | basic | + `invalid` prop wired to aria-invalid + ring |
| Card | static | + `interactive` mode (focus ring, lift) |
| Dark mode | OK | improved muted-text contrast (WCAG AA) |

## Back-compat

All v1/v2 export names are preserved (`Tab`, `Sonner`, `Radio`, etc.) — your existing imports keep working.

## Files in this archive

```
voidUI/
├── app/
│   └── global.css                  # 10-theme token system
├── components/
│   └── voidui/
│       ├── _utils.ts
│       ├── Accordion.tsx
│       ├── Alert.tsx
│       ├── Avatar.tsx
│       ├── Badge.tsx
│       ├── BasicCard.tsx
│       ├── Breadcrumb.tsx
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Checkbox.tsx
│       ├── CommandDisplay.tsx
│       ├── Dialog.tsx
│       ├── IconButton.tsx
│       ├── Input.tsx
│       ├── Label.tsx
│       ├── Login.tsx
│       ├── Menu.tsx
│       ├── Popover.tsx
│       ├── ProductCard.tsx
│       ├── Progress.tsx
│       ├── Radio.tsx
│       ├── Select.tsx
│       ├── Slider.tsx
│       ├── Sonner.tsx
│       ├── Switch.tsx
│       ├── Tab.tsx
│       ├── Table.tsx
│       ├── Text.tsx
│       ├── Textarea.tsx
│       ├── Toggle.tsx
│       ├── ToggleGroup.tsx
│       ├── Tooltip.tsx
│       └── index.ts
└── lib/
    └── theme-config.ts             # +aurora, +mono, family taxonomy
```

## Notes / caveats

- I did not change `package.json`, `tsconfig`, or build config. No dependency upgrade required.
- Pages under `app/blocks/*` were not regenerated. They still consume the same component APIs and tokens, so they'll automatically pick up the new look — but a small handful may benefit from a manual visual review (especially blocks that hard-coded colors instead of using tokens).
- Tests were not modified. Run `pnpm test` after install to confirm green.

— voidUI v3 / 2026-04
