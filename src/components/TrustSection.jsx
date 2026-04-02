import { ShieldIcon, StarIcon } from "./icons";

const doctors = [
  { name: "Dr Emma Collins", qualification: "BDS, ADC", specialty: "Cosmetic & General Dentistry", detail: "15+ years experience" },
  { name: "Dr Michael Tran", qualification: "DDS, Implant Certified", specialty: "Implant Dentistry", detail: "Focused on complex restorative care" },
  { name: "Dr Sarah Lee", qualification: "BDS, Invisalign Certified", specialty: "Smile & Aligner Care", detail: "Gentle care for anxious patients" },
];

const accreditations = ["AHPRA Registered", "ADA Member", "Implant & Aligner Certified"];
const reassuranceItems = [
  "Saturday appointments available",
  "HICAPS claiming at reception",
  "Itemised treatment plans before major work",
];

export default function TrustSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
              Trust & credibility
            </p>
            <h2 className="section-title">The trust signals patients look for before they book</h2>
            <p className="section-copy">
              When patients worry about pain, cost, or whether they can trust a clinic, clear proof
              of experience and results helps them feel safe taking the next step.
            </p>
          </div>
          <div className="glass-card flex items-center gap-4 rounded-3xl border border-white/70 px-5 py-4">
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

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-5 md:grid-cols-3">
            {doctors.map((doctor, index) => (
              <article
                key={doctor.name}
                className="glass-card rounded-[1.75rem] border border-white/70 p-5"
              >
                <div className="rounded-[1.4rem] bg-[linear-gradient(180deg,_#e0f2fe,_#f0fdf9)] p-4">
                  <div className="mx-auto flex h-48 w-full max-w-[11rem] items-end justify-center">
                    <div className="relative h-full w-full">
                      <div className="absolute left-1/2 top-4 h-16 w-16 -translate-x-1/2 rounded-full bg-sky-200" />
                      <div
                        className={`absolute bottom-0 left-1/2 h-28 w-24 -translate-x-1/2 rounded-t-[2rem] ${
                          index === 1 ? "bg-emerald-500" : index === 2 ? "bg-sky-700" : "bg-sky-600"
                        }`}
                      />
                      <div className="absolute bottom-10 left-1/2 h-16 w-20 -translate-x-1/2 rounded-t-[1rem] bg-white" />
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-semibold text-slate-900">{doctor.name}</h3>
                  <p className="mt-1 text-sm font-medium text-sky-700">{doctor.specialty}</p>
                  <p className="mt-2 text-sm text-slate-500">{doctor.qualification}</p>
                  <p className="mt-1 text-sm text-slate-500">{doctor.detail}</p>
                </div>
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
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-sky-100 bg-sky-50 px-4 py-3"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-sky-700 shadow-sm">
                      <ShieldIcon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-medium text-slate-700">{item}</span>
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
            </div>

            <div className="rounded-[1.75rem] bg-slate-900 p-6 text-white shadow-xl shadow-slate-900/10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">
                Patient confidence
              </p>
              <h3 className="mt-3 text-2xl font-bold">Real results make the decision feel safer</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Patients are far more likely to book when they can see calm, happy outcomes and feel
                reassured that they will be treated with care, clarity, and respect.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {["😀", "😁", "😄"].map((face) => (
                  <div
                    key={face}
                    className="flex h-16 items-center justify-center rounded-2xl bg-white/10 text-3xl"
                  >
                    {face}
                  </div>
                ))}
              </div>
              <a
                href="#booking"
                className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-sky-50"
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
