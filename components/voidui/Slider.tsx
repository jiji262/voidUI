"use client";
import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";
import { cn } from "./_utils";

// v2 — square block thumb for neobrutalist DNA, 2px track
export const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none select-none items-center", className)}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-[6px] w-full grow overflow-hidden border-[1.5px] border-border rounded-[2px] bg-card">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-4 w-4 border-[1.5px] border-border bg-primary rounded-[2px] shadow-xs transition-all duration-100 focus-visible:outline-none focus-visible:shadow-sm disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = "Slider";
