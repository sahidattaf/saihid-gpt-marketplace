const schema = [
  { field: "GPT Name", type: "Title", description: "Unique name of the GPT — used as the primary identifier" },
  { field: "Emoji", type: "Text", description: "Single emoji representing the domain (e.g. 🍽 for hospitality)" },
  { field: "Description", type: "Text", description: "One-sentence value proposition shown on the card" },
  { field: "Category", type: "Select", description: "Domain category with emoji prefix — drives filtering and color coding" },
  { field: "Price", type: "Number / Text", description: "Number (e.g. 97) or the string 'Coming Soon'" },
  { field: "URL GPTs", type: "URL", description: "Direct link to the ChatGPT or Claude custom GPT — set to 'link' placeholder until live" },
  { field: "Use Case Example", type: "Text", description: "Short scenario shown in italics on the card (in quotes)" },
  { field: "Featured ⭐", type: "Select", description: "Options: Yes / No / Coming Soon — drives the Featured page filter" },
  { field: "Sector", type: "Multi-select", description: "Optional secondary tags for cross-sector filtering" },
];

const pipelineSteps = [
  {
    step: 1,
    title: "Maintain the Notion Database",
    description:
      "All GPT catalog data lives in a Notion database. Add new GPTs, update pricing, or change status (Coming Soon → Live) directly in Notion. Each row = one GPT card.",
    icon: "📋",
  },
  {
    step: 2,
    title: "Export to CSV",
    description:
      'When the catalog changes, export the Notion database as a CSV file. In Notion: click the ••• menu → Export → Markdown & CSV → check "Include subpages" off, click Export.',
    icon: "📥",
  },
  {
    step: 3,
    title: "Replace data/gpts.csv",
    description:
      "Copy the exported CSV file into the project at data/gpts.csv, replacing the old file. Keep the exact column headers — the parser reads them by name.",
    icon: "🔄",
  },
  {
    step: 4,
    title: "Regenerate lib/gptData.ts",
    description:
      "The CSV content is embedded as a string in lib/gptData.ts via the parseGptCsv() function. Run the import script or manually paste the CSV string when updating the catalog.",
    icon: "⚙️",
  },
  {
    step: 5,
    title: "Build and deploy",
    description:
      "Run npm run build to validate, then push to GitHub. Vercel auto-deploys from the main branch — your catalog update is live within 60 seconds.",
    icon: "🚀",
  },
];

const tips = [
  "Always export the full database — partial exports can break the CSV parser.",
  'Use the "Coming Soon" value in both Price and Featured fields to create a consistent pre-launch state.',
  "Never delete the header row from the CSV — the parser identifies columns by name.",
  "You can add new categories in Notion and they will automatically appear in the Categories page — no code change needed.",
  "Sort your Notion database by Featured ⭐ descending to see your top GPTs at a glance.",
  "Keep the Emoji column as a single character — the card displays it at 3× scale.",
];

export default function NotionPage() {
  return (
    <div className="space-y-12 py-4">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Notion Integration
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
          This GPT marketplace is powered by a Notion database as the source of truth. Here&apos;s the full data pipeline — from Notion row to live product card.
        </p>
      </div>

      {/* Pipeline overview */}
      <section>
        <div className="flex items-center gap-3 flex-wrap text-sm font-medium text-gray-600 dark:text-gray-400">
          {["Notion DB", "CSV Export", "data/gpts.csv", "lib/gptData.ts", "UI Cards", "Vercel"].map(
            (node, i, arr) => (
              <span key={node} className="flex items-center gap-3">
                <span className="px-3 py-1.5 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-lg shadow-sm text-gray-800 dark:text-gray-200 font-mono text-xs">
                  {node}
                </span>
                {i < arr.length - 1 && (
                  <span className="text-gray-400 dark:text-gray-600">→</span>
                )}
              </span>
            )
          )}
        </div>
      </section>

      {/* Database schema */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Database Schema
        </h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700">
                <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 text-xs">
                  Field Name
                </th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 text-xs">
                  Notion Type
                </th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-300 text-xs">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {schema.map((row, i) => (
                <tr
                  key={row.field}
                  className={`border-b border-gray-100 dark:border-slate-800 ${
                    i % 2 === 0
                      ? "bg-white dark:bg-slate-900"
                      : "bg-gray-50/50 dark:bg-slate-900/50"
                  }`}
                >
                  <td className="px-4 py-3 font-mono text-xs text-blue-700 dark:text-blue-400 font-medium whitespace-nowrap">
                    {row.field}
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    {row.type}
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-700 dark:text-gray-300">
                    {row.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Update pipeline steps */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          How to Update the Catalog
        </h2>
        <div className="space-y-4">
          {pipelineSteps.map((s) => (
            <div
              key={s.step}
              className="flex gap-4 bg-white dark:bg-slate-900 rounded-xl border border-gray-100 dark:border-slate-800 p-5 shadow-sm"
            >
              <div className="shrink-0 text-2xl">{s.icon}</div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wide">
                    Step {s.step}
                  </span>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                    {s.title}
                  </h3>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Automation note */}
      <section className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/40 rounded-2xl p-6">
        <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-3 text-lg">
          🔮 Future: Live Notion API Sync
        </h3>
        <p className="text-sm text-blue-800 dark:text-blue-400 mb-3">
          The current pipeline uses static CSV export for speed and reliability. In a future version, the catalog can be fetched live from the Notion API — eliminating the manual export step.
        </p>
        <div className="space-y-1 text-xs text-blue-700 dark:text-blue-400">
          <p>• Use the Notion API (<code className="bg-blue-100 dark:bg-blue-900/30 px-1 rounded font-mono">@notionhq/client</code>) in a Next.js server component</p>
          <p>• Cache responses with <code className="bg-blue-100 dark:bg-blue-900/30 px-1 rounded font-mono">revalidate: 3600</code> to avoid hitting API limits</p>
          <p>• Use Notion webhooks to trigger on-demand ISR cache invalidation when the database changes</p>
        </div>
      </section>

      {/* Tips */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Tips & Gotchas
        </h2>
        <ul className="space-y-2">
          {tips.map((tip) => (
            <li
              key={tip}
              className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
            >
              <span className="text-green-500 mt-0.5 shrink-0">✓</span>
              {tip}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <div className="brand-gradient rounded-2xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Want a Notion-powered catalog for your business?</h2>
        <p className="text-white/80 mb-6">
          Sahid can build a custom Notion database + Next.js frontend for your product catalog, services, or portfolio.
        </p>
        <a
          href="https://wa.me/59995230683?text=Hi! I want a Notion-powered catalog for my business."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-gray-900 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors"
        >
          Let&apos;s Build It →
        </a>
      </div>
    </div>
  );
}
