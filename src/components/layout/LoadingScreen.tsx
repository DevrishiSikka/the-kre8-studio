"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

const THEME = {
  accent: "#F26725",
  secondary: "#3C58E8",
  background: "#FDFCF8",
  surface: "#FFFFFF",
  text: "#000000",
};

const TOTAL_RAMP_MS = 3600;
const MAX_LOAD_MS = 4000;
const DOM_POLL_MS = 500;
const LOGO_WAIT_MS = 900;
const LERP = 0.1;

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function waitForImage(img: HTMLImageElement, timeoutMs: number): Promise<void> {
  if (img.complete) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    const done = () => {
      clearTimeout(timer);
      resolve();
    };

    img.addEventListener("load", done, { once: true });
    img.addEventListener("error", done, { once: true });

    const timer = setTimeout(done, timeoutMs);
  });
}

async function waitForDomPaint(): Promise<void> {
  await new Promise<void>((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  });
}

async function queryFirstImage(
  selector: string,
  timeoutMs: number,
): Promise<HTMLImageElement | null> {
  const deadline = Date.now() + timeoutMs;

  while (Date.now() < deadline) {
    const image = document.querySelector(selector);
    if (image instanceof HTMLImageElement) {
      return image;
    }

    await delay(16);
  }

  const image = document.querySelector(selector);
  return image instanceof HTMLImageElement ? image : null;
}

async function waitForCriticalAssets(
  onLog: (message: string) => void,
): Promise<void> {
  onLog("LOADING TYPOGRAPHY...");

  const fontsTask = document.fonts.ready.then(() => {
    onLog("LOADING TYPOGRAPHY [OK]");
  });

  const logoTask = (async () => {
    const logo = await queryFirstImage(
      'img[src*="the-kre8-studio-logo"]',
      DOM_POLL_MS,
    );

    if (logo) {
      await waitForImage(logo, LOGO_WAIT_MS);
    }

    onLog("LOADING BRUTAL_VECTORS.SVG [OK]");
  })();

  await Promise.race([
    Promise.all([fontsTask, logoTask]),
    delay(MAX_LOAD_MS),
  ]);
}

