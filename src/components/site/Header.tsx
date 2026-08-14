import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/eca-logo.png.asset.json";
import { COMPANY, shopUrl, SOLUTIONS } from "@/lib/eca";

const NAV_LINKS = [
  { to: "/about", label: "Company" },
  { to: "/solutions", label: "Solutions" },
  { to: "/industries", label: "Industries" },
  { to: "/tools", label: "Tools" },
  { to: "/projects", label: "Projects" },
  { to: "/insights", label: "Insights" },
  { to: "/price-list", label: "Price List" },
] as const;

const MOBILE_NAV = [
  ...NAV_LINKS,
  { to: "/services", label: "Services" },
  { to: "/team", label: "Team" },
  { to: "/esg", label: "ESG" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-[100] flex h-16 items-center bg-[#0B0C10] px-[clamp(24px,5vw,80px)]"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
    >
      {/* Logo left */}
      <Link to="/" className="flex shrink-0 items-center" aria-label={`${COMPANY.short} home`}>
        <img src={logo.url} alt="ECA Networks logo" className="h-8 w-auto" width={128} height={40} />
      </Link>

      {/* Nav links center */}
      <nav className="mx-auto hidden items-center gap-7 lg:flex">
        {NAV_LINKS.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            activeProps={{ className: "text-[#00D4FF]" }}
            className="whitespace-nowrap text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Right side */}
      <div className="ml-auto flex items-center gap-4">
        <a
          href={COMPANY.phoneHref}
          className="hidden items-center gap-1.5 whitespace-nowrap text-sm font-medium text-white/80 transition-colors hover:text-white xl:flex"
        >
          <Phone className="size-4 text-[#00D4FF]" />
          {COMPANY.phone}
        </a>
        <a
          href={shopUrl("nav-link")}
          target="_blank"
          rel="noreferrer"
          className="hidden whitespace-nowrap text-sm font-medium text-white transition-colors hover:text-[#00D4FF] sm:inline"
        >
          Shop Online
        </a>
        <Link
          to="/contact"
          className="btn-radius whitespace-nowrap bg-[#00D4FF] px-4 py-2 text-sm font-semibold text-[#0B0C10] transition-opacity hover:opacity-90"
        >
          Request a Quote
        </Link>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex size-9 items-center justify-center text-white lg:hidden"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <Menu className="size-5" />
        </button>
      </div>

      {/* Mobile full-screen overlay */}
      {open ? (
        <div className="fixed inset-0 z-[999] flex flex-col bg-[#0B0C10] lg:hidden">
          <div className="flex h-16 items-center justify-between px-[clamp(24px,5vw,80px)]">
            <Link to="/" onClick={() => setOpen(false)} className="flex items-center">
              <img src={logo.url} alt="ECA Networks logo" className="h-8 w-auto" width={128} height={40} />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex size-9 items-center justify-center text-white"
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
                  className="border-b border-white/10 py-3 text-xl font-semibold text-white/85 transition-colors hover:text-[#00D4FF]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
          <div className="grid gap-2 px-[clamp(24px,5vw,80px)] pb-8">
            <a
              href={COMPANY.phoneHref}
              className="flex items-center justify-center gap-2 border border-white/20 py-3 text-sm font-semibold text-white"
            >
              <Phone className="size-4 text-[#00D4FF]" />
              {COMPANY.phone}
            </a>
            <a
              href={shopUrl("mobile-menu")}
              target="_blank"
              rel="noreferrer"
              className="py-3.5 text-center text-sm font-semibold text-white"
            >
              Shop Online
            </a>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-radius bg-[#00D4FF] py-3.5 text-center text-sm font-semibold text-[#0B0C10]"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
