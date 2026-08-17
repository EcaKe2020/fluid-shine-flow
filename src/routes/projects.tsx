import { createFileRoute } from "@tanstack/react-router";
import { CASE_STUDIES } from "@/lib/eca";
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
  Content,
  CardContentWrapper,
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
  {
    step: "Enquiry",
    body: "Send a drawing, a part list, a photograph or a description of the site.",
  },
  {
    step: "Technical review",
    body: "The desk checks grades, spans, power budgets and quantities, and asks about anything ambiguous.",
  },
  {
    step: "Quotation",
    body: "A priced list with stock status per line and freight where reels or cabinets are involved.",
  },
  {
    step: "Supply",
    body: "Collection in Embakasi or courier dispatch, staged across a rollout where that suits the crew.",
  },
  {
    step: "Support",
    body: "Warranty handling, replacement parts and technical questions after the consignment lands.",
  },
];

function Projects() {
  return (
    <>
      <Section className="pt-16 sm:pt-20 lg:pt-24 content-left">
        <Content>
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rise">
              <Eyebrow>Projects and case studies</Eyebrow>
              <Heading as="h1" center className="mb-6">
                The work behind the <span className="ink-text">delivery note</span>
              </Heading>
              <Lead className="mt-6">
                Named case studies are published only once a client approves the details, so this page
                describes project types and the supply workflow rather than claiming outcomes we
                cannot evidence. Ask the sales desk for references relevant to your sector.
              </Lead>
              <div className="mt-8 flex flex-wrap justify-center gap-6">
                <QuoteButton label="Discuss a project" />
                <ShopButton />
              </div>
            </div>
            <Reveal delay={100}>
              <div className="grid gap-6 sm:grid-cols-2 content-left">
                {CASE_STUDIES.map((cs, i) => (
                  <Reveal key={cs.title} delay={i * 70}>
                    <CardContentWrapper>
                      <article className="sheen h-full p-6 text-center">
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-ember mb-4">
                          {cs.client}
                        </p>
                        <h2 className="mt-3 text-xl font-semibold mb-3">{cs.title}</h2>
                        <p className="mt-2 text-sm text-muted-foreground mb-5">{cs.scope}</p>
                        <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                          <div className="rounded-2xl bg-muted/60 p-4">
                            <dt className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground mb-2">
                              Before
                            </dt>
                            <dd className="mt-2 text-sm leading-relaxed text-foreground">
                              {cs.before}
                            </dd>
                          </div>
                          <div className="rounded-2xl bg-primary/8 p-4">
                            <dt className="text-xs font-bold uppercase tracking-[0.14em] text-primary mb-2">
                              After
                            </dt>
                            <dd className="mt-2 text-sm leading-relaxed text-foreground">{cs.after}</dd>
                          </div>
                        </dl>
                        <p className="mt-4 text-sm font-semibold text-primary">{cs.result}</p>
                      </article>
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
            <Eyebrow center>Project types</Eyebrow>
            <Heading center className="mb-4">Project types we supply every month</Heading>
          </Reveal>
          <div className="mt-8 grid gap-6 lg:grid-cols-2 content-left">
            {TYPES.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <CardContentWrapper>
                  <Panel className="h-full text-center">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-ember mb-3">
                      {item.scope}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </Panel>
                </CardContentWrapper>
              </Reveal>
            ))}
          </div>
        </Content>
      </Section>

      <Section className="pt-0">
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
        <Content>
          <Reveal>
            <div className="gloss rounded-[2rem] p-3">
              <div className="relative z-10 text-center">
                <Eyebrow center>How a project runs</Eyebrow>
                <Heading center className="mb-4">Five stages, no surprises</Heading>
                <ol className="mt-8 space-y-6 text-left">
                  {FLOW.map((item, i) => (
                    <Reveal key={item.step} delay={i * 70}>
                      <li className="flex gap-4">
                        <span className="ink-fill mt-0.5 mx-auto grid size-7 shrink-0 place-items-center rounded-full text-xs font-semibold text-primary-foreground dark:text-background">
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
        </Content>
      </Section>

      <CtaBand />
    </>
  );
}