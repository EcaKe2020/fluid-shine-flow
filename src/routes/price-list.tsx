import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Section, Eyebrow, Heading, Lead, CtaBand, Reveal } from "@/components/site/primitives";
import { FaqList } from "@/components/site/Faq";
import { Download, Search } from "lucide-react";

export const Route = createFileRoute("/price-list")({
  head: () => ({ meta: [{ title: "Price List | ECA Networks Nairobi" }] }),
  component: PriceList,
});

const PRODUCTS = [
  { product: "Fast Connectors SC/APC", category: "Connectors & Patch Cords", unit: "Piece", price: "150.00", stock: "In Stock" },
  { product: "Patchcord (LC/UPC - SC/UPC) Duplex", category: "Connectors & Patch Cords", unit: "Piece", price: "450.00", stock: "In Stock" },
  { product: "Patch Cord SC/UPC - SC/APC 1M", category: "Connectors & Patch Cords", unit: "Piece", price: "380.00", stock: "In Stock" },
  { product: "LC/UPC Duplex - Blue", category: "Connectors & Patch Cords", unit: "Piece", price: "320.00", stock: "In Stock" },
  { product: "LC/UPC Yellow SM 0.9mm 1M Pigtail LSZH", category: "Connectors & Patch Cords", unit: "Piece", price: "280.00", stock: "In Stock" },
  { product: "SC/APC Yellow SM 0.9mm 1M Pigtail LSZH", category: "Connectors & Patch Cords", unit: "Piece", price: "280.00", stock: "In Stock" },
  { product: "Bare Splitters 1:2", category: "Splitters", unit: "Piece", price: "850.00", stock: "In Stock" },
  { product: "Bare Splitters 1:4", category: "Splitters", unit: "Piece", price: "1,200.00", stock: "In Stock" },
  { product: "Bare Splitters 1:8", category: "Splitters", unit: "Piece", price: "1,800.00", stock: "Low Stock" },
  { product: "Splitters 1x16 SC/APC", category: "Splitters", unit: "Piece", price: "3,500.00", stock: "In Stock" },
  { product: "Splitters 1x16 SC/UPC", category: "Splitters", unit: "Piece", price: "3,200.00", stock: "In Stock" },
  { product: "ODF 96 Core - LC/UPC", category: "Fiber Management", unit: "Piece", price: "28,000.00", stock: "In Stock" },
  { product: "ODF 12C Loaded SC/UPC", category: "Fiber Management", unit: "Piece", price: "8,500.00", stock: "In Stock" },
  { product: "Dome Closure 48C", category: "Fiber Management", unit: "Piece", price: "4,200.00", stock: "In Stock" },
  { product: "DOME CLOSURE 12C", category: "Fiber Management", unit: "Piece", price: "2,800.00", stock: "In Stock" },
  { product: "DOME CLOSURE 24C", category: "Fiber Management", unit: "Piece", price: "3,400.00", stock: "Low Stock" },
  { product: "FAT 1 BY 8 LOADED", category: "Fiber Management", unit: "Piece", price: "6,500.00", stock: "In Stock" },
  { product: "FAT 1 BY 4 GREY EMPTY", category: "Fiber Management", unit: "Piece", price: "2,200.00", stock: "Enquire" },
  { product: "GPON OLT 4 Port HSGQ", category: "GPON/OLT", unit: "Piece", price: "45,000.00", stock: "In Stock" },
  { product: "GPON OLT 8 Port HSGQ", category: "GPON/OLT", unit: "Piece", price: "78,000.00", stock: "Low Stock" },
  { product: "Tension Clamps PA2000", category: "Aerial & Pole Hardware", unit: "Piece", price: "120.00", stock: "In Stock" },
  { product: "Buckles C01", category: "Aerial & Pole Hardware", unit: "Pack", price: "350.00", stock: "In Stock" },
  { product: "Stainless Steel Strap - 50M Roll", category: "Aerial & Pole Hardware", unit: "Roll", price: "2,800.00", stock: "In Stock" },
  { product: "J Clamp (10 - 15)", category: "Aerial & Pole Hardware", unit: "Piece", price: "85.00", stock: "In Stock" },
  { product: "Down Lead Clamp", category: "Aerial & Pole Hardware", unit: "Piece", price: "150.00", stock: "In Stock" },
  { product: "Universal Pole Bracket", category: "Aerial & Pole Hardware", unit: "Piece", price: "450.00", stock: "In Stock" },
  { product: "Strap 30M", category: "Aerial & Pole Hardware", unit: "Roll", price: "1,800.00", stock: "In Stock" },
  { product: "Banding Tool", category: "Tools & Accessories", unit: "Piece", price: "3,200.00", stock: "In Stock" },
  { product: "Cable Stripper", category: "Tools & Accessories", unit: "Piece", price: "1,500.00", stock: "In Stock" },
  { product: "Fiber Toolkit", category: "Tools & Accessories", unit: "Set", price: "12,000.00", stock: "In Stock" },
  { product: "Buffer Tubes - 20M", category: "Tools & Accessories", unit: "Roll", price: "800.00", stock: "In Stock" },
  { product: "Buffer Tubes - 50M", category: "Tools & Accessories", unit: "Roll", price: "1,800.00", stock: "In Stock" },
  { product: "Data Cabinet 12U", category: "Infrastructure", unit: "Piece", price: "18,500.00", stock: "Enquire" },
];

