"use client";

import { Category } from "@/lib/gptData";

interface CategoryGridProps {
  categories: Category[];
  selectedCategory?: Category;
  onCategorySelect: (category: Category | undefined) => void;
}

const categoryColors: Record<string, string> = {
  "🍽 Hospitality & Food Service":
    "bg-red-50 hover:bg-red-100 border-red-200 dark:bg-red-900/20 dark:hover:bg-red-900/30 dark:border-red-800",
  "📈 Marketing & Business Growth":
    "bg-orange-50 hover:bg-orange-100 border-orange-200 dark:bg-orange-900/20 dark:hover:bg-orange-900/30 dark:border-orange-800",
  "🎨 Creative & Branding":
    "bg-yellow-50 hover:bg-yellow-100 border-yellow-200 dark:bg-yellow-900/20 dark:hover:bg-yellow-900/30 dark:border-yellow-800",
  "📚 Education & Coaching":
    "bg-green-50 hover:bg-green-100 border-green-200 dark:bg-green-900/20 dark:hover:bg-green-900/30 dark:border-green-800",
  "⚖️ Legal & Compliance":
    "bg-blue-50 hover:bg-blue-100 border-blue-200 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 dark:border-blue-800",
  "🧠 AI Tools & Development":
    "bg-purple-50 hover:bg-purple-100 border-purple-200 dark:bg-purple-900/20 dark:hover:bg-purple-900/30 dark:border-purple-800",
  "🌿 Sustainability & Eco Solutions":
    "bg-teal-50 hover:bg-teal-100 border-teal-200 dark:bg-teal-900/20 dark:hover:bg-teal-900/30 dark:border-teal-800",
  "📊 Finance & Investment":
    "bg-amber-50 hover:bg-amber-100 border-amber-200 dark:bg-amber-900/20 dark:hover:bg-amber-900/30 dark:border-amber-800",
  "🎯 Sports & Recreation":
    "bg-pink-50 hover:bg-pink-100 border-pink-200 dark:bg-pink-900/20 dark:hover:bg-pink-900/30 dark:border-pink-800",
  "🎭 Entertainment & Lifestyle":
    "bg-gray-50 hover:bg-gray-100 border-gray-200 dark:bg-gray-900/20 dark:hover:bg-gray-900/30 dark:border-gray-800",
  "🏢 Real Estate & Construction":
    "bg-indigo-50 hover:bg-indigo-100 border-indigo-200 dark:bg-indigo-900/20 dark:hover:bg-indigo-900/30 dark:border-indigo-800",
};

export function CategoryGrid({
  categories,
  selectedCategory,
  onCategorySelect,
}: CategoryGridProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Browse by Category
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <button
          onClick={() => onCategorySelect(undefined)}
          className={`p-4 rounded-lg border-2 transition-all duration-200 hover:scale-105 ${
            !selectedCategory
              ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
              : "border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900"
          }`}
        >
          <div className="text-center">
            <div className="text-3xl mb-2">🌐</div>
            <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
              All GPTs
            </div>
          </div>
        </button>

        {categories.map((category) => {
          const emoji = category.split(" ")[0];
          const name = category.substring(category.indexOf(" ") + 1);
          const colors =
            categoryColors[category] ??
            "bg-gray-50 hover:bg-gray-100 border-gray-200 dark:bg-gray-900/20 dark:hover:bg-gray-900/30 dark:border-gray-800";
          const isSelected = selectedCategory === category;

          return (
            <button
              key={category}
              onClick={() =>
                onCategorySelect(isSelected ? undefined : category)
              }
              className={`p-4 rounded-lg border-2 transition-all duration-200 hover:scale-105 ${colors} ${
                isSelected ? "ring-2 ring-blue-500 ring-offset-1" : ""
              }`}
            >
              <div className="text-center">
                <div className="text-3xl mb-2">{emoji}</div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {name}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
