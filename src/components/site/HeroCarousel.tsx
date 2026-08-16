import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";
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
    body: "ADSS, figure 8, closures, pigtails and fusion splicers stocked in Nairobi and Eldoret. Send the route and the desk returns a priced list with stock status per line.",
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
  const [progress, setProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setActive((index + SLIDES.length) % SLIDES.length);
    setProgress(0);
  }, []);

  const goNext = useCallback(() => {
    goTo(active + 1);
  }, [active, goTo]);

  const goPrev = useCallback(() => {
    goTo(active - 1);
  }, [active, goTo]);

  const togglePause = useCallback(() => {
    setPaused((prev) => !prev);
  }, []);

  const startProgress = useCallback(() => {
    if (progressRef.current) clearInterval(progressRef.current);
    const start = Date.now();
    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - start;
      const p = Math.min(100, (elapsed / AUTO_ADVANCE_MS) * 100);
      setProgress(p);
      if (p >= 100) {
        clearInterval(progressRef.current!);
        progressRef.current = null;
      }
    }, 16);
  }, []);

  const resetProgress = useCallback(() => {
    if (progressRef.current) {
      clearInterval(progressRef.current);
      progressRef.current = null;
    }
    setProgress(0);
  }, []);

  useEffect(() => {
    if (paused || isHovering) {
      if (timerRef.current) clearTimeout(timerRef.current);
      resetProgress();
      return;
    }
    timerRef.current = setTimeout(() => {
      setActive((current) => (current + 1) % SLIDES.length);
    }, AUTO_ADVANCE_MS);
    startProgress();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      resetProgress();
    };
  }, [active, paused, isHovering, startProgress, resetProgress]);

  const activeSlide = SLIDES[active] ?? SLIDES[0]!;

  return (
    <section
      className="relative min-h-screen pt-16"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Full-screen background images */}
      <div className="absolute inset-0 z-0">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.eyebrow}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
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
            {/* Side gradient for text readability - fades toward the right */}
            <div className="absolute inset-0 bg-[#07111c]/25" />
            <div className="absolute inset-y-0 left-0 w-full max-w-[58rem] bg-gradient-to-r from-[#07111c]/95 via-[#07111c]/72 to-transparent" />
            {/* Subtle bottom vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07111c]/60 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Top nav spacer */}
        <div className="h-16" />

        {/* Main content area - centered vertically */}
        <main className="flex-1 flex items-center px-[clamp(24px,5vw,80px)] pb-36 pt-24 sm:pb-40 sm:pt-28">
          <div className="w-full max-w-4xl">
            <div className="relative max-w-3xl">
              {/* Eyebrow */}
              <p
                className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#00D4FF] rise"
                style={{ animationDelay: "0ms" }}
              >
                NAIROBI, SERVING ALL 47 COUNTIES
              </p>

              {/* Title with highlight */}
              <h1
                className="text-balance text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-white rise"
                style={{ animationDelay: "100ms" }}
              >
                {activeSlide.title}{" "}
                <span className="relative text-[#00D4FF]">
                  {activeSlide.highlight}
                  <span className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#00D4FF] to-transparent opacity-30 -translate-y-1/2" />
                </span>
              </h1>

              {/* Body */}
              <p
                className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-[#A0A4AE] sm:text-lg rise"
                style={{ animationDelay: "200ms" }}
              >
                {activeSlide.body}
              </p>

              {/* CTAs */}
              <div
                className="mt-10 flex flex-wrap items-center gap-4 rise"
                style={{ animationDelay: "300ms" }}
              >
                <Link
                  to="/contact"
                  className="btn-radius inline-flex items-center gap-2 bg-[#00D4FF] px-7 py-3.5 text-sm font-semibold text-[#0B0C10] transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-[0_8px_30px_rgba(0,212,255,0.3)]"
                >
                  Request a quote
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={shopUrl(activeSlide.shopMedium)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-radius inline-flex items-center gap-2 border border-white/35 bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-[#00D4FF] hover:bg-[#00D4FF] hover:text-[#07111c]"
                >
                  {activeSlide.shopLabel}
                  <ArrowUpRight className="size-4" />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-white/80 transition-colors hover:text-[#00D4FF]"
                >
                  <MessageCircle className="size-4" />
                  Chat with a technician
                </a>
              </div>
            </div>
          </div>
        </main>

        {/* Carousel controls - bottom center */}
        <div className="absolute bottom-0 left-1/2 mb-8 flex w-full -translate-x-1/2 flex-col items-center gap-5 px-4 sm:mb-10">
          {/* Progress indicators */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous slide"
              className="p-2.5 rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all"
            >
              <ChevronLeft className="size-5" />
            </button>

            <div className="flex items-center gap-2">
              {SLIDES.map((slide, i) => (
                <button
                  key={slide.eyebrow}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Show slide ${i + 1}: ${slide.eyebrow}`}
                  className="relative h-1 overflow-hidden bg-white/20 transition-all flex-1"
                  style={{ width: i === active ? "5rem" : "1.5rem" }}
                >
                  {i === active && (
                    <span
                      className="absolute inset-0 origin-left bg-gradient-to-r from-[#00D4FF] to-[#00D4FF]/50"
                      style={{
                        transform: `scaleX(${progress / 100})`,
                        transformOrigin: "left center",
                      }}
                    />
                  )}
                  {i === active && progress >= 100 && (
                    <span className="absolute inset-0 bg-[#00D4FF]" />
                  )}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next slide"
              className="p-2.5 rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>

          {/* Pause/Play + slide counter */}
          <div className="flex items-center gap-4 text-xs text-white/50">
            <span>
              {String(active + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={togglePause}
              aria-label={paused ? "Resume auto-play" : "Pause auto-play"}
              className="p-1.5 rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all"
            >
              {paused ? <Play className="size-4" /> : <Pause className="size-4" />}
            </button>
          </div>
        </div>

        {/* Stats row - above footer */}
        <div
          className="relative w-full px-[clamp(24px,5vw,80px)] py-8 text-white"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {HERO_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="flex items-baseline gap-2 text-center"
                style={{ animationDelay: `${i * 100 + 400}ms` }}
              >
                <span className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                  {stat.value}
                </span>
                <span className="text-xs text-[#8B8F98]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
