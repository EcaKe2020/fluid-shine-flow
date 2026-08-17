import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Clock, Mail, MapPin, Paperclip, Phone } from "lucide-react";
import { COMPANY, LOCATIONS, SOLUTIONS } from "@/lib/eca";
import { FaqList } from "@/components/site/Faq";
import {
  Eyebrow,
  Heading,
  Jsonld,
  Lead,
  Reveal,
  Section,
  ShopButton,
  WhatsAppButton,
} from "@/components/site/primitives";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact ECA Networks | Request a Quotation in Nairobi or Eldoret" },
      {
        name: "description",
        content:
          "Reach the ECA Networks technical desk at Gaberone Plaza Nairobi or Veecam House Eldoret. Send a request for quotation and get pricing, stock status and specification advice.",
      },
      { property: "og:title", content: "Contact ECA Networks Nairobi and Eldoret" },
      {
        property: "og:description",
        content:
          "Phone, WhatsApp, email and counter details for both ECA Networks branches, plus a lean request for quotation form built around what the desk needs to price a job.",
      },
    ],
  }),
  component: Contact,
});

const PROJECT_TYPES = [
  ...SOLUTIONS.map((s) => s.title),
  "Mixed project or tender",
  "General enquiry",
];

const FAQS = [
  {
    q: "Where is ECA Networks located?",
    a: `${COMPANY.name} runs two counters: Gaberone Plaza on Moi Avenue in Nairobi and Veecam House in Eldoret. Orders are dispatched countrywide by courier and can also be collected at either counter.`,
  },
  {
    q: "What details should a request for quotation include?",
    a: "Site type, quantities or distances, whether the route is aerial, ducted or indoor, the county for freight, and any brand or grade constraints. That is usually enough to price without a second round of questions.",
  },
  {
    q: "How quickly does the desk reply?",
    a: "Within the same working day for clear lists received during business hours. Requests needing drawing interpretation are acknowledged first and priced after review.",
  },
];

function reference() {
  const now = new Date();
  const stamp = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
  const seq = String(Math.floor(Math.random() * 9000) + 1000);
  return `RFQ-${stamp}-${seq}`;
}

