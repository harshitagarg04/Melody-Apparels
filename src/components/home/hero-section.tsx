"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
    return (
        <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0 bg-black">
                <Image
                    src="/hero-banner.png"
                    alt="Melody Apparels Hero"
                    fill
                    className="object-cover brightness-[0.45] saturate-[1.6] contrast-[1.15]"
                    priority
                />
                {/* Specific Golden Highlight Pop */}
                <div className="absolute inset-0 bg-[#ffd700]/10 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            </div>
            <div className="relative z-10 text-center space-y-4 px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
                    Melody Apparels
                </h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                    Defining Menswear Excellence for Over 35 Years.
                    Quality, Style, and Tradition in Mandsaur.
                </p>
                <div className="flex justify-center gap-4 pt-4">
                    <Button size="lg" className="bg-white text-black hover:bg-gray-200 border-none" asChild>
                        <Link href="/offers">View Offers</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20 bg-transparent" asChild>
                        <Link href="/contact">Visit Store</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
