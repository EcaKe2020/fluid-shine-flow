import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/eca-logo.png.asset.json";
import { COMPANY, shopUrl, SOLUTIONS } from "@/lib/eca";
import { ThemeToggle } from "@/components/site/theme";

const INDUSTRY_LINKS = [
  "Internet service providers",
  "Contractors and installers",
  "Corporates and integrators",
  "Schools and institutions",
  "Government and county projects",
  "Data centres and developers",
] as const;

const RESOURCE_LINKS = [
  { to: "/about", label: "About ECA Networks", desc: "Who we are and who you deal with" },
  { to: "/projects", label: "Projects", desc: "Rollouts the counter has supplied" },
  { to: "/team", label: "Team & Careers", desc: "The people behind the counter" },
  { to: "/esg", label: "ESG & Sustainability", desc: "How the business handles waste and people" },
  { to: "/insights", label: "Insights", desc: "Field notes from the technical desk" },
] as const;

const MOBILE_NAV = [
  { to: "/solutions", label: "Solutions" },
  { to: "/industries", label: "Industries" },
  { to: "/about", label: "Resources" },
  { to: "/tools", label: "Tools" },
  { to: "/price-list", label: "Prices" },
  { to: "/projects", label: "Projects" },
  { to: "/team", label: "Team" },
  { to: "/esg", label: "ESG" },
  { to: "/insights", label: "Insights" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

function MegaMenu({
  label,
  width = "24rem",
  children,
}: {
  label: string;
  width?: string;
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
        className="nav-link inline-flex items-center gap-1 whitespace-nowrap text-sm font-medium transition-colors"
      >
        {label}
        <ChevronDown className={`size-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open ? (
        <div className="absolute left-0 top-[calc(100%+0.75rem)] z-50" style={{ width }}>
          <div
            className="glass-panel p-3"
            style={{
              borderRadius: 16,
              boxShadow: "0 30px 70px -40px rgba(0,0,0,0.25)",
            }}
          >
            <div className="grid gap-1">{children(() => setOpen(false))}</div>
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
    const onScroll = () => setScrolled(window.scrollY > 24);
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
      className={`site-header fixed inset-x-0 top-0 z-[100] flex h-[4.5rem] items-center px-[clamp(20px,6vw,120px)] transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl shadow-[0_4px_24px_-12px_rgba(11,50,79,0.15)]"
          : "bg-background/60 backdrop-blur-md"
      }`}
    >
      {/* Left: logo */}
      <Link
        to="/"
        className="flex shrink-0 items-center"
        aria-label={`${COMPANY.short} home`}
      >
        <img src={logo.url} alt="ECA Networks logo" className="h-8 w-auto" width={128} height={40} />
      </Link>

      {/* Center: primary navigation */}
      <nav className="mx-auto hidden items-center gap-7 lg:flex">
        <MegaMenu label="Solutions" width="24rem">
          {(close) => (
            <>
              {SOLUTIONS.map((s) => (
                <Link
                  key={s.slug}
                  to="/solutions/$slug"
                  params={{ slug: s.slug }}
                  onClick={close}
                  className="rounded-lg px-3 py-2.5 transition-colors hover:bg-primary/10"
                >
                  <span className="block text-sm font-semibold text-foreground">{s.title}</span>
                  <span className="mt-0.5 block text-xs text-muted-foreground">{s.points.join(" · ")}</span>
                </Link>
              ))}
              <Link
                to="/solutions"
                onClick={close}
                className="mt-1 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary transition-colors hover:bg-primary/10"
              >
                All solutions
              </Link>
            </>
          )}
        </MegaMenu>

        <MegaMenu label="Industries" width="26rem">
          {(close) => (
            <div className="grid grid-cols-2 gap-1">
              {INDUSTRY_LINKS.map((label) => (
                <Link
                  key={label}
                  to="/industries"
                  onClick={close}
                  className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </MegaMenu>

        <MegaMenu label="Resources" width="24rem">
          {(close) => (
            <>
              {RESOURCE_LINKS.map((r) => (
                <Link
                  key={r.to}
                  to={r.to}
                  onClick={close}
                  className="rounded-lg px-3 py-2.5 transition-colors hover:bg-primary/10"
                >
                  <span className="block text-sm font-semibold text-foreground">{r.label}</span>
                  <span className="mt-0.5 block text-xs text-muted-foreground">{r.desc}</span>
                </Link>
              ))}
            </>
          )}
        </MegaMenu>

        <Link
          to="/tools"
          activeProps={{ className: "text-primary" }}
          className="nav-link whitespace-nowrap text-sm font-medium transition-colors"
        >
          Tools
        </Link>

        <Link
          to="/price-list"
          activeProps={{ className: "text-primary" }}
          className="nav-link whitespace-nowrap text-sm font-medium transition-colors"
        >
          Prices
        </Link>
      </nav>

      {/* Right: phone, theme toggle, shop, quote */}
      <div className="ml-auto flex items-center gap-4">
        <a
          href={COMPANY.phoneHref}
          className={`nav-link hidden items-center gap-1.5 whitespace-nowrap text-sm font-medium transition-colors xl:flex ${
            scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Phone className="size-4 text-primary" />
          {COMPANY.phone}
        </a>
        <ThemeToggle />
        <a
          href={shopUrl("nav-shop")}
          target="_blank"
          rel="noreferrer"
          className="nav-link hidden whitespace-nowrap text-sm font-medium transition-colors hover:text-primary sm:inline"
        >
          Shop Online
        </a>
        <Link
          to="/contact"
          className="btn-radius whitespace-nowrap bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_8px_26px_-10px_rgba(14,165,233,0.6)] transition-opacity hover:opacity-90"
        >
          Request a Quote
        </Link>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="nav-link flex size-9 items-center justify-center lg:hidden"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <Menu className="size-5" />
        </button>
      </div>

      {/* Mobile overlay */}
      {open ? (
        <div className="fixed inset-0 z-[999] flex flex-col bg-background lg:hidden">
          <div className="flex h-16 items-center justify-between px-[clamp(24px,5vw,80px)]">
            <Link to="/" onClick={() => setOpen(false)} className="flex items-center">
              <img src={logo.url} alt="ECA Networks logo" className="h-8 w-auto" width={128} height={40} />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex size-9 items-center justify-center text-foreground"
              aria-label="Close menu"
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-[clamp(24px,5vw,80px)] py-4">
            <div className="grid gap-0.5">
              {MOBILE_NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="border-b border-border py-3 text-xl font-semibold text-foreground/85 transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
          <div className="grid gap-2 px-[clamp(24px,5vw,80px)] pb-8">
            <a
              href={shopUrl("mobile-menu")}
              target="_blank"
              rel="noreferrer"
              className="btn-radius border border-border py-3.5 text-center text-sm font-semibold text-foreground"
            >
              Shop Online
            </a>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-radius bg-primary py-3.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
