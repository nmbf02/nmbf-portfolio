"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import Statistics from "@/app/components/Statistics";
import { useLanguage } from "@/app/context/LanguageContext";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";

export default function Hero() {
    const { theme, systemTheme } = useTheme();
    const { t } = useLanguage();
    const [mounted, setMounted] = useState(false);
    const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });
    const sectionRef = useRef(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            setCursorPos({ x, y });
        };

        const section = sectionRef.current;
        if (section) {
            section.addEventListener("mousemove", handleMouseMove);
            return () => section.removeEventListener("mousemove", handleMouseMove);
        }
    }, [mounted]);

    if (!mounted) return null;

    const isDark = (theme === "system" ? systemTheme : theme) === "dark";

    return (
        <section ref={sectionRef} className="relative min-h-screen flex flex-col overflow-hidden">
            {/* Background image - cybersecurity hero */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero-cybersecurity.png"
                    alt="Cybersecurity"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                {/* Overlay for text readability - preserves image visibility */}
                <div className={`absolute inset-0 ${
                    isDark 
                        ? "bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950/90" 
                        : "bg-gradient-to-b from-white/85 via-white/70 to-white/90"
                }`} />
                {/* Subtle grid overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                    backgroundImage: `linear-gradient(rgba(16,185,129,0.3) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(16,185,129,0.3) 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                }} />
                {/* Cursor follower - efecto araña/spotlight que sigue el mouse */}
                <div
                    className="absolute inset-0 pointer-events-none overflow-hidden"
                    aria-hidden="true"
                >
                    <div
                        className="absolute w-[min(80vw,500px)] h-[min(80vw,500px)] -translate-x-1/2 -translate-y-1/2 rounded-full"
                        style={{
                            left: `${cursorPos.x}%`,
                            top: `${cursorPos.y}%`,
                            background: isDark
                                ? "radial-gradient(circle, rgba(16,185,129,0.2) 0%, rgba(16,185,129,0.06) 35%, transparent 70%)"
                                : "radial-gradient(circle, rgba(16,185,129,0.15) 0%, rgba(16,185,129,0.05) 35%, transparent 70%)",
                            transition: "left 0.15s ease-out, top 0.15s ease-out",
                        }}
                    />
                    <div
                        className="absolute w-[min(50vw,320px)] h-[min(50vw,320px)] -translate-x-1/2 -translate-y-1/2 rounded-full"
                        style={{
                            left: `${cursorPos.x}%`,
                            top: `${cursorPos.y}%`,
                            background: isDark
                                ? "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 65%)"
                                : "radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 65%)",
                            transition: "left 0.15s ease-out, top 0.15s ease-out",
                        }}
                    />
                </div>
            </div>

            {/* Center content */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 text-center w-full min-h-0">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 
                                   bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                    >
                        <ShieldCheckIcon className="h-5 w-5" />
                        <span className="text-sm font-semibold">{t.hero.badge}</span>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight break-words"
                    >
                        <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
                            Angel Manuel
                        </span>
                        <br />
                        <span className={isDark ? "text-white" : "text-slate-900"}>
                            Firpo Estrella
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed px-2"
                    >
                        {t.hero.subtitle}
                    </motion.p>

                    {/* Social links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-8 flex justify-center gap-4"
                    >
                        <a
                            href="https://www.linkedin.com/in/angel-manuel-firpo-estrella-316674116/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-slate-800/50 dark:bg-white/5 hover:bg-emerald-500/20 border border-slate-700/50 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-all"
                        >
                            <FaLinkedin size={24} />
                        </a>
                        <a
                            href="https://wa.me/18094788030"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-slate-800/50 dark:bg-white/5 hover:bg-emerald-500/20 border border-slate-700/50 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-all"
                        >
                            <FaWhatsapp size={24} />
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom bar */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className={`relative z-10 w-full py-4 sm:py-5 px-4 sm:px-6 flex-shrink-0 ${
                    isDark ? "bg-slate-900/90 border-t border-slate-800 backdrop-blur-sm" : "bg-white/90 border-t border-slate-200 backdrop-blur-sm"
                }`}
            >
                <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 px-2">
                    <Statistics />
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 items-center opacity-80">
                        <Image src="/icons/indotel.svg" alt="INDOTEL" width={40} height={28} className="opacity-90 sm:w-11 sm:h-8" />
                        <Image src="/icons/infotep.svg" alt="INFOTEP" width={40} height={28} className="opacity-90 sm:w-11 sm:h-8" />
                        <Image src="/icons/cisco.svg" alt="CISCO" width={40} height={28} className="opacity-90 sm:w-11 sm:h-8" />
                        <Image src="/icons/itla.svg" alt="ITLA" width={40} height={28} className="opacity-90 sm:w-11 sm:h-8" />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
