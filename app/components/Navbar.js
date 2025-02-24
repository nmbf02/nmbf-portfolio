"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, ComputerDesktopIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-gray-700/20 shadow-md bg-[rgb(var(--background))] text-[rgb(var(--foreground))] transition-colors duration-300">
            <div className="container mx-auto flex justify-between items-center p-4">

                {/* LOGO */}
                <h1 className="text-xl font-bold">NathalyDev</h1>

                {/* MENÚ - DESKTOP */}
                <ul className="hidden md:flex space-x-6">
                    <li><Link href="#about" className="hover:text-gray-400">About</Link></li>
                    <li><Link href="#skills" className="hover:text-gray-400">Skills</Link></li>
                    <li><Link href="#projects" className="hover:text-gray-400">Projects</Link></li>
                    <li><Link href="#contact" className="hover:text-gray-400">Contact</Link></li>
                </ul>

                {/* THEME TOGGLE */}
                <div className="flex items-center space-x-2 bg-gray-800 p-2 rounded-full shadow-md">
                    {!mounted ? (
                        <div className="w-10 h-10" />
                    ) : (
                        <>
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
                        </>
                    )}
                </div>

                {/* MENÚ MÓVIL */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </button>
            </div>

            {/* MENÚ MÓVIL DESPLEGABLE */}
            {isOpen && (
                <div className="md:hidden bg-[rgb(var(--background))] border-t border-gray-700/20 py-4 absolute top-full left-0 w-full flex flex-col items-center">
                    <Link href="#about" className="block py-2 hover:text-gray-400">About</Link>
                    <Link href="#skills" className="block py-2 hover:text-gray-400">Skills</Link>
                    <Link href="#projects" className="block py-2 hover:text-gray-400">Projects</Link>
                    <Link href="#contact" className="block py-2 hover:text-gray-400">Contact</Link>
                </div>
            )}
        </nav>
    );
}