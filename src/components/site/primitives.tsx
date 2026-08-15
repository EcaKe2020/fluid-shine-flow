import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, MessageCircle, Linkedin, Mail, MapPin } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { shopUrl, WHATSAPP_URL } from "@/lib/eca";

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

export function Section({
  children,
  className = "",
  id,
  style,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}) {
  return (
    <section
      id={id}
      style={style}
      className={`section-pad py-20 ${className}`}
    >
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
    <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#00D4FF]">
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
      className={`text-balance text-3xl font-bold leading-tight tracking-[-0.02em] text-[#1A1A1A] sm:text-4xl lg:text-[2.5rem] ${className}`}
    >
      {children}
    </Tag>
  );
}

export function Lead({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`max-w-2xl text-pretty text-base leading-relaxed text-[#666666] sm:text-lg ${className}`}>
      {children}
    </p>
  );
}

export function QuoteButton({ label = "Request a quote" }: { label?: string }) {
  return (
    <Link
      to="/contact"
      className="btn-radius inline-flex items-center gap-2 bg-[#00D4FF] px-6 py-3 text-sm font-semibold text-[#0B0C10] transition-opacity hover:opacity-90"
    >
      {label}
      <ArrowRight className="size-4" />
    </Link>
  );
}

export function ShopButton({
  label = "Shop online",
  medium = "body-button",
}: {
  label?: string;
  medium?: string;
}) {
  return (
    <a
      href={shopUrl(medium)}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A1A1A] transition-colors hover:text-[#00D4FF]"
    >
      {label}
      <ArrowUpRight className="size-4 text-[#00D4FF]" />
    </a>
  );
}

export function WhatsAppButton({ label = "Chat with a technician" }: { label?: string }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 text-sm text-[#666666] transition-colors hover:text-[#00D4FF]"
    >
      <MessageCircle className="size-4" />
      {label}
    </a>
  );
}

/** Flat panel — no card, no shadow, no border. Just a div. */
export function Panel({
  children,
  className = "",
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div className={className}>
      {children}
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
      <div className="sheen max-w-3xl p-8 sm:p-12">
        <Heading>{title}</Heading>
        <Lead className="mt-4">{body}</Lead>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <QuoteButton />
          <ShopButton medium="cta-band" />
          <WhatsAppButton />
        </div>
      </div>
    </Section>
  );
}


export function Jsonld({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json">{JSON.stringify(data)}</script>;
}

export { PriceTable } from "./PriceTable";

interface TeamMember {
  name: string;
  title: string;
  image: string;
}

interface TeamCardProps {
  member: TeamMember;
  delay?: number;
}

export function TeamCard({ member, delay = 0 }: TeamCardProps) {
  return (
    <Reveal delay={delay}>
      <div className="group relative bg-white rounded-2xl border border-[#E5E5E5] overflow-hidden transition-all duration-300 hover:border-[#00D4FF]/50 hover:shadow-[0_20px_40px_rgba(0,212,255,0.08)] hover:-translate-y-1">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            loading="lazy"
            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex items-center gap-2">
              <a
                href={`https://linkedin.com/in/${member.name.toLowerCase().replace(/\s+/g, '-')}`}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-full bg-white/90 text-[#1A1A1A] hover:bg-white transition-colors"
                aria-label={`Connect with ${member.name} on LinkedIn`}
              >
                <Linkedin className="size-4" />
              </a>
              <a
                href={`mailto:${member.name.toLowerCase().replace(/\s+/g, '.')}@ecanetworks.co.ke`}
                className="p-1.5 rounded-full bg-white/90 text-[#1A1A1A] hover:bg-white transition-colors"
                aria-label={`Email ${member.name}`}
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="p-4">
          <p className="font-bold text-[#1A1A1A] group-hover:text-[#00D4FF] transition-colors">{member.name}</p>
          <p className="text-sm text-[#666666] mt-1">{member.title}</p>
        </div>
      </div>
    </Reveal>
  );
}
