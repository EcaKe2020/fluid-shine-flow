import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { shopUrl } from "@/lib/eca";
import hero from "@/assets/hero.jpg";
import hero1 from "@/assets/hero1.webp";
import hero3 from "@/assets/hero3.webp";
import hero4 from "@/assets/hero4.webp";
import hero5 from "@/assets/hero5.webp";
import hero6 from "@/assets/hero6.webp";
import rack from "@/assets/rack.jpg";
import spool from "@/assets/product-spool.jpg";
import switchImg from "@/assets/product-switch.jpg";
import router from "@/assets/product-router.jpg";
import cabinet from "@/assets/product-cabinet.jpg";
import splicer from "@/assets/product-splicer.jpg";
import lightSpool from "@/assets/light-spool.jpg";
import lightSwitch from "@/assets/light-switch.jpg";
import lightRouter from "@/assets/light-router.jpg";
import lightCabinet from "@/assets/light-cabinet.jpg";
import lightSplicer from "@/assets/light-splicer.jpg";

type Product = {
  name: string;
  category: string;
  image: string;
  imageLight: string;
  alt: string;
};

const HERO_SLIDES = [
  {
    image: hero,
    title: "Fibre infrastructure.",
    subtitle: "Ready on demand.",
  },
  {
    image: hero1,
    title: "Networking hardware.",
    subtitle: "Built for uptime.",
  },
  {
    image: hero3,
    title: "Security systems.",
    subtitle: "Connected to perform.",
  },
  {
    image: hero4,
    title: "Infrastructure projects.",
    subtitle: "Supplied without delay.",
  },
  {
    image: hero5,
    title: "Technical equipment.",
    subtitle: "Ready for deployment.",
  },
  {
    image: hero6,
    title: "Enterprise connectivity.",
    subtitle: "Delivered across Kenya.",
  },
] as const;

const PRODUCTS: Product[] = [
  {
    name: "Fibre Optic Spool",
    category: "Cabling",
    image: spool,
    imageLight: lightSpool,
    alt: "Fibre optic cable spool",
  },
  {
    name: "Nexus-7000 Switch",
    category: "Access Layer",
    image: switchImg,
    imageLight: lightSwitch,
    alt: "Managed network switch",
  },
  {
    name: "Core Router",
    category: "Backbone Routing",
    image: router,
    imageLight: lightRouter,
    alt: "Enterprise network router",
  },
  {
    name: "Data Center Rack",
    category: "Compute Node",
    image: cabinet,
    imageLight: lightCabinet,
    alt: "Data center server rack",
  },
  {
    name: "Fusion Splicer Kit",
    category: "Deployment Tools",
    image: splicer,
    imageLight: lightSplicer,
    alt: "Fibre fusion splicer kit",
  },
  {
    name: "GPON OLT 4-Port",
    category: "Active Equipment",
    image: router,
    imageLight: lightRouter,
    alt: "GPON optical line terminal",
  },
  {
    name: "Managed PoE Switch",
    category: "Networking",
    image: switchImg,
    imageLight: lightSwitch,
    alt: "Managed PoE switch",
  },
  {
    name: "Data Cabinet 12U",
    category: "Enclosures",
    image: cabinet,
    imageLight: lightCabinet,
    alt: "12U data cabinet",
  },
  {
    name: "Fibre Toolkit Complete",
    category: "Test Equipment",
    image: splicer,
    imageLight: lightSplicer,
    alt: "Complete fibre toolkit",
  },
  {
    name: "ADSS 24-Core Cable",
    category: "Outdoor Fibre",
    image: spool,
    imageLight: lightSpool,
    alt: "ADSS outdoor fibre cable",
  },
];

const HERO_AUTO_MS = 6000;
const PRODUCT_AUTO_MS = 4000;

