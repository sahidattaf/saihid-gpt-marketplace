import { GptItem } from "@/lib/gptData";

interface GptCardProps {
  gpt: GptItem;
}

const categoryColors: Record<string, string> = {
  "🍽 Hospitality & Food Service": "bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-300",
  "📈 Marketing & Business Growth": "bg-orange-50 dark:bg-orange-950/30 text-orange-700 dark:text-orange-300",
  "🎨 Creative & Branding": "bg-yellow-50 dark:bg-yellow-950/30 text-yellow-700 dark:text-yellow-300",
  "📚 Education & Coaching": "bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-300",
  "⚖️ Legal & Compliance": "bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300",
  "🧠 AI Tools & Development": "bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300",
  "🌿 Sustainability & Eco Solutions": "bg-teal-50 dark:bg-teal-950/30 text-teal-700 dark:text-teal-300",
  "📊 Finance & Investment": "bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300",
  "🎯 Sports & Recreation": "bg-pink-50 dark:bg-pink-950/30 text-pink-700 dark:text-pink-300",
  "🎭 Entertainment & Lifestyle": "bg-slate-50 dark:bg-slate-950/30 text-slate-700 dark:text-slate-300",
  "🏢 Real Estate & Construction": "bg-indigo-50 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-300",
};

export function GptCard({ gpt }: GptCardProps) {
  const categoryColor =
    categoryColors[gpt.category] ??
    "bg-gray-50 dark:bg-gray-950/30 text-gray-700 dark:text-gray-300";

  const formatPrice = (price: number | string) =>
    price === "Coming Soon" ? "Coming Soon" : `$${price}`;

  return (
    <div className="group bg-white dark:bg-slate-900 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-5 border border-gray-100 dark:border-slate-800 h-full flex flex-col">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-start gap-3 flex-1">
          <span className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
            {gpt.emoji}
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-2 text-sm leading-tight">
              {gpt.name}
            </h3>
            <span
              className={`inline-block px-2 py-1 text-xs font-medium rounded-md mt-1 ${categoryColor}`}
            >
              {gpt.category.substring(gpt.category.indexOf(" ") + 1)}
            </span>
          </div>
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-400 text-xs mb-3 line-clamp-2 flex-1">
        {gpt.description}
      </p>

      <p className="text-gray-500 dark:text-gray-500 text-xs mb-4 italic line-clamp-2">
        &ldquo;{gpt.useCase}&rdquo;
      </p>

      <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-slate-800">
        <div className="text-sm font-bold text-gray-900 dark:text-white">
          {formatPrice(gpt.price)}
        </div>
        <div className="flex gap-2">
          {gpt.featured === "Yes" && (
            <span className="px-2 py-1 text-xs font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full">
              ⭐ Featured
            </span>
          )}
          {gpt.featured === "Coming Soon" && (
            <span className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
              🚀 Soon
            </span>
          )}
        </div>
      </div>

      {gpt.link === "link" || !gpt.link ? (
        <a
          href={`https://wa.me/59995230683?text=Hi! I'm interested in "${gpt.name}".`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full mt-4 brand-gradient text-white font-medium py-2 px-3 rounded-lg transition-all duration-200 hover:opacity-90 hover:scale-105 text-sm text-center block"
        >
          Inquire on WhatsApp →
        </a>
      ) : (
        <a
          href={gpt.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full mt-4 brand-gradient text-white font-medium py-2 px-3 rounded-lg transition-all duration-200 hover:opacity-90 hover:scale-105 text-sm text-center block"
        >
          Open GPT →
        </a>
      )}
    </div>
  );
}
