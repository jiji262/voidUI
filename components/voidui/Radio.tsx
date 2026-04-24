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

// v1 legacy props (size / variant) accepted and ignored so old previews type-check.
type RadioGroupItemProps = React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
  size?: "sm" | "md" | "lg";
  variant?: string;
};
export const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, size: _size, variant: _variant, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn(
      "aspect-square h-[18px] w-[18px] inline-flex items-center justify-center",
      "border-[1.5px] border-border rounded-full bg-card shadow-xs",
      "focus:outline-none focus:shadow-sm transition-all duration-150",
      "disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  >
    <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
      <div className="h-2 w-2 rounded-full bg-foreground" />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
));
RadioGroupItem.displayName = "RadioGroupItem";

// v1 dot-API compatibility — typed via Object.assign return
export const RadioGroup = Object.assign(RadioGroupRoot, { Item: RadioGroupItem });
