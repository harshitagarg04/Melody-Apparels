import { HeroSection } from "@/components/home/hero-section";
import { CategoriesSection } from "@/components/home/categories-section";
import { BrandsSection } from "@/components/home/brands-section";
import { MaterialsSection } from "@/components/home/materials-section";
import { TrustSection } from "@/components/home/trust-section";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <HeroSection />
            <CategoriesSection />
            <MaterialsSection />
            <BrandsSection />
            <TrustSection />
        </div>
    );
}
