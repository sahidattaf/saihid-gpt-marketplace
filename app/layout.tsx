import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ThemeToggle } from "@/components/ThemeToggle";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { NavLink } from "@/components/NavLink";
import { ChatbotWidget } from "@/components/ChatbotWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GPT Marketplace by Sahid Attaf | AI-Powered Solutions",
  description:
    "Browse specialized GPTs for real estate, hospitality, finance, marketing, sustainability and more. Curated AI tools for the Curaçao ecosystem and global business.",
  keywords:
    "GPT marketplace, AI tools, Curaçao, Sahid Attaf, real estate AI, hospitality AI, finance AI",
  openGraph: {
    title: "GPT Marketplace by Sahid Attaf",
    description: "AI-powered GPT tools for every business sector",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-slate-950 text-gray-900 dark:text-white transition-colors duration-300">
            <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur border-b border-gray-200 dark:border-slate-800">
              <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
                {/* Logo */}
                <a href="/" className="flex items-center gap-2 shrink-0">
                  <span className="text-xl font-bold brand-gradient-text">
                    GPT Marketplace
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 hidden sm:inline">
                    by Sahid Attaf
                  </span>
                </a>

                {/* Nav links */}
                <nav className="hidden md:flex items-center gap-1">
                  <NavLink href="/">Home</NavLink>
                  <NavLink href="/categories">Categories</NavLink>
                  <NavLink href="/featured">Featured</NavLink>
                  <NavLink href="/contact">Contact</NavLink>
                </nav>

                {/* Right controls */}
                <div className="flex items-center gap-2">
                  <ChatbotWidget />
                  <ThemeToggle />
                </div>
              </div>
            </header>

            <main className="container mx-auto px-4 py-8">{children}</main>

            <footer className="border-t border-gray-200 dark:border-slate-800 mt-16 py-8 bg-gray-50 dark:bg-slate-900">
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <p>
                    © 2026 GPT Marketplace by Sahid Attaf. All rights reserved.
                  </p>
                  <div className="flex gap-4">
                    <a href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">Home</a>
                    <a href="/categories" className="hover:text-gray-900 dark:hover:text-white transition-colors">Categories</a>
                    <a href="/featured" className="hover:text-gray-900 dark:hover:text-white transition-colors">Featured</a>
                    <a href="/contact" className="hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a>
                  </div>
                </div>
              </div>
            </footer>

            <WhatsAppButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
