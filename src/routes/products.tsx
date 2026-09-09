import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText, ShoppingCart, Truck, Warehouse } from "lucide-react";
import { ProductTable } from "@/components/site/ProductTable";
import {
  CtaBand,
  Eyebrow,
  Heading,
  Lead,
  Panel,
  QuoteButton,
  Reveal,
  Section,
  ShopButton,
  Content,
  CardContentWrapper,
} from "@/components/site/primitives";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Product Catalogue | ECA Networks Kenya" },
      {
        name: "description",
        content:
          "Browse our complete product catalogue of networking equipment and cabling products. Download the catalogue or request a quotation.",
      },
      { property: "og:title", content: "Product Catalogue | ECA Networks" },
      {
        property: "og:description",
        content:
          "Complete product catalogue of networking equipment, fibre optic cabling, connectivity hardware and tools available from ECA Networks Kenya.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://fluid-shine-flow.lovable.app/products" }],
  }),
  component: ProductsPage,
});

const PRODUCT_HIGHLIGHTS = [
  {
    icon: Warehouse,
    title: "Extensive stock range",
    body: "Hundreds of networking products available from our Nairobi warehouse.",
  },
  {
    icon: FileText,
    title: "Downloadable catalogue",
    body: "Export the full product list as a PDF for offline reference and sharing.",
  },
  {
    icon: ShoppingCart,
    title: "Request pricing",
    body: "Contact our technical desk for competitive pricing on any product.",
  },
  {
    icon: Truck,
    title: "Nationwide delivery",
    body: "We ship to all major towns across Kenya with fast turnaround times.",
  },
];

function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-16 sm:pt-24">
        <Content>
          <div className="rise flex flex-col items-center text-center">
            <Eyebrow>Product Catalogue</Eyebrow>
            <Heading as="h1" center className="mt-4 max-w-4xl">
              Complete range of networking equipment & cabling
            </Heading>
            <Lead center className="mt-6 max-w-2xl">
              Browse our full product catalogue of fibre optic, copper connectivity, and active
              networking equipment. All items are available from our Nairobi warehouse.
            </Lead>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <QuoteButton label="Request quotation" />
              <ShopButton label="Browse online store" />
            </div>
          </div>
        </Content>
      </Section>

      {/* Value Proposition Section */}
      <Section className="pt-12 sm:pt-16">
        <Reveal className="flex flex-col items-center text-center">
          <Eyebrow>Why Choose ECA</Eyebrow>
          <Heading center className="mt-4">
            Products backed by expertise
          </Heading>
          <Lead center className="mt-6 max-w-3xl">
            We don't just stock products — we help you specify the right solution. Every item in
            our catalogue is selected for Kenyan deployment conditions.
          </Lead>
        </Reveal>
        
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCT_HIGHLIGHTS.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 70}>
                <CardContentWrapper>
                  <Panel className="flex h-full flex-col items-center text-center p-6 transition-transform hover:-translate-y-1">
                    {/* Rendered missing Icon */}
                    <div className="mb-5 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="size-6" strokeWidth={1.5} />
                    </div>
                    {/* Fixed semantic hierarchy */}
                    <h3 className="text-lg font-bold tracking-tight text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </Panel>
                </CardContentWrapper>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Catalogue Table Section */}
      <Section className="pt-16 sm:pt-24">
        <Reveal className="flex flex-col items-center text-center">
          <Eyebrow>Browse Products</Eyebrow>
          <Heading center className="mt-4">
            Filter, search and download the catalogue
          </Heading>
          <Lead center className="mt-6 max-w-3xl">
            Use the search and category filters to find what you need. Download the full catalogue
            as a PDF for offline use, or contact us for pricing and availability.
          </Lead>
          
          <div className="mt-10 w-full text-left">
            <ProductTable />
          </div>
        </Reveal>
      </Section>

      {/* Bottom CTA Card */}
      <Section className="pt-12 pb-16">
        <Reveal>
          <div className="gloss relative overflow-hidden rounded-[2.5rem] border border-border/50 bg-muted/30 p-8 shadow-sm sm:p-14 text-center">
            <div className="relative z-10 flex flex-col items-center">
              <Heading center>Need a formal quotation?</Heading>
              <Lead center className="mt-5 max-w-2xl text-muted-foreground">
                For project pricing, bulk orders, or specialised requirements, our technical desk
                will prepare a detailed quotation within 24 hours.
              </Lead>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <QuoteButton label="Request quotation" />
                <ShopButton medium="products-contact" />
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <CtaBand
        title="Ready to specify your project?"
        body="Download the catalogue, share it with your team, and send us the SKUs you need. We'll reply with availability and pricing."
      />
    </>
  );
}