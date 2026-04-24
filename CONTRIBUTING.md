# Contributing to voidUI

Thanks for considering a contribution. This project is a public component library plus a Next.js demo / documentation site.

## Ground rules

- **Preserve the visual DNA.** voidUI ships 8 hand-tuned themes and 1.5px borders, tight type scales, offset/lifted shadows, bilingual CJK rhythm. Don't introduce token names, font stacks, or radius values outside the existing scales without a concrete reason.
- **Keep the public API minimal.** Every new component, variant, or prop adds to the surface consumers must maintain. Prefer composition of existing primitives.
- **Components stay framework-agnostic.** Files in `components/voidui/` must not import `next/*` — those imports stay in `app/` or `components/` (non-voidui).
- **Never commit without tests passing.** `pnpm typecheck && pnpm test && pnpm build:lib && pnpm publint` all have to be green.

## Repo layout

```
components/voidui/    # the library — this is what ships on npm
components/ui/        # demo-app helpers (Icon, code-block, toast, ...)
components/TopNav.tsx # demo-app chrome
components/Footer.tsx
app/                  # Next.js demo + docs site
preview/              # per-component preview variants (used by /components and /demo)
lib/                  # demo-app utilities + theme context
tests/                # vitest suite
.changeset/           # release intents
```

## Local setup

```bash
pnpm install
pnpm dev            # Next.js demo on http://localhost:3000
pnpm test           # vitest unit suite
pnpm build:lib      # tsup → dist/
pnpm build          # next build (static export if GITHUB_PAGES=true)
```

## Proposing a change

1. Open an issue first for anything beyond a tiny fix. Describe the problem in terms of user-visible behavior, not implementation.
2. When the direction is clear, send a PR. Keep each PR focused on one logical change.
3. Include a changeset describing your change (`pnpm changeset`). If the change is user-visible in the library, pick the right bump:
   - `patch` — bug fix or doc tweak
   - `minor` — new component, new prop, new variant (backwards-compatible)
   - `major` — removal or breaking change to the public API
4. Make sure `pnpm run typecheck && pnpm run test && pnpm run build:lib && pnpm run publint` all pass.

## Adding a new component

1. Create `components/voidui/YourThing.tsx` using Radix (if interactive) + `cn` + `cva` where variant logic applies.
2. Export from `components/voidui/index.ts`.
3. Add a smoke test to `tests/smoke.test.tsx` (render + assert visible text / a11y name).
4. Add a preview variant in `preview/components/` (so `/components` and `/demo` pages show it).
5. Add a changeset (`pnpm changeset`) with a `minor` bump.

## Adding a new theme

1. Add the token block (`[data-theme="yourid"] { --bg: …; --primary: …; … }`) to `app/global.css`.
2. Register the theme id + metadata in `lib/theme-config.ts` under `THEMES` + `THEME_META`.
3. `/themes` page and the TopNav theme switcher pick it up automatically.
4. Add a changeset (`minor`).

## Git conventions

- Conventional commit prefixes encouraged but not mandatory: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`, `ci:`.
- Do **not** add `Co-Authored-By: Claude …` or `🤖 Generated with Claude Code` trailers. The author field is for humans.
- Keep commits focused; prefer a short series of atomic commits over one big-diff commit.

## Releasing

See `.changeset/README.md`. Maintainers run `pnpm changeset version` then `pnpm release`.
