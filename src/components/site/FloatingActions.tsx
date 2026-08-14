import { Link } from "@tanstack/react-router";
import { FileText, MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { COMPANY, WHATSAPP_URL } from "@/lib/eca";

export function FloatingActions() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-4 z-40 flex flex-col items-end gap-2.5 pb-[env(safe-area-inset-bottom)] transition-all duration-300 sm:right-6 ${
        shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <a
        href={COMPANY.phoneHref}
        aria-label={`Call ${COMPANY.phone}`}
        className="gloss grid size-12 place-items-center rounded-full"
      >
        <Phone className="relative z-10 size-4 text-primary" />
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid size-12 place-items-center rounded-full bg-[oklch(0.68_0.16_150)] text-background shadow-[var(--shadow-lift)]"
      >
        <MessageCircle className="size-5" />
      </a>
      <Link
        to="/contact"
        className="ink-fill inline-flex items-center gap-2 rounded-full px-4 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-float)] dark:text-background"
      >
        <FileText className="size-4" />
        <span className="hidden sm:inline">Request a quote</span>
      </Link>
    </div>
  );
}
