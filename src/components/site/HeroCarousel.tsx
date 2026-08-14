import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, MessageCircle } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { shopUrl, WHATSAPP_URL } from "@/lib/eca";

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
    image: "https://images.pexels.com/photos/4280696/pexels-photo-4280696.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "Fibre optic connectors and pigtails on a patch panel",
    eyebrow: "Fibre Optic Infrastructure",
    title: "The cable and test kit behind",
    highlight: "Kenyan networks",
    body: "ADSS, figure 8, closures, pigtails and fusion splicers stocked in Embakasi. Send the route and the desk returns a priced list with stock status per line.",
    shopLabel: "Shop fibre products",
    shopMedium: "hero-fibre",
  },
  {
    image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "Server rack with glowing indicator lights in a data centre",
    eyebrow: "Networking and ISP Hardware",
    title: "Routing, switching and",
    highlight: "wireless backhaul",
    body: "MikroTik, PoE switching, point to point radios and Starlink equipment for operators who bill by the uptime hour. Specify it once and the BOM comes back checked.",
    shopLabel: "Shop networking gear",
    shopMedium: "hero-networking",
  },
  {
    image: "https://images.pexels.com/photos/96612/pexels-photo-96612.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "Outdoor security cameras mounted on a pole against blue sky",
    eyebrow: "CCTV, Security and PABX",
    title: "Surveillance and voice over",
    highlight: "the cabling you already own",
    body: "IP cameras, NVR storage sizing, access control and IP telephony that land on the same infrastructure. PoE budget and retention period calculated before hardware ships.",
    shopLabel: "Shop security systems",
    shopMedium: "hero-security",
  },
];

const AUTO_ADVANCE_MS = 6500;

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
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [active, paused]);

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-[#0a0b0f]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.eyebrow}
            className={`absolute inset-0 transition-all duration-[1200ms] ease-out ${
              i === active ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            aria-hidden={i !== active}
          >
            <img src={slide.image} alt={slide.alt} className="size-full object-cover" loading={i === 0 ? "eager" : "lazy"} />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0b0f] via-[#0a0b0f]/85 to-[#0a0b0f]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0f] via-transparent to-[#0a0b0f]/30" />
      </div>

      <div className="hero-blob" style={{ width: 500, height: 500, top: "-10%", left: "5%", background: "radial-gradient(circle, #0066ff, transparent 70%)" }} />
      <div className="hero-blob" style={{ width: 400, height: 400, bottom: "10%", right: "10%", background: "radial-gradient(circle, #ff6b1a, transparent 70%)", animationDelay: "4s" }} />

      <div className="relative z-10 flex min-h-screen flex-col">
        <div className="flex flex-1 items-center px-[clamp(24px,5vw,80px)] pt-24 pb-12">
          <div className="w-full max-w-3xl">
            {SLIDES.map((slide, i) => (
              <div
                key={slide.eyebrow}
                className={i === active ? "block" : "hidden"}
                style={i === active ? { animation: "rise 0.8s cubic-bezier(0.16,1,0.3,1) both" } : undefined}
              >
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                  <span className="size-2 rounded-full bg-[#00d4ff]" style={{ animation: "pulse-glow 2s ease-in-out infinite" }} />
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/80">Nairobi, serving all 47 counties</span>
                </div>
                <h1 className="text-balance text-[clamp(2.2rem,5vw,4.2rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-white">
                  {slide.title} <span className="ink-text">{slide.highlight}</span>
                </h1>
                <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">{slide.body}</p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link to="/contact" className="btn-radius inline-flex items-center gap-2 bg-[#0066ff] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0066ff]/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#0066ff]/40">
                    Request a quote <ArrowRight className="size-4" />
                  </Link>
                  <a href={shopUrl(slide.shopMedium)} target="_blank" rel="noreferrer" className="btn-radius inline-flex items-center gap-2 border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10">
                    {slide.shopLabel} <ArrowUpRight className="size-4 text-[#00d4ff]" />
                  </a>
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-[#00d4ff]">
                    <MessageCircle className="size-4" /> Chat with a technician
                  </a>
                </div>
              </div>
            ))}
            <div className="mt-12 flex items-center gap-3">
              {SLIDES.map((slide, i) => (
                <button
                  key={slide.eyebrow}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Show slide ${i + 1}: ${slide.eyebrow}`}
                  className="group relative h-1.5 overflow-hidden rounded-full bg-white/15 transition-all"
                  style={{ width: i === active ? "3rem" : "1.5rem" }}
                >
                  {i === active && !paused ? (
                    <span key={active} className="absolute inset-0 origin-left rounded-full bg-[#00d4ff]" style={{ animation: `hero-progress ${AUTO_ADVANCE_MS}ms linear forwards` }} />
                  ) : i === active ? (
                    <span className="absolute inset-0 rounded-full bg-[#00d4ff]" />
                  ) : null}
                </button>
              ))}
              <span className="ml-3 text-xs font-medium text-white/40">
                {String(active + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-6 px-[clamp(24px,5vw,80px)] py-8 text-white sm:gap-12 lg:gap-16" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          {HERO_STATS.map((stat, idx) => (
            <div key={stat.label} className="flex items-baseline gap-2" style={idx < HERO_STATS.length - 1 ? { paddingRight: 12, marginRight: 12, borderRight: "1px solid rgba(255,255,255,0.1)" } : undefined}>
              <span className="stat-number text-white">{stat.value}</span>
              <span className="stat-label text-white/50">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
