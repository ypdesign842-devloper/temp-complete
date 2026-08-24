import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MessageSquare, Quote, ShieldCheck, Sparkles, Star, UserCheck } from "lucide-react";
import { testimonials, reviewSummary, type Testimonial } from "@/data/testimonials";

export function Testimonials({ limit }: { limit?: number }) {
  const items = limit ? testimonials.slice(0, limit) : testimonials;
  const ITEMS_PER_SET = 3;
  const totalSets = Math.ceil(items.length / ITEMS_PER_SET);

  const [currentSet, setCurrentSet] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToSet = (newIndex: number) => {
    if (isTransitioning || newIndex === currentSet) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSet(newIndex);
      setIsTransitioning(false);
    }, 280);
  };

  const nextSet = () => {
    goToSet((currentSet + 1) % totalSets);
  };

  const prevSet = () => {
    goToSet((currentSet - 1 + totalSets) % totalSets);
  };

  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      nextSet();
    }, 5500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentSet, isPaused, totalSets]);

  const activeReviews = items.slice(
    currentSet * ITEMS_PER_SET,
    currentSet * ITEMS_PER_SET + ITEMS_PER_SET
  );

  return (
    <section className="section-y bg-[#f9f7ef] border-t border-border/80">
      <div className="container-cc">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-navy/12 bg-white px-3.5 py-1 text-[11px] font-bold tracking-wider text-teal uppercase shadow-sm">
              <Sparkles className="size-3 text-accent" />
              <span>Patient Stories &amp; Outcomes</span>
            </div>

            <h2 className="mt-3 text-3xl font-semibold leading-tight text-navy sm:text-4xl">
              {reviewSummary}
            </h2>
            <p className="mt-2 text-base text-muted-foreground">
              Real recovery experiences from patients across Ahmedabad, Mehsana, and Ankleshwar — in English, ગુજરાતી &amp; हिंदी.
            </p>
          </div>

          {/* Controls & Set Counter */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <span className="text-xs font-semibold text-muted-foreground">
              Group {currentSet + 1} of {totalSets}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={prevSet}
                aria-label="Previous patient reviews"
                className="flex size-9 items-center justify-center rounded-xl border border-navy/15 bg-white text-navy shadow-sm transition-all hover:bg-navy hover:text-white active:scale-95"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={nextSet}
                aria-label="Next patient reviews"
                className="flex size-9 items-center justify-center rounded-xl border border-navy/15 bg-white text-navy shadow-sm transition-all hover:bg-navy hover:text-white active:scale-95"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Single Large Unified Testimonial Area */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="mt-8 sm:mt-10 overflow-hidden rounded-3xl border border-navy/15 bg-white shadow-sm transition-all duration-300"
        >
          {/* 3-Column Editorial Grid with Staggered Fade Transitions */}
          <div className="grid grid-cols-1 divide-y divide-navy/10 lg:grid-cols-3 lg:divide-y-0 lg:divide-x">
            {activeReviews.map((t, i) => (
              <div
                key={`${t.name}-${currentSet}`}
                className={`flex flex-col justify-between p-6 sm:p-8 lg:p-9 transition-all duration-500 ease-out ${
                  isTransitioning
                    ? "opacity-0 translate-y-3 scale-[0.98]"
                    : "opacity-100 translate-y-0 scale-100"
                }`}
                style={{
                  transitionDelay: `${i * 90}ms`,
                }}
              >
                <div className="space-y-4">
                  {/* Top Row: Stars + Location Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex gap-1 text-amber-500">
                      {Array.from({ length: t.rating }).map((_, starIdx) => (
                        <Star key={starIdx} className="size-4 fill-current" />
                      ))}
                    </div>
                    {t.location && (
                      <span className="rounded-md bg-[#f9f7ef] border border-navy/10 px-2 py-0.5 text-[10px] font-bold text-navy/80 uppercase tracking-wider">
                        {t.location}
                      </span>
                    )}
                  </div>

                  {/* Treatment Tag */}
                  {t.treatment && (
                    <div className="text-xs font-bold tracking-wide text-teal uppercase">
                      {t.treatment}
                    </div>
                  )}

                  {/* Review Quote Body */}
                  <blockquote className="text-sm sm:text-[0.95rem] leading-relaxed text-navy/90 italic">
                    “{t.quote}”
                  </blockquote>
                </div>

                {/* Patient Author Details */}
                <div className="mt-8 flex items-center justify-between border-t border-navy/10 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent/15 font-bold text-xs text-accent">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-navy">{t.name}</div>
                      <div className="text-[11px] text-muted-foreground flex items-center gap-1">
                        <UserCheck className="size-3 text-accent" />
                        <span>Verified Patient</span>
                      </div>
                    </div>
                  </div>

                  <Quote className="size-5 text-teal/20" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Interactive Pagination Dots Bar */}
          <div className="flex items-center justify-between border-t border-navy/10 bg-[#f9f7ef]/40 px-6 py-3.5 text-xs text-muted-foreground sm:px-8">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-navy">18 Verified Stories</span>
              <span className="text-navy/30">·</span>
              <span className="hidden sm:inline">Hover to pause rotation</span>
            </div>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalSets }).map((_, setIdx) => (
                <button
                  key={setIdx}
                  type="button"
                  aria-label={`Go to review group ${setIdx + 1}`}
                  onClick={() => goToSet(setIdx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    setIdx === currentSet
                      ? "w-7 bg-accent shadow-sm"
                      : "w-2 bg-navy/20 hover:bg-navy/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
