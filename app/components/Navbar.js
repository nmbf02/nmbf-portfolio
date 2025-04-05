"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, ComputerDesktopIcon } from "@heroicons/react/24/solid";
import { DocumentTextIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isTransparent, setIsTransparent] = useState(true);
    const menuRef = useRef(null);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            const sections = ["About", "Skills", "Projects", "Contact"];
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            const isInSection = sections.some((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const { top, bottom } = element.getBoundingClientRect();
                    return top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2;
                }
                return false;
            });

            setIsTransparent(isInSection);
        };

        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 border-b border-gray-700/20 shadow-md transition-colors duration-300 ${
                isTransparent ? "bg-transparent" : "bg-[rgb(var(--background))]"
            } text-[rgb(var(--foreground))]`}
        >
            <div className="container mx-auto flex justify-between items-center p-4">

                {/* LOGO */}
                <h1 className="text-xl font-bold cursor-pointer" onClick={() => window.location.reload()}>Hi! I'm Nath!
                    ✨</h1>

                {/* MENÚ - DESKTOP */}
                <ul className="hidden md:flex space-x-6">
                    <li><Link href="#About" className="hover:text-gray-400">About</Link></li>
                    <li><Link href="#Skills" className="hover:text-gray-400">Skills</Link></li>
                    <li><Link href="#Projects" className="hover:text-gray-400">Projects</Link></li>
                    <li><Link href="#Contact" className="hover:text-gray-400">Contact</Link></li>
                </ul>

                {/* THEME TOGGLE */}
                <div className="flex items-center space-x-2 bg-gray-800 p-2 rounded-full shadow-md">
                    <a
                        href="https://cv-nathalyberroa.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-gray-700 transition"
                        title="Ver CV"
                    >
                        <DocumentTextIcon className="h-5 w-5 text-blue-400"/>
                    </a>

                    {!mounted ? (
                        <div className="w-10 h-10"/>
                    ) : (
                        <>
                            <button
                                className={`p-2 rounded-full transition ${resolvedTheme === "system" ? "bg-gray-700" : ""}`}
                                onClick={() => setTheme("system")}
                            >
                                <ComputerDesktopIcon className="h-5 w-5 text-gray-400"/>
                            </button>
                            <button
                                className={`p-2 rounded-full transition ${resolvedTheme === "light" ? "bg-gray-700" : ""}`}
                                onClick={() => setTheme("light")}
                            >
                                <SunIcon className="h-5 w-5 text-yellow-400"/>
                            </button>
                            <button
                                className={`p-2 rounded-full transition ${resolvedTheme === "dark" ? "bg-gray-700" : ""}`}
                                onClick={() => setTheme("dark")}
                            >
                                <MoonIcon className="h-5 w-5 text-gray-200"/>
                            </button>
                        </>
                    )}
                </div>

                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </button>
            </div>

            {isOpen && (
                <div
                    ref={menuRef}
                    className="md:hidden bg-black/50 backdrop-blur-lg border-t border-gray-700/20 py-4 absolute top-full left-0 w-full flex flex-col items-center"
                >
                    <Link href="#About" className="block py-2 hover:text-gray-400">About</Link>
                    <Link href="#Skills" className="block py-2 hover:text-gray-400">Skills</Link>
                    <Link href="#Projects" className="block py-2 hover:text-gray-400">Projects</Link>
                    <Link href="#Contact" className="block py-2 hover:text-gray-400">Contact</Link>
                </div>
            )}
        </nav>
    );
}