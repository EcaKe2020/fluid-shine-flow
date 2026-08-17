import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/eca-logo.png.asset.json";
import { COMPANY } from "@/lib/eca";
import { ThemeToggle } from "@/components/site/theme";

const LEFT_NAV = [
  { to: "/solutions", label: "Solutions" },
  { to: "/industries", label: "Industries" },
  { to: "/projects", label: "Projects" },
  { to: "/tools", label: "Tools" },
  { to: "/price-list", label: "Prices" },
] as const;

const RIGHT_NAV = [
  { to: "/about", label: "About" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

const MOBILE_NAV = [
  { to: "/solutions", label: "Solutions" },
  { to: "/industries", label: "Industries" },
  { to: "/projects", label: "Projects" },
  { to: "/tools", label: "Tools" },
  { to: "/price-list", label: "Prices" },
  { to: "/about", label: "About" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

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
      className={`site-header fixed inset-x-0 top-0 z-[100] flex h-16 items-center px-[clamp(20px,6vw,120px)] transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl shadow-[0_4px_24px_-12px_rgba(11,50,79,0.15)]"
          : "bg-background/60 backdrop-blur-md"
      }`}
    >
      {/* Left navigation */}
      <nav className="flex items-center gap-6" aria-label="Primary navigation">
        {LEFT_NAV.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            activeProps={{ className: "text-primary" }}
            className="nav-link whitespace-nowrap text-sm font-medium transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Center: logo - truly centered in viewport */}
      <Link
        to="/"
        className="absolute left-1/2 -translate-x-1/2 flex shrink-0 items-center"
        aria-label={`${COMPANY.short} home`}
      >
        <img
          src={logo.url}
          alt="ECA Networks logo"
          className="h-8 w-auto"
          width={128}
          height={40}
        />
      </Link>

      {/* Right navigation */}
      <nav className="ml-auto flex items-center gap-6" aria-label="Secondary navigation">
        {RIGHT_NAV.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            activeProps={{ className: "text-primary" }}
            className="nav-link whitespace-nowrap text-sm font-medium transition-colors"
          >
            {item.label}
          </Link>
        ))}
        <ThemeToggle />
      </nav>

      {/* Mobile menu button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="nav-link flex size-9 items-center justify-center lg:hidden"
        aria-label="Open menu"
        aria-expanded={open}
      >
        <Menu className="size-5" />
      </button>

      {/* Mobile overlay */}
      {open ? (
        <div className="fixed inset-0 z-[999] flex flex-col bg-background lg:hidden">
          <div className="flex h-16 items-center justify-between px-[clamp(24px,5vw,80px)]">
            <Link to="/" onClick={() => setOpen(false)} className="flex items-center">
              <img
                src={logo.url}
                alt="ECA Networks logo"
                className="h-8 w-auto"
                width={128}
                height={40}
              />
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
        </div>
      ) : null}
    </header>
  );
}
