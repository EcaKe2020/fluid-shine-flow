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
  {
    title: "Fibre and network sales",
    body: "For people who can hold a technical conversation and follow through on paperwork.",
  },
  {
    title: "Technical support engineer",
    body: "Splicing, testing, switching and routing knowledge, with the patience to explain it.",
  },
  {
    title: "Warehouse and logistics",
    body: "Accuracy under pressure, because a wrong pick becomes a wasted site visit.",
  },
];

function Team() {
  const TEAM = [
    {
      name: "CEO",
      title: "Chief Executive Officer",
      tier: "lead",
      bio: "Leads strategy and supplier relationships.",
    },
    {
      name: "COO",
      title: "Chief Operating Officer",
      tier: "lead",
      bio: "Oversees operations and logistics.",
    },
    { name: "Accounting", title: "Accounting", tier: "ops" },
    { name: "Digital Marketing", title: "Digital Marketing", tier: "ops" },
    { name: "Store Assistant", title: "Store Assistant", tier: "ops" },
    { name: "Driver", title: "Driver", tier: "ops" },
    // sales reps x5
    { name: "Sales Rep 1", title: "Sales Representative", tier: "sales" },
    { name: "Sales Rep 2", title: "Sales Representative", tier: "sales" },
    { name: "Sales Rep 3", title: "Sales Representative", tier: "sales" },
    { name: "Sales Rep 4", title: "Sales Representative", tier: "sales" },
    { name: "Sales Rep 5", title: "Sales Representative", tier: "sales" },
  ];

  const leadership = TEAM.filter((t) => t.tier === "lead");
  const operations = TEAM.filter((t) => t.tier === "ops");
  const sales = TEAM.filter((t) => t.tier === "sales");

  return (
    <>
      <Section className="section-vertical">
        <div>
          <Eyebrow className="eyebrow">THE PEOPLE</Eyebrow>
          <Heading as="h1" className="headline mt-3">
            The team behind the counter
          </Heading>
          <Lead className="mt-4 body-text">
            Engineers, buyers and support staff who keep stock moving and quotes accurate.
          </Lead>
        </div>

        {/* Leadership */}
        <div className="mt-12 grid gap-8">
          {leadership.map((p) => (
            <div key={p.name} className="lead-card">
              <img
                src={`https://picsum.photos/seed/${encodeURIComponent(p.name)}/600/600`}
                alt={p.name}
                className="lead-photo"
              />
              <div>
                <h3 style={{ fontSize: 24, fontWeight: 700 }}>{p.name}</h3>
                <div
                  style={{
                    fontSize: 14,
                    textTransform: "uppercase",
                    color: "#00D4FF",
                    letterSpacing: "1px",
                    marginTop: 8,
                  }}
                >
                  {p.title}
                </div>
                <p style={{ marginTop: 12, fontSize: 16, lineHeight: 1.5 }}>
                  {p.bio || "Part of the team that keeps things running."}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Operations */}
        <div className="mt-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {operations.map((p) => (
              <div key={p.name} className="text-center py-6">
                <img
                  src={`https://picsum.photos/seed/${encodeURIComponent(p.name)}/400/400`}
                  alt={p.name}
                  className="ops-photo mx-auto"
                />
                <div className="mt-4">
                  <div style={{ fontSize: 16, fontWeight: 700 }}>{p.name}</div>
                  <div
                    style={{
                      fontSize: 13,
                      textTransform: "uppercase",
                      color: "#666666",
                      marginTop: 6,
                    }}
                  >
                    {p.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sales */}
        <div className="mt-12">
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
            {sales.map((p) => (
              <div key={p.name} className="text-center py-4">
                <img
                  src={`https://picsum.photos/seed/${encodeURIComponent(p.name)}/300/300`}
                  alt={p.name}
                  className="sales-photo mx-auto"
                />
                <div className="mt-3">
                  <div style={{ fontSize: 14, fontWeight: 700 }}>{p.name}</div>
                  <div
                    style={{
                      fontSize: 12,
                      textTransform: "uppercase",
                      color: "#888888",
                      marginTop: 6,
                    }}
                  >
                    {p.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
