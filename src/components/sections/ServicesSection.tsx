import { services } from "@/lib/constants/services";
import { Card } from "@/components/ui/Card";

export function ServicesSection() {
  return (
    <section id="services" className="border-t-2 border-black px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-4xl font-black uppercase tracking-tight md:text-6xl">
          Systems With{" "}
          <span className="text-orange">Taste</span>
        </h2>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.number} className="relative">
              <div className="absolute right-4 top-4 h-4 w-4 bg-blue" />
              <h3 className="mb-3 pr-8 text-lg font-black uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-black/70">
                {service.description}
              </p>
              <span className="absolute bottom-4 right-4 text-4xl font-black text-black/10">
                {service.number}
              </span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