export function Hero() {
  const [heroSlide, setHeroSlide] = useState(0);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const bgTimer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, HERO_AUTO_MS);
    return () => clearInterval(bgTimer);
  }, []);

  const nextProduct = useCallback(() => {
    setActive((current) => (current + 1) % PRODUCTS.length);
  }, []);

  const previousProduct = useCallback(() => {
    setActive((current) => (current - 1 + PRODUCTS.length) % PRODUCTS.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(nextProduct, PRODUCT_AUTO_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active, nextProduct, paused]);

  const visibleProducts = Array.from({ length: 6 }, (_, index) => {
    return PRODUCTS[(active + index) % PRODUCTS.length]!;
  });

  const currentSlide = HERO_SLIDES[heroSlide] ?? HERO_SLIDES[0];

  return (
    <section className="relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden">
      {/* Full-Screen Background Carousel */}
      <div className="absolute inset-0 -z-10 bg-black">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === heroSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt=""
              className="size-full object-cover object-center transition-transform duration-10000 ease-linear"
            />
            <div className="absolute inset-0 bg-black/10 dark:bg-black/30" />
            <div className="absolute inset-x-0 bottom-0 h-[82%] bg-gradient-to-t from-background/95 via-background/82 to-transparent dark:from-background dark:via-background/78" />
          </div>
        ))}
      </div>

      {/* Hero Typography Content - Centered just above the product tray */}
      <div className="relative z-10 flex flex-1 items-center justify-end px-4 pb-7 pt-20 text-center sm:px-6 sm:pb-10 lg:px-8">
        <div className="w-full max-w-3xl mx-auto translate-y-10 sm:translate-y-16">
        <h1 className="mx-auto max-w-[620px] font-serif text-[clamp(29px,3.5vw,48px)] font-bold leading-[1.04] tracking-tight text-[#16324f] dark:text-white">
          {currentSlide.title}
          <span className="block text-primary dark:text-white">
            {currentSlide.subtitle}
          </span>
        </h1>

        <p className="mx-auto mt-3 max-w-[540px] text-sm leading-relaxed text-[#16324f]/75 dark:text-white/80 sm:text-base">
          Providing robust hardware solutions for the backbone of modern enterprise networking,
          available 24/7 for immediate local deployment and configuration.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/contact"
            className="btn-radius inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Request a Quote
            <ArrowRight className="size-4" />
          </Link>
          <a
            href={shopUrl("hero")}
            target="_blank"
            rel="noreferrer"
            className="btn-radius inline-flex items-center gap-2 border border-[#16324f]/25 bg-background/80 px-6 py-3 text-sm font-semibold text-[#16324f] transition-colors hover:bg-[#16324f] hover:text-white dark:border-white/40 dark:bg-white/10 dark:text-white dark:hover:bg-white dark:hover:text-black"
          >
            Explore Hardware
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        {/* Hero Background Slide Indicators */}
        <div className="mt-6 flex justify-center gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setHeroSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === heroSlide ? "w-8 bg-primary" : "w-2 bg-foreground/35 hover:bg-foreground/70 dark:bg-white/50 dark:hover:bg-white"
              }`}
            />
          ))}
        </div>
        </div>
      </div>

      {/* Product Tray - Lowered to the bottom, completely borderless background */}
      <div
        className="relative z-20 w-full px-4 pb-8 sm:px-6 lg:px-8"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="mx-auto max-w-[1400px]">
          {/* Centrally Located Header */}
          <div className="mb-4 text-center">
            <h2 className="text-[11px] font-bold uppercase tracking-widest text-foreground/80 dark:text-white/90 sm:text-xs">
              Ready to Order Now Products
            </h2>
          </div>

          <div className="relative">
            <div className="overflow-hidden py-1">
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {visibleProducts.map((product) => (
  <article
    key={`${active}-${product.name}`}
    className="group relative flex h-[165px] flex-col items-center justify-between overflow-hidden rounded-2xl border-2 border-primary bg-white p-3 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg sm:h-[180px] dark:bg-background"
  >
    {/* 1. Top: Centered Product Name */}
    <h3 className="w-full text-center text-[11px] font-semibold uppercase tracking-wide text-foreground sm:text-xs pt-1">
      {product.name}
    </h3>

    {/* 2. Middle: Suspended Image without a background box */}
    <div className="relative flex flex-1 w-full items-center justify-center overflow-hidden py-2">
      <img
        src={product.image}
        alt={product.alt}
        width={200}
        height={200}
        loading="lazy"
        className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    {/* 3. Bottom: Always visible Order Now text */}
    <a
      href={`${shopUrl("hero-product")}#${encodeURIComponent(product.name)}`}
      target="_blank"
      rel="noreferrer"
      className="w-full pb-1 text-center text-[10px] font-bold uppercase text-foreground transition-colors hover:text-primary sm:text-[11px]"
    >
      Order Now!!!
    </a>
  </article>
))}
              </div>
            </div>

            {/* Carousel Navigation Buttons - Adjusted contrast for background visibility */}
            <button
              type="button"
              onClick={previousProduct}
              aria-label="Previous products"
              className="absolute -left-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground transition-colors hover:border-primary hover:text-primary dark:border-white/20 dark:bg-black/40 dark:text-white sm:-left-4"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={nextProduct}
              aria-label="Next products"
              className="absolute -right-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground transition-colors hover:border-primary hover:text-primary dark:border-white/20 dark:bg-black/40 dark:text-white sm:-right-4"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>

          <div className="mt-5 flex justify-center gap-1.5">
            {PRODUCTS.map((product, index) => (
              <button
                key={product.name}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show ${product.name}`}
                className={`h-1 rounded-full transition-all ${
                  index === active ? "w-6 bg-primary" : "w-1.5 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}