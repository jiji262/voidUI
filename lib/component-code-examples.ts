// Component code examples for easy copying
export const componentExamples = {
  Button: {
    basic: `import { Button } from '@voidui/components';

<Button>Click Me</Button>`,
    variants: `// Different button variants
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="link">Link</Button>`,
    sizes: `// Different button sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`,
    withIcon: `import { Button } from '@voidui/components';
import { ArrowRight } from 'lucide-react';

<Button>
  Next Step
  <ArrowRight className="ml-2 h-4 w-4" />
</Button>`
  },
  
  Input: {
    basic: `import { Input } from '@voidui/components';

<Input placeholder="Enter text..." />`,
    withLabel: `import { Input, Label } from '@voidui/components';

<div className="space-y-2">
  <Label htmlFor="name">Name</Label>
  <Input id="name" placeholder="Enter your name" />
</div>`,
    error: `<Input 
  placeholder="Email" 
  className="border-red-500" 
  aria-invalid="true"
/>`
  },
  
  Card: {
    basic: `import { Card } from '@voidui/components';

<Card>
  <Card.Header>
    <Card.Title>Card Title</Card.Title>
    <Card.Description>Card description</Card.Description>
  </Card.Header>
  <Card.Content>
    <p>Card content goes here</p>
  </Card.Content>
  <Card.Footer>
    <Button>Action</Button>
  </Card.Footer>
</Card>`,
    simple: `<Card className="p-6">
  <h3 className="text-lg font-bold mb-2">Simple Card</h3>
  <p>This is a simple card with custom content.</p>
</Card>`
  },
  
  Select: {
    basic: `import { Select } from '@voidui/components';

<Select>
  <Select.Trigger>
    <Select.Value placeholder="Select an option" />
  </Select.Trigger>
  <Select.Content>
    <Select.Group>
      <Select.Item value="option1">Option 1</Select.Item>
      <Select.Item value="option2">Option 2</Select.Item>
      <Select.Item value="option3">Option 3</Select.Item>
    </Select.Group>
  </Select.Content>
</Select>`
  },
  
  Dialog: {
    basic: `import { Dialog, Button } from '@voidui/components';

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
      <Button variant="outline">Cancel</Button>
      <Button>Confirm</Button>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog>`
  },
  
  Tabs: {
    basic: `import { Tab, TabsTriggerList, TabsTrigger, TabsPanels, TabsContent } from '@voidui/components';

<Tab defaultValue="tab1">
  <TabsTriggerList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
  </TabsTriggerList>
  <TabsPanels>
    <TabsContent value="tab1">Content for Tab 1</TabsContent>
    <TabsContent value="tab2">Content for Tab 2</TabsContent>
    <TabsContent value="tab3">Content for Tab 3</TabsContent>
  </TabsPanels>
</Tab>`
  },
  
  Alert: {
    basic: `import { Alert } from '@voidui/components';

<Alert>This is an alert message</Alert>`,
    withIcon: `import { Alert } from '@voidui/components';
import { Info } from 'lucide-react';

<Alert>
  <Info className="h-4 w-4" />
  <span>This is an informational alert</span>
</Alert>`
  },
  
  Badge: {
    basic: `import { Badge } from '@voidui/components';

<Badge>Default</Badge>`,
    variants: `<div className="flex gap-2">
  <Badge variant="default">Default</Badge>
  <Badge variant="solid">Solid</Badge>
  <Badge variant="outline">Outline</Badge>
</div>`
  },
  
  Checkbox: {
    basic: `import { Checkbox } from '@voidui/components';

<Checkbox>Accept terms and conditions</Checkbox>`,
    multiple: `<div className="space-y-2">
  <Checkbox>Option 1</Checkbox>
  <Checkbox>Option 2</Checkbox>
  <Checkbox>Option 3</Checkbox>
</div>`
  },
  
  Radio: {
    basic: `import { Radio } from '@voidui/components';

<div className="space-y-2">
  <Radio value="1" name="options">Option 1</Radio>
  <Radio value="2" name="options">Option 2</Radio>
  <Radio value="3" name="options">Option 3</Radio>
</div>`
  },
  
  Switch: {
    basic: `import { Switch } from '@voidui/components';

<Switch />`,
    withLabel: `import { Switch, Label } from '@voidui/components';

<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`
  },
  
  Slider: {
    basic: `import { Slider } from '@voidui/components';

<Slider 
  defaultValue={[50]} 
  max={100} 
  step={1} 
  className="w-[60%]" 
/>`
  },
  
  Avatar: {
    basic: `import { Avatar } from '@voidui/components';

<Avatar>
  <Avatar.Image src="/avatar.jpg" alt="User" />
  <Avatar.Fallback>JD</Avatar.Fallback>
</Avatar>`,
    fallback: `<Avatar>
  <Avatar.Fallback>AB</Avatar.Fallback>
</Avatar>`
  },
  
  Progress: {
    basic: `import { Progress } from '@voidui/components';

<Progress value={60} className="w-[60%]" />`
  },
  
  Tooltip: {
    basic: `import { Tooltip } from '@voidui/components';

<Tooltip>
  <Tooltip.Trigger asChild>
    <Button variant="outline">Hover me</Button>
  </Tooltip.Trigger>
  <Tooltip.Content>
    <p>Tooltip content</p>
  </Tooltip.Content>
</Tooltip>`
  },
  
  Popover: {
    basic: `import { Popover, Button } from '@voidui/components';

<Popover>
  <Popover.Trigger asChild>
    <Button variant="outline">Open Popover</Button>
  </Popover.Trigger>
  <Popover.Content>
    <div className="grid gap-4">
      <h4 className="font-medium">Popover Title</h4>
      <p className="text-sm text-muted-foreground">
        Popover content goes here
      </p>
    </div>
  </Popover.Content>
</Popover>`
  },
  
  Menu: {
    basic: `import { Menu, Button } from '@voidui/components';

<Menu>
  <Menu.Trigger asChild>
    <Button variant="outline">Open Menu</Button>
  </Menu.Trigger>
  <Menu.Content>
    <Menu.Item>Profile</Menu.Item>
    <Menu.Item>Settings</Menu.Item>
    <Menu.Separator />
    <Menu.Item>Logout</Menu.Item>
  </Menu.Content>
</Menu>`
  },
  
  Accordion: {
    basic: `import { Accordion } from '@voidui/components';

<Accordion type="single" collapsible>
  <Accordion.Item value="item-1">
    <Accordion.Header>Is it accessible?</Accordion.Header>
    <Accordion.Content>
      Yes. It adheres to the WAI-ARIA design pattern.
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-2">
    <Accordion.Header>Is it styled?</Accordion.Header>
    <Accordion.Content>
      Yes. It comes with retro-inspired default styles.
    </Accordion.Content>
  </Accordion.Item>
</Accordion>`
  },
  
  Table: {
    basic: `import { Table } from '@voidui/components';

<Table>
  <Table.Header>
    <Table.Row>
      <Table.Head>Name</Table.Head>
      <Table.Head>Email</Table.Head>
      <Table.Head>Role</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell>John Doe</Table.Cell>
      <Table.Cell>john@example.com</Table.Cell>
      <Table.Cell>Admin</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Jane Smith</Table.Cell>
      <Table.Cell>jane@example.com</Table.Cell>
      <Table.Cell>User</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>`
  },
  
  Breadcrumb: {
    basic: `import { Breadcrumb } from '@voidui/components';

<Breadcrumb>
  <Breadcrumb.List>
    <Breadcrumb.Item>
      <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>
      <Breadcrumb.Link href="/products">Products</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>
      <Breadcrumb.Page>Current Page</Breadcrumb.Page>
    </Breadcrumb.Item>
  </Breadcrumb.List>
</Breadcrumb>`
  },
  
  Toggle: {
    basic: `import { Toggle } from '@voidui/components';

<Toggle>Toggle me</Toggle>`,
    pressed: `<Toggle defaultPressed>
  Already pressed
</Toggle>`
  },
  
  ToggleGroup: {
    basic: `import { ToggleGroup, ToggleGroupItem } from '@voidui/components';

<ToggleGroup type="single">
  <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
  <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
  <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
</ToggleGroup>`,
    multiple: `<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold">B</ToggleGroupItem>
  <ToggleGroupItem value="italic">I</ToggleGroupItem>
  <ToggleGroupItem value="underline">U</ToggleGroupItem>
</ToggleGroup>`
  },
  
  CommandDisplay: {
    basic: `import { CommandDisplay } from '@voidui/components';

<CommandDisplay command="npm install @voidui/components" />`
  },
  
  Textarea: {
    basic: `import { Textarea } from '@voidui/components';

<Textarea 
  placeholder="Enter your message..." 
  rows={4}
/>`,
    withLabel: `import { Textarea, Label } from '@voidui/components';

<div className="space-y-2">
  <Label htmlFor="message">Message</Label>
  <Textarea 
    id="message" 
    placeholder="Type your message here..." 
    rows={4}
  />
</div>`
  },
  
  Label: {
    basic: `import { Label } from '@voidui/components';

<Label htmlFor="email">Email Address</Label>`,
    required: `<Label htmlFor="email">
  Email Address <span className="text-red-500">*</span>
</Label>`
  },
  
  Text: {
    basic: `import { Text } from '@voidui/components';

<Text as="h1">Heading 1</Text>
<Text as="h2">Heading 2</Text>
<Text as="p">Paragraph text</Text>`,
    styled: `<Text as="h1" className="text-outlined">
  Outlined Text
</Text>`
  },
  
  Sonner: {
    basic: `import { Sonner } from '@voidui/components';
import { toast } from 'sonner';

// Add Sonner to your app layout
<Sonner />

// Then use toast anywhere
<Button onClick={() => toast('Event has been created')}>
  Show Toast
</Button>`,
    types: `// Different toast types
toast.success('Success message');
toast.error('Error message');
toast.info('Info message');
toast.warning('Warning message');`
  }
};

// Helper function to get example for a component
export function getComponentExample(componentName: string, variant: string = 'basic'): string | undefined {
  const examples = componentExamples[componentName as keyof typeof componentExamples];
  if (!examples) return undefined;
  return examples[variant as keyof typeof examples];
}

// Get all examples for a component
export function getAllComponentExamples(componentName: string): Record<string, string> | undefined {
  return componentExamples[componentName as keyof typeof componentExamples];
}