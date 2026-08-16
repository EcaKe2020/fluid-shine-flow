import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  Calculator,
  Cable,
  Clock,
  Headphones,
  MapPin,
  Phone,
  Truck,
  Users,
  Wrench,
  ShieldCheck,
  Building2,
  GraduationCap,
  Landmark,
  Server,
} from "lucide-react";
import { BRANDS, COMPANY, FAQS, INDUSTRIES, LOCATIONS, SOLUTIONS } from "@/lib/eca";
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
} from "@/components/site/primitives";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ECA Networks | Fibre Optic and Networking Supplier in Kenya" },
      {
        name: "description",
        content:
          "Nairobi and Eldoret supplier of fibre optic cable, ADSS, structured cabling, MikroTik and PoE networking, CCTV and PABX. Trade pricing, local warranty, delivery to all 47 counties.",
      },
      { property: "og:title", content: "ECA Networks | Fibre and Networking Infrastructure, Kenya" },
      {
        property: "og:description",
        content:
          "Fibre, cabling, networking, CCTV and PABX equipment stocked in Nairobi and Eldoret, shipped nationwide. Request a quote or shop the online store.",
      },
    ],
  }),
  component: Home,
});

const REASONS = [
  {
    icon: Boxes,
    title: "Stock that is actually on the shelf",
    body: "Reels, connectors, switches and consumables held in Nairobi and Eldoret, so a rollout is not waiting three weeks on a shipment.",
  },
  {
    icon: Headphones,
    title: "A technical desk, not a call centre",
    body: "Engineers read your drawing, question the odd line and correct the quantities before the invoice goes out.",
  },
  {
    icon: BadgeCheck,
    title: "Warranty handled in Kenya",
    body: "Faulty units are assessed locally under supported brand terms instead of being freighted back overseas by the buyer.",
  },
  {
    icon: Truck,
    title: "Nationwide dispatch",
    body: "Courier partners reach all 47 counties, with reel and cabinet freight quoted up front so budgets hold.",
  },
];

const INDUSTRY_ICONS = [Server, Wrench, Building2, GraduationCap, Landmark, Users];

const SOLUTION_ICONS = [Cable, Wrench, Server, ShieldCheck];

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

      {/* WHAT WE SUPPLY */}
      <Section className="pt-24">
        <Reveal>
          <Eyebrow>What we supply</Eyebrow>
          <Heading>Four supply lines, one delivery note</Heading>
          <Lead className="mt-4">
            Most projects touch more than one of these. Buying them from one counter keeps compatibility, warranty and
            paperwork in a single place.
          </Lead>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {SOLUTIONS.map((solution, i) => {
            const Icon = SOLUTION_ICONS[i] ?? Cable;
            return (
              <Reveal key={solution.slug} delay={i * 80}>
                <div className="sheen group h-full p-6 transition-transform duration-300 hover:-translate-y-1">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary/12 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-foreground">{solution.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{solution.blurb}</p>
                  <Link
                    to="/solutions/$slug"
                    params={{ slug: solution.slug }}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                  >
                    Learn more
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <QuoteButton label="Request a project quote" />
            <ShopButton label="Buy stocked items online" medium="supply-section" />
          </div>
        </Reveal>
      </Section>

      {/* THE LOCAL ADVANTAGE */}
      <Section>
        <Reveal>
          <Eyebrow>The local advantage</Eyebrow>
          <Heading>Why buyers keep coming back to the counter</Heading>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {REASONS.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 80}>
              <div className="sheen flex h-full gap-5 p-6">
                <span className="text-3xl font-black tabular-nums text-primary/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <reason.icon className="size-5 text-ember" />
                  <h3 className="mt-3 text-base font-bold text-foreground">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* WHO WE SERVE */}
      <Section>
        <Reveal>
          <Eyebrow>Who we serve</Eyebrow>
          <Heading>Built around how each buyer actually orders</Heading>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((item, i) => {
            const Icon = INDUSTRY_ICONS[i] ?? Users;
            return (
              <Reveal key={item.title} delay={i * 70}>
                <div className="sheen h-full p-6">
                  <Icon className="size-6 text-primary" />
                  <h3 className="mt-4 text-base font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal>
          <Link to="/industries" className="mt-8 inline-flex text-sm font-semibold text-primary hover:underline">
            See the full industry breakdown
          </Link>
        </Reveal>
      </Section>

      {/* LOCATIONS */}
      <Section>
        <Reveal>
          <Eyebrow>Where to find us</Eyebrow>
          <Heading>Two counters, one stock position</Heading>
          <Lead className="mt-4">
            Walk in with a list in Nairobi or Eldoret. Whatever is not on that shelf is transferred between branches
            rather than reordered from scratch.
          </Lead>
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {LOCATIONS.map((loc, i) => (
            <Reveal key={loc.city} delay={i * 90}>
              <div className="sheen h-full p-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-ember">{loc.label}</p>
                <h3 className="mt-2 text-2xl font-bold text-foreground">{loc.city}</h3>
                <dl className="mt-5 space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                    <dd className="text-muted-foreground">{loc.address}</dd>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                    <dd>
                      <a href={loc.phoneHref} className="font-semibold text-foreground hover:text-primary">
                        {loc.phone}
                      </a>
                    </dd>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
                    <dd className="text-muted-foreground">{loc.hours}</dd>
                  </div>
                </dl>
                <a
                  href={loc.maps}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  Open in maps
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* INTERACTIVE TOOLS */}
      <Section>
        <Reveal>
          <Eyebrow>Interactive tools</Eyebrow>
          <Heading>Cost the job before you call anyone</Heading>
          <Lead className="mt-4">
            Two calculators built from the questions the sales desk answers every week.
          </Lead>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {TOOLS.map((tool, i) => (
            <Reveal key={tool.title} delay={i * 80}>
              <div className="sheen h-full p-7">
                <Calculator className="size-6 text-primary" />
                <h3 className="mt-4 text-lg font-bold text-foreground">{tool.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tool.desc}</p>
                <Link
                  to={tool.to}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                >
                  Open calculator
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <Reveal>
          <Eyebrow>Straight answers</Eyebrow>
          <Heading>Questions buyers ask before they order</Heading>
          <Lead className="mt-4">Short answers first, then the detail an engineer needs.</Lead>
        </Reveal>
        <div className="mt-10">
          <FaqList items={FAQS} />
        </div>
      </Section>

      {/* CLOSING CTA */}
      <Section>
        <Reveal>
          <div className="sheen max-w-3xl p-8 sm:p-12">
            <Heading>Tell us what the site needs and the list comes back priced</Heading>
            <Lead className="mt-4">
              Send a drawing, a rough part list or a site photograph. The technical desk checks the specification,
              confirms stock and returns a quotation you can hand to procurement.
            </Lead>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <QuoteButton />
              <ShopButton medium="home-closing" />
              <WhatsAppButton />
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
