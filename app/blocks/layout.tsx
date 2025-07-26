import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI Blocks | RetroUI",
  description: "Premium UI blocks built with RetroUI components. Copy and paste ready-to-use sections for your projects.",
};

export default function BlocksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}