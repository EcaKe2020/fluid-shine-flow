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
      { title: "Price List and Trade Pricing | ECA Networks Kenya" },
      {
        name: "description",
        content:
          "Live pricing for fibre, networking, cabling and security hardware sits on the ECA Networks store. Request a formal quotation or trade tier pricing for project volumes in Kenya.",
      },
      { property: "og:title", content: "Price List and Trade Pricing | ECA Networks" },
      {
        property: "og:description",
        content:
          "Current prices live on the store rather than in a stale PDF. Request a formal quotation, trade tier pricing or a project bill of materials.",
      },
    ],
  }),
  component: PriceList,
});

const ROUTES = [
  {
    icon: ShoppingCart,
    title: "Live prices on the store",
    body: "Every stocked line carries its current price and availability on the shop. That is the fastest and most accurate answer to what something costs today.",
  },
  {
    icon: Wallet,
    title: "Trade and volume tiers",
    body: "Contractors, integrators and resellers buying repeatedly get tiered pricing against an account. Share your typical monthly volume and the desk sets the tier.",
  },
  {
    icon: QrCode,
    title: "Scanned a code in the shop?",
    body: "The QR codes on shelf labels and counter cards land here so you never chase a printed sheet that changed the week it was printed.",
  },
  {
    icon: Truck,
    title: "Freight and delivery",
    body: "Reels and cabinets are quoted with freight to your county so the landed cost is on the same page as the unit price.",
  },
];

const FAQS = [
  {
    q: "Where can I find the ECA Networks price list?",
    a: `Current pricing is published on the online store at ${SHOP_URL}, where each product shows its live price and stock position. Formal quotations for projects are issued by the sales desk on request.`,
  },
  {
    q: "Why is there no downloadable PDF price list?",
    a: "Cable, optics and switching prices move with supply and exchange rates. A PDF is out of date within weeks, so live store pricing plus a dated quotation protects both sides.",
  },
  {
    q: "How do I get trade pricing?",
    a: "Open an account with the sales desk and share your typical purchase volume and sector. Trade tiers are applied to quotations and to your store account.",
  },
  {
    q: "Do quoted prices include VAT and delivery?",
    a: "Quotations state VAT explicitly and list freight separately where reels, cabinets or bulk consumables are involved, so nothing is buried in a single figure.",
  },
];

function PriceList() {
  return (
    <>
      <Section className="pt-16 sm:pt-24">
        <Content>
          <div className="rise text-center">
            <Eyebrow center>Pricing</Eyebrow>
            <Heading as="h1" center>
              Prices that are <span className="ink-text">current</span>, not printed last quarter
            </Heading>
            <Lead center className="mt-6">
              The store carries live prices for every stocked line. For project volumes, phased
              rollouts or tender submissions, the desk issues a dated quotation with stock status
              per line.
            </Lead>
            <div className="mt-12 flex flex-wrap justify-center items-center gap-3">
              <ShopButton label="See live prices" />
              <QuoteButton label="Request a quotation" />
              <WhatsAppButton label="Ask about a price" />
            </div>
          </div>
        </Content>
      </Section>

      <Section className="pt-0">
        <Reveal>
          <Eyebrow center>Price list</Eyebrow>
          <Heading center>Browse current stock pricing</Heading>
          <Lead center className="mt-6 max-w-2xl">
            Search, filter, and sort across all stocked lines. Prices update in real-time from the
            store.
          </Lead>
        </Reveal>
        <div className="mt-12">
          <PriceTable />
        </div>
        <div className="mt-12">
          <QrCode className="mx-auto" />
          <p className="text-center text-sm text-muted-foreground mt-4">
            Scan to visit the store
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <Reveal>
          <div className="gloss rounded-[2rem] p-8 sm:p-12">
            <div className="relative z-10 grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div>
                <Eyebrow center>Counter and collection</Eyebrow>
                <Heading center>Buying in person</Heading>
                <Lead center className="mt-4">
                  Walk in with a list and leave with the goods. Bulk reels are cut to length at the
                  counter and checked against your quotation before they are loaded.
                </Lead>
              </div>
              <dl className="space-y-3 text-sm content-left mx-auto">
                <div>
                  <dt className="font-semibold">Address</dt>
                  <dd className="text-muted-foreground">{COMPANY.address}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Hours</dt>
                  <dd className="text-muted-foreground">{COMPANY.hours}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Phone</dt>
                  <dd className="text-muted-foreground">
                    <a href={COMPANY.phoneHref} className="hover:text-foreground">
                      {COMPANY.phone}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section className="pt-0">
        <Reveal>
          <Eyebrow center>Pricing questions</Eyebrow>
          <Heading center>Pricing questions</Heading>
        </Reveal>
        <div className="mt-12">
          <FaqList items={FAQS} />
        </div>
      </Section>

      <CtaBand
        title="Need a quotation with stock status per line?"
        body="Send the list and the desk returns pricing, availability and freight in one document you can hand to procurement."
      />
    </>
  );
}