import { cn } from "@/lib/utils";
import React, { TextareaHTMLAttributes } from "react";

export interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, ITextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "w-full font-sans text-sm px-3.5 py-2.5 min-h-[80px]",
        "border-[1.5px] border-border rounded-[4px] bg-card text-foreground",
        "placeholder:text-muted-foreground resize-y",
        "outline-none transition-shadow duration-150 focus:shadow-xs",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className,
      )}
      {...props}
    />
  ),
);
Textarea.displayName = "Textarea";
