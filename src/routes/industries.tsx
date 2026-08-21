import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Building2, ArrowRight } from "lucide-react";
import { INDUSTRIES } from "@/lib/eca";
import {
  CtaBand,
  Section,
  Content,
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
    need: "Continuity of supply & predictable cost",
    body: "Rollouts fail on missing consumables, not missing routers. Reel stock, drop cable, closures, splitters and splice sleeves are held in depth so a crew that finishes early can restock the same afternoon rather than idling for a week.",
    points: [
      "Repeat order lists kept on file",
      "Reel and drop cable in quantity",
      "Radio and CPE stock for expansion",
    ],
  },
  {
    title: "Contractors and installers",
    need: "Speed, pickup & BOM verification",
    body: "Site work moves faster than email. Collection from Embakasi, trade tiers on volume and a technical review that catches a wrong connector type before it becomes a second trip to site.",
    points: [
      "Same day counter collection",
      "Volume pricing tiers",
      "Technical review of the list"
    ],
  },
  {
    title: "Corporates and system integrators",
    need: "Documentation procurement can file",
    body: "Quotations, delivery notes, warranty statements and specification sheets arrive in a form that satisfies finance and audit, with a single point of contact for the account.",
    points: [
      "Formal quotations and LPO handling",
      "Warranty terms per line item",
      "One account contact",
    ],
  },
  {
    title: "Schools & educational institutions",
    need: "Budget cycles & long-life installations",
    body: "Campus backbones, lab switching and surveillance specified to survive years of student traffic, quoted against a term budget with phased options where funding arrives in stages.",
    points: [
      "Phased rollout options",
      "Campus fibre backbones",
      "Lab and hostel networking"
    ],
  },
  {
    title: "Government and county projects",
    need: "Strict tender compliance",
    body: "Tender ready quotations, documentation packs and delivery evidence for public sector procurement, with clarity on lead times where a schedule is contractual.",
    points: [
      "Tender documentation",
      "Lead time commitments",
      "Nationwide delivery evidence"
    ],
  },
  {
    title: "Data centres & security firms",
    need: "Discipline in the rack and riser",
    body: "Patching, containment, riser fibre and surveillance for facilities where a badly dressed rack turns into a fault report six months later.",
    points: [
      "Rack build out kits",
      "Riser and backbone fibre",
      "Surveillance and access control"
    ],
  },
];

function Industries() {
  return (
    <>
      {/* High-End Editorial Hero Layout */}
      <Section className="pt-20 sm:pt-32 pb-16 border-b border-border/80">
        <Content>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">
            <div className="lg:col-span-7">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2">
                <Building2 className="size-4" /> Market Segments
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                Same warehouse, different buying rhythm.
              </h1>
            </div>
            <div className="lg:col-span-5 lg:pt-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                An ISP buying a reel every week does not want the same process as a county office
                running a tender. These are the supply lines, documentation standards, and volume 
                patterns the technical desk is set up to support.
              </p>
              <div className="mt-8 flex items-center gap-6">
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary hover:text-primary/80 transition-colors"
                >
                  Request Procurement Quote <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </Content>
      </Section>

      {/* Industrial Spec Grid */}
      <Section className="py-20">
        <Content>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {DEEP.map((item, i) => (
              <div key={item.title} className="border-t border-border/80 pt-6 group">
                {/* Index & Need Tag */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-sm font-bold text-muted-foreground/50">
                    {String(i + 1).padStart(2, '0')} //
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    {item.need}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold text-foreground mb-3">{item.title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                  {item.body}
                </p>
                
                {/* Clean Checklist instead of pills */}
                <ul className="space-y-2 border-t border-border/40 pt-4">
                  {item.points.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Content>
      </Section>

      {/* Directory-Style Secondary Industries List */}
      <Section className="py-20 bg-muted/20">
        <Content>
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 border-t border-border/80 pt-6">
              <h2 className="text-2xl font-bold text-foreground">Not on the list?</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Hotels, hospitals, manufacturers, churches and estates all buy from the same
                shelves. Describe the site and the technical desk will work out which of the four
                supply lines it touches.
              </p>
            </div>
            
            <div className="lg:col-span-8">
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-6 border-t border-border/80 pt-6">
                {INDUSTRIES.map((i) => (
                  <li key={i.title} className="text-sm leading-relaxed">
                    <span className="font-bold text-foreground block mb-1">{i.title}</span> 
                    <span className="text-muted-foreground">{i.body}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Content>
      </Section>

      <CtaBand
        title="Require custom procurement documentation?"
    
        body="Contact us for tailored quotes, LPO handling, and compliance documentation specific to your organization's buying cycle."
      />
    </>
  );
}