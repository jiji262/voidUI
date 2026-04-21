"use client";
import { Toaster as Sonner } from "sonner";
import * as React from "react";

// v2 — mono face, hard border + shadow to match library voice
type SonnerProps = React.ComponentProps<typeof Sonner>;

export const Toaster = (props: SonnerProps) => {
  return (
    <Sonner
      toastOptions={{
        classNames: {
          toast:
            "font-sans bg-card text-foreground border-[1.5px] border-border rounded-[4px] shadow",
          title: "font-mono font-semibold text-sm",
          description: "text-muted-foreground text-sm",
          actionButton: "bg-primary text-primary-foreground font-mono text-xs px-2 py-1 rounded-[2px] border-[1.5px] border-border",
          cancelButton: "bg-card font-mono text-xs px-2 py-1 rounded-[2px] border-[1.5px] border-border",
          success: "!border-[#5C8A55]",
          error: "!border-destructive",
          warning: "!border-[#D97706]",
          info: "!border-[#4B6FB5]",
        },
      }}
      {...props}
    />
  );
};
