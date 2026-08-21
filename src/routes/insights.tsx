import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, ArrowRight, FileText } from "lucide-react";
import { FaqList } from "@/components/site/Faq";
import {
  CtaBand,
  Jsonld,
  Section,
  Content,
} from "@/components/site/primitives";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Fibre and Networking Insights for Kenya | ECA Networks" },
      {
        name: "description",
        content:
          "Practical guidance on choosing ADSS span ratings, sizing PoE budgets, planning CAT6 runs, calculating NVR storage and avoiding the specification mistakes that cost site visits.",
      },
      { property: "og:title", content: "Fibre and Networking Insights | ECA Networks" },
      {
        property: "og:description",
        content:
          "Short technical explainers written for installers and procurement teams working on Kenyan network infrastructure.",
      },
    ],
  }),
  component: Insights,
});

const ARTICLES = [
  {
    title: "Choosing an ADSS span rating without guessing",
    read: "4 min read",
    answer:
      "Measure the longest pole to pole distance on the route, then specify the next rating above it. A 100 metre span cable on a 120 metre gap sags into traffic and fails in the first storm season.",
    body: "Wind loading and ice are not the problem in most of Kenya, but temperature cycling and vegetation are. Add clearance for future growth along the route and specify the fittings to match the rating rather than mixing hardware grades.",
  },
  {
    title: "Sizing a PoE budget so cameras do not brown out",
    read: "3 min read",
    answer:
      "Add the wattage of every powered device, add roughly twenty percent headroom, then choose a switch whose total PoE budget exceeds that figure. Port count alone tells you nothing about power.",
    body: "A sixteen port switch with a 120 watt budget cannot run sixteen pan tilt zoom cameras. Check whether devices need 802.3af, 802.3at or 802.3bt, and remember heaters and illuminators draw power at night when nobody is watching the graph.",
  },
  {
    title: "Why the 90 metre rule decides your cabinet positions",
    read: "3 min read",
    answer:
      "Horizontal copper runs stop at 90 metres of permanent link, with 10 metres left for patch cords. Cabinet placement follows that limit, not the tidiest cupboard on the floor plan.",
    body: "Where a building is longer than the rule allows, link cabinets with fibre and keep copper local. Certification results should be recorded per outlet so a future fault is a lookup rather than an investigation.",
  },
  {
    title: "Calculating recorder storage before buying disks",
    read: "4 min read",
    answer:
      "Multiply the stream bitrate by the number of cameras, by the hours recorded daily, by the retention days. Convert to terabytes and add a margin for motion spikes and firmware overhead.",
    body: "Two identical camera counts can differ fourfold in storage because of resolution, frame rate and codec. Decide the retention policy first, since thirty days changes the array while seven days often fits a single drive.",
  },
  {
    title: "Single mode or multimode for a campus backbone",
    read: "3 min read",
    answer:
      "Single mode for anything leaving a building or likely to be upgraded. Multimode only for short, fixed runs inside one structure where the optics are already on hand.",
    body: "Single mode optics have narrowed in price and the cable is not the expensive part of the job. Trenching twice because the backbone could not carry a future upgrade is the expensive part.",
  },
  {
    title: "Consumables that stall installations",
    read: "2 min read",
    answer:
      "Splice protection sleeves, cleaning tools, cable ties, labels, patch cords in the right length and spare connectors. Every one of them is cheap and every one of them stops a crew.",
    body: "Build the consumable list at the same time as the hardware list. A team idle for a day waiting on sleeves costs more than a full box of them.",
  },
];

const CATEGORIES = [
  {
    name: "Technical guides",
    body: "Span ratings, power budgets, storage maths and the standards that decide a layout.",
  },
  {
    name: "Procurement guides",
    body: "Building a defensible bill of materials, comparing grades and writing a tender line item.",
  },
  {
    name: "Company news",
    body: "Branch updates, new stock lines and brand partnerships as they land at the counters.",
  },
  {
    name: "Industry updates",
    body: "Kenyan fibre rollouts, licensing shifts and hardware supply changes worth planning around.",
  },
] as const;

