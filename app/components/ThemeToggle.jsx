"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon, ComputerDesktopIcon } from "@heroicons/react/24/solid";

export default function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="w-10 h-10" />; // Evita la hidratación incorrecta

    return (
        <div className="flex items-center space-x-2 bg-gray-800 p-2 rounded-full shadow-md">
            {/* Modo Sistema */}
            <button
                className={`p-2 rounded-full transition ${resolvedTheme === "system" ? "bg-gray-700" : ""}`}
                onClick={() => setTheme("system")}
            >
                <ComputerDesktopIcon className="h-5 w-5 text-gray-400" />
            </button>

            {/* Modo Claro */}
            <button
                className={`p-2 rounded-full transition ${resolvedTheme === "light" ? "bg-gray-700" : ""}`}
                onClick={() => setTheme("light")}
            >
                <SunIcon className="h-5 w-5 text-yellow-400" />
            </button>

            {/* Modo Oscuro */}
            <button
                className={`p-2 rounded-full transition ${resolvedTheme === "dark" ? "bg-gray-700" : ""}`}
                onClick={() => setTheme("dark")}
            >
                <MoonIcon className="h-5 w-5 text-gray-200" />
            </button>
        </div>
    );
}