import { useLanguage } from "@/app/contexts/LanguageContext";
import enTranslations from "@/app/translations/en.json";
import esTranslations from "@/app/translations/es.json";

const translations = {
    en: enTranslations,
    es: esTranslations,
};

export function useTranslation() {
    const { language } = useLanguage();

    const t = (key) => {
        const keys = key.split(".");
        let value = translations[language];

        for (const k of keys) {
            value = value?.[k];
        }

        return value || key;
    };

    return { t, language };
}

