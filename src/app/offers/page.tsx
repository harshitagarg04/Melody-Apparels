import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Tag } from "lucide-react";

export default function OffersPage() {
    const offers = [
        {
            title: "Wedding Season Special",
            description: "Get flat 20% off on all Sherwani and Kurta sets.",
            code: "WEDDING20",
            type: "Seasonal",
            validUntil: "March 31, 2026"
        },
        {
            title: "Buy 2 Get 1 Free",
            description: "On select Formal Shirts. Mix and match your favorites.",
            code: "FORMAL3",
            type: "Clearance",
            validUntil: "While stocks last"
        },
        {
            title: "New Arrival Discount",
            description: "10% Introductory discount on our new Winter Collection.",
            code: "WINTER10",
            type: "New",
            validUntil: "Feb 15, 2026"
        }
    ];

    return (
        <div className="container py-12 px-4 md:px-6">
            <div className="text-center mb-12 space-y-4">
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Exclusive Offers</h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Save on premium styles. Limited time deals just for you.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {offers.map((offer) => (
                    <Card key={offer.title} className="flex flex-col border-dashed border-2 hover:border-primary transition-colors transform hover:-translate-y-1 duration-300">
                        <CardHeader>
                            <div className="flex justify-between items-start mb-2">
                                <Badge variant={offer.type === 'Clearance' ? 'destructive' : 'secondary'}>{offer.type}</Badge>
                                <Tag className="h-5 w-5 text-muted-foreground" />
                            </div>
                            <CardTitle className="text-2xl">{offer.title}</CardTitle>
                            <CardDescription className="text-base mt-2">
                                {offer.description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1 space-y-4">
                            <div className="bg-secondary/50 p-4 rounded-lg text-center border">
                                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Use Code at Store</p>
                                <p className="font-mono text-xl font-bold tracking-widest text-primary">{offer.code}</p>
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col items-start gap-2 pt-0">
                            <p className="text-xs text-muted-foreground">Valid until: {offer.validUntil}</p>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            <div className="mt-16 text-center bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/10">
                <h2 className="text-2xl font-bold mb-4">Want to know more?</h2>
                <p className="text-muted-foreground mb-6">Visit our store to check out the latest stock and daily deals not listed here.</p>
                <Button size="lg" asChild>
                    <Link href="/contact">Locate Store</Link>
                </Button>
            </div>
        </div>
    );
}
