"use client";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as React from "react";
import { cn } from "@/lib/utils";

export const Tabs = TabsPrimitive.Root;

export const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn("inline-flex items-center border-b-[1.5px] border-border w-full", className)}
    {...props}
  />
));
TabsList.displayName = "TabsList";

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center px-4 py-2.5 font-mono text-xs uppercase tracking-[0.06em]",
      "text-muted-foreground border-b-2 border-transparent -mb-[1.5px]",
      "data-[state=active]:text-foreground data-[state=active]:border-primary data-[state=active]:font-semibold",
      "transition-colors",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = "TabsTrigger";

export const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn("mt-4 focus-visible:outline-none", className)}
    {...props}
  />
));
TabsContent.displayName = "TabsContent";

// v1 → v2 back-compat shims. v1 (Headless UI) had <TabsTriggerList> and
// <TabsPanels> wrappers; Radix drops TabsPanels entirely and renames
// List → TabsList. Under the new Radix API callers must pass `value` to
// TabsTrigger / TabsContent — these aliases only keep imports compiling.
export const TabsTriggerList = TabsList;
export const TabsPanels = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => <div className={className}>{children}</div>;
TabsPanels.displayName = "TabsPanels";
