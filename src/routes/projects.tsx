import { createFileRoute } from "@tanstack/react-router";
import rack from "@/assets/rack.jpg";
import splicing from "@/assets/splicing.jpg";
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
} from "@/components/site/primitives";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects and Case Studies | ECA Networks Kenya" },
      {
        name: "description",
        content:
          "How ECA Networks supports fibre rollouts, campus cabling, surveillance and rack build outs in Kenya, with the supply workflow behind each project type.",
      },
      { property: "og:title", content: "Projects and Case Studies | ECA Networks" },
      {
        property: "og:description",
        content:
          "Project types ECA Networks supplies, the supply workflow behind them and how completed case studies get published once clients approve.",
      },
    ],
  }),
  component: Projects,
});

const TYPES = [
  {
    title: "Aerial fibre rollout for a regional provider",
    scope: "ADSS spans, closures, splitters, drop cable, splicing and OTDR support",
    body: "A poled route through a growing estate needs cable rated for the longest span, closures at every branch and enough drop cable to connect subscribers as they sign. Supply is staged so the crew never carries more stock than the week needs.",
  },
  {
    title: "Campus structured cabling",
    scope: "CAT6 horizontal, fibre backbone between blocks, cabinets and certification",
    body: "Blocks are linked with fibre while each block keeps its own cabinet, so an outlet is never more than 90 metres from its patch panel. Certification results are handed over with the delivery notes.",
  },
  {
    title: "Surveillance and access control retrofit",
    scope: "IP cameras, NVR and storage sizing, PoE switching, access readers",
    body: "The retention period drives the storage array, and the camera count drives the PoE budget. Both are calculated before hardware is quoted so the recorder does not run out of disk in month two.",
  },
  {
    title: "Data room and rack build out",
    scope: "Cabinets, patching, PDUs, containment and dressing accessories",
    body: "Neat racks are cheaper to maintain. Panels, managers, cords in length and colour codes, plus containment, are supplied as a single kit so the installer is not improvising on site.",
  },
];

const FLOW = [
  { step: "Enquiry", body: "Send a drawing, a part list, a photograph or a description of the site." },
  { step: "Technical review", body: "The desk checks grades, spans, power budgets and quantities, and asks about anything ambiguous." },
  { step: "Quotation", body: "A priced list with stock status per line and freight where reels or cabinets are involved." },
  { step: "Supply", body: "Collection in Embakasi or courier dispatch, staged across a rollout where that suits the crew." },
  { step: "Support", body: "Warranty handling, replacement parts and technical questions after the consignment lands." },
];

function Projects() {
  return (
    <>
      <Section className="pt-10 sm:pt-16">
        <div className="rise">
          <Eyebrow>Projects and case studies</Eyebrow>
          <Heading as="h1">
            The work behind the <span className="ink-text">delivery note</span>
          </Heading>
          <Lead className="mt-5">
            Named case studies are published only once a client approves the details, so this page describes project types
            and the supply workflow rather than claiming outcomes we cannot evidence. Ask the sales desk for references
            relevant to your sector.
          </Lead>
          <div className="mt-8 flex flex-wrap gap-3">
            <QuoteButton label="Discuss a project" />
            <ShopButton />
          </div>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {TYPES.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <Panel className="h-full">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-ember">{item.scope}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="gloss rounded-[2rem] p-3">
              <img
                src={splicing}
                alt="Fibre splicing work on a project route"
                width={1408}
                height={1008}
                loading="lazy"
                className="relative z-10 aspect-[4/3] w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow>How a project runs</Eyebrow>
              <Heading>Five stages, no surprises</Heading>
            </Reveal>
            <ol className="mt-8 space-y-4">
              {FLOW.map((item, i) => (
                <Reveal key={item.step} delay={i * 70}>
                  <li className="flex gap-4">
                    <span className="ink-fill mt-0.5 grid size-7 shrink-0 place-items-center rounded-full text-xs font-semibold text-primary-foreground dark:text-background">
                      {i + 1}
                    </span>
                    <span>
                      <span className="font-semibold">{item.step}.</span>{" "}
                      <span className="text-sm text-muted-foreground">{item.body}</span>
                    </span>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <Reveal>
          <div className="gloss grid gap-8 rounded-[2rem] p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
            <div className="relative z-10">
              <Heading>Have a completed job we supplied?</Heading>
              <Lead className="mt-4">
                If you are happy for it to be documented, send photographs and the technical outcome. Approved case
                studies are published with your credit and a link back to your business.
              </Lead>
              <div className="mt-7">
                <QuoteButton label="Submit a case study" />
              </div>
            </div>
            <img
              src={rack}
              alt="Completed rack installation"
              width={1408}
              height={1008}
              loading="lazy"
              className="relative z-10 aspect-[4/3] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </Reveal>
      </Section>

      <CtaBand />
    </>
  );
}
