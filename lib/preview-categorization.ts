import React from "react";
import { ComponentCategory } from "./component-categorization";

// Interface for preview component information
export interface PreviewComponentInfo {
  name: string;
  description: string;
  category: ComponentCategory;
  baseComponent: string;
  variant: string;
  component: React.ComponentType<any>;
}

// Interface for demo sections
export interface DemoSection {
  title: string;
  description: string;
  demos: PreviewComponentInfo[];
}

// Preview component to base component mapping
export const previewToBaseComponentMap: Record<string, string> = {
  // Accordion previews
  "accordion-style-default": "Accordion",

  // Alert previews
  "alert-style-all-status": "Alert",
  "alert-style-default": "Alert",
  "alert-style-solid": "Alert",
  "alert-style-with-icon": "Alert",

  // Avatar previews
  "avatar-style-circle-fallbacks": "Avatar",
  "avatar-style-circle-sizes": "Avatar",
  "avatar-style-circle": "Avatar",

  // Badge previews
  "badge-style-default": "Badge",
  "badge-style-rounded": "Badge",
  "badge-style-sizes": "Badge",
  "badge-style-variants": "Badge",

  // Breadcrumb previews
  "breadcrumb-custom-separator": "Breadcrumb",
  "breadcrumb-link-component": "Breadcrumb",
  "breadcrumb-style-collapsed": "Breadcrumb",
  "breadcrumb-style-default": "Breadcrumb",

  // Button previews
  "button-style-default": "Button",
  "button-style-icon": "Button",
  "button-style-link": "Button",
  "button-style-outline": "Button",
  "button-style-secondary": "Button",
  "button-style-with-icon": "Button",

  // Card previews
  "card-style-commerce": "Card",
  "card-style-default": "Card",
  "card-style-testimonial": "Card",

  // Checkbox previews
  "checkbox-style-default": "Checkbox",
  "checkbox-style-sizes": "Checkbox",
  "checkbox-style-variants": "Checkbox",

  // Dialog previews
  "dialog-style-default": "Dialog",
  "dialog-style-width-variant": "Dialog",
  "dialog-style-with-footer": "Dialog",
  "dialog-style-with-form": "Dialog",

  // Input previews
  "input-style-default": "Input",
  "input-style-error": "Input",
  "input-style-with-label": "Input",

  // Label previews
  "label-style-default": "Label",
  "label": "Label",

  // Menu previews
  "menu-style-default": "Menu",

  // Popover previews
  "popover-style-default-shadow": "Popover",
  "popover-style-default": "Popover",

  // Progress previews
  "progress-style-default": "Progress",

  // Radio previews
  "radio-style-default": "Radio",
  "radio-style-sizes": "Radio",
  "radio-style-variants": "Radio",

  // Select previews
  "select-style-default": "Select",

  // Slider previews
  "slider-style-default": "Slider",

  // Sonner previews
  "sonner-style-colored-status": "Sonner",
  "sonner-style-default": "Sonner",
  "sonner-style-error": "Sonner",
  "sonner-style-status": "Sonner",

  // Switch previews
  "switch-style-default": "Switch",
  "switch-style-disabled": "Switch",

  // Tab previews
  "tab-style-default": "Tab",

  // Table previews
  "table-style-default": "Table",
  "table-with-checkbox": "Table",
  "table-with-sticky-header": "Table",

  // Text previews
  "text-headings": "Text",
  "typography-p": "Text",

  // Textarea previews
  "textarea-style-default": "Textarea",

  // Toggle Group previews
  "toggle-group-style-default": "ToggleGroup",
  "toggle-group-style-outline-muted": "ToggleGroup",
  "toggle-group-style-outlined": "ToggleGroup",
  "toggle-group-style-solid": "ToggleGroup",

  // Toggle previews
  "toggle-style-default": "Toggle",
  "toggle-style-outline-muted": "Toggle",
  "toggle-style-outlined": "Toggle",
  "toggle-style-solid": "Toggle",

  // Tooltip previews
  "tooltip-style-default": "Tooltip",
  "tooltip-style-primary": "Tooltip",
  "tooltip-style-solid": "Tooltip",
};

