"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { promptLibrary, promptCategories, PromptCategory, Difficulty, ModelTag } from "@/lib/promptLibrary";
import { PromptCard } from "@/components/PromptCard";

const difficulties: Difficulty[] = ["Beginner", "Intermediate", "Advanced"];
const models: ModelTag[] = ["GPT-4o", "Claude Sonnet", "Claude Opus", "Any LLM"];

export default function PromptsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<PromptCategory | "All">("All");
  const [activeDifficulty, setActiveDifficulty] = useState<Difficulty | "All">("All");
  const [activeModel, setActiveModel] = useState<ModelTag | "All">("All");

  const filtered = useMemo(() => {
    return promptLibrary.filter((p) => {
      const matchCategory = activeCategory === "All" || p.category === activeCategory;
      const matchDifficulty = activeDifficulty === "All" || p.difficulty === activeDifficulty;
      const matchModel = activeModel === "All" || p.model === activeModel;
      const matchSearch =
        search === "" ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      return matchCategory && matchDifficulty && matchModel && matchSearch;
    });
  }, [search, activeCategory, activeDifficulty, activeModel]);

  return (
    <div className="space-y-8 py-4">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Prompt Library
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {promptLibrary.length} battle-tested prompts across {promptCategories.length} domains — copy, paste, and deploy.
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search prompts by title, description, or tag..."
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-sm"
        />
      </div>

      {/* Filters */}
      <div className="space-y-3">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              activeCategory === "All"
                ? "brand-gradient text-white"
                : "bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-700"
            }`}
          >
            All
          </button>
          {promptCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "brand-gradient text-white"
                  : "bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Difficulty + Model filters */}
        <div className="flex flex-wrap gap-2">
          <span className="text-xs text-gray-400 dark:text-gray-500 self-center pr-1">Difficulty:</span>
          {(["All", ...difficulties] as const).map((d) => (
            <button
              key={d}
              onClick={() => setActiveDifficulty(d as Difficulty | "All")}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                activeDifficulty === d
                  ? "bg-gray-800 dark:bg-white text-white dark:text-gray-900"
                  : "bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-700"
              }`}
            >
              {d}
            </button>
          ))}
          <span className="text-xs text-gray-400 dark:text-gray-500 self-center pl-2 pr-1">Model:</span>
          {(["All", ...models] as const).map((m) => (
            <button
              key={m}
              onClick={() => setActiveModel(m as ModelTag | "All")}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                activeModel === m
                  ? "bg-gray-800 dark:bg-white text-white dark:text-gray-900"
                  : "bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-700"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Showing {filtered.length} of {promptLibrary.length} prompts
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <PromptCard key={p.id} prompt={p} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 border-2 border-dashed border-gray-200 dark:border-slate-800 rounded-2xl">
          <p className="text-gray-500 dark:text-gray-400 font-medium">No prompts match your filters</p>
          <button
            onClick={() => {
              setSearch("");
              setActiveCategory("All");
              setActiveDifficulty("All");
              setActiveModel("All");
            }}
            className="mt-3 text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
