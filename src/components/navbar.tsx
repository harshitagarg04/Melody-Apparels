"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShoppingBag } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const routes = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/offers", label: "Offers" },
    { href: "/contact", label: "Contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2">
                    <ShoppingBag className="h-6 w-6" />
                    <span className="text-xl font-bold tracking-tight">Melody Apparels</span>
                </Link>
                <nav className="hidden md:flex gap-6">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                pathname === route.href
                                    ? "text-primary"
                                    : "text-muted-foreground"
                            )}
                        >
                            {route.label}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-4">
                    <Button variant="default" size="sm" className="hidden md:flex" asChild>
                        <Link href="/contact">Visit Store</Link>
                    </Button>
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                            >
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="pl-1 pr-0">
                            <div className="px-7">
                                <Link
                                    href="/"
                                    className="flex items-center"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <ShoppingBag className="mr-2 h-4 w-4" />
                                    <span className="font-bold">Melody Apparels</span>
                                </Link>
                            </div>
                            <div className="mt-8 flex flex-col gap-4 px-7">
                                {routes.map((route) => (
                                    <Link
                                        key={route.href}
                                        href={route.href}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "text-sm font-medium transition-colors hover:text-primary",
                                            pathname === route.href
                                                ? "text-primary"
                                                : "text-muted-foreground"
                                        )}
                                    >
                                        {route.label}
                                    </Link>
                                ))}
                                <Button className="mt-4" asChild onClick={() => setIsOpen(false)}>
                                    <Link href="/contact">Visit Store</Link>
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
