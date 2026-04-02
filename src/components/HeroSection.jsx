import { CalendarIcon, CheckIcon, LocationIcon, PhoneIcon, ShieldIcon } from "./icons";

const benefitItems = [
  "Gentle care for nervous patients",
  "On-the-spot health fund claiming",
  "Same-day help for urgent tooth pain",
];

const proofItems = [
  { value: "4.8★", label: "Google rating" },
  { value: "12,000+", label: "patients treated" },
  { value: "Open 6 days", label: "including Saturdays" },
];

export default function HeroSection() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top_right,_rgba(125,211,252,0.22),_transparent_32%),linear-gradient(135deg,_rgba(2,132,199,0.08),_transparent_65%)]" />
      <div className="container-shell pb-14 pt-6 sm:pb-20 sm:pt-8">
        <nav className="glass-card flex items-center justify-between rounded-full border border-white/70 px-4 py-3 sm:px-6">
          <a href="#" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-600 text-sm font-bold text-white">
              DC
            </span>
            <span>
              <span className="block text-sm font-semibold text-slate-900">DentalCare Melbourne</span>
              <span className="block text-xs text-slate-500">Cosmetic, General & Emergency Dentistry</span>
            </span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#services" className="transition hover:text-teal-700">
              Services
            </a>
            <a href="#pricing" className="transition hover:text-teal-700">
              Pricing
            </a>
            <a href="#contact" className="transition hover:text-teal-700">
              Contact
            </a>
            <a
              href="#booking"
              className="rounded-full bg-sky-600 px-5 py-2.5 text-white shadow-lg shadow-sky-900/20 transition hover:bg-sky-700"
            >
              Book Dental Appointment
            </a>
          </div>
        </nav>

        <div className="grid items-center gap-10 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:pt-20">
          <section className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/90 px-4 py-2 text-sm font-medium text-sky-800 shadow-sm">
              <ShieldIcon className="h-4 w-4" />
              Same-day appointments available for urgent dental problems
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Stop Dental Pain and Smile with Confidence Again
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
              From check-ups and cleans to whitening, implants and emergency dental care, we help
              you feel at ease, explain costs clearly, and make looking after your smile feel more
              straightforward.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-sky-900/20 transition hover:bg-sky-700"
              >
                <CalendarIcon className="h-5 w-5" />
                Book Dental Appointment
              </a>
              <a
                href="tel:+61391234567"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-4 text-base font-semibold text-slate-800 transition hover:border-sky-300 hover:text-sky-800"
              >
                <PhoneIcon className="h-5 w-5" />
                Call Now
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-sm">
                <CheckIcon className="h-4 w-4 text-sky-700" />
                New patients welcome
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-sm">
                <CheckIcon className="h-4 w-4 text-sky-700" />
                No referral needed
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-sm">
                <CheckIcon className="h-4 w-4 text-sky-700" />
                We explain fees before treatment
              </span>
            </div>

            <ul className="mt-8 grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
              {benefitItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/85 px-4 py-3"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2">
                <LocationIcon className="h-4 w-4 text-sky-700" />
                Melbourne CBD, VIC
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldIcon className="h-4 w-4 text-sky-700" />
                HICAPS and eligible Medicare CDBS accepted
              </span>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {proofItems.map((item) => (
                <div
                  key={item.label}
                  className="glass-card rounded-3xl border border-white/70 px-4 py-4 text-center"
                >
                  <p className="text-2xl font-bold text-slate-900">{item.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="relative">
            <div className="glass-card relative overflow-hidden rounded-[2rem] border border-white/70 p-5 sm:p-6">
              <div className="absolute inset-0 bg-[linear-gradient(160deg,_rgba(125,211,252,0.18),_transparent_35%),radial-gradient(circle_at_top_left,_rgba(110,231,183,0.18),_transparent_28%)]" />
              <div className="relative rounded-[1.5rem] bg-sky-50 p-6 sm:p-8">
                <div className="grid gap-4 lg:grid-cols-[1.18fr_0.82fr]">
                  <div className="rounded-[1.5rem] bg-white p-5 shadow-sm">
                    <div className="relative overflow-hidden rounded-[1.25rem]">
                      <img
                        src="/images/principal-dentist.jpg"
                        alt="Dr Emma Collins, Principal Dentist at DentalCare Melbourne"
                        className="h-[20rem] w-full object-cover object-center sm:h-[26rem] lg:h-[32rem]"
                      />
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(15,23,42,0.72))] p-5 sm:p-6">
                        <p className="text-lg font-semibold text-white sm:text-xl">Dr Emma Collins</p>
                        <p className="mt-1 text-sm text-sky-100">Principal Dentist</p>
                        <p className="mt-2 max-w-sm text-sm leading-6 text-slate-200">
                          Trusted by Melbourne patients for gentle, clear, confidence-building dental care.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-[1.5rem] bg-white p-5 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-slate-500">Today’s emergency availability</p>
                          <p className="mt-1 text-2xl font-bold text-slate-900">6 slots left</p>
                        </div>
                        <div className="rounded-2xl bg-sky-100 p-3 text-sky-700">
                          <CalendarIcon className="h-6 w-6" />
                        </div>
                      </div>
                    </div>

                    <div className="rounded-[1.5rem] bg-white p-5 shadow-sm">
                      <p className="text-sm text-slate-500">Booking reassurance</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="rounded-full bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-700">
                          No referral needed
                        </span>
                        <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                          Health fund claims on the spot
                        </span>
                        <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700">
                          Fees confirmed before treatment
                        </span>
                      </div>
                    </div>

                    <div className="rounded-[1.5rem] bg-slate-900 p-5 text-white shadow-sm">
                      <p className="text-sm text-sky-100">Why Melbourne patients choose this clinic</p>
                      <ul className="mt-3 space-y-3 text-sm text-slate-200">
                        <li className="flex items-center gap-3">
                          <span className="h-2 w-2 rounded-full bg-sky-300" />
                          Gentle treatment that helps reduce fear and discomfort
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="h-2 w-2 rounded-full bg-sky-300" />
                          Clear treatment plans, itemised costs, and health fund support
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="h-2 w-2 rounded-full bg-sky-300" />
                          Fast appointments for broken teeth, toothaches, and urgent care
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </header>
  );
}
