"use client";
import { cn } from "./_utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { ButtonHTMLAttributes } from "react";

// voidUI v3 — refined neobrutalism with theme-aware motion.
// Adds: loading state, iconLeft/iconRight slots, fullWidth.
const buttonVariants = cva(
  [
    "relative font-mono font-medium inline-flex items-center justify-center gap-2 select-none",
    "rounded-[var(--r,4px)] border-[length:var(--bw,1.5px)] border-border outline-hidden cursor-pointer tracking-tight",
    "transition-[transform,box-shadow,background-color,border-color,color] duration-[120ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
    "focus-visible:[box-shadow:var(--focus-ring)]",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary-hover",
        secondary:
          "bg-secondary text-secondary-foreground shadow",
        outline:
          "bg-background text-foreground shadow",
        ghost:
          "bg-transparent border-transparent shadow-none text-foreground hover:bg-muted",
        destructive:
          "bg-destructive text-destructive-foreground shadow",
        link: "bg-transparent shadow-none border-transparent hover:underline p-0 text-foreground",
      },
      size: {
        sm: "px-3 py-1.5 text-xs shadow-xs",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base shadow-md",
        icon: "p-2 aspect-square",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
      fullWidth: false,
    },
  },
);

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      children,
      size = "md",
      className = "",
      variant = "default",
      fullWidth,
      loading = false,
      disabled,
      iconLeft,
      iconRight,
      ...props
    },
    forwardedRef,
  ) => (
    <button
      ref={forwardedRef}
      data-vui="button"
      data-loading={loading || undefined}
      disabled={disabled || loading}
      className={cn(
        buttonVariants({ variant, size, fullWidth }),
        // Theme-aware press behavior; CSS picks the right reaction per [data-theme]
        "data-[vui=button]:hover:[transform:translate(var(--btn-hov-x,1.5px),var(--btn-hov-y,1.5px))]",
        "data-[vui=button]:active:[transform:translate(var(--btn-act-x,3px),var(--btn-act-y,3px))]",
        className,
      )}
      {...props}
    >
      {loading && (
        <span
          aria-hidden
          className="vui-spin inline-block w-3.5 h-3.5 rounded-full border-2 border-current border-r-transparent"
        />
      )}
      {!loading && iconLeft ? <span className="inline-flex">{iconLeft}</span> : null}
      <span className={cn(loading && "opacity-80")}>{children}</span>
      {!loading && iconRight ? <span className="inline-flex">{iconRight}</span> : null}
    </button>
  ),
);

Button.displayName = "Button";
