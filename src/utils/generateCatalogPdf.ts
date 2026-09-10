import { jsPDF } from 'jspdf';
import { CATALOG_INFO, CATALOG_PAGES } from '../data/catalogData';

// Color Palette matching the monochromatic black & white website design
const COLORS = {
  navyDark: [5, 26, 36] as [number, number, number], // #051A24
  navyMuted: [13, 33, 44] as [number, number, number], // #0D212C
  amber: [255, 255, 255] as [number, number, number], // White accent
  amberLight: [241, 245, 249] as [number, number, number], // Neutral light slate pill
  emerald: [5, 26, 36] as [number, number, number], // Deep navy dark
  cream: [255, 255, 255] as [number, number, number],
  cardBg: [248, 250, 252] as [number, number, number],
  borderSlate: [226, 232, 240] as [number, number, number],
  textDark: [5, 26, 36] as [number, number, number],
  textMuted: [100, 116, 139] as [number, number, number],
  white: [255, 255, 255] as [number, number, number],
};

function addHeaderFooter(doc: jsPDF, pageNum: number, totalPages: number) {
  if (pageNum === 1) return; // Skip cover page

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  // Top header rule
  doc.setDrawColor(...COLORS.borderSlate);
  doc.setLineWidth(0.3);
  doc.line(14, 12, pageWidth - 14, 12);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(...COLORS.textMuted);
  doc.text('SUPER VANILLA  |  INDONESIAN VANILLA SUPPLIER & EXPORTER', 14, 9.5);
  doc.text('B2B SPECIFICATIONS & PRICING CATALOG', pageWidth - 14, 9.5, { align: 'right' });

  // Bottom footer rule
  doc.line(14, pageHeight - 12, pageWidth - 14, pageHeight - 12);
  doc.setFontSize(7.5);
  doc.setTextColor(...COLORS.textMuted);
  doc.text(
    `${CATALOG_INFO.legalEntity} · ${CATALOG_INFO.contact.domain} · WA: ${CATALOG_INFO.contact.whatsapp}`,
    14,
    pageHeight - 8
  );
  doc.text(`Page ${pageNum} of ${totalPages}`, pageWidth - 14, pageHeight - 8, { align: 'right' });
}

