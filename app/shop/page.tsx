import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import Container from "@/components/ui/Container";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Shop",
  description: "Explore the Maison Lune collection of everyday wardrobe pieces.",
};

export default function ShopPage() {
  return (
    <Container className="py-16 sm:py-24">
      <header className="mb-12 max-w-xl">
        <p className="text-xs uppercase tracking-[0.2em] text-ink/60">The collection</p>
        <h1 className="mt-4 text-4xl sm:text-5xl">Made for every day.</h1>
        <p className="mt-5 leading-7 text-ink/70">
          Discover considered pieces designed to find a place in your wardrobe, season after season.
        </p>
      </header>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </Container>
  );
}
