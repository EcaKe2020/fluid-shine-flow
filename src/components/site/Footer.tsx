import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/eca-logo.png.asset.json";
import {
  COMPANY,
  LOCATIONS,
  shopUrl,
  SOLUTIONS,
  WHATSAPP_URL,
  WHATSAPP_URL_ELDORET,
} from "@/lib/eca";

export function Footer() {
  return (
    <footer className="site-footer relative overflow-hidden bg-background pb-12 pt-20">
      {/* Wave layers — soft blue/cyan, low opacity */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-72 w-full"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
      >
        <path
          d="M0 140 C 240 100 420 170 720 130 C 1020 90 1220 160 1440 120 L 1440 200 L 0 200 Z"
          fill="var(--wave-color)"
          opacity="0.08"
        />
        <path
          d="M0 160 C 300 120 500 180 780 150 C 1060 120 1260 170 1440 140 L 1440 200 L 0 200 Z"
          fill="var(--wave-color)"
          opacity="0.06"
        />
        <path
          d="M0 180 C 260 150 480 190 760 170 C 1040 150 1240 185 1440 165 L 1440 200 L 0 200 Z"
          fill="var(--wave-color)"
          opacity="0.04"
        />
      </svg>

      <div className="section-pad relative">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <img
              src={logo.url}
              alt="ECA Networks logo"
              className="h-9 w-auto"
              width={144}
              height={48}
            />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{COMPANY.tagline}</p>
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-primary">
              Serving Kenya since {COMPANY.founded}
            </p>
            <a
              href={shopUrl("footer")}
              target="_blank"
              rel="noreferrer"
              className="btn-radius mt-5 inline-flex bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Visit the online store
            </a>
          </div>

          {/* Solutions */}
          <nav aria-label="Solutions">
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
              Solutions
            </h2>
            <ul className="mt-4 space-y-2.5">
              {SOLUTIONS.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/solutions/$slug"
                    params={{ slug: s.slug }}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resources */}
          <nav aria-label="Resources">
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
              Resources
            </h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary">
                  About ECA Networks
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary">
                  Services and support
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-sm text-muted-foreground hover:text-primary">
                  Team and careers
                </Link>
              </li>
              <li>
                <Link to="/esg" className="text-sm text-muted-foreground hover:text-primary">
                  ESG and sustainability
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-sm text-muted-foreground hover:text-primary">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/price-list" className="text-sm text-muted-foreground hover:text-primary">
                  Price list
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                  Privacy and terms
                </Link>
              </li>
            </ul>
          </nav>

          {/* Reach us — two locations */}
          <div className="space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
              Reach us
            </h2>
            {LOCATIONS.map((loc) => (
              <address key={loc.city} className="space-y-2 not-italic">
                <p className="text-sm font-bold text-foreground">{loc.city}</p>
                <p className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                  {loc.address}
                </p>
                <p className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <Phone className="size-4 shrink-0 text-primary" />
                  <a href={loc.phoneHref} className="font-medium hover:text-primary">
                    {loc.phone}
                  </a>
                </p>
                <p className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
                  {loc.hours}
                </p>
                <a
                  href={loc.city === "Eldoret" ? WHATSAPP_URL_ELDORET : WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex text-sm text-primary hover:underline"
                >
                  WhatsApp {loc.city}
                </a>
              </address>
            ))}
            <p className="flex items-center gap-2.5 text-sm text-muted-foreground">
              <Mail className="size-4 shrink-0 text-primary" />
              <a href={`mailto:${COMPANY.email}`} className="hover:text-primary">
                {COMPANY.email}
              </a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-border pt-6">
          <p className="text-sm font-semibold text-foreground">
            {COMPANY.name}. Nairobi and Eldoret, Kenya.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
            <p>
              {COMPANY.name}, registered in Kenya. Company registration and KRA PIN are stated on
              every quotation, invoice and delivery note.
            </p>
            <p>Ordering and stock live on ecanetworks.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
