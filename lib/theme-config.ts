// voidUI v2 theme configuration
// The actual token values live in app/global.css and are switched at runtime
// by setting data-theme + data-mode on <html>. This file exports the ID list
// and human-readable metadata consumed by the theme switcher.

export const THEMES = [
  "neobrutal",
  "swiss",
  "editorial",
  "stripe",
  "hanko",
  "terra",
  "cyber",
  "milktea",
] as const;

export type Theme = (typeof THEMES)[number];
export type Mode = "light" | "dark";

export const DEFAULT_THEME: Theme = "neobrutal";
export const DEFAULT_MODE: Mode = "light";

export const THEME_META: Record<
  Theme,
  { label: string; zh: string; description: string }
> = {
  neobrutal: {
    label: "Neobrutal",
    zh: "新粗野",
    description: "Hard-edged mustard with chunky borders and offset shadows.",
  },
  swiss: {
    label: "Swiss",
    zh: "瑞士",
    description: "Grid-first, sharp red accents, zero radius, hairline borders.",
  },
  editorial: {
    label: "Editorial",
    zh: "文学",
    description: "Warm cream background with serif display type and soft shadows.",
  },
  stripe: {
    label: "Stripe",
    zh: "产品",
    description: "Calm navy product UI with layered soft shadows.",
  },
  hanko: {
    label: "Hanko",
    zh: "印章",
    description: "Japanese-inspired muted blue on warm cream.",
  },
  terra: {
    label: "Terra",
    zh: "土壤",
    description: "Earthy olive-green with warm clay undertones.",
  },
  cyber: {
    label: "Cyber",
    zh: "赛博",
    description: "Monospaced high-contrast terminal palette.",
  },
  milktea: {
    label: "Milk Tea",
    zh: "奶茶",
    description: "Soft rose-beige with generous radius.",
  },
};

export const LS_THEME_KEY = "voidui-theme";
export const LS_MODE_KEY = "voidui-mode";
