export function CtaBanner() {
  return (
    <section className="border-b-2 border-black bg-cream pt-4 sm:pt-5 md:pt-6">
      <div className="relative w-full overflow-hidden border-t-2 border-black bg-orange">
        <div
          className="pointer-events-none absolute left-0 top-1/2 z-0 h-[clamp(9rem,32vw,17.5rem)] w-[clamp(9rem,32vw,17.5rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute -bottom-5 -right-4 z-0 h-[clamp(4.5rem,12vw,7.5rem)] w-[clamp(6.5rem,18vw,11rem)] -rotate-[11deg] bg-black sm:-bottom-6 sm:-right-5 md:-bottom-7 md:-right-6"
          aria-hidden="true"
        />

        <div className="relative z-10 px-6 py-12 sm:px-8 sm:py-14 md:px-10 md:py-16 lg:px-14 lg:py-[4.5rem] xl:px-16">
          <h2 className="font-black uppercase leading-[0.88] tracking-[-0.025em] text-white text-[clamp(2.15rem,6.8vw,4.75rem)]">
            <span className="block">We Design Brands</span>
            <span className="block">That Look Like</span>
            <span className="block">They Have</span>
            <span className="block">Something To Say.</span>
          </h2>

          <p className="mt-7 max-w-xl text-[13px] font-medium leading-relaxed text-white/95 sm:mt-8 sm:max-w-2xl sm:text-sm sm:leading-7 md:mt-10 md:text-[15px] md:leading-8 lg:max-w-2xl lg:text-base lg:leading-8">
            Minimal when needed. Loud when useful. Always intentional. THE KRE8
            STUDIO exists for brands that want taste, clarity and a visual
            identity people can actually feel.
          </p>
        </div>
      </div>
    </section>
  );
}
