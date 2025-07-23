# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

RetroUI is a retro-styled React component library built with TailwindCSS. It's a Next.js 14 application that serves as both a component showcase and a library of reusable UI components with a retro aesthetic.

## Common Development Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Run linting
pnpm lint
```

## Project Structure

```
app/                 # Next.js app router pages
├── page.tsx         # Homepage/landing page
├── components/      # Component gallery page
├── demo/            # Interactive playground
└── layout.tsx       # Root layout

components/          # UI components
├── retroui/         # Main component library
└── preview/         # Component examples

preview/components/  # Individual component demos
lib/                 # Utility functions and helpers
public/              # Static assets
```

## Architecture Overview

The project follows a component-driven architecture:

1. **Component Library**: Located in `components/retroui/`, contains all reusable UI components built with React and TailwindCSS
2. **Component Showcase**: Three main pages demonstrate components:
   - Homepage (`/`) - Landing page with project overview
   - Components (`/components`) - Organized gallery of all components
   - Demo (`/demo`) - Interactive playground for testing components
3. **Preview Components**: Located in `preview/components/`, these are example implementations showing how to use each component

Components use:
- TailwindCSS for styling with a retro aesthetic
- Radix UI primitives for accessibility and functionality
- Class Variance Authority (cva) for variant management
- TypeScript for type safety

## Component Development

All components are in `components/retroui/` and:
1. Use cva for variant management
2. Export both component and interface
3. Are exported through `components/retroui/index.ts`
4. Have corresponding preview examples in `preview/components/`

To add a new component:
1. Create the component in `components/retroui/`
2. Export it in `components/retroui/index.ts`
3. Create preview examples in `preview/components/`
4. Add it to the categorization in `lib/component-categorization.ts`

## Key Dependencies

- Next.js 14 with App Router
- React 18
- TailwindCSS v4
- Radix UI primitives
- Class Variance Authority
- TypeScript
- Lucide React icons