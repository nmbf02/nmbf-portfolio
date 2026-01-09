"use client";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { useTranslation } from "@/app/hooks/useTranslation";
import { motion } from "framer-motion";

export default function Footer() {
    const { t } = useTranslation();
    
    return (
        <footer className="relative py-12 text-center overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/50 to-gray-900"></div>
            
            {/* Animated shapes */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-blob"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
            
            <div className="container mx-auto relative z-10">
                {/* Logo or name */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
                >
                    {t("footer.greeting")} <span className="font-extrabold">{t("footer.name")}</span>
                </motion.h2>

                {/* Custom message */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-4 text-base text-gray-300"
                >
                    {t("footer.madeWith")} <span className="text-red-400 font-bold">{t("footer.love")}</span> {t("footer.and")}{" "}
                    <span className="text-pink-400 font-bold">{t("footer.personality")}</span> {t("footer.by")}{" "}
                    <span className="font-bold text-purple-400">{t("footer.author")}</span>
                </motion.p>

                {/* Copyright */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-6 text-sm text-gray-500"
                >
                    {t("footer.rights")}
                </motion.p>

                {/* Social media icons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="flex justify-center space-x-6 mt-8"
                >
                    {[
                        { icon: FaGithub, href: "https://github.com/nmbf02", color: "hover:text-gray-300" },
                        { icon: FaLinkedin, href: "https://www.linkedin.com/in/nathalyberroa/", color: "hover:text-blue-400" },
                        { icon: FaTwitter, href: "https://x.com/nmbf02", color: "hover:text-blue-300" },
                        { icon: FaInstagram, href: "https://www.instagram.com/nmbf02?igsh=MXJ0b2FkZmRjNGp2cw==", color: "hover:text-pink-400" },
                    ].map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, y: -5 }}
                            whileTap={{ scale: 0.9 }}
                            className={`p-3 glass rounded-full text-gray-400 ${social.color} transition-all duration-300 glow-hover`}
                        >
                            <social.icon size={24} />
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </footer>
    );
}