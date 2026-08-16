import { createFileRoute } from "@tanstack/react-router";
import warehouse from "@/assets/warehouse.jpg";
import { COMPANY, STATS } from "@/lib/eca";
import { TeamSection } from "@/components/site/TeamSection";
import {
  CtaBand,
  Eyebrow,
  Heading,
  Lead,
  Panel,
  Reveal,
  Section,
} from "@/components/site/primitives";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ECA Networks | Network Equipment Supplier, Nairobi" },
      {
        name: "description",
        content:
          "Who ECA Networks is, how the Nairobi supply operation works, and what partners, contractors and procurement teams can expect from the technical desk.",
      },
      { property: "og:title", content: "About ECA Networks" },
      {
        property: "og:description",
        content:
          "A Nairobi supply operation for fibre and networking infrastructure, built around stock depth, technical review and honest lead times.",
      },
    ],
  }),
  component: About,
});

const PRINCIPLES = [
  {
    title: "Specify it right the first time",
    body: "A quotation is a technical document. If the cable grade, span rating or power budget does not add up, we say so before it ships rather than after it fails on site.",
  },
  {
    title: "Hold depth, not just breadth",
    body: "A catalogue is easy. Keeping reels, connectors and consumables in quantity so a rollout can continue on a Friday afternoon is the harder and more useful thing.",
  },
  {
    title: "Publish what we can verify",
    body: "Figures, brand support and delivery promises stated here are the ones the team can stand behind on a call. Anything still being confirmed is left out.",
  },
  {
    title: "Keep two doors open",
    body: "Straightforward orders belong on the online store where pricing is published. Project work belongs with a human who reads the drawing.",
  },
];

function About() {
  return (
    <>
      <Section className="pt-10 sm:pt-16">
        <div className="rise">
          <Eyebrow>About the company</Eyebrow>
          <Heading as="h1">
            A supply desk built for people who <span className="ink-text">install networks for a living</span>
          </Heading>
          <Lead className="mt-5">
            {COMPANY.name} supplies fibre optic and network infrastructure from Embakasi, Nairobi to internet providers,
            contractors, integrators, institutions and public sector projects across Kenya. The counter, the warehouse and
            the technical desk sit in the same building, which is why a corrected bill of materials can turn into a
            packed consignment the same day.
          </Lead>
        </div>

        <Reveal delay={100}>
          <div className="gloss mt-10 rounded-[2rem] p-3">
            <img
              src={warehouse}
              alt="Aisle of warehouse racking holding fibre optic cable drums"
              width={1600}
              height={1104}
              loading="lazy"
              className="relative z-10 aspect-[16/7] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </Reveal>

        <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 70}>
              <Panel className="h-full text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-2xl font-semibold sm:text-3xl">{stat.value}</span>
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                </dd>
              </Panel>
            </Reveal>
          ))}
        </dl>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div>
              <Eyebrow>How we work</Eyebrow>
              <Heading>Four habits that shape every order</Heading>
              <Lead className="mt-4">
                None of this is unusual in engineering. It is unusual in distribution, which is exactly the gap the
                business exists to close.
              </Lead>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <Panel className="h-full">
                  <h3 className="text-base font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </Panel>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <Reveal>
          <div className="gloss rounded-[2rem] p-8 sm:p-12">
            <div className="relative z-10 grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-xl font-semibold">Mission</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Keep Kenyan networks supplied with equipment that is correctly specified, genuinely in stock and backed
                  locally, so that installers spend their time building rather than chasing parts.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Vision</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  To be the first number a Kenyan network builder dials when a project needs infrastructure, whether that
                  is a single splice tray or a county wide fibre rollout.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <TeamSection />

      <CtaBand
        title="Want the company profile for a tender file?"
        body="The sales desk can package company details, supported brands and delivery terms in the format your procurement pack requires."
      />
    </>
  );
}
