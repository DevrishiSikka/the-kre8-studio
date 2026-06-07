"use client";

import { marqueeItems } from "@/lib/constants/marquee";

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="overflow-hidden border-b-2 border-black bg-black py-2">
      <div className="animate-marquee flex w-max whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="mx-6 text-sm font-bold uppercase tracking-widest text-white">
            {item} •
          </span>
        ))}
      </div>
    </div>
  );
}
