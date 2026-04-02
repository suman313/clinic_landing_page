import { HeartPulseIcon, StethoscopeIcon, TherapyIcon, ToothIcon } from "./icons";

const services = [
  {
    title: "Teeth Cleaning",
    description: "Keep your teeth and gums healthy with a gentle clean that helps prevent bigger, more costly problems later.",
    icon: StethoscopeIcon,
    proof: "Popular with new patients",
  },
  {
    title: "Teeth Whitening",
    description: "Lift stains safely and brighten your smile with professional whitening that looks natural and feels worth it.",
    icon: HeartPulseIcon,
    proof: "Great for events, weddings, and photos",
  },
  {
    title: "Dental Implants",
    description: "Replace missing teeth with a secure, natural-looking solution that helps you eat, speak, and smile confidently.",
    icon: ToothIcon,
    proof: "Long-term replacement option",
  },
  {
    title: "Root Canal Treatment",
    description: "Stop severe tooth pain, protect your natural tooth, and get relief before the problem gets worse.",
    icon: TherapyIcon,
    proof: "Pain-relief focused treatment",
  },
  {
    title: "Braces / Aligners",
    description: "Improve your smile with modern straightening options designed to be comfortable, discreet, and effective.",
    icon: HeartPulseIcon,
    proof: "Clear options available",
  },
  {
    title: "Emergency Dental Care",
    description: "Get fast help for toothaches, swelling, broken teeth, and other urgent issues before pain escalates.",
    icon: StethoscopeIcon,
    proof: "Same-day urgent bookings",
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
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">
                  {service.proof}
                </p>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{service.description}</p>
                <a
                  href="#booking"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
                >
                  Book Now
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
