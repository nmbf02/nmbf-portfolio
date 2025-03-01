"use client";
import Image from "next/image";

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

                {/* Gráfica SVG a la izquierda */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 150 L50 120 L90 140 L130 100 L170 130 L210 80 L250 110 L290 50" stroke="white" strokeWidth="2" fill="none"/>
                    </svg>
                </div>

                {/* Sección de Skills */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl font-bold text-black dark:text-white">My Skills</h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                        Technologies I've been working with recently
                    </p>

                    <div className="grid grid-cols-5 sm:grid-cols-5 lg:grid-cols-5 gap-6 mt-8">
                        {topSkills.map((skill, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg">
                                    <Image src={skill.icon} alt={skill.name} width={50} height={50} />
                                </div>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}