function useSmoothProgress(loadStartRef: React.RefObject<number>) {
  const valueRef = useRef(1);
  const [displayProgress, setDisplayProgress] = useState(1);

  useEffect(() => {
    let frame = 0;

    const animate = () => {
      const start = loadStartRef.current ?? performance.now();
      const elapsed = performance.now() - start;
      const t = Math.min(1, elapsed / TOTAL_RAMP_MS);
      const goal = 1 + t * 99;

      const current = valueRef.current;
      const next = current + (goal - current) * LERP;

      valueRef.current = next;
      setDisplayProgress(Math.round(next));

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [loadStartRef]);

  const getValue = useCallback(() => valueRef.current, []);

  return { displayProgress, getValue };
}

type LoadingScreenProps = {
  children: React.ReactNode;
};

export default function LoadingScreen({ children }: LoadingScreenProps) {
  const loadStartRef = useRef(performance.now());
  const { displayProgress, getValue } = useSmoothProgress(loadStartRef);
  const [isExiting, setIsExiting] = useState(false);
  const [isUnmounted, setIsUnmounted] = useState(false);
  const [logs, setLogs] = useState(["[SYSTEM] INITIATING KRE8 PROTOCOL..."]);

  useEffect(() => {
    let cancelled = false;

    const addLog = (message: string) => {
      if (cancelled) return;
      setLogs((prev) => [...prev.slice(-3), message]);
    };

    const completeLoading = async () => {
      if (cancelled) return;

      addLog("MOUNTING ATTITUDE [100%]");
      addLog("READY.");

      await new Promise<void>((resolve) => {
        const check = () => {
          if (cancelled || getValue() >= 99.5) {
            resolve();
            return;
          }

          requestAnimationFrame(check);
        };

        check();
      });

      if (cancelled) return;

      setTimeout(() => {
        if (!cancelled) setIsExiting(true);
      }, 280);

      setTimeout(() => {
        if (!cancelled) setIsUnmounted(true);
      }, 950);
    };

    const runLoadSequence = async () => {
      loadStartRef.current = performance.now();

      await waitForDomPaint();

      await Promise.all([
        waitForCriticalAssets(addLog),
        delay(TOTAL_RAMP_MS),
      ]);

      await completeLoading();
    };

    void runLoadSequence();

    return () => {
      cancelled = true;
    };
  }, [getValue]);

  useEffect(() => {
    if (isUnmounted) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isUnmounted]);

  return (
    <div className="relative min-h-full w-full">
      <div
        className={isExiting || isUnmounted ? undefined : "invisible"}
        aria-hidden={!isExiting && !isUnmounted}
      >
        {children}
      </div>

      {!isUnmounted && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden font-sans transition-transform duration-[800ms] ease-[cubic-bezier(0.85,0,0.15,1)] selection:bg-black selection:text-white ${
            isExiting ? "-translate-y-full" : "translate-y-0"
          }`}
          style={{ backgroundColor: THEME.accent, color: THEME.text }}
        >
          <style>{`
            @keyframes marquee-left {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            @keyframes marquee-right {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0%); }
            }
            .animate-marquee-left {
              animation: marquee-left 15s linear infinite;
            }
            .animate-marquee-right {
              animation: marquee-right 15s linear infinite;
            }
          `}</style>

          <div className="pointer-events-none absolute inset-0 flex select-none flex-col justify-between overflow-hidden whitespace-nowrap py-12 opacity-20">
            <div className="animate-marquee-left text-6xl font-black uppercase tracking-tighter md:text-[8rem]">
              NOT SAFE. NOT BORING. NOT SAFE. NOT BORING. NOT SAFE. NOT BORING.
            </div>
            <div className="animate-marquee-right text-6xl font-black uppercase tracking-tighter md:text-[8rem]">
              MESSY IDEAS. CLEAN SYSTEMS. MESSY IDEAS. CLEAN SYSTEMS. MESSY
              IDEAS.
            </div>
            <div className="animate-marquee-left text-6xl font-black uppercase tracking-tighter md:text-[8rem]">
              MADE TO KRE8. MADE TO KRE8. MADE TO KRE8. MADE TO KRE8. MADE TO
              KRE8.
            </div>
          </div>

          <div
            className="relative z-10 flex w-[90%] max-w-sm flex-col gap-4 border-4 p-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:p-6 md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]"
            style={{
              backgroundColor: THEME.surface,
              borderColor: THEME.text,
            }}
          >
            <div
              className="flex items-center justify-between border-b-4 pb-3"
              style={{ borderColor: THEME.text }}
            >
              <span className="text-lg font-black uppercase tracking-widest md:text-xl">
                Kre8_Studio
              </span>
              <div className="flex gap-2">
                <div
                  className="h-3 w-3 animate-pulse rounded-full"
                  style={{ backgroundColor: THEME.text }}
                />
                <div
                  className="delay-75 h-3 w-3 animate-pulse rounded-full"
                  style={{ backgroundColor: THEME.text }}
                />
              </div>
            </div>

            <div className="flex items-end justify-between leading-none">
              <span className="text-6xl font-black tabular-nums tracking-tighter md:text-8xl">
                {displayProgress}
              </span>
              <span className="mb-1 text-3xl font-black md:mb-2 md:text-5xl">
                %
              </span>
            </div>

            <div
              className="relative h-6 w-full overflow-hidden border-4 md:h-8"
              style={{
                borderColor: THEME.text,
                backgroundColor: THEME.background,
              }}
            >
              <div
                className="absolute top-0 left-0 h-full transition-[width] duration-75 ease-out"
                style={{
                  width: `${displayProgress}%`,
                  backgroundColor: THEME.text,
                }}
              />
            </div>

            <div
              className="flex h-28 flex-col justify-end gap-1 overflow-hidden border-2 p-3 font-mono text-[10px] leading-normal font-bold tracking-wider uppercase md:p-4 md:text-xs"
              style={{
                backgroundColor: THEME.text,
                color: THEME.secondary,
                borderColor: THEME.text,
              }}
            >
              {logs.map((log, index) => (
                <div key={index} className="flex-shrink-0 truncate">
                  <span className="mr-2 text-white">{">"}</span>
                  {log}
                </div>
              ))}
              {displayProgress < 100 && (
                <div className="flex-shrink-0 animate-pulse">
                  <span className="mr-2 text-white">{">"}</span>_
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
