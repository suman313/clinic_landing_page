import { sharedPageLinks, sharedTrustPoints } from "../servicePages";

export default function ServicePage({ page }) {
  const Icon = page.icon;
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: page.metaTitle,
    description: page.metaDescription,
    about: {
      "@type": "MedicalProcedure",
      name: page.eyebrow,
    },
  };

  return (
    <div className="min-h-screen bg-transparent text-slate-900">
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <header className="border-b border-sky-100/80 bg-[linear-gradient(180deg,_rgba(240,249,255,0.95),_rgba(255,255,255,0.92))]">
        <div className="container-shell py-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <a href="/" className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              DentalCare Melbourne
            </a>
            <nav className="flex flex-wrap gap-3 text-sm font-medium text-slate-600">
              {sharedPageLinks.map((link) => (
                <a key={link.href} href={link.href} className="transition hover:text-sky-800">
                  {link.label}
                </a>
              ))}
              <a
                href="/#booking"
                className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 !text-white transition hover:bg-sky-700 hover:!text-white"
              >
                Book Now
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section className="py-16 sm:py-20">
          <div className="container-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
                {page.eyebrow}
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                {page.heading}
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">{page.intro}</p>

              <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-sky-200/80 bg-white/90 px-5 py-2.5 text-sm font-semibold text-sky-900 shadow-sm">
                <span className={`flex h-10 w-10 items-center justify-center rounded-full ${page.accentClass}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <span>{page.proof}</span>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={page.primaryHref}
                  className="inline-flex min-h-14 items-center justify-center rounded-full bg-sky-600 px-6 py-3.5 text-base font-semibold !text-white shadow-lg shadow-sky-900/20 transition hover:bg-sky-700 hover:!text-white"
                >
                  {page.primaryCta}
                </a>
                <a
                  href={page.secondaryHref}
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-800 transition hover:border-sky-300 hover:text-sky-800"
                >
                  {page.secondaryCta}
                </a>
              </div>
            </div>

            <aside className="glass-card rounded-[2rem] border border-white/70 p-6 shadow-sm">
              <div className="rounded-[1.5rem] bg-[linear-gradient(180deg,_#f7fcff,_#effbf9)] p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">
                      Starting price
                    </p>
                    <p className="mt-3 text-4xl font-bold text-slate-950">{page.priceValue}</p>
                    <p className="mt-2 text-sm text-slate-500">{page.priceLabel}</p>
                  </div>
                  <div className={`rounded-2xl p-4 ${page.accentClass}`}>
                    <Icon className="h-7 w-7" />
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  {page.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-[1.25rem] border border-sky-100 bg-white/90 p-4 text-sm leading-7 text-slate-600">
                  We explain likely fees and treatment options before you commit to anything major.
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="pb-16 sm:pb-20">
          <div className="container-shell grid gap-6 lg:grid-cols-3">
            {sharedTrustPoints.map((item) => {
              const TrustIcon = item.icon;

              return (
                <div
                  key={item.text}
                  className="glass-card rounded-[1.5rem] border border-white/70 px-5 py-5 text-sm text-slate-600 shadow-sm"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                    <TrustIcon className="h-5 w-5" />
                  </span>
                  <p className="mt-4 font-medium text-slate-900">{item.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="pb-16 sm:pb-20">
          <div className="container-shell grid gap-6 lg:grid-cols-2">
            {page.sections.map((section) => (
              <article
                key={section.title}
                className="glass-card rounded-[1.75rem] border border-white/70 p-6 shadow-sm"
              >
                <h2 className="text-2xl font-semibold text-slate-900">{section.title}</h2>
                <p className="mt-4 text-base leading-8 text-slate-600">{section.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="pb-16 sm:pb-20">
          <div className="container-shell">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
                Questions
              </p>
              <h2 className="section-title">Common questions about {page.eyebrow.toLowerCase()}</h2>
            </div>

            <div className="mt-8 grid gap-4">
              {page.faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="glass-card group rounded-[1.5rem] border border-white/70 px-5 py-5 shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-slate-900">
                    <span>{faq.q}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-4xl pr-10 text-sm leading-7 text-slate-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container-shell">
            <div className="rounded-[2rem] bg-slate-900 px-6 py-8 text-white shadow-xl shadow-slate-900/15 sm:px-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">
                Ready to take the next step?
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Book with clear guidance and no pressure
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                Tell us what you need, ask your questions, and we will help you understand the most
                sensible next step before major treatment is started.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/#booking"
                  className="inline-flex min-h-14 items-center justify-center rounded-full bg-sky-500 px-6 py-3.5 text-base font-semibold !text-white transition hover:bg-sky-400 hover:!text-white"
                >
                  Book Appointment
                </a>
                <a
                  href="tel:+61391234567"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Call (03) 9123 4567
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
