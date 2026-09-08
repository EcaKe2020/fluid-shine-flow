import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BadgeCheck,
  Calculator,
  Check,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";
import counter from "@/assets/counter.jpg";
import { BRANDS, CASE_STUDIES, COMPANY, FAQS, INDUSTRIES, LOCATIONS, SOLUTIONS } from "@/lib/eca";

import { FaqList } from "@/components/site/Faq";
import { Hero } from "@/components/site/Hero";
import {
  Eyebrow,
  Heading,
  Jsonld,
  Lead,
  QuoteButton,
  Reveal,
  Section,
  ShopButton,
  WhatsAppButton,
  CardContentWrapper,
  CtaBanner,
} from "@/components/site/primitives";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Networking Equipment & Fibre Optics Nairobi | ECA Networks" },
      {
        name: "description",
        content:
          "Buy fibre optic cable, MikroTik, Ubiquiti, TP-Link, CCTV and structured cabling in Nairobi. Genuine stock, local warranty, same day Nairobi delivery, courier to all 47 counties.",
      },
      {
        property: "og:title",
        content: "Networking Equipment & Fibre Optics Nairobi | ECA Networks",
      },
      {
        property: "og:description",
        content:
          "Genuine fibre, MikroTik, Ubiquiti, CCTV and cabling stock in Nairobi and Eldoret. Same day Nairobi delivery and courier to all 47 counties.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://fluid-shine-flow.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://fluid-shine-flow.lovable.app/" }],
  }),
  component: Home,
});

const TRUST = [
  {
    icon: BadgeCheck,
    title: "Brands we stock",
    body: "MikroTik, Ubiquiti, TP-Link, Hikvision, Dahua, HSGQ, Yealink and Starlink hardware held on the shelf.",
  },
  {
    icon: Truck,
    title: "Nairobi same day",
    body: "Orders confirmed before 2pm leave the same working day. Courier delivery reaches all 47 counties.",
  },
  {
    icon: ShieldCheck,
    title: "Genuine product promise",
    body: "Every unit comes from the brand supply chain, with warranty assessed in Nairobi rather than shipped abroad.",
  },
  {
    icon: Wrench,
    title: "Technical support",
    body: "Engineers check span ratings, PoE budgets and part numbers before the quotation is issued.",
  },
];


const REASONS = [
  {
    title: "Stock that is actually on the shelf",
    body: "Reels, connectors, switches and consumables held in Nairobi and Eldoret, so a rollout is not waiting three weeks on a shipment.",
  },
  {
    title: "A technical desk, not a call centre",
    body: "Engineers read your drawing, question the odd line and correct the quantities before the invoice goes out.",
  },
  {
    title: "Warranty handled in Kenya",
    body: "Faulty units are assessed locally under supported brand terms instead of being freighted back overseas by the buyer.",
  },
  {
    title: "Nationwide dispatch",
    body: "Courier partners reach all 47 counties, with reel and cabinet freight quoted up front so budgets hold.",
  },
];

const TOOLS = [
  {
    title: "Project bill of materials",
    desc: "Turn outlet counts into a rough BOM with waste allowance already folded in.",
    to: "/tools" as const,
  },
  {
    title: "Fibre cable selector",
    desc: "Answer four questions and get the right cable family for the route you are building.",
    to: "/tools" as const,
  },
];

