import Link from "next/link";
import { Button } from "@/components/voidui";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "64px 24px",
        background: "var(--bg)",
      }}
    >
      <div style={{ maxWidth: 480, textAlign: "center" }}>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--fg-muted)",
            marginBottom: 12,
          }}
        >
          Error 404
        </div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px, 7vw, 88px)",
            fontWeight: 500,
            lineHeight: 0.96,
            letterSpacing: "-0.035em",
            margin: "0 0 16px",
          }}
        >
          Page <em style={{ fontStyle: "italic", color: "var(--primary)" }}>not found</em>
        </h1>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.55,
            color: "var(--fg-muted)",
            margin: "0 0 28px",
          }}
        >
          That route doesn&apos;t exist on this site. Try the homepage or jump straight to a section.
        </p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Button>Back to home</Button>
          </Link>
          <Link href="/components" style={{ textDecoration: "none" }}>
            <Button variant="outline">Browse components</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
