"use client";

import { MermaidRenderer } from "@/components/MermaidRenderer";

interface DiagramSection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  chart: string;
  badge: string;
  badgeColor: string;
}

const diagrams: DiagramSection[] = [
  {
    id: "system",
    badge: "01",
    badgeColor: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
    title: "System Architecture",
    subtitle: "Full-stack overview of the GPT Marketplace platform",
    description:
      "Shows how the Next.js frontend, API layer, data layer, and external services (OpenAI GPTs, WhatsApp) connect end-to-end.",
    chart: `graph TB
    subgraph CLIENT["🌐 Client Layer"]
        U["👤 User Browser"]
        M["📱 Mobile Browser"]
    end

    subgraph APP["⚡ Application Layer (Next.js 16)"]
        HOME["/ Home"]
        CAT["/categories"]
        FEAT["/featured"]
        CONTACT["/contact"]
        ARCH["/architecture"]
        FAV["/favorites"]
    end

    subgraph API["🔌 API Layer"]
        GW["/api/gpts"]
        FILTER["Filter Engine"]
    end

    subgraph DATA["💾 Data Layer"]
        CSV["data/gpts.csv"]
        LIB["lib/gptData.ts"]
        MEM["Memory Store (localStorage)"]
    end

    subgraph EXT["🌍 External Services"]
        GPT["OpenAI GPTs"]
        WA["WhatsApp API"]
    end

    U & M --> HOME & CAT & FEAT & CONTACT & ARCH & FAV
    HOME & CAT & FEAT --> GW
    GW --> FILTER
    FILTER --> LIB
    LIB --> CSV
    HOME & CAT & FEAT & FAV --> MEM
    U & M --> GPT
    CONTACT & HOME --> WA

    style CLIENT fill:#0f4c75,color:#fff,stroke:#00a896
    style APP fill:#1e3a5f,color:#fff,stroke:#00a896
    style API fill:#0f4c75,color:#fff,stroke:#00a896
    style DATA fill:#1e3a5f,color:#fff,stroke:#00a896
    style EXT fill:#00a896,color:#fff,stroke:#007a6e`,
  },
  {
    id: "ai-system",
    badge: "02",
    badgeColor: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
    title: "AI System Architecture",
    subtitle: "How AI intelligence flows through the platform",
    description:
      "Illustrates the full AI pipeline: input processing, intent classification, GPT routing, memory augmentation, and response synthesis.",
    chart: `flowchart LR
    U["👤 User Input"] --> NLP["🔤 NLP Processor"]
    NLP --> IC["🧠 Intent Classifier"]

    IC --> ROUTER["🔀 GPT Router"]

    ROUTER --> |"Finance query"| FIN["📊 Finance GPT\nStealth COO · Oracle · Advisor"]
    ROUTER --> |"Legal query"| LEG["⚖️ Legal GPT\nUnified Advisor · Compliance Mgr"]
    ROUTER --> |"Restaurant query"| REST["🍽 Hospitality GPT\nOps · Marketing · Analytics"]
    ROUTER --> |"Real Estate query"| RE["🏢 Real Estate GPT\nOrchestrator · Sales · Architect"]
    ROUTER --> |"Marketing query"| MKT["📈 Marketing GPT\nGrowth Strategist · Benchmarking"]

    FIN & LEG & REST & RE & MKT --> AGG["⚙️ Response Aggregator"]

    MEM_S["💭 Short-term Memory\n(Session Context)"] <--> AGG
    MEM_L["🗄️ Long-term Memory\n(Vector Store)"] <--> AGG
    MEM_U["👤 User Memory\n(Preferences & History)"] <--> AGG

    AGG --> OUT["✅ Synthesized Response"]
    OUT --> U

    style U fill:#0f4c75,color:#fff
    style OUT fill:#00a896,color:#fff
    style AGG fill:#0f4c75,color:#fff
    style ROUTER fill:#1a6fa8,color:#fff`,
  },
  {
    id: "multi-agent",
    badge: "03",
    badgeColor: "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300",
    title: "Multi-Agent Architecture",
    subtitle: "Specialist agent ecosystem coordinated by the Orchestrator",
    description:
      "Shows the 26 GPT agents organized into 5 domain clusters, all coordinated by a master Orchestrator Agent with shared memory and inter-agent communication.",
    chart: `graph TD
    ORCH["🎯 Orchestrator Agent\nPiska Ecosystem 25 Manager"]
    SHARED["🔗 Shared Memory & Context Bus"]

    ORCH <--> SHARED

    subgraph FIN_C["📊 Finance & Investment"]
        FA1["Stealth COO GPT"]
        FA2["Investment Oracle GPT"]
        FA3["Finance Advisor GPT"]
        FA4["Blockchain Expert"]
    end

    subgraph HOSP_C["🍽 Hospitality"]
        HA1["Ops Manager GPT"]
        HA2["Campaign Strategist GPT"]
        HA3["Analytics GPT"]
        HA4["Menu Design GPT"]
        HA5["Reservations GPT"]
        HA6["Loyalty GPT"]
    end

    subgraph RE_C["🏢 Real Estate"]
        RA1["Master Orchestrator GPT"]
        RA2["Sales Manager GPT"]
        RA3["Sustainable Architect GPT"]
        RA4["Logistics Optimizer GPT"]
    end

    subgraph MKT_C["📈 Strategy & Marketing"]
        MA1["Growth Strategist GPT"]
        MA2["Global Benchmarking GPT"]
        MA3["Identity Strategist GPT"]
    end

    subgraph EDU_C["📚 Education & Legal"]
        EA1["Community AI Coach"]
        EA2["Legal Advisor GPT"]
        EA3["Compliance Manager GPT"]
        EA4["Eco Infrastructure GPT"]
    end

    ORCH --> FIN_C & HOSP_C & RE_C & MKT_C & EDU_C
    FIN_C & HOSP_C & RE_C & MKT_C & EDU_C <--> SHARED

    style ORCH fill:#0f4c75,color:#fff,stroke:#00a896,stroke-width:3px
    style SHARED fill:#00a896,color:#fff,stroke:#007a6e
    style FIN_C fill:#1e3a5f,color:#fff,stroke:#00a896
    style HOSP_C fill:#1e3a5f,color:#fff,stroke:#00a896
    style RE_C fill:#1e3a5f,color:#fff,stroke:#00a896
    style MKT_C fill:#1e3a5f,color:#fff,stroke:#00a896
    style EDU_C fill:#1e3a5f,color:#fff,stroke:#00a896`,
  },
  {
    id: "orchestration",
    badge: "04",
    badgeColor: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300",
    title: "Orchestration Flow",
    subtitle: "End-to-end request lifecycle through the agent pipeline",
    description:
      "Sequence diagram tracing a user request from intake through intent classification, memory retrieval, agent dispatch, execution, memory storage, and final response synthesis.",
    chart: `sequenceDiagram
    actor U as 👤 User
    participant O as 🎯 Orchestrator
    participant M as 💾 Memory Layer
    participant C as 🗂️ Context Builder
    participant P as 🔀 Agent Pool
    participant A as 🤖 Active Agent
    participant S as ✅ Synthesizer

    U->>O: Business request
    O->>M: Fetch user history & preferences
    M-->>O: Prior context (interactions, favorites)
    O->>C: Build enriched context
    C-->>O: Contextualized prompt
    O->>O: Classify intent & select domain
    O->>P: Route to best-fit agent(s)
    P->>A: Dispatch with context
    A->>A: Execute task (RAG + reasoning)
    A-->>P: Agent response + confidence score
    P-->>O: Ranked responses
    O->>S: Synthesize final answer
    O->>M: Persist interaction to memory
    M-->>O: ✓ Saved
    S-->>U: Final response + suggestions`,
  },
  {
    id: "enterprise",
    badge: "05",
    badgeColor: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300",
    title: "Enterprise Architecture",
    subtitle: "Production-grade deployment with security, scale, and observability",
    description:
      "Full enterprise blueprint including security layers, multi-tenant isolation, API gateway, AI orchestration tier, polyglot persistence, and observability stack.",
    chart: `graph TB
    subgraph SEC["🔐 Security & Edge Layer"]
        CDN["CDN / Edge (Vercel)"]
        WAF["Web Application Firewall"]
        AUTH["Auth Provider (NextAuth)"]
        RBAC["Role-Based Access Control"]
    end

    subgraph PRESENT["🖥️ Presentation Tier"]
        WEB["Next.js Web App"]
        MOB["PWA / Mobile"]
        ADMIN["Admin Dashboard"]
    end

    subgraph APIGW["🔌 API Gateway"]
        GW["Rate Limiter · Router · Logger"]
        WH["Webhook Handler"]
    end

    subgraph AI["🧠 AI Orchestration Tier"]
        ORCH2["Multi-Agent Orchestrator"]
        POOL["GPT Agent Pool (26 Agents)"]
        RAG["RAG Pipeline"]
        CACHE_AI["Prompt Cache (Redis)"]
    end

    subgraph PERSIST["💾 Data & Persistence Tier"]
        NOTION["Notion (Source of Truth)"]
        PG["PostgreSQL (Catalog + Users)"]
        VECTOR["Vector DB (Pinecone)"]
        CACHE["Redis Cache"]
        FS["File Store (CSV exports)"]
    end

    subgraph OBS["📊 Observability"]
        LOGS["Structured Logs"]
        METRICS["Metrics (Prometheus)"]
        TRACE["Distributed Tracing"]
        ALERTS["Alerting (PagerDuty)"]
    end

    CDN --> WAF --> AUTH --> RBAC
    RBAC --> WEB & MOB & ADMIN
    WEB & MOB & ADMIN --> GW
    GW --> ORCH2
    ORCH2 --> POOL
    POOL --> RAG
    RAG --> VECTOR
    ORCH2 --> CACHE_AI
    ORCH2 --> PG & NOTION & FS
    GW --> LOGS & METRICS & TRACE
    METRICS --> ALERTS

    style SEC fill:#0f4c75,color:#fff,stroke:#00a896
    style PRESENT fill:#1e3a5f,color:#fff,stroke:#00a896
    style APIGW fill:#0f4c75,color:#fff,stroke:#00a896
    style AI fill:#1a6fa8,color:#fff,stroke:#00a896
    style PERSIST fill:#1e3a5f,color:#fff,stroke:#00a896
    style OBS fill:#00a896,color:#fff,stroke:#007a6e`,
  },
];

