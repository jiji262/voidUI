"use client";

import React from "react";

export type TestimonialAuthor = {
  name: string;
  role: string;
  company?: string;
  initials?: string;
  avatarBg?: string;
};

export function Testimonial({
  quote,
  author,
  variant = "card",
  rating,
}: {
  quote: string;
  author: TestimonialAuthor;
  variant?: "card" | "quote" | "compact";
  rating?: number;
}) {
  const initials =
    author.initials ||
    author.name
      .split(/\s+/)
      .map((s) => s[0])
      .slice(0, 2)
      .join("");
  const avatarBg = author.avatarBg || "var(--accent-2)";

  if (variant === "quote") {
    return (
      <figure style={{ margin: 0 }}>
        <blockquote
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 22,
            lineHeight: 1.45,
            margin: 0,
            color: "var(--fg)",
            letterSpacing: "-0.01em",
          }}
        >
          &ldquo;{quote}&rdquo;
        </blockquote>
        <figcaption
          style={{
            marginTop: 18,
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 13,
            color: "var(--fg-muted)",
          }}
        >
          <Avatar initials={initials} bg={avatarBg} size={36} />
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontWeight: 600, color: "var(--fg)" }}>
              {author.name}
            </div>
            <div>
              {author.role}
              {author.company ? `, ${author.company}` : ""}
            </div>
          </div>
        </figcaption>
      </figure>
    );
  }

  if (variant === "compact") {
    return (
      <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
        <Avatar initials={initials} bg={avatarBg} size={36} />
        <div>
          <p style={{ margin: "0 0 6px", fontSize: 14, lineHeight: 1.5 }}>
            &ldquo;{quote}&rdquo;
          </p>
          <div style={{ fontSize: 12, color: "var(--fg-muted)", fontFamily: "var(--font-mono)" }}>
            {author.name} · {author.role}
            {author.company ? `, ${author.company}` : ""}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card" style={{ padding: 22 }}>
      {typeof rating === "number" && (
        <div style={{ display: "flex", gap: 2, marginBottom: 12 }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              aria-hidden="true"
              style={{
                fontSize: 13,
                color: i < rating ? "var(--primary)" : "var(--border-subtle)",
              }}
            >
              ★
            </span>
          ))}
        </div>
      )}
      <p style={{ margin: "0 0 16px", fontSize: 15, lineHeight: 1.55 }}>
        &ldquo;{quote}&rdquo;
      </p>
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <Avatar initials={initials} bg={avatarBg} size={36} />
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 600 }}>
            {author.name}
          </div>
          <div style={{ fontSize: 12, color: "var(--fg-muted)" }}>
            {author.role}
            {author.company ? `, ${author.company}` : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

function Avatar({ initials, bg, size }: { initials: string; bg: string; size: number }) {
  return (
    <span
      style={{
        width: size,
        height: size,
        border: "1.5px solid var(--border)",
        borderRadius: "50%",
        background: bg,
        color: "var(--primary-fg)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-mono)",
        fontWeight: 600,
        fontSize: Math.max(11, Math.round(size * 0.4)),
        flexShrink: 0,
        textTransform: "uppercase",
      }}
    >
      {initials}
    </span>
  );
}

export default Testimonial;
