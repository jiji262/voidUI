import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import {
  Alert,
  AlertDescription,
  AlertTitle,
  Avatar,
  AvatarFallback,
  Badge,
  BasicCard,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  Button,
  Card,
  Checkbox,
  CommandDisplay,
  IconButton,
  Input,
  Label,
  Progress,
  RadioGroup,
  RadioGroupItem,
  Switch,
  Text,
  Textarea,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/voidui";

describe("smoke: primitives render without crashing", () => {
  it("Button renders text and variants", () => {
    render(
      <>
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </>,
    );
    expect(screen.getByText("Default")).toBeInTheDocument();
    expect(screen.getByText("Secondary")).toBeInTheDocument();
    expect(screen.getByText("Outline")).toBeInTheDocument();
    expect(screen.getByText("Ghost")).toBeInTheDocument();
  });

  it("IconButton renders", () => {
    render(<IconButton aria-label="settings">⚙</IconButton>);
    expect(screen.getByLabelText("settings")).toBeInTheDocument();
  });

  it("Badge renders variants", () => {
    render(
      <>
        <Badge>default</Badge>
        <Badge variant="primary">primary</Badge>
        <Badge variant="ghost">ghost</Badge>
      </>,
    );
    expect(screen.getByText("primary")).toBeInTheDocument();
  });

  it("Alert renders title + description via dot-API", () => {
    render(
      <Alert variant="info">
        <AlertTitle>Heads up</AlertTitle>
        <AlertDescription>Deploy Friday</AlertDescription>
      </Alert>,
    );
    expect(screen.getByText("Heads up")).toBeInTheDocument();
    expect(screen.getByText("Deploy Friday")).toBeInTheDocument();
  });

  it("Card, BasicCard, CommandDisplay render", () => {
    render(
      <>
        <Card>card body</Card>
        <BasicCard />
        <CommandDisplay command="pnpm install" />
      </>,
    );
    expect(screen.getByText("card body")).toBeInTheDocument();
    // BasicCard renders fixed canonical content
    expect(screen.getByText("Release 2.0")).toBeInTheDocument();
    // CommandDisplay renders the command text
    expect(screen.getByText("pnpm install")).toBeInTheDocument();
  });

  it("Input / Textarea / Label render and accept a value", () => {
    render(
      <>
        <Label htmlFor="n">Name</Label>
        <Input id="n" defaultValue="void" />
        <Textarea defaultValue="long form" />
      </>,
    );
    expect(screen.getByLabelText("Name")).toHaveValue("void");
    expect(screen.getByDisplayValue("long form")).toBeInTheDocument();
  });

  it("Checkbox / Switch / Toggle / ToggleGroup render", () => {
    render(
      <>
        <Checkbox aria-label="terms" />
        <Switch aria-label="notify" />
        <Toggle aria-label="bold">B</Toggle>
        <ToggleGroup type="single" aria-label="align">
          <ToggleGroupItem value="l">L</ToggleGroupItem>
          <ToggleGroupItem value="c">C</ToggleGroupItem>
        </ToggleGroup>
      </>,
    );
    expect(screen.getByLabelText("terms")).toBeInTheDocument();
    expect(screen.getByLabelText("notify")).toBeInTheDocument();
    expect(screen.getByLabelText("bold")).toBeInTheDocument();
    expect(screen.getByLabelText("align")).toBeInTheDocument();
  });

  it("RadioGroup.Item shim and flat API both work", () => {
    render(
      <RadioGroup defaultValue="a" aria-label="letters">
        <RadioGroup.Item value="a" aria-label="a" />
        <RadioGroupItem value="b" aria-label="b" />
      </RadioGroup>,
    );
    expect(screen.getByLabelText("a")).toBeInTheDocument();
    expect(screen.getByLabelText("b")).toBeInTheDocument();
  });

  it("Progress renders at a specific value", () => {
    render(<Progress value={64} />);
    const bar = document.querySelector('[role="progressbar"]');
    expect(bar).toBeInTheDocument();
  });

  it("Avatar renders fallback when no image", () => {
    render(
      <Avatar>
        <AvatarFallback>EK</AvatarFallback>
      </Avatar>,
    );
    expect(screen.getByText("EK")).toBeInTheDocument();
  });

  it("Breadcrumb renders all segments", () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>,
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("Text renders with the right tag per `as`", () => {
    render(
      <>
        <Text as="h1">big</Text>
        <Text as="p">body</Text>
      </>,
    );
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("big");
    expect(screen.getByText("body")).toBeInTheDocument();
  });
});
