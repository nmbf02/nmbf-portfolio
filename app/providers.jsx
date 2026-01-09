"use client";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/app/contexts/LanguageContext";

export default function Providers({ children }) {
    return (
        <LanguageProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                {children}
            </ThemeProvider>
        </LanguageProvider>
    );
}