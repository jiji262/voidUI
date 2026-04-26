"use client";
import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "./_utils";
import { Info, CheckCircle2, AlertTriangle, AlertOctagon } from "lucide-react";

// v3 — token-driven backgrounds (no hardcoded hex), inline icon, dismissible
const alertVariants = cva(
  "flex gap-3 p-4 border-[length:var(--bw,1.5px)] border-border rounded-[var(--r,4px)] shadow-sm items-start",
  {
    variants: {
      variant: {
        default: "bg-card text-foreground",
        info: "[background:var(--alert-info-bg)] text-foreground",
        success: "[background:var(--alert-success-bg)] text-foreground",
        warning: "[background:var(--alert-warning-bg)] text-foreground",
        destructive: "[background:var(--alert-danger-bg)] text-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

const ICON: Record<string, React.ComponentType<{ className?: string }>> = {
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  destructive: AlertOctagon,
};

export interface IAlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  icon?: React.ReactNode | false;
}

const AlertBase = React.forwardRef<HTMLDivElement, IAlertProps>(
  ({ className, variant = "default", icon, children, ...props }, ref) => {
    const Auto = variant && variant !== "default" ? ICON[variant] : undefined;
    const renderIcon =
      icon === false
        ? null
        : icon ?? (Auto ? <Auto className="h-4 w-4 mt-0.5 shrink-0" /> : null);
    return (
      <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props}>
        {renderIcon}
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    );
  },
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

export const Alert = Object.assign(AlertBase, {
  Title: AlertTitle,
  Description: AlertDescription,
});
