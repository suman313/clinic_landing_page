import { useMemo, useState } from "react";
import {
  CalendarIcon,
  CheckIcon,
  LocationIcon,
  PhoneIcon,
  SparkleToothIcon,
} from "./icons";

const quickReplies = [
  {
    id: "emergency",
    label: "Emergency help",
    question: "I have a dental emergency",
    answer:
      "If you have strong tooth pain, swelling, or a broken tooth, call the clinic as early as possible for same-day availability. You can also submit the booking form and mention that it is urgent.",
    primaryAction: {
      label: "Call Now",
      href: "tel:+61391234567",
      icon: PhoneIcon,
    },
    secondaryAction: {
      label: "Emergency Page",
      href: "/emergency-dentist-melbourne/",
    },
  },
  {
    id: "pricing",
    label: "Pricing",
    question: "How much does treatment cost?",
    answer:
      "For this demo clinic, a check-up and clean starts from AUD $199, whitening from AUD $449, and implants from AUD $4,990. The key selling point for clients is that fees are explained before major treatment begins.",
    primaryAction: {
      label: "View Pricing",
      href: "/#pricing",
      icon: CheckIcon,
    },
    secondaryAction: { label: "Book Online", href: "/#booking" },
  },
  {
    id: "whitening",
    label: "Teeth whitening",
    question: "Tell me about teeth whitening",
    answer:
      "Professional whitening is positioned as a confidence-boosting treatment for patients who want a noticeably brighter smile with safer, more predictable results than store-bought kits.",
    primaryAction: {
      label: "Whitening Page",
      href: "/teeth-whitening-melbourne/",
      icon: SparkleToothIcon,
    },
    secondaryAction: { label: "Book Consultation", href: "/#booking" },
  },
  {
    id: "location",
    label: "Location",
    question: "Where is the clinic?",
    answer:
      "The clinic is shown as being on Collins Street in Melbourne CBD, close to tram stops and walkable from major CBD stations. This helps sell convenience to busy city patients.",
    primaryAction: { label: "View Map", href: "/#contact", icon: LocationIcon },
    secondaryAction: { label: "CBD Page", href: "/dentist-melbourne-cbd/" },
  },
];

function ChatBubbleIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <path d="M4 6.5A3.5 3.5 0 0 1 7.5 3h9A3.5 3.5 0 0 1 20 6.5v5A3.5 3.5 0 0 1 16.5 15H11l-4.5 4v-4H7.5A3.5 3.5 0 0 1 4 11.5Z" />
      <path d="M8.5 8.5h7M8.5 11.5h4.5" />
    </svg>
  );
}

export default function DemoChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      role: "assistant",
      text: "Hi, I am the demo website assistant. I can answer common clinic questions and guide visitors toward calling or booking.",
    },
  ]);

  const lastResponse = useMemo(
    () =>
      [...messages]
        .reverse()
        .find((message) => message.role === "assistant" && message.actions),
    [messages],
  );

  const handleQuickReply = (reply) => {
    setMessages((current) => [
      ...current,
      { id: `${reply.id}-question`, role: "user", text: reply.question },
      {
        id: `${reply.id}-answer`,
        role: "assistant",
        text: reply.answer,
        actions: [reply.primaryAction, reply.secondaryAction].filter(Boolean),
      },
    ]);
    setIsOpen(true);
  };

  return (
    <>
      {isOpen ? (
        <div className="fixed bottom-24 left-4 z-40 w-[min(24rem,calc(100vw-2rem))] rounded-[1.75rem] border border-sky-100 bg-white/95 shadow-[0_24px_60px_rgba(15,23,42,0.18)] backdrop-blur sm:bottom-6 sm:left-6">
          <div className="flex items-center justify-between rounded-t-[1.75rem] bg-[linear-gradient(135deg,_#0f172a,_#0284c7)] px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/15">
                <ChatBubbleIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold">Clinic Assistant Demo</p>
                <p className="text-xs text-sky-100">
                  Lead-capture chatbot showcase
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Close
            </button>
          </div>

          <div className="max-h-[24rem] space-y-4 overflow-y-auto px-4 py-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-[90%] rounded-[1.25rem] px-4 py-3 text-sm leading-7 ${
                  message.role === "assistant"
                    ? "bg-slate-100 text-slate-700"
                    : "ml-auto bg-sky-600 text-white"
                }`}
              >
                <p>{message.text}</p>
                {message.role === "assistant" && message.actions ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {message.actions.map((action) => {
                      const ActionIcon = action.icon;

                      return (
                        <a
                          key={action.label}
                          href={action.href}
                          className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold text-sky-700 shadow-sm transition hover:bg-sky-50 hover:text-sky-900"
                        >
                          {ActionIcon ? (
                            <ActionIcon className="h-3.5 w-3.5" />
                          ) : null}
                          {action.label}
                        </a>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 px-4 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Quick questions
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {quickReplies.map((reply) => (
                <button
                  key={reply.id}
                  type="button"
                  onClick={() => handleQuickReply(reply)}
                  className="rounded-full border border-sky-100 bg-sky-50 px-3 py-2 text-xs font-semibold text-sky-700 transition hover:border-sky-200 hover:bg-sky-100 hover:text-sky-900"
                >
                  {reply.label}
                </button>
              ))}
            </div>
            {lastResponse ? (
              <p className="mt-3 text-xs leading-6 text-slate-500">
                This is a demo chatbot for pitching. In a real build, it could
                connect to AI, FAQ data, and lead capture workflows.
              </p>
            ) : null}
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="fixed bottom-24 left-4 z-40 flex items-center gap-3 rounded-full bg-[linear-gradient(135deg,_#0f172a,_#0284c7)] px-5 py-3 text-sm font-semibold !text-white shadow-[0_20px_50px_rgba(15,23,42,0.22)] ring-1 ring-sky-200/40 transition hover:-translate-y-0.5 hover:shadow-[0_24px_55px_rgba(15,23,42,0.26)] sm:bottom-6 sm:left-6"
      >
        <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/12">
          {!isOpen ? (
            <>
              <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full bg-emerald-400 opacity-90 animate-ping" />
              <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500" />
            </>
          ) : null}
          <ChatBubbleIcon className="h-5 w-5" />
        </span>
        <span className="text-left">
          <span className="block text-sm font-semibold">Ask the clinic</span>
          <span className="block text-xs text-sky-100">chatbot</span>
        </span>
      </button>
    </>
  );
}
