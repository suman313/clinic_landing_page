import { LocationIcon, PhoneIcon } from "./icons";

const openingHours = [
  "Mon to Fri: 8:00am - 6:00pm",
  "Saturday: 8:30am - 2:00pm",
  "Sunday: Closed",
];

export default function ContactSection() {
  return (
    <section id="contact" className="pb-28 pt-16 sm:pb-20 sm:pt-20">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
              Contact
            </p>
            <h2 className="section-title">Reach out in the way that feels easiest</h2>
            <p className="section-copy">
              Some patients prefer to book online. Others want to call first, ask about cost, or
              speak to someone before they commit. Make every next step feel simple.
            </p>

            <div className="mt-8 space-y-4">
              <div className="glass-card flex items-start gap-4 rounded-[1.5rem] border border-white/70 p-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <LocationIcon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Address</p>
                  <p className="mt-1 text-sm leading-7 text-slate-600">
                    Suite 5, Level 2
                    <br />
                    166 Collins Street
                    <br />
                    Melbourne VIC 3000
                  </p>
                </div>
              </div>

              <div className="glass-card flex items-start gap-4 rounded-[1.5rem] border border-white/70 p-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <PhoneIcon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Phone</p>
                  <a href="tel:+61391234567" className="mt-1 block text-sm leading-7 text-slate-600">
                    (03) 9123 4567
                  </a>
                </div>
              </div>

              <div className="glass-card rounded-[1.5rem] border border-white/70 p-5">
                <p className="text-sm font-semibold text-slate-900">Email</p>
                <a
                  href="mailto:hello@clinicaremedical.com"
                  className="mt-1 block text-sm leading-7 text-slate-600"
                >
                  hello@clinicaremedical.com
                </a>
              </div>

              <div className="glass-card rounded-[1.5rem] border border-white/70 p-5">
                <p className="text-sm font-semibold text-slate-900">Opening hours</p>
                <div className="mt-2 space-y-2 text-sm leading-7 text-slate-600">
                  {openingHours.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card overflow-hidden rounded-[2rem] border border-white/70 p-4 sm:p-5">
            <div className="flex h-full min-h-[22rem] flex-col rounded-[1.6rem] border border-dashed border-slate-300 bg-[linear-gradient(180deg,_rgba(240,253,250,0.95),_rgba(226,250,246,0.85))] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Google Maps</p>
                  <p className="mt-1 text-sm text-slate-500">Embed placeholder</p>
                </div>
                <div className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
                  Open daily
                </div>
              </div>
              <div className="mt-6 flex flex-1 items-center justify-center rounded-[1.5rem] bg-white/70">
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                    <LocationIcon className="h-8 w-8" />
                  </div>
                  <p className="mt-4 text-lg font-semibold text-slate-900">Melbourne clinic location</p>
                  <p className="mt-2 max-w-xs text-sm leading-7 text-slate-500">
                    Replace this placeholder with a live Google Maps embed so patients can find the
                    clinic quickly and arrive with less stress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
