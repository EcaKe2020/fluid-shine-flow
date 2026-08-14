import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, ClipboardCheck, GraduationCap, LifeBuoy, Ruler, Wrench } from "lucide-react";
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
  ShopButton,
  WhatsAppButton,
} from "@/components/site/primitives";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services and Technical Support | ECA Networks" },
      {
        name: "description",
        content:
          "Specification review, bill of materials checking, equipment configuration guidance, warranty handling and technical training from the ECA Networks desk in Nairobi.",
      },
      { property: "og:title", content: "Services and Technical Support | ECA Networks" },
      {
        property: "og:description",
        content:
          "The support that ships with the hardware: specification review, BOM checking, configuration guidance, warranty handling and training.",
      },
    ],
  }),
  component: Services,
});

const SERVICES = [
  {
    icon: ClipboardCheck,
    title: "Specification review",
    body: "Send a drawing or a rough list and an engineer checks cable grades, span ratings, port counts and power budgets before anything is priced.",
  },
  {
    icon: Ruler,
    title: "Bill of materials build",
    body: "Give us the site parameters and the desk assembles the list, including the consumables that get forgotten until the crew is already on the pole.",
  },
  {
    icon: Wrench,
    title: "Configuration guidance",
    body: "Baseline guidance on routing, switching, VLAN separation and PoE planning for the hardware you buy, so the box works on the first evening.",
  },
  {
    icon: BadgeCheck,
    title: "Warranty and returns",
    body: "Faults are logged and assessed in Nairobi under supported brand terms, with replacement routes explained rather than buried in fine print.",
  },
  {
    icon: GraduationCap,
    title: "Technical training",
    body: "Practical sessions on splicing discipline, OTDR interpretation and cabling certification for teams that want fewer callbacks.",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing account support",
    body: "Repeat lists kept on file, stock held against a scheduled rollout and a direct line for the questions that come up mid installation.",
  },
];

const FAQS = [
  {
    q: "Does ECA Networks install as well as supply?",
    a: "The core business is supply with technical support. Installation is normally carried out by the contractor or the client team, with the desk advising on specification, configuration and testing.",
  },
  {
    q: "How fast is a quotation returned?",
    a: "A clear list with quantities is usually priced within the same working day. A drawing that needs technical interpretation may take longer because the review happens before the numbers.",
  },
  {
    q: "Can stock be held for a phased project?",
    a: "Yes. Where a rollout runs over weeks, stock can be reserved against a schedule so the crew draws down in stages rather than storing everything on site.",
  },
  {
    q: "Is technical advice charged separately?",
    a: "Specification review and bill of materials checking come with the supply relationship. Formal training sessions are arranged and quoted separately.",
  },
];

function Services() {
  return (
    <>
      <Section className="pt-10 sm:pt-16">
        <div className="rise">
          <Eyebrow>Services and support</Eyebrow>
          <Heading as="h1">
            The part of the order that <span className="ink-text">does not fit in a box</span>
          </Heading>
          <Lead className="mt-5">
            Hardware is easy to buy anywhere. What changes the outcome of a job is somebody reading the specification
            properly before the invoice, and answering the phone after it.
          </Lead>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <QuoteButton label="Talk to an expert" />
            <WhatsAppButton />
            <ShopButton />
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <Panel className="h-full">
                <s.icon className="size-5 text-ember" />
                <h2 className="mt-4 text-base font-semibold">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <Reveal>
          <Eyebrow>Answers</Eyebrow>
          <Heading>Support questions we hear most</Heading>
        </Reveal>
        <div className="mt-8">
          <FaqList items={FAQS} />
        </div>
      </Section>

      <CtaBand
        title="Send the specification and let the desk pressure test it"
        body="Drawings, part lists, site photographs or a paragraph of description all work. The reply comes back with questions first and pricing second."
      />
    </>
  );
}
