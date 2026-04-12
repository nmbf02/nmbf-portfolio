"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
    SunIcon,
    MoonIcon,
    ComputerDesktopIcon,
    DocumentTextIcon,
    EllipsisVerticalIcon,
    XMarkIcon,
} from "@heroicons/react/24/solid";
import { useLanguage } from "@/app/contexts/LanguageContext";
import { useTranslation } from "@/app/hooks/useTranslation";

export default function Navbar() {
    const { setTheme, resolvedTheme } = useTheme();
    const { language, changeLanguage } = useLanguage();
    const { t } = useTranslation();
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [bubbleOpen, setBubbleOpen] = useState(false);
    const menuRef = useRef(null);
    const bubbleRef = useRef(null);

    useEffect(() => {
        setMounted(true);

        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
            if (bubbleRef.current && !bubbleRef.current.contains(event.target)) {
                setBubbleOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <nav className="fixed top-0 w-full z-50 bg-transparent text-forest dark:text-cream">
                <div className="relative container mx-auto flex items-center justify-center p-4 min-h-[3.5rem]">
                    <h1
                        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-xl font-bold cursor-pointer"
                        onClick={() => window.location.reload()}
                    >
                        {language === "es" ? "¡Hola! Soy Nath!" : "Hi! I'm Nath!"} ✨
                    </h1>

                    <ul className="hidden md:flex items-center gap-6">
                        <li>
                            <Link href="#About" className="hover:text-clay dark:hover:text-blush transition-colors">
                                {t("nav.about")}
                            </Link>
                        </li>
                        <li>
                            <Link href="#Skills" className="hover:text-clay dark:hover:text-blush transition-colors">
                                {t("nav.skills")}
                            </Link>
                        </li>
                        <li>
                            <Link href="#Experience" className="hover:text-clay dark:hover:text-blush transition-colors">
                                {t("nav.experience")}
                            </Link>
                        </li>
                        <li>
                            <Link href="#Contact" className="hover:text-clay dark:hover:text-blush transition-colors">
                                {t("nav.contact")}
                            </Link>
                        </li>
                    </ul>

                    <button
                        type="button"
                        className="absolute right-4 md:hidden text-forest dark:text-cream text-2xl leading-none"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-label={language === "es" ? "Abrir menú" : "Open menu"}
                    >
                        ☰
                    </button>
                </div>

                {isOpen && (
                    <div
                        ref={menuRef}
                        className="md:hidden glass border-t border-forest/15 dark:border-cream/15 py-4 absolute top-full left-0 w-full flex flex-col items-center"
                    >
                        <Link
                            href="#About"
                            className="block py-2 hover:text-clay dark:hover:text-blush transition-colors text-forest dark:text-cream"
                            onClick={() => setIsOpen(false)}
                        >
                            {t("nav.about")}
                        </Link>
                        <Link
                            href="#Skills"
                            className="block py-2 hover:text-clay dark:hover:text-blush transition-colors text-forest dark:text-cream"
                            onClick={() => setIsOpen(false)}
                        >
                            {t("nav.skills")}
                        </Link>
                        <Link
                            href="#Experience"
                            className="block py-2 hover:text-clay dark:hover:text-blush transition-colors text-forest dark:text-cream"
                            onClick={() => setIsOpen(false)}
                        >
                            {t("nav.experience")}
                        </Link>
                        <Link
                            href="#Contact"
                            className="block py-2 hover:text-clay dark:hover:text-blush transition-colors text-forest dark:text-cream"
                            onClick={() => setIsOpen(false)}
                        >
                            {t("nav.contact")}
                        </Link>
                    </div>
                )}
            </nav>

            {/* Burbuja comprimida abajo a la derecha: solo se abre al pulsar */}
            <div
                ref={bubbleRef}
                className="fixed bottom-5 right-4 sm:right-6 z-[100] flex flex-col items-end gap-2"
                style={{
                    paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))",
                    paddingRight: "max(0rem, env(safe-area-inset-right))",
                }}
            >
                {bubbleOpen && (
                    <div
                        id="nav-quick-actions"
                        className="glass rounded-2xl shadow-lg border border-forest/15 dark:border-cream/15 py-2 px-2.5 flex flex-col gap-2 min-w-[10.5rem] origin-bottom-right transition-opacity duration-150"
                        role="dialog"
                        aria-label={language === "es" ? "Idioma, CV y tema" : "Language, CV and theme"}
                    >
                        <p className="text-[10px] uppercase tracking-wider text-forest/55 dark:text-cream/55 px-0.5">
                            {language === "es" ? "Idioma" : "Language"}
                        </p>
                        <div className="flex rounded-lg overflow-hidden border border-forest/15 dark:border-cream/15">
                            <button
                                type="button"
                                onClick={() => changeLanguage("en")}
                                className={`flex-1 py-1.5 text-xs font-medium transition ${
                                    language === "en"
                                        ? "bg-forest text-cream dark:bg-blush/90 dark:text-forest"
                                        : "bg-cream-soft/50 dark:bg-white/5 text-forest dark:text-cream hover:bg-cream-soft dark:hover:bg-white/10"
                                }`}
                            >
                                EN
                            </button>
                            <button
                                type="button"
                                onClick={() => changeLanguage("es")}
                                className={`flex-1 py-1.5 text-xs font-medium transition border-l border-forest/15 dark:border-cream/15 ${
                                    language === "es"
                                        ? "bg-forest text-cream dark:bg-blush/90 dark:text-forest"
                                        : "bg-cream-soft/50 dark:bg-white/5 text-forest dark:text-cream hover:bg-cream-soft dark:hover:bg-white/10"
                                }`}
                            >
                                ES
                            </button>
                        </div>

                        <a
                            href="https://cv-nathalyberroa.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 py-1.5 px-2 rounded-lg text-xs font-semibold bg-forest/10 dark:bg-cream/10 text-forest dark:text-cream hover:bg-forest/15 dark:hover:bg-cream/15 border border-forest/10 dark:border-cream/10 transition"
                            onClick={() => setBubbleOpen(false)}
                        >
                            <DocumentTextIcon className="h-4 w-4 shrink-0" />
                            {language === "es" ? "Ver CV" : "CV"}
                        </a>

                        <p className="text-[10px] uppercase tracking-wider text-forest/55 dark:text-cream/55 px-0.5 pt-0.5">
                            {language === "es" ? "Tema" : "Theme"}
                        </p>
                        <div className="flex items-center justify-center gap-0.5">
                            {!mounted ? (
                                <div className="h-9 w-full" aria-hidden />
                            ) : (
                                <>
                                    <button
                                        type="button"
                                        className={`p-1.5 rounded-lg transition ${
                                            resolvedTheme === "system"
                                                ? "bg-forest/15 dark:bg-cream/15 ring-1 ring-forest/25 dark:ring-cream/25"
                                                : "hover:bg-cream-soft/80 dark:hover:bg-white/10"
                                        }`}
                                        onClick={() => setTheme("system")}
                                        title={language === "es" ? "Sistema" : "System"}
                                    >
                                        <ComputerDesktopIcon className="h-4 w-4 text-forest dark:text-cream" />
                                    </button>
                                    <button
                                        type="button"
                                        className={`p-1.5 rounded-lg transition ${
                                            resolvedTheme === "light"
                                                ? "bg-forest/15 dark:bg-cream/15 ring-1 ring-forest/25 dark:ring-cream/25"
                                                : "hover:bg-cream-soft/80 dark:hover:bg-white/10"
                                        }`}
                                        onClick={() => setTheme("light")}
                                        title={language === "es" ? "Claro" : "Light"}
                                    >
                                        <SunIcon className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                                    </button>
                                    <button
                                        type="button"
                                        className={`p-1.5 rounded-lg transition ${
                                            resolvedTheme === "dark"
                                                ? "bg-forest/15 dark:bg-cream/15 ring-1 ring-forest/25 dark:ring-cream/25"
                                                : "hover:bg-cream-soft/80 dark:hover:bg-white/10"
                                        }`}
                                        onClick={() => setTheme("dark")}
                                        title={language === "es" ? "Oscuro" : "Dark"}
                                    >
                                        <MoonIcon className="h-4 w-4 text-forest dark:text-cream" />
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                )}

                <button
                    type="button"
                    onClick={() => setBubbleOpen((o) => !o)}
                    className={`h-11 w-11 shrink-0 rounded-full glass shadow-lg border flex items-center justify-center transition ${
                        bubbleOpen
                            ? "border-clay/50 dark:border-blush/40"
                            : "border-forest/15 dark:border-cream/15 hover:border-forest/30 dark:hover:border-cream/25"
                    }`}
                    aria-expanded={bubbleOpen}
                    aria-controls="nav-quick-actions"
                    title={language === "es" ? "Idioma, CV y tema" : "Language, CV & theme"}
                >
                    {bubbleOpen ? (
                        <XMarkIcon className="h-5 w-5 text-forest dark:text-cream" />
                    ) : (
                        <EllipsisVerticalIcon className="h-5 w-5 text-forest dark:text-mist" />
                    )}
                </button>
            </div>
        </>
    );
}
