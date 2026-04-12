"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "@/app/hooks/useTranslation";

/**
 * Skills section.
 *
 * Visual: horizontal "timeline" that auto-scrolls (marquee) and pauses on hover.
 * Implementation notes:
 * - The list is duplicated (`[...topSkills, ...topSkills]`) to create a seamless loop.
 * - Animation is driven by `.skills-marquee-track` + keyframes in `app/globals.css`.
 */
const topSkills = [
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "CSS3", icon: "/icons/css3.svg" },
    { name: "React", icon: "/icons/react.svg" },
    { name: "Next.js", icon: "/icons/nextjs.svg" },
    { name: "Laravel", icon: "/icons/laravel.svg" },
    { name: "MySQL", icon: "/icons/mysql.svg" },
    { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
    { name: "Android Studio", icon: "/icons/androidstudio.svg" },
    { name: "WebStorm", icon: "/icons/webstorm.svg" },
];

export default function Skills() {
    const { t } = useTranslation();
    
    return (
        <section id="Skills" className="relative py-24 px-8 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-mist/20 via-cream to-blush/15 dark:from-forest-deep dark:via-forest dark:to-forest-deep"></div>
            
            {/* Animated shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-mist/70 dark:bg-mist/25 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-clay/60 dark:bg-clay/20 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-4000"></div>

            <div className="w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 container mx-auto"
                >
                    <div className="inline-block mb-4 px-4 py-2 glass rounded-full text-sm font-semibold text-forest dark:text-mist">
                        🛠️ {t("skills.title")}
                    </div>
                    <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-forest via-mist to-clay bg-clip-text text-transparent">
                        {t("skills.title")}
                    </h2>
                    <p className="text-lg md:text-xl text-forest/85 dark:text-cream/85">
                        {t("skills.subtitle")}
                    </p>
                </motion.div>

                {/* Timeline horizontal (estilo Proyectos pero horizontal) */}
                <div className="relative">
                    <div className="absolute left-0 right-0 top-10 h-0.5 bg-gradient-to-r from-blush/50 via-mist/50 to-clay/50 pointer-events-none" />

                    <div className="skills-marquee -mx-8 px-8 pb-6 overflow-hidden">
                        {/* Fade edges */}
                        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-cream via-cream/40 to-transparent dark:from-forest-deep dark:via-forest-deep/40" />
                        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-cream via-cream/40 to-transparent dark:from-forest-deep dark:via-forest-deep/40" />

                        <div className="skills-marquee-track flex gap-6 pr-8">
                            {/* Duplicate the list to keep the marquee continuous. */}
                            {[...topSkills, ...topSkills].map((skill, idx) => (
                                <motion.div
                                    key={`${skill.name}-${idx}`}
                                    initial={{ opacity: 0, y: 18 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.55, delay: (idx % topSkills.length) * 0.04 }}
                                    className="relative w-[220px] sm:w-[240px] group"
                                >
                                    <div className="absolute left-6 top-10 h-4 w-4 rounded-full border-2 border-forest bg-cream dark:bg-forest-deep z-10 transition-colors duration-300 group-hover:bg-clay" />

                                    <div className="mt-16 rounded-2xl bg-white/80 dark:bg-forest-deep/80 border border-forest/12 dark:border-cream/15 p-6 shadow-lg transition-all duration-300 group-hover:border-clay/50 group-hover:shadow-xl group-hover:-translate-y-2">
                                        <div className="flex items-center gap-4">
                                            <div className="glass p-3 rounded-xl">
                                                <Image src={skill.icon} alt={skill.name} width={40} height={40} />
                                            </div>
                                            <div>
                                                <p className="text-sm text-forest/55 dark:text-cream/55">Skill</p>
                                                <p className="text-lg font-bold text-forest dark:text-cream">
                                                    {skill.name}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}