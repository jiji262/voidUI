import { cn } from "./_utils";
import React, { HTMLAttributes } from "react";

// v3 — refined modular type scale, tighter on display, comfortable on body
const variants = {
  h1: "font-display text-[var(--fs-5xl,52px)] leading-[1.02] tracking-[-0.03em] font-medium",
  h2: "font-display text-[var(--fs-4xl,40px)] leading-[1.08] tracking-[-0.02em] font-medium",
  h3: "font-display text-[var(--fs-3xl,28px)] leading-[1.18] tracking-[-0.01em] font-medium",
  h4: "font-display text-[var(--fs-xl,20px)] leading-[1.3] font-semibold",
  h5: "font-mono text-base font-semibold",
  h6: "font-mono text-sm font-semibold uppercase tracking-[0.08em]",
  p: "font-sans text-base leading-[1.6]",
  lead: "font-sans text-lg leading-[1.55] text-foreground-muted",
  small: "font-sans text-sm text-muted-foreground",
  muted: "font-sans text-sm text-muted-foreground",
  code: "font-mono text-[0.92em] bg-muted px-1.5 py-0.5 rounded-[var(--r-sm,2px)]",
  label:
    "font-mono text-[11px] uppercase tracking-[0.12em] font-medium text-muted-foreground",
} as const;

interface ITextProps extends HTMLAttributes<HTMLElement> {
  as?: keyof typeof variants;
  className?: string;
}

export const Text = ({ as = "p", className, ...props }: ITextProps) => {
  const tag = (as.startsWith("h")
    ? as
    : as === "code"
      ? "code"
      : "p") as keyof JSX.IntrinsicElements;
  const Tag = tag;
  return <Tag className={cn(variants[as], className)} {...(props as any)} />;
};
Text.displayName = "Text";
