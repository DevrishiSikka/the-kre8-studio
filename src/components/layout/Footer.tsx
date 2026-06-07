import { footerColumns, socialLinks } from "@/lib/constants/footer";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-orange">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              {column.title === "Work Together" && (
                <Button variant="primary-orange" href="#contact" className="mt-4">
                  Start a Project
                </Button>
              )}
            </div>
          ))}

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-orange">
              Stay Inspired
            </h3>
            <Input label="Email" type="email" placeholder="your@email.com" />
            <Button variant="primary-orange" className="mt-4 w-full">
              Subscribe
            </Button>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-bold uppercase text-white/70 transition-colors hover:text-orange"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center border-t border-white/10 pt-12">
          <Logo size="lg" className="text-white [&_span:first-child]:text-white" />
        </div>
      </div>
    </footer>
  );
}
