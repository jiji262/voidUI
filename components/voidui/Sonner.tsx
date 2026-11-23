"use client";
import { Toaster as Sonner } from "sonner";
import * as React from "react";
import { cn } from "./_utils";

type SonnerProps = React.ComponentProps<typeof Sonner>;

export const Toaster = ({ toastOptions, ...props }: SonnerProps) => {
  return (
    <Sonner
      toastOptions={{
        ...toastOptions,
        classNames: {
          toast: cn(
            "font-sans bg-card text-foreground border-[length:var(--bw,1.5px)] border-border rounded-[var(--r,4px)] shadow-md",
            toastOptions?.classNames?.toast,
          ),
          title: cn("font-mono font-semibold text-sm", toastOptions?.classNames?.title),
          description: cn("text-muted-foreground text-sm", toastOptions?.classNames?.description),
          actionButton: cn(
            "bg-primary text-primary-foreground font-mono text-xs px-2 py-1 rounded-[var(--r-sm,2px)] border-[length:var(--bw,1.5px)] border-border",
            toastOptions?.classNames?.actionButton,
          ),
          cancelButton: cn(
            "bg-card font-mono text-xs px-2 py-1 rounded-[var(--r-sm,2px)] border-[length:var(--bw,1.5px)] border-border",
            toastOptions?.classNames?.cancelButton,
          ),
          // Tailwind ! prefix forces specificity over Sonner's
          // built-in per-state border colors. Keeping the bang here
          // is the documented Tailwind way to say "important", not a
          // hack — these need to win against the default toast styles.
          success: cn("!border-success", toastOptions?.classNames?.success),
          error: cn("!border-destructive", toastOptions?.classNames?.error),
          warning: cn("!border-warning", toastOptions?.classNames?.warning),
          info: cn("!border-info", toastOptions?.classNames?.info),
        },
      }}
      {...props}
    />
  );
};
