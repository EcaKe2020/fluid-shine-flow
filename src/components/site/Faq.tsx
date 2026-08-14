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
            acceptedAnswer: { "@type": "Answer", text: [item.a, item.long].filter(Boolean).join(" ") },
          })),
        }}
      />
      <div className="space-y-4">
        {items.map((item) => (
          <details key={item.q} className="faq-item" data-testid="faq-item">
            <summary className="flex cursor-pointer items-start justify-between gap-4 p-5 text-base font-semibold text-foreground">
              {item.q}
              <span className="mt-0.5 shrink-0 text-xl font-light text-primary transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="space-y-3 px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
              <p className="font-medium text-foreground">{item.a}</p>
              {item.long ? <p>{item.long}</p> : null}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
