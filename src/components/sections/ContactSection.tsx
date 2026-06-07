"use client";

import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";

export function ContactSection() {
  return (
    <section id="contact" className="border-t-2 border-black">
      <div className="grid md:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-24 md:px-12">
          <h2 className="text-4xl font-black uppercase leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Let&apos;s KRE8{" "}
            <span className="text-orange">Something...</span>
          </h2>
          <p className="mt-6 max-w-md text-lg text-black/70">
            Ready to build a brand that stands out? Tell us about your project
            and let&apos;s make something unforgettable.
          </p>
          <Button variant="primary-orange" href="#contact-form" className="mt-8 w-fit">
            Get Started
          </Button>
        </div>

        <div id="contact-form" className="bg-black px-6 py-24 md:px-12">
          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input label="Name" placeholder="Your name" />
            <Input label="Email" type="email" placeholder="your@email.com" />
            <Textarea label="Message" placeholder="Tell us about your project..." />
            <Button variant="primary-orange" type="submit">
              Send Query
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
