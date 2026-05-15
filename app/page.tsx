import HeroBanner from "@/components/sections/HeroBanner";
import FeaturedCategories from "@/components/sections/FeaturedCategories";
import ProductsSection from "@/components/sections/ProductsSection";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <FeaturedCategories />
      <ProductsSection title="Productos Destacados" description="Las mejores Miniaturas para tu ejército" />
    </main>
  );
}
