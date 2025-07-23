"use client";

import {
  Accordion,
  Alert,
  Avatar,
  Badge,
  Button,
  Checkbox,
  Menu,
  Select,
  Switch,
  Tabs,
  TabsContent,
  TabsPanels,
  TabsTrigger,
  TabsTriggerList,
  Text,
} from "@/components/retroui";
import { Card } from "@/components/retroui/Card";
import BadgeStyleVariants from "@/preview/components/badge-style-variants";
import TestimonialCard from "@/preview/components/card-style-testimonial";
import TableStyleDefault from "@/preview/components/table-style-default";
import TableWithCheckbox from "@/preview/components/table-with-checkbox";
import TableWithStickyHeader from "@/preview/components/table-with-sticky-header";
import { CheckCircle } from "lucide-react";
import React from "react";

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto px-4 lg:px-0 py-16">
        <div className="text-center mb-16">
          <Text as="h1" className="text-4xl lg:text-5xl mb-4">
            Interactive <span className="text-outlined">Demo</span>
          </Text>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Try out all the RetroUI components in this interactive playground. 
            Test their functionality and see how they behave.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <Text as="h2" className="text-2xl mb-6">Buttons</Text>
            <div className="space-x-4">
              <Button>Default Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="link">Link Button</Button>
            </div>
          </section>

          <section>
            <Text as="h2" className="text-2xl mb-6">Badges</Text>
            <div className="space-x-4">
              <BadgeStyleVariants />
            </div>
          </section>

          <section>
            <Text as="h2" className="text-2xl mb-6">Checkboxes</Text>
            <div className="space-x-4">
              <Checkbox />
              <Checkbox variant="outline" />
              <Checkbox variant="solid" />
              <Checkbox size="sm" />
              <Checkbox size="md" />
              <Checkbox size="lg" />
            </div>
          </section>

          <section>
            <Text as="h2" className="text-2xl mb-6">Select & Switch</Text>
            <div className="space-y-4">
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
              <div className="flex items-center space-x-2">
                <Switch />
                <span>Toggle me</span>
              </div>
            </div>
          </section>

          <section>
            <Text as="h2" className="text-2xl mb-6">Avatars</Text>
            <div className="flex items-center space-x-4">
              <Avatar>
                <Avatar.Image src="/images/avatar.jpeg" alt="User Avatar" />
                <Avatar.Fallback>AH</Avatar.Fallback>
              </Avatar>

              <Avatar className="rounded-none">
                <Avatar.Image src="/images/avatar.jpeg" alt="User Avatar" />
                <Avatar.Fallback>AH</Avatar.Fallback>
              </Avatar>

              <Avatar className="rounded-none h-20 w-20">
                <Avatar.Image src="/images/avatar.jpeg" alt="User Avatar" />
                <Avatar.Fallback>AH</Avatar.Fallback>
              </Avatar>
            </div>
          </section>

          <section>
            <Text as="h2" className="text-2xl mb-6">Tabs</Text>
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
          </section>

          <section>
            <Text as="h2" className="text-2xl mb-6">Accordion</Text>
            <Accordion type="single" collapsible>
              <Accordion.Item value="item-1">
                <Accordion.Header>Click to expand</Accordion.Header>
                <Accordion.Content>
                  This is the content inside the accordion. You can put any content here.
                </Accordion.Content>
              </Accordion.Item>
            </Accordion>
          </section>

          <section>
            <Text as="h2" className="text-2xl mb-6">Cards</Text>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <Card.Header>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Description>This is a basic card component</Card.Description>
                </Card.Header>
                <Card.Content>
                  <p>Card content goes here. You can add any content you want.</p>
                </Card.Content>
              </Card>
              <TestimonialCard />
            </div>
          </section>

          <section>
            <Text as="h2" className="text-2xl mb-6">Alerts</Text>
            <div className="space-y-6">
              <Alert>
                <Alert.Title>Heads up!</Alert.Title>
                <Alert.Description>
                  You can add components to your app using the cli.
                </Alert.Description>
              </Alert>

              <Alert variant="solid">
                <Alert.Title>Success!</Alert.Title>
                <Alert.Description>
                  Your changes have been saved successfully.
                </Alert.Description>
              </Alert>
              
              <Alert variant="solid" className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-4" />
                <div>
                  <Alert.Title>All done!</Alert.Title>
                </div>
              </Alert>
            </div>
          </section>

          <section>
            <Text as="h2" className="text-2xl mb-6">Menu</Text>
            <Menu>
              <Menu.Trigger asChild>
                <Button>Open Menu</Button>
              </Menu.Trigger>
              <Menu.Content className="min-w-36">
                <Menu.Item>Menu Item 1</Menu.Item>
                <Menu.Item>Menu Item 2</Menu.Item>
                <Menu.Item>Menu Item 3</Menu.Item>
              </Menu.Content>
            </Menu>
          </section>

          <section>
            <Text as="h2" className="text-2xl mb-6">Tables</Text>
            <div className="space-y-12">
              <div>
                <Text as="h3" className="text-xl mb-4">Default Table</Text>
                <TableStyleDefault />
              </div>
              
              <div>
                <Text as="h3" className="text-xl mb-4">Table with Checkboxes</Text>
                <TableWithCheckbox />
              </div>
              
              <div>
                <Text as="h3" className="text-xl mb-4">Table with Sticky Header</Text>
                <TableWithStickyHeader />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}