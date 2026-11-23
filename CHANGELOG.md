# @voidui/components changelog

All notable changes to the published library ship here. The format loosely follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) starting at 0.1.0.

## Unreleased

## 0.2.0 — v3 Design Upgrade

### Added

- **Two new themes**: `aurora` (cool indigo on porcelain) and `mono` (pure monochrome). Total: **10 themes × light/dark = 20 token sets**.
- **Component count up to 30** (added `Login` to the index alongside the existing 29).
- **Motion tokens**: `--motion-fast`, `--motion-180`, `--motion-280`, `--ease-out`, `--ease-spring`. Components share one tuned motion vocabulary.
- **Theme-aware press feedback**: `--btn-hov-x/y` and `--btn-act-x/y` tokens drive the per-theme button hover/active translate.
- **Modular type scale**: `--fs-xs` through `--fs-6xl`.
- **Button**: `loading` state, `iconLeft` / `iconRight` slots, `fullWidth`.
- **Badge**: 10 variants (added `success`, `warning`, `info`, `outline`, `solid`, `surface` aliases), `dot` indicator, size scale.
- **Alert**: auto-icon by variant, `dismissible` callback, token-driven background.
- **Input**: `invalid` prop wired to `aria-invalid` and a destructive focus ring.
- **Card**: `interactive` mode (focus ring + lift on hover, keyboard-focusable).
- **Slider**: multi-thumb support.
- **CSS export**: published library now ships `dist/styles.css`. Consumers do `import "@voidui/components/styles.css"` once at the app root to load all 10 theme token sets.

### Changed

- **`peerDependencies`** instead of `dependencies` for `@radix-ui/*`, `clsx`, `class-variance-authority`, `lucide-react`, `sonner`, `tailwind-merge`. Brings tsup `external` config in line with `package.json`.
- **Color tokens migrated to OKLCH** for perceptual uniformity across themes.
- **Dark-mode muted-text contrast** improved to meet WCAG AA in every theme × mode combination.
- **`Dialog.Header` / `Dialog.Footer`**: removed unused `position` and `asChild` props.
- **`Tooltip.Content`**: removed unused `variant` prop.
- **`Sonner` toast styling** now composes via class merging instead of `!important`.

### Migration

- Bumping from `0.1.x` to `0.2.x` requires installing the moved peer dependencies if they're not already in your tree:
  ```sh
  pnpm add @radix-ui/react-accordion @radix-ui/react-avatar @radix-ui/react-checkbox \
    @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-label \
    @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group \
    @radix-ui/react-select @radix-ui/react-slider @radix-ui/react-slot \
    @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toggle \
    @radix-ui/react-toggle-group @radix-ui/react-tooltip @radix-ui/react-visually-hidden \
    class-variance-authority clsx lucide-react sonner tailwind-merge
  ```
- Add the styles import once near app root:
  ```ts
  import "@voidui/components/styles.css";
  ```

## 0.1.0

First publishable cut.

### Added

- 29 components across form, display, feedback, layout, and overlay categories: Accordion, Alert, Avatar, Badge, BasicCard, Breadcrumb, Button, Card, Checkbox, CommandDisplay, Dialog, IconButton, Input, Label, Login, Menu, Popover, ProductCard, Progress, Radio, Select, Slider, Sonner, Switch, Tab, Table, Text, Textarea, Toggle, ToggleGroup, Tooltip.
- 8 themes × light/dark token sets driven by `data-theme` + `data-mode` on `<html>`: neobrutal, swiss, editorial, stripe, hanko, terra, cyber, milktea.
- Bilingual CJK font stacks (Inter · JetBrains Mono · Fraunces · IBM Plex Mono · Noto Sans SC · Noto Serif SC) per theme.
- Dot-API back-compat aliases (`Alert.Title`, `Breadcrumb.List`, `Dialog.Content`, `Avatar.Image`, `Menu.Trigger`, `Popover.Content`, `Select.Item`, `Tooltip.Content`, `RadioGroup.Item`, `Accordion.Item`) alongside the flat named exports, so v1 call sites keep compiling.
- v1-legacy props on Checkbox / Radio / Tooltip / DialogHeader / DialogFooter accepted and ignored, so v1 preview callers type-check during migration.

### Package

- `@voidui/components` published as dual-format (ESM + CJS) with `.d.ts` / `.d.cts` emitted by tsup.
- Every bundle ships `"use client";` at the top so Next.js App Router consumers can import directly from server components.
- `sideEffects: false` for tree-shakeable consumption.
- `publint` green.
