"use client";

import { ReactLenis } from "lenis/react";

type LenisScrollProviderProps = {
  children: React.ReactNode;
};

export default function LenisScrollProvider({
  children,
}: LenisScrollProviderProps) {
  return (
    <ReactLenis
      root
      options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}
    >
      {children}
    </ReactLenis>
  );
}
