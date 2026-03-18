import { Container } from "@/components/layout/Container";
import { ProductCarousel } from "@/components/shop/ProductCarousel";

export function FeaturedCarousel() {
  return (
    <section className="pb-16">
      <Container>
        <ProductCarousel title="Premium frames, horizontally." />
      </Container>
    </section>
  );
}
