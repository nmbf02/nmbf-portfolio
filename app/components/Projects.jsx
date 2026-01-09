"use client";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useTranslation } from "@/app/hooks/useTranslation";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
        <section id="Projects" className="relative py-24 px-8 overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600"></div>
            <div className="absolute inset-0 bg-black/40"></div>
            
            {/* Animated shapes */}
            <div className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-blob"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>

            <div className="container mx-auto px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">
                        {t("projects.title")}
                    </h2>
                    <p className="text-xl text-white/90">
                        {t("projects.subtitle")}
                    </p>
                </motion.div>

                {/* Carrusel de Proyectos */}
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="py-8"
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index} className="flex justify-center">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="glass p-6 rounded-2xl backdrop-blur-xl max-w-xs text-white overflow-hidden group glow-hover"
                            >
                                {/* Gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                {/* Image container */}
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative overflow-hidden rounded-xl mb-4"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                                    <Image 
                                        src={project.image} 
                                        alt={t(`projects.items.${project.key}.title`)} 
                                        width={400} 
                                        height={250} 
                                        className="rounded-xl w-full h-auto transition-transform duration-300" 
                                    />
                                </motion.div>

                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold mt-2 mb-2 text-white">{t(`projects.items.${project.key}.title`)}</h3>
                                    <p className="text-white/80 text-sm mb-4 leading-relaxed">{t(`projects.items.${project.key}.description`)}</p>
                                    {project.isPrivate ? (
                                        <div className="mt-4 text-sm text-white/60 italic px-3 py-2 glass rounded-lg">
                                            {t("projects.privateProject")}
                                        </div>
                                    ) : (
                                        <motion.a
                                            href={project.codeLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="mt-4 inline-flex items-center px-4 py-2 glass rounded-lg text-white hover:text-purple-300 transition-colors"
                                        >
                                            {project.linkIcon === "external" ? (
                                                <FaExternalLinkAlt size={18} className="mr-2" />
                                            ) : (
                                                <FaGithub size={18} className="mr-2" />
                                            )}
                                            {project.linkText ? t(`projects.${project.linkText}`) : t("projects.viewCode")}
                                        </motion.a>
                                    )}
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}