import { StarIcon } from "./icons";

const testimonials = [
  {
    name: "Olivia R.",
    treatment: "Emergency dental care",
    text: "My tooth pain was gone the same day, and I finally felt relaxed in a dental chair.",
  },
  {
    name: "James P.",
    treatment: "Root canal treatment",
    text: "I was nervous about treatment, but the dentist made everything calm, clear, and painless.",
  },
  {
    name: "Mia T.",
    treatment: "Teeth whitening",
    text: "My whitening results made such a difference. I smile in photos again without hiding my teeth.",
  },
  {
    name: "Daniel K.",
    treatment: "Restorative dental care",
    text: "They fixed my cracked tooth fast and made the whole experience much less scary than I expected.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-shell">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
            Testimonials
          </p>
          <h2 className="section-title">What patients say after the fear is gone</h2>
          <p className="section-copy">
            These short reviews address the emotions that often stop people from booking: pain,
            anxiety, and the hope of finally feeling good about their smile.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="glass-card rounded-[1.75rem] border border-white/70 p-6"
            >
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} className="h-4 w-4" />
                ))}
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">
                {testimonial.treatment}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">{testimonial.text}</p>
              <p className="mt-5 text-sm font-semibold text-slate-900">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
