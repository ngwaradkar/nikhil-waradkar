"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    className?: string;
}

export default function SectionTitle({ title, subtitle, className = "" }: SectionTitleProps) {
    return (
        <div className={`mb-12 ${className}`}>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 mb-4"
            >
                <div className="h-[2px] w-12 bg-neon-blue" />
                <span className="text-neon-blue text-sm font-bold uppercase tracking-[0.2em]">
                    {subtitle || "Section"}
                </span>
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-6xl font-black font-display text-white"
            >
                {title}
            </motion.h2>
        </div>
    );
}
