import type { Metadata } from "next";
import { inter, jetbrainsMono } from "./fonts";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { Navigation } from "@/components/layout/Navigation";
import LenisProvider from "./LenisProvider";

export const metadata: Metadata = {
  title: "Edward Lin — Software Engineer",
  description:
    "Portfolio of Edward Lin, a software engineer and CS student at UC Berkeley. Building performant systems, beautiful interfaces, and intelligent applications.",
  keywords: ["Edward Lin", "Software Engineer", "UC Berkeley", "Portfolio", "Next.js", "TypeScript"],
  authors: [{ name: "Edward Lin" }],
  openGraph: {
    title: "Edward Lin — Software Engineer",
    description: "Portfolio of Edward Lin, software engineer & CS student",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-bg text-white antialiased">
        <LenisProvider />
        <NoiseOverlay />
        <CustomCursor />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
