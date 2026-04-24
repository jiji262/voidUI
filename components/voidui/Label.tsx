import { cn } from "./_utils";
import React, { LabelHTMLAttributes } from "react";

export interface ILabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

// v2 — mono uppercase treatment for clearer form hierarchy
export const Label = React.forwardRef<HTMLLabelElement, ILabelProps>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        "font-mono text-xs font-semibold uppercase tracking-[0.08em] text-foreground",
        "inline-block mb-1.5",
        className,
      )}
      {...props}
    />
  ),
);
Label.displayName = "Label";
