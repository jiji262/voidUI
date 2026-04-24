import { defineConfig } from "tsup";

/**
 * Builds @voidui/components from components/voidui/ into dist/.
 * Emits ESM + CJS + .d.ts, preserves "use client" directives for
 * Next.js App Router compatibility, and externalises every peer so
 * the published tarball stays lean.
 */
export default defineConfig({
  entry: {
    index: "components/voidui/index.ts",
  },
  outDir: "dist",
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  minify: false,
  target: "es2020",
  treeshake: true,
  // "use client" is re-prepended by tsup's onSuccess hook because esbuild
  // strips module-level directives when bundling multiple source files.
  onSuccess: async () => {
    const fs = await import("node:fs/promises");
    const path = await import("node:path");
    for (const file of ["dist/index.js", "dist/index.cjs"]) {
      const p = path.resolve(file);
      try {
        const body = await fs.readFile(p, "utf8");
        if (!body.startsWith('"use client"')) {
          await fs.writeFile(p, `"use client";\n${body}`);
        }
      } catch {
        // dist file missing — tsup error will surface elsewhere
      }
    }
  },
  external: [
    "react",
    "react-dom",
    "react/jsx-runtime",
    // Radix primitives — every one we import
    /^@radix-ui\//,
    // Icons
    "lucide-react",
    // Variant + class helpers
    "class-variance-authority",
    "clsx",
    "tailwind-merge",
    // Toasts
    "sonner",
  ],
  tsconfig: "./tsconfig.lib.json",
});
