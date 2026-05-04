# Saihid GPT Marketplace

A production-ready AI GPT marketplace built with Next.js 15 App Router, React 19, TypeScript, and Tailwind CSS 4. Showcases 45+ specialized GPTs for the Curaçao business ecosystem and beyond.

## Tech Stack

- **Framework**: Next.js 15 (App Router, Turbopack)
- **UI**: React 19 + Tailwind CSS 4
- **Language**: TypeScript (strict mode)
- **Icons**: lucide-react

## Project Structure

```
├── app/
│   ├── layout.tsx        # Root layout: header, footer, ThemeProvider
│   ├── page.tsx          # Main marketplace page (client component)
│   ├── not-found.tsx     # 404 page
│   └── globals.css       # Tailwind v4 import + dark mode variant
├── components/
│   ├── GptCard.tsx           # Individual GPT product card
│   ├── FeaturedCarousel.tsx  # Responsive carousel for featured GPTs
│   ├── CategoryGrid.tsx      # Category filter grid (11 categories)
│   ├── SearchFilter.tsx      # Search bar + price range filter
│   ├── ComingSoonStrip.tsx   # Coming soon products banner
│   ├── WhatsAppButton.tsx    # Floating WhatsApp contact button
│   └── ThemeToggle.tsx       # Dark/light mode toggle button
├── contexts/
│   └── ThemeContext.tsx  # Theme state (localStorage persistence)
└── lib/
    └── gptData.ts        # 45 GPT products, CSV parser, filter functions
```

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint
```

## Key Features

- **Featured Carousel**: Responsive 1/2/3 column with prev/next navigation
- **Category Grid**: 11 color-coded categories with toggle selection
- **Search + Price Filter**: Real-time search, collapsible price range
- **Coming Soon Strip**: Gradient banner with upcoming GPTs
- **Dark/Light Theme**: Class-based, persists to localStorage
- **WhatsApp Integration**: Floating button + contact section

## GPT Data

All 45 GPT products live in `lib/gptData.ts` as an embedded CSV string. To update GPTs, edit the `gptDataCSV` constant. Fields:

| Field | Type | Values |
|-------|------|--------|
| name | string | GPT display name |
| emoji | string | Single emoji icon |
| description | string | Short description |
| category | Category | One of 11 categories |
| price | number \| "Coming Soon" | USD price |
| link | string | URL to GPT |
| useCase | string | One-line benefit |
| featured | "Yes" \| "No" \| "Coming Soon" | Display status |

## WhatsApp Configuration

Update `WHATSAPP_NUMBER` in `components/WhatsAppButton.tsx` to change the contact number. Currently: `59995230683` (Curaçao).
