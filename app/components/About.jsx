"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";
import { ShieldCheckIcon, AcademicCapIcon } from "@heroicons/react/24/solid";

export default function About() {
    const { t } = useLanguage();
    const certsList = t.about.certs.split(/\s*[•·]\s*/).filter(Boolean);

    return (
        <section id="About" className="relative w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 overflow-hidden">
            {/* Fondo con patrón sutil */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-950 dark:to-black" />
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />

            <div className="container mx-auto relative z-10 max-w-5xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-10 sm:mb-14 md:mb-16"
                >
                    {t.about.title}
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <div className="p-5 sm:p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500">
                                <ShieldCheckIcon className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                {t.about.expertiseTitle}
                            </h3>
                        </div>
<p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
                        {t.about.p1}
                    </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                            {t.about.p2}
                        </p>
                    </div>
                </motion.div>

                {/* Certificaciones como badges */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl bg-white dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 shadow-lg"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500">
                            <AcademicCapIcon className="h-8 w-8" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                            {t.about.p3}
                        </h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {certsList.map((cert, i) => (
                            <span
                                key={i}
                                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 dark:bg-emerald-500/20 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
                            >
                                {cert.trim()}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
