import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/layout/SocialLinks";
import Container from "@/components/ui/Container";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Maison Lune team.",
};

export default function ContactPage() {
  return (
    <Container className="py-16 sm:py-24">
      <header className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.2em] text-ink/60">We&apos;re here to help</p>
        <h1 className="mt-4 text-4xl sm:text-5xl">Let&apos;s talk.</h1>
        <p className="mt-5 leading-7 text-ink/70">Have a question or simply want to say hello? We&apos;d love to hear from you.</p>
      </header>
      <div className="mt-12 grid gap-14 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-24">
        <section aria-labelledby="message-heading">
          <h2 id="message-heading" className="mb-6 text-2xl">Send us a message</h2>
          <p className="mb-6 text-sm leading-6 text-ink/70">This form is a demo and does not send messages yet. Contact details below are placeholders.</p>
          <ContactForm />
        </section>
        <section aria-labelledby="details-heading" className="bg-cream p-6 sm:p-10">
          <h2 id="details-heading" className="text-2xl">Contact details</h2>
          <address className="mt-8 space-y-6 text-sm leading-7 not-italic">
            <div><h3 className="font-sans text-xs font-medium uppercase tracking-widest">Email</h3><a className="underline underline-offset-4" href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
            <div><h3 className="font-sans text-xs font-medium uppercase tracking-widest">Phone</h3><a className="underline underline-offset-4" href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`}>{SITE.phone}</a></div>
            <div><h3 className="font-sans text-xs font-medium uppercase tracking-widest">Address</h3><p>{SITE.address}</p></div>
            <div><h3 className="font-sans text-xs font-medium uppercase tracking-widest">Opening hours</h3><p>{SITE.hours}</p></div>
          </address>
          <h3 className="mt-10 font-sans text-xs font-medium uppercase tracking-widest">Follow along</h3>
          <SocialLinks className="mt-4 -ml-1" />
        </section>
      </div>
    </Container>
  );
}
