export default function BeforeAfterSection() {
  const caseStudies = [
    {
      label: "Before",
      emoji: "🙂",
      title: "Stained, uneven smile",
      detail: "Whitening and cosmetic polishing plan",
    },
    {
      label: "After",
      emoji: "😁",
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
          <h2 className="section-title">See what is possible before you commit to treatment</h2>
          <p className="section-copy">
            When patients can picture a healthier, more confident smile, it becomes much easier to
            move forward with treatment instead of delaying it.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {caseStudies.map((item) => (
            <article
              key={item.label}
              className="glass-card rounded-[2rem] border border-white/70 p-5 sm:p-6"
            >
              <div className="overflow-hidden rounded-[1.5rem] bg-[linear-gradient(180deg,_#eef9ff,_#f6fffc)] p-6">
                <div className="flex h-72 items-center justify-center rounded-[1.25rem] border border-dashed border-sky-200 bg-white/80">
                  <div className="text-center">
                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-sky-100 text-3xl">
                      {item.emoji}
                    </div>
                    <p className="mt-4 text-lg font-semibold text-slate-900">{item.label} Teeth Image</p>
                    <p className="mt-2 text-sm text-slate-500">{item.title}</p>
                  </div>
                </div>
              </div>
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
