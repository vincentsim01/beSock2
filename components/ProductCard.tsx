import FallbackImage from "@/components/ui/FallbackImage";
import { formatPrice } from "@/lib/site";
import type { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article>
      <div className="relative aspect-[3/4] overflow-hidden bg-cream">
        <FallbackImage
          src={product.images[0]}
          alt={`Placeholder fashion photograph for ${product.name}`}
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
        />
      </div>
      <div className="flex items-start justify-between gap-3 pt-4">
        <div>
          <h2 className="font-sans text-sm font-medium">{product.name}</h2>
          <p className="mt-1 text-xs text-ink/60">{product.category}</p>
        </div>
        <p className="shrink-0 text-sm">{formatPrice(product.price)}</p>
      </div>
    </article>
  );
}
