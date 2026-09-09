import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Cable, Calculator, Copy, ArrowRight, Wrench } from "lucide-react";
import { toast } from "sonner";
import {
  CtaBand,
  Section,
  Content,
} from "@/components/site/primitives";

export const Route = createFileRoute("/tools")({
  head: () => ({
    meta: [
      { title: "BOM Calculator and Fibre Cable Selector | ECA Networks" },
      {
        name: "description",
        content:
          "Two free B2B tools: estimate a structured cabling bill of materials from outlet counts, and choose the right fibre cable type for an aerial, ducted or indoor route.",
      },
      { property: "og:title", content: "Interactive Tools | ECA Networks" },
      {
        property: "og:description",
        content:
          "Size a cabling bill of materials and select a fibre cable type in seconds, then send the result to the quotation desk.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://fluid-shine-flow.lovable.app/tools" }],
  }),
  component: Tools,
});

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-sm">
      <span className="font-medium text-foreground">{label}</span>
      {hint ? <span className="ml-2 text-xs text-muted-foreground">{hint}</span> : null}
      <div className="mt-2">{children}</div>
    </label>
  );
}

const inputClass =
  "w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary";

function BomCalculator() {
  const [outlets, setOutlets] = useState(48);
  const [avgRun, setAvgRun] = useState(35);
  const [cords, setCords] = useState(2);
  const [category, setCategory] = useState("CAT6");

  const result = useMemo(() => {
    const waste = 1.12;
    const metres = Math.round(outlets * avgRun * waste);
    const boxes = Math.ceil(metres / 305);
    const keystones = outlets;
    const faceplates = Math.ceil(outlets / 2);
    const panels = Math.ceil(outlets / 24);
    const patchCords = outlets * cords;
    const managers = panels;
    const rackUnits = panels * 1 + managers + Math.ceil(outlets / 24) * 1 + 2;
    return { metres, boxes, keystones, faceplates, panels, patchCords, managers, rackUnits };
  }, [outlets, avgRun, cords]);

  const lines = [
    {
      label: `${category} cable`,
      value: `${result.metres} m, about ${result.boxes} boxes of 305 m`,
    },
    { label: "Keystone jacks", value: `${result.keystones} pcs` },
    { label: "Faceplates, dual gang", value: `${result.faceplates} pcs` },
    { label: "24 port patch panels", value: `${result.panels} pcs` },
    { label: "Patch cords", value: `${result.patchCords} pcs` },
    { label: "Cable managers", value: `${result.managers} pcs` },
    { label: "Rack space to allow", value: `${result.rackUnits} U` },
  ];

  return (
    <div className="border border-border/80 bg-background p-6 sm:p-8 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4 border-b border-border/80 pb-4">
          <div className="flex items-center gap-2.5 text-foreground">
            <Calculator className="size-5 text-primary" />
            <h2 className="text-lg font-bold">Project bill of materials</h2>
          </div>
          <span className="font-mono text-xs font-bold text-muted-foreground/50">01 //</span>
        </div>
        <p className="text-sm text-muted-foreground mb-6">
          A first pass estimate for a copper installation, including a twelve percent allowance for
          routing and waste.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Outlets" hint="data points">
            <input
              type="number"
              min={1}
              value={outlets}
              onChange={(e) => setOutlets(Math.max(1, Number(e.target.value) || 0))}
              className={inputClass}
            />
          </Field>
          <Field label="Average run" hint="metres">
            <input
              type="number"
              min={1}
              max={90}
              value={avgRun}
              onChange={(e) => setAvgRun(Math.min(90, Math.max(1, Number(e.target.value) || 0)))}
              className={inputClass}
            />
          </Field>
          <Field label="Patch cords per outlet">
            <input
              type="number"
              min={0}
              max={4}
              value={cords}
              onChange={(e) => setCords(Math.max(0, Number(e.target.value) || 0))}
              className={inputClass}
            />
          </Field>
          <Field label="Category">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={inputClass}
            >
              <option>CAT6</option>
              <option>CAT6A</option>
              <option>CAT6 shielded</option>
            </select>
          </Field>
        </div>

        <ul className="mt-8 space-y-3 border-t border-border/60 pt-6">
          {lines.map((line) => (
            <li key={line.label} className="flex items-baseline justify-between gap-4 text-sm">
              <span className="text-muted-foreground">{line.label}</span>
              <span className="text-right font-semibold text-foreground">{line.value}</span>
            </li>
          ))}
        </ul>

        {avgRun > 85 ? (
          <p className="mt-6 border-l-2 border-primary bg-primary/5 px-4 py-3 text-xs text-foreground/80">
            A permanent link is limited to 90 metres of solid cable. At this run length, consider a
            second cabinet or a fibre backbone to the far end.
          </p>
        ) : null}
      </div>

      <div className="mt-8 pt-6 border-t border-border/60 flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={() => {
            const text = lines.map((l) => `${l.label}: ${l.value}`).join("\n");
            void navigator.clipboard.writeText(text);
            toast.success("Bill of materials copied", {
              description: "Paste it into your quote request.",
            });
          }}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <Copy className="size-4" />
          <span>Copy the list</span>
        </button>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary hover:text-primary/80 transition-colors"
        >
          Request availability <ArrowRight className="size-4" />
        </a>
      </div>
    </div>
  );
}

