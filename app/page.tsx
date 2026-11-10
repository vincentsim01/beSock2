import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home",
  description: SITE.tagline,
};

// Placeholder: the real home page is built in the next step.
export default function HomePage() {
  return (
    <Container className="py-24 text-center">
      <h1 className="text-4xl sm:text-5xl">{SITE.name}</h1>
      <p className="mt-4 text-ink/70">{SITE.tagline}</p>
    </Container>
  );
}
