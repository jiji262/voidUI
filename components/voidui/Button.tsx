import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { ButtonHTMLAttributes } from "react";

// voidUI v2 — refined: 1.5px borders, measured shadow (sh), 4px radius,
// 1.5px hover translate (from 1px) for perceptible but restrained feedback.
const buttonVariants = cva(
  "font-mono font-medium inline-flex items-center justify-center gap-2 rounded-[4px] border-[1.5px] border-border outline-hidden cursor-pointer transition-all duration-150 tracking-tight",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:shadow-xs hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:bg-primary-hover active:shadow-none active:translate-x-[3px] active:translate-y-[3px]",
        secondary:
          "bg-secondary text-secondary-foreground shadow hover:shadow-xs hover:translate-x-[1.5px] hover:translate-y-[1.5px] active:shadow-none active:translate-x-[3px] active:translate-y-[3px]",
        outline:
          "bg-background text-foreground shadow hover:shadow-xs hover:translate-x-[1.5px] hover:translate-y-[1.5px] active:shadow-none active:translate-x-[3px] active:translate-y-[3px]",
        ghost:
          "bg-transparent border-transparent shadow-none text-foreground hover:bg-muted",
        destructive:
          "bg-destructive text-destructive-foreground shadow hover:shadow-xs hover:translate-x-[1.5px] hover:translate-y-[1.5px] active:shadow-none active:translate-x-[3px] active:translate-y-[3px]",
        link: "bg-transparent shadow-none border-transparent hover:underline p-0",
      },
      size: {
        sm: "px-3 py-1.5 text-xs shadow-xs hover:shadow-none",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base shadow-md hover:shadow-xs",
        icon: "p-2 aspect-square",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  },
);

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      children,
      size = "md",
      className = "",
      variant = "default",
      ...props
    }: IButtonProps,
    forwardedRef,
  ) => (
    <button
      ref={forwardedRef}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  ),
);

Button.displayName = "Button";
