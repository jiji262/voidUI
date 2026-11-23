"use client";

import React from "react";

export function Logo({
  size = 28,
  withWordmark = true,
}: {
  size?: number;
  withWordmark?: boolean;
}) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <span
        aria-hidden="true"
        style={{
          width: size,
          height: size,
          border: "1.5px solid var(--border)",
          background: "var(--primary)",
          color: "var(--primary-fg)",
          borderRadius: "var(--r)",
          boxShadow: "var(--sh-xs)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-mono)",
          fontWeight: 700,
          fontSize: Math.max(11, Math.round(size * 0.55)),
          flexShrink: 0,
          lineHeight: 1,
        }}
      >
        v
      </span>
      {withWordmark && (
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 17,
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          voidUI
        </span>
      )}
    </span>
  );
}

export default Logo;
