import {
  BracesIcon,
  EmergencyToothIcon,
  ImplantIcon,
  RootCanalIcon,
  SparkleToothIcon,
  ToothIcon,
} from "./icons";
import { homepageServiceLinks } from "../servicePages";

const services = [
  {
    title: "Teeth Cleaning",
    description: "Keep your teeth and gums healthy with a gentle clean that helps prevent bigger, more costly problems later.",
    icon: ToothIcon,
    proof: "Popular with new patients",
    badgeClass: "bg-sky-100 text-sky-700 ring-1 ring-sky-200/70",
    buttonClass:
      "bg-slate-900 text-white shadow-lg shadow-slate-900/10 hover:bg-sky-700 hover:text-white focus-visible:bg-sky-700 focus-visible:text-white visited:text-white",
  },
  {
    title: "Teeth Whitening",
    description: "Lift stains safely and brighten your smile with professional whitening that looks natural and feels worth it.",
    icon: SparkleToothIcon,
    proof: "Great for events, weddings, and photos",
    badgeClass: "bg-amber-100 text-amber-700 ring-1 ring-amber-200/80",
    buttonClass:
      "bg-amber-500 text-white shadow-lg shadow-amber-500/20 hover:bg-amber-600 hover:text-white focus-visible:bg-amber-600 focus-visible:text-white visited:text-white",
  },
  {
    title: "Dental Implants",
    description: "Replace missing teeth with a secure, natural-looking solution that helps you eat, speak, and smile confidently.",
    icon: ImplantIcon,
    proof: "Long-term replacement option",
    badgeClass: "bg-violet-100 text-violet-700 ring-1 ring-violet-200/80",
    buttonClass:
      "bg-violet-600 text-white shadow-lg shadow-violet-600/20 hover:bg-violet-700 hover:text-white focus-visible:bg-violet-700 focus-visible:text-white visited:text-white",
  },
  {
    title: "Root Canal Treatment",
    description: "Stop severe tooth pain, protect your natural tooth, and get relief before the problem gets worse.",
    icon: RootCanalIcon,
    proof: "Pain-relief focused treatment",
    badgeClass: "bg-rose-100 text-rose-700 ring-1 ring-rose-200/80",
    buttonClass:
      "bg-rose-600 text-white shadow-lg shadow-rose-600/20 hover:bg-rose-700 hover:text-white focus-visible:bg-rose-700 focus-visible:text-white visited:text-white",
  },
  {
    title: "Braces / Aligners",
    description: "Improve your smile with modern straightening options designed to be comfortable, discreet, and effective.",
    icon: BracesIcon,
    proof: "Clear options available",
    badgeClass: "bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200/80",
    buttonClass:
      "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 hover:text-white focus-visible:bg-emerald-700 focus-visible:text-white visited:text-white",
  },
  {
    title: "Emergency Dental Care",
    description: "Get fast help for toothaches, swelling, broken teeth, and other urgent issues before pain escalates.",
    icon: EmergencyToothIcon,
    proof: "Same-day urgent bookings",
    badgeClass: "bg-red-100 text-red-700 ring-1 ring-red-200/80",
    buttonClass:
      "bg-red-600 text-white shadow-lg shadow-red-600/20 hover:bg-red-700 hover:text-white focus-visible:bg-red-700 focus-visible:text-white visited:text-white",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20">
      <div className="container-shell">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
            Services
          </p>
          <h2 className="section-title">Dental treatments that solve pain, restore comfort, and improve your smile</h2>
          <p className="section-copy">
            Every service is described in simple terms so patients can quickly understand the
            benefit, feel less overwhelmed, and book the right treatment faster.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group glass-card flex h-full flex-col rounded-[1.75rem] border border-white/70 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${service.badgeClass}`}
                >
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">
                  {service.proof}
                </p>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{service.description}</p>
                <a
                  href={homepageServiceLinks[service.title] ?? "/#booking"}
                  className={`mt-6 inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold !text-white transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-200/70 ${service.buttonClass}`}
                >
                  <span className="text-inherit">
                    {homepageServiceLinks[service.title] ? "Learn More" : "Book Now"}
                  </span>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
