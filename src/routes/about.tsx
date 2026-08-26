import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, FileCheck2, ShieldCheck, Mail, Globe2 } from "lucide-react";

// Note: Ensure you have these 6 images in your assets folder, or replace the imports with your actual file names.
import img1 from "@/assets/about1.webp";
import img2 from "@/assets/about2.webp";
import img3 from "@/assets/about3.webp";
import img4 from "@/assets/about4.webp";
import img5 from "@/assets/about5.webp";
import img6 from "@/assets/about6.webp";

import { BRANDS, CAREERS, CERTIFICATIONS, COMPANY, STATS } from "@/lib/eca";
import { CtaBand, Section, Content } from "@/components/site/primitives";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ECA Networks | Network Equipment Supplier, Nairobi" },
      {
        name: "description",
        content:
          "Who ECA Networks is, how the Nairobi supply operation works, and what partners, contractors and procurement teams can expect from the technical desk.",
      },
    ],
  }),
  component: About,
});

const PRINCIPLES = [
  {
    num: "01",
    title: "Specify it right the first time",
    body: "A quotation is a technical document. If the cable grade, span rating or power budget does not add up, we say so before it ships rather than after it fails on site.",
    bullets: [
      "DB loss budget & span rating verification",
      "Single-mode (OS2) & Multimode (OM3/OM4) specification checks",
      "Power budget calculation support before billing",
    ],
  },
  {
    num: "02",
    title: "Hold depth, not just breadth",
    body: "A catalogue is easy. Keeping reels, connectors and consumables in quantity so a rollout can continue on a Friday afternoon is the harder and more useful thing.",
    bullets: [
      "Bulk ADSS, GYTA & FTTH drop cable reels ready in Embakasi",
      "High-density patch panels, ODFs & splice closures on floor",
      "Same-day dispatch for Nairobi and regional transit points",
    ],
  },
  {
    num: "03",
    title: "Publish what we can verify",
    body: "Figures, brand support and delivery promises stated here are the ones the team can stand behind on a call. Anything still being confirmed is left out.",
    bullets: [
      "100% factory-inspected & OTDR test-verified equipment",
      "Transparent batch numbers and KRA / import documentation",
      "Guaranteed local warranty and replacement support",
    ],
  },
  {
    num: "04",
    title: "Keep two doors open",
    body: "Straightforward orders belong on the online store where pricing is published. Project work belongs with a human who reads the drawing.",
    bullets: [
      "Instant online pricing for off-the-shelf consumables",
      "Dedicated technical desk for complex tender BOM reviews",
      "Direct WhatsApp and phone counter support in Nairobi & Eldoret",
    ],
  },
];

