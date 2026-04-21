"use client";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center font-mono text-sm font-medium transition-all rounded-[4px] disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-transparent hover:bg-muted data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",
        outline: "border-[1.5px] border-border bg-transparent shadow-xs hover:bg-muted data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",
        solid: "border-[1.5px] border-border bg-card shadow-xs data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:shadow-sm",
      },
      size: {
        sm: "h-8 px-2.5",
        md: "h-9 px-3",
        lg: "h-10 px-4",
      },
    },
    defaultVariants: { variant: "default", size: "md" },
  },
);

export const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size }), className)}
    {...props}
  />
));
Toggle.displayName = "Toggle";

export { toggleVariants };
