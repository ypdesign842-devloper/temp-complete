import { useState } from "react";
import { toast } from "sonner";
import { site } from "@/data/site";
import { Calendar, CheckCircle2, MessageCircle, Phone, Send, ShieldCheck, Sparkles } from "lucide-react";

/** Service list preserved from the original Complete Care appointment form. */
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
];

export function AppointmentForm({ centre }: { centre?: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || phone.replace(/\D/g, "").length < 10) {
      toast.error("Please enter your name and a valid 10-digit mobile number.");
      return;
    }
    const body = [
      `*Complete Care Appointment Request*`,
      `*Name:* ${name}`,
      centre ? `*Centre:* ${centre}` : null,
      `*Mobile No.:* ${phone}`,
      email ? `*Email:* ${email}` : null,
      date ? `*Preferred Date:* ${date}` : null,
      service ? `*Service:* ${service}` : null,
      message ? `*Condition / Message:* ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`${site.whatsapp}?text=${encodeURIComponent(body)}`, "_blank");
    toast.success("Opening WhatsApp to connect directly with our clinical coordinator.");
  }

  const inputClass =
    "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm font-medium text-navy placeholder:text-muted-foreground outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20";

  return (
    <form
      onSubmit={submit}
      className="card-premium overflow-hidden border-2 border-border/90 p-6 shadow-xl shadow-navy/8 sm:p-8"
    >
      <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-accent uppercase">
        <Sparkles className="size-3.5" />
        <span>Direct Clinical Booking</span>
      </div>

      <h2 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">Book an Appointment</h2>

      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Connect directly with our clinical coordinator to reserve a doctor-led assessment
        {centre ? ` at our ${centre} centre` : " at your nearest Gujarat centre"}.
      </p>

      <div className="mt-6 space-y-4">
        <Field label="Full Name *">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            placeholder="e.g. Rajesh Patel"
            required
          />
        </Field>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Mobile Number *">
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              inputMode="tel"
              className={inputClass}
              placeholder="10-digit number"
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

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Preferred Date">
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              className={inputClass}
            />
          </Field>

          <Field label="Select Service">
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className={inputClass}
            >
              <option value="">Choose Clinical Service</option>
              {serviceOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <Field label="Describe Your Pain / Condition">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className={inputClass}
            placeholder="e.g. Lower back pain radiating into leg for 3 weeks..."
          />
        </Field>
      </div>

      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-4 text-sm font-bold text-accent-foreground shadow-md shadow-accent/25 transition-all hover:bg-emerald-600 hover:shadow-lg"
      >
        <MessageCircle className="size-4" />
        <span>Confirm on WhatsApp</span>
      </button>

      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <ShieldCheck className="size-4 text-teal" />
        <span>Zero spam. Direct connection to clinical team.</span>
      </div>

      <div className="mt-4 border-t border-border pt-4 text-center">
        <p className="text-xs text-muted-foreground">
          Prefer to talk? Call our central line:{" "}
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
