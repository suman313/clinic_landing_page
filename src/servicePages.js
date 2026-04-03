import {
  CalendarIcon,
  CheckIcon,
  EmergencyToothIcon,
  ImplantIcon,
  PhoneIcon,
  SparkleToothIcon,
  ToothIcon,
} from "./components/icons";

export const servicePages = {
  emergency: {
    slug: "emergency-dentist-melbourne",
    title: "Emergency Dentist Melbourne | Same-Day Dental Appointments",
    metaTitle: "Emergency Dentist Melbourne | Same-Day Dental Appointments",
    metaDescription:
      "Need an emergency dentist in Melbourne? Get fast help for toothaches, swelling, broken teeth, and urgent dental pain with same-day appointments when available.",
    eyebrow: "Emergency Dentist Melbourne",
    heading: "Fast help for tooth pain, swelling, broken teeth, and urgent dental problems",
    intro:
      "If you are in pain, worried something is getting worse, or need a dentist quickly, we aim to make the next step simple with same-day emergency appointments when available.",
    proof: "Same-day emergency appointments available",
    icon: EmergencyToothIcon,
    accentClass: "bg-red-100 text-red-700",
    primaryCta: "Call for Fast Relief",
    primaryHref: "tel:+61391234567",
    secondaryCta: "Book Emergency Appointment",
    secondaryHref: "/#booking",
    priceLabel: "Emergency consult",
    priceValue: "Call for availability",
    bullets: [
      "Help for severe toothaches, swelling, infections, and broken teeth",
      "Fast assessment to understand what is causing the pain",
      "Clear explanation of urgent treatment options and likely fees",
    ],
    sections: [
      {
        title: "When to book urgently",
        body:
          "Do not wait if you have significant pain, facial swelling, a cracked or broken tooth, bleeding, or signs of infection. Early treatment often makes the problem easier and less expensive to manage.",
      },
      {
        title: "What happens at the appointment",
        body:
          "We assess the problem, explain what is happening in plain language, and talk you through the fastest and safest next step. If further treatment is needed, we explain that before moving ahead.",
      },
    ],
    faqs: [
      {
        q: "Can I get a same-day emergency dentist appointment in Melbourne?",
        a: "Yes. If you call early, we will do our best to fit you in the same day for urgent dental problems.",
      },
      {
        q: "What counts as a dental emergency?",
        a: "Common emergencies include strong tooth pain, swelling, a broken tooth, infection, bleeding, or trauma to the mouth.",
      },
    ],
  },
  whitening: {
    slug: "teeth-whitening-melbourne",
    title: "Teeth Whitening Melbourne | Professional Smile Whitening",
    metaTitle: "Teeth Whitening Melbourne | Professional Smile Whitening",
    metaDescription:
      "Professional teeth whitening in Melbourne for a brighter, more confident smile. Safe, dentist-led whitening with realistic advice and natural-looking results.",
    eyebrow: "Teeth Whitening Melbourne",
    heading: "Brighten your smile safely with professional teeth whitening",
    intro:
      "If your teeth look dull, stained, or older than you would like, professional whitening can lift your smile and confidence without the guesswork of over-the-counter products.",
    proof: "Popular before weddings, events, and photos",
    icon: SparkleToothIcon,
    accentClass: "bg-amber-100 text-amber-700",
    primaryCta: "Book Whitening Consultation",
    primaryHref: "/#booking",
    secondaryCta: "Call the Clinic",
    secondaryHref: "tel:+61391234567",
    priceLabel: "Professional whitening",
    priceValue: "AUD $449",
    bullets: [
      "Dentist-led advice on whether whitening is right for your teeth",
      "Noticeably brighter smile with a more natural finish",
      "Ideal for patients preparing for events, photos, or confidence boosts",
    ],
    sections: [
      {
        title: "Why patients choose professional whitening",
        body:
          "Many people want a whiter smile but do not want patchy results, wasted money, or sensitivity from the wrong product. Professional whitening gives you clearer guidance and a more predictable outcome.",
      },
      {
        title: "What results can you expect",
        body:
          "The goal is a cleaner, brighter, healthier-looking smile that still feels natural. We guide you on what is realistic for your teeth and whether whitening should be paired with a clean or cosmetic polishing.",
      },
    ],
    faqs: [
      {
        q: "How much does teeth whitening cost in Melbourne?",
        a: "Our professional teeth whitening starts from AUD $449.",
      },
      {
        q: "Is professional whitening better than store-bought kits?",
        a: "It is usually safer and more predictable because the treatment is guided by a dental professional and based on your teeth, stains, and smile goals.",
      },
    ],
  },
  implants: {
    slug: "dental-implants-melbourne",
    title: "Dental Implants Melbourne | Tooth Replacement Options",
    metaTitle: "Dental Implants Melbourne | Tooth Replacement Options",
    metaDescription:
      "Considering dental implants in Melbourne? Learn about long-term tooth replacement, treatment planning, likely costs, and whether implants may be right for you.",
    eyebrow: "Dental Implants Melbourne",
    heading: "Replace missing teeth with a secure, natural-looking long-term solution",
    intro:
      "Dental implants can help you eat, speak, and smile more confidently. If you are comparing your options, the first step is understanding suitability, treatment stages, and likely costs clearly.",
    proof: "Clear treatment planning before major decisions",
    icon: ImplantIcon,
    accentClass: "bg-violet-100 text-violet-700",
    primaryCta: "Book Implant Consultation",
    primaryHref: "/#booking",
    secondaryCta: "Call to Ask a Question",
    secondaryHref: "tel:+61391234567",
    priceLabel: "Implants",
    priceValue: "From AUD $4,990",
    bullets: [
      "Long-term replacement option for missing teeth",
      "Natural-looking result designed for comfort and function",
      "Itemised treatment stages and costs discussed upfront",
    ],
    sections: [
      {
        title: "Why implants are worth considering",
        body:
          "If you are missing a tooth, implants can offer a more stable and natural-looking solution than leaving the gap untreated. They are often chosen by patients who want confidence, function, and long-term value.",
      },
      {
        title: "How the process works",
        body:
          "Treatment usually starts with an assessment, planning, and a discussion about your bone support, timing, and goals. We explain each stage clearly so you understand what is involved before committing.",
      },
    ],
    faqs: [
      {
        q: "How much do dental implants cost in Melbourne?",
        a: "Implants start from AUD $4,990, with final fees depending on your treatment needs and whether additional procedures are required.",
      },
      {
        q: "Are dental implants right for everyone?",
        a: "Not always. Suitability depends on factors like oral health, bone support, and your overall treatment goals, which is why a consultation is important first.",
      },
    ],
  },
  checkup: {
    slug: "check-up-clean-melbourne",
    title: "Dental Check-Up and Clean Melbourne | New Patients Welcome",
    metaTitle: "Dental Check-Up and Clean Melbourne | New Patients Welcome",
    metaDescription:
      "Book a dental check-up and clean in Melbourne. Ideal for new patients, overdue check-ups, and anyone wanting clear advice before treatment becomes more costly.",
    eyebrow: "Check-Up and Clean Melbourne",
    heading: "A simple first step if you want reassurance, fresher teeth, and clearer advice",
    intro:
      "A check-up and clean helps you understand what is going on with your teeth before small issues become bigger, more painful, or more expensive to fix.",
    proof: "Great for new patients and overdue visits",
    icon: ToothIcon,
    accentClass: "bg-sky-100 text-sky-700",
    primaryCta: "Book Check-Up and Clean",
    primaryHref: "/#booking",
    secondaryCta: "Call the Clinic",
    secondaryHref: "tel:+61391234567",
    priceLabel: "Check-up and clean",
    priceValue: "AUD $199",
    bullets: [
      "Ideal first appointment if you are not sure what you need",
      "Clear explanation of any issues that need attention",
      "Helps prevent more complex and costly treatment later",
    ],
    sections: [
      {
        title: "Why start here",
        body:
          "If you are unsure which treatment to book, a check-up and clean is often the best place to begin. It gives you a clearer picture of your oral health and the most sensible next step.",
      },
      {
        title: "What you can expect",
        body:
          "We examine your teeth and gums, talk through any concerns, and explain what needs attention now versus what can wait. Patients often leave feeling more informed and less overwhelmed.",
      },
    ],
    faqs: [
      {
        q: "How much is a dental check-up and clean in Melbourne?",
        a: "Our check-up and clean starts from AUD $199.",
      },
      {
        q: "Do I need a referral for a dental check-up?",
        a: "No referral is needed. You can book directly with the clinic.",
      },
    ],
  },
  cbd: {
    slug: "dentist-melbourne-cbd",
    title: "Dentist Melbourne CBD | Convenient City Dental Appointments",
    metaTitle: "Dentist Melbourne CBD | Convenient City Dental Appointments",
    metaDescription:
      "Looking for a dentist in Melbourne CBD? Book convenient city dental appointments for check-ups, whitening, implants, and emergency dental care near Collins Street.",
    eyebrow: "Dentist Melbourne CBD",
    heading: "Convenient dental care in Melbourne CBD for busy city patients",
    intro:
      "If you work in the city or want a centrally located clinic, DentalCare Melbourne makes it easier to book a check-up, emergency appointment, whitening consult, or implant discussion without unnecessary hassle.",
    proof: "Convenient Collins Street location",
    icon: ToothIcon,
    accentClass: "bg-sky-100 text-sky-700",
    primaryCta: "Book CBD Appointment",
    primaryHref: "/#booking",
    secondaryCta: "Call the Clinic",
    secondaryHref: "tel:+61391234567",
    priceLabel: "City appointments",
    priceValue: "Mon to Sat",
    bullets: [
      "Easy option for Melbourne CBD workers and nearby residents",
      "General, cosmetic, implant, and emergency dental care",
      "Clear treatment planning and fees before major work",
    ],
    sections: [
      {
        title: "Why city patients choose this clinic",
        body:
          "Patients in Melbourne CBD often want convenience, speed, and clarity. A central clinic location makes it easier to fit dental care around work, commuting, and everyday life without creating extra friction.",
      },
      {
        title: "What you can book here",
        body:
          "Patients can book for check-ups and cleans, teeth whitening, implant consultations, emergency dental problems, and general concerns. If you are unsure what you need, start with an assessment and we will guide you from there.",
      },
    ],
    faqs: [
      {
        q: "Do you offer dental appointments in Melbourne CBD?",
        a: "Yes. The clinic is located on Collins Street in Melbourne CBD, making it convenient for city workers and nearby residents.",
      },
      {
        q: "Can I book both routine and urgent dental appointments here?",
        a: "Yes. Patients can book for general care, cosmetic treatments, and urgent dental problems, including same-day emergency appointments when available.",
      },
    ],
  },
};

