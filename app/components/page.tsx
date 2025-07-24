"use client";

import React from "react";
import Link from "next/link";
import { GithubIcon } from "lucide-react";
import {
  Text,
  Card,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
  Radio,
  Select,
  Switch,
  Slider,
  Label,
  Badge,
  Avatar,
  Alert,
  Progress,
  CommandDisplay,
  Breadcrumb,
  Menu,
  Tab,
  TabsTriggerList,
  TabsTrigger,
  TabsPanels,
  TabsContent,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Dialog,
  Popover,
  Tooltip,
  Accordion,
  Table,
  Sonner,
  BasicCard,
  ProductCard,
  Login,
} from "@/components/retroui";
import ErrorBoundary from "@/components/ui/error-boundary";
import {
  groupComponentsByCategory,
  createComponentInfo,
  ComponentInfo,
} from "@/lib/component-categorization";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { BackToTop } from "@/components/ui/back-to-top";

// Create component info objects for all available components
const allComponents: ComponentInfo[] = [
  createComponentInfo("Button", Button),
  createComponentInfo("IconButton", IconButton),
  createComponentInfo("Input", Input),
  createComponentInfo("Textarea", Textarea),
  createComponentInfo("Checkbox", Checkbox),
  createComponentInfo("Radio", Radio),
  createComponentInfo("Select", Select),
  createComponentInfo("Switch", Switch),
  createComponentInfo("Slider", Slider),
  createComponentInfo("Label", Label),
  createComponentInfo("Text", Text),
  createComponentInfo("Badge", Badge),
  createComponentInfo("Avatar", Avatar),
  createComponentInfo("Alert", Alert),
  createComponentInfo("Card", Card),
  createComponentInfo("BasicCard", BasicCard),
  createComponentInfo("ProductCard", ProductCard),
  createComponentInfo("Progress", Progress),
  createComponentInfo("CommandDisplay", CommandDisplay),
  createComponentInfo("Breadcrumb", Breadcrumb),
  createComponentInfo("Menu", Menu),
  createComponentInfo("Tab", Tab),
  createComponentInfo("Toggle", Toggle),
  createComponentInfo("ToggleGroup", ToggleGroup),
  createComponentInfo("Dialog", Dialog),
  createComponentInfo("Popover", Popover),
  createComponentInfo("Tooltip", Tooltip),
  createComponentInfo("Accordion", Accordion),
  createComponentInfo("Table", Table),
  createComponentInfo("Sonner", Sonner),
  createComponentInfo("Login", Login),
];

// Group components by category using our categorization system
const componentSections = groupComponentsByCategory(allComponents);

