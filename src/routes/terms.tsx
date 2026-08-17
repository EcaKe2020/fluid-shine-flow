import { createFileRoute, Link } from "@tanstack/react-router";
import { COMPANY } from "@/lib/eca";
import { Eyebrow, Heading, Lead, Panel, Reveal, Section } from "@/components/site/primitives";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions | ECA Networks Kenya" },
      {
        name: "description",
        content:
          "Trading terms for ECA Networks Ltd: quotations, pricing and VAT, payment, delivery and risk, warranty claims, returns and liability for supplied network equipment.",
      },
      { property: "og:title", content: "Terms and Conditions | ECA Networks" },
      {
        property: "og:description",
        content:
          "How quotations, payment, delivery, warranty and returns work when you buy fibre and networking equipment from ECA Networks.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Terms,
});

const CLAUSES = [
  {
    title: "Quotations",
    body: "A quotation carries a reference number and holds for the validity period printed on it, usually fourteen days. Outside that window stock and landed cost are re-checked before the order is confirmed.",
  },
  {
    title: "Pricing and VAT",
    body: "Prices are quoted in Kenya shillings. Where VAT applies it is shown as a separate line. Published price list figures are indicative for planning and the quotation governs the sale.",
  },
  {
    title: "Payment",
    body: "Standard terms are payment before dispatch or collection. Approved account customers are invoiced on the terms stated in their credit agreement, and title in goods stays with us until payment clears.",
  },
  {
    title: "Delivery and risk",
    body: "Freight for reels, cabinets and bulky consignments is quoted up front. Risk passes on collection or on handover to the courier, so damage in transit must be noted on the delivery note at the point of receipt.",
  },
  {
    title: "Warranty",
    body: "Supported brands are assessed locally under the manufacturer term stated on the invoice. Faults caused by lightning, water ingress, incorrect power or unsupported firmware fall outside cover.",
  },
  {
    title: "Returns",
    body: "Unopened stock items in resale condition may be returned within seven days against the invoice number. Cut cable lengths, spliced assemblies and special order items are not returnable.",
  },
  {
    title: "Technical advice",
    body: "The technical desk advises on grades, spans, power budgets and quantities in good faith based on the information supplied. Final responsibility for design sign off and installation practice rests with the installer.",
  },
  {
    title: "Liability",
    body: "Our liability for any claim is limited to the invoiced value of the goods concerned. Loss of revenue, downtime and consequential losses are excluded.",
  },
  {
    title: "Governing law",
    body: "These terms are governed by the laws of Kenya, and disputes are handled in the Kenyan courts after a genuine attempt at direct resolution.",
  },
];

function Terms() {
  return (
    <Section className="pt-28 sm:pt-32">
      <div className="rise max-w-3xl">
        <Eyebrow>Terms and conditions</Eyebrow>
        <Heading as="h1">
          The trading rules, <span className="ink-text">written to be read</span>
        </Heading>
        <Lead className="mt-5">
          {COMPANY.name}. Anything unclear here is answered on a call: {COMPANY.email} or{" "}
          {COMPANY.phone}.
        </Lead>
      </div>

      <div className="mt-12 grid max-w-4xl gap-4">
        {CLAUSES.map((c, i) => (
          <Reveal key={c.title} delay={i * 45}>
            <Panel>
              <h2 className="text-lg font-semibold">{c.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </Panel>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-5 text-sm font-semibold">
        <Link to="/privacy" className="text-primary hover:underline">
          Privacy policy
        </Link>
        <Link to="/cookies" className="text-primary hover:underline">
          Cookie policy
        </Link>
      </div>
    </Section>
  );
}
