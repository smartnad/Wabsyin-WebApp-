import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wabsyin | Premium Web App & Product Design Agency",
  description: "Wabsyin is a high-performance web app and product design agency building startup-grade SaaS solutions.",
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
// import { DockNavigation } from "@/components/layout/doc-navigation";
import { TidalCursor } from "@/components/ui/tidal-cursor";

// ... previous imports ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          outfit.variable,
          "antialiased min-h-screen bg-background text-foreground font-sans overflow-x-hidden selection:bg-primary/20 selection:text-primary pb-20 md:pb-0" // Added pb-20 for bottom nav space on mobile
        )}
      >
        <TidalCursor />
        <Navbar />
        {/* <DockNavigation /> Removed to restore past menu */}
        <main className="pt-24 min-h-screen flex flex-col">
          {children}
        </main>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}
