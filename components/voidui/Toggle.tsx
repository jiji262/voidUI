"use client";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "./_utils";

const toggleVariants = cva(
  [
    "inline-flex items-center justify-center font-mono text-sm font-medium gap-2",
    "rounded-[var(--r,4px)] transition-[background-color,color,box-shadow,border-color] duration-[120ms]",
    "disabled:opacity-50 disabled:pointer-events-none",
    "focus-visible:outline-none focus-visible:[box-shadow:var(--focus-ring)]",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bg-transparent hover:bg-muted data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",
        outline:
          "border-[length:var(--bw,1.5px)] border-border bg-transparent shadow-xs hover:bg-muted data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:border-primary",
        solid:
          "border-[length:var(--bw,1.5px)] border-border bg-card shadow-xs data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:border-primary data-[state=on]:shadow-sm",
        // v1 aliases
        outlined:
          "border-[length:var(--bw,1.5px)] border-border bg-transparent shadow-xs hover:bg-muted data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",
        "outline-muted":
          "border-[length:var(--bw,1.5px)] border-border-subtle bg-transparent hover:bg-muted data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",
      },
      size: {
        sm: "h-8 px-2.5 text-xs",
        md: "h-9 px-3",
        lg: "h-10 px-4",
      },
    },
    defaultVariants: { variant: "default", size: "md" },
  },
);

export const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size }), className)}
    {...props}
  />
));
Toggle.displayName = "Toggle";

export { toggleVariants };
