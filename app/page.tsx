import { LandingHero } from "@/components/sections/LandingHero";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      <LandingHero />
      <FeaturedProducts />
      <WhyChooseUs />
    </>
  );
}