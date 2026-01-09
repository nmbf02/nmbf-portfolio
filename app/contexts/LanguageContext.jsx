"use client";
import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState("en");

    useEffect(() => {
        // Cargar idioma guardado desde localStorage
        const savedLanguage = localStorage.getItem("portfolio-language");
        if (savedLanguage) {
            setLanguage(savedLanguage);
        } else {
            // Detectar idioma del navegador
            const browserLanguage = navigator.language.split("-")[0];
            setLanguage(browserLanguage === "es" ? "es" : "en");
        }
    }, []);

    const changeLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem("portfolio-language", lang);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within LanguageProvider");
    }
    return context;
}

