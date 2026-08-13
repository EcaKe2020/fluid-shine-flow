import { createFileRoute } from "@tanstack/react-router";
import { FileCheck2, Leaf, Recycle, ShieldCheck, Users } from "lucide-react";
import { FaqList } from "@/components/site/Faq";
import {
  CtaBand,
  Eyebrow,
  Heading,
  Lead,
  Panel,
  QuoteButton,
  Reveal,
  Section,
} from "@/components/site/primitives";

export const Route = createFileRoute("/esg")({
  head: () => ({
    meta: [
      { title: "ESG, Compliance and Tender Documentation | ECA Networks" },
      {
        name: "description",
        content:
          "How ECA Networks approaches environmental responsibility, ethical sourcing, worker safety and the compliance documents procurement teams request for tenders in Kenya.",
      },
      { property: "og:title", content: "ESG and Compliance | ECA Networks" },
      {
        property: "og:description",
        content:
          "Responsible sourcing, packaging and cable waste handling, safety practice and the documentation pack available for tender submissions.",
      },
    ],
  }),
  component: Esg;
});

const PILLARS = [
  {
    icon: Leaf,
    title: "Environmental practice",
    body: "Cable offcuts and drum waste are separated for recycling rather than dumped, and orders are consolidated so fewer vehicles cover the same deliveries.",
  },
  {
    icon: Recycle,
    title: "Packaging and returns",
    body: "Reels and cabinets travel in reusable protection where possible. Returnable drums come back into circulation instead of becoming site litter.",
  },
  {
    icon: ShieldCheck,
    title: "Product integrity",
    body: "Stock is bought through recognised channels so that grade markings, span ratings and safety certifications on the label match what is inside the jacket.",
  },
  {
    icon: Users,
    title: "People and safety",
    body: "Warehouse handling of heavy reels follows lifting practice, and technical guidance always includes the safety notes that matter on poles and in ducts.",
  },
];

const DOCS = [
  "Certificate of incorporation and KRA PIN",
  "Tax compliance certificate",
  "Company profile and capability statement",
  "Brand authorisation letters where applicable",
  "Product datasheets and certificates of conformity",
  "Reference letters, subject to client approval",
];

const FAQS = [
  {
    q: "What compliance documents can ECA Networks provide for a tender?",
    a: "Registration and tax documents, a company profile, product datasheets and, where the brand permits, authorisation letters. Request the pack from the sales desk and state the tender reference so the bundle matches the requirement.",
  },
  {
    q: "Are the products genuine and certified?",
    a: "Stock is sourced through recognised distribution channels and supplied with datasheets and, where applicable, certificates of conformity. Grade markings on the cable jacket should match the specification quoted.",
  },
  {
    q: "How is cable and packaging waste handled?",
    a: "Offcuts and drum waste are separated for recycling and reusable drums are returned to circulation rather than left on site.",
  },
];

function Esg() {
  return (
    <>
      <Section className="pt-10 sm:pt-16">
        <div className="rise">
          <Eyebrow>ESG and compliance</Eyebrow>
          <Heading as="h1">
            Written so a <span className="ink-text">procurement officer</span> can tick the box
          </Heading>
          <Lead className="mt-5">
            Public and institutional buyers need more than a price. This page sets out how the company sources, handles
            waste, protects people and evidences all of it on paper.
          </Lead>
          <div className="mt-8">
            <QuoteButton label="Request the compliance pack" />
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <Panel className="h-full">
                <p.icon className="size-5 text-ember" />
                <h2 className="mt-4 text-lg font-semibold">{p.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <Reveal>
          <div className="gloss rounded-[2rem] p-8 sm:p-12">
            <div className="relative z-10 grid gap-8 lg:grid-cols-2">
              <div>
                <Eyebrow>Documentation</Eyebrow>
                <Heading>What ships with a tender submission</Heading>
                <Lead className="mt-4">
                  Tell the desk which tender you are bidding and the pack is assembled to that list rather than sent as a
                  generic bundle.
                </Lead>
              </div>
              <ul className="space-y-3">
                {DOCS.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <FileCheck2 className="mt-0.5 size-4 shrink-0 text-ember" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section className="pt-0">
        <Reveal>
          <Eyebrow>Answers</Eyebrow>
          <Heading>Compliance questions, answered plainly</Heading>
        </Reveal>
        <div className="mt-8">
          <FaqList items={FAQS} />
        </div>
      </Section>

      <CtaBand
        title="Bidding on a project that needs paperwork today?"
        body="Send the tender reference and the required document list. The pack comes back assembled to that specification."
      />
    </>
  );
}
