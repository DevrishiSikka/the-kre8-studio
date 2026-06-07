import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-5xl font-black uppercase leading-none tracking-tight md:text-8xl lg:text-9xl">
          Design With{" "}
          <span className="text-transparent [-webkit-text-stroke:2px_#FF4D00] md:[-webkit-text-stroke:3px_#FF4D00]">
            Attitude
          </span>
        </h1>

        <div className="mt-12 flex max-w-xl flex-col gap-6">
          <p className="text-lg leading-relaxed text-black/70">
            We are KRE8 — a creative studio that builds brands with boldness,
            precision, and a whole lot of attitude. No safe choices. No boring
            work.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary-orange" href="#contact">
              Build My Brand
            </Button>
            <Button variant="outline-blue" href="#work">
              See the Work
            </Button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute right-8 top-1/2 hidden h-48 w-48 -translate-y-1/2 border-4 border-blue md:block" />
      <div className="pointer-events-none absolute bottom-12 right-24 hidden h-16 w-16 rotate-45 bg-orange md:block" />
    </section>
  );
}
