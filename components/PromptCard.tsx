"use client";

import { useState } from "react";
import { Copy, Check, Tag } from "lucide-react";
import { Prompt } from "@/lib/promptLibrary";

interface PromptCardProps {
  prompt: Prompt;
}

const difficultyColors: Record<string, string> = {
  Beginner: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
  Intermediate: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300",
  Advanced: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300",
};

const modelColors: Record<string, string> = {
  "GPT-4o": "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
  "Claude Sonnet": "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
  "Claude Opus": "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300",
  "Any LLM": "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",
};

export function PromptCard({ prompt }: PromptCardProps) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col">
      {/* Header */}
      <div className="p-5 flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-semibold text-gray-900 dark:text-white text-sm leading-snug flex-1">
            {prompt.title}
          </h3>
          <button
            onClick={handleCopy}
            title="Copy prompt"
            className="shrink-0 p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <Copy className="w-4 h-4 text-gray-400 dark:text-gray-500" />
            )}
          </button>
        </div>

        <p className="text-xs text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          {prompt.description}
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span
            className={`px-2 py-0.5 text-xs font-medium rounded-full ${
              difficultyColors[prompt.difficulty]
            }`}
          >
            {prompt.difficulty}
          </span>
          <span
            className={`px-2 py-0.5 text-xs font-medium rounded-full ${
              modelColors[prompt.model] ?? modelColors["Any LLM"]
            }`}
          >
            {prompt.model}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {prompt.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] bg-gray-50 dark:bg-slate-800 text-gray-500 dark:text-gray-400 rounded-md"
            >
              <Tag className="w-2.5 h-2.5" />
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Prompt preview / expand */}
      <div className="border-t border-gray-100 dark:border-slate-800">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full px-5 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors flex items-center justify-between"
        >
          <span>{expanded ? "Hide prompt" : "Preview prompt"}</span>
          <span className="text-[10px]">{expanded ? "▲" : "▼"}</span>
        </button>

        {expanded && (
          <div className="px-5 pb-5">
            <pre className="text-[11px] text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-slate-800 rounded-lg p-3 whitespace-pre-wrap leading-relaxed max-h-64 overflow-y-auto">
              {prompt.prompt}
            </pre>
            <button
              onClick={handleCopy}
              className="mt-3 w-full brand-gradient text-white text-xs font-medium py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" /> Copied!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> Copy to clipboard
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
