export type Category = "Tops" | "Bottoms" | "Dresses" | "Accessories";

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: Category;
  description: string;
  images: string[];
  sizes: string[];
  colors: ProductColor[];
  featured?: boolean;
}

export interface CartItem {
  productId: string;
  slug: string;
  name: string;
  image: string;
  price: number;
  size: string;
  color: string;
  quantity: number;
}

export interface ShippingMethod {
  id: string;
  label: string;
  price: number;
  eta: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  customer: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
  shippingMethod: ShippingMethod;
  subtotal: number;
  shipping: number;
  total: number;
  createdAt: string;
}
