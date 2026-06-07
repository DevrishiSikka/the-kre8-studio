import { processSteps } from "@/lib/constants/process";
import type { ProcessStep } from "@/types";
import { cn } from "@/lib/utils";

function ProcessIcon({ type, className }: { type: ProcessStep["icon"]; className?: string }) {
  const props = { className, fill: "currentColor", "aria-hidden": true as const };

  switch (type) {
    case "search":
      return (
        <svg viewBox="0 0 32 32" {...props}>
          <circle cx="13" cy="13" r="8" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M19 19L27 27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case "bolt":
      return (
        <svg viewBox="0 0 32 32" {...props}>
          <path d="M18 2L8 17h8l-2 13 14-18h-8l2-10z" />
        </svg>
      );
    case "pen":
      return (
        <svg viewBox="0 0 32 32" {...props}>
          <path d="M22 4l6 6-16 16H6v-6L22 4z" />
          <path d="M18 8l6 6" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "rocket":
      return (
        <svg viewBox="0 0 32 32" {...props}>
          <path d="M16 4c-4 6-6 12-6 18 0 2 1 4 2 5l4-4 4 4c1-1 2-3 2-5 0-6-2-12-6-18z" />
          <circle cx="16" cy="14" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 24l-4 4M22 24l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
  }
}

function CardScribble({ light }: { light?: boolean }) {
  return (
    <svg
      viewBox="0 0 120 16"
      className={cn("h-3 w-full", light ? "text-white/70" : "text-black/80")}
      aria-hidden="true"
    >
      <path
        d="M2 10c18-6 36 4 54-2s30-2 46 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ProcessCard({ step }: { step: ProcessStep }) {
  const bgMap = {
    white: "bg-white text-black",
    blue: "bg-blue text-white",
    orange: "bg-orange text-black",
    black: "bg-black text-white",
  };

  const numberMap = {
    gray: "process-card-number-gray",
    blue: "process-card-number-blue",
    orange: "process-card-number-orange",
    dark: "process-card-number-dark",
  };

  return (
    <article
      className={cn(
        "relative flex min-h-[280px] w-full flex-col border-2 border-black p-5 brutal-shadow-lg sm:min-h-[300px] sm:p-6",
        bgMap[step.bg],
        step.rotation,
        step.offsetY,
      )}
    >
      <span
        className={cn(
          "pointer-events-none absolute left-3 top-2 select-none text-[clamp(3.5rem,7vw,4.5rem)] font-black leading-none",
          numberMap[step.numberTone],
        )}
        aria-hidden="true"
      >
        {step.number}
      </span>

      <ProcessIcon
        type={step.icon}
        className={cn(
          "absolute right-4 top-4 h-7 w-7 sm:h-8 sm:w-8",
          step.bg === "black" ? "text-white" : "text-black",
        )}
      />

      <div className="relative z-10 mt-14 flex flex-1 flex-col sm:mt-16">
        <h3 className="text-xl font-black uppercase tracking-tight sm:text-2xl">
          {step.title}
        </h3>
        <p
          className={cn(
            "mt-3 text-[13px] font-bold leading-snug sm:text-sm sm:leading-6",
            step.text === "white" ? "text-white/90" : "text-black/85",
          )}
        >
          {step.description}
        </p>
        <div className="mt-auto pt-5">
          <CardScribble light={step.bg === "black"} />
        </div>
      </div>
    </article>
  );
}

function OverthinkSticker() {
  return (
    <div className="relative w-fit -rotate-[8deg]">
      <div className="border-2 border-black bg-black px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.1em] text-white sm:px-4 sm:py-2 sm:text-[10px]">
        We Overthink.
      </div>
    </div>
  );
}

function ExperimentSticker() {
  return (
    <div className="relative w-fit rotate-[5deg] brutal-shadow-lg">
      <div className="border-2 border-black bg-process-yellow px-4 py-3 text-center text-[9px] font-black uppercase leading-[1.35] tracking-[0.06em] text-black sm:px-5 sm:py-3.5 sm:text-[10px]">
        Experiment.
        <br />
        Break. Improve.
        <br />
        Repeat.
      </div>
    </div>
  );
}

function ProcessAsterisk() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-process-green brutal-shadow sm:h-11 sm:w-11">
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-black" aria-hidden="true">
        <path
          d="M12 2L13.5 9L21 7.5L15 12L21 16.5L13.5 15L12 22L10.5 15L3 16.5L9 12L3 7.5L10.5 9L12 2Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

function MakeItRealSticker() {
  return (
    <div className="relative w-fit rotate-[4deg] brutal-shadow-lg">
      <div className="border-2 border-black bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.08em] text-black sm:px-5 sm:py-2.5 sm:text-[11px]">
        Make It Real.
      </div>
    </div>
  );
}

function BuiltToLastSticker() {
  return (
    <div className="relative w-fit rotate-[5deg] brutal-shadow-lg">
      <div className="border-2 border-black bg-process-pink px-4 py-2 text-[9px] font-black uppercase leading-snug tracking-[0.06em] text-black sm:px-5 sm:py-2.5 sm:text-[10px]">
        Built To Last,
        <br />
        Not Just To Look Good.
      </div>
    </div>
  );
}

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-t-2 border-black bg-cream px-6 py-16 md:px-10 md:py-20 lg:px-12 lg:py-24"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(255,255,255,0.5) 0%, transparent 65%), radial-gradient(ellipse 40% 30% at 20% 80%, rgba(0,0,0,0.03) 0%, transparent 70%), radial-gradient(ellipse 35% 25% at 85% 70%, rgba(0,0,0,0.025) 0%, transparent 70%)",
      }}
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4 md:mb-8">
          <OverthinkSticker />
          <ExperimentSticker />
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[1fr_0.85fr] lg:gap-8 xl:gap-10">
          <div className="relative">
            <h2 className="relative z-10 rotate-[2deg] font-black uppercase leading-[0.9] tracking-[-0.02em]">
              <span className="block text-[clamp(2.5rem,8vw,5.5rem)] text-black">
                Messy Ideas.
              </span>
              <span className="relative z-10 -mt-1 block text-[clamp(2.5rem,8vw,5.5rem)] text-orange">
                Clean Systems.
              </span>
            </h2>
          </div>

          <div className="relative lg:pt-6 xl:pt-10">
            <p className="max-w-md text-sm font-bold leading-relaxed text-black md:text-base md:leading-7 lg:max-w-lg lg:text-[17px] lg:leading-8">
              We keep the energy{" "}
              <span>experimental</span>, but
              the final output becomes{" "}
              <span>usable</span>,{" "}
              <span>scalable</span> and{" "}
              <span>professional</span>.
            </p>
          </div>
        </div>

        <div className="relative mt-10 md:mt-14 lg:mt-16">
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-5 xl:gap-6">
            {processSteps.map((step) => (
              <ProcessCard key={step.title} step={step} />
            ))}
          </div>

          <div className="pointer-events-none absolute -bottom-2 left-0 hidden sm:block">
            <ProcessAsterisk />
          </div>

          <div className="pointer-events-none absolute bottom-0 left-[22%] hidden lg:block">
            <MakeItRealSticker />
          </div>

          <div className="pointer-events-none absolute -bottom-4 right-[8%] hidden md:block">
            <BuiltToLastSticker />
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-1 bg-black/20"
        style={{
          clipPath:
            "polygon(0 100%, 2% 40%, 5% 70%, 8% 30%, 12% 80%, 16% 20%, 20% 60%, 24% 35%, 28% 75%, 32% 25%, 36% 65%, 40% 40%, 44% 80%, 48% 30%, 52% 70%, 56% 45%, 60% 85%, 64% 35%, 68% 75%, 72% 50%, 76% 90%, 80% 40%, 84% 80%, 88% 55%, 92% 85%, 96% 45%, 100% 100%)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
