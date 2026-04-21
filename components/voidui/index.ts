// voidUI v2 — Refined neobrutalism + 8-theme token system
// Barrel export. Includes v1 back-compat aliases (Tab/Sonner/Radio/...) so
// callers migrating from v1 don't have to touch import statements.

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./Accordion";
export { Alert, AlertTitle, AlertDescription } from "./Alert";
export { Avatar, AvatarImage, AvatarFallback } from "./Avatar";
export { Badge } from "./Badge";
export { BasicCard } from "./BasicCard";
export {
  Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink,
  BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis,
} from "./Breadcrumb";
export { Button } from "./Button";
export { Card } from "./Card";
export { Checkbox } from "./Checkbox";
export { CommandDisplay } from "./CommandDisplay";
export {
  Dialog, DialogTrigger, DialogClose, DialogPortal, DialogOverlay,
  DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription,
} from "./Dialog";
export { IconButton } from "./IconButton";
export { Input } from "./Input";
export { Label } from "./Label";
export { Login } from "./Login";
export { Menu, MenuTrigger, MenuContent, MenuItem, MenuSeparator, MenuLabel, MenuGroup, MenuPortal } from "./Menu";
export { Popover, PopoverTrigger, PopoverContent } from "./Popover";
export { ProductCard } from "./ProductCard";
export { Progress } from "./Progress";
export { RadioGroup, RadioGroupItem } from "./Radio";
// v1 alias: `Radio` → `RadioGroup`
export { RadioGroup as Radio } from "./Radio";
export {
  Select, SelectGroup, SelectValue, SelectTrigger, SelectContent,
  SelectLabel, SelectItem, SelectSeparator,
} from "./Select";
export { Slider } from "./Slider";
// v1 alias: `Sonner` → `Toaster`
export { Toaster, Toaster as Sonner } from "./Sonner";
export { Switch } from "./Switch";
// v1 aliases: `Tab` / `TabsTriggerList` / `TabsPanels` kept for migration
export {
  Tabs, Tabs as Tab, TabsList, TabsList as TabsTriggerList,
  TabsTrigger, TabsContent, TabsPanels,
} from "./Tab";
export {
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption,
} from "./Table";
export { Text } from "./Text";
export { Textarea } from "./Textarea";
export { Toggle, toggleVariants } from "./Toggle";
export { ToggleGroup, ToggleGroupItem } from "./ToggleGroup";
export { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "./Tooltip";