const FAQS = [
  { q: "Where can I find the ECA Networks price list?", a: "Current pricing is published on the online store, where each product shows its live price and stock position. Formal quotations for projects are issued by the sales desk on request." },
  { q: "Why is there no downloadable PDF price list?", a: "Cable, optics and switching prices move with supply and exchange rates. A PDF is out of date within weeks, so live store pricing plus a dated quotation protects both sides." },
  { q: "How do I get trade pricing?", a: "Open an account with the sales desk and share your typical purchase volume and sector. Trade tiers are applied to quotations and to your store account." },
  { q: "Do quoted prices include VAT and delivery?", a: "Quotations state VAT explicitly and list freight separately where reels, cabinets or bulk consumables are involved, so nothing is buried in a single figure." },
];

function stockClass(stock: string) {
  if (stock === "In Stock") return "stock-in";
  if (stock === "Low Stock") return "stock-low";
  return "stock-enquire";
}

function PriceList() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<string | null>(null);

  const categories = useMemo(() => {
    const s = new Set<string>();
    PRODUCTS.forEach((p) => s.add(p.category));
    return Array.from(s);
  }, []);

  const filtered = PRODUCTS.filter((p) => {
    const matchesQuery = p.product.toLowerCase().includes(query.toLowerCase());
    const matchesCat = activeCat ? p.category === activeCat : true;
    return matchesQuery && matchesCat;
  });

  return (
    <>
      <Section className="section-vertical">
        <div>
          <Eyebrow>Price List</Eyebrow>
          <Heading as="h1">Price List</Heading>
          <Lead className="mt-3">Updated product catalogue for ECA Networks Kenya.</Lead>
          <div className="mt-2 text-sm text-muted-foreground">Last updated: 14 Aug 2026</div>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <div className="relative flex-1" style={{ minWidth: 280 }}>
            <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="h-12 w-full rounded-full border border-border bg-card pl-11 pr-4 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setActiveCat(null)} className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${activeCat === null ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-secondary"}`}>All</button>
            {categories.map((c) => (
              <button key={c} onClick={() => setActiveCat(c)} className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${activeCat === c ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-secondary"}`}>{c}</button>
            ))}
          </div>
          <button onClick={() => window.print()} className="cta-btn inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
            <Download className="size-4" /> Download PDF
          </button>
        </div>
        <div className="mt-6 price-table-container">
          <div style={{ overflowX: "auto" }}>
            <table className="price-table">
              <thead>
                <tr><th>Product Name</th><th>Category</th><th>Unit</th><th>Price (KES)</th><th>Stock Status</th></tr>
              </thead>
              <tbody>
                {filtered.map((p) => (
                  <tr key={p.product}>
                    <td className="font-medium">{p.product}</td>
                    <td>{p.category}</td>
                    <td>{p.unit}</td>
                    <td className="font-semibold">{p.price}</td>
                    <td><span className="inline-flex items-center gap-2"><span className={`stock-dot ${stockClass(p.stock)}`} /><span>{p.stock}</span></span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2">
            <div className="qr-block">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://ecanetworks.co.ke/price-list/" alt="QR code linking to the ECA Networks price list" width={200} height={200} className="mx-auto rounded-lg" />
              <h4 className="mt-4 text-lg font-bold text-foreground">Share this price list</h4>
              <p className="mt-2 text-sm text-muted-foreground">Scan or screenshot this code. The link never changes, so it stays valid even when prices update.</p>
            </div>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-muted-foreground">Prices are indicative and subject to change without notice. For live stock and online ordering, visit ecanetworks.com. Trade volume pricing available on request.</p>
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <Reveal>
          <Eyebrow>Answers</Eyebrow>
          <Heading>Pricing questions</Heading>
        </Reveal>
        <div className="mt-8"><FaqList items={FAQS} /></div>
      </Section>

      <CtaBand title="Need a quote for project volumes?" body="Send your bill of materials to the technical desk for trade pricing, stock confirmation and delivery to your county." />
    </>
  );
}
