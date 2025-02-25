"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Hero() {
    const { theme, systemTheme } = useTheme();
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
        <section
            className={`relative flex flex-col justify-center items-start px-8 h-screen transition-all duration-300 ${
                currentTheme === "dark" ? "bg-black text-white" : "bg-white text-black"
            }`}
        >
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">

                {/* Texto principal */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2"
                >
                    <h1 className="text-6xl font-extrabold leading-tight md:text-7xl">
                        <span className={currentTheme === "dark" ? "text-white" : "text-black"}>Hello</span> 👋,
                        <br />
                        <span className="text-purple-500">I'm a Developer</span>
                    </h1>

                    <p className="mt-4 text-xl text-gray-400">
                        I build things for the web and app
                    </p>

                    {/* Redes Sociales */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="mt-6 flex space-x-4"
                    >
                        <a href="https://github.com/nmbf02" target="_blank" className="hover:text-gray-400">
                            <FaGithub size={35} />
                        </a>
                        <a href="https://www.linkedin.com/in/nathalyberroa/" target="_blank" className="hover:text-gray-400">
                            <FaLinkedin size={35} />
                        </a>
                        <a href="https://twitter.com" target="_blank" className="hover:text-gray-400">
                            <FaTwitter size={35} />
                        </a>
                        <a href="https://www.instagram.com/nmbf02?igsh=MXJ0b2FkZmRjNGp2cw==" target="_blank" className="hover:text-gray-400">
                            <FaInstagram size={35} />
                        </a>
                    </motion.div>
                </motion.div>

                {/* Imagen de fondo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="hidden md:block md:w-1/2"
                >
                    <Image src="/images/hero-image.png" alt="Hero Image" width={500} height={500} />
                </motion.div>

            </div>

            {/* Sección inferior con estadísticas y tecnologías */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className={`absolute bottom-0 left-0 w-full py-6 transition-all duration-300 ${
                    currentTheme === "dark" ? "bg-[#1E1E1E]" : "bg-gray-200"
                }`}
            >
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-8">

                    {/* Estadísticas - Alineadas con el texto principal */}
                    <div className="flex space-x-16 pl-0 md:pl-0">
                        {/* Bloque 1 */}
                        <div className="flex items-center text-xl">
                            <span className="text-5xl font-bold text-purple-500">2</span>
                            <p className="ml-3 text-gray-400">Years of Experience</p>
                        </div>

                        {/* Bloque 2 */}
                        <div className="flex items-center text-xl">
                            <span className="text-5xl font-bold text-purple-500">9</span>
                            <p className="ml-3 text-gray-400">Projects Completed</p>
                        </div>
                    </div>

                    {/* Logos de tecnologías */}
                    <div className="flex space-x-8 ml-auto">
                        <Image src="/icons/javascript.svg" alt="JS" width={50} height={50} />
                        <Image src="/icons/html5.svg" alt="HTML5" width={50} height={50} />
                        <Image src="/icons/css3.svg" alt="CSS3" width={50} height={50} />
                        <Image src="/icons/react.svg" alt="React" width={50} height={50} />
                        <Image src="/icons/nodejs.svg" alt="Node.js" width={50} height={50} />
                    </div>

                </div>
            </motion.div>

        </section>
    );
}