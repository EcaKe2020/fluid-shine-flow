export type ProductRow = {
  sku: string;
  name: string;
  category: string;
  unit: string;
  status: "In stock" | "Low stock" | "On order";
};

export const PRODUCT_CATEGORIES = [
  "Connectivity and passives",
  "Splitters and FAT",
  "Closures and ODF",
  "Aerial hardware",
  "Tools and test",
  "Active equipment",
  "Enclosures and ducting",
] as const;

export const PRODUCT_ROWS: ProductRow[] = [
  {
    sku: "ECA-CN-001",
    name: "Fast Connectors SC/APC",
    category: "Connectivity and passives",
    unit: "Each",
    status: "In stock",
  },
  {
    sku: "ECA-PC-002",
    name: "Patchcord LC/UPC to SC/UPC Duplex",
    category: "Connectivity and passives",
    unit: "Each",
    status: "In stock",
  },
  {
    sku: "ECA-PC-003",
    name: "Patch Cord SC/UPC to SC/APC 1M",
    category: "Connectivity and passives",
    unit: "Each",
    status: "In stock",
  },
  {
    sku: "ECA-PG-004",
    name: "Pigtail LC/UPC Yellow SM 0.9mm 1M LSZH",
    category: "Connectivity and passives",
    unit: "Each",
    status: "In stock",
  },
  {
    sku: "ECA-PG-005",
    name: "Pigtail SC/APC Yellow SM 0.9mm 1M LSZH",
    category: "Connectivity and passives",
    unit: "Each",
    status: "In stock",
  },
  {
    sku: "ECA-AD-006",
    name: "Adaptor LC/UPC Duplex Blue",
    category: "Connectivity and passives",
    unit: "Each",
    status: "In stock",
  },

  {
    sku: "ECA-SP-101",
    name: "Bare Splitter 1:2",
    category: "Splitters and FAT",
    unit: "Each",
    status: "In stock",
  },
  {
    sku: "ECA-SP-102",
    name: "Bare Splitter 1:4",
    category: "Splitters and FAT",
    unit: "Each",
    status: "In stock",
  },
  {
    sku: "ECA-SP-103",
    name: "Bare Splitter 1:8",
    category: "Splitters and FAT",
    unit: "Each",
    status: "In stock",
  },
  {
    sku: "ECA-SP-104",
    name: "Splitter 1x16 SC/APC",
    category: "Splitters and FAT",
    unit: "Each",
    status: "In stock",
  },
  {
    sku: "ECA-SP-105",
    name: "Splitter 1x16 SC/UPC",
    category: "Splitters and FAT",
    unit: "Each",
    status: "Low stock",
  },
  {
    sku: "ECA-FT-106",
    name: "FAT 1x8 Loaded",
    category: "Splitters and FAT",
    unit: "Each",
    status: "In stock",
  },
  {
    sku: "ECA-FT-107",
    name: "FAT 1x4 Grey Empty",
    category: "Splitters and FAT",
    unit: "Each",
    status: "In stock",
  },

  {
    sku: "ECA-DC-201",
    name: "Dome Closure 12C",
    category: "Closures and ODF",
    unit: "Each",
    status: "In stock",
  },
  {
    sku: "ECA-DC-202",
    name: "Dome Closure 24C",
    category: "Closures and ODF",
    unit: "Each",
    status: "In stock",
  },
  {
    sku: "ECA-DC-203",
    name: "Dome Closure 48C",
    category: "Closures and ODF",
    unit: "Each",
    status: "In stock",
  },
  {
    sku: "ECA-OD-204",
    name: "ODF 12C Loaded SC/UPC",
    category: "Closures and ODF",
    unit: "Each",
    status: "In stock",
  },
  {
    sku: "ECA-OD-205",
    name: "ODF 96 Core LC/UPC",
    category: "Closures and ODF",
    unit: "Each",
    status: "On order",
  },

  {
    sku: "ECA-AH-301",
    name: "Tension Clamps PA2000",
    category: "Aerial hardware",
    unit: "Each",
    status: "In stock",
  },
  {
    sku: "ECA-AH-302",
    name: "Buckles C01",
    category: "Aerial hardware",
    unit: "Each",
    status: "In stock",
  },
  {
    sku: "ECA-AH-303",
    name: "Stainless Steel Strap 50 Metre Roll",
    category: "Aerial hardware",
    unit: "Roll",
    status: "In stock",
  },
  {
    sku: "ECA-AH-304",
    name: "Strap 30M",
    category: "Aerial hardware",
    unit: "Roll",
    status: "In stock",
  },
  {
    sku: "ECA-AH-305",
    name: "J Clamp 10 to 15",
    category: "Aerial hardware",
    unit: "Each",
    status: "In stock",
  },
  {
    sku: "ECA-AH-306",
    name: "Down Lead Clamp",
    category: "Aerial hardware",
    unit: "Each",
    status: "In stock",
  },
  {
    sku: "ECA-AH-307",
    name: "Universal Pole Bracket",
    category: "Aerial hardware",
    unit: "Each",
    status: "In stock",
  },

  {
    sku: "ECA-TL-401",
    name: "Cable Stripper",
    category: "Tools and test",
    unit: "Each",
    status: "In stock",
  },
  {
    sku: "ECA-TL-402",
    name: "Banding Tool",
    category: "Tools and test",
    unit: "Each",
    status: "Low stock",
  },
  {
    sku: "ECA-TL-403",
    name: "Fiber Toolkit",
    category: "Tools and test",
    unit: "Kit",
    status: "In stock",
  },

  {
    sku: "ECA-AC-501",
    name: "GPON OLT 4 Port HSGQ",
    category: "Active equipment",
    unit: "Each",
    status: "In stock",
  },
  {
    sku: "ECA-AC-502",
    name: "GPON OLT 8 Port HSGQ",
    category: "Active equipment",
    unit: "Each",
    status: "On order",
  },

  {
    sku: "ECA-EN-601",
    name: "Data Cabinet 12U",
    category: "Enclosures and ducting",
    unit: "Each",
    status: "In stock",
  },
  {
    sku: "ECA-EN-602",
    name: "Buffer Tubes 20M",
    category: "Enclosures and ducting",
    unit: "Each",
    status: "In stock",
  },
  {
    sku: "ECA-EN-603",
    name: "Buffer Tubes 50M",
    category: "Enclosures and ducting",
    unit: "Each",
    status: "In stock",
  },
];