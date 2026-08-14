import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/eca-logo.png.asset.json";
import { COMPANY, shopUrl, SOLUTIONS } from "@/lib/eca";
import { ThemeToggle } from "./theme";

const INDUSTRY_LINKS = [
  "Internet service providers",
  "Contractors and installers",
  "Corporates and integrators",
  "Schools and institutions",
  "Government and county projects",
  "Data centres and developers",
] as const;

const SIMPLE_NAV = [
  { to: "/about", label: "Company" },
  { to: "/tools", label: "Tools" },
  { to: "/projects", label: "Projects" },
  { to: "/insights", label: "Insights" },
  { to: "/price-list", label: "Price list" },
] as const;

const MOBILE_NAV = [
  { to: "/about", label: "Company" },
  { to: "/solutions", label: "Solutions" },
  { to: "/industries", label: "Industries" },
  { to: "/tools", label: "Tools" },
  { to: "/projects", label: "Projects" },
  { to: "/insights", label: "Insights" },
  { to: "/price-list", label: "Price list" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Team" },
  { to: "/esg", label: "ESG" },
  { to: "/contact", label: "Contact" },
] as const;

function MegaMenu({
  label,
  children,
}: {
  label: string;
  children: (close: () => void) => React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(true);
  };
  const hide = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(false), 140);
  };

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="relative z-10 inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-sm font-medium text-foreground/75 transition hover:text-foreground"
      >
        {label}
        <ChevronDown className={`size-3.5 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open ? (
        <div className="absolute left-1/2 top-[calc(100%+0.85rem)] z-50 w-[26rem] -translate-x-1/2">
          <div className="gloss rise rounded-3xl p-3">
            <div className="relative z-10 grid gap-1">{children(() => setOpen(false))}</div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-5 py-4">
        <Link to="/" className="flex items-center gap-3" aria-label={`${COMPANY.short} home`}>
          <img src={logo.url} alt="ECA Networks logo" className="h-9 w-auto" width={144} height={48} />
          <span className="sr-only">{COMPANY.short}</span>
        </Link>

        <nav className="ml-auto hidden items-center gap-0.5 lg:flex">
          <Link
            to="/about"
            activeProps={{ className: "text-primary" }}
            className="whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-medium text-foreground/75 transition hover:text-foreground"
          >
            Company
          </Link>

          <MegaMenu label="Solutions">
            {(close) => (
              <>
                {SOLUTIONS.map((s) => (
                  <Link
                    key={s.slug}
                    to="/solutions/$slug"
                    params={{ slug: s.slug }}
                    onClick={close}
                    className="rounded-2xl px-3 py-2.5 hover:bg-primary/10"
                  >
                    <span className="block text-sm font-semibold">{s.title}</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">{s.points.join(" · ")}</span>
                  </Link>
                ))}
                <Link
                  to="/solutions"
                  onClick={close}
                  className="mt-1 rounded-2xl px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-ember hover:bg-ember/10"
                >
                  All solutions
                </Link>
              </>
            )}
          </MegaMenu>

          <MegaMenu label="Industries">
            {(close) => (
              <>
                <div className="grid grid-cols-2 gap-1">
                  {INDUSTRY_LINKS.map((label) => (
                    <Link
                      key={label}
                      to="/industries"
                      onClick={close}
                      className="rounded-2xl px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-primary/10 hover:text-primary"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </MegaMenu>

          {SIMPLE_NAV.filter((n) => n.to !== "/about").map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-primary" }}
              className="whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm font-medium text-foreground/75 transition hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-4">
          <a
            href={COMPANY.phoneHref}
            className="hidden items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-foreground/80 hover:text-primary xl:inline-flex"
          >
            <Phone className="size-4 text-ember" />
            {COMPANY.phone}
          </a>
          <ThemeToggle />
          <a
            href={shopUrl("nav-button")}
            target="_blank"
            rel="noreferrer"
            className="hidden whitespace-nowrap rounded-full border border-ember/50 px-4 py-2.5 text-sm font-semibold text-ember transition hover:bg-ember/10 sm:inline-flex"
          >
            Shop online
          </a>
          <Link
            to="/contact"
            className="ink-fill hidden whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110 md:inline-flex dark:text-background"
          >
            Request a quote
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="gloss grid size-10 place-items-center rounded-full lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu className="relative z-10 size-4" />
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-[999] flex flex-col bg-background lg:hidden">
          <div className="fluid-field" aria-hidden />
          <div className="flex items-center justify-between px-5 py-4">
            <img src={logo.url} alt="ECA Networks logo" className="h-9 w-auto" width={144} height={48} />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="gloss grid size-10 place-items-center rounded-full"
              aria-label="Close menu"
            >
              <X className="relative z-10 size-4" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-5 pb-4">
            <div className="grid gap-0.5">
              {MOBILE_NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-2 py-3 text-2xl font-semibold tracking-tight text-foreground/85 hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
          <div className="grid gap-2 px-5 pb-8">
            <a
              href={COMPANY.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full border border-border py-3 text-sm font-semibold"
            >
              <Phone className="size-4 text-ember" />
              {COMPANY.phone}
            </a>
            <a
              href={shopUrl("mobile-menu")}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-ember py-3.5 text-center text-sm font-semibold text-ember-foreground"
            >
              Shop online
            </a>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="ink-fill rounded-full py-3.5 text-center text-sm font-semibold text-primary-foreground dark:text-background"
            >
              Request a quote
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
