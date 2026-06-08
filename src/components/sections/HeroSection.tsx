import { Button } from "@/components/ui/Button";
import { HERO_VIDEO_SRC, resolveVideoSrc } from "@/lib/constants/hero";

function HeroAsterisk({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M20 2L22.5 14.5L35 12L25.5 20L35 28L22.5 25.5L20 38L17.5 25.5L5 28L14.5 20L5 12L17.5 14.5L20 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function HeroFrame() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[280px] justify-self-end sm:max-w-[320px] lg:max-w-[400px] xl:max-w-[440px]">
      <div
        className="pointer-events-none absolute inset-0 translate-x-2 translate-y-2 bg-black/[0.07] md:translate-x-3 md:translate-y-3"
        aria-hidden="true"
      />

      <div className="relative h-full w-full">
        <div
          className="absolute left-0 top-0 z-10 h-[86%] w-[10px] bg-orange"
          aria-hidden="true"
        />
        <div
          className="absolute left-0 top-0 z-10 h-[10px] w-[86%] bg-orange"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 right-0 z-10 h-[86%] w-[10px] bg-blue"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 right-0 z-10 h-[10px] w-[86%] bg-blue"
          aria-hidden="true"
        />

        <div className="absolute inset-[10px] overflow-hidden bg-cream">
          <video
            className="h-full w-full object-cover"
            src={resolveVideoSrc(HERO_VIDEO_SRC)}
            autoPlay
            muted
            loop
            playsInline
            aria-label="Studio showcase video"
          />
        </div>

        <div className="absolute -right-2 top-5 z-20 rotate-[6deg] md:top-7 md:-right-3">
          <div
            className="absolute -right-1 -top-1 h-[calc(100%+8px)] w-[calc(100%+14px)] bg-orange"
            aria-hidden="true"
          />
          <div className="relative border-2 border-black bg-black px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-white md:px-4 md:py-2 md:text-[10px]">
            Studio Identity
          </div>
        </div>

        <HeroAsterisk className="absolute bottom-7 right-7 h-7 w-7 text-neutral-300/90 md:bottom-10 md:right-10 md:h-8 md:w-8" />
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative flex w-full flex-1 flex-col justify-center overflow-hidden px-6 md:px-10">
      <div
        className="pointer-events-none absolute right-[6%] top-[12%] hidden h-56 w-56 rounded-full bg-orange/25 blur-3xl lg:block"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute bottom-[18%] left-1/2 hidden h-72 w-72 -translate-x-1/2 rounded-full bg-orange/[0.06] blur-3xl lg:block"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute bottom-10 right-16 hidden h-2.5 w-2.5 rounded-full bg-orange lg:block"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-16 right-28 hidden h-5 w-5 rounded-full bg-neutral-300/70 lg:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-5 xl:gap-8">
        <div className="relative z-10 min-w-0">
          <div className="mb-3 flex items-center gap-3 md:mb-4">
            <span className="h-[3px] w-7 shrink-0 bg-blue md:w-9" aria-hidden="true" />
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-black md:text-[11px] md:tracking-[0.22em]">
              Branding / Web / Creative Direction
            </p>
            <span className="h-2 w-2 shrink-0 rounded-full bg-orange" aria-hidden="true" />
          </div>

          <h1 className="relative font-black uppercase leading-[0.88] tracking-[-0.02em]">
            <span className="relative z-0 block text-[clamp(2.75rem,9vw,6rem)] text-black">
              Design
            </span>
            <span className="hero-with relative z-20 mt-0.5 block w-fit origin-left -rotate-[4deg] translate-x-1 text-[clamp(2.1rem,7vw,4.75rem)] md:mt-1 md:translate-x-2">
              With
            </span>
            <span className="hero-attitude relative z-10 mt-0.5 block text-[clamp(2.75rem,9vw,6rem)] md:mt-1">
              Attitude
            </span>
          </h1>

          <div className="mt-5 flex items-start gap-4 md:mt-6 md:gap-5">
            <div className="relative shrink-0 pt-1">
              <div
                className="absolute -bottom-1.5 left-1/2 h-2.5 w-[calc(100%+8px)] -translate-x-1/2 bg-blue md:-bottom-2 md:h-3"
                aria-hidden="true"
              />
              <div className="-rotate-[5deg] border-2 border-black bg-white px-2 py-2 text-center text-[8px] font-black uppercase leading-[1.15] tracking-wide md:px-2.5 md:py-2.5 md:text-[9px]">
                Made
                <br />
                To
                <br />
                Kre8
              </div>
            </div>

            <p className="max-w-md pt-1 text-sm font-medium leading-relaxed text-black/85 md:max-w-lg md:text-[15px] md:leading-7">
              THE KRE8 STUDIO is a visual identity and digital design studio
              building loud, memorable, scroll-stopping brand systems for
              founders, creators and modern businesses.
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-3 md:mt-6">
            <Button
              variant="orange"
              size="lg"
              href="#contact"
              className="uppercase tracking-wide"
            >
              Build My Brand
            </Button>
            <Button
              variant="blue"
              size="lg"
              href="#work"
              className="uppercase tracking-wide"
            >
              See the Vibe
            </Button>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <HeroFrame />
        </div>
      </div>
    </section>
  );
}
