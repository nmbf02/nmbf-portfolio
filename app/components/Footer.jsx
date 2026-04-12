"use client";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { useTranslation } from "@/app/hooks/useTranslation";
import { motion } from "framer-motion";

/**
 * Footer
 *
 * - Navigation shortcuts to in-page sections.
 * - Social links.
 * - Theme is handled by Tailwind `dark:` variants in the app (see `globals.css` and Providers).
 */
export default function Footer() {
    const { t } = useTranslation();
    const quote = "“Solo tienes que ser un 1% mejor cada día”";

    const navLinks = [
        { href: "#About", label: t("nav.about") },
        { href: "#Skills", label: t("nav.skills") },
        { href: "#Experience", label: t("nav.experience") },
        { href: "#Contact", label: t("nav.contact") },
    ];

    const socials = [
        { icon: FaGithub, href: "https://github.com/nmbf02", label: "GitHub", color: "hover:text-cream" },
        { icon: FaLinkedin, href: "https://www.linkedin.com/in/nathalyberroa/", label: "LinkedIn", color: "hover:text-mist" },
        { icon: FaTwitter, href: "https://x.com/nmbf02", label: "X", color: "hover:text-mist" },
        { icon: FaInstagram, href: "https://www.instagram.com/nmbf02?igsh=MXJ0b2FkZmRjNGp2cw==", label: "Instagram", color: "hover:text-blush" },
    ];

    return (
        <footer className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-forest-deep via-forest to-forest-deep" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blush/20 rounded-full filter blur-3xl animate-blob" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-mist/15 rounded-full filter blur-3xl animate-blob animation-delay-2000" />

            <div className="container mx-auto relative z-10 px-6 md:px-8 pt-14 pb-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* Izquierda */}
                    <div className="lg:col-span-5">
                        <motion.h2
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-cream via-blush to-mist bg-clip-text text-transparent"
                        >
                            {t("footer.greeting")} <span className="text-cream">{t("footer.name")}</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.08 }}
                            className="mt-5 text-cream/80 italic text-base md:text-lg leading-relaxed"
                        >
                            {quote}
                        </motion.p>
                    </div>

                    {/* Derecha */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-3"
                        >
                            {navLinks.map((l) => (
                                <a
                                    key={l.href}
                                    href={l.href}
                                    className="px-4 py-3 rounded-2xl bg-cream/5 hover:bg-cream/10 border border-cream/15 text-cream/85 hover:text-cream transition"
                                >
                                    <span className="text-sm font-medium">{l.label}</span>
                                </a>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.08 }}
                            className="mt-6 flex flex-wrap gap-3"
                        >
                            {socials.map((s) => (
                                <a
                                    key={s.href}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    title={s.label}
                                    className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-cream/5 hover:bg-cream/10 border border-cream/15 text-cream/70 ${s.color} transition`}
                                >
                                    <s.icon size={20} />
                                </a>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Franja inferior (como C) */}
                <div className="mt-10 pt-6 border-t border-cream/15 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-cream/55">
                    <p>{t("footer.rights")}</p>
                    <p className="text-cream/50">
                        {t("footer.madeWith")}{" "}
                        <span className="text-cream/80">{t("footer.love")}</span> {t("footer.and")}{" "}
                        <span className="text-cream/80">{t("footer.personality")}</span>{" "}
                        {t("footer.by")} <span className="text-cream/80">{t("footer.author")}</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}