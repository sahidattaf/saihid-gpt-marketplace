"use client";

import { Heart, Clock, Trash2 } from "lucide-react";
import { useMemory } from "@/contexts/MemoryContext";
import { getGpts } from "@/lib/gptData";
import { GptCard } from "@/components/GptCard";

export default function FavoritesPage() {
  const { favorites, recentlyViewed, clearMemory } = useMemory();
  const allGpts = getGpts();

  const favoriteGpts = favorites
    .map((name) => allGpts.find((g) => g.name === name))
    .filter(Boolean) as ReturnType<typeof getGpts>;

  const recentGpts = recentlyViewed
    .map((name) => allGpts.find((g) => g.name === name))
    .filter(Boolean) as ReturnType<typeof getGpts>;

  return (
    <div className="space-y-12 py-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Your Memory
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Saved favorites and recently viewed GPTs — stored locally in your browser.
          </p>
        </div>
        {(favorites.length > 0 || recentlyViewed.length > 0) && (
          <button
            onClick={clearMemory}
            className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            Clear all
          </button>
        )}
      </div>

      {/* Favorites */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
            <Heart className="w-5 h-5 text-red-500" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Favorites
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {favoriteGpts.length} saved GPT{favoriteGpts.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        {favoriteGpts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favoriteGpts.map((gpt) => (
              <GptCard key={gpt.name} gpt={gpt} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 border-2 border-dashed border-gray-200 dark:border-slate-800 rounded-2xl">
            <Heart className="w-12 h-12 text-gray-300 dark:text-gray-700 mb-4" />
            <p className="text-gray-500 dark:text-gray-400 font-medium">No favorites yet</p>
            <p className="text-sm text-gray-400 dark:text-gray-600 mt-1">
              Tap the ♡ on any GPT card to save it here.
            </p>
          </div>
        )}
      </section>

      {/* Recently Viewed */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
            <Clock className="w-5 h-5 text-blue-500" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Recently Viewed
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Last {recentGpts.length} GPT{recentGpts.length !== 1 ? "s" : ""} you opened
            </p>
          </div>
        </div>

        {recentGpts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {recentGpts.map((gpt) => (
              <GptCard key={gpt.name} gpt={gpt} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 border-2 border-dashed border-gray-200 dark:border-slate-800 rounded-2xl">
            <Clock className="w-12 h-12 text-gray-300 dark:text-gray-700 mb-4" />
            <p className="text-gray-500 dark:text-gray-400 font-medium">Nothing viewed yet</p>
            <p className="text-sm text-gray-400 dark:text-gray-600 mt-1">
              GPTs you open will appear here automatically.
            </p>
          </div>
        )}
      </section>

      {/* Memory info */}
      <div className="bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-6">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
          🔒 Your memory stays private
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Favorites and recently viewed GPTs are stored only in your browser&apos;s
          localStorage — nothing is sent to any server. Clearing your browser
          data or clicking &ldquo;Clear all&rdquo; above will remove them.
        </p>
      </div>
    </div>
  );
}
