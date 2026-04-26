"use client";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import * as React from "react";
import { cn } from "./_utils";

const MenuRoot = DropdownMenuPrimitive.Root;
export const MenuTrigger = DropdownMenuPrimitive.Trigger;
export const MenuGroup = DropdownMenuPrimitive.Group;
export const MenuPortal = DropdownMenuPrimitive.Portal;
export const MenuSub = DropdownMenuPrimitive.Sub;
export const MenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

export const MenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 6, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[12rem] overflow-hidden rounded-[var(--r,4px)] border-[length:var(--bw,1.5px)] border-border bg-card p-1 text-foreground shadow-md",
        "animate-[vui-slide-up_180ms_ease-out]",
        "data-[state=closed]:opacity-0",
        className,
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
MenuContent.displayName = "MenuContent";

export const MenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
    destructive?: boolean;
  }
>(({ className, inset, destructive, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-pointer select-none items-center gap-2 rounded-[var(--r-sm,2px)] px-2.5 py-1.5 text-sm outline-none",
      "transition-colors duration-[80ms]",
      "focus:bg-muted",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      destructive && "text-destructive focus:bg-destructive/10 focus:text-destructive",
      className,
    )}
    {...props}
  />
));
MenuItem.displayName = "MenuItem";

export const MenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    checked={checked}
    className={cn(
      "relative flex cursor-pointer select-none items-center rounded-[var(--r-sm,2px)] py-1.5 pl-8 pr-2 text-sm outline-none",
      "focus:bg-muted",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-3.5 w-3.5" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
MenuCheckboxItem.displayName = "MenuCheckboxItem";

export const MenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-pointer select-none items-center rounded-[var(--r-sm,2px)] py-1.5 pl-8 pr-2 text-sm outline-none",
      "focus:bg-muted",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
MenuRadioItem.displayName = "MenuRadioItem";

export const MenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & { inset?: boolean }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-pointer select-none items-center gap-2 rounded-[var(--r-sm,2px)] px-2.5 py-1.5 text-sm outline-none",
      "focus:bg-muted data-[state=open]:bg-muted",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
));
MenuSubTrigger.displayName = "MenuSubTrigger";

export const MenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[10rem] overflow-hidden rounded-[var(--r,4px)] border-[length:var(--bw,1.5px)] border-border bg-card p-1 text-foreground shadow-md",
      className,
    )}
    {...props}
  />
));
MenuSubContent.displayName = "MenuSubContent";

export const MenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-[1.5px] bg-border-subtle", className)}
    {...props}
  />
));
MenuSeparator.displayName = "MenuSeparator";

export const MenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground",
      className,
    )}
    {...props}
  />
));
MenuLabel.displayName = "MenuLabel";

export const MenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={cn(
      "ml-auto font-mono text-[11px] tracking-[0.06em] text-muted-foreground",
      className,
    )}
    {...props}
  />
);

export const Menu = Object.assign(MenuRoot, {
  Trigger: MenuTrigger,
  Content: MenuContent,
  Item: MenuItem,
  CheckboxItem: MenuCheckboxItem,
  RadioItem: MenuRadioItem,
  RadioGroup: MenuRadioGroup,
  Sub: MenuSub,
  SubTrigger: MenuSubTrigger,
  SubContent: MenuSubContent,
  Separator: MenuSeparator,
  Label: MenuLabel,
  Group: MenuGroup,
  Portal: MenuPortal,
  Shortcut: MenuShortcut,
});
