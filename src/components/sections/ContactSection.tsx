"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const budgetOptions = [
  "Under ₹5k",
  "₹5k - ₹20k",
  "₹20k - ₹50k",
  "₹50k+",
] as const;

const CONTACT_HEADLINE = "Let's KRE8 Something People Remember.";

const contactButtonClassName =
  "w-fit max-w-full px-3 text-[9px] uppercase tracking-[0.08em] lg:px-4 lg:text-[10px] xl:px-5 xl:text-xs xl:tracking-[0.1em]";

function ContactIntroPanel() {
  return (
    <div className="hidden min-w-0 md:flex md:items-stretch md:bg-cream md:p-5 lg:p-7 xl:p-8">
      <div className="relative mr-2 mb-2 flex min-h-[420px] w-full min-w-0 flex-col border-2 border-black bg-cream p-6 shadow-[8px_8px_0_0_var(--color-blue)] md:min-h-[460px] md:p-7 lg:min-h-[500px] lg:p-9 xl:min-h-[520px] xl:p-10 xl:mr-2.5 xl:mb-2.5">
        <div className="relative mb-6 w-fit shrink-0 -rotate-[2deg] lg:mb-8">
          <div className="absolute left-2 top-2 h-full w-full bg-blue" aria-hidden="true" />
          <div className="relative border-2 border-black bg-black px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.12em] text-white lg:px-3.5 lg:py-2 lg:text-[9px] xl:px-4 xl:py-2.5 xl:text-[10px] xl:tracking-[0.16em]">
            Start A Project
          </div>
        </div>

        <h2 className="w-full text-balance text-[clamp(2.1rem,4.5vw,3rem)] font-black uppercase leading-[0.92] tracking-[-0.02em] text-black lg:text-[clamp(2.4rem,5vw,3.75rem)] xl:text-[clamp(2.65rem,5.5vw,4.25rem)] 2xl:text-[clamp(2.85rem,6vw,4.75rem)]">
          {CONTACT_HEADLINE}
        </h2>

        <p className="mt-5 max-w-full text-[13px] font-bold leading-relaxed text-black/80 lg:mt-6 lg:text-sm lg:leading-7 xl:mt-7 xl:max-w-md xl:text-[15px] xl:leading-8 2xl:text-base">
          Send us your idea, brand name, mood, deadline and budget. We&apos;ll
          turn it into a direction, a system and a launch-ready identity.
        </p>
        
        <div className="mt-auto flex flex-col items-start gap-3 pt-6 lg:gap-3.5 lg:pt-8 xl:pt-10">
          <Button
            variant="orange"
            href="mailto:hello@thekre8studio.com"
            className={contactButtonClassName}
          >
            hello@thekre8studio.com
          </Button>
          <Button
            variant="orange"
            href="tel:+91 6306809928"
            className={contactButtonClassName}
          >
            +91 6306809928
          </Button>
        </div>
      </div>
    </div>
  );
}

function ContactMobileHeading() {
  return (
    <div className="mb-6 md:hidden">
      <h2 className="text-balance text-[clamp(1.65rem,7vw,2.35rem)] font-black uppercase leading-[0.92] tracking-[-0.02em] text-white">
        {CONTACT_HEADLINE}
      </h2>
    </div>
  );
}

function GoodIdeasSticker() {
  return (
    <div
      className="pointer-events-none absolute -right-5 -top-6 z-30 h-[88px] w-[88px] rotate-[8deg] sm:-right-6 sm:-top-7 sm:h-[96px] sm:w-[96px] md:-right-7 md:-top-8 md:h-[108px] md:w-[108px] lg:h-[116px] lg:w-[116px]"
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="47" fill="#FF499E" stroke="#000" strokeWidth="2" />
        <defs>
          <path id="contact-top-arc" d="M 22 46 A 28 28 0 0 1 78 46" fill="none" />
          <path id="contact-bottom-arc" d="M 78 58 A 28 28 0 0 1 22 58" fill="none" />
        </defs>
        <text
          fill="#000"
          fontSize="7.5"
          fontWeight="900"
          letterSpacing="0.08em"
          style={{ fontFamily: "var(--font-sans), sans-serif" }}
        >
          <textPath href="#contact-top-arc" startOffset="50%" textAnchor="middle">
            GOOD IDEAS
          </textPath>
        </text>
        <circle cx="38" cy="44" r="2.8" fill="#000" />
        <circle cx="62" cy="44" r="2.8" fill="#000" />
        <path
          d="M 37 57 Q 50 67 63 57"
          fill="none"
          stroke="#000"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <text
          fill="#000"
          fontSize="7"
          fontWeight="900"
          letterSpacing="0.06em"
          style={{ fontFamily: "var(--font-sans), sans-serif" }}
        >
          <textPath href="#contact-bottom-arc" startOffset="50%" textAnchor="middle">
            START HERE
          </textPath>
        </text>
      </svg>
    </div>
  );
}

