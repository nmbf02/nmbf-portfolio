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
    const [showLanguageMenu, setShowLanguageMenu] = useState(false);
    const menuRef = useRef(null);
    const languageRef = useRef(null);

    useEffect(() => {
        setMounted(true);

        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
            if (languageRef.current && !languageRef.current.contains(event.target)) {
                setShowLanguageMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav
            className="fixed top-0 w-full z-50 bg-transparent text-gray-900 dark:text-white"
        >
            <div className="container mx-auto flex justify-between items-center p-4">

                {/* LOGO */}
                <h1 className="text-xl font-bold cursor-pointer" onClick={() => window.location.reload()}>
                    {language === "es" ? "¡Hola! Soy Nath!" : "Hi! I'm Nath!"} ✨
                </h1>

                {/* MENÚ - DESKTOP */}
                <ul className="hidden md:flex space-x-6">
                    <li><Link href="#About" className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors">{t("nav.about")}</Link></li>
                    <li><Link href="#Skills" className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors">{t("nav.skills")}</Link></li>
                    <li><Link href="#Experience" className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors">{t("nav.experience")}</Link></li>
                    <li><Link href="#Contact" className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors">{t("nav.contact")}</Link></li>
                </ul>

                {/* LANGUAGE & THEME TOGGLE */}
                <div className="flex items-center space-x-2 glass p-2 rounded-full backdrop-blur-xl">
                    {/* Language Selector */}
                    <div className="relative" ref={languageRef}>
                        <button
                            onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                            className={`p-2 rounded-full transition hover:bg-gray-200/50 dark:hover:bg-white/10 ${
                                showLanguageMenu ? "bg-gray-200/50 dark:bg-white/20" : ""
                            }`}
                            title={language === "es" ? "Cambiar idioma" : "Change language"}
                        >
                            <GlobeAltIcon className="h-5 w-5 text-blue-600 dark:text-blue-400"/>
                        </button>
                        {showLanguageMenu && (
                            <div className="absolute right-0 mt-2 w-36 glass backdrop-blur-xl rounded-lg shadow-xl border border-gray-200/50 dark:border-white/20 py-1 z-50 overflow-hidden">
                                <button
                                    onClick={() => {
                                        changeLanguage("en");
                                        setShowLanguageMenu(false);
                                    }}
                                    className={`w-full text-left px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-white/10 transition flex items-center space-x-2 ${
                                        language === "en" ? "bg-gray-100 dark:bg-white/20 text-blue-600 dark:text-blue-400 font-medium" : "text-gray-900 dark:text-white"
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
                                    className={`w-full text-left px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-white/10 transition flex items-center space-x-2 ${
                                        language === "es" ? "bg-gray-100 dark:bg-white/20 text-blue-600 dark:text-blue-400 font-medium" : "text-gray-900 dark:text-white"
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
                        className="p-2 rounded-full hover:bg-gray-200/50 dark:hover:bg-white/10 transition"
                        title={language === "es" ? "Ver CV" : "View CV"}
                    >
                        <DocumentTextIcon className="h-5 w-5 text-blue-600 dark:text-blue-400"/>
                    </a>

                    {!mounted ? (
                        <div className="w-10 h-10"/>
                    ) : (
                        <>
                            <button
                                className={`p-2 rounded-full transition ${resolvedTheme === "system" ? "bg-gray-200/50 dark:bg-white/20" : ""}`}
                                onClick={() => setTheme("system")}
                            >
                                <ComputerDesktopIcon className="h-5 w-5 text-gray-700 dark:text-white"/>
                            </button>
                            <button
                                className={`p-2 rounded-full transition ${resolvedTheme === "light" ? "bg-gray-200/50 dark:bg-white/20" : ""}`}
                                onClick={() => setTheme("light")}
                            >
                                <SunIcon className="h-5 w-5 text-yellow-600 dark:text-yellow-400"/>
                            </button>
                            <button
                                className={`p-2 rounded-full transition ${resolvedTheme === "dark" ? "bg-gray-200/50 dark:bg-white/20" : ""}`}
                                onClick={() => setTheme("dark")}
                            >
                                <MoonIcon className="h-5 w-5 text-gray-700 dark:text-white"/>
                            </button>
                        </>
                    )}
                </div>

                <button className="md:hidden text-gray-900 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </button>
            </div>

            {isOpen && (
                <div
                    ref={menuRef}
                    className="md:hidden glass backdrop-blur-xl border-t border-gray-200/50 dark:border-white/10 py-4 absolute top-full left-0 w-full flex flex-col items-center"
                >
                    <Link href="#About" className="block py-2 hover:text-purple-600 dark:hover:text-purple-300 transition-colors text-gray-900 dark:text-white" onClick={() => setIsOpen(false)}>{t("nav.about")}</Link>
                    <Link href="#Skills" className="block py-2 hover:text-purple-600 dark:hover:text-purple-300 transition-colors text-gray-900 dark:text-white" onClick={() => setIsOpen(false)}>{t("nav.skills")}</Link>
                    <Link href="#Experience" className="block py-2 hover:text-purple-600 dark:hover:text-purple-300 transition-colors text-gray-900 dark:text-white" onClick={() => setIsOpen(false)}>{t("nav.experience")}</Link>
                    <Link href="#Contact" className="block py-2 hover:text-purple-600 dark:hover:text-purple-300 transition-colors text-gray-900 dark:text-white" onClick={() => setIsOpen(false)}>{t("nav.contact")}</Link>
                </div>
            )}
        </nav>
    );
}