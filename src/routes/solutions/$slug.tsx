import { createFileRoute, notFound } from "@tanstack/react-router";
import splicing from "@/assets/splicing.jpg";
import rack from "@/assets/rack.jpg";
import warehouse from "@/assets/warehouse.jpg";
import { SOLUTIONS } from "@/lib/eca";
import { FaqList } from "@/components/site/Faq";
import {
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
  Content,
  CardContentWrapper,
} from "@/components/site/primitives";
import clsx from "clsx";

type Detail = {
  image: string;
  intro: string;
  answer: string;
  range: { title: string; body: string }[];
  specify: string[];
  faqs: { q: string; a: string; long?: string }[];
};

const DETAIL: Record<string, Detail> = {
  "fibre-optic": {
    image: splicing,
    intro:
      "Aerial spans, duct routes, riser fibre and the consumables that hold a splice together, supplied with the test gear that proves the link before handover.",
    answer:
      "Fibre optic supply covers the cable, the joint and the proof. ECA Networks stocks ADSS and figure 8 aerial cable, armoured and duct grades, indoor tight buffered fibre, closures, trays, pigtails, patch cords and the splicing and OTDR equipment used to certify the route.",
    range: [
      {
        title: "Aerial cable",
        body: "ADSS for poled routes that share power infrastructure, figure 8 with a steel messenger for shorter drops. Choose the grade by rated span, sag allowance and installation tension.",
      },
      {
        title: "Duct and armoured cable",
        body: "Water blocked, rodent resistant constructions for buried and ducted routes, in single mode counts from small drop cable up to backbone reels.",
      },
      {
        title: "Joints and terminations",
        body: "Dome and inline closures, splice trays, splitters for passive networks, SC and LC pigtails, adaptors and patch panels sized to the fibre count.",
      },
      {
        title: "Test and tooling",
        body: "Fusion splicers, cleavers, strippers, visual fault locators, light sources, power meters and OTDR units for loss budgets and event location.",
      },
    ],
    specify: [
      "Route length, span lengths and whether the run is aerial, ducted or buried",
      "Fibre count now and the count you want to grow into",
      "Termination points, connector type and panel space available",
      "Whether the handover needs an OTDR trace and a loss budget report",
    ],
    faqs: [
      {
        q: "What is ADSS fibre cable?",
        a: "ADSS is all dielectric self supporting cable. It carries its own weight between poles with no metallic strength member, so it can share routes with power distribution lines without introducing an earthing path.",
        long: "Order ADSS by rated span. A 100 metre grade strung over 150 metres will sag beyond specification and shorten the life of the route.",
      },
      {
        q: "How many splices can a fibre link take before loss becomes a problem?",
        a: "Each fusion splice typically adds around 0.1 dB and each connector pair around 0.3 dB. The real limit is the optical budget of the transceivers at each end, not a fixed splice count.",
        long: "Add cable attenuation, roughly 0.35 dB per kilometre at 1310 nm, then compare the total against the transceiver budget with a margin left for future repairs.",
      },
      {
        q: "Can indoor fibre be used outdoors for a short run?",
        a: "No. Indoor cable has no UV stabilisation, water blocking or tensile rating, so it hardens, cracks and fails within a season on an outdoor route. Use an outdoor rated construction even for short spans.",
      },
    ],
  },
  "structured-cabling": {
    image: rack,
    intro:
      "Copper backbones, horizontal runs, cabinets and containment specified to a certification report rather than an estimate.",
    answer:
      "Structured cabling is the standard based copper and fibre layout inside a building. ECA Networks supplies CAT6 and CAT6A cable, keystones, faceplates, patch panels, patch cords, cabinets, trays and the testers used to certify every channel.",
    range: [
      {
        title: "Horizontal cable",
        body: "CAT6 and CAT6A in unshielded and shielded constructions, LSZH sheathing where fire performance matters, in pull boxes sized for the floor plan.",
      },
      {
        title: "Patching and outlets",
        body: "Punch down and toolless keystones, single and dual faceplates, 24 and 48 port panels, plus factory terminated patch cords in length and colour codes.",
      },
      {
        title: "Cabinets and containment",
        body: "Wall and floor cabinets, shelves, fans, PDUs, cable managers, trunking and trays that keep bend radius and separation from power inside specification.",
      },
      {
        title: "Certification",
        body: "Cable testers for wiremap and channel certification so the installer hands over evidence rather than a verbal assurance.",
      },
    ],
    specify: [
      "Outlet count per floor and the distance from the furthest outlet to the room",
      "Cabinet location, available rack units and power provision",
      "Whether PoE devices will share the channel, since heat load changes the choice",
      "Fire performance requirements for the building",
    ],
    faqs: [
      {
        q: "What is the maximum length of a CAT6 run?",
        a: "A permanent link is limited to 90 metres of solid cable, with up to 10 metres of patch cord at the two ends, giving a 100 metre channel. Beyond that, move the cabinet or add fibre.",
      },
      {
        q: "Is CAT6A worth the extra cost over CAT6?",
        a: "CAT6A supports 10 Gigabit over the full 100 metre channel and handles alien crosstalk better, which matters in dense bundles and PoE heavy installations. CAT6 remains fine for gigabit access layers.",
      },
      {
        q: "What is PoE and how much power do I need?",
        a: "Power over Ethernet delivers device power over the data cable. 802.3af provides about 15W per port, 802.3at about 30W and 802.3bt up to 90W, and the switch must budget for every powered device at once.",
      },
    ],
  },
  "networking-wireless": {
    image: warehouse,
    intro:
      "Routing, switching, wireless backhaul and satellite hardware for operators and integrators who are measured on uptime.",
    answer:
      "This line covers the active hardware in a network: MikroTik routers and switches, managed and PoE switching, point to point and point to multipoint radios, indoor and outdoor access points, Starlink equipment, optics, media converters and the accessories that mount and power them.",
    range: [
      {
        title: "Routing and switching",
        body: "MikroTik routers and CRS switching for edge and core roles, managed PoE switches for access, plus SFP and SFP+ optics matched to fibre type and distance.",
      },
      {
        title: "Wireless links",
        body: "Licensed free band point to point radios for backhaul and sector equipment for subscriber coverage, with mounts, grounding and surge protection.",
      },
      {
        title: "Subscriber and satellite",
        body: "Customer premises routers, ONUs, drop hardware and Starlink equipment for sites where terrestrial backhaul is not yet available or where a site needs diverse backup connectivity.",
      },
      {
        title: "Power and protection",
        body: "PoE injectors, DC supplies, surge arrestors and enclosures for pole and rooftop installations exposed to weather and lightning.",
      },
    ],
    specify: [
      "Throughput per site and the number of subscribers or users expected",
      "Link distance, line of sight quality and available mounting height",
      "Power available at the site and whether backup is required",
      "Whether you standardise on a particular vendor for configuration reuse",
    ],
    faqs: [
      {
        q: "Which MikroTik device suits a small ISP point of presence?",
        a: "Match the router to the aggregate throughput and the routing features you actually use, then check the port mix. A PoP handling a few hundred megabits with tunnelling needs more processing headroom than raw port speed suggests.",
        long: "Send the site plan and expected subscriber count to the technical desk and the model options will come back with reasoning rather than a single part number.",
      },
      {
        q: "Do you supply Starllink equipment in Kenya?",
        a: "Yes, satellite hardware is part of the ISP and remote site line, typically specified where a terrestrial link is not yet available or where a site needs diverse backup connectivity.",
      },
      {
        q: "Can I mix vendors in one network?",
        a: "Yes, standards based routing, switching and optics interoperate. Keep management and firmware policy consistent, and confirm optics compatibility, since some vendors enforce coded modules.",
      },
    ],
  },
  security: {
    image: rack,
    intro:
      "IP surveillance, recording, access control and telephony that run over the cabling infrastructure you already paid for.",
    answer:
      "ECA Networks supplies IP and analogue cameras, network video recorders, storage, access control hardware, IP PABX systems and business handsets, sized so that bandwidth, PoE budget and retention period all work together.",
    range: [
      {
        title: "Cameras",
        body: "Fixed dome and bullet cameras, varifocal and pan tilt zoom units, with lens and resolution chosen for the identification distance the site needs.",
      },
      {
        title: "Recording and storage",
        body: "Network video recorders and surveillance grade drives sized from camera count, bitrate and the retention period a policy or tender demands.",
      },
      {
        title: "Access control",
        body: "Card and biometric readers, controllers, locks and exit hardware for door groups that need auditable entry records.",
      },
      {
        title: "Voice",
        body: "IP PABX platforms, gateways and business handsets that share the structured cabling and PoE switching already installed.",
      },
    ],
    specify: [
      "Camera count, resolution and the retention period in days",
      "Whether identification or general observation is the goal at each point",
      "PoE budget available on the switch and cable run lengths",
      "Extension count and trunk type for telephony",
    ],
    faqs: [
      {
        q: "How much storage does a CCTV system need?",
        a: "Multiply camera count by bitrate and hours of recording. As a rough guide, one 4 megapixel camera at 4 Mbps recording continuously uses close to 1.3 terabytes in 30 days, so eight cameras approach 10 terabytes.",
        long: "Motion based recording and smart codecs reduce this substantially, but size the array on continuous recording if a tender specifies a guaranteed retention window.",
      },
      {
        q: "Can CCTV and telephony share the data network?",
        a: "Yes, when the switching is sized for it. Separate cameras and phones into their own VLANs, confirm the PoE budget covers every device, and reserve uplink capacity for recording traffic.",
      },
      {
        q: "Do I need a PABX if I already have internet telephony?",
        a: "An IP PABX still earns its place when you need internal extensions, call routing rules, queues and recordings that keep working independently of a single external provider.",
      },
    ],
  },
};

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params }) => {
    const solution = SOLUTIONS.find((s) => s.slug === params.slug);
    const detail = DETAIL[params.slug];
    if (!solution || !detail) throw notFound();
    return { solution, detail };
  },
  head: ({ params }) => {
    const solution = SOLUTIONS.find((s) => s.slug === params.slug);
    const title = solution
      ? `${solution.title} in Kenya | ECA Networks`
      : "Solutions | ECA Networks";
    const description = solution?.blurb ?? "Network infrastructure supply from Nairobi.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: SolutionPage,
});

