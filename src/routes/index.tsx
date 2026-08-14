import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  Calculator,
  Headphones,
  MapPin,
  Truck,
} from "lucide-react";
import splicing from "@/assets/splicing.jpg";
import rack from "@/assets/rack.jpg";
import warehouse from "@/assets/warehouse.jpg";
import { BRANDS, COMPANY, FAQS, INDUSTRIES, SOLUTIONS } from "@/lib/eca";
import { FaqList } from "@/components/site/Faq";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import {
  CountUp,
  CtaBand,
  Eyebrow,
  Heading,
  Jsonld,
  Lead,
  Panel,
  QuoteButton,
  Reveal,
  Section,
  ShopButton,
  WhatsAppButton,
} from "@/components/site/primitives";

const HERO_STATS = [
  { value: 10000, suffix: "+", label: "customers served" },
  { value: 5000, suffix: "+", label: "products stocked" },
  { value: 50, suffix: "+", label: "supported brands" },
  { value: 47, suffix: "", label: "counties reached" },
] as const;

const SOLUTION_IMAGES: Record<string, string> = {
  "fibre-optic": splicing,
  "structured-cabling": rack,
  "networking-isp": warehouse,
  "security-communications": rack,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ECA Networks | Fibre Optic and Networking Supplier in Kenya" },
      {
        name: "description",
        content:
          "Nairobi based supplier of fibre optic cable, ADSS, structured cabling, MikroTik and PoE networking, CCTV and PABX. Trade pricing, local warranty, delivery to all 47 counties.",
      },
      { property: "og:title", content: "ECA Networks | Fibre and Networking Infrastructure, Kenya" },
      {
        property: "og:description",
        content:
          "Fibre, cabling, networking, CCTV and PABX equipment stocked in Embakasi, Nairobi and shipped nationwide. Request a quote or shop the online store.",
      },
    ],
  }),
  component: Home,
});

