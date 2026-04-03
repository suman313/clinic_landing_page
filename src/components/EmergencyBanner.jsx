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
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,_#0284c7,_#0f172a)] px-5 py-2.5 font-semibold !text-white shadow-[0_14px_30px_rgba(2,132,199,0.24)] ring-1 ring-sky-200/70 transition hover:-translate-y-0.5 hover:bg-[linear-gradient(135deg,_#0369a1,_#0f172a)] hover:!text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-200/70 visited:!text-white"
        >
          <PhoneIcon className="h-4 w-4" />
          <span className="!text-inherit">Call for Fast Relief</span>
        </a>
      </div>
    </section>
  );
}
