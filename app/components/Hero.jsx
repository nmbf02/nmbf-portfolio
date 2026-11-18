"use client";
import Image from "next/image";
import {
    motion,
    useMotionValue,
    useReducedMotion,
    useSpring,
    useTransform,
} from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import Statistics from "@/app/components/Statistics";
import Magnetic from "@/app/components/Magnetic";
import { useTranslation } from "@/app/hooks/useTranslation";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Hero.
 *
 * Layers (back to front): gradient + blobs -> giant name
 * -> cut-out photo -> UI (subtitle + socials). The name sits BEHIND the photo
 * for a magazine-cover depth effect, and every layer moves at a different
 * speed with the mouse (parallax). Intro: letters rise one by one, the photo
 * slides up. All motion is disabled under prefers-reduced-motion.
 */
export default function Hero() {
    const { t } = useTranslation();
    const reduce = useReducedMotion();
    const [mounted, setMounted] = useState(false);
    const sectionRef = useRef(null);

    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const sx = useSpring(mx, { stiffness: 60, damping: 20 });
    const sy = useSpring(my, { stiffness: 60, damping: 20 });
    const nameX = useTransform(sx, (v) => v * -40);
    const nameY = useTransform(sy, (v) => v * -18);
    const photoX = useTransform(sx, (v) => v * 22);
    const photoY = useTransform(sy, (v) => v * 10);
    const glowX = useTransform(sx, (v) => v * 50);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; // Evita errores de hidratación
    }

    const onPointerMove = (e) => {
        if (reduce) return;
        const nx = (e.clientX / window.innerWidth - 0.5) * 2;
        const ny = (e.clientY / window.innerHeight - 0.5) * 2;
        mx.set(nx);
        my.set(ny);
    };

    const intro = (delay) =>
        reduce
            ? { initial: false }
            : {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, delay, ease: EASE },
              };

    // One line of the giant name; each letter rises from below its own mask.
    const renderLine = (text, baseDelay, className) => (
        <div
            aria-hidden="true"
            className={`flex overflow-hidden pb-[0.04em] font-extrabold uppercase tracking-tighter leading-[0.85] text-[min(19vw,15vh)] md:text-[min(15vw,27vh)] ${className}`}
        >
            {text.split("").map((ch, i) => (
                <motion.span
                    key={i}
                    className="inline-block"
                    initial={reduce ? false : { y: "115%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, delay: baseDelay + i * 0.06, ease: EASE }}
                >
                    {ch}
                </motion.span>
            ))}
        </div>
    );

    const socials = [
        { icon: FaGithub, label: "GitHub", href: "https://github.com/nmbf02", color: "hover:text-clay" },
        { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/nathalyberroa/", color: "hover:text-clay" },
        { icon: FaTwitter, label: "X", href: "https://x.com/nmbf02", color: "hover:text-clay" },
        { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/nmbf02?igsh=MXJ0b2FkZmRjNGp2cw==", color: "hover:text-clay" },
    ];

    return (
        <section
            ref={sectionRef}
            onPointerMove={onPointerMove}
            className="relative flex flex-col min-h-screen overflow-hidden"
        >
            {/* Animated gradient background */}
            <div className="absolute inset-0 animated-gradient opacity-20 dark:opacity-10"></div>

            {/* Animated blob shapes */}
            <div className="absolute top-20 -left-20 w-96 h-96 bg-blush rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute top-40 -right-20 w-96 h-96 bg-mist rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-20 left-40 w-96 h-96 bg-clay rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

            <h1 className="sr-only">{t("hero.name")}</h1>

            {/* Stage: name behind, photo in front, UI on top */}
            <div className="relative z-10 flex-1 flex flex-col md:block pt-24 md:pt-0 min-h-[600px] md:min-h-[520px]">
                {/* Giant name */}
                <motion.div
                    style={reduce ? undefined : { x: nameX, y: nameY }}
                    className="relative z-10 md:absolute md:inset-x-0 md:top-[12%]"
                >
                    <div className="container mx-auto px-5 sm:px-8">
                        <motion.div
                            {...intro(0.1)}
                            className="inline-block mb-3 md:mb-5 px-4 py-2 glass rounded-full text-sm font-semibold"
                        >
                            👋 {t("hero.greeting")}
                        </motion.div>
                        {renderLine("Nathaly", 0.25, "text-forest dark:text-cream md:justify-start")}
                        {renderLine("Berroa", 0.55, "text-clay dark:text-blush justify-end md:justify-end")}
                    </div>
                </motion.div>

                {/* Glow behind her */}
                <motion.div
                    aria-hidden="true"
                    style={reduce ? undefined : { x: glowX }}
                    className="pointer-events-none absolute bottom-0 left-1/2 z-[15] hidden md:block h-[70%] aspect-square -translate-x-1/2 rounded-full bg-gradient-to-t from-clay/35 via-blush/25 to-transparent blur-3xl"
                />

                {/* Cut-out photo */}
                <motion.div
                    initial={reduce ? false : { y: "40%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.1, delay: 0.7, ease: EASE }}
                    className="relative z-20 mx-auto -mt-[10vw] md:mt-0 md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 h-[44vh] md:h-[82%] aspect-[2/3]"
                >
                    <motion.div
                        style={reduce ? undefined : { x: photoX, y: photoY }}
                        className="relative h-full w-full"
                    >
                        <Image
                            src="/images/hero-cutout.webp"
                            alt={t("hero.name")}
                            fill
                            priority
                            sizes="(max-width: 768px) 60vw, 480px"
                            className="object-contain object-bottom drop-shadow-2xl"
                        />
                    </motion.div>
                </motion.div>

                {/* Subtitle + socials */}
                <div className="relative z-30 mt-4 md:mt-0 md:absolute md:inset-x-0 md:bottom-8">
                    <div className="container mx-auto px-5 sm:px-8 flex flex-col items-center gap-5 text-center md:flex-row md:items-end md:justify-between md:text-left">
                        <motion.p
                            {...intro(1.1)}
                            className="max-w-xs text-lg md:text-xl lg:text-2xl text-forest/90 dark:text-cream/90 font-medium"
                        >
                            {t("hero.title")}
                        </motion.p>

                        <motion.div {...intro(1.25)} className="flex flex-wrap justify-center gap-3 sm:gap-4">
                            {socials.map((social) => (
                                <Magnetic key={social.label} className="inline-block">
                                    <motion.a
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        whileHover={{ scale: 1.15, rotate: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`block p-3 glass rounded-full text-forest dark:text-cream ${social.color} transition-colors duration-300 glow-hover`}
                                    >
                                        <social.icon size={24} />
                                    </motion.a>
                                </Magnetic>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Sección inferior con estadísticas y tecnologías */}
            <motion.div
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="relative z-30 w-full py-6 md:py-8 glass border-t border-forest/10 dark:border-cream/15"
            >
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-5 sm:px-8">
                    {/* Estadísticas */}
                    <Statistics />

                    {/* Logos de tecnologías con animación */}
                    <div className="flex gap-3 sm:gap-4 md:gap-6 md:ml-auto">
                        {["javascript", "typescript", "css3", "react", "php"].map((tech) => (
                            <motion.div
                                key={tech}
                                whileHover={{ scale: 1.2, y: -5 }}
                                className="p-1.5 sm:p-2 glass rounded-lg"
                            >
                                <Image src={`/icons/${tech}.svg`} alt={tech.toUpperCase()} width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
