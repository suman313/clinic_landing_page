const faqs = [
  {
    question: "How much does a dental check-up and clean cost in Melbourne?",
    answer:
      "Our check-up and clean starts from AUD $199. If you need additional treatment, we explain the likely fees before anything major is booked or started.",
  },
  {
    question: "Can I get a same-day emergency dentist appointment?",
    answer:
      "Yes. If you have tooth pain, swelling, a broken tooth, or another urgent issue, contact the clinic as early as possible and we will do our best to offer a same-day appointment.",
  },
  {
    question: "Do you offer teeth whitening?",
    answer:
      "Yes. We offer professional teeth whitening designed to brighten your smile safely and naturally, with guidance on whether whitening is the right option for your teeth.",
  },
  {
    question: "Do you accept health fund claims and Medicare CDBS?",
    answer:
      "Yes. We offer on-the-spot private health fund claiming via HICAPS, and we accept Medicare CDBS for eligible children.",
  },
  {
    question: "Do I need a referral to book a dentist appointment?",
    answer:
      "No referral is needed. You can book directly for a check-up, emergency appointment, whitening consultation, implants discussion, or general dental concern.",
  },
  {
    question: "What if I am nervous about going to the dentist?",
    answer:
      "Many patients feel anxious before treatment. The clinic focuses on gentle care, clear explanations, and helping you understand the next step so the visit feels calmer and more manageable.",
  },
];

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FaqSection() {
  return (
    <section id="faq" className="py-16 sm:py-20">
      <div className="container-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
            FAQ
          </p>
          <h2 className="section-title">Answers patients often search for before they book</h2>
          <p className="section-copy">
            Clear answers to common questions about cost, emergencies, whitening, health funds,
            and booking can help patients feel ready to take the next step sooner.
          </p>
        </div>

        <div className="mt-10 grid gap-4">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="glass-card group rounded-[1.5rem] border border-white/70 px-5 py-5 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-slate-900">
                <span>{item.question}</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-4xl pr-10 text-sm leading-7 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
