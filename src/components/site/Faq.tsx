import { Jsonld } from "./primitives";

type Item = { q: string; a: string; long?: string };

export function FaqList({ items }: { items: readonly Item[] }) {
  return (
    <div className="w-full">
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
        <details key={item.q} className="group border-b border-border py-6">
          <summary className="flex cursor-pointer items-start justify-between gap-4 text-base font-semibold text-foreground">
            {item.q}
            <span className="mt-0.5 shrink-0 text-xl font-light text-primary transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p className="font-medium text-foreground">{item.a}</p>
            {item.long ? <p>{item.long}</p> : null}
          </div>
        </details>
      ))}
    </div>
  );
}
