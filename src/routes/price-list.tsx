import { createFileRoute } from "@tanstack/react-router";
import { QrCode, ShoppingCart, Truck, Wallet } from "lucide-react";
import { COMPANY, SHOP_URL } from "@/lib/eca";
import { FaqList } from "@/components/site/Faq";
import { PriceTable } from "@/components/site/PriceTable";
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
  WhatsAppButton,
  Content,
  CardContentWrapper,
} from "@/components/site/primitives";

export const Route = createFileRoute("/price-list")({
  head: () => ({
    meta: [
      { title: "Readily Available Items | ECA Networks Kenya" },
      {
        name: "description",
        content:
          "Current stock items available for immediate purchase. No quotation needed for standard products.",
      },
      { property: "og:title", content: "Readily Available Items | ECA Networks" },
      {
        property: "og:description",
        content:
          "Items currently in stock at ECA Networks, ready for immediate purchase without quotation requirements.",
      },
    ],
  }),
  component: ReadilyAvailableItems,
});

const ITEMS_WITHOUT_QUERY = [
  {
    icon: ShoppingCart,
    title: "When you need to buy immediately",
    body: "Browse our live inventory of items currently in stock. No quotation process required.",
  },
  {
    icon: Wallet,
    title: "Same-day availability",
    body: "Select items ready for immediate pickup or dispatch from our Nairobi warehouse.",
  },
  {
    icon: QrCode,
    title: "No quotation required",
    body: "Standard products can be purchased directly online or by phone.",
  },
  {
    icon: Truck,
    title: "Immediate shipping",
    body: "Many items ship same-day when in stock.",
  },
];

const PRICE_TAGS = [
  { label: "In stock", icon: "✅" },
  { label: "Limited quantity", icon: "⚠️" },
  { label: "Backordered", icon: "🕒" },
];

function ReadilyAvailableItems() {
  return (
    <>
      <Section className="pt-16 sm:pt-24">
        <Content>
          <div className="rise text-center">
            <Eyebrow>Readily Available</Eyebrow>
            <Heading as="h1" center>
              Immediate access to standard networking equipment
            </Heading>
            <Lead center className="mt-6">
              Purchase high-demand networking equipment and cabling directly from our Nairobi
              warehouse without needing a quotation process for standard items.
            </Lead>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ShopButton label="Browse in stock items" />
              {/* Removed QuoteButton and WhatsAppButton as they're not needed for readily available items */}
            </div>
          </div>
        </Content>
      </Section>

      <Section className="pt-0">
        <Reveal>
          <Eyebrow>Available Now</Eyebrow>
          <Heading center>Items ready for immediate purchase</Heading>
          <Lead center className="mt-6 max-w-3xl">
            These products are currently in stock and available for immediate purchase. Simply
            choose your items and complete the checkout process.
          </Lead>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 content-left">
          {ITEMS_WITHOUT_QUERY.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <CardContentWrapper>
                <Panel className="h-full text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ember">
                    {item.title}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold">{item.body}</h2>
                  <div className="mt-4 flex justify-center gap-2">
                    {[...PRICE_TAGS].map((tag) => (
                      <span
                        key={tag.label}
                        className="rounded-full bg-gray-50 px-2 py-1 text-xs text-gray-600 dark:bg-gray-900"
                      >
                        {tag.icon}
                      </span>
                    ))}
                  </div>
                </Panel>
              </CardContentWrapper>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <Reveal>
          <div className="gloss rounded-[2rem] p-8 sm:p-12 text-center">
            <div className="relative z-10">
              <Heading center>Need something specific?</Heading>
              <Lead center className="mt-4">
                For specialized requests beyond our ready stock, contact the technical desk for
                special ordering options.
              </Lead>
              <div className="mt-8 flex flex-wrap gap-4">
                <QuoteButton label="Send enquiry" />
                <ShopButton medium="ready-items-contact" />
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <CtaBand
        title="Items available for immediate purchase"
        body="No quotation required for standard products in our ready stock inventory."
      />
    </>
  );
}
