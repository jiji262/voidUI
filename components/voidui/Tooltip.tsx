"use client";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as React from "react";
import { cn } from "./_utils";

export const TooltipProvider = TooltipPrimitive.Provider;
const TooltipRoot = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;

export const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 6, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-[var(--r-sm,2px)] border-[length:var(--bw,1.5px)] border-border",
      "bg-foreground text-background px-2.5 py-1 font-mono text-xs shadow-sm",
      "data-[state=delayed-open]:animate-[vui-fade-in_120ms_ease-out]",
      "data-[state=closed]:opacity-0",
      className,
    )}
    {...props}
  />
));
TooltipContent.displayName = "TooltipContent";

export const Tooltip = Object.assign(TooltipRoot, {
  Trigger: TooltipTrigger,
  Content: TooltipContent,
  Provider: TooltipProvider,
});
