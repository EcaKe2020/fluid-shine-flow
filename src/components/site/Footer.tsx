import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/eca-logo.png.asset.json";
import { COMPANY, shopUrl, SOLUTIONS, WHATSAPP_URL } from "@/lib/eca";

export function Footer() {
  return (
    <footer className="section-pad bg-[#0B0C10] pb-10 pt-16">
      <div className="grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div>
          <img src={logo.url} alt="ECA Networks logo" className="h-9 w-auto" width={144} height={48} />
          <p className="mt-4 text-sm leading-relaxed text-white/60">{COMPANY.tagline}</p>
          <a
            href={shopUrl("footer")}
            target="_blank"
            rel="noreferrer"
            className="btn-radius mt-5 inline-flex bg-[#00D4FF] px-4 py-2.5 text-sm font-semibold text-[#0B0C10]"
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
        <address className="space-y-3 not-italic">
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">Reach us</h2>
          <p className="flex items-start gap-2.5 text-sm text-white/70">
            <MapPin className="mt-0.5 size-4 shrink-0 text-[#00D4FF]" />
            {COMPANY.address}
          </p>
          <p className="flex items-center gap-2.5 text-sm text-white/70">
            <Phone className="size-4 shrink-0 text-[#00D4FF]" />
            <a href={COMPANY.phoneHref} className="hover:text-[#00D4FF]">{COMPANY.phone}</a>
          </p>
          <p className="flex items-center gap-2.5 text-sm text-white/70">
            <Mail className="size-4 shrink-0 text-[#00D4FF]" />
            <a href={`mailto:${COMPANY.email}`} className="hover:text-[#00D4FF]">{COMPANY.email}</a>
          </p>
          <p className="flex items-start gap-2.5 text-sm text-white/70">
            <Clock className="mt-0.5 size-4 shrink-0 text-[#00D4FF]" />
            {COMPANY.hours}
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex text-sm text-[#00D4FF] hover:underline"
          >
            WhatsApp the technical desk
          </a>
        </address>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <p className="text-sm font-semibold text-white/80">
          {COMPANY.name}. Nairobi, Kenya.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-white/50">
          <p>
            {COMPANY.name}, registered in Kenya. Company registration and KRA PIN are stated on every quotation,
            invoice and delivery note.
          </p>
          <p>Ordering and stock live on ecanetworks.com</p>
        </div>
      </div>
    </footer>
  );
}
