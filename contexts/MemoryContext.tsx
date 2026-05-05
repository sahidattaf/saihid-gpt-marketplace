"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

const FAVORITES_KEY = "gpt_favorites";
const RECENT_KEY = "gpt_recently_viewed";
const MAX_RECENT = 10;

interface MemoryContextValue {
  favorites: string[];
  recentlyViewed: string[];
  toggleFavorite: (gptName: string) => void;
  markViewed: (gptName: string) => void;
  isFavorite: (gptName: string) => boolean;
  clearMemory: () => void;
}

const MemoryContext = createContext<MemoryContextValue>({
  favorites: [],
  recentlyViewed: [],
  toggleFavorite: () => {},
  markViewed: () => {},
  isFavorite: () => false,
  clearMemory: () => {},
});

export function MemoryProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const fav = localStorage.getItem(FAVORITES_KEY);
      const rec = localStorage.getItem(RECENT_KEY);
      if (fav) setFavorites(JSON.parse(fav));
      if (rec) setRecentlyViewed(JSON.parse(rec));
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  const persist = useCallback(
    (nextFav: string[], nextRec: string[]) => {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(nextFav));
      localStorage.setItem(RECENT_KEY, JSON.stringify(nextRec));
    },
    []
  );

  const toggleFavorite = useCallback(
    (gptName: string) => {
      setFavorites((prev) => {
        const next = prev.includes(gptName)
          ? prev.filter((n) => n !== gptName)
          : [gptName, ...prev];
        persist(next, recentlyViewed);
        return next;
      });
    },
    [recentlyViewed, persist]
  );

  const markViewed = useCallback(
    (gptName: string) => {
      setRecentlyViewed((prev) => {
        const filtered = prev.filter((n) => n !== gptName);
        const next = [gptName, ...filtered].slice(0, MAX_RECENT);
        persist(favorites, next);
        return next;
      });
    },
    [favorites, persist]
  );

  const isFavorite = useCallback(
    (gptName: string) => favorites.includes(gptName),
    [favorites]
  );

  const clearMemory = useCallback(() => {
    setFavorites([]);
    setRecentlyViewed([]);
    localStorage.removeItem(FAVORITES_KEY);
    localStorage.removeItem(RECENT_KEY);
  }, []);

  // Don't render until hydrated to avoid localStorage mismatch
  if (!hydrated) return <>{children}</>;

  return (
    <MemoryContext.Provider
      value={{
        favorites,
        recentlyViewed,
        toggleFavorite,
        markViewed,
        isFavorite,
        clearMemory,
      }}
    >
      {children}
    </MemoryContext.Provider>
  );
}

export const useMemory = () => useContext(MemoryContext);
