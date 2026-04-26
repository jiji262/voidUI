"use client";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import * as React from "react";
import { cn } from "./_utils";

type ProgressProps = React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
  size?: "sm" | "md" | "lg";
  indeterminate?: boolean;
};

const sizeMap = { sm: "h-2", md: "h-[14px]", lg: "h-4" };

export const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, size = "md", indeterminate, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative w-full overflow-hidden border-[length:var(--bw,1.5px)] border-border rounded-[var(--r-sm,2px)] bg-card shadow-xs",
      sizeMap[size],
      className,
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(
        "h-full w-full flex-1 bg-primary",
        indeterminate
          ? "animate-[vui-shimmer_1.4s_ease-in-out_infinite] [background:linear-gradient(90deg,var(--primary)_0%,color-mix(in_oklch,var(--primary)_70%,transparent)_50%,var(--primary)_100%)] [background-size:400px_100%]"
          : "transition-transform duration-[300ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]",
      )}
      style={
        indeterminate
          ? undefined
          : { transform: `translateX(-${100 - (value || 0)}%)` }
      }
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = "Progress";
