"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Clock } from "lucide-react"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    phone: z.string().min(10, {
        message: "Phone number must be at least 10 digits.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
})

export default function ContactPage() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            message: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // In a real app, this would send data to backend
        console.log(values)
        alert("Thank you for your message! We will contact you soon.");
        form.reset();
    }

    return (
        <div className="container mx-auto py-12 px-4 md:px-6">
            <div className="text-center mb-12 space-y-4">
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Get in Touch</h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Have a question or looking for something specific? We are here to help.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <div className="bg-secondary/20 p-8 rounded-xl border space-y-6">
                        <div className="flex items-start gap-4">
                            <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                            <div>
                                <h3 className="font-semibold text-lg">Visit Us</h3>
                                <p className="text-muted-foreground">
                                     NEAR, Kambal Kendra Rd<br />
                                     Daloda Chopati, Nai Abaadi, <br />
                                    Mandsaur, Madhya Pradesh 458001
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Phone className="h-6 w-6 text-primary shrink-0 mt-1" />
                            <div>
                                <h3 className="font-semibold text-lg">Call Us</h3>
                                <p className="text-muted-foreground">
                                    +91 87179 68600
                                </p>
                                <Button variant="link" className="p-0 h-auto text-primary" asChild>
                                    <a href="https://wa.me/918717968600" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
                                </Button>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Clock className="h-6 w-6 text-primary shrink-0 mt-1" />
                            <div>
                                <h3 className="font-semibold text-lg">Opening Hours</h3>
                                <p className="text-muted-foreground">
                                    Mon - Sat: 10:00 AM - 9:00 PM<br />
                                    Sun: 11:00 AM - 8:00 PM
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full aspect-[16/9] bg-muted rounded-xl overflow-hidden border">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116748.16912386228!2d75.02985465!3d24.062083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3966779401763e01%3A0xe74e64f7b6070a7d!2sMandsaur%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                <div className="bg-card border rounded-xl p-8 shadow-sm">
                    <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Your Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone Number</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Your Phone Number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="How can we help you?" className="min-h-[120px]" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full" size="lg">Send Message</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}
