const pricingCards = [
  {
    title: "Dental Check-Up & Clean",
    price: "AUD $199",
    note: "A simple starting point if you want peace of mind, fresher teeth, and early help before small issues turn expensive.",
    points: [
      "Ideal for new patients or overdue check-ups",
      "Clear explanation of what needs attention",
      "Useful first step before major treatment",
    ],
    badge: "Most practical first visit",
    cardClass: "glass-card border-white/70",
    labelClass: "text-sky-700",
    buttonClass:
      "bg-slate-900 !text-white hover:bg-sky-700 hover:!text-white focus-visible:bg-sky-700 focus-visible:!text-white visited:!text-white",
  },
  {
    title: "Teeth Whitening",
    price: "AUD $449",
    note: "A popular confidence-boosting treatment for patients who want a noticeably brighter smile without guesswork or gimmicks.",
    points: [
      "Professional whitening with realistic guidance",
      "Great before weddings, events, and photos",
      "Designed for safe, natural-looking brightness",
    ],
    badge: "Popular smile upgrade",
    cardClass: "border-sky-300 bg-sky-600 text-white shadow-xl shadow-sky-900/20",
    labelClass: "text-sky-100",
    buttonClass:
      "bg-white !text-slate-900 hover:bg-sky-50 hover:!text-slate-900 focus-visible:bg-sky-50 focus-visible:!text-slate-900 visited:!text-slate-900",
  },
  {
    title: "Dental Implants",
    price: "From AUD $4,990",
    note: "A long-term solution for missing teeth, with treatment stages, suitability, and itemised costs explained before you commit.",
    points: [
      "Secure, natural-looking tooth replacement",
      "Treatment plan discussed before major decisions",
      "Costs explained in clear stages",
    ],
    badge: "Long-term replacement option",
    cardClass: "glass-card border-white/70",
    labelClass: "text-sky-700",
    buttonClass:
      "bg-slate-900 !text-white hover:bg-sky-700 hover:!text-white focus-visible:bg-sky-700 focus-visible:!text-white visited:!text-white",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 sm:py-20">
      <div className="container-shell">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
            Pricing
          </p>
          <h2 className="section-title">Know the likely cost before you book, not after you sit in the chair</h2>
          <p className="section-copy">
            See clear starting prices, understand your options, and know the likely cost before you
            commit to treatment.
          </p>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[1.75rem] border border-sky-100 bg-[linear-gradient(135deg,_#f0f9ff,_#f8fffd)] px-5 py-5 text-sm leading-7 text-slate-600 sm:px-6">
            On-the-spot private health insurance claiming available via HICAPS. Medicare generally
            does not cover routine dental treatment, but we accept Medicare CDBS for eligible
            children.
          </div>
          <div className="rounded-[1.75rem] border border-emerald-100 bg-emerald-50 px-5 py-5 text-sm leading-7 text-slate-600 sm:px-6">
            Unsure what to book? Start with a check-up and we will explain the most suitable option
            before any major treatment is recommended.
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {pricingCards.map((card) => (
            <article
              key={card.title}
              className={`rounded-[1.75rem] border p-6 shadow-sm ${card.cardClass}`}
            >
              <div className="flex items-start justify-between gap-3">
                <p className={`text-sm font-semibold ${card.labelClass}`}>
                  {card.title}
                </p>
                <span
                  className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${
                    card.cardClass.includes("bg-sky-600")
                      ? "bg-white/15 text-white"
                      : "bg-sky-100 text-sky-700"
                  }`}
                >
                  {card.badge}
                </span>
              </div>
              <p className="mt-5 text-4xl font-bold">{card.price}</p>
              <p
                className={`mt-4 text-sm leading-7 ${
                  card.cardClass.includes("bg-sky-600") ? "text-slate-100" : "text-slate-600"
                }`}
              >
                {card.note}
              </p>
              <ul
                className={`mt-5 space-y-3 text-sm ${
                  card.cardClass.includes("bg-sky-600") ? "text-slate-100" : "text-slate-600"
                }`}
              >
                {card.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 h-2.5 w-2.5 rounded-full ${
                        card.cardClass.includes("bg-sky-600") ? "bg-sky-200" : "bg-sky-500"
                      }`}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div
                className={`mt-6 rounded-[1.25rem] px-4 py-3 text-xs leading-6 ${
                  card.cardClass.includes("bg-sky-600")
                    ? "bg-white/10 text-sky-50"
                    : "bg-slate-50 text-slate-500"
                }`}
              >
                Fees confirmed before treatment. If you are unsure what is right for you, we will
                guide you before you commit.
              </div>
              <a
                href="#booking"
                className={`mt-6 inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-200/70 ${card.buttonClass}`}
              >
                <span className="!text-inherit">Book Now</span>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-[1.75rem] border border-slate-200 bg-white/85 px-5 py-5 text-sm leading-7 text-slate-600 shadow-sm sm:px-6">
          Concerned about cost? You do not need to decide everything today. Book an exam, get clear
          advice, and understand the likely fees before moving ahead with bigger treatment.
        </div>
      </div>
    </section>
  );
}
