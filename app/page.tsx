"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon, ArrowRightIcon } from "lucide-react";
import {
  Button,
  Text,
  Input,
  Textarea,
  Card,
  Avatar,
  Badge,
  Alert,
  Accordion,
  Checkbox,
  Select,
  Switch,
  Menu,
  Tabs,
  TabsContent,
  TabsPanels,
  TabsTrigger,
  TabsTriggerList,
} from "@/components/retroui";

// Import preview components
import AccordionStyleDefault from "@/preview/components/accordion-style-default";
import AlertStyleWithIcon from "@/preview/components/alert-style-with-icon";
import AvatarStyleCircleSizes from "@/preview/components/avatar-style-circle-sizes";
import BadgeStyleVariants from "@/preview/components/badge-style-variants";
import ButtonStyleDefault from "@/preview/components/button-style-default";
import CheckboxStyleVariants from "@/preview/components/checkbox-style-variants";
import TableStyleDefault from "@/preview/components/table-style-default";
import TableWithCheckbox from "@/preview/components/table-with-checkbox";
import ProgressStyleDefault from "@/preview/components/progress-style-default";
import RadioStyleDefault from "@/preview/components/radio-style-default";
import SliderStyleDefault from "@/preview/components/slider-style-default";
import ToggleStyleDefault from "@/preview/components/toggle-style-default";
import ToggleGroupStyleDefault from "@/preview/components/toggle-group-style-default";
import TooltipStyleDefault from "@/preview/components/tooltip-style-default";
import DialogStyleDefault from "@/preview/components/dialog-style-default";
import BreadcrumbStyleDefault from "@/preview/components/breadcrumb-style-default";
import PopoverStyleDefault from "@/preview/components/popover-style-default";
import SwitchStyleDefault from "@/preview/components/switch-style-default";
import TextHeadings from "@/preview/components/text-headings";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 text-gray-900 flex justify-center items-center lg:gap-28 xl:gap-32 py-28">
        <div className="text-center lg:text-left w-full lg:w-2/3">
          <Text as="h1" className="text-5xl text-foreground lg:text-6xl mb-6">
            RetroUI
            <br />
            <span className="text-outlined">Component Showcase</span>
          </Text>

          <p className="text-lg text-muted-foreground mb-8">
            A comprehensive showcase of RetroUI components. Explore all the retro-styled 
            React components built with TailwindCSS for modern web applications.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <Link href="/components" passHref>
              <Button className="w-full" aria-label="View All Components">
                View All Components
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link
              href="https://github.com/Logging-Stuff/retroui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="w-full">
                <GithubIcon size="16" className="mr-2" />
                Star on GitHub
              </Button>
            </Link>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/3">
          <Image
            alt="RetroUI showcase"
            src="/images/tv_radio.png"
            width={500}
            height={500}
            className="h-full w-full object-contain"
          />
        </div>
      </section>

      {/* Component Showcase Grid */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 py-16">
        <Text as="h2" className="text-3xl text-center mb-16">
          Component <span className="text-outlined">Gallery</span>
        </Text>
        
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {/* Buttons */}
          <Card className="w-full bg-background shadow-none">
            <Card.Header>
              <Card.Title>Buttons</Card.Title>
              <Card.Description>Interactive button components with various styles</Card.Description>
            </Card.Header>
            <Card.Content>
              <ButtonStyleDefault />
            </Card.Content>
          </Card>

          {/* Badges */}
          <Card className="w-full bg-background shadow-none">
            <Card.Header>
              <Card.Title>Badges</Card.Title>
              <Card.Description>Status indicators and labels</Card.Description>
            </Card.Header>
            <Card.Content>
              <BadgeStyleVariants />
            </Card.Content>
          </Card>

          {/* Avatars */}
          <Card className="w-full bg-background shadow-none">
            <Card.Header>
              <Card.Title>Avatars</Card.Title>
              <Card.Description>User profile images in different sizes</Card.Description>
            </Card.Header>
            <Card.Content>
              <AvatarStyleCircleSizes />
            </Card.Content>
          </Card>

          {/* Form Controls */}
          <Card className="w-full bg-background shadow-none">
            <Card.Header>
              <Card.Title>Form Controls</Card.Title>
              <Card.Description>Input fields and form elements</Card.Description>
            </Card.Header>
            <Card.Content className="space-y-4">
              <Input placeholder="Enter text here..." />
              <Textarea placeholder="Enter your message..." className="border-foreground" />
            </Card.Content>
          </Card>

          {/* Checkboxes */}
          <Card className="w-full bg-background shadow-none">
            <Card.Header>
              <Card.Title>Checkboxes</Card.Title>
              <Card.Description>Selection controls with different variants</Card.Description>
            </Card.Header>
            <Card.Content>
              <CheckboxStyleVariants />
            </Card.Content>
          </Card>

          {/* Alerts */}
          <Card className="w-full bg-background shadow-none">
            <Card.Header>
              <Card.Title>Alerts</Card.Title>
              <Card.Description>Notification and status messages</Card.Description>
            </Card.Header>
            <Card.Content>
              <AlertStyleWithIcon />
            </Card.Content>
          </Card>

          {/* Accordion */}
          <Card className="w-full bg-background shadow-none">
            <Card.Header>
              <Card.Title>Accordion</Card.Title>
              <Card.Description>Collapsible content sections</Card.Description>
            </Card.Header>
            <Card.Content>
              <AccordionStyleDefault />
            </Card.Content>
          </Card>

          {/* Switches */}
          <Card className="w-full bg-background shadow-none">
            <Card.Header>
              <Card.Title>Switches</Card.Title>
              <Card.Description>Toggle switches for binary choices</Card.Description>
            </Card.Header>
            <Card.Content>
              <SwitchStyleDefault />
            </Card.Content>
          </Card>

          {/* Select & Menu */}
          <Card className="w-full bg-background shadow-none">
            <Card.Header>
              <Card.Title>Select & Menu</Card.Title>
              <Card.Description>Dropdown selections and menus</Card.Description>
            </Card.Header>
            <Card.Content className="space-y-4">
              <Select>
                <Select.Trigger>
                  <Select.Value placeholder="Select an option" />
                </Select.Trigger>
                <Select.Content>
                  <Select.Group>
                    <Select.Item value="1">Option 1</Select.Item>
                    <Select.Item value="2">Option 2</Select.Item>
                    <Select.Item value="3">Option 3</Select.Item>
                  </Select.Group>
                </Select.Content>
              </Select>
              <Menu>
                <Menu.Trigger asChild>
                  <Button variant="outline" size="sm">Open Menu</Button>
                </Menu.Trigger>
                <Menu.Content className="min-w-36">
                  <Menu.Item>Menu Item 1</Menu.Item>
                  <Menu.Item>Menu Item 2</Menu.Item>
                  <Menu.Item>Menu Item 3</Menu.Item>
                </Menu.Content>
              </Menu>
            </Card.Content>
          </Card>

          {/* Radio Buttons */}
          <Card className="w-full bg-background shadow-none">
            <Card.Header>
              <Card.Title>Radio Buttons</Card.Title>
              <Card.Description>Single selection from multiple options</Card.Description>
            </Card.Header>
            <Card.Content>
              <RadioStyleDefault />
            </Card.Content>
          </Card>

          {/* Progress Bar */}
          <Card className="w-full bg-background shadow-none">
            <Card.Header>
              <Card.Title>Progress Bar</Card.Title>
              <Card.Description>Progress indicators for loading states</Card.Description>
            </Card.Header>
            <Card.Content>
              <ProgressStyleDefault />
            </Card.Content>
          </Card>

          {/* Slider */}
          <Card className="w-full bg-background shadow-none">
            <Card.Header>
              <Card.Title>Slider</Card.Title>
              <Card.Description>Range input controls</Card.Description>
            </Card.Header>
            <Card.Content>
              <SliderStyleDefault />
            </Card.Content>
          </Card>

          {/* Toggle & Toggle Group */}
          <Card className="w-full bg-background shadow-none">
            <Card.Header>
              <Card.Title>Toggle Controls</Card.Title>
              <Card.Description>Toggle buttons and grouped toggles</Card.Description>
            </Card.Header>
            <Card.Content className="space-y-4">
              <ToggleStyleDefault />
              <ToggleGroupStyleDefault />
            </Card.Content>
          </Card>

          {/* Tooltip */}
          <Card className="w-full bg-background shadow-none">
            <Card.Header>
              <Card.Title>Tooltip</Card.Title>
              <Card.Description>Contextual information on hover</Card.Description>
            </Card.Header>
            <Card.Content>
              <TooltipStyleDefault />
            </Card.Content>
          </Card>

          {/* Dialog */}
          <Card className="w-full bg-background shadow-none">
            <Card.Header>
              <Card.Title>Dialog</Card.Title>
              <Card.Description>Modal dialogs and overlays</Card.Description>
            </Card.Header>
            <Card.Content>
              <DialogStyleDefault />
            </Card.Content>
          </Card>

          {/* Breadcrumb */}
          <Card className="w-full bg-background shadow-none">
            <Card.Header>
              <Card.Title>Breadcrumb</Card.Title>
              <Card.Description>Navigation breadcrumb trails</Card.Description>
            </Card.Header>
            <Card.Content>
              <BreadcrumbStyleDefault />
            </Card.Content>
          </Card>

          {/* Popover */}
          <Card className="w-full bg-background shadow-none">
            <Card.Header>
              <Card.Title>Popover</Card.Title>
              <Card.Description>Floating content containers</Card.Description>
            </Card.Header>
            <Card.Content>
              <PopoverStyleDefault />
            </Card.Content>
          </Card>

          {/* Typography */}
          <Card className="w-full bg-background shadow-none">
            <Card.Header>
              <Card.Title>Typography</Card.Title>
              <Card.Description>Text headings and typography styles</Card.Description>
            </Card.Header>
            <Card.Content>
              <TextHeadings />
            </Card.Content>
          </Card>

          {/* Tabs */}
          <Card className="w-full bg-background shadow-none">
            <Card.Header>
              <Card.Title>Tabs</Card.Title>
              <Card.Description>Tabbed navigation interface</Card.Description>
            </Card.Header>
            <Card.Content>
              <Tabs>
                <TabsTriggerList>
                  <TabsTrigger>Tab 1</TabsTrigger>
                  <TabsTrigger>Tab 2</TabsTrigger>
                  <TabsTrigger>Tab 3</TabsTrigger>
                </TabsTriggerList>
                <TabsPanels>
                  <TabsContent>Content for Tab 1</TabsContent>
                  <TabsContent>Content for Tab 2</TabsContent>
                  <TabsContent>Content for Tab 3</TabsContent>
                </TabsPanels>
              </Tabs>
            </Card.Content>
          </Card>
        </div>
      </section>

      {/* Data Tables Section */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 py-16">
        <Text as="h2" className="text-3xl text-center mb-16">
          Data <span className="text-outlined">Tables</span>
        </Text>
        
        <div className="space-y-12">
          <div>
            <Text as="h3" className="text-xl mb-4">Default Table</Text>
            <TableStyleDefault />
          </div>
          
          <div>
            <Text as="h3" className="text-xl mb-4">Table with Checkboxes</Text>
            <TableWithCheckbox />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-16">
        <div className="container max-w-6xl mx-auto px-4 lg:px-0 text-center">
          <Text as="h3" className="text-2xl mb-4">
            Ready to use <span className="text-outlined">RetroUI</span>?
          </Text>
          <p className="text-muted-foreground mb-8">
            Copy and paste these components into your React application.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="https://github.com/Logging-Stuff/retroui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                <GithubIcon size="16" className="mr-2" />
                View on GitHub
              </Button>
            </Link>
            <Link href="/components">
              <Button variant="outline">
                Browse Components
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}