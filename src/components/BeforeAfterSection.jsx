export default function BeforeAfterSection() {
  const caseStudies = [
    {
      label: "Before",
      image: "/images/before-smile.png",
      alt: "Before dental treatment showing stained and uneven front teeth",
      title: "Stained, uneven smile",
      detail: "Whitening and cosmetic polishing plan",
    },
    {
      label: "After",
      image: "/images/after-smile.png",
      alt: "After dental treatment showing a brighter and more even smile",
      title: "Brighter, more confident smile",
      detail: "Real patient results",
    },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="container-shell">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
            Smile Transformations
          </p>
          <h2 className="section-title">
            See what is possible before you commit to treatment
          </h2>
          <p className="section-copy">
            See how a tired, stained, or uneven smile can be improved with the
            right treatment plan, so booking feels like a confident next step
            instead of a risk.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {caseStudies.map((item) => (
            <article
              key={item.label}
              className="glass-card rounded-[2rem] border border-white/70 p-5 sm:p-6"
            >
              <div className="overflow-hidden rounded-[1.5rem] bg-[linear-gradient(180deg,_#eef9ff,_#f6fffc)] p-6">
                <div className="overflow-hidden rounded-[1.25rem] border border-sky-100 bg-white shadow-sm">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-72 w-full object-cover"
                  />
                </div>
              </div>
              <p className="mt-5 text-lg font-semibold text-slate-900">
                {item.title}
              </p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                {item.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
