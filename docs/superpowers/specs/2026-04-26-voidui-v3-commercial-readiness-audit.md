# voidUI v3 — Commercial Readiness Audit & Remediation Plan

**Date:** 2026-04-26
**Scope:** Review uncommitted v3 design upgrade and bring the repo to commercial-grade.

---

## Context

The working tree contains a "v3 design upgrade" zip applied on top of v2:
- 30+ components rewritten under `components/voidui/`
- 19 block pages rewritten under `app/blocks/*`
- All app marketing pages rewritten
- 11 legacy `components/ui/*` and 5 `lib/*` files deleted
- New shared `components/blocks/_kit.tsx` (untracked)
- New `NEXT-SESSIONS.md`, `UPGRADE.md` session memos

Build passes (`pnpm next build`, `pnpm build:lib`, `pnpm size`). But typecheck, lint, and unit tests all fail, and the package metadata + library packaging story is inconsistent.

## Goals

1. CI green: `typecheck` + `lint` + `test` + `size` + `build:lib` all pass.
2. npm-published library actually usable by external consumers (not just inside this repo).
3. Public-facing metadata (README, package.json, CHANGELOG) consistent with what shipped.
4. No dead code / no v1-compat backwards-compatibility props that swallow inputs silently.

## Non-goals

- No new components or themes.
- No redesign of existing components or blocks.
- No API rename of public exports.
- No upgrade of Next.js / React / Tailwind versions.

---

## Findings (verified)

### Tier 1 — Build/test gates (must fix)

| # | File / area | Issue |
|---|---|---|
| 1 | `app/blocks/stats/page.tsx:29` | Unused `@ts-expect-error` directive (typecheck red) |
| 2 | 9 block pages | `react/no-unescaped-entities` errors (lint red) |
| 3 | `tests/smoke.test.tsx:87` | Asserts `Release 2.0` but `BasicCard` now renders `Release 3.0` (test red) |

### Tier 2 — Public metadata consistency

| # | File / area | Issue |
|---|---|---|
| 4 | `package.json` description | Says "8 themes × light/dark" — actual: 10 |
| 5 | `CHANGELOG.md` | Records `0.1.0 = 8 themes / 29 components` — needs `0.2.0` (or unreleased) entry for v3: 10 themes, 30 components, 19 block sets, refined tokens, motion tokens, Aurora + Mono themes |
| 6 | `README.md` | Folder map references nonexistent `delivery/` directory; install section is zip-based but the package is on npm |
| 7 | `components/blocks/_kit.tsx` | Untracked but 19 block pages depend on it |

### Tier 3 — Library packaging integrity

| # | File / area | Issue |
|---|---|---|
| 8 | `app/layout.tsx` ↔ `app/global.css` | Layout loads `JetBrains_Mono` + `Instrument_Serif` and exposes `--font-mono-loaded` / `--font-display-loaded`. `global.css` references `--font-jetbrains`, `--font-plex`, `--font-inter`, `--font-fraunces`, `--font-noto-sans-sc`, `--font-noto-serif-sc` — none of which are defined. Per-theme typography silently falls back to system fonts. |
| 9 | `dist/` | Library publishes JS only. Components depend entirely on CSS variables defined in `app/global.css`. External consumers `npm install @voidui/components` get unstyled markup. |
| 10 | `package.json` `dependencies` vs `tsup.config.ts` `external` | Radix / clsx / cva / tailwind-merge / lucide-react / sonner are in `dependencies` but marked `external` in tsup. Inconsistent — should be `peerDependencies` for headless primitive libraries. |

### Tier 4 — Code quality polish

| # | File / area | Issue |
|---|---|---|
| 11 | `components/voidui/Dialog.tsx` | `DialogHeader` / `DialogFooter` accept `position?: string` and `asChild?: boolean` and silently swallow them (v1-compat residue) |
| 12 | `components/voidui/Tooltip.tsx` | `TooltipContent` accepts `variant?: string` and silently swallows it (v1-compat residue) |
| 13 | `components/voidui/Sonner.tsx` | Heavy reliance on `!important` (`!border-success`) — works but tells the wrong story |
| 14 | `app/page.tsx` | Marketing landing is `"use client"` though the only interactive thing is `TopNav` (already client) — wastes RSC opportunity |
| 15 | `app/` | Missing `favicon.ico`, `not-found.tsx`, `robots.ts` — was deleted by the v3 zip |
| 16 | repo root | `NEXT-SESSIONS.md` and `UPGRADE.md` are in-progress session memos. Move to `docs/internal/` and gitignore future drafts. |

---

## Plan

### Phase 1 — Tier 1 (CI gates)

