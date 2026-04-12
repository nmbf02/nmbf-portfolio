"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Statistics from "@/app/components/Statistics";
import { useTranslation } from "@/app/hooks/useTranslation";

export default function Hero() {
    const { theme, systemTheme } = useTheme();
    const { t } = useTranslation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; // Evita errores de hidratación
    }

    // Verifica el modo actual
    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
        <section className="relative flex flex-col justify-center items-start px-8 h-screen overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 animated-gradient opacity-20 dark:opacity-10"></div>
            
            {/* Animated blob shapes */}
            <div className="absolute top-20 -left-20 w-96 h-96 bg-blush rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute top-40 -right-20 w-96 h-96 bg-mist rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-20 left-40 w-96 h-96 bg-clay rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
                {/* Texto principal */}
                <motion.div
                    initial={{opacity: 0, y: 30, scale: 0.9}}
                    animate={{opacity: 1, y: 0, scale: 1}}
                    transition={{duration: 0.8, ease: "easeOut"}}
                    className="md:w-1/2"
                >
                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.8, delay: 0.2}}
                        className="inline-block mb-4 px-4 py-2 glass rounded-full text-sm font-semibold"
                    >
                        👋 {t("hero.greeting")}
                    </motion.div>
                    
                    <h1 className="text-6xl font-extrabold leading-tight md:text-7xl lg:text-8xl">
                        <motion.span
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.3}}
                            className="block text-gradient bg-clip-text text-transparent bg-gradient-to-r from-forest via-clay to-blush"
                        >
                            {t("hero.name")}
                        </motion.span>
                    </h1>

                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.5}}
                        className="mt-6 text-xl md:text-2xl text-forest/85 dark:text-cream/85 font-medium"
                    >
                        {t("hero.title")}
                    </motion.p>

                    {/* Redes Sociales */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1, delay: 0.7}}
                        className="mt-8 flex space-x-4"
                    >
                        {[
                            { icon: FaGithub, href: "https://github.com/nmbf02", color: "hover:text-forest dark:hover:text-cream" },
                            { icon: FaLinkedin, href: "https://www.linkedin.com/in/nathalyberroa/", color: "hover:text-mist" },
                            { icon: FaTwitter, href: "https://x.com/nmbf02", color: "hover:text-mist" },
                            { icon: FaInstagram, href: "https://www.instagram.com/nmbf02?igsh=MXJ0b2FkZmRjNGp2cw==", color: "hover:text-blush" },
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                className={`p-3 glass rounded-full ${social.color} transition-all duration-300 glow-hover`}
                            >
                                <social.icon size={24}/>
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Imagen de fondo */}
                {/*<motion.div*/}
                {/*    initial={{opacity: 0, scale: 0.8}}*/}
                {/*    animate={{opacity: 1, scale: 1}}*/}
                {/*    transition={{duration: 0.8}}*/}
                {/*    className="hidden md:block md:w-1/2"*/}
                {/*>*/}
                {/*    <Image src="/images/hero-image.png" alt="Hero Image" width={450} height={450}/>*/}
                {/*</motion.div>*/}

            </div>

            {/* Sección inferior con estadísticas y tecnologías */}
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1, delay: 0.9}}
                className="absolute bottom-0 left-0 w-full py-8 glass border-t border-forest/10 dark:border-cream/15"
            >
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-8">
                    {/* Estadísticas */}
                    <Statistics />

                    {/* Logos de tecnologías con animación */}
                    <motion.div
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 1.1}}
                        className="flex space-x-6 ml-auto"
                    >
                        {["javascript", "typescript", "css3", "react", "php"].map((tech, index) => (
                            <motion.div
                                key={tech}
                                whileHover={{ scale: 1.2, y: -5 }}
                                className="p-2 glass rounded-lg"
                            >
                                <Image src={`/icons/${tech}.svg`} alt={tech.toUpperCase()} width={40} height={40} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>

        </section>
    );
}