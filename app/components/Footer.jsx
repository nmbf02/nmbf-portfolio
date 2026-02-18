"use client";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();
    return (
        <footer className="bg-gray-900 text-white py-6 sm:py-8 px-4 sm:px-6 text-center transition-all duration-300 border-t border-gray-800 overflow-hidden">
            <div className="container mx-auto">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                    <span className="font-semibold">Angel Manuel Firpo Estrella</span>
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-gray-400">
                    {t.footer.subtitle}
                </p>
                <p className="mt-1 text-xs sm:text-sm break-words">
                    Santiago de los Caballeros •{" "}
                    <a href="mailto:manuelfirpo2222@gmail.com" className="text-emerald-400 hover:text-emerald-300">
                        manuelfirpo2222@gmail.com
                    </a> •{" "}
                    <a href="tel:8094788030" className="text-emerald-400 hover:text-emerald-300">
                        +1 (809) 478-8030
                    </a>
                </p>

                <p className="mt-4 text-xs text-gray-500">
                    © 2025 Angel Manuel Firpo Estrella. {t.footer.rights}
                </p>

                <div className="flex justify-center gap-4 sm:gap-6 mt-4">
                    <a href="https://www.linkedin.com/in/angel-manuel-firpo-estrella-316674116/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition" title="LinkedIn">
                        <FaLinkedin size={28} />
                    </a>
                    <a href="https://wa.me/18094788030" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition" title="WhatsApp">
                        <FaWhatsapp size={28} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
