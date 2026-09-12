import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { ARTICLES, getArticle } from "@/lib/articles";
import { Button } from "@/components/ui/button";
import { CtaBand, Jsonld, Section } from "@/components/site/primitives";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.title} | ECA Networks` },
      { name: "description", content: loaderData.answer },
      { property: "og:title", content: `${loaderData.title} | ECA Networks` },
      { property: "og:description", content: loaderData.answer },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ] : [],
    links: loaderData ? [{ rel: "canonical", href: `https://fluid-shine-flow.lovable.app/insights/${loaderData.slug}` }] : [],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  const article = Route.useLoaderData();
  const related = ARTICLES.filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <>
      <Jsonld data={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: article.title,
        description: article.answer,
        author: { "@type": "Organization", name: "ECA Networks Ltd" },
        publisher: { "@type": "Organization", name: "ECA Networks Ltd" },
        mainEntityOfPage: `https://fluid-shine-flow.lovable.app/insights/${article.slug}`,
      }} />
      <Section className="page-pad pb-12 pt-28 sm:pt-36">
        <div className="mx-auto max-w-4xl">
          <Link to="/insights" className="inline-flex items-center gap-2 text-sm font-semibold text-primary"><ArrowLeft className="size-4" /> All insights</Link>
          <p className="mt-12 text-xs font-bold uppercase tracking-[0.18em] text-primary">{article.category} · {article.read}</p>
          <h1 className="mt-5 font-serif text-[clamp(2.8rem,6vw,5.5rem)] font-medium leading-[0.98] text-foreground">{article.title}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground">{article.intro}</p>
          <div className="mt-10 bg-primary p-6 text-primary-foreground sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] opacity-75">Short answer</p>
            <p className="mt-3 text-lg font-semibold leading-relaxed sm:text-xl">{article.answer}</p>
          </div>
        </div>
      </Section>
      <Section className="py-10 sm:py-16">
        <article className="mx-auto max-w-3xl space-y-12">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{section.heading}</h2>
              <div className="mt-5 space-y-4 text-base leading-8 text-muted-foreground">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              {section.points ? <ul className="mt-6 grid gap-3 sm:grid-cols-2">{section.points.map((point) => <li key={point} className="flex items-start gap-3 text-sm text-foreground"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{point}</li>)}</ul> : null}
            </section>
          ))}
        </article>
      </Section>
      <Section className="py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold text-foreground">Related reading</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">{related.map((item) => <article key={item.slug} className="sheen flex h-full flex-col p-6"><p className="text-xs font-bold uppercase text-primary">{item.category}</p><h3 className="mt-3 text-lg font-bold text-foreground">{item.title}</h3><Button asChild variant="link" className="mt-5 h-auto justify-start p-0"><Link to="/insights/$slug" params={{ slug: item.slug }}>Read article <ArrowRight /></Link></Button></article>)}</div>
        </div>
      </Section>
      <CtaBand title="Need help with the specification?" body="Send the drawing, quantities or site notes. The technical desk will check the parts before you order." />
    </>
  );
}