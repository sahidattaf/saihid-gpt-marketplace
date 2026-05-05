# GPT Marketplace by Sahid Attaf

A production-ready AI GPT marketplace built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS 4**. Showcases 45+ specialized GPTs for the Curaçao business ecosystem and beyond — with a full resource hub, prompt library, domain playbooks, and system architecture diagrams.

**Live site:** _Connect to Vercel to deploy_  
**Contact:** [WhatsApp](https://wa.me/59995230683) · sahidattaf@gmail.com

---

## What's Inside

### GPT Catalog
45+ specialized AI tools across 11 business domains — Finance, Hospitality, Real Estate, Marketing, Legal, Education, AI Dev, Sustainability, Creative, Sports, and Entertainment. Each card shows pricing, category, use case, and a direct link or WhatsApp inquiry button.

### Resource Hub (`/resources`)
Five sections for builders and business owners:

| Section | Route | Contents |
|---|---|---|
| Prompt Library | `/prompts` | 30 copy-paste prompts across 9 domains, filterable by category, difficulty, and model |
| Skills & Custom GPTs | `/skills` | 6-step Custom GPT builder guide + 4 system prompt templates |
| Domain Playbooks | `/playbook` | End-to-end AI deployment playbooks for Restaurant, Real Estate, Marketing, Finance |
| Claude & Anthropic | `/claude` | Model comparison, use cases, Python + Next.js API code examples |
| Notion Integration | `/notion` | DB schema, CSV export pipeline docs, Notion API roadmap |

### Architecture (`/architecture`)
Six Mermaid-powered interactive diagrams — System Architecture, AI System Architecture, Multi-Agent Architecture (26 agents across 5 clusters), Orchestration Flow, Enterprise Architecture, and Memory Architecture. Dark-mode aware and brand-themed.

### Memory System (`/favorites`)
Favorites and recently viewed GPTs stored in `localStorage` — no server, no account needed. Live badge in the nav reflects your saved count.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19 + Tailwind CSS 4 |
| Language | TypeScript (strict mode) |
| Icons | lucide-react |
| Diagrams | Mermaid.js 11 (dynamic import, SSR-safe) |
| Font | Inter via `next/font/google` |
| Data | Notion → CSV → `lib/gptData.ts` embedded string |
| State | React Context (ThemeContext + MemoryContext) |
| Storage | `localStorage` (theme + favorites + recently viewed) |
| Contact | WhatsApp Business API (`wa.me`) |

---

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout: header, nav, footer
│   ├── page.tsx            # Main marketplace (search, filter, cards)
│   ├── categories/         # Category grid with filtered GPT list
│   ├── featured/           # Featured GPTs showcase
│   ├── favorites/          # Saved favorites + recently viewed
│   ├── architecture/       # 6 Mermaid system diagrams
│   ├── resources/          # Resource hub landing page
│   ├── prompts/            # Searchable prompt library
│   ├── skills/             # Custom GPT builder guide
│   ├── playbook/           # Domain AI deployment playbooks
│   ├── claude/             # Claude API guide + code examples
│   ├── notion/             # Notion data pipeline docs
│   ├── contact/            # Contact page
│   └── api/gpts/route.ts   # REST endpoint: GET /api/gpts
├── components/
│   ├── GptCard.tsx         # Product card with favorite toggle + CTA
│   ├── PromptCard.tsx      # Prompt card with copy-to-clipboard + expand
│   ├── FeaturedCarousel.tsx
│   ├── CategoryGrid.tsx
│   ├── SearchFilter.tsx
│   ├── MermaidRenderer.tsx # SSR-safe Mermaid diagram renderer
│   ├── ChatbotWidget.tsx   # "Ask AI" modal with WhatsApp fallback
│   ├── FavoritesNavBadge.tsx
│   ├── NavLink.tsx         # Active-state nav link
│   ├── ThemeToggle.tsx
│   └── WhatsAppButton.tsx  # Floating contact button
├── contexts/
│   ├── ThemeContext.tsx    # Dark/light mode with localStorage persistence
│   └── MemoryContext.tsx   # Favorites + recently viewed (hydration-safe)
├── lib/
│   ├── gptData.ts          # 45 GPTs as embedded CSV, filter functions
│   ├── promptLibrary.ts    # 30 prompts with metadata
│   └── playbookData.ts     # 4 domain playbooks with step-by-step actions
└── data/
    └── gpts.csv            # Notion export — source of truth for catalog
```

---

## Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/sahidattaf/saihid-gpt-marketplace.git
cd saihid-gpt-marketplace

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
# → http://localhost:3000

# 4. Build for production
npm run build

# 5. Lint
npm run lint
```

No environment variables are required for the base app — all data is embedded at build time.

To use the Claude API integration examples from `/claude`, set:

```bash
ANTHROPIC_API_KEY=your_key_here
```

---

## API

### `GET /api/gpts`

Returns the full GPT catalog, with optional query parameters:

| Param | Type | Example |
|---|---|---|
| `q` | string | `?q=restaurant` |
| `category` | Category string | `?category=🍽 Hospitality %26 Food Service` |
| `featured` | `Yes` / `No` / `Coming Soon` | `?featured=Yes` |
| `priceMin` | number | `?priceMin=50` |
| `priceMax` | number | `?priceMax=200` |

**Response:**
```json
{
  "total": 12,
  "data": [
    {
      "name": "Restaurant Menu Engineer",
      "emoji": "🍽",
      "category": "🍽 Hospitality & Food Service",
      "price": 97,
      "featured": "Yes",
      ...
    }
  ]
}
```

---

## Updating the GPT Catalog

The catalog is sourced from a Notion database and embedded as a CSV string in `lib/gptData.ts`.

1. Edit the Notion database (add/update GPTs)
2. Export → **CSV** format
3. Replace `data/gpts.csv` with the new export
4. Update the embedded CSV string in `lib/gptData.ts`
5. Run `npm run build` to validate, then push

See `/notion` in the running app for the full database schema and pipeline documentation.

---

## Deploying to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect the GitHub repo at vercel.com for auto-deploy on push
```

No additional configuration needed — Next.js is auto-detected.

---

## Brand

| Token | Value |
|---|---|
| Primary dark | `#0F4C75` |
| Primary light | `#00A896` |
| Gradient | `linear-gradient(135deg, #0F4C75, #00A896)` |
| CSS class | `.brand-gradient` · `.brand-gradient-text` |
| WhatsApp number | `59995230683` |

---

## Contributing

This is a personal portfolio project. If you spot a bug or want to suggest a GPT addition, open an issue or reach out on WhatsApp.

---

© 2026 Sahid Attaf. All rights reserved.
