import { relatedArticles } from "../articlePages";
import { sharedPageLinks } from "../servicePages";

export default function ArticlePage({ article }) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.metaTitle,
    description: article.metaDescription,
    author: {
      "@type": "Organization",
      name: "DentalCare Melbourne",
    },
    publisher: {
      "@type": "Organization",
      name: "DentalCare Melbourne",
    },
  };

  const otherArticles = relatedArticles.filter((item) => item.href !== `/${article.slug}/`);

  return (
    <div className="min-h-screen bg-transparent text-slate-900">
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
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
          <div className="container-shell grid gap-8 lg:grid-cols-[1fr_0.36fr]">
            <article className="glass-card rounded-[2rem] border border-white/70 p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded-full bg-sky-100 px-3 py-1 font-semibold uppercase tracking-[0.14em] text-sky-700">
                  {article.category}
                </span>
                <span className="text-slate-500">{article.readTime}</span>
              </div>
              <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                {article.title}
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">{article.intro}</p>

              <div className="mt-8 rounded-[1.5rem] bg-[linear-gradient(180deg,_#f0f9ff,_#f7fffc)] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">
                  Key takeaways
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                  {article.keyTakeaways.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-sky-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 space-y-8">
                {article.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="text-2xl font-semibold text-slate-900">{section.heading}</h2>
                    <p className="mt-4 text-base leading-8 text-slate-600">{section.body}</p>
                  </section>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={article.primaryCta.href}
                  className="inline-flex min-h-14 items-center justify-center rounded-full bg-sky-600 px-6 py-3.5 text-base font-semibold !text-white transition hover:bg-sky-700 hover:!text-white"
                >
                  {article.primaryCta.label}
                </a>
                <a
                  href={article.secondaryCta.href}
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-800 transition hover:border-sky-300 hover:text-sky-800"
                >
                  {article.secondaryCta.label}
                </a>
              </div>
            </article>

            <aside className="space-y-5">
              <div className="glass-card rounded-[1.75rem] border border-white/70 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">
                  Why this page matters
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  This article is part of the demo site’s SEO-content pitch. It shows how a clinic
                  can publish practical, search-friendly pages that attract intent-driven visitors.
                </p>
              </div>

              <div className="glass-card rounded-[1.75rem] border border-white/70 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">
                  Related articles
                </p>
                <div className="mt-4 space-y-3">
                  {otherArticles.slice(0, 3).map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block rounded-[1.25rem] bg-sky-50 px-4 py-4 text-sm font-medium text-sky-800 transition hover:bg-sky-100 hover:text-sky-900"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-[1.75rem] border border-white/70 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">
                  Related treatment pages
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {sharedPageLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="inline-flex rounded-full bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-sky-50 hover:text-sky-900"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}
