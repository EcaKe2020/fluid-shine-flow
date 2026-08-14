import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ChevronRight, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { shopUrl, WHATSAPP_URL } from "@/lib/eca";

/** Small caps section label used above every H2. */
export function Label({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-ember">{children}</p>
  );
}

/** Counts a numeric value up once it scrolls into view. */
export function CountUp({
  value,
  suffix = "",
  className = "",
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / 1100);
          const eased = 1 - Math.pow(1 - t, 3);
          setShown(Math.round(value * eased));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { rootMargin: "-30px" },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {shown.toLocaleString("en-KE")}
      {suffix}
    </span>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
        <Link to="/" className="hover:text-primary">
          Home
        </Link>
        {items.map((item) => (
          <span key={item.label} className="flex items-center gap-1.5">
            <ChevronRight className="size-3" />
            {item.to ? (
              <Link to={item.to} className="hover:text-primary">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground/80">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
      <Jsonld
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [{ label: "Home", to: "/" }, ...items].map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.label,
            ...(item.to ? { item: `https://ecanetworks.co.ke${item.to}` } : {}),
          })),
        }}
      />
    </>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-5 py-16 sm:py-24 ${className}`}>
      {children}
    </section>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-40px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${shown ? "rise" : "opacity-0"}`}
      style={shown ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
      <span className="size-1.5 rounded-full bg-ember" />
      {children}
    </p>
  );
}

export function Heading({
  children,
  as: Tag = "h2",
  className = "",
}: {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <Tag
      className={`text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem] ${className}`}
    >
      {children}
    </Tag>
  );
}

export function Lead({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg ${className}`}>
      {children}
    </p>
  );
}

export function QuoteButton({ label = "Request a quote" }: { label?: string }) {
  return (
    <Link
      to="/contact"
      className="ink-fill inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lift)] transition hover:brightness-110 dark:text-background"
    >
      {label}
      <ArrowRight className="size-4" />
    </Link>
  );
}

export function ShopButton({ label = "Shop online" }: { label?: string }) {
  return (
    <a
      href={SHOP_URL}
      target="_blank"
      rel="noreferrer"
      className="gloss gloss-hover inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground"
    >
      <span className="relative z-10 flex items-center gap-2">
        {label}
        <ArrowUpRight className="size-4 text-ember" />
      </span>
    </a>
  );
}

export function WhatsAppButton({ label = "Chat with a technician" }: { label?: string }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-primary underline-offset-4 hover:underline"
    >
      <MessageCircle className="size-4" />
      {label}
    </a>
  );
}

export function Panel({
  children,
  className = "",
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div className={`gloss ${hover ? "gloss-hover" : ""} rounded-3xl p-6 ${className}`}>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function CtaBand({
  title = "Tell us what the site needs and the list comes back priced",
  body = "Send a drawing, a rough part list or a site photograph. The technical desk checks the specification, confirms stock and returns a quotation you can hand to procurement.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <Section>
      <Reveal>
        <div className="gloss rounded-[2rem] px-6 py-12 text-center sm:px-14">
          <div className="relative z-10 mx-auto max-w-2xl">
            <Heading>{title}</Heading>
            <Lead className="mx-auto mt-4">{body}</Lead>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <QuoteButton />
              <ShopButton />
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function Jsonld({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json">{JSON.stringify(data)}</script>;
}
