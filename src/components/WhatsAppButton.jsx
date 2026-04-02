export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/61391234567"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-emerald-900/20 transition hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
        <path d="M20.5 3.5A11.8 11.8 0 0 0 2.3 18.2L1 23l5-1.3A11.8 11.8 0 1 0 20.5 3.5ZM12 21a9.7 9.7 0 0 1-4.9-1.3l-.3-.2-3 .8.8-2.9-.2-.3A9.8 9.8 0 1 1 12 21Zm5.4-7.3c-.3-.2-1.6-.8-1.9-.9-.2-.1-.4-.2-.6.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1a8 8 0 0 1-2.3-1.4 8.7 8.7 0 0 1-1.6-2c-.2-.3 0-.4.1-.6l.4-.4.3-.5c.1-.2.1-.3 0-.5-.1-.2-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.1s1 2.3 1.1 2.4c.1.2 2 3.1 4.9 4.4.7.3 1.2.5 1.7.7.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.4.2-.6.2-1.2.1-1.3-.1-.1-.3-.2-.6-.3Z" />
      </svg>
    </a>
  );
}
