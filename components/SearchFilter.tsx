"use client";

import { useState } from "react";
import { Search, X, SlidersHorizontal } from "lucide-react";

interface SearchFilterProps {
  onSearch: (query: string) => void;
  onPriceChange: (min: number | undefined, max: number | undefined) => void;
  searchValue: string;
  priceMin?: number;
  priceMax?: number;
}

export function SearchFilter({
  onSearch,
  onPriceChange,
  searchValue,
  priceMin,
  priceMax,
}: SearchFilterProps) {
  const [showFilters, setShowFilters] = useState(false);
  const [localMin, setLocalMin] = useState(priceMin?.toString() ?? "");
  const [localMax, setLocalMax] = useState(priceMax?.toString() ?? "");

  const handleApply = () => {
    onPriceChange(
      localMin ? parseFloat(localMin) : undefined,
      localMax ? parseFloat(localMax) : undefined
    );
  };

  const handleClear = () => {
    setLocalMin("");
    setLocalMax("");
    onSearch("");
    onPriceChange(undefined, undefined);
  };

  return (
    <div className="mb-8">
      <div className="flex gap-2 mb-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search GPTs by name or description..."
            value={searchValue}
            onChange={(e) => onSearch(e.target.value)}
            className="w-full pl-10 pr-10 h-10 rounded-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {searchValue && (
            <button
              onClick={() => onSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-lg transition-colors text-sm font-medium"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters
        </button>
      </div>

      {showFilters && (
        <div className="bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-lg p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Min Price ($)
              </label>
              <input
                type="number"
                placeholder="0"
                value={localMin}
                onChange={(e) => setLocalMin(e.target.value)}
                className="w-full h-9 px-3 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Max Price ($)
              </label>
              <input
                type="number"
                placeholder="999"
                value={localMax}
                onChange={(e) => setLocalMax(e.target.value)}
                className="w-full h-9 px-3 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-end gap-2">
              <button
                onClick={handleApply}
                className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
              >
                Apply
              </button>
              <button
                onClick={handleClear}
                className="flex-1 px-4 py-2 bg-gray-300 dark:bg-slate-700 hover:bg-gray-400 dark:hover:bg-slate-600 text-gray-800 dark:text-white rounded-lg transition-colors text-sm font-medium"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
