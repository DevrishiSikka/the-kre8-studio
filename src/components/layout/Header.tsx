import { navLinks } from "@/lib/constants/navigation";
import { Button } from '@/components/ui/Button'
import { Logo } from "@/components/ui/Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-8 md:pt-6">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 border-2 border-black bg-cream px-4 py-3 brutal-shadow-sm md:max-w-4xl md:px-6">
        <Logo size="sm" variant="studio" />

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
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
