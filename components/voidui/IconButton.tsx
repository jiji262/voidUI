import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { ButtonHTMLAttributes } from "react";

const iconButtonVariants = cva(
  "inline-flex items-center justify-center transition-all duration-150 cursor-pointer border-[1.5px] border-border rounded-[4px] aspect-square",
  {
    variants: {
      variant: {
        default: "bg-card text-foreground shadow hover:shadow-xs hover:translate-x-[1.5px] hover:translate-y-[1.5px]",
        primary: "bg-primary text-primary-foreground shadow hover:shadow-xs hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:bg-primary-hover",
        ghost: "border-transparent shadow-none hover:bg-muted",
      },
      size: {
        sm: "h-8 w-8",
        md: "h-9 w-9",
        lg: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "default", size: "md" },
  },
);

export interface IIconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {}

export const IconButton = React.forwardRef<HTMLButtonElement, IIconButtonProps>(
  ({ children, size, className, variant, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(iconButtonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  ),
);
IconButton.displayName = "IconButton";
