"use client";
import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "./_utils";

// v2 — restrained palette, soft semantic backgrounds, still bordered+shadowed
const alertVariants = cva(
  "flex gap-3 p-4 border-[1.5px] border-border rounded-[4px] shadow-sm",
  {
    variants: {
      variant: {
        default: "bg-card text-foreground",
        info: "bg-[#EEF3FB] text-foreground dark:bg-[#1a2332]",
        success: "bg-[#EEF5EC] text-foreground dark:bg-[#1a2a1e]",
        warning: "bg-[#FDF2E0] text-foreground dark:bg-[#2a2015]",
        destructive: "bg-[#FBE9E6] text-foreground dark:bg-[#2a1815]",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export interface IAlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

const AlertBase = React.forwardRef<HTMLDivElement, IAlertProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  ),
);
AlertBase.displayName = "Alert";

export const AlertTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("font-mono text-sm font-semibold mb-0.5 tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

export const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

// v1 dot-API kept alongside named exports: <Alert.Title> / <Alert.Description>.
export const Alert = Object.assign(AlertBase, {
  Title: AlertTitle,
  Description: AlertDescription,
});
