"use client";

import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import {
  Button, Badge, Card, Input, Textarea, Label, Checkbox, Switch, Slider,
  RadioGroup, RadioGroupItem, Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
  Avatar, AvatarFallback, Alert, AlertTitle, AlertDescription, Progress,
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell,
  Accordion, AccordionItem, AccordionTrigger, AccordionContent,
  Tabs, TabsList, TabsTrigger, TabsContent,
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage,
  Tooltip, TooltipProvider, TooltipTrigger, TooltipContent,
  Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription,
  Popover, PopoverTrigger, PopoverContent,
  ToggleGroup, ToggleGroupItem,
} from "@/components/voidui";
import { BoldIcon, ItalicIcon, UnderlineIcon, MailIcon, AlertCircleIcon } from "lucide-react";

type Cat = { title: string; items: { name: string; demo: React.ReactNode }[] };

const CATS: Cat[] = [
  {
    title: "Buttons & Triggers",
    items: [
      { name: "Button", demo: (
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Button>Default</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button size="sm">Small</Button>
        </div>
      )},
      { name: "Badge", demo: (
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      )},
      { name: "Toggle Group", demo: (
        <ToggleGroup type="multiple" defaultValue={["bold"]}>
          <ToggleGroupItem value="bold"><BoldIcon size={14} /></ToggleGroupItem>
          <ToggleGroupItem value="italic"><ItalicIcon size={14} /></ToggleGroupItem>
          <ToggleGroupItem value="underline"><UnderlineIcon size={14} /></ToggleGroupItem>
        </ToggleGroup>
      )},
    ],
  },
  {
    title: "Inputs",
    items: [
      { name: "Input", demo: (
        <div style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth: 320 }}>
          <Label htmlFor="d-email">Email</Label>
          <Input id="d-email" type="email" placeholder="you@voidui.dev" />
        </div>
      )},
      { name: "Textarea", demo: <Textarea placeholder="Write something..." style={{ maxWidth: 320 }} /> },
      { name: "Select", demo: (
        <Select>
          <SelectTrigger style={{ maxWidth: 240 }}><SelectValue placeholder="Pick a theme" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="neobrutal">Neobrutal</SelectItem>
            <SelectItem value="swiss">Swiss</SelectItem>
            <SelectItem value="aurora">Aurora</SelectItem>
          </SelectContent>
        </Select>
      )},
      { name: "Checkbox", demo: (
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Checkbox id="d-cb" defaultChecked /><Label htmlFor="d-cb">Subscribe to updates</Label>
        </div>
      )},
      { name: "Radio", demo: (
        <RadioGroup defaultValue="b" style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ display: "flex", gap: 8 }}><RadioGroupItem value="a" id="d-ra" /><Label htmlFor="d-ra">Option A</Label></div>
          <div style={{ display: "flex", gap: 8 }}><RadioGroupItem value="b" id="d-rb" /><Label htmlFor="d-rb">Option B</Label></div>
        </RadioGroup>
      )},
      { name: "Switch", demo: (
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}><Switch id="d-sw" defaultChecked /><Label htmlFor="d-sw">Notifications</Label></div>
      )},
      { name: "Slider", demo: <Slider defaultValue={[50]} max={100} step={1} style={{ maxWidth: 280 }} /> },
    ],
  },
  {
    title: "Display",
    items: [
      { name: "Avatar", demo: (
        <div style={{ display: "flex", gap: 8 }}>
          <Avatar><AvatarFallback>JD</AvatarFallback></Avatar>
          <Avatar><AvatarFallback>VU</AvatarFallback></Avatar>
          <Avatar><AvatarFallback>+5</AvatarFallback></Avatar>
        </div>
      )},
      { name: "Card", demo: (
        <Card style={{ padding: 16, maxWidth: 320 }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 600, marginBottom: 4 }}>Card title</div>
          <p style={{ margin: 0, fontSize: 12, color: "var(--fg-muted)" }}>Card body — works as a container.</p>
        </Card>
      )},
      { name: "Alert", demo: (
        <Alert style={{ maxWidth: 420 }}>
          <AlertCircleIcon size={14} />
          <AlertTitle>Heads up</AlertTitle>
          <AlertDescription>Token-driven, dismissible by default in v3.</AlertDescription>
        </Alert>
      )},
      { name: "Progress", demo: <Progress value={62} style={{ maxWidth: 320 }} /> },
      { name: "Table", demo: (
        <Table style={{ maxWidth: 480 }}>
          <TableHeader><TableRow><TableHead>Name</TableHead><TableHead>Plan</TableHead><TableHead>MRR</TableHead></TableRow></TableHeader>
          <TableBody>
            <TableRow><TableCell>Ada</TableCell><TableCell>Pro</TableCell><TableCell>$49</TableCell></TableRow>
            <TableRow><TableCell>Hopper</TableCell><TableCell>Team</TableCell><TableCell>$149</TableCell></TableRow>
          </TableBody>
        </Table>
      )},
      { name: "Tooltip", demo: (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild><Button variant="outline" size="sm">Hover me</Button></TooltipTrigger>
            <TooltipContent>Token-driven tooltip</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )},
    ],
  },
  {
    title: "Navigation & Disclosure",
    items: [
      { name: "Tabs", demo: (
        <Tabs defaultValue="acct" style={{ maxWidth: 420 }}>
          <TabsList><TabsTrigger value="acct">Account</TabsTrigger><TabsTrigger value="bil">Billing</TabsTrigger><TabsTrigger value="api">API</TabsTrigger></TabsList>
          <TabsContent value="acct" style={{ padding: 12, fontSize: 13, color: "var(--fg-muted)" }}>Account settings.</TabsContent>
          <TabsContent value="bil" style={{ padding: 12, fontSize: 13, color: "var(--fg-muted)" }}>Billing settings.</TabsContent>
          <TabsContent value="api" style={{ padding: 12, fontSize: 13, color: "var(--fg-muted)" }}>API settings.</TabsContent>
        </Tabs>
      )},
      { name: "Accordion", demo: (
        <Accordion type="single" collapsible style={{ maxWidth: 480 }}>
          <AccordionItem value="a"><AccordionTrigger>What is voidUI?</AccordionTrigger><AccordionContent>A refined neobrutalist component library.</AccordionContent></AccordionItem>
          <AccordionItem value="b"><AccordionTrigger>Is it free?</AccordionTrigger><AccordionContent>Yes — MIT licensed.</AccordionContent></AccordionItem>
        </Accordion>
      )},
      { name: "Breadcrumb", demo: (
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink href="/components">Components</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>Breadcrumb</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      )},
      { name: "Dialog", demo: (
        <Dialog>
          <DialogTrigger asChild><Button variant="outline" size="sm">Open dialog</Button></DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle>Confirm action</DialogTitle><DialogDescription>This token-driven dialog adapts to every theme.</DialogDescription></DialogHeader>
            <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 12 }}><Button variant="outline" size="sm">Cancel</Button><Button size="sm">Confirm</Button></div>
          </DialogContent>
        </Dialog>
      )},
      { name: "Popover", demo: (
        <Popover>
          <PopoverTrigger asChild><Button variant="outline" size="sm">Open popover</Button></PopoverTrigger>
          <PopoverContent style={{ width: 240 }}>
            <p style={{ margin: 0, fontSize: 13 }}>A small token-driven surface for context.</p>
          </PopoverContent>
        </Popover>
      )},
    ],
  },
];