function CableSelector() {
  const [route, setRoute] = useState("aerial");
  const [span, setSpan] = useState(120);
  const [poles, setPoles] = useState("shared with power");
  const [cores, setCores] = useState(12);

  const advice = useMemo(() => {
    if (route === "indoor") {
      return {
        pick: "Indoor tight buffered fibre, LSZH",
        why: "Inside a building the priorities are fire performance and easy termination rather than tensile strength.",
        watch: "Keep bend radius above ten times the cable diameter in trays and enclosures.",
      };
    }
    if (route === "duct") {
      return {
        pick: "Water blocked duct cable, armoured where rodents are a risk",
        why: "Buried and ducted routes need moisture protection and crush resistance more than self support.",
        watch: "Plan pulling tension and lubricant, and add draw pits for long duct runs.",
      };
    }
    if (route === "riser") {
      return {
        pick: "Riser rated indoor outdoor fibre",
        why: "A vertical run between floors needs flame rating plus enough strength to hang its own weight.",
        watch:
          "Support the cable at each floor rather than letting the full drop hang from the top.",
      };
    }
    if (span <= 80 && poles !== "shared with power") {
      return {
        pick: "Figure 8 aerial cable with steel messenger",
        why: "Short spans on dedicated poles are cheapest and simplest with an integrated messenger.",
        watch: "The messenger is metallic, so bond and earth it correctly at terminations.",
      };
    }
    return {
      pick: `ADSS rated for ${span <= 100 ? 100 : span <= 150 ? 150 : span <= 200 ? 200 : 300} metre spans`,
      why: "All dielectric construction avoids an earthing path, which is essential where poles carry power, and it self supports without a messenger.",
      watch: "Order by rated span. Exceeding the rating causes sag, strain and premature failure.",
    };
  }, [route, span, poles]);

  return (
    <div className="border border-border/80 bg-background p-6 sm:p-8 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4 border-b border-border/80 pb-4">
          <div className="flex items-center gap-2.5 text-foreground">
            <Cable className="size-5 text-primary" />
            <h2 className="text-lg font-bold">Fibre cable selector</h2>
          </div>
          <span className="font-mono text-xs font-bold text-muted-foreground/50">02 //</span>
        </div>
        <p className="text-sm text-muted-foreground mb-6">
          Answer four questions and the tool names the cable family the route calls for, plus the
          mistake it most often causes.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Route type">
            <select value={route} onChange={(e) => setRoute(e.target.value)} className={inputClass}>
              <option value="aerial">Aerial between poles</option>
              <option value="duct">Ducted or buried</option>
              <option value="riser">Building riser</option>
              <option value="indoor">Indoor horizontal</option>
            </select>
          </Field>
          <Field label="Longest span" hint="metres">
            <input
              type="number"
              min={1}
              value={span}
              onChange={(e) => setSpan(Math.max(1, Number(e.target.value) || 0))}
              className={inputClass}
              disabled={route !== "aerial"}
            />
          </Field>
          <Field label="Pole route">
            <select
              value={poles}
              onChange={(e) => setPoles(e.target.value)}
              className={inputClass}
              disabled={route !== "aerial"}
            >
              <option>shared with power</option>
              <option>dedicated telecom poles</option>
            </select>
          </Field>
          <Field label="Fibre count">
            <select
              value={cores}
              onChange={(e) => setCores(Number(e.target.value))}
              className={inputClass}
            >
              {[2, 4, 12, 24, 48, 96, 144].map((n) => (
                <option key={n} value={n}>
                  {n} core
                </option>
              ))}
            </select>
          </Field>
        </div>

        <div className="mt-8 space-y-4 border border-border/60 bg-muted/10 p-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
              Recommended family
            </p>
            <p className="text-base font-bold text-foreground">{advice.pick}</p>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">{advice.why}</p>
          <p className="text-sm leading-relaxed text-foreground/85">
            <span className="font-bold">Watch for this.</span> {advice.watch}
          </p>
          <p className="text-xs text-muted-foreground border-t border-border/40 pt-3">
            Sized at {cores} core. Leave spare fibres for growth, since a second span costs far more
            than extra cores today.
          </p>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border/60 flex flex-wrap gap-6 items-center">
        <a
          href="/contact"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary hover:text-primary/80 transition-colors"
        >
          Confirm with an engineer <ArrowRight className="size-4" />
        </a>
        <a
          href="/shop"
          className="text-sm font-bold uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors"
        >
          See stocked cable
        </a>
      </div>
    </div>
  );
}

function Tools() {
  return (
    <>
      {/* High-End Editorial Hero Layout */}
      <Section className="pt-20 sm:pt-32 pb-16 border-b border-border/80">
        <Content>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">
            <div className="lg:col-span-7">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2">
                <Wrench className="size-4" /> Interactive Specifications
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                Do the rough numbers yourself, then let us check them.
              </h1>
            </div>
            <div className="lg:col-span-5 lg:pt-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                These calculators give an estimate good enough for a budget conversation. They are
                not a substitute for a site survey, and the technical desk will review anything
                before it becomes an order.
              </p>
              <div className="mt-8 flex items-center gap-6">
                <a
                  href="/shop"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary hover:text-primary/80 transition-colors"
                >
                  Browse the store <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </Content>
      </Section>

      {/* Calculators Section */}
      <Section className="py-20">
        <Content>
          <div className="grid lg:grid-cols-2 gap-12">
            <BomCalculator />
            <CableSelector />
          </div>
        </Content>
      </Section>

      <CtaBand
        title="Send the output straight to the technical desk"
        body="Paste the copied list into a request, add the site location and the delivery date you need, and availability comes back with stock status per line."
      />
    </>
  );
}