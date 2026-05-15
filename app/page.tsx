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

      {/* Featured Offer Banner */}
      <section className="relative overflow-hidden rounded-3xl border border-blue-200 dark:border-blue-900 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 p-8 md:p-10 shadow-lg">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-teal-400/20 blur-3xl" />
        <div className="relative grid gap-8 md:grid-cols-[1.4fr_0.8fr] md:items-center">
          <div>
            <p className="mb-3 inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
              🔥 Featured Offer
            </p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              🎛 BOSSA AI OS Bundle
            </h2>
            <p className="mb-6 max-w-3xl text-gray-700 dark:text-gray-300">
              A 5-GPT restaurant operating system that helps operators track competitors,
              create weekly briefs, log decisions, and turn insights into action.
              Built for BOSSA Asado i Mar in Curaçao and packaged for hospitality teams.
            </p>
            <div className="mb-6 grid gap-3 text-sm text-gray-700 dark:text-gray-300 sm:grid-cols-2">
              <div>✅ Executive Command Center</div>
              <div>✅ Market Intelligence GPT</div>
              <div>✅ Weekly AI Brief GPT</div>
              <div>✅ Decision Log GPT</div>
              <div>✅ Action Engine GPT</div>
              <div>✅ Setup + support flow</div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/59995230683?text=Hi%20Sahid%2C%20I%20want%20the%20BOSSA%20AI%20OS%20Bundle%20setup%20and%20monthly%20support."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-green-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-green-600"
              >
                💬 Book Bundle Setup
              </a>
              <button
                onClick={() =>
                  document
                    .getElementById("marketplace")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center justify-center rounded-lg border border-blue-300 px-6 py-3 font-semibold text-blue-700 transition-all duration-300 hover:scale-105 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-300 dark:hover:bg-blue-950"
              >
                View All 5 GPTs
              </button>
            </div>
          </div>
          <div className="rounded-2xl bg-white/80 p-6 shadow-md backdrop-blur dark:bg-slate-900/80">
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Bundle Price
            </p>
            <p className="mt-2 text-4xl font-bold text-gray-900 dark:text-white">
              $399
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Setup package. Monthly support can be added from $99/month.
            </p>
            <div className="mt-5 rounded-xl bg-blue-50 p-4 text-sm text-blue-900 dark:bg-blue-950 dark:text-blue-200">
              Best for restaurants that want weekly intelligence, decision tracking,
              and a clear action rhythm without building a full system from zero.
            </div>
          </div>
        </div>
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
