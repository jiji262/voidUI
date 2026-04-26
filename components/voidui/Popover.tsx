"use client";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as React from "react";
import { cn } from "./_utils";

const PopoverRoot = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;

export const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 6, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-64 rounded-[var(--r,4px)] border-[length:var(--bw,1.5px)] border-border bg-card p-4 shadow-md text-foreground",
        "animate-[vui-slide-up_180ms_ease-out]",
        "data-[state=closed]:opacity-0",
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = "PopoverContent";

export const Popover = Object.assign(PopoverRoot, {
  Trigger: PopoverTrigger,
  Content: PopoverContent,
});
