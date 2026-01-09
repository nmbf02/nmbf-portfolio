"use client";
import CountUp from "react-countup";
import { useTranslation } from "@/app/hooks/useTranslation";

const Statistics = () => {
    const { t } = useTranslation();
    
    return (
        <div className="flex space-x-16 pl-0 md:pl-0">
            {/* Bloque 1 */}
            <div className="flex items-center text-xl">
        <span className="text-5xl font-bold text-purple-500">
          <CountUp start={0} end={2} duration={2} />
        </span>
                <p className="ml-3 text-gray-400">{t("statistics.years")}</p>
            </div>

            {/* Bloque 2 */}
            <div className="flex items-center text-xl">
        <span className="text-5xl font-bold text-purple-500">
          <CountUp start={0} end={28} duration={3} />
        </span>
                <p className="ml-3 text-gray-400">{t("statistics.projects")}</p>
            </div>
        </div>
    );
};

export default Statistics;
