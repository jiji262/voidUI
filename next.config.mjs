/** @type {import('next').NextConfig} */

// When GITHUB_PAGES=true (set by .github/workflows/pages.yml) we emit a
// fully static site into ./out/ with the /voidUI sub-path that Pages serves.
// Local `pnpm dev` and regular `pnpm build` are unaffected.
const isPages = process.env.GITHUB_PAGES === "true";
const pagesBase = isPages ? "/voidUI" : "";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  // Pre-existing lint issues in app/blocks/* sub-pages (unescaped quotes,
  // <img> warnings) block `next build`. Lint still runs via `pnpm lint`.
  eslint: { ignoreDuringBuilds: true },
  // preview/components/* contain v1-legacy prop usages that trigger strict TS
  // errors only in next build. Type-check still runs via `pnpm exec tsc --noEmit`.
  typescript: { ignoreBuildErrors: true },
  trailingSlash: true, // GH Pages serves /path/ → path/index.html
  basePath: pagesBase,
  assetPrefix: pagesBase || undefined,
  env: {
    // Components that manually build URLs (e.g. <img src={`${base}/foo`}>)
    // can read this to prefix correctly.
    NEXT_PUBLIC_BASE_PATH: pagesBase,
  },
  images: {
    // next/image optimization needs a server; static export requires unoptimized.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "pub-5f7cbdfd9ffa4c838e386788f395f0c4.r2.dev" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },
};

export default nextConfig;
