import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Cable, Calculator, Copy } from "lucide-react";
import { toast } from "sonner";
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
    ],
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
  "w-full rounded-xl border border-input bg-background/70 px-3.5 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25";

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
    <Panel hover={false} className="h-full">
      <div className="flex items-center gap-2 text-ember">
        <Calculator className="size-5" />
        <h2 className="text-lg font-semibold text-foreground">Project bill of materials</h2>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        A first pass estimate for a copper installation, including a twelve percent allowance for
        routing and waste.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
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

      <ul className="mt-7 space-y-2.5">
        {lines.map((line) => (
          <li key={line.label} className="flex items-baseline justify-between gap-4 text-sm">
            <span className="text-muted-foreground">{line.label}</span>
            <span className="text-right font-semibold text-foreground">{line.value}</span>
          </li>
        ))}
      </ul>

      {avgRun > 85 ? (
        <p className="mt-5 rounded-xl bg-ember/15 px-4 py-3 text-xs text-foreground/80">
          A permanent link is limited to 90 metres of solid cable. At this run length, consider a
          second cabinet or a fibre backbone to the far end.
        </p>
      ) : null}

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => {
            const text = lines.map((l) => `${l.label}: ${l.value}`).join("\n");
            void navigator.clipboard.writeText(text);
            toast.success("Bill of materials copied", {
              description: "Paste it into your quote request.",
            });
          }}
          className="gloss gloss-hover inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
        >
          <Copy className="relative z-10 size-4 text-ember" />
          <span className="relative z-10">Copy the list</span>
        </button>
        <QuoteButton label="Send it for pricing" />
      </div>
    </Panel>
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
    <Panel hover={false} className="h-full">
      <div className="flex items-center gap-2 text-ember">
        <Cable className="size-5" />
        <h2 className="text-lg font-semibold text-foreground">Fibre cable selector</h2>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        Answer four questions and the tool names the cable family the route calls for, plus the
        mistake it most often causes.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
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

      <div className="mt-7 space-y-4 rounded-2xl bg-primary/8 p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Recommended family
          </p>
          <p className="mt-1 text-base font-semibold">{advice.pick}</p>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{advice.why}</p>
        <p className="text-sm leading-relaxed text-foreground/85">
          <span className="font-semibold">Watch for this.</span> {advice.watch}
        </p>
        <p className="text-xs text-muted-foreground">
          Sized at {cores} core. Leave spare fibres for growth, since a second span costs far more
          than extra cores today.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <QuoteButton label="Confirm with an engineer" />
        <ShopButton label="See stocked cable" />
      </div>
    </Panel>
  );
}

function Tools() {
  return (
    <>
      <Section className="pt-16 sm:pt-20 lg:pt-24 content-left">
        <Content>
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rise">
              <Eyebrow>Interactive tools</Eyebrow>
              <Heading as="h1" center className="mb-6">
                Do the rough numbers yourself,{" "}
                <span className="ink-text">then let us check them</span>
              </Heading>
              <Lead className="mt-6">
                These calculators give an estimate good enough for a budget conversation. They are not
                a substitute for a site survey, and the technical desk will review anything before it
                becomes an order.
              </Lead>
              <div className="mt-8 flex flex-wrap justify-center gap-6">
                <ShopButton label="Browse the store" />
                <Link
                  to="/tools"
                  className="inline-flex items-center rounded-full border border-primary/25 px-5 py-2.5 text-sm font-semibold transition hover:bg-primary/10"
                >
                  Try the calculators
                </Link>
              </div>
            </div>
            <Reveal delay={100}>
              <div className="grid gap-6 sm:grid-cols-2 content-left">
                <BomCalculator />
                <CableSelector />
              </div>
            </Reveal>
          </div>
        </Content>
      </Section>

      <CtaBand
        title="Send the output straight to the quotation desk"
        body="Paste the copied list into a quote request, add the site location and the delivery date you need, and pricing comes back with stock status per line."
      />
    </>
  );
}