1. Remove the `@ts-expect-error` line in `app/blocks/stats/page.tsx:29`. `LucideIcon`-typed components don't actually need it after the v3 rewrite.
2. Escape `'` and `"` in 9 block pages — use `&apos;` / `&ldquo;` / `&rdquo;` per file.
3. Update the smoke test assertion `Release 2.0` → `Release 3.0` in `tests/smoke.test.tsx`.

### Phase 2 — Tier 2 (metadata)

4. `package.json` description: `"…with 10 themes × light/dark and bilingual CJK. Built on TailwindCSS v4 + Radix UI."`
5. `CHANGELOG.md`: bump to `## 0.2.0` (or set under `## Unreleased`) describing v3 changes.
6. `README.md`: rewrite folder map (no `delivery/`). Replace the zip install with two clear sections:
   - **Use the library** — `pnpm add @voidui/components` + `import "@voidui/components/styles.css"` + a one-liner noting that the library uses Tailwind v4's utility classes (`bg-card`, `text-foreground`, etc.) so the consumer must already have Tailwind v4 (or the equivalent CSS variables) wired up.
   - **Develop the site** — `pnpm install && pnpm dev`, mapping to the marketing site under `app/`.
7. Stage `components/blocks/_kit.tsx`.

### Phase 3 — Tier 3 (library usability)

8. **Fonts**: rewrite `app/layout.tsx` to load — via `next/font/google` —
   - JetBrains Mono → `--font-jetbrains`
   - IBM Plex Mono → `--font-plex`
   - Inter → `--font-inter`
   - Fraunces → `--font-fraunces`
   - Noto Sans SC → `--font-noto-sans-sc`
   - Noto Serif SC → `--font-noto-serif-sc`
   Drop the unused `Instrument_Serif` and the dead `--font-mono-loaded` / `--font-display-loaded` variables.
9. **CSS export**:
   - Extract the token contracts (`:root`, `[data-theme=…]`, `[data-mode=dark]` blocks, motion + radius + shadow tokens, keyframes, focus-ring) from `app/global.css` into `components/voidui/styles.css`. Keep `app/global.css` for the marketing site only — site-specific resets, fonts, utility helpers (`.btn`, `.card`, `.label`).
   - `tsup.config.ts`: add an entry / postbuild copy step so `dist/styles.css` is emitted. Add `"./styles.css": "./dist/styles.css"` to `package.json` `exports`. Add `"dist/styles.css"` to the published `files`.
   - README: instruct consumers to `import "@voidui/components/styles.css"` once near app root.
10. **Deps → peerDeps**: move `@radix-ui/*`, `clsx`, `class-variance-authority`, `lucide-react`, `sonner`, `tailwind-merge` from `dependencies` to `peerDependencies` with `^current.major` ranges, plus matching `peerDependenciesMeta` where optional. Keep `react` / `react-dom` as already configured.

### Phase 4 — Tier 4 (polish)

11. Drop `position` and `asChild` from `DialogHeader` / `DialogFooter`. They never did anything.
12. Drop `variant` from `TooltipContent`.
13. Replace `!important` modifiers in `Sonner.tsx` with normal class composition (Sonner toast root + class merging via `cn`).
14. Convert `app/page.tsx` to a server component. Inline interactive bits into a small `"use client"` wrapper if needed (the hero is static; no client-side state beyond `TopNav` which lives in `layout.tsx`).
15. Restore `app/favicon.ico` (use a generated one or pull from `public/`), `app/not-found.tsx` (minimal token-driven 404), `app/robots.ts` (sitemap + standard allow).
16. Move `NEXT-SESSIONS.md` and `UPGRADE.md` under `docs/internal/`. Add `docs/internal/` to `.gitignore` if these are session-only.

### Phase 5 — Verification

- `pnpm typecheck` → clean
- `pnpm lint` → clean
- `pnpm test` → 25/25
- `pnpm build:lib` + `pnpm size` → green, sizes within budget
- `pnpm next build` → all 28 routes still build
- Spot-check `dist/` after build: `index.js`, `index.cjs`, `index.d.ts`, `index.d.cts`, `styles.css` all present
- Visually confirm `pnpm dev` still renders themes, components, and at least one block page correctly

## Risks

- **Font loading expands network cost.** Six Google fonts on first load is non-trivial. Mitigation: use `display: "swap"` and only `subsets` actually needed (`latin` + `latin-ext`; CJK is large but used in the bilingual labels — decide whether to ship CJK at all on the marketing site or link out for CJK preview).
- **Moving radix to peerDeps is technically a breaking change** for current consumers because they would need to install them. Mitigation: bump version to `0.2.0` and document in CHANGELOG.
- **Splitting `global.css` could leak/duplicate** if the marketing site's `global.css` re-imports the library `styles.css`. Mitigation: marketing site imports the library file once, deletes those duplicated rules from its own `global.css`.

## Rollback

Single PR, single working-tree state. Revert via `git restore` if anything explodes before commit.
