export const SITE = {
  name: "Maison Lune",
  tagline: "Timeless pieces, thoughtfully made.",
  email: "hello@maisonlune.example",
  phone: "+1 (555) 010-2030",
  address: "12 Rue de la Lune, Paris, France",
  hours: "Mon–Fri 9:00–18:00, Sat 10:00–16:00",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
] as const;

export const SOCIAL_LINKS = [
  { name: "Instagram", href: "https://instagram.com" },
  { name: "Facebook", href: "https://facebook.com" },
  { name: "TikTok", href: "https://tiktok.com" },
  { name: "Pinterest", href: "https://pinterest.com" },
] as const;

export const FREE_SHIPPING_THRESHOLD = 150;
export const STANDARD_SHIPPING = 8;

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

// Shipping estimate used by the cart; checkout lets the user pick a method.
export function estimateShipping(subtotal: number): number {
  if (subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD) return 0;
  return STANDARD_SHIPPING;
}
