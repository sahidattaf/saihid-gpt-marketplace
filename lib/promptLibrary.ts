export type PromptCategory =
  | "📊 Finance & Investment"
  | "🍽 Hospitality & Food Service"
  | "🏢 Real Estate & Construction"
  | "📈 Marketing & Business Growth"
  | "📚 Education & Coaching"
  | "⚖️ Legal & Compliance"
  | "🧠 AI Tools & Development"
  | "🌿 Sustainability & Eco Solutions"
  | "🎨 Creative & Branding";

export type Difficulty = "Beginner" | "Intermediate" | "Advanced";
export type ModelTag = "GPT-4o" | "Claude Sonnet" | "Claude Opus" | "Any LLM";

export interface Prompt {
  id: string;
  title: string;
  category: PromptCategory;
  difficulty: Difficulty;
  model: ModelTag;
  tags: string[];
  description: string;
  prompt: string;
}

export const promptLibrary: Prompt[] = [
  // ── Finance & Investment ─────────────────────────────────────────────────
  {
    id: "fin-01",
    title: "REIT Investment Analysis Brief",
    category: "📊 Finance & Investment",
    difficulty: "Advanced",
    model: "Claude Opus",
    tags: ["REIT", "investment", "analysis", "IRR"],
    description: "Deep-dive financial analysis of a REIT opportunity with risk scoring.",
    prompt: `You are a senior REIT investment analyst. Analyze the following property portfolio opportunity and produce a structured investment brief.

Context: [PASTE PROJECT DETAILS — location, asset type, cap rate, NOI, occupancy, debt structure]

Deliver:
1. Executive summary (3 sentences, IRR projection, risk rating 1-10)
2. Market positioning vs. comparable REITs in the region
3. 5-year cash flow model assumptions (base / bull / bear case)
4. Top 3 risks and mitigation strategies
5. Recommendation: Invest / Pass / Negotiate — with conditions

Format as a professional investment memo. Use tables for financial projections.`,
  },
  {
    id: "fin-02",
    title: "Green Bond Structuring Template",
    category: "📊 Finance & Investment",
    difficulty: "Advanced",
    model: "Claude Sonnet",
    tags: ["green bond", "ESG", "structuring", "capital markets"],
    description: "Structure a green bond issuance for a sustainable development project.",
    prompt: `Act as a green finance specialist. Structure a green bond issuance for the following project.

Project: [NAME, LOCATION, TOTAL CAPEX, USE OF PROCEEDS]

Produce:
1. Green Bond Framework (aligned with ICMA Green Bond Principles)
2. Eligible project categories and exclusion criteria
3. Suggested tenor, coupon range, and target investor base
4. Reporting KPIs (environmental impact metrics)
5. Third-party verification requirements
6. Sample term sheet table

Ensure alignment with any applicable Caribbean sustainable finance regulations.`,
  },
  {
    id: "fin-03",
    title: "Investor Pitch Deck Outline",
    category: "📊 Finance & Investment",
    difficulty: "Intermediate",
    model: "GPT-4o",
    tags: ["pitch deck", "fundraising", "slides", "investor"],
    description: "Generate a complete 12-slide investor pitch deck outline for a capital raise.",
    prompt: `You are a pitch deck strategist for a venture targeting institutional investors. Create a 12-slide pitch deck outline for the following raise.

Company/Project: [NAME]
Sector: [SECTOR]
Amount seeking: $[AMOUNT]
Use of funds: [BRIEF DESCRIPTION]

For each slide provide:
- Slide title
- Key message (1 sentence)
- 3-5 bullet points of content
- Recommended visual/chart type
- Common investor question this slide must answer

Slides: Cover, Problem, Solution, Market Size, Business Model, Traction, Product/Asset Overview, Competitive Advantage, Team, Financial Projections (3-year), Use of Funds, Ask & Close.`,
  },
  {
    id: "fin-04",
    title: "Portfolio Stress-Test Scenario",
    category: "📊 Finance & Investment",
    difficulty: "Advanced",
    model: "Claude Opus",
    tags: ["stress test", "portfolio", "risk", "scenario analysis"],
    description: "Run three macro stress scenarios against a mixed-asset portfolio.",
    prompt: `Act as a quantitative risk manager. Stress-test the following portfolio against three macro scenarios.

Portfolio: [PASTE ASSET LIST WITH ALLOCATION %]
Base assumptions: [INTEREST RATE, GDP GROWTH, INFLATION]

Scenarios to model:
1. Rising rates (+300bps over 18 months) + regional recession
2. Caribbean climate event disrupting 2 assets simultaneously
3. Global liquidity crunch reducing deal volumes 60%

For each scenario deliver:
- Estimated portfolio NAV impact (%)
- Most exposed positions and why
- Recommended hedging or rebalancing action
- Time to recovery estimate

Conclude with a one-page risk summary for the investment committee.`,
  },

  // ── Hospitality & Food Service ───────────────────────────────────────────
  {
    id: "hosp-01",
    title: "Weekly Restaurant Shift Schedule",
    category: "🍽 Hospitality & Food Service",
    difficulty: "Beginner",
    model: "Any LLM",
    tags: ["scheduling", "operations", "staff", "restaurant"],
    description: "Generate an optimized weekly shift schedule for front and back of house.",
    prompt: `You are a restaurant operations manager. Build the optimal weekly shift schedule.

Restaurant: [NAME]
Covers per service: [LUNCH: X | DINNER: Y]
Staff: [LIST NAMES AND ROLES — e.g., 3 servers, 2 cooks, 1 barista]
Operating hours: [MON-FRI X-Y | SAT-SUN X-Y]
Constraints: [E.g., Ana unavailable Wednesdays, minimum 2 servers per dinner service]
Labour cost target: [% of projected weekly revenue]

Deliver:
- 7-day grid (rows = staff, columns = days, cells = shift or OFF)
- Total hours per staff member
- Labour cost estimate
- Any flagged conflicts or understaffed slots`,
  },
  {
    id: "hosp-02",
    title: "Seasonal Menu Design Brief",
    category: "🍽 Hospitality & Food Service",
    difficulty: "Intermediate",
    model: "GPT-4o",
    tags: ["menu", "food cost", "seasonal", "culinary"],
    description: "Design a profitable seasonal menu with cost and price calculations.",
    prompt: `You are an executive chef and menu consultant. Design a seasonal menu for the following concept.

Restaurant concept: [E.g., Caribbean fusion grill]
Season/theme: [E.g., Q4 holiday, summer beach]
Target food cost: [E.g., 28-32%]
Price tier: [E.g., mains $18-$35]
Dietary requirements: [E.g., 3 vegan, 2 gluten-free options]
Signature ingredient: [E.g., local catch, plantain, Curaçao liqueur]

Deliver:
- Menu structure: starters (4), mains (6), desserts (3), specials (2)
- For each dish: name, 2-line description, ingredients list, estimated food cost %, suggested sell price
- Chef's notes on plating/presentation
- Wine/cocktail pairing suggestions for 3 hero dishes`,
  },
  {
    id: "hosp-03",
    title: "3-Tier Loyalty Program Design",
    category: "🍽 Hospitality & Food Service",
    difficulty: "Intermediate",
    model: "Claude Sonnet",
    tags: ["loyalty", "CRM", "retention", "rewards"],
    description: "Design a complete loyalty program with tiers, points, and retention mechanics.",
    prompt: `Act as a hospitality CRM strategist. Design a 3-tier loyalty program for a restaurant group.

Brand: [RESTAURANT NAME]
Average spend per visit: $[AMOUNT]
Current visit frequency: [X visits/month per regular]
Goal: Increase return visit rate by [X%] within 6 months

Design:
1. Tier names (brand-appropriate) + entry thresholds (points or spend)
2. Points-earn rate per dollar spent
3. Tier benefits (Bronze / Silver / Gold or custom names)
4. Monthly engagement mechanics (double-point days, birthday reward, referral bonus)
5. Redemption rules (minimum, expiry, blackout periods)
6. Tech stack recommendation (POS integration, app vs card)
7. Launch communication plan (email sequence — 3 emails)`,
  },
  {
    id: "hosp-04",
    title: "Online Review Response Templates",
    category: "🍽 Hospitality & Food Service",
    difficulty: "Beginner",
    model: "Any LLM",
    tags: ["reviews", "reputation", "Google", "TripAdvisor"],
    description: "Generate professional responses to positive, neutral, and negative reviews.",
    prompt: `You are a hospitality brand manager. Write professional review responses.

Restaurant: [NAME]
Brand voice: [E.g., warm and professional / playful and casual]
Location: [CITY]

Write 3 response templates:

1. 5-star positive review — Thank, highlight what they praised, invite return
2. 3-star mixed review (good food, slow service) — Acknowledge, apologise specifically, commit to improvement, invite direct contact
3. 1-star negative review (disputed complaint) — Stay calm, empathise, move offline diplomatically, protect brand

For each: keep under 120 words, avoid generic phrases, personalise to review content cues.`,
  },
  {
    id: "hosp-05",
    title: "Event Catering Proposal",
    category: "🍽 Hospitality & Food Service",
    difficulty: "Beginner",
    model: "GPT-4o",
    tags: ["catering", "events", "proposal", "pricing"],
    description: "Draft a full catering proposal for a private or corporate event.",
    prompt: `You are a catering sales manager. Draft a professional catering proposal.

Event details:
- Type: [E.g., corporate dinner, wedding, product launch]
- Date: [DATE]
- Guests: [NUMBER]
- Venue: [LOCATION]
- Budget per head: $[AMOUNT]
- Dietary notes: [REQUIREMENTS]

Proposal sections:
1. Cover page text (venue, client, date, our brand)
2. Menu options (2 packages: Standard & Premium)
3. Service style (buffet / plated / stations)
4. Staffing plan (ratio per guest)
5. Equipment list
6. Pricing breakdown (per head + setup fee + gratuity)
7. Terms & conditions (deposit, cancellation, final numbers deadline)`,
  },
  {
    id: "hosp-06",
    title: "Restaurant Revenue Recovery Plan",
    category: "🍽 Hospitality & Food Service",
    difficulty: "Advanced",
    model: "Claude Opus",
    tags: ["revenue", "recovery", "strategy", "P&L"],
    description: "Build a 90-day revenue recovery plan for an underperforming restaurant.",
    prompt: `You are a restaurant turnaround consultant. Build a 90-day recovery plan.

Current situation:
- Revenue: $[CURRENT] vs target $[TARGET]
- Key problem areas: [E.g., low lunch covers, high COGS, poor table turn]
- Team size: [X]
- Recent customer feedback themes: [LIST]

Deliver a 90-day plan in three 30-day phases:

Phase 1 (Days 1-30): Quick wins — what changes this week?
Phase 2 (Days 31-60): Structural fixes — menu, pricing, marketing
Phase 3 (Days 61-90): Growth — new revenue streams, partnerships

Each phase: 5 specific actions, owner, KPI to track, estimated revenue impact.
Conclude with a simplified weekly P&L tracking template.`,
  },

  // ── Real Estate & Construction ───────────────────────────────────────────
  {
    id: "re-01",
    title: "Eco-Resort Development Phases",
    category: "🏢 Real Estate & Construction",
    difficulty: "Advanced",
    model: "Claude Opus",
    tags: ["development", "phases", "resort", "construction"],
    description: "Map out the full development lifecycle for a coastal eco-resort.",
    prompt: `You are a master development planner. Map the full development lifecycle for an eco-resort project.

Project: [NAME]
Location: [COASTAL COUNTRY/REGION]
Total units: [NUMBER]
Amenities: [LIST KEY AMENITIES]
Total budget: $[AMOUNT]
Target completion: [DATE]

Deliver a phased development plan:
Phase 1: Land acquisition & environmental permits
Phase 2: Infrastructure (utilities, roads, jetty)
Phase 3: Core construction (units, F&B, reception)
Phase 4: Fit-out and soft furnishings
Phase 5: Pre-opening, staffing, soft launch
Phase 6: Grand opening and ramp-up

For each phase: timeline, key deliverables, budget %, critical path items, risk flags.
Output as a Gantt-style text table.`,
  },
  {
    id: "re-02",
    title: "Foreign Investor Due Diligence Checklist",
    category: "🏢 Real Estate & Construction",
    difficulty: "Intermediate",
    model: "Claude Sonnet",
    tags: ["due diligence", "foreign investor", "Curaçao", "legal"],
    description: "Complete due diligence checklist for a foreign investor buying Caribbean real estate.",
    prompt: `Act as a real estate attorney specializing in Caribbean foreign investment. Create a due diligence checklist.

Property type: [E.g., commercial, residential, mixed-use]
Location: [ISLAND/COUNTRY]
Investor origin: [COUNTRY]
Transaction value: $[AMOUNT]

Checklist sections (for each item: who provides it, red flag triggers, typical turnaround time):
1. Title & ownership verification
2. Land registry & cadastral records
3. Zoning & development permits
4. Environmental compliance & restrictions
5. Existing liens, mortgages, and encumbrances
6. Utilities connections and easements
7. Tax compliance (local property tax, transfer tax, foreign ownership rules)
8. Corporate structure & beneficial ownership
9. Anti-money laundering documentation
10. Final conditions precedent to close

Flag any Curaçao-specific regulations for foreign buyers.`,
  },
  {
    id: "re-03",
    title: "90-Day Luxury Property Sales Plan",
    category: "🏢 Real Estate & Construction",
    difficulty: "Intermediate",
    model: "GPT-4o",
    tags: ["sales", "luxury", "listing", "real estate"],
    description: "Build a 90-day action plan to sell a luxury listing above asking price.",
    prompt: `You are a luxury real estate sales director. Create a 90-day sales plan for a high-value listing.

Listing:
- Property: [TYPE AND BRIEF DESCRIPTION]
- Location: [AREA]
- Asking price: $[AMOUNT]
- Days on market: [X]
- Key features: [LIST TOP 3]
- Target buyer profile: [E.g., Caribbean second-home buyers, European investors]

90-day plan:
Week 1-2: Positioning & launch (photography, copy, pricing strategy)
Week 3-6: Active marketing (channels, open houses, broker outreach)
Week 7-10: Lead nurturing & price strategy review
Week 11-13: Negotiation readiness & close

Deliverables per phase: actions, channels, KPIs, budget allocation (% of gross commission).`,
  },
  {
    id: "re-04",
    title: "Construction Logistics Risk Matrix",
    category: "🏢 Real Estate & Construction",
    difficulty: "Advanced",
    model: "Claude Sonnet",
    tags: ["logistics", "risk", "construction", "supply chain"],
    description: "Map supply chain and logistics risks for a large Caribbean construction project.",
    prompt: `You are a construction logistics specialist. Build a risk matrix for a Caribbean development.

Project: [NAME]
Location: [ISLAND]
Build duration: [X months]
Main materials: [E.g., steel, timber, glass, concrete]
Suppliers: [LOCAL / IMPORTED — key origin countries]

Risk matrix format (for each risk):
| Risk | Probability (1-5) | Impact (1-5) | Risk Score | Mitigation | Contingency |

Categories to cover:
1. Port delays & shipping disruptions
2. Customs & import duties changes
3. Local supplier capacity
4. Weather/hurricane season
5. Labour availability & cost inflation
6. Material price volatility
7. Equipment availability

Conclude with top 3 priority mitigations and a procurement timeline buffer recommendation.`,
  },

  // ── Marketing & Business Growth ──────────────────────────────────────────
  {
    id: "mkt-01",
    title: "Restaurant Launch Campaign — 6 Weeks",
    category: "📈 Marketing & Business Growth",
    difficulty: "Intermediate",
    model: "GPT-4o",
    tags: ["launch", "campaign", "restaurant", "social media"],
    description: "Full 6-week pre- and post-launch marketing campaign for a new restaurant.",
    prompt: `You are a hospitality marketing director. Build a 6-week launch campaign.

Restaurant: [NAME & CONCEPT]
Location: [CITY]
Opening date: [DATE]
Budget: $[TOTAL MARKETING BUDGET]
Target audience: [DESCRIBE PRIMARY DINER PROFILE]
Unique selling point: [1-2 SENTENCES]

Week-by-week plan. For each week:
- Campaign theme
- Channels (Instagram, Google, WhatsApp, email, PR)
- Content types (Reels, Stories, posts, paid ads)
- Copy hook (1 punchy line per channel)
- KPI to track
- Budget allocation

Week 1: Teaser & curiosity
Week 2-3: Countdown & reveal
Week 4: Opening week (real-time content)
Week 5: Social proof (reviews, UGC)
Week 6: Retention drive (loyalty sign-up)`,
  },
  {
    id: "mkt-02",
    title: "B2B Content Calendar — 30 Days",
    category: "📈 Marketing & Business Growth",
    difficulty: "Beginner",
    model: "Any LLM",
    tags: ["content", "calendar", "B2B", "LinkedIn"],
    description: "Generate a full 30-day B2B content calendar with hooks and formats.",
    prompt: `You are a B2B content strategist. Build a 30-day content calendar.

Company: [NAME & INDUSTRY]
Audience: [JOB TITLES / DECISION MAKERS]
Primary channel: [E.g., LinkedIn, Email newsletter]
Content pillars: [E.g., AI trends, case studies, how-tos, thought leadership]
Posting frequency: [X times per week]
Tone: [E.g., expert but approachable]

Calendar output (for each post):
| Day | Pillar | Format | Hook (first line) | CTA | Hashtags |

Cover all 4 content types: Educational, Inspirational, Promotional, Conversational.
Flag the 4 highest-engagement post ideas for boosting with paid spend.`,
  },
  {
    id: "mkt-03",
    title: "Multilingual Social Media Ad Copy",
    category: "📈 Marketing & Business Growth",
    difficulty: "Beginner",
    model: "Claude Sonnet",
    tags: ["multilingual", "Papiamentu", "social ads", "copy"],
    description: "Write ad copy in English, Dutch, Spanish, and Papiamentu for a Caribbean audience.",
    prompt: `You are a multilingual copywriter for the Caribbean market. Write ad copy in 4 languages.

Brand: [NAME]
Product/Service: [DESCRIBE IN ONE SENTENCE]
Audience: [DEMOGRAPHIC]
Campaign goal: [E.g., drive WhatsApp inquiries / restaurant reservations / app downloads]
Tone: [E.g., warm and local / premium and aspirational]

For each language (English, Dutch, Spanish, Papiamentu):
- Headline (max 7 words)
- Body copy (max 30 words)
- Call to action (max 5 words)
- Platform-specific version: Facebook/Instagram feed, Stories, WhatsApp status

Note: Ensure Papiamentu copy feels native, not machine-translated. Flag any cultural nuances.`,
  },
  {
    id: "mkt-04",
    title: "Competitive Benchmark Analysis",
    category: "📈 Marketing & Business Growth",
    difficulty: "Advanced",
    model: "Claude Opus",
    tags: ["benchmarking", "competitive", "strategy", "positioning"],
    description: "Benchmark your business against 5 global analogues to find strategic gaps.",
    prompt: `You are a global strategy benchmarking analyst. Compare a business against 5 analogues.

Our business: [NAME, COUNTRY, SECTOR, SIZE, KEY METRICS]
Our goal: [E.g., attract international investors, scale to 3 markets in 2 years]

Find 5 globally comparable businesses (similar model, different geography) and for each:
1. Company name and market
2. What they do better than us
3. What we do better than them
4. A transferable tactic we can adopt in 90 days
5. A metric they achieve that we should target

Conclude with:
- Our top 3 strategic gaps
- The single highest-leverage action to close the most important gap
- A 6-month positioning statement differentiating us from all 5 analogues`,
  },

  // ── Education & Coaching ─────────────────────────────────────────────────
  {
    id: "edu-01",
    title: "AI Literacy Curriculum — 4 Weeks",
    category: "📚 Education & Coaching",
    difficulty: "Intermediate",
    model: "Claude Sonnet",
    tags: ["curriculum", "AI literacy", "community", "education"],
    description: "Design a 4-week AI literacy program for community leaders and SME owners.",
    prompt: `You are an adult education curriculum designer. Build a 4-week AI literacy program.

Audience: [E.g., SME owners, community leaders, government staff aged 30-55]
Language: [English + Papiamentu/Spanish/Dutch as needed]
Format: [E.g., weekly 2-hour workshops + online exercises]
Goal: Participants can identify AI use cases for their business and use 2 AI tools confidently.

Week-by-week curriculum. For each week:
- Theme and learning objective
- Opening activity (10 min)
- Core content blocks (3 x 20 min)
- Hands-on exercise using a real AI tool
- Homework / reflection task
- Assessment method

Tools to cover: ChatGPT, Claude, image generation, AI writing assistants.
Include 3 Curaçao-specific business case studies as teaching examples.`,
  },
  {
    id: "edu-02",
    title: "Executive 1-on-1 Coaching Plan",
    category: "📚 Education & Coaching",
    difficulty: "Advanced",
    model: "Claude Opus",
    tags: ["coaching", "executive", "leadership", "development"],
    description: "Design a 6-session executive coaching programme for a senior leader.",
    prompt: `You are an ICF-certified executive coach. Design a 6-session coaching programme.

Coachee profile: [ROLE, YEARS EXPERIENCE, INDUSTRY]
Development goal: [E.g., transition to CEO, lead through change, executive presence]
Session length: [60-90 minutes]
Format: [In-person / video]
Key challenge identified: [BRIEF DESCRIPTION]

For each of the 6 sessions:
- Session theme and objective
- Opening check-in question
- Core coaching framework to use (e.g., GROW, OSKAR, Immunity to Change)
- 2 powerful coaching questions
- Reflection exercise
- Between-session commitment/action

Include: recommended assessments (360, MBTI, etc.), reading list (3 books), and a progress measurement approach.`,
  },
  {
    id: "edu-03",
    title: "Community Workshop Facilitation Guide",
    category: "📚 Education & Coaching",
    difficulty: "Beginner",
    model: "Any LLM",
    tags: ["workshop", "facilitation", "community", "engagement"],
    description: "Create a ready-to-run 3-hour community workshop facilitation guide.",
    prompt: `You are a community facilitator. Create a complete 3-hour workshop run-of-show.

Topic: [E.g., Digital entrepreneurship for youth / AI tools for local businesses]
Audience: [SIZE, AGE RANGE, BACKGROUND]
Venue: [TYPE — classroom, community hall, outdoor]
Language: [PRIMARY LANGUAGE]
Materials available: [E.g., projector, flip charts, internet, printed handouts]

Deliver:
- Agenda with exact time blocks (welcome, segments, breaks, close)
- Facilitator script for each segment (not word-for-word, but key talking points)
- 3 group activities with instructions (pairs, small groups, full room)
- Discussion questions to generate insight
- Energy check / temperature gauge moments
- Closing ritual and takeaway commitment card template
- Evaluation form (5 questions)`,
  },

  // ── Legal & Compliance ───────────────────────────────────────────────────
  {
    id: "legal-01",
    title: "Curaçao Foreign Investment Setup Guide",
    category: "⚖️ Legal & Compliance",
    difficulty: "Advanced",
    model: "Claude Opus",
    tags: ["Curaçao", "foreign investment", "company formation", "legal"],
    description: "Step-by-step legal roadmap for a foreign investor setting up in Curaçao.",
    prompt: `Act as a Curaçao-based corporate attorney. Create a legal setup roadmap for a foreign investor.

Investor profile:
- Origin country: [COUNTRY]
- Business type: [E.g., holding company, hospitality, real estate development]
- Investment amount: $[AMOUNT]
- Timeline to operate: [X months]

Deliver:
1. Recommended corporate structure (NV, BV, Foundation, or hybrid) with pros/cons
2. Step-by-step company registration process with estimated timelines
3. Foreign ownership rules and restrictions for this sector
4. Required permits and licenses (business, sector-specific, environmental)
5. Tax implications: local tax, withholding tax, double-tax treaty considerations
6. Banking requirements and anti-money laundering documentation
7. Ongoing compliance obligations (annual filings, audits, reporting)
8. Estimated total setup cost (legal fees + government fees + timeline)

Note any regulatory changes post-2024 affecting foreign investors.`,
  },
  {
    id: "legal-02",
    title: "AI Vendor Contract Review Checklist",
    category: "⚖️ Legal & Compliance",
    difficulty: "Intermediate",
    model: "Claude Sonnet",
    tags: ["contract", "AI vendor", "data privacy", "compliance"],
    description: "Review an AI vendor contract for IP, data rights, and liability clauses.",
    prompt: `You are a technology contracts lawyer. Review an AI vendor agreement for a business client.

Contract type: [E.g., AI SaaS subscription, custom AI development, data processing agreement]
Vendor: [NAME OR DESCRIBE]
Client industry: [SECTOR]
Jurisdiction: [COUNTRY/REGION]

Review checklist — for each clause category, flag: ✅ Acceptable / ⚠️ Negotiate / 🚨 Reject:

1. Data ownership and IP rights (who owns outputs generated by the AI?)
2. Data privacy and GDPR/local compliance
3. Model training on client data (opt-out provisions)
4. Liability cap and indemnification
5. SLA, uptime guarantees, and remedies
6. Termination and data portability/deletion
7. Sub-processor list and approval rights
8. Audit rights and transparency obligations
9. Price escalation and change-of-control provisions

Provide 3 priority negotiation points with suggested alternative language.`,
  },
  {
    id: "legal-03",
    title: "Compliance Audit Framework",
    category: "⚖️ Legal & Compliance",
    difficulty: "Advanced",
    model: "Claude Opus",
    tags: ["compliance", "audit", "framework", "risk"],
    description: "Build an internal compliance audit framework for a growing business.",
    prompt: `You are a compliance director. Build an internal compliance audit framework.

Organisation: [NAME, SECTOR, SIZE — employees and revenue range]
Regulatory environment: [KEY REGULATIONS — e.g., GDPR, AML/KYC, local sector rules]
Last external audit: [DATE OR NEVER]
Priority risk areas: [LIST TOP 3 KNOWN RISKS]

Framework deliverables:
1. Compliance risk register (top 15 risks, likelihood, impact, owner)
2. Quarterly self-audit checklist (by department: Finance, HR, IT, Operations)
3. Policy review schedule (which policies, frequency, owner)
4. Incident reporting protocol (steps, escalation, timeline)
5. Training plan (annual compliance training topics by role)
6. Board reporting template (1-page quarterly dashboard)
7. Regulatory change monitoring process

Output as a practical operations manual section, not legal theory.`,
  },

  // ── AI Tools & Development ───────────────────────────────────────────────
  {
    id: "ai-01",
    title: "Custom GPT System Prompt Builder",
    category: "🧠 AI Tools & Development",
    difficulty: "Intermediate",
    model: "Any LLM",
    tags: ["GPT", "system prompt", "custom GPT", "OpenAI"],
    description: "Generate a production-ready system prompt for a custom OpenAI GPT.",
    prompt: `You are a prompt engineer specializing in OpenAI custom GPT system prompts. Build a complete system prompt.

GPT purpose: [E.g., restaurant operations assistant for Bossa Asado i Mar]
Target user: [ROLE AND CONTEXT]
Primary tasks this GPT will perform: [LIST 5]
Tone and persona: [E.g., professional Caribbean ops expert, speaks English and Papiamentu]
Restrictions: [What the GPT should never do]
Output formats preferred: [E.g., bullet lists, tables, structured plans]

Deliver a complete system prompt including:
1. Role & persona definition (2-3 sentences)
2. Core capabilities block
3. Tone and communication style rules
4. Response format instructions
5. Limitation/refusal rules
6. Opening message template
7. 5 suggested conversation starters

Format ready to paste directly into the OpenAI GPT builder "Instructions" field.`,
  },
  {
    id: "ai-02",
    title: "Multi-Agent Workflow Design",
    category: "🧠 AI Tools & Development",
    difficulty: "Advanced",
    model: "Claude Opus",
    tags: ["multi-agent", "orchestration", "workflow", "architecture"],
    description: "Design a multi-agent AI workflow for a complex business process.",
    prompt: `You are an AI systems architect. Design a multi-agent workflow for automating a business process.

Business process to automate: [E.g., end-to-end restaurant daily reporting from POS to management dashboard]
Current manual steps: [LIST ALL STEPS]
Data inputs: [SOURCES — POS, inventory system, reservations, staff clock-in]
Desired outputs: [E.g., daily performance report, anomaly alerts, next-day prep list]

Design a multi-agent architecture:
1. Agent roster (name each agent, single responsibility per agent)
2. Orchestration flow (which agent triggers which, in what order)
3. Shared memory/context layer (what data passes between agents)
4. Human-in-the-loop checkpoints (where human approval is needed)
5. Error handling (what happens when an agent fails)
6. Tech stack recommendation (LangChain, AutoGen, CrewAI, or custom)
7. Estimated time saved vs. manual process

Deliver as a technical design document with a Mermaid flowchart description.`,
  },
  {
    id: "ai-03",
    title: "RAG Pipeline Design for Business Knowledge Base",
    category: "🧠 AI Tools & Development",
    difficulty: "Advanced",
    model: "Claude Opus",
    tags: ["RAG", "knowledge base", "vector DB", "retrieval"],
    description: "Design a RAG pipeline to make your business documents AI-queryable.",
    prompt: `You are a RAG (Retrieval-Augmented Generation) architect. Design a production RAG pipeline.

Organisation: [NAME & SECTOR]
Document types to index: [E.g., SOPs, contracts, menus, pricing guides, past proposals — total ~X documents]
Query types users will ask: [GIVE 5 EXAMPLE QUESTIONS]
Security requirements: [E.g., role-based access, no cross-tenant leakage]
Tech environment: [Cloud provider, existing stack]

Design:
1. Document ingestion pipeline (ingest → clean → chunk → embed → store)
2. Chunking strategy (size, overlap, metadata tagging)
3. Embedding model recommendation with justification
4. Vector database choice (Pinecone, Weaviate, pgvector) with trade-offs
5. Retrieval strategy (semantic, hybrid, re-ranking)
6. Prompt template for the final LLM call
7. Evaluation metrics (retrieval accuracy, answer quality, latency)
8. Estimated cost at scale (per 1,000 queries/day)

Include a simple Python pseudocode skeleton for the query pipeline.`,
  },

  // ── Sustainability & Eco Solutions ───────────────────────────────────────
  {
    id: "eco-01",
    title: "Coastal Eco-Impact Assessment",
    category: "🌿 Sustainability & Eco Solutions",
    difficulty: "Advanced",
    model: "Claude Opus",
    tags: ["eco-impact", "coastal", "environmental", "assessment"],
    description: "Framework for assessing marine and coastal environmental impact before construction.",
    prompt: `You are an environmental impact assessment specialist for coastal Caribbean projects. Conduct a structured eco-impact assessment.

Project: [NAME]
Location: [COASTAL COORDINATES OR AREA NAME]
Development type: [E.g., 200-unit marina resort + jetty + beach club]
Timeline: [CONSTRUCTION START + DURATION]

Assessment framework:
1. Baseline environmental inventory (coral reef, seagrass, mangrove, fish species)
2. Scope of impact by construction phase (dredging, foundation, operation)
3. Risk matrix: [Activity → Receptor → Impact → Severity → Probability]
4. Mitigation measures (engineering and management controls)
5. Monitoring plan (KPIs, frequency, responsible party)
6. Residual impact after mitigation (acceptable / unacceptable)
7. Permit requirements (local environmental authority + CITES if relevant)
8. Community consultation requirements

Flag any protected species or habitats requiring special protocols.`,
  },
  {
    id: "eco-02",
    title: "Green Certification Roadmap",
    category: "🌿 Sustainability & Eco Solutions",
    difficulty: "Intermediate",
    model: "Claude Sonnet",
    tags: ["LEED", "green building", "certification", "sustainability"],
    description: "Create a roadmap to achieve LEED or BREEAM certification for a new building.",
    prompt: `You are a green building certification consultant. Build a certification roadmap.

Project: [BUILDING TYPE AND SIZE]
Target certification: [LEED Gold / LEED Platinum / BREEAM Excellent — or ask AI to recommend]
Location: [COUNTRY/CLIMATE ZONE]
Construction status: [Design phase / Under construction / Existing building]
Budget for sustainability features: $[AMOUNT]

Deliver:
1. Recommended certification standard with justification
2. Credit category breakdown: achievable credits vs. target credits needed
3. Quick-win credits (low cost, high points)
4. High-cost/high-impact investments ranked by cost-per-credit
5. Documentation requirements and submission timeline
6. Recommended consultants/specialists to engage (by role)
7. Estimated certification fees + ongoing compliance costs
8. Marketing value of certification (ROI: premium rent %, investor appetite)`,
  },

  // ── Creative & Branding ──────────────────────────────────────────────────
  {
    id: "cre-01",
    title: "Brand Identity Brief",
    category: "🎨 Creative & Branding",
    difficulty: "Intermediate",
    model: "GPT-4o",
    tags: ["branding", "identity", "creative brief", "design"],
    description: "Write a complete brand identity brief to hand to a designer or agency.",
    prompt: `You are a brand strategist. Write a complete brand identity brief.

Company: [NAME]
Industry: [SECTOR]
Stage: [E.g., new launch / rebrand / refresh]
Target audience (primary): [DEMOGRAPHICS + PSYCHOGRAPHICS]
Brand personality (pick 3): [E.g., Bold, Caribbean, Trustworthy, Innovative, Warm]
Key competitors: [LIST 3]
What we are NOT: [3 things to avoid]

Brand brief sections:
1. Brand purpose (why we exist beyond profit — 1 sentence)
2. Brand positioning statement (for [audience] who [need], we are [brand] that [benefit], unlike [competitor] who [alternative])
3. Personality traits with "do/don't" examples for each
4. Visual direction: color palette rationale (3-4 colors), typography style, imagery style
5. Voice & tone: 4 adjectives + 3 do/don't writing examples
6. Logo concepts to explore (3 directions, described in words)
7. Tagline options (5 options with rationale)`,
  },
];

export const promptCategories = [
  "All",
  "📊 Finance & Investment",
  "🍽 Hospitality & Food Service",
  "🏢 Real Estate & Construction",
  "📈 Marketing & Business Growth",
  "📚 Education & Coaching",
  "⚖️ Legal & Compliance",
  "🧠 AI Tools & Development",
  "🌿 Sustainability & Eco Solutions",
  "🎨 Creative & Branding",
] as const;
