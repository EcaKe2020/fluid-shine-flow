import { createFileRoute } from "@tanstack/react-router";
import { COMPANY } from "@/lib/eca";
import { Eyebrow, Heading, Lead, Panel, Reveal, Section } from "@/components/site/primitives";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy and Terms | ECA Networks Ltd" },
      {
        name: "description",
        content:
          "How ECA Networks handles enquiry data, what we collect through quotations and the store, and the trading terms covering quotations, warranty and returns in Kenya.",
      },
      { property: "og:title", content: "Privacy and Terms | ECA Networks" },
      {
        property: "og:description",
        content:
          "Data handling, cookies, warranty and returns terms for ECA Networks Ltd, written in plain language.",
      },
    ],
  }),
  component: Privacy,
});

const SECTIONS = [
  {
    title: "What we collect",
    body: "When you request a quotation we collect the name, company, email, phone number, county and project details you submit. Nothing beyond what is needed to price and deliver an order is asked for or kept.",
  },
  {
    title: "How the information is used",
    body: "Enquiry details are used to prepare quotations, fulfil orders, arrange delivery and support warranty claims. Project descriptions are treated as commercially confidential and are not shared with third parties beyond what a delivery or brand warranty requires.",
  },
  {
    title: "Case studies and references",
    body: "Client names, photographs and project outcomes are published only with written approval. Withdraw that approval at any time and the material is removed.",
  },
  {
    title: "Cookies and analytics",
    body: "The site uses only what is needed to remember your light or dark theme preference and to understand aggregate traffic. No advertising profiles are built from your visit.",
  },
  {
    title: "Data retention and access",
    body: `Quotation and order records are retained for accounting and warranty purposes. Write to ${COMPANY.email} to ask what is held about you, to correct it, or to request deletion where no legal obligation requires us to keep it.`,
  },
  {
    title: "Quotations and pricing terms",
    body: "Quotations are valid for the period stated on the document and are subject to stock availability at the time of order confirmation. Prices reflect supply and exchange rate conditions on the date of issue.",
  },
  {
    title: "Warranty and returns",
    body: "Products carry the warranty terms of their manufacturer or brand owner. Faults should be reported with the invoice reference so the item can be assessed in Nairobi. Cut lengths of cable, opened consumables and items damaged during installation cannot be returned.",
  },
  {
    title: "Technical guidance",
    body: "Specification advice is given in good faith based on the information supplied. Final responsibility for installation design, safety compliance and workmanship rests with the installing party.",
  },
];

function Privacy() {
  return (
    <Section className="pt-10 sm:pt-16">
      <div className="rise max-w-3xl">
        <Eyebrow>Privacy and terms</Eyebrow>
        <Heading as="h1">
          Plain language, <span className="ink-text">no fine print games</span>
        </Heading>
        <Lead className="mt-5">
          {COMPANY.name}, {COMPANY.address}. Questions about anything on this page go to{" "}
          {COMPANY.email} or {COMPANY.phone}.
        </Lead>
      </div>

      <div className="mt-12 grid max-w-4xl gap-4">
        {SECTIONS.map((s, i) => (
          <Reveal key={s.title} delay={i * 50}>
            <Panel>
              <h2 className="text-lg font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </Panel>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
