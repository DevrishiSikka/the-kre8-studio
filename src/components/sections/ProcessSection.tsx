import { processSteps } from "@/lib/constants/process";
import { cn } from "@/lib/utils";

const colorMap = {
  black: "bg-black text-white",
  blue: "bg-blue text-white",
  orange: "bg-orange text-white",
};

export function ProcessSection() {
  return (
    <section id="process" className="border-t-2 border-black px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-4xl font-black uppercase tracking-tight md:text-6xl">
          Messy Ideas.{" "}
          <span className="text-orange">Clean Systems.</span>
        </h2>

        <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div
              key={step.title}
              className={cn(
                "border-2 border-black p-8 md:border-l-0 md:first:border-l-2",
                colorMap[step.color],
              )}
            >
              <h3 className="mb-4 text-2xl font-black uppercase tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed opacity-80">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
