import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, MessageCircle } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { COMPANY, shopUrl, WHATSAPP_URL } from "@/lib/eca";

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

const HERO_STATS = [
  { value: "10,000+", label: "customers" },
  { value: "5,000+", label: "products" },
  { value: "50+", label: "brands" },
  { value: "47", label: "counties" },
] as const;

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((index: number) => {
    setActive((index + SLIDES.length) % SLIDES.length);
  }, []);

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
      className="relative min-h-screen bg-[#0B0C10] section-vertical"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex min-h-[calc(100vh-4rem)] flex-col lg:flex-row">
        {/* Text left 55% */}
        <div className="flex w-full items-center px-[clamp(24px,5vw,80px)] py-12 lg:w-[55%] lg:py-0">
          <div className="w-full max-w-2xl text-col">
            {SLIDES.map((slide, i) => (
              <div key={slide.eyebrow} className={i === active ? "block" : "hidden"}>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#00D4FF]">
                  NAIROBI, SERVING ALL 47 COUNTIES
                </p>
                <h1 className="text-balance text-[clamp(2rem,4.5vw,3.8rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-white">
                  {slide.title} <span className="text-[#00D4FF]">{slide.highlight}</span>
                </h1>
                <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-[#8B8F98] sm:text-lg">
                  {slide.body}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    to="/contact"
                    className="btn-radius inline-flex items-center gap-2 bg-[#00D4FF] px-6 py-3 text-sm font-semibold text-[#0B0C10] transition-opacity hover:opacity-90"
                  >
                    Request a quote
                    <ArrowRight className="size-4" />
                  </Link>
                  <a
                    href={shopUrl(slide.shopMedium)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-[#00D4FF]"
                  >
                    {slide.shopLabel}
                    <ArrowUpRight className="size-4 text-[#00D4FF]" />
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-[#00D4FF]"
                  >
                    <MessageCircle className="size-4" />
                    Chat with a technician
                  </a>
                </div>
              </div>
            ))}

            {/* Carousel indicators */}
            <div className="mt-10 flex items-center gap-2">
              {SLIDES.map((slide, i) => (
                <button
                  key={slide.eyebrow}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Show slide ${i + 1}: ${slide.eyebrow}`}
                  className="relative h-0.5 overflow-hidden bg-white/20 transition-all"
                  style={{ width: i === active ? "3rem" : "1.5rem" }}
                >
                  {i === active && !paused ? (
                    <span
                      key={active}
                      className="absolute inset-0 origin-left bg-[#00D4FF]"
                      style={{ animation: `hero-progress ${AUTO_ADVANCE_MS}ms linear forwards` }}
                    />
                  ) : i === active ? (
                    <span className="absolute inset-0 bg-[#00D4FF]" />
                  ) : null}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Image right 45% — full-bleed to right edge */}
        <div className="relative w-full overflow-hidden lg:w-[45%] hero-image-curve">
          {SLIDES.map((slide, i) => (
            <div
              key={slide.eyebrow}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={i !== active}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="size-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: "linear-gradient(to right, rgba(11,12,16,0.8) 0%, transparent 20%)",
            }}
          />
        </div>
      </div>

      {/* Stats row — full width, no card, no background */}
      <div
        className="flex flex-wrap items-center gap-8 px-[clamp(24px,5vw,80px)] py-8 text-white lg:gap-16"
        style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
      >
        {HERO_STATS.map((stat, idx) => (
          <div
            key={stat.label}
            className="flex items-baseline gap-2"
            style={
              idx < HERO_STATS.length - 1
                ? {
                    paddingRight: 16,
                    marginRight: 16,
                    borderRight: "1px solid rgba(255,255,255,0.15)",
                  }
                : undefined
            }
          >
            <span className="stat-number">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
