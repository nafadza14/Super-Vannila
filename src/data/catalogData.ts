export interface CatalogSection {
  id: string;
  title: string;
  subtitle?: string;
  tag?: string;
  content: string[];
  metrics?: { label: string; value: string; desc?: string }[];
  table?: {
    headers: string[];
    rows: string[][];
  };
  highlights?: { title: string; desc: string }[];
}

export const CATALOG_INFO = {
  title: "Mastering Vanilla Beyond the Farm",
  subtitle: "Bridging Indonesian producers and international markets with consistency, expertise, and trust.",
  company: "Super Vanilla",
  legalEntity: "PT. MUTIARA INTERNUSA INDONESIA",
  headOffice: "Mutiara HQ, Kecila 002/001, Kemranjen, Banyumas, Central Java 53194 · Indonesia",
  contact: {
    whatsapp: "+62 858-0008-5297",
    website: "https://supervanilla.biz.id",
    domain: "Supervanilla.biz.id",
    origin: "Indonesia (Central Java / Yogyakarta / Volcanic Belts)",
  },
  edition: "2026 Export & Wholesale Catalog",
  hsCodes: {
    wholeBeans: "HS Code 09051000 (Whole Vanilla Beans)",
    powder: "HS Code 09052000 (Crushed or Ground Vanilla)",
  },
};

