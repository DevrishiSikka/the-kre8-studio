"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { navLinks } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;

      if (currentScrollY <= 16) {
        setIsHidden(false);
      } else if (delta > 1) {
        setIsHidden(true);
      } else if (delta < -1) {
        setIsHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-4 pt-4 transition-transform duration-200 ease-out md:px-8 md:pt-6",
        isHidden && "-translate-y-[calc(100%+12px)]",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-3xl items-center justify-between gap-4 border-2 border-black bg-cream px-4 py-3 md:max-w-4xl md:px-6",
          !isHidden && "brutal-shadow-sm",
        )}
      >
        <Logo size="sm" variant="studio" />

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-black transition-colors hover:text-orange"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button variant="blue" href="#contact">
          Connect
        </Button>
      </div>
    </header>
  );
}
