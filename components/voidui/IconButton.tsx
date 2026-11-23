"use client";
import { cn } from "./_utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { ButtonHTMLAttributes } from "react";

const iconButtonVariants = cva(
  [
    "inline-flex items-center justify-center cursor-pointer aspect-square",
    "border-[length:var(--bw,1.5px)] border-border rounded-[var(--r,4px)]",
    "transition-[transform,box-shadow,background-color] duration-[120ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]",
    "focus-visible:outline-none focus-visible:[box-shadow:var(--focus-ring)]",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "bg-card text-foreground shadow",
        primary: "bg-primary text-primary-foreground shadow hover:bg-primary-hover",
        secondary: "bg-secondary text-secondary-foreground shadow",
        ghost: "border-transparent shadow-none hover:bg-muted",
        destructive: "bg-destructive text-destructive-foreground shadow",
      },
      size: {
        sm: "h-8 w-8 [&_svg]:h-4 [&_svg]:w-4",
        md: "h-9 w-9 [&_svg]:h-4 [&_svg]:w-4",
        lg: "h-11 w-11 [&_svg]:h-5 [&_svg]:w-5",
      },
    },
    defaultVariants: { variant: "default", size: "md" },
  },
);

export interface IIconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  /** Required for accessibility — describes what the button does */
  "aria-label": string;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IIconButtonProps>(
  ({ children, size, className, variant, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(iconButtonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  ),
);
IconButton.displayName = "IconButton";
