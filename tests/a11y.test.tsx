import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { expectNoAxeViolations } from "./_axe";

import {
  Alert,
  AlertDescription,
  AlertTitle,
  Avatar,
  AvatarFallback,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Card,
  Checkbox,
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

describe("a11y: canonical component usage has zero axe violations", () => {
  it("Button variants", async () => {
    const { container } = render(
      <div>
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline" disabled>
          Outline disabled
        </Button>
        <Button aria-label="icon action">⚙</Button>
      </div>,
    );
    await expectNoAxeViolations(container);
  });

  it("Labelled form controls", async () => {
    const { container } = render(
      <form>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@void.ui" />
        <Label htmlFor="bio">Bio</Label>
        <Textarea id="bio" />
        <Label htmlFor="terms">
          <Checkbox id="terms" />
          Accept terms
        </Label>
        <Label htmlFor="notify">
          <Switch id="notify" />
          Notifications
        </Label>
      </form>,
    );
    await expectNoAxeViolations(container);
  });

  it("RadioGroup with labelled items", async () => {
    const { container } = render(
      <RadioGroup aria-label="plan">
        <label>
          <RadioGroupItem value="small" />
          Small
        </label>
        <label>
          <RadioGroupItem value="medium" />
          Medium
        </label>
        <label>
          <RadioGroupItem value="large" />
          Large
        </label>
      </RadioGroup>,
    );
    await expectNoAxeViolations(container);
  });

  it("Alerts with role + title/description", async () => {
    const { container } = render(
      <div>
        <Alert variant="info">
          <AlertTitle>Heads up</AlertTitle>
          <AlertDescription>Deploy window opens Friday.</AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>Could not reach auth provider.</AlertDescription>
        </Alert>
      </div>,
    );
    await expectNoAxeViolations(container);
  });

  it("Breadcrumb navigation landmark", async () => {
    const { container } = render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Button</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>,
    );
    await expectNoAxeViolations(container);
  });

  it("Toggle + ToggleGroup with aria names", async () => {
    const { container } = render(
      <div>
        <Toggle aria-label="bold">B</Toggle>
        <ToggleGroup type="single" aria-label="text alignment">
          <ToggleGroupItem value="l" aria-label="left">
            L
          </ToggleGroupItem>
          <ToggleGroupItem value="c" aria-label="center">
            C
          </ToggleGroupItem>
          <ToggleGroupItem value="r" aria-label="right">
            R
          </ToggleGroupItem>
        </ToggleGroup>
      </div>,
    );
    await expectNoAxeViolations(container);
  });

  it("Progress with accessible name", async () => {
    // <label> does not associate with non-form elements, so Progress needs
    // aria-label or aria-labelledby directly.
    const { container } = render(
      <div>
        <div id="pl">Upload progress</div>
        <Progress aria-labelledby="pl" value={72} />
      </div>,
    );
    await expectNoAxeViolations(container);
  });

  it("Avatar with text fallback", async () => {
    const { container } = render(
      <Avatar>
        <AvatarFallback>EK</AvatarFallback>
      </Avatar>,
    );
    await expectNoAxeViolations(container);
  });

  it("Card with Badge + Text composition", async () => {
    const { container } = render(
      <Card>
        <Badge variant="primary">New</Badge>
        <Text as="h3">Release 2.0</Text>
        <Text as="p">Refined neobrutalism.</Text>
      </Card>,
    );
    await expectNoAxeViolations(container);
  });
});
