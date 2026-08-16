import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { shopUrl } from "@/lib/eca";
import { KES } from "@/lib/price-list";
import spool from "@/assets/product-spool.jpg";
import switchImg from "@/assets/product-switch.jpg";
import router from "@/assets/product-router.jpg";
import cabinet from "@/assets/product-cabinet.jpg";
import splicer from "@/assets/product-splicer.jpg";

type Product = {
  name: string;
  category: string;
  price: number;
  image: string;
  alt: string;
};

const PRODUCTS: Product[] = [
  { name: "Fibre Optic Spool", category: "Cabling", price: 580, image: spool, alt: "Fibre optic cable spool" },
  { name: "Nexus-7000 Switch", category: "Access Layer", price: 12500, image: switchImg, alt: "Managed network switch" },
  { name: "Core Router", category: "Backbone Routing", price: 68000, image: router, alt: "Enterprise network router" },
  { name: "Data Center Server Rack", category: "Compute Node", price: 18500, image: cabinet, alt: "Data center server rack" },
  { name: "Fusion Splicer Kit", category: "Deployment Tools", price: 98000, image: splicer, alt: "Fibre fusion splicer kit" },
  { name: "GPON OLT 4-Port HSGQ", category: "Active Equipment", price: 68000, image: router, alt: "GPON optical line terminal" },
  { name: "Managed PoE Switch", category: "Networking", price: 12500, image: switchImg, alt: "Managed PoE switch" },
  { name: "Data Cabinet 12U", category: "Enclosures", price: 18500, image: cabinet, alt: "12U data cabinet" },
  { name: "Fibre Toolkit Complete", category: "Test Equipment", price: 9800, image: splicer, alt: "Complete fibre toolkit" },
  { name: "ADSS 24-Core Cable", category: "Outdoor Fibre", price: 580, image: spool, alt: "ADSS outdoor fibre cable" },
];

const AUTO_ADVANCE_MS = 4500;

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const next = useCallback(() => {
    setActive((current) => (current + 1) % PRODUCTS.length);
  }, []);

  const previous = useCallback(() => {
    setActive((current) => (current - 1 + PRODUCTS.length) % PRODUCTS.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, AUTO_ADVANCE_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active, next, paused]);

  const visibleProducts = Array.from({ length: 5 }, (_, index) => PRODUCTS[(active + index) % PRODUCTS.length]);

  return (
    <section className="relative overflow-hidden pb-14 pt-[7.5rem] sm:pb-16">
      <div className="section-pad">
        <h1 className="mx-auto max-w-[920px] text-center font-serif text-[clamp(42px,5.7vw,76px)] font-semibold leading-[0.98] tracking-[-0.035em] text-foreground">
          Enterprise Infrastructure.
          <span className="block">Ready on Demand.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-[620px] text-center text-base leading-[1.55] text-muted-foreground sm:text-[17px]">
          Providing robust hardware solutions for the backbone of modern enterprise networking, available 24/7 for
          deployment and configuration.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/contact"
            className="btn-radius inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_24px_-12px_rgba(14,165,233,0.8)] transition-transform hover:-translate-y-0.5"
          >
            Request a Quote
            <ArrowRight className="size-4" />
          </Link>
          <a
            href={shopUrl("hero")}
            target="_blank"
            rel="noreferrer"
            className="btn-radius inline-flex items-center gap-2 border border-border bg-muted/70 px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Explore Hardware
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>

      <div
        className="relative mt-14 section-pad"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative mx-auto max-w-[1440px]">
          <div className="overflow-hidden px-0.5 py-2 sm:px-1">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {visibleProducts.map((product) => (
                <article key={`${active}-${product.name}`} className="group relative min-w-0">
                  <div className="relative h-[276px] overflow-hidden rounded-[14px] bg-[#0B4C87] shadow-[0_16px_30px_-22px_rgba(11,76,135,0.8)] sm:h-[310px] lg:h-[330px]">
                    <img
                      src={product.image}
                      alt={product.alt}
                      width={420}
                      height={520}
                      loading="lazy"
                      className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#062A4D]/75 via-transparent to-[#062A4D]/90" />
                    <div className="absolute inset-x-0 top-0 p-4 text-center text-white">
                      <p className="text-sm font-semibold uppercase tracking-[0.03em]">{product.name}</p>
                      <p className="mt-0.5 text-xs text-white/70">{product.category}</p>
                    </div>
                    <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-2">
                      <span className="text-sm font-bold text-white">{KES(product.price)}</span>
                      <a
                        href={`${shopUrl("hero-product")}#${encodeURIComponent(product.name)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-white/90 px-3 py-2 text-[11px] font-bold text-[#0B4C87] opacity-0 transition-opacity group-hover:opacity-100"
                      >
                        Order Now
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={previous}
            aria-label="Previous products"
            className="absolute left-[-10px] top-1/2 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-md transition-colors hover:border-primary hover:text-primary sm:flex"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next products"
            className="absolute right-[-10px] top-1/2 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-md transition-colors hover:border-primary hover:text-primary sm:flex"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        <div className="mt-5 flex justify-center gap-1.5" aria-label="Product carousel pagination">
          {PRODUCTS.map((product, index) => (
            <button
              key={product.name}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show ${product.name}`}
              className={`h-1.5 rounded-full transition-all ${index === active ? "w-7 bg-primary" : "w-1.5 bg-muted-foreground/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


export { Hero }