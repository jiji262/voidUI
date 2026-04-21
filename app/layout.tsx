import TopNav from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import "./global.css";
import {
  Inter,
  JetBrains_Mono,
  Fraunces,
  IBM_Plex_Mono,
  Noto_Sans_SC,
  Noto_Serif_SC,
} from "next/font/google";
import { Metadata } from "next";
import { Toaster, TooltipProvider } from "@/components/voidui";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/lib/theme-context";
import { ToastProvider } from "@/components/ui/toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-sc",
  display: "swap",
});

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-serif-sc",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Void Styled React UI Library | voidUI",
  description:
    "voidUI - Void styled component library built with React and TailwindCSS for modern web apps.",
  openGraph: {
    images: "https://voidui.dev/banner.png",
    title: "Void Styled React UI Library | voidUI",
  },
};

// Inline script runs before React hydrates to prevent FOUC on theme + mode.
// Reads localStorage (voidui-theme / voidui-mode) and mirrors them to
// data-theme / data-mode on <html>, which is what global.css keys on.
const themeInitScript = `(function(){try{var t=localStorage.getItem('voidui-theme');var m=localStorage.getItem('voidui-mode');var ts=['neobrutal','swiss','editorial','stripe','hanko','terra','cyber','milktea'];var d=document.documentElement;d.setAttribute('data-theme',ts.indexOf(t)>-1?t:'neobrutal');d.setAttribute('data-mode',m==='dark'?'dark':'light');}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrains.variable} ${fraunces.variable} ${plex.variable} ${notoSansSC.variable} ${notoSerifSC.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="97dd6182-c656-4265-97e0-ee9613b88078"
        />
      </head>
      <body className="bg-background text-foreground">
        <ThemeProvider>
          <ToastProvider>
            <TooltipProvider>
              <TopNav />
              {children}
              <Footer />
              <Toaster />
            </TooltipProvider>
          </ToastProvider>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
