import { useEffect } from "react";
import ContactSection from "./components/ContactSection";
import BookingSection from "./components/BookingSection";
import BeforeAfterSection from "./components/BeforeAfterSection";
import DemoChatbot from "./components/DemoChatbot";
import EmergencyBanner from "./components/EmergencyBanner";
import FaqSection, { faqSchema } from "./components/FaqSection";
import HeroSection from "./components/HeroSection";
import PricingSection from "./components/PricingSection";
import ResourcesSection from "./components/ResourcesSection";
import ServicesSection from "./components/ServicesSection";
import StickyMobileCTA from "./components/StickyMobileCTA";
import TestimonialsSection from "./components/TestimonialsSection";
import TrustSection from "./components/TrustSection";
import WhatsAppButton from "./components/WhatsAppButton";

const dentistSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "DentalCare Melbourne",
  description:
    "Melbourne dental clinic offering check-ups, whitening, implants, emergency dental care, on-the-spot health fund claiming, and Medicare CDBS for eligible children.",
  telephone: "+61 3 9123 4567",
  email: "hello@clinicaremedical.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Suite 5, Level 2, 166 Collins Street",
    addressLocality: "Melbourne",
    addressRegion: "VIC",
    postalCode: "3000",
    addressCountry: "AU",
  },
  openingHours: [
    "Mo-Fr 08:00-18:00",
    "Sa 08:30-14:00",
  ],
  areaServed: {
    "@type": "City",
    name: "Melbourne",
  },
  image: [
    "/images/principal-dentist.jpg",
    "/images/dr-michael-tran.jpg",
    "/images/dr-sarah-lee.jpg",
  ],
  medicalSpecialty: [
    "Dentistry",
    "Cosmetic Dentistry",
    "Implant Dentistry",
  ],
};

export default function App() {
  useEffect(() => {
    document.title = "Melbourne Dentist | Same-Day Dental Appointments & Health Fund Claims";
    const description = document.querySelector('meta[name="description"]');

    if (description) {
      description.setAttribute(
        "content",
        "Melbourne dental clinic offering check-ups, whitening, implants, emergency appointments, on-the-spot health fund claiming, and Medicare CDBS for eligible children.",
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-slate-900">
      <script type="application/ld+json">{JSON.stringify(dentistSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <a
        href="#booking"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-teal-700 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to booking
      </a>
      <EmergencyBanner />
      <HeroSection />
      <main>
        <TrustSection />
        <ServicesSection />
        <BeforeAfterSection />
        <BookingSection />
        <PricingSection />
        <ResourcesSection />
        <FaqSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <DemoChatbot />
      <WhatsAppButton />
      <StickyMobileCTA />
    </div>
  );
}
