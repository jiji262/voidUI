"use client";

import React from "react";
import { Card, Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/voidui";
import {
  groupPreviewsByCategory,
  createPreviewComponentInfo,
  PreviewComponentInfo,
} from "@/lib/preview-categorization";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
import { BackToTop } from "@/components/ui/back-to-top";
import ErrorBoundary from "@/components/ui/error-boundary";

// Import all preview components dynamically
import dynamic from "next/dynamic";
import { Loading } from "@/components/ui/loading";

// Dynamically import all preview components
const AccordionStyleDefault = dynamic(() => import("@/preview/components/accordion-style-default"), {
  loading: () => <Loading message="Loading accordion preview..." />,
  ssr: false
});
const AlertStyleAllStatus = dynamic(() => import("@/preview/components/alert-style-all-status"), {
  loading: () => <Loading message="Loading alert preview..." />,
  ssr: false
});
const AlertStyleDefault = dynamic(() => import("@/preview/components/alert-style-default"), {
  loading: () => <Loading message="Loading alert preview..." />,
  ssr: false
});
const AlertStyleSolid = dynamic(() => import("@/preview/components/alert-style-solid"), {
  loading: () => <Loading message="Loading alert preview..." />,
  ssr: false
});
const AlertStyleWithIcon = dynamic(() => import("@/preview/components/alert-style-with-icon"), {
  loading: () => <Loading message="Loading alert preview..." />,
  ssr: false
});
const AvatarStyleCircleFallbacks = dynamic(() => import("@/preview/components/avatar-style-circle-fallbacks"), {
  loading: () => <Loading message="Loading avatar preview..." />,
  ssr: false
});
const AvatarStyleCircleSizes = dynamic(() => import("@/preview/components/avatar-style-circle-sizes"), {
  loading: () => <Loading message="Loading avatar preview..." />,
  ssr: false
});
const AvatarStyleCircle = dynamic(() => import("@/preview/components/avatar-style-circle"), {
  loading: () => <Loading message="Loading avatar preview..." />,
  ssr: false
});
const BadgeStyleDefault = dynamic(() => import("@/preview/components/badge-style-default"), {
  loading: () => <Loading message="Loading badge preview..." />,
  ssr: false
});
const BadgeStyleRounded = dynamic(() => import("@/preview/components/badge-style-rounded"), {
  loading: () => <Loading message="Loading badge preview..." />,
  ssr: false
});
const BadgeStyleSizes = dynamic(() => import("@/preview/components/badge-style-sizes"), {
  loading: () => <Loading message="Loading badge preview..." />,
  ssr: false
});
const BadgeStyleVariants = dynamic(() => import("@/preview/components/badge-style-variants"), {
  loading: () => <Loading message="Loading badge preview..." />,
  ssr: false
});
const BreadcrumbCustomSeparator = dynamic(() => import("@/preview/components/breadcrumb-custom-separator"), {
  loading: () => <Loading message="Loading breadcrumb preview..." />,
  ssr: false
});
const BreadcrumbLinkComponent = dynamic(() => import("@/preview/components/breadcrumb-link-component"), {
  loading: () => <Loading message="Loading breadcrumb preview..." />,
  ssr: false
});
const BreadcrumbStyleCollapsed = dynamic(() => import("@/preview/components/breadcrumb-style-collapsed"), {
  loading: () => <Loading message="Loading breadcrumb preview..." />,
  ssr: false
});
const BreadcrumbStyleDefault = dynamic(() => import("@/preview/components/breadcrumb-style-default"), {
  loading: () => <Loading message="Loading breadcrumb preview..." />,
  ssr: false
});
const ButtonStyleDefault = dynamic(() => import("@/preview/components/button-style-default"), {
  loading: () => <Loading message="Loading button preview..." />,
  ssr: false
});
const ButtonStyleIcon = dynamic(() => import("@/preview/components/button-style-icon"), {
  loading: () => <Loading message="Loading button preview..." />,
  ssr: false
});
const ButtonStyleLink = dynamic(() => import("@/preview/components/button-style-link"), {
  loading: () => <Loading message="Loading button preview..." />,
  ssr: false
});
const ButtonStyleOutline = dynamic(() => import("@/preview/components/button-style-outline"), {
  loading: () => <Loading message="Loading button preview..." />,
  ssr: false
});
const ButtonStyleSecondary = dynamic(() => import("@/preview/components/button-style-secondary"), {
  loading: () => <Loading message="Loading button preview..." />,
  ssr: false
});
const ButtonStyleWithIcon = dynamic(() => import("@/preview/components/button-style-with-icon"), {
  loading: () => <Loading message="Loading button preview..." />,
  ssr: false
});
const CardStyleCommerce = dynamic(() => import("@/preview/components/card-style-commerce"), {
  loading: () => <Loading message="Loading card preview..." />,
  ssr: false
});
const CardStyleDefault = dynamic(() => import("@/preview/components/card-style-default"), {
  loading: () => <Loading message="Loading card preview..." />,
  ssr: false
});
const CardStyleTestimonial = dynamic(() => import("@/preview/components/card-style-testimonial"), {
  loading: () => <Loading message="Loading card preview..." />,
  ssr: false
});
const CheckboxStyleDefault = dynamic(() => import("@/preview/components/checkbox-style-default"), {
  loading: () => <Loading message="Loading checkbox preview..." />,
  ssr: false
});
const CheckboxStyleSizes = dynamic(() => import("@/preview/components/checkbox-style-sizes"), {
  loading: () => <Loading message="Loading checkbox preview..." />,
  ssr: false
});
const CheckboxStyleVariants = dynamic(() => import("@/preview/components/checkbox-style-variants"), {
  loading: () => <Loading message="Loading checkbox preview..." />,
  ssr: false
});
const DialogStyleDefault = dynamic(() => import("@/preview/components/dialog-style-default"), {
  loading: () => <Loading message="Loading dialog preview..." />,
  ssr: false
});
const DialogStyleWidthVariant = dynamic(() => import("@/preview/components/dialog-style-width-variant"), {
  loading: () => <Loading message="Loading dialog preview..." />,
  ssr: false
});
const DialogStyleWithFooter = dynamic(() => import("@/preview/components/dialog-style-with-footer"), {
  loading: () => <Loading message="Loading dialog preview..." />,
  ssr: false
});
const DialogStyleWithForm = dynamic(() => import("@/preview/components/dialog-style-with-form"), {
  loading: () => <Loading message="Loading dialog preview..." />,
  ssr: false
});
const InputStyleDefault = dynamic(() => import("@/preview/components/input-style-default"), {
  loading: () => <Loading message="Loading input preview..." />,
  ssr: false
});
const InputStyleError = dynamic(() => import("@/preview/components/input-style-error"), {
  loading: () => <Loading message="Loading input preview..." />,
  ssr: false
});
const InputStyleWithLabel = dynamic(() => import("@/preview/components/input-style-with-label"), {
  loading: () => <Loading message="Loading input preview..." />,
  ssr: false
});
const LabelStyleDefault = dynamic(() => import("@/preview/components/label-style-default"), {
  loading: () => <Loading message="Loading label preview..." />,
  ssr: false
});
const Label = dynamic(() => import("@/preview/components/label"), {
  loading: () => <Loading message="Loading label preview..." />,
  ssr: false
});
const MenuStyleDefault = dynamic(() => import("@/preview/components/menu-style-default"), {
  loading: () => <Loading message="Loading menu preview..." />,
  ssr: false
});
const PopoverStyleDefaultShadow = dynamic(() => import("@/preview/components/popover-style-default-shadow"), {
  loading: () => <Loading message="Loading popover preview..." />,
  ssr: false
});
const PopoverStyleDefault = dynamic(() => import("@/preview/components/popover-style-default"), {
  loading: () => <Loading message="Loading popover preview..." />,
  ssr: false
});
const ProgressStyleDefault = dynamic(() => import("@/preview/components/progress-style-default"), {
  loading: () => <Loading message="Loading progress preview..." />,
  ssr: false
});
const RadioStyleDefault = dynamic(() => import("@/preview/components/radio-style-default"), {
  loading: () => <Loading message="Loading radio preview..." />,
  ssr: false
});
const RadioStyleSizes = dynamic(() => import("@/preview/components/radio-style-sizes"), {
  loading: () => <Loading message="Loading radio preview..." />,
  ssr: false
});
const RadioStyleVariants = dynamic(() => import("@/preview/components/radio-style-variants"), {
  loading: () => <Loading message="Loading radio preview..." />,
  ssr: false
});
const SelectStyleDefault = dynamic(() => import("@/preview/components/select-style-default"), {
  loading: () => <Loading message="Loading select preview..." />,
  ssr: false
});
const SliderStyleDefault = dynamic(() => import("@/preview/components/slider-style-default"), {
  loading: () => <Loading message="Loading slider preview..." />,
  ssr: false
});
const SonnerStyleColoredStatus = dynamic(() => import("@/preview/components/sonner-style-colored-status"), {
  loading: () => <Loading message="Loading sonner preview..." />,
  ssr: false
});
const SonnerStyleDefault = dynamic(() => import("@/preview/components/sonner-style-default"), {
  loading: () => <Loading message="Loading sonner preview..." />,
  ssr: false
});
const SonnerStyleError = dynamic(() => import("@/preview/components/sonner-style-error"), {
  loading: () => <Loading message="Loading sonner preview..." />,
  ssr: false
});
const SonnerStyleStatus = dynamic(() => import("@/preview/components/sonner-style-status"), {
  loading: () => <Loading message="Loading sonner preview..." />,
  ssr: false
});
const SwitchStyleDefault = dynamic(() => import("@/preview/components/switch-style-default"), {
  loading: () => <Loading message="Loading switch preview..." />,
  ssr: false
});
const SwitchStyleDisabled = dynamic(() => import("@/preview/components/switch-style-disabled"), {
  loading: () => <Loading message="Loading switch preview..." />,
  ssr: false
});
const TabStyleDefault = dynamic(() => import("@/preview/components/tab-style-default"), {
  loading: () => <Loading message="Loading tab preview..." />,
  ssr: false
});
const TableStyleDefault = dynamic(() => import("@/preview/components/table-style-default"), {
  loading: () => <Loading message="Loading table preview..." />,
  ssr: false
});
const TableWithCheckbox = dynamic(() => import("@/preview/components/table-with-checkbox"), {
  loading: () => <Loading message="Loading table preview..." />,
  ssr: false
});
const TableWithStickyHeader = dynamic(() => import("@/preview/components/table-with-sticky-header"), {
  loading: () => <Loading message="Loading table preview..." />,
  ssr: false
});
const TextHeadings = dynamic(() => import("@/preview/components/text-headings"), {
  loading: () => <Loading message="Loading text preview..." />,
  ssr: false
});
const TextareaStyleDefault = dynamic(() => import("@/preview/components/textarea-style-default"), {
  loading: () => <Loading message="Loading textarea preview..." />,
  ssr: false
});
const ToggleGroupStyleDefault = dynamic(() => import("@/preview/components/toggle-group-style-default"), {
  loading: () => <Loading message="Loading toggle group preview..." />,
  ssr: false
});
const ToggleGroupStyleOutlineMuted = dynamic(() => import("@/preview/components/toggle-group-style-outline-muted"), {
  loading: () => <Loading message="Loading toggle group preview..." />,
  ssr: false
});
const ToggleGroupStyleOutlined = dynamic(() => import("@/preview/components/toggle-group-style-outlined"), {
  loading: () => <Loading message="Loading toggle group preview..." />,
  ssr: false
});
const ToggleGroupStyleSolid = dynamic(() => import("@/preview/components/toggle-group-style-solid"), {
  loading: () => <Loading message="Loading toggle group preview..." />,
  ssr: false
});
const ToggleStyleDefault = dynamic(() => import("@/preview/components/toggle-style-default"), {
  loading: () => <Loading message="Loading toggle preview..." />,
  ssr: false
});
const ToggleStyleOutlineMuted = dynamic(() => import("@/preview/components/toggle-style-outline-muted"), {
  loading: () => <Loading message="Loading toggle preview..." />,
  ssr: false
});
const ToggleStyleOutlined = dynamic(() => import("@/preview/components/toggle-style-outlined"), {
  loading: () => <Loading message="Loading toggle preview..." />,
  ssr: false
});
const ToggleStyleSolid = dynamic(() => import("@/preview/components/toggle-style-solid"), {
  loading: () => <Loading message="Loading toggle preview..." />,
  ssr: false
});
const TooltipStyleDefault = dynamic(() => import("@/preview/components/tooltip-style-default"), {
  loading: () => <Loading message="Loading tooltip preview..." />,
  ssr: false
});
const TooltipStylePrimary = dynamic(() => import("@/preview/components/tooltip-style-primary"), {
  loading: () => <Loading message="Loading tooltip preview..." />,
  ssr: false
});
const TooltipStyleSolid = dynamic(() => import("@/preview/components/tooltip-style-solid"), {
  loading: () => <Loading message="Loading tooltip preview..." />,
  ssr: false
});
const TypographyP = dynamic(() => import("@/preview/components/typography-p"), {
  loading: () => <Loading message="Loading typography preview..." />,
  ssr: false
});

// Create preview component info objects for all available previews
const allPreviews: PreviewComponentInfo[] = [
  // Accordion
  createPreviewComponentInfo("accordion-style-default", AccordionStyleDefault),

  // Alert
  createPreviewComponentInfo("alert-style-all-status", AlertStyleAllStatus),
  createPreviewComponentInfo("alert-style-default", AlertStyleDefault),
  createPreviewComponentInfo("alert-style-solid", AlertStyleSolid),
  createPreviewComponentInfo("alert-style-with-icon", AlertStyleWithIcon),

  // Avatar
  createPreviewComponentInfo("avatar-style-circle-fallbacks", AvatarStyleCircleFallbacks),
  createPreviewComponentInfo("avatar-style-circle-sizes", AvatarStyleCircleSizes),
  createPreviewComponentInfo("avatar-style-circle", AvatarStyleCircle),

  // Badge
  createPreviewComponentInfo("badge-style-default", BadgeStyleDefault),
  createPreviewComponentInfo("badge-style-rounded", BadgeStyleRounded),
  createPreviewComponentInfo("badge-style-sizes", BadgeStyleSizes),
  createPreviewComponentInfo("badge-style-variants", BadgeStyleVariants),

  // Breadcrumb
  createPreviewComponentInfo("breadcrumb-custom-separator", BreadcrumbCustomSeparator),
  createPreviewComponentInfo("breadcrumb-link-component", BreadcrumbLinkComponent),
  createPreviewComponentInfo("breadcrumb-style-collapsed", BreadcrumbStyleCollapsed),
  createPreviewComponentInfo("breadcrumb-style-default", BreadcrumbStyleDefault),

  // Button
  createPreviewComponentInfo("button-style-default", ButtonStyleDefault),
  createPreviewComponentInfo("button-style-icon", ButtonStyleIcon),
  createPreviewComponentInfo("button-style-link", ButtonStyleLink),
  createPreviewComponentInfo("button-style-outline", ButtonStyleOutline),
  createPreviewComponentInfo("button-style-secondary", ButtonStyleSecondary),
  createPreviewComponentInfo("button-style-with-icon", ButtonStyleWithIcon),

  // Card
  createPreviewComponentInfo("card-style-commerce", CardStyleCommerce),
  createPreviewComponentInfo("card-style-default", CardStyleDefault),
  createPreviewComponentInfo("card-style-testimonial", CardStyleTestimonial),

  // Checkbox
  createPreviewComponentInfo("checkbox-style-default", CheckboxStyleDefault),
  createPreviewComponentInfo("checkbox-style-sizes", CheckboxStyleSizes),
  createPreviewComponentInfo("checkbox-style-variants", CheckboxStyleVariants),

  // Dialog
  createPreviewComponentInfo("dialog-style-default", DialogStyleDefault),
  createPreviewComponentInfo("dialog-style-width-variant", DialogStyleWidthVariant),
  createPreviewComponentInfo("dialog-style-with-footer", DialogStyleWithFooter),
  createPreviewComponentInfo("dialog-style-with-form", DialogStyleWithForm),

  // Input
  createPreviewComponentInfo("input-style-default", InputStyleDefault),
  createPreviewComponentInfo("input-style-error", InputStyleError),
  createPreviewComponentInfo("input-style-with-label", InputStyleWithLabel),

  // Label
  createPreviewComponentInfo("label-style-default", LabelStyleDefault),
  createPreviewComponentInfo("label", Label),

  // Menu
  createPreviewComponentInfo("menu-style-default", MenuStyleDefault),

  // Popover
  createPreviewComponentInfo("popover-style-default-shadow", PopoverStyleDefaultShadow),
  createPreviewComponentInfo("popover-style-default", PopoverStyleDefault),

  // Progress
  createPreviewComponentInfo("progress-style-default", ProgressStyleDefault),

  // Radio
  createPreviewComponentInfo("radio-style-default", RadioStyleDefault),
  createPreviewComponentInfo("radio-style-sizes", RadioStyleSizes),
  createPreviewComponentInfo("radio-style-variants", RadioStyleVariants),

  // Select
  createPreviewComponentInfo("select-style-default", SelectStyleDefault),

  // Slider
  createPreviewComponentInfo("slider-style-default", SliderStyleDefault),

  // Sonner
  createPreviewComponentInfo("sonner-style-colored-status", SonnerStyleColoredStatus),
  createPreviewComponentInfo("sonner-style-default", SonnerStyleDefault),
  createPreviewComponentInfo("sonner-style-error", SonnerStyleError),
  createPreviewComponentInfo("sonner-style-status", SonnerStyleStatus),

  // Switch
  createPreviewComponentInfo("switch-style-default", SwitchStyleDefault),
  createPreviewComponentInfo("switch-style-disabled", SwitchStyleDisabled),

  // Tab
  createPreviewComponentInfo("tab-style-default", TabStyleDefault),

  // Table
  createPreviewComponentInfo("table-style-default", TableStyleDefault),
  createPreviewComponentInfo("table-with-checkbox", TableWithCheckbox),
  createPreviewComponentInfo("table-with-sticky-header", TableWithStickyHeader),

  // Text
  createPreviewComponentInfo("text-headings", TextHeadings),
  createPreviewComponentInfo("typography-p", TypographyP),

  // Textarea
  createPreviewComponentInfo("textarea-style-default", TextareaStyleDefault),

  // Toggle Group
  createPreviewComponentInfo("toggle-group-style-default", ToggleGroupStyleDefault),
  createPreviewComponentInfo("toggle-group-style-outline-muted", ToggleGroupStyleOutlineMuted),
  createPreviewComponentInfo("toggle-group-style-outlined", ToggleGroupStyleOutlined),
  createPreviewComponentInfo("toggle-group-style-solid", ToggleGroupStyleSolid),

  // Toggle
  createPreviewComponentInfo("toggle-style-default", ToggleStyleDefault),
  createPreviewComponentInfo("toggle-style-outline-muted", ToggleStyleOutlineMuted),
  createPreviewComponentInfo("toggle-style-outlined", ToggleStyleOutlined),
  createPreviewComponentInfo("toggle-style-solid", ToggleStyleSolid),

  // Tooltip
  createPreviewComponentInfo("tooltip-style-default", TooltipStyleDefault),
  createPreviewComponentInfo("tooltip-style-primary", TooltipStylePrimary),
  createPreviewComponentInfo("tooltip-style-solid", TooltipStyleSolid),
];

// Group previews by category using our categorization system
const demoSections = groupPreviewsByCategory(allPreviews);

// Component demonstration wrapper
const PreviewDemo: React.FC<{ preview: PreviewComponentInfo }> = ({ preview }) => {
  // Check if this is a Table component to apply full width
  const isTableComponent = preview.baseComponent === "Table";
  const cardClassName = isTableComponent 
    ? "w-full bg-background shadow-none col-span-1 md:col-span-2 xl:col-span-3" 
    : "w-full bg-background shadow-none";
  
  return (
    <ErrorBoundary>
      <Card className={cardClassName}>
        <Card.Header>
          <Card.Title>{preview.baseComponent} - {preview.name}</Card.Title>
          <Card.Description>{preview.description}</Card.Description>
        </Card.Header>
        <Card.Content>
          <div className="border rounded-sm p-6 flex justify-center items-center min-h-32">
            <preview.component />
          </div>
        </Card.Content>
      </Card>
    </ErrorBoundary>
  );
};

export default function DemoPage() {
  return (
    <main>
      <section style={{ padding: "64px 24px 32px", borderBottom: "1.5px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <BreadcrumbNav />
          <div className="label" style={{ marginBottom: 12 }}>
            Playground · 交互演示
          </div>
          <h1
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 52,
              fontWeight: 500,
              letterSpacing: "-0.03em",
              margin: "0 0 12px",
              lineHeight: 1,
            }}
          >
            Interactive Demo
          </h1>
          <p style={{ fontSize: 16, color: "var(--fg-muted)", maxWidth: 600, lineHeight: 1.65, margin: 0 }}>
            Explore all voidUI component variations in this interactive playground.
            按类别浏览，每个控件都能与当前主题实时联动。
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px" }}>

        <Tabs defaultValue={demoSections[0]?.title}>
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1">
            {demoSections.map((section) => (
              <TabsTrigger
                key={section.title}
                value={section.title}
                className="text-xs sm:text-sm px-2 py-2"
              >
                {section.title.replace(" Components", "")}
              </TabsTrigger>
            ))}
          </TabsList>

          {demoSections.map((section) => (
            <TabsContent key={section.title} value={section.title} className="mt-8">
              <div style={{ marginBottom: 32 }}>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 32,
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.12,
                    margin: "0 0 8px",
                  }}
                >
                  {section.title}
                </h2>
                <p
                  style={{
                    color: "var(--fg-muted)",
                    fontSize: 15,
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {section.description}
                </p>
              </div>

              <div
                className="vui-demo-grid"
                style={{
                  display: "grid",
                  gap: 16,
                  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                }}
              >
                {section.demos.map((preview, index) => (
                  <PreviewDemo key={`${preview.baseComponent}-${preview.name}-${index}`} preview={preview} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      <BackToTop />
    </main>
  );
}
