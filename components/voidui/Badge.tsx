import { cn } from "./_utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";

// v3 — semantic variants tied to tokens (no hard-coded colors), tighter scale.
const badgeVariants = cva(
  [
    "inline-flex items-center gap-1.5 font-mono font-medium",
    "text-[11px] uppercase tracking-[0.06em] px-2 py-0.5",
    "border-[length:var(--bw,1.5px)] border-border rounded-[var(--r-sm,2px)]",
    "transition-colors duration-[120ms]",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "bg-card text-foreground",
        primary: "bg-primary text-primary-foreground border-primary",
        secondary: "bg-secondary text-secondary-foreground border-secondary",
        ghost: "border-border-subtle text-muted-foreground bg-transparent",
        destructive: "bg-destructive text-destructive-foreground border-destructive",
        success: "bg-success text-white border-success",
        warning: "bg-warning text-white border-warning",
        info: "bg-info text-white border-info",
        outline: "bg-transparent text-foreground",
        // v1 aliases retained
        solid: "bg-primary text-primary-foreground border-primary",
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
    VariantProps<typeof badgeVariants> {
  dot?: boolean;
}

export const Badge = React.forwardRef<HTMLSpanElement, IBadgeProps>(
  ({ className, variant, size, dot, children, ...props }, ref) => (
    <span ref={ref} className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-current opacity-90" aria-hidden />}
      {children}
    </span>
  ),
);
Badge.displayName = "Badge";
