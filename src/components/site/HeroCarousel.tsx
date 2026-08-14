import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Clock, MapPin } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { COMPANY, shopUrl } from "@/lib/eca";

type Slide = {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  highlight: string;
  body: string;
  shopLabel: string;
  shopMedium: string;
};

const SLIDES: Slide[] = [
  {
    image:
      "https://images.pexels.com/photos/4280696/pexels-photo-4280696.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "Fibre optic connectors and pigtails on a patch panel",
    eyebrow: "Fibre Optic Infrastructure",
    title: "The cable and test kit",
    highlight: "Kenyan networks",
    body: "ADSS, figure 8, closures, pigtails and fusion splicers stocked in Embakasi. Send the route and the desk returns a priced list with stock status per line.",
    shopLabel: "Shop fibre products",
    shopMedium: "hero-fibre",
  },
  {
    image:
      "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "Server rack with glowing indicator lights in a data centre",
    eyebrow: "Networking and ISP Hardware",
    title: "Routing, switching and",
    highlight: "wireless backhaul",
    body: "MikroTik, PoE switching, point to point radios and Starlink equipment for operators who bill by the uptime hour. Specify it once and the BOM comes back checked.",
    shopLabel: "Shop networking gear",
    shopMedium: "hero-networking",
  },
  {
    image:
      "https://images.pexels.com/photos/96612/pexels-photo-96612.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "Outdoor security cameras mounted on a pole against blue sky",
    eyebrow: "CCTV, Security and PABX",
    title: "Surveillance and voice over the",
    highlight: "cabling you already own",
    body: "IP cameras, NVR storage sizing, access control and IP telephony that land on the same infrastructure. PoE budget and retention period calculated before hardware ships.",
    shopLabel: "Shop security systems",
    shopMedium: "hero-security",
  },
];

const AUTO_ADVANCE_MS = 7000;

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((index: number) => {
    setActive((index + SLIDES.length) % SLIDES.length);
  }, []);

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => {
      setActive((current) => (current + 1) % SLIDES.length);
    }, AUTO_ADVANCE_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active, paused]);

  return (
    <section
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative grid min-h-[34rem] items-stretch lg:min-h-[40rem]">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.eyebrow}
            className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              i === active
                ? "z-10 scale-100 opacity-100"
                : "z-0 scale-105 opacity-0"
            }`}
            aria-hidden={i !== active}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="absolute inset-0 size-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/92 via-background/72 to-background/30 dark:from-background/95 dark:via-background/80 dark:to-background/40" />
            <div className="absolute inset-0 bg-primary/8 mix-blend-color" />
          </div>
        ))}

        <div className="relative z-20 mx-auto flex w-full max-w-6xl items-center px-5">
          <div className="w-full max-w-2xl py-16 sm:py-24">
            {SLIDES.map((slide, i) => (
              <div
                key={slide.eyebrow}
                className={`${i === active ? "block" : "hidden"}`}
              >
                <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/12 px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-primary">
                  <span className="size-1.5 rounded-full bg-ember" />
                  {slide.eyebrow}
                </p>
                <h1 className="text-balance text-[clamp(2.4rem,5.4vw,4.4rem)] font-extrabold leading-[1.02] tracking-[-0.03em]">
                  {slide.title}{" "}
                  <span className="ink-text">{slide.highlight}</span>
                </h1>
                <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {slide.body}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    to="/contact"
                    className="ink-fill inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lift)] transition hover:brightness-110 dark:text-background"
                  >
                    Request a quote
                    <ArrowRight className="size-4" />
                  </Link>
                  <a
                    href={shopUrl(slide.shopMedium)}
                    target="_blank"
                    rel="noreferrer"
                    className="gloss gloss-hover inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {slide.shopLabel}
                      <ArrowUpRight className="size-4 text-ember" />
                    </span>
                  </a>
                </div>
              </div>
            ))}

            <p className="mt-4 text-xs text-muted-foreground">{COMPANY.responseLine}</p>

            <div className="mt-10 flex items-center gap-3">
              {SLIDES.map((slide, i) => (
                <button
                  key={slide.eyebrow}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Show slide ${i + 1}: ${slide.eyebrow}`}
                  className="group relative h-1.5 overflow-hidden rounded-full bg-foreground/15 transition-all"
                  style={{ width: i === active ? "3.5rem" : "1.75rem" }}
                >
                  {i === active && !paused ? (
                    <span
                      key={active}
                      className="absolute inset-0 origin-left bg-primary"
                      style={{
                        animation: `hero-progress ${AUTO_ADVANCE_MS}ms linear forwards`,
                      }}
                    />
                  ) : i === active ? (
                    <span className="absolute inset-0 bg-primary" />
                  ) : null}
                </button>
              ))}
              <span className="ml-2 text-xs font-medium tabular-nums text-muted-foreground">
                {String(active + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-5 right-5 z-20 hidden items-center gap-2 lg:flex">
          <span className="gloss inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs text-foreground/90">
            <MapPin className="relative z-10 size-3.5 text-primary" />
            <span className="relative z-10">{COMPANY.address}</span>
          </span>
          <span className="gloss inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs text-foreground/90">
            <Clock className="relative z-10 size-3.5 text-primary" />
            <span className="relative z-10">{COMPANY.hours}</span>
          </span>
        </div>
      </div>

      <style>{`
        @keyframes hero-progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
}
