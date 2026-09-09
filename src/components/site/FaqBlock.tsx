import { FaqList } from "./Faq";
import { Eyebrow, Heading, Section } from "./primitives";

type Item = { q: string; a: string; long?: string };

/** Question and answer block with schema markup, used near the foot of a page. */
export function FaqBlock({
  items,
  title = "Questions buyers ask us",
  eyebrow = "Answers",
}: {
  items: readonly Item[];
  title?: string;
  eyebrow?: string;
}) {
  return (
    <Section className="pt-0">
      <div className="mx-auto max-w-3xl">
        <Eyebrow center>{eyebrow}</Eyebrow>
        <Heading center>{title}</Heading>
        <div className="mt-10">
          <FaqList items={items} />
        </div>
      </div>
    </Section>
  );
}
