import { createFileRoute } from "@tanstack/react-router";
import { COMPANY } from "@/lib/eca";
import { CtaBand, Eyebrow, Heading, Lead, QuoteButton, Reveal, Section } from "@/components/site/primitives";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Meet the Team and Careers | ECA Networks Nairobi" },
      { name: "description", content: "The functions behind the ECA Networks counter in Embakasi, Nairobi, and the roles the company hires for across sales, technical support and warehouse operations." },
      { property: "og:title", content: "Team and Careers | ECA Networks" },
      { property: "og:description", content: "Who you deal with at ECA Networks, from the technical desk to warehouse dispatch, plus open career paths in Nairobi." },
    ],
  }),
  component: Team,
});

const FUNCTIONS = [
  { role: "Technical desk", body: "Reads drawings, checks specifications and builds bills of materials. This is the team that catches the wrong span rating before it ships." },
  { role: "Sales and accounts", body: "Owns quotations, purchase orders, trade pricing tiers and the documentation procurement teams need on file." },
  { role: "Warehouse and dispatch", body: "Picks, checks and packs. Reels, cabinets and small consumables all leave with the delivery note that matches the quotation." },
  { role: "After sales support", body: "Handles warranty assessment, replacements and the follow up questions that arrive once equipment is powered on." },
];

const CAREERS = [
  { title: "Fibre and network sales", body: "For people who can hold a technical conversation and follow through on paperwork." },
  { title: "Technical support engineer", body: "Splicing, testing, switching and routing knowledge, with the patience to explain it." },
  { title: "Warehouse and logistics", body: "Accuracy under pressure, because a wrong pick becomes a wasted site visit." },
];

const TEAM_LEADERSHIP = [
  { name: "CEO", title: "Chief Executive Officer", image: "https://images.pexels.com/photos/28442318/pexels-photo-28442318.jpeg?auto=compress&cs=tinysrgb&w=400", bio: "Leads the company's vision and strategy, ensuring delivery of quality networking solutions across Kenya." },
  { name: "COO", title: "Chief Operating Officer", image: "https://images.pexels.com/photos/33680700/pexels-photo-33680700.jpeg?auto=compress&cs=tinysrgb&w=400", bio: "Oversees daily operations, logistics and supply chain to keep stock moving and quotes accurate." },
];

const TEAM_OPERATIONS = [
  { name: "Accounting", title: "Finance & Accounts", image: "https://images.pexels.com/photos/8312669/pexels-photo-8312669.jpeg?auto=compress&cs=tinysrgb&w=320" },
  { name: "Digital Marketing", title: "Marketing Lead", image: "https://images.pexels.com/photos/38707525/pexels-photo-38707525.jpeg?auto=compress&cs=tinysrgb&w=320" },
  { name: "Store Assistant", title: "Warehouse Operations", image: "https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&w=320" },
  { name: "Driver", title: "Logistics & Dispatch", image: "https://images.pexels.com/photos/13392786/pexels-photo-13392786.png?auto=compress&cs=tinysrgb&w=320" },
];

const TEAM_SALES = [
  { name: "Sales Rep 1", title: "Sales Representative", image: "https://images.pexels.com/photos/11156392/pexels-photo-11156392.jpeg?auto=compress&cs=tinysrgb&w=240" },
  { name: "Sales Rep 2", title: "Sales Representative", image: "https://images.pexels.com/photos/14950779/pexels-photo-14950779.jpeg?auto=compress&cs=tinysrgb&w=240" },
  { name: "Sales Rep 3", title: "Sales Representative", image: "https://images.pexels.com/photos/31422830/pexels-photo-31422830.png?auto=compress&cs=tinysrgb&w=240" },
  { name: "Sales Rep 4", title: "Sales Representative", image: "https://images.pexels.com/photos/26150470/pexels-photo-26150470.jpeg?auto=compress&cs=tinysrgb&w=240" },
  { name: "Sales Rep 5", title: "Sales Representative", image: "https://images.pexels.com/photos/38652616/pexels-photo-38652616.jpeg?auto=compress&cs=tinysrgb&w=240" },
];

function Team() {
  return (
    <>
      <Section className="section-vertical">
        <div className="rise">
          <Eyebrow>The people</Eyebrow>
          <Heading as="h1" className="mt-3">The team behind the counter</Heading>
          <Lead className="mt-4">Engineers, buyers and support staff who keep stock moving and quotes accurate.</Lead>
        </div>
        <Reveal delay={80}>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {TEAM_LEADERSHIP.map((member) => (
              <div key={member.name} className="lead-card">
                <img src={member.image} alt={member.name} loading="lazy" className="lead-photo" />
                <div>
                  <p className="mt-0 font-bold text-[24px] text-foreground">{member.name}</p>
                  <p className="mt-1 text-[14px] uppercase tracking-[1px] text-primary">{member.title}</p>
                  <p className="mt-2 body-text">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-12 mb-4 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Operations</p>
          <div className="grid gap-6 md:grid-cols-4">
            {TEAM_OPERATIONS.map((member) => (
              <div key={member.name}>
                <img src={member.image} alt={member.name} loading="lazy" className="ops-photo mx-auto" />
                <div className="mt-4 text-center">
                  <p className="font-bold text-[16px] text-foreground">{member.name}</p>
                  <p className="mt-1 text-[13px] uppercase text-muted-foreground">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-12 mb-4 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Sales Team</p>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
            {TEAM_SALES.map((member) => (
              <div key={member.name} className="text-center">
                <img src={member.image} alt={member.name} loading="lazy" className="sales-photo mx-auto" />
                <div className="mt-3">
                  <p className="font-bold text-[14px] text-foreground">{member.name}</p>
                  <p className="mt-0 text-[12px] uppercase text-muted-foreground">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section className="!pt-0">
        <Reveal>
          <Eyebrow>How the team is organised</Eyebrow>
          <Heading>Four functions, one counter</Heading>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FUNCTIONS.map((f, i) => (
            <Reveal key={f.role} delay={i * 70}>
              <div className="gloss gloss-hover h-full p-6">
                <h3 className="text-base font-semibold text-foreground">{f.role}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <Reveal>
          <div className="gloss rounded-[var(--radius-3xl)] p-8 sm:p-12">
            <div className="relative z-10">
              <Eyebrow>Careers</Eyebrow>
              <Heading>Open roles in Nairobi</Heading>
              <Lead className="mt-4">Send a CV and a short note on your experience to {COMPANY.email}. We reply to every serious enquiry.</Lead>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {CAREERS.map((c) => (
                  <div key={c.title} className="rounded-[var(--radius-lg)] border border-border bg-card p-5">
                    <h3 className="text-sm font-semibold text-foreground">{c.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8"><QuoteButton label="Apply or enquire" /></div>
            </div>
          </div>
        </Reveal>
      </Section>

      <CtaBand />
    </>
  );
}
