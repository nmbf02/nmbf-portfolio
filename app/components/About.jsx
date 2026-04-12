"use client";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "@/app/hooks/useTranslation";
import { useEffect, useMemo, useRef, useState } from "react";

/**
 * About section ("Sobre mí").
 *
 * - Renders the about description with an editorial/newspaper look.
 * - Applies a typewriter effect that replays every time the paragraph
 *   re-enters the viewport (reset on exit, start on enter).
 * - The caret blink is driven by `.typewriter-caret` in `app/globals.css`.
 */
export default function About() {
    const { t } = useTranslation();
    const description = t("about.description");
    const fullText = useMemo(() => description, [description]);
    const [typed, setTyped] = useState("");
    const [done, setDone] = useState(false);
    const textRef = useRef(null);
    const inView = useInView(textRef, { once: false, amount: 0.6 });
    const intervalRef = useRef(null);

    useEffect(() => {
        // Reset on exit so it can replay on next enter.
        if (!inView) {
            if (intervalRef.current) window.clearInterval(intervalRef.current);
            intervalRef.current = null;
            setTyped("");
            setDone(false);
            return;
        }

        if (intervalRef.current) return;
        setTyped("");
        setDone(false);

        let i = 0;
        const speedMs = 16;
        intervalRef.current = window.setInterval(() => {
            i += 1;
            setTyped(fullText.slice(0, i));
            if (i >= fullText.length) {
                if (intervalRef.current) window.clearInterval(intervalRef.current);
                intervalRef.current = null;
                setDone(true);
            }
        }, speedMs);

        return () => {
            if (intervalRef.current) window.clearInterval(intervalRef.current);
            intervalRef.current = null;
        };
    }, [inView, fullText]);

    return (
        <section id="About" className="relative w-full py-24 px-8 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream-soft to-mist/25 dark:from-forest-deep dark:via-forest dark:to-forest-deep"></div>
            
            {/* Animated shapes */}
            <div className="absolute top-10 right-10 w-72 h-72 bg-blush/80 dark:bg-blush/30 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob"></div>
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-mist/80 dark:bg-mist/25 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
            
            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-center"
                >
                    {/* Look "periódico antiguo" */}
                    <div className="mx-auto max-w-4xl">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <span className="h-px w-16 bg-forest/20 dark:bg-cream/20" />
                            <span className="text-xs uppercase tracking-[0.35em] text-forest/70 dark:text-cream/70 font-serif">
                                {t("about.title")}
                            </span>
                            <span className="h-px w-16 bg-forest/20 dark:bg-cream/20" />
                        </div>

                        <p
                            ref={textRef}
                            className="font-serif text-[1.05rem] md:text-lg text-forest dark:text-cream leading-8 md:leading-9 tracking-wide"
                        >
                            {typed}
                            {!done && (
                                <span
                                    className="typewriter-caret text-forest dark:text-cream"
                                    aria-hidden="true"
                                >
                                    |
                                </span>
                            )}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}