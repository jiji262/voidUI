import React from "react";

// Component categories as defined in the design
export enum ComponentCategory {
  FORM = "Form Components",
  DISPLAY = "Display Components",
  NAVIGATION = "Navigation Components", 
  INTERACTIVE = "Interactive Components",
  DATA = "Data Components"
}

// Interface for component information
export interface ComponentInfo {
  name: string;
  description: string;
  category: ComponentCategory;
  component: React.ComponentType<any>;
  usage?: string;
}

// Interface for component sections
export interface ComponentSection {
  title: string;
  description: string;
  components: ComponentInfo[];
}

// Component categorization mapping
export const componentCategoryMap: Record<string, ComponentCategory> = {
  // Form Components
  "Button": ComponentCategory.FORM,
  "IconButton": ComponentCategory.FORM,
  "Input": ComponentCategory.FORM,
  "Textarea": ComponentCategory.FORM,
  "Checkbox": ComponentCategory.FORM,
  "Radio": ComponentCategory.FORM,
  "Select": ComponentCategory.FORM,
  "Switch": ComponentCategory.FORM,
  "Slider": ComponentCategory.FORM,
  "Label": ComponentCategory.FORM,

  // Display Components
  "Text": ComponentCategory.DISPLAY,
  "Badge": ComponentCategory.DISPLAY,
  "Avatar": ComponentCategory.DISPLAY,
  "Alert": ComponentCategory.DISPLAY,
  "Card": ComponentCategory.DISPLAY,
  "BasicCard": ComponentCategory.DISPLAY,
  "ProductCard": ComponentCategory.DISPLAY,
  "Progress": ComponentCategory.DISPLAY,
  "CommandDisplay": ComponentCategory.DISPLAY,

  // Navigation Components
  "Breadcrumb": ComponentCategory.NAVIGATION,
  "Menu": ComponentCategory.NAVIGATION,
  "Tab": ComponentCategory.NAVIGATION,
  "Toggle": ComponentCategory.NAVIGATION,
  "ToggleGroup": ComponentCategory.NAVIGATION,

  // Interactive Components
  "Dialog": ComponentCategory.INTERACTIVE,
  "Popover": ComponentCategory.INTERACTIVE,
  "Tooltip": ComponentCategory.INTERACTIVE,
  "Accordion": ComponentCategory.INTERACTIVE,

  // Data Components
  "Table": ComponentCategory.DATA,
  "Sonner": ComponentCategory.DATA,
  "Login": ComponentCategory.DATA, // Special form component
};

// Component descriptions
export const componentDescriptions: Record<string, string> = {
  "Button": "Interactive button components with various styles and sizes",
  "IconButton": "Compact button components with icon-only display",
  "Input": "Text input fields for user data entry",
  "Textarea": "Multi-line text input areas for longer content",
  "Checkbox": "Selection controls for multiple choice options",
  "Radio": "Selection controls for single choice from multiple options",
  "Select": "Dropdown selection menus with multiple options",
  "Switch": "Toggle switches for binary on/off states",
  "Slider": "Range input controls for selecting values within a range",
  "Label": "Text labels for form elements and content",
  
  "Text": "Typography components for headings, paragraphs, and text content",
  "Badge": "Status indicators and labels for highlighting information",
  "Avatar": "User profile images and placeholder representations",
  "Alert": "Notification and status messages for user feedback",
  "Card": "Container components for grouping related content",
  "BasicCard": "Simple card containers with minimal styling",
  "ProductCard": "Specialized cards for product displays",
  "Progress": "Progress indicators for loading states and completion",
  "CommandDisplay": "Components for displaying command-line interfaces",
  
  "Breadcrumb": "Navigation breadcrumb trails showing page hierarchy",
  "Menu": "Dropdown and context menus for navigation options",
  "Tab": "Tabbed navigation interfaces for content organization",
  "Toggle": "Toggle buttons for switching between states",
  "ToggleGroup": "Grouped toggle controls for related options",
  
  "Dialog": "Modal dialogs and overlays for focused interactions",
  "Popover": "Floating content containers triggered by user actions",
  "Tooltip": "Contextual information displayed on hover or focus",
  "Accordion": "Collapsible content sections for space-efficient layouts",
  
  "Table": "Data tables for displaying structured information",
  "Sonner": "Toast notification system for temporary messages",
  "Login": "Authentication forms and login interfaces",
};

