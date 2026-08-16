import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { shopUrl } from "@/lib/eca";
import spool from "@/assets/product-spool.jpg";
import switchImg from "@/assets/product-switch.jpg";
import router from "@/assets/product-router.jpg";
import cabinet from "@/assets/product-cabinet.jpg";
import splicer from "@/assets/product-splicer.jpg";

const PRODUCTS = [
  { name: "FIBRE OPTIC SPOOL", category: "Cabling", image: spool, alt: "Reel of blue fibre optic cable" },
  { name: "MANAGED SWITCH", category: "Access Layer", image: switchImg, alt: "Rack mount managed network switch" },
  { name: "CORE ROUTER", category: "Backbone Routing", image: router, alt: "Modular core router chassis" },
  { name: "DATA CABINET", category: "Compute Node", image: cabinet, alt: "Server cabinet with patched cabling" },
  { name: "FUSION SPLICER KIT", category: "Deployment Tools", image: splicer, alt: "Fibre fusion splicer toolkit in a case" },
] as const;

function ProductCard({ item, withChat }: { item: (typeof PRODUCTS)[number]; withChat: boolean }) {
  return (
    <article
      className="group relative w-[220px] shrink-0 snap-center overflow-hidden px-4 pt-5 transition-all duration-300 hover:-translate-y-1.5"
      style={{
        height: 320,
        borderRadius: 20,
        background: "linear-gradient(180deg, #3D1F1F 0%, #2C1818 100%)",
        boxShadow: "0 10px 30px -18px rgba(0,0,0,0.55)",
      }}
    >
      <p className="text-center text-[11px] font-semibold uppercase tracking-[0.1em] text-white">{item.name}</p>
      <p className="mt-1 text-center text-[10px] text-white/50">{item.category}</p>

      <img
        src={item.image}
        alt={item.alt}
        width={220}
        height={200}
        loading="lazy"
        className="absolute inset-x-0 bottom-0 h-[68%] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />

      {withChat ? (
        <div className="absolute inset-x-3 bottom-2 z-10 flex flex-col gap-2">
          <span
            className="w-fit px-3.5 py-2 text-[12px] text-white/90 backdrop-blur-md"
            style={{ borderRadius: 16, background: "rgba(12,10,10,0.78)" }}
          >
            Network status optimal?
          </span>
          <span
            className="ml-6 w-fit px-3.5 py-2 text-[12px] text-white/90 backdrop-blur-md"
            style={{ borderRadius: 16, background: "rgba(12,10,10,0.78)" }}
          >
            Yes. Zero packets dropped.
          </span>
        </div>
      ) : null}
    </article>
  );
}

export function Hero() {
  const track = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => setReady(true), []);

  return (
    <section className="relative overflow-hidden pb-10 pt-[100px]">
      <div className="section-pad">
        <h1
          className={`mx-auto max-w-[1040px] text-center font-serif font-medium leading-[1.1] text-foreground transition-all duration-700 ${
            ready ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
          style={{ fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "-0.02em" }}
        >
          Fibre and Network Infrastructure.
          <span className="block">Stocked and Proven.</span>

        </h1>

        <p
          className="mx-auto mt-5 max-w-[560px] text-center text-[17px] leading-[1.6] text-muted-foreground"
          style={{ transitionDelay: "80ms" }}
        >
          ECA Networks supplies the cable, hardware and test equipment that Kenyan internet providers, contractors and
          corporate buyers build networks with. Technical desk support from specification through to delivery.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={shopUrl("hero")}
            target="_blank"
            rel="noreferrer"
            className="bg-foreground px-7 py-3.5 text-[15px] font-medium text-background transition-opacity hover:opacity-90"
            style={{ borderRadius: 24 }}
          >
            Visit the shop
          </a>
          <Link
            to="/contact"
            className="border border-foreground px-7 py-3.5 text-[15px] font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
            style={{ borderRadius: 24 }}
          >
            Request quote
          </Link>
        </div>
      </div>

      <div
        ref={track}
        className="mt-[60px] flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden section-pad xl:justify-center"
      >
        {PRODUCTS.map((item, i) => (
          <ProductCard key={item.name} item={item} withChat={i === 2} />
        ))}
      </div>
    </section>
  );
}
