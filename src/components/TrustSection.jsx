import { ShieldIcon, StarIcon } from "./icons";

const doctors = [
  {
    name: "Dr Emma Collins",
    qualification: "BDS, ADC",
    specialty: "Cosmetic & General Dentistry",
    detail: "15+ years experience",
    image: "/images/principal-dentist.jpg",
  },
  {
    name: "Dr Michael Tran",
    qualification: "DDS, Implant Certified",
    specialty: "Implant Dentistry",
    detail: "Focused on complex restorative care",
    image: "/images/dr-michael-tran.jpg",
  },
  {
    name: "Dr Sarah Lee",
    qualification: "BDS, Invisalign Certified",
    specialty: "Smile & Aligner Care",
    detail: "Gentle care for anxious patients",
    image: "/images/dr-sarah-lee.jpg",
  },
  {
    name: "Ready to meet your dentist?",
    qualification: "New patients welcome",
    specialty: "Book a consultation",
    detail: "Start with a check-up or tell us what is bothering you.",
    image: null,
    cta: true,
  },
];

const accreditations = [
  {
    title: "AHPRA Registered",
    description: "Your dentist is registered to practise safely in Australia.",
  },
  {
    title: "ADA Member",
    description: "Connected to recognised professional standards in Australian dentistry.",
  },
  {
    title: "Implant & Aligner Certified",
    description: "Trained in advanced smile and tooth replacement treatments.",
  },
];
const reassuranceItems = [
  "Saturday appointments available",
  "HICAPS claiming at reception",
  "Itemised treatment plans before major work",
];

export default function TrustSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
            Trust & credibility
          </p>
          <h2 className="section-title">The trust signals patients look for before they book</h2>
          <p className="section-copy">
            When patients worry about pain, cost, or whether they can trust a clinic, clear proof
            of experience and results helps them feel safe taking the next step.
          </p>
        </div>

        <div className="mt-6">
          <div className="glass-card flex w-full items-center justify-center gap-4 rounded-3xl border border-white/70 px-5 py-5 text-center sm:justify-start sm:text-left">
            <div className="flex items-center gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon key={index} className="h-5 w-5" />
              ))}
            </div>
            <div>
              <p className="text-lg font-bold text-slate-900">4.8★ Google Rating</p>
              <p className="text-sm text-slate-500">Trusted by 280+ patients for gentle, reliable care</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="grid items-start gap-5 md:grid-cols-2">
            {doctors.map((doctor) => (
              <article
                key={doctor.name}
                className={`rounded-[1.75rem] border p-5 ${
                  doctor.cta
                    ? "border-sky-100 bg-[linear-gradient(180deg,_#f4fbff,_#eefcf9)] shadow-[0_18px_40px_rgba(2,132,199,0.08)]"
                    : "glass-card border-white/70"
                }`}
              >
                {doctor.cta ? (
                  <div className="flex h-full min-h-[28rem] flex-col justify-between rounded-[1.4rem] bg-white/60 p-6">
                    <div>
                      <p className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
                        {doctor.specialty}
                      </p>
                      <h3 className="mt-4 text-2xl font-semibold text-slate-900">{doctor.name}</h3>
                      <p className="mt-3 text-sm font-medium text-slate-600">{doctor.qualification}</p>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{doctor.detail}</p>
                    </div>
                    <a
                      href="#booking"
                      className="mt-6 inline-flex rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
                    >
                      Book a Consultation
                    </a>
                  </div>
                ) : (
                  <>
                    <div className="aspect-[3/4] overflow-hidden rounded-[1.4rem] bg-[linear-gradient(180deg,_#e0f2fe,_#f0fdf9)]">
                      {doctor.image ? (
                        <img
                          src={doctor.image}
                          alt={`${doctor.name} portrait`}
                          className="h-full w-full object-cover object-center"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(180deg,_#dbeafe,_#ecfeff)]">
                          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-2xl font-bold text-sky-700 shadow-sm">
                            {doctor.name
                              .split(" ")
                              .map((part) => part[0])
                              .slice(0, 2)
                              .join("")}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="mt-5 flex flex-col">
                      <h3 className="text-lg font-semibold text-slate-900">{doctor.name}</h3>
                      <p className="mt-2 inline-flex w-fit rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                        {doctor.specialty}
                      </p>
                      <p className="mt-3 text-sm text-slate-500">{doctor.qualification}</p>
                      <p className="mt-2 text-sm text-slate-500">{doctor.detail}</p>
                    </div>
                  </>
                )}
              </article>
            ))}
          </div>

          <aside className="space-y-5">
            <div className="glass-card rounded-[1.75rem] border border-white/70 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Why patients feel confident here</h3>
              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-sky-50 px-4 py-4 text-center">
                  <p className="text-2xl font-bold text-slate-900">15+</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                    Years of Dental Experience
                  </p>
                </div>
                <div className="rounded-2xl bg-emerald-50 px-4 py-4 text-center">
                  <p className="text-2xl font-bold text-slate-900">12k+</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                    Smiles Treated
                  </p>
                </div>
                <div className="rounded-2xl bg-sky-50 px-4 py-4 text-center">
                  <p className="text-2xl font-bold text-slate-900">100%</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                    Dentist Certifications
                  </p>
                </div>
              </div>
              <div className="mt-5 grid gap-3">
                {accreditations.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-3 rounded-2xl border border-sky-100 bg-sky-50 px-4 py-3"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-sky-700 shadow-sm">
                      <ShieldIcon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-slate-700">{item.title}</span>
                      <span className="mt-1 block text-xs leading-5 text-slate-500">
                        {item.description}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-[1.5rem] border border-sky-100 bg-white p-4">
                <p className="text-sm font-semibold text-slate-900">Practical trust builders</p>
                <ul className="mt-3 space-y-3 text-sm text-slate-600">
                  {reassuranceItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <blockquote className="mt-5 rounded-[1.5rem] border border-sky-100 bg-sky-50 p-5">
                <p className="text-sm leading-7 text-slate-700">
                  “I put off treatment for months because I was worried it would hurt, but the team
                  made everything feel calm, clear, and manageable from the start.”
                </p>
                <footer className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">
                  Priya, South Yarra
                </footer>
              </blockquote>
              <a
                href="#testimonials"
                className="mt-5 inline-flex text-sm font-semibold text-sky-700 transition hover:text-sky-900"
              >
                Read more reviews
              </a>
              <a
                href="#booking"
                className="mt-6 inline-flex rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
              >
                Book with Confidence
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
