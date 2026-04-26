"use client";

import React from "react";
import { CheckIcon, CopyIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";

export function CodeDisplay({ title, code }: { title: string; code: string }) {
  const [copied, setCopied] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };

  return (
    <div
      className="card"
      style={{
        overflow: "hidden",
        padding: 0,
        background: "var(--bg-elev)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 14px",
          borderBottom: open ? "1.5px solid var(--border-subtle)" : "none",
          background: "var(--bg)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "-0.005em",
            }}
          >
            {title}
          </span>
          <span className="badge ghost" style={{ fontSize: 10 }}>
            tsx
          </span>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <button
            type="button"
            onClick={onCopy}
            className="btn ghost sm"
            style={{ fontSize: 11 }}
          >
            {copied ? <CheckIcon size={11} /> : <CopyIcon size={11} />}
            {copied ? "Copied" : "Copy"}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="btn ghost sm"
            style={{ fontSize: 11 }}
          >
            {open ? <ChevronUpIcon size={11} /> : <ChevronDownIcon size={11} />}
            {open ? "Hide" : "Code"}
          </button>
        </div>
      </div>
      {open && (
        <pre
          style={{
            margin: 0,
            padding: "16px 18px",
            fontFamily: "var(--font-mono)",
            fontSize: 12.5,
            lineHeight: 1.6,
            color: "var(--fg)",
            background: "var(--bg-elev)",
            overflow: "auto",
            maxHeight: 480,
            whiteSpace: "pre",
          }}
        >
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
}

export default CodeDisplay;
