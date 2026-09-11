import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import hero from "@/assets/light-splicer.jpg";
import spool from "@/assets/light-spool.jpg";
import rack from "@/assets/light-cabinet.jpg";
import { shopUrl } from "@/lib/eca";

const PROOF = ["165 stocked lines", "Nairobi and Eldoret counters", "Delivery across Kenya"];

export function Hero() {
  return (
    <section className="hero-editorial relative overflow-hidden bg-background px-[clamp(24px,5vw,80px)] pb-16 pt-28 sm:pb-20 sm:pt-36">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
        <div className="relative z-10 max-w-3xl blur-in">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Fibre and network equipment in Kenya
          </p>
          <h1 className="font-serif text-[clamp(3rem,6.5vw,6.7rem)] font-medium leading-[0.94] text-foreground">
            The right gear.
            <span className="block italic text-primary">Ready for the job.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Fibre cable, OLTs, routers, cabinets, tools and installation hardware held in stock for
            contractors, ISPs and technical teams across Kenya.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="btn-radius inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Request a quotation <ArrowRight className="size-4" />
            </Link>
            <a
              href={shopUrl("hero")}
              target="_blank"
              rel="noreferrer"
              className="btn-radius inline-flex items-center gap-2 border border-foreground/20 bg-card px-6 py-3.5 text-sm font-semibold text-foreground hover:border-primary hover:text-primary"
            >
              Visit the shop <ArrowUpRight className="size-4" />
            </a>
          </div>
          <ul className="mt-9 grid gap-3 text-sm text-foreground/80 sm:grid-cols-3">
            {PROOF.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="size-4 shrink-0 text-primary" /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[650px] lg:mx-0">
          <div className="hero-image-stage relative aspect-[4/3] overflow-hidden bg-card">
            <img
              src={hero}
              alt="Fibre fusion splicer available from ECA Networks"
              className="size-full object-contain p-7 sm:p-10"
              width={900}
              height={680}
            />
            <div className="absolute bottom-5 left-5 bg-foreground px-4 py-3 text-background">
              <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-background/60">Ready stock</span>
              <span className="mt-1 block text-sm font-semibold">Fibre installation equipment</span>
            </div>
          </div>
          <img src={spool} alt="Fibre optic cable spool" className="hero-float-image absolute -bottom-7 -left-5 hidden aspect-square w-32 object-contain p-3 sm:block" />
          <img src={rack} alt="Network cabinet" className="hero-float-image absolute -right-4 -top-7 hidden aspect-square w-28 object-contain p-3 sm:block" />
        </div>
      </div>
      <div className="analogue-stripe absolute inset-x-0 bottom-0" aria-hidden="true" />
    </section>
  );
}