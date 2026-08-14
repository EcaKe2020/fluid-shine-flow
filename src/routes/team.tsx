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
import { Linkedin, Mail, MapPin, UserCheck, Briefcase, Award, Zap } from "lucide-react";

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
    icon: UserCheck,
    role: "Technical desk",
    body: "Reads drawings, checks specifications and builds bills of materials. This is the team that catches the wrong span rating before it ships.",
    highlight: "Engineers who've held the splicer",
  },
  {
    icon: Briefcase,
    role: "Sales and accounts",
    body: "Owns quotations, purchase orders, trade pricing tiers and the documentation procurement teams need on file.",
    highlight: "Your single point of contact",
  },
  {
    icon: Award,
    role: "Warehouse and dispatch",
    body: "Picks, checks and packs. Reels, cabinets and small consumables all leave with the delivery note that matches the quotation.",
    highlight: "Accuracy you can trace",
  },
  {
    icon: Zap,
    role: "After sales support",
    body: "Handles warranty assessment, replacements and the follow up questions that arrive once equipment is powered on.",
    highlight: "Support that actually responds",
  },
];

const CAREERS = [
  {
    title: "Fibre and network sales",
    body: "For people who can hold a technical conversation and follow through on paperwork.",
    requirements: ["2+ years B2B sales", "Technical aptitude", "Kenyan market knowledge"],
  },
  {
    title: "Technical support engineer",
    body: "Splicing, testing, switching and routing knowledge, with the patience to explain it.",
    requirements: ["Fibre certification", "MikroTik/routing basics", "Field experience"],
  },
  {
    title: "Warehouse and logistics",
    body: "Accuracy under pressure, because a wrong pick becomes a wasted site visit.",
    requirements: ["Inventory systems", "Forklift certified", "Detail oriented"],
  },
];

const VALUES = [
  { icon: UserCheck, title: "Technical first", desc: "Every role requires hands-on product knowledge, not just catalog familiarity." },
  { icon: Award, title: "Accountability", desc: "Names on delivery notes, not ticket numbers. You know who packed your order." },
  { icon: Zap, title: "Speed with precision", desc: "Same-day quotes for clear lists. Drawing reviews acknowledged within hours." },
  { icon: Briefcase, title: "Career growth", desc: "Internal promotion is the norm. The COO started on the warehouse floor." },
];

function FunctionCard({ func, delay = 0 }: { func: typeof FUNCTIONS[0]; delay?: number }) {
  const Icon = func.icon;
  return (
    <Reveal delay={delay}>
      <div className="group relative h-full bg-white rounded-2xl border border-[#E5E5E5] p-6 sm:p-8 transition-all duration-300 hover:border-[#00D4FF]/50 hover:shadow-[0_20px_40px_rgba(0,212,255,0.08)] hover:-translate-y-1">
        <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-[#00D4FF]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative z-10">
          <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center mb-6 group-hover:bg-[#00D4FF] group-hover:text-white transition-colors">
            <Icon className="size-6 text-[#00D4FF] group-hover:text-white transition-colors" />
          </div>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-2">{func.role}</h2>
          <p className="text-sm leading-relaxed text-[#666666] mb-4">{func.body}</p>
          <p className="text-xs font-medium text-[#00D4FF] flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
            {func.highlight}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

function CareerCard({ career, delay = 0 }: { career: typeof CAREERS[0]; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <div className="group h-full bg-white rounded-2xl border border-[#E5E5E5] p-6 sm:p-8 transition-all duration-300 hover:border-[#00D4FF]/50 hover:shadow-[0_20px_40px_rgba(0,212,255,0.08)] hover:-translate-y-1">
        <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">{career.title}</h3>
        <p className="text-sm leading-relaxed text-[#666666] mb-5">{career.body}</p>
        <div className="space-y-2">
          {career.requirements.map((req, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-[#666666]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] flex-shrink-0" />
              {req}
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function ValueCard({ value, delay = 0 }: { value: typeof VALUES[0]; delay?: number }) {
  const Icon = value.icon;
  return (
    <Reveal delay={delay}>
      <div className="group text-center p-6 sm:p-8">
        <div className="w-14 h-14 rounded-2xl bg-[#00D4FF]/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#00D4FF] group-hover:text-white transition-colors">
          <Icon className="size-7 text-[#00D4FF] group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">{value.title}</h3>
        <p className="text-sm leading-relaxed text-[#666666]">{value.desc}</p>
      </div>
    </Reveal>
  );
}

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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FUNCTIONS.map((f, i) => (
            <FunctionCard key={f.role} func={f} delay={i * 80} />
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <Reveal>
          <Eyebrow>Our way of working</Eyebrow>
          <Heading>What makes the counter different</Heading>
          <Lead className="mt-5 max-w-2xl">
            Four principles that show up in every quote, every dispatch, and every support call.
          </Lead>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <ValueCard key={v.title} value={v} delay={i * 80} />
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
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {CAREERS.map((c, i) => (
                  <CareerCard key={c.title} career={c} delay={i * 80} />
                ))}
              </div>
              <div className="mt-10 text-center">
                <QuoteButton label="Get in touch" />
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section className="pt-0">
        <Reveal>
          <div className="gloss rounded-[2rem] p-8 sm:p-12 text-center">
            <div className="relative z-10 max-w-xl mx-auto">
              <Eyebrow>Visit us</Eyebrow>
              <Heading>Walk the floor</Heading>
              <Lead className="mt-4">
                The best way to understand the team is to stand at the counter. Coffee is always on.
              </Lead>
              <dl className="mt-8 grid gap-3 sm:grid-cols-3 text-sm text-center">
                <div className="p-4 rounded-xl bg-white/50">
                  <dt className="font-semibold text-[#1A1A1A] flex items-center justify-center gap-2">
                    <MapPin className="size-4" />
                    Address
                  </dt>
                  <dd className="text-[#666666] mt-1">{COMPANY.address}</dd>
                </div>
                <div className="p-4 rounded-xl bg-white/50">
                  <dt className="font-semibold text-[#1A1A1A] flex items-center justify-center gap-2">
                    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    Hours
                  </dt>
                  <dd className="text-[#666666] mt-1">{COMPANY.hours}</dd>
                </div>
                <div className="p-4 rounded-xl bg-white/50">
                  <dt className="font-semibold text-[#1A1A1A] flex items-center justify-center gap-2">
                    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    Phone
                  </dt>
                  <dd className="text-[#666666] mt-1">
                    <a href={COMPANY.phoneHref} className="hover:text-[#00D4FF]">{COMPANY.phone}</a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Reveal>
      </Section>

      <CtaBand />
    </>
  );
}