// Preview component descriptions
export const previewDescriptions: Record<string, string> = {
  // Accordion
  "accordion-style-default": "Default accordion with collapsible sections",

  // Alert
  "alert-style-all-status": "Alert showing all status variants",
  "alert-style-default": "Basic alert component",
  "alert-style-solid": "Solid background alert variant",
  "alert-style-with-icon": "Alert with icon indicators",

  // Avatar
  "avatar-style-circle-fallbacks": "Avatar with fallback initials",
  "avatar-style-circle-sizes": "Avatar in different sizes",
  "avatar-style-circle": "Basic circular avatar",

  // Badge
  "badge-style-default": "Default badge component",
  "badge-style-rounded": "Rounded badge variant",
  "badge-style-sizes": "Badge in different sizes",
  "badge-style-variants": "Badge color and style variants",

  // Breadcrumb
  "breadcrumb-custom-separator": "Breadcrumb with custom separators",
  "breadcrumb-link-component": "Breadcrumb with link components",
  "breadcrumb-style-collapsed": "Collapsed breadcrumb navigation",
  "breadcrumb-style-default": "Default breadcrumb navigation",

  // Button
  "button-style-default": "Default button styles",
  "button-style-icon": "Icon-only button variant",
  "button-style-link": "Link-styled button",
  "button-style-outline": "Outline button variant",
  "button-style-secondary": "Secondary button style",
  "button-style-with-icon": "Button with icon elements",

  // Card
  "card-style-commerce": "Commerce/product card layout",
  "card-style-default": "Default card component",
  "card-style-testimonial": "Testimonial card layout",

  // Checkbox
  "checkbox-style-default": "Default checkbox component",
  "checkbox-style-sizes": "Checkbox in different sizes",
  "checkbox-style-variants": "Checkbox style variants",

  // Dialog
  "dialog-style-default": "Basic modal dialog",
  "dialog-style-width-variant": "Dialog with width variants",
  "dialog-style-with-footer": "Dialog with footer actions",
  "dialog-style-with-form": "Dialog containing form elements",

  // Input
  "input-style-default": "Default text input field",
  "input-style-error": "Input with error state",
  "input-style-with-label": "Input with label component",

  // Label
  "label-style-default": "Default label component",
  "label": "Basic label element",

  // Menu
  "menu-style-default": "Default dropdown menu",

  // Popover
  "popover-style-default-shadow": "Popover with shadow styling",
  "popover-style-default": "Default popover component",

  // Progress
  "progress-style-default": "Default progress bar",

  // Radio
  "radio-style-default": "Default radio button",
  "radio-style-sizes": "Radio button sizes",
  "radio-style-variants": "Radio button variants",

  // Select
  "select-style-default": "Default select dropdown",

  // Slider
  "slider-style-default": "Default range slider",

  // Sonner
  "sonner-style-colored-status": "Colored status toast notifications",
  "sonner-style-default": "Default toast notifications",
  "sonner-style-error": "Error toast notifications",
  "sonner-style-status": "Status toast notifications",

  // Switch
  "switch-style-default": "Default toggle switch",
  "switch-style-disabled": "Disabled switch state",

  // Tab
  "tab-style-default": "Default tabbed interface",

  // Table
  "table-style-default": "Default data table",
  "table-with-checkbox": "Table with row selection",
  "table-with-sticky-header": "Table with sticky header",

  // Text
  "text-headings": "Typography heading styles",
  "typography-p": "Paragraph typography",

  // Textarea
  "textarea-style-default": "Default textarea input",

  // Toggle Group
  "toggle-group-style-default": "Default toggle group",
  "toggle-group-style-outline-muted": "Muted outline toggle group",
  "toggle-group-style-outlined": "Outlined toggle group",
  "toggle-group-style-solid": "Solid toggle group variant",

  // Toggle
  "toggle-style-default": "Default toggle button",
  "toggle-style-outline-muted": "Muted outline toggle",
  "toggle-style-outlined": "Outlined toggle button",
  "toggle-style-solid": "Solid toggle button",

  // Tooltip
  "tooltip-style-default": "Default tooltip",
  "tooltip-style-primary": "Primary styled tooltip",
  "tooltip-style-solid": "Solid background tooltip",
};

