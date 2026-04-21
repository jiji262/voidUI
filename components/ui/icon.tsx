"use client";

import * as React from "react";

/**
 * Icon — unified inline-SVG set from the Claude Design handoff.
 * Mono-style 1.5px strokes. `currentColor` for all strokes/fills unless noted.
 */

export type IconName =
  | "arrow-right" | "arrow-up-right" | "github" | "sun" | "moon"
  | "search" | "copy" | "check" | "x" | "chevron-down" | "chevron-right"
  | "menu" | "sparkle" | "box" | "layers" | "palette" | "zap" | "code"
  | "external" | "plus" | "minus" | "circle" | "dot" | "info" | "alert"
  | "grid" | "home" | "book" | "play" | "bell" | "heart" | "star"
  | "download" | "settings";

export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  name: IconName;
  size?: number;
}

export const Icon = ({ name, size = 16, className, style, ...rest }: IconProps) => {
  const baseProps = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    style,
    ...rest,
  };
  switch (name) {
    case "arrow-right":
      return (<svg {...baseProps}><path d="M5 12h14M13 5l7 7-7 7"/></svg>);
    case "arrow-up-right":
      return (<svg {...baseProps}><path d="M7 17 17 7M7 7h10v10"/></svg>);
    case "github":
      return (<svg {...baseProps}><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg>);
    case "sun":
      return (<svg {...baseProps}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>);
    case "moon":
      return (<svg {...baseProps}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>);
    case "search":
      return (<svg {...baseProps}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>);
    case "copy":
      return (<svg {...baseProps}><rect x="9" y="9" width="13" height="13" rx="1"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>);
    case "check":
      return (<svg {...baseProps}><path d="m5 12 5 5L20 7"/></svg>);
    case "x":
      return (<svg {...baseProps}><path d="M18 6 6 18M6 6l12 12"/></svg>);
    case "chevron-down":
      return (<svg {...baseProps}><path d="m6 9 6 6 6-6"/></svg>);
    case "chevron-right":
      return (<svg {...baseProps}><path d="m9 6 6 6-6 6"/></svg>);
    case "menu":
      return (<svg {...baseProps}><path d="M4 6h16M4 12h16M4 18h16"/></svg>);
    case "sparkle":
      return (<svg {...baseProps}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.5 5.5l2.8 2.8M15.7 15.7l2.8 2.8M5.5 18.5l2.8-2.8M15.7 8.3l2.8-2.8"/></svg>);
    case "box":
      return (<svg {...baseProps}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="m3.27 6.96 8.73 5.05 8.73-5.05M12 22.08V12"/></svg>);
    case "layers":
      return (<svg {...baseProps}><path d="m12 2 10 6-10 6L2 8l10-6zM2 17l10 6 10-6M2 12l10 6 10-6"/></svg>);
    case "palette":
      return (<svg {...baseProps}><circle cx="13.5" cy="6.5" r="1.5"/><circle cx="17.5" cy="10.5" r="1.5"/><circle cx="8.5" cy="7.5" r="1.5"/><circle cx="6.5" cy="12.5" r="1.5"/><path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 3 3 0 0 0 3-3 2 2 0 0 0-.5-1.3c-.4-.4-.5-.8-.5-1.2a2 2 0 0 1 2-2h2a4 4 0 0 0 4-4 10 10 0 0 0-10-9.5z"/></svg>);
    case "zap":
      return (<svg {...baseProps}><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>);
    case "code":
      return (<svg {...baseProps}><path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/></svg>);
    case "external":
      return (<svg {...baseProps}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6M10 14 21 3"/></svg>);
    case "plus":
      return (<svg {...baseProps}><path d="M12 5v14M5 12h14"/></svg>);
    case "minus":
      return (<svg {...baseProps}><path d="M5 12h14"/></svg>);
    case "circle":
      return (<svg {...baseProps}><circle cx="12" cy="12" r="9"/></svg>);
    case "dot":
      return (<svg {...baseProps} fill="currentColor"><circle cx="12" cy="12" r="3"/></svg>);
    case "info":
      return (<svg {...baseProps}><circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/></svg>);
    case "alert":
      return (<svg {...baseProps}><path d="M10.3 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01"/></svg>);
    case "grid":
      return (<svg {...baseProps}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>);
    case "home":
      return (<svg {...baseProps}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>);
    case "book":
      return (<svg {...baseProps}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>);
    case "play":
      return (<svg {...baseProps}><path d="M6 3v18l15-9z"/></svg>);
    case "bell":
      return (<svg {...baseProps}><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"/></svg>);
    case "heart":
      return (<svg {...baseProps}><path d="M20.84 4.6a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.07a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.79 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>);
    case "star":
      return (<svg {...baseProps}><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/></svg>);
    case "download":
      return (<svg {...baseProps}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>);
    case "settings":
      return (<svg {...baseProps}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.01a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.01a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>);
    default:
      return null;
  }
};
