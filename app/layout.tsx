import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navber from "@/components/layouts/Navber";
import Footer from "@/components/layouts/Footer";
import { lora, open_sans } from "./font";
import TransitionProvider from "@/components/motion/TransitionProvider";

// Metadata for SEO
export const metadata: Metadata = {
  title: {
    template: `%s | ${process.env.SITE_TITLE}`,
    default: `${process.env.SITE_TITLE}`,
  },
  description: "SEO-friendly description here",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lora.variable} ${open_sans.variable}`}>
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        {/* Navbar */}
        <Navber />

        {/* Page transition animations */}
        <TransitionProvider>
          <main className="mt-16 min-h-screen">{children}</main>
        </TransitionProvider>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
