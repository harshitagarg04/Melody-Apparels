import { CheckCircle2 } from "lucide-react";

const materials = [
    { name: "Premium Cotton", description: "Breathable comfort for all day wear." },
    { name: "Pure Linen", description: "Timeless elegance and natural cooling." },
    { name: "Fine Wool", description: "Sophisticated texture for formal occasions." },
    { name: "Rugged Denim", description: "Durable and stylish for casual looks." },
    { name: "Silk Blends", description: "Luxurious feel for festivals and parties." },
];

export function MaterialsSection() {
    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-900 border-y">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold">Quality Fabrics</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We believe that true style begins with the fabric. That's why we source only the finest materials to ensure your comfort and confidence.
                            </p>
                        </div>
                        <div className="grid gap-4">
                            {materials.map((item) => (
                                <div key={item.name} className="flex items-start gap-4 p-4 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors duration-200">
                                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-lg">{item.name}</h3>
                                        <p className="text-sm text-muted-foreground">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative h-[500px] w-full bg-zinc-200 rounded-2xl overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-800 to-black"></div>
                        {/* Abstract Pattern overlay */}
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>

                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                            <span className="text-5xl md:text-7xl font-black text-white/10 tracking-widest uppercase">Premium</span>
                            <span className="text-5xl md:text-7xl font-black text-white/10 tracking-widest uppercase mt-4">Quality</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
