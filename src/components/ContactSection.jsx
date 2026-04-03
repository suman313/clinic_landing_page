import { LocationIcon, PhoneIcon } from "./icons";
import { sharedPageLinks } from "../servicePages";

const openingHours = [
  "Mon to Fri: 8:00am - 6:00pm",
  "Saturday: 8:30am - 2:00pm",
  "Sunday: Closed",
];

const visitNotes = [
  "2 minutes from Collins Street tram stops",
  "Short walk from Flinders Street Station",
  "Ideal for before-work, lunch break, or after-work appointments",
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

              <div className="glass-card rounded-[1.5rem] border border-white/70 p-5">
                <p className="text-sm font-semibold text-slate-900">Popular treatment pages</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {sharedPageLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="inline-flex rounded-full bg-sky-50 px-3 py-2 text-sm font-medium text-sky-700 transition hover:bg-sky-100 hover:text-sky-900"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-[1.5rem] border border-white/70 p-5">
                <p className="text-sm font-semibold text-slate-900">Getting here is simple</p>
                <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
                  {visitNotes.map((item) => (
                    <p key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-sky-500" />
                      <span>{item}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card overflow-hidden rounded-[2rem] border border-white/70 p-4 sm:p-5">
            <div className="flex h-full min-h-[22rem] flex-col rounded-[1.6rem] border border-sky-100 bg-[linear-gradient(180deg,_rgba(240,253,250,0.95),_rgba(226,250,246,0.85))] p-4 sm:p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Google Maps</p>
                  <p className="mt-1 text-sm text-slate-500">166 Collins Street, Melbourne VIC 3000</p>
                </div>
                <div className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
                  Melbourne CBD
                </div>
              </div>
              <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-white/80 bg-white shadow-sm">
                <iframe
                  title="DentalCare Melbourne location map"
                  src="https://maps.google.com/maps?q=166%20Collins%20Street%2C%20Melbourne%20VIC%203000&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="h-[22rem] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[1.25rem] bg-white/85 px-4 py-4 text-sm text-slate-600 shadow-sm">
                  <p className="font-semibold text-slate-900">Nearby landmark</p>
                  <p className="mt-1">Close to Collins Street retail and office precinct</p>
                </div>
                <div className="rounded-[1.25rem] bg-white/85 px-4 py-4 text-sm text-slate-600 shadow-sm">
                  <p className="font-semibold text-slate-900">Public transport</p>
                  <p className="mt-1">Easy tram access and walkable from major CBD stations</p>
                </div>
                <div className="rounded-[1.25rem] bg-white/85 px-4 py-4 text-sm text-slate-600 shadow-sm">
                  <p className="font-semibold text-slate-900">Booking convenience</p>
                  <p className="mt-1">Ideal for workers needing fast city appointments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
