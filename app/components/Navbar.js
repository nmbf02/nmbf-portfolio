"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, ComputerDesktopIcon } from "@heroicons/react/24/solid";
import { DocumentTextIcon } from "@heroicons/react/24/solid";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Navbar() {
    const { lang, setLanguage, t } = useLanguage();
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isTransparent, setIsTransparent] = useState(true);
    const menuRef = useRef(null);
    const menuButtonRef = useRef(null);

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
            const isOutsideMenu = menuRef.current && !menuRef.current.contains(event.target);
            const isMenuButton = menuButtonRef.current && menuButtonRef.current.contains(event.target);
            if (isOutsideMenu && !isMenuButton) {
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
            <div className="container mx-auto flex justify-between items-center px-4 py-3 sm:px-6 md:p-4 gap-2 min-w-0">

                {/* LOGO - responsive text */}
                <h1 
                    className="text-sm sm:text-base md:text-lg lg:text-xl font-bold cursor-pointer leading-tight min-w-0 truncate sm:overflow-visible sm:whitespace-normal max-w-[160px] sm:max-w-none" 
                    onClick={() => window.location.reload()}
                >
                    Angel Manuel Firpo Estrella
                </h1>

                {/* MENÚ - DESKTOP */}
                <ul className="hidden md:flex space-x-6 items-center">
                    <li><Link href="#About" className="hover:text-gray-400">{t.nav.about}</Link></li>
                    <li><Link href="#Skills" className="hover:text-gray-400">{t.nav.skills}</Link></li>
                    <li><Link href="#Projects" className="hover:text-gray-400">{t.nav.projects}</Link></li>
                    <li><Link href="#Contact" className="hover:text-gray-400">{t.nav.contact}</Link></li>
                    <li className="flex items-center gap-1 border-l border-gray-600 pl-4 ml-2">
                        <button onClick={() => setLanguage("en")} className={`px-2 py-0.5 rounded text-sm transition ${lang === "en" ? "bg-emerald-600 text-white" : "hover:bg-gray-700"}`}>EN</button>
                        <button onClick={() => setLanguage("es")} className={`px-2 py-0.5 rounded text-sm transition ${lang === "es" ? "bg-emerald-600 text-white" : "hover:bg-gray-700"}`}>ES</button>
                        <button onClick={() => setLanguage("fr")} className={`px-2 py-0.5 rounded text-sm transition ${lang === "fr" ? "bg-emerald-600 text-white" : "hover:bg-gray-700"}`}>FR</button>
                    </li>
                </ul>

                {/* Actions: LinkedIn + Theme toggle - hide on mobile when menu open */}
                <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                    <a
                        href="https://www.linkedin.com/in/angel-manuel-firpo-estrella-316674116/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-white/10 dark:hover:bg-white/10 transition-colors"
                        title="LinkedIn"
                    >
                        <DocumentTextIcon className="h-5 w-5 text-slate-500 hover:text-emerald-500 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors"/>
                    </a>

                    {!mounted ? (
                        <div className="w-20 h-8 rounded-full bg-slate-300/50 dark:bg-slate-600/50 animate-pulse"/>
                    ) : (
                        <div className="flex items-center p-1 rounded-full bg-slate-200/90 dark:bg-slate-700/90 border border-slate-300/60 dark:border-slate-600/60 shadow-sm">
                            <button
                                className={`p-1.5 rounded-full transition-all duration-200 ${resolvedTheme === "system" ? "bg-emerald-500 text-white shadow-md" : "text-slate-500 dark:text-slate-400 hover:bg-slate-300/50 dark:hover:bg-slate-600/50"}`}
                                onClick={() => setTheme("system")}
                                title="System"
                            >
                                <ComputerDesktopIcon className="h-4 w-4"/>
                            </button>
                            <button
                                className={`p-1.5 rounded-full transition-all duration-200 ${resolvedTheme === "light" ? "bg-amber-400 text-amber-900 shadow-md" : "text-slate-500 dark:text-slate-400 hover:bg-slate-300/50 dark:hover:bg-slate-600/50"}`}
                                onClick={() => setTheme("light")}
                                title="Light"
                            >
                                <SunIcon className="h-4 w-4"/>
                            </button>
                            <button
                                className={`p-1.5 rounded-full transition-all duration-200 ${resolvedTheme === "dark" ? "bg-slate-600 text-slate-100 shadow-md dark:bg-slate-500 dark:text-white" : "text-slate-500 dark:text-slate-400 hover:bg-slate-300/50 dark:hover:bg-slate-600/50"}`}
                                onClick={() => setTheme("dark")}
                                title="Dark"
                            >
                                <MoonIcon className="h-4 w-4"/>
                            </button>
                        </div>
                    )}
                </div>

                <button ref={menuButtonRef} className="md:hidden p-2 -m-2 rounded-lg hover:bg-white/10 transition" onClick={() => setIsOpen(prev => !prev)} aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}>
                    <span className="text-xl">{isOpen ? "✕" : "☰"}</span>
                </button>
            </div>

            {isOpen && (
                <div
                    ref={menuRef}
                    className="md:hidden bg-black/90 dark:bg-black/95 backdrop-blur-lg border-t border-gray-700/20 py-4 px-4 absolute top-full left-0 w-full flex flex-col items-center gap-1 max-h-[85vh] overflow-y-auto"
                >
                    <Link href="#About" onClick={() => setIsOpen(false)} className="block py-2 hover:text-gray-400 w-full text-center">{t.nav.about}</Link>
                    <Link href="#Skills" onClick={() => setIsOpen(false)} className="block py-2 hover:text-gray-400 w-full text-center">{t.nav.skills}</Link>
                    <Link href="#Projects" onClick={() => setIsOpen(false)} className="block py-2 hover:text-gray-400 w-full text-center">{t.nav.projects}</Link>
                    <Link href="#Contact" onClick={() => setIsOpen(false)} className="block py-2 hover:text-gray-400 w-full text-center">{t.nav.contact}</Link>
                    <div className="flex gap-2 pt-4 border-t border-gray-600 mt-2">
                        <button onClick={() => setLanguage("en")} className={`px-3 py-1 rounded text-sm ${lang === "en" ? "bg-emerald-600" : "bg-gray-700"}`}>EN</button>
                        <button onClick={() => setLanguage("es")} className={`px-3 py-1 rounded text-sm ${lang === "es" ? "bg-emerald-600" : "bg-gray-700"}`}>ES</button>
                        <button onClick={() => setLanguage("fr")} className={`px-3 py-1 rounded text-sm ${lang === "fr" ? "bg-emerald-600" : "bg-gray-700"}`}>FR</button>
                    </div>
                </div>
            )}
        </nav>
    );
}