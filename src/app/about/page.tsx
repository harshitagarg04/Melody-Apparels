import { Card, CardContent } from "@/components/ui/card";
import { GalleryCarousel } from "@/components/home/gallery-carousel";

export default function AboutPage() {
    return (
        <div className="container mx-auto py-12 px-4 md:px-6 space-y-16">
            {/* Hero */}
            <section className="text-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">About Melody Apparels</h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    A legacy of style, trust, and quality in Mandsaur since 1990.
                </p>
            </section>

            {/* Gallery Section */}
            <section className="space-y-6">
                <div className="text-center">
                    <h2 className="text-3xl font-bold">Our Collection In Focus</h2>
                    <p className="text-muted-foreground mt-2">Glimpses of our finest menswear</p>
                </div>
                <GalleryCarousel />
            </section>

            {/* Story */}
            <section className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold">Our Journey</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                        <p>
                            Founded 35 years ago in the heart of Mandsaur, <span className="font-semibold text-foreground">Melody Apparels</span> began with a simple mission: to provide the men of our city with high-quality, ready-made clothing that blends tradition with modern trends.
                        </p>
                        <p>
                            Over the decades, we have grown from a small shop to a trusted landmark in menswear. We pride ourselves on understanding our customers' needs, whether it's for a wedding, a business meeting, or casual wear.
                        </p>
                        <p>
                            Our commitment to quality Clothing, perfect fits, and honest pricing has earned us the loyalty of generations.
                        </p>
                    </div>
                </div>
                <div className="relative aspect-video bg-zinc-200 dark:bg-zinc-800 rounded-xl overflow-hidden flex items-center justify-center border shadow-inner">
                    {/* We could use an image here if we had one of the shop */}
                    <span className="text-muted-foreground font-medium">Serving Mandsaur Since 1990</span>
                </div>
            </section>

            {/* Values */}
            <section>
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold">Our Core Values</h2>
                    <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
                </div>
                <div className="grid sm:grid-cols-3 gap-8">
                    {[
                        { title: "Quality First", desc: "We never compromise on the fabric or stitching of our garments." },
                        { title: "Customer Trust", desc: "Honest dealings and transparent pricing are the foundation of our business." },
                        { title: "Style for All", desc: "From classic formal wear to the latest trends, we have something for every man." }
                    ].map((value) => (
                        <Card key={value.title} className="text-center p-6 bg-secondary/20 border-border/50 hover:bg-secondary/40 transition-colors">
                            <CardContent className="pt-6 space-y-3">
                                <h3 className="font-bold text-xl">{value.title}</h3>
                                <p className="text-muted-foreground">{value.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Location */}
            <section className="space-y-6">
                <div className="text-center">
                    <h2 className="text-3xl font-bold">Visit Us</h2>
                    <p className="text-muted-foreground mt-2">Located in the heart of Mandsaur, Madhya Pradesh</p>
                </div>
                <div className="w-full aspect-[21/9] bg-muted rounded-xl overflow-hidden border shadow-sm">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116748.16912386228!2d75.02985465!3d24.062083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3966779401763e01%3A0xe74e64f7b6070a7d!2sMandsaur%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                </div>
            </section>
        </div>
    );
}
