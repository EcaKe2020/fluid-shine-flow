import { ArrowUp, Bot, MessageCircle, Phone, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { COMPANY, WHATSAPP_URL } from "@/lib/eca";

type Msg = { role: "bot" | "user"; text: string };

const CANNED: { match: RegExp; reply: string }[] = [
  {
    match: /price|cost|quote|quotation/i,
    reply:
      "Published trade pricing sits on the Pricing page, and the technical desk returns a formal quotation within two business hours once it has your list or drawing.",
  },
  {
    match: /stock|available|lead time|delivery/i,
    reply:
      "Fast moving items are held at the Nairobi and Eldoret counters and dispatched to all 47 counties. Tell me the item and quantity and the desk will confirm the shelf position.",
  },
  {
    match: /fibre|fiber|adss|cable/i,
    reply:
      "For aerial spans, ADSS is normally specified by span length and sheath. The Fibre cable selector under Resources narrows it down in four questions.",
  },
  {
    match: /warranty|faulty|rma/i,
    reply: "Warranty assessment happens locally in Nairobi under the supported brand terms, so units do not leave Kenya.",
  },
];

function reply(text: string) {
  const hit = CANNED.find((c) => c.match.test(text));
  return (
    hit?.reply ??
    `Noted. A human on the technical desk answers this best. Call ${COMPANY.phone} or send the specification through the contact page and you will hear back within two business hours.`
  );
}

export function FloatingActions() {
  const [shown, setShown] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    { role: "bot", text: "Hello. Ask about stock, pricing or a specification and I will point you the right way." },
  ]);
  const listEnd = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    listEnd.current?.scrollIntoView({ block: "end" });
  }, [messages, chatOpen]);

  const send = () => {
    const text = draft.trim();
    if (!text) return;
    setDraft("");
    setMessages((m) => [...m, { role: "user", text }]);
    setTimeout(() => setMessages((m) => [...m, { role: "bot", text: reply(text) }]), 420);
  };

  return (
    <div className="fixed bottom-6 right-4 z-40 flex flex-col items-end gap-2.5 pb-[env(safe-area-inset-bottom)] sm:right-6">
      {chatOpen ? (
        <div
          className="mb-1 flex w-[min(21rem,calc(100vw-2rem))] flex-col overflow-hidden bg-popover/95 text-popover-foreground backdrop-blur-xl"
          style={{
            borderRadius: 20,
            border: "1px solid rgba(0,212,255,0.2)",
            boxShadow: "0 30px 70px -40px rgba(0,0,0,0.5)",
          }}
        >
          <div className="flex items-center justify-between px-4 py-3">
            <span className="flex items-center gap-2 text-sm font-semibold">
              <Bot className="size-4 text-primary" />
              Technical assistant
            </span>
            <button type="button" onClick={() => setChatOpen(false)} aria-label="Close chat">
              <X className="size-4 text-muted-foreground" />
            </button>
          </div>
          <div className="max-h-64 space-y-2.5 overflow-y-auto px-4 pb-3">
            {messages.map((m, i) => (
              <p
                key={i}
                className={`w-fit max-w-[85%] px-3.5 py-2 text-[13px] leading-relaxed ${
                  m.role === "user"
                    ? "ml-auto bg-primary text-primary-foreground"
                    : "bg-muted text-foreground"
                }`}
                style={{ borderRadius: 16 }}
              >
                {m.text}
              </p>
            ))}
            <div ref={listEnd} />
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="flex items-center gap-2 border-t border-border px-3 py-2.5"
          >
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Ask about stock or pricing"
              aria-label="Message"
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="flex size-8 items-center justify-center bg-primary text-primary-foreground"
              style={{ borderRadius: 12 }}
            >
              <Send className="size-3.5" />
            </button>
          </form>
        </div>
      ) : null}

      <a
        href={COMPANY.phoneHref}
        aria-label={`Call ${COMPANY.phone}`}
        className="flex size-11 items-center justify-center bg-foreground text-background shadow-lg"
        style={{ borderRadius: 24 }}
      >
        <Phone className="size-4" />
      </a>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex size-11 items-center justify-center bg-[#25D366] text-white shadow-lg"
        style={{ borderRadius: 24 }}
      >
        <MessageCircle className="size-5" />
      </a>

      <button
        type="button"
        onClick={() => setChatOpen((v) => !v)}
        aria-label="Open the technical assistant"
        aria-expanded={chatOpen}
        className="flex size-11 items-center justify-center bg-primary text-primary-foreground shadow-lg"
        style={{ borderRadius: 24 }}
      >
        <Bot className="size-5" />
      </button>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`flex size-11 items-center justify-center border border-border bg-background/80 text-foreground backdrop-blur-md transition-all duration-300 ${
          shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
        style={{ borderRadius: 24 }}
      >
        <ArrowUp className="size-4" />
      </button>
    </div>
  );
}
