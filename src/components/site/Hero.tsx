import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { shopUrl } from "@/lib/eca";
import heroBackground from "@/assets/hero-background.jpg";
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
    image: heroBackground,
    title: "Enterprise Infrastructure.",
    subtitle: "Ready on Demand.",
  },
  {
    image: rack,
    title: "High-Density Distribution.",
    subtitle: "Engineered for Zero Downtime.",
  },
  {
    image: splicer,
    title: "Precision Splicing & Cabling.",
    subtitle: "In Stock & Dispatched Daily.",
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
            {/* Subtle dark overlay for text contrast and a gradient fade at the bottom to blend with the rest of the site */}
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-background via-background/60 to-transparent" />
          </div>
        ))}
      </div>

      {/* Hero Typography Content - Centered vertically in the available space */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pt-[6.5rem] text-center sm:px-6 lg:px-8">
        <h1 className="mx-auto max-w-[920px] font-serif text-[clamp(40px,6vw,72px)] font-bold leading-[1.05] tracking-tight text-white drop-shadow-xl">
          {currentSlide.title}
          <span className="block text-primary">
            {currentSlide.subtitle}
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-[620px] text-sm leading-relaxed text-white/90 drop-shadow-md sm:text-base">
          Providing robust hardware solutions for the backbone of modern enterprise networking,
          available 24/7 for immediate local deployment and configuration.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="btn-radius inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-primary/30"
          >
            Request a Quote
            <ArrowRight className="size-4" />
          </Link>
          <a
            href={shopUrl("hero")}
            target="_blank"
            rel="noreferrer"
            className="btn-radius inline-flex items-center gap-2 border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white hover:text-black"
          >
            Explore Hardware
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        {/* Hero Background Slide Indicators */}
        <div className="mt-8 flex justify-center gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setHeroSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === heroSlide ? "w-8 bg-primary" : "w-2 bg-white/50 hover:bg-white"
              }`}
            />
          ))}
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
            <h2 className="text-[11px] font-bold uppercase tracking-widest text-white/90 drop-shadow-sm sm:text-xs">
              Ready to Order Now Products
            </h2>
          </div>

          <div className="relative">
            <div className="overflow-hidden py-1">
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {visibleProducts.map((product) => (
                  <article
                    key={`${active}-${product.name}`}
                    className="group relative flex h-[165px] flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-background/95 p-2.5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-primary/10 sm:h-[180px]"
                  >
                    <div className="relative h-20 w-full shrink-0 overflow-hidden rounded-lg bg-white/5 sm:h-24">
                      <img
                        src={product.image}
                        alt={product.alt}
                        width={200}
                        height={200}
                        loading="lazy"
                        className="size-full object-contain p-1.5 transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute left-1 top-1 rounded border border-border/40 bg-background/90 px-1.5 py-0.5 text-[9px] font-mono font-semibold text-muted-foreground">
                        {product.category}
                      </span>
                    </div>

                    <div className="mt-2 flex flex-1 flex-col justify-between">
                      <h3 className="line-clamp-2 text-[11px] font-semibold leading-tight text-foreground sm:text-xs">
                        {product.name}
                      </h3>

                      {/* Order Now Button - Fade in on hover (reserves space to prevent layout shifting) */}
                      <a
                        href={`${shopUrl("hero-product")}#${encodeURIComponent(product.name)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-[26px] w-full items-center justify-center gap-1 rounded-md bg-primary/10 text-[10px] font-bold text-primary opacity-0 transition-all duration-300 hover:bg-primary hover:text-white group-hover:opacity-100"
                      >
                        Order Now
                        <ArrowUpRight className="size-3" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Carousel Navigation Buttons - Adjusted contrast for background visibility */}
            <button
              type="button"
              onClick={previousProduct}
              aria-label="Previous products"
              className="absolute -left-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white shadow-md backdrop-blur-md transition-colors hover:border-primary hover:text-primary sm:-left-4"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={nextProduct}
              aria-label="Next products"
              className="absolute -right-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white shadow-md backdrop-blur-md transition-colors hover:border-primary hover:text-primary sm:-right-4"
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