import { Jsonld } from "./primitives";

type Item = { q: string; a: string; long?: string };

export function FaqList({ items }: { items: readonly Item[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Jsonld
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: [item.a, item.long].filter(Boolean).join(" "),
            },
          })),
        }}
      />
      {items.map((item) => (
        <details key={item.q} className="gloss group rounded-2xl p-5">
          <summary className="relative z-10 cursor-pointer list-none text-base font-semibold leading-snug">
            <span className="flex items-start justify-between gap-4">
              {item.q}
              <span className="mt-1 text-ember transition group-open:rotate-45">+</span>
            </span>
          </summary>
          <div className="relative z-10 mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p className="font-medium text-foreground/85">{item.a}</p>
            {item.long ? <p>{item.long}</p> : null}
          </div>
        </details>
      ))}
    </div>
  );
}
