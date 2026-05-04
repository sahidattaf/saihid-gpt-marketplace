"use client";

import { useState, useMemo } from "react";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import { CategoryGrid } from "@/components/CategoryGrid";
import { ComingSoonStrip } from "@/components/ComingSoonStrip";
import { SearchFilter } from "@/components/SearchFilter";
import { GptCard } from "@/components/GptCard";
import { getGpts, getCategories, filterGpts, Category } from "@/lib/gptData";

export default function Home() {
  const allGpts = getGpts();
  const categories = getCategories();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | undefined>();
  const [priceMin, setPriceMin] = useState<number | undefined>();
  const [priceMax, setPriceMax] = useState<number | undefined>();

  const filteredGpts = useMemo(
    () =>
      filterGpts({
        search: searchQuery,
        category: selectedCategory,
        priceMin,
        priceMax,
      }).filter((gpt) => gpt.featured !== "Coming Soon"),
    [searchQuery, selectedCategory, priceMin, priceMax]
  );

  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="py-12 md:py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Discover AI-Powered Solutions
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          Browse our curated marketplace of specialized GPTs designed to
          streamline your business, boost productivity, and unlock new
          possibilities.
        </p>
        <button
          onClick={() =>
            document
              .getElementById("marketplace")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
        >
          Browse Featured GPTs
        </button>
      </section>

      <FeaturedCarousel gpts={allGpts} />

      <CategoryGrid
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />

      <SearchFilter
        onSearch={setSearchQuery}
        onPriceChange={(min, max) => {
          setPriceMin(min);
          setPriceMax(max);
        }}
        searchValue={searchQuery}
        priceMin={priceMin}
        priceMax={priceMax}
      />

      {/* Marketplace Grid */}
      <section id="marketplace" className="py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {selectedCategory
              ? `${selectedCategory.substring(selectedCategory.indexOf(" ") + 1)} GPTs`
              : "All GPTs"}
          </h2>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {filteredGpts.length} results
          </span>
        </div>

        {filteredGpts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredGpts.map((gpt) => (
              <GptCard key={gpt.name} gpt={gpt} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No GPTs found matching your criteria. Try adjusting your filters.
            </p>
          </div>
        )}
      </section>

      <ComingSoonStrip gpts={allGpts} />

      {/* Contact Section */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-slate-900 dark:to-slate-800 rounded-2xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Have Questions?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
          Get in touch via WhatsApp for personalized support, custom
          integrations, or to learn more about our GPT solutions.
        </p>
        <a
          href="https://wa.me/59995230683?text=Hi%20there!%20I%27m%20interested%20in%20the%20GPT%20Marketplace."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
        >
          💬 Chat on WhatsApp
        </a>
      </section>
    </div>
  );
}