// Component demonstration wrappers
const ComponentDemo: React.FC<{ component: ComponentInfo }> = ({ component }) => {
  const renderComponent = () => {
    switch (component.name) {
      case "Button":
        return (
          <div className="space-y-2">
            <Button>Default Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="secondary">Secondary Button</Button>
          </div>
        );
      case "IconButton":
        return <IconButton>🔍</IconButton>;
      case "Input":
        return <Input placeholder="Enter text..." />;
      case "Textarea":
        return <Textarea placeholder="Enter your message..." />;
      case "Checkbox":
        return (
          <div className="space-y-2">
            <Checkbox>Option 1</Checkbox>
            <Checkbox>Option 2</Checkbox>
          </div>
        );
      case "Radio":
        return (
          <div className="space-y-2">
            <Radio value="1" name="demo">Option 1</Radio>
            <Radio value="2" name="demo">Option 2</Radio>
          </div>
        );
      case "Select":
        return (
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
        );
      case "Switch":
        return <Switch />;
      case "Slider":
        return <Slider defaultValue={[50]} max={100} step={1} className="w-48" />;
      case "Label":
        return <Label>Field Label</Label>;
      case "Text":
        return (
          <div className="space-y-2">
            <Text as="h3">Heading Text</Text>
            <Text>Regular text content</Text>
            <Text className="text-muted-foreground">Muted text</Text>
          </div>
        );
      case "Badge":
        return (
          <div className="flex gap-2">
            <Badge>Default</Badge>
            <Badge variant="solid">Solid</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        );
      case "Avatar":
        return (
          <div className="flex gap-2">
            <Avatar>
              <Avatar.Image src="/images/avatar.jpeg" alt="User" />
              <Avatar.Fallback>JD</Avatar.Fallback>
            </Avatar>
            <Avatar>
              <Avatar.Fallback>AB</Avatar.Fallback>
            </Avatar>
          </div>
        );
      case "Alert":
        return <Alert>This is an alert message</Alert>;
      case "Card":
        return (
          <Card className="w-64">
            <Card.Header>
              <Card.Title>Card Title</Card.Title>
              <Card.Description>Card description goes here</Card.Description>
            </Card.Header>
            <Card.Content>
              <p>Card content</p>
            </Card.Content>
          </Card>
        );
      case "BasicCard":
        return <BasicCard />;
      case "ProductCard":
        return <ProductCard />;
      case "Progress":
        return <Progress value={60} className="w-48" />;
      case "CommandDisplay":
        return <CommandDisplay command="npm install retroui" />;
      case "Breadcrumb":
        return (
          <Breadcrumb>
            <Breadcrumb.List>
              <Breadcrumb.Item>
                <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator />
              <Breadcrumb.Item>
                <Breadcrumb.Link href="/components">Components</Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator />
              <Breadcrumb.Item>
                <Breadcrumb.Page>Current</Breadcrumb.Page>
              </Breadcrumb.Item>
            </Breadcrumb.List>
          </Breadcrumb>
        );
      case "Menu":
        return (
          <Menu>
            <Menu.Trigger asChild>
              <Button variant="outline">Open Menu</Button>
            </Menu.Trigger>
            <Menu.Content>
              <Menu.Item>Menu Item 1</Menu.Item>
              <Menu.Item>Menu Item 2</Menu.Item>
              <Menu.Item>Menu Item 3</Menu.Item>
            </Menu.Content>
          </Menu>
        );
      case "Tab":
        return (
          <Tab>
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
          </Tab>
        );
      case "Toggle":
        return <Toggle>Toggle</Toggle>;
      case "ToggleGroup":
        return (
          <ToggleGroup type="multiple">
            <ToggleGroupItem value="a">A</ToggleGroupItem>
            <ToggleGroupItem value="b">B</ToggleGroupItem>
            <ToggleGroupItem value="c">C</ToggleGroupItem>
          </ToggleGroup>
        );
      case "Dialog":
        return (
          <Dialog>
            <Dialog.Trigger asChild>
              <Button>Open Dialog</Button>
            </Dialog.Trigger>
            <Dialog.Content>
              <Dialog.Header>Dialog Title</Dialog.Header>
              <div className="p-4">
                <p>Dialog content goes here.</p>
              </div>
              <Dialog.Footer>
                <Dialog.Description>Dialog description</Dialog.Description>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog>
        );
      case "Popover":
        return (
          <Popover>
            <Popover.Trigger asChild>
              <Button variant="outline">Open Popover</Button>
            </Popover.Trigger>
            <Popover.Content>
              <p>Popover content</p>
            </Popover.Content>
          </Popover>
        );
      case "Tooltip":
        return (
          <Tooltip>
            <Tooltip.Trigger asChild>
              <Button variant="outline">Hover me</Button>
            </Tooltip.Trigger>
            <Tooltip.Content>
              <p>Tooltip content</p>
            </Tooltip.Content>
          </Tooltip>
        );
      case "Accordion":
        return (
          <Accordion type="single" collapsible className="w-full">
            <Accordion.Item value="item-1">
              <Accordion.Header>Accordion Item 1</Accordion.Header>
              <Accordion.Content>
                Content for accordion item 1
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-2">
              <Accordion.Header>Accordion Item 2</Accordion.Header>
              <Accordion.Content>
                Content for accordion item 2
              </Accordion.Content>
            </Accordion.Item>
          </Accordion>
        );
      case "Table":
        return (
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.Head>Name</Table.Head>
                <Table.Head>Status</Table.Head>
                <Table.Head>Role</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>John Doe</Table.Cell>
                <Table.Cell>Active</Table.Cell>
                <Table.Cell>Admin</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jane Smith</Table.Cell>
                <Table.Cell>Inactive</Table.Cell>
                <Table.Cell>User</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        );
      case "Sonner":
        return (
          <div>
            <Button onClick={() => console.log("Toast triggered")}>
              Show Toast
            </Button>
            <Sonner />
          </div>
        );
      case "Login":
        return <Login />;
      default:
        return <div className="text-muted-foreground">Component preview not available</div>;
    }
  };

  return (
    <ErrorBoundary>
      <Card className="w-full bg-background shadow-none">
        <Card.Header>
          <Card.Title>{component.name}</Card.Title>
          <Card.Description>{component.description}</Card.Description>
        </Card.Header>
        <Card.Content>
          <div className="border rounded-sm p-6 flex justify-center items-center min-h-32 mb-4">
            {renderComponent()}
          </div>
          {component.usage && (
            <div className="bg-muted p-3 rounded text-sm font-mono overflow-x-auto">
              <code>{component.usage}</code>
            </div>
          )}
        </Card.Content>
      </Card>
    </ErrorBoundary>
  );
};

export default function ComponentsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto px-4 lg:px-0 py-16">
        <BreadcrumbNav />
        <div className="text-center mb-16">
          <Text as="h1" className="text-4xl lg:text-5xl mb-4">
            Component <span className="text-outlined">Library</span>
          </Text>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the complete collection of RetroUI components. Each component is designed 
            with a retro aesthetic and built for modern React applications. Copy the usage 
            examples to get started quickly.
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

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {section.components.map((component, compIndex) => (
                <ComponentDemo key={compIndex} component={component} />
              ))}
            </div>
          </section>
        ))}
      </div>
      <BackToTop />
      {/* Footer */}
      <footer className="border-t border-border py-16">
        <div className="container max-w-6xl mx-auto px-4 lg:px-0">
          <div className="grid gap-8 md:grid-cols-3 text-center md:text-left">
            <div>
              <Text as="h4" className="text-lg mb-4">RetroUI</Text>
              <p className="text-muted-foreground text-sm">
                Retro-styled React components for modern web applications.
              </p>
            </div>
            
            <div>
              <Text as="h4" className="text-lg mb-4">Explore</Text>
              <div className="space-y-2 text-sm">
                <div><Link href="/components" className="text-muted-foreground hover:text-foreground">Component Library</Link></div>
                <div><Link href="/demo" className="text-muted-foreground hover:text-foreground">Live Demo</Link></div>
                <div><Link href="https://github.com/jiji262/retroui-next" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">GitHub Repository</Link></div>
              </div>
            </div>
            
            <div>
              <Text as="h4" className="text-lg mb-4">Get Started</Text>
              <div className="flex flex-col sm:flex-row md:flex-col gap-2">
                <Link href="/components">
                  <Button variant="outline" size="sm" className="w-full">
                    Browse Components
                  </Button>
                </Link>
                <Link
                  href="https://github.com/jiji262/retroui-next"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="sm" className="w-full">
                    <GithubIcon size="14" className="mr-2" />
                    Star on GitHub
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>Built with React and TailwindCSS. Open source and ready to use.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}