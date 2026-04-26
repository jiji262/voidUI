"use client";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import * as React from "react";
import { cn } from "./_utils";

type SwitchProps = React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> & {
  size?: "sm" | "md" | "lg";
};

const shell = {
  sm: "h-[18px] w-8",
  md: "h-[22px] w-10",
  lg: "h-[26px] w-12",
};
const thumb = {
  sm: "h-[12px] w-[12px] data-[state=checked]:translate-x-[14px]",
  md: "h-[15px] w-[15px] data-[state=checked]:translate-x-[18px]",
  lg: "h-[18px] w-[18px] data-[state=checked]:translate-x-[22px]",
};

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, size = "md", ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    className={cn(
      "peer inline-flex shrink-0 cursor-pointer items-center",
      "border-[length:var(--bw,1.5px)] border-border rounded-full p-0.5",
      "transition-colors duration-[150ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]",
      "focus-visible:outline-none focus-visible:[box-shadow:var(--focus-ring)]",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "data-[state=checked]:bg-primary data-[state=unchecked]:bg-card",
      "data-[state=checked]:border-primary",
      shell[size],
      className,
    )}
    {...props}
  >
    <SwitchPrimitive.Thumb
      className={cn(
        "pointer-events-none block rounded-full",
        "bg-foreground data-[state=checked]:bg-primary-foreground",
        "ring-0 transition-transform duration-[200ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]",
        thumb[size],
      )}
    />
  </SwitchPrimitive.Root>
));
Switch.displayName = "Switch";
