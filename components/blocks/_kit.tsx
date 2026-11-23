"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/voidui";
import { ArrowLeftIcon } from "lucide-react";

/**
 * Shared block-page chrome used by every /blocks/* page.
 * Token-driven, light/dark agnostic. No hard-coded colors.
 */

export function BlockPage({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <section
        style={{
          padding: "64px 24px 32px",
          borderBottom: "1.5px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="label" style={{ marginBottom: 12 }}>{eyebrow}</div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              margin: "0 0 12px",
              lineHeight: 1.0,
            }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              style={{
                fontSize: 16,
                color: "var(--fg-muted)",
                maxWidth: 640,
                margin: 0,
                lineHeight: 1.65,
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </section>

      <section style={{ padding: "48px 24px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 36,
          }}
        >
          {children}
        </div>
      </section>

      <section style={{ padding: "0 24px 64px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <Link href="/blocks" style={{ textDecoration: "none" }}>
            <Button variant="outline">
              <ArrowLeftIcon size={14} />
              All blocks
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}

export function BlockShowcase({
  name,
  tag,
  bg,
  children,
  description,
}: {
  name: string;
  tag?: string;
  bg?: "bg" | "elev" | "primary" | "fg";
  description?: string;
  children: React.ReactNode;
}) {
  const bgMap = {
    bg: "var(--bg)",
    elev: "var(--bg-elev)",
    primary: "var(--primary)",
    fg: "var(--fg)",
  } as const;
  return (
    <div className="card" style={{ overflow: "hidden", padding: 0 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 16px",
          borderBottom: "1.5px solid var(--border-subtle)",
          background: "var(--bg)",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "-0.005em",
            }}
          >
            {name}
          </span>
          {tag && <span className="badge ghost">{tag}</span>}
          {description && (
            <span style={{ fontSize: 12, color: "var(--fg-muted)" }}>{description}</span>
          )}
        </div>
      </div>
      <div style={{ background: bgMap[bg ?? "bg"], padding: 0 }}>{children}</div>
    </div>
  );
}

/** Subtly-striped placeholder. Use whenever real imagery would live. */
export function Placeholder({
  label,
  height = 220,
  ratio,
}: {
  label?: string;
  height?: number | string;
  ratio?: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: ratio ? undefined : height,
        aspectRatio: ratio,
        border: "1.5px solid var(--border-subtle)",
        background:
          "repeating-linear-gradient(135deg, var(--bg-elev) 0 14px, var(--border-subtle) 14px 15px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--fg-muted)",
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        borderRadius: "var(--r-sm)",
      }}
    >
      {label || "image"}
    </div>
  );
}

/** Initials avatar; deterministic color tint via accent tokens. */
export function InitialAvatar({
  name,
  size = 36,
  bg,
}: {
  name: string;
  size?: number;
  bg?: string;
}) {
  const initials = name
    .split(/\s+/)
    .map((s) => s[0])
    .slice(0, 2)
    .join("");
  return (
    <span
      style={{
        width: size,
        height: size,
        border: "1.5px solid var(--border)",
        borderRadius: "50%",
        background: bg || "var(--accent-2)",
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

export const ACCENTS = [
  "var(--accent-1)",
  "var(--accent-2)",
  "var(--accent-3)",
  "var(--primary)",
];