const memoryLayers = [
  {
    icon: "💭",
    title: "Short-Term Memory",
    color: "border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20",
    titleColor: "text-blue-700 dark:text-blue-300",
    items: [
      "Active conversation context",
      "Current session state",
      "In-flight agent reasoning",
      "Temporary task artifacts",
    ],
  },
  {
    icon: "🗄️",
    title: "Long-Term Memory",
    color: "border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950/20",
    titleColor: "text-purple-700 dark:text-purple-300",
    items: [
      "Vector embeddings (Pinecone)",
      "Past interactions & outcomes",
      "Domain knowledge base",
      "Agent performance history",
    ],
  },
  {
    icon: "👤",
    title: "User Memory",
    color: "border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-950/20",
    titleColor: "text-teal-700 dark:text-teal-300",
    items: [
      "Favorite GPTs (localStorage)",
      "Recently viewed products",
      "Theme & UI preferences",
      "Search history & filters",
    ],
  },
  {
    icon: "🔗",
    title: "Shared Agent Memory",
    color: "border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20",
    titleColor: "text-amber-700 dark:text-amber-300",
    items: [
      "Cross-agent context bus",
      "Shared domain knowledge",
      "Inter-agent task handoffs",
      "Consensus & conflict data",
    ],
  },
  {
    icon: "⚡",
    title: "Cache Memory",
    color: "border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/20",
    titleColor: "text-indigo-700 dark:text-indigo-300",
    items: [
      "Redis prompt cache",
      "API response caching",
      "Computed filter results",
      "Session token store",
    ],
  },
  {
    icon: "🌍",
    title: "Collective Memory",
    color: "border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20",
    titleColor: "text-green-700 dark:text-green-300",
    items: [
      "Aggregated usage patterns",
      "Popular GPT rankings",
      "Category trend signals",
      "Market intelligence data",
    ],
  },
];

