"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, ComputerDesktopIcon, GlobeAltIcon } from "@heroicons/react/24/solid";
import { DocumentTextIcon } from "@heroicons/react/24/solid";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { useTranslation } from "@/app/hooks/useTranslation";

export default function Navbar() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const { language, changeLanguage } = useLanguage();
    const { t } = useTranslation();
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isTransparent, setIsTransparent] = useState(true);
    const [showLanguageMenu, setShowLanguageMenu] = useState(false);
    const menuRef = useRef(null);
    const languageRef = useRef(null);

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
            if (languageRef.current && !languageRef.current.contains(event.target)) {
                setShowLanguageMenu(false);
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
                <h1 className="text-xl font-bold cursor-pointer" onClick={() => window.location.reload()}>
                    {language === "es" ? "¡Hola! Soy Nath!" : "Hi! I'm Nath!"} ✨
                </h1>

                {/* MENÚ - DESKTOP */}
                <ul className="hidden md:flex space-x-6">
                    <li><Link href="#About" className="hover:text-gray-400">{t("nav.about")}</Link></li>
                    <li><Link href="#Skills" className="hover:text-gray-400">{t("nav.skills")}</Link></li>
                    <li><Link href="#Projects" className="hover:text-gray-400">{t("nav.projects")}</Link></li>
                    <li><Link href="#Contact" className="hover:text-gray-400">{t("nav.contact")}</Link></li>
                </ul>

                {/* LANGUAGE & THEME TOGGLE */}
                <div className="flex items-center space-x-2 bg-gray-800 p-2 rounded-full shadow-md">
                    {/* Language Selector */}
                    <div className="relative" ref={languageRef}>
                        <button
                            onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                            className={`p-2 rounded-full transition hover:bg-gray-700 ${
                                showLanguageMenu ? "bg-gray-700" : ""
                            }`}
                            title={language === "es" ? "Cambiar idioma" : "Change language"}
                        >
                            <GlobeAltIcon className="h-5 w-5 text-blue-400"/>
                        </button>
                        {showLanguageMenu && (
                            <div className="absolute right-0 mt-2 w-36 bg-gray-800/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-700/50 py-1 z-50 overflow-hidden">
                                <button
                                    onClick={() => {
                                        changeLanguage("en");
                                        setShowLanguageMenu(false);
                                    }}
                                    className={`w-full text-left px-4 py-2.5 hover:bg-gray-700/50 transition flex items-center space-x-2 ${
                                        language === "en" ? "bg-gray-700/50 text-blue-400 font-medium" : "text-gray-200"
                                    }`}
                                >
                                    <span className="text-lg">🇺🇸</span>
                                    <span>English</span>
                                </button>
                                <button
                                    onClick={() => {
                                        changeLanguage("es");
                                        setShowLanguageMenu(false);
                                    }}
                                    className={`w-full text-left px-4 py-2.5 hover:bg-gray-700/50 transition flex items-center space-x-2 ${
                                        language === "es" ? "bg-gray-700/50 text-blue-400 font-medium" : "text-gray-200"
                                    }`}
                                >
                                    <span className="text-lg">🇪🇸</span>
                                    <span>Español</span>
                                </button>
                            </div>
                        )}
                    </div>

                    <a
                        href="https://cv-nathalyberroa.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-gray-700 transition"
                        title={language === "es" ? "Ver CV" : "View CV"}
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
                    <Link href="#About" className="block py-2 hover:text-gray-400" onClick={() => setIsOpen(false)}>{t("nav.about")}</Link>
                    <Link href="#Skills" className="block py-2 hover:text-gray-400" onClick={() => setIsOpen(false)}>{t("nav.skills")}</Link>
                    <Link href="#Projects" className="block py-2 hover:text-gray-400" onClick={() => setIsOpen(false)}>{t("nav.projects")}</Link>
                    <Link href="#Contact" className="block py-2 hover:text-gray-400" onClick={() => setIsOpen(false)}>{t("nav.contact")}</Link>
                </div>
            )}
        </nav>
    );
}