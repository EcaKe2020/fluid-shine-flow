import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, MessageSquare, Phone, ShieldCheck } from "lucide-react";
import logo from "@/assets/logo.png";
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
    <footer className="site-footer relative overflow-hidden bg-background pb-12 pt-20 border-t border-border/80">
      <div className="section-pad relative z-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5 content-left">
          {/* Brand & Warehouse Desk */}
          <div className="space-y-4 lg:col-span-2">
            <img
              src={logo}
              alt="ECA Networks logo"
              className="h-9 w-auto object-contain"
              width={144}
              height={48}
            />
            <p className="text-sm leading-relaxed text-muted-foreground max-w-sm">
              {COMPANY.tagline}
            </p>
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="size-4 text-primary" />
              Registered Telecom Supplier &bull; Kenya
            </p>
            <div className="pt-2">
              <a
                href={shopUrl("footer")}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wide text-primary-foreground transition-all hover:bg-primary/90"
              >
                <span>Open Online Store & Live Stock</span>
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <nav aria-label="Solutions">
            <h2 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Equipment & Solutions
            </h2>
            <ul className="mt-4 space-y-2">
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

          {/* Resources Column */}
          <nav aria-label="Resources">
            <h2 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Technical Resources
            </h2>
            <ul className="mt-4 space-y-2">
              {[
                { to: "/about", label: "About ECA Networks" },
                { to: "/services", label: "Technical Services" },
                { to: "/projects", label: "Reference Projects" },
                { to: "/team", label: "Engineering Team" },
                { to: "/esg", label: "ESG & Compliance" },
                { to: "/products", label: "Product Catalogue" },
                { to: "/privacy", label: "Privacy Policy" },
                { to: "/terms", label: "Terms & Conditions" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Reach Us / Counters */}
          <div className="space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Direct Counter Desks
            </h2>
            <div className="space-y-5">
              {LOCATIONS.map((loc) => (
                <address
                  key={loc.city}
                  className="not-italic space-y-2"
                >
                  <p className="text-sm font-semibold text-foreground">
                    {loc.city} Counter
                  </p>
                  <p className="flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{loc.address}</span>
                  </p>
                  <p className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="size-4 shrink-0 text-primary" />
                    <a href={loc.phoneHref} className="hover:text-primary transition-colors">
                      {loc.phone}
                    </a>
                  </p>
                  <p className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MessageSquare className="size-4 shrink-0 text-primary" />
                    <a
                      href={loc.city === "Eldoret" ? WHATSAPP_URL_ELDORET : WHATSAPP_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      WhatsApp
                    </a>
                  </p>
                </address>
              ))}
            </div>

            <p className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
              <Mail className="size-4 shrink-0 text-primary" />
              <a href={`mailto:${COMPANY.email}`} className="hover:text-primary transition-colors">
                {COMPANY.email}
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Technical Metadata Bar */}
        <div className="mt-14 border-t border-border/80 pt-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-muted-foreground">
            <div>
              <p className="font-semibold text-foreground mb-1">
                {COMPANY.name} &bull; Nairobi & Eldoret Supply Hubs
              </p>
              <p className="text-xs">
                KRA PIN and registered company credentials provided on all official quotation & tax invoice packs.
              </p>
            </div>
            <p>
              Live Catalog & Inventory:{" "}
              <a href="https://ecanetworks.com" className="font-semibold text-foreground hover:text-primary transition-colors">
                ecanetworks.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}