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
        title: "SOFTWARE-WEB-MIRAGE",
        description: "Web-based dealership system for managing car sales, rentals, and vehicle auctions efficiently and seamlessly.",
        image: "/projects/software-web-mirage.png",
        codeLink: "https://github.com/nmbf02/SOFTWARE-WEB-MIRAGE",
    },

    {
        title: "RoomLogic-HotelManagement",
        description: "Modern hotel management platform offering booking automation, room management, data analytics, and an intuitive user experience.",
        image: "/projects/roomlogic-hotelmanagement.png",
        codeLink: "https://github.com/nmbf02/RoomLogic-HotelManagement",
    },

    {
        title: "RoomLogic (Android App)",
        description: "Android hotel management app with MVVM, Rust-based REST API, push notifications, and dockerized backend on Digital Ocean.",
        image: "/projects/roomlogic.png",
        codeLink: "https://github.com/nmbf02/RoomLogic",
    },

    {
        title: "Podman Load Balancer",
        description: "Project using Podman to run PHP, Java, and Node.js with an Nginx load balancer. Ideal for optimizing scalability and performance.",
        image: "/projects/podman-load-balancer.png",
        codeLink: "https://github.com/nmbf02/Podman-Balanceador-de-Carga",
    },

    {
        title: "Dominguez Auto Painting Website",
        description: "Professional and responsive website development for a painting and maintenance company, showcasing services effectively.",
        image: "/projects/dominguez-auto-pintura.png",
        codeLink: "https://github.com/nmbf02/Dom-nguezAPintura-Web",
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