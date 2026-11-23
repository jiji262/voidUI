"use client";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, Minus } from "lucide-react";
import * as React from "react";
import { cn } from "./_utils";

type CheckboxProps = React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
  size?: "sm" | "md" | "lg";
  variant?: string;
};

const sizeStyle = {
  sm: "h-4 w-4 [&_svg]:h-2.5 [&_svg]:w-2.5",
  md: "h-[18px] w-[18px] [&_svg]:h-3 [&_svg]:w-3",
  lg: "h-5 w-5 [&_svg]:h-3.5 [&_svg]:w-3.5",
};

export const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, size = "md", variant: _variant, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer inline-flex shrink-0 items-center justify-center",
      "border-[length:var(--bw,1.5px)] border-border rounded-[var(--r-sm,2px)] bg-card",
      "shadow-xs transition-[background-color,box-shadow,border-color] duration-[120ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]",
      "focus:outline-none focus-visible:[box-shadow:var(--focus-ring)]",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary",
      "data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground data-[state=indeterminate]:border-primary",
      sizeStyle[size],
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
      {props.checked === "indeterminate" ? (
        <Minus className="stroke-[3]" />
      ) : (
        <Check className="stroke-[3]" />
      )}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
