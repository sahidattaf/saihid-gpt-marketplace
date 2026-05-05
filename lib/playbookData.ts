export interface PlaybookStep {
  step: number;
  title: string;
  description: string;
  owner: string;
  tools: string[];
  gpts: string[];
  outcome: string;
  timeEstimate: string;
}

export interface Playbook {
  id: string;
  domain: string;
  emoji: string;
  title: string;
  subtitle: string;
  color: string;
  steps: PlaybookStep[];
}

export const playbooks: Playbook[] = [
  {
    id: "restaurant",
    domain: "Hospitality & Food Service",
    emoji: "🍽",
    title: "Restaurant AI Launch Playbook",
    subtitle: "Deploy AI across your entire restaurant operation in 30 days",
    color: "red",
    steps: [
      {
        step: 1,
        title: "Audit Your Current Menu & Positioning",
        description:
          "Feed your full menu, pricing, and competitor data into the Menu Engineer GPT. Extract profitability scores for each item and identify your top-margin dishes to push.",
        owner: "Owner / GM",
        tools: ["ChatGPT", "Claude", "Google Sheets"],
        gpts: ["Restaurant Menu Engineer", "Curaçao Food Business Advisor"],
        outcome: "A ranked menu matrix with 3 items to push, 2 to phase out, and new pricing recommendations.",
        timeEstimate: "1 day",
      },
      {
        step: 2,
        title: "Build Your Brand Voice & Content System",
        description:
          "Use the Food Stylist Caption GPT to create 30 days of Instagram captions and the Social Content Planner to schedule posts. Lock in your tone-of-voice guidelines.",
        owner: "Marketing Manager",
        tools: ["Instagram", "Buffer / Later", "Canva"],
        gpts: ["Food Stylist Caption Creator", "Social Media Content Planner"],
        outcome: "30-day content calendar with captions, hashtags, and posting schedule.",
        timeEstimate: "2 days",
      },
      {
        step: 3,
        title: "Launch Guest Loyalty & Upsell Flows",
        description:
          "Configure the Guest Loyalty Optimizer GPT with your reservation system data. Set up automated upsell suggestions for servers and a post-visit email sequence.",
        owner: "Operations Manager",
        tools: ["SevenRooms / OpenTable", "Mailchimp", "WhatsApp Business"],
        gpts: ["Restaurant Guest Loyalty Optimizer"],
        outcome: "Automated loyalty flow that increases repeat visits by targeting lapsed guests.",
        timeEstimate: "3 days",
      },
      {
        step: 4,
        title: "Automate Vendor & Inventory Communication",
        description:
          "Use the F&B Vendor Negotiator GPT to draft purchase orders, request quotes, and negotiate better terms. Set weekly inventory review prompts.",
        owner: "Head Chef / Purchaser",
        tools: ["Email", "WhatsApp", "Google Sheets"],
        gpts: ["F&B Vendor Negotiator"],
        outcome: "Standardized PO templates, negotiation scripts, and a vendor scorecard.",
        timeEstimate: "2 days",
      },
      {
        step: 5,
        title: "Build a Staff Training Knowledge Base",
        description:
          "Use the Hospitality Staff Trainer GPT to convert your SOPs into bite-sized training modules. Create onboarding quizzes for new hires.",
        owner: "HR / Training Lead",
        tools: ["Notion", "Google Docs", "WhatsApp"],
        gpts: ["Hospitality Staff Trainer", "Restaurant Complaint Handler"],
        outcome: "Full onboarding curriculum + complaint handling scripts for front-of-house staff.",
        timeEstimate: "3 days",
      },
      {
        step: 6,
        title: "Set Up Revenue Reporting Dashboard",
        description:
          "Connect your POS data export to the Business Intelligence GPT. Build weekly P&L summaries and identify your highest-revenue days and service periods.",
        owner: "Owner / Accountant",
        tools: ["POS System", "Google Sheets", "Notion"],
        gpts: ["Business Intelligence Analyst"],
        outcome: "Weekly automated P&L summary with revenue trends and margin alerts.",
        timeEstimate: "2 days",
      },
    ],
  },
  {
    id: "real-estate",
    domain: "Real Estate & Construction",
    emoji: "🏢",
    title: "Real Estate AI Sales Playbook",
    subtitle: "Systematize listings, leads, and closings with AI in 3 weeks",
    color: "indigo",
    steps: [
      {
        step: 1,
        title: "Generate Compelling Listing Descriptions",
        description:
          "Input property specs, photos, and neighborhood data into the Curaçao Property Listing Copywriter GPT. Generate SEO-optimized descriptions in English, Spanish, and Dutch.",
        owner: "Listing Agent",
        tools: ["ChatGPT", "Claude", "MLS Platform"],
        gpts: ["Curaçao Property Listing Copywriter"],
        outcome: "Trilingual listing copy ready to publish on Funda, MLS, and your website within hours.",
        timeEstimate: "2 hours per listing",
      },
      {
        step: 2,
        title: "Qualify & Score Incoming Leads",
        description:
          "Feed your CRM leads into the Real Estate Lead Qualifier GPT. Score by budget, timeline, motivation, and financing pre-approval status. Prioritize follow-up queues.",
        owner: "Sales Lead / Agent",
        tools: ["HubSpot / Salesforce", "WhatsApp", "Email"],
        gpts: ["Real Estate Lead Qualifier"],
        outcome: "Tiered lead list (hot/warm/cold) with next-action scripts for each segment.",
        timeEstimate: "1 day setup, ongoing",
      },
      {
        step: 3,
        title: "Build Investment Analysis Reports",
        description:
          "Use the Investment Property Analyzer GPT to model ROI, rental yield, and cash flow projections for each listing. Present to investor clients with ready-made summaries.",
        owner: "Investment Specialist",
        tools: ["Google Sheets", "PDF Export", "Notion"],
        gpts: ["Investment Property Analyzer"],
        outcome: "Professional investment memo per property with 5-year projections and risk factors.",
        timeEstimate: "2 hours per property",
      },
      {
        step: 4,
        title: "Automate Buyer & Seller Follow-Up",
        description:
          "Set up automated follow-up sequences using the Lead Qualifier GPT outputs. Create 7-touch email/WhatsApp sequences for buyers who viewed but didn't offer.",
        owner: "Sales Team",
        tools: ["WhatsApp Business", "Mailchimp", "CRM"],
        gpts: ["Real Estate Lead Qualifier"],
        outcome: "Automated nurture sequence that re-engages 20–30% of cold leads within 60 days.",
        timeEstimate: "3 days",
      },
      {
        step: 5,
        title: "Draft Offers, Contracts & Due Diligence Checklists",
        description:
          "Use the Legal Compliance GPT to draft offer letter templates, due diligence checklists, and review contract clauses for Curaçao property law compliance.",
        owner: "Agent / Legal Advisor",
        tools: ["DocuSign", "Google Docs", "Email"],
        gpts: ["Legal & Compliance Advisor"],
        outcome: "Standardized offer + contract templates reviewed for local law compliance.",
        timeEstimate: "2 days",
      },
      {
        step: 6,
        title: "Close the Loop: Post-Sale Client Reviews",
        description:
          "After closing, send a structured satisfaction survey and use the AI to draft a personalized thank-you + referral request message. Log to CRM for future nurture.",
        owner: "Agent",
        tools: ["WhatsApp", "Google Forms", "CRM"],
        gpts: ["Real Estate Lead Qualifier", "Social Media Content Planner"],
        outcome: "2–3 Google reviews per month and a 15% referral rate within 6 months.",
        timeEstimate: "1 hour per closed deal",
      },
    ],
  },
  {
    id: "marketing",
    domain: "Marketing & Business Growth",
    emoji: "📈",
    title: "AI Marketing Launch Playbook",
    subtitle: "Build a full-stack AI marketing engine from scratch in 2 weeks",
    color: "orange",
    steps: [
      {
        step: 1,
        title: "Define Your ICP & Value Proposition",
        description:
          "Use the Brand Strategist GPT to workshop your Ideal Customer Profile (ICP), craft your positioning statement, and define the primary pain you solve better than anyone.",
        owner: "Founder / CMO",
        tools: ["Claude", "Notion", "Miro"],
        gpts: ["Brand Strategist & Identity Builder"],
        outcome: "1-page ICP doc + positioning statement + differentiation matrix vs. top 3 competitors.",
        timeEstimate: "1 day",
      },
      {
        step: 2,
        title: "Build a 90-Day Content Calendar",
        description:
          "Feed your ICP and positioning into the Social Media Content Planner GPT. Generate a 90-day content calendar across LinkedIn, Instagram, and WhatsApp with themes, formats, and CTAs.",
        owner: "Content Manager",
        tools: ["Notion", "Buffer", "Canva", "Later"],
        gpts: ["Social Media Content Planner", "Brand Strategist & Identity Builder"],
        outcome: "90-day content calendar with weekly themes, post formats, and channel-specific CTAs.",
        timeEstimate: "2 days",
      },
      {
        step: 3,
        title: "Launch a Paid Ads Campaign",
        description:
          "Use the Ad Copy Generator GPT to write 5 headline + body copy variations per campaign. A/B test on Meta and Google. Use the AI to analyze results weekly.",
        owner: "Paid Media Specialist",
        tools: ["Meta Ads Manager", "Google Ads", "Claude"],
        gpts: ["Ad Copy & Campaign Generator"],
        outcome: "3 live ad campaigns with 5 copy variations each and a weekly optimization cadence.",
        timeEstimate: "3 days",
      },
      {
        step: 4,
        title: "Set Up Email Marketing Automation",
        description:
          "Build a 5-email welcome sequence using the Email Campaign Writer GPT. Segment your list by persona and set up behavioral triggers (sign-up, download, purchase).",
        owner: "Email Marketing Manager",
        tools: ["Mailchimp / Klaviyo", "Zapier", "Claude"],
        gpts: ["Email Campaign Writer"],
        outcome: "Live automated welcome sequence with 40%+ open rate target and click-through tracking.",
        timeEstimate: "2 days",
      },
      {
        step: 5,
        title: "Build Your SEO Content Engine",
        description:
          "Use the SEO Blog Content Creator GPT to produce 4 long-form blog posts per month targeting high-intent keywords. Each post is optimized for Google snippet features.",
        owner: "SEO Specialist / Writer",
        tools: ["WordPress / Webflow", "Ahrefs / Semrush", "Google Search Console"],
        gpts: ["SEO Blog Content Creator"],
        outcome: "4 published SEO articles per month with keyword cluster targeting and internal linking.",
        timeEstimate: "Ongoing — 2 days per article",
      },
      {
        step: 6,
        title: "Measure, Report & Optimize Weekly",
        description:
          "Use the Business Intelligence GPT to pull data from Meta, Google, and email platforms. Generate a weekly marketing performance report with clear next-action recommendations.",
        owner: "CMO / Marketing Lead",
        tools: ["Google Analytics 4", "Meta Business Suite", "Notion"],
        gpts: ["Business Intelligence Analyst"],
        outcome: "Weekly 1-page marketing report with top performers, laggards, and next-week focus.",
        timeEstimate: "2 hours per week",
      },
    ],
  },
  {
    id: "finance",
    domain: "Finance & Investment",
    emoji: "📊",
    title: "AI Finance & Investment Playbook",
    subtitle: "Build a disciplined AI-powered investment and reporting system",
    color: "amber",
    steps: [
      {
        step: 1,
        title: "Define Your Investment Mandate & Risk Profile",
        description:
          "Use the Portfolio Risk Analyzer GPT to define your investment mandate: asset classes, geographic focus, risk tolerance, liquidity requirements, and return targets.",
        owner: "CIO / Investor",
        tools: ["Claude", "Notion", "Google Sheets"],
        gpts: ["Portfolio Risk Analyzer", "Curaçao Investment Scout"],
        outcome: "1-page investment policy statement (IPS) with asset allocation targets and rebalancing rules.",
        timeEstimate: "1 day",
      },
      {
        step: 2,
        title: "Screen & Shortlist Opportunities",
        description:
          "Run the Curaçao Investment Scout GPT weekly to identify emerging real estate, business, and alternative investment opportunities on the island and in the region.",
        owner: "Analyst / Fund Manager",
        tools: ["Bloomberg / Refinitiv", "Google Finance", "Claude"],
        gpts: ["Curaçao Investment Scout", "Investment Property Analyzer"],
        outcome: "Weekly deal flow list of 5–10 opportunities with initial viability scores.",
        timeEstimate: "2 hours per week",
      },
      {
        step: 3,
        title: "Build Financial Models & Projections",
        description:
          "Use the Financial Model Builder GPT to construct DCF models, 3-statement financial models, and scenario analysis for each shortlisted investment.",
        owner: "Financial Analyst",
        tools: ["Google Sheets", "Excel", "Claude"],
        gpts: ["Financial Model Builder"],
        outcome: "Standardized financial model template with base / bull / bear scenarios per investment.",
        timeEstimate: "1 day per model",
      },
      {
        step: 4,
        title: "Analyze Portfolio Risk & Correlation",
        description:
          "Feed current holdings into the Portfolio Risk Analyzer GPT. Calculate concentration risk, sector correlation, currency exposure, and worst-case drawdown scenarios.",
        owner: "Risk Manager / CIO",
        tools: ["Portfolio Tracking Platform", "Google Sheets", "Claude"],
        gpts: ["Portfolio Risk Analyzer"],
        outcome: "Portfolio risk dashboard with concentration alerts, hedging recommendations, and VaR estimates.",
        timeEstimate: "1 day setup, monthly review",
      },
      {
        step: 5,
        title: "Automate Monthly Investor Reporting",
        description:
          "Use the Investor Relations Report Writer GPT to auto-generate monthly LP/investor updates from your portfolio data. Include performance, notable events, and outlook.",
        owner: "IR Manager / CFO",
        tools: ["Notion", "Google Docs", "Mailchimp"],
        gpts: ["Investor Relations Report Writer"],
        outcome: "Branded monthly investor report delivered in under 2 hours instead of 2 days.",
        timeEstimate: "2 hours per month",
      },
      {
        step: 6,
        title: "Tax Optimization & Compliance Review",
        description:
          "Use the Tax Optimization Advisor GPT to review realized gains, identify tax-loss harvesting opportunities, and ensure Curaçao regulatory compliance for international investments.",
        owner: "CFO / Tax Advisor",
        tools: ["Accounting Software", "Claude", "Google Docs"],
        gpts: ["Tax Optimization Advisor", "Legal & Compliance Advisor"],
        outcome: "Annual tax optimization memo with 3–5 actionable strategies to minimize effective tax rate.",
        timeEstimate: "2 days per quarter",
      },
    ],
  },
];

export function getPlaybook(id: string): Playbook | undefined {
  return playbooks.find((p) => p.id === id);
}