const REASONS = [
  {
    icon: Boxes,
    title: "Stock that is actually on the shelf",
    body: "Reels, connectors, switches and consumables held in Embakasi, so a rollout is not waiting three weeks on a shipment.",
  },
  {
    icon: Headphones,
    title: "A technical desk, not a call centre",
    body: "Engineers read your drawing, question the odd line and correct the quantities before the invoice goes out.",
  },
  {
    icon: BadgeCheck,
    title: "Warranty handled in Nairobi",
    body: "Faulty units are assessed locally under supported brand terms instead of being freighted back overseas by the buyer.",
  },
  {
    icon: Truck,
    title: "Nationwide dispatch",
    body: "Courier partners reach all 47 counties, with reel and cabinet freight quoted up front so budgets hold.",
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
            "Supplier of fibre optic, structured cabling, networking, CCTV and PABX infrastructure based in Nairobi, Kenya.",
          telephone: COMPANY.phone,
          email: COMPANY.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: "21, Amee Properties, Embakasi",
            addressLocality: "Nairobi",
            addressCountry: "KE",
          },
          areaServed: { "@type": "Country", name: "Kenya" },
          openingHours: "Mo-Fr 08:00-17:00",
          foundingDate: String(COMPANY.founded),
          priceRange: "KSh",
          brand: BRANDS.map((b) => ({ "@type": "Brand", name: b })),
          sameAs: ["https://ecanetworks.com"],
        }}
      />

      <HeroCarousel />

      {/* Stats band */}
      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="gloss -mt-10 relative z-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl sm:grid-cols-4">
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="bg-card/60 p-6 text-center backdrop-blur-xl">
              <span className="block text-3xl font-extrabold tracking-tight text-primary">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-xs text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Brand strip */}
      <div className="mx-auto w-full max-w-6xl px-5 py-8">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 py-4">
          <span className="text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
            Brands stocked and supported
          </span>
          {BRANDS.map((brand) => (
            <span key={brand} className="text-sm font-semibold tracking-tight text-foreground/55">
              {brand}
            </span>
          ))}
        </div>
      </div>

      {/* Solutions with imagery */}
      <Section id="solutions" className="pt-0">
        <Reveal>
          <Eyebrow>What we supply</Eyebrow>
          <Heading>Four supply lines, one delivery note</Heading>
          <Lead className="mt-4">
            Most projects touch more than one of these. Buying them from one counter keeps compatibility, warranty and
            paperwork in a single place.
          </Lead>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {SOLUTIONS.map((solution, i) => (
            <Reveal key={solution.slug} delay={i * 90}>
              <Link to="/solutions/$slug" params={{ slug: solution.slug }} className="block h-full">
                <Panel className="group h-full overflow-hidden p-0">
                  <div className="relative aspect-[16/8] overflow-hidden">
                    <img
                      src={SOLUTION_IMAGES[solution.slug]}
                      alt={solution.title}
                      loading="lazy"
                      className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                    <div className="absolute right-4 top-4">
                      <span className="gloss grid size-9 place-items-center rounded-full">
                        <ArrowUpRight className="relative z-10 size-4 text-ember" />
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{solution.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{solution.blurb}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {solution.points.map((point) => (
                        <li
                          key={point}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Panel>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <QuoteButton label="Request a project quote" />
            <ShopButton label="Buy stocked items online" />
          </div>
        </Reveal>
      </Section>

      {/* Why ECA */}
      <Section className="pt-0">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <div className="gloss rounded-[2rem] p-3">
              <img
                src={splicing}
                alt="Technician splicing single mode fibre with a fusion splicer"
                width={1408}
                height={1008}
                loading="lazy"
                className="relative z-10 aspect-[4/3] w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow>The local advantage</Eyebrow>
              <Heading>Why buyers keep coming back to the Embakasi counter</Heading>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {REASONS.map((reason, i) => (
                <Reveal key={reason.title} delay={i * 80}>
                  <Panel className="h-full">
                    <reason.icon className="size-5 text-ember" />
                    <h3 className="mt-4 text-base font-semibold">{reason.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.body}</p>
                  </Panel>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Industries */}
      <Section className="pt-0">
        <Reveal>
          <Eyebrow>Who we serve</Eyebrow>
          <Heading>Built around how each buyer actually orders</Heading>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <Panel className="h-full">
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-6">
            <Link to="/industries" className="text-sm font-semibold text-primary hover:underline">
              See the full industry breakdown
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* Tools */}
      <Section className="pt-0">
        <Reveal>
          <div className="gloss grid gap-8 rounded-[2rem] p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
            <div className="relative z-10">
              <Eyebrow>Interactive tools</Eyebrow>
              <Heading>Cost the job before you call anyone</Heading>
              <Lead className="mt-4">
                Two calculators built from the questions the sales desk answers every week. Size an aerial fibre run, or
                turn a floor count into a rough bill of materials, then send the result over as the basis of a quotation.
              </Lead>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/tools"
                  className="ink-fill inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110 dark:text-background"
                >
                  <Calculator className="size-4" />
                  Open the tools
                </Link>
                <ShopButton />
              </div>
            </div>
            <img
              src={rack}
              alt="Network rack with combed CAT6 patch cords, PoE switches and a fibre patch panel"
              width={1408}
              height={1008}
              loading="lazy"
              className="relative z-10 aspect-[4/3] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </Reveal>
      </Section>

      {/* AEO FAQ */}
      <Section id="answers" className="pt-0">
        <Reveal>
          <Eyebrow>Straight answers</Eyebrow>
          <Heading>Questions buyers ask before they order</Heading>
          <Lead className="mt-4">
            Short answers first, then the detail an engineer needs. If the answer you want is missing, ask the technical
            desk and it usually ends up on this page.
          </Lead>
        </Reveal>
        <div className="mt-10">
          <FaqList items={FAQS} />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