function ResponseStickyNote() {
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-24 z-40 hidden w-[172px] -translate-x-[54%] -rotate-[7deg] md:block lg:top-[5.5rem] xl:w-[186px]"
      aria-hidden="true"
    >
      <Image
        src="/paperclip.svg"
        alt=""
        width={40}
        height={40}
        className="absolute -top-5 left-1/2 z-10 h-10 w-8 -translate-x-1/2 sm:h-11 sm:w-9"
        aria-hidden
      />
      <div className="relative border-2 border-black bg-process-yellow px-3.5 pb-3.5 pt-5 sm:px-4 sm:pb-4 sm:pt-6">
        <p className="font-hand text-[14px] font-bold leading-[1.15] tracking-tight text-black sm:text-[15px]">
          RESPONDING
          <br />
          WITHIN{" "}
          <span className="relative inline-block">
            24 HOURS
            <svg
              viewBox="0 0 80 8"
              className="absolute -bottom-0.5 left-0 h-1.5 w-full text-black"
              aria-hidden="true"
            >
              <path
                d="M1 5c18-2 36 2 54 1s18-1 24 2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M2 7c16 0 32 2 48 1s20-1 28 1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </p>
      </div>
    </div>
  );
}

function ContactAsterisk() {
  return (
    <div
      className="pointer-events-none absolute -bottom-1 right-1 z-20 flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-contact-blue sm:right-2 sm:h-11 sm:w-11 md:-bottom-2 md:right-0 md:h-12 md:w-12 lg:h-14 lg:w-14"
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-black sm:h-7 sm:w-7">
        <path
          d="M12 2L13.8 9.2L21 7.5L15 12L21 16.5L13.8 14.8L12 22L10.2 14.8L3 16.5L9 12L3 7.5L10.2 9.2L12 2Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

function EpicCallout() {
  return (
    <div
      className="pointer-events-none absolute -bottom-6 right-0 z-20 hidden sm:block lg:-bottom-10 xl:-bottom-12 xl:right-2"
      aria-hidden="true"
    >
      <div className="relative">
        <svg
          viewBox="0 0 80 72"
          className="absolute -left-[5.25rem] -top-[4.75rem] h-[4.75rem] w-[5.25rem] text-white"
          aria-hidden="true"
        >
          <path
            d="M74 66C58 54 42 36 26 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M26 14L19 7L28 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <p className="font-hand text-[18px] font-bold leading-none tracking-wide text-white sm:text-[22px] lg:text-2xl">
          LET&apos;S MAKE IT{" "}
          <span className="relative inline-block">
            EPIC.
            <svg
              viewBox="0 0 42 6"
              className="absolute -bottom-0.5 left-0 h-1.5 w-full text-white"
              aria-hidden="true"
            >
              <path
                d="M1 4c10-1 20 1 30 0s8-1 10 1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </p>
      </div>
    </div>
  );
}

function ContactField({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-xs font-black uppercase tracking-[0.08em] text-black sm:text-[13px]">
        {label}
      </label>
      {children}
    </div>
  );
}

export function ContactSection() {
  const [selectedBudgets, setSelectedBudgets] = useState<string[]>([]);

  function toggleBudget(option: string) {
    setSelectedBudgets((current) =>
      current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option],
    );
  }

  return (
    <section id="contact" className="relative border-t-2 border-black bg-cream">
      <div className="relative grid overflow-visible md:grid-cols-2 md:gap-5 lg:gap-6">
        <ContactIntroPanel />

        <div
          id="contact-form"
          className="contact-grain relative min-w-0 overflow-visible bg-contact-dark px-4 py-8 sm:px-6 sm:py-10 md:col-span-1 md:px-7 md:py-10 lg:px-8 lg:py-12"
        >
          <ContactMobileHeading />

          <div className="relative z-10 mx-auto w-full max-w-[620px] lg:max-w-[680px]">
            <div className="relative px-1 pb-10 pt-2 sm:px-3 sm:pb-12 sm:pt-4 md:px-3 md:pb-14 md:pt-6 lg:px-5">
              <div
                className="pointer-events-none absolute -left-1 top-5 z-0 h-[120px] w-[62px] bg-contact-blue sm:-left-2 sm:top-4 sm:h-[136px] sm:w-[72px]"
                aria-hidden="true"
              />

              <div
                className="pointer-events-none absolute -bottom-2 -right-1 z-0 h-[88%] w-[72%] bg-contact-orange sm:-bottom-3 sm:-right-2"
                style={{
                  clipPath: "polygon(72% 0, 100% 0, 100% 100%, 0 100%, 58% 42%)",
                }}
                aria-hidden="true"
              />

              <div className="relative z-10 rotate-0 sm:-rotate-[1deg] md:-rotate-[1.5deg]">
                <div className="relative border-2 border-black bg-contact-paper px-4 py-6 shadow-[6px_6px_0_0_#000] sm:px-6 sm:py-8 sm:shadow-[8px_8px_0_0_#000] md:px-8 md:py-10">
                  <form
                    className="relative z-10 flex flex-col gap-5 sm:gap-6 md:gap-7"
                    onSubmit={(event) => event.preventDefault()}
                  >
                    <ContactField id="contact-name" label="Your Name">
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="What should we call you?"
                        className="contact-input w-full"
                      />
                    </ContactField>

                    <ContactField id="contact-email" label="Your Email">
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        className="contact-input w-full"
                      />
                    </ContactField>

                    <ContactField id="contact-project" label="What Are We Building?">
                      <textarea
                        id="contact-project"
                        name="project"
                        rows={6}
                        placeholder="Tell us about your project, goals, ideas, or anything we should know..."
                        className="contact-input min-h-[140px] w-full resize-y sm:min-h-[160px]"
                      />
                    </ContactField>

                    <fieldset className="flex flex-col gap-3">
                      <legend className="text-xs font-black uppercase tracking-[0.08em] text-black sm:text-[13px]">
                        Budget Range (Optional)
                      </legend>
                      <div className="flex flex-wrap gap-x-4 gap-y-2.5 sm:gap-x-5 sm:gap-y-3 md:gap-x-6">
                        {budgetOptions.map((option) => {
                          const checked = selectedBudgets.includes(option);

                          return (
                            <label
                              key={option}
                              className="inline-flex cursor-pointer items-center gap-2.5 text-[13px] font-medium text-black sm:text-sm"
                            >
                              <span
                                className={cn(
                                  "flex h-4 w-4 shrink-0 items-center justify-center border-2 border-black bg-white",
                                  checked && "bg-black",
                                )}
                              >
                                {checked ? (
                                  <svg viewBox="0 0 12 12" className="h-3 w-3 text-white" aria-hidden="true">
                                    <path
                                      d="M2.5 6L5 8.5L9.5 3.5"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                ) : null}
                              </span>
                              <input
                                type="checkbox"
                                name="budget"
                                value={option}
                                checked={checked}
                                onChange={() => toggleBudget(option)}
                                className="sr-only"
                              />
                              {option}
                            </label>
                          );
                        })}
                      </div>
                    </fieldset>

                    <Button
                      type="submit"
                      variant="contact"
                      size="contact"
                      className="mt-2 uppercase tracking-[0.1em]"
                    >
                      Send Query &rarr;
                    </Button>
                  </form>
                </div>

                <GoodIdeasSticker />
              </div>

              <ContactAsterisk />
              <EpicCallout />
            </div>
          </div>
        </div>

        <ResponseStickyNote />
      </div>
    </section>
  );
}
