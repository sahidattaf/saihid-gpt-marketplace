"use client";

import { useState } from "react";
import { playbooks } from "@/lib/playbookData";
import { ChevronDown, ChevronUp, Clock, User, Wrench, Target } from "lucide-react";

const colorMap: Record<string, { badge: string; step: string; border: string; bg: string }> = {
  red: {
    badge: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300",
    step: "from-red-500 to-orange-500",
    border: "border-red-200 dark:border-red-800/40",
    bg: "bg-red-50 dark:bg-red-950/20",
  },
  indigo: {
    badge: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300",
    step: "from-indigo-500 to-blue-500",
    border: "border-indigo-200 dark:border-indigo-800/40",
    bg: "bg-indigo-50 dark:bg-indigo-950/20",
  },
  orange: {
    badge: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300",
    step: "from-orange-500 to-amber-500",
    border: "border-orange-200 dark:border-orange-800/40",
    bg: "bg-orange-50 dark:bg-orange-950/20",
  },
  amber: {
    badge: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300",
    step: "from-amber-500 to-yellow-500",
    border: "border-amber-200 dark:border-amber-800/40",
    bg: "bg-amber-50 dark:bg-amber-950/20",
  },
};

export default function PlaybookPage() {
  const [activePlaybook, setActivePlaybook] = useState(playbooks[0].id);
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const playbook = playbooks.find((p) => p.id === activePlaybook)!;
  const colors = colorMap[playbook.color] ?? colorMap.indigo;

  return (
    <div className="space-y-8 py-4">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Domain Playbooks
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          End-to-end AI deployment plans with step-by-step actions, owners, tools, and expected outcomes.
        </p>
      </div>

      {/* Domain tabs */}
      <div className="flex flex-wrap gap-3">
        {playbooks.map((p) => (
          <button
            key={p.id}
            onClick={() => {
              setActivePlaybook(p.id);
              setExpandedStep(null);
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
              activePlaybook === p.id
                ? "brand-gradient text-white shadow-md"
                : "bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-slate-600"
            }`}
          >
            <span>{p.emoji}</span>
            <span className="hidden sm:inline">{p.domain.split(" ")[0]} {p.domain.split(" ")[1]}</span>
            <span className="sm:hidden">{p.emoji}</span>
          </button>
        ))}
      </div>

      {/* Playbook header */}
      <div className={`${colors.bg} ${colors.border} border rounded-2xl p-6`}>
        <div className="flex items-start gap-4">
          <span className="text-4xl">{playbook.emoji}</span>
          <div>
            <span className={`inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full mb-2 ${colors.badge}`}>
              {playbook.domain}
            </span>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {playbook.title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">{playbook.subtitle}</p>
            <div className="flex items-center gap-4 mt-3 text-xs text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <Target className="w-3.5 h-3.5" />
                {playbook.steps.length} steps
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-3">
        {playbook.steps.map((s) => {
          const isOpen = expandedStep === s.step;
          return (
            <div
              key={s.step}
              className="bg-white dark:bg-slate-900 rounded-xl border border-gray-100 dark:border-slate-800 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setExpandedStep(isOpen ? null : s.step)}
                className="w-full flex items-center gap-4 p-5 text-left hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <div
                  className={`shrink-0 w-9 h-9 rounded-full bg-gradient-to-br ${colors.step} text-white font-bold text-sm flex items-center justify-center`}
                >
                  {s.step}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                    {s.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-1">
                    {s.description}
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-3">
                  <span className="hidden sm:flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
                    <Clock className="w-3.5 h-3.5" />
                    {s.timeEstimate}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  )}
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 border-t border-gray-100 dark:border-slate-800 pt-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-5 leading-relaxed">
                    {s.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">
                        <User className="w-3.5 h-3.5" />
                        Owner
                      </div>
                      <p className="text-sm text-gray-900 dark:text-white font-medium">{s.owner}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">
                        <Clock className="w-3.5 h-3.5" />
                        Time
                      </div>
                      <p className="text-sm text-gray-900 dark:text-white">{s.timeEstimate}</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">
                        <Wrench className="w-3.5 h-3.5" />
                        Tools
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {s.tools.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 text-[11px] bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 rounded-md"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">
                        🤖 GPTs Used
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {s.gpts.map((g) => (
                          <span
                            key={g}
                            className={`px-2 py-0.5 text-[11px] rounded-md ${colors.badge}`}
                          >
                            {g}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800/40 rounded-lg">
                    <span className="text-xs font-semibold text-green-700 dark:text-green-400">
                      ✅ Expected Outcome:
                    </span>
                    <p className="text-xs text-green-800 dark:text-green-300 mt-0.5 leading-relaxed">
                      {s.outcome}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="brand-gradient rounded-2xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Need help executing this playbook?</h2>
        <p className="text-white/80 mb-6">
          Sahid can implement the full AI stack for your business — from custom GPTs to automation pipelines.
        </p>
        <a
          href={`https://wa.me/59995230683?text=Hi! I want help with the ${playbook.domain} AI playbook.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-gray-900 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors"
        >
          Discuss Your Implementation →
        </a>
      </div>
    </div>
  );
}
