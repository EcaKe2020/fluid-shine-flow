import { createFileRoute } from "@tanstack/react-router";
import { FaqBlock } from "@/components/site/FaqBlock";
import { ArrowRight, FolderGit2, GitCommitHorizontal, CheckCircle2 } from "lucide-react";
import { CASE_STUDIES } from "@/lib/eca";
import rack from "@/assets/rack.jpg";
import splicing from "@/assets/splicing.jpg";
import {
  CtaBand,
  Section,
  Content,
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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://fluid-shine-flow.lovable.app/projects" }],
  }),
  component: Projects,
});

const PAGE_FAQS = [
  {
    q: "How quickly can a project be supplied from Nairobi?",
    a: "Stock items leave the Nairobi store on the day the order is confirmed, and deliveries reach main towns on the next courier run.",
    long: "Special order lines are confirmed with a date before you commit.",
  },
  {
    q: "Can supply be staged across phases of a rollout?",
    a: "Yes. Deliveries are released per phase so a crew never carries more stock than the week needs.",
    long: "Phased releases also keep site security and storage simple.",
  },
  {
    q: "Do you check a bill of materials before quoting?",
    a: "Yes. The technical desk reviews the list and flags wrong connector types, span ratings or PoE budgets before pricing.",
    long: "That review is the reason most orders avoid a second trip to site.",
  },
  {
    q: "Are project case studies published with client names?",
    a: "Only with written approval from the client. Otherwise the scope is described without naming the site.",
    long: "Reference calls can be arranged for procurement teams that need them.",
  },
] as const;

const TYPES = [
  {
    title: "Aerial fibre rollout for a regional provider",
    scope: "ADSS spans, closures, splitters, drop cable, splicing & OTDR support",
    body: "A poled route through a growing estate needs cable rated for the longest span, closures at every branch and enough drop cable to connect subscribers as they sign. Supply is staged so the crew never carries more stock than the week needs.",
  },
  {
    title: "Campus structured cabling",
    scope: "CAT6 horizontal, fibre backbone between blocks, cabinets & certification",
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
      {/* High-End Editorial Hero Layout */}
      <Section className="pt-20 sm:pt-32 pb-16 border-b border-border/80">
        <Content>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">
            <div className="lg:col-span-7">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2">
                <FolderGit2 className="size-4" /> Reference Projects
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                The engineering behind the delivery note.
              </h1>
            </div>
            <div className="lg:col-span-5 lg:pt-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Named case studies are published only once a client approves the details, so this
                page describes project types and the supply workflow rather than claiming outcomes
                we cannot evidence. Ask the sales desk for references relevant to your sector.
              </p>
              <div className="mt-8 flex items-center gap-6">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary hover:text-primary/80 transition-colors"
                >
                  Discuss your project <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </Content>
      </Section>

      {/* Case Studies - Structural Spec Grid */}
      <Section className="py-20">
        <Content>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {CASE_STUDIES.map((cs, i) => (
              <div key={cs.title} className="border-t border-border/80 pt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                  Client: {cs.client}
                </p>
                <h2 className="text-2xl font-bold text-foreground mb-2">{cs.title}</h2>
                <p className="text-sm text-muted-foreground mb-6">{cs.scope}</p>

                {/* Tabular Before/After Comparison */}
                <div className="grid sm:grid-cols-2 gap-px bg-border/60 border border-border/60">
                  <div className="bg-background p-5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-1.5">
                      <GitCommitHorizontal className="size-3" /> Initial State
                    </p>
                    <p className="text-sm leading-relaxed text-foreground/80">{cs.before}</p>
                  </div>
                  <div className="bg-primary/5 p-5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-3 flex items-center gap-1.5">
                      <CheckCircle2 className="size-3" /> Deployed Solution
                    </p>
                    <p className="text-sm leading-relaxed text-foreground/80">{cs.after}</p>
                  </div>
                </div>

                <div className="mt-6 border-l-2 border-primary pl-4">
                  <p className="text-sm font-semibold text-foreground">{cs.result}</p>
                </div>
              </div>
            ))}
          </div>
        </Content>
      </Section>

      {/* Project Types - Numbered Columns */}
      <Section className="py-20 bg-muted/20">
        <Content>
          <div className="mb-12">
            <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
              Standard Configurations
            </h2>
            <p className="mt-4 text-3xl font-bold text-foreground">
              Project types we supply every month
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {TYPES.map((item, i) => (
              <div key={item.title} className="border-t border-border/80 pt-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground max-w-[85%]">{item.title}</h3>
                  <span className="font-mono text-sm font-bold text-muted-foreground/50">
                    {String(i + 1).padStart(2, '0')} //
                  </span>
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-4">
                  {item.scope}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Content>
      </Section>

      {/* Workflow & Imagery Split */}
      <Section className="py-20">
        <Content>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Technical Flow List */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">
                Supply Protocol
              </h2>
              <h3 className="text-3xl font-bold text-foreground mb-10">
                Five stages, no surprises
              </h3>
              <div className="space-y-6">
                {FLOW.map((item, i) => (
                  <div key={item.step} className="flex gap-5 border-t border-border/60 pt-6">
                    <span className="font-mono text-lg font-bold text-primary shrink-0">
                      0{i + 1}.
                    </span>
                    <div>
                      <span className="block font-bold text-foreground mb-1">{item.step}</span>
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {item.body}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Structured Images */}
            <div className="grid gap-4 sm:gap-6">
              <div className="border border-border/80 p-2 bg-muted/10">
                <img
                  src={splicing}
                  alt="Fibre splicing work on a project route"
                  width={1408}
                  height={1008}
                  loading="lazy"
                  className="w-full aspect-[16/9] object-cover bg-muted grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="border border-border/80 p-2 bg-muted/10">
                <img
                  src={rack}
                  alt="Completed rack installation"
                  width={1408}
                  height={1008}
                  loading="lazy"
                  className="w-full aspect-[16/9] object-cover bg-muted grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </Content>
      </Section>

      <FaqBlock items={PAGE_FAQS} title="Questions about project supply" />

      <CtaBand
        title="Ready to specify your build?"
        body="Send us your drawing, BOM, or site description for a verified technical review and quotation."
      />
    </>
  );
}