"use client";
import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";
import { cn } from "./_utils";

// v3 — square block thumb, 6px track, multi-thumb safe
export const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-[6px] w-full grow overflow-hidden border-[length:var(--bw,1.5px)] border-border rounded-[var(--r-sm,2px)] bg-card">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    {(props.value || props.defaultValue || [0]).map((_, i) => (
      <SliderPrimitive.Thumb
        key={i}
        className="block h-4 w-4 border-[length:var(--bw,1.5px)] border-border bg-primary rounded-[var(--r-sm,2px)] shadow-xs transition-transform duration-[120ms] focus-visible:outline-none focus-visible:[box-shadow:var(--focus-ring)] hover:scale-110"
      />
    ))}
  </SliderPrimitive.Root>
));
Slider.displayName = "Slider";
