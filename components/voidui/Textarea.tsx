import { cn } from "./_utils";
import React, { TextareaHTMLAttributes } from "react";

export interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, ITextareaProps>(
  ({ className, invalid, "aria-invalid": ariaInvalid, ...props }, ref) => (
    <textarea
      ref={ref}
      aria-invalid={invalid ?? ariaInvalid}
      className={cn(
        "w-full font-sans text-sm px-3.5 py-2.5 min-h-[88px]",
        "border-[length:var(--bw,1.5px)] border-border rounded-[var(--r,4px)] bg-card text-foreground",
        "placeholder:text-muted-foreground resize-y leading-[1.55]",
        "outline-none transition-[box-shadow,border-color] duration-[120ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]",
        "hover:border-foreground-muted",
        "focus-visible:border-primary focus-visible:[box-shadow:var(--focus-ring)]",
        "aria-[invalid=true]:border-destructive",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className,
      )}
      {...props}
    />
  ),
);
Textarea.displayName = "Textarea";
