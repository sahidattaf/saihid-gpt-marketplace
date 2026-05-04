export type Category =
  | "🏢 Real Estate & Construction"
  | "🍽 Hospitality & Food Service"
  | "📈 Marketing & Business Growth"
  | "🎨 Creative & Branding"
  | "📚 Education & Coaching"
  | "⚖️ Legal & Compliance"
  | "🧠 AI Tools & Development"
  | "🌿 Sustainability & Eco Solutions"
  | "📊 Finance & Investment"
  | "🎯 Sports & Recreation"
  | "🎭 Entertainment & Lifestyle";

export interface GptItem {
  name: string;
  emoji: string;
  description: string;
  category: Category;
  price: number | string;
  link: string;
  useCase: string;
  featured: "Yes" | "No" | "Coming Soon";
}

const gptDataCSV = `GPT Name,Emoji,Description,Category,Price,GPT Link,Use Case Example,Featured ⭐
Mi Kemen GPT,📊,"Ghost-COO GPT for stealth REIT ops, AI lattice logic, and investor intel",📊 Finance & Investment,199,https://chat.openai.com/g/g-example,"Unlock 25% higher IRR with AI-driven stealth investment strategies.",Yes
Piska Sahid Unified,⚖️,"Multilingual legal, coaching & RE GPT for Piska-Resort stakeholders",⚖️ Legal & Compliance,99,https://chat.openai.com/g/g-example,"Navigate real estate and legal complexities with AI precision.",Yes
Bossa AI Ops,🍽,"Bold multilingual assistant for streamlining global restaurant ops.",🍽 Hospitality & Food Service,79,https://chat.openai.com/g/g-example,"Cut operational costs by 30% with AI-driven hospitality systems.",Yes
AlphaMark GPT,📈,"Charismatic multilingual AI for real-time marketing insights and optimization.",📈 Marketing & Business Growth,79,https://chat.openai.com/g/g-example,"Boost your campaign ROI with AI-driven multilingual marketing insights.",Yes
Mind of Machines (Digital Korsou Taskforce),📚,"Helps communities explore AI and uplift culture in multiple languages through storytelling and tools",📚 Education & Coaching,49,https://chat.openai.com/g/g-example,"Empower communities through multilingual AI cultural programs.",Yes
BlueGreenArchGPT (Piska),🌿,"Designs eco-integrated infrastructure for tropical coastal zones with deep contextual analysis.",🌿 Sustainability & Eco Solutions,79,https://chat.openai.com/g/g-example,"Reduce environmental impact by 50% in your coastal developments.",Yes
TerraNova PrimeGPT (Piska),🏢,"Master Orchestrator for Curaçao Kai Kòrsou's multilingual GPT prompt ecosystem",🏢 Real Estate & Construction,199,https://chat.openai.com/g/g-example,"Manage mega-development phases with AI-driven precision.",Yes
Bossa Asado i Mar MarketingGPT,🍽,"Multilingual campaign strategist synced with BossVision™ dashboard insights.",🍽 Hospitality & Food Service,79,https://chat.openai.com/g/g-example,"Increase restaurant sales by 40% with AI-targeted campaigns.",Yes
Investment Oracle GPT (Piska),📊,"Hybrid financial modeler for green public-private zones in Kai Kòrsou",📊 Finance & Investment,99,https://chat.openai.com/g/g-example,"Identify optimal capital structures for maximum ROI.",Yes
Global Precedent GPT (Piska),📈,"Benchmark Kai Kòrsou with global strategy in Papiamentu.",📈 Marketing & Business Growth,79,https://chat.openai.com/g/g-example,"Gain competitive edge with multilingual global benchmarking.",Yes
Bossa Asado i Mar OperationsGPT,🍽,"Shift planning strategist using COT/TOT deep reasoning for seamless service.",🍽 Hospitality & Food Service,49,https://chat.openai.com/g/g-example,"Save 10 staff hours weekly with automated ops planning.",No
Bossa Asado i Mar MenuDesignGPT,🍽,"Multilingual fire-focused menu designer.",🍽 Hospitality & Food Service,49,https://chat.openai.com/g/g-example,"Increase check average by 15% with AI menu optimization.",No
Bossa Asado i Mar AnalyticsGPT,🍽,"Multilingual analytics strategist with deep insights.",🍽 Hospitality & Food Service,49,https://chat.openai.com/g/g-example,"Spot trends early and boost revenue by data-led decisions.",No
Bossa Asado i Mar ReservationGPT,🍽,"Multilingual maître d' pairing emotion and ambiance to seating.",🍽 Hospitality & Food Service,39,https://chat.openai.com/g/g-example,"Increase repeat visits by 25% with personalized seating logic.",No
Bossa Asado i Mar LoyaltyGPT,🍽,"Multilingual loyalty strategist with tiered perks.",🍽 Hospitality & Food Service,39,https://chat.openai.com/g/g-example,"Boost return customers with targeted loyalty rewards.",No
Piska Real Estate Sales Manager,🏢,"Strategic sales GPT for real estate in Curaçao.",🏢 Real Estate & Construction,79,https://chat.openai.com/g/g-example,"Increase property sales velocity by 35%.",No
Piska Architect Real Estate Curaçao,🏢,"Expert on sustainable real estate design in Curaçao.",🏢 Real Estate & Construction,79,https://chat.openai.com/g/g-example,"Reduce build cost by 20% with AI design efficiencies.",No
Piska Real Estate Finance Advisor Curaçao,📊,"Real estate finance and blockchain specialist.",📊 Finance & Investment,79,https://chat.openai.com/g/g-example,"Secure financing faster with AI-structured proposals.",No
Piska Law Manager Advisor Curaçao,⚖️,"Legal advisor for foreign investments and compliance.",⚖️ Legal & Compliance,79,https://chat.openai.com/g/g-example,"Avoid costly compliance issues with automated legal review.",No
Piska Logistics GPT,🏢,"Optimizes supply chain and logistics for construction.",🏢 Real Estate & Construction,49,https://chat.openai.com/g/g-example,"Cut delivery delays by 40% with AI logistics mapping.",No
BuildCraft GPT (Piska),🏢,"Phased construction planning with protocol reasoning.",🏢 Real Estate & Construction,49,https://chat.openai.com/g/g-example,"Stay on schedule with AI-driven build roadmaps.",No
TechInfraGPT (Piska),🏢,"Architects smart infrastructure grids for large developments.",🏢 Real Estate & Construction,99,https://chat.openai.com/g/g-example,"Future-proof projects with AI-enabled smart grid planning.",No
Eco Synergy GPT (Piska),🌿,"Evaluates marine ecological impact using multilingual logic.",🌿 Sustainability & Eco Solutions,49,https://chat.openai.com/g/g-example,"Reduce marine impact risk by 60% before construction.",No
Heritage Keeper GPT (Piska),🎨,"Cultural integration strategist for marina and island projects.",🎨 Creative & Branding,49,https://chat.openai.com/g/g-example,"Boost tourism spend by weaving cultural identity into design.",No
Experience Curator GPT (Piska),🎭,"Designs immersive resort experiences.",🎭 Entertainment & Lifestyle,49,https://chat.openai.com/g/g-example,"Increase guest satisfaction scores by 30% through tailored activities.",No
Sales and Marketing GPT (Piska),📈,"Multilingual go-to-market strategist for Kai Kòrsou campaigns.",📈 Marketing & Business Growth,49,https://chat.openai.com/g/g-example,"Launch campaigns twice as fast with AI-guided planning.",No
Piska InvestorAI – Jack Evertzberg,📊,"Multilingual AI investor scout for global capital outreach.",📊 Finance & Investment,79,https://chat.openai.com/g/g-example,"Attract foreign investment with tailored pitch intelligence.",No
Piska Ecosystem 25 Manager,🧠,"Coordinates the Piskadera ecosystem with multilingual insights.",🧠 AI Tools & Development,79,https://chat.openai.com/g/g-example,"Manage 25 AI agents with one command hub.",No
PromptCraftGPT (Piska),🎨,"Guides step-by-step image prompt creation.",🎨 Creative & Branding,39,https://chat.openai.com/g/g-example,"Save 5 hours per week on visual content creation.",No
Design Maestro GPT (Piska),🎨,"Multilingual design strategist for Kai Kòrsou.",🎨 Creative & Branding,79,https://chat.openai.com/g/g-example,"Increase engagement with culturally-aware design.",No
Smart UX GPT (Piska),🎨,"Designs culturally aware UX for tourism.",🎨 Creative & Branding,49,https://chat.openai.com/g/g-example,"Boost tourist site engagement by 40%.",No
QuantumAI Pro,🧠,"Advanced tutor for Quantum Computing and AI.",🧠 AI Tools & Development,79,https://chat.openai.com/g/g-example,"Upskill staff for next-gen tech industries.",No
Piska Sustainability,🌿,"Eco-solutions for Piskadera Resort's sustainability goals.",🌿 Sustainability & Eco Solutions,49,https://chat.openai.com/g/g-example,"Meet green certifications faster with AI planning.",No
Piska EcoTourism,🌿,"Creates eco-conscious tourism experiences.",🌿 Sustainability & Eco Solutions,39,https://chat.openai.com/g/g-example,"Increase eco-tourism revenue streams by 20%.",No
Curacao Real Estate AI,🏢,"Expert multilingual real estate agent with 30 years' experience.",🏢 Real Estate & Construction,79,https://chat.openai.com/g/g-example,"Close deals 50% faster with AI-powered lead handling.",No
Supermarket Savvy,📈,"Supermarket management assistant for Curaçao and beyond.",📈 Marketing & Business Growth,49,https://chat.openai.com/g/g-example,"Increase profit margins by 12% with AI inventory optimization.",No
ProfitPilot,📊,"Entrepreneurial AI guiding financial growth.",📊 Finance & Investment,79,https://chat.openai.com/g/g-example,"Improve net margins by identifying hidden revenue streams.",No
Biz Brainstormer,📈,"Brainstorms online business ideas in English and Papiamentu.",📈 Marketing & Business Growth,39,https://chat.openai.com/g/g-example,"Launch profitable side hustles with AI idea validation.",No
Daily & Weekly Menu Innovator,🍽,"Menu and event innovation in multiple languages.",🍽 Hospitality & Food Service,39,https://chat.openai.com/g/g-example,"Boost midweek bookings with themed menu strategies.",No
Trackside Pro,🎯,"Horse racing expert for betting strategies.",🎯 Sports & Recreation,49,https://chat.openai.com/g/g-example,"Improve betting accuracy for higher winnings.",No
Baina Sports Bar,🍽,"Your favorite bar to sip & vibe in Curaçao.",🍽 Hospitality & Food Service,39,https://chat.openai.com/g/g-example,"Boost bar traffic with AI nightlife promotions.",No
World Cuisine Master Chefs,🍽,"Immersive multilingual chef-led dining concepts.",🍽 Hospitality & Food Service,49,https://chat.openai.com/g/g-example,"Attract global foodies with unique chef events.",No
FusionGPT Prompt Transformashon,🎨,"Creative automation engine for prompt design.",🎨 Creative & Branding,49,https://chat.openai.com/g/g-example,"Automate prompt workflows for faster content output.",Coming Soon
Pinda Krioyo,🍽,"Boiled peanuts local food marketing.",🍽 Hospitality & Food Service,19,https://chat.openai.com/g/g-example,"Turn local snacks into a global e-commerce hit.",Coming Soon
Eco Synergy GPT (Advanced),🌿,"Marine eco-impact planning for coastal builds.",🌿 Sustainability & Eco Solutions,49,https://chat.openai.com/g/g-example,"Secure environmental approvals faster.",Coming Soon
QuantumAI Pro Elite,🧠,"Next-gen AI and quantum simulation tutor.",🧠 AI Tools & Development,99,https://chat.openai.com/g/g-example,"Train teams in frontier tech.",Coming Soon
Trackside Pro Elite,🎯,"High-performance horse racing strategy GPT.",🎯 Sports & Recreation,79,https://chat.openai.com/g/g-example,"Maximize ROI on high-stakes races.",Coming Soon`;

