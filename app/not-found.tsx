import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "96px 24px", textAlign: "center" }}>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 96,
            fontWeight: 500,
            letterSpacing: "-0.04em",
            lineHeight: 0.95,
            marginBottom: 16,
          }}
        >
          404
        </div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 36,
            fontWeight: 500,
            letterSpacing: "-0.02em",
            margin: "0 0 16px",
          }}
        >
          Page not found
        </h1>
        <p
          className="cn"
          style={{
            fontSize: 16,
            color: "var(--fg-muted)",
            marginBottom: 32,
            lineHeight: 1.65,
          }}
        >
          Sorry, the page you are looking for does not exist or has been moved.
          <br />
          找不到这个页面 — 也许它已经被删除或移走了。
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <button className="btn lg">Return home</button>
          </Link>
          <Link href="/components" style={{ textDecoration: "none" }}>
            <button className="btn lg outline">Browse components</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
