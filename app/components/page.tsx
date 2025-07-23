"use client";

import React from "react";
import { Text, Card } from "@/components/retroui";

// Import all preview components
import AccordionStyleDefault from "@/preview/components/accordion-style-default";
import AlertStyleDefault from "@/preview/components/alert-style-default";
import AlertStyleSolid from "@/preview/components/alert-style-solid";
import AlertStyleWithIcon from "@/preview/components/alert-style-with-icon";
import AvatarStyleCircle from "@/preview/components/avatar-style-circle";
import AvatarStyleCircleSizes from "@/preview/components/avatar-style-circle-sizes";
import AvatarStyleCircleFallbacks from "@/preview/components/avatar-style-circle-fallbacks";
import BadgeStyleDefault from "@/preview/components/badge-style-default";
import BadgeStyleVariants from "@/preview/components/badge-style-variants";
import BadgeStyleSizes from "@/preview/components/badge-style-sizes";
import ButtonStyleDefault from "@/preview/components/button-style-default";
import ButtonStyleOutline from "@/preview/components/button-style-outline";
import ButtonStyleSecondary from "@/preview/components/button-style-secondary";
import ButtonStyleWithIcon from "@/preview/components/button-style-with-icon";
import CardStyleDefault from "@/preview/components/card-style-default";
import CardStyleTestimonial from "@/preview/components/card-style-testimonial";
import CheckboxStyleDefault from "@/preview/components/checkbox-style-default";
import CheckboxStyleVariants from "@/preview/components/checkbox-style-variants";
import CheckboxStyleSizes from "@/preview/components/checkbox-style-sizes";
import InputStyleDefault from "@/preview/components/input-style-default";
import InputStyleWithLabel from "@/preview/components/input-style-with-label";
import MenuStyleDefault from "@/preview/components/menu-style-default";
import ProgressStyleDefault from "@/preview/components/progress-style-default";
import RadioStyleDefault from "@/preview/components/radio-style-default";
import RadioStyleVariants from "@/preview/components/radio-style-variants";
import SelectStyleDefault from "@/preview/components/select-style-default";
import SliderStyleDefault from "@/preview/components/slider-style-default";
import SwitchStyleDefault from "@/preview/components/switch-style-default";
import TabStyleDefault from "@/preview/components/tab-style-default";
import TableStyleDefault from "@/preview/components/table-style-default";
import TableWithCheckbox from "@/preview/components/table-with-checkbox";
import TableWithStickyHeader from "@/preview/components/table-with-sticky-header";
import TextareaStyleDefault from "@/preview/components/textarea-style-default";
import ToggleStyleDefault from "@/preview/components/toggle-style-default";
import ToggleGroupStyleDefault from "@/preview/components/toggle-group-style-default";
import TooltipStyleDefault from "@/preview/components/tooltip-style-default";

interface ComponentSection {
  title: string;
  description: string;
  components: {
    name: string;
    description: string;
    component: React.ComponentType;
  }[];
}

