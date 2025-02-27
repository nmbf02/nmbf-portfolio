"use client";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const projects = [
    {
        title: "UIX Portfolio Website",
        description: "Website Landing page for a UI/UX Designer Portfolio",
        image: "/projects/uix-portfolio.png",
        codeLink: "https://github.com/nmbf02/uix-portfolio",
    },
    {
        title: "LOZAN Ecommerce Web",
        description: "Ecommerce website for fashion that sells Arabic abaya",
        image: "/projects/lozan-ecommerce.png",
        codeLink: "https://github.com/nmbf02/lozan-ecommerce",
    },
    {
        title: "HOMEY Furniture App",
        description: "Luxury Furniture app for selling furniture and home decorations",
        image: "/projects/homey-furniture.png",
        codeLink: "https://github.com/nmbf02/homey-furniture",
    },
    {
        title: "CARENT Rental Website",
        description: "Website for renting and selling cars with filters and car catalogs",
        image: "/projects/carent-rental.png",
        codeLink: "https://github.com/nmbf02/carent-rental",
    },
    {
        title: "BurgerZing Food Website",
        description: "Restaurant website menu for ordering food",
        image: "/projects/burgerzing-food.png",
        codeLink: "https://github.com/nmbf02/burgerzing-food",
    },
];

export default function Projects() {
    return (
        <section id="Projects" className="relative py-16 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white">
            {/* Fondo Animado */}
            <div className="absolute inset-0 bg-opacity-40 bg-gradient-to-b from-black via-transparent to-black pointer-events-none"></div>

            <div className="container mx-auto px-8 relative z-10">
                <h2 className="text-4xl font-bold text-center mb-4">My Projects</h2>
                <p className="text-center text-lg text-white mb-8">
                    Some things I've built so far
                </p>

                {/* Carrusel de Proyectos */}
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    modules={[Pagination, Navigation]}
                    className="py-8"
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index} className="flex justify-center">
                            <motion.div
                                whileHover={{ scale: 1.05, rotateX: 10, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }} // Rotación sutil y sombra
                                animate={{ y: [0, -5, 0] }} // Movimiento flotante
                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg max-w-xs text-black dark:text-white"
                            >
                                {/* Efecto Parallax en la Imagen */}
                                <motion.div
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image src={project.image} alt={project.title} width={400} height={250} className="rounded-md" />
                                </motion.div>

                                <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mt-2">{project.description}</p>
                                <a
                                    href={project.codeLink}
                                    target="_blank"
                                    className="mt-4 inline-flex items-center text-purple-600 hover:text-purple-800"
                                >
                                    <FaGithub size={20} className="mr-2" />
                                    View Code
                                </a>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}