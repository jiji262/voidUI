# Changesets

This folder captures intent-to-release commits for `@voidui/components`. Every user-facing change adds one `.md` file here describing the bump (`patch` | `minor` | `major`) and a short summary.

## Add a changeset

```bash
pnpm changeset
```

The CLI asks for bump type + description, then writes a new file here (for example `.changeset/strong-bottles-fly.md`). Commit that file alongside your code change.

## Release flow

```bash
# When ready to cut a release:
pnpm changeset version   # consumes pending changesets, bumps version, updates CHANGELOG.md
pnpm install             # refresh lockfile after version bump
pnpm changeset publish   # builds + publishes to npm (runs prepublishOnly which calls build:lib + publint)
```

Release commits are tagged `@voidui/components@<version>` and pushed.

See the [Changesets docs](https://github.com/changesets/changesets) for full reference.
