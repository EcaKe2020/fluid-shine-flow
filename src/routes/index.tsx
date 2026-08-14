import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  Calculator,
  Cable,
  Headphones,
  Truck,
  Users,
  Wrench,
  ShieldCheck,
  Building2,
  GraduationCap,
  Landmark,
  Server,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { BRANDS, COMPANY, FAQS, INDUSTRIES, SOLUTIONS } from "@/lib/eca";
import { FaqList } from "@/components/site/Faq";
import { HeroCarousel } from "@/components/site/HeroCarousel";
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
  TeamCard,
} from "@/components/site/primitives";

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

const INDUSTRY_ICONS = [Server, Wrench, Building2, GraduationCap, Landmark, Users];

const TEAM_LEADERSHIP = [
  {
    name: "CEO",
    title: "Chief Executive Officer",
    image: "https://images.pexels.com/photos/28442318/pexels-photo-28442318.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "COO",
    title: "Chief Operating Officer",
    image: "https://images.pexels.com/photos/33680700/pexels-photo-33680700.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

const TEAM_OPERATIONS = [
  {
    name: "Accounting",
    title: "Finance & Accounts",
    image: "https://images.pexels.com/photos/8312669/pexels-photo-8312669.jpeg?auto=compress&cs=tinysrgb&w=320",
  },
  {
    name: "Digital Marketing",
    title: "Marketing Lead",
    image: "https://images.pexels.com/photos/38707525/pexels-photo-38707525.jpeg?auto=compress&cs=tinysrgb&w=320",
  },
  {
    name: "Store Assistant",
    title: "Warehouse Operations",
    image: "https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&w=320",
  },
  {
    name: "Driver",
    title: "Logistics & Dispatch",
    image: "https://images.pexels.com/photos/13392786/pexels-photo-13392786.png?auto=compress&cs=tinysrgb&w=320",
  },
];

const TEAM_SALES = [
  { name: "Sales Rep 1", title: "Sales Representative", image: "https://images.pexels.com/photos/11156392/pexels-photo-11156392.jpeg?auto=compress&cs=tinysrgb&w=240" },
  { name: "Sales Rep 2", title: "Sales Representative", image: "https://images.pexels.com/photos/14950779/pexels-photo-14950779.jpeg?auto=compress&cs=tinysrgb&w=240" },
  { name: "Sales Rep 3", title: "Sales Representative", image: "https://images.pexels.com/photos/31422830/pexels-photo-31422830.png?auto=compress&cs=tinysrgb&w=240" },
  { name: "Sales Rep 4", title: "Sales Representative", image: "https://images.pexels.com/photos/26150470/pexels-photo-26150470.jpeg?auto=compress&cs=tinysrgb&w=240" },
  { name: "Sales Rep 5", title: "Sales Representative", image: "https://images.pexels.com/photos/38652616/pexels-photo-38652616.jpeg?auto=compress&cs=tinysrgb&w=240" },
];

const SOLUTION_ICONS = [Cable, Wrench, Server, ShieldCheck];

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

      {/* HERO — Dark zone */}
      <HeroCarousel />

      {/* WHAT WE SUPPLY — White zone */}
      <Section className="bg-white pt-24">
        <Reveal>
          <Eyebrow>What we supply</Eyebrow>
          <Heading>Four supply lines, one delivery note</Heading>
          <Lead className="mt-4">
            Most projects touch more than one of these. Buying them from one counter keeps compatibility, warranty and
            paperwork in a single place.
          </Lead>
        </Reveal>
        <div className="mt-12 grid gap-0 md:grid-cols-4">
          {SOLUTIONS.map((solution, i) => (
            <Reveal key={solution.slug} delay={i * 80}>
              <div
                className={`p-6 ${i > 0 ? "md:border-l md:border-[#E5E5E5]" : ""} ${
                  i < SOLUTIONS.length - 1 ? "border-b border-[#E5E5E5] md:border-b-0" : ""
                }`}
              >
                {(() => {
                  const Icon = SOLUTION_ICONS[i] ?? Cable;
                  return <Icon className="size-6 text-[#00D4FF]" />;
                })()}
                <h3 className="mt-4 text-lg font-bold text-[#1A1A1A]">{solution.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#666666]">{solution.blurb}</p>
                <Link
                  to="/solutions/$slug"
                  params={{ slug: solution.slug }}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#00D4FF] hover:underline"
                >
                  Learn more
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <QuoteButton label="Request a project quote" />
            <ShopButton label="Buy stocked items online" />
          </div>
        </Reveal>
      </Section>

      {/* THE LOCAL ADVANTAGE — White zone */}
      <Section className="bg-white" style={{ borderTop: "1px solid #E5E5E5" } as React.CSSProperties}>
        <Reveal>
          <Eyebrow>The local advantage</Eyebrow>
          <Heading>Why buyers keep coming back to the Embakasi counter</Heading>
        </Reveal>
        <div className="mt-12 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 80}>
              <div
                className={`p-6 ${i > 0 ? "lg:border-l lg:border-[#E5E5E5]" : ""} ${
                  i < REASONS.length - 1 ? "border-b border-[#E5E5E5] sm:border-b-0" : ""
                }`}
              >
                <reason.icon className="size-6 text-[#00D4FF]" />
                <h3 className="mt-4 text-base font-bold text-[#1A1A1A]">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#666666]">{reason.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* WHO WE SERVE — White zone */}
      <Section className="bg-white" style={{ borderTop: "1px solid #E5E5E5" } as React.CSSProperties}>
        <Reveal>
          <Eyebrow>Who we serve</Eyebrow>
          <Heading>Built around how each buyer actually orders</Heading>
        </Reveal>
        <div className="mt-12 grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div
                className={`p-6 ${i % 3 > 0 ? "lg:border-l lg:border-[#E5E5E5]" : ""} ${
                  i % 2 > 0 ? "sm:border-l sm:border-[#E5E5E5] lg:border-l-0" : ""
                } ${
                  i < INDUSTRIES.length - (INDUSTRIES.length % 3 || 3) ? "border-b border-[#E5E5E5]" : ""
                }`}
              >
                {(() => {
                  const Icon = INDUSTRY_ICONS[i] ?? Users;
                  return <Icon className="size-6 text-[#00D4FF]" />;
                })()}
                <h3 className="mt-4 text-base font-bold text-[#1A1A1A]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#666666]">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <Link to="/industries" className="mt-6 inline-flex text-sm font-semibold text-[#00D4FF] hover:underline">
            See the full industry breakdown
          </Link>
        </Reveal>
      </Section>

      {/* MEET THE TEAM — White zone */}
      <Section className="bg-white" style={{ borderTop: "1px solid #E5E5E5" } as React.CSSProperties}>
        <Reveal>
          <Eyebrow>Meet the team</Eyebrow>
          <Heading>The team behind the counter</Heading>
          <Lead className="mt-4">
            Engineers, buyers and support staff who keep stock moving and quotes accurate.
          </Lead>
        </Reveal>

        {/* All team members in a unified grid */}
        <Reveal delay={80}>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {[...TEAM_LEADERSHIP, ...TEAM_OPERATIONS, ...TEAM_SALES].map((member, idx) => (
              <TeamCard key={`${member.name}-${idx}`} member={member} delay={idx * 40} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 text-center">
            <Link to="/team" className="inline-flex items-center gap-2 text-sm font-semibold text-[#00D4FF] hover:underline">
              View full team and careers
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* INTERACTIVE TOOLS — White zone */}
      <Section className="bg-white" style={{ borderTop: "1px solid #E5E5E5" } as React.CSSProperties}>
        <Reveal>
          <Eyebrow>Interactive tools</Eyebrow>
          <Heading>Cost the job before you call anyone</Heading>
          <Lead className="mt-4">
            Two calculators built from the questions the sales desk answers every week.
          </Lead>
        </Reveal>
        <div className="mt-12 grid gap-0 md:grid-cols-2">
          {[
            { title: "Project bill of materials", desc: "Turn outlet counts into a rough BOM with waste allowance.", to: "/tools" as const },
            { title: "Fibre cable selector", desc: "Answer four questions and get the right cable family for the route.", to: "/tools" as const },
          ].map((tool, i) => (
            <Reveal key={tool.title} delay={i * 80}>
              <div className={`p-6 ${i > 0 ? "md:border-l md:border-[#E5E5E5]" : ""} ${i < 1 ? "border-b border-[#E5E5E5] md:border-b-0" : ""}`}>
                <Calculator className="size-6 text-[#00D4FF]" />
                <h3 className="mt-4 text-lg font-bold text-[#1A1A1A]">{tool.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#666666]">{tool.desc}</p>
                <Link
                  to={tool.to}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#00D4FF] hover:underline"
                >
                  Open calculator
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ — White zone */}
      <Section className="bg-white" style={{ borderTop: "1px solid #E5E5E5" } as React.CSSProperties}>
        <Reveal>
          <Eyebrow>Straight answers</Eyebrow>
          <Heading>Questions buyers ask before they order</Heading>
          <Lead className="mt-4">
            Short answers first, then the detail an engineer needs.
          </Lead>
        </Reveal>
        <div className="mt-10">
          <FaqList items={FAQS} />
        </div>
      </Section>

      {/* FOOTER CTA — White zone */}
      <Section className="bg-white" style={{ borderTop: "1px solid #E5E5E5" } as React.CSSProperties}>
        <Reveal>
          <div className="max-w-2xl">
            <Heading>Tell us what the site needs and the list comes back priced</Heading>
            <Lead className="mt-4">
              Send a drawing, a rough part list or a site photograph. The technical desk checks the specification,
              confirms stock and returns a quotation you can hand to procurement.
            </Lead>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <QuoteButton />
              <ShopButton />
              <WhatsAppButton />
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
