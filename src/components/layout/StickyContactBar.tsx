import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/data/site";

export function StickyContactBar() {
  return (
    <>
      {/* Mobile Sticky Bottom Floating Action Bar */}
      <div className="fixed inset-x-3 bottom-3 z-40 flex items-center justify-between gap-2 rounded-2xl border border-border/80 bg-white/95 p-1.5 shadow-xl shadow-navy/15 backdrop-blur-md sm:hidden dark:bg-navy/95">
        <a
          href={site.phoneHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border/60 bg-sand/80 py-3 text-xs font-bold text-navy transition-colors hover:bg-sand"
        >
          <Phone className="size-4 text-teal" />
          <span>Call Clinic</span>
        </a>
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent py-3 text-xs font-bold text-accent-foreground shadow-sm transition-all hover:bg-emerald-600"
        >
          <MessageCircle className="size-4" />
          <span>WhatsApp</span>
        </a>
      </div>

      {/* Desktop Floating WhatsApp Button */}
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Complete Care"
        className="group fixed right-6 bottom-6 z-40 hidden items-center gap-2.5 rounded-full bg-emerald-500 px-4 py-3 text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:scale-105 hover:bg-emerald-600 hover:shadow-xl sm:flex"
      >
        <MessageCircle className="size-5 fill-current" />
        <span className="text-xs font-bold tracking-wide">Chat with Clinician</span>
      </a>
    </>
  );
}
