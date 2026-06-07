import Image from "next/image";
import { footerColumns, socialLinks } from "@/lib/constants/footer";
import { cn } from "@/lib/utils";

function FooterSparkAccent() {
  return (
    <svg
      viewBox="0 0 48 32"
      className="pointer-events-none absolute -right-1 -top-5 h-7 w-10 text-white sm:-top-6 sm:h-8 sm:w-11"
      aria-hidden="true"
    >
      <path
        d="M2 26L12 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 28L24 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M28 24L38 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FooterStartProjectCta() {
  return (
    <div className="relative mx-auto w-fit shrink-0 lg:mx-0 lg:justify-self-end">
      <div className="relative -rotate-[3deg]">
        <div
          className="pointer-events-none absolute inset-0 translate-x-[5px] translate-y-[5px] border-2 border-black bg-black"
          aria-hidden="true"
        />
        <FooterSparkAccent />
        <a
          href="#contact"
          className="relative inline-flex items-center gap-2 border-2 border-black bg-contact-orange px-7 py-3.5 text-[11px] font-black uppercase tracking-[0.12em] text-black transition-transform duration-150 hover:translate-x-[3px] hover:translate-y-[3px] sm:px-8 sm:py-4 sm:text-xs"
        >
          Start A Project
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}

function FooterOrangeScribble() {
  return (
    <svg
      viewBox="0 0 240 14"
      className="pointer-events-none mt-3 h-3 w-[min(100%,240px)] text-contact-orange lg:mx-0"
      aria-hidden="true"
    >
      <path
        d="M2 9c28-4 56 2 84-1s56-3 84 1 56 1 68-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M6 11c24 0 48-1 72 0s48 1 72 0 48 0 66 1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M10 7c20 2 40-1 60 0s40 2 60 0 40-1 50 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

function FooterAsterisk() {
  return (
    <div
      className="flex h-9 w-9 shrink-0 items-center justify-center border-2 border-black bg-contact-orange sm:h-10 sm:w-10"
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="h-[52%] w-[52%] text-black">
        <path
          d="M12 2L13.8 9.2L21 7.5L15 12L21 16.5L13.8 14.8L12 22L10.2 14.8L3 16.5L9 12L3 7.5L10.2 9.2L12 2Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

function FooterPaperclip({ className }: { className?: string }) {
  return (
    <Image
      src="/paperclip.svg"
      alt=""
      width={64}
      height={64}
      className={cn(
        "pointer-events-none absolute z-20 h-14 w-11 brightness-0 invert sm:h-16 sm:w-12",
        className,
      )}
      aria-hidden
    />
  );
}

function FooterNewsletterCard() {
  return (
    <div className="relative z-20 mx-auto w-full max-w-[19rem] overflow-visible lg:mx-0">
      <div className="relative rotate-[1deg] overflow-visible">
        <div
          className="pointer-events-none absolute inset-0 translate-x-2 translate-y-2 border-2 border-black bg-[#e8e8e8]"
          aria-hidden="true"
        />
        <FooterPaperclip className="-left-5 -top-8 -rotate-[14deg] sm:-left-6 sm:-top-9" />
        <FooterPaperclip className="-right-5 -top-8 rotate-[14deg] scale-x-[-1] sm:-right-6 sm:-top-9" />
        <div className="relative overflow-visible border-2 border-black bg-[#f2f2f2] p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <FooterAsterisk />
            <h3 className="text-sm font-black uppercase tracking-[0.06em] text-black sm:text-[15px]">
              Stay Inspired
            </h3>
          </div>

          <div className="mt-5 space-y-3">
            <input
              type="email"
              placeholder="your@email.com"
              aria-label="Email address"
              className="w-full border border-black bg-[#e8e8e8] px-3 py-2.5 font-mono text-xs text-black placeholder:text-black/35 focus:border-black focus:outline-none sm:text-[13px]"
            />
            <div className="relative">
              <div
                className="pointer-events-none absolute inset-0 translate-x-[6px] translate-y-[6px] border-2 border-black bg-contact-blue"
                aria-hidden="true"
              />
              <button
                type="button"
                className="relative inline-flex w-full items-center justify-center gap-2 border-2 border-black bg-contact-orange px-4 py-2.5 text-[11px] font-black uppercase tracking-[0.1em] text-black transition-transform duration-150 hover:translate-x-[6px] hover:translate-y-[6px] sm:text-xs"
              >
                Subscribe
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterNavColumn({
  title,
  links,
  withDivider,
}: {
  title: string;
  links: { label: string; href: string }[];
  withDivider?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex h-full flex-col justify-start px-0 py-8 sm:px-6 lg:px-7 xl:px-9",
        withDivider &&
          "border-t border-white/20 sm:border-t-0 sm:border-l sm:border-white/20",
      )}
    >
      <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-contact-orange">
        {title.toUpperCase()}
      </h3>
      <ul className="mt-4 flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="font-mono text-[13px] font-normal text-white transition-colors hover:text-white/70 sm:text-sm"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterWordmark() {
  return (
    <a
      href="/"
      className="block w-full select-none font-black uppercase leading-[0.78] tracking-[-0.04em] text-contact-orange text-[clamp(5rem,18vw,13.5rem)]"
      aria-label="KRE8 Studio home"
    >
      KRE8
    </a>
  );
}

export function Footer() {
  return (
    <footer className="flex min-h-dvh flex-col bg-black text-white">
      {/* Top CTA band */}
      <div className="shrink-0 border-b border-white/20 pt-14 pb-10 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-14 xl:pt-24 xl:pb-16">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-10 xl:px-14">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)_auto] lg:gap-10 xl:gap-12">
            <h2 className="font-black uppercase leading-[0.86] tracking-[-0.03em] text-[clamp(2.25rem,5vw,3.75rem)] xl:text-[4rem]">
              <span className="block">Let&apos;s Build</span>
              <span className="block">
                Something{" "}
                <span className="text-contact-orange">Real.</span>
              </span>
            </h2>

            <div className="mx-auto max-w-xs text-center lg:mx-0 lg:max-w-[17rem] lg:text-left xl:max-w-[19rem]">
              <p className="font-mono text-[13px] leading-relaxed text-white sm:text-sm">
                We partner with ambitious brands to create work that drives real
                impact.
              </p>
              <FooterOrangeScribble />
            </div>

            <FooterStartProjectCta />
          </div>
        </div>
      </div>

      {/* Navigation + newsletter */}
      <div className="relative shrink-0 border-b border-white/20">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-10 xl:px-14">
          <div className="grid w-full lg:grid-cols-[1fr_1fr_1fr_minmax(17rem,20rem)] lg:items-stretch">
            {footerColumns.map((column, index) => (
              <FooterNavColumn
                key={column.title}
                title={column.title}
                links={column.links}
                withDivider={index > 0}
              />
            ))}

            <div className="flex h-full justify-start border-t border-white/20 py-8 sm:border-t-0 sm:border-l sm:border-white/20 sm:pl-6 lg:justify-end lg:pl-6 xl:pl-8">
              <FooterNewsletterCard />
            </div>
          </div>
        </div>
      </div>

      {/* Wordmark */}
      <div className="flex flex-1 items-end border-b border-white/20 pt-6 pb-2 sm:pt-8 sm:pb-3 lg:pt-10">
        <div className="mx-auto w-full max-w-[1400px] overflow-hidden px-6 sm:px-8 lg:px-10 xl:px-14">
          <FooterWordmark />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="shrink-0 py-4 sm:py-5">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-10 xl:px-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[10px] font-normal uppercase tracking-[0.04em] text-white/60 sm:text-[11px]">
              © {new Date().getFullYear()} KRE8 STUDIO. ALL RIGHTS RESERVED.
            </p>
            <div className="flex flex-wrap items-center font-mono text-[10px] font-normal uppercase tracking-[0.04em] sm:text-[11px]">
              {socialLinks.map((link, index) => (
                <span key={link.label} className="inline-flex items-center">
                  {index > 0 && (
                    <span className="mx-2 text-contact-orange" aria-hidden="true">
                      /
                    </span>
                  )}
                  <a
                    href={link.href}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {link.label.toUpperCase()}
                  </a>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
