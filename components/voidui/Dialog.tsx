"use client";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import * as React from "react";
import { cn } from "./_utils";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-foreground/40 backdrop-blur-[2px]",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = "DialogOverlay";

type DialogContentProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
  // v1 legacy: size constrained max-width (sm/md/lg/xl)
  size?: "sm" | "md" | "lg" | "xl" | string;
};
const SIZE_MAX_WIDTH: Record<string, string> = {
  sm: "max-w-sm", md: "max-w-md", lg: "max-w-lg", xl: "max-w-xl",
};
const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>(({ className, children, size, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4",
        size ? SIZE_MAX_WIDTH[size] ?? "max-w-lg" : "max-w-lg",
        "bg-card border-[1.5px] border-border rounded-[4px] shadow-lg p-6",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = "DialogContent";

// v1 legacy props (`position`, `asChild`) are accepted and ignored so old
// dialog-* previews type-check without warnings.
type DialogSectionProps = React.HTMLAttributes<HTMLDivElement> & {
  position?: string;
  asChild?: boolean;
};

const DialogHeader = ({ className, position: _p, asChild: _a, ...props }: DialogSectionProps) => (
  <div className={cn("flex flex-col gap-1", className)} {...props} />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({ className, position: _p, asChild: _a, ...props }: DialogSectionProps) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end gap-2", className)}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("font-mono text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
DialogTitle.displayName = "DialogTitle";

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = "DialogDescription";

// v1 dot-API compatibility — typed via Object.assign return
const DialogWithDot = Object.assign(Dialog, {
  Trigger: DialogTrigger,
  Content: DialogContent,
  Header: DialogHeader,
  Footer: DialogFooter,
  Title: DialogTitle,
  Description: DialogDescription,
  Close: DialogClose,
  Portal: DialogPortal,
  Overlay: DialogOverlay,
});

export {
  DialogWithDot as Dialog,
  DialogTrigger, DialogClose, DialogPortal, DialogOverlay,
  DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription,
};
