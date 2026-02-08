import { Card } from "@/components/ui/card";

const brands = [
    "Blackberrys", "Zodiac","Z3", "Van Heusen",
    "Levi's", "Mufti", "PEPE", "Peter England",
    "Manyavar", "Park Avenue", "Indian Terrian"
];

export function BrandsSection() {
    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold text-center mb-10">Featured Brands</h2>
                <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                    {brands.map((brand) => (
                        <Card key={brand} className="px-8 py-6 bg-secondary/50 flex items-center justify-center hover:bg-secondary transition-all hover:scale-105 duration-200 cursor-default">
                            <span className="text-lg md:text-xl font-semibold text-muted-foreground hover:text-foreground">{brand}</span>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
