"use client";

import Image from "next/image";

import { marqueeItems } from "@/lib/constants/marquee";

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="shrink-0 overflow-hidden border-b-2 border-black bg-black py-3 md:py-4">
      <div className="animate-marquee flex w-max items-center">
        {items.map((item, i) => (
          <span
            key={i}
            className="mx-6 inline-flex items-center gap-3 text-base font-black uppercase tracking-[0.18em] text-white sm:mx-8 sm:gap-4 sm:text-lg md:text-xl lg:text-2xl"
          >
            {item}
            <Image
              src="/brutalist_vector.svg"
              alt=""
              width={32}
              height={32}
              className="h-5 w-5 shrink-0 sm:h-6 sm:w-6 md:h-7 md:w-7"
              aria-hidden
            />
          </span>
        ))}
      </div>
    </div>
  );
}
