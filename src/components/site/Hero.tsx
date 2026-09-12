import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import warehouse from "@/assets/warehouse.jpg";
import logistics from "@/assets/logistics.jpg";
import aerial from "@/assets/aerial.jpg";
import { Button } from "@/components/ui/button";
import { shopUrl } from "@/lib/eca";

const SLIDES = [
  {
    image: warehouse,
    alt: "Warehouse aisles stocked with fibre cable reels",
    eyebrow: "Stocked in Nairobi and Eldoret",
    title: "The network gear your project needs. Ready when you are.",
    copy: "Fibre cable, active equipment and installation hardware for contractors, ISPs and technical teams across Kenya.",
  },
  {
    image: logistics,
    alt: "Network equipment being loaded for delivery",
    eyebrow: "Delivery across Kenya",
    title: "One order. Packed properly. Sent to site.",
    copy: "Bring us the bill of materials. Our technical desk checks the list, confirms stock and organises dispatch.",
  },
  {
    image: aerial,
    alt: "Fibre technicians installing an aerial cable route",
    eyebrow: "Specified for the route",
    title: "Equipment chosen for the work on the ground.",
    copy: "We help teams match span ratings, fibre counts, PoE budgets and fittings before work begins.",
  },
] as const;

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % SLIDES.length), 7000);
    return () => window.clearInterval(timer);
  }, []);

  const goTo = (index: number) => setActive((index + SLIDES.length) % SLIDES.length);

  return (
    <section className="relative min-h-[680px] overflow-hidden bg-foreground sm:min-h-[760px]" aria-roledescription="carousel" aria-label="ECA Networks capabilities">
      {SLIDES.map((slide, index) => (
        <div key={slide.title} className={`absolute inset-0 transition-opacity duration-1000 ${index === active ? "opacity-100" : "pointer-events-none opacity-0"}`} aria-hidden={index !== active}>
          <img src={slide.image} alt={slide.alt} className={`size-full object-cover transition-transform duration-[8000ms] ease-out ${index === active ? "scale-105" : "scale-100"}`} />
        </div>
      ))}
      <div className="hero-scrim absolute inset-0" aria-hidden="true" />

      <div className="section-pad relative z-10 mx-auto flex min-h-[680px] max-w-[1440px] items-end pb-20 pt-32 sm:min-h-[760px] sm:pb-24">
        <div key={active} className="hero-copy-in max-w-4xl text-left">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-hero-muted">{SLIDES[active].eyebrow}</p>
          <h1 className="max-w-4xl font-serif text-[clamp(3.25rem,7vw,7rem)] font-normal leading-[0.92] text-hero-foreground">
            {SLIDES[active].title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-hero-muted sm:text-lg">{SLIDES[active].copy}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-12 px-6">
              <Link to="/contact">Request a quotation <ArrowRight /></Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="h-12 px-6">
              <a href={shopUrl("hero")} target="_blank" rel="noreferrer">Visit the shop <ArrowUpRight /></a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-[clamp(24px,5vw,80px)] z-20 flex items-center gap-3">
        <span className="mr-2 text-xs tabular-nums text-hero-muted">0{active + 1} / 0{SLIDES.length}</span>
        <Button type="button" variant="secondary" size="icon" onClick={() => goTo(active - 1)} aria-label="Previous slide"><ArrowLeft /></Button>
        <Button type="button" variant="secondary" size="icon" onClick={() => goTo(active + 1)} aria-label="Next slide"><ArrowRight /></Button>
      </div>
    </section>
  );
}