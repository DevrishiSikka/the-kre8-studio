import { portfolioItems } from "@/lib/constants/portfolio";
import type { PortfolioItem } from "@/types";
import { cn } from "@/lib/utils";

function SelectedDirectionsSticker() {
  return (
    <div className="relative w-fit shrink-0 -rotate-[5deg]">
      <div
        className="absolute left-2 top-2 h-full w-full bg-blue"
        aria-hidden="true"
      />
      <div className="relative border-2 border-black bg-black px-4 py-2.5 text-center text-[10px] font-black uppercase leading-tight tracking-[0.1em] text-white md:px-5 md:py-3 md:text-[11px] md:tracking-[0.12em]">
        Selected Directions
      </div>
    </div>
  );
}

function PortfolioCollage() {
  return (
    <div
      className="relative min-h-[200px] overflow-hidden bg-[#f2e8d5] sm:min-h-[220px] md:min-h-[250px]"
      aria-hidden="true"
    >
      <span className="absolute bottom-2 left-4 select-none text-[clamp(5.5rem,14vw,9rem)] font-black leading-none text-blue -rotate-[4deg] sm:left-6 md:bottom-4 md:left-8">
        K
      </span>

      <div className="absolute left-[42%] top-[38%] h-[72px] w-[108px] -rotate-[12deg] border-2 border-black bg-white sm:h-[84px] sm:w-[124px] md:h-[96px] md:w-[140px]" />

      <div className="absolute right-10 top-7 h-3.5 w-3.5 rounded-full bg-black sm:right-12 sm:top-8 md:right-14 md:top-10 md:h-4 md:w-4" />

      <span className="portfolio-collage-eight absolute bottom-1 right-4 select-none text-[clamp(4.5rem,12vw,7.5rem)] font-black leading-none sm:right-6 md:bottom-2 md:right-8">
        8
      </span>
    </div>
  );
}

function PortfolioTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block border border-black bg-white px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.06em]">
      {children}
    </span>
  );
}

function FeaturedPortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <article className="relative flex flex-col overflow-hidden border-2 border-black bg-cream brutal-shadow-orange-lg">
      <PortfolioCollage />

      <div className="flex flex-col gap-3.5 p-5 md:p-5">
        <h3 className="text-xl font-black uppercase leading-[1.08] tracking-tight md:text-3xl">
          {item.title}
        </h3>
        <p className="max-w-[98%] text-[13px] font-bold leading-snug text-black md:text-sm md:leading-6">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-0.5">
          {item.tags.map((tag) => (
            <PortfolioTag key={tag}>{tag}</PortfolioTag>
          ))}
        </div>
      </div>
    </article>
  );
}

function PortfolioCard({
  item,
  className,
}: {
  item: PortfolioItem;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "flex h-full min-h-[180px] flex-col border-2 border-black bg-cream p-5 brutal-shadow-lg sm:min-h-0",
        className,
      )}
    >
      <h3 className="text-xl font-black uppercase leading-[1.06] tracking-tight md:text-2xl">
        {item.title}
      </h3>
      <p className="mt-2.5 max-w-[98%] text-[13px] font-bold leading-snug text-black md:text-sm md:leading-6">
        {item.description}
      </p>
      <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
        {item.tags.map((tag) => (
          <PortfolioTag key={tag}>{tag}</PortfolioTag>
        ))}
      </div>
    </article>
  );
}

export function PortfolioSection() {
  const featured = portfolioItems.find((item) => item.featured);
  const rest = portfolioItems.filter((item) => !item.featured);

  return (
    <section
      id="work"
      className="relative border-t-2 border-black bg-cream px-6 py-16 md:px-10 md:py-24 lg:px-12"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 70% 55% at 50% 20%, rgba(255,255,255,0.45) 0%, transparent 65%)",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-[clamp(2.75rem,9vw,6rem)] font-black uppercase leading-[0.88] tracking-[-0.02em]">
          Not Safe.{" "}
          <span className="text-orange">Not Boring.</span>
        </h2>

        <div className="mt-8 flex flex-col items-start justify-between gap-8 sm:mt-10 sm:flex-row sm:items-end md:mt-12">
          <SelectedDirectionsSticker />

          <p className="max-w-md text-sm font-bold leading-relaxed text-black sm:text-right md:text-base md:leading-7 lg:max-w-lg lg:text-[17px] lg:leading-8">
            Our visual style mixes collage energy, bold typography, brush
            textures, high contrast shapes and brand clarity.
          </p>
        </div>

        <div className="mt-6 md:mt-8">
          <div className="grid items-stretch gap-5 lg:grid-cols-[1.12fr_0.88fr] lg:gap-6">
            {featured && <FeaturedPortfolioCard item={featured} />}

            <div className="grid gap-5 lg:h-full lg:grid-rows-2 lg:gap-6">
              {rest.map((item) => (
                <PortfolioCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
