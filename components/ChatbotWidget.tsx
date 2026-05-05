"use client";

import { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";

export function ChatbotWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors text-sm font-medium"
        aria-label="Open chatbot"
      >
        <MessageSquare className="w-4 h-4" />
        <span className="hidden sm:inline">Ask AI</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-700 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 brand-gradient text-white">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                <span className="font-semibold">GPT Marketplace Assistant</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat area */}
            <div className="h-64 overflow-y-auto p-4 space-y-3 bg-gray-50 dark:bg-slate-950">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full brand-gradient flex items-center justify-center text-white text-xs font-bold shrink-0">
                  AI
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-xl rounded-tl-none px-4 py-3 text-sm text-gray-700 dark:text-gray-300 shadow-sm max-w-xs">
                  Hi! I&apos;m the GPT Marketplace assistant. How can I help you find the right AI tool today?
                </div>
              </div>
              <p className="text-xs text-center text-gray-400 dark:text-gray-600 italic">
                Full AI integration coming soon. Use WhatsApp for live support.
              </p>
            </div>

            {/* Input */}
            <div className="p-3 border-t border-gray-200 dark:border-slate-800 flex gap-2">
              <input
                type="text"
                placeholder="Ask about a GPT..."
                className="flex-1 px-3 py-2 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    window.open(
                      "https://wa.me/59995230683?text=Hi! I have a question about your GPT Marketplace.",
                      "_blank"
                    );
                  }
                }}
              />
              <a
                href="https://wa.me/59995230683?text=Hi! I have a question about your GPT Marketplace."
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg brand-gradient text-white hover:opacity-90 transition-opacity"
                aria-label="Send via WhatsApp"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
