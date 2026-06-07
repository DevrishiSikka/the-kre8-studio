import { portfolioItems } from "@/lib/constants/portfolio";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";

export function PortfolioSection() {
  const featured = portfolioItems.find((item) => item.featured);
  const rest = portfolioItems.filter((item) => !item.featured);

  return (
    <section id="work" className="border-t-2 border-black px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-4xl font-black uppercase tracking-tight md:text-6xl">
          Not Safe.{" "}
          <span className="text-orange">Not Boring.</span>
        </h2>

        <div className="grid gap-0 md:grid-cols-2">
          {featured && (
            <Card className="flex min-h-[400px] flex-col justify-between md:row-span-2">
              <div className="flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              <div>
                <span className="text-8xl font-black text-orange md:text-9xl">K</span>
                <span className="text-8xl font-black text-blue md:text-9xl">8</span>
                <p className="mt-4 text-sm font-bold uppercase tracking-wide text-black/50">
                  {featured.category}
                </p>
              </div>
            </Card>
          )}

          {rest.map((item) => (
            <Card key={item.title} className="flex min-h-[200px] flex-col justify-between border-l-0 md:border-l-2">
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              <div>
                <h3 className="text-xl font-black uppercase">{item.title}</h3>
                <p className="mt-1 text-sm font-bold uppercase tracking-wide text-black/50">
                  {item.category}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
