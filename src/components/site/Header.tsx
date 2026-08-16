import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
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
  { to: "/tools", label: "Interactive tools", desc: "Bill of materials and cable selector" },
  { to: "/projects", label: "Projects", desc: "Rollouts the counter has supplied" },
  { to: "/insights", label: "Insights", desc: "Field notes from the technical desk" },
  { to: "/services", label: "Services", desc: "Installation, testing and support" },
  { to: "/esg", label: "ESG", desc: "How the business handles waste and people" },
  { to: "/about", label: "Company", desc: "Who we are and who you deal with" },
] as const;

const MOBILE_NAV = [
  { to: "/about", label: "Company" },
  { to: "/solutions", label: "Solutions" },
  { to: "/industries", label: "Industries" },
  { to: "/price-list", label: "Pricing" },
  { to: "/tools", label: "Tools" },
  { to: "/projects", label: "Projects" },
  { to: "/insights", label: "Insights" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Team" },
  { to: "/esg", label: "ESG" },
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
        className="nav-link inline-flex items-center gap-1 whitespace-nowrap text-sm transition-colors"
      >
        {label}
        <ChevronDown className={`size-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open ? (
        <div className="absolute left-0 top-[calc(100%+0.75rem)] z-50" style={{ width }}>
          <div
            className="bg-popover/95 p-3 text-popover-foreground backdrop-blur-xl"
            style={{
              borderRadius: 20,
              border: "1px solid rgba(0,212,255,0.18)",
              boxShadow: "0 30px 70px -40px rgba(0,0,0,0.45)",
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
        scrolled ? "bg-background/85 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      {/* Left: primary navigation */}
      <nav className="hidden flex-1 items-center gap-7 lg:flex">
        <MegaMenu label="Industries" width="26rem">
          {(close) => (
            <div className="grid grid-cols-2 gap-1">
              {INDUSTRY_LINKS.map((label) => (
                <Link
                  key={label}
                  to="/industries"
                  onClick={close}
                  className="rounded-xl px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </MegaMenu>

        <MegaMenu label="Solutions">
          {(close) => (
            <>
              {SOLUTIONS.map((s) => (
                <Link
                  key={s.slug}
                  to="/solutions/$slug"
                  params={{ slug: s.slug }}
                  onClick={close}
                  className="rounded-xl px-3 py-2.5 transition-colors hover:bg-primary/10"
                >
                  <span className="block text-sm font-semibold">{s.title}</span>
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

        <Link
          to="/price-list"
          activeProps={{ className: "text-primary" }}
          className="nav-link whitespace-nowrap text-sm transition-colors"
        >
          Pricing
        </Link>

        <MegaMenu label="Resources">
          {(close) => (
            <>
              {RESOURCE_LINKS.map((r) => (
                <Link
                  key={r.to}
                  to={r.to}
                  onClick={close}
                  className="rounded-xl px-3 py-2.5 transition-colors hover:bg-primary/10"
                >
                  <span className="block text-sm font-semibold">{r.label}</span>
                  <span className="mt-0.5 block text-xs text-muted-foreground">{r.desc}</span>
                </Link>
              ))}
            </>
          )}
        </MegaMenu>
      </nav>

      {/* Mobile hamburger left */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="nav-link flex size-9 items-center justify-center lg:hidden"
        aria-label="Open menu"
        aria-expanded={open}
      >
        <Menu className="size-5" />
      </button>

      {/* Center: logo */}
      <Link
        to="/"
        className="absolute left-1/2 -translate-x-1/2 items-center lg:static lg:flex lg:translate-x-0"
        aria-label={`${COMPANY.short} home`}
      >
        <img src={logo.url} alt="ECA Networks logo" className="h-8 w-auto" width={128} height={40} />
      </Link>

      {/* Right: quiet links plus one solid action */}
      <div className="flex flex-1 items-center justify-end gap-5">
        <Link to="/solutions" className="nav-link hidden text-sm transition-colors md:inline">
          Explore
        </Link>
        <a
          href={shopUrl("nav-signin")}
          target="_blank"
          rel="noreferrer"
          className="nav-link hidden text-sm transition-colors md:inline"
        >
          Sign in
        </a>
        <ThemeToggle />
        <Link
          to="/contact"
          className="whitespace-nowrap bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          style={{ borderRadius: 24 }}
        >
          Contact Sales
        </Link>
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
              className="py-3.5 text-center text-sm font-semibold text-foreground"
            >
              Visit the shop
            </a>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="bg-foreground py-3.5 text-center text-sm font-medium text-background"
              style={{ borderRadius: 24 }}
            >
              Contact Sales
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