function Contact() {
  const [sentRef, setSentRef] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: PROJECT_TYPES[0] ?? "General enquiry",
    message: "",
  });

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = reference();
    const body = [
      `Reference: ${ref}`,
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Project type: ${form.projectType}`,
      fileName ? `Attachment to follow: ${fileName}` : "",
      "",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
      `${ref} from ${form.company || form.name}`,
    )}&body=${encodeURIComponent(body)}`;
    setSentRef(ref);
  };

  const field =
    "mt-1.5 w-full rounded-lg border border-border bg-background/70 px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25";

  return (
    <>
      <Jsonld
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: COMPANY.name,
          telephone: COMPANY.phone,
          email: COMPANY.email,
          address: LOCATIONS.map((l) => ({
            "@type": "PostalAddress",
            streetAddress: l.address,
            addressLocality: l.city,
            addressCountry: "KE",
          })),
          openingHours: "Mo-Fr 08:00-17:00",
          areaServed: "Kenya",
        }}
      />

      <Section className="pt-28 sm:pt-32">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="rise">
            <Eyebrow>Get a quotation</Eyebrow>
            <Heading as="h1">
              Send the specification and the technical desk returns a quotation
            </Heading>
            <Lead className="mt-5">
              A request that includes distances, quantities and the county gets a complete answer
              first time. Everything else takes an extra phone call, and we would rather skip it.
            </Lead>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {LOCATIONS.map((loc) => (
                <div key={loc.city} className="sheen p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-ember">
                    {loc.label}
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-foreground">{loc.city}</h2>
                  <p className="mt-4 flex items-start gap-2.5 text-sm text-muted-foreground">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                    {loc.address}
                  </p>
                  <p className="mt-2.5 flex items-center gap-2.5 text-sm">
                    <Phone className="size-4 shrink-0 text-primary" />
                    <a
                      href={loc.phoneHref}
                      className="font-semibold text-foreground hover:text-primary"
                    >
                      {loc.phone}
                    </a>
                  </p>
                  <p className="mt-2.5 flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
                    {loc.hours}
                  </p>
                  <a
                    href={loc.maps}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    Directions
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              ))}
            </div>

            <p className="mt-6 flex items-center gap-2.5 text-sm">
              <Mail className="size-4 shrink-0 text-primary" />
              <a
                href={`mailto:${COMPANY.email}`}
                className="font-semibold text-foreground hover:text-primary"
              >
                {COMPANY.email}
              </a>
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-5">
              <WhatsAppButton />
              <ShopButton medium="contact-page" />
            </div>
          </div>

          <Reveal>
            <div className="sheen p-6 sm:p-8">
              <h2 className="text-xl font-bold text-foreground">Request for quotation</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Seven fields, one reference number. Submitting opens your mail client with
                everything formatted for the desk.
              </p>
              <form onSubmit={submit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm font-medium">
                    Name
                    <input required value={form.name} onChange={set("name")} className={field} />
                  </label>
                  <label className="block text-sm font-medium">
                    Company
                    <input value={form.company} onChange={set("company")} className={field} />
                  </label>
                  <label className="block text-sm font-medium">
                    Email
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={set("email")}
                      className={field}
                    />
                  </label>
                  <label className="block text-sm font-medium">
                    Phone
                    <input
                      value={form.phone}
                      onChange={set("phone")}
                      className={field}
                      placeholder="07xx xxx xxx"
                    />
                  </label>
                </div>
                <label className="block text-sm font-medium">
                  Project type
                  <select value={form.projectType} onChange={set("projectType")} className={field}>
                    {PROJECT_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block text-sm font-medium">
                  Message
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={set("message")}
                    className={field}
                    placeholder="Example: 2.4 km aerial route, 12 core ADSS, longest span 110 m, 8 closures, 40 subscriber drops, delivery to Nakuru."
                  />
                </label>
                <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-border px-4 py-3 text-sm text-muted-foreground transition hover:border-primary hover:text-foreground">
                  <Paperclip className="size-4 text-primary" />
                  {fileName || "Attach a drawing or part list, optional"}
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
                  />
                </label>
                <button
                  type="submit"
                  className="btn-radius inline-flex w-full items-center justify-center bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_14px_36px_-16px_rgba(0,212,255,0.9)] transition hover:-translate-y-0.5"
                >
                  Send request
                </button>
                {sentRef ? (
                  <p className="text-sm text-ember">
                    Your reference is {sentRef}. If your mail client did not open, email{" "}
                    {COMPANY.email} with that reference in the subject line.
                  </p>
                ) : null}
              </form>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <Eyebrow>Directions</Eyebrow>
          <Heading>Find the counter without calling for landmarks</Heading>
          <Lead className="mt-4">
            Both branches sit on main routes with parking for a pickup. Tap a map to open live
            directions on your phone.
          </Lead>
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {LOCATIONS.map((loc, i) => (
            <Reveal key={`map-${loc.city}`} delay={i * 80}>
              <div className="sheen overflow-hidden p-2">
                <iframe
                  title={`Map of ECA Networks ${loc.city}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(`${loc.address}, ${loc.city}, Kenya`)}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[300px] w-full rounded-[14px] border-0"
                />
                <div className="flex flex-wrap items-center justify-between gap-3 p-4">
                  <p className="text-sm font-bold text-foreground">
                    {loc.city}
                    <span className="ml-2 font-normal text-muted-foreground">{loc.address}</span>
                  </p>
                  <a
                    href={loc.maps}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    Get directions
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <Eyebrow>Answers</Eyebrow>
          <Heading>Before you write</Heading>
        </Reveal>
        <div className="mt-8">
          <FaqList items={FAQS} />
        </div>
      </Section>
    </>
  );
}
