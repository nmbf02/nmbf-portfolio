"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";

const certifications = [
    { name: "INDOTEL", icon: "/icons/indotel.svg" },
    { name: "INFOTEP", icon: "/icons/infotep.svg" },
    { name: "CISCO", icon: "/icons/cisco.svg" },
    { name: "ITLA", icon: "/icons/itla.svg" },
];

export default function Skills() {
    const { t } = useLanguage();
    return (
        <section id="Skills" className="relative py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-gray-100 dark:bg-black overflow-hidden">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">

                <div className="hidden md:block md:w-1/2 relative mt-10 md:mt-0">
                    <svg width="500" height="400" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 350 L100 300 L200 320 L300 250 L400 290 L500 200"
                              stroke="white"
                              strokeWidth="3"
                              fill="none" />
                    </svg>
                </div>

                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white">{t.skills.title}</h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm sm:text-base">
                        {t.skills.subtitle}
                    </p>

                    <motion.div
                        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 sm:mt-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="bg-gray-200 dark:bg-gray-800 p-3 sm:p-4 rounded-lg">
                                    <Image src={cert.icon} alt={cert.name} width={80} height={50} className="object-contain max-w-full h-auto" />
                                </div>
                                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mt-2">{cert.name}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}