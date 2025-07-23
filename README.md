# RetroUI Component Showcase

RetroUI is a retro-styled Tailwind CSS component library for modern web apps. This showcase demonstrates all available components in an interactive format.

![RetroUI banner](./public/banner.png)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📱 Pages

- **Home (`/`)** - Main showcase with all components displayed
- **Components (`/components`)** - Detailed component gallery organized by category
- **Demo (`/demo`)** - Interactive playground for testing components

## 🎨 Featured Components

### Form Components
- Buttons (default, outline, with icons)
- Input fields and textareas
- Checkboxes with variants
- Radio buttons
- Select dropdowns
- Switches and toggles
- Sliders

### Display Components
- Badges and status indicators
- Avatars with different sizes
- Cards and testimonials
- Alerts and notifications
- Progress bars
- Tooltips

### Navigation Components
- Tabs interface
- Accordion sections
- Dropdown menus
- Breadcrumb navigation
- Toggle groups

### Data Components
- Tables (default, with checkboxes, sticky headers)
- Typography and text styles

### Interactive Components
- Dialogs and modals
- Popovers
- All form controls with live interaction

## 🛠 Development

This project has been optimized for component showcase:

- ✅ No content management dependencies
- ✅ Fast development and build times
- ✅ All components displayed on homepage
- ✅ Interactive component playground
- ✅ Organized component gallery
- ✅ Responsive design

## 📦 Component Usage

All components are available in the `/components/retroui` directory and can be imported directly:

```tsx
import { Button, Card, Badge } from "@/components/retroui";
```

## 🎯 Project Structure

```
app/
├── page.tsx              # Main showcase homepage
├── components/page.tsx   # Detailed component gallery
├── demo/page.tsx        # Interactive playground
└── layout.tsx           # Root layout

components/
├── retroui/             # All UI components
└── preview/             # Component examples

preview/components/      # Individual component demos
```
