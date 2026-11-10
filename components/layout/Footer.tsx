import Link from "next/link";
import { SITE } from "@/lib/site";
import Container from "@/components/ui/Container";
import SocialLinks from "./SocialLinks";

async function currentYear() {
  "use cache";
  return new Date().getFullYear();
}

export default async function Footer() {
  const year = await currentYear();
  return (
    <footer className="mt-24 border-t border-line bg-cream">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-serif text-2xl">{SITE.name}</p>
          <p className="mt-3 max-w-xs text-sm text-ink/70">{SITE.tagline}</p>
          <SocialLinks className="mt-5 -ml-1" />
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-medium uppercase tracking-widest">
            Quick links
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-ink/70">
            <li>
              <Link href="/faq" className="hover:text-ink">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-ink">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </nav>

        <address className="not-italic">
          <h2 className="text-sm font-medium uppercase tracking-widest">
            Contact
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-ink/70">
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-ink">
                {SITE.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`}
                className="hover:text-ink"
              >
                {SITE.phone}
              </a>
            </li>
            <li>{SITE.address}</li>
          </ul>
        </address>
      </Container>
      <div className="border-t border-line py-5 text-center text-xs text-ink/60">
        &copy; {year} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