// Variant names for preview components
export const previewVariantNames: Record<string, string> = {
  // Accordion
  "accordion-style-default": "Default",

  // Alert
  "alert-style-all-status": "All Status",
  "alert-style-default": "Default",
  "alert-style-solid": "Solid",
  "alert-style-with-icon": "With Icon",

  // Avatar
  "avatar-style-circle-fallbacks": "With Fallbacks",
  "avatar-style-circle-sizes": "Different Sizes",
  "avatar-style-circle": "Circle",

  // Badge
  "badge-style-default": "Default",
  "badge-style-rounded": "Rounded",
  "badge-style-sizes": "Sizes",
  "badge-style-variants": "Variants",

  // Breadcrumb
  "breadcrumb-custom-separator": "Custom Separator",
  "breadcrumb-link-component": "Link Component",
  "breadcrumb-style-collapsed": "Collapsed",
  "breadcrumb-style-default": "Default",

  // Button
  "button-style-default": "Default",
  "button-style-icon": "Icon Only",
  "button-style-link": "Link Style",
  "button-style-outline": "Outline",
  "button-style-secondary": "Secondary",
  "button-style-with-icon": "With Icon",

  // Card
  "card-style-commerce": "Commerce",
  "card-style-default": "Default",
  "card-style-testimonial": "Testimonial",

  // Checkbox
  "checkbox-style-default": "Default",
  "checkbox-style-sizes": "Sizes",
  "checkbox-style-variants": "Variants",

  // Dialog
  "dialog-style-default": "Default",
  "dialog-style-width-variant": "Width Variant",
  "dialog-style-with-footer": "With Footer",
  "dialog-style-with-form": "With Form",

  // Input
  "input-style-default": "Default",
  "input-style-error": "Error State",
  "input-style-with-label": "With Label",

  // Label
  "label-style-default": "Default",
  "label": "Basic",

  // Menu
  "menu-style-default": "Default",

  // Popover
  "popover-style-default-shadow": "With Shadow",
  "popover-style-default": "Default",

  // Progress
  "progress-style-default": "Default",

  // Radio
  "radio-style-default": "Default",
  "radio-style-sizes": "Sizes",
  "radio-style-variants": "Variants",

  // Select
  "select-style-default": "Default",

  // Slider
  "slider-style-default": "Default",

  // Sonner
  "sonner-style-colored-status": "Colored Status",
  "sonner-style-default": "Default",
  "sonner-style-error": "Error",
  "sonner-style-status": "Status",

  // Switch
  "switch-style-default": "Default",
  "switch-style-disabled": "Disabled",

  // Tab
  "tab-style-default": "Default",

  // Table
  "table-style-default": "Default",
  "table-with-checkbox": "With Checkbox",
  "table-with-sticky-header": "Sticky Header",

  // Text
  "text-headings": "Headings",
  "typography-p": "Paragraph",

  // Textarea
  "textarea-style-default": "Default",

  // Toggle Group
  "toggle-group-style-default": "Default",
  "toggle-group-style-outline-muted": "Outline Muted",
  "toggle-group-style-outlined": "Outlined",
  "toggle-group-style-solid": "Solid",

  // Toggle
  "toggle-style-default": "Default",
  "toggle-style-outline-muted": "Outline Muted",
  "toggle-style-outlined": "Outlined",
  "toggle-style-solid": "Solid",

  // Tooltip
  "tooltip-style-default": "Default",
  "tooltip-style-primary": "Primary",
  "tooltip-style-solid": "Solid",
};

