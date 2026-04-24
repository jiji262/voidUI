import { cn } from "./_utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";

// v2 — mono face, uppercase label treatment, 2px radius (tight), 1.5px border.
// v1 aliases (solid/outline/surface) kept so legacy call sites keep rendering;
// they map to the closest v2 visual.
const badgeVariants = cva(
  "inline-flex items-center gap-1.5 font-mono font-medium text-[11px] uppercase tracking-[0.06em] px-2 py-0.5 border-[1.5px] border-border rounded-[2px]",
  {
    variants: {
      variant: {
        default: "bg-card text-foreground",
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        ghost: "border-border-subtle text-muted-foreground bg-transparent",
        destructive: "bg-destructive text-destructive-foreground",
        success: "bg-[#5C8A55] text-white",
        // v1 aliases
        solid: "bg-primary text-primary-foreground",
        outline: "bg-transparent text-foreground",
        surface: "bg-background-elevated text-foreground",
      },
      size: {
        sm: "text-[10px] px-1.5 py-0",
        md: "",
        lg: "text-xs px-2.5 py-1",
      },
    },
    defaultVariants: { variant: "default", size: "md" },
  },
);

export interface IBadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = React.forwardRef<HTMLSpanElement, IBadgeProps>(
  ({ className, variant, size, ...props }, ref) => (
    <span ref={ref} className={cn(badgeVariants({ variant, size }), className)} {...props} />
  ),
);
Badge.displayName = "Badge";
