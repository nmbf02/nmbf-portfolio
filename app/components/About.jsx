"use client";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="About" className="relative w-full py-20 px-8 bg-gray-100 dark:bg-black">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                {/* Texto del About */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.5 }}
                    className="md:w-1/2 text-left"
                >
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        About me
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        As a developer, my focus is on creating functional and intuitive digital experiences. I specialize in designing and developing interactive interfaces, ensuring each platform is accessible, engaging, and easy to use. I always seek to enhance user experience through optimized solutions tailored to diverse needs in web environments.
                    </p>
                </motion.div>

                {/* Gráfica en SVG */}
                <motion.div
                    className="hidden md:block md:w-1/2 relative mt-10 md:mt-0"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <svg
                        className="w-full h-48"
                        viewBox="0 0 500 200"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 150 L100 100 L200 120 L300 80 L400 130 L500 40"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            className="dark:stroke-white"
                        />
                    </svg>
                </motion.div>
            </div>
        </section>
    );
}