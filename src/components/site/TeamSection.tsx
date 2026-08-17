const TEAM = [
  {
    name: "Sarafina",
    title: "Sales",
    h: 200,
    image:
      "https://images.pexels.com/photos/11156392/pexels-photo-11156392.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Kevin Maingi",
    title: "Sales",
    h: 280,
    image:
      "https://images.pexels.com/photos/14950779/pexels-photo-14950779.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Veronica",
    title: "Accounting",
    h: 320,
    image:
      "https://images.pexels.com/photos/8312669/pexels-photo-8312669.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Conrad Omwenga",
    title: "Chief operating officer",
    h: 360,
    image:
      "https://images.pexels.com/photos/33680700/pexels-photo-33680700.jpeg?auto=compress&cs=tinysrgb&w=500",
  },
  {
    name: "Timothy",
    title: "Chief executive officer",
    h: 320,
    image:
      "https://images.pexels.com/photos/28442318/pexels-photo-28442318.jpeg?auto=compress&cs=tinysrgb&w=500",
  },
  {
    name: "Stella ",
    title: "Sales",
    h: 280,
    image:
      "https://images.pexels.com/photos/31422830/pexels-photo-31422830.png?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Ann Murage",
    title: "Sales",
    h: 180,
    image:
      "https://images.pexels.com/photos/38652616/pexels-photo-38652616.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Patrick",
    title: "Driver and logistics",
    h: 220,
    image:
      "https://images.pexels.com/photos/13392786/pexels-photo-13392786.png?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Tanzania",
    title: "Sales",
    h: 260,
    image:
      "https://images.pexels.com/photos/26150470/pexels-photo-26150470.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Mayo",
    title: "Store assistant",
    h: 220,
    image:
      "https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Fadhili",
    title: "Digital marketing",
    h: 180,
    image:
      "https://images.pexels.com/photos/38707525/pexels-photo-38707525.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
] as const;

export function TeamSection() {
  return (
    <section className="section-pad page-pad py-20">
      <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-primary">
        The people
      </p>

      <div className="mx-auto mt-6 max-w-3xl">
        <div className="h-px w-full bg-border" />
      </div>

      <div className="mt-10 flex flex-col items-center leading-[0.95]">
        <span className="font-serif text-[clamp(34px,4.4vw,48px)] italic text-foreground">
          meet
        </span>
        <span className="flex items-baseline gap-3 text-[clamp(34px,4.4vw,48px)] font-bold tracking-tight">
          <span className="text-foreground">our</span>
          <span className="text-primary">team</span>
        </span>
      </div>

      {[TEAM.slice(0, 6), TEAM.slice(6)].map((row, r) => (
        <div
          key={r}
          className={`flex flex-wrap items-end justify-center gap-4 lg:flex-nowrap ${r === 0 ? "mt-14" : "mt-4"}`}
        >
          {row.map((m) => (
            <figure
              key={m.name}
              className="group relative w-[calc(50%-0.5rem)] overflow-hidden sm:w-[calc(33.333%-0.75rem)] lg:min-w-[150px] lg:flex-1"
              style={{ height: m.h, borderRadius: 16 }}
            >
              <img
                src={m.image}
                alt={`${m.name}, ${m.title} at ECA Networks`}
                loading="lazy"
                className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span
                aria-hidden
                className="absolute inset-0 opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(to top, rgba(11,76,135,0.85) 0%, rgba(11,76,135,0.4) 40%, transparent 100%)",
                }}
              />
              <figcaption className="absolute inset-x-4 bottom-4 z-10 transition-transform duration-300 group-hover:-translate-y-1">
                <p className="text-[17px] font-bold leading-tight text-white">{m.name}</p>
                <p className="mt-1 text-[11px] uppercase leading-tight tracking-[0.08em] text-white/70">
                  {m.title}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      ))}

      <div className="mt-12 text-center">
        <a
          href="mailto:info@ecanetworks.com?subject=Career%20Enquiry"
          className="text-[16px] font-medium text-primary hover:underline"
        >
          Join the team →
        </a>
      </div>
    </section>
  );
}
