import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/eca-logo.png.asset.json";
import { COMPANY, LOCATIONS, shopUrl, SOLUTIONS, WHATSAPP_URL } from "@/lib/eca";

export function Footer() {
  return (
    <footer className="site-footer relative overflow-hidden bg-[#05070C] pb-10 pt-24 text-white">
      {/* Liquid blue field */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 420px at 12% 0%, rgba(0,212,255,0.28), transparent 62%), radial-gradient(700px 380px at 88% 12%, rgba(255,122,26,0.16), transparent 64%), linear-gradient(180deg, #0A1220 0%, #05070C 70%)",
        }}
      />

      {/* Light-mode footer art (hidden in dark mode) */}
      <img
        src="/images/6918261_23592 copy 3.jpg"
        alt=""
        aria-hidden="true"
        className="light-footer-art pointer-events-none absolute inset-x-0 bottom-0 h-full w-full object-cover"
      />

      {/* Topographic wave crests */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40 w-full"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
      >
        {[0, 14, 28, 42, 56].map((offset, i) => (
          <path
            key={offset}
            d={`M0 ${120 - offset} C 240 ${60 - offset} 420 ${150 - offset} 720 ${96 - offset} C 1020 ${44 - offset} 1220 ${140 - offset} 1440 ${88 - offset}`}
            fill="none"
            stroke="rgba(0,212,255,1)"
            strokeOpacity={0.3 - i * 0.045}
            strokeWidth={1}
          />
        ))}
      </svg>

      <div className="section-pad relative">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <img
              src={logo.url}
              alt="ECA Networks logo"
              className="h-9 w-auto drop-shadow-[0_0_22px_rgba(0,212,255,0.5)]"
              width={144}
              height={48}
            />
            <p className="mt-4 text-sm leading-relaxed text-white/60">{COMPANY.tagline}</p>
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-[#00D4FF]">
              Serving Kenya since {COMPANY.founded}
            </p>
            <a
              href={shopUrl("footer")}
              target="_blank"
              rel="noreferrer"
              className="btn-radius mt-5 inline-flex bg-[#00D4FF] px-4 py-2.5 text-sm font-semibold text-[#0B0C10] shadow-[0_12px_34px_-14px_rgba(0,212,255,0.9)]"
            >
              Visit the online store
            </a>
          </div>

          {/* Solutions */}
          <nav aria-label="Solutions">
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">Solutions</h2>
            <ul className="mt-4 space-y-2.5">
              {SOLUTIONS.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/solutions/$slug"
                    params={{ slug: s.slug }}
                    className="text-sm text-white/70 transition-colors hover:text-[#00D4FF]"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">Company</h2>
            <ul className="mt-4 space-y-2.5">
              <li><Link to="/about" className="text-sm text-white/70 hover:text-[#00D4FF]">About ECA Networks</Link></li>
              <li><Link to="/services" className="text-sm text-white/70 hover:text-[#00D4FF]">Services and support</Link></li>
              <li><Link to="/projects" className="text-sm text-white/70 hover:text-[#00D4FF]">Projects</Link></li>
              <li><Link to="/team" className="text-sm text-white/70 hover:text-[#00D4FF]">Team and careers</Link></li>
              <li><Link to="/esg" className="text-sm text-white/70 hover:text-[#00D4FF]">ESG and sustainability</Link></li>
              <li><Link to="/insights" className="text-sm text-white/70 hover:text-[#00D4FF]">Insights</Link></li>
              <li><Link to="/price-list" className="text-sm text-white/70 hover:text-[#00D4FF]">Price list</Link></li>
              <li><Link to="/privacy" className="text-sm text-white/70 hover:text-[#00D4FF]">Privacy and terms</Link></li>
            </ul>
          </nav>

          {/* Reach us */}
          <div className="space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">Reach us</h2>
            {LOCATIONS.map((loc) => (
              <address key={loc.city} className="space-y-2 not-italic">
                <p className="text-sm font-bold text-white">{loc.city}</p>
                <p className="flex items-start gap-2.5 text-sm text-white/70">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-[#00D4FF]" />
                  {loc.address}
                </p>
                <p className="flex items-center gap-2.5 text-sm text-white/70">
                  <Phone className="size-4 shrink-0 text-[#00D4FF]" />
                  <a href={loc.phoneHref} className="hover:text-[#00D4FF]">{loc.phone}</a>
                </p>
                <p className="flex items-start gap-2.5 text-sm text-white/70">
                  <Clock className="mt-0.5 size-4 shrink-0 text-[#00D4FF]" />
                  {loc.hours}
                </p>
              </address>
            ))}
            <p className="flex items-center gap-2.5 text-sm text-white/70">
              <Mail className="size-4 shrink-0 text-[#00D4FF]" />
              <a href={`mailto:${COMPANY.email}`} className="hover:text-[#00D4FF]">{COMPANY.email}</a>
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex text-sm text-[#00D4FF] hover:underline"
            >
              WhatsApp the technical desk
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6" style={{ borderTop: "1px solid rgba(0,212,255,0.16)" }}>
          <p className="text-sm font-semibold text-white/80">
            {COMPANY.name}. Nairobi and Eldoret, Kenya.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-white/50">
            <p>
              {COMPANY.name}, registered in Kenya. Company registration and KRA PIN are stated on every quotation,
              invoice and delivery note.
            </p>
            <p>Ordering and stock live on ecanetworks.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