export default function ArchitecturePage() {
  return (
    <div className="space-y-16 py-4">
      {/* Hero */}
      <section className="text-center py-8">
        <div className="inline-block px-4 py-2 brand-gradient text-white rounded-full text-sm font-medium mb-4">
          🏗️ Architecture
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          System & AI Architecture
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Five architectural views of the Saihid GPT Marketplace — from system
          topology to multi-agent orchestration and enterprise deployment.
        </p>
      </section>

      {/* 5 Diagrams */}
      {diagrams.map((d) => (
        <section key={d.id} className="space-y-4">
          <div className="flex items-start gap-4">
            <span
              className={`shrink-0 px-3 py-1 rounded-full text-sm font-bold font-mono ${d.badgeColor}`}
            >
              {d.badge}
            </span>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {d.title}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                {d.subtitle}
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 p-6 shadow-sm">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 border-l-4 border-[#00a896] pl-4">
              {d.description}
            </p>
            <MermaidRenderer chart={d.chart} id={d.id} />
          </div>
        </section>
      ))}

      {/* Memory Architecture */}
      <section className="space-y-6">
        <div className="flex items-start gap-4">
          <span className="shrink-0 px-3 py-1 rounded-full text-sm font-bold font-mono bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
            06
          </span>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Memory Architecture
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              Six-layer memory system powering context, personalization, and agent intelligence
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800 p-6 shadow-sm">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-8 border-l-4 border-[#00a896] pl-4">
            The GPT Marketplace uses a six-layer memory model. Each layer serves a
            distinct purpose — from ephemeral session context to long-term vector
            retrieval — enabling agents to be context-aware, personalized, and
            continuously improving.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {memoryLayers.map((layer) => (
              <div
                key={layer.title}
                className={`rounded-xl border-2 p-5 ${layer.color}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{layer.icon}</span>
                  <h3 className={`font-bold ${layer.titleColor}`}>
                    {layer.title}
                  </h3>
                </div>
                <ul className="space-y-1.5">
                  {layer.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-[#00a896] mt-0.5 shrink-0">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Memory flow diagram */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Memory Data Flow
            </h3>
            <MermaidRenderer
              id="memory-flow"
              chart={`flowchart LR
    UI["🖥️ UI Layer\n(Favorites · History · Prefs)"]
    STM["💭 Short-Term\nMemory"]
    LTM["🗄️ Long-Term\nMemory (Vector)"]
    CACHE["⚡ Cache\n(Redis)"]
    SHARED["🔗 Shared\nAgent Memory"]
    COLLECT["🌍 Collective\nMemory"]

    USER["👤 User"] -->|"interactions"| UI
    UI -->|"session data"| STM
    STM -->|"persist"| LTM
    STM <-->|"fast lookup"| CACHE
    LTM <-->|"retrieval (RAG)"| ORCH["🎯 Orchestrator"]
    SHARED <-->|"broadcast"| ORCH
    ORCH -->|"analytics"| COLLECT
    COLLECT -->|"insights"| ORCH
    UI -->|"prefs"| ORCH

    style USER fill:#0f4c75,color:#fff
    style ORCH fill:#0f4c75,color:#fff
    style SHARED fill:#00a896,color:#fff
    style COLLECT fill:#00a896,color:#fff`}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="brand-gradient rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">
          Want a custom AI architecture for your business?
        </h2>
        <p className="text-white/80 mb-6 max-w-xl mx-auto">
          We design and implement multi-agent systems, RAG pipelines, and GPT
          ecosystems tailored to your enterprise.
        </p>
        <a
          href="https://wa.me/59995230683?text=Hi! I'm interested in a custom AI architecture."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
        >
          💬 Discuss your architecture
        </a>
      </div>
    </div>
  );
}
