import { PhoneIcon } from "./icons";

export default function EmergencyBanner() {
  return (
    <section className="border-b border-sky-100 bg-[linear-gradient(90deg,_#effcff,_#f2fffb)]">
      <div className="container-shell flex flex-col gap-3 py-3 text-sm font-medium text-slate-700 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-center sm:text-left">
          Tooth pain, swelling, or a broken tooth? Get emergency dental care today
        </p>
        <a
          href="tel:+61391234567"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-white transition hover:bg-sky-700"
        >
          <PhoneIcon className="h-4 w-4" />
          Call for Fast Relief
        </a>
      </div>
    </section>
  );
}
