"use client";

import { useState } from "react";
import { getCategories, getGpts, filterGpts, Category } from "@/lib/gptData";
import { GptCard } from "@/components/GptCard";

export default function CategoriesPage() {
  const categories = getCategories();
  const allGpts = getGpts();
  const [selected, setSelected] = useState<Category | null>(null);

  const categoryColors: Record<string, string> = {
    "🍽 Hospitality & Food Service": "border-red-200 bg-red-50 dark:bg-red-900/10 dark:border-red-800",
    "📈 Marketing & Business Growth": "border-orange-200 bg-orange-50 dark:bg-orange-900/10 dark:border-orange-800",
    "🎨 Creative & Branding": "border-yellow-200 bg-yellow-50 dark:bg-yellow-900/10 dark:border-yellow-800",
    "📚 Education & Coaching": "border-green-200 bg-green-50 dark:bg-green-900/10 dark:border-green-800",
    "⚖️ Legal & Compliance": "border-blue-200 bg-blue-50 dark:bg-blue-900/10 dark:border-blue-800",
    "🧠 AI Tools & Development": "border-purple-200 bg-purple-50 dark:bg-purple-900/10 dark:border-purple-800",
    "🌿 Sustainability & Eco Solutions": "border-teal-200 bg-teal-50 dark:bg-teal-900/10 dark:border-teal-800",
    "📊 Finance & Investment": "border-amber-200 bg-amber-50 dark:bg-amber-900/10 dark:border-amber-800",
    "🎯 Sports & Recreation": "border-pink-200 bg-pink-50 dark:bg-pink-900/10 dark:border-pink-800",
    "🎭 Entertainment & Lifestyle": "border-gray-200 bg-gray-50 dark:bg-gray-900/10 dark:border-gray-800",
    "🏢 Real Estate & Construction": "border-indigo-200 bg-indigo-50 dark:bg-indigo-900/10 dark:border-indigo-800",
  };

  const displayGpts = selected
    ? filterGpts({ category: selected }).filter((g) => g.featured !== "Coming Soon")
    : [];

  const countByCategory = (cat: Category) =>
    allGpts.filter((g) => g.category === cat && g.featured !== "Coming Soon").length;

  return (
    <div className="space-y-8 py-4">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Browse by Category
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {categories.length} categories — select one to view its GPTs.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((cat) => {
          const emoji = cat.split(" ")[0];
          const name = cat.substring(cat.indexOf(" ") + 1);
          const count = countByCategory(cat);
          const colors = categoryColors[cat] ?? "border-gray-200 bg-gray-50 dark:bg-gray-900/10 dark:border-gray-800";
          const isActive = selected === cat;

          return (
            <button
              key={cat}
              onClick={() => setSelected(isActive ? null : cat)}
              className={`p-4 rounded-xl border-2 text-left transition-all duration-200 hover:scale-105 ${colors} ${
                isActive ? "ring-2 ring-[#0f4c75] ring-offset-2" : ""
              }`}
            >
              <div className="text-3xl mb-2">{emoji}</div>
              <div className="font-semibold text-sm text-gray-900 dark:text-white leading-tight">
                {name}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {count} GPT{count !== 1 ? "s" : ""}
              </div>
            </button>
          );
        })}
      </div>

      {selected && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {selected.substring(selected.indexOf(" ") + 1)}{" "}
            <span className="text-gray-400 font-normal text-lg">
              ({displayGpts.length} GPTs)
            </span>
          </h2>
          {displayGpts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {displayGpts.map((gpt) => (
                <GptCard key={gpt.name} gpt={gpt} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">
              No GPTs available in this category yet.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
