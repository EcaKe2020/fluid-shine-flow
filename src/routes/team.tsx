import { createFileRoute } from "@tanstack/react-router";
import { COMPANY } from "@/lib/eca";
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

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Meet the Team and Careers | ECA Networks Nairobi" },
      {
        name: "description",
        content:
          "The functions behind the ECA Networks counter in Embakasi, Nairobi, and the roles the company hires for across sales, technical support and warehouse operations.",
      },
      { property: "og:title", content: "Team and Careers | ECA Networks" },
      {
        property: "og:description",
        content:
          "Who you deal with at ECA Networks, from the technical desk to warehouse dispatch, plus open career paths in Nairobi.",
      },
    ],
  }),
  component: Team,
});

const FUNCTIONS = [
  {
    role: "Technical desk",
    body: "Reads drawings, checks specifications and builds bills of materials. This is the team that catches the wrong span rating before it ships.",
  },
  {
    role: "Sales and accounts",
    body: "Owns quotations, purchase orders, trade pricing tiers and the documentation procurement teams need on file.",
  },
  {
    role: "Warehouse and dispatch",
    body: "Picks, checks and packs. Reels, cabinets and small consumables all leave with the delivery note that matches the quotation.",
  },
  {
    role: "After sales support",
    body: "Handles warranty assessment, replacements and the follow up questions that arrive once equipment is powered on.",
  },
];

const CAREERS = [
  { title: "Fibre and network sales", body: "For people who can hold a technical conversation and follow through on paperwork." },
  { title: "Technical support engineer", body: "Splicing, testing, switching and routing knowledge, with the patience to explain it." },
  { title: "Warehouse and logistics", body: "Accuracy under pressure, because a wrong pick becomes a wasted site visit." },
];

function Team() {
  return (
    <>
      <Section className="pt-10 sm:pt-16">
        <div className="rise">
          <Eyebrow>Team and careers</Eyebrow>
          <Heading as="h1">
            People who have <span className="ink-text">held the splicer</span>, not just the price list
          </Heading>
          <Lead className="mt-5">
            Individual biographies are published once each team member approves their profile, so this page describes the
            functions you actually deal with. Ask for a named contact and you will be introduced directly.
          </Lead>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {FUNCTIONS.map((f, i) => (
            <Reveal key={f.role} delay={i * 80}>
              <Panel className="h-full">
                <h2 className="text-lg font-semibold">{f.role}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <Reveal>
          <div className="gloss rounded-[2rem] p-8 sm:p-12">
            <div className="relative z-10">
              <Eyebrow>Careers</Eyebrow>
              <Heading>Roles we keep an eye out for</Heading>
              <Lead className="mt-4">
                Applications are welcome even when nothing is formally advertised. Send a short note about what you have
                built or supplied to {COMPANY.email} with the role in the subject line.
              </Lead>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {CAREERS.map((c) => (
                  <div key={c.title} className="rounded-2xl bg-primary/8 p-5">
                    <h3 className="text-base font-semibold">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <QuoteButton label="Get in touch" />
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <CtaBand />
    </>
  );
}
