"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const galleryImages = [

    { src: "/gallery/IMG-20200202-WA0001_1.jpg.jpeg", alt: "Collection Item 4" },
    { src: "/gallery/IMG-20200202-WA0003_1.jpg.jpeg", alt: "Collection Item 5" },
    { src: "/gallery/IMG-20200202-WA0006_1.jpg.jpeg", alt: "Collection Item 6" },
    { src: "/gallery/IMG-20200202-WA0007_1.jpg.jpeg", alt: "Collection Item 7" },
    { src: "/gallery/IMG-20200202-WA0009_1.jpg.jpeg", alt: "Collection Item 8" },
    { src: "/gallery/IMG-20200202-WA0011_1.jpg.jpeg", alt: "Collection Item 9" },
    { src: "/gallery/20200103_220000_1.jpg.jpeg", alt: "Collection Item 1" },
    { src: "/gallery/20200606_185948.jpg.jpeg", alt: "Collection Item 2" },
    { src: "/gallery/20200606_190101.jpg.jpeg", alt: "Collection Item 3" },
];

export function GalleryCarousel() {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
    );

    return (
        <section className="py-24 bg-muted/10 text-foreground overflow-hidden">
            <div className="w-full px-4 md:px-12 mx-auto">
                <div className="max-w-[1400px] mx-auto">
                    <Carousel
                        plugins={[plugin.current]}
                        opts={{
                            align: "center",
                            loop: true,
                        }}
                        className="w-full relative"
                    >
                        <CarouselContent className="-ml-4 md:-ml-12">
                            {galleryImages.map((image, index) => (
                                <CarouselItem key={index} className="pl-4 md:pl-12 basis-full">
                                    <div className="relative group">
                                        <Card className="border-none bg-transparent shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-[3rem] overflow-hidden">
                                            <CardContent className="p-0 aspect-[16/9] md:aspect-[21/9] relative">
                                                <Image
                                                    src={image.src}
                                                    alt={image.alt}
                                                    fill
                                                    className="object-cover rounded-[3rem] transition-transform duration-1000 group-hover:scale-[1.03]"
                                                    sizes="(max-width: 1400px) 100vw, 1400px"
                                                    priority={index === 0}
                                                />
                                                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500 rounded-[3rem]" />
                                            </CardContent>
                                        </Card>

                                        {/* Optional caption if needed later, but keeping it clean for now */}
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Progress Indicators */}
                        <div className="flex items-center justify-center gap-3 mt-12">
                            {galleryImages.map((_, i) => (
                                <div key={i} className="h-1.5 w-6 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors cursor-pointer" />
                            ))}
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
