const pricingCards = [
  {
    title: "Dental Check-Up & Clean",
    price: "AUD $199",
    note: "A straightforward starting point for keeping your teeth and gums on track and helping avoid more costly treatment later on.",
  },
  {
    title: "Teeth Whitening",
    price: "AUD $449",
    note: "A dentist-led option for patients wanting a brighter smile with realistic advice and safe, professional care.",
  },
  {
    title: "Dental Implants",
    price: "From AUD $4,990",
    note: "Transparent treatment planning for patients looking for a long-term tooth replacement, with itemised costs discussed upfront.",
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
          <h2 className="section-title">Clear pricing helps patients feel in control</h2>
          <p className="section-copy">
            Many patients put off treatment because they are unsure what it will cost. Clear AUD
            pricing, health fund support, and honest guidance help take away the guesswork.
          </p>
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-sky-100 bg-sky-50 px-5 py-4 text-sm leading-7 text-slate-600">
          On-the-spot private health insurance claiming available via HICAPS. Medicare generally
          does not cover routine dental treatment, but we accept Medicare CDBS for eligible
          children.
        </div>

        <div className="mt-4 rounded-[1.5rem] border border-emerald-100 bg-emerald-50 px-5 py-4 text-sm leading-7 text-slate-600">
          Unsure what treatment you need? Book a check-up first and we will talk you through the
          most suitable option before any major treatment is started.
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {pricingCards.map((card, index) => (
            <article
              key={card.title}
              className={`rounded-[1.75rem] border p-6 shadow-sm ${
                index === 1
                  ? "border-sky-300 bg-sky-600 text-white shadow-xl shadow-sky-900/20"
                  : "glass-card border-white/70"
              }`}
            >
              <p className={`text-sm font-semibold ${index === 1 ? "text-sky-100" : "text-sky-700"}`}>
                {card.title}
              </p>
              <p className="mt-5 text-4xl font-bold">{card.price}</p>
              <p
                className={`mt-4 text-sm leading-7 ${
                  index === 1 ? "text-slate-100" : "text-slate-600"
                }`}
              >
                {card.note}
              </p>
              <a
                href="#booking"
                className={`mt-6 inline-flex rounded-full px-5 py-3 text-sm font-semibold transition ${
                  index === 1
                    ? "bg-white text-slate-900 hover:bg-sky-50"
                    : "bg-slate-900 text-white hover:bg-sky-700"
                }`}
              >
                Book Now
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