function About() {
  return (
    <>
      <Section className="pt-20 sm:pt-32 pb-12">
        <Content>
          {/* High-End Editorial Hero Layout */}
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">
              Nairobi Central Supply Operation
            </p>
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">
              <div className="lg:col-span-7">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                  A supply desk built for people who install networks for a living.
                </h1>
              </div>
              <div className="lg:col-span-5 lg:pt-4">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {COMPANY.name} supplies fibre optic and network infrastructure from Embakasi, Nairobi
                  to internet providers, contractors, integrators, institutions and public sector
                  projects across Kenya. The counter, the warehouse and the technical desk sit in the
                  same building, which is why a corrected bill of materials can turn into a packed
                  consignment the same day.
                </p>
              </div>
            </div>
          </div>

          {/* Pinterest-Style Masonry Image Grid */}
          <div className="mt-16 columns-2 md:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
            <img src={img1} alt="Facility" className="w-full rounded bg-muted object-cover aspect-[4/3]" />
            <img src={img2} alt="Inventory" className="w-full rounded bg-muted object-cover aspect-[3/4]" />
            <img src={img3} alt="Team" className="w-full rounded bg-muted object-cover aspect-square" />
            <img src={img4} alt="Cables" className="w-full rounded bg-muted object-cover aspect-[4/5]" />
            <img src={img5} alt="Dispatch" className="w-full rounded bg-muted object-cover aspect-[16/9]" />
            <img src={img6} alt="Operations" className="w-full rounded bg-muted object-cover aspect-[2/3]" />
          </div>

          {/* Clean Text-Driven Stats */}
          <div className="mt-20 border-t border-border/80 pt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <p className="text-4xl font-light tracking-tight text-foreground">{stat.value}</p>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Content>
      </Section>

      <Section className="py-16 bg-muted/20">
        <Content>
          <div className="mb-12">
            <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
              Operating Standards
            </h2>
            <p className="mt-4 text-3xl font-bold text-foreground max-w-2xl">
              Four habits that shape every order
            </p>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              None of this is unusual in engineering. It is unusual in distribution, which is
              exactly the gap the business exists to close.
            </p>
          </div>

          {/* Grid-line separation instead of boxes */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {PRINCIPLES.map((p) => (
              <div key={p.num} className="border-t border-border/80 pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-lg font-semibold text-muted-foreground">{p.num}</span>
                  <h3 className="text-xl font-bold text-foreground">{p.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                  {p.body}
                </p>
                <ul className="space-y-3">
                  {p.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-foreground/80">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Content>
      </Section>

      <Section className="py-20">
        <Content>
          {/* Editorial split for Mission/Vision */}
          <div className="border-y border-border/80 py-16 grid md:grid-cols-2 gap-12 md:gap-24">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2">
                <ShieldCheck className="size-4" /> Our Mission
              </h2>
              <p className="text-lg font-medium leading-relaxed text-foreground">
                Keep Kenyan networks supplied with equipment that is correctly specified,
                genuinely in stock and backed locally, so that installers spend their time
                building rather than chasing parts.
              </p>
            </div>
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2">
                <Globe2 className="size-4" /> Our Vision
              </h2>
              <p className="text-lg font-medium leading-relaxed text-foreground">
                To be the first number a Kenyan network builder dials when a project needs
                infrastructure, whether that is a single splice tray or a county-wide fibre
                rollout.
              </p>
            </div>
          </div>
        </Content>
      </Section>

      <Section className="py-10">
        <Content>
          <div className="mb-10">
            <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
              Compliance & Verification
            </h2>
            <p className="mt-4 text-3xl font-bold text-foreground">
              The paperwork behind the counter
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {CERTIFICATIONS.map((c) => (
              <div key={c.title} className="flex items-start gap-4">
                <FileCheck2 className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <h3 className="text-base font-bold text-foreground">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Clean text list for brands instead of pills */}
          <div className="mt-16 border-t border-border/80 pt-10">
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">
              Supported Manufacturer Brands & Compatibility
            </h3>
            <p className="text-lg text-foreground leading-relaxed font-medium">
              {BRANDS.join(" \u2022 ")}
            </p>
          </div>
        </Content>
      </Section>

      <Section className="py-20 bg-muted/20">
        <Content>
          <div className="mb-12">
            <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
              Careers
            </h2>
            <p className="mt-4 text-3xl font-bold text-foreground">
              Room for people who like getting it right
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {CAREERS.map((role) => (
              <div key={role.role} className="border-t border-border/80 pt-6">
                <p className="text-xs font-bold text-muted-foreground mb-3 uppercase tracking-wider">
                  {role.place}
                </p>
                <h3 className="text-lg font-bold text-foreground mb-3">{role.role}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground mb-6">{role.body}</p>
                <a
                  href={`mailto:${COMPANY.email}?subject=${encodeURIComponent(`Application: ${role.role} (${role.place})`)}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors"
                >
                  <Mail className="size-4" />
                  <span>Apply via email</span>
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            ))}
          </div>
        </Content>
      </Section>

      <CtaBand
        title="Want the company profile for a tender file?"
        body="The sales desk can package company details, supported brands and delivery terms in the format your procurement pack requires."
      />
    </>
  );
}