export const homepageServiceLinks = {
  "Teeth Cleaning": "/check-up-clean-melbourne/",
  "Teeth Whitening": "/teeth-whitening-melbourne/",
  "Dental Implants": "/dental-implants-melbourne/",
  "Emergency Dental Care": "/emergency-dentist-melbourne/",
};

export const sharedPageLinks = [
  { label: "Dentist Melbourne CBD", href: "/dentist-melbourne-cbd/" },
  { label: "Emergency Dentist", href: "/emergency-dentist-melbourne/" },
  { label: "Teeth Whitening", href: "/teeth-whitening-melbourne/" },
  { label: "Dental Implants", href: "/dental-implants-melbourne/" },
  { label: "Check-Up & Clean", href: "/check-up-clean-melbourne/" },
];

export const sharedTrustPoints = [
  { icon: CheckIcon, text: "Same-day appointments when available" },
  { icon: CalendarIcon, text: "Clear fees before major treatment" },
  { icon: PhoneIcon, text: "Call or book online in under a minute" },
];

export const resourceCards = [
  {
    category: "Emergency Care",
    title: "When tooth pain becomes urgent and what to do next",
    excerpt:
      "A practical guide for patients who are not sure whether a broken tooth, swelling, or severe toothache needs same-day care.",
    href: "/emergency-dentist-melbourne/",
    readTime: "4 min read",
  },
  {
    category: "Cosmetic Dentistry",
    title: "What professional teeth whitening can realistically improve",
    excerpt:
      "A simple, patient-friendly explanation of how whitening works, who it suits, and what kind of result feels natural.",
    href: "/teeth-whitening-melbourne/",
    readTime: "3 min read",
  },
  {
    category: "Location Guide",
    title: "How to choose a dentist in Melbourne CBD without second-guessing",
    excerpt:
      "What city patients usually care about most: convenience, cost clarity, trust signals, and whether booking feels easy.",
    href: "/dentist-melbourne-cbd/",
    readTime: "5 min read",
  },
];
