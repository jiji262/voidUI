import React from "react";

/**
 * voidUI logo mark — a primary-filled square with a mono `v` and a 2px offset
 * shadow. Matches the design's left-nav and footer lockup.
 */
export function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <div
      aria-hidden
      style={{
        width: size,
        height: size,
        border: "1.5px solid var(--border)",
        background: "var(--primary)",
        color: "var(--primary-fg)",
        borderRadius: 4,
        boxShadow: "2px 2px 0 0 var(--border)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-mono)",
        fontWeight: 700,
        fontSize: Math.round(size * 0.54),
        flexShrink: 0,
      }}
    >
      v
    </div>
  );
}

