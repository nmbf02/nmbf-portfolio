"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, A11y, EffectFade } from "swiper/modules";
import { useLanguage } from "@/app/context/LanguageContext";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function Projects() {
    const { t } = useLanguage();

    return (
        <section id="Projects" className="relative min-h-screen bg-gray-50 dark:bg-slate-950 overflow-hidden">
            {/* Título fijo sobre el slider */}
            <div className="absolute top-0 left-0 right-0 z-20 pt-8 sm:pt-10 md:pt-12 px-4 sm:px-6 text-center pointer-events-none">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    {t.projects.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mt-1 sm:mt-2 max-w-2xl mx-auto">
                    {t.projects.subtitle}
                </p>
            </div>

            <Swiper
                modules={[Pagination, Navigation, Autoplay, A11y, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={600}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 4500, disableOnInteraction: false }}
                pagination={{ clickable: true, dynamicBullets: true }}
                navigation
                a11y={{ prevSlideMessage: "Proyecto anterior", nextSlideMessage: "Proyecto siguiente" }}
                className="!absolute !inset-0 !w-full !h-full projects-slider !pt-24 sm:!pt-28 md:!pt-32 !pb-0"
            >
                {t.projects.items.map((project, index) => (
                    <SwiperSlide key={index} className="!h-full">
                        <article className="relative w-full h-full">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                                sizes="100vw"
                                priority={index === 0}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                            {/* Texto + espacio para paginación integrados abajo */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 lg:p-12 pb-14 text-white">
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl">
                                    {project.desc}
                                </p>
                            </div>
                        </article>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