function Home() {
  return (
    <>
      <Jsonld
        data={{
          "@context": "https://schema.org",
          "@type": ["Organization", "LocalBusiness"],
          name: COMPANY.name,
          alternateName: "ECA Networks",
          description:
            "Supplier of fibre optic, structured cabling, networking, CCTV and PABX infrastructure with counters in Nairobi and Eldoret, Kenya.",
          telephone: COMPANY.phone,
          email: COMPANY.email,
          address: LOCATIONS.map((l) => ({
            "@type": "PostalAddress",
            streetAddress: l.address,
            addressLocality: l.city,
            addressCountry: "KE",
          })),
          areaServed: { "@type": "Country", name: "Kenya" },
          openingHours: "Mo-Fr 08:00-17:00",
          foundingDate: String(COMPANY.founded),
          priceRange: "KSh",
          brand: BRANDS.map((b) => ({ "@type": "Brand", name: b })),
          sameAs: ["https://ecanetworks.com"],
        }}
      />

      {/* HERO */}
      <Hero />

      {/* DIRECT ANSWER + TRUST ROW */}
      <Section className="pt-16 sm:pt-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow center>Where to buy networking equipment in Kenya</Eyebrow>
          <Heading center as="h2" className="mt-4">
            Genuine fibre and networking gear, stocked in Nairobi and Eldoret
          </Heading>
          <Lead center className="mt-5">
            ECA Networks supplies fibre optic cable, MikroTik and Ubiquiti networking, structured
            cabling, CCTV and PABX equipment from counters in Nairobi and Eldoret. Order before 2pm
            and Nairobi deliveries go out the same working day, with courier dispatch to all 47
            counties.
          </Lead>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="sheen flex h-full items-start gap-4 p-6">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon className="size-5" strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* WHAT WE SUPPLY */}
      <Section className="pt-20 sm:pt-28">
        <Reveal className="flex flex-col items-center text-center">
          <Eyebrow center>What we supply</Eyebrow>
          <Heading center className="mt-4 max-w-3xl">
            Four supply lines, one delivery note
          </Heading>
          <Lead center className="mt-5 max-w-2xl">
            Most projects touch more than one of these. Buying them from one counter keeps
            compatibility, warranty and paperwork in a single place.
          </Lead>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {SOLUTIONS.map((solution, i) => (
            <Reveal key={solution.slug} delay={i * 80}>
              <div className="sheen group flex h-full flex-col p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <span className="text-sm font-black tabular-nums tracking-widest text-ember">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground">
                  {solution.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {solution.blurb}
                </p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {solution.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2.2} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/solutions/$slug"
                  params={{ slug: solution.slug }}
                  className="mt-7 inline-flex w-fit items-center gap-1.5 text-sm font-bold text-primary transition-colors hover:text-foreground"
                >
                  View {solution.title.toLowerCase()}
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <CtaBanner className="mt-14">
            <div className="flex flex-wrap items-center justify-center gap-4 py-4">
              <QuoteButton label="Request a project quote" />
              <ShopButton label="Buy stocked items online" medium="supply-section" />
              <WhatsAppButton />
            </div>
          </CtaBanner>
        </Reveal>
      </Section>

      {/* WHO WE ARE, TWO COLUMN */}
      <Section className="pt-20 sm:pt-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <img
              src={counter}
              alt="ECA Networks trade counter in Nairobi with fibre reels and switches on the shelf"
              width={1200}
              height={900}
              loading="lazy"
              className="w-full rounded-2xl object-cover shadow-sm"
            />
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>Who you are buying from</Eyebrow>
            <Heading as="h2" className="mt-4">
              A counter run by engineers, not a catalogue
            </Heading>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              ECA Networks opened in 2020 and now supplies ISPs, contractors, integrators, schools
              and county projects. Stock sits in Nairobi and Eldoret, so a corrected bill of
              materials can be packed the same day it is approved.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Brands stocked include MikroTik, Ubiquiti, TP-Link, Hikvision, Dahua and HSGQ",
                "Warranty claims assessed in Nairobi under the supported brand terms",
                "Quotations carry the company registration and KRA PIN procurement needs",
                "Technical desk replies within two business hours",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm text-foreground/85">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2.2} />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-colors hover:text-foreground"
            >
              More about ECA Networks
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* THE LOCAL ADVANTAGE */}
      <Section className="bg-muted/20 py-20 sm:py-28">
        <Reveal className="flex flex-col items-center text-center">
          <Eyebrow center>The local advantage</Eyebrow>
          <Heading center className="mt-4 max-w-3xl">
            Why buyers keep coming back to the counter
          </Heading>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 80}>
              <div className="sheen relative flex h-full flex-col overflow-hidden p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <span className="absolute -right-4 -top-6 select-none text-[120px] font-black tabular-nums leading-none text-primary/5">
                  {i + 1}
                </span>
                <div className="relative z-10 flex flex-col">
                  <h3 className="text-lg font-bold leading-tight text-foreground">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{reason.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* WHO WE SERVE */}
      <Section className="pt-20 sm:pt-28">
        <Reveal className="flex flex-col items-center text-center">
          <Eyebrow center>Who we serve</Eyebrow>
          <Heading center className="mt-4 max-w-3xl">
            Built around how each buyer actually orders
          </Heading>
        </Reveal>
        
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((item, i) => {
            return (
              <Reveal key={item.title} delay={i * 70}>
                <CardContentWrapper>
                  <div className="sheen flex h-full flex-col p-8">
                    <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </CardContentWrapper>
              </Reveal>
            );
          })}
        </div>
        
        <Reveal>
          <div className="mt-10 text-center">
            <Link
              to="/industries"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-colors hover:text-foreground"
            >
              See the full industry breakdown
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* PROOF */}
      <Section className="bg-muted/20 py-20 sm:py-28">
        <Reveal className="flex flex-col items-center text-center">
          <Eyebrow center>Proof of work</Eyebrow>
          <Heading center className="mt-4 max-w-3xl">
            Jobs that shipped, with the before and after
          </Heading>
          <Lead center className="mt-5 max-w-2xl">
            Published with client approval. Each one started as a drawing or a photograph sent to
            the technical desk.
          </Lead>
        </Reveal>
        
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {CASE_STUDIES.map((cs, i) => (
            <Reveal key={cs.title} delay={i * 80}>
              <article className="sheen flex h-full flex-col p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 text-center">
                  <span className="inline-block rounded-full bg-ember/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-ember">
                    {cs.client}
                  </span>
                  <h3 className="mt-4 text-xl font-bold tracking-tight text-foreground">
                    {cs.title}
                  </h3>
                </div>
                
                {/* Visual Before/After block */}
                <dl className="mt-2 mb-6 space-y-4 rounded-xl bg-muted/50 p-5 text-sm">
                  <div>
                    <dt className="mb-1 text-xs font-bold uppercase text-foreground/70">Before</dt>
                    <dd className="leading-relaxed text-muted-foreground">{cs.before}</dd>
                  </div>
                  <div className="h-px w-full bg-border/50" />
                  <div>
                    <dt className="mb-1 text-xs font-bold uppercase text-primary">After</dt>
                    <dd className="leading-relaxed text-muted-foreground">{cs.after}</dd>
                  </div>
                </dl>
                
                <p className="mt-auto text-center text-sm font-bold text-foreground">
                  <span className="text-primary">Result:</span> {cs.result}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        
        <Reveal>
          <div className="mt-10 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-colors hover:text-foreground"
            >
              Read the full case studies
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* LOCATIONS */}
      <Section className="pt-20 sm:pt-28">
        <Reveal className="flex flex-col items-center text-center">
          <Eyebrow center>Where to find us</Eyebrow>
          <Heading center className="mt-4 max-w-3xl">
            Two counters, one stock position
          </Heading>
          <Lead center className="mt-5 max-w-2xl">
            Walk in with a list in Nairobi or Eldoret. Whatever is not on that shelf is transferred
            between branches rather than reordered from scratch.
          </Lead>
        </Reveal>
        
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {LOCATIONS.map((loc, i) => (
            <Reveal key={loc.city} delay={i * 90}>
              <div className="sheen flex h-full flex-col items-center p-10 text-center transition-all duration-300 hover:shadow-md">
                <span className="rounded-md bg-ember/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-ember">
                  {loc.label}
                </span>
                <h3 className="mt-5 text-3xl font-black tracking-tight text-foreground">
                  {loc.city}
                </h3>
                
                <dl className="mt-8 flex flex-col gap-4 text-sm">
                  <div className="flex items-start justify-center gap-3">
                    <MapPin className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.5} />
                    <dd className="max-w-[200px] text-muted-foreground">{loc.address}</dd>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Phone className="size-5 shrink-0 text-primary" strokeWidth={1.5} />
                    <dd>
                      <a
                        href={loc.phoneHref}
                        className="font-bold text-foreground transition-colors hover:text-primary"
                      >
                        {loc.phone}
                      </a>
                    </dd>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Clock className="size-5 shrink-0 text-primary" strokeWidth={1.5} />
                    <dd className="text-muted-foreground">{loc.hours}</dd>
                  </div>
                </dl>
                
                <a
                  href={loc.maps}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-10 inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-colors hover:text-foreground"
                >
                  Open in Google Maps
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* INTERACTIVE TOOLS */}
      <Section className="pt-20 sm:pt-28">
        <Reveal className="flex flex-col items-center text-center">
          <Eyebrow center>Interactive tools</Eyebrow>
          <Heading center className="mt-4 max-w-3xl">
            Cost the job before you call anyone
          </Heading>
          <Lead center className="mt-5 max-w-xl">
            Two calculators built from the questions the sales desk answers every week.
          </Lead>
        </Reveal>
        
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {TOOLS.map((tool, i) => (
            <Reveal key={tool.title} delay={i * 80}>
              <div className="sheen flex h-full flex-col items-center p-10 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="mb-6 flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Calculator className="size-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-foreground">
                  {tool.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {tool.desc}
                </p>
                <Link
                  to={tool.to}
                  className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-5 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Open calculator
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="pt-20 sm:pt-28">
        <Reveal className="flex flex-col items-center text-center">
          <Eyebrow center>Straight answers</Eyebrow>
          <Heading center className="mt-4 max-w-3xl">
            Questions buyers ask before they order
          </Heading>
          <Lead center className="mt-5 max-w-xl">
            Short answers first, then the detail an engineer needs.
          </Lead>
        </Reveal>
        
        <div className="mx-auto mt-12 w-full max-w-3xl">
          <FaqList items={FAQS} />
        </div>
      </Section>

      {/* CLOSING CTA */}
      <Section className="py-20 sm:py-28">
        <Reveal>
          <div className="gloss relative overflow-hidden rounded-[2.5rem] border border-border/50 bg-muted/30 p-10 shadow-sm sm:p-16 text-center">
            <div className="relative z-10 flex flex-col items-center">
              <Heading center className="max-w-3xl">
                Tell us what the site needs and the list comes back priced
              </Heading>
              <Lead center className="mt-6 max-w-2xl text-muted-foreground">
                Send a drawing, a rough part list or a site photograph. The technical desk checks the
                specification, confirms stock and returns a quotation you can hand to procurement.
              </Lead>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <QuoteButton />
                <ShopButton medium="home-closing" />
                <WhatsAppButton />
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}