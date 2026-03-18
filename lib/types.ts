export type ProductCategory =
  | "men"
  | "women"
  | "kids"
  | "premium"
  | "sunglasses";

export type Product = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  priceCents: number;
  categories: ProductCategory[];
  colors: Array<{ name: string; hex: string }>; 
  images: string[];
  heroImage: string;
};
