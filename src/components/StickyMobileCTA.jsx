export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3 shadow-[0_-10px_30px_rgba(15,23,42,0.08)] backdrop-blur md:hidden">
      <a
        href="#booking"
        className="flex w-full items-center justify-center rounded-full bg-sky-600 px-5 py-4 text-base font-semibold text-white"
      >
        Book Dental Appointment
      </a>
    </div>
  );
}
