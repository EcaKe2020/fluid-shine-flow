import { createFileRoute, Link } from "@tanstack/react-router";
import { FaqList } from "@/components/site/Faq";
import {
  CtaBand,
  Eyebrow,
  Heading,
  Jsonld,
  Lead,
  Panel,
  Reveal,
  Section,
  ShopButton,
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
    read: "4 minute read",
    answer:
      "Measure the longest pole to pole distance on the route, then specify the next rating above it. A 100 metre span cable on a 120 metre gap sags into traffic and fails in the first storm season.",
    body: "Wind loading and ice are not the problem in most of Kenya, but temperature cycling and vegetation are. Add clearance for future growth along the route and specify the fittings to match the rating rather than mixing hardware grades.",
  },
  {
    title: "Sizing a PoE budget so cameras do not brown out",
    read: "3 minute read",
    answer:
      "Add the wattage of every powered device, add roughly twenty percent headroom, then choose a switch whose total PoE budget exceeds that figure. Port count alone tells you nothing about power.",
    body: "A sixteen port switch with a 120 watt budget cannot run sixteen pan tilt zoom cameras. Check whether devices need 802.3af, 802.3at or 802.3bt, and remember heaters and illuminators draw power at night when nobody is watching the graph.",
  },
  {
    title: "Why the 90 metre rule decides your cabinet positions",
    read: "3 minute read",
    answer:
      "Horizontal copper runs stop at 90 metres of permanent link, with 10 metres left for patch cords. Cabinet placement follows that limit, not the tidiest cupboard on the floor plan.",
    body: "Where a building is longer than the rule allows, link cabinets with fibre and keep copper local. Certification results should be recorded per outlet so a future fault is a lookup rather than an investigation.",
  },
  {
    title: "Calculating recorder storage before buying disks",
    read: "4 minute read",
    answer:
      "Multiply the stream bitrate by the number of cameras, by the hours recorded daily, by the retention days. Convert to terabytes and add a margin for motion spikes and firmware overhead.",
    body: "Two identical camera counts can differ fourfold in storage because of resolution, frame rate and codec. Decide the retention policy first, since thirty days changes the array while seven days often fits a single drive.",
  },
  {
    title: "Single mode or multimode for a campus backbone",
    read: "3 minute read",
    answer:
      "Single mode for anything leaving a building or likely to be upgraded. Multimode only for short, fixed runs inside one structure where the optics are already on hand.",
    body: "Single mode optics have narrowed in price and the cable is not the expensive part of the job. Trenching twice because the backbone could not carry a future upgrade is the expensive part.",
  },
  {
    title: "Consumables that stall installations",
    read: "2 minute read",
    answer:
      "Splice protection sleeves, cleaning tools, cable ties, labels, patch cords in the right length and spare connectors. Every one of them is cheap and every one of them stops a crew.",
    body: "Build the consumable list at the same time as the hardware list. A team idle for a day waiting on sleeves costs more than a full box of them.",
  },
];

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

      <Section className="pt-10 sm:pt-16">
        <div className="rise">
          <Eyebrow>Insights</Eyebrow>
          <Heading as="h1">
            Short answers to the questions that <span className="ink-text">cost site visits</span>
          </Heading>
          <Lead className="mt-5">
            Each piece opens with the answer, then explains the reasoning. Written for people who are ordering material
            this week, not for a search engine.
          </Lead>
          <div className="mt-8 flex flex-wrap gap-3">
            <ShopButton label="Browse the store" />
            <Link
              to="/tools"
              className="inline-flex items-center rounded-full border border-primary/25 px-5 py-2.5 text-sm font-semibold transition hover:bg-primary/10"
            >
              Try the calculators
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {ARTICLES.map((a, i) => (
            <Reveal key={a.title} delay={i * 70}>
              <Panel className="h-full">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ember">{a.read}</p>
                <h2 className="mt-3 text-xl font-semibold">{a.title}</h2>
                <p className="mt-3 rounded-2xl bg-primary/8 p-4 text-sm font-medium leading-relaxed">{a.answer}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <Reveal>
          <Eyebrow>Answers</Eyebrow>
          <Heading>About this section</Heading>
        </Reveal>
        <div className="mt-8">
          <FaqList items={FAQS} />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