// Usage examples for components
export const componentUsageExamples: Record<string, string> = {
  "Button": `<Button variant="default" size="md">Click me</Button>`,
  "IconButton": `<IconButton><Icon /></IconButton>`,
  "Input": `<Input placeholder="Enter text..." />`,
  "Textarea": `<Textarea placeholder="Enter message..." />`,
  "Checkbox": `<Checkbox>Accept terms</Checkbox>`,
  "Radio": `<Radio value="option1">Option 1</Radio>`,
  "Select": `<Select><Select.Trigger><Select.Value /></Select.Trigger></Select>`,
  "Switch": `<Switch />`,
  "Slider": `<Slider defaultValue={[50]} max={100} step={1} />`,
  "Label": `<Label>Field Label</Label>`,
  
  "Text": `<Text as="h1">Heading</Text>`,
  "Badge": `<Badge variant="default">New</Badge>`,
  "Avatar": `<Avatar src="/avatar.jpg" alt="User" />`,
  "Alert": `<Alert>Important message</Alert>`,
  "Card": `<Card><Card.Header><Card.Title>Title</Card.Title></Card.Header></Card>`,
  "BasicCard": `<BasicCard>Content</BasicCard>`,
  "ProductCard": `<ProductCard title="Product" price="$99" />`,
  "Progress": `<Progress value={60} />`,
  "CommandDisplay": `<CommandDisplay command="npm install" />`,
  
  "Breadcrumb": `<Breadcrumb><Breadcrumb.Item>Home</Breadcrumb.Item></Breadcrumb>`,
  "Menu": `<Menu><Menu.Trigger>Menu</Menu.Trigger><Menu.Content>Items</Menu.Content></Menu>`,
  "Tab": `<Tab value="tab1">Tab Content</Tab>`,
  "Toggle": `<Toggle>Toggle</Toggle>`,
  "ToggleGroup": `<ToggleGroup><Toggle>Option 1</Toggle></ToggleGroup>`,
  
  "Dialog": `<Dialog><Dialog.Trigger>Open</Dialog.Trigger><Dialog.Content>Content</Dialog.Content></Dialog>`,
  "Popover": `<Popover><Popover.Trigger>Trigger</Popover.Trigger><Popover.Content>Content</Popover.Content></Popover>`,
  "Tooltip": `<Tooltip><Tooltip.Trigger>Hover me</Tooltip.Trigger><Tooltip.Content>Tooltip</Tooltip.Content></Tooltip>`,
  "Accordion": `<Accordion><Accordion.Item>Item</Accordion.Item></Accordion>`,
  
  "Table": `<Table><Table.Header><Table.Row><Table.Head>Header</Table.Head></Table.Row></Table.Header></Table>`,
  "Sonner": `<Sonner />`,
  "Login": `<Login onSubmit={handleLogin} />`,
};

/**
 * Get component category by component name
 */
export function getComponentCategory(componentName: string): ComponentCategory {
  return componentCategoryMap[componentName] || ComponentCategory.DISPLAY;
}

/**
 * Get component description by component name
 */
export function getComponentDescription(componentName: string): string {
  return componentDescriptions[componentName] || `${componentName} component`;
}

/**
 * Get component usage example by component name
 */
export function getComponentUsage(componentName: string): string {
  return componentUsageExamples[componentName] || `<${componentName} />`;
}

/**
 * Create ComponentInfo object for a given component
 */
export function createComponentInfo(
  componentName: string,
  component: React.ComponentType<any>
): ComponentInfo {
  return {
    name: componentName,
    description: getComponentDescription(componentName),
    category: getComponentCategory(componentName),
    component,
    usage: getComponentUsage(componentName),
  };
}

/**
 * Group components by category
 */
export function groupComponentsByCategory(components: ComponentInfo[]): ComponentSection[] {
  const grouped = components.reduce((acc, component) => {
    const category = component.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(component);
    return acc;
  }, {} as Record<ComponentCategory, ComponentInfo[]>);

  // Create sections with descriptions
  const sections: ComponentSection[] = [];
  
  if (grouped[ComponentCategory.FORM]) {
    sections.push({
      title: ComponentCategory.FORM,
      description: "Interactive form elements for user input and data collection",
      components: grouped[ComponentCategory.FORM].sort((a, b) => a.name.localeCompare(b.name)),
    });
  }

  if (grouped[ComponentCategory.DISPLAY]) {
    sections.push({
      title: ComponentCategory.DISPLAY,
      description: "Visual components for displaying content and information",
      components: grouped[ComponentCategory.DISPLAY].sort((a, b) => a.name.localeCompare(b.name)),
    });
  }

  if (grouped[ComponentCategory.NAVIGATION]) {
    sections.push({
      title: ComponentCategory.NAVIGATION,
      description: "Navigation components for user interface organization",
      components: grouped[ComponentCategory.NAVIGATION].sort((a, b) => a.name.localeCompare(b.name)),
    });
  }

  if (grouped[ComponentCategory.INTERACTIVE]) {
    sections.push({
      title: ComponentCategory.INTERACTIVE,
      description: "Interactive components for user engagement and feedback",
      components: grouped[ComponentCategory.INTERACTIVE].sort((a, b) => a.name.localeCompare(b.name)),
    });
  }

  if (grouped[ComponentCategory.DATA]) {
    sections.push({
      title: ComponentCategory.DATA,
      description: "Components for data display and management",
      components: grouped[ComponentCategory.DATA].sort((a, b) => a.name.localeCompare(b.name)),
    });
  }

  return sections;
}