function SolutionPage() {
  const { solution, detail } = Route.useLoaderData();

  return (
    <>
      <Jsonld
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: solution.title,
          provider: { "@type": "Organization", name: "ECA Networks Ltd" },
          areaServed: { "@type": "Country", name: "Kenya" },
          description: detail.answer,
        }}
      />

      <Section className="pt-16 sm:pt-24 content-left">
        <Content>
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rise">
              <Eyebrow>Products and solutions</Eyebrow>
              <Heading as="h1">{solution.title}</Heading>
              <Lead className="mt-6">{detail.intro}</Lead>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <QuoteButton label="Price this line" />
                <ShopButton />
                <WhatsAppButton />
              </div>
            </div>
            <Reveal delay={100}>
              <div className="gloss rounded-[2rem] p-4">
                <img
                  src={detail.image}
                  alt={solution.title}
                  width={1408}
                  height={1008}
                  loading="lazy"
                  className="relative z-10 aspect-[4/3] w-full rounded-[1.5rem] object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Content>
      </Section>

      <Section className="pt-0">
        <Reveal>
          <CardContentWrapper className="space-y-6">
            <h2 className="text-xl font-semibold">In one paragraph</h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-foreground/85">
              {detail.answer}
            </p>
          </CardContentWrapper>
        </Reveal>
      </Section>

      <Section className="pt-0">
        <Reveal>
          <Heading>What the range covers</Heading>
        </Reveal>
        <Content>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {detail.range.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <CardContentWrapper>
                  <h3 className="text-base font-semibold">What the range covers</h3>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </CardContentWrapper>
              </Reveal>
            ))}
          </div>
        </Content>
      </Section>

      <Section className="pt-0">
        <Reveal>
          <Content>
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <Reveal>
                <div>
                  <Eyebrow>Before you request pricing</Eyebrow>
                  <Heading>Four details that make a quotation accurate</Heading>
                  <Lead className="mt-6">
                    Send these with your enquiry and the list usually comes back the same working day.
                  </Lead>
                  <div className="mt-8">
                    <QuoteButton />
                  </div>
                </div>
              </Reveal>
              <Reveal delay={90}>
                <CardContentWrapper>
                  <ol className="space-y-4">
                    {detail.specify.map((item, i) => (
                      <li key={i} className="flex gap-4 text-sm leading-relaxed text-muted-foreground">
                        <span className="ink-fill grid size-7 shrink-0 place-items-center rounded-full text-xs font-semibold text-primary-foreground dark:text-background">
                          {i + 1}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ol>
                </CardContentWrapper>
              </Reveal>
            </div>
          </Content>
        </Reveal>
      </Section>

      <Section className="pt-0">
        <Reveal>
          <Eyebrow>Answers</Eyebrow>
          <Heading>Common questions on this line</Heading>
        </Reveal>
        <div className="mt-10">
          <FaqList items={detail.faqs} />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
