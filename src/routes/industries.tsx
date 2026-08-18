import { createFileRoute } from "@tanstack/react-router";
import { INDUSTRIES } from "@/lib/eca";
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

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries Served | ISPs, Contractors, Institutions, Government" },
      {
        name: "description",
        content:
          "How ECA Networks supplies internet providers, contractors, integrators, schools, county government projects, data centres and property developers across Kenya.",
      },
      { property: "og:title", content: "Industries Served | ECA Networks" },
      {
        property: "og:description",
        content:
          "Supply patterns, documentation and support tuned to how each type of Kenyan network buyer orders.",
      },
    ],
  }),
  component: Industries,
});

const DEEP = [
  {
    title: "Internet service providers",
    need: "Continuity of supply and predictable unit cost",
    body: "Rollouts fail on missing consumables, not missing routers. Reel stock, drop cable, closures, splitters and splice sleeves are held in depth so a crew that finishes early can restock the same afternoon rather than idling for a week.",
    points: [
      "Repeat order lists kept on file",
      "Reel and drop cable in quantity",
      "Radio and CPE stock for expansion",
    ],
  },
  {
    title: "Contractors and installers",
    need: "Speed, pick up and a checked bill of materials",
    body: "Site work moves faster than email. Collection from Embakasi, trade tiers on volume and a technical review that catches a wrong connector type before it becomes a second trip to site.",
    points: ["Same day counter collection", "Volume pricing tiers", "Technical review of the list"],
  },
  {
    title: "Corporates and system integrators",
    need: "Documentation procurement can file",
    body: "Quotations, delivery notes, warranty statements and specification sheets arrive in a form that satisfies finance and audit, with a single point of contact for the account.",
    points: ["Formal quotations and LPO handling", "Warranty terms per line item", "One account contact"],
  },
  {
    title: "Schools and educational institutions",
    need: "Budget cycles and long life installations",
    body: "Campus backbones, lab switching and surveillance specified to survive years of student traffic, quoted against a term budget with phased options where funding arrives in stages.",
    points: ["Phased rollout options", "Campus fibre backbones", "Lab and hostel networking"],
  },
  {
    title: "Government and county projects",
    need: "Tender compliance",
    body: "Tender ready quotations, documentation packs and delivery evidence for public sector procurement, with clarity on lead times where a schedule is contractual.",
    points: ["Tender documentation", "Lead time commitments", "Nationwide delivery evidence"],
  },
  {
    title: "Data centres, security firms and developers",
    need: "Discipline in the rack and the riser",
    body: "Patching, containment, riser fibre and surveillance for facilities where a badly dressed rack turns into a fault report six months later.",
    points: ["Rack build out kits", "Riser and backbone fibre", "Surveillance and access control"],
  },
];

function Industries() {
  return (
    <>
      <Section className="pt-16 sm:pt-20 lg:pt-24 content-left">
        <Content>
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rise">
              <Eyebrow>Industries served</Eyebrow>
              <Heading as="h1" center className="mb-6">
                Same warehouse, <span className="ink-text">different buying rhythm</span>
              </Heading>
              <Lead className="mt-6">
                An ISP buying a reel every week does not want the same process as a county office
                running a tender. These are the patterns the desk is set up for.
              </Lead>
              <div className="mt-8 flex flex-wrap justify-center gap-6">
                <QuoteButton />
                <ShopButton />
              </div>
            </div>
            <Reveal delay={100}>
              <div className="grid gap-6 sm:grid-cols-2 content-left">
                {DEEP.map((item, i) => (
                  <Reveal key={item.title} delay={i * 80}>
                    <CardContentWrapper>
                      <Panel className="h-full text-center">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ember mb-4">
                          {item.need}
                        </p>
                        <h2 className="mt-4 text-xl font-semibold mb-3">
                          {item.title}
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-1">
                          {item.body}
                        </p>
                        <ul className="mt-5 flex flex-wrap justify-center gap-4">
                          {item.points.map((p) => (
                            <li
                              key={p}
                              className="rounded-full bg-primary-50 px-4 py-2 text-xs font-medium text-primary"
                            >
                              {p}
                            </li>
                          ))}
                        </ul>
                      </Panel>
                    </CardContentWrapper>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </Content>
      </Section>

      <Section className="pt-0">
        <Content>
          <Reveal>
            <div className="gloss rounded-[2rem] p-8 sm:p-12 text-center">
              <div className="relative z-10">
                <Heading center className="mb-4">Not on the list?</Heading>
                <Lead center className="mt-4">
                  Hotels, hospitals, manufacturers, churches and estates all buy from the same
                  shelves. Describe the site and the technical desk will work out which of the four
                  supply lines it touches.
                </Lead>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2 text-center">
                  {INDUSTRIES.map((i) => (
                    <li key={i.title} className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">{i.title}.</span> {i.body}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </Content>
      </Section>

      <CtaBand
        title="Not listed here?"
        body="Contact us for tailored quotes and documentation specific to your organization"
      />
    </>
  );
}