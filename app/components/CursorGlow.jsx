"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/**
 * Soft blue glow that follows the mouse across the whole site.
 * Rendered only on devices with a real pointer (hover + fine) and when the
 * user has not asked for reduced motion.
 */
export default function CursorGlow() {
    const reduce = useReducedMotion();
    const [enabled, setEnabled] = useState(false);
    const x = useMotionValue(-600);
    const y = useMotionValue(-600);
    const sx = useSpring(x, { stiffness: 110, damping: 20, mass: 0.5 });
    const sy = useSpring(y, { stiffness: 110, damping: 20, mass: 0.5 });

    useEffect(() => {
        if (reduce) return;
        const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
        if (!mq.matches) return;
        setEnabled(true);
        const move = (e) => {
            x.set(e.clientX - 200);
            y.set(e.clientY - 200);
        };
        window.addEventListener("pointermove", move, { passive: true });
        return () => window.removeEventListener("pointermove", move);
    }, [reduce, x, y]);

    if (!enabled) return null;

    return (
        <motion.div
            aria-hidden="true"
            style={{
                x: sx,
                y: sy,
                background:
                    "radial-gradient(circle, rgba(47,125,225,0.55) 0%, rgba(127,211,232,0.25) 40%, transparent 70%)",
            }}
            className="pointer-events-none fixed left-0 top-0 z-[40] h-[400px] w-[400px] rounded-full opacity-25 dark:opacity-30"
        />
    );
}
