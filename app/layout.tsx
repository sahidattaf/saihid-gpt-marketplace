import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ThemeToggle } from "@/components/ThemeToggle";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Saihid GPT Marketplace | AI-Powered Solutions by Sahid Attaf",
  description:
    "Browse 45+ specialized GPTs for real estate, hospitality, finance, marketing, sustainability and more. Built for the Curaçao ecosystem and beyond.",
  keywords: "GPT marketplace, AI tools, Curaçao, Sahid Attaf, Piska, Bossa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-slate-950 text-gray-900 dark:text-white transition-colors duration-300">
            <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur border-b border-gray-200 dark:border-slate-800">
              <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                    GPT Marketplace
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    by Sahid Attaf
                  </span>
                </div>
                <ThemeToggle />
              </div>
            </header>

            <main className="container mx-auto px-4 py-8">{children}</main>

            <footer className="border-t border-gray-200 dark:border-slate-800 mt-16 py-8 bg-gray-50 dark:bg-slate-900">
              <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400 text-sm">
                <p>
                  © 2026 GPT Marketplace by Sahid Attaf. All rights reserved. |
                  Powered by AI
                </p>
              </div>
            </footer>

            <WhatsAppButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
