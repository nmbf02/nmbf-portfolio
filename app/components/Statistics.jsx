"use client";
import CountUp from "react-countup";
import { useLanguage } from "@/app/context/LanguageContext";

const Statistics = () => {
    const { t } = useLanguage();
    return (
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 md:gap-12">
            <div className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-500">
                    <CountUp start={0} end={6} duration={2} />
                </span>
                <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">{t.stats.years}</p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-500">
                    <CountUp start={0} end={10} duration={3} />
                </span>
                <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">{t.stats.certifications}</p>
            </div>
        </div>
    );
};

export default Statistics;
