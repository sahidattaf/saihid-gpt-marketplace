"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GptItem } from "@/lib/gptData";
import { GptCard } from "./GptCard";

interface FeaturedCarouselProps {
  gpts: GptItem[];
}

export function FeaturedCarousel({ gpts }: FeaturedCarouselProps) {
  const featuredGpts = gpts.filter((gpt) => gpt.featured === "Yes");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (featuredGpts.length === 0) return null;

  const totalPages = Math.ceil(featuredGpts.length / itemsPerPage);
  const currentPage = Math.floor(currentIndex / itemsPerPage);

  const prev = () =>
    setCurrentIndex((i) => Math.max(0, i - itemsPerPage));
  const next = () =>
    setCurrentIndex((i) =>
      Math.min(featuredGpts.length - itemsPerPage, i + itemsPerPage)
    );
  const goToPage = (page: number) => setCurrentIndex(page * itemsPerPage);

  const visibleGpts = featuredGpts.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          ⭐ Featured GPTs
        </h2>
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            disabled={currentIndex + itemsPerPage >= featuredGpts.length}
            className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleGpts.map((gpt) => (
          <GptCard key={gpt.name} gpt={gpt} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i)}
              aria-label={`Page ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === currentPage
                  ? "bg-blue-600 w-6"
                  : "bg-gray-300 dark:bg-slate-700 w-2"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
