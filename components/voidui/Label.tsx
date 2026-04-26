import { cn } from "./_utils";
import React, { LabelHTMLAttributes } from "react";

export interface ILabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

// v3 — required asterisk + improved tap target via inline-flex
export const Label = React.forwardRef<HTMLLabelElement, ILabelProps>(
  ({ className, required, children, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        "font-mono text-xs font-semibold uppercase tracking-[0.08em] text-foreground",
        "inline-flex items-center gap-1 mb-1.5",
        className,
      )}
      {...props}
    >
      {children}
      {required && (
        <span className="text-destructive" aria-hidden>
          *
        </span>
      )}
    </label>
  ),
);
Label.displayName = "Label";
