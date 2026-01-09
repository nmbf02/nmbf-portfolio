"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "@/app/hooks/useTranslation";

const topSkills = [
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "HTML5", icon: "/icons/html5.svg" },
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
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900/20 dark:to-gray-900"></div>
            
            {/* Animated shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
                <div className="w-full md:w-1/2 mb-12 md:mb-0">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block mb-4 px-4 py-2 glass rounded-full text-sm font-semibold text-blue-600 dark:text-blue-400">
                            🛠️ {t("skills.title")}
                        </div>
                        <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            {t("skills.title")}
                        </h2>
                        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
                            {t("skills.subtitle")}
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-5 sm:grid-cols-5 lg:grid-cols-5 gap-6 mt-10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { 
                                opacity: 1, 
                                y: 0,
                                transition: {
                                    staggerChildren: 0.1
                                }
                            }
                        }}
                    >
                        {topSkills.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, scale: 0 },
                                    visible: { opacity: 1, scale: 1 }
                                }}
                                className="flex flex-col items-center group"
                                whileHover={{ scale: 1.15, y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <motion.div 
                                    className="glass p-4 rounded-xl glow-hover"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Image src={skill.icon} alt={skill.name} width={50} height={50} className="transition-transform duration-300" />
                                </motion.div>
                                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                    {skill.name}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}