export function generateCatalogPdf(): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // ~210 mm
  const pageHeight = doc.internal.pageSize.getHeight(); // ~297 mm
  const totalPages = 8;

  // ==========================================
  // PAGE 1: COVER PAGE (LUXURY EDITORIAL)
  // ==========================================
  // Background
  doc.setFillColor(...COLORS.navyDark);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // Decorative border frame
  doc.setDrawColor(...COLORS.amber);
  doc.setLineWidth(0.6);
  doc.rect(10, 10, pageWidth - 20, pageHeight - 20);
  doc.setDrawColor(255, 255, 255);
  doc.setLineWidth(0.2);
  doc.rect(12, 12, pageWidth - 24, pageHeight - 24);

  // Logo Pill / Badge
  doc.setFillColor(...COLORS.amberLight);
  doc.roundedRect(pageWidth / 2 - 38, 30, 76, 14, 3, 3, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...COLORS.emerald);
  doc.text('SUPER VANILLA', pageWidth / 2, 39, { align: 'center' });

  // Tagline badge
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...COLORS.amber);
  doc.text('DIRECT ORIGIN INDONESIA  ·  ESTABLISHED HARVEST NETWORK', pageWidth / 2, 58, { align: 'center' });

  // Main Title
  doc.setFont('times', 'bold');
  doc.setFontSize(30);
  doc.setTextColor(255, 255, 255);
  doc.text('Mastering Vanilla', pageWidth / 2, 85, { align: 'center' });
  doc.text('Beyond the Farm', pageWidth / 2, 98, { align: 'center' });

  // Gold separator line
  doc.setDrawColor(...COLORS.amber);
  doc.setLineWidth(0.8);
  doc.line(pageWidth / 2 - 35, 110, pageWidth / 2 + 35, 110);

  // Subtitle
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(220, 225, 230);
  const subLines = doc.splitTextToSize(
    'Bridging Indonesian producers and international markets with consistency, technical curing expertise, and end-to-end transparency.',
    pageWidth - 60
  );
  doc.text(subLines, pageWidth / 2, 122, { align: 'center' });

  // Middle Highlights Box
  doc.setFillColor(...COLORS.navyMuted);
  doc.setDrawColor(...COLORS.amber);
  doc.setLineWidth(0.4);
  doc.roundedRect(26, 150, pageWidth - 52, 60, 4, 4, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(...COLORS.amber);
  doc.text('KEY SPECIFICATIONS & VALUE PROPOSITIONS', pageWidth / 2, 162, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(240, 240, 240);
  const bullets = [
    '• Botanical Varieties: Vanilla Planifolia (Bourbon) & Vanilla Tahitensis (Floral)',
    '• Quality Standard: Gourmet Grade A (28–35% Moisture) & Extract Grade B (20–25%)',
    '• Natural Vanillin: > 2.0% Natural Vanillin Content (CoA Lab Verified)',
    '• Monthly Capacity: 13 Metric Tons with 328 Local Partner Farmers',
    '• Logistics: Global Air & Sea Fulfillment (FOB & CIF) · High-barrier Vacuum Packing',
  ];
  let bulletY = 172;
  bullets.forEach((bullet) => {
    doc.text(bullet, 32, bulletY);
    bulletY += 8;
  });

  // Footer on cover
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(255, 255, 255);
  doc.text(CATALOG_INFO.legalEntity, pageWidth / 2, 235, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(180, 195, 205);
  doc.text(CATALOG_INFO.headOffice, pageWidth / 2, 242, { align: 'center' });
  doc.text(
    `Official Website: ${CATALOG_INFO.contact.website}   |   Export Desk WhatsApp: ${CATALOG_INFO.contact.whatsapp}`,
    pageWidth / 2,
    248,
    { align: 'center' }
  );

  doc.setFontSize(7.5);
  doc.setTextColor(...COLORS.amber);
  doc.text(`Official Document · ${CATALOG_INFO.edition}`, pageWidth / 2, 265, { align: 'center' });

  // ==========================================
  // PAGE 2: LOCALIZED GLOBAL FOOTPRINT & VISION
  // ==========================================
  doc.addPage();
  addHeaderFooter(doc, 2, totalPages);

  // Section Title
  doc.setFont('times', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(...COLORS.navyDark);
  doc.text('A Global Footprint Built on a Localized Foundation', 14, 25);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(...COLORS.textMuted);
  doc.text('Built from hands-on origin experience, where vanilla quality is truly defined and mastered.', 14, 32);

  // 5 Bento Stat Cards
  const stats = [
    { num: '13 Tons', label: 'Monthly Capacity', desc: 'Consistent export supply capability' },
    { num: '314', label: 'Cultivated Yards', desc: 'Directly managed farm terrain' },
    { num: '328', label: 'Partner Farmers', desc: 'Empowered smallholder network' },
    { num: '12', label: 'Export Countries', desc: 'Supplying buyers in US, EU & Asia' },
    { num: '527', label: 'Satisfied Buyers', desc: '65% Customer Satisfaction Index (CSI)' },
  ];

  // Draw 5 Bento boxes
  const cardWidth = (pageWidth - 28 - 8) / 3; // 3 columns for top row
  const cardHeight = 32;

  // Top 3 cards
  stats.slice(0, 3).forEach((item, i) => {
    const x = 14 + i * (cardWidth + 4);
    doc.setFillColor(...COLORS.cardBg);
    doc.setDrawColor(...COLORS.borderSlate);
    doc.setLineWidth(0.3);
    doc.roundedRect(x, 40, cardWidth, cardHeight, 3, 3, 'FD');

    // Accent line
    doc.setFillColor(...COLORS.emerald);
    doc.rect(x + 4, 44, 18, 1.5, 'F');

    doc.setFont('times', 'bold');
    doc.setFontSize(16);
    doc.setTextColor(...COLORS.navyDark);
    doc.text(item.num, x + 4, 55);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(...COLORS.textDark);
    doc.text(item.label, x + 4, 62);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(...COLORS.textMuted);
    doc.text(item.desc, x + 4, 67);
  });

  // Bottom 2 wide cards
  const wideWidth = (pageWidth - 28 - 4) / 2;
  stats.slice(3, 5).forEach((item, i) => {
    const x = 14 + i * (wideWidth + 4);
    doc.setFillColor(...COLORS.cardBg);
    doc.setDrawColor(...COLORS.borderSlate);
    doc.setLineWidth(0.3);
    doc.roundedRect(x, 76, wideWidth, cardHeight, 3, 3, 'FD');

    doc.setFillColor(...COLORS.amber);
    doc.rect(x + 4, 80, 18, 1.5, 'F');

    doc.setFont('times', 'bold');
    doc.setFontSize(16);
    doc.setTextColor(...COLORS.navyDark);
    doc.text(item.num, x + 4, 91);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(...COLORS.textDark);
    doc.text(item.label, x + 4, 98);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(...COLORS.textMuted);
    doc.text(item.desc, x + 4, 103);
  });

  // Philosophy Box
  doc.setFillColor(...COLORS.navyDark);
  doc.roundedRect(14, 116, pageWidth - 28, 62, 4, 4, 'F');

  doc.setFont('times', 'italic');
  doc.setFontSize(15);
  doc.setTextColor(...COLORS.amberLight);
  doc.text('“Quality is defined at the origin, but mastered through process.”', 22, 130);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(230, 235, 240);
  const philText = [
    'We work closely from botanical cultivation to solar curing, ensuring every single harvest meets world-class expectations.',
    'We are not just traders or middlemen; we are agricultural problem-solvers bridging rural Indonesian farmers and global markets with uncompromising integrity, volume stability, and end-to-end technical expertise.',
    'By establishing collection centers close to volcanic microclimates, we preserve raw vanillin precursors before enzymic oxidation sets in.',
  ];
  let philY = 140;
  philText.forEach((p) => {
    const wrapped = doc.splitTextToSize(p, pageWidth - 44);
    doc.text(wrapped, 22, philY);
    philY += 11;
  });

  // Export Readiness Principles
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...COLORS.navyDark);
  doc.text('Core Operating Pillars for Global Buyers', 14, 192);

  const pillars = [
    {
      title: 'Export-Driven Mindset',
      desc: 'Formulated specifically around international food safety codes (FDA, EU regulations, ISO phytosanitary certification, zero toxic pesticide residues).',
    },
    {
      title: 'Long-Term Contract Stability',
      desc: 'We protect commercial buyers from wild spot-market price volatility through structured quarterly and annual allocation contracts.',
    },
    {
      title: 'Volume & Specification Flexibility',
      desc: 'From custom moisture levels (20% to 35%) and split/unsplit sorting to vacuum-packed private-label consignments.',
    },
  ];

  let pillarY = 200;
  pillars.forEach((pil) => {
    doc.setFillColor(...COLORS.cream);
    doc.setDrawColor(...COLORS.borderSlate);
    doc.roundedRect(14, pillarY, pageWidth - 28, 20, 2.5, 2.5, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(...COLORS.emerald);
    doc.text(pil.title, 18, pillarY + 6.5);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.8);
    doc.setTextColor(...COLORS.textDark);
    const wrapDesc = doc.splitTextToSize(pil.desc, pageWidth - 36);
    doc.text(wrapDesc, 18, pillarY + 12);

    pillarY += 24;
  });

  // ==========================================
  // PAGE 3: THE VALUE CHAIN (7 STAGES)
  // ==========================================
  doc.addPage();
  addHeaderFooter(doc, 3, totalPages);

  doc.setFont('times', 'bold');
  doc.setFontSize(19);
  doc.setTextColor(...COLORS.navyDark);
  doc.text('The Unbroken Thread of a Transparent Value Chain', 14, 25);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...COLORS.textMuted);
  doc.text('Managing the entire lifecycle from individual hand pollination to international port arrival.', 14, 32);

  const chainSteps = [
    {
      num: '01',
      title: 'Farmer & Community',
      detail: 'Direct origin procurement directly from local farming families in Java and Indonesian volcanic agro-zones. Eliminating opportunistic speculators.',
    },
    {
      num: '02',
      title: 'Manual Cultivation',
      detail: 'Careful organic soil management, shade control using tutor trees, and strict avoidance of synthetic agricultural chemicals.',
    },
    {
      num: '03',
      title: '100% Hand Pollination',
      detail: 'Every single vanilla blossom opens for only 4–6 hours in early dawn and must be delicately hand-pollinated using bamboo needles.',
    },
    {
      num: '04',
      title: 'Peak Maturity Harvest',
      detail: 'Harvested strictly when pod tips exhibit pale yellow blossom scars (9–10 months after pollination) to ensure fully developed vanillin glucoside.',
    },
    {
      num: '05',
      title: 'Scientific Curing & Sweating',
      detail: 'Careful scalding, wrapped wooden sweat-box fermentation, and alternating gentle solar drying with conditioning rooms over 3–4 months.',
    },
    {
      num: '06',
      title: 'Grade & Moisture Sorting',
      detail: 'Hand sorting by length (14cm to 25cm), appearance, and calibrated moisture verification. Zero tolerance for split or mouldy pods in Grade A.',
    },
    {
      num: '07',
      title: 'Global Buyer Clearance',
      detail: 'Vacuum sealed in heavy-gauge food-grade barrier pouches, certified with Phytosanitary Documents, Certificate of Analysis (CoA), and HS Codes.',
    },
  ];

  let chainY = 40;
  chainSteps.forEach((step) => {
    // Step container
    doc.setFillColor(...COLORS.cardBg);
    doc.setDrawColor(...COLORS.borderSlate);
    doc.setLineWidth(0.3);
    doc.roundedRect(14, chainY, pageWidth - 28, 26, 3, 3, 'FD');

    // Number circle / badge
    doc.setFillColor(...COLORS.navyDark);
    doc.roundedRect(18, chainY + 4, 16, 18, 2, 2, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(...COLORS.amberLight);
    doc.text(step.num, 26, chainY + 15.5, { align: 'center' });

    // Step Title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(...COLORS.navyDark);
    doc.text(step.title, 38, chainY + 9);

    // Detail text
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(...COLORS.textMuted);
    const wrapD = doc.splitTextToSize(step.detail, pageWidth - 56);
    doc.text(wrapD, 38, chainY + 15);

    chainY += 30;
  });

  // Summary box
  doc.setFillColor(...COLORS.amberLight);
  doc.setDrawColor(...COLORS.amber);
  doc.setLineWidth(0.5);
  doc.roundedRect(14, chainY + 4, pageWidth - 28, 24, 3, 3, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(...COLORS.navyDark);
  doc.text('THE SUPER VANILLA TRACEABILITY GUARANTEE', 20, chainY + 12);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(...COLORS.textDark);
  doc.text(
    'Every export shipment includes batch lot identification tracing back to curing stations and agricultural clusters, assuring international food audits and corporate sustainability compliance.',
    20,
    chainY + 18,
    { maxWidth: pageWidth - 40 }
  );

  // ==========================================
  // PAGE 4: TECHNICAL PRODUCTION & QUALITY GATES
  // ==========================================
  doc.addPage();
  addHeaderFooter(doc, 4, totalPages);

  doc.setFont('times', 'bold');
  doc.setFontSize(19);
  doc.setTextColor(...COLORS.navyDark);
  doc.text('Three-Phase Technical Production & Risk Mitigation', 14, 25);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...COLORS.textMuted);
  doc.text('Scientific controls designed to eliminate mould risk, preserve aroma, and deliver uniform potency.', 14, 32);

  const phases = [
    {
      phase: 'Phase 1',
      title: 'Precision Cultivation & Controlled Agronomy',
      badge: 'The Source & The Method',
      color: COLORS.emerald,
      content: [
        '• Direct cooperation with vetted farming families in fertile volcanic microclimates.',
        '• 100% individual hand pollination during optimal morning temperature hours.',
        '• Vine health monitoring, proper pruning, and careful shading to balance nitrogen levels.',
        '• Pods harvested strictly at 9 months minimum maturity to prevent immature water-rot.',
      ],
    },
    {
      phase: 'Phase 2',
      title: 'Advanced Fermentation & Diagnostic Curing',
      badge: 'Scientific Quality Gate',
      color: COLORS.amber,
      content: [
        '• The Industry Challenge: Improper sweat-box fermentation causes rampant mould, phenolic off-notes, and batch collapse.',
        '• Technical Intervention: Temperature-calibrated hot water dipping followed immediately by insulated wooden sweat boxes.',
        '• Controlled slow solar drying on elevated mesh drying beds (1–2 hours daily sun exposure).',
        '• The Output: Deep chocolate-brown color, oily moisture barrier, and natural enzymatic synthesis yielding > 2.0% vanillin.',
      ],
    },
    {
      phase: 'Phase 3',
      title: 'Export-Grade Standardization & High-Barrier Packaging',
      badge: 'Fulfillment & Logistics',
      color: COLORS.navyDark,
      content: [
        '• Strict Specification Sorting: Zero tolerance for mold, split beans, or insect damage in Gourmet A tiers.',
        '• Calibrated Moisture Balancing: Verified with multi-point moisture probes (28–35% for Gourmet, 20–25% for Extract).',
        '• Vacuum Packaging: Export-grade heavy barrier food-grade vacuum pouches preventing volatile oil dissipation.',
        '• Official Clearances: Phytosanitary inspection, Certificate of Analysis (CoA), and clearly marked HS Codes 0905.10.00 / 0905.20.00.',
      ],
    },
  ];

  let pY = 40;
  phases.forEach((item) => {
    doc.setFillColor(...COLORS.cardBg);
    doc.setDrawColor(...COLORS.borderSlate);
    doc.setLineWidth(0.3);
    doc.roundedRect(14, pY, pageWidth - 28, 65, 3, 3, 'FD');

    // Header strip
    doc.setFillColor(...item.color);
    doc.roundedRect(14, pY, pageWidth - 28, 11, 3, 3, 'F');
    doc.rect(14, pY + 7, pageWidth - 28, 4, 'F'); // square bottom

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(255, 255, 255);
    doc.text(`${item.phase.toUpperCase()}: ${item.title.toUpperCase()}`, 18, pY + 7.5);

    let bY = pY + 18;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(...COLORS.textDark);
    item.content.forEach((line) => {
      const wrapped = doc.splitTextToSize(line, pageWidth - 36);
      doc.text(wrapped, 18, bY);
      bY += wrapped.length * 4.5 + 2;
    });

    pY += 72;
  });

  // ==========================================
  // PAGE 5: BOTANICAL PROFILES & DIAGNOSTIC MATRIX
  // ==========================================
  doc.addPage();
  addHeaderFooter(doc, 5, totalPages);

  doc.setFont('times', 'bold');
  doc.setFontSize(19);
  doc.setTextColor(...COLORS.navyDark);
  doc.text('The Indonesian Advantage: Two Botanical Profiles', 14, 25);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...COLORS.textMuted);
  doc.text('Indonesia uniquely produces world-class Planifolia and Tahitensis vanilla in substantial commercial volume.', 14, 32);

  // Two columns for Planifolia & Tahitensis
  const colW = (pageWidth - 28 - 6) / 2;

  // Planifolia Box
  doc.setFillColor(...COLORS.cardBg);
  doc.setDrawColor(...COLORS.borderSlate);
  doc.roundedRect(14, 38, colW, 44, 3, 3, 'FD');
  doc.setFillColor(...COLORS.emerald);
  doc.rect(14, 38, colW, 4, 'F');

  doc.setFont('times', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(...COLORS.navyDark);
  doc.text('Vanilla Planifolia', 18, 48);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(...COLORS.amber);
  doc.text('BOURBON TYPE · RICH & SMOKY', 18, 54);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(...COLORS.textDark);
  const planText = doc.splitTextToSize(
    'Celebrated globally for traditional deep warmth, creamy sweetness, and woody undertones. High natural vanillin content makes it the international benchmark for chocolate, dairy, and baking.',
    colW - 8
  );
  doc.text(planText, 18, 60);

  // Tahitensis Box
  doc.setFillColor(...COLORS.cardBg);
  doc.setDrawColor(...COLORS.borderSlate);
  doc.roundedRect(14 + colW + 6, 38, colW, 44, 3, 3, 'FD');
  doc.setFillColor(...COLORS.amber);
  doc.rect(14 + colW + 6, 38, colW, 4, 'F');

  doc.setFont('times', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(...COLORS.navyDark);
  doc.text('Vanilla Tahitensis', 20 + colW + 6, 48);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(...COLORS.emerald);
  doc.text('FLORAL & FRUITY · SWEETROOT PROFILE', 20 + colW + 6, 54);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(...COLORS.textDark);
  const tahText = doc.splitTextToSize(
    'Indonesian Tahitensis delivers distinctive floral bouquets, ripe stone-fruit notes, and sweetroot undertones. A rare, high-value alternative favoured by luxury pastry chefs, gelato artisans, and perfumers.',
    colW - 8
  );
  doc.text(tahText, 20 + colW + 6, 60);

  // Diagnostic Matrix Table
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...COLORS.navyDark);
  doc.text('Diagnostic Matrix: Planifolia vs. Tahitensis', 14, 92);

  const matrixData = [
    ['Parameter', 'Vanilla Planifolia', 'Vanilla Tahitensis'],
    ['Flavor & Aroma', 'Delicate, smoky, woody, creamy sweet', 'Sweetroot, fruity, floral bouquet, cherry notes'],
    ['Color & Texture', 'Black or dark brown, plump, pliable, moist', 'Rich brown to black-brown, supple and slender'],
    ['Grade A Length', '14 cm to 25 cm (Typical 16–22cm)', '14 cm to 18 cm+'],
    ['Moisture Spec', '28% – 35% (Grade A) / 20% – 25% (Grade B)', '25% – 30% (Grade A) / 20% – 25% (Grade B)'],
    ['Vanillin Profile', 'High vanillin concentration (> 2.0% CoA)', 'Balanced vanillin with anisyl alcohol & heliotropin'],
    ['Primary Uses', 'Baking, dairy, extracts, chocolate, confectionery', 'Gelato, high-end pastry, perfumery, craft spirits'],
    ['Customs Code', 'HS Code 0905.10.00 (Whole Beans)', 'HS Code 0905.10.00 (Whole Beans)'],
  ];

  let tableY = 98;
  const colWidths = [38, 72, 72];

  matrixData.forEach((row, rowIdx) => {
    const isHeader = rowIdx === 0;
    const rowH = isHeader ? 8 : 12;

    // Row background
    if (isHeader) {
      doc.setFillColor(...COLORS.navyDark);
    } else if (rowIdx % 2 === 1) {
      doc.setFillColor(...COLORS.cardBg);
    } else {
      doc.setFillColor(...COLORS.white);
    }

    doc.rect(14, tableY, pageWidth - 28, rowH, 'F');
    doc.setDrawColor(...COLORS.borderSlate);
    doc.setLineWidth(0.2);
    doc.rect(14, tableY, pageWidth - 28, rowH, 'S');

    // Text in columns
    let cellX = 14;
    row.forEach((cell, cIdx) => {
      doc.setFont('helvetica', isHeader ? 'bold' : cIdx === 0 ? 'bold' : 'normal');
      doc.setFontSize(isHeader ? 8 : 7.2);
      doc.setTextColor(isHeader ? 255 : cIdx === 0 ? COLORS.navyDark[0] : COLORS.textDark[0]);

      if (!isHeader && cIdx === 0) {
        doc.setTextColor(...COLORS.navyDark);
      }

      const text = doc.splitTextToSize(cell, colWidths[cIdx] - 4);
      doc.text(text, cellX + 3, tableY + (isHeader ? 5.5 : 4.5));
      cellX += colWidths[cIdx];
    });

    tableY += rowH;
  });

  // Quality Note
  doc.setFillColor(...COLORS.cream);
  doc.setDrawColor(...COLORS.borderSlate);
  doc.roundedRect(14, 218, pageWidth - 28, 28, 3, 3, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(...COLORS.navyDark);
  doc.text('CUSTOMS CLASSIFICATION & QUALITY COMPLIANCE', 20, 226);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(...COLORS.textMuted);
  doc.text(
    'Both botanical varieties are processed under strict hygiene protocols and cleared under international Customs HS Code 0905.10.00 for whole cured beans and HS Code 0905.20.00 for crushed/ground vanilla. Certificate of Origin (Form D / Form AK / General COO) available upon request.',
    20,
    232,
    { maxWidth: pageWidth - 40 }
  );

  // ==========================================
  // PAGE 6: SPECIFICATIONS & TIERED PRICING ARCHITECTURE
  // ==========================================
  doc.addPage();
  addHeaderFooter(doc, 6, totalPages);

  doc.setFont('times', 'bold');
  doc.setFontSize(19);
  doc.setTextColor(...COLORS.navyDark);
  doc.text('Specifications & Tiered Wholesale Pricing', 14, 25);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...COLORS.textMuted);
  doc.text('Direct wholesale price schedule (IDR / kg) with volume flexibility.', 14, 32);

  // Section 1: Grade A Gourmet Beans
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...COLORS.emerald);
  doc.text('1. Grade A Gourmet Vanilla Beans (Moisture: 28% – 35% | No Mold / No Splits)', 14, 42);

  const gradeATable = [
    ['Length Specification', 'Classification Tier', 'Price (IDR / kg)', 'Approx. USD / kg*'],
    ['Size 14 – 16 cm', 'Standard Gourmet A', 'IDR 1,350,000 / kg', '~$85 USD / kg'],
    ['Size 17 cm', 'Select Gourmet A', 'IDR 1,450,000 / kg', '~$91 USD / kg'],
    ['Size 18 cm', 'Prime Gourmet A', 'IDR 1,550,000 / kg', '~$97 USD / kg'],
    ['Size 19 cm', 'Superior Export Gourmet', 'IDR 1,650,000 / kg', '~$103 USD / kg'],
    ['Size 20 cm up', 'Jumbo Master Gourmet', 'IDR 1,750,000 / kg', '~$110 USD / kg'],
    ['Gourmet 20cm+ (25–35% Moist)', 'Ultra-Moist Reserve Pods', 'IDR 1,850,000 / kg', '~$116 USD / kg'],
  ];

  let gAY = 47;
  const gACols = [45, 55, 45, 37];

  gradeATable.forEach((row, rIdx) => {
    const isH = rIdx === 0;
    const rH = isH ? 7 : 8.5;

    doc.setFillColor(isH ? COLORS.navyDark[0] : rIdx % 2 === 1 ? COLORS.cardBg[0] : 255, isH ? COLORS.navyDark[1] : rIdx % 2 === 1 ? COLORS.cardBg[1] : 255, isH ? COLORS.navyDark[2] : rIdx % 2 === 1 ? COLORS.cardBg[2] : 255);
    doc.rect(14, gAY, pageWidth - 28, rH, 'F');
    doc.setDrawColor(...COLORS.borderSlate);
    doc.setLineWidth(0.2);
    doc.rect(14, gAY, pageWidth - 28, rH, 'S');

    let x = 14;
    row.forEach((cell, cIdx) => {
      doc.setFont('helvetica', isH || cIdx === 2 ? 'bold' : 'normal');
      doc.setFontSize(isH ? 7.8 : 7.5);
      doc.setTextColor(isH ? 255 : cIdx === 2 ? COLORS.emerald[0] : COLORS.textDark[0]);
      if (!isH && cIdx === 2) {
        doc.setTextColor(...COLORS.emerald);
      }
      doc.text(cell, x + 3, gAY + (isH ? 5 : 5.5));
      x += gACols[cIdx];
    });

    gAY += rH;
  });

  // Section 2: Grade B Extraction Beans
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...COLORS.amber);
  doc.text('2. Grade B Extraction Beans (Moisture: 20% – 25% | High Vanillin Density)', 14, gAY + 10);

  const gradeBTable = [
    ['Product Specification', 'Technical Characteristics', 'Commercial Use', 'Price (IDR / kg)'],
    ['Planifolia Grade B', '20–25% moisture, 12–22cm, rich smoky caramel', 'Industrial extract, flavor syrup, cooking', 'IDR 1,150,000 / kg'],
    ['Tahitensis Grade B', '20–25% moisture, 12–20cm, floral fruit notes', 'Beverage infusions, distillers, gelato', 'IDR 1,150,000 / kg'],
    ['Grade C Industrial', '5–15% moisture, 13cm up, dry extraction beans', 'Fine grinding, percolation, mass food', 'IDR 950,000 / kg'],
  ];

  let gBY = gAY + 15;
  const gBCols = [45, 55, 45, 37];

  gradeBTable.forEach((row, rIdx) => {
    const isH = rIdx === 0;
    const rH = isH ? 7 : 9;

    doc.setFillColor(isH ? COLORS.navyDark[0] : rIdx % 2 === 1 ? COLORS.cardBg[0] : 255, isH ? COLORS.navyDark[1] : rIdx % 2 === 1 ? COLORS.cardBg[1] : 255, isH ? COLORS.navyDark[2] : rIdx % 2 === 1 ? COLORS.cardBg[2] : 255);
    doc.rect(14, gBY, pageWidth - 28, rH, 'F');
    doc.setDrawColor(...COLORS.borderSlate);
    doc.setLineWidth(0.2);
    doc.rect(14, gBY, pageWidth - 28, rH, 'S');

    let x = 14;
    row.forEach((cell, cIdx) => {
      doc.setFont('helvetica', isH || cIdx === 3 ? 'bold' : 'normal');
      doc.setFontSize(isH ? 7.8 : 7.2);
      doc.setTextColor(isH ? 255 : cIdx === 3 ? COLORS.navyDark[0] : COLORS.textDark[0]);

      const t = doc.splitTextToSize(cell, gBCols[cIdx] - 4);
      doc.text(t, x + 3, gBY + (isH ? 5 : 4.5));
      x += gBCols[cIdx];
    });

    gBY += rH;
  });

  // Price Note Box
  doc.setFillColor(...COLORS.cream);
  doc.setDrawColor(...COLORS.borderSlate);
  doc.roundedRect(14, gBY + 8, pageWidth - 28, 26, 3, 3, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(...COLORS.navyDark);
  doc.text('COMMERCIAL PRICING & VOLUME REBATES NOTE', 20, gBY + 15);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.2);
  doc.setTextColor(...COLORS.textMuted);
  doc.text(
    '*All IDR prices are based on ex-works / FOB Indonesia port basis. USD conversions are indicative based on exchange rates and market conditions. Wholesale orders exceeding 100 kg qualify for tiered commercial discounts and tailored payment terms (LC / TT).',
    20,
    gBY + 21,
    { maxWidth: pageWidth - 40 }
  );

  // ==========================================
  // PAGE 7: DERIVATIVES ARCHITECTURE & RAW BOTANICALS
  // ==========================================
  doc.addPage();
  addHeaderFooter(doc, 7, totalPages);

  doc.setFont('times', 'bold');
  doc.setFontSize(19);
  doc.setTextColor(...COLORS.navyDark);
  doc.text('Comprehensive Derivative Architecture & Raw Botanicals', 14, 25);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...COLORS.textMuted);
  doc.text('Tailored processing formats for manufacturing facilities and agricultural operations.', 14, 32);

  // Derivatives Table
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(...COLORS.navyDark);
  doc.text('1. Value-Added Derivatives (Powders, Pastes, Extracts & Pure Caviar)', 14, 42);

  const derivData = [
    ['Category', 'Specification & Formulation Level', 'Wholesale Price (IDR / kg)'],
    ['Pure Vanilla Powder', 'Grade A Pure Ground Whole Pods (No Added Sugar / Fillers)', 'IDR 1,600,000 / kg'],
    ['Pure Vanilla Powder', 'Grade B Ground Extract Grade Vanilla Powder', 'IDR 1,400,000 / kg'],
    ['Pure Vanilla Powder', 'Grade C Ground Industrial Vanilla Powder', 'IDR 1,200,000 / kg'],
    ['Vanilla Paste (with seeds)', '1 Pod Concentration Equivalent Paste', 'IDR 1,350,000 / kg'],
    ['Vanilla Paste (with seeds)', '2 Pods Concentration Equivalent Paste', 'IDR 1,400,000 / kg'],
    ['Vanilla Paste (with seeds)', '3 Pods Triple Strength Formulation Paste', 'IDR 1,450,000 / kg'],
    ['Natural Vanilla Extract', '1 Pod Fold Concentration Natural Extract', 'IDR 1,250,000 / kg'],
    ['Natural Vanilla Extract', '2 Pods Fold Concentration Natural Extract', 'IDR 1,300,000 / kg'],
    ['Natural Vanilla Extract', '3 Pods Fold Concentration Natural Extract', 'IDR 1,350,000 / kg'],
    ['Pure Vanilla Seed Separates', 'Seed Grade A (Visual specks for ice cream / dairy)', 'IDR 2,100,000 / kg'],
    ['Pure Vanilla Seed Separates', 'Seed Grade B (Confectionery / chocolate blending)', 'IDR 1,700,000 / kg'],
    ['Pure Vanilla Caviar', '100% Wet Seed Pulp scraped directly from Grade A pods', 'IDR 5,000,000 / kg'],
  ];

  let dY = 47;
  const dCols = [48, 86, 48];

  derivData.forEach((row, rIdx) => {
    const isH = rIdx === 0;
    const isCaviar = rIdx === 12;
    const rH = isH ? 6.5 : 7.2;

    if (isH) {
      doc.setFillColor(...COLORS.navyDark);
    } else if (isCaviar) {
      doc.setFillColor(...COLORS.amberLight);
    } else if (rIdx % 2 === 1) {
      doc.setFillColor(...COLORS.cardBg);
    } else {
      doc.setFillColor(...COLORS.white);
    }

    doc.rect(14, dY, pageWidth - 28, rH, 'F');
    doc.setDrawColor(...COLORS.borderSlate);
    doc.setLineWidth(0.2);
    doc.rect(14, dY, pageWidth - 28, rH, 'S');

    let x = 14;
    row.forEach((cell, cIdx) => {
      doc.setFont('helvetica', isH || cIdx === 2 || isCaviar ? 'bold' : 'normal');
      doc.setFontSize(isH ? 7.5 : 6.8);
      doc.setTextColor(isH ? 255 : cIdx === 2 ? COLORS.navyDark[0] : COLORS.textDark[0]);
      if (isCaviar && cIdx === 2) {
        doc.setTextColor(...COLORS.emerald);
      }
      doc.text(cell, x + 3, dY + (isH ? 4.5 : 5));
      x += dCols[cIdx];
    });

    dY += rH;
  });

  // Raw Botanicals
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(...COLORS.navyDark);
  doc.text('2. Raw Botanicals & Base-Level Agricultural Supply', 14, dY + 9);

  const rawData = [
    ['Botanical Product', 'Description', 'Price Level'],
    ['Green Vanilla Pods', 'Freshly harvested green vanilla pods for custom curing stations', 'IDR 150,000 / kg'],
    ['Vanilla Nursery Plant Vines', 'High-yield healthy vegetative vine cuttings ready for planting', 'IDR 9,000 / meter'],
    ['Vanilla Local Harvest', 'Traditional regional uncured / semi-cured lots', 'IDR 800,000 / kg'],
    ['Vanilla Asalan (Field Run)', 'Mixed unsorted post-cure farm batches', 'IDR 500,000 / kg'],
    ['Vanilla Patahan (Cuts)', 'Clean broken pod segments with intact aroma for extraction', 'IDR 300,000 / kg'],
    ['Vanilla Rejects (Low Grade)', 'Sub-grade pods for non-food industrial / fragrance use', 'IDR 400,000 / kg'],
  ];

  let rY = dY + 14;
  const rCols = [50, 84, 48];

  rawData.forEach((row, rIdx) => {
    const isH = rIdx === 0;
    const rH = isH ? 6.5 : 7.2;

    doc.setFillColor(isH ? COLORS.navyDark[0] : rIdx % 2 === 1 ? COLORS.cardBg[0] : 255, isH ? COLORS.navyDark[1] : rIdx % 2 === 1 ? COLORS.cardBg[1] : 255, isH ? COLORS.navyDark[2] : rIdx % 2 === 1 ? COLORS.cardBg[2] : 255);
    doc.rect(14, rY, pageWidth - 28, rH, 'F');
    doc.setDrawColor(...COLORS.borderSlate);
    doc.setLineWidth(0.2);
    doc.rect(14, rY, pageWidth - 28, rH, 'S');

    let x = 14;
    row.forEach((cell, cIdx) => {
      doc.setFont('helvetica', isH || cIdx === 2 ? 'bold' : 'normal');
      doc.setFontSize(isH ? 7.5 : 6.8);
      doc.setTextColor(isH ? 255 : cIdx === 2 ? COLORS.navyDark[0] : COLORS.textDark[0]);
      doc.text(cell, x + 3, rY + (isH ? 4.5 : 5));
      x += rCols[cIdx];
    });

    rY += rH;
  });

  // ==========================================
  // PAGE 8: EXPORT LOGISTICS & DIRECT CONTACT
  // ==========================================
  doc.addPage();
  addHeaderFooter(doc, 8, totalPages);

  doc.setFont('times', 'bold');
  doc.setFontSize(19);
  doc.setTextColor(...COLORS.navyDark);
  doc.text('Export Logistics, Quality Compliance & Inquiries', 14, 25);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...COLORS.textMuted);
  doc.text('Direct procurement protocol from PT. Mutiara Internusa Indonesia.', 14, 32);

  // 3 Boxes for Packaging, Shipping, Documentation
  const logCards = [
    {
      title: 'Food-Grade Packaging',
      desc: 'All whole beans are bundled in traditional raffia ties (150–250g bundles) and vacuum-sealed in high-barrier multi-layer food grade pouches (1kg, 2kg, or 5kg). Outer cartons are reinforced export double-wall corrugated boxes.',
    },
    {
      title: 'Fulfillment & Freight',
      desc: 'Air Freight: Expedited delivery via DHL Express / FedEx for sample lots (10–50kg) arriving in 3–5 business days. Sea Freight: Palletized LCL / FCL refrigerated ocean container shipments (FOB Jakarta Tanjung Priok / Surabaya Tanjung Perak or CIF global destination ports).',
    },
    {
      title: 'Certified Export Documents',
      desc: 'Complete documentation package supplied with every consignment: Certificate of Analysis (CoA) with vanillin & moisture test, Phytosanitary Certificate from Indonesian Quarantine Agency, Certificate of Origin (COO), Commercial Invoice & Packing List.',
    },
  ];

  let lY = 40;
  logCards.forEach((c) => {
    doc.setFillColor(...COLORS.cardBg);
    doc.setDrawColor(...COLORS.borderSlate);
    doc.roundedRect(14, lY, pageWidth - 28, 26, 3, 3, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(...COLORS.emerald);
    doc.text(c.title, 20, lY + 7);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(...COLORS.textDark);
    const wrapT = doc.splitTextToSize(c.desc, pageWidth - 42);
    doc.text(wrapT, 20, lY + 13);

    lY += 31;
  });

  // Official Contact Card
  doc.setFillColor(...COLORS.navyDark);
  doc.roundedRect(14, lY + 6, pageWidth - 28, 100, 4, 4, 'F');

  doc.setFont('times', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(...COLORS.amberLight);
  doc.text('Super Vanilla · Export Desk', pageWidth / 2, lY + 22, { align: 'center' });

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(255, 255, 255);
  doc.text(CATALOG_INFO.legalEntity, pageWidth / 2, lY + 30, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(210, 220, 230);
  doc.text(`Headquarters: ${CATALOG_INFO.headOffice}`, pageWidth / 2, lY + 38, { align: 'center' });

  // Contact Grid in Navy Box
  doc.setFillColor(...COLORS.navyMuted);
  doc.roundedRect(26, lY + 46, pageWidth - 52, 48, 3, 3, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(...COLORS.amber);
  doc.text('DIRECT COMMUNICATION CHANNELS', pageWidth / 2, lY + 54, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(255, 255, 255);

  const contactList = [
    `• Official WhatsApp Export Desk: ${CATALOG_INFO.contact.whatsapp}`,
    `• Official Web Portal: ${CATALOG_INFO.contact.website}`,
    `• Customs HS Codes: Whole Beans (0905.10.00)  |  Ground Powder (0905.20.00)`,
    `• Minimum Sample Order: 1 kg to 5 kg trial parcels with phytosanitary clearance`,
  ];

  let cY = lY + 62;
  contactList.forEach((cl) => {
    doc.text(cl, 32, cY);
    cY += 6.5;
  });

  // Stamp footer on page 8
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    addHeaderFooter(doc, i, totalPages);
  }

  // Save the generated PDF directly to the user's computer/browser
  doc.save('Super-Vanilla-Export-Catalog.pdf');
}
