const templates = [
  {
    emoji: "🍽",
    title: "Restaurant AI Assistant",
    description: "Handles menu questions, reservations, special requests, and upsells for your restaurant.",
    systemPrompt: `You are [Restaurant Name]'s AI assistant. You help guests with:
- Menu descriptions, allergen info, and recommendations
- Reservation inquiries and special occasion requests
- Hours, location, and parking information
- Upselling wine pairings and desserts

Tone: Warm, professional, and hospitable. Always offer an alternative if an item is unavailable.
If you cannot answer, say: "Let me connect you with our team — WhatsApp us at [number]."`,
    useCase: "Front-of-house automation, WhatsApp bot, website chat",
  },
  {
    emoji: "🏢",
    title: "Real Estate Listing Assistant",
    description: "Answers buyer questions, qualifies leads, and schedules viewings for property listings.",
    systemPrompt: `You are a real estate assistant for [Agency Name] in Curaçao.
You help potential buyers and renters by:
- Describing property features, neighborhood, and amenities
- Answering financing and mortgage questions at a high level
- Qualifying buyers (budget, timeline, pre-approval status)
- Scheduling viewings and connecting leads with agents

Important: Never make specific legal or financial promises. Always recommend a licensed agent for formal advice.
If asked about price negotiations, say: "Our agent will discuss that with you directly."`,
    useCase: "Lead qualification, listing inquiries, CRM integration",
  },
  {
    emoji: "📈",
    title: "Marketing Strategy GPT",
    description: "Generates content strategies, ad copy, and campaign briefs for any business sector.",
    systemPrompt: `You are a senior marketing strategist specializing in digital marketing for businesses in the Caribbean and Latin America.

Your expertise includes:
- Content strategy and editorial calendars
- Meta (Facebook/Instagram) and Google Ads copy
- Email marketing sequences
- Brand voice and positioning
- SEO and organic growth

When given a business, always ask: What is the target audience? What is the #1 goal (awareness, leads, sales)?
Then produce: (1) Channel recommendation, (2) 3 content angles, (3) One sample ad copy.`,
    useCase: "Content creation, campaign planning, growth strategy",
  },
  {
    emoji: "📊",
    title: "Financial Analysis GPT",
    description: "Builds financial models, analyzes P&Ls, and produces investment memos.",
    systemPrompt: `You are a financial analyst with expertise in SME financial modeling, investment analysis, and Caribbean market dynamics.

You can:
- Build P&L, cash flow, and balance sheet models from raw data
- Calculate ROI, IRR, payback period, and break-even analysis
- Identify financial risks and opportunities
- Write executive-level investment memos and board summaries

Always present numbers in tables. Include base, bull, and bear scenarios. Flag all assumptions clearly.
Disclaimer: "This analysis is for informational purposes only and does not constitute financial advice."`,
    useCase: "Investor reports, due diligence, board presentations",
  },
];

const steps = [
  {
    step: 1,
    title: "Open ChatGPT and go to Explore GPTs",
    description: 'Navigate to chat.openai.com, click "Explore GPTs" in the left sidebar, then click "Create" in the top right.',
  },
  {
    step: 2,
    title: "Name your GPT and describe its purpose",
    description: "Give it a clear name (e.g., \"Island Realty Assistant\") and write a 1–2 sentence description of what it does.",
  },
  {
    step: 3,
    title: "Write a strong System Prompt",
    description: "This is the core instruction set. Use one of the templates below. Define: role, capabilities, tone, what to avoid, and what to do when it can't answer.",
  },
  {
    step: 4,
    title: "Upload Knowledge Files (optional)",
    description: "Upload PDFs, menus, property listings, or SOPs as knowledge files. The GPT will cite them when answering questions.",
  },
  {
    step: 5,
    title: "Configure Actions (API calls)",
    description: "Connect your GPT to external APIs — your CRM, booking system, or property database — using the Actions panel with an OpenAPI schema.",
  },
  {
    step: 6,
    title: "Test, publish, and share",
    description: 'Test with edge-case questions. Set visibility to "Anyone with the link" to share with your team or embed on your website.',
  },
];

export default function SkillsPage() {
  return (
    <div className="space-y-12 py-4">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Skills & Custom GPTs
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
          Build your own specialized GPT in under an hour. Follow the 6-step guide and copy a system prompt template tailored to your industry.
        </p>
      </div>

      {/* Step-by-step guide */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          How to Build a Custom GPT
        </h2>
        <div className="space-y-4">
          {steps.map((s) => (
            <div
              key={s.step}
              className="flex gap-4 bg-white dark:bg-slate-900 rounded-xl border border-gray-100 dark:border-slate-800 p-5 shadow-sm"
            >
              <div className="shrink-0 w-9 h-9 rounded-full brand-gradient text-white font-bold text-sm flex items-center justify-center">
                {s.step}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                  {s.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Templates */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          System Prompt Templates
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Copy any template below, replace the bracketed placeholders, and paste it into your Custom GPT&apos;s instructions field.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {templates.map((t) => (
            <div
              key={t.title}
              className="bg-white dark:bg-slate-900 rounded-xl border border-gray-100 dark:border-slate-800 shadow-sm overflow-hidden"
            >
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{t.emoji}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                      {t.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{t.description}</p>
                  </div>
                </div>
                <span className="inline-block px-2 py-0.5 text-[11px] bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md mb-4">
                  Use case: {t.useCase}
                </span>
                <pre className="text-[11px] text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-slate-800 rounded-lg p-3 whitespace-pre-wrap leading-relaxed max-h-52 overflow-y-auto">
                  {t.systemPrompt}
                </pre>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 rounded-2xl p-6">
        <h3 className="font-semibold text-amber-900 dark:text-amber-300 mb-3 flex items-center gap-2">
          ⭐ Pro Tips for Better Custom GPTs
        </h3>
        <ul className="space-y-2 text-sm text-amber-800 dark:text-amber-400">
          <li>• Always define what the GPT should <strong>NOT</strong> do — this prevents hallucinations and scope creep.</li>
          <li>• Upload your real data (menus, listings, rate cards) as knowledge files for highly accurate answers.</li>
          <li>• Use conversation starters to guide users toward the most common questions.</li>
          <li>• Set a custom image and name to reinforce your brand identity.</li>
          <li>• Enable Code Interpreter if your GPT needs to analyze spreadsheets or generate charts.</li>
        </ul>
      </section>

      {/* CTA */}
      <div className="brand-gradient rounded-2xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Want Sahid to build it for you?</h2>
        <p className="text-white/80 mb-6">
          Get a production-ready Custom GPT built, tested, and deployed in 48 hours.
        </p>
        <a
          href="https://wa.me/59995230683?text=Hi! I want a custom GPT built for my business."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-gray-900 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors"
        >
          Get a Custom GPT Built →
        </a>
      </div>
    </div>
  );
}
