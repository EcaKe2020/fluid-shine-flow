export type Article = {
  slug: string;
  title: string;
  category: "Technical guides" | "Procurement guides";
  read: string;
  answer: string;
  intro: string;
  sections: { heading: string; paragraphs: string[]; points?: string[] }[];
};

export const ARTICLES: Article[] = [
  {
    slug: "choosing-adss-span-rating",
    title: "Choosing an ADSS span rating without guessing",
    category: "Technical guides",
    read: "4 min read",
    answer: "Measure the longest pole to pole distance on the route, then specify the next rating above it. A 100 metre span cable on a 120 metre gap is the wrong cable for that section.",
    intro: "Span rating is a mechanical limit, not a rough description. One long gap can decide the cable and fittings for an entire route.",
    sections: [
      { heading: "Walk the route first", paragraphs: ["Record every pole position and measure the longest gap. Do not calculate from an average. Corners, road crossings and missing poles are usually where the route changes."], points: ["Measure the longest clear span", "Note road and river crossings", "Record sharp direction changes", "Allow for vegetation and future growth"] },
      { heading: "Match the hardware", paragraphs: ["The clamp, preform and bracket must suit the cable diameter and load. Mixing a higher rated cable with light fittings only moves the weak point to the pole hardware.", "For uncertain routes, send the pole schedule or clear photographs to the technical desk before ordering."] },
    ],
  },
  {
    slug: "sizing-poe-budget",
    title: "Sizing a PoE budget so cameras do not brown out",
    category: "Technical guides",
    read: "3 min read",
    answer: "Add the maximum wattage of every powered device, add twenty percent headroom, then choose a switch whose total PoE budget exceeds that figure.",
    intro: "Port count tells you how many devices connect. The PoE budget tells you whether they stay powered when every camera draws at once.",
    sections: [
      { heading: "Use maximum draw", paragraphs: ["Read the maximum power figure for each camera or access point. Night illuminators, heaters and motor movement can increase consumption above the daytime figure."], points: ["Total every device at maximum draw", "Add at least twenty percent headroom", "Check the per port wattage limit", "Confirm whether devices use 802.3af, 802.3at or 802.3bt"] },
      { heading: "Plan for the cable run", paragraphs: ["Long copper runs and poor terminations add loss. Keep permanent links within 90 metres and use solid copper cable where power delivery matters."] },
    ],
  },
  {
    slug: "90-metre-cabinet-rule",
    title: "Why the 90 metre rule decides your cabinet positions",
    category: "Technical guides",
    read: "3 min read",
    answer: "Horizontal copper runs stop at 90 metres of permanent link, with 10 metres left for patch cords. Cabinet placement follows that limit.",
    intro: "A convenient cupboard is not always a valid network location. Measure the cable path, including vertical rises and bends, before fixing the cabinet.",
    sections: [
      { heading: "Measure the real route", paragraphs: ["Floor plan distance is shorter than the installed route. Add risers, tray diversions, service loops and the path into the cabinet."], points: ["Keep the permanent link at or below 90 metres", "Reserve 10 metres for patch cords", "Place intermediate cabinets where coverage fails", "Link cabinets with fibre"] },
      { heading: "Record each outlet", paragraphs: ["Label and certify every run. When a port fails later, the result sheet turns a site investigation into a direct lookup."] },
    ],
  },
  {
    slug: "calculate-recorder-storage",
    title: "Calculating recorder storage before buying disks",
    category: "Technical guides",
    read: "4 min read",
    answer: "Multiply stream bitrate by camera count, recording hours and retention days. Convert the result to terabytes and add margin for motion and system overhead.",
    intro: "Camera count alone cannot size storage. Resolution, frame rate, codec and retention policy all change the answer.",
    sections: [
      { heading: "Set the recording policy", paragraphs: ["Decide whether cameras record continuously or on motion, and how many days footage must remain available. Use the main stream bitrate, not the low resolution mobile stream."], points: ["Confirm resolution and frame rate", "Choose H.265 or H.264 assumptions", "Set recording hours per day", "Add capacity for overhead and drive replacement"] },
      { heading: "Leave operating room", paragraphs: ["Do not size the array to exactly the calculated number. Motion-heavy scenes and firmware reserves consume space, while usable disk capacity is lower than the label suggests."] },
    ],
  },
  {
    slug: "single-mode-or-multimode",
    title: "Single mode or multimode for a campus backbone",
    category: "Procurement guides",
    read: "3 min read",
    answer: "Use single mode for links leaving a building or likely to be upgraded. Keep multimode for short, fixed internal links where compatible optics already exist.",
    intro: "The cable is rarely the expensive part of a campus backbone. Civil work, access and downtime usually cost more than the fibre itself.",
    sections: [
      { heading: "Choose for the next upgrade", paragraphs: ["Single mode supports long distances and future speed changes without replacing the buried cable. Current optics have narrowed the old price gap."], points: ["Use OS2 single mode between buildings", "Match connector polish at both ends", "Document fibre count and spare cores", "Protect outdoor joints in the correct closure"] },
      { heading: "When multimode still fits", paragraphs: ["Multimode remains practical inside one building when distances are short and the installed switches already use matching transceivers."] },
    ],
  },
  {
    slug: "consumables-that-stall-installations",
    title: "Consumables that stall installations",
    category: "Procurement guides",
    read: "2 min read",
    answer: "Order sleeves, cleaning materials, labels, ties, patch cords and spare connectors with the main hardware. Each item is cheap, and each can stop a crew.",
    intro: "A bill of materials can include every major device and still leave installers waiting at the site gate.",
    sections: [
      { heading: "Build a close-out box", paragraphs: ["Pack the small items by work area rather than sending one mixed carton. Keep a controlled spare quantity for damaged connectors and late changes."], points: ["Splice protection sleeves", "Lint-free wipes and cleaning fluid", "Labels and cable ties", "Patch cords in measured lengths", "Spare adapters and fast connectors"] },
      { heading: "Count before dispatch", paragraphs: ["Have the installer confirm the consumable list before the vehicle leaves. One idle crew day costs more than the full box."] },
    ],
  },
];

export function getArticle(slug: string) {
  return ARTICLES.find((article) => article.slug === slug);
}
