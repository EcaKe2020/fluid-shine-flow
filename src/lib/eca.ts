export const SHOP_URL = "https://ecanetworks.com";
export const WHATSAPP_URL = "https://wa.me/254702309309";
export const WHATSAPP_URL_ELDORET = "https://wa.me/254720309309";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Gaberone+Plaza+Moi+Avenue+Nairobi";

/** Shop link tagged with the section it was clicked from. */
export const shopUrl = (medium: string) =>
  `${SHOP_URL}?utm_source=corporate-site&utm_medium=${encodeURIComponent(medium)}`;

export const COMPANY = {
  name: "ECA Networks Ltd",
  short: "ECA Networks",
  founded: 2020,
  phone: "+254 702 309 309",
  phoneHref: "tel:+254702309309",
  email: "info@ecanetworks.com",
  address: "Gaberone Plaza, 1st Floor, Shop F14, Nairobi",
  hours: "Monday to Friday, 8:00 AM to 5:00 PM",
  tagline:
    "Fibre and network infrastructure, stocked in Nairobi and Eldoret, shipped across Kenya.",
  responseLine: "Technical desk responds within two business hours.",
} as const;

export const LOCATIONS = [
  {
    city: "Nairobi",
    label: "Head office and main counter",
    address: "Gaberone Plaza, 1st Floor, Shop F14",
    phone: "+254 702 309 309",
    phoneHref: "tel:+254702309309",
    whatsapp: "https://wa.me/254702309309",
    hours: "Monday to Friday, 8:00 AM to 5:00 PM. Saturday, 9:00 AM to 1:00 PM",
    maps: "https://www.google.com/maps/search/?api=1&query=Gaberone+Plaza+Moi+Avenue+Nairobi",
  },
  {
    city: "Eldoret",
    label: "Rift Valley branch",
    address: "Veecam House, Ground Floor, Shop 5",
    phone: "+254 720 309 309",
    phoneHref: "tel:+254720309309",
    whatsapp: "https://wa.me/254720309309",
    hours: "Monday to Friday, 8:00 AM to 5:00 PM",
    maps: "https://www.google.com/maps/search/?api=1&query=Veecam+House+Eldoret",
  },
] as const;

export const BRANDS = [
  "MikroTik",
  "HSGQ",
  "Hikvision",
  "Dahua",
  "Ubiquiti",
  "Starlink",
  "TP-Link",
  "Yealink",
] as const;

export const STATS = [
  { value: "10,000+", label: "customers served" },
  { value: "5,000+", label: "products stocked" },
  { value: "50+", label: "supported brands" },
  { value: "47", label: "counties reached" },
] as const;

export const SOLUTIONS = [
  {
    slug: "fibre-optic",
    title: "Fibre Optic Solutions",
    blurb:
      "ADSS spans, indoor and outdoor cable, splice enclosures, patch panels, pigtails and the fusion and OTDR kit that proves the link.",
    points: ["ADSS and figure 8 cable", "Splicing and termination", "OTDR and power meter testing"],
  },
  {
    slug: "structured-cabling",
    title: "Structured Cabling",
    blurb:
      "Copper backbones, CAT6 and CAT6A runs, patching, cabinets and labelling built to a certification report rather than a guess.",
    points: ["CAT6 and CAT6A channels", "Racks, trays and containment", "Certified link testing"],
  },
  {
    slug: "networking-wireless",
    title: "Networking, Wireless and ISP",
    blurb:
      "MikroTik routing, PoE switching, point to point radios and Starlink hardware for operators who bill by the uptime hour.",
    points: ["MikroTik and PoE switching", "PtP and PtMP wireless", "Starlink and ISP kit"],
  },
  {
    slug: "security",
    title: "CCTV, Security and PABX",
    blurb:
      "IP surveillance, recording and storage sizing, access control and IP telephony that lands on the same cabling you already own.",
    points: ["IP cameras and NVR sizing", "Access control", "IP PABX and handsets"],
  },
] as const;

