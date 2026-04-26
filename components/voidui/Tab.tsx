"use client";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as React from "react";
import { cn } from "./_utils";

export const Tabs = TabsPrimitive.Root;

export const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex items-center border-b-[length:var(--bw,1.5px)] border-border w-full gap-1",
      className,
    )}
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
      "transition-colors duration-[150ms]",
      "hover:text-foreground",
      "data-[state=active]:text-foreground data-[state=active]:border-primary data-[state=active]:font-semibold",
      "focus-visible:outline-none focus-visible:[box-shadow:var(--focus-ring)] rounded-[var(--r-sm,2px)]",
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
    className={cn(
      "mt-4 focus-visible:outline-none animate-[vui-fade-in_180ms_ease-out]",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = "TabsContent";

export const TabsTriggerList = TabsList;
export const TabsPanels = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => <div className={className}>{children}</div>;
TabsPanels.displayName = "TabsPanels";
