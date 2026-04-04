export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  category: "comparisons" | "guides" | "maintenance" | "seasonal";
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "heat-pump-vs-furnace-north-alabama",
    title: "Heat Pump vs Furnace: Which Is Better for North Alabama?",
    description:
      "Compare heat pumps and furnaces for North Alabama's climate. Learn which heating system offers better efficiency, comfort, and long-term savings for Huntsville-area homeowners.",
    publishedAt: "2026-01-08",
    category: "comparisons",
    readTime: "8 min read",
  },
  {
    slug: "repair-vs-replace-hvac",
    title: "Repair vs Replace: When Is It Time for a New HVAC System?",
    description:
      "Not sure whether to repair or replace your aging HVAC system? Use our decision framework to find the most cost-effective choice for your North Alabama home.",
    publishedAt: "2026-01-15",
    category: "comparisons",
    readTime: "7 min read",
  },
  {
    slug: "central-ac-vs-mini-split",
    title: "Central AC vs Mini-Split: Which Is Right for Your Home?",
    description:
      "Weigh the pros and cons of central air conditioning versus ductless mini-splits. Find out which cooling system fits your North Alabama home's layout and budget.",
    publishedAt: "2026-01-22",
    category: "comparisons",
    readTime: "7 min read",
  },
  {
    slug: "gas-furnace-vs-electric-heat-pump-alabama",
    title: "Gas Furnace vs Electric Heat Pump: Cost Comparison for Alabama",
    description:
      "Break down the real costs of gas furnaces versus electric heat pumps in Alabama, including installation, monthly bills, and long-term value for Huntsville-area homes.",
    publishedAt: "2026-01-29",
    category: "comparisons",
    readTime: "8 min read",
  },
  {
    slug: "hvac-repair-cost-huntsville",
    title: "How Much Does HVAC Repair Cost in Huntsville, AL? (2026 Price Guide)",
    description:
      "Get honest 2026 pricing for common HVAC repairs in Huntsville, AL. From capacitor replacements to refrigerant recharges, know what to expect before you call.",
    publishedAt: "2026-02-05",
    category: "guides",
    readTime: "9 min read",
  },
  {
    slug: "best-hvac-system-alabama-humidity",
    title: "Best HVAC System for Alabama Humidity: Complete Buyer's Guide",
    description:
      "Alabama's humidity demands more from your HVAC system. Discover which units handle moisture best and keep your North Alabama home comfortable year-round.",
    publishedAt: "2026-02-12",
    category: "guides",
    readTime: "10 min read",
  },
  {
    slug: "lower-electric-bill-huntsville-alabama",
    title: "How to Lower Your Electric Bill in Huntsville, Alabama",
    description:
      "Practical tips to cut your Huntsville Utilities electric bill without sacrificing comfort. Covers thermostat settings, insulation, and HVAC efficiency upgrades.",
    publishedAt: "2026-02-19",
    category: "guides",
    readTime: "7 min read",
  },
  {
    slug: "hvac-maintenance-checklist-north-alabama",
    title: "HVAC Maintenance Checklist for North Alabama Homeowners",
    description:
      "Follow this seasonal HVAC maintenance checklist to keep your system running efficiently and avoid costly breakdowns in North Alabama's extreme temperatures.",
    publishedAt: "2026-02-26",
    category: "maintenance",
    readTime: "6 min read",
  },
  {
    slug: "emergency-hvac-when-to-call",
    title: "When to Call for Emergency HVAC Service (and When You Can Wait)",
    description:
      "Know the difference between a true HVAC emergency and a routine repair. This guide helps North Alabama homeowners decide when to call for immediate service.",
    publishedAt: "2026-03-05",
    category: "guides",
    readTime: "6 min read",
  },
  {
    slug: "seer2-ratings-explained",
    title: "Understanding SEER2 Ratings: What Huntsville Homeowners Need to Know",
    description:
      "SEER2 replaced the old SEER rating in 2023. Learn what the new efficiency standard means for your next AC purchase and how it affects costs in Huntsville, AL.",
    publishedAt: "2026-03-10",
    category: "guides",
    readTime: "8 min read",
  },
  {
    slug: "hvac-installation-timeline",
    title: "How Long Does HVAC Installation Take? Timeline for North Alabama",
    description:
      "Planning an HVAC installation? Learn typical timelines for North Alabama, from the initial quote to final inspection, so you can schedule around your life.",
    publishedAt: "2026-03-17",
    category: "guides",
    readTime: "6 min read",
  },
  {
    slug: "hvac-permit-requirements-huntsville-madison",
    title: "Do I Need a Permit for HVAC Work in Huntsville or Madison?",
    description:
      "Find out when HVAC permits are required in Huntsville and Madison, AL. Learn about local codes, inspection requirements, and why licensed contractors handle this for you.",
    publishedAt: "2026-03-20",
    category: "guides",
    readTime: "5 min read",
  },
  {
    slug: "r22-freon-phase-out-north-alabama",
    title: "R-22 Freon Phase-Out: What North Alabama Homeowners Should Know",
    description:
      "R-22 refrigerant is no longer manufactured, and prices keep climbing. Learn your options if your North Alabama AC still uses R-22 Freon.",
    publishedAt: "2026-03-25",
    category: "guides",
    readTime: "7 min read",
  },
  {
    slug: "signs-ductwork-needs-repair",
    title: "Top 5 Signs Your Ductwork Needs Repair or Replacement",
    description:
      "Leaky or damaged ductwork can waste up to 30% of your conditioned air. Spot these five warning signs before they drive up your North Alabama energy bills.",
    publishedAt: "2026-03-31",
    category: "maintenance",
    readTime: "6 min read",
  },
  {
    slug: "prepare-hvac-alabama-summer",
    title: "Preparing Your HVAC System for Alabama Summer: A Complete Guide",
    description:
      "Get your AC ready before Alabama's brutal summer heat arrives. This step-by-step guide helps North Alabama homeowners avoid mid-summer breakdowns and high bills.",
    publishedAt: "2026-04-04",
    category: "seasonal",
    readTime: "8 min read",
  },
];
