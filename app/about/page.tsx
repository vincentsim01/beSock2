import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import FallbackImage from "@/components/ui/FallbackImage";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description: "Discover the story and values behind Maison Lune.",
};

const values = [
  { title: "Thoughtful design", text: "We believe the best pieces are the ones you reach for again and again: versatile, comfortable, and easy to make your own." },
  { title: "Less, but better", text: "Our approach is about slowing down, choosing with intention, and building a wardrobe that feels right for you." },
  { title: "Everyday ease", text: "Getting dressed should feel simple. We look to relaxed silhouettes and timeless details to make that possible." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream">
        <Container className="grid items-center gap-10 py-16 md:grid-cols-2 md:gap-16 md:py-24">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.2em] text-ink/60">Our story</p>
            <h1 className="mt-5 text-4xl leading-tight sm:text-5xl lg:text-6xl">A little more intention in every day.</h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-ink/70">
              Maison Lune is inspired by the quiet beauty of getting dressed in pieces that feel like you.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden bg-line">
            <FallbackImage src="https://images.unsplash.com/photo-1483985988355-763728e1935b" alt="Fashion inspiration for the Maison Lune collection" sizes="(max-width: 767px) 100vw, 50vw" eager />
          </div>
        </Container>
      </section>

      <Container className="grid gap-8 py-20 md:grid-cols-2 md:gap-16 md:py-28">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-ink/60">The beginning</p>
          <h2 className="mt-4 text-3xl sm:text-4xl">A wardrobe to live in.</h2>
        </div>
        <div className="space-y-5 leading-8 text-ink/70">
          <p>Maison Lune began with a simple idea: getting dressed can be a small moment of joy. We are drawn to pieces that feel effortless, with room for individuality and everyday life.</p>
          <p>Our collection brings together easy shapes and timeless details, encouraging a more considered approach to personal style.</p>
        </div>
      </Container>

      <section className="bg-cream">
        <Container className="py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/60">What matters to us</p>
          <h2 className="mt-4 text-3xl sm:text-4xl">Our values, simply put.</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {values.map((value, index) => (
              <div key={value.title} className="border-t border-ink/20 pt-6">
                <span className="text-xs tracking-widest text-ink/50">0{index + 1}</span>
                <h3 className="mt-4 text-2xl">{value.title}</h3>
                <p className="mt-4 leading-7 text-ink/70">{value.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Container className="grid items-center gap-10 py-20 md:grid-cols-2 md:gap-16 md:py-28">
        <div className="relative aspect-[4/5] overflow-hidden bg-cream">
          <FallbackImage src="https://images.unsplash.com/photo-1551232864-3f0890e580d9" alt="Clothing displayed as fashion inspiration" sizes="(max-width: 767px) 100vw, 50vw" />
        </div>
        <div className="max-w-lg">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/60">The inspiration</p>
          <h2 className="mt-4 text-3xl sm:text-4xl">For all the moments in between.</h2>
          <p className="mt-6 leading-8 text-ink/70">From slow mornings to evenings out, our inspiration comes from the way real life unfolds. We hope you find something here that feels like yours.</p>
          <Button href="/shop" className="mt-8">Explore the collection</Button>
        </div>
      </Container>
    </>
  );
}
