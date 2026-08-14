import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import rack from "@/assets/rack.jpg";
import { SOLUTIONS } from "@/lib/eca";
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

export const Route = createFileRoute("/solutions/")({
  head: () => ({
    meta: [
      { title: "Products and Solutions | Fibre, Cabling, Networking, CCTV" },
      {
        name: "description",
        content:
          "Four supply lines from ECA Networks: fibre optic and ADSS, structured cabling, networking and ISP equipment, plus CCTV, security and PABX communications.",
      },
      { property: "og:title", content: "Products and Solutions | ECA Networks" },
      {
        property: "og:description",
        content:
          "Fibre optic, structured cabling, networking and ISP hardware, CCTV and PABX, supplied and supported from Nairobi.",
      },
    ],
  }),
  component: SolutionsHub,
});

function SolutionsHub() {
  return (
    <>
      <Section className="pt-10 sm:pt-16">
        <div className="rise">
          <Eyebrow>Products and solutions</Eyebrow>
          <Heading as="h1">
            Everything between the <span className="ink-text">street pole</span> and the{" "}
            <span className="ink-text">patch panel</span>
          </Heading>
          <Lead className="mt-5">
            Pick the line closest to your project. Each page explains what the equipment does, how to specify it and
            which questions the technical desk will ask before pricing the list.
          </Lead>
          <div className="mt-8 flex flex-wrap gap-3">
            <QuoteButton />
            <ShopButton label="Browse the store catalogue" />
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {SOLUTIONS.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <Link to="/solutions/$slug" params={{ slug: s.slug }} className="block h-full">
                <Panel className="h-full">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-xl font-semibold">{s.title}</h2>
                    <ArrowUpRight className="mt-1 size-5 shrink-0 text-ember" />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
                  <ul className="mt-5 space-y-1.5 text-sm text-muted-foreground">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-ember" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </Panel>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <Reveal>
          <div className="gloss grid gap-8 rounded-[2rem] p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
            <img
              src={rack}
              alt="Rack with patch panels, PoE switching and fibre patching"
              width={1408}
              height={1008}
              loading="lazy"
              className="relative z-10 aspect-[4/3] w-full rounded-[1.5rem] object-cover"
            />
            <div className="relative z-10">
              <Heading>Mixed lists are normal, not awkward</Heading>
              <Lead className="mt-4">
                A single site rarely stays inside one category. Aerial fibre lands on a splice tray, the tray feeds a
                switch, the switch powers a camera. Quote the whole chain in one document and the compatibility argument
                disappears.
              </Lead>
              <div className="mt-7">
                <QuoteButton label="Send a mixed bill of materials" />
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <CtaBand />
    </>
  );
}
