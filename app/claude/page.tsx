const models = [
  {
    name: "Claude Haiku 4.5",
    id: "claude-haiku-4-5-20251001",
    emoji: "⚡",
    speed: "Fastest",
    use: "High-volume tasks, chatbots, classification, quick summarization",
    color: "from-green-400 to-teal-500",
    badge: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
  },
  {
    name: "Claude Sonnet 4.6",
    id: "claude-sonnet-4-6",
    emoji: "🎵",
    speed: "Balanced",
    use: "Business analysis, content generation, coding, complex reasoning",
    color: "from-blue-400 to-indigo-500",
    badge: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
    recommended: true,
  },
  {
    name: "Claude Opus 4.7",
    id: "claude-opus-4-7",
    emoji: "🏆",
    speed: "Most Capable",
    use: "Complex research, multi-step reasoning, advanced code generation, strategic analysis",
    color: "from-purple-500 to-pink-500",
    badge: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
  },
];

const codeExamples = [
  {
    title: "Basic text generation",
    language: "python",
    code: `import anthropic

client = anthropic.Anthropic(api_key="YOUR_API_KEY")

message = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "Analyze this restaurant's menu and suggest 3 improvements."}
    ]
)

print(message.content[0].text)`,
  },
  {
    title: "System prompt (Custom GPT style)",
    language: "python",
    code: `message = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    system="You are a real estate assistant for Island Realty Curaçao. \
Answer questions about properties professionally and always \
offer to schedule a viewing.",
    messages=[
        {"role": "user", "content": "What properties do you have under $300k?"}
    ]
)`,
  },
  {
    title: "Streaming response",
    language: "python",
    code: `with client.messages.stream(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Write a 500-word marketing email."}]
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)`,
  },
  {
    title: "Next.js API route",
    language: "typescript",
    code: `// app/api/chat/route.ts
import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  const response = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1024,
    messages: [{ role: "user", content: message }],
  });

  return NextResponse.json({
    reply: response.content[0].text
  });
}`,
  },
];

const useCases = [
  { emoji: "🤖", title: "Custom AI Assistants", desc: "Build domain-specific chatbots with system prompts tailored to your business logic." },
  { emoji: "📄", title: "Document Analysis", desc: "Feed contracts, reports, and menus to Claude for instant structured summaries." },
  { emoji: "⚡", title: "Automation Pipelines", desc: "Trigger Claude via API from Zapier, Make.com, or custom webhooks for hands-free processing." },
  { emoji: "📝", title: "Content Generation", desc: "Scale blog posts, product descriptions, and social content with consistent brand voice." },
  { emoji: "🔍", title: "Data Extraction", desc: "Extract structured data from unstructured text — invoices, emails, customer feedback." },
  { emoji: "💡", title: "Decision Support", desc: "Build recommendation engines that analyze options and present ranked choices with reasoning." },
];

export default function ClaudePage() {
  return (
    <div className="space-y-12 py-4">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Claude & Anthropic API
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
          Anthropic&apos;s Claude powers many of the GPTs in this marketplace. Here&apos;s how to integrate Claude directly into your own products and workflows.
        </p>
      </div>

      {/* Model comparison */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Claude Model Family (2025)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {models.map((m) => (
            <div
              key={m.id}
              className="relative bg-white dark:bg-slate-900 rounded-xl border border-gray-100 dark:border-slate-800 shadow-sm overflow-hidden"
            >
              {m.recommended && (
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-0.5 text-[11px] font-bold brand-gradient text-white rounded-full">
                    Recommended
                  </span>
                </div>
              )}
              <div className={`h-1.5 bg-gradient-to-r ${m.color}`} />
              <div className="p-5">
                <div className="text-3xl mb-3">{m.emoji}</div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">
                  {m.name}
                </h3>
                <code className="text-xs text-gray-400 dark:text-gray-500 block mb-3 font-mono">
                  {m.id}
                </code>
                <span className={`inline-block px-2 py-0.5 text-[11px] font-semibold rounded-full mb-3 ${m.badge}`}>
                  {m.speed}
                </span>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  <strong className="text-gray-700 dark:text-gray-300">Best for:</strong> {m.use}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          What You Can Build with Claude
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {useCases.map((u) => (
            <div
              key={u.title}
              className="flex gap-3 bg-white dark:bg-slate-900 rounded-xl border border-gray-100 dark:border-slate-800 p-4 shadow-sm"
            >
              <span className="text-2xl shrink-0">{u.emoji}</span>
              <div>
                <h3 className="font-semibold text-sm text-gray-900 dark:text-white mb-1">
                  {u.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{u.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Code examples */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Code Examples
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Install the SDK: <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-slate-800 rounded text-xs font-mono">pip install anthropic</code> or <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-slate-800 rounded text-xs font-mono">npm install @anthropic-ai/sdk</code>
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {codeExamples.map((ex) => (
            <div
              key={ex.title}
              className="bg-white dark:bg-slate-900 rounded-xl border border-gray-100 dark:border-slate-800 shadow-sm overflow-hidden"
            >
              <div className="flex items-center justify-between px-4 py-2.5 bg-gray-50 dark:bg-slate-800 border-b border-gray-100 dark:border-slate-700">
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                  {ex.title}
                </span>
                <span className="text-[10px] text-gray-400 font-mono">{ex.language}</span>
              </div>
              <pre className="p-4 text-[11px] text-gray-800 dark:text-gray-200 overflow-x-auto leading-relaxed font-mono">
                {ex.code}
              </pre>
            </div>
          ))}
        </div>
      </section>

      {/* Quick start */}
      <section className="bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800/40 rounded-2xl p-6">
        <h3 className="font-bold text-indigo-900 dark:text-indigo-300 mb-3 text-lg">
          🚀 Quick Start Checklist
        </h3>
        <ol className="space-y-2 text-sm text-indigo-800 dark:text-indigo-300">
          <li>1. Create an account at <strong>console.anthropic.com</strong></li>
          <li>2. Generate an API key under <strong>API Keys</strong></li>
          <li>3. Store your key in an environment variable: <code className="bg-indigo-100 dark:bg-indigo-900/30 px-1 rounded text-xs font-mono">ANTHROPIC_API_KEY</code></li>
          <li>4. Install the SDK and run the basic example above</li>
          <li>5. Set a system prompt to give Claude your business context</li>
          <li>6. Deploy via your API route and integrate with your frontend</li>
        </ol>
      </section>

      {/* CTA */}
      <div className="brand-gradient rounded-2xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Need Claude integrated into your product?</h2>
        <p className="text-white/80 mb-6">
          Sahid builds full-stack AI integrations — from API setup to production deployment.
        </p>
        <a
          href="https://wa.me/59995230683?text=Hi! I want to integrate Claude API into my product."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-gray-900 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors"
        >
          Book an Integration Consult →
        </a>
      </div>
    </div>
  );
}
