# Implementation Plan

- [x] 1. Remove Contentlayer dependencies from package.json

  - Remove contentlayer, next-contentlayer, rehype-pretty-code, rehype-slug, unist-builder, unist-util-visit packages
  - Update package.json to remove these dependencies
  - _Requirements: 2.1, 2.2_

- [x] 2. Delete Contentlayer configuration and generated files

  - Delete contentlayer.config.ts file
  - Remove .contentlayer directory if it exists
  - Delete types/unist.ts file if it exists
  - _Requirements: 2.2, 2.3_

- [x] 3. Update Next.js configuration

  - Remove withContentlayer wrapper from next.config.mjs
  - Simplify Next.js configuration to basic setup
  - _Requirements: 5.3_

- [x] 4. Update TypeScript configuration

  - Remove contentlayer/generated path mapping from tsconfig.json
  - Clean up TypeScript paths configuration
  - _Requirements: 2.2_

- [x] 5. Remove documentation and blog routes

  - Delete app/(docs) directory entirely
  - Delete app/(marketing)/blogs directory
  - Remove sitemap.ts file (depends on contentlayer)
  - _Requirements: 4.1, 4.2_

- [x] 6. Remove MDX and content-related components

  - Delete components/MDX.tsx file
  - Delete components/ComponentShowcase.tsx if it depends on contentlayer
  - Remove any other content-related utility components
  - _Requirements: 4.2_

- [x] 7. Update navigation configuration

  - Modify config/navigation.ts to remove docs and blogs links
  - Simplify navigation to focus on component showcase
  - Update TopNav component to use new navigation structure
  - _Requirements: 4.3_

- [x] 8. Create new main showcase page

  - Replace app/(marketing)/page.tsx with comprehensive component showcase
  - Import and display all major components with their variants
  - Create organized sections for different component types
  - _Requirements: 3.1, 3.2_

- [x] 9. Enhance component demonstration sections

  - Create form components section (Button, Input, Checkbox, Select, Switch)
  - Create display components section (Badge, Avatar, Card, Alert)
  - Create navigation components section (Tabs, Accordion, Menu)
  - Create data components section (Table variants)
  - _Requirements: 3.2, 3.3_

- [x] 10. Integrate existing preview components

  - Import and use existing components from /preview directory
  - Ensure all preview components work without contentlayer dependencies
  - Organize preview components into logical showcase sections
  - _Requirements: 3.2_

- [x] 11. Update layout and routing structure

  - Simplify app/layout.tsx to remove unnecessary complexity
  - Update root page routing to point to component showcase
  - Remove any contentlayer-dependent metadata or sitemap generation
  - _Requirements: 1.1, 5.1_

- [x] 12. Test and verify build process
  - Run npm run dev to ensure development server starts without errors
  - Run npm run build to verify production build works
  - Test all component interactions and demonstrations
  - _Requirements: 1.1, 1.2, 5.1, 5.2_
