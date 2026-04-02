import { CalendarIcon, CheckIcon, PhoneIcon } from "./icons";

const serviceOptions = [
  "Teeth Cleaning",
  "Teeth Whitening",
  "Dental Implants",
  "Root Canal Treatment",
  "Braces / Aligners",
  "Emergency Dental Care",
];

const nextSteps = [
  "Send your request",
  "We call or text to confirm",
  "Arrive knowing the next step and likely fees",
];

export default function BookingSection() {
  return (
    <section id="booking" className="py-16 sm:py-20">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl shadow-slate-900/10 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">
              Booking
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Book your treatment in under 30 seconds
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              If you are in pain, worried about cost, or not sure which treatment to book, start
              here. We will guide you through your options, explain fees clearly, and confirm your
              appointment promptly.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Quick, simple form with no unnecessary steps",
                "Same-day and next-available appointments",
                "Friendly follow-up about fees, health funds, and timing",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-slate-100">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sky-200">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-sky-400/20 bg-sky-500/10 p-5">
              <p className="text-sm font-semibold text-white">What happens after you enquire</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {nextSteps.map((step, index) => (
                  <div key={step} className="rounded-2xl bg-white/8 px-4 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-200">
                      Step {index + 1}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-100">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-slate-300">Need urgent help with dental pain?</p>
              <a
                href="tel:+61391234567"
                className="mt-3 inline-flex items-center gap-3 text-lg font-semibold text-white"
              >
                <PhoneIcon className="h-5 w-5 text-sky-300" />
                (03) 9123 4567
              </a>
            </div>
          </div>

          <div className="glass-card rounded-[2rem] border border-white/70 p-6 sm:p-8">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
                  Request an appointment
                </p>
                <h3 className="mt-2 text-2xl font-bold text-slate-900">Tell us what you need and we’ll take it from there</h3>
                <p className="mt-2 text-sm font-medium text-rose-600">Limited appointments available today for urgent and general dental care</p>
              </div>
              <div className="hidden rounded-2xl bg-sky-100 p-3 text-sky-700 sm:block">
                <CalendarIcon className="h-6 w-6" />
              </div>
            </div>

            <div className="mb-6 grid gap-3 rounded-[1.5rem] border border-sky-100 bg-sky-50 p-4 text-sm text-slate-600 sm:grid-cols-3">
              <div>
                <p className="font-semibold text-slate-900">Takes 30 seconds</p>
                <p className="mt-1">Only the essentials to get you booked in faster.</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">No payment to enquire</p>
                <p className="mt-1">We confirm treatment suitability and fees first.</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Phone or SMS confirmation</p>
                <p className="mt-1">Whichever is easiest for you.</p>
              </div>
            </div>

            <form className="grid gap-4" action="#" method="post">
              <label className="grid gap-2">
                <span className="text-sm font-medium text-slate-700">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your full name"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-slate-700">Phone</span>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Your phone number"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-slate-700">Service</span>
                <select
                  name="service"
                  defaultValue=""
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                >
                  <option value="" disabled>
                    Select Treatment
                  </option>
                  {serviceOptions.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-slate-700">Preferred date</span>
                <input
                  type="date"
                  name="date"
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                />
              </label>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-sky-900/20 transition hover:bg-sky-700"
              >
                Book Dental Appointment
              </button>
            </form>

            <p className="mt-4 text-xs leading-6 text-slate-500">
              Submit your details and our team will contact you to confirm your time, answer
              questions, and help you feel ready for your visit. Private health insurance claiming
              available, with Medicare CDBS accepted for eligible children.
            </p>

            <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-slate-500">
              <span className="rounded-full bg-slate-100 px-3 py-1.5">Secure enquiry</span>
              <span className="rounded-full bg-slate-100 px-3 py-1.5">No-obligation booking request</span>
              <span className="rounded-full bg-slate-100 px-3 py-1.5">Privacy respected</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
