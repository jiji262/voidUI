// voidUI v3 theme configuration
// 10 themes × light/dark = 20 complete token sets.
// Token values live in app/global.css and are switched by setting
// data-theme + data-mode on <html>. This file is the source of truth
// for the theme switcher metadata.

export const THEMES = [
  "neobrutal",
  "swiss",
  "editorial",
  "stripe",
  "hanko",
  "terra",
  "cyber",
  "milktea",
  "aurora",
  "mono",
] as const;

export type Theme = (typeof THEMES)[number];
export type Mode = "light" | "dark";

export const DEFAULT_THEME: Theme = "neobrutal";
export const DEFAULT_MODE: Mode = "light";

export const THEME_META: Record<
  Theme,
  { label: string; zh: string; description: string; family: "brutal" | "minimal" | "editorial" | "product" | "playful" }
> = {
  neobrutal: {
    label: "Neobrutal",
    zh: "新粗野",
    description: "Hard-edged mustard with chunky borders and offset shadows.",
    family: "brutal",
  },
  swiss: {
    label: "Swiss",
    zh: "瑞士",
    description: "Grid-first, sharp red accents, zero radius, hairline borders.",
    family: "minimal",
  },
  editorial: {
    label: "Editorial",
    zh: "文学",
    description: "Warm cream background with serif display type and soft shadows.",
    family: "editorial",
  },
  stripe: {
    label: "Stripe",
    zh: "产品",
    description: "Calm navy product UI with layered soft shadows.",
    family: "product",
  },
  hanko: {
    label: "Hanko",
    zh: "印章",
    description: "Japanese-inspired muted blue on warm cream.",
    family: "editorial",
  },
  terra: {
    label: "Terra",
    zh: "土壤",
    description: "Earthy olive-green with warm clay undertones.",
    family: "editorial",
  },
  cyber: {
    label: "Cyber",
    zh: "赛博",
    description: "Monospaced high-contrast terminal palette.",
    family: "brutal",
  },
  milktea: {
    label: "Milk Tea",
    zh: "奶茶",
    description: "Soft rose-beige with generous radius.",
    family: "playful",
  },
  aurora: {
    label: "Aurora",
    zh: "极光",
    description: "Cool minimal indigo on porcelain — calm and modern.",
    family: "product",
  },
  mono: {
    label: "Mono",
    zh: "墨色",
    description: "Pure monochrome. Pixel-tight contrast, zero color, max focus.",
    family: "minimal",
  },
};

export const LS_THEME_KEY = "voidui-theme";
export const LS_MODE_KEY = "voidui-mode";
