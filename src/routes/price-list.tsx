import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Section, Eyebrow, Heading, Lead, CtaBand } from "@/components/site/primitives";
import { FaqList } from "@/components/site/Faq";
import { QrCode, ShoppingCart, Truck, Wallet } from "lucide-react";
import { COMPANY, SHOP_URL } from "@/lib/eca";

export const Route = createFileRoute("/price-list")({
  head: () => ({
    meta: [{ title: "Price List | ECA Networks Nairobi" }],
  }),
  component: PriceList,
});

const PRODUCTS = [
  {
    product: "Fast Connectors SC/APC",
    category: "Connectors & Patch Cords",
    unit: "Piece",
    price: "150.00",
    stock: "In Stock",
  },
  {
    product: "Patchcord (LC/UPC - SC/UPC) Duplex",
    category: "Connectors & Patch Cords",
    unit: "Piece",
    price: "450.00",
    stock: "In Stock",
  },
  {
    product: "Patch Cord SC/UPC - SC/APC 1M",
    category: "Connectors & Patch Cords",
    unit: "Piece",
    price: "380.00",
    stock: "In Stock",
  },
  {
    product: "LC/UPC Duplex - Blue",
    category: "Connectors & Patch Cords",
    unit: "Piece",
    price: "320.00",
    stock: "In Stock",
  },
  {
    product: "LC/UPC Yellow SM 0.9mm 1M Pigtail LSZH",
    category: "Connectors & Patch Cords",
    unit: "Piece",
    price: "280.00",
    stock: "In Stock",
  },
  {
    product: "SC/APC Yellow SM 0.9mm 1M Pigtail LSZH",
    category: "Connectors & Patch Cords",
    unit: "Piece",
    price: "280.00",
    stock: "In Stock",
  },
  {
    product: "Bare Splitters 1:2",
    category: "Splitters",
    unit: "Piece",
    price: "850.00",
    stock: "In Stock",
  },
  {
    product: "Bare Splitters 1:4",
    category: "Splitters",
    unit: "Piece",
    price: "1,200.00",
    stock: "In Stock",
  },
  {
    product: "Bare Splitters 1:8",
    category: "Splitters",
    unit: "Piece",
    price: "1,800.00",
    stock: "Low Stock",
  },
  {
    product: "Splitters 1x16 SC/APC",
    category: "Splitters",
    unit: "Piece",
    price: "3,500.00",
    stock: "In Stock",
  },
  {
    product: "Splitters 1x16 SC/UPC",
    category: "Splitters",
    unit: "Piece",
    price: "3,200.00",
    stock: "In Stock",
  },
  {
    product: "ODF 96 Core - LC/UPC",
    category: "Fiber Management",
    unit: "Piece",
    price: "28,000.00",
    stock: "In Stock",
  },
  {
    product: "ODF 12C Loaded SC/UPC",
    category: "Fiber Management",
    unit: "Piece",
    price: "8,500.00",
    stock: "In Stock",
  },
  {
    product: "Dome Closure 48C",
    category: "Fiber Management",
    unit: "Piece",
    price: "4,200.00",
    stock: "In Stock",
  },
  {
    product: "DOME CLOSURE 12C",
    category: "Fiber Management",
    unit: "Piece",
    price: "2,800.00",
    stock: "In Stock",
  },
  {
    product: "DOME CLOSURE 24C",
    category: "Fiber Management",
    unit: "Piece",
    price: "3,400.00",
    stock: "Low Stock",
  },
  {
    product: "FAT 1 BY 8 LOADED",
    category: "Fiber Management",
    unit: "Piece",
    price: "6,500.00",
    stock: "In Stock",
  },
  {
    product: "FAT 1 BY 4 GREY EMPTY",
    category: "Fiber Management",
    unit: "Piece",
    price: "2,200.00",
    stock: "Enquire",
  },
  {
    product: "GPON OLT 4 Port HSGQ",
    category: "GPON/OLT",
    unit: "Piece",
    price: "45,000.00",
    stock: "In Stock",
  },
  {
    product: "GPON OLT 8 Port HSGQ",
    category: "GPON/OLT",
    unit: "Piece",
    price: "78,000.00",
    stock: "Low Stock",
  },
  {
    product: "Tension Clamps PA2000",
    category: "Aerial & Pole Hardware",
    unit: "Piece",
    price: "120.00",
    stock: "In Stock",
  },
  {
    product: "Buckles C01",
    category: "Aerial & Pole Hardware",
    unit: "Pack",
    price: "350.00",
    stock: "In Stock",
  },
  {
    product: "Stainless Steel Strap - 50 Metre Roll",
    category: "Aerial & Pole Hardware",
    unit: "Roll",
    price: "2,800.00",
    stock: "In Stock",
  },
  {
    product: "J Clamp (10 - 15)",
    category: "Aerial & Pole Hardware",
    unit: "Piece",
    price: "85.00",
    stock: "In Stock",
  },
  {
    product: "Down Lead Clamp",
    category: "Aerial & Pole Hardware",
    unit: "Piece",
    price: "150.00",
    stock: "In Stock",
  },
  {
    product: "Universal Pole Bracket",
    category: "Aerial & Pole Hardware",
    unit: "Piece",
    price: "450.00",
    stock: "In Stock",
  },
  {
    product: "Strap 30M",
    category: "Aerial & Pole Hardware",
    unit: "Roll",
    price: "1,800.00",
    stock: "In Stock",
  },
  {
    product: "Banding Tool",
    category: "Tools & Accessories",
    unit: "Piece",
    price: "3,200.00",
    stock: "In Stock",
  },
  {
    product: "Cable Stripper",
    category: "Tools & Accessories",
    unit: "Piece",
    price: "1,500.00",
    stock: "In Stock",
  },
  {
    product: "Fiber Toolkit",
    category: "Tools & Accessories",
    unit: "Set",
    price: "12,000.00",
    stock: "In Stock",
  },
  {
    product: "Buffer Tubes - 20M",
    category: "Tools & Accessories",
    unit: "Roll",
    price: "800.00",
    stock: "In Stock",
  },
  {
    product: "Buffer Tubes - 50M",
    category: "Tools & Accessories",
    unit: "Roll",
    price: "1,800.00",
    stock: "In Stock",
  },
  {
    product: "Data Cabinet 12U",
    category: "Infrastructure",
    unit: "Piece",
    price: "18,500.00",
    stock: "Enquire",
  },
];

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

  function downloadPDF() {
    // Simple print-to-PDF fallback for now
    window.print();
  }

  return (
    <>
      <Section className="section-vertical">
        <div>
          <Eyebrow className="eyebrow">Price List</Eyebrow>
          <Heading as="h1" className="headline">
            Price List
          </Heading>
          <Lead className="mt-3">Updated product catalogue for ECA Networks Kenya.</Lead>
          <div className="mt-2 text-sm text-[#888888]">Last updated: 14 Aug 2026</div>
        </div>

        {/* Search and filters */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          {/* Search bar */}
          <div style={{ flex: 1, minWidth: 280 }}>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full h-14 rounded-2xl px-4"
              style={{
                borderRadius: 12,
                border: "1px solid #E5E5E5",
                background: "#FAFAFA",
                paddingLeft: 48,
              }}
            />
          </div>

          {/* Category filter pills */}
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveCat(null)}
              className={`px-4 py-2 rounded-full ${activeCat === null ? "bg-[#0B0C10] text-white" : "bg-[#F5F5F5]"}`}
            >
              All
            </button>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCat(c)}
                className={`px-4 py-2 rounded-full ${activeCat === c ? "bg-[#0B0C10] text-white" : "bg-[#F5F5F5]"}`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Download PDF button */}
          <div style={{ marginLeft: "auto" }}>
            <button
              onClick={downloadPDF}
              className="cta-btn"
              style={{
                height: 56,
                background: "#00D4FF",
                color: "#0B0C10",
                padding: "0 18px",
                borderRadius: 8,
              }}
            >
              Download Price List (PDF)
            </button>
          </div>
        </div>

        {/* Product table container */}
        <div className="mt-6 price-table-container">
          <div style={{ overflowX: "auto" }}>
            <table className="price-table">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Unit</th>
                  <th>Price (KES)</th>
                  <th>Stock Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((p) => (
                  <tr key={p.product}>
                    <td>{p.product}</td>
                    <td>{p.category}</td>
                    <td>{p.unit}</td>
                    <td>{p.price}</td>
                    <td>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        <span
                          style={{
                            width: 10,
                            height: 10,
                            borderRadius: 10,
                            display: "inline-block",
                            background:
                              p.stock === "In Stock"
                                ? "#22C55E"
                                : p.stock === "Low Stock"
                                  ? "#F59E0B"
                                  : "#9CA3AF",
                          }}
                        />
                        <span>{p.stock}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* QR code block and disclaimer */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2">
            <div className="qr-block">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://ecanetworks.co.ke/price-list/`}
                alt="qr"
                width={200}
                height={200}
              />
              <h4 className="mt-4" style={{ fontWeight: 700 }}>
                Share this price list
              </h4>
              <p className="mt-2 text-sm text-[#888888]">
                Scan or screenshot this code. The link never changes, so it stays valid even when
                prices update.
              </p>
            </div>
          </div>

          <div className="col-span-1">
            <div style={{ fontSize: 14, color: "#888888", textAlign: "center" }}>
              <p>
                Prices are indicative and subject to change without notice. For live stock and
                online ordering, visit ecanetworks.com. Trade volume pricing available on request.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