export default function ComponentsPage() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <section style={{ padding: "64px 24px 32px", borderBottom: "1.5px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="label" style={{ marginBottom: 12 }}>Components</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 500, letterSpacing: "-0.03em", margin: "0 0 12px", lineHeight: 1.0 }}>
            Thirty pieces, <em style={{ fontStyle: "italic", color: "var(--primary)" }}>fully composed</em>
          </h1>
          <p style={{ fontSize: 16, color: "var(--fg-muted)", maxWidth: 640, margin: 0, lineHeight: 1.65 }}>
            Built with React + Radix where it counts. Every variant is token-driven. Try the theme switch in the header — every example follows.
          </p>
        </div>
      </section>

      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 64 }}>
          {CATS.map((cat) => (
            <div key={cat.title}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 24, paddingBottom: 12, borderBottom: "1.5px solid var(--border)" }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 500, margin: 0, letterSpacing: "-0.02em" }}>{cat.title}</h2>
                <span className="badge ghost">{cat.items.length}</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
                {cat.items.map((it) => (
                  <Card key={it.name} style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                    <div style={{ padding: "10px 14px", borderBottom: "1.5px solid var(--border-subtle)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 600 }}>{it.name}</span>
                      <span className="badge ghost">demo</span>
                    </div>
                    <div style={{ padding: 24, flex: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 140, background: "var(--bg-elev)" }}>{it.demo}</div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
