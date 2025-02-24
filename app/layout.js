import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Providers from "./providers";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Nathaly Berroa | Portfolio",
    description: "Portfolio built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
            <Navbar />
            <Hero />
            <main className="container mx-auto px-4">{children}</main>
        </Providers>
        </body>
        </html>
    );
}