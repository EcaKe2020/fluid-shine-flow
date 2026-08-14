import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/eca-logo.png.asset.json";
import { COMPANY, SHOP_URL, SOLUTIONS, WHATSAPP_URL } from "@/lib/eca";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-5 pb-10 pt-8">
      <div className="gloss rounded-[2rem] p-8 sm:p-12">
        <div className="relative z-10 grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <img src={logo.url} alt="ECA Networks logo" className="h-9 w-auto" width={144} height={48} />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{COMPANY.tagline}</p>
            <a
              href={SHOP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex rounded-full bg-ember px-4 py-2.5 text-sm font-semibold text-ember-foreground"
            >
              Visit the online store
            </a>
          </div>

          <nav aria-label="Solutions" className="text-sm">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/60">Solutions</h2>
            <ul className="mt-4 space-y-2.5 text-muted-foreground">
              {SOLUTIONS.map((s) => (
                <li key={s.slug}>
                  <Link to="/solutions/$slug" params={{ slug: s.slug }} className="hover:text-primary">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company" className="text-sm">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/60">Company</h2>
            <ul className="mt-4 space-y-2.5 text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary">About ECA Networks</Link></li>
              <li><Link to="/services" className="hover:text-primary">Services and support</Link></li>
              <li><Link to="/projects" className="hover:text-primary">Projects</Link></li>
              <li><Link to="/team" className="hover:text-primary">Team and careers</Link></li>
              <li><Link to="/esg" className="hover:text-primary">ESG and sustainability</Link></li>
              <li><Link to="/insights" className="hover:text-primary">Insights</Link></li>
              <li><Link to="/price-list" className="hover:text-primary">Price list</Link></li>
              <li><Link to="/privacy" className="hover:text-primary">Privacy and terms</Link></li>
            </ul>
          </nav>

          <address className="space-y-3 text-sm not-italic text-muted-foreground">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/60">Reach us</h2>
            <p className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              {COMPANY.address}
            </p>
            <p className="flex items-center gap-2.5">
              <Phone className="size-4 shrink-0 text-primary" />
              <a href={COMPANY.phoneHref} className="hover:text-primary">{COMPANY.phone}</a>
            </p>
            <p className="flex items-center gap-2.5">
              <Mail className="size-4 shrink-0 text-primary" />
              <a href={`mailto:${COMPANY.email}`} className="hover:text-primary">{COMPANY.email}</a>
            </p>
            <p className="flex items-start gap-2.5">
              <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
              {COMPANY.hours}
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex text-primary hover:underline">
              WhatsApp the technical desk
            </a>
          </address>
        </div>

        <div className="relative z-10 mt-10 border-t border-border pt-6">
          <p className="text-sm font-semibold text-foreground/80">
            Serving Kenya since {COMPANY.founded}
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
            <p>
              {COMPANY.name}, registered in Kenya. Company registration and KRA PIN are stated on every quotation,
              invoice and delivery note.
            </p>
            <p>Ordering and stock live on the e commerce store.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
