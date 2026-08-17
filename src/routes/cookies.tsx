import { createFileRoute, Link } from "@tanstack/react-router";
import { COMPANY } from "@/lib/eca";
import { Eyebrow, Heading, Lead, Panel, Reveal, Section } from "@/components/site/primitives";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy | ECA Networks Kenya" },
      {
        name: "description",
        content:
          "What ECA Networks stores in your browser, why the theme preference is kept locally, how store referral tags work and how to clear or block cookies.",
      },
      { property: "og:title", content: "Cookie Policy | ECA Networks" },
      {
        property: "og:description",
        content:
          "A short, honest account of the browser storage this site uses and how to control it.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Cookies,
});

const ITEMS = [
  {
    title: "What we set",
    body: "This site keeps a single local preference: the light or dark theme you pick with the toggle. It stays in your browser, it is not sent to us and it carries no identifier.",
  },
  {
    title: "Referral tags to the store",
    body: "Links to ecanetworks.com carry a campaign tag so the store can tell which page sent you. The tag describes the page, never the person.",
  },
  {
    title: "Third party storage",
    body: "Fonts load from Google. Embedded maps and the WhatsApp handoff are operated by their providers and may set their own cookies once you interact with them, under their policies rather than ours.",
  },
  {
    title: "No advertising trackers",
    body: "There is no advertising pixel, no cross site profiling and no behavioural retargeting on this site. If that changes, this page changes with it and the date below moves.",
  },
  {
    title: "Clearing or blocking",
    body: "Every browser lets you clear site data or block storage per site. Blocking it here only means the theme resets to your system setting on the next visit.",
  },
  {
    title: "Questions",
    body: `Write to ${COMPANY.email} or call ${COMPANY.phone} and a person, not a form, answers.`,
  },
];

function Cookies() {
  return (
    <Section className="pt-28 sm:pt-32">
      <div className="rise max-w-3xl">
        <Eyebrow>Cookie policy</Eyebrow>
        <Heading as="h1">
          One preference stored, <span className="ink-text">nothing followed around</span>
        </Heading>
        <Lead className="mt-5">
          {COMPANY.name} runs a brochure and quotation site, not an advertising network, so the
          browser storage list here is genuinely short.
        </Lead>
      </div>

      <div className="mt-12 grid max-w-4xl gap-4">
        {ITEMS.map((item, i) => (
          <Reveal key={item.title} delay={i * 45}>
            <Panel>
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </Panel>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-5 text-sm font-semibold">
        <Link to="/privacy" className="text-primary hover:underline">
          Privacy policy
        </Link>
        <Link to="/terms" className="text-primary hover:underline">
          Terms and conditions
        </Link>
      </div>
    </Section>
  );
}
