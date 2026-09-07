import { useState } from "react";
import { toast } from "sonner";
import { site } from "@/data/site";
import { submitWeb3Form } from "@/lib/web3forms";
import {
  Calendar,
  ChevronDown,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

/** Service list preserved from the original Complete Care appointment form + Other. */
export const serviceOptions = [
  "Chiropractic treatment",
  "Physiotherapy",
  "Cupping Therapy",
  "Dry Needling",
  "Neuro Rehabilitation",
  "Sports Rehabilitation",
  "Kinesio taping",
  "Manual therapy",
  "Class IV Laser Therapy",
  "Spine Decompression Therapy",
  "PEMF Therapy",
  "Doorstep Home Physiotherapy",
  "Other",
];

export function AppointmentForm({ centre }: { centre?: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("");
  const [otherService, setOtherService] = useState("");
  const [message, setMessage] = useState("");

  // Restrict date selection to today or upcoming future dates (disable past dates)
  const today = new Date().toISOString().split("T")[0];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const cleanPhone = phone.replace(/\D/g, "");
    if (!name.trim() || cleanPhone.length < 10) {
      toast.error("Please enter your name and a valid 10-digit mobile number.");
      return;
    }

    if (service === "Other" && !otherService.trim()) {
      toast.error("Please specify the service you require.");
      return;
    }

    const finalService =
      service === "Other" && otherService.trim()
        ? `Other: ${otherService.trim()}`
        : service || "General Consultation";

    // 1. In background: Deliver to Web3Forms email if access key is set
    submitWeb3Form(
      {
        "Patient Name": name.trim(),
        "Mobile Number": phone.trim(),
        "Email Address": email.trim() || "Not provided",
        "Clinic Centre": centre || "All Gujarat Centres / Nearest Location",
        "Preferred Date": date || "Earliest Available Slot",
        "Requested Service": finalService,
        "Pain / Condition Description": message.trim() || "Consultation Request",
      },
      {
        subject: `New Appointment Request: ${name.trim()} (${centre || "Gujarat"})`,
        fromName: "Complete Care Clinic Booking",
        replyTo: email.trim() || undefined,
      }
    ).catch(() => {});

    // 2. Direct WhatsApp submission
    const body = [
      `*Complete Care Appointment Request*`,
      `*Name:* ${name.trim()}`,
      centre ? `*Centre:* ${centre}` : null,
      `*Mobile No.:* ${phone.trim()}`,
      email.trim() ? `*Email:* ${email.trim()}` : null,
      date ? `*Preferred Date:* ${date}` : null,
      `*Service:* ${finalService}`,
      message.trim() ? `*Condition / Message:* ${message.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`${site.whatsapp}?text=${encodeURIComponent(body)}`, "_blank");
    toast.success("Opening WhatsApp to connect directly with our clinical coordinator.");
  }

  // Mobile-friendly input styling (16px base font to prevent iOS zoom, 14px on desktop)
  const inputClass =
    "w-full rounded-xl border border-input bg-white px-3.5 sm:px-4 py-3 text-[15px] sm:text-sm font-medium text-navy placeholder:text-muted-foreground outline-none transition-all hover:border-navy/30 focus:border-accent focus:ring-2 focus:ring-accent/20 min-h-[46px]";

  return (
    <form
      onSubmit={handleSubmit}
      className="card-premium overflow-hidden border-2 border-border/90 bg-white p-5 sm:p-8 shadow-xl shadow-navy/8"
    >
      <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-accent uppercase">
        <Sparkles className="size-3.5 shrink-0" />
        <span>Direct Clinical Booking</span>
      </div>

      <h2 className="mt-2 text-2xl font-bold text-navy sm:text-3xl tracking-tight">
        Book an Appointment
      </h2>

      <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
        Connect directly with our clinical coordinator to reserve a doctor-led assessment
        {centre ? ` at our ${centre} centre` : " at your nearest Gujarat centre"}.
      </p>

      <div className="mt-6 space-y-4">
        {/* Full Name */}
        <Field label="Full Name *">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            placeholder="e.g. Rajesh Patel"
            required
          />
        </Field>

        {/* Mobile & Email */}
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Mobile Number *">
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
              inputMode="tel"
              pattern="[0-9]{10}"
              maxLength={10}
              className={inputClass}
              placeholder="10-digit mobile number"
              required
            />
          </Field>

          <Field label="Email Address">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className={inputClass}
              placeholder="you@example.com"
            />
          </Field>
        </div>

        {/* Preferred Date & Select Service */}
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Preferred Date">
            <input
              value={date}
              min={today}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              className={inputClass}
            />
          </Field>

          <Field label="Select Service">
            <div className="relative">
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className={`${inputClass} appearance-none pr-10 cursor-pointer`}
              >
                <option value="">Choose Clinical Service</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            </div>
          </Field>
        </div>

        {/* Dynamic 'Specify Service' field when 'Other' is chosen */}
        {service === "Other" && (
          <div className="animate-in fade-in slide-in-from-top-1 duration-200">
            <Field label="Specify Service / Requirement *">
              <input
                type="text"
                value={otherService}
                onChange={(e) => setOtherService(e.target.value)}
                placeholder="e.g. Post-operative Rehab, Posture Correction, etc."
                required
                className={inputClass}
                autoFocus
              />
            </Field>
          </div>
        )}

        {/* Pain / Condition Description */}
        <Field label="Describe Your Pain / Condition">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className={`${inputClass} min-h-[85px] py-2.5 resize-none`}
            placeholder="e.g. Lower back pain radiating into leg for 3 weeks..."
          />
        </Field>
      </div>

      {/* Confirm on WhatsApp Button */}
      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3.5 sm:py-4 text-sm sm:text-base font-bold text-accent-foreground shadow-md shadow-accent/25 transition-all hover:bg-emerald-600 hover:shadow-lg active:scale-[0.99] cursor-pointer"
      >
        <MessageCircle className="size-5 shrink-0" />
        <span>Confirm on WhatsApp</span>
      </button>

      <div className="mt-3.5 flex items-center justify-center gap-1.5 text-[11px] sm:text-xs text-muted-foreground text-center">
        <ShieldCheck className="size-4 text-teal shrink-0" />
        <span>Zero spam. Direct connection to Complete Care clinic team.</span>
      </div>

      <div className="mt-4 border-t border-border/80 pt-3.5 text-center">
        <p className="text-xs text-muted-foreground">
          Prefer to talk directly? Call our central line:{" "}
          <a href={site.phoneHref} className="font-bold text-navy hover:text-accent">
            {site.phone}
          </a>
        </p>
      </div>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold tracking-wide text-navy uppercase">
        {label}
      </span>
      {children}
    </label>
  );
}
