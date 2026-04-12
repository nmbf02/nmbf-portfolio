"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { useTranslation } from "@/app/hooks/useTranslation";
import { motion } from "framer-motion";

export default function Contact() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        project_type: t("contact.projectTypes.ecommerce"),
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleProjectType = (type) => {
        setFormData({ ...formData, project_type: type });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            alert(t("contact.fillFields"));
            return;
        }

        setIsSubmitting(true);

        const serviceID = "nmbf_portfolio";
        const templateID = "template_lszkn2b";
        const publicKey = "grTOuzwj7OdptYuH3";

        const templateParams = {
            from_name: formData.name,
            reply_to: formData.email,
            phone: formData.phone,
            message: formData.message,
            project_type: formData.project_type,
        };

        try {
            await emailjs.send(serviceID, templateID, templateParams, publicKey);
            setSuccessMessage(t("contact.success"));
            setFormData({ name: "", email: "", message: "", project_type: t("contact.projectTypes.ecommerce") });
        } catch (error) {
            console.error("Error sending message:", error);
            alert(t("contact.error"));
        }

        setIsSubmitting(false);
    };

    return (
        <section id="Contact" className="relative py-24 px-8 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blush/20 via-cream to-mist/20 dark:from-forest-deep dark:via-forest dark:to-forest-deep"></div>
            
            {/* Animated shapes */}
            <div className="absolute top-10 left-10 w-96 h-96 bg-blush/70 dark:bg-blush/25 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-clay/50 dark:bg-clay/20 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>

            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start relative z-10">
                {/* Texto y opciones de proyecto */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2 mb-12 md:mb-0"
                >
                    <div className="inline-block mb-4 px-4 py-2 glass rounded-full text-sm font-semibold text-clay dark:text-blush">
                        💬 {t("contact.title")}
                    </div>
                    <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blush via-clay to-forest bg-clip-text text-transparent">
                        {t("contact.title")} <br />
                        {t("contact.title2")} <span className="text-clay dark:text-blush">{t("contact.titleHighlight")}</span> {t("contact.title3")}
                    </h2>

                    <p className="mt-6 text-lg font-semibold text-forest/85 dark:text-cream/85">{t("contact.interested")}</p>
                    <div className="flex flex-wrap gap-3 mt-4">
                        {[
                            t("contact.projectTypes.ecommerce"),
                            t("contact.projectTypes.mobile"),
                            t("contact.projectTypes.landing"),
                            t("contact.projectTypes.portfolio"),
                            t("contact.projectTypes.blog"),
                            t("contact.projectTypes.other")
                        ].map((type) => (
                            <motion.button
                                key={type}
                                type="button"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-4 py-2 rounded-lg glass transition-all duration-300 ${
                                    formData.project_type === type
                                        ? "bg-gradient-to-r from-clay to-blush text-cream font-semibold glow"
                                        : "text-forest/85 dark:text-cream/80 hover:bg-white/25 dark:hover:bg-cream/10"
                                }`}
                                onClick={() => handleProjectType(type)}
                            >
                                {type}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Formulario */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2 glass p-8 rounded-2xl backdrop-blur-xl"
                >
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder={t("contact.name")}
                            className="w-full p-4 border-2 border-forest/10 dark:border-cream/15 rounded-xl glass focus:border-clay focus:outline-none focus:ring-2 focus:ring-blush/40 transition-all text-forest dark:text-cream placeholder:text-forest/45 dark:placeholder:text-cream/45"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder={t("contact.email")}
                            className="w-full p-4 border-2 border-forest/10 dark:border-cream/15 rounded-xl glass focus:border-clay focus:outline-none focus:ring-2 focus:ring-blush/40 transition-all text-forest dark:text-cream placeholder:text-forest/45 dark:placeholder:text-cream/45"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder={t("contact.phone")}
                            className="w-full p-4 border-2 border-forest/10 dark:border-cream/15 rounded-xl glass focus:border-clay focus:outline-none focus:ring-2 focus:ring-blush/40 transition-all text-forest dark:text-cream placeholder:text-forest/45 dark:placeholder:text-cream/45"
                            value={formData.phone || ""}
                            onChange={handleChange}
                        />
                        <textarea
                            name="message"
                            placeholder={t("contact.message")}
                            className="w-full p-4 border-2 border-forest/10 dark:border-cream/15 rounded-xl glass focus:border-clay focus:outline-none focus:ring-2 focus:ring-blush/40 transition-all resize-none text-forest dark:text-cream placeholder:text-forest/45 dark:placeholder:text-cream/45"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full p-4 bg-gradient-to-r from-forest to-clay text-cream rounded-xl font-semibold hover:from-clay hover:to-blush transition-all glow-hover disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? t("contact.sending") : t("contact.submit")}
                        </motion.button>

                        {successMessage && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-green-500 text-center mt-4 font-semibold"
                            >
                                {successMessage}
                            </motion.p>
                        )}
                    </form>

                    {/* Redes sociales */}
                    <div className="flex justify-center space-x-6 mt-6">
                        <a href="https://www.linkedin.com/in/nathalyberroa/" target="_blank" className="text-forest/70 hover:text-mist dark:text-cream/70 dark:hover:text-mist">
                            <FaLinkedin size={35} />
                        </a>
                        <a href="https://x.com/nmbf02" target="_blank" className="text-forest/70 hover:text-mist dark:text-cream/70 dark:hover:text-mist">
                            <FaTwitter size={35} />
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}