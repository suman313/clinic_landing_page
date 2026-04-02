import { useEffect } from "react";
import ContactSection from "./components/ContactSection";
import BookingSection from "./components/BookingSection";
import BeforeAfterSection from "./components/BeforeAfterSection";
import EmergencyBanner from "./components/EmergencyBanner";
import HeroSection from "./components/HeroSection";
import PricingSection from "./components/PricingSection";
import ServicesSection from "./components/ServicesSection";
import StickyMobileCTA from "./components/StickyMobileCTA";
import TestimonialsSection from "./components/TestimonialsSection";
import TrustSection from "./components/TrustSection";
import WhatsAppButton from "./components/WhatsAppButton";

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
        <TestimonialsSection />
        <ContactSection />
      </main>
      <WhatsAppButton />
      <StickyMobileCTA />
    </div>
  );
}
