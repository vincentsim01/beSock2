"use client";

import Image from "next/image";
import { useState } from "react";

const fallback = "/images/image-fallback.svg";

export default function FallbackImage({
  src,
  alt,
  sizes,
  className = "object-cover",
  eager = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  eager?: boolean;
}) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const failed = failedSrc === src;

  return (
    <Image
      src={failed ? fallback : src}
      alt={failed ? `Image unavailable: ${alt}` : alt}
      fill
      sizes={sizes}
      className={failed ? "object-contain" : className}
      loading={eager ? "eager" : "lazy"}
      onError={() => {
        if (!failed) {
          console.warn(`Failed to load image: ${src}`);
          setFailedSrc(src);
        } else {
          console.error("Failed to load the fallback image.");
        }
      }}
    />
  );
}
