"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
    {
        title: "Formal Wear",
        image: "/category-formal.png",
        description: "Elegant suits, shirts, and trousers for professional success.",
        href: "/offers",
    },
    {
        title: "Casual Collection",
        image: "/category-casual.png",
        description: "Trendy styles for everyday comfort and confidence.",
        href: "/offers",
    },
    {
        title: "Festive & Wedding",
        image: "/category-festive.png",
        description: "Royal sherwanis and kurtas for your special moments.",
        href: "/offers",
    },
];

export function CategoriesSection() {
    return (
        <section className="py-20 bg-secondary/30">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Our Collections</h2>
                    <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
                        Explore our diverse range of clothing curated for every occasion.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((category) => (
                        <Link key={category.title} href={category.href} className="group block h-full">
                            <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                                <CardContent className="p-0 relative h-[400px]">
                                    <Image
                                        src={category.image}
                                        alt={category.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                                        <h3 className="text-2xl font-bold mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{category.title}</h3>
                                        <p className="text-sm text-gray-200 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                            {category.description}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
