"use client";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "@/app/hooks/useTranslation";

export default function Projects() {
    const { t } = useTranslation();
    
    const projects = [
        {
            key: "isa",
            image: "/projects/universidad-isa.png",
            codeLink: "https://nmbf02-universidad-isa.vercel.app/",
            linkText: "visitWebsite",
            linkIcon: "external",
        },
        {
            key: "dominguez",
            image: "/projects/dominguez-auto-pintura.png",
            codeLink: "https://github.com/nmbf02/Dom-nguezAPintura-Web",
        },
        {
            key: "equinox",
            image: "/projects/equinox-insight-hub.png",
            isPrivate: true,
        },
        {
            key: "smartFarming",
            image: "/projects/smart-farming.png",
            codeLink: "https://smart-farming-platform.netlify.app/",
            linkText: "visitWebsite",
            linkIcon: "external",
        },
        {
            key: "mirage",
            image: "/projects/software-web-mirage.png",
            codeLink: "https://github.com/nmbf02/SOFTWARE-WEB-MIRAGE",
        },
        {
            key: "roomlogic",
            image: "/projects/roomlogic.png",
            codeLink: "https://github.com/nmbf02/RoomLogic",
        },
    ];
    
    return (
        <section id="Projects" className="relative py-24 px-4 md:px-8 overflow-hidden min-h-screen">
            {/* Light mode background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100 dark:hidden"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.2),transparent_50%)] dark:hidden"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.15),transparent_50%)] dark:hidden"></div>
            
            {/* Dark mode background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 hidden dark:block"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.4),transparent_50%)] hidden dark:block"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.3),transparent_50%)] hidden dark:block"></div>
            
            {/* Light mode animated shapes */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300/30 rounded-full filter blur-3xl animate-blob dark:hidden"></div>
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-300/30 rounded-full filter blur-3xl animate-blob animation-delay-2000 dark:hidden"></div>
            <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-indigo-300/30 rounded-full filter blur-3xl animate-blob animation-delay-4000 dark:hidden"></div>
            
            {/* Dark mode animated shapes */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/40 rounded-full filter blur-3xl animate-blob hidden dark:block"></div>
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-600/40 rounded-full filter blur-3xl animate-blob animation-delay-2000 hidden dark:block"></div>
            <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-indigo-600/40 rounded-full filter blur-3xl animate-blob animation-delay-4000 hidden dark:block"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block mb-6 px-6 py-3 glass rounded-full text-sm font-semibold text-purple-600 dark:text-purple-300"
                    >
                        ✨ {t("projects.title")}
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 dark:from-purple-300 dark:via-pink-300 dark:to-indigo-300 bg-clip-text text-transparent drop-shadow-lg">
                        {t("projects.title")}
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-800 dark:text-white/90 max-w-2xl mx-auto">
                        {t("projects.subtitle")}
                    </p>
                </motion.div>

                {/* Grid de Proyectos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ 
                                duration: 0.5, 
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 100
                            }}
                            whileHover={{ y: -15, scale: 1.02 }}
                            className="group relative"
                        >
                            {/* Card Container */}
                            <div className="relative h-full bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border-2 border-purple-200/50 dark:border-white/20 shadow-2xl dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] hover:shadow-[0_25px_50px_-12px_rgba(147,51,234,0.3)] dark:hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] hover:border-purple-500 dark:hover:border-purple-400/50 transition-all duration-300">
                                {/* Animated gradient border */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-indigo-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                                
                                {/* Content */}
                                <div className="relative z-10 h-full flex flex-col">
                                    {/* Image Section */}
                                    <div className="relative h-64 overflow-hidden">
                                        <motion.div
                                            whileHover={{ scale: 1.15 }}
                                            transition={{ duration: 0.5 }}
                                            className="absolute inset-0"
                                        >
                                            <Image 
                                                src={project.image} 
                                                alt={t(`projects.items.${project.key}.title`)} 
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        </motion.div>
                                        
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                                        
                                        {/* Title Overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">
                                                {t(`projects.items.${project.key}.title`)}
                                            </h3>
                                        </div>
                                        
                                        {/* Hover Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="flex-1 p-6 flex flex-col bg-white dark:bg-gray-900">
                                        <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base mb-6 leading-relaxed flex-1">
                                            {t(`projects.items.${project.key}.description`)}
                                        </p>
                                        
                                        {/* Action Button */}
                                        {project.isPrivate ? (
                                            <div className="mt-auto px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-xl text-center border border-gray-300 dark:border-gray-700">
                                                <span className="text-gray-600 dark:text-gray-400 text-sm italic font-medium">
                                                    {t("projects.privateProject")}
                                                </span>
                                            </div>
                                        ) : (
                                            <motion.a
                                                href={project.codeLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="mt-auto inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white rounded-xl font-bold hover:from-purple-500 hover:via-pink-500 hover:to-indigo-500 transition-all shadow-lg hover:shadow-xl group/btn"
                                            >
                                                {project.linkIcon === "external" ? (
                                                    <FaExternalLinkAlt size={18} className="mr-2 group-hover/btn:translate-x-1 transition-transform" />
                                                ) : (
                                                    <FaGithub size={18} className="mr-2 group-hover/btn:rotate-12 transition-transform" />
                                                )}
                                                {project.linkText ? t(`projects.${project.linkText}`) : t("projects.viewCode")}
                                            </motion.a>
                                        )}
                                    </div>
                                </div>

                                {/* Decorative corner */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}