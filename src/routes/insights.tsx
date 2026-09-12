import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, ArrowRight, FileText } from "lucide-react";
import { FaqList } from "@/components/site/Faq";
import { ARTICLES } from "@/lib/articles";
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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://fluid-shine-flow.lovable.app/insights" }],
  }),
  component: Insights,
});

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
            {ARTICLES.map((a) => (
              <article key={a.slug} className="border-t border-border/80 pt-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    {a.category}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{a.read}</span>
                </div>
                <h2 className="text-xl font-bold text-foreground mb-4">{a.title}</h2>
                <div className="border-l-2 border-primary pl-4 mb-4 bg-primary/5 py-3 pr-3">
                  <p className="text-sm font-medium leading-relaxed text-foreground">
                    {a.answer}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{a.intro}</p>
                <Link to="/insights/$slug" params={{ slug: a.slug }} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-foreground">
                  Read article <ArrowRight className="size-4" />
                </Link>
              </article>
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