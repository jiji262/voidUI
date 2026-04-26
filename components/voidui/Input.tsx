import { cn } from "./_utils";
import React, { InputHTMLAttributes } from "react";

// v3 — adds error/success state via aria-invalid, optional adornments via wrapping
export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ className, type = "text", invalid, "aria-invalid": ariaInvalid, ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      aria-invalid={invalid ?? ariaInvalid}
      className={cn(
        "w-full font-sans text-sm px-3.5 py-2.5",
        "border-[length:var(--bw,1.5px)] border-border rounded-[var(--r,4px)] bg-card text-foreground",
        "placeholder:text-muted-foreground",
        "outline-none transition-[box-shadow,border-color] duration-[120ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]",
        "hover:border-foreground-muted",
        "focus-visible:border-primary focus-visible:[box-shadow:var(--focus-ring)]",
        "aria-[invalid=true]:border-destructive aria-[invalid=true]:[box-shadow:0_0_0_3px_color-mix(in_oklch,var(--danger)_25%,transparent)]",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "read-only:bg-muted/40",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";
