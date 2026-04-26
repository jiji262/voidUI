"use client";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import * as React from "react";
import { cn } from "./_utils";

const RadioGroupRoot = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    className={cn("grid gap-2", className)}
    {...props}
  />
));
RadioGroupRoot.displayName = "RadioGroup";

type RadioGroupItemProps = React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
  size?: "sm" | "md" | "lg";
  variant?: string;
};
const sizeStyle = {
  sm: "h-4 w-4 [&_div]:h-1.5 [&_div]:w-1.5",
  md: "h-[18px] w-[18px] [&_div]:h-2 [&_div]:w-2",
  lg: "h-5 w-5 [&_div]:h-2.5 [&_div]:w-2.5",
};
export const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, size = "md", variant: _variant, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn(
      "aspect-square inline-flex items-center justify-center",
      "border-[length:var(--bw,1.5px)] border-border rounded-full bg-card shadow-xs",
      "focus:outline-none focus-visible:[box-shadow:var(--focus-ring)]",
      "transition-[border-color,box-shadow] duration-[120ms]",
      "data-[state=checked]:border-primary",
      "disabled:cursor-not-allowed disabled:opacity-50",
      sizeStyle[size],
      className,
    )}
    {...props}
  >
    <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
      <div className="rounded-full bg-primary" />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
));
RadioGroupItem.displayName = "RadioGroupItem";

export const RadioGroup = Object.assign(RadioGroupRoot, { Item: RadioGroupItem });
