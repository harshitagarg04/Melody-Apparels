import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full border-t bg-background">
            <div className="container grid gap-8 px-4 py-10 md:px-6 lg:grid-cols-3">
                <div className="space-y-4">
                    <h3 className="text-lg font-bold">Melody Apparels</h3>
                    <p className="text-sm text-muted-foreground w-[80%]">
                        Serving quality menswear for over 35 years in Mandsaur. Your trusted destination for fashion.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="text-muted-foreground hover:text-primary">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-muted-foreground hover:text-primary">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/offers" className="text-muted-foreground hover:text-primary">
                                    Offers
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold">Contact</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>Mandsaur, Madhya Pradesh</li>
                            <li>+91 98765 43210</li>
                            <li>melody@example.com</li>
                        </ul>
                    </div>
                </div>
                <div className="space-y-4">
                    <h3 className="text-sm font-semibold">Follow Us</h3>
                    <div className="flex space-x-4">
                        <Link href="#" className="text-muted-foreground hover:text-primary">
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary">
                            <Instagram className="h-5 w-5" />
                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary">
                            <Twitter className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="border-t">
                <div className="container flex flex-col items-center justify-between gap-4 py-6 md:h-16 md:flex-row md:py-0">
                    <p className="text-xs text-muted-foreground">
                        &copy; {new Date().getFullYear()} Melody Apparels. All rights reserved.
                    </p>
                    <p className="text-xs text-muted-foreground">
                        Designed for Excellence.
                    </p>
                </div>
            </div>
        </footer>
    );
}
