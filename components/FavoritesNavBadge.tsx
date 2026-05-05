"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { useMemory } from "@/contexts/MemoryContext";

export function FavoritesNavBadge() {
  const { favorites } = useMemory();

  return (
    <Link
      href="/favorites"
      className="relative p-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
      aria-label={`Favorites (${favorites.length})`}
    >
      <Heart className="w-4 h-4 text-gray-700 dark:text-gray-300" />
      {favorites.length > 0 && (
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full brand-gradient text-white text-[10px] font-bold flex items-center justify-center">
          {favorites.length > 9 ? "9+" : favorites.length}
        </span>
      )}
    </Link>
  );
}
