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
        <div className="flex items-center p-1 rounded-full bg-slate-200/90 dark:bg-slate-700/90 border border-slate-300/60 dark:border-slate-600/60 shadow-sm">
            <button
                className={`p-1.5 rounded-full transition-all duration-200 ${resolvedTheme === "system" ? "bg-emerald-500 text-white shadow-md" : "text-slate-500 dark:text-slate-400 hover:bg-slate-300/50 dark:hover:bg-slate-600/50"}`}
                onClick={() => setTheme("system")}
                title="System"
            >
                <ComputerDesktopIcon className="h-4 w-4" />
            </button>
            <button
                className={`p-1.5 rounded-full transition-all duration-200 ${resolvedTheme === "light" ? "bg-amber-400 text-amber-900 shadow-md" : "text-slate-500 dark:text-slate-400 hover:bg-slate-300/50 dark:hover:bg-slate-600/50"}`}
                onClick={() => setTheme("light")}
                title="Light"
            >
                <SunIcon className="h-4 w-4" />
            </button>
            <button
                className={`p-1.5 rounded-full transition-all duration-200 ${resolvedTheme === "dark" ? "bg-slate-600 text-slate-100 shadow-md dark:bg-slate-500 dark:text-white" : "text-slate-500 dark:text-slate-400 hover:bg-slate-300/50 dark:hover:bg-slate-600/50"}`}
                onClick={() => setTheme("dark")}
                title="Dark"
            >
                <MoonIcon className="h-4 w-4" />
            </button>
        </div>
    );
}