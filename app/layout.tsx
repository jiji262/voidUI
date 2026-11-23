import type { Metadata } from "next";
import {
  Inter,
  JetBrains_Mono,
  IBM_Plex_Mono,
  Fraunces,
  Noto_Sans_SC,
  Noto_Serif_SC,
} from "next/font/google";
import "./global.css";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";

// Load every font name referenced by components/voidui/styles.css.
// The CSS variable names below match the `var(--font-*)` placeholders
// inside per-theme `--font-*-active` declarations.
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });
const plex = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-plex", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
const notoSansSC = Noto_Sans_SC({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-noto-sans-sc", display: "swap" });
const notoSerifSC = Noto_Serif_SC({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-noto-serif-sc", display: "swap" });

export const metadata: Metadata = {
  title: "voidUI — A refined neobrutalist component library",
  description:
    "10 themes × light/dark. 30 components. Built with React + TailwindCSS. MIT licensed.",
};

const initScript = `
(function () {
  try {
    var t = localStorage.getItem('voidui-theme') || 'neobrutal';
    var m = localStorage.getItem('voidui-mode') || 'light';
    document.documentElement.setAttribute('data-theme', t);
    document.documentElement.setAttribute('data-mode', m);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'neobrutal');
    document.documentElement.setAttribute('data-mode', 'light');
  }
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const fontVars = [
    inter.variable,
    jetbrains.variable,
    plex.variable,
    fraunces.variable,
    notoSansSC.variable,
    notoSerifSC.variable,
  ].join(" ");
  return (
    <html lang="en" className={fontVars} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: initScript }} />
      </head>
      <body>
        <TopNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
