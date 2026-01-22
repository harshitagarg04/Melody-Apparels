import Link from "next/link";
import { Button } from "@/components/ui/button";

export function TrustSection() {
    return (
        <section className="py-24 bg-primary text-primary-foreground text-center">
            <div className="container mx-auto px-4 md:px-6 space-y-8">
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">35+ Years of Trust</h2>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 font-light leading-relaxed">
                    Generations of Mandsaur's gentlemen have trusted Melody Apparels for their wardrobe needs. Experience the legacy of quality.
                </p>
                <div className="pt-8">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6 h-auto" asChild>
                        <Link href="/about">Discover Our Story</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