const ARTICLE_CATEGORY = [
  "Technical guides",
  "Technical guides",
  "Technical guides",
  "Technical guides",
  "Procurement guides",
  "Procurement guides",
] as const;

const FAQS = [
  {
    q: "How often is new technical content published?",
    a: "New explainers are added as questions repeat at the technical desk, which works out to a short piece every few weeks rather than daily filler.",
  },
  {
    q: "Can ECA Networks answer a question that is not covered here?",
    a: "Yes. Send the site details to the technical desk and the answer usually arrives the same working day, and often becomes the next article.",
  },
];

function Insights() {
  return (
    <>
      <Jsonld
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "ECA Networks Insights",
          description:
            "Practical fibre, networking and surveillance guidance for installers and procurement teams in Kenya.",
          blogPost: ARTICLES.map((a) => ({
            "@type": "BlogPosting",
            headline: a.title,
            description: a.answer,
            author: { "@type": "Organization", name: "ECA Networks Ltd" },
          })),
        }}
      />

      {/* High-End Editorial Hero Layout */}
      <Section className="pt-20 sm:pt-32 pb-16 border-b border-border/80">
        <Content>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">
            <div className="lg:col-span-7">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2">
                <BookOpen className="size-4" /> Engineering Notes & FAQs
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                Short answers to the questions that cost site visits.
              </h1>
            </div>
            <div className="lg:col-span-5 lg:pt-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Each piece opens with the answer, then explains the reasoning. Written for people who
                are ordering material this week, not for a search engine.
              </p>
              <div className="mt-8 flex items-center gap-6">
                <Link
                  to="/tools"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary hover:text-primary/80 transition-colors"
                >
                  Try the calculators <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </Content>
      </Section>

      {/* Categories Grid */}
      <Section className="py-20 bg-muted/20">
        <Content>
          <div className="mb-12">
            <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
              Content Classifications
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {CATEGORIES.map((c, i) => (
              <div key={c.name} className="border-t border-border/80 pt-6">
                <span className="font-mono text-xs font-bold text-muted-foreground/50 mb-3 block">
                  CAT // 0{i + 1}
                </span>
                <h3 className="text-base font-bold text-foreground mb-2">{c.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </Content>
      </Section>

      {/* Technical Articles Grid */}
      <Section className="py-20">
        <Content>
          <div className="mb-12">
            <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
              Recent Explanations
            </h2>
            <p className="mt-2 text-3xl font-bold text-foreground">
              Field-tested technical briefs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-x-12 gap-y-16">
            {ARTICLES.map((a, i) => (
              <div key={a.title} className="border-t border-border/80 pt-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    {ARTICLE_CATEGORY[i] ?? "Technical guides"}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{a.read}</span>
                </div>
                <h2 className="text-xl font-bold text-foreground mb-4">{a.title}</h2>
                <div className="border-l-2 border-primary pl-4 mb-4 bg-primary/5 py-3 pr-3">
                  <p className="text-sm font-medium leading-relaxed text-foreground">
                    {a.answer}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {a.body}
                </p>
              </div>
            ))}
          </div>
        </Content>
      </Section>

      {/* FAQ Section */}
      <Section className="py-20 bg-muted/20 border-t border-border/80">
        <Content>
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 border-t border-border/80 pt-6">
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-1.5 mb-3">
                <FileText className="size-4" /> Reference Desk
              </span>
              <h2 className="text-2xl font-bold text-foreground">About this section</h2>
            </div>
            <div className="lg:col-span-8 border-t border-border/80 pt-6">
              <FaqList items={FAQS} />
            </div>
          </div>
        </Content>
      </Section>

      <CtaBand
        title="Have a technical question not covered here?"
        body="Send your site details or specification requirements directly to our technical desk for a same-day answer."
      />
    </>
  );
}