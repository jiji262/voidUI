import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

// v2 — refined type scale rebuilt in JetBrains Mono for headings,
// tighter tracking (-0.02em on h1/h2), modest size drop
const variants = {
  h1: "font-mono text-[52px] leading-[1] tracking-[-0.03em] font-medium",
  h2: "font-mono text-[40px] leading-[1.1] tracking-[-0.02em] font-medium",
  h3: "font-mono text-[24px] leading-[1.2] tracking-[-0.01em] font-medium",
  h4: "font-mono text-[18px] leading-[1.3] font-semibold",
  h5: "font-mono text-base font-semibold",
  h6: "font-mono text-sm font-semibold uppercase tracking-[0.08em]",
  p: "font-sans text-base leading-[1.55]",
  small: "font-sans text-sm text-muted-foreground",
  label: "font-mono text-[11px] uppercase tracking-[0.12em] font-medium text-muted-foreground",
} as const;

interface ITextProps extends HTMLAttributes<HTMLElement> {
  as?: keyof typeof variants;
  className?: string;
}

export const Text = ({ as = "p", className, ...props }: ITextProps) => {
  const Tag = (as.startsWith("h") ? as : "p") as keyof JSX.IntrinsicElements;
  return <Tag className={cn(variants[as], className)} {...(props as any)} />;
};
Text.displayName = "Text";