const componentSections: ComponentSection[] = [
  {
    title: "Form Components",
    description: "Interactive form elements and input controls",
    components: [
      {
        name: "Button",
        description: "Clickable button elements with various styles",
        component: ButtonStyleDefault,
      },
      {
        name: "Button Variants",
        description: "Different button styles and variants",
        component: ButtonStyleOutline,
      },
      {
        name: "Button with Icons",
        description: "Buttons enhanced with icon elements",
        component: ButtonStyleWithIcon,
      },
      {
        name: "Input",
        description: "Text input fields for user data entry",
        component: InputStyleDefault,
      },
      {
        name: "Input with Label",
        description: "Labeled input fields for better UX",
        component: InputStyleWithLabel,
      },
      {
        name: "Textarea",
        description: "Multi-line text input areas",
        component: TextareaStyleDefault,
      },
      {
        name: "Checkbox",
        description: "Selection controls for multiple choices",
        component: CheckboxStyleDefault,
      },
      {
        name: "Checkbox Variants",
        description: "Different checkbox styles and states",
        component: CheckboxStyleVariants,
      },
      {
        name: "Radio Buttons",
        description: "Single selection from multiple options",
        component: RadioStyleDefault,
      },
      {
        name: "Select Dropdown",
        description: "Dropdown selection menus",
        component: SelectStyleDefault,
      },
      {
        name: "Switch",
        description: "Toggle switches for binary choices",
        component: SwitchStyleDefault,
      },
      {
        name: "Slider",
        description: "Range input controls",
        component: SliderStyleDefault,
      },
    ],
  },
  {
    title: "Display Components",
    description: "Components for displaying information and content",
    components: [
      {
        name: "Badge",
        description: "Status indicators and labels",
        component: BadgeStyleDefault,
      },
      {
        name: "Badge Variants",
        description: "Different badge styles and colors",
        component: BadgeStyleVariants,
      },
      {
        name: "Avatar",
        description: "User profile images and placeholders",
        component: AvatarStyleCircle,
      },
      {
        name: "Avatar Sizes",
        description: "Avatars in different sizes",
        component: AvatarStyleCircleSizes,
      },
      {
        name: "Avatar Fallbacks",
        description: "Avatar fallback states and initials",
        component: AvatarStyleCircleFallbacks,
      },
      {
        name: "Card",
        description: "Content containers with structured layout",
        component: CardStyleDefault,
      },
      {
        name: "Testimonial Card",
        description: "Specialized cards for testimonials",
        component: CardStyleTestimonial,
      },
      {
        name: "Alert",
        description: "Notification and status messages",
        component: AlertStyleDefault,
      },
      {
        name: "Alert with Icon",
        description: "Enhanced alerts with icon indicators",
        component: AlertStyleWithIcon,
      },
      {
        name: "Progress Bar",
        description: "Progress indicators for loading states",
        component: ProgressStyleDefault,
      },
      {
        name: "Tooltip",
        description: "Contextual information on hover",
        component: TooltipStyleDefault,
      },
    ],
  },
  {
    title: "Navigation Components",
    description: "Components for navigation and user interaction",
    components: [
      {
        name: "Tabs",
        description: "Tabbed navigation interface",
        component: TabStyleDefault,
      },
      {
        name: "Accordion",
        description: "Collapsible content sections",
        component: AccordionStyleDefault,
      },
      {
        name: "Menu",
        description: "Dropdown menus and context menus",
        component: MenuStyleDefault,
      },
      {
        name: "Toggle",
        description: "Toggle buttons for state changes",
        component: ToggleStyleDefault,
      },
      {
        name: "Toggle Group",
        description: "Grouped toggle controls",
        component: ToggleGroupStyleDefault,
      },
    ],
  },
  {
    title: "Data Components",
    description: "Components for displaying structured data",
    components: [
      {
        name: "Table",
        description: "Basic data tables with styling",
        component: TableStyleDefault,
      },
      {
        name: "Table with Checkboxes",
        description: "Interactive tables with selection",
        component: TableWithCheckbox,
      },
      {
        name: "Table with Sticky Header",
        description: "Tables with fixed headers for scrolling",
        component: TableWithStickyHeader,
      },
    ],
  },
];

export default function ComponentsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto px-4 lg:px-0 py-16">
        <div className="text-center mb-16">
          <Text as="h1" className="text-4xl lg:text-5xl mb-4">
            Component <span className="text-outlined">Library</span>
          </Text>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the complete collection of RetroUI components. Each component is designed 
            with a retro aesthetic and built for modern React applications.
          </p>
        </div>

        {componentSections.map((section, sectionIndex) => (
          <section key={sectionIndex} className="mb-20">
            <div className="mb-8">
              <Text as="h2" className="text-3xl mb-2">
                {section.title}
              </Text>
              <p className="text-muted-foreground text-lg">
                {section.description}
              </p>
            </div>

            <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
              {section.components.map((comp, compIndex) => (
                <Card key={compIndex} className="w-full bg-background shadow-none">
                  <Card.Header>
                    <Card.Title>{comp.name}</Card.Title>
                    <Card.Description>{comp.description}</Card.Description>
                  </Card.Header>
                  <Card.Content>
                    <div className="border rounded-sm p-6 flex justify-center items-center min-h-32">
                      <comp.component />
                    </div>
                  </Card.Content>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}