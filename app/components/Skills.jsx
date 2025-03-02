"use client";
import Image from "next/image";
import { motion } from "framer-motion";

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
    return (
        <section id="Skills" className="relative py-20 px-8 bg-gray-100 dark:bg-black">
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
                    <h2 className="text-3xl font-bold text-black dark:text-white">My Skills</h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                        Technologies I've been working with recently
                    </p>

                    <motion.div
                        className="grid grid-cols-5 sm:grid-cols-5 lg:grid-cols-5 gap-6 mt-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        {topSkills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg">
                                    <Image src={skill.icon} alt={skill.name} width={50} height={50} />
                                </div>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{skill.name}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}