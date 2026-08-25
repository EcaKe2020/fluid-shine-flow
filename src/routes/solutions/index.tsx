import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  ArrowUpRight, 
  CheckCircle2, 
  ShieldCheck, 
  Activity, 
  Cpu, 
  Check, 
  Globe2,
  Boxes
} from "lucide-react";
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
  Content,
  CardContentWrapper,
  CtaBanner,
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
      {/* 1. HERO SECTION - TTI Fiber Industrial Aesthetic */}
      <Section className="relative overflow-hidden border-b border-border/40 pt-10 pb-12 sm:pt-16 sm:pb-16">

        <Content>
          <div className="rise max-w-4xl">
            {/* Spec Badge */}
            <div className="inline-flex items-center border-b border-ember/50 pb-1 text-xs font-mono font-semibold uppercase tracking-wider text-ember">
              <span>Optical Path & Network Infrastructure Manufacturer & Supplier</span>
            </div>

            <Heading as="h1" className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              Engineered for the entire optical path: From <span className="text-ember underline decoration-ember/40 underline-offset-8">street pole</span> to <span className="text-foreground underline decoration-ember/40 underline-offset-8">patch panel</span>
            </Heading>

            <Lead className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-3xl">
              Precision fibre optics, ADSS aerial deployment, structured cabling, active switching, and 
              security communications. Select your supply category below to inspect specs, hardware options, and technical pre-quoting guides.
            </Lead>

            {/* Action Row - Wrappers avoid TypeScript className conflicts on primitives */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="shadow-lg shadow-ember/15 rounded-lg overflow-hidden transition-transform active:scale-95">
                <QuoteButton />
              </div>
              <div className="rounded-lg overflow-hidden transition-all hover:border-ember/40">
                <ShopButton label="Browse Store Catalogue →" />
              </div>
            </div>
          </div>

          {/* 2. TTI-STYLE TRUST METRICS BAR */}
          <div className="mt-14 grid grid-cols-2 gap-4 border-y border-border/80 py-4 sm:grid-cols-4 sm:py-6">
            <div className="flex items-center gap-3 border-r-0 border-border/40 p-2 sm:border-r">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-ember/10 text-ember">
                <Activity className="size-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground uppercase tracking-wide">100% Tested</p>
                <p className="text-[11px] text-muted-foreground">Insertion & Return Loss</p>
              </div>
            </div>

            <div className="flex items-center gap-3 border-r-0 border-border/40 p-2 sm:border-r">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-ember/10 text-ember">
                <ShieldCheck className="size-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground uppercase tracking-wide">Standards Compliant</p>
                <p className="text-[11px] text-muted-foreground">ISO9001 / CPR / TIA-568</p>
              </div>
            </div>

            <div className="flex items-center gap-3 border-r-0 border-border/40 p-2 sm:border-r">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-ember/10 text-ember">
                <Boxes className="size-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground uppercase tracking-wide">Custom Lengths</p>
                <p className="text-[11px] text-muted-foreground">Pre-terminated & Cut-to-fit</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-ember/10 text-ember">
                <Globe2 className="size-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground uppercase tracking-wide">Nairobi Warehouse</p>
                <p className="text-[11px] text-muted-foreground">Immediate Dispatch & Pickup</p>
              </div>
            </div>
          </div>

          {/* 3. TTI FIBER STYLE SOLUTIONS GRID */}
          <div className="mt-16">
            <div className="mb-8 flex items-end justify-between border-b border-border/60 pb-4">
              <div>
                <Eyebrow>Supply Lines & Hardware Sets</Eyebrow>
                <h2 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Select Your Network Category
                </h2>
              </div>
              <span className="hidden font-mono text-xs font-semibold text-muted-foreground sm:inline-block">
                {SOLUTIONS.length} CORE LINES AVAILABLE
              </span>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {SOLUTIONS.map((s, i) => (
                <Reveal key={s.slug} delay={i * 80}>
                  <CardContentWrapper>
                    <Link 
                      to="/solutions/$slug" 
                      params={{ slug: s.slug }} 
                      className="group block h-full"
                    >
                      <Panel className="relative flex h-full flex-col justify-between overflow-hidden border border-border/70 bg-card p-6 transition-colors duration-300 hover:border-ember/60 sm:p-8">
                        <div>
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3">
                              {/* TTI Style 01, 02 Number Tag */}
                              <span className="flex size-9 items-center justify-center rounded-lg bg-muted border border-border font-mono text-sm font-bold text-ember transition-colors group-hover:bg-ember group-hover:text-white">
                                0{i + 1}
                              </span>
                              <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-ember sm:text-2xl">
                                {s.title}
                              </h3>
                            </div>
                            <div className="flex size-9 shrink-0 items-center justify-center border border-border text-muted-foreground transition-colors group-hover:border-ember group-hover:text-ember">
                              <ArrowUpRight className="size-5" />
                            </div>
                          </div>

                          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                            {s.blurb}
                          </p>
                        </div>

                        {/* Technical Spec List */}
                        <div className="mt-8 border-t border-border/50 pt-5">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                              Included Equipment & Specifications:
                            </span>
                            <span className="text-xs font-semibold text-ember opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                              View Product Line →
                            </span>
                          </div>
                          <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                            {s.points.map((p) => (
                              <li key={p} className="flex items-center gap-2 text-xs font-medium text-foreground/90 sm:text-sm">
                                <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-ember/10 text-ember">
                                  <Check className="size-2.5 stroke-[3]" />
                                </span>
                                <span className="truncate">{p}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Panel>
                    </Link>
                  </CardContentWrapper>
                </Reveal>
              ))}
            </div>
          </div>
        </Content>
      </Section>

      {/* 4. FEATURE ARCHITECTURE BANNER (TTI Technical Engineering Style) */}
      <Section className="py-14 sm:py-20 bg-muted/30">
        <Reveal>
          <CtaBanner>
            <div className="relative overflow-hidden border-y border-border/80 bg-card py-6 sm:py-10 lg:py-12">
              <div className="relative z-10 grid gap-10 lg:grid-cols-12 lg:items-center">
                {/* Image Showcase with Overlay Badges */}
                <div className="relative lg:col-span-6">
                  <div className="relative overflow-hidden border border-border">
                    <img
                      src={rack}
                      alt="Rack with patch panels, PoE switching and fibre patching"
                      width={1408}
                      height={1008}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Image Caption inside Media Box */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="font-mono text-xs text-ember font-bold uppercase tracking-wider">High Density Rack Architecture</p>
                      <p className="text-sm font-medium opacity-90">Fibre splicing, PoE switching & copper termination</p>
                    </div>
                  </div>

                  {/* Floating TTI Style Badges */}
                  <div className="absolute -bottom-5 right-4 flex items-center gap-2.5 border border-border bg-background px-4 py-2.5">
                    <Cpu className="size-5 text-ember" />
                    <div>
                      <p className="text-xs font-bold text-foreground">Zero Compatibility Clashes</p>
                      <p className="text-[10px] text-muted-foreground">Pre-tested optical budget</p>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className="content-left lg:col-span-6 lg:pl-4">
                  <Eyebrow className="text-ember">Single-Source Project Fulfillment</Eyebrow>
                  <Heading as="h2" className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl text-foreground">
                    Mixed lists are normal, not awkward
                  </Heading>
                  <Lead className="mt-4 text-base leading-relaxed text-muted-foreground">
                    A single site deployment rarely stays inside one category. Aerial fibre lands on a splice 
                    tray, the tray feeds an optical switch, and the switch powers PoE IP cameras. Quote the whole chain 
                    in one document and compatibility arguments disappear.
                  </Lead>

                  <ul className="mt-6 space-y-3 font-medium text-sm text-foreground/90">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="size-4 shrink-0 text-ember" />
                      <span>Single consolidated Bill of Materials (BOM) with itemised pricing</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="size-4 shrink-0 text-ember" />
                      <span>Full technical desk verification for transceivers and connector loss budgets</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="size-4 shrink-0 text-ember" />
                      <span>Direct dispatch from Nairobi inventory to jobsite</span>
                    </li>
                  </ul>

                  <div className="mt-8">
                    <QuoteButton label="Send a mixed bill of materials" />
                  </div>
                </div>
              </div>
            </div>
          </CtaBanner>
        </Reveal>
      </Section>

      {/* 5. CLOSING CTA BAND */}
      <CtaBand
        title="Ready to price your project?"
        body="Send your complete bill of materials or specifications to the technical engineering desk and get an itemised quotation with confirmed Nairobi stock availability."
      />
    </>
  );
}