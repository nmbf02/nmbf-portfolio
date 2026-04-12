"use client";
import { useTranslation } from "@/app/hooks/useTranslation";
import { useEffect } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

/**
 * Experience section.
 *
 * This section is used as a vertical timeline to showcase PROJECTS (not jobs).
 * Cards use a simple IntersectionObserver reveal animation (CSS class toggles)
 * to keep the same feel as the original "Trayectoria" timeline.
 */
export default function Experience() {
    const { t } = useTranslation();

    useEffect(() => {
        const reveals = document.querySelectorAll(".experience-reveal");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove("opacity-0", "translate-y-6");
                        entry.target.classList.add("opacity-100", "translate-y-0");
                    }
                });
            },
            { threshold: 0.15 }
        );
        reveals.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    // Proyectos renderizados en el timeline de Trayectoria
    const projects = [
        {
            key: "cjtaxes",
            image: "/projects/cjtaxes.png",
            codeLink: "https://cjtaxes.netlify.app/",
            linkText: "visitWebsite",
            linkIcon: "external",
        },
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
        <section
            id="Experience"
            className="relative py-24 px-8 overflow-visible scroll-mt-28 bg-gradient-to-br from-cream via-mist/15 to-cream-soft dark:from-forest-deep dark:via-forest dark:to-forest-deep"
        >
            <div className="container mx-auto max-w-6xl">
                {/* Todo en flujo normal: al hacer scroll (subir o bajar) toda la sección se mueve. Sin sticky, sin fixed. */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12 xl:gap-16">
                    {/* Columna izquierda: título — sticky dentro de la sección (desktop) */}
                    <div className="lg:w-[340px] xl:w-[380px] shrink-0 mb-12 lg:mb-0 lg:pt-1 lg:sticky lg:top-28 self-start">
                        <p className="text-forest/70 dark:text-cream/70 text-lg mb-4">
                            {t("projects.subtitle")}
                        </p>
                        <h2
                            id="experience-heading"
                            className="text-4xl md:text-5xl font-extrabold leading-tight"
                        >
                            <span className="text-forest dark:text-cream block">
                                {t("experience.titlePrefix")}
                            </span>
                            <span className="bg-gradient-to-r from-clay to-blush bg-clip-text text-transparent">
                                {t("experience.titleHighlight")}
                            </span>
                        </h2>
                    </div>

                    {/* Columna derecha: timeline */}
                    <div className="relative flex-1 min-w-0">
                        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-mist/60 via-forest/40 to-mist/60 pointer-events-none" />

                        <div className="space-y-12 md:space-y-16">
                            {projects.map((project) => (
                                <div
                                    key={project.key}
                                    className="experience-reveal group relative flex items-start opacity-0 translate-y-6 transition-all duration-700 hover:-translate-y-2"
                                >
                                    <div className="absolute left-0 w-4 h-4 rounded-full border-2 border-forest bg-cream dark:bg-forest-deep -translate-x-1/2 z-10 mt-1.5 shrink-0 transition-colors duration-300 group-hover:bg-clay" />

                                    <div className="w-full ml-12">
                                        <div className="rounded-2xl bg-white/80 dark:bg-forest-deep/85 border border-forest/12 dark:border-cream/12 shadow-lg transition-all duration-300 group-hover:border-clay/45 group-hover:shadow-xl overflow-hidden">
                                            {/* Imagen */}
                                            <div className="relative h-56 md:h-64 overflow-hidden">
                                                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                                                    <Image
                                                        src={project.image}
                                                        alt={t(`projects.items.${project.key}.title`)}
                                                        fill
                                                        className="object-cover"
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
                                                    />
                                                </div>
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                                    <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                                                        {t(`projects.items.${project.key}.title`)}
                                                    </h3>
                                                </div>
                                            </div>

                                            {/* Contenido */}
                                            <div className="p-6">
                                                <p className="text-forest/75 dark:text-cream/75 text-sm md:text-base leading-relaxed mb-5">
                                                    {t(`projects.items.${project.key}.description`)}
                                                </p>

                                                {project.isPrivate ? (
                                                    <div className="px-4 py-3 bg-cream-soft/90 dark:bg-forest/40 rounded-xl text-center border border-forest/15 dark:border-cream/15">
                                                        <span className="text-forest/70 dark:text-cream/70 text-sm italic font-medium">
                                                            {t("projects.privateProject")}
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <a
                                                        href={project.codeLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-forest via-clay to-blush text-cream rounded-xl font-bold hover:from-clay hover:via-blush hover:to-mist transition-all shadow-lg hover:shadow-xl"
                                                    >
                                                        {project.linkIcon === "external" ? (
                                                            <FaExternalLinkAlt size={18} className="mr-2" />
                                                        ) : (
                                                            <FaGithub size={18} className="mr-2" />
                                                        )}
                                                        {project.linkText ? t(`projects.${project.linkText}`) : t("projects.viewCode")}
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
