import { notFound } from "next/navigation";

import { ProductDetail } from "@/components/shop/ProductDetail";
import { getProductBySlug } from "@/lib/products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const product = getProductBySlug(handle);
  if (!product) return notFound();

  return <ProductDetail product={product} />;
}
