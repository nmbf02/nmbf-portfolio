"use client";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Contact() {
    const { t, lang } = useLanguage();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        project_type: "Security Audit",
    });

    useEffect(() => {
        setFormData(prev => ({ ...prev, project_type: t.contact.services[0] }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lang]);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        const maxLengths = { name: 100, email: 254, message: 2000, phone: 20 };
        const maxLen = maxLengths[name];
        setFormData({ ...formData, [name]: maxLen ? value.slice(0, maxLen) : value });
    };

    const handleProjectType = (type) => {
        setFormData({ ...formData, project_type: type });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            alert(t.contact.alertFill);
            return;
        }

        setIsSubmitting(true);

        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "nmbf_portfolio";
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_lszkn2b";
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "grTOuzwj7OdptYuH3";

        const templateParams = {
            from_name: formData.name,
            reply_to: formData.email,
            phone: formData.phone,
            message: formData.message,
            project_type: formData.project_type,
        };

        try {
            await emailjs.send(serviceID, templateID, templateParams, publicKey);
            setSuccessMessage(t.contact.success);
            setFormData({ name: "", email: "", message: "", project_type: t.contact.services[0] });
        } catch (error) {
            console.error("Error sending message:", error);
            alert(t.contact.alertError);
        }

        setIsSubmitting(false);
    };

    return (
        <section id="Contact" className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 bg-gray-100 dark:bg-black text-black dark:text-white overflow-hidden">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">

                {/* Texto y opciones de proyecto */}
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                        {t.contact.title} <br />
                        {t.contact.titlePrefix}<span className="text-emerald-500">{t.contact.titleHighlight}</span> {t.contact.titleEnd}
                    </h2>

                    <p className="mt-4 font-semibold">{t.contact.servicesLabel}</p>
                    <div className="flex flex-wrap gap-2 sm:gap-3 mt-3">
                        {t.contact.services.map((type) => (
                            <button
                                key={type}
                                type="button"
                                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-gray-400 text-gray-800 dark:text-white text-sm sm:text-base transition-all duration-300 ${
                                    formData.project_type === type
                                        ? "border-emerald-600 text-emerald-600 font-semibold"
                                        : "hover:border-emerald-500 hover:text-emerald-500"
                                }`}
                                onClick={() => handleProjectType(type)}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Formulario */}
                <div className="w-full md:w-1/2 bg-transparent dark:bg-transparent p-4 sm:p-6 rounded-lg shadow-none min-w-0">
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder={t.contact.namePlaceholder}
                            maxLength={100}
                            autoComplete="name"
                            className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder={t.contact.emailPlaceholder}
                            maxLength={254}
                            autoComplete="email"
                            className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder={t.contact.phonePlaceholder}
                            maxLength={20}
                            autoComplete="tel"
                            className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                            value={formData.phone || ""}
                            onChange={handleChange}
                        />
                        <textarea
                            name="message"
                            placeholder={t.contact.messagePlaceholder}
                            maxLength={2000}
                            className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full p-3 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? t.contact.sending : t.contact.submit}
                        </button>

                        {successMessage && (
                            <p className="text-green-500 text-center mt-4">{successMessage}</p>
                        )}
                    </form>

                    {/* Redes sociales */}
                    <div className="flex justify-center space-x-6 mt-6">
                        <a href="https://www.linkedin.com/in/angel-manuel-firpo-estrella-316674116/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaLinkedin size={35} />
                        </a>
                        <a href="https://wa.me/18094788030" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <FaWhatsapp size={35} />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}