/**
 * Get base component name from preview component name
 */
export function getBaseComponent(previewName: string): string {
  return previewToBaseComponentMap[previewName] || "Unknown";
}

/**
 * Get preview component description
 */
export function getPreviewDescription(previewName: string): string {
  return previewDescriptions[previewName] || `${previewName} preview`;
}

/**
 * Get preview variant name
 */
export function getPreviewVariant(previewName: string): string {
  return previewVariantNames[previewName] || "Default";
}

/**
 * Get component category from base component
 */
export function getPreviewCategory(previewName: string): ComponentCategory {
  const baseComponent = getBaseComponent(previewName);
  
  // Map base components to categories
  const categoryMap: Record<string, ComponentCategory> = {
    // Form Components
    "Button": ComponentCategory.FORM,
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
    "Progress": ComponentCategory.DISPLAY,

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
  };

  return categoryMap[baseComponent] || ComponentCategory.DISPLAY;
}

/**
 * Create PreviewComponentInfo object
 */
export function createPreviewComponentInfo(
  previewName: string,
  component: React.ComponentType<any>
): PreviewComponentInfo {
  return {
    name: getPreviewVariant(previewName),
    description: getPreviewDescription(previewName),
    category: getPreviewCategory(previewName),
    baseComponent: getBaseComponent(previewName),
    variant: getPreviewVariant(previewName),
    component,
  };
}

/**
 * Group preview components by base component and category
 */
export function groupPreviewsByCategory(previews: PreviewComponentInfo[]): DemoSection[] {
  // First group by base component
  const groupedByComponent = previews.reduce((acc, preview) => {
    const key = preview.baseComponent;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(preview);
    return acc;
  }, {} as Record<string, PreviewComponentInfo[]>);

  // Then group by category
  const groupedByCategory = Object.entries(groupedByComponent).reduce((acc, [baseComponent, componentPreviews]) => {
    const category = componentPreviews[0].category;
    if (!acc[category]) {
      acc[category] = {};
    }
    acc[category][baseComponent] = componentPreviews.sort((a, b) => a.name.localeCompare(b.name));
    return acc;
  }, {} as Record<ComponentCategory, Record<string, PreviewComponentInfo[]>>);

  // Create sections
  const sections: DemoSection[] = [];

  if (groupedByCategory[ComponentCategory.FORM]) {
    const formDemos = Object.values(groupedByCategory[ComponentCategory.FORM]).flat();
    sections.push({
      title: ComponentCategory.FORM,
      description: "Interactive form elements with various styles and states",
      demos: formDemos,
    });
  }

  if (groupedByCategory[ComponentCategory.DISPLAY]) {
    const displayDemos = Object.values(groupedByCategory[ComponentCategory.DISPLAY]).flat();
    sections.push({
      title: ComponentCategory.DISPLAY,
      description: "Visual components for displaying content with different variations",
      demos: displayDemos,
    });
  }

  if (groupedByCategory[ComponentCategory.NAVIGATION]) {
    const navDemos = Object.values(groupedByCategory[ComponentCategory.NAVIGATION]).flat();
    sections.push({
      title: ComponentCategory.NAVIGATION,
      description: "Navigation components with interactive demonstrations",
      demos: navDemos,
    });
  }

  if (groupedByCategory[ComponentCategory.INTERACTIVE]) {
    const interactiveDemos = Object.values(groupedByCategory[ComponentCategory.INTERACTIVE]).flat();
    sections.push({
      title: ComponentCategory.INTERACTIVE,
      description: "Interactive components showcasing user engagement patterns",
      demos: interactiveDemos,
    });
  }

  if (groupedByCategory[ComponentCategory.DATA]) {
    const dataDemos = Object.values(groupedByCategory[ComponentCategory.DATA]).flat();
    sections.push({
      title: ComponentCategory.DATA,
      description: "Data display components with various layouts and features",
      demos: dataDemos,
    });
  }

  return sections;
}