export const INDUSTRIES = [
  {
    title: "Internet service providers",
    body: "Reel counts, drop cable, splice consumables and radios held locally so a rollout never waits on a customs queue.",
  },
  {
    title: "Contractors and installers",
    body: "Same day pick up in Nairobi, bulk pricing tiers and a technical desk that checks the BOM before it ships.",
  },
  {
    title: "Corporates and integrators",
    body: "Structured cabling, switching and surveillance packaged with warranty paperwork procurement can file.",
  },
  {
    title: "Schools and institutions",
    body: "Campus backbones, lab switching and CCTV specified against budget cycles and tender documentation.",
  },
  {
    title: "Government and county projects",
    body: "Tender ready quotations, delivery notes and compliance documents for public sector procurement.",
  },
  {
    title: "Data centres and developers",
    body: "Rack build outs, patching discipline, riser fibre and containment for new property developments.",
  },
] as const;

export const FAQS = [
  {
    q: "What is ADSS fibre cable?",
    a: "ADSS stands for all dielectric self supporting cable. It carries its own weight between poles with no metal strength member, so it can be strung on power line routes without an earthing path or a separate messenger wire.",
    long: "Because the sheath and central strength element are entirely dielectric, ADSS is the usual choice for aerial spans that share poles with distribution lines. Span length, sag and tension are set by the cable grade, so confirm the rated span before ordering.",
  },
  {
    q: "What is an OTDR used for?",
    a: "An OTDR sends light pulses down a fibre and measures the reflections that come back. It reports splice loss, connector loss, bend events and the distance to a break, which is how an installer proves a link or finds a fault.",
    long: "Insertion loss testing with a light source and power meter proves the end to end budget. An OTDR trace adds the location of every event, which matters when a span runs for kilometres and a fault has to be dug up once.",
  },
  {
    q: "Which cable should I use for an aerial run between buildings?",
    a: "Use ADSS or figure 8 outdoor cable rated for the span, never indoor tight buffered cable. Indoor cable lacks the UV protection, water blocking and tensile rating that an aerial route demands.",
    long: "For very short runs between adjacent structures a figure 8 drop cable with a steel messenger is often the practical answer. For longer poled routes, or where the poles carry power, ADSS is the correct family.",
  },
  {
    q: "Do you deliver outside Nairobi?",
    a: "Yes. Orders ship nationwide across the 47 counties using courier partners, with Nairobi collection available from the counter during working hours.",
    long: "Delivery timelines depend on the courier route and the size of the consignment. Reel sized fibre and cabinets are quoted with freight included so a project budget holds.",
  },
  {
    q: "Can I buy online instead of requesting a quote?",
    a: "Yes. Stocked items with published pricing are available on the ECA Networks online store, while project volumes, mixed BOMs and tender pricing go through the quotation desk.",
    long: "The rule of thumb is simple. If you know the part numbers and quantities, order online. If the specification still has open questions, send the drawing or site notes and the technical team will build the list.",
  },
  {
    q: "What is PoE and how much power do I need?",
    a: "Power over Ethernet delivers device power over the same copper as data. 802.3af gives about 15W per port, 802.3at about 30W and 802.3bt up to 90W, so the switch budget must cover every powered device at once.",
    long: "Size the total switch power budget, not just the per port class. Cameras with heaters, pan tilt zoom domes and outdoor radios draw far more than a desk phone, and long runs lose a little on the way.",
  },
  {
    q: "Do the products carry a warranty in Kenya?",
    a: "Stocked brands are supplied with local warranty support handled in Nairobi, so a faulty unit is assessed here rather than shipped abroad by the buyer.",
    long: "Warranty terms vary by manufacturer and product family. The exact period and the replacement route are stated on the quotation and the invoice for each line item.",
  },
  {
    q: "How do I get the current price list?",
    a: "The price list lives on a permanent link at the price list page, so printed QR codes and shared documents keep working every time a new revision is published.",
    long: "Because the address never changes, a code printed on a counter card or a quotation stays valid. Ask the sales desk for the account specific list if you buy at trade volume.",
  },
] as const;
