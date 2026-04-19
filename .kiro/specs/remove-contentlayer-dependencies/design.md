# Design Document

## Overview

This design outlines the transformation of the voidUI project from a documentation-heavy application with Contentlayer dependencies into a streamlined component showcase application. The primary goal is to remove all content management complexity while preserving and enhancing the component demonstration capabilities.

## Architecture

### Current Architecture Issues
- Heavy dependency on Contentlayer for MDX processing
- Complex routing structure with docs and blogs
- MDX components and content generation overhead
- Multiple route groups causing navigation complexity

### Target Architecture
- Single-page application focused on component showcase
- Direct component imports without content layer abstraction
- Simplified routing structure
- Clean separation between component library and showcase application

## Components and Interfaces

### Core Changes Required

#### 1. Package Dependencies
- **Remove**: `contentlayer`, `next-contentlayer`, `rehype-pretty-code`, `rehype-slug`, `unist-builder`, `unist-util-visit`
- **Keep**: All component-related dependencies (Radix UI, class-variance-authority, etc.)
- **Modify**: Next.js configuration to remove withContentlayer wrapper

#### 2. File Structure Modifications
```
app/
├── layout.tsx (simplified)
├── page.tsx (new main showcase)
├── global.css
└── components/ (showcase specific pages)
    └── page.tsx (detailed component demos)

Remove:
├── (docs)/ (entire directory)
├── (marketing)/blogs/ (blog functionality)
├── sitemap.ts (contentlayer dependent)
└── contentlayer.config.ts
```

#### 3. Component Showcase Structure
```typescript
interface ComponentShowcaseSection {
  title: string;
  description: string;
  components: ComponentDemo[];
}

interface ComponentDemo {
  name: string;
  variants: ComponentVariant[];
  examples: ReactElement[];
}
```

### Main Showcase Page Design

#### Layout Structure
1. **Header Section**
   - voidUI branding
   - Brief description
   - GitHub link and theme toggle

2. **Component Grid**
   - Organized by component type
   - Interactive examples
   - Variant demonstrations
   - Live code previews (optional)

3. **Navigation**
   - Simplified top navigation
   - Component category filters
   - Search functionality (future enhancement)

#### Component Categories
1. **Form Components**
   - Button (variants: default, outline, link)
   - Input, Textarea
   - Checkbox (variants: default, outline, solid)
   - Select, Switch, Radio

2. **Display Components**
   - Badge (all variants)
   - Avatar (different sizes and shapes)
   - Card (various layouts)
   - Alert (different types)

3. **Navigation Components**
   - Tabs
   - Accordion
   - Menu/Dropdown

4. **Data Components**
   - Table (default, with checkbox, sticky header)
   - Progress indicators

## Data Models

### Showcase Configuration
```typescript
interface ShowcaseConfig {
  sections: ComponentSection[];
  theme: ThemeConfig;
  metadata: AppMetadata;
}

interface ComponentSection {
  id: string;
  title: string;
  description: string;
  components: ComponentConfig[];
}

interface ComponentConfig {
  name: string;
  importPath: string;
  examples: ExampleConfig[];
  props?: PropDefinition[];
}

interface ExampleConfig {
  title: string;
  description?: string;
  code: string;
  component: ReactElement;
}
```

### Static Data Structure
Instead of dynamic content from Contentlayer, use static configuration objects that define:
- Component examples and their variations
- Code snippets for each example
- Component descriptions and usage notes

## Error Handling

### Build-time Error Prevention
- Remove all contentlayer imports and references
- Update TypeScript paths to exclude contentlayer/generated
- Ensure all component imports are direct from source files

### Runtime Error Handling
- Graceful fallbacks for missing component examples
- Error boundaries around component demonstrations
- Clear error messages for development

### Development Experience
- Hot reload without contentlayer processing delays
- Faster build times without MDX compilation
- Simplified debugging without content layer abstraction

## Testing Strategy

### Component Testing
- Unit tests for all showcase components
- Visual regression tests for component examples
- Interaction tests for dynamic components

### Integration Testing
- Full page rendering tests
- Navigation flow tests
- Theme switching functionality tests

### Build Testing
- Verify successful builds without contentlayer
- Test production deployment
- Performance benchmarking

## Implementation Phases

### Phase 1: Dependency Removal
1. Remove contentlayer packages from package.json
2. Delete contentlayer.config.ts
3. Update Next.js configuration
4. Remove TypeScript path mappings for contentlayer

### Phase 2: Route Restructuring
1. Delete docs and blogs route groups
2. Create new main showcase page
3. Update navigation configuration
4. Simplify layout structure

### Phase 3: Component Showcase Implementation
1. Create comprehensive component examples
2. Implement interactive demonstrations
3. Add component variant showcases
4. Integrate existing preview components

### Phase 4: Polish and Optimization
1. Improve visual design and layout
2. Add responsive design considerations
3. Optimize performance
4. Add accessibility features

## Migration Strategy

### Preserving Existing Assets
- Keep all existing component implementations
- Preserve preview components in /preview directory
- Maintain existing styling and theme system
- Keep component library exports intact

### Content Migration
- Extract useful component examples from existing docs
- Convert MDX examples to static React components
- Preserve component usage patterns and best practices

### Backward Compatibility
- Maintain existing component API
- Keep existing CSS classes and styling
- Preserve theme system functionality