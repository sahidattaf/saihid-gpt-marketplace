import Link from "next/link";

const resources = [
  {
    href: "/prompts",
    emoji: "📝",
    title: "Prompt Library",
    description:
      "30+ curated, copy-paste prompts for Finance, Hospitality, Real Estate, Marketing, Legal, and more. Each tagged by difficulty and model.",
    color: "from-blue-500 to-cyan-500",
    badge: "30 prompts",
  },
  {
    href: "/skills",
    emoji: "⚡",
    title: "Skills & Custom GPTs",
    description:
      "Step-by-step guides to build your own Custom GPT on ChatGPT. Templates, system prompt blueprints, and configuration examples.",
    color: "from-purple-500 to-pink-500",
    badge: "Builder guides",
  },
  {
    href: "/playbook",
    emoji: "📋",
    title: "Domain Playbooks",
    description:
      "End-to-end AI deployment playbooks for Restaurants, Real Estate, Marketing, and Finance. Actionable steps with owners, tools, and expected outcomes.",
    color: "from-orange-500 to-red-500",
    badge: "4 playbooks",
  },
  {
    href: "/claude",
    emoji: "🤖",
    title: "Claude & Anthropic",
    description:
      "Models, pricing, API integration guide, and code examples. Learn when to use Haiku vs Sonnet vs Opus and how to connect Claude to your own systems.",
    color: "from-indigo-500 to-blue-600",
    badge: "API guide",
  },
  {
    href: "/notion",
    emoji: "🗂",
    title: "Notion Integration",
    description:
      "How this GPT catalog is powered by Notion. Database schema, CSV export workflow, and how to maintain and extend your own AI catalog.",
    color: "from-gray-600 to-gray-800",
    badge: "Data pipeline",
  },
];

export default function ResourcesPage() {
  return (
    <div className="space-y-12 py-4">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Resource Hub
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Everything you need to build, deploy, and scale AI across your business — prompts, playbooks, builder guides, and the full technical stack.
        </p>
      </div>

      {/* Resource cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((r) => (
          <Link
            key={r.href}
            href={r.href}
            className="group bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
          >
            {/* Gradient bar */}
            <div className={`h-1.5 bg-gradient-to-r ${r.color}`} />

            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {r.emoji}
                </span>
                <span className="px-2.5 py-1 text-xs font-semibold bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 rounded-full">
                  {r.badge}
                </span>
              </div>

              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:brand-gradient-text transition-colors">
                {r.title}
              </h2>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                {r.description}
              </p>

              <div className="mt-6 flex items-center text-sm font-semibold brand-gradient-text">
                Explore →
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="brand-gradient rounded-2xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Need a custom AI solution?</h2>
        <p className="text-white/80 mb-6">
          Sahid Attaf builds bespoke GPTs, automation pipelines, and AI systems for businesses in Curaçao and beyond.
        </p>
        <a
          href="https://wa.me/59995230683?text=Hi! I'd like to discuss a custom AI solution."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-gray-900 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors"
        >
          Talk to Sahid on WhatsApp →
        </a>
      </div>
    </div>
  );
}
