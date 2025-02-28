"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        project_type: "Ecommerce Website", // Valor por defecto
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
            alert("Please fill out all fields.");
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
            setSuccessMessage("Message sent successfully!");
            setFormData({ name: "", email: "", message: "", project_type: "Ecommerce Website" });
        } catch (error) {
            console.error("Error sending message:", error);
            alert("An error occurred. Please try again later.");
        }

        setIsSubmitting(false);
    };

    return (
        <section className="py-16 px-8 bg-purple-100 dark:bg-black text-black dark:text-white">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">

                {/* Texto y opciones de proyecto */}
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <h2 className="text-4xl font-bold">
                        Let’s discuss <br />
                        on something <span className="text-purple-600">cool</span> together
                    </h2>

                    <p className="mt-4 font-semibold">I'm interested in ..</p>
                    <div className="flex flex-wrap gap-3 mt-3">
                        {["Ecommerce Website", "App Mobile", "Landing Page", "Portfolio", "Blog Website", "Other"].map((type) => (
                            <button
                                key={type}
                                type="button"
                                className={`px-4 py-2 rounded-lg border border-gray-400 text-gray-800 dark:text-white transition-all duration-300 ${
                                    formData.project_type === type
                                        ? "border-purple-600 text-purple-600 font-semibold"
                                        : "hover:border-purple-500 hover:text-purple-500"
                                }`}
                                onClick={() => handleProjectType(type)}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Formulario */}
                <div className="w-full md:w-1/2 bg-transparent dark:bg-transparent p-6 rounded-lg shadow-none">
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Your phone number"
                            className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                            value={formData.phone || ""}
                            onChange={handleChange}
                        />
                        <textarea
                            name="message"
                            placeholder="Your message"
                            className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full p-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Sending..." : "Submit"}
                        </button>

                        {successMessage && (
                            <p className="text-green-500 text-center mt-4">{successMessage}</p>
                        )}
                    </form>

                    {/* Redes sociales */}
                    <div className="flex justify-center space-x-6 mt-6">
                        <a href="https://www.linkedin.com/in/nathalyberroa/" target="_blank" className="hover:text-gray-400">
                            <FaLinkedin size={35} />
                        </a>
                        <a href="https://x.com/nmbf02" target="_blank" className="hover:text-gray-400">
                            <FaTwitter size={35} />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}