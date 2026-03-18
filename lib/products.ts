import type { Product, ProductCategory } from "@/lib/types";

export const categories: Array<{ label: string; value: ProductCategory | "all" }> = [
  { label: "All", value: "all" },
  { label: "Men", value: "men" },
  { label: "Women", value: "women" },
  { label: "Kids", value: "kids" },
  { label: "Premium", value: "premium" },
  { label: "Sunglasses", value: "sunglasses" },
];

export const products: Product[] = [
  {
    id: "aurora-01",
    slug: "halo-titanium",
    title: "Halo Titanium",
    subtitle: "Ultra-light frame. Quiet confidence.",
    description:
      "A precision-milled titanium frame with soft-edge geometry and a premium lens coating designed for all-day clarity.",
    priceCents: 18900,
    categories: ["premium", "men", "women"],
    colors: [
      { name: "Nebula Black", hex: "#0B0F14" },
      { name: "Arctic Silver", hex: "#C8D0DB" },
    ],
    images: [
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&q=80&auto=format&fit=crop",
    ],
    heroImage: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "aurora-02",
    slug: "prism-carbon",
    title: "Prism Carbon",
    subtitle: "Futuristic lines. Featherweight strength.",
    description:
      "Carbon composite temples with a glass-smooth acetate front. Built for motion, tuned for comfort.",
    priceCents: 15900,
    categories: ["men", "women"],
    colors: [
      { name: "Graphite", hex: "#1B1F2A" },
      { name: "Ice", hex: "#E8EEF7" },
    ],
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563903530908-afdd155d057a?w=800&q=80&auto=format&fit=crop",
    ],
    heroImage: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "aurora-03",
    slug: "solstice-shade",
    title: "Solstice Shade",
    subtitle: "Polarized. Sculpted. Unapologetic.",
    description:
      "A premium sunglasses silhouette with a subtle wrap and gradient lenses for cinematic contrast.",
    priceCents: 13900,
    categories: ["sunglasses", "premium"],
    colors: [
      { name: "Midnight", hex: "#0A0A0D" },
      { name: "Amber", hex: "#C49A5A" },
    ],
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563903530908-afdd155d057a?w=800&q=80&auto=format&fit=crop",
    ],
    heroImage: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "aurora-04",
    slug: "nova-kids",
    title: "Nova Kids",
    subtitle: "Play-proof comfort. All-day fit.",
    description:
      "Flexible hinges, soft-touch finish, and a gentle bridge designed for smaller faces.",
    priceCents: 8900,
    categories: ["kids"],
    colors: [
      { name: "Sky", hex: "#6DB4FF" },
      { name: "Lilac", hex: "#B9A7FF" },
    ],
    images: [
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80&auto=format&fit=crop",
    ],
    heroImage: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "aurora-05",
    slug: "aurora-gold",
    title: "Aurora Gold",
    subtitle: "Luxury redefined. Timeless elegance.",
    description:
      "18k gold-plated titanium frames with handcrafted detailing. For those who appreciate the finer things.",
    priceCents: 24900,
    categories: ["premium", "women", "men"],
    colors: [
      { name: "Rose Gold", hex: "#B76E79" },
      { name: "Yellow Gold", hex: "#FFD700" },
    ],
    images: [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&q=80&auto=format&fit=crop",
    ],
    heroImage: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "aurora-06",
    slug: "stealth-aviator",
    title: "Stealth Aviator",
    subtitle: "Iconic silhouette. Modern edge.",
    description:
      "Classic aviator design meets contemporary materials. Polarized lenses with anti-reflective coating.",
    priceCents: 16900,
    categories: ["sunglasses", "men", "women"],
    colors: [
      { name: "Gunmetal", hex: "#4A4A4A" },
      { name: "Matte Black", hex: "#1A1A1A" },
    ],
    images: [
      "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563903530908-afdd155d057a?w=800&q=80&auto=format&fit=crop",
    ],
    heroImage: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "aurora-07",
    slug: "chrome-cat-eye",
    title: "Chrome Cat-Eye",
    subtitle: "Bold curves. Retro revival.",
    description:
      "Vintage-inspired cat-eye frames with a modern chrome finish. Perfect for making a statement.",
    priceCents: 14900,
    categories: ["women", "premium"],
    colors: [
      { name: "Chrome", hex: "#C0C0C0" },
      { name: "Midnight", hex: "#191970" },
    ],
    images: [
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80&auto=format&fit=crop",
    ],
    heroImage: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "aurora-08",
    slug: "sport-pro",
    title: "Sport Pro",
    subtitle: "Performance driven. Adventure ready.",
    description:
      "Lightweight sports frames with rubberized grip temples. Impact-resistant lenses for active lifestyles.",
    priceCents: 12900,
    categories: ["men", "sunglasses"],
    colors: [
      { name: "Electric Blue", hex: "#00FFFF" },
      { name: "Neon Green", hex: "#39FF14" },
    ],
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563903530908-afdd155d057a?w=800&q=80&auto=format&fit=crop",
    ],
    heroImage: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "aurora-09",
    slug: "bamboo-eco",
    title: "Bamboo Eco",
    subtitle: "Sustainable style. Natural beauty.",
    description:
      "Handcrafted from sustainable bamboo with biodegradable acetate. Eco-conscious luxury at its finest.",
    priceCents: 11900,
    categories: ["men", "women", "premium"],
    colors: [
      { name: "Natural Bamboo", hex: "#D2B48C" },
      { name: "Dark Walnut", hex: "#5D4E37" },
    ],
    images: [
      "https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80&auto=format&fit=crop",
    ],
    heroImage: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "aurora-10",
    slug: "vintage-round",
    title: "Vintage Round",
    subtitle: "Timeless circles. Intellectual charm.",
    description:
      "Classic round frames reminiscent of literary icons. Hand-polished acetate with vintage-inspired details.",
    priceCents: 13900,
    categories: ["men", "women", "premium"],
    colors: [
      { name: "Tortoise Shell", hex: "#8B4513" },
      { name: "Crystal Clear", hex: "#E8E8E8" },
    ],
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=800&q=80&auto=format&fit=crop",
    ],
    heroImage: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80&auto=format&fit=crop",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug) ?? null;
}
