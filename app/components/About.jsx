"use client";
import { motion } from "framer-motion";
import { useTranslation } from "@/app/hooks/useTranslation";

export default function About() {
    const { t } = useTranslation();
    
    return (
        <section id="About" className="relative w-full py-24 px-8 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900"></div>
            
            {/* Animated shapes */}
            <div className="absolute top-10 right-10 w-72 h-72 bg-purple-300 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-pink-300 dark:bg-pink-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            
            <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10">
                {/* Texto del About */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="md:w-1/2 text-left"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4 px-4 py-2 glass rounded-full text-sm font-semibold text-purple-600 dark:text-purple-400"
                    >
                        ✨ {t("about.title")}
                    </motion.div>
                    <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                        {t("about.title")}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                        {t("about.description")}
                    </p>
                </motion.div>

                {/* Gráfica animada en SVG */}
                <motion.div
                    className="hidden md:block md:w-1/2 relative mt-10 md:mt-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="glass rounded-2xl p-8 glow-hover">
                        <svg
                            className="w-full h-64"
                            viewBox="0 0 500 200"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <motion.path
                                d="M0 150 L100 100 L200 120 L300 80 L400 130 L500 40"
                                stroke="url(#gradient)"
                                strokeWidth="4"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                                viewport={{ once: true }}
                            />
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#9333ea" />
                                    <stop offset="50%" stopColor="#ec4899" />
                                    <stop offset="100%" stopColor="#3b82f6" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}