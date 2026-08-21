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
  Content,
  CardContentWrapper,
} from "@/components/site/primitives";
import { Award, Zap, Briefcase, UserCheck, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team and Careers | ECA Networks Nairobi" },
      {
        name: "description",
        content:
          "ECA Networks is guided by a robust team across sales, technical support and warehouse operations.",
      },
      { property: "og:title", content: "Team and Careers | ECA Networks" },
      {
        property: "og:description",
        content:
          "Meet the team behind ECA Networks' operations in Nairobi and learn about career opportunities.",
      },
    ],
  }),
  component: Team,
});

const VALUES = [
  {
    icon: UserCheck,
    title: "Technical first",
    desc: "Every role requires hands-on product knowledge, not just catalog familiarity.",
  },
  {
    icon: Award,
    title: "Accountability",
    desc: "Names on delivery notes, not ticket numbers. You know who packed your order.",
  },
  {
    icon: Zap,
    title: "Speed with precision",
    desc: "Same-day quotes for clear lists. Drawing reviews acknowledged within hours.",
  },
  {
    icon: Briefcase,
    title: "Career growth",
    desc: "Internal promotion is the norm. The COO started on the warehouse floor.",
  },
];

function ValueCard({ value, delay = 0 }: { value: (typeof VALUES)[0]; delay?: number }) {
  const Icon = value.icon;
  return (
    <Reveal delay={delay}>
      <div className="group text-center p-6 sm:p-8">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Icon className="size-7 text-primary group-hover:text-primary-foreground transition-colors" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{value.desc}</p>
      </div>
    </Reveal>
  );
}

function Team() {
  return (
    <>
      <Section className="pt-16 sm:pt-20 lg:pt-24 content-left">
        <Content>
          <Reveal>
            <Eyebrow>Team</Eyebrow>
            <Heading center className="mb-6">
              ECA Networks is <span className="ink-text">guided by a robust team</span>
            </Heading>
            <Lead center className="max-w-2xl">
              Our combined expertise spans fibre installation, network infrastructure, and reliable
              delivery across Kenya.
            </Lead>
          </Reveal>
        </Content>
      </Section>

      <Section className="pt-0">
        <Reveal>
          <Eyebrow center>Our values</Eyebrow>
          <Heading center className="mb-6">
            The principles that guide us
          </Heading>
          <Lead center className="max-w-2xl mb-10">
            These values shape how the technical desk, sales team, and warehouse operate every day.
          </Lead>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 content-left">
          {VALUES.map((v, i) => (
            <ValueCard key={v.title} value={v} delay={i * 80} />
          ))}
        </div>
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
                  <dt className="font-semibold text-foreground flex items-center justify-center gap-2">
                    <MapPin className="size-4" />
                    Address
                  </dt>
                  <dd className="text-muted-foreground mt-1">{COMPANY.address}</dd>
                </div>
                <div className="p-4 rounded-xl bg-white/50">
                  <dt className="font-semibold text-foreground flex items-center justify-center gap-2">
                    <svg
                      className="size-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    Hours
                  </dt>
                  <dd className="text-muted-foreground mt-1">{COMPANY.hours}</dd>
                </div>
                <div className="p-4 rounded-xl bg-white/50">
                  <dt className="font-semibold text-foreground flex items-center justify-center gap-2">
                    <Phone className="size-4" />
                    Phone
                  </dt>
                  <dd className="text-muted-foreground mt-1">
                    <a href={COMPANY.phoneHref} className="hover:text-primary">
                      {COMPANY.phone}
                    </a>
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
