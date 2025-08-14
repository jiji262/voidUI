# RetroUI Components

A collection of retro-styled React components for modern web applications.

## Installation

```bash
npm install @retroui/components
# or
yarn add @retroui/components
# or
pnpm add @retroui/components
```

## Prerequisites

RetroUI components are built with TailwindCSS. You need to have TailwindCSS installed and configured in your project.

### 1. Install TailwindCSS

```bash
npm install -D tailwindcss
```

### 2. Configure TailwindCSS

Add RetroUI components to your `tailwind.config.js`:

```js
module.exports = {
  content: [
    // ... your other content paths
    './node_modules/@retroui/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Add RetroUI theme extensions if needed
    },
  },
  plugins: [],
}
```

### 3. Import styles

Make sure to import TailwindCSS in your global CSS file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Usage

```jsx
import { Button, Card, Input } from '@retroui/components';

function App() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Welcome to RetroUI</Card.Title>
      </Card.Header>
      <Card.Content>
        <Input placeholder="Enter your name" />
        <Button>Submit</Button>
      </Card.Content>
    </Card>
  );
}
```

## Available Components

### Core Components
- **Button** - Various button styles with retro aesthetics
- **IconButton** - Icon-based buttons
- **Toggle** - Toggle switches
- **ToggleGroup** - Grouped toggle buttons

### Form Components
- **Input** - Text input fields
- **Textarea** - Multi-line text input
- **Checkbox** - Checkbox inputs
- **Radio** - Radio button inputs
- **Select** - Dropdown select menus
- **Switch** - Toggle switches
- **Slider** - Range sliders
- **Label** - Form labels

### Layout Components
- **Card** - Content containers
- **Accordion** - Collapsible content panels
- **Tab** - Tabbed interfaces
- **Table** - Data tables
- **Breadcrumb** - Navigation breadcrumbs

### Feedback Components
- **Alert** - Alert messages
- **Badge** - Status badges
- **Progress** - Progress bars
- **Sonner** - Toast notifications
- **Tooltip** - Hover tooltips

### Overlay Components
- **Dialog** - Modal dialogs
- **Menu** - Dropdown menus
- **Popover** - Popover content

### Display Components
- **Avatar** - User avatars
- **Text** - Typography components
- **CommandDisplay** - Code/command display

### Example Components
- **BasicCard** - Pre-built card example
- **ProductCard** - E-commerce product card
- **Login** - Login form component

## Documentation

For full documentation and examples, visit [RetroUI Documentation](https://retroui.dev)

## License

MIT © RetroUI Team