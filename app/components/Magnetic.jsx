"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/**
 * Magnetic wrapper: the child drifts slightly toward the cursor while hovered.
 * Only reacts to a real mouse (not touch) and respects reduced-motion.
 */
export default function Magnetic({ children, strength = 0.35, className = "" }) {
    const ref = useRef(null);
    const reduce = useReducedMotion();
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.4 });
    const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.4 });

    const onMove = (e) => {
        if (reduce || e.pointerType !== "mouse" || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
    };
    const onLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            style={{ x: sx, y: sy }}
            className={className}
            onPointerMove={onMove}
            onPointerLeave={onLeave}
        >
            {children}
        </motion.div>
    );
}
