import { articleCards } from "../articlePages";

export default function ResourcesSection() {
  return (
    <section id="resources" className="py-16 sm:py-20">
      <div className="container-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
            Resources
          </p>
          <h2 className="section-title">Helpful dental advice that makes booking feel easier and more informed</h2>
          <p className="section-copy">
            Explore simple guides on dental pain, whitening, implants, and choosing the right
            clinic so you can understand your options before taking the next step.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {articleCards.map((card, index) => (
            <article
              key={card.title}
              className={`rounded-[1.75rem] border p-6 shadow-sm ${
                index === 1
                  ? "border-sky-200 bg-[linear-gradient(180deg,_#f0f9ff,_#ffffff)] shadow-[0_22px_50px_rgba(2,132,199,0.10)]"
                  : "glass-card border-white/70"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <p className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">
                  {card.category}
                </p>
                <span className="text-xs font-medium text-slate-500">{card.readTime}</span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold leading-tight text-slate-900">
                {card.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{card.excerpt}</p>
              <a
                href={card.href}
                className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold !text-white transition hover:bg-sky-700 hover:!text-white"
              >
                Read More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
