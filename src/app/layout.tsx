import type { Metadata } from "next";
import { inter, jetbrainsMono } from "./fonts";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { Navigation } from "@/components/layout/Navigation";
import LenisProvider from "./LenisProvider";
import { SEO, NAME } from "@/data/config";

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  keywords: SEO.keywords,
  authors: [{ name: NAME }],
  openGraph: {
    title: SEO.title,
    description: SEO.ogDescription,
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
