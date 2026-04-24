import { cn } from "./_utils";
import React, { InputHTMLAttributes } from "react";

// v2 — 1.5px border, 4px radius, subtle focus lift via shadow
export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ className, type = "text", ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        "w-full font-sans text-sm px-3.5 py-2.5",
        "border-[1.5px] border-border rounded-[4px] bg-card text-foreground",
        "placeholder:text-muted-foreground",
        "outline-none transition-shadow duration-150",
        "focus:shadow-xs",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";
