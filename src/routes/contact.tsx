import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { COMPANY, SOLUTIONS } from "@/lib/eca";
import { FaqList } from "@/components/site/Faq";
import {
  Eyebrow,
  Heading,
  Jsonld,
  Lead,
  Panel,
  Reveal,
  Section,
  ShopButton,
  WhatsAppButton,
} from "@/components/site/primitives";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact ECA Networks | Request a Quote in Nairobi" },
      {
        name: "description",
        content:
          "Reach the ECA Networks technical desk in Embakasi, Nairobi. Send a request for quotation with your site details and get pricing, stock status and specification advice.",
      },
      { property: "og:title", content: "Contact ECA Networks Nairobi" },
      {
        property: "og:description",
        content:
          "Phone, WhatsApp, email and counter details for ECA Networks, plus a request for quotation form built around what the desk actually needs to price a job.",
      },
    ],
  }),
  component: Contact,
});

const FAQS = [
  {
    q: "Where is ECA Networks located?",
    a: `${COMPANY.name} operates from ${COMPANY.address}, open ${COMPANY.hours}. Orders are dispatched countrywide by courier and can be collected at the counter.`,
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

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    category: SOLUTIONS[0]?.title ?? "General enquiry",
    county: "",
    details: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Category: ${form.category}`,
      `County: ${form.county}`,
      "",
      form.details,
    ].join("\n");
    const href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
      `RFQ from ${form.company || form.name}`,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSent(true);
  };

  const field =
    "mt-1.5 w-full rounded-xl border border-primary/20 bg-background/70 px-4 py-2.5 text-sm outline-none transition focus:border-ember/60 focus:ring-2 focus:ring-ember/25";

  return (
    <>
      <Jsonld
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: COMPANY.name,
          telephone: COMPANY.phone,
          email: COMPANY.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: "21, Amee Properties, Embakasi",
            addressLocality: "Nairobi",
            addressCountry: "KE",
          },
          openingHours: "Mo-Fr 08:00-17:00",
          areaServed: "Kenya",
        }}
      />

      <Section className="pt-10 sm:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr]">
          <div className="rise">
            <Eyebrow>Contact</Eyebrow>
            <Heading as="h1">
              Tell us about the site and we will <span className="ink-text">price it properly</span>
            </Heading>
            <Lead className="mt-5">
              A request that includes distances, quantities and the county gets a complete answer first time. Everything
              else takes an extra phone call, and we would rather skip it.
            </Lead>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a href={COMPANY.phoneHref} className="gloss rounded-2xl p-5 transition hover:-translate-y-0.5">
                <Phone className="relative z-10 size-5 text-ember" />
                <p className="relative z-10 mt-3 text-xs uppercase tracking-[0.14em] text-muted-foreground">Phone</p>
                <p className="relative z-10 font-semibold">{COMPANY.phone}</p>
              </a>
              <a href={`mailto:${COMPANY.email}`} className="gloss rounded-2xl p-5 transition hover:-translate-y-0.5">
                <Mail className="relative z-10 size-5 text-ember" />
                <p className="relative z-10 mt-3 text-xs uppercase tracking-[0.14em] text-muted-foreground">Email</p>
                <p className="relative z-10 font-semibold">{COMPANY.email}</p>
              </a>
              <div className="gloss rounded-2xl p-5">
                <MapPin className="relative z-10 size-5 text-ember" />
                <p className="relative z-10 mt-3 text-xs uppercase tracking-[0.14em] text-muted-foreground">Counter</p>
                <p className="relative z-10 text-sm font-semibold">{COMPANY.address}</p>
              </div>
              <div className="gloss rounded-2xl p-5">
                <Clock className="relative z-10 size-5 text-ember" />
                <p className="relative z-10 mt-3 text-xs uppercase tracking-[0.14em] text-muted-foreground">Hours</p>
                <p className="relative z-10 text-sm font-semibold">{COMPANY.hours}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <WhatsAppButton />
              <ShopButton />
            </div>
          </div>

          <Reveal>
            <Panel className="p-6 sm:p-8">
              <h2 className="text-xl font-semibold">Request a quotation</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Submitting opens your mail client with the details formatted for the desk. Prefer to talk? Use WhatsApp.
              </p>
              <form onSubmit={submit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm font-medium">
                    Your name
                    <input required value={form.name} onChange={set("name")} className={field} />
                  </label>
                  <label className="block text-sm font-medium">
                    Company
                    <input value={form.company} onChange={set("company")} className={field} />
                  </label>
                  <label className="block text-sm font-medium">
                    Email
                    <input required type="email" value={form.email} onChange={set("email")} className={field} />
                  </label>
                  <label className="block text-sm font-medium">
                    Phone
                    <input value={form.phone} onChange={set("phone")} className={field} />
                  </label>
                  <label className="block text-sm font-medium">
                    Category
                    <select value={form.category} onChange={set("category")} className={field}>
                      {SOLUTIONS.map((s) => (
                        <option key={s.title} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="General enquiry">General enquiry</option>
                    </select>
                  </label>
                  <label className="block text-sm font-medium">
                    County
                    <input value={form.county} onChange={set("county")} className={field} placeholder="Nairobi" />
                  </label>
                </div>
                <label className="block text-sm font-medium">
                  Site details, quantities and distances
                  <textarea
                    required
                    rows={5}
                    value={form.details}
                    onChange={set("details")}
                    className={field}
                    placeholder="Example: 2.4 km aerial route, 12 core ADSS, longest span 110 m, 8 closures, 40 subscriber drops, delivery to Nakuru."
                  />
                </label>
                <button
                  type="submit"
                  className="ink-fill inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 dark:text-background"
                >
                  Send request
                </button>
                {sent ? (
                  <p className="text-sm text-ember">
                    Your mail client should be open. If nothing happened, email {COMPANY.email} directly.
                  </p>
                ) : null}
              </form>
            </Panel>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-0">
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
