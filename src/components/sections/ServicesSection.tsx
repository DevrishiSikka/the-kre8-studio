import { services } from "@/lib/constants/services";
import type { Service } from "@/types";
import { cn } from "@/lib/utils";

function ServiceSticker() {
  return (
    <div className="relative w-fit shrink-0 -rotate-[5deg]">
      <div
        className="absolute left-2 top-2 h-full w-full bg-blue"
        aria-hidden="true"
      />
      <div className="relative border-2 border-black bg-black px-4 py-2.5 text-center text-[11px] font-black uppercase leading-tight tracking-[0.08em] text-white md:px-5 md:py-3 md:text-xs md:tracking-[0.12em]">
        What We Kre8
      </div>
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="relative flex min-h-[240px] flex-col overflow-hidden border-2 border-black bg-cream p-7 brutal-shadow-lg md:min-h-[260px] md:p-8">
      <div
        className={cn(
          "absolute right-0 top-0 h-14 w-14 rounded-bl-full md:h-16 md:w-16",
          service.accent === "blue" ? "bg-blue" : "bg-orange",
        )}
        aria-hidden="true"
      />

      <h3 className="relative z-10 mb-4 max-w-[85%] text-base font-black uppercase leading-snug tracking-tight md:text-[17px]">
        {service.title}
      </h3>

      <p className="relative z-10 max-w-[92%] text-sm leading-relaxed text-black/80 md:text-[15px] md:leading-7">
        {service.description}
      </p>

      <span
        className="service-number-outline pointer-events-none absolute bottom-3 right-3 select-none text-[clamp(3.5rem,8vw,5rem)] font-black leading-none md:bottom-4 md:right-4"
        aria-hidden="true"
      >
        {service.number}
      </span>
    </article>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-cream px-8 py-16 md:px-12 md:py-24"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 70% 55% at 50% 35%, rgba(255,255,255,0.55) 0%, transparent 65%)",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-[clamp(2.75rem,9vw,6rem)] font-black uppercase leading-[0.88] tracking-[-0.02em]">
          Systems With{" "}
          <span className="text-orange">Taste</span>
        </h2>

        <div className="mt-10 grid items-start gap-6 md:mt-14 lg:grid-cols-3 lg:gap-7">
          <div className="lg:col-span-1">
            <ServiceSticker />
          </div>

          <p className="text-sm font-bold leading-relaxed text-black md:pt-1 md:text-base md:leading-7 lg:col-span-2 lg:text-[17px] lg:leading-8">
            We don&apos;t just make pretty visuals. We build a clear design
            language logo, colors, motion, layouts, website and social presence
            all working together.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-3 lg:gap-7">
          {services.map((service) => (
            <ServiceCard key={service.number} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
