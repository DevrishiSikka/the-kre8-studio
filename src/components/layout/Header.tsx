import { navLinks } from "@/lib/constants/navigation";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-black bg-cream">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo size="sm" />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wide hover:text-orange transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button variant="primary-blue" href="#contact">
          Contact Us
        </Button>
      </div>
    </header>
  );
}
