import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/eca-logo.png.asset.json";
import { COMPANY, SHOP_URL } from "@/lib/eca";
import { ThemeToggle } from "./theme";

const NAV = [
  { to: "/about", label: "Company" },
  { to: "/solutions", label: "Solutions" },
  { to: "/industries", label: "Industries" },
  { to: "/tools", label: "Tools" },
  { to: "/projects", label: "Projects" },
  { to: "/insights", label: "Insights" },
  { to: "/price-list", label: "Price list" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-5 py-4">
        <Link to="/" className="flex items-center gap-3" aria-label={`${COMPANY.short} home`}>
          <img src={logo.url} alt="ECA Networks logo" className="h-9 w-auto" width={144} height={48} />
          <span className="sr-only">{COMPANY.short}</span>
        </Link>

        <nav className="gloss ml-auto hidden items-center gap-1 rounded-full px-2 py-1.5 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "relative z-10 bg-primary/12 text-primary" }}
              className="relative z-10 rounded-full px-3.5 py-1.5 text-sm font-medium text-foreground/75 transition hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <a
            href={COMPANY.phoneHref}
            className="gloss hidden size-10 place-items-center rounded-full text-primary sm:grid"
            aria-label={`Call ${COMPANY.phone}`}
          >
            <Phone className="relative z-10 size-4" />
          </a>
          <ThemeToggle />
          <a
            href={SHOP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-ember px-4 py-2.5 text-sm font-semibold text-ember-foreground shadow-[var(--shadow-lift)] transition hover:brightness-105 sm:inline-flex"
          >
            Shop online
          </a>
          <Link
            to="/contact"
            className="ink-fill hidden rounded-full px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110 md:inline-flex dark:text-background"
          >
            Request a quote
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="gloss grid size-10 place-items-center rounded-full lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="relative z-10 size-4" /> : <Menu className="relative z-10 size-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="mx-auto w-full max-w-6xl px-5 lg:hidden">
          <div className="gloss rise rounded-3xl p-4">
            <div className="relative z-10 grid gap-1">
              {[...NAV, { to: "/services", label: "Services" }, { to: "/team", label: "Team" }, { to: "/esg", label: "ESG" }, { to: "/contact", label: "Contact" }].map(
                (item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-primary/10 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ),
              )}
              <a
                href={SHOP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-2 rounded-xl bg-ember px-3 py-2.5 text-center text-sm font-semibold text-ember-foreground"
              >
                Shop online
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