function parseCSV(csv: string): GptItem[] {
  const lines = csv.trim().split("\n");
  const items: GptItem[] = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    const values: string[] = [];
    let current = "";
    let inQuotes = false;

    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === "," && !inQuotes) {
        values.push(current.trim());
        current = "";
      } else {
        current += char;
      }
    }
    values.push(current.trim());

    if (values.length >= 8) {
      const price = values[4] === "Coming Soon" ? "Coming Soon" : parseFloat(values[4]);
      items.push({
        name: values[0].replace(/"/g, ""),
        emoji: values[1].replace(/"/g, ""),
        description: values[2].replace(/"/g, ""),
        category: values[3].replace(/"/g, "") as Category,
        price,
        link: values[5].replace(/"/g, ""),
        useCase: values[6].replace(/"/g, ""),
        featured: values[7].replace(/"/g, "") as "Yes" | "No" | "Coming Soon",
      });
    }
  }

  return items;
}

let gptCache: GptItem[] | null = null;

export function getGpts(): GptItem[] {
  if (!gptCache) {
    gptCache = parseCSV(gptDataCSV);
  }
  return gptCache;
}

export function getCategories(): Category[] {
  const gpts = getGpts();
  const categories = new Set<Category>();
  gpts.forEach((gpt) => categories.add(gpt.category));
  return Array.from(categories).sort();
}

export function filterGpts(options: {
  category?: Category;
  search?: string;
  featured?: "Yes" | "No" | "Coming Soon";
  priceMin?: number;
  priceMax?: number;
}): GptItem[] {
  let filtered = getGpts();

  if (options.category) {
    filtered = filtered.filter((gpt) => gpt.category === options.category);
  }

  if (options.search) {
    const query = options.search.toLowerCase();
    filtered = filtered.filter(
      (gpt) =>
        gpt.name.toLowerCase().includes(query) ||
        gpt.description.toLowerCase().includes(query)
    );
  }

  if (options.featured) {
    filtered = filtered.filter((gpt) => gpt.featured === options.featured);
  }

  if (options.priceMin !== undefined) {
    filtered = filtered.filter(
      (gpt) => typeof gpt.price === "number" && gpt.price >= options.priceMin!
    );
  }

  if (options.priceMax !== undefined) {
    filtered = filtered.filter(
      (gpt) => typeof gpt.price === "number" && gpt.price <= options.priceMax!
    );
  }

  return filtered;
}