export const CATALOG_PAGES: CatalogSection[] = [
  {
    id: "overview",
    title: "Mastering Vanilla Beyond the Farm",
    subtitle: "Direct Origin Indonesian Vanilla Exporter",
    tag: "Company Vision",
    content: [
      "Super Vanilla bridges Indonesian vanilla smallholders and the global market through scientific curing, strict moisture control, and full supply chain traceability.",
      "Built from hands-on experience at the origin, where vanilla quality is truly defined. We work closely from cultivation to curing, ensuring every step meets rigorous international expectations.",
      "We are not just commodity brokers; we are technical problem-solvers ensuring food manufacturers, bakeries, extractors, and wholesale importers receive reliable, laboratory-verified vanilla year-round.",
    ],
    metrics: [
      { label: "Monthly Capacity", value: "13 Tons", desc: "Stable export volume per month" },
      { label: "Cultivated Yards", value: "314 Yards", desc: "Carefully monitored agro-plots" },
      { label: "Partner Farmers", value: "328 Farmers", desc: "Fair trade empowered growers" },
      { label: "Export Markets", value: "12 Countries", desc: "Worldwide FOB & CIF delivery" },
      { label: "Satisfied Buyers", value: "527 Clients", desc: "65% Customer Satisfaction Index" },
    ],
  },
  {
    id: "value-chain",
    title: "The Unbroken Thread of a Transparent Value Chain",
    subtitle: "From Hand Pollination to Global Port Clearance",
    tag: "Traceability",
    content: [
      "We manage the entire lifecycle from individual manual pollination to post-cure recovery, ensuring complete traceability at every stage.",
    ],
    highlights: [
      { title: "1. Farmer", desc: "Sourced directly from generational agricultural communities across volcanic terrain." },
      { title: "2. Cultivation", desc: "Manual organic vine management, shading control, and continuous botanical health monitoring." },
      { title: "3. Pollination", desc: "100% delicate manual hand-pollination during single-day morning flowering windows." },
      { title: "4. Harvest", desc: "Pods hand-picked strictly at peak physiological maturity with pale yellow tips." },
      { title: "5. Curing", desc: "Scientific sweating and slow solar conditioning with regulated night sweating boxes." },
      { title: "6. Grading", desc: "Strict sorting by millimeter length, moisture percentage, and aromatic density." },
      { title: "7. Global Buyer", desc: "Vacuum-sealed food-grade packaging with complete Certificate of Analysis & Phytosanitary documentation." },
    ],
  },
  {
    id: "technical-phases",
    title: "Three-Phase Technical Production & Risk Mitigation",
    subtitle: "Engineering Consistency Into Every Batch",
    tag: "Quality Control",
    content: [
      "Traditional vanilla production often suffers from unstable curing and moisture decay. Super Vanilla enforces a rigorous 3-phase technical protocol to eliminate mould risk and guarantee vanillin potency.",
    ],
    highlights: [
      {
        title: "Phase 1: Precision Cultivation & Hand Pollination",
        desc: "Direct farm cooperation in Java & volcanic islands. Every orchid is hand-pollinated and monitored for optimal pod clustering and botanical health.",
      },
      {
        title: "Phase 2: Advanced Fermentation & Scientific Curing",
        desc: "The Industry Challenge: Improper fermentation leads to mold, aroma decay, and batch collapse. Super Vanilla Intervention: Diagnostic sorting, controlled climate sweat boxes, and slow solar conditioning ensuring deep enzymatic vanillin synthesis.",
      },
      {
        title: "Phase 3: Export-Grade Standardization & Secure Packaging",
        desc: "Zero tolerance for mold or split beans in Gourmet tiers. High-barrier food-grade vacuum sealing prevents aroma evaporation during sea and air transit. Clear HS Code documentation ensures zero customs delays.",
      },
    ],
  },
  {
    id: "botanical-profiles",
    title: "The Indonesian Advantage: Two Botanical Profiles",
    subtitle: "Planifolia (Bourbon Type) vs. Tahitensis (Floral Fruity)",
    tag: "Botanical Matrix",
    content: [
      "Indonesia is one of the very few origins in the world capable of delivering world-class harvests of both Vanilla Planifolia and Vanilla Tahitensis in substantial commercial volumes.",
    ],
    table: {
      headers: ["Specification", "Vanilla Planifolia", "Vanilla Tahitensis"],
      rows: [
        ["Aroma & Flavor", "Deep, warm, smoky, creamy, woody, sweet Bourbon profile", "Delicate sweetroot, vibrant fruity notes, cherry & floral undertones"],
        ["Visual & Color", "Deep dark brown to oily black, plump, flexible & moist", "Rich brown to black-brown, slender and supple"],
        ["Grade A Length", "14cm to 25cm (Average 16–22cm)", "14cm to 18cm+"],
        ["Moisture Content", "28% – 35% (Gourmet A), 20% – 25% (Grade B)", "25% – 30% (Gourmet A), 20% – 25% (Grade B)"],
        ["Vanillin Level", "High natural vanillin (> 2.0% CoA tested)", "Balanced vanillin with distinctive anisic & heliotropin aromatics"],
        ["Key Applications", "Chocolate, dairy, ice cream, extract manufacturing, pastry", "High-end pastry, perfumes, gelato, craft beverages, infused spirits"],
        ["Customs HS Code", "HS 0905.10.00 (Whole Beans)", "HS 0905.10.00 (Whole Beans)"],
      ],
    },
  },
  {
    id: "grade-a-pricing",
    title: "Grade A Gourmet Vanilla Beans",
    subtitle: "Prime Whole Pods with Plump Caviar Flesh (No Mold / No Splits)",
    tag: "Wholesale Tiered Pricing",
    content: [
      "Selected for five-star gastronomy, artisanal bakers, and premium retail packaging. Supple, oily sheens with maximum seed caviar yield.",
      "Technical Specs: Moisture 28–35% (Planifolia) / 25–30% (Tahitensis). Vanillin > 2.0%. Zero split pods.",
    ],
    table: {
      headers: ["Pod Length Specification", "Classification", "Tiered Price (IDR / kg)", "Indicative USD / kg*"],
      rows: [
        ["14 – 16 cm", "Standard Gourmet A", "IDR 1,350,000 / kg", "~ $85 USD / kg"],
        ["17 cm", "Select Gourmet A", "IDR 1,450,000 / kg", "~ $91 USD / kg"],
        ["18 cm", "Prime Gourmet A", "IDR 1,550,000 / kg", "~ $97 USD / kg"],
        ["19 cm", "Export Superior Gourmet", "IDR 1,650,000 / kg", "~ $103 USD / kg"],
        ["20 cm up", "Jumbo Master Gourmet", "IDR 1,750,000 / kg", "~ $110 USD / kg"],
        ["Gourmet 20cm+ (25-35% Moisture)", "Ultra-Moist Reserve Pods", "IDR 1,850,000 / kg", "~ $116 USD / kg"],
      ],
    },
  },
  {
    id: "grade-b-pricing",
    title: "Grade B Extraction & Processing Beans",
    subtitle: "High Vanillin Density for Industrial Extractors, Distillers & Breweries",
    tag: "Industrial Extraction",
    content: [
      "Grade B extraction beans feature reduced moisture content (20–25%), which concentrates the aromatic compounds and ensures rapid, high-yield ethanol percolation without diluting water ratios.",
      "Ideal for commercial food production, ice cream compounds, pastry pastes, and craft alcohol distilleries.",
    ],
    table: {
      headers: ["Product Type", "Moisture & Length Specs", "Profile & Target Use", "Price (IDR / kg)"],
      rows: [
        ["Planifolia Grade B", "20% – 25% moisture | 12 – 22 cm", "Concentrated woody vanilla, deep brown", "IDR 1,150,000 / kg"],
        ["Tahitensis Grade B", "20% – 25% moisture | 12 – 20 cm", "Fruity floral bouquet for craft extracts", "IDR 1,150,000 / kg"],
        ["Grade C Industrial", "5% – 15% moisture | 13 cm up", "Low-moisture pods for grinding & mass extract", "IDR 950,000 / kg"],
      ],
    },
  },
  {
    id: "derivatives-architecture",
    title: "Comprehensive Derivative Architecture",
    subtitle: "Pure Powders, Pastes, Concentrated Extracts & Pure Caviar",
    tag: "Value-Added Derivatives",
    content: [
      "For food manufacturing plants and culinary artisans seeking instant dispersion and high-convenience formats without manual pod splitting.",
    ],
    table: {
      headers: ["Derivative Category", "Specification Level", "Unit Pricing (IDR / kg)"],
      rows: [
        ["Pure Vanilla Powder", "Grade A Pure Ground Pods (No Fillers)", "IDR 1,600,000 / kg"],
        ["Pure Vanilla Powder", "Grade B Ground Extract Grade", "IDR 1,400,000 / kg"],
        ["Pure Vanilla Powder", "Grade C Industrial Powder", "IDR 1,200,000 / kg"],
        ["Vanilla Paste (with seeds)", "1 Pod Concentration Equivalent", "IDR 1,350,000 / kg"],
        ["Vanilla Paste (with seeds)", "2 Pods Concentration Equivalent", "IDR 1,400,000 / kg"],
        ["Vanilla Paste (with seeds)", "3 Pods Triple Strength Formulation", "IDR 1,450,000 / kg"],
        ["Natural Vanilla Extract", "1 Pod Fold Concentration", "IDR 1,250,000 / kg"],
        ["Natural Vanilla Extract", "2 Pods Fold Concentration", "IDR 1,300,000 / kg"],
        ["Natural Vanilla Extract", "3 Pods Fold Concentration", "IDR 1,350,000 / kg"],
        ["Pure Vanilla Seeds Separates", "Seed Grade A (Visual specks for dairy)", "IDR 2,100,000 / kg"],
        ["Pure Vanilla Seeds Separates", "Seed Grade B (Confectionery blend)", "IDR 1,700,000 / kg"],
        ["Pure Vanilla Caviar", "100% Wet Seed Pulp scraped from Grade A pods", "IDR 5,000,000 / kg"],
      ],
    },
  },
  {
    id: "raw-botanicals",
    title: "Raw Botanicals & Base-Level Agricultural Supply",
    subtitle: "Fresh Green Beans, Nursery Vines & Unsorted Local Harvests",
    tag: "Direct Farm Supply",
    content: [
      "For regional processors, plantation developers, and research facilities requiring raw agricultural materials.",
    ],
    table: {
      headers: ["Botanical Category", "Description", "Base Price"],
      rows: [
        ["Green Vanilla Pods", "Freshly harvested green vanilla pods for custom curing", "IDR 150,000 / kg"],
        ["Vanilla Nursery Plant Vines", "High-yield healthy vegetative vine cuttings ready for planting", "IDR 9,000 / meter"],
        ["Vanilla Local Harvest", "Traditional regional uncured / semi-cured lots", "IDR 800,000 / kg"],
        ["Vanilla Asalan (Field Run)", "Mixed unsorted post-cure farm batches", "IDR 500,000 / kg"],
        ["Vanilla Patahan (Cuts / Broken)", "Clean broken pod segments with intact aroma", "IDR 300,000 / kg"],
        ["Vanilla Rejects / Low Grade", "Sub-grade pods for non-food / cosmetic distillation", "IDR 400,000 / kg"],
      ],
    },
  },
  {
    id: "export-partnership",
    title: "Export-Ready Partnerships & Ordering Protocol",
    subtitle: "Built for Seamless Logistics, Port Clearances & Volume Scale",
    tag: "Global Trade",
    content: [
      "We operate with an export-focused philosophy, strictly aligning with international buyer specifications, international health safety standards, and strict import documentation.",
    ],
    highlights: [
      {
        title: "Export Mindset & Documentation",
        desc: "Every shipment includes official Certificate of Analysis (CoA), Government Phytosanitary Inspection Certificate, Certificate of Origin (COO), and compliant Commercial Invoices with clearly marked HS Codes (0905.10.00 / 0905.20.00).",
      },
      {
        title: "Long-Term Supply Chain Collaboration",
        desc: "We prioritize establishing recurring, multi-month contract allocations to hedge price volatility for food manufacturers and ensure guaranteed inventory even during lean harvest seasons.",
      },
      {
        title: "Flexible Volume Architecture",
        desc: "From 10kg trial sample shipments via expedited DHL Express to multi-metric ton container consignments via air and sea freight (FOB Jakarta / Surabaya or CIF destination port).",
      },
    ],
  },
];
