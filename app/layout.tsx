import type { Metadata } from "next";
import { Bricolage_Grotesque, Oswald } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import GrainEffect from "@/components/visualEffects/grain-effects";
import Cursor from "@/components/cursor/cursor";

// Fonts
const mainFont = Bricolage_Grotesque({ subsets: ["latin"] });
const secondaryFont = Oswald({
  subsets: ["latin"],
  variable: "--font-secondary",
});
const localFont = localfont({
  src: "../public/assets/fonts/pixel-font-7.ttf",
  variable: "--font-local",
});

// Metadata
export const metadata: Metadata = {
  title: "Arfian",
  description: "Arfian official portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          mainFont.className,
          secondaryFont.variable,
          localFont.variable
        )}
      >
        <GrainEffect />
        <Cursor color="#fff" />
        {children}
      </body>
    </html>
  );
}
