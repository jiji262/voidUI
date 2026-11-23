// Internal utilities for @voidui/components.
// Keeping this inside the package so the published tarball is self